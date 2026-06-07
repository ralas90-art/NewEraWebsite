import React from 'react';
import Link from 'next/link';
import { dealerPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';
import { DealerApplicationForm } from '@/components/forms/DealerApplicationForm';
import { Shield, Flag, Home, Users, DollarSign, Award } from 'lucide-react';

interface DealerPageContentProps {
  locale: Locale;
}

export default function DealerPageContent({ locale }: DealerPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? dealerPageTranslations.es : dealerPageTranslations.en;

  const faqItems = isSpanish
    ? [
        {
          q: '¿Necesito una licencia de energía solar para asociarme?',
          a: 'Los requisitos de licencia varían según el estado y el tipo de asociación. Revisamos las credenciales como parte del proceso de solicitud y le guiaremos sobre los requisitos aplicables.',
        },
        {
          q: '¿Ustedes proporcionan prospectos (leads)?',
          a: 'El soporte de prospectos varía según el nivel de asociación y el territorio. Esto se analiza en detalle durante la llamada de incorporación del socio.',
        },
        {
          q: '¿Cuánto tiempo toma el proceso de solicitud?',
          a: 'Nuestro equipo de socios revisa las solicitudes y generalmente responde dentro de los 2 días hábiles para programar una llamada de presentación.',
        },
      ]
    : [
        {
          q: 'Do I need a solar license to partner?',
          a: 'Licensing requirements vary by state and partnership type. We review credentials as part of the application process and will guide you on any requirements.',
        },
        {
          q: 'Do you provide leads?',
          a: 'Lead support varies by partnership level and territory. This is discussed in detail during your partner onboarding call.',
        },
        {
          q: 'How long does the application process take?',
          a: 'Our partner team reviews applications and typically responds within 2 business days to schedule an introductory call.',
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

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'New Era Solar Energy',
    description: isSpanish
      ? 'Servicios residenciales de energía solar, techado y purificación de agua en FL, MA y CT.'
      : 'Residential solar, roofing, and water purification services across FL, MA, and CT.',
    url: 'https://newerasolarenergy.com',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isSpanish ? 'Inicio' : 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: isSpanish ? 'Hazte Distribuidor' : 'Become a Dealer', item: isSpanish ? 'https://newerasolarenergy.com/es/dealer' : 'https://newerasolarenergy.com/dealer' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#14324b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-6 text-xs text-[#4e5257] font-sans flex items-center gap-2">
        <Link href={isSpanish ? '/es' : '/'} className="hover:text-[#ff5722] transition-colors">
          {isSpanish ? 'Inicio' : 'Home'}
        </Link>
        <span>/</span>
        <span className="text-[#14324b] font-semibold">
          {isSpanish ? 'Hazte Distribuidor' : 'Become a Dealer'}
        </span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#14324b] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a4a75] via-[#123B5D] to-[#0d2d4a] pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block bg-[#ff5722]/20 text-[#ff5722] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              {t.heroTag}
            </span>
            <h1 className="font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              {isSpanish ? (
                <>Haga Crecer su Negocio como Socio<br />de <span className="text-[#ff5722]">New Era Solar</span></>
              ) : (
                <>Grow Your Business as a<br /><span className="text-[#ff5722]">New Era Solar Partner</span></>
              )}
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10">
              {t.heroDesc}
            </p>
            <a
              href="#dealer-form"
              className="inline-block bg-[#ff5722] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all shadow-lg shadow-[#ff5722]/25 font-sans"
            >
              {t.btnApply}
            </a>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-poppins font-bold text-3xl text-[#14324b] text-center mb-12">
          {t.whyTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.whyCards.map((card) => (
            <div key={card.title} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-poppins font-bold text-lg text-[#14324b] mb-3">{card.title}</h3>
              <p className="text-[#4e5257] text-sm font-sans leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Types */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-poppins font-bold text-3xl text-[#14324b] text-center mb-12">
          {t.whoTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.partnerTypes.map((type) => (
            <div key={type.title} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow text-center">
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className="font-poppins font-bold text-lg text-[#14324b] mb-3">{type.title}</h3>
              <p className="text-[#4e5257] text-sm font-sans leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

            {/* Partner Trust Section */}
      <section className="bg-white border-t border-b border-[#E2E8F0] py-16 px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest mb-2 block font-poppins">
              {isSpanish ? 'Confianza Mutua' : 'Mutual Trust'}
            </span>
            <h2 className="font-poppins font-bold text-3xl text-[#14324b] tracking-tight">
              {t.dealerTrustTitle}
            </h2>
            <p className="text-[#4e5257] text-sm md:text-base mt-3 font-sans leading-relaxed">
              {t.dealerTrustDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.dealerTrustBenefits && t.dealerTrustBenefits.map((val, idx) => {
              const icons = [Shield, Flag, Home, Users, DollarSign, Award];
              const Icon = icons[idx] || Shield;
              return (
                <div 
                  key={idx} 
                  className="bg-[#F9FAFB] p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#ff5722]/30 transition-all flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 flex items-center justify-center text-[#ff5722] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-base text-[#14324b] mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-[#4e5257] text-xs leading-relaxed font-sans">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

{/* Application Form */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <DealerApplicationForm />
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

