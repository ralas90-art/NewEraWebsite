import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { serviceAreasPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';

interface ServiceAreasPageContentProps {
  locale: Locale;
}

export default function ServiceAreasPageContent({ locale }: ServiceAreasPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? serviceAreasPageTranslations.es : serviceAreasPageTranslations.en;

  const states = isSpanish
    ? [
        {
          name: 'Florida',
          slug: 'florida',
          flag: '☀️ï¸',
          tagline: 'Sol todo el año y excelente rentabilidad solar',
          description:
            'El sol abundante todo el año, tarifas eléctricas elevadas y políticas de medición neta hacen de Florida uno de los mejores estados para la energía solar residencial. Desde Miami hasta Jacksonville, atendemos a propietarios en todo el Estado del Sol.',
          cities: ['Miami', 'Fort Lauderdale', 'Orlando', 'Tampa', 'Jacksonville', 'Boca Raton', 'Palm Beach'],
          highlight: 'Más de 230 días de sol/año',
        },
        {
          name: 'Massachusetts',
          slug: 'massachusetts',
          flag: '⚡',
          tagline: 'Programa SMART y medición neta sólida',
          description:
            'El programa de incentivos SMART de Massachusetts y su medición neta de primer nivel lo convierten en un estado líder para la energía solar, incluso con el clima invernal. Los propietarios se benefician de incentivos estatales sustanciales.',
          cities: [
            'Boston', 'Cambridge', 'Quincy', 'Somerville', 'Brookline',
            'Newton', 'Waltham', 'Medford', 'Revere', 'Chelsea',
            'Everett', 'Lynn', 'Worcester', 'Springfield', 'Framingham'
          ],
          highlight: 'Estado líder en incentivos',
        },
        {
          name: 'Connecticut',
          slug: 'connecticut',
          flag: '🌿',
          tagline: 'Financiamiento del Green Bank y medición neta',
          description:
            'Los propietarios de viviendas en Connecticut se benefician de programas competitivos de medición neta y financiamiento a tasas muy bajas del Green Bank. Al tener tarifas eléctricas elevadas, los ahorros solares son de gran valor.',
          cities: [
            'Hartford', 'New Haven', 'Bridgeport', 'Stamford', 'Norwalk',
            'Danbury', 'Waterbury', 'Greenwich', 'New Britain', 'Meriden', 'Middletown'
          ],
          highlight: 'Top 10 en tarifas eléctricas en EE.UU.',
        },
      ]
    : [
        {
          name: 'Florida',
          slug: 'florida',
          flag: '☀️ï¸',
          tagline: 'Year-round sunshine & strong solar economics',
          description:
            'Year-round sunshine, high utility rates, and strong net metering rules make Florida one of the best states for residential solar. From Miami to Jacksonville, New Era Solar Energy serves homeowners across the Sunshine State.',
          cities: ['Miami', 'Fort Lauderdale', 'Orlando', 'Tampa', 'Jacksonville', 'Boca Raton', 'Palm Beach'],
          highlight: '230+ sunny days/year',
        },
        {
          name: 'Massachusetts',
          slug: 'massachusetts',
          flag: '⚡',
          tagline: 'SMART program & robust net metering',
          description:
            'Massachusetts SMART incentive program and strong net metering make it a top solar state even with seasonal weather. MA homeowners benefit from state-level support that improves the economics of going solar.',
          cities: [
            'Boston', 'Cambridge', 'Quincy', 'Somerville', 'Brookline',
            'Newton', 'Waltham', 'Medford', 'Revere', 'Chelsea',
            'Everett', 'Lynn', 'Worcester', 'Springfield', 'Framingham'
          ],
          highlight: '#1 Solar Policy State',
        },
        {
          name: 'Connecticut',
          slug: 'connecticut',
          flag: '🌿',
          tagline: 'Green Bank financing & net metering credits',
          description:
            'Connecticut homeowners benefit from competitive net metering tariffs and state incentive programs supporting clean energy. With some of the highest electricity rates in the country, solar savings in CT are significant.',
          cities: [
            'Hartford', 'New Haven', 'Bridgeport', 'Stamford', 'Norwalk',
            'Danbury', 'Waterbury', 'Greenwich', 'New Britain', 'Meriden', 'Middletown'
          ],
          highlight: 'Top 10 electricity rates in US',
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
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: 'New Era Solar Energy',
        url: 'https://newerasolarenergy.com',
        areaServed: [
          { '@type': 'State', name: 'Florida' },
          { '@type': 'State', name: 'Massachusetts' },
          { '@type': 'State', name: 'Connecticut' },
        ],
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
              <span className="opacity-80">{t.breadcrumbs[1]}</span>
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
          </div>
        </section>

        {/* State Cards */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {states.map((state) => (
              <div
                key={state.slug}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col"
              >
                <div className="text-4xl mb-4">{state.flag}</div>
                <div className="inline-flex mb-3">
                  <span className="bg-[#082fa3]/10 text-[#082fa3] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {state.highlight}
                  </span>
                </div>
                <h2 className="font-poppins font-bold text-2xl text-[#14324b] mb-2">
                  {t.highlightLabel}{state.name}
                </h2>
                <p className="text-[#4e5257] font-sans text-sm leading-relaxed mb-6 flex-grow">
                  {state.description}
                </p>
                <Link
                  href={isSpanish ? `/es/service-areas/${state.slug}` : `/service-areas/${state.slug}`}
                  className="bg-[#14324b] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#14324b]/90 transition-colors inline-flex items-center gap-2 justify-center font-sans"
                >
                  {t.btnExplore}{state.name}{t.btnExploreEnd}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Cities Section */}
        <section className="bg-white border-t border-[#E2E8F0] py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-2 block">
                {t.coverageTag}
              </span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#14324b]">
                {t.coverageTitle}
              </h2>
              <p className="text-[#4e5257] font-sans text-sm mt-3 max-w-xl mx-auto">
                {t.coverageDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {states.map((state) => (
                <div key={state.slug}>
                  <h3 className="font-poppins font-bold text-lg text-[#14324b] mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#ff5722]" />
                    {state.name}
                  </h3>
                  <ul className="space-y-2">
                    {state.cities.map((city) => (
                      <li key={city} className="flex items-center gap-2 text-sm text-[#4e5257] font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#082fa3] shrink-0" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-[#4e5257] font-sans text-sm mb-4">
                {t.notListed}
              </p>
              <Link
                href={isSpanish ? '/es/contact' : '/contact'}
                className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all inline-flex items-center gap-2 font-sans"
              >
                {t.btnCheck}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

