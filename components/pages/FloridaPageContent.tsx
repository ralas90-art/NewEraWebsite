import React from 'react';
import Link from 'next/link';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Sun, Shield, DollarSign, Wind, MapPin, ArrowRight } from 'lucide-react';
import { floridaPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';

interface FloridaPageContentProps {
  locale: Locale;
}

export default function FloridaPageContent({ locale }: FloridaPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? floridaPageTranslations.es : floridaPageTranslations.en;

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
    'Miami', 'Fort Lauderdale', 'Orlando', 'Tampa',
    'Jacksonville', 'Boca Raton', 'Palm Beach', 'Sarasota',
    'Naples', 'Cape Coral', 'West Palm Beach', 'Gainesville',
  ];

  const faqs = isSpanish
    ? [
        {
          question: '¿Tiene Florida medición neta?',
          answer:
            'Las empresas de electricidad de Florida ofrecen programas de medición neta, aunque las políticas y las tasas de crédito varían según el proveedor de servicios públicos. Le ayudamos a entender cómo maneja su compañía eléctrica los créditos solares antes de comprometerse con un sistema.',
        },
        {
          question: '¿Sobrevivirán los paneles solares a los huracanes de Florida?',
          answer:
            'Los sistemas modernos de paneles solares están diseñados para cumplir con los requisitos de carga de viento de Florida. Discutimos las clasificaciones de viento y los métodos de montaje durante su evaluación y solo instalamos sistemas que cumplan con las normas aplicables del Código de Construcción de Florida para su área.',
        },
        {
          question: '¿Cuánto sol recibe Florida en comparación con otros estados?',
          answer:
            'Florida se ubica constantemente entre los mejores estados en cuanto a potencial de recursos solares según el Laboratorio Nacional de Energía Renovable. Sin embargo, el sombreado, la orientación del techo, el ángulo de inclinación y los patrones climáticos locales afectan la producción específica de su sistema, razón por la cual realizamos una evaluación específica para cada propiedad.',
        },
        {
          question: '¿Es mi compañía de luz compatible con la energía solar en Florida?',
          answer:
            'Trabajamos con propietarios atendidos por FPL, Duke Energy Florida, TECO (Tampa Electric) y otras compañías de servicios públicos de Florida. Su conexión a la red, plan de tarifas y los requisitos de interconexión se revisan durante su evaluación gratuita del hogar.',
        },
      ]
    : [
        {
          question: 'Does Florida have net metering?',
          answer:
            'Florida utilities offer net metering programs, though policies and credit rates vary by utility provider. We help you understand how your specific utility handles solar credits before you commit to a system.',
        },
        {
          question: 'Will solar panels survive Florida hurricanes?',
          answer:
            'Modern solar panel systems are engineered to meet Florida\'s wind load requirements. We discuss wind ratings and mounting methods during your assessment and only install systems that meet applicable Florida Building Code standards for your area.',
        },
        {
          question: 'How much sun does Florida get compared to other states?',
          answer:
            'Florida consistently ranks among the top states for solar resource potential per the National Renewable Energy Lab. However, shading, roof orientation, tilt angle, and local weather patterns all affect your specific system\'s output — which is why we conduct a site-specific assessment.',
        },
        {
          question: 'Is my utility compatible with solar in Florida?',
          answer:
            'We work with homeowners served by FPL, Duke Energy Florida, TECO (Tampa Electric), and other Florida utilities. Your utility connection, rate plan, and interconnection requirements are all reviewed during your free home assessment.',
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
          { '@type': 'ListItem', position: 3, name: 'Florida', item: isSpanish ? 'https://newerasolarenergy.com/es/service-areas/florida' : 'https://newerasolarenergy.com/service-areas/florida' },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: isSpanish ? 'New Era Solar Energy — Florida' : 'New Era Solar Energy — Florida',
        url: isSpanish ? 'https://newerasolarenergy.com/es/service-areas/florida' : 'https://newerasolarenergy.com/service-areas/florida',
        areaServed: { '@type': 'State', name: 'Florida' },
        description: isSpanish
          ? 'Instalación de energía solar residencial, techado y purificación de agua en Florida.'
          : 'Residential solar installation, roofing, and water purification services across Florida.',
        address: { '@type': 'PostalAddress', addressRegion: 'FL', addressCountry: 'US' },
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

        {/* Why Florida Section */}
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

