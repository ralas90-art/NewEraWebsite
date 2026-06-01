'use client';

import React, { useState } from 'react';

// Helper to extract UTM parameters from URL search query on the client side
const getUTMParams = () => {
  if (typeof window === 'undefined') {
    return { utmSource: '', utmMedium: '', utmCampaign: '', utmContent: '', utmTerm: '', pageUrl: '' };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    utmContent: params.get('utm_content') || '',
    utmTerm: params.get('utm_term') || '',
    pageUrl: window.location.href,
  };
};

// Helper to generate a unique transaction/event ID for Meta Pixel/CAPI deduplication
const generateEventId = (eventName: string) => {
  return `${eventName}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Rule-based recommendation engine for GHL Lead Triage
const generateAdvisorRecommendation = (data: any) => {
  let recommendation = "Home Upgrade Consultation";
  let ghlWorkflow = "contact_workflow";
  const tags = ["newera_home_upgrade_advisor"];

  if (data.serviceInterest === 'Solar') {
    if (data.roofAge === '15+ years') {
      recommendation = "Solar Assessment + Roof Readiness Review";
      tags.push("solar_roof_readiness_review", "newera_solar_lead");
    } else if (data.electricBill === '$250–$400' || data.electricBill === '$400+') {
      recommendation = "Priority Solar Consultation";
      tags.push("newera_solar_lead", "high_intent_lead");
    } else {
      recommendation = "General Solar Assessment";
      tags.push("newera_solar_lead");
    }
    ghlWorkflow = "solar_consultation_workflow";
  } else if (data.serviceInterest === 'Roofing') {
    recommendation = "Professional Roof Integrity Review";
    tags.push("newera_roofing_lead");
    ghlWorkflow = "roofing_workflow";
  } else if (data.serviceInterest === 'Water Purification') {
    recommendation = "Bilingual Water Quality Test";
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
    advisorSummary: `Homeowner ${data.name} is interested in ${data.serviceInterest}. ZIP Code: ${data.zipCode}. homeowner status: ${data.homeowner}. Electric Bill: ${data.electricBill || 'N/A'}, Roof Age: ${data.roofAge || 'N/A'}, Roofing Need: ${data.roofingHelp || 'N/A'}, Water Concern: ${data.waterConcern || 'N/A'}. Preferred: ${data.preferredContact} during ${data.bestTime}.`
  };
};

export function HomeUpgradeAdvisor() {
  const [step, setStep] = useState(0);
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

  const startAdvisor = () => {
    console.log('advisor_opened');
    console.log('advisor_started');
    setStep(1);
  };

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Tracking hooks
    if (field === 'serviceInterest') {
      console.log('advisor_service_selected', value);
    }

    nextStep(field, value);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (fieldChanged?: string, value?: string) => {
    const currentService = fieldChanged === 'serviceInterest' ? value : formData.serviceInterest;
    
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) {
      if (currentService === 'Solar') setStep(4);
      else if (currentService === 'Roofing') setStep(6);
      else if (currentService === 'Water Purification') setStep(7);
      else setStep(8); // Not sure -> skip to contact pref
    }
    else if (step === 4) setStep(5);
    else if (step === 5) setStep(8); // Finished solar specific
    else if (step === 6) setStep(8); // Finished roofing specific
    else if (step === 7) setStep(8); // Finished water specific
    else if (step === 8) setStep(9);
    else if (step === 9) setStep(10);
  };

  const submitForm = async () => {
    console.log('advisor_completed');

    // Honeypot bot protection check
    if (formData.honeypot) {
      console.warn('advisor_bot_blocked_via_honeypot');
      // Silently show success screen to confuse the bot
      setResult({
        recommendedNextStep: "Home Upgrade Consultation",
        tags: ["newera_home_upgrade_advisor"],
        advisorSummary: "Bot submission caught."
      });
      setStep(11);
      return;
    }
    
    // Compute recommendation and workflow tags first
    const analysis = generateAdvisorRecommendation(formData);
    setResult(analysis);

    // Logging dynamic qualifications based on selected categories
    if (formData.serviceInterest === 'Solar') {
      console.log('solar_lead_qualified', formData);
    } else if (formData.serviceInterest === 'Roofing') {
      console.log('roofing_lead_qualified', formData);
    } else if (formData.serviceInterest === 'Water Purification') {
      console.log('water_lead_qualified', formData);
    }

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
      tags: analysis.tags,
      pageUrl: utms.pageUrl,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      eventId: eventId,
      timestamp: new Date().toISOString()
    };

    console.log('ghl_payload_prepared', ghlPayload);

    // Secure post to Railway proxy REST endpoint
    try {
      const response = await fetch('https://newera-lead-proxy.up.railway.app/api/lead-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ghlPayload)
      });
      if (response.ok) {
        console.log('lead_form_submitted', { eventId, status: 'success' });
        // Trigger browser Meta Pixel Lead event ONLY after success response from the proxy
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_category: 'Home Upgrades',
            currency: 'USD',
            value: 50.00
          }, { event_id: eventId });
          console.log('pixel_browser_tracked', 'Lead', eventId);
        }
      } else {
        console.warn('lead_submission_proxy_error', response.statusText);
      }
    } catch (err) {
      console.error('lead_submission_failed', err);
    }

    setStep(11);
  };


  const renderStepContent = () => {
    switch(step) {
      case 0:
        return (
          <div className="text-center py-6">
            <h3 className="font-poppins font-bold text-2xl text-[#123B5D] mb-4">New Era Home Upgrade Advisor</h3>
            <p className="text-[#5F6F75] font-sans text-sm mb-8 max-w-md mx-auto">
              Answer a few quick questions to find the most valuable upgrade paths for your home.
            </p>
            <button 
              onClick={startAdvisor}
              className="bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#FF8A3D]/20 hover:bg-[#ff7a21] transition-transform active:scale-95"
            >
              Find the Right Service for My Home
            </button>
            <p className="text-[10px] text-[#A0AEB8] mt-4 uppercase tracking-widest px-4 max-w-xs mx-auto text-center leading-tight">
              This tool helps us point you in the right direction. Final recommendations depend on your home, location, utility details, and consultation results.
            </p>
          </div>
        );
      case 1:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#123B5D] mb-6">What service are you interested in?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Solar', 'Roofing', 'Water Purification', 'Not Sure / Help Me Decide'].map(opt => (
                <button key={opt} onClick={() => handleSelect('serviceInterest', opt)} className="border border-[#E6EDF2] p-4 rounded-xl text-left font-bold text-[#123B5D] hover:bg-[#F5F7FA] hover:border-[#5EC8E5] transition-colors">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#123B5D] mb-6">Are you the homeowner?</h3>
            <div className="flex flex-col gap-3">
              {['Yes', 'No', "I'm helping someone else"].map(opt => (
                <button key={opt} onClick={() => handleSelect('homeowner', opt)} className="border border-[#E6EDF2] p-4 rounded-xl text-left font-bold text-[#123B5D] hover:bg-[#F5F7FA] hover:border-[#5EC8E5] transition-colors">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#123B5D] mb-6">What is your ZIP code?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                name="zipCode" 
                value={formData.zipCode} 
                onChange={handleInput} 
                placeholder="e.g. 33101" 
                className="flex-grow p-4 rounded-xl border border-[#E6EDF2] focus:outline-none focus:border-[#5EC8E5] focus:ring-1 focus:ring-[#5EC8E5]"
              />
              <button 
                onClick={() => formData.zipCode.length >= 5 && nextStep()}
                disabled={formData.zipCode.length < 5}
                className="bg-[#123B5D] text-white px-8 py-4 rounded-xl font-bold disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 4: // Solar Bill
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#123B5D] mb-6">What is your average monthly electric bill?</h3>
            <div className="flex flex-col gap-3">
              {['Under $150', '$150–$250', '$250–$400', '$400+'].map(opt => (
                <button key={opt} onClick={() => handleSelect('electricBill', opt)} className="border border-[#E6EDF2] p-4 rounded-xl text-left font-bold text-[#123B5D] hover:bg-[#F5F7FA] hover:border-[#5EC8E5] transition-colors">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 5: // Solar Roof Age
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#123B5D] mb-6">Do you know the age of your roof?</h3>
            <div className="flex flex-col gap-3">
              {['Under 5 years', '5–10 years', '10–15 years', '15+ years', 'Not sure'].map(opt => (
                <button key={opt} onClick={() => handleSelect('roofAge', opt)} className="border border-[#E6EDF2] p-4 rounded-xl text-left font-bold text-[#123B5D] hover:bg-[#F5F7FA] hover:border-[#5EC8E5] transition-colors">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 6: // Roofing Help
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#123B5D] mb-6">What do you need help with?</h3>
            <div className="flex flex-col gap-3">
              {['Inspection', 'Repair', 'Replacement', 'Solar-readiness review', 'Not sure'].map(opt => (
                <button key={opt} onClick={() => handleSelect('roofingHelp', opt)} className="border border-[#E6EDF2] p-4 rounded-xl text-left font-bold text-[#123B5D] hover:bg-[#F5F7FA] hover:border-[#5EC8E5] transition-colors">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 7: // Water Concern
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#123B5D] mb-6">What is your main concern?</h3>
            <div className="flex flex-col gap-3">
              {['Taste', 'Odor', 'Hard water', 'Staining', 'General purification', 'Not sure'].map(opt => (
                <button key={opt} onClick={() => handleSelect('waterConcern', opt)} className="border border-[#E6EDF2] p-4 rounded-xl text-left font-bold text-[#123B5D] hover:bg-[#F5F7FA] hover:border-[#5EC8E5] transition-colors">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 8: // Pref Contact Method
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#123B5D] mb-6">Preferred contact method:</h3>
            <div className="flex flex-col gap-3">
              {['Call', 'Text', 'Email'].map(opt => (
                <button key={opt} onClick={() => handleSelect('preferredContact', opt)} className="border border-[#E6EDF2] p-4 rounded-xl text-left font-bold text-[#123B5D] hover:bg-[#F5F7FA] hover:border-[#5EC8E5] transition-colors">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 9: // Best time to contact
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#123B5D] mb-6">Best time to contact:</h3>
            <div className="flex flex-col gap-3">
              {['Morning', 'Afternoon', 'Evening'].map(opt => (
                <button key={opt} onClick={() => handleSelect('bestTime', opt)} className="border border-[#E6EDF2] p-4 rounded-xl text-left font-bold text-[#123B5D] hover:bg-[#F5F7FA] hover:border-[#5EC8E5] transition-colors">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 10: // Contact Info
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h3 className="font-poppins font-bold text-xl text-[#123B5D] mb-6">Where should we send your results?</h3>
            <div className="flex flex-col gap-4">
              <input name="name" value={formData.name} onChange={handleInput} placeholder="Full Name" className="p-4 rounded-xl border border-[#E6EDF2] focus:outline-none focus:border-[#5EC8E5] focus:ring-1 focus:ring-[#5EC8E5]" />
              <input name="phone" value={formData.phone} onChange={handleInput} placeholder="Phone Number" className="p-4 rounded-xl border border-[#E6EDF2] focus:outline-none focus:border-[#5EC8E5] focus:ring-1 focus:ring-[#5EC8E5]" />
              <input name="email" value={formData.email} onChange={handleInput} placeholder="Email Address" className="p-4 rounded-xl border border-[#E6EDF2] focus:outline-none focus:border-[#5EC8E5] focus:ring-1 focus:ring-[#5EC8E5]" />
              
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
                onClick={submitForm}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="mt-2 bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold disabled:opacity-50 hover:bg-[#e0752f] transition-colors"
              >
                Get My Recommendation
              </button>
            </div>
          </div>
        );
      case 11: // Results
        return (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-center py-6">
            <div className="w-16 h-16 bg-[#F5F7FA] text-[#5EC8E5] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-poppins font-bold text-2xl text-[#123B5D] mb-2">Thank You, {formData.name.split(' ')[0]}!</h3>
            <p className="text-[#5F6F75] font-sans text-sm mb-6 max-w-sm mx-auto leading-relaxed">
              Based on your details, here is our preliminary recommendation:
            </p>
            
            <div className="bg-[#FFE1C7]/20 border border-[#FFE1C7] p-6 rounded-2xl mb-8">
              <span className="text-[10px] font-bold uppercase text-[#FF8A3D] tracking-widest mb-1 block">Recommended Action</span>
              <h4 className="font-poppins font-bold text-xl text-[#123B5D]">{result?.recommendedNextStep}</h4>
            </div>

            <p className="text-[#5F6F75] font-sans text-sm mb-6">
              Our team will reach out to you via {formData.preferredContact.toLowerCase()} during the {formData.bestTime.toLowerCase()} to discuss your custom plan.
            </p>

            <button 
              onClick={() => { setStep(0); setFormData({
                serviceInterest: '', homeowner: '', zipCode: '', electricBill: '', roofAge: '',
                roofingHelp: '', waterConcern: '', preferredContact: '', bestTime: '', name: '', phone: '', email: '', honeypot: ''
              }); setResult(null); }}
              className="text-[#123B5D] font-bold text-sm underline underline-offset-4 decoration-[#E6EDF2] hover:decoration-[#123B5D] transition-colors"
            >
              Start Over
            </button>
          </div>
        );
    }
  };

  return (
    <section className="bg-white border border-[#E6EDF2] rounded-3xl p-6 md:p-10 shadow-sm max-w-2xl mx-auto w-full my-8">
      {step > 0 && step < 11 && (
        <div className="mb-8">
          <div className="h-1.5 w-full bg-[#F5F7FA] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#5EC8E5] transition-all duration-500 rounded-full"
              style={{ width: `${(step / 10) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-[#A0AEB8] mt-2 font-bold uppercase tracking-widest text-right">
            Step {step} of 10
          </p>
        </div>
      )}
      
      {renderStepContent()}
    </section>
  );
}
