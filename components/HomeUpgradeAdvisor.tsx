'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getUTMParams, generateEventId, getStagingAwareTags, submitLead, fireMetaPixelLead } from '@/lib/lead-submit';
import { advisorTranslations } from '@/lib/i18n/content';

// Rule-based recommendation engine for GHL Lead Triage
const generateAdvisorRecommendation = (data: any, isSpanish: boolean) => {
  let recommendation = isSpanish ? "Consulta de Mejoras para el Hogar" : "Home Upgrade Consultation";
  let ghlWorkflow = "contact_workflow";
  const tags = ["newera_home_upgrade_advisor"];
  if (isSpanish) tags.push("newera_home_upgrade_advisor_es");

  if (data.serviceInterest === 'Solar') {
    if (data.roofAge === '15+ years' || data.roofAge === 'Más de 15 años' || data.roofAge === '15+ años') {
      recommendation = isSpanish ? "Evaluación Solar + Revisión de Preparación de Techo" : "Solar Assessment + Roof Readiness Review";
      tags.push("solar_roof_readiness_review", "newera_solar_lead");
    } else if (data.electricBill === '$250–$400' || data.electricBill === '$400+' || data.electricBill === 'Más de $200' || data.electricBill === '$250 - $400') {
      recommendation = isSpanish ? "Consulta Solar Prioritaria" : "Priority Solar Consultation";
      tags.push("newera_solar_lead", "high_intent_lead");
    } else {
      recommendation = isSpanish ? "Evaluación Solar General" : "General Solar Assessment";
      tags.push("newera_solar_lead");
    }
    ghlWorkflow = "solar_consultation_workflow";
  } else if (data.serviceInterest === 'Roofing') {
    recommendation = isSpanish ? "Revisión Profesional de Integridad de Techo" : "Professional Roof Integrity Review";
    tags.push("newera_roofing_lead");
    ghlWorkflow = "roofing_workflow";
  } else if (data.serviceInterest === 'Water Purification') {
    recommendation = isSpanish ? "Prueba de Calidad de Agua Bilingüe" : "Bilingual Water Quality Test";
    tags.push("newera_water_lead");
    ghlWorkflow = "water_consultation_workflow";
  } else {
    // Help Me Decide / Not Sure
    tags.push("newera_general_inquiry");
  }

  return {
    recommendedNextStep: recommendation,
    ghlWorkflow: ghlWorkflow,
    tags: tags,
    advisorSummary: isSpanish
      ? `Dueño de casa ${data.name} interesado en ${data.serviceInterest}. ZIP: ${data.zipCode}. Propietario: ${data.homeowner}. Factura de luz: ${data.electricBill || 'N/A'}, Edad del techo: ${data.roofAge || 'N/A'}, Necesidad del techo: ${data.roofingHelp || 'N/A'}, Preocupación de agua: ${data.waterConcern || 'N/A'}. Contactar por ${data.preferredContact} a la(s) ${data.bestTime}.`
      : `Homeowner ${data.name} is interested in ${data.serviceInterest}. ZIP Code: ${data.zipCode}. homeowner status: ${data.homeowner}. Electric Bill: ${data.electricBill || 'N/A'}, Roof Age: ${data.roofAge || 'N/A'}, Roofing Need: ${data.roofingHelp || 'N/A'}, Water Concern: ${data.waterConcern || 'N/A'}. Preferred: ${data.preferredContact} during ${data.bestTime}.`
  };
};

export function HomeUpgradeAdvisor({ 
  initialService, 
  onServiceClear 
}: { 
  initialService?: string; 
  onServiceClear?: () => void; 
}) {
  const [step, setStep] = useState(0);
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');
  const t = isSpanish ? advisorTranslations.es : advisorTranslations.en;

  const [formData, setFormData] = useState({
    serviceInterest: '',
    homeowner: '',
    zipCode: '',
    electricBill: '',
    roofAge: '',
    roofingHelp: '',
    waterConcern: '',
    preferredContact: '',
    bestTime: '',
    name: '',
    phone: '',
    email: '',
    honeypot: '',
  });

  const [result, setResult] = useState<any>(null);

  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceInterest: initialService }));
      // Set step to 1 (ZIP) directly when pre-selected from a service page
      setStep(1);
    }
  }, [initialService]);

  const startAdvisor = () => {
    console.log(isSpanish ? 'advisor_started_es' : 'advisor_started');
    setStep(1);
  };

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    nextStep(field, value);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (fieldChanged?: string, value?: string) => {
    const currentService = fieldChanged === 'serviceInterest' ? value : formData.serviceInterest;
    
    if (step === 0) setStep(1); // Welcome -> ZIP
    else if (step === 1) setStep(2); // ZIP -> Name
    else if (step === 2) setStep(3); // Name -> Service
    else if (step === 3) setStep(4); // Service -> Homeowner
    else if (step === 4) {
      // Homeowner -> Service-specific questions
      if (currentService === 'Solar') setStep(5);
      else if (currentService === 'Roofing') setStep(7);
      else if (currentService === 'Water Purification') setStep(8);
      else setStep(9); // Not sure -> Email/Phone
    }
    else if (step === 5) setStep(6); // Solar Bill -> Solar Roof Age
    else if (step === 6) setStep(9); // Solar Roof Age -> Email/Phone
    else if (step === 7) setStep(9); // Roofing Help -> Email/Phone
    else if (step === 8) setStep(9); // Water Concern -> Email/Phone
    else if (step === 9) setStep(10); // Email/Phone -> Prefs
    else if (step === 10) setStep(11); // Prefs -> Best time
    else if (step === 11) {
      // Best time -> submit
      submitForm();
    }
  };

  const submitForm = async () => {
    console.log(isSpanish ? 'advisor_completed_es' : 'advisor_completed');

    // Honeypot bot protection check
    if (formData.honeypot) {
      console.warn('advisor_bot_blocked_via_honeypot');
      setResult({
        recommendedNextStep: isSpanish ? "Consulta de Mejoras para el Hogar" : "Home Upgrade Consultation",
        tags: ["newera_home_upgrade_advisor"],
        advisorSummary: "Bot submission caught."
      });
      setStep(12);
      return;
    }
    
    const analysis = generateAdvisorRecommendation(formData, isSpanish);
    setResult(analysis);

    // Split First and Last Name
    const nameParts = formData.name.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const utms = getUTMParams();
    const eventId = generateEventId('Lead');

    const ghlPayload = {
      firstName,
      lastName,
      phone: formData.phone,
      email: formData.email,
      postalCode: formData.zipCode,
      serviceInterest: formData.serviceInterest,
      electricBillMonthly: formData.electricBill || 'N/A',
      roofAge: formData.roofAge || 'N/A',
      roofingNeed: formData.roofingHelp || 'N/A',
      waterConcern: formData.waterConcern || 'N/A',
      recommendedNextStep: analysis.recommendedNextStep,
      preferredContactMethod: formData.preferredContact,
      bestContactTime: formData.bestTime,
      advisorSummary: analysis.advisorSummary,
      tags: getStagingAwareTags(analysis.tags),
      pageUrl: utms.pageUrl,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      eventId: eventId,
      timestamp: new Date().toISOString(),
      language: isSpanish ? 'es' : 'en',
      sourcePage: pathname
    };

    console.log('ghl_payload_prepared', ghlPayload);
    try {
      const result = await submitLead(ghlPayload);
      if (result.ok) {
        console.log('lead_form_submitted', { eventId, status: 'success' });
        fireMetaPixelLead(eventId, 'Home Upgrades', 50.00);
      }
    } catch (err) {
      console.error('lead_submission_failed', err);
    }

    setStep(12);
  };

  const renderStepContent = () => {
    switch(step) {
      case 0:
        return (
          <div className="text-center py-6">
            <h3 className="font-poppins font-bold text-2xl text-[#14324b] mb-4">{t.title}</h3>
            <p className="text-[#4e5257] font-sans text-sm mb-8 max-w-md mx-auto">
              {t.desc}
            </p>
            <button 
              onClick={startAdvisor}
              className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] hover:shadow-[0_8px_30px_rgba(255,87,34,0.3)] transition-all cursor-pointer font-sans"
            >
              {t.startBtn}
            </button>
          </div>
        );
      case 1: // ZIP Code (First)
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">
              {isSpanish ? "¿Cuál es su código postal?" : "What is your ZIP code?"}
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                name="zipCode" 
                value={formData.zipCode} 
                onChange={handleInput} 
                placeholder="e.g. 33101" 
                maxLength={5}
                className="flex-grow p-4 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722]"
              />
              <button 
                onClick={() => formData.zipCode.length >= 5 && nextStep()}
                disabled={formData.zipCode.length < 5}
                className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold disabled:opacity-50 hover:bg-[#e04a1b] transition-colors cursor-pointer"
              >
                {t.nextBtn}
              </button>
            </div>
          </div>
        );
      case 2: // Full Name (Second)
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">
              {isSpanish ? "¿Cuál es su nombre completo?" : "What is your full name?"}
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                name="name" 
                value={formData.name} 
                onChange={handleInput} 
                placeholder={t.contactName}
                className="flex-grow p-4 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722]"
              />
              <button 
                onClick={() => formData.name.trim().length > 1 && nextStep()}
                disabled={formData.name.trim().length <= 1}
                className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold disabled:opacity-50 hover:bg-[#e04a1b] transition-colors cursor-pointer"
              >
                {t.nextBtn}
              </button>
            </div>
          </div>
        );
      case 3: // Service Interest (Third)
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">
              {isSpanish ? "¿Qué servicio le interesa explorar?" : "What service are you interested in?"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: isSpanish ? 'Solar' : 'Solar', val: 'Solar' },
                { label: isSpanish ? 'Techos' : 'Roofing', val: 'Roofing' },
                { label: isSpanish ? 'Purificación de Agua' : 'Water Purification', val: 'Water Purification' },
                { label: isSpanish ? 'No estoy seguro / Ayúdenme a decidir' : 'Not Sure / Help Me Decide', val: 'Not Sure' }
              ].map(opt => (
                <button key={opt.val} onClick={() => handleSelect('serviceInterest', opt.val)} className="border border-[#E2E8F0] p-4 rounded-xl text-left font-bold text-[#14324b] hover:bg-[#F9FAFB] hover:border-[#ff5722] transition-colors cursor-pointer">
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );
      case 4: // Homeowner status (Qualifying Q1)
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">{t.stepHomeownerQ}</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: t.yes, val: 'Yes' },
                { label: t.no, val: 'No' },
                { label: isSpanish ? 'Estoy ayudando a otra persona' : "I'm helping someone else", val: 'Helping' }
              ].map(opt => (
                <button key={opt.val} onClick={() => handleSelect('homeowner', opt.val)} className="border border-[#E2E8F0] p-4 rounded-xl text-left font-bold text-[#14324b] hover:bg-[#F9FAFB] hover:border-[#ff5722] transition-colors cursor-pointer">
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );
      case 5: // Solar Bill (Qualifying Q2 for Solar)
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">{t.stepBillQ}</h3>
            <div className="flex flex-col gap-3">
              {[
                { label: isSpanish ? 'Menos de $150' : 'Under $150', val: 'Under $150' },
                { label: '$150 – $250', val: '$150–$250' },
                { label: '$250 – $400', val: '$250–$400' },
                { label: isSpanish ? 'Más de $400' : 'Over $400', val: '$400+' }
              ].map(opt => (
                <button key={opt.val} onClick={() => handleSelect('electricBill', opt.val)} className="border border-[#E2E8F0] p-4 rounded-xl text-left font-bold text-[#14324b] hover:bg-[#F9FAFB] hover:border-[#ff5722] transition-colors cursor-pointer">
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );
      case 6: // Solar Roof Age (Qualifying Q3 for Solar)
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">
              {isSpanish ? "¿Conoce la antigüedad de su techo?" : "Do you know the age of your roof?"}
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: isSpanish ? 'Menos de 5 años' : 'Under 5 years', val: 'Under 5 years' },
                { label: isSpanish ? '5 – 10 años' : '5 – 10 years', val: '5–10 years' },
                { label: isSpanish ? '10 – 15 años' : '10 – 15 years', val: '10–15 years' },
                { label: isSpanish ? 'Más de 15 años' : '15+ years', val: '15+ years' },
                { label: isSpanish ? 'No estoy seguro' : 'Not sure', val: 'Not sure' }
              ].map(opt => (
                <button key={opt.val} onClick={() => handleSelect('roofAge', opt.val)} className="border border-[#E2E8F0] p-4 rounded-xl text-left font-bold text-[#14324b] hover:bg-[#F9FAFB] hover:border-[#ff5722] transition-colors cursor-pointer">
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );
      case 7: // Roofing Help (Qualifying Q2 for Roofing)
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">
              {isSpanish ? "¿Con qué necesita ayuda?" : "What do you need help with?"}
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: isSpanish ? 'Inspección' : 'Inspection', val: 'Inspection' },
                { label: isSpanish ? 'Reparación' : 'Repair', val: 'Repair' },
                { label: isSpanish ? 'Reemplazo' : 'Replacement', val: 'Replacement' },
                { label: isSpanish ? 'Revisión de preparación para solar' : 'Solar-readiness review', val: 'Solar-readiness review' },
                { label: isSpanish ? 'No estoy seguro' : 'Not sure', val: 'Not sure' }
              ].map(opt => (
                <button key={opt.val} onClick={() => handleSelect('roofingHelp', opt.val)} className="border border-[#E2E8F0] p-4 rounded-xl text-left font-bold text-[#14324b] hover:bg-[#F9FAFB] hover:border-[#ff5722] transition-colors cursor-pointer">
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );
      case 8: // Water Concern (Qualifying Q2 for Water)
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">
              {isSpanish ? "¿Cuál es su principal preocupación?" : "What is your main concern?"}
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: isSpanish ? 'Sabor / Olor' : 'Taste / Odor', val: 'Taste / Odor' },
                { label: isSpanish ? 'Agua dura / Acumulación de sarro' : 'Hard water', val: 'Hard water' },
                { label: isSpanish ? 'Manchas en platos o ropa' : 'Staining', val: 'Staining' },
                { label: isSpanish ? 'Purificación general' : 'General purification', val: 'General purification' },
                { label: isSpanish ? 'No estoy seguro' : 'Not sure', val: 'Not sure' }
              ].map(opt => (
                <button key={opt.val} onClick={() => handleSelect('waterConcern', opt.val)} className="border border-[#E2E8F0] p-4 rounded-xl text-left font-bold text-[#14324b] hover:bg-[#F9FAFB] hover:border-[#ff5722] transition-colors cursor-pointer">
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );
      case 9: // Contact Info (Email & Phone)
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">
              {isSpanish ? "Por favor ingrese su información de contacto:" : "Please enter your contact details:"}
            </h3>
            <div className="flex flex-col gap-4">
              <input 
                name="phone" 
                value={formData.phone} 
                onChange={handleInput} 
                placeholder={t.contactPhone} 
                className="p-4 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722]" 
              />
              <input 
                name="email" 
                value={formData.email} 
                onChange={handleInput} 
                placeholder={isSpanish ? "Correo Electrónico" : "Email Address"} 
                className="p-4 rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722]" 
              />
              
              {/* Honeypot field for bot protection */}
              <input 
                name="honeypot" 
                value={formData.honeypot} 
                onChange={handleInput} 
                className="absolute opacity-0 pointer-events-none" 
                tabIndex={-1} 
                autoComplete="off" 
                placeholder="Do not fill this field" 
              />
              
              <button 
                onClick={() => formData.phone && formData.email && nextStep()}
                disabled={!formData.phone || !formData.email}
                className="mt-2 bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold disabled:opacity-50 hover:bg-[#e04a1b] transition-colors cursor-pointer"
              >
                {t.nextBtn}
              </button>
            </div>
          </div>
        );
      case 10: // Preferred Contact Method
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">
              {isSpanish ? "Método de contacto de su preferencia:" : "Preferred contact method:"}
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: isSpanish ? 'Llamada' : 'Call', val: 'Call' },
                { label: isSpanish ? 'Mensaje de Texto' : 'Text', val: 'Text' },
                { label: isSpanish ? 'Correo Electrónico' : 'Email', val: 'Email' }
              ].map(opt => (
                <button key={opt.val} onClick={() => handleSelect('preferredContact', opt.val)} className="border border-[#E2E8F0] p-4 rounded-xl text-left font-bold text-[#14324b] hover:bg-[#F9FAFB] hover:border-[#ff5722] transition-colors cursor-pointer">
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );
      case 11: // Best time to contact
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-6">
              {isSpanish ? "Mejor momento para contactarle:" : "Best time to contact:"}
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: isSpanish ? 'Mañana' : 'Morning', val: 'Morning' },
                { label: isSpanish ? 'Tarde' : 'Afternoon', val: 'Afternoon' },
                { label: isSpanish ? 'Noche' : 'Evening', val: 'Evening' }
              ].map(opt => (
                <button key={opt.val} onClick={() => handleSelect('bestTime', opt.val)} className="border border-[#E2E8F0] p-4 rounded-xl text-left font-bold text-[#14324b] hover:bg-[#F9FAFB] hover:border-[#ff5722] transition-colors cursor-pointer">
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        );
      case 12: // Results / Confirmation
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-center py-6">
            <div className="w-16 h-16 bg-[#F9FAFB] text-[#ff5722] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-poppins font-bold text-2xl text-[#14324b] mb-2">
              {isSpanish ? `¡Gracias, ${formData.name.split(' ')[0]}!` : `Thank You, ${formData.name.split(' ')[0]}!`}
            </h3>
            <p className="text-[#4e5257] font-sans text-sm mb-6 max-w-sm mx-auto leading-relaxed">
              {isSpanish ? "Hemos recibido sus datos y registrado su perfil para programar su llamada." : "We have received your details and registered your profile to schedule your call."}
            </p>
            
            <div className="bg-[#ff572220]/20 border border-[#ff572220] p-6 rounded-2xl mb-8">
              <span className="text-[10px] font-bold uppercase text-[#ff5722] tracking-widest mb-1 block">
                {isSpanish ? "Acción Recomendada" : "Recommended Action"}
              </span>
              <h4 className="font-poppins font-bold text-xl text-[#14324b]">{result?.recommendedNextStep}</h4>
            </div>

            <p className="text-[#4e5257] font-sans text-sm mb-6">
              {isSpanish ? (
                `Nuestro equipo le contactará por ${formData.preferredContact === 'Call' ? 'llamada telefónica' : formData.preferredContact === 'Text' ? 'mensaje de texto' : 'correo electrónico'} durante la ${formData.bestTime === 'Morning' ? 'mañana' : formData.bestTime === 'Afternoon' ? 'tarde' : 'noche'} para brindarle toda la información.`
              ) : (
                `Our team will reach out to you via ${formData.preferredContact.toLowerCase()} during the ${formData.bestTime.toLowerCase()} to send you more details and confirm your consultation.`
              )}
            </p>

            <button 
              onClick={() => { setStep(0); setFormData({
                serviceInterest: '', homeowner: '', zipCode: '', electricBill: '', roofAge: '',
                roofingHelp: '', waterConcern: '', preferredContact: '', bestTime: '', name: '', phone: '', email: '', honeypot: ''
              }); setResult(null); if (onServiceClear) onServiceClear(); }}
              className="text-[#14324b] font-bold text-sm underline underline-offset-4 decoration-[#e5e5e5] hover:decoration-[#ff5722] transition-colors cursor-pointer"
            >
              {isSpanish ? "Reiniciar Asesor" : "Start Over"}
            </button>
          </div>
        );
    }
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] max-w-2xl mx-auto w-full my-8">
      {step > 0 && step < 12 && (
        <div className="mb-8">
          <div className="h-1.5 w-full bg-[#F9FAFB] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#ff5722] transition-all duration-500 rounded-full"
              style={{ width: `${(step / 11) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-[#4e5257] mt-2 font-bold uppercase tracking-widest text-right">
            {isSpanish ? `Paso ${step} de 11` : `Step ${step} of 11`}
          </p>
        </div>
      )}
      
      {renderStepContent()}
    </div>
  );
}
