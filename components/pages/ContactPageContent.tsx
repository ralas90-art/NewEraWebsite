import React from 'react';
import Link from 'next/link';
import { contactPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';
import { LeadForm } from '@/components/LeadForm';
import { MapPin, Phone, Mail, Clock, Map, Globe } from 'lucide-react';

interface ContactPageContentProps {
  locale: Locale;
}

export default function ContactPageContent({ locale }: ContactPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? contactPageTranslations.es : contactPageTranslations.en;

  const faqItems = isSpanish
    ? [
        {
          q: '¿Qué tan rápido responden a las consultas?',
          a: 'Nuestro equipo suele responder en un plazo de 1 día hábil. Para asuntos urgentes, llámenos directamente durante nuestro horario comercial.',
        },
        {
          q: '¿La consulta es realmente gratuita?',
          a: 'Sí. Nuestra evaluación del hogar y consulta solar no tienen costo ni compromiso alguno. Creemos en dejar que las cifras hablen por sí mismas.',
        },
        {
          q: '¿Ofrecen atención bilingüe?',
          a: 'Sí. Brindamos soporte completo en inglés y español durante todo el proceso de consulta, propuesta e instalación.',
        },
      ]
    : [
        {
          q: 'How fast do you respond to inquiries?',
          a: 'Our team typically responds within 1 business day. For urgent matters, call us directly during our listed business hours.',
        },
        {
          q: 'Is the consultation truly free?',
          a: 'Yes. Our home assessment and solar consultation carry no charge and zero obligation. We believe in letting the numbers speak for themselves.',
        },
        {
          q: 'Do you offer bilingual support?',
          a: 'Yes. We provide full support in English and Spanish throughout the consultation, proposal, and installation process.',
        },
      ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'New Era Solar Energy',
    description: isSpanish
      ? 'Servicios residenciales de energía solar, techado y purificación de agua en FL, MA y CT.'
      : 'Residential solar, roofing, and water purification services across FL, MA, and CT.',
    url: 'https://newerasolarenergy.com',
    telephone: '+1-321-381-3192',
    email: 'solarinfo@newerasolarenergy.com',
    openingHours: 'Mo-Sa 08:00-19:00',
    areaServed: [
      { '@type': 'State', name: 'Florida' },
      { '@type': 'State', name: 'Massachusetts' },
      { '@type': 'State', name: 'Connecticut' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    availableLanguage: ['English', 'Spanish'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isSpanish ? 'Inicio' : 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: isSpanish ? 'Contacto' : 'Contact', item: isSpanish ? 'https://newerasolarenergy.com/es/contact' : 'https://newerasolarenergy.com/contact' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#14324b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-6 text-xs text-[#4e5257] font-sans flex items-center gap-2">
        <Link href={isSpanish ? '/es' : '/'} className="hover:text-[#ff5722] transition-colors">
          {isSpanish ? 'Inicio' : 'Home'}
        </Link>
        <span>/</span>
        <span className="text-[#14324b] font-semibold">
          {isSpanish ? 'Contacto' : 'Contact'}
        </span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-14 text-center">
        <span className="inline-block bg-[#082fa3]/15 text-[#082fa3] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          {t.heroTag}
        </span>
        <h1 className="font-poppins font-extrabold text-4xl md:text-5xl text-[#14324b] leading-[1.1] mb-4">
          {t.heroTitle}
        </h1>
        <p className="text-[#4e5257] text-lg font-sans leading-relaxed max-w-xl mx-auto">
          {t.heroDesc}
        </p>
      </section>

      {/* 2-Column Layout */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Contact Info */}
          <div className="space-y-6">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
              <h2 className="font-poppins font-bold text-xl text-[#14324b] mb-6">{t.infoTitle}</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#ff5722] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-[#4e5257] uppercase tracking-widest mb-0.5">{t.officeLabel}</p>
                    <p className="text-[#14324b] font-semibold font-sans">{t.officeVal}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#ff5722] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-[#4e5257] uppercase tracking-widest mb-0.5">{t.phoneLabel}</p>
                    <a href="tel:+13213813192" className="text-[#14324b] font-semibold font-sans hover:text-[#ff5722] transition-colors">
                      {t.phoneVal}
                    </a>
                    <p className="text-xs text-[#4e5257] font-sans">{t.phoneSub}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#ff5722] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-[#4e5257] uppercase tracking-widest mb-0.5">{t.emailLabel}</p>
                    <a href="mailto:solarinfo@newerasolarenergy.com" className="text-[#14324b] font-semibold font-sans hover:text-[#ff5722] transition-colors">
                      {t.emailVal}
                    </a>
                    <p className="text-xs text-[#4e5257] font-sans">{t.emailSub}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#ff5722] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-[#4e5257] uppercase tracking-widest mb-0.5">{t.hoursLabel}</p>
                    <p className="text-[#14324b] font-semibold font-sans">{t.hoursVal}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#ff5722] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-[#4e5257] uppercase tracking-widest mb-0.5">{t.areasLabel}</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {(isSpanish ? ['Florida', 'Massachusetts', 'Connecticut'] : ['Florida', 'Massachusetts', 'Connecticut']).map((state) => (
                        <span key={state} className="bg-[#082fa3]/15 text-[#14324b] text-xs font-semibold px-3 py-1 rounded-full border border-[#082fa3]/30">
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-[#ff5722] mt-1 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-[#4e5257] uppercase tracking-widest mb-0.5">{t.langLabel}</p>
                    <p className="text-[#14324b] font-semibold font-sans">{t.langVal}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Trust signals */}
            <div className="bg-[#14324b] rounded-2xl p-8 text-white">
              <h3 className="font-poppins font-bold text-lg mb-4">{t.expectTitle}</h3>
              <ul className="space-y-3">
                {t.expectList.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-sans text-white/90">
                    <span className="text-[#ff5722] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Lead Form */}
          <div>
            <LeadForm />
          </div>
        </div>
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

