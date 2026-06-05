'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gift, CheckCircle, Send } from 'lucide-react';
import { getUTMParams, generateEventId, getStagingAwareTags, submitLead, fireMetaPixelLead } from '@/lib/lead-submit';

export function ReferralProgram() {
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');

  const [formData, setFormData] = useState({
    referrerName: '',
    referrerPhone: '',
    referrerEmail: '',
    refereeName: '',
    refereePhone: '',
    refereeEmail: '',
    refereeZip: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (formData.honeypot) {
      console.warn('referral_bot_blocked_via_honeypot');
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    const nameParts = formData.refereeName.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const eventId = generateEventId('Referral');

    const payload = {
      firstName,
      lastName,
      phone: formData.refereePhone,
      email: formData.refereeEmail,
      postalCode: formData.refereeZip,
      serviceInterest: 'Solar',
      electricBillMonthly: 'N/A',
      roofAge: 'N/A',
      roofingNeed: 'N/A',
      waterConcern: 'N/A',
      recommendedNextStep: isSpanish ? 'Referral Submission - Referral Program (ES)' : 'Referral Submission - Referral Program',
      preferredContactMethod: 'Call',
      bestContactTime: 'Anytime',
      advisorSummary: isSpanish
        ? `Referido enviado por ${formData.referrerName} (Tel: ${formData.referrerPhone}, Email: ${formData.referrerEmail}). Recomendado: ${formData.refereeName} (ZIP: ${formData.refereeZip}).`
        : `Referral submitted by ${formData.referrerName} (Phone: ${formData.referrerPhone}, Email: ${formData.referrerEmail}). Friend details: ${formData.refereeName} (ZIP: ${formData.refereeZip}).`,
      tags: getStagingAwareTags(['newera_referral_lead', `referred_by_${formData.referrerName.replace(/[^a-zA-Z0-9]/g, '_')}`]),
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      utmSource: 'referral_program',
      utmMedium: 'website',
      utmCampaign: 'organic',
      utmContent: '',
      utmTerm: '',
      eventId: eventId,
      timestamp: new Date().toISOString(),
      language: isSpanish ? 'es' : 'en',
      sourcePage: pathname
    };

    try {
      const response = await fetch('/api/lead-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log('referral_submitted', { eventId, referrer: formData.referrerName });
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Referral', {
            content_category: 'Referral Program',
            currency: 'USD',
            value: 100.00
          }, { event_id: eventId });
        }
        setIsSubmitted(true);
      } else {
        console.warn('referral_proxy_error', response.statusText);
        alert(isSpanish ? 'Hubo un problema con el envío. Por favor intente de nuevo o contacte a soporte.' : 'There was a submission issue. Please try again or contact support.');
      }
    } catch (err) {
      console.error('referral_failed', err);
      alert(isSpanish ? 'Fallo de red. Por favor verifique su conexión e intente de nuevo.' : 'Network failure. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepsEn = [
    { title: 'Submit Referral', desc: "Fill out the form with your details and your friend's details." },
    { title: 'We Consult', desc: 'Our team reaches out for a zero-pressure solar assessment.' },
    { title: 'Get Paid $1,000', desc: 'When their solar system is installed, you get paid!' }
  ];

  const stepsEs = [
    { title: 'Enviar Referido', desc: "Completa el formulario con tus datos y los de tu recomendado." },
    { title: 'Nosotros Asesoramos', desc: 'Nuestro equipo se pondrá en contacto para una evaluación solar sin presión.' },
    { title: 'Recibe tu Pago de $1,000', desc: '¡Cuando se complete la instalación de su sistema solar, recibirás tu dinero!' }
  ];

  const steps = isSpanish ? stepsEs : stepsEn;

  return (
    <section id="referral-program" className="mt-8 mb-8 border border-[#E2E8F0] rounded-[32px] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Info Column */}
        <div className="lg:col-span-5 bg-[#14324b] p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#ff5722]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#082fa3]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <span className="bg-white/10 border border-white/20 text-[#ff5722] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 w-fit block font-poppins">
              {isSpanish ? 'Recompensas New Era' : 'New Era Rewards'}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl leading-tight mb-4">
              {isSpanish ? 'Gana hasta $1,000 por Referir a un Dueño de Casa' : 'Get Rewarded for Sharing Clean Energy'}
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-sm font-sans">
              {isSpanish ? (
                <>
                  Por cada amigo, familiar o vecino que refieras y se cambie a energía solar con New Era, te enviaremos una <strong className="text-[#ff5722] font-bold">recompensa de $1,000</strong>.
                </>
              ) : (
                <>
                  For every friend, family member, or neighbor you refer who switches to solar with New Era, we&apos;ll send you a <strong className="text-[#ff5722] font-bold">$1,000 reward</strong>.
                </>
              )}
            </p>

            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xs shrink-0 text-[#ff5722]">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-white">{step.title}</h4>
                    <p className="text-xs text-white/60 font-sans mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col gap-3 relative z-10">
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 text-[#ff5722]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 font-poppins">
                {isSpanish ? 'Sin límite de referidos — gana tanto como compartas' : 'No referral limit — earn as much as you share'}
              </span>
            </div>
            <p className="text-[10px] text-white/60 font-sans leading-relaxed mt-1">
              {isSpanish 
                ? 'Las recompensas de referidos están sujetas a la elegibilidad, la finalización de la instalación y los términos del programa.'
                : 'Referral rewards are subject to eligibility, installation completion, and program terms.'}
            </p>
            <Link 
              href={isSpanish ? '/es/referral-terms' : '/referral-terms'} 
              className="text-[10px] text-[#ff5722] hover:underline font-bold uppercase tracking-wider w-fit font-poppins"
            >
              {isSpanish ? 'Ver Términos de Referido' : 'See Referral Terms'}
            </Link>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-gray-50/50">
          {isSubmitted ? (
            <div className="text-center py-12 flex flex-col items-center justify-center animate-in fade-in duration-300">
              <CheckCircle className="w-16 h-16 text-[#082fa3] mb-4" />
              <h3 className="font-poppins font-bold text-2xl text-[#14324b] mb-2">
                {isSpanish ? '¡Referido Enviado!' : 'Referral Submitted!'}
              </h3>
              <p className="text-sm text-[#4e5257] font-sans max-w-sm mb-6">
                {isSpanish 
                  ? 'Gracias por compartir la visión de New Era. Nos pondremos en contacto con su amigo pronto y le mantendremos informado sobre el estado de su recompensa.'
                  : 'Thank you for sharing the New Era vision. We will reach out to your friend shortly, and keep you updated on the reward status.'}
              </p>
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    referrerName: '',
                    referrerPhone: '',
                    referrerEmail: '',
                    refereeName: '',
                    refereePhone: '',
                    refereeEmail: '',
                    refereeZip: '',
                    honeypot: '',
                  });
                }}
                className="bg-[#14324b] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#14324b]/90 transition-colors cursor-pointer"
              >
                {isSpanish ? 'Enviar Otro Referido' : 'Submit Another Referral'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-1">
                  {isSpanish ? 'Formulario de Referidos' : 'Referral Form'}
                </h3>
                <p className="text-xs text-[#4e5257] font-sans">
                  {isSpanish ? 'Envíe los detalles a continuación. Nosotros nos encargamos del resto.' : 'Submit details below. We handle the rest.'}
                </p>
              </div>

              {/* Referrer Details */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase text-[#ff5722] tracking-widest font-poppins">
                  {isSpanish ? 'Su Información (Referente)' : 'Your Information (Referrer)'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input 
                    type="text" 
                    name="referrerName" 
                    placeholder={isSpanish ? 'Su Nombre' : 'Your Name'} 
                    required 
                    value={formData.referrerName}
                    onChange={handleInput}
                    className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#082fa3] text-sm text-[#14324b] font-sans" 
                  />
                  <input 
                    type="tel" 
                    name="referrerPhone" 
                    placeholder={isSpanish ? 'Su Teléfono' : 'Your Phone'} 
                    required 
                    value={formData.referrerPhone}
                    onChange={handleInput}
                    className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#082fa3] text-sm text-[#14324b] font-sans" 
                  />
                  <input 
                    type="email" 
                    name="referrerEmail" 
                    placeholder={isSpanish ? 'Su Email' : 'Your Email'} 
                    required 
                    value={formData.referrerEmail}
                    onChange={handleInput}
                    className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#082fa3] text-sm text-[#14324b] font-sans" 
                  />
                </div>
              </div>

              {/* Referee Details */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest font-poppins">
                  {isSpanish ? 'Información del Recomendado (Referido)' : "Friend's Information (Referee)"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    name="refereeName" 
                    placeholder={isSpanish ? 'Nombre del Amigo' : "Friend's Name"} 
                    required 
                    value={formData.refereeName}
                    onChange={handleInput}
                    className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#082fa3] text-sm text-[#14324b] font-sans" 
                  />
                  <input 
                    type="text" 
                    name="refereeZip" 
                    inputMode="numeric" 
                    pattern="[0-9]{5}"
                    placeholder={isSpanish ? 'Código Postal del Amigo' : "Friend's ZIP Code"} 
                    required 
                    value={formData.refereeZip}
                    onChange={handleInput}
                    className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#082fa3] text-sm text-[#14324b] font-sans" 
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input 
                    type="tel" 
                    name="refereePhone" 
                    placeholder={isSpanish ? 'Teléfono del Amigo' : "Friend's Phone"} 
                    required 
                    value={formData.refereePhone}
                    onChange={handleInput}
                    className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#082fa3] text-sm text-[#14324b] font-sans" 
                  />
                  <input 
                    type="email" 
                    name="refereeEmail" 
                    placeholder={isSpanish ? 'Email del Amigo (Opcional)' : "Friend's Email (Optional)"} 
                    value={formData.refereeEmail}
                    onChange={handleInput}
                    className="p-3.5 bg-white rounded-xl border border-[#E2E8F0] focus:outline-none focus:border-[#082fa3] text-sm text-[#14324b] font-sans" 
                  />
                </div>
              </div>

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
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#ff5722] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#ff5722]/20 hover:bg-[#e0752f] transition-all flex items-center justify-center gap-2 hover:translate-y-[-1px] active:translate-y-[1px] disabled:opacity-50 cursor-pointer font-sans"
              >
                <span>{isSpanish ? 'Enviar Detalles del Referido' : 'Submit Referral Details'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

