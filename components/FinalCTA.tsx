'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Sun, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');

  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = isSpanish ? '/es/contact' : '/contact';
    }
  };

  const t = isSpanish
    ? {
        headline: '\u00bfListo para Cambiar a Solar?',
        subtext: 'Obtenga su evaluaci\u00f3n personalizada gratis hoy. Sin presi\u00f3n, sin obligaci\u00f3n \u2014 solo orientaci\u00f3n clara de expertos solares en Florida.',
        primaryCta: 'Solicitar Evaluaci\u00f3n Gratis',
        secondaryCta: 'Llamar Ahora',
        badge1: 'Evaluaci\u00f3n Gratis',
        badge2: 'Sin Presi\u00f3n',
        badge3: 'Respuesta R\u00e1pida',
      }
    : {
        headline: 'Ready to Make the Switch to Solar?',
        subtext: 'Get your free personalized assessment today. No pressure, no obligation \u2014 just clear guidance from Florida solar experts.',
        primaryCta: 'Get a Free Solar Assessment',
        secondaryCta: 'Call Us Now',
        badge1: 'Free Assessment',
        badge2: 'No Pressure',
        badge3: 'Same-Day Response',
      };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="relative rounded-[1rem] bg-gradient-to-r from-[#ff5722]/5 via-white to-[#F59E0B]/5 border border-[#E2E8F0] p-8 md:p-12 text-center shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#ff5722]/10 flex items-center justify-center">
              <Sun className="w-7 h-7 text-[#ff5722]" />
            </div>
          </div>

          <h2 className="font-poppins font-bold text-2xl md:text-4xl text-[#14324b] mb-4">
            {t.headline}
          </h2>
          <p className="text-[#4e5257] text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
            {t.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={isSpanish ? '/es/calculate-savings' : '/calculate-savings'}
              className="inline-flex items-center gap-2 bg-[#ff5722] text-white font-poppins font-bold text-base px-8 py-4 rounded-[0.75rem] shadow-[0_8px_30px_rgba(255,87,34,0.25)] hover:bg-[#e04a1b] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto justify-center cursor-pointer text-center"
            >
              {t.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+13213813192"
              className="inline-flex items-center gap-2 border-2 border-[#14324b] text-[#14324b] hover:bg-[#14324b] hover:text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-[0.75rem] transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
              {t.secondaryCta}
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-sans text-[#6B7280]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]" />
                {t.badge1}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                {t.badge2}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#082fa3]" />
                {t.badge3}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
