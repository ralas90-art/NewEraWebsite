'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ShieldCheck, PhoneCall, Languages, Zap } from 'lucide-react';
import { trustTranslations } from '@/lib/i18n/content';

export function TrustIndicators() {
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');
  const t = isSpanish ? trustTranslations.es : trustTranslations.en;

  const items = [
    { icon: ShieldCheck, title: t.assessmentTitle, desc: t.assessmentDesc },
    { icon: PhoneCall, title: t.pressureTitle, desc: t.pressureDesc },
    { icon: Languages, title: t.bilingualTitle, desc: t.bilingualDesc },
    { icon: Zap, title: t.supportTitle, desc: t.supportDesc },
  ];

  return (
    <section className="py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-2xl px-4 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-[17px] h-[17px] text-[#ff5722]" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#14324b] leading-tight font-poppins">{title}</p>
              <p className="text-[11px] text-[#6B7280] font-sans">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
