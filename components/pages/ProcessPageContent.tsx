import React from 'react';
import Link from 'next/link';
import { processPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CheckCircle, ClipboardList, Hammer, Lightbulb, FileText } from 'lucide-react';

interface ProcessPageContentProps {
  locale: Locale;
}

export default function ProcessPageContent({ locale }: ProcessPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? processPageTranslations.es : processPageTranslations.en;

  const faqs = isSpanish
    ? [
        {
          question: '¿Cuánto tiempo toma el proceso desde la evaluación hasta la activación?',
          answer:
            'Típicamente toma de 4 a 10 semanas, dependiendo de los plazos de permisos municipales y el cronograma de interconexión con la compañía de luz. Le mantendremos informado en cada etapa.',
        },
        {
          question: '¿Ustedes gestionan los permisos y las aprobaciones de la asociación de propietarios (HOA)?',
          answer:
            'Sí. Gestionamos todas las solicitudes de permisos, aprobaciones de HOA y la documentación de interconexión con la red en su nombre. No tendrá que realizar ningún trámite gubernamental.',
        },
        {
          question: '¿Qué sucede después de la instalación?',
          answer:
            'Programamos la inspección técnica de la red, le ayudamos a configurar su aplicación de monitoreo solar en el teléfono y brindamos soporte continuo. Su única tarea será disfrutar de la energía limpia generada.',
        },
        {
          question: '¿Qué sucede si hay algún inconveniente después de la activación?',
          answer:
            'Ofrecemos soporte post-instalación completo. Las garantías del fabricante de los equipos y las garantías de mano de obra se revisan con usted durante la entrega del sistema. Llámenos si tiene alguna duda.',
        },
      ]
    : [
        {
          question: 'How long does the whole process take from assessment to activation?',
          answer:
            'Typically 4–10 weeks, depending on local permitting timelines and utility interconnection schedules. We keep you updated at every stage so there are no surprises.',
        },
        {
          question: 'Do you handle permits and HOA approvals?',
          answer:
            'Yes. We manage all permit applications, HOA design submissions, and utility interconnection paperwork on your behalf. You won\'t need to navigate a single government form.',
        },
        {
          question: 'What happens after installation?',
          answer:
            'We schedule the utility inspection, walk you through your system monitoring app, and provide ongoing support. Your job is simply to enjoy the clean energy your system produces.',
        },
        {
          question: 'What if something goes wrong after activation?',
          answer:
            'We provide post-installation support. Equipment warranties and workmanship guarantees are reviewed with you during your consultation. Contact us any time if a concern arises after activation.',
        },
      ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isSpanish ? 'Inicio' : 'Home', item: 'https://newerasolarenergy.com' },
          { '@type': 'ListItem', position: 2, name: isSpanish ? 'Nuestro Proceso' : 'Our Process', item: isSpanish ? 'https://newerasolarenergy.com/es/process' : 'https://newerasolarenergy.com/process' },
        ],
      },
      {
        '@type': 'Service',
        name: isSpanish ? 'Instalación Solar Residencial' : 'Residential Solar Installation',
        provider: { '@type': 'Organization', name: 'New Era Solar Energy' },
        description: isSpanish
          ? 'Proceso solar residencial de extremo a extremo que incluye evaluación, diseño, permisos, instalación y activación.'
          : 'End-to-end residential solar installation including assessment, design, permitting, installation, and activation.',
        areaServed: ['Florida', 'Massachusetts', 'Connecticut'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: isSpanish ? 'Servicios de Instalación Solar' : 'Solar Installation Services',
        },
      },
    ],
  };

  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Lightbulb className="w-7 h-7 text-[#ff5722]" />;
      case '02':
        return <ClipboardList className="w-7 h-7 text-[#ff5722]" />;
      case '03':
        return <FileText className="w-7 h-7 text-[#ff5722]" />;
      case '04':
        return <Hammer className="w-7 h-7 text-[#ff5722]" />;
      case '05':
        return <CheckCircle className="w-7 h-7 text-[#ff5722]" />;
      default:
        return null;
    }
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
              {t.heroTag}
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl leading-tight mb-5">
              {t.heroTitle}
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              {t.heroDesc}
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="space-y-8">
            {t.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col md:flex-row gap-6 md:gap-8"
              >
                {/* Step Number + Icon */}
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-3 md:w-24 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#F9FAFB] border border-[#E2E8F0] flex items-center justify-center">
                    {getStepIcon(step.num)}
                  </div>
                  <span className="font-poppins font-black text-3xl text-[#e5e5e5] md:text-4xl">{step.num}</span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-poppins font-bold text-xl md:text-2xl text-[#14324b] mb-3">
                    {step.title}
                  </h2>
                  <p className="text-[#4e5257] font-sans text-sm md:text-base leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d, di) => (
                      <li key={di} className="flex items-center gap-2 text-sm text-[#4e5257] font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline progress bar */}
          <div className="mt-12 bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">
            <h3 className="font-poppins font-bold text-[#14324b] text-lg mb-4 text-center">
              {t.timelineTitle}
            </h3>
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              {t.timelineSteps.map((label, i) => (
                <div key={i} className="flex-1 bg-[#F9FAFB] rounded-xl px-4 py-3 text-center">
                  <span className="text-xs font-bold text-[#14324b] font-poppins block">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#4e5257] font-sans text-center mt-3 italic">
              {t.timelineDisclaimer}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-4 border-t border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-6">
            <FAQAccordion
              items={faqs}
              title={t.faqTitle}
              subtitle={t.faqSubtitle}
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

