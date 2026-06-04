import React from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n/language';

interface ReferralTermsPageContentProps {
  locale: Locale;
}

export default function ReferralTermsPageContent({ locale }: ReferralTermsPageContentProps) {
  const isSpanish = locale === 'es';

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-newera-dark-gray py-12 px-6">
      <main className="max-w-3xl mx-auto bg-white border border-[#e5e5e5] rounded-3xl p-8 md:p-12 shadow-sm">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#5F6F75] font-sans flex items-center gap-2 mb-6">
          <Link href={isSpanish ? '/es' : '/'} className="hover:text-[#ff5722] transition-colors">
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
          <span>/</span>
          <Link href={isSpanish ? '/es/referral' : '/referral'} className="hover:text-[#ff5722] transition-colors">
            {isSpanish ? 'Programa de Referidos' : 'Referral Program'}
          </Link>
          <span>/</span>
          <span className="text-newera-dark-gray font-semibold">
            {isSpanish ? 'Términos y Condiciones' : 'Terms & Conditions'}
          </span>
        </nav>

        <h1 className="font-poppins font-bold text-3xl text-newera-dark-gray mb-6">
          {isSpanish ? 'Términos y Condiciones del Programa de Referidos' : 'Referral Program Terms & Conditions'}
        </h1>

        <p className="text-xs text-[#ff5722] font-semibold font-sans mb-4">
          {isSpanish
            ? 'Última actualización: Junio de 2026 — Pendiente de Aprobación Final del Cliente'
            : 'Last Updated: June 2026 — Pending Final Client Approval'}
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm text-amber-800 font-sans leading-relaxed mb-8 flex gap-3 items-start">
          <span className="text-xl shrink-0">⚠️</span>
          {isSpanish ? (
            <div>
              <strong className="block mb-1 font-bold text-amber-900">Requiere Revisión del Cliente — Copia Preliminar</strong>
              Este documento es una versión preliminar de los Términos y Condiciones del Programa de Referidos preparada para la revisión del cliente. No es definitivo y no constituye asesoría legal. No presente ni distribuya estos términos al público o como política definitiva hasta que sean revisados oficialmente, ajustados y aprobados por New Era Solar Energy.
            </div>
          ) : (
            <div>
              <strong className="block mb-1 font-bold text-amber-900">Client Review Required — Draft Copy</strong>
              This document is a draft version of the Referral Program Terms & Conditions prepared for client review. It is not final and does not constitute legal advice. Do not present or distribute these terms to the public or as final policy until they are officially reviewed, adjusted, and approved by New Era Solar Energy.
            </div>
          )}
        </div>

        {isSpanish ? (
          <div className="space-y-6 text-sm text-[#5F6F75] font-sans leading-relaxed">
            <section>
              <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">1. Resumen del Programa</h2>
              <p>
                New Era Solar Energy (la &quot;Compañía&quot;) ofrece un Programa de Recompensas de Referidos (el &quot;Programa&quot;) para incentivar a los participantes a recomendar a propietarios de viviendas elegibles para cambiarse a energía solar residencial. Al enviar un referido, usted acepta estos Términos y Condiciones del Programa.
              </p>
            </section>

            <section>
              <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">2. Elegibilidad del Referido</h2>
              <p>
                Para ser elegible para una recompensa de referido bajo este Programa:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>El referente debe ser residente legal de los Estados Unidos y tener al menos 18 años de edad.</li>
                <li>El referido (contacto recomendado) debe residir en un estado atendido por la Compañía (ej. Florida, Massachusetts, Connecticut).</li>
                <li>El referido debe ser propietario de la propiedad residencial donde se propone la instalación del sistema solar.</li>
                <li>El referido no debe ser un contacto existente, prospecto de lead o cliente de la Compañía al momento del envío del referido.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">3. Estructura de Recompensas y Pago</h2>
              <p>
                Por cada referido que califique, el referente es elegible para recibir una recompensa de referido de <strong>$1,000</strong>.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>La recompensa de referido se obtiene únicamente después de que el sistema de energía solar del referido esté completamente instalado, interconectado a la red de servicios públicos (con Permiso de Operación / PTO emitido) y se completen todos los pagos del contrato o asignaciones de financiamiento.</li>
                <li>Las recompensas de referidos se procesan y pagan dentro de los treinta (30) días posteriores a la activación y verificación completa del sistema del referido.</li>
                <li>No hay límite en el número de referidos que un participante puede enviar o en las recompensas que puede obtener.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">4. Consideraciones Fiscales y Legales</h2>
              <p>
                El referente es el único responsable de cualquier obligación fiscal derivada de los pagos de recompensas recibidos. Los pagos del programa no representan contribuciones benéficas deducibles de impuestos. Si los pagos de referidos exceden los límites federales, la Compañía puede requerir un Formulario W-9 completo antes de procesar las recompensas y emitirá un Formulario 1099-NEC según lo requiera el Servicio de Impuestos Internos (IRS).
              </p>
            </section>

            <section>
              <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">5. Modificación y Terminación</h2>
              <p>
                La Compañía se reserva el derecho de modificar, suspender o rescindir el Programa, o cambiar la estructura de recompensas en cualquier momento con o sin previo aviso. Los referidos enviados antes de la terminación del programa serán honrados sujetos a las pautas de elegibilidad.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-6 text-sm text-[#5F6F75] font-sans leading-relaxed">
            <section>
              <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">1. Program Overview</h2>
              <p>
                New Era Solar Energy (the &quot;Company&quot;) offers a Referral Rewards Program (the &quot;Program&quot;) to encourage participants to refer qualified homeowners to switch to residential solar. By submitting a referral, you agree to these Program Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">2. Referral Eligibility</h2>
              <p>
                To be eligible for a referral reward under this Program:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The referrer must be a legal resident of the United States and at least 18 years of age.</li>
                <li>The referee (referred friend or contact) must reside in a state served by the Company (e.g. Florida, Massachusetts, Connecticut).</li>
                <li>The referee must own the residential property where the solar system is proposed for installation.</li>
                <li>The referee must not be an existing contact, lead prospect, or customer of the Company at the time of referral submission.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">3. Reward Structure & Payment</h2>
              <p>
                For each qualified referral, the referrer is eligible to receive a referral reward of <strong>$1,000</strong>.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>The referral reward is earned only after the referee&apos;s solar energy system is fully installed, utility-connected (Permission to Operate / PTO issued), and all contract payments or financing allocations are completed.</li>
                <li>Referral rewards are processed and paid within thirty (30) days following the system&apos;s full activation and verification.</li>
                <li>There is no limit to the number of referrals a participant can submit or rewards they can earn.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">4. Tax & Legal Considerations</h2>
              <p>
                Referrer is solely responsible for any tax liabilities arising from referral payments received. Program payments are not tax-deductible contributions. If referral payouts exceed federal limits, the Company may require a completed Form W-9 before processing rewards, and will issue a Form 1099-NEC as required by the Internal Revenue Service (IRS).
              </p>
            </section>

            <section>
              <h2 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">5. Modification & Termination</h2>
              <p>
                The Company reserves the right to modify, suspend, or terminate the Program, or change reward structures at any time with or without prior notice. Any referrals submitted prior to termination will be honored subject to eligibility guidelines.
              </p>
            </section>
          </div>
        )}

        <div className="border-t border-[#e5e5e5] mt-12 pt-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={isSpanish ? '/es/referral' : '/referral'}
            className="bg-[#ff5722] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#e04a1b] transition-colors font-sans"
          >
            {isSpanish ? '← Volver al Formulario' : '← Return to Referral Form'}
          </Link>
          <a
            href="tel:+13213813192"
            className="text-newera-dark-gray hover:text-[#ff5722] text-xs font-bold transition-colors font-sans"
          >
            {isSpanish ? '¿Preguntas? Llame al (321) 381-3192' : 'Questions? Call (321) 381-3192'}
          </a>
        </div>
      </main>
    </div>
  );
}
