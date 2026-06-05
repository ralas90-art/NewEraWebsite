'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getUTMParams, generateEventId, getStagingAwareTags, submitLead, fireMetaPixelLead } from '@/lib/lead-submit';
import { leadFormTranslations, leadFormExtendedTranslations } from '@/lib/i18n/content';
import { User, Mail, Phone, MapPin, Lock, Sun, CheckCircle } from 'lucide-react';

export function LeadForm() {
  const [started, setStarted] = useState(false);
  const [homeOwner, setHomeOwner] = useState<string>('');
  const [electricBill, setElectricBill] = useState<string>('');
  const [serviceInterest, setServiceInterest] = useState<string>('Residential Solar');
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');
  const t = isSpanish ? leadFormTranslations.es : leadFormTranslations.en;
  const ext = isSpanish ? leadFormExtendedTranslations.es : leadFormExtendedTranslations.en;

  const handleInputFocus = () => {
    if (!started) {
      console.log(isSpanish ? 'lead_form_started_es' : 'lead_form_started');
      setStarted(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(isSpanish ? 'lead_form_submit_click_es' : 'lead_form_submit_click');

    const form = e.currentTarget;
    const fullName = (form.querySelector('#full-name') as HTMLInputElement)?.value || '';
    const phone = (form.querySelector('#phone') as HTMLInputElement)?.value || '';
    const email = (form.querySelector('#email') as HTMLInputElement)?.value || '';
    const postalCode = (form.querySelector('#zip') as HTMLInputElement)?.value || '';
    const honeypot = (form.querySelector('#honeypot') as HTMLInputElement)?.value || '';

    if (honeypot) {
      console.warn('lead_form_bot_blocked_via_honeypot');
      alert(t.successMessage);
      form.reset();
      setStarted(false);
      return;
    }

    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const utms = getUTMParams();
    const eventId = generateEventId('Lead');

    const tags = ['newera_home_upgrade_advisor', 'newera_solar_lead'];
    if (isSpanish) tags.push('newera_solar_lead_es');

    const payload = {
      firstName,
      lastName,
      phone,
      email,
      postalCode,
      serviceInterest,
      electricBillMonthly: electricBill || 'N/A',
      roofAge: 'N/A',
      roofingNeed: 'N/A',
      waterConcern: 'N/A',
      recommendedNextStep: isSpanish ? 'Solar Assessment - Full Form (ES)' : 'Solar Assessment - Full Form',
      preferredContactMethod: 'Call',
      bestContactTime: 'Anytime',
      advisorSummary: isSpanish
        ? `Propietario ${firstName} ${lastName} envi\u00f3 formulario completo de 7 campos en espa\u00f1ol. ZIP: ${postalCode}. Factura El\u00e9ctrica: ${electricBill || 'N/A'}. Propietario: ${homeOwner || 'N/A'}. Inter\u00e9s: ${serviceInterest}.`
        : `Homeowner ${firstName} ${lastName} submitted full 7-field assessment form. ZIP: ${postalCode}. Electric Bill: ${electricBill || 'N/A'}. Homeowner: ${homeOwner || 'N/A'}. Interest: ${serviceInterest}.`,
      tags: getStagingAwareTags(tags),
      pageUrl: utms.pageUrl,
      utmSource: utms.utmSource,
      utmMedium: utms.utmMedium,
      utmCampaign: utms.utmCampaign,
      utmContent: utms.utmContent,
      utmTerm: utms.utmTerm,
      eventId,
      timestamp: new Date().toISOString(),
      language: isSpanish ? 'es' : 'en',
      sourcePage: pathname,
    };

    console.log('ghl_payload_prepared', payload);
    try {
      const result = await submitLead(payload);
      if (result.ok) {
        fireMetaPixelLead(eventId, 'Full Assessment Form', 50.0);
        alert(t.successMessage);
        form.reset();
        setStarted(false);
        setHomeOwner('');
        setElectricBill('');
        setServiceInterest('Residential Solar');
      } else {
        alert(isSpanish ? 'Hubo un problema al enviar su solicitud. Por favor intente de nuevo o ll\u00e1menos.' : 'There was an issue submitting your request. Please try again or call us.');
      }
    } catch (err) {
      console.error('lead_submission_failed', err);
      alert(isSpanish ? 'El env\u00edo fall\u00f3. Por favor verifique su conexi\u00f3n.' : 'Submission failed. Please check your connection.');
    }
  };

  const billOptions = [
    { value: 'Under $100', label: ext.billUnder100 },
    { value: '$100-$150', label: ext.bill100to150 },
    { value: '$150-$200', label: ext.bill150to200 },
    { value: '$200-$300', label: ext.bill200to300 },
    { value: 'Over $300', label: ext.billOver300 },
  ];

  const serviceOptions = [
    { value: 'Residential Solar', label: ext.serviceResidentialSolar },
    { value: 'Roofing Review', label: ext.serviceRoofingReview },
    { value: 'Water Purification', label: ext.serviceWaterPurification },
    { value: 'All Three', label: ext.serviceAllThree },
  ];

  const benefits = [ext.benefitPersonalized, ext.benefitSavings, ext.benefitSameDay, ext.benefitBilingual];

  return (
    <section id="lead-form" className="scroll-mt-20 py-8">
      <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-[#E2E8F0]">
        {/* Left Info Panel */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#14324b] to-[#0F2340] text-white p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff5722]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F59E0B]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Sun className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h3 className="font-poppins font-bold text-xl md:text-2xl mb-3">
              {ext.panelTitle}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-8 font-sans">
              {ext.panelDesc}
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <span className="text-sm text-white/90 font-sans">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 border-t border-white/10 pt-6 mt-auto">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-white/50" />
              <span className="text-[11px] text-white/50 font-sans">{ext.panelSecure}</span>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="lg:col-span-3 bg-white p-8 lg:p-10">
          <div className="mb-6">
            <h4 className="font-poppins font-bold text-lg text-[#14324b]">{ext.formTitle}</h4>
            <p className="text-[12px] text-[#6B7280] font-sans mt-1">{ext.formSubtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <label htmlFor="full-name" className="sr-only">{ext.fullNameLabel}</label>
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" aria-hidden="true" />
              <input id="full-name" type="text" placeholder={ext.fullNamePlaceholder} required onFocus={handleInputFocus}
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#e5e5e5] bg-[#F9FAFB] focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/10 focus:outline-none text-[14px] text-[#4e5257] placeholder-[#9CA3AF] transition-all font-sans" />
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">{ext.emailLabel}</label>
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" aria-hidden="true" />
              <input id="email" type="email" placeholder={ext.emailPlaceholder} onFocus={handleInputFocus}
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#e5e5e5] bg-[#F9FAFB] focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/10 focus:outline-none text-[14px] text-[#4e5257] placeholder-[#9CA3AF] transition-all font-sans" />
            </div>

            {/* Phone */}
            <div className="relative">
              <label htmlFor="phone" className="sr-only">{ext.phoneLabel}</label>
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" aria-hidden="true" />
              <input id="phone" type="tel" placeholder={ext.phonePlaceholder} required onFocus={handleInputFocus}
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#e5e5e5] bg-[#F9FAFB] focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/10 focus:outline-none text-[14px] text-[#4e5257] placeholder-[#9CA3AF] transition-all font-sans" />
            </div>

            {/* Address / ZIP */}
            <div className="relative">
              <label htmlFor="zip" className="sr-only">{ext.addressLabel}</label>
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" aria-hidden="true" />
              <input id="zip" type="text" placeholder={ext.addressPlaceholder} required onFocus={handleInputFocus}
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#e5e5e5] bg-[#F9FAFB] focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/10 focus:outline-none text-[14px] text-[#4e5257] placeholder-[#9CA3AF] transition-all font-sans" />
            </div>

            {/* Homeownership */}
            <fieldset>
              <legend className="block text-[12px] font-semibold text-[#14324b] uppercase tracking-wide mb-2 font-poppins">{ext.homeownerLabel}</legend>
              <div className="flex gap-3" role="group">
                {[
                  { value: 'Yes', label: ext.homeownerYes },
                  { value: 'No', label: ext.homeownerNo },
                ].map((opt) => (
                  <button key={opt.value} type="button"
                    onClick={() => { setHomeOwner(opt.value); handleInputFocus(); }}
                    aria-pressed={homeOwner === opt.value}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all border cursor-pointer font-sans focus:outline-none focus:ring-2 focus:ring-[#ff5722]/20 ${
                      homeOwner === opt.value
                        ? 'bg-[#ff5722] text-white border-[#ff5722] shadow-sm'
                        : 'bg-[#F9FAFB] text-[#4e5257] border-[#e5e5e5] hover:border-[#ff5722]/40'
                    }`}
                  >{opt.label}</button>
                ))}
              </div>
            </fieldset>

            {/* Average Electric Bill */}
            <div>
              <label htmlFor="electric-bill" className="block text-[12px] font-semibold text-[#14324b] uppercase tracking-wide mb-2 font-poppins">{ext.electricBillLabel}</label>
              <select id="electric-bill" value={electricBill}
                onChange={(e) => { setElectricBill(e.target.value); handleInputFocus(); }}
                className="w-full px-4 py-3 rounded-xl border border-[#e5e5e5] bg-[#F9FAFB] focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722]/10 focus:outline-none text-[14px] text-[#4e5257] transition-all font-sans cursor-pointer"
              >
                <option value="">{ext.electricBillPlaceholder}</option>
                {billOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Service Interest */}
            <fieldset>
              <legend className="block text-[12px] font-semibold text-[#14324b] uppercase tracking-wide mb-2 font-poppins">{ext.serviceInterestLabel}</legend>
              <div className="grid grid-cols-2 gap-2" role="group">
                {serviceOptions.map((opt) => (
                  <button key={opt.value} type="button"
                    onClick={() => { setServiceInterest(opt.value); handleInputFocus(); }}
                    aria-pressed={serviceInterest === opt.value}
                    className={`py-2.5 px-3 rounded-xl text-[13px] font-semibold transition-all border cursor-pointer font-sans focus:outline-none focus:ring-2 focus:ring-[#ff5722]/20 ${
                      serviceInterest === opt.value
                        ? 'bg-[#ff5722] text-white border-[#ff5722] shadow-sm'
                        : 'bg-[#F9FAFB] text-[#4e5257] border-[#e5e5e5] hover:border-[#ff5722]/40'
                    }`}
                  >{opt.label}</button>
                ))}
              </div>
            </fieldset>

            {/* Honeypot */}
            <input id="honeypot" name="honeypot" type="text" className="absolute opacity-0 pointer-events-none" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            {/* Submit */}
            <button type="submit"
              className="w-full bg-gradient-to-r from-[#ff5722] to-[#F59E0B] text-white py-4 rounded-xl font-bold text-sm shadow-[0_8px_30px_rgba(255,87,34,0.25)] hover:shadow-[0_12px_40px_rgba(255,87,34,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer font-sans uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-[#ff5722]/30 focus:ring-offset-2"
            >{ext.submitButton}</button>

            {/* Privacy line */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <Lock className="w-3.5 h-3.5 text-[#9CA3AF]" aria-hidden="true" />
              <p className="text-[11px] text-[#6B7280] font-sans">{ext.privacyLine}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
