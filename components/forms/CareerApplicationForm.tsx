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

const ROLES = [
  'Solar Sales Consultant',
  'Roofing / Home Upgrade Advisor',
  'Appointment Setter',
  'Customer Success Specialist',
  'Dealer Partner / Territory Partner',
];

const MARKETS     = ['FL', 'MA', 'CT', 'Other'];
const AVAIL_OPTS  = ['Full-time', 'Part-time', 'Contract'];

export function CareerApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if ((data.get('website') as string)) { setFormState('success'); return; }

    setFormState('submitting');
    setErrorMsg('');

    const utms     = getUTMParams();
    const eventId  = generateEventId('CareerLead');
    const fullName = (data.get('fullName') as string).trim();
    const nameParts = fullName.split(' ');

    const desiredRole       = (data.get('desiredRole') as string).trim();
    const marketState       = (data.get('marketState') as string).trim();
    const availability      = (data.get('availability') as string).trim();
    const experienceSummary = (data.get('experienceSummary') as string).trim();
    const notes             = (data.get('notes') as string).trim();

    const payload = {
      firstName:          nameParts[0] || fullName,
      lastName:           nameParts.slice(1).join(' ') || '',
      phone:              (data.get('phone') as string).trim(),
      email:              (data.get('email') as string).trim(),
      postalCode:         '',
      serviceInterest:    'Career Application',
      desiredRole,
      marketState,
      availability,
      experienceSummary,
      applicantNotes:     notes,
      advisorSummary:     `Career applicant ${fullName} applied for ${desiredRole}. Market: ${marketState}. Availability: ${availability}.`,
      tags:               getStagingAwareTags(['newera_career_applicant']),
      pageUrl:            utms.pageUrl,
      utmSource:          utms.utmSource,
      utmMedium:          utms.utmMedium,
      utmCampaign:        utms.utmCampaign,
      utmContent:         utms.utmContent,
      utmTerm:            utms.utmTerm,
      eventId,
      timestamp:          new Date().toISOString(),
    };

    try {
      const result = await submitLead(payload);
      if (result.ok) {
        fireMetaPixelLead(eventId, 'Career Application', 10.0);
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
          <h3 className="font-poppins font-bold text-2xl text-newera-dark-gray mb-2">Application Received!</h3>
          <p className="text-[#5F6F75] font-sans text-base leading-relaxed max-w-md">
            Our hiring team reviews applications weekly and will reach out if there is a fit.
            Thank you for your interest in joining New Era Solar Energy.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="career-form" className="bg-white border border-[#e5e5e5] rounded-3xl p-8 shadow-sm">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <input name="website" type="text" className="absolute opacity-0 pointer-events-none h-0 w-0"
          tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={wrap + ' sm:col-span-2'}>
            <label htmlFor="fullName" className={lbl}>Full Name *</label>
            <input id="fullName" name="fullName" type="text" placeholder="Alex Ramirez" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="email" className={lbl}>Email Address *</label>
            <input id="email" name="email" type="email" placeholder="alex@email.com" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="phone" className={lbl}>Phone Number *</label>
            <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="desiredRole" className={lbl}>Desired Role *</label>
            <select id="desiredRole" name="desiredRole" required className={field}>
              <option value="">Select role...</option>
              {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div className={wrap}>
            <label htmlFor="marketState" className={lbl}>Market / State *</label>
            <select id="marketState" name="marketState" required className={field}>
              <option value="">Select...</option>
              {MARKETS.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <div className={wrap + ' sm:col-span-2'}>
            <label htmlFor="availability" className={lbl}>Availability *</label>
            <select id="availability" name="availability" required className={field}>
              <option value="">Select...</option>
              {AVAIL_OPTS.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>

        <div className={wrap}>
          <label htmlFor="experienceSummary" className={lbl}>Experience Summary * (in place of resume)</label>
          <textarea id="experienceSummary" name="experienceSummary" rows={4}
            placeholder="Describe your relevant experience, skills, and why you want to join New Era Solar Energy..."
            required
            className="w-full bg-transparent border-none focus:ring-0 text-sm p-0 text-newera-dark-gray placeholder:text-[#5F6F75]/40 outline-none font-sans resize-none" />
        </div>

        <div className={wrap}>
          <label htmlFor="notes" className={lbl}>Additional Notes (optional)</label>
          <textarea id="notes" name="notes" rows={2}
            placeholder="Anything else you'd like us to know..."
            className="w-full bg-transparent border-none focus:ring-0 text-sm p-0 text-newera-dark-gray placeholder:text-[#5F6F75]/40 outline-none font-sans resize-none" />
        </div>

        {formState === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-700 font-sans">{errorMsg}</div>
        )}

        <button type="submit" disabled={formState === 'submitting'}
          className="w-full bg-[#ff5722] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#ff5722]/20 hover:bg-[#e04a1b] hover:translate-y-[-1px] transition-all font-sans active:translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed">
          {formState === 'submitting' ? 'Submitting...' : 'Submit Application →'}
        </button>
      </form>
    </div>
  );
}
