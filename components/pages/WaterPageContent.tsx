import React from 'react';
import Link from 'next/link';
import { waterPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';

interface WaterPageContentProps {
  locale: Locale;
}

export default function WaterPageContent({ locale }: WaterPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? waterPageTranslations.es : waterPageTranslations.en;

  const faqs = isSpanish
    ? [
        {
          question: '¿Qué contaminantes elimina un filtro para toda la casa?',
          answer:
            'Depende del tipo de sistema y de su fuente de agua específica. Primero analizamos su agua para identificar qué contiene y luego recomendamos la solución adecuada, ya sea filtración de sedimentos, de carbón, ablandamiento de agua o una combinación.',
        },
        {
          question: '¿Con qué frecuencia se deben reemplazar los filtros?',
          answer:
            'Normalmente cada 6 a 12 meses, según el uso y la calidad del agua entrante. Ofrecemos un programa de servicio con cada instalación para que siempre sepa cuándo vence el mantenimiento.',
        },
        {
          question: '¿Es segura para beber el agua de ósmosis inversa (RO)?',
          answer:
            'Sí. La ósmosis inversa elimina una amplia gama de contaminantes disueltos. Instalamos sistemas certificados según las normas NSF/ANSI, para que pueda confiar en lo que sale de su grifo.',
        },
        {
          question: '¿Se puede combinar la filtración de agua con la energía solar?',
          answer:
            'Absolutamente. Ofrecemos consultas integrales de mejoras para el hogar que cubren energía solar, techado y filtración de agua de manera conjunta: una sola evaluación, un solo equipo y un plan coordinado para su hogar.',
        },
      ]
    : [
        {
          question: 'What contaminants does a whole-house filter remove?',
          answer:
            'It depends on the system type and your specific water source. We test your water first to identify what is present, then recommend the right solution — whether that is sediment filtration, carbon filtration, water softening, or a combination.',
        },
        {
          question: 'How often do filters need to be replaced?',
          answer:
            'Typically every 6–12 months depending on usage and incoming water quality. We provide a service schedule with every installation so you always know when maintenance is due.',
        },
        {
          question: 'Is reverse osmosis (RO) water safe to drink?',
          answer:
            'Yes. Reverse osmosis removes a wide range of dissolved contaminants. We install systems certified to NSF/ANSI standards, so you can trust what comes out of your tap.',
        },
        {
          question: 'Can water filtration be bundled with solar?',
          answer:
            'Absolutely. We offer comprehensive home upgrade consultations that cover solar, roofing, and water filtration together — one assessment, one team, and a coordinated plan for your home.',
        },
      ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isSpanish ? 'Instalación de Purificación de Agua del Hogar' : 'Home Water Purification Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'New Era Solar Energy',
      url: 'https://newerasolarenergy.com',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    areaServed: { '@type': 'State', name: 'Florida' },
    description: isSpanish
      ? 'Filtración de agua para toda la casa, sistemas de ósmosis inversa bajo el fregadero y pruebas de calidad de agua para propietarios de viviendas en Florida.'
      : 'Whole-house water filtration, under-sink reverse osmosis systems, and water quality testing for Florida homeowners.',
    url: isSpanish ? 'https://newerasolarenergy.com/es/water-purification' : 'https://newerasolarenergy.com/water-purification',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isSpanish ? 'Inicio' : 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: isSpanish ? 'Purificación de Agua' : 'Water Purification', item: isSpanish ? 'https://newerasolarenergy.com/es/water-purification' : 'https://newerasolarenergy.com/water-purification' },
    ],
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F7FA] text-newera-dark-gray">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-[#5F6F75] font-sans">
          <li>
            <Link href={isSpanish ? '/es' : '/'} className="hover:text-[#ff5722] transition-colors">
              {isSpanish ? 'Inicio' : 'Home'}
            </Link>
          </li>
          <li className="text-[#e5e5e5]">/</li>
          <li className="text-newera-dark-gray font-semibold">
            {isSpanish ? 'Purificación de Agua' : 'Water Purification'}
          </li>
        </ol>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-20 flex flex-col gap-16">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden bg-newera-dark-blue px-8 md:px-14 py-16 md:py-24 mt-4">
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <div className="absolute inset-0 bg-newera-dark-blue/70 z-10 pointer-events-none"></div>
            <video
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1200&auto=format&fit=crop"
            >
              <source src="/videos/water-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-[#082fa3]/20 border border-[#082fa3]/40 text-[#082fa3] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              {t.heroTag}
            </span>
            <h1 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6">
              {t.heroTitle}
              <span className="text-[#082fa3]">{t.heroTitleHighlight}</span>
              {t.heroTitleEnd}
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-sans">
              {t.heroDesc}
            </p>
            <Link
              href={isSpanish ? '/es/contact' : '/contact'}
              className="inline-block bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)] font-sans"
            >
              {t.ctaBtn}
            </Link>
          </div>
        </section>

        {/* Solutions Section */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest block mb-2">
              {t.solutionsTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-newera-dark-gray">
              {t.solutionsTitle}
            </h2>
            <p className="text-[#5F6F75] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              {t.solutionsDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.solutionsList.map((svc) => (
              <div
                key={svc.title}
                className="bg-white border border-[#e5e5e5] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-4xl">{svc.icon}</span>
                  <span className="bg-[#082fa3]/10 border border-[#082fa3]/20 text-[#082fa3] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                    {svc.tag}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-xl text-newera-dark-gray">{svc.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{svc.desc}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {svc.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[#5F6F75] font-sans">
                      <svg className="w-3.5 h-3.5 text-[#082fa3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white border border-[#e5e5e5] rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest block mb-2">
              {t.mattersTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-newera-dark-gray">
              {t.mattersTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.benefits.map((b) => (
              <div key={b.title} className="flex flex-col gap-3 p-6 bg-[#F5F7FA] rounded-2xl border border-[#e5e5e5]">
                <span className="text-3xl">{b.icon}</span>
                <h3 className="font-poppins font-bold text-lg text-newera-dark-gray">{b.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest block mb-2">
              {t.faqTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-newera-dark-gray">
              {t.faqTitle}
            </h2>
          </div>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-[#e5e5e5] rounded-2xl shadow-sm group">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-poppins font-semibold text-newera-dark-gray text-sm md:text-base list-none select-none hover:text-[#ff5722] transition-colors">
                  <span>{faq.question}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#F5F7FA] border border-[#e5e5e5] flex items-center justify-center text-[#082fa3] group-open:rotate-45 transition-transform">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16M4 12h16" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-newera-dark-blue rounded-3xl px-8 md:px-16 py-14 text-center">
          <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest block mb-4">
            {t.ctaBoxTag}
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            {t.ctaBoxTitle}
          </h2>
          <p className="text-white/80 font-sans text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {t.ctaBoxDesc}
          </p>
          <Link
            href={isSpanish ? '/es/contact' : '/contact'}
            className="inline-block bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)] font-sans"
          >
            {t.ctaBoxBtn}
          </Link>
        </section>
      </main>
    </div>
  );
}
