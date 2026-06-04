import React from 'react';
import Link from 'next/link';
import { solarPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';

interface SolarPageContentProps {
  locale: Locale;
}

export default function SolarPageContent({ locale }: SolarPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? solarPageTranslations.es : solarPageTranslations.en;

  const faqs = isSpanish
    ? [
        {
          question: '¿Cuánto cuestan los paneles solares?',
          answer:
            'El costo varía según el tamaño del sistema, el tipo de techo y el consumo de energía. Una evaluación gratuita le dará una cifra real para su hogar, sin estimaciones ni presiones.',
        },
        {
          question: '¿Cuánto duran los paneles solares?',
          answer:
            'Los paneles de calidad suelen tener una vida útil clasificada para más de 25 años. Le explicaremos detalladamente la cobertura de la garantía durante su consulta para que sepa exactamente lo que posee.',
        },
        {
          question: '¿Funcionarán los paneles solares si mi techo necesita reparación?',
          answer:
            'Evaluamos el estado del techo como parte de nuestra evaluación gratuita. Si su techo necesita trabajo antes de la instalación, podemos coordinar los servicios de techado para que todo se haga bien desde la primera vez.',
        },
        {
          question: '¿Qué pasa con mi factura de electricidad después de cambiar a solar?',
          answer:
            'Las facturas suelen disminuir. Los ahorros exactos dependen del tamaño del sistema, el plan de tarifas del proveedor y su consumo de energía. Revisaremos las proyecciones detalladas durante su evaluación para que entienda las cifras antes de decidir.',
        },
        {
          question: '¿Necesito estar en casa durante la instalación?',
          answer:
            'Generalmente sí, para permitir el acceso y repasar puntos clave. La instalación suele tomar de 1 a 3 días. Su coordinador de proyecto programará un horario conveniente para su familia.',
        },
      ]
    : [
        {
          question: 'How much do solar panels cost?',
          answer:
            'Cost varies based on system size, roof type, and energy usage. A free assessment gives you a real number for your home — no guesswork, no pressure.',
        },
        {
          question: 'How long do solar panels last?',
          answer:
            'Quality panels are typically rated for 25+ years. We walk you through warranty coverage in detail during your consultation so you know exactly what you own.',
        },
        {
          question: 'Will solar panels work if my roof needs repair?',
          answer:
            'We assess roof condition as part of our free evaluation. If your roof needs work before installation, we can coordinate roofing services so everything is done right the first time.',
        },
        {
          question: 'What happens to my electricity bill after going solar?',
          answer:
            'Bills typically decrease. Exact savings depend on your system size, utility rate plan, and energy consumption. We walk through detailed projections during your assessment so you understand the numbers before you commit.',
        },
        {
          question: 'Do I need to be home during installation?',
          answer:
            'Generally yes for access and key walkthrough points. Installation usually takes 1–3 days. Your dedicated project coordinator will schedule a time that works for your family.',
        },
      ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isSpanish ? 'Instalación de Energía Solar Residencial' : 'Residential Solar Energy Installation',
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
      ? 'Evaluación de energía solar residencial, diseño de sistema personalizado, instalación y activación para propietarios en Florida.'
      : 'Residential solar energy assessment, custom system design, installation, and activation for Florida homeowners.',
    url: isSpanish ? 'https://newerasolarenergy.com/es/solar' : 'https://newerasolarenergy.com/solar',
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
      { '@type': 'ListItem', position: 2, name: isSpanish ? 'Energía Solar' : 'Solar Energy', item: isSpanish ? 'https://newerasolarenergy.com/es/solar' : 'https://newerasolarenergy.com/solar' },
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
            {isSpanish ? 'Energía Solar' : 'Solar Energy'}
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
              poster="https://images.unsplash.com/photo-1509391366360-1e5e4acb5042?q=80&w=1200&auto=format&fit=crop"
            >
              <source src="/videos/solar-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-[#ff5722]/20 border border-[#ff5722]/40 text-[#ff5722] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              {t.heroTag}
            </span>
            <h1 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6">
              {t.heroTitle}
              <span className="text-[#ff5722]">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-sans">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={isSpanish ? '/es/contact' : '/contact'}
                className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)] text-center font-sans"
              >
                {t.ctaAssessment}
              </Link>
              <Link
                href={isSpanish ? '/es/process' : '/process'}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors text-center font-sans"
              >
                {t.ctaProcess}
              </Link>
            </div>
          </div>
        </section>

        {/* How Solar Works */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest block mb-2">
              {t.processTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-newera-dark-gray">
              {t.processTitle}
            </h2>
            <p className="text-[#5F6F75] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              {t.processDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.steps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[#e5e5e5] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[11px] font-bold text-[#082fa3] uppercase tracking-widest">
                    {isSpanish ? 'Paso' : 'Step'} {item.step}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-xl text-newera-dark-gray">{item.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white border border-[#e5e5e5] rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest block mb-2">
              {t.advantagesTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-newera-dark-gray">
              {t.advantagesTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.advantages.map((b) => (
              <div key={b.title} className="flex flex-col gap-3 p-6 bg-[#F5F7FA] rounded-2xl border border-[#e5e5e5]">
                <span className="text-3xl">{b.icon}</span>
                <h3 className="font-poppins font-bold text-lg text-newera-dark-gray">{b.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solar Readiness Checklist */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest block mb-2">
              {t.readinessTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-newera-dark-gray">
              {t.readinessTitle}
            </h2>
            <p className="text-[#5F6F75] font-sans mt-4 max-w-xl mx-auto text-base leading-relaxed">
              {t.readinessDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {t.readinessChecklist.map((item) => (
              <div
                key={item.check}
                className="bg-white border border-[#e5e5e5] rounded-2xl p-6 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#ff5722]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-poppins font-bold text-newera-dark-gray text-sm mb-1">{item.check}</p>
                  <p className="text-[#5F6F75] font-sans text-xs leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IRS Tax Credit Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800 font-sans leading-relaxed mt-4">
          <strong>{t.taxNoticeTitle}</strong> {t.taxNoticeDesc}
        </div>

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
