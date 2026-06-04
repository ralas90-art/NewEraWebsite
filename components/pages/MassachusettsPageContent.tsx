import React from 'react';
import Link from 'next/link';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Sun, Shield, DollarSign, Wind, MapPin, ArrowRight } from 'lucide-react';
import { massachusettsPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';

interface MassachusettsPageContentProps {
  locale: Locale;
}

export default function MassachusettsPageContent({ locale }: MassachusettsPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? massachusettsPageTranslations.es : massachusettsPageTranslations.en;

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

  const cities = ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'New Bedford', 'Quincy', 'Brockton'];

  const faqs = isSpanish
    ? [
        {
          question: '¿Tiene Massachusetts un crédito fiscal solar?',
          answer:
            'Sí, el estado de Massachusetts ofrece un crédito fiscal sobre la renta de hasta $1,000 para instalaciones solares residenciales, lo que reduce directamente su responsabilidad fiscal del estado.',
        },
        {
          question: '¿Qué es el programa SMART?',
          answer:
            'El programa SMART (Solar Massachusetts Renewable Target) es un programa de incentivos estatales que le paga una tarifa fija por cada kilovatio-hora de energía solar generado por su sistema. Los pagos se reciben directamente de su compañía eléctrica.',
        },
        {
          question: '¿Funcionan los paneles solares durante los inviernos de Massachusetts?',
          answer:
            'Sí. Los paneles solares funcionan con luz solar, no con calor, y son altamente eficientes a temperaturas frías. De hecho, la luz reflejada en la nieve circundante a veces puede aumentar ligeramente la producción de los paneles.',
        },
        {
          question: '¿Qué sucede si hay nieve sobre los paneles?',
          answer:
            'La nieve suele deslizarse rápidamente debido a la superficie lisa y templada de los paneles inclinados. Las estimaciones de producción anual de su sistema ya tienen en cuenta las pérdidas típicas de producción por nieve invernal.',
        },
      ]
    : [
        {
          question: 'Does Massachusetts have a solar tax credit?',
          answer:
            'Yes, Massachusetts offers a state income tax credit of up to $1,000 for residential solar installations, directly reducing your state tax liability.',
        },
        {
          question: 'What is the SMART program?',
          answer:
            'The Solar Massachusetts Renewable Target (SMART) program is a state incentive program that pays utility customers a fixed rate per kWh for the solar energy their systems produce.',
        },
        {
          question: 'Do solar panels work during Massachusetts winters?',
          answer:
            'Yes. Solar panels generate power from sunlight, not heat, and are highly efficient in cold temperatures. In fact, snow reflection can sometimes boost output slightly.',
        },
        {
          question: 'What happens if there is snow on the panels?',
          answer:
            'Snow typically slides off quickly due to the smooth, tempered surface of tilted panels. Annual production estimates already factor in typical snow losses.',
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
          { '@type': 'ListItem', position: 3, name: 'Massachusetts', item: isSpanish ? 'https://newerasolarenergy.com/es/service-areas/massachusetts' : 'https://newerasolarenergy.com/service-areas/massachusetts' },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: isSpanish ? 'New Era Solar Energy — Massachusetts' : 'New Era Solar Energy — Massachusetts',
        url: isSpanish ? 'https://newerasolarenergy.com/es/service-areas/massachusetts' : 'https://newerasolarenergy.com/service-areas/massachusetts',
        areaServed: { '@type': 'State', name: 'Massachusetts' },
        description: isSpanish
          ? 'Instalación de energía solar residencial, techado y purificación de agua en Massachusetts.'
          : 'Residential solar installation, roofing, and water purification services across Massachusetts.',
        address: { '@type': 'PostalAddress', addressRegion: 'MA', addressCountry: 'US' },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-[#F5F7FA]">
        {/* Hero */}
        <section className="bg-newera-dark-blue text-white py-20 px-6">
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

        {/* Why MA Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-2 block">
              {t.varsTag}
            </span>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-newera-dark-gray">
              {t.varsTitle}
            </h2>
            <p className="text-[#5F6F75] font-sans text-sm mt-3 max-w-2xl mx-auto">
              {t.varsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-[#e5e5e5] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#ff5722]/10 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">{b.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cities */}
        <section className="bg-white border-t border-[#e5e5e5] py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-xl text-newera-dark-gray mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ff5722]" />
              {t.citiesTitle}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cities.map((city) => (
                <div key={city} className="bg-[#F5F7FA] border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm font-bold text-newera-dark-gray font-poppins text-center">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F6F75] font-sans mt-4 italic">
              {t.citiesSub} <Link href={isSpanish ? '/es/contact' : '/contact'} className="text-[#ff5722] hover:underline font-bold font-poppins">{t.citiesContact}</Link>{t.citiesSubEnd}
            </p>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800 font-sans leading-relaxed mt-4">
            <strong>{t.taxTitle}</strong> {t.taxDesc}
          </div>
          <p className="text-xs text-[#5F6F75] font-sans leading-relaxed mt-2 italic">
            {t.disclaimer}
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white border-t border-[#e5e5e5] py-4">
          <div className="max-w-4xl mx-auto px-6">
            <FAQAccordion
              items={faqs}
              title={t.faqTitle}
              subtitle={t.faqSub}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-newera-dark-blue py-16 px-6 text-center">
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
