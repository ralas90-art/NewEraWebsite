'use client';

import React, { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
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

const VOLUME_OPTIONS_EN = [
  'Under $500K/year',
  '$500K – $1M/year',
  '$1M – $5M/year',
  '$5M – $10M/year',
  '$10M+/year',
  'Prefer not to say',
];

const VOLUME_OPTIONS_ES = [
  'Menos de $500K/año',
  '$500K – $1M/año',
  '$1M – $5M/año',
  '$5M – $10M/año',
  '$10M+/año',
  'Prefiero no decirlo',
];

export function DealerApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');

  const volumeOptions = isSpanish ? VOLUME_OPTIONS_ES : VOLUME_OPTIONS_EN;

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
      advisorSummary:   isSpanish
        ? `Solicitud de socio comercial de ${contactName} de ${(data.get('businessName') as string).trim()}. Estado: ${(data.get('stateTerritory') as string).trim()}. Volumen: ${(data.get('annualSalesVolume') as string).trim()}.`
        : `Dealer application from ${contactName} at ${(data.get('businessName') as string).trim()}. State: ${(data.get('stateTerritory') as string).trim()}. Volume: ${(data.get('annualSalesVolume') as string).trim()}.`,
      tags:             getStagingAwareTags(['newera_dealer_partner', isSpanish ? 'newera_dealer_partner_es' : 'newera_dealer_partner_en']),
      pageUrl:          utms.pageUrl,
      utmSource:        utms.utmSource,
      utmMedium:        utms.utmMedium,
      utmCampaign:      utms.utmCampaign,
      utmContent:       utms.utmContent,
      utmTerm:          utms.utmTerm,
      eventId,
      timestamp:        new Date().toISOString(),
      language:         isSpanish ? 'es' : 'en',
      sourcePage:       pathname
    };

    try {
      const result = await submitLead(payload);
      if (result.ok) {
        fireMetaPixelLead(eventId, 'Dealer Partner Application', 150.0);
        setFormState('success');
        formRef.current?.reset();
      } else {
        setFormState('error');
        setErrorMsg(isSpanish ? 'Hubo un problema al enviar su solicitud. Por favor intente de nuevo.' : 'There was an issue submitting your application. Please try again.');
      }
    } catch {
      setFormState('error');
      setErrorMsg(isSpanish ? 'El envío falló. Por favor verifique su conexión e intente de nuevo.' : 'Submission failed. Please check your connection and try again.');
    }
  };

  const wrap  = 'px-5 py-3 border border-[#E2E8F0] rounded-2xl bg-[#F9FAFB] transition-colors focus-within:border-[#082fa3] focus-within:bg-white focus-within:shadow-sm';
  const lbl   = 'block text-[10px] font-bold text-[#4e5257] uppercase mb-1 font-sans';
  const field = 'w-full bg-transparent border-none focus:ring-0 text-sm font-medium p-0 text-[#14324b] placeholder:text-[#4e5257]/40 outline-none font-sans';

  if (formState === 'success') {
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-3xl p-10 shadow-sm flex flex-col items-center text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-poppins font-bold text-2xl text-[#14324b] mb-2">
            {isSpanish ? '¡Solicitud Recibida!' : 'Application Received!'}
          </h3>
          <p className="text-[#4e5257] font-sans text-base leading-relaxed max-w-md">
            {isSpanish
              ? 'Nuestro equipo de desarrollo de socios se pondrá en contacto en un plazo de 2 días hábiles para coordinar los siguientes pasos.'
              : 'Our partner development team will be in touch within 2 business days to discuss next steps.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="dealer-form" className="bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-sm">
      <div className="mb-8">
        <span className="text-[#ff5722] text-[10px] font-black uppercase bg-[#ff572220]/30 px-3 py-1 rounded-full">
          {isSpanish ? 'Solicitud de Socios' : 'Partner Application'}
        </span>
        <h2 className="font-poppins font-bold text-2xl text-[#14324b] mt-3 mb-2">
          {isSpanish ? 'Postularse para Ser Socio' : 'Apply to Become a Partner'}
        </h2>
        <p className="text-[#4e5257] text-sm font-sans">
          {isSpanish
            ? 'Complete el formulario a continuación. Los campos marcados con * son requeridos.'
            : 'Complete the form below. Fields marked * are required.'}
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <input name="website" type="text" className="absolute opacity-0 pointer-events-none h-0 w-0"
          tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={wrap + ' sm:col-span-2'}>
            <label htmlFor="businessName" className={lbl}>
              {isSpanish ? 'Nombre de la Empresa / Compañía *' : 'Business / Company Name *'}
            </label>
            <input id="businessName" name="businessName" type="text" placeholder={isSpanish ? 'Sunshine Solar SRL' : 'Sunshine Solar LLC'} required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="contactName" className={lbl}>
              {isSpanish ? 'Nombre del Contacto Principal *' : 'Primary Contact Name *'}
            </label>
            <input id="contactName" name="contactName" type="text" placeholder={isSpanish ? 'Alejandro Ramírez' : 'Alex Ramirez'} required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="email" className={lbl}>
              {isSpanish ? 'Correo Electrónico Comercial *' : 'Business Email *'}
            </label>
            <input id="email" name="email" type="email" placeholder="alex@company.com" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="phone" className={lbl}>
              {isSpanish ? 'Número de Teléfono *' : 'Phone Number *'}
            </label>
            <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="licenseNumber" className={lbl}>
              {isSpanish ? 'Número de Licencia (si aplica)' : 'License Number (if applicable)'}
            </label>
            <input id="licenseNumber" name="licenseNumber" type="text" placeholder="CVC-12345" className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="stateTerritory" className={lbl}>
              {isSpanish ? 'Estado / Territorio Principal *' : 'Primary State / Territory *'}
            </label>
            <select id="stateTerritory" name="stateTerritory" required className={field}>
              <option value="">{isSpanish ? 'Seleccione estado...' : 'Select state...'}</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className={wrap}>
            <label htmlFor="annualSalesVolume" className={lbl}>
              {isSpanish ? 'Volumen de Ventas Anual *' : 'Annual Sales Volume *'}
            </label>
            <select id="annualSalesVolume" name="annualSalesVolume" required className={field}>
              <option value="">{isSpanish ? 'Seleccione rango...' : 'Select range...'}</option>
              {volumeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div className={wrap + ' sm:col-span-2'}>
            <label htmlFor="currentPartners" className={lbl}>
              {isSpanish ? 'Socios / Instaladores Solares Actuales (si aplica)' : 'Current Solar Partners / Installers (if any)'}
            </label>
            <input id="currentPartners" name="currentPartners" type="text" placeholder={isSpanish ? 'ej. SunPower, Tesla Energy, EPC local...' : 'e.g. SunPower, Tesla Energy, local EPC...'} className={field} />
          </div>
        </div>

        {formState === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-700 font-sans">{errorMsg}</div>
        )}

        <button type="submit" disabled={formState === 'submitting'}
          className="w-full bg-[#14324b] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-newera-dark-blue/20 hover:bg-[#14324b]/90 hover:translate-y-[-1px] transition-all font-sans active:translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
          {formState === 'submitting' 
            ? (isSpanish ? 'Enviando Solicitud...' : 'Submitting Application...') 
            : (isSpanish ? 'Enviar Solicitud de Socio →' : 'Submit Partner Application →')}
        </button>
        <p className="text-xs text-[#4e5257] font-sans text-center">
          {isSpanish 
            ? 'Nuestro equipo de desarrollo de socios revisa las solicitudes y responde dentro de 2 días hábiles.'
            : 'Our partner development team reviews applications and typically responds within 2 business days.'}
        </p>
      </form>
    </div>
  );
}



