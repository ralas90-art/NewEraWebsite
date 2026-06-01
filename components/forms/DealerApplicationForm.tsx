'use client';

import React, { useState, useRef } from 'react';
import {
  submitLead,
  getUTMParams,
  generateEventId,
  fireMetaPixelLead,
  getStagingAwareTags,
} from '@/lib/lead-submit';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA',
  'KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT',
  'VA','WA','WV','WI','WY',
];

const VOLUME_OPTIONS = [
  'Under $500K/year',
  '$500K – $1M/year',
  '$1M – $5M/year',
  '$5M – $10M/year',
  '$10M+/year',
  'Prefer not to say',
];

export function DealerApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if ((data.get('website') as string)) { setFormState('success'); return; }

    setFormState('submitting');
    setErrorMsg('');

    const utms       = getUTMParams();
    const eventId    = generateEventId('DealerLead');
    const contactName = (data.get('contactName') as string).trim();
    const nameParts   = contactName.split(' ');

    const payload = {
      firstName:        nameParts[0] || contactName,
      lastName:         nameParts.slice(1).join(' ') || '',
      phone:            (data.get('phone') as string).trim(),
      email:            (data.get('email') as string).trim(),
      postalCode:       '',
      serviceInterest:  'Dealer / Partner Program',
      businessName:     (data.get('businessName') as string).trim(),
      contactName,
      licenseNumber:    (data.get('licenseNumber') as string).trim(),
      stateTerritory:   (data.get('stateTerritory') as string).trim(),
      annualSalesVolume:(data.get('annualSalesVolume') as string).trim(),
      currentPartners:  (data.get('currentPartners') as string).trim(),
      advisorSummary:   `Dealer application from ${contactName} at ${(data.get('businessName') as string).trim()}. State: ${(data.get('stateTerritory') as string).trim()}. Volume: ${(data.get('annualSalesVolume') as string).trim()}.`,
      tags:             getStagingAwareTags(['newera_dealer_partner']),
      pageUrl:          utms.pageUrl,
      utmSource:        utms.utmSource,
      utmMedium:        utms.utmMedium,
      utmCampaign:      utms.utmCampaign,
      utmContent:       utms.utmContent,
      utmTerm:          utms.utmTerm,
      eventId,
      timestamp:        new Date().toISOString(),
    };

    try {
      const result = await submitLead(payload);
      if (result.ok) {
        fireMetaPixelLead(eventId, 'Dealer Partner Application', 150.0);
        setFormState('success');
        formRef.current?.reset();
      } else {
        setFormState('error');
        setErrorMsg('There was an issue submitting your application. Please try again.');
      }
    } catch {
      setFormState('error');
      setErrorMsg('Submission failed. Please check your connection and try again.');
    }
  };

  const wrap  = 'px-5 py-3 border border-[#E6EDF2] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#5EC8E5] focus-within:bg-white focus-within:shadow-sm';
  const lbl   = 'block text-[10px] font-bold text-[#5F6F75] uppercase mb-1 font-sans';
  const field = 'w-full bg-transparent border-none focus:ring-0 text-sm font-medium p-0 text-[#123B5D] placeholder:text-[#5F6F75]/40 outline-none font-sans';

  if (formState === 'success') {
    return (
      <div className="bg-white border border-[#E6EDF2] rounded-3xl p-10 shadow-sm flex flex-col items-center text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-poppins font-bold text-2xl text-[#123B5D] mb-2">Application Received!</h3>
          <p className="text-[#5F6F75] font-sans text-base leading-relaxed max-w-md">
            Our partner development team will be in touch within 2 business days to discuss next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="dealer-form" className="bg-white border border-[#E6EDF2] rounded-3xl p-8 shadow-sm">
      <div className="mb-8">
        <span className="text-[#FF8A3D] text-[10px] font-black uppercase bg-[#FFE1C7]/30 px-3 py-1 rounded-full">Partner Application</span>
        <h2 className="font-poppins font-bold text-2xl text-[#123B5D] mt-3 mb-2">Apply to Become a Partner</h2>
        <p className="text-[#5F6F75] text-sm font-sans">Complete the form below. Fields marked * are required.</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <input name="website" type="text" className="absolute opacity-0 pointer-events-none h-0 w-0"
          tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={wrap + ' sm:col-span-2'}>
            <label htmlFor="businessName" className={lbl}>Business / Company Name *</label>
            <input id="businessName" name="businessName" type="text" placeholder="Sunshine Solar LLC" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="contactName" className={lbl}>Primary Contact Name *</label>
            <input id="contactName" name="contactName" type="text" placeholder="Alex Ramirez" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="email" className={lbl}>Business Email *</label>
            <input id="email" name="email" type="email" placeholder="alex@company.com" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="phone" className={lbl}>Phone Number *</label>
            <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="licenseNumber" className={lbl}>License Number (if applicable)</label>
            <input id="licenseNumber" name="licenseNumber" type="text" placeholder="CVC-12345" className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="stateTerritory" className={lbl}>Primary State / Territory *</label>
            <select id="stateTerritory" name="stateTerritory" required className={field}>
              <option value="">Select state...</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className={wrap}>
            <label htmlFor="annualSalesVolume" className={lbl}>Annual Sales Volume *</label>
            <select id="annualSalesVolume" name="annualSalesVolume" required className={field}>
              <option value="">Select range...</option>
              {VOLUME_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div className={wrap + ' sm:col-span-2'}>
            <label htmlFor="currentPartners" className={lbl}>Current Solar Partners / Installers (if any)</label>
            <input id="currentPartners" name="currentPartners" type="text" placeholder="e.g. SunPower, Tesla Energy, local EPC..." className={field} />
          </div>
        </div>

        {formState === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-700 font-sans">{errorMsg}</div>
        )}

        <button type="submit" disabled={formState === 'submitting'}
          className="w-full bg-[#123B5D] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#123B5D]/20 hover:bg-[#1a4a75] hover:translate-y-[-1px] transition-all font-sans active:translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed">
          {formState === 'submitting' ? 'Submitting Application...' : 'Submit Partner Application →'}
        </button>
        <p className="text-xs text-[#5F6F75] font-sans text-center">
          Our partner development team reviews applications and typically responds within 2 business days.
        </p>
      </form>
    </div>
  );
}
