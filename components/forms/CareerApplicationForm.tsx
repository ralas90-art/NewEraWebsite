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

const ROLES_EN = [
  'Solar Sales Consultant',
  'Roofing / Home Upgrade Advisor',
  'Appointment Setter',
  'Customer Success Specialist',
  'Dealer Partner / Territory Partner',
];

const ROLES_ES = [
  'Consultor de Ventas Solares',
  'Asesor de Techo / Mejoras para el Hogar',
  'Coordinador de Citas (Setter)',
  'Especialista en Éxito del Cliente',
  'Socio Distribuidor / Socio de Territorio',
];

const MARKETS_EN = ['FL', 'MA', 'CT', 'Other'];
const MARKETS_ES = ['FL', 'MA', 'CT', 'Otro'];

const AVAIL_OPTS_EN = ['Full-time', 'Part-time', 'Contract'];
const AVAIL_OPTS_ES = ['Tiempo completo', 'Medio tiempo', 'Contratista / Por contrato'];

export function CareerApplicationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');

  const roles = isSpanish ? ROLES_ES : ROLES_EN;
  const markets = isSpanish ? MARKETS_ES : MARKETS_EN;
  const availOpts = isSpanish ? AVAIL_OPTS_ES : AVAIL_OPTS_EN;

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
      advisorSummary:     isSpanish
        ? `Candidato de empleo ${fullName} aplicó para ${desiredRole}. Mercado: ${marketState}. Disponibilidad: ${availability}.`
        : `Career applicant ${fullName} applied for ${desiredRole}. Market: ${marketState}. Availability: ${availability}.`,
      tags:               getStagingAwareTags(['newera_career_applicant', isSpanish ? 'newera_career_applicant_es' : 'newera_career_applicant_en']),
      pageUrl:            utms.pageUrl,
      utmSource:          utms.utmSource,
      utmMedium:          utms.utmMedium,
      utmCampaign:        utms.utmCampaign,
      utmContent:         utms.utmContent,
      utmTerm:            utms.utmTerm,
      eventId,
      timestamp:          new Date().toISOString(),
      language:           isSpanish ? 'es' : 'en',
      sourcePage:         pathname
    };

    try {
      const result = await submitLead(payload);
      if (result.ok) {
        fireMetaPixelLead(eventId, 'Career Application', 10.0);
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
          <h3 className="font-poppins font-bold text-2xl text-newera-dark-gray mb-2">
            {isSpanish ? '¡Solicitud Recibida!' : 'Application Received!'}
          </h3>
          <p className="text-[#5F6F75] font-sans text-base leading-relaxed max-w-md">
            {isSpanish
              ? 'Nuestro equipo de selección de personal revisa las solicitudes semanalmente y se pondrá en contacto si hay una vacante compatible. ¡Gracias por su interés en unirse a New Era Solar Energy!'
              : 'Our hiring team reviews applications weekly and will reach out if there is a fit. Thank you for your interest in joining New Era Solar Energy.'}
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
            <label htmlFor="fullName" className={lbl}>
              {isSpanish ? 'Nombre Completo *' : 'Full Name *'}
            </label>
            <input id="fullName" name="fullName" type="text" placeholder={isSpanish ? 'Alejandro Ramírez' : 'Alex Ramirez'} required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="email" className={lbl}>
              {isSpanish ? 'Correo Electrónico *' : 'Email Address *'}
            </label>
            <input id="email" name="email" type="email" placeholder="alex@email.com" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="phone" className={lbl}>
              {isSpanish ? 'Número de Teléfono *' : 'Phone Number *'}
            </label>
            <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required className={field} />
          </div>
          <div className={wrap}>
            <label htmlFor="desiredRole" className={lbl}>
              {isSpanish ? 'Puesto Deseado *' : 'Desired Role *'}
            </label>
            <select id="desiredRole" name="desiredRole" required className={field}>
              <option value="">{isSpanish ? 'Seleccione puesto...' : 'Select role...'}</option>
              {roles.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div className={wrap}>
            <label htmlFor="marketState" className={lbl}>
              {isSpanish ? 'Mercado / Estado *' : 'Market / State *'}
            </label>
            <select id="marketState" name="marketState" required className={field}>
              <option value="">{isSpanish ? 'Seleccione...' : 'Select...'}</option>
              {markets.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <div className={wrap + ' sm:col-span-2'}>
            <label htmlFor="availability" className={lbl}>
              {isSpanish ? 'Disponibilidad *' : 'Availability *'}
            </label>
            <select id="availability" name="availability" required className={field}>
              <option value="">{isSpanish ? 'Seleccione...' : 'Select...'}</option>
              {availOpts.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>

        <div className={wrap}>
          <label htmlFor="experienceSummary" className={lbl}>
            {isSpanish ? 'Resumen de Experiencia * (en lugar de currículum)' : 'Experience Summary * (in place of resume)'}
          </label>
          <textarea id="experienceSummary" name="experienceSummary" rows={4}
            placeholder={isSpanish 
              ? 'Describa su experiencia relevante, habilidades y por qué desea unirse a New Era Solar Energy...' 
              : 'Describe your relevant experience, skills, and why you want to join New Era Solar Energy...'}
            required
            className="w-full bg-transparent border-none focus:ring-0 text-sm p-0 text-newera-dark-gray placeholder:text-[#5F6F75]/40 outline-none font-sans resize-none" />
        </div>

        <div className={wrap}>
          <label htmlFor="notes" className={lbl}>
            {isSpanish ? 'Notas Adicionales (opcional)' : 'Additional Notes (optional)'}
          </label>
          <textarea id="notes" name="notes" rows={2}
            placeholder={isSpanish 
              ? 'Cualquier otra cosa que desee que sepamos...' 
              : 'Anything else you\'d like us to know...'}
            className="w-full bg-transparent border-none focus:ring-0 text-sm p-0 text-newera-dark-gray placeholder:text-[#5F6F75]/40 outline-none font-sans resize-none" />
        </div>

        {formState === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-sm text-red-700 font-sans">{errorMsg}</div>
        )}

        <button type="submit" disabled={formState === 'submitting'}
          className="w-full bg-[#ff5722] text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#ff5722]/20 hover:bg-[#e04a1b] hover:translate-y-[-1px] transition-all font-sans active:translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
          {formState === 'submitting' 
            ? (isSpanish ? 'Enviando...' : 'Submitting...') 
            : (isSpanish ? 'Enviar Solicitud →' : 'Submit Application →')}
        </button>
      </form>
    </div>
  );
}

