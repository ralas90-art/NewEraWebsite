"use client";
import React from 'react';
import Link from 'next/link';
import { roofingPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';
import {
  Home,
  Shield,
  CloudRain,
  FileText,
  Wrench,
  HardHat,
  CheckCircle,
  ClipboardCheck,
  Hammer,
  Eye,
  Ruler,
  AlertTriangle,
  ArrowRight,
  Search,
  ShieldCheck,
} from 'lucide-react';

interface RoofingPageContentProps {
  locale: Locale;
}

const painPointIcons = [Home, AlertTriangle, CloudRain, FileText, Shield, Wrench];
const needsIcons = [Ruler, HardHat, Eye, AlertTriangle, Wrench, CloudRain, Shield, FileText, CheckCircle, Ruler];
const serviceIcons = [Search, Hammer, CloudRain, ShieldCheck];
const processIcons = [ClipboardCheck, Eye, FileText, CheckCircle, Ruler, HardHat, Hammer, ShieldCheck];
const checkIcons = [Ruler, Shield, Home, FileText];

export default function RoofingPageContent({ locale }: RoofingPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? roofingPageTranslations.es : roofingPageTranslations.en;

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
    mainEntity: t.faqs.map((f) => ({
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

  const posterUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop';

  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.warn('Roofing video play failed or was prevented:', err);
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
            {isSpanish ? 'Techos' : 'Roofing'}
          </li>
        </ol>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-20 flex flex-col gap-16">
        {/* ── Hero Section ── */}
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
              <source src="/videos/roofing-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-[#ff5722]/20 border border-[#ff5722]/40 text-[#ff5722] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
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

        {/* ── Pain Points Section ── */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.painTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.painTitle}
            </h2>
            <p className="text-[#4e5257] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              {t.painDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.painPoints.map((item, idx) => {
              const Icon = painPointIcons[idx] || AlertTriangle;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#ff5722]" />
                  </div>
                  <h3 className="font-poppins font-bold text-base text-[#14324b]">{item.title}</h3>
                  <p className="text-[#4e5257] font-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Needs Analysis Section ── */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.needsTag}
            </span>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#14324b]">
              {t.needsTitle}
            </h2>
            <p className="text-[#4e5257] font-sans mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              {t.needsDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {t.needsItems.map((item, idx) => {
              const Icon = needsIcons[idx % needsIcons.length];
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-[#F9FAFB] border border-[#E2E8F0] rounded-xl p-4"
                >
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center mt-0.5">
                    <Icon className="w-4 h-4 text-[#F59E0B]" />
                  </div>
                  <span className="font-sans text-sm text-[#14324b] font-medium leading-snug">{item}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Roofing Services Section ── */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.servicesTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.servicesTitle}
            </h2>
            <p className="text-[#4e5257] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              {t.servicesDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.services.map((svc, idx) => {
              const Icon = serviceIcons[idx] || Search;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#ff5722]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#ff5722]" />
                    </div>
                    <span className="bg-[#ff5722]/10 border border-[#ff5722]/20 text-[#ff5722] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-[#14324b]">{svc.title}</h3>
                  <p className="text-[#4e5257] font-sans text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Process Section ── */}
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
            {t.processSteps.map((step, idx) => {
              const Icon = processIcons[idx] || CheckCircle;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col gap-3 relative"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest font-poppins">
                      {isSpanish ? 'Paso' : 'Step'} {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <h3 className="font-poppins font-bold text-base text-[#14324b]">{step.title}</h3>
                  <p className="text-[#4e5257] font-sans text-sm leading-relaxed">{step.desc}</p>
                  {idx < t.processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E2E8F0]" />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Why It Matters Section ── */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-3">
                {t.mattersTag}
              </span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#14324b] mb-4">
                {t.mattersTitle}
              </h2>
              <p className="text-[#4e5257] font-sans text-sm leading-relaxed mb-4">
                {t.mattersDesc1}
              </p>
              <p className="text-[#4e5257] font-sans text-sm leading-relaxed mb-6">
                {t.mattersDesc2}
              </p>
              <Link
                href={isSpanish ? '/es/contact' : '/contact'}
                className="inline-block bg-[#14324b] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#14324b]/90 transition-colors font-sans"
              >
                {t.ctaCombined}
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {t.checks.map((item, idx) => {
                const Icon = checkIcons[idx] || CheckCircle;
                return (
                  <div key={idx} className="flex items-center gap-4 bg-[#F9FAFB] border border-[#E2E8F0] rounded-xl p-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <div>
                      <p className="font-poppins font-bold text-sm text-[#14324b]">{item.label}</p>
                      <p className="text-[#4e5257] font-sans text-xs mt-0.5">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
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
            {t.faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm group">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-poppins font-semibold text-[#14324b] text-sm md:text-base list-none select-none hover:text-[#ff5722] transition-colors">
                  <span>{faq.question}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#F9FAFB] border border-[#E2E8F0] flex items-center justify-center text-[#ff5722] group-open:rotate-45 transition-transform">
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

        {/* Our Promise Section */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-8 my-10">
          <div className="w-16 h-16 rounded-2xl bg-[#ff5722]/10 flex items-center justify-center text-[#ff5722] shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-poppins font-bold text-lg text-[#14324b] mb-2">
              {t.promiseTitle}
            </h3>
            <p className="text-[#4e5257] font-sans text-sm md:text-base leading-relaxed">
              {t.promiseDesc}
            </p>
          </div>
        </section>

        {/* ── Final CTA Section ── */}
        <section className="bg-[#14324b] rounded-2xl px-8 md:px-16 py-14 text-center">
          <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-4">
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


