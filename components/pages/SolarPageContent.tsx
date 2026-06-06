"use client";
import React from 'react';
import Link from 'next/link';
import { solarPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';
import {
  Sun,
  Zap,
  DollarSign,
  Shield,
  Home,
  TrendingUp,
  Leaf,
  ClipboardCheck,
  Ruler,
  Settings,
  FileCheck,
  Battery,
  Gauge,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

interface SolarPageContentProps {
  locale: Locale;
}

/* Icon maps keyed by ID strings from the translation object */
const painPointIconMap: Record<string, React.ReactNode> = {
  bills: <DollarSign className="w-6 h-6" />,
  pricing: <Gauge className="w-6 h-6" />,
  roof: <Home className="w-6 h-6" />,
  sales: <Shield className="w-6 h-6" />,
  permits: <FileCheck className="w-6 h-6" />,
  independence: <Zap className="w-6 h-6" />,
};

const needsIconMap: Record<string, React.ReactNode> = {
  bill: <DollarSign className="w-5 h-5" />,
  ownership: <Home className="w-5 h-5" />,
  roofAge: <ClipboardCheck className="w-5 h-5" />,
  orientation: <Ruler className="w-5 h-5" />,
  space: <Settings className="w-5 h-5" />,
  energy: <Gauge className="w-5 h-5" />,
  utility: <Zap className="w-5 h-5" />,
  battery: <Battery className="w-5 h-5" />,
  timeline: <FileCheck className="w-5 h-5" />,
};

const stepIconMap: Record<string, React.ReactNode> = {
  '01': <ClipboardCheck className="w-6 h-6" />,
  '02': <Gauge className="w-6 h-6" />,
  '03': <Ruler className="w-6 h-6" />,
  '04': <Settings className="w-6 h-6" />,
  '05': <DollarSign className="w-6 h-6" />,
  '06': <FileCheck className="w-6 h-6" />,
  '07': <Home className="w-6 h-6" />,
  '08': <Sun className="w-6 h-6" />,
};

const benefitIconMap: Record<string, React.ReactNode> = {
  bills: <DollarSign className="w-7 h-7" />,
  independence: <Zap className="w-7 h-7" />,
  value: <TrendingUp className="w-7 h-7" />,
  environment: <Leaf className="w-7 h-7" />,
};

export default function SolarPageContent({ locale }: SolarPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? solarPageTranslations.es : solarPageTranslations.en;

  const contactHref = isSpanish ? '/es/contact' : '/contact';
  const calculatorHref = isSpanish ? '/es/calculate-savings' : '/calculate-savings';

  const posterUrl =
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop';

  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.warn('Solar video play failed or was prevented:', err);
      });
    }
  }, []);

  return (
    <div className="bg-[#FEFCF9] min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-16">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-sans text-[#4e5257]"
        >
          <Link
            href={isSpanish ? '/es' : '/'}
            className="hover:text-[#ff5722] transition-colors"
          >
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
          <ArrowRight className="w-3 h-3 text-[#E2E8F0]" />
          <span className="text-[#14324b] font-semibold">
            {isSpanish ? 'Solar Residencial' : 'Residential Solar'}
          </span>
        </nav>

        {/* Hero with Video */}
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
              <source src="/videos/solar-hero.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-20 max-w-2xl flex flex-col gap-6">
            <span className="text-[11px] font-bold uppercase text-[#F59E0B] tracking-widest">
              {t.heroTag}
            </span>
            <h1 className="font-poppins font-extrabold text-4xl md:text-5xl text-white leading-tight">
              {t.heroTitle}
              <span className="text-[#ff5722]">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-white/80 font-sans text-base md:text-lg max-w-xl leading-relaxed">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={calculatorHref}
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

        {/* Pain Points */}
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
            {t.painPoints.map((pp) => (
              <div
                key={pp.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/20 flex items-center justify-center text-[#ff5722]">
                  {painPointIconMap[pp.id]}
                </div>
                <h3 className="font-poppins font-bold text-lg text-[#14324b]">
                  {pp.title}
                </h3>
                <p className="text-[#4e5257] font-sans text-sm leading-relaxed">
                  {pp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Needs Analysis / Assessment Criteria */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {t.needsItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-5 bg-[#F9FAFB] rounded-xl border border-[#E2E8F0]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] shrink-0">
                  {needsIconMap[item.id]}
                </div>
                <div>
                  <p className="font-poppins font-bold text-sm text-[#14324b] mb-1">
                    {item.title}
                  </p>
                  <p className="text-[#4e5257] font-sans text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process - 8 Steps */}
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
            {t.steps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/20 flex items-center justify-center text-[#ff5722]">
                    {stepIconMap[item.step]}
                  </div>
                  <span className="text-[11px] font-bold text-[#ff5722] uppercase tracking-widest">
                    {isSpanish ? 'Paso' : 'Step'} {item.step}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-lg text-[#14324b]">
                  {item.title}
                </h3>
                <p className="text-[#4e5257] font-sans text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits / Advantages */}
        <section className="bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.advantagesTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.advantagesTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.advantages.map((b) => (
              <div
                key={b.id}
                className="flex flex-col gap-3 p-6 bg-[#F9FAFB] rounded-2xl border border-[#E2E8F0]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B]">
                  {benefitIconMap[b.id]}
                </div>
                <h3 className="font-poppins font-bold text-lg text-[#14324b]">
                  {b.title}
                </h3>
                <p className="text-[#4e5257] font-sans text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Solar Readiness Checklist */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.readinessTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.readinessTitle}
            </h2>
            <p className="text-[#4e5257] font-sans mt-4 max-w-xl mx-auto text-base leading-relaxed">
              {t.readinessDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {t.readinessChecklist.map((item) => (
              <div
                key={item.check}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex gap-4 items-start shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#ff5722]" />
                </div>
                <div>
                  <p className="font-poppins font-bold text-[#14324b] text-sm mb-1">
                    {item.check}
                  </p>
                  <p className="text-[#4e5257] font-sans text-xs leading-relaxed">
                    {item.detail}
                  </p>
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
            <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest block mb-2">
              {t.faqTag}
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#14324b]">
              {t.faqTitle}
            </h2>
          </div>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {t.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-2xl shadow-sm group"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-poppins font-semibold text-[#14324b] text-sm md:text-base list-none select-none hover:text-[#ff5722] transition-colors">
                  <span>{faq.question}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#F9FAFB] border border-[#E2E8F0] flex items-center justify-center text-[#ff5722] group-open:rotate-45 transition-transform">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 4v16M4 12h16"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-[#4e5257] font-sans text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#14324b] rounded-2xl px-8 md:px-16 py-14 text-center">
          <span className="text-[11px] font-bold uppercase text-[#F59E0B] tracking-widest block mb-4">
            {t.ctaBoxTag}
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            {t.ctaBoxTitle}
          </h2>
          <p className="text-white/80 font-sans text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {t.ctaBoxDesc}
          </p>
                    <Link
            href={calculatorHref}
            className="inline-block bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)] font-sans text-center"
          >
            {t.ctaBoxBtn}
          </Link>
        </section>
      </main>
    </div>
  );
}


