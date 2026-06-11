import React from 'react';
import Link from 'next/link';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Sun, Shield, DollarSign, Wind, MapPin, ArrowRight } from 'lucide-react';
import { connecticutPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';

interface ConnecticutPageContentProps {
  locale: Locale;
}

export default function ConnecticutPageContent({ locale }: ConnecticutPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? connecticutPageTranslations.es : connecticutPageTranslations.en;

  const benefits = [
    {
      icon: <Sun className="w-6 h-6 text-[#ff5722]" />,
      title: t.benefits[0].title,
      desc: t.benefits[0].desc,
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#ff5722]" />,
      title: t.benefits[1].title,
      desc: t.benefits[1].desc,
    },
    {
      icon: <Shield className="w-6 h-6 text-[#ff5722]" />,
      title: t.benefits[2].title,
      desc: t.benefits[2].desc,
    },
    {
      icon: <Wind className="w-6 h-6 text-[#ff5722]" />,
      title: t.benefits[3].title,
      desc: t.benefits[3].desc,
    },
  ];

  const cities = [
    'Hartford', 'New Haven', 'Bridgeport', 'Stamford', 'Norwalk',
    'Danbury', 'Waterbury', 'Greenwich', 'New Britain', 'Meriden', 'Middletown'
  ];

  const faqs = isSpanish
    ? [
        {
          question: '¿Tiene Connecticut medición neta?',
          answer:
            'Sí, Connecticut ofrece un programa de medición neta competitivo que le otorga créditos de facturación dólar por dólar por el exceso de energía solar generada y exportada de vuelta a la red.',
        },
        {
          question: '¿Qué es el Green Bank de CT?',
          answer:
            'El Green Bank de Connecticut es una institución estatal que ofrece financiamiento solar residencial a tasas de interés muy atractivas, facilitando a los propietarios realizar mejoras de energía limpia sin desembolsos importantes.',
        },
        {
          question: '¿Existen exenciones de impuestos a la propiedad para la energía solar en CT?',
          answer:
            'Sí, los sistemas solares residenciales están exentos de impuestos sobre la propiedad en Connecticut, lo que le permite aumentar el valor de su casa sin incrementar sus impuestos sobre la propiedad.',
        },
        {
          question: '¿Cuánto sol recibe Connecticut en comparación con otros estados?',
          answer:
            'Aunque Connecticut recibe menos sol anual que Florida, la combinación de tarifas de luz locales muy elevadas e incentivos estatales excelentes hace que el retorno de inversión solar en CT sea altamente competitivo.',
        },
      ]
    : [
        {
          question: 'Does Connecticut have net metering?',
          answer:
            'Yes, Connecticut offers competitive net metering programs, giving you dollar-for-dollar bill credits for excess solar energy generated during sunny hours and exported back to the grid.',
        },
        {
          question: 'What is the CT Green Bank?',
          answer:
            'The CT Green Bank offers low-interest financing options specifically designed for residential solar installations, helping you go solar with little to no upfront capital.',
        },
        {
          question: 'Are there property tax exemptions for solar in CT?',
          answer:
            'Yes, Connecticut law exempts solar systems from residential property taxes, allowing you to add value to your home without increasing your property tax bill.',
        },
        {
          question: 'How much sun does CT get compared to solar states?',
          answer:
            'While CT gets less annual sunshine than Florida, the combination of high electricity rates and strong incentives makes solar a highly competitive investment in CT.',
        },
      ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isSpanish ? 'Inicio' : 'Home', item: 'https://newerasolarenergy.com' },
          { '@type': 'ListItem', position: 2, name: isSpanish ? 'Áreas de Servicio' : 'Service Areas', item: isSpanish ? 'https://newerasolarenergy.com/es/service-areas' : 'https://newerasolarenergy.com/service-areas' },
          { '@type': 'ListItem', position: 3, name: 'Connecticut', item: isSpanish ? 'https://newerasolarenergy.com/es/service-areas/connecticut' : 'https://newerasolarenergy.com/service-areas/connecticut' },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: isSpanish ? 'New Era Solar Energy — Connecticut' : 'New Era Solar Energy — Connecticut',
        url: isSpanish ? 'https://newerasolarenergy.com/es/service-areas/connecticut' : 'https://newerasolarenergy.com/service-areas/connecticut',
        areaServed: { '@type': 'State', name: 'Connecticut' },
        description: isSpanish
          ? 'Instalación de energía solar residencial, techado y purificación de agua en Connecticut.'
          : 'Residential solar installation, roofing, and water purification services across Connecticut.',
        address: { '@type': 'PostalAddress', addressRegion: 'CT', addressCountry: 'US' },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-[#F9FAFB]">
        {/* Hero */}
        <section className="bg-[#14324b] text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-xs text-[#082fa3] mb-4 font-sans">
              <Link href={isSpanish ? '/es' : '/'} className="hover:underline">
                {t.breadcrumbs[0]}
              </Link>
              <span className="mx-2 opacity-60">/</span>
              <Link href={isSpanish ? '/es/service-areas' : '/service-areas'} className="hover:underline">
                {t.breadcrumbs[1]}
              </Link>
              <span className="mx-2 opacity-60">/</span>
              <span className="opacity-80">{t.breadcrumbs[2]}</span>
            </nav>
            <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-3 block">
              {t.tag}
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl leading-tight mb-5">
              {t.title}
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              {t.desc}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={isSpanish ? '/es/contact' : '/contact'}
                className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all inline-flex items-center gap-2 justify-center font-sans"
              >
                {t.btnAssessment}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={isSpanish ? '/es/process' : '/process'}
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/10 transition-all inline-flex items-center gap-2 justify-center font-sans"
              >
                {t.btnWorks}
              </Link>
            </div>
          </div>
        </section>

        {/* Why CT Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-2 block">
              {t.varsTag}
            </span>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#14324b]">
              {t.varsTitle}
            </h2>
            <p className="text-[#4e5257] font-sans text-sm mt-3 max-w-2xl mx-auto">
              {t.varsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#ff5722]/10 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-poppins font-bold text-lg text-[#14324b] mb-3">{b.title}</h3>
                <p className="text-[#4e5257] font-sans text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cities */}
        <section className="bg-white border-t border-[#E2E8F0] py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-xl text-[#14324b] mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ff5722]" />
              {t.citiesTitle}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cities.map((city) => (
                <div key={city} className="bg-[#F9FAFB] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm font-bold text-[#14324b] font-poppins text-center">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#4e5257] font-sans mt-4 italic">
              {t.citiesSub} <Link href={isSpanish ? '/es/contact' : '/contact'} className="text-[#ff5722] hover:underline font-bold font-poppins">{t.citiesContact}</Link>{t.citiesSubEnd}
            </p>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800 font-sans leading-relaxed mt-4">
            <strong>{t.taxTitle}</strong> {t.taxDesc}
          </div>
          <p className="text-xs text-[#4e5257] font-sans leading-relaxed mt-2 italic">
            {t.disclaimer}
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white border-t border-[#E2E8F0] py-4">
          <div className="max-w-4xl mx-auto px-6">
            <FAQAccordion
              items={faqs}
              title={t.faqTitle}
              subtitle={t.faqSub}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#14324b] py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-white/80 font-sans text-sm md:text-base mb-8 leading-relaxed">
              {t.ctaDesc}
            </p>
            <Link
              href={isSpanish ? '/es/contact' : '/contact'}
              className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all inline-block font-sans"
            >
              {t.ctaBtn}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

