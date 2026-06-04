'use client';

import React, { useState } from 'react';

import { getUTMParams, generateEventId, getStagingAwareTags, submitLead, fireMetaPixelLead } from '@/lib/lead-submit';

export function LeadForm() {
  const [started, setStarted] = useState(false);

  const handleInputFocus = () => {
    if (!started) {
      console.log('lead_form_started');
      setStarted(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('lead_form_submit_click');

    const form = e.currentTarget;
    const fullName = (form.querySelector('#full-name') as HTMLInputElement)?.value || '';
    const phone = (form.querySelector('#phone') as HTMLInputElement)?.value || '';
    const postalCode = (form.querySelector('#zip') as HTMLInputElement)?.value || '';
    const honeypot = (form.querySelector('#honeypot') as HTMLInputElement)?.value || '';
    const serviceInterest = 'Residential Solar';

    // Honeypot bot protection check
    if (honeypot) {
      console.warn('lead_form_bot_blocked_via_honeypot');
      // Silently reset and show alert to deceive the bot
      alert("Thank you! Your assessment request has been submitted.");
      form.reset();
      setStarted(false);
      return;
    }

    // Split Full Name into First and Last Names
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    const email = ''; // Email made optional/omitted for reduced hero form friction

    // Check UTMs and Event IDs
    const utms = getUTMParams();
    const eventId = generateEventId('Lead');

    const tags = ['newera_home_upgrade_advisor', 'newera_solar_lead'];

    const payload = {
      firstName,
      lastName,
      phone,
      email,
      postalCode,
      serviceInterest,
      electricBillMonthly: 'N/A',
      roofAge: 'N/A',
      roofingNeed: 'N/A',
      waterConcern: 'N/A',
      recommendedNextStep: 'General Solar Assessment - Hero Form',
      preferredContactMethod: 'Call',
      bestContactTime: 'Anytime',
      advisorSummary: `Homeowner ${firstName} ${lastName} submitted quick 3-field hero form for ${serviceInterest}. ZIP: ${postalCode}.`,
      tags: getStagingAwareTags(tags),
      pageUrl: utms.pageUrl,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      eventId: eventId,
      timestamp: new Date().toISOString()
    };

    console.log('ghl_payload_prepared', payload);
    try {
      const result = await submitLead(payload);
      if (result.ok) {
        fireMetaPixelLead(eventId, 'Quick Contact Form', 50.00);
        alert("Thank you! Your assessment request has been submitted.");
        form.reset();
        setStarted(false);
      } else {
        alert("There was an issue submitting your request. Please try again or call us.");
      }
    } catch (err) {
      console.error('lead_submission_failed', err);
      alert("Submission failed. Please check your connection.");
    }
  };

  return (
    <div id="lead-form" className="bg-white border border-[#e5e5e5] rounded-[32px] p-8 flex flex-col shadow-sm h-full max-w-md mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-poppins font-bold text-xl md:text-2xl text-newera-dark-gray">Get a Free Quote</h3>
        <span className="text-[#ff5722] text-[10px] font-black uppercase bg-[#ff572220]/30 px-3 py-1 rounded-full">FAST</span>
      </div>
      <p className="text-sm text-[#5F6F75] mb-8 font-sans">Find the right service for your home in 60 seconds.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
        <div className="px-5 py-3 border border-[#e5e5e5] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#082fa3] focus-within:bg-white focus-within:shadow-sm group">
          <label htmlFor="full-name" className="block text-[10px] font-bold text-[#5F6F75] uppercase mb-1">Full Name</label>
          <input id="full-name" type="text" placeholder="John Doe" required onFocus={handleInputFocus} className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base p-0 text-newera-dark-gray placeholder:text-[#5F6F75]/40 outline-none font-sans" />
        </div>

        <div className="px-5 py-3 border border-[#e5e5e5] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#082fa3] focus-within:bg-white focus-within:shadow-sm group">
          <label htmlFor="phone" className="block text-[10px] font-bold text-[#5F6F75] uppercase mb-1">Phone Number</label>
          <input id="phone" type="tel" placeholder="(555) 123-4567" required onFocus={handleInputFocus} className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base p-0 text-newera-dark-gray placeholder:text-[#5F6F75]/40 outline-none font-sans" />
        </div>

        <div className="px-5 py-3 border border-[#e5e5e5] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#082fa3] focus-within:bg-white focus-within:shadow-sm group">
          <label htmlFor="zip" className="block text-[10px] font-bold text-[#5F6F75] uppercase mb-1">ZIP Code</label>
          <input id="zip" type="text" inputMode="numeric" pattern="[0-9]{5}" placeholder="33101" required onFocus={handleInputFocus} className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base p-0 text-newera-dark-gray placeholder:text-[#5F6F75]/40 outline-none font-sans" />
        </div>
        
        {/* Honeypot field for bot protection */}
        <input 
          id="honeypot" 
          name="honeypot" 
          type="text" 
          className="absolute opacity-0 pointer-events-none" 
          tabIndex={-1} 
          autoComplete="off" 
          placeholder="Do not fill this field" 
        />
        
        <button type="submit" className="w-full mt-6 bg-[#ff5722] text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#ff5722]/20 hover:bg-[#e0752f] hover:translate-y-[-1px] transition-all font-sans active:translate-y-[1px]">
          Get My Free Solar Assessment
        </button>
        <p className="text-center text-[11px] text-[#ff5722] font-semibold font-sans mt-2">
          Limited free assessment slots available this month in your area.
        </p>
        <p className="text-center text-xs text-[#5F6F75] mt-4 font-sans max-w-[280px] mx-auto opacity-80 leading-relaxed">
          Your information is secure. No spam — just clear answers from our team.
        </p>
      </form>
    </div>
  );
}

