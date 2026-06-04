import React from 'react';
import Link from 'next/link';
import { roofingPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';

interface RoofingPageContentProps {
  locale: Locale;
}

export default function RoofingPageContent({ locale }: RoofingPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? roofingPageTranslations.es : roofingPageTranslations.en;

  const faqs = isSpanish
    ? [
        {
          question: '¿Cómo sé si necesito un techo nuevo antes de instalar paneles solares?',
          answer:
            'Nuestro equipo inspecciona la antigüedad del techo, el estado del material, la integridad de la cubierta y la vida útil restante estimada durante la evaluación gratuita. Le diremos con honestidad si su techo puede soportar una instalación solar o si necesita trabajo primero.',
        },
        {
          question: '¿Cuánto tiempo toma el reemplazo de un techo?',
          answer:
            'La mayoría de los reemplazos de techos residenciales toman de 1 a 3 días, según el tamaño, la inclinación y los materiales seleccionados. Su coordinador de proyecto le dará un cronograma firme antes de comenzar el trabajo.',
        },
        {
          question: '¿Qué tipo de material de techo es mejor para los paneles solares?',
          answer:
            'Las tejas de asfalto, los techos de metal y las membranas para techos planos son compatibles con las instalaciones solares. Cada uno tiene diferentes métodos de montaje y perfiles de costo. Evaluamos la mejor solución para su hogar específico durante la visita.',
        },
        {
          question: '¿Cubrirá el seguro los daños de mi techo por tormentas?',
          answer:
            'Muchas pólizas de propietario cubren daños por viento y granizo. Ayudamos a documentar los daños minuciosamente para los reclamos de seguro. Consulte con su proveedor de seguros para obtener detalles de cobertura y procedimientos de reclamo.',
        },
      ]
    : [
        {
          question: 'How do I know if I need a new roof before installing solar?',
          answer:
            'Our team inspects roof age, material condition, decking integrity, and estimated remaining lifespan during the free assessment. We will tell you honestly whether your roof can support a solar installation or needs work first.',
        },
        {
          question: 'How long does a roof replacement take?',
          answer:
            'Most residential roof replacements take 1–3 days depending on roof size, pitch, and selected materials. Your project coordinator will give you a firm timeline before work begins.',
        },
        {
          question: 'What type of roofing material is best for solar panels?',
          answer:
            'Asphalt shingles, metal roofing, and flat roof membranes are all compatible with solar installations. Each has different mounting methods and cost profiles. We evaluate the best solution for your specific home during the site visit.',
        },
        {
          question: 'Will insurance cover storm damage to my roof?',
          answer:
            'Many homeowner policies cover wind and hail damage. We help document damage thoroughly for insurance claims. Please consult your insurance provider for coverage specifics and claim procedures.',
        },
      ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isSpanish ? 'Servicios de Techos Residenciales' : 'Residential Roofing Services',
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
      ? 'Inspecciones de techo profesionales, reparaciones, reemplazos, evaluación de daños por tormentas y preparación de techos para paneles solares.'
      : 'Professional roof inspections, repair, replacement, storm damage assessment, and solar roof readiness evaluation for Florida homeowners.',
    url: isSpanish ? 'https://newerasolarenergy.com/es/roofing' : 'https://newerasolarenergy.com/roofing',
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
      { '@type': 'ListItem', position: 2, name: isSpanish ? 'Techos' : 'Roofing', item: isSpanish ? 'https://newerasolarenergy.com/es/roofing' : 'https://newerasolarenergy.com/roofing' },
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
            {isSpanish ? 'Techos' : 'Roofing'}
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
              poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            >
              <source src="/videos/roofing-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-[#082fa3]/20 border border-[#082fa3]/40 text-[#082fa3] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              {t.heroTag}
            </span>
            <h1 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6">
              {t.heroTitle}
              <span className="text-[#ff5722]">{t.heroTitleHighlight}</span>
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

        {/* Services Section */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest block mb-2">
              {t.offerTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-newera-dark-gray">
              {t.offerTitle}
            </h2>
            <p className="text-[#5F6F75] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              {t.offerDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.map((svc) => (
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
              </div>
            ))}
          </div>
        </section>

        {/* Roofing + Solar Connection */}
        <section className="bg-white border border-[#e5e5e5] rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest block mb-3">
                {t.mattersTag}
              </span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-newera-dark-gray mb-4">
                {t.mattersTitle}
              </h2>
              <p className="text-[#5F6F75] font-sans text-sm leading-relaxed mb-4">
                {t.mattersDesc1}
              </p>
              <p className="text-[#5F6F75] font-sans text-sm leading-relaxed mb-6">
                {t.mattersDesc2}
              </p>
              <Link
                href={isSpanish ? '/es/contact' : '/contact'}
                className="inline-block bg-newera-dark-blue text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-newera-dark-blue/90 transition-colors font-sans"
              >
                {t.ctaCombined}
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {t.checks.map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-[#F5F7FA] border border-[#e5e5e5] rounded-xl p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-poppins font-bold text-sm text-newera-dark-gray">{item.label}</p>
                    <p className="text-[#5F6F75] font-sans text-xs mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
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
