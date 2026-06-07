'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ServiceCard } from '../components/ServiceCard';
import { LeadForm } from '../components/LeadForm';
import { Reviews } from '../components/Reviews';
import { FAQ } from '../components/FAQ';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { TrustIndicators } from '../components/TrustIndicators';
import { WhyNewEra } from '../components/WhyNewEra';
import { FloatingCTA } from '../components/FloatingCTA';
import { HomeUpgradeAdvisor } from '../components/HomeUpgradeAdvisor';
import { ReferralProgram } from '../components/ReferralProgram';
import { FinalCTA } from '@/components/FinalCTA';
import { homeTranslations } from '@/lib/i18n/content';
import { ShieldCheck, TrendingUp } from 'lucide-react';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const pathname = usePathname();
  const isSpanish = pathname === '/es' || pathname.startsWith('/es/');
  const t = isSpanish ? homeTranslations.es : homeTranslations.en;

  useEffect(() => {
    const handleSelect = (e: Event) => {
      const service = (e as CustomEvent).detail;
      setSelectedService(service);
    };
    window.addEventListener('select-service', handleSelect);
    return () => window.removeEventListener('select-service', handleSelect);
  }, []);

  const scrollToLeadForm = (id: string, trackingEvent: string) => {
    console.log(trackingEvent);
    const formElement = document.getElementById(id);
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setTimeout(() => {
      document.getElementById('upgrade-advisor')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const trustItems = isSpanish
    ? ['Evaluaci\u00f3n Gratis', 'Consulta Sin Presi\u00f3n', 'Soporte Biling\u00fce', 'Respuesta R\u00e1pida']
    : ['Free Assessment', 'No-Pressure Consult', 'Bilingual Support', 'Fast Follow-Up'];

  return (
    <div className="w-full selection:bg-[#ff5722] selection:text-white">
      <main className="flex-grow flex flex-col">

        {/* ===== HERO SECTION ===== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] to-white">
          {/* Background texture */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#FFF7ED] via-[#FFF0DB] to-transparent opacity-60 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#E0F2FE] to-transparent opacity-40 blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Copy */}
              <div className="flex flex-col gap-6">
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 self-start bg-[#ff5722]/5 border border-[#ff5722]/15 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse" />
                  <span className="text-[#ff5722] text-[12px] font-semibold tracking-wide uppercase font-sans">{t.heroTag}</span>
                </div>

                {/* Headline */}
                <h1 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.1] text-[#14324b] tracking-tight">
                  {isSpanish ? (
                    <>Explora Opciones Solares con <span className="bg-gradient-to-r from-[#ff5722] to-[#F59E0B] bg-clip-text text-transparent">$0 Inicial</span> y Conoce tus Ahorros Antes de Decidir</>
                  ) : (
                    <>Explore <span className="bg-gradient-to-r from-[#ff5722] to-[#F59E0B] bg-clip-text text-transparent">$0 Down</span> Solar Options and See Your Savings Before You Commit</>
                  )}
                </h1>

                <p className="text-[#4e5257] text-base md:text-lg leading-relaxed max-w-lg font-sans">
                  {t.heroSubheadline}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                    <Link
                    href={isSpanish ? '/es/calculate-savings' : '/calculate-savings'}
                    className="w-full sm:w-auto bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-[0_8px_30px_rgba(255,87,34,0.25)] hover:bg-[#e04a1b] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer font-sans text-center"
                  >
                    {t.ctaAssessment}
                  </Link>
                  <Link
                    href={isSpanish ? '/es/calculate-savings' : '/calculate-savings'}
                    className="w-full sm:w-auto bg-white text-[#14324b] border-2 border-[#E2E8F0] px-8 py-4 rounded-xl font-bold text-sm hover:border-[#ff5722] hover:text-[#ff5722] transition-all cursor-pointer font-sans text-center"
                  >
                    {t.ctaSavings}
                  </Link>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex -space-x-2">
                    {['bg-blue-400', 'bg-green-400', 'bg-[#ff5722]', 'bg-purple-400'].map((c, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}>
                        {['J', 'M', 'R', 'A'][i]}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#F59E0B] text-[13px]">{'\u2605'}</span>
                      ))}
                      <span className="text-[13px] text-[#14324b] font-semibold ml-1">4.9</span>
                    </div>
                    <span className="text-[12px] text-[#6B7280]">
                      {isSpanish ? 'Confiado por 1,200+ propietarios en Florida' : 'Trusted by 1,200+ Florida homeowners'}
                    </span>
                  </div>
                </div>

                {/* Trust Strip */}
                <div className="pt-4 border-t border-[#E2E8F0] w-full">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-bold text-[#6B7280] uppercase tracking-widest font-sans">
                    {trustItems.map((item, i) => (
                      <span key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Image + floating cards */}
              <div className="relative hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3]">
                  <Image
                    src="/hero-home.jpeg"
                    alt="Solar panels on a bright Florida home"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14324b]/20 to-transparent" />
                </div>

                {/* Floating trust card - top left */}
                <div className="absolute -left-6 top-8 bg-white rounded-2xl shadow-xl px-4 py-3.5 flex items-center gap-3 border border-[#E2E8F0]">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-[18px] h-[18px] text-green-600" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#14324b]">{isSpanish ? 'Licencia y Seguro' : 'Licensed & Insured'}</p>
                    <p className="text-[11px] text-[#6B7280]">{isSpanish ? 'Certificado en Florida' : 'Florida state certified'}</p>
                  </div>
                </div>

                {/* Floating savings card - bottom right */}
                <div className="absolute -right-4 bottom-12 bg-white rounded-2xl shadow-xl px-4 py-3.5 border border-[#E2E8F0]">
                  <p className="text-[11px] text-[#6B7280] font-medium uppercase tracking-wide mb-1">{isSpanish ? 'Ahorro Promedio Mensual' : 'Avg. Monthly Savings'}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-[28px] font-bold text-[#14324b] leading-none">$180</span>
                    <TrendingUp className="w-5 h-5 text-green-500 mb-1" />
                  </div>
                  <p className="text-[11px] text-[#6B7280] mt-1">{isSpanish ? 'Basado en datos de FL' : 'Based on FL homeowner data'}</p>
                </div>

                {/* Glow accent */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-[#ff5722]/15 blur-2xl rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== MAIN CONTENT ===== */}
        <div className="p-6 gap-6 max-w-6xl mx-auto w-full flex flex-col">

          {/* Lead Form Section */}
          <div id="lead-form-section" className="scroll-mt-20">
            <LeadForm />
          </div>

          {/* Trust Indicators Section */}
          <TrustIndicators />

          {/* Why New Era (Core Values) Section */}
          <WhyNewEra locale={isSpanish ? 'es' : 'en'} />

          {/* Home Upgrade Advisor Section */}
          <div id="upgrade-advisor" className="scroll-mt-20">
            <HomeUpgradeAdvisor initialService={selectedService} onServiceClear={() => setSelectedService(undefined)} />
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              title={t.solarTitle}
              description={t.solarDesc}
              category={t.solarCategory}
              isPrimary={true}
              icon="solar"
              onClick={() => handleSelectService('Solar')}
              index={0}
            />
            <ServiceCard
              title={t.roofTitle}
              description={t.roofDesc}
              category={t.roofCategory}
              icon="roofing"
              onClick={() => handleSelectService('Roofing')}
              index={1}
            />
            <ServiceCard
              title={t.waterTitle}
              description={t.waterDesc}
              category={t.waterCategory}
              icon="water"
              onClick={() => handleSelectService('Water Purification')}
              index={2}
            />
          </div>

          {/* Process Timeline */}
          <div id="our-process" className="scroll-mt-20">
            <ProcessTimeline />
          </div>

          {/* Service Areas */}
          <section id="service-areas" className="mt-8 mb-4 border-t border-b border-[#E2E8F0] py-12 scroll-mt-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <span className="text-[11px] font-bold uppercase text-[#082fa3] tracking-widest mb-1 block font-poppins">{t.expertiseTag}</span>
                <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#14324b]">{t.expertiseTitle}</h2>
                <p className="text-[#4e5257] text-sm mt-2 max-w-xl font-sans">{t.expertiseDesc}</p>
              </div>
              <div className="flex gap-3 flex-wrap justify-center md:justify-end">
                {['Miami', 'Orlando', 'Tampa', 'Jacksonville'].map(city => (
                  <span key={city} className="bg-[#F9FAFB] text-[#14324b] px-4 py-2 rounded-xl text-xs font-bold border border-[#E2E8F0]">{city}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Reviews */}
          <div id="reviews" className="scroll-mt-20">
            <Reviews />
          </div>

          {/* Referral Program */}
          <ReferralProgram />

          {/* FAQ */}
          <FAQ />

          {/* Final CTA */}
          <FinalCTA />
        </div>
      </main>

      <FloatingCTA />
    </div>
  );
}
