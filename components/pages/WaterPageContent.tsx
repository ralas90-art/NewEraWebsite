"use client";
import React from 'react';
import Link from 'next/link';
import { waterPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';
import {
  Droplets,
  Droplet,
  Gauge,
  Pipette,
  ShowerHead,
  GlassWater,
  Filter,
  Wrench,
  ClipboardCheck,
  Beaker,
  TestTube,
  Heart,
  Home,
  Settings,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  ThermometerSun,
} from 'lucide-react';

interface WaterPageContentProps {
  locale: Locale;
}

/* ─── icon maps ─── */
const painPointIcons = [
  <GlassWater key="pp0" className="w-7 h-7 text-[#087EA4]" />,
  <Gauge key="pp1" className="w-7 h-7 text-[#087EA4]" />,
  <ShowerHead key="pp2" className="w-7 h-7 text-[#087EA4]" />,
  <Pipette key="pp3" className="w-7 h-7 text-[#087EA4]" />,
  <ShieldCheck key="pp4" className="w-7 h-7 text-[#087EA4]" />,
  <Wrench key="pp5" className="w-7 h-7 text-[#087EA4]" />,
];

const needsIcons = [
  <Droplets key="n0" className="w-5 h-5 text-[#087EA4]" />,
  <Home key="n1" className="w-5 h-5 text-[#087EA4]" />,
  <GlassWater key="n2" className="w-5 h-5 text-[#087EA4]" />,
  <ShowerHead key="n3" className="w-5 h-5 text-[#087EA4]" />,
  <Pipette key="n4" className="w-5 h-5 text-[#087EA4]" />,
  <Filter key="n5" className="w-5 h-5 text-[#087EA4]" />,
  <TestTube key="n6" className="w-5 h-5 text-[#087EA4]" />,
  <Settings key="n7" className="w-5 h-5 text-[#087EA4]" />,
  <ClipboardCheck key="n8" className="w-5 h-5 text-[#087EA4]" />,
];

const solutionIcons = [
  <Filter key="s0" className="w-8 h-8 text-[#087EA4]" />,
  <Droplet key="s1" className="w-8 h-8 text-[#087EA4]" />,
  <Beaker key="s2" className="w-8 h-8 text-[#087EA4]" />,
];

const processIcons = [
  <ClipboardCheck key="p0" className="w-6 h-6 text-white" />,
  <Droplets key="p1" className="w-6 h-6 text-white" />,
  <TestTube key="p2" className="w-6 h-6 text-white" />,
  <Beaker key="p3" className="w-6 h-6 text-white" />,
  <ShieldCheck key="p4" className="w-6 h-6 text-white" />,
  <Wrench key="p5" className="w-6 h-6 text-white" />,
  <Settings key="p6" className="w-6 h-6 text-white" />,
  <Heart key="p7" className="w-6 h-6 text-white" />,
];

const benefitIcons = [
  <Heart key="b0" className="w-7 h-7 text-[#087EA4]" />,
  <ThermometerSun key="b1" className="w-7 h-7 text-[#087EA4]" />,
  <GlassWater key="b2" className="w-7 h-7 text-[#087EA4]" />,
];

export default function WaterPageContent({ locale }: WaterPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? waterPageTranslations.es : waterPageTranslations.en;

  const faqs = isSpanish
    ? [
        {
          question: '\u00bfQu\u00e9 contaminantes elimina un filtro para toda la casa?',
          answer:
            'Depende del tipo de sistema y de su fuente de agua. Primero analizamos su agua para identificar qu\u00e9 contiene y luego recomendamos la soluci\u00f3n adecuada \u2014 ya sea filtraci\u00f3n de sedimentos, de carb\u00f3n, ablandamiento de agua o una combinaci\u00f3n.',
        },
        {
          question: '\u00bfCon qu\u00e9 frecuencia se deben reemplazar los filtros?',
          answer:
            'Normalmente cada 6 a 12 meses, seg\u00fan el uso y la calidad del agua entrante. Ofrecemos un programa de servicio con cada instalaci\u00f3n para que siempre sepa cu\u00e1ndo vence el mantenimiento.',
        },
        {
          question: '\u00bfEs segura para beber el agua de \u00f3smosis inversa (RO)?',
          answer:
            'S\u00ed. La \u00f3smosis inversa elimina una amplia gama de contaminantes disueltos. Instalamos sistemas certificados seg\u00fan las normas NSF/ANSI, para que pueda confiar en lo que sale de su grifo.',
        },
        {
          question: '\u00bfSe puede combinar la filtraci\u00f3n de agua con la energ\u00eda solar?',
          answer:
            'Absolutamente. Ofrecemos consultas integrales de mejoras para el hogar que cubren energ\u00eda solar, techado y filtraci\u00f3n de agua de manera conjunta \u2014 una sola evaluaci\u00f3n, un solo equipo y un plan coordinado para su hogar.',
        },
        {
          question: '\u00bfNecesito un an\u00e1lisis de agua antes de instalar un sistema?',
          answer:
            'Siempre recomendamos una prueba primero. El agua de cada hogar es diferente y un an\u00e1lisis previo garantiza que el sistema sea el correcto para su situaci\u00f3n, evitando gastos innecesarios y soluciones gen\u00e9ricas.',
        },
      ]
    : [
        {
          question: 'What contaminants does a whole-house filter remove?',
          answer:
            'It depends on the system type and your specific water source. We test your water first to identify what is present, then recommend the right solution \u2014 whether that is sediment filtration, carbon filtration, water softening, or a combination.',
        },
        {
          question: 'How often do filters need to be replaced?',
          answer:
            'Typically every 6\u201312 months depending on usage and incoming water quality. We provide a service schedule with every installation so you always know when maintenance is due.',
        },
        {
          question: 'Is reverse osmosis (RO) water safe to drink?',
          answer:
            'Yes. RO removes a wide spectrum of dissolved contaminants. We install NSF/ANSI-certified systems, so you can trust what comes out of the faucet.',
        },
        {
          question: 'Can I combine water filtration with solar energy?',
          answer:
            'Absolutely. We offer comprehensive home improvement consultations covering solar, roofing, and water filtration together \u2014 one assessment, one team, and a coordinated plan for your home.',
        },
        {
          question: 'Do I need a water test before installing a system?',
          answer:
            'We always recommend testing first. Every home\'s water is different, and a test ensures the system we recommend is the right match for your specific situation \u2014 no guesswork, no generic solutions.',
        },
      ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isSpanish ? 'Purificaci\u00f3n de Agua Residencial' : 'Residential Water Purification',
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
      ? 'Pruebas de calidad de agua, filtraci\u00f3n para toda la casa, \u00f3smosis inversa bajo fregadero y mantenimiento programado para hogares en Florida.'
      : 'Water quality testing, whole-house filtration, under-sink reverse osmosis, and scheduled maintenance for Florida homeowners.',
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
      {
        '@type': 'ListItem',
        position: 2,
        name: isSpanish ? 'Purificaci\u00f3n de Agua' : 'Water Purification',
        item: isSpanish
          ? 'https://newerasolarenergy.com/es/water-purification'
          : 'https://newerasolarenergy.com/water-purification',
      },
    ],
  };

  const posterUrl =
    'https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1200&auto=format&fit=crop';

  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.warn('Water video play failed or was prevented:', err);
      });
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F9FAFB] text-[#14324b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-[#4e5257] font-sans">
          <li>
            <Link href={isSpanish ? '/es' : '/'} className="hover:text-[#ff5722] transition-colors">
              {isSpanish ? 'Inicio' : 'Home'}
            </Link>
          </li>
          <li className="text-[#e5e5e5]">/</li>
          <li className="text-[#14324b] font-semibold">
            {isSpanish ? 'Purificaci\u00f3n de Agua' : 'Water Purification'}
          </li>
        </ol>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-20 flex flex-col gap-16">
        {/* ── 1. HERO with Video ── */}
        <section className="relative rounded-2xl overflow-hidden bg-[#14324b] px-8 md:px-14 py-16 md:py-24 mt-4">
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#14324b]/85 to-[#14324b]/60 z-10 pointer-events-none" />
            <video
              ref={videoRef}
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
              autoPlay
              muted
              loop
              playsInline
                          >
              <source src="/videos/water-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-[#087EA4]/20 border border-[#087EA4]/40 text-[#087EA4] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              {t.heroTag}
            </span>
            <h1 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6">
              {t.heroTitle}
              <span className="text-[#087EA4]">{t.heroTitleHighlight}</span>
              {t.heroTitleEnd}
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-sans">
              {t.heroDesc}
            </p>
            <Link
              href={isSpanish ? '/es/contact' : '/contact'}
              className="inline-flex items-center gap-2 bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)] font-sans"
            >
              {t.ctaBtn}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── 2. PAIN POINTS ── */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.painPointsTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.painPointsTitle}
            </h2>
            <p className="text-[#4e5257] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              {t.painPointsDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.painPoints.map((pp: { title: string; desc: string }, i: number) => (
              <div
                key={pp.title}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#087EA4]/10 flex items-center justify-center">
                  {painPointIcons[i]}
                </div>
                <h3 className="font-poppins font-bold text-lg text-[#14324b]">{pp.title}</h3>
                <p className="text-[#4e5257] font-sans text-sm leading-relaxed">{pp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. NEEDS ANALYSIS ── */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.needsTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.needsTitle}
            </h2>
            <p className="text-[#4e5257] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              {t.needsDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.needsItems.map((item: { label: string; detail: string }, i: number) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-[#F9FAFB] border border-[#E2E8F0] rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#087EA4]/10 flex items-center justify-center shrink-0">
                  {needsIcons[i]}
                </div>
                <div>
                  <p className="font-poppins font-bold text-sm text-[#14324b]">{item.label}</p>
                  <p className="text-[#4e5257] font-sans text-xs mt-0.5 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. SOLUTIONS ── */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.solutionsTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.solutionsTitle}
            </h2>
            <p className="text-[#4e5257] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              {t.solutionsDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.solutionsList.map((svc: { title: string; tag: string; desc: string; features: string[] }, i: number) => (
              <div
                key={svc.title}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-14 h-14 rounded-xl bg-[#087EA4]/10 flex items-center justify-center">
                    {solutionIcons[i]}
                  </div>
                  <span className="bg-[#087EA4]/10 border border-[#087EA4]/20 text-[#087EA4] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                    {svc.tag}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-xl text-[#14324b]">{svc.title}</h3>
                <p className="text-[#4e5257] font-sans text-sm leading-relaxed">{svc.desc}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {svc.features.map((feat: string) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[#4e5257] font-sans">
                      <CheckCircle className="w-3.5 h-3.5 text-[#087EA4] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. PROCESS — 8 Steps ── */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.processTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.processTitle}
            </h2>
            <p className="text-[#4e5257] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              {t.processDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.processSteps.map((step: { title: string; desc: string }, i: number) => (
              <div
                key={step.title}
                className="relative bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#087EA4] flex items-center justify-center">
                  {processIcons[i]}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#087EA4]">
                  {isSpanish ? `Paso ${i + 1}` : `Step ${i + 1}`}
                </span>
                <h3 className="font-poppins font-bold text-base text-[#14324b]">{step.title}</h3>
                <p className="text-[#4e5257] font-sans text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. BENEFITS ── */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.benefitsTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.benefitsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.benefits.map((b: { title: string; desc: string }, i: number) => (
              <div key={b.title} className="flex flex-col gap-3 p-6 bg-[#F9FAFB] rounded-2xl border border-[#E2E8F0]">
                <div className="w-12 h-12 rounded-xl bg-[#087EA4]/10 flex items-center justify-center">
                  {benefitIcons[i]}
                </div>
                <h3 className="font-poppins font-bold text-lg text-[#14324b]">{b.title}</h3>
                <p className="text-[#4e5257] font-sans text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. FAQs ── */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.faqTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.faqTitle}
            </h2>
          </div>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm group">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-poppins font-semibold text-[#14324b] text-sm md:text-base list-none select-none hover:text-[#ff5722] transition-colors">
                  <span>{faq.question}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#F9FAFB] border border-[#E2E8F0] flex items-center justify-center text-[#087EA4] group-open:rotate-45 transition-transform">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16M4 12h16" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-[#4e5257] font-sans text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── 8. FINAL CTA ── */}
        <section className="bg-[#14324b] rounded-2xl px-8 md:px-16 py-14 text-center">
          <span className="text-[11px] font-bold uppercase text-[#087EA4] tracking-widest block mb-4">
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
            className="inline-flex items-center gap-2 bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)] font-sans"
          >
            {t.ctaBoxBtn}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </div>
  );
}


