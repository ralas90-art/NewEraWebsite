'use client';

import React from 'react';

export function LeadForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /* 
      TODO: Form submission handler. 
      Map form data and post it to endpoints configured in the environment variables:
      - process.env.NEXT_PUBLIC_GHL_SOLAR_WEBHOOK_URL
      - process.env.NEXT_PUBLIC_GHL_ROOFING_WEBHOOK_URL
      - process.env.NEXT_PUBLIC_GHL_WATER_WEBHOOK_URL
      - process.env.NEXT_PUBLIC_GHL_REFERRAL_WEBHOOK_URL
      - process.env.NEXT_PUBLIC_GHL_CONTACT_WEBHOOK_URL
    */
    console.log('lead_form_submit_click');
    alert("Form submitted! (Placeholder action)");
  };

  return (
    <div id="lead-form" className="bg-white border border-[#E6EDF2] rounded-[32px] p-8 flex flex-col shadow-sm h-full max-w-md mx-auto w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-poppins font-bold text-xl md:text-2xl text-[#123B5D]">Get a Free Quote</h3>
        <span className="text-[#FF8A3D] text-[10px] font-black uppercase bg-[#FFE1C7]/30 px-3 py-1 rounded-full">FAST</span>
      </div>
      <p className="text-sm text-[#5F6F75] mb-8 font-sans">Find the right service for your home in 60 seconds.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
        <div className="px-5 py-3 border border-[#E6EDF2] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#5EC8E5] focus-within:bg-white focus-within:shadow-sm group">
          <label htmlFor="service-type" className="block text-[10px] font-bold text-[#5F6F75] uppercase mb-1">Service of Interest</label>
          <select id="service-type" className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base font-medium p-0 text-[#123B5D] outline-none">
            <option>Residential Solar</option>
            <option>Roofing Services</option>
            <option>Water Purification</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="px-5 py-3 border border-[#E6EDF2] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#5EC8E5] focus-within:bg-white focus-within:shadow-sm group">
            <label htmlFor="first-name" className="block text-[10px] font-bold text-[#5F6F75] uppercase mb-1">First Name</label>
            <input id="first-name" type="text" placeholder="John" required className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base p-0 text-[#123B5D] placeholder:text-[#5F6F75]/40 outline-none font-sans" />
          </div>
          <div className="px-5 py-3 border border-[#E6EDF2] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#5EC8E5] focus-within:bg-white focus-within:shadow-sm group">
            <label htmlFor="last-name" className="block text-[10px] font-bold text-[#5F6F75] uppercase mb-1">Last Name</label>
            <input id="last-name" type="text" placeholder="Doe" required className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base p-0 text-[#123B5D] placeholder:text-[#5F6F75]/40 outline-none font-sans" />
          </div>
        </div>

        <div className="px-5 py-3 border border-[#E6EDF2] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#5EC8E5] focus-within:bg-white focus-within:shadow-sm group">
          <label htmlFor="email" className="block text-[10px] font-bold text-[#5F6F75] uppercase mb-1">Email Address</label>
          <input id="email" type="email" placeholder="john@example.com" required className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base p-0 text-[#123B5D] placeholder:text-[#5F6F75]/40 outline-none font-sans" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="px-5 py-3 border border-[#E6EDF2] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#5EC8E5] focus-within:bg-white focus-within:shadow-sm group">
            <label htmlFor="phone" className="block text-[10px] font-bold text-[#5F6F75] uppercase mb-1">Phone</label>
            <input id="phone" type="tel" placeholder="(555) 123-4567" required className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base p-0 text-[#123B5D] placeholder:text-[#5F6F75]/40 outline-none font-sans" />
          </div>
          <div className="px-5 py-3 border border-[#E6EDF2] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#5EC8E5] focus-within:bg-white focus-within:shadow-sm group">
            <label htmlFor="zip" className="block text-[10px] font-bold text-[#5F6F75] uppercase mb-1">ZIP Code</label>
            <input id="zip" type="text" placeholder="33101" required className="w-full bg-transparent border-none focus:ring-0 text-sm md:text-base p-0 text-[#123B5D] placeholder:text-[#5F6F75]/40 outline-none font-sans" />
          </div>
        </div>
        
        <button type="submit" className="w-full mt-6 bg-[#FF8A3D] text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#FF8A3D]/20 hover:bg-[#e0752f] hover:translate-y-[-1px] transition-all font-sans active:translate-y-[1px]">
          Get My Free Solar Assessment
        </button>
        <p className="text-center text-xs text-[#5F6F75] mt-4 font-sans max-w-[280px] mx-auto opacity-80 leading-relaxed">
          Your information is secure. No spam — just clear answers from our team.
        </p>
      </form>
    </div>
  );
}
