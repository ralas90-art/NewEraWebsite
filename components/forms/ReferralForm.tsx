'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  submitLead,
  getUTMParams,
  generateEventId,
  fireMetaPixelLead,
  getStagingAwareTags,
} from '@/lib/lead-submit';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ReferralForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — silently succeed to deceive bots
    if ((data.get('website') as string)) {
      setFormState('success');
      return;
    }

    setFormState('submitting');
    setErrorMsg('');

    const utms = getUTMParams();
    const eventId = generateEventId('ReferralLead');

    const referrerName = (data.get('referrerName') as string).trim();
    const refereeName  = (data.get('refereeName') as string).trim();
    const nameParts   = referrerName.split(' ');
    const firstName   = nameParts[0] || referrerName;
    const lastName    = nameParts.slice(1).join(' ') || '';

    const payload = {
      firstName,
      lastName,
      phone:            (data.get('referrerPhone') as string).trim(),
      email:            (data.get('referrerEmail') as string).trim(),
      postalCode:       (data.get('refereeZip') as string).trim(),
      serviceInterest:  'Referral Program',
      referrerName,
      referrerPhone:    (data.get('referrerPhone') as string).trim(),
      referrerEmail:    (data.get('referrerEmail') as string).trim(),
      refereeName,
      refereePhone:     (data.get('refereePhone') as string).trim(),
      refereeEmail:     (data.get('refereeEmail') as string).trim(),
      refereeZip:       (data.get('refereeZip') as string).trim(),
      advisorSummary:   `Referral submitted by ${referrerName}. Referring: ${refereeName} at ${(data.get('refereePhone') as string).trim()}.`,
      tags:             getStagingAwareTags(['newera_referral_lead']),
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
        fireMetaPixelLead(eventId, 'Referral Program', 25.0);
        setFormState('success');
        formRef.current?.reset();
      } else {
        setFormState('error');
        setErrorMsg('There was an issue submitting your referral. Please try again.');
      }
    } catch {
      setFormState('error');
      setErrorMsg('Submission failed. Please check your connection and try again.');
    }
  };

  const wrap  = 'px-5 py-3 border border-[#e5e5e5] rounded-2xl bg-[#F5F7FA] transition-colors focus-within:border-[#082fa3] focus-within:bg-white focus-within:shadow-sm';
  const lbl   = 'block text-[10px] font-bold text-[#5F6F75] uppercase mb-1 font-sans';
  const field = 'w-full bg-transparent border-none focus:ring-0 text-sm font-medium p-0 text-newera-dark-gray placeholder:text-[#5F6F75]/40 outline-none font-sans';

  if (formState === 'success') {
    return (
      <div className="bg-white border border-[#e5e5e5] rounded-3xl p-10 shadow-sm flex flex-col items-center text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-poppins font-bold text-2xl text-newera-dark-gray mb-2">Referral Submitted!</h3>
          <p className="text-[#5F6F75] font-sans text-base leading-relaxed max-w-sm">
            We will contact your friend shortly to schedule their free solar assessment.
            Thank you for spreading the word!
          </p>
        </div>
        <p className="text-[10px] text-[#5F6F75] font-sans leading-relaxed">
          * Referral reward paid within 30 days after referred homeowner&apos;s solar system is fully
          installed and utility-activated. Subject to program terms and conditions.
        </p>
      </div>
    );
  }

  return (
    <div id="referral-form" className="bg-white border border-[#e5e5e5] rounded-3xl p-8 shadow-sm">
      <div className="mb-8">
        <span className="text-[#ff5722] text-[10px] font-black uppercase bg-[#ff572220]/30 px-3 py-1 rounded-full">
          Submit a Referral
        </span>
        <h2 className="font-poppins font-bold text-2xl text-newera-dark-gray mt-3 mb-2">Refer a Homeowner</h2>
        <p className="text-[#5F6F75] text-sm font-sans">
          Fill out both sections below and we&apos;ll take it from there.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <input name="website" type="text" className="absolute opacity-0 pointer-events-none h-0 w-0"
          tabIndex={-1} autoComplete="off" aria-hidden="true" />

        {/* Section 1 */}
        <div>
          <p className="font-poppins font-semibold text-newera-dark-gray text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#ff5722] text-white text-xs font-bold flex items-center justify-center">1</span>
            Your Information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={wrap}>
              <label htmlFor="referrerName" className={lbl}>Your Full Name *</label>
              <input id="referrerName" name="referrerName" type="text" placeholder="Jane Smith" required className={field} />
            </div>
            <div className={wrap}>
              <label htmlFor="referrerPhone" className={lbl}>Your Phone *</label>
              <input id="referrerPhone" name="referrerPhone" type="tel" placeholder="(555) 000-0000" required className={field} />
            </div>
            <div className={wrap + ' sm:col-span-2'}>
              <label htmlFor="referrerEmail" className={lbl}>Your Email Address *</label>
              <input id="referrerEmail" name="referrerEmail" type="email" placeholder="jane@example.com" required className={field} />
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5e5e5]" />

        {/* Section 2 */}
        <div>
          <p className="font-poppins font-semibold text-newera-dark-gray text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#082fa3] text-white text-xs font-bold flex items-center justify-center">2</span>
            Your Friend&apos;s Information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={wrap}>
              <label htmlFor="refereeName" className={lbl}>Friend&apos;s Full Name *</label>
              <input id="refereeName" name="refereeName" type="text" placeholder="John Doe" required className={field} />
            </div>
            <div className={wrap}>
              <label htmlFor="refereePhone" className={lbl}>Friend&apos;s Phone *</label>
              <input id="refereePhone" name="refereePhone" type="tel" placeholder="(555) 111-2222" required className={field} />
            </div>
            <div className={wrap}>
              <label htmlFor="refereeEmail" className={lbl}>Friend&apos;s Email</label>
              <input id="refereeEmail" name="refereeEmail" type="email" placeholder="john@example.com" className={field} />
            </div>
            <div className={wrap}>
              <label htmlFor="refereeZip" className={lbl}>Friend&apos;s ZIP Code *</label>
              <input id="refereeZip" name="refereeZip" type="text" inputMode="numeric" pattern="[0-9]{5}" placeholder="33101" required className={field} />
            </div>
          </div>
        </div>

        {formState === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-700 font-sans">{errorMsg}</div>
        )}

        <button type="submit" disabled={formState === 'submitting'}
          className="w-full bg-[#ff5722] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#ff5722]/20 hover:bg-[#e04a1b] hover:translate-y-[-1px] transition-all font-sans active:translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed">
          {formState === 'submitting' ? 'Submitting Referral...' : 'Submit Referral →'}
        </button>

        <p className="text-[10px] text-[#5F6F75] font-sans leading-relaxed">
          * Referral rewards are subject to eligibility, installation completion, and program terms. Referral reward paid within 30 days after referred homeowner&apos;s solar system is fully installed and utility-activated.{' '}
          <Link href="/referral-terms" className="text-[#ff5722] hover:underline font-bold font-poppins">
            See Referral Terms
          </Link>
        </p>
      </form>
    </div>
  );
}
