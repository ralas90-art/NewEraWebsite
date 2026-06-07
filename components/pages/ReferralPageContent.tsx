import React from 'react';
import Link from 'next/link';
import { referralPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';
import { ReferralForm } from '@/components/forms/ReferralForm';

interface ReferralPageContentProps {
  locale: Locale;
}

export default function ReferralPageContent({ locale }: ReferralPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? referralPageTranslations.es : referralPageTranslations.en;

  const faqItems = isSpanish
    ? [
        {
          q: '¿Cuánto recibiré por un referido?',
          a: 'Recibirá $1,000 por cada propietario referido cuyo sistema solar esté completamente instalado y activado por New Era Solar Energy.',
        },
        {
          q: '¿Hay un límite de personas que puedo referir?',
          a: 'No. Puede referir a tantos propietarios como desee. Cada instalación calificada le otorga $1,000.',
        },
        {
          q: '¿Cuándo recibiré el pago?',
          a: 'Las recompensas de referido se pagan dentro de los 30 días posteriores a la activación del sistema del propietario referido. Consulte los términos y condiciones del programa para ver todos los detalles.',
        },
      ]
    : [
        {
          q: 'How much do I get for a referral?',
          a: 'You receive $1,000 for each referred homeowner whose solar system is fully installed and activated by New Era Solar Energy.',
        },
        {
          q: 'Is there a limit to how many people I can refer?',
          a: 'No. You can refer as many homeowners as you want. Every qualified installation earns you $1,000.',
        },
        {
          q: 'When do I get paid?',
          a: "Referral rewards are paid within 30 days of the referred homeowner's system activation. See program terms and conditions for full details.",
        },
      ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isSpanish ? 'Programa de Referidos de Energía Solar' : 'Solar Referral Program',
    provider: { '@type': 'Organization', name: 'New Era Solar Energy' },
    description: isSpanish
      ? 'Gane $1,000 por cada propietario que refiera y que instale paneles solares con New Era Solar Energy.'
      : 'Earn $1,000 for every homeowner you refer who installs solar with New Era Solar Energy.',
    areaServed: ['FL', 'MA', 'CT'],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isSpanish ? 'Inicio' : 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: isSpanish ? 'Programa de Referidos' : 'Referral Program', item: isSpanish ? 'https://newerasolarenergy.com/es/referral' : 'https://newerasolarenergy.com/referral' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#14324b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-6 text-xs text-[#4e5257] font-sans flex items-center gap-2">
        <Link href={isSpanish ? '/es' : '/'} className="hover:text-[#ff5722] transition-colors">
          {isSpanish ? 'Inicio' : 'Home'}
        </Link>
        <span>/</span>
        <span className="text-[#14324b] font-semibold">
          {isSpanish ? 'Programa de Referidos' : 'Referral Program'}
        </span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block bg-[#ff572220]/50 text-[#ff5722] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          {t.heroTag}
        </span>
        <h1 className="font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#14324b] leading-[1.1] mb-6">
          {isSpanish ? (
            <>Obtenga un Pago de <span className="text-[#ff5722]">$1,000</span><br />por Cada Referido Solar</>
          ) : (
            <>Get Paid <span className="text-[#ff5722]">$1,000</span><br />for Every Solar Referral</>
          )}
        </h1>
        <p className="text-[#4e5257] text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10">
          {t.heroDesc}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#referral-form"
            className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all shadow-lg shadow-[#ff5722]/25 font-sans"
          >
            {t.btnRefer}
          </a>
          <Link
            href={isSpanish ? '/es/solar' : '/solar'}
            className="bg-[#14324b] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#14324b]/90 transition-colors font-sans"
          >
            {t.btnLearn}
          </Link>
        </div>
        <p className="text-[10px] text-[#4e5257] font-sans mt-4 italic">
          {t.disclaimer}
        </p>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-poppins font-bold text-3xl text-[#14324b] text-center mb-12">
          {t.howTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.steps.map((step) => (
            <div key={step.num} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <span className="text-[#082fa3] text-xs font-black uppercase tracking-widest">{step.num}</span>
              <h3 className="font-poppins font-bold text-lg text-[#14324b] mt-2 mb-3">{step.title}</h3>
              <p className="text-[#4e5257] text-sm font-sans leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm text-amber-800 font-sans leading-relaxed mt-8 max-w-3xl mx-auto">
          <strong>{t.noticeTitle}</strong> {t.noticeDesc}
        </div>
      </section>

            {/* Trust Statement Section */}
      <section className="max-w-3xl mx-auto px-6 pb-12 text-center">
        <div className="bg-[#ff5722]/5 border border-[#ff5722]/15 rounded-2xl p-6 md:p-8">
          <p className="text-[#14324b] font-sans text-sm md:text-base leading-relaxed italic font-medium">
            &ldquo;{t.referralTrust}&rdquo;
          </p>
        </div>
      </section>

{/* Referral Form */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <ReferralForm />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="font-poppins font-bold text-2xl text-[#14324b] mb-8 text-center">
          {t.faqTitle}
        </h2>
        <div className="space-y-4">
          {faqItems.map(({ q, a }) => (
            <div key={q} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
              <h3 className="font-poppins font-semibold text-[#14324b] text-base mb-2">{q}</h3>
              <p className="text-[#4e5257] text-sm font-sans leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

