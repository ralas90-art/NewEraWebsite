'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { aboutPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';
import { 
  Shield, 
  Heart, 
  Award, 
  HardHat, 
  Zap, 
  Users, 
  TrendingUp, 
  Globe, 
  Home, 
  Flag, 
  Leaf,
  Target,
  Eye,
  ArrowRight
} from 'lucide-react';

interface AboutPageContentProps {
  locale: Locale;
}

export default function AboutPageContent({ locale }: AboutPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? aboutPageTranslations.es : aboutPageTranslations.en;
  const pathname = usePathname();

  // Map value IDs to Lucide icons
  const valueIcons: Record<string, React.ComponentType<any>> = {
    integrity: Shield,
    customer: Heart,
    quality: Award,
    safety: HardHat,
    improvement: Zap,
    teamwork: Users,
    development: TrendingUp,
    community: Globe,
    family: Home,
    veteran: Flag,
    sustainability: Leaf,
  };

  const getPath = (path: string) => {
    if (isSpanish) {
      if (path === '/') return '/es';
      if (path.startsWith('/es/')) return path;
      return `/es${path}`;
    }
    return path;
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isSpanish ? 'Inicio' : 'Home', item: 'https://newerasolarenergy.com' },
          { '@type': 'ListItem', position: 2, name: isSpanish ? 'Quiénes Somos' : 'About Us', item: isSpanish ? 'https://newerasolarenergy.com/es/about' : 'https://newerasolarenergy.com/about' },
        ],
      },
      {
        '@type': 'AboutPage',
        '@id': isSpanish ? 'https://newerasolarenergy.com/es/about#webpage' : 'https://newerasolarenergy.com/about#webpage',
        url: isSpanish ? 'https://newerasolarenergy.com/es/about' : 'https://newerasolarenergy.com/about',
        name: isSpanish ? 'Quiénes Somos | New Era Solar Energy' : 'About Us | New Era Solar Energy',
        description: t.heroDesc,
        mainEntity: {
          '@type': 'Organization',
          name: 'New Era Solar Energy',
          url: 'https://newerasolarenergy.com',
          logo: 'https://newerasolarenergy.com/logo.png',
          slogan: t.heroTitleHighlight,
        }
      }
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-[#F9FAFB]">
        {/* Hero */}
        <section className="bg-[#14324b] text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-xs text-[#ff5722] mb-4 font-sans font-semibold">
              <Link href={getPath('/')} className="hover:underline">
                {t.breadcrumbs[0]}
              </Link>
              <span className="mx-2 opacity-60">/</span>
              <span className="opacity-80">{t.breadcrumbs[1]}</span>
            </nav>
            <span className="text-[10px] font-bold uppercase text-[#ff5722] tracking-widest mb-3 block font-poppins">
              {t.heroTag}
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl leading-tight mb-5 tracking-tight">
              {t.heroTitle} <span className="text-[#ff5722]">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              {t.heroDesc}
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm flex flex-col gap-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff5722]/5 rounded-bl-full flex items-center justify-center transition-colors group-hover:bg-[#ff5722]/10">
                <Target className="w-6 h-6 text-[#ff5722] translate-x-2 -translate-y-2" />
              </div>
              <h2 className="font-poppins font-bold text-2xl text-[#14324b] flex items-center gap-2">
                {t.missionTitle}
              </h2>
              <p className="text-[#4e5257] font-sans text-sm md:text-base leading-relaxed">
                {t.missionDesc}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-10 shadow-sm flex flex-col gap-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff5722]/5 rounded-bl-full flex items-center justify-center transition-colors group-hover:bg-[#ff5722]/10">
                <Eye className="w-6 h-6 text-[#ff5722] translate-x-2 -translate-y-2" />
              </div>
              <h2 className="font-poppins font-bold text-2xl text-[#14324b] flex items-center gap-2">
                {t.visionTitle}
              </h2>
              <p className="text-[#4e5257] font-sans text-sm md:text-base leading-relaxed">
                {t.visionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-white border-t border-b border-[#E2E8F0] py-16 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[11px] font-bold uppercase text-[#ff5722] tracking-widest mb-2 block font-poppins">
                {t.valuesTag}
              </span>
              <h2 className="font-poppins font-bold text-3xl text-[#14324b] tracking-tight">
                {t.valuesTitle}
              </h2>
              <p className="text-[#4e5257] text-sm md:text-base mt-3 font-sans leading-relaxed">
                {t.valuesDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.values.map((val: any) => {
                const Icon = valueIcons[val.id] || Shield;
                return (
                  <div 
                    key={val.id} 
                    className="bg-[#F9FAFB] p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#ff5722]/30 transition-all flex flex-col gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 flex items-center justify-center text-[#ff5722] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-base text-[#14324b] mb-1.5">
                        {val.title}
                      </h3>
                      <p className="text-[#4e5257] text-xs leading-relaxed font-sans">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Family-Owned & Veteran-Led Trust Section */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="bg-[#14324b] text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#ff5722]">
                  <Flag className="w-6 h-6" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#ff5722]">
                  <Home className="w-6 h-6" />
                </div>
              </div>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl tracking-tight mb-5">
                {t.foundationTitle}
              </h2>
              <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed mb-4">
                {t.foundationDesc1}
              </p>
              <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed">
                {t.foundationDesc2}
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-6 shadow-sm">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#14324b] tracking-tight max-w-xl">
              {t.btnAssessment === 'Schedule Free Assessment' ? 'Ready to Start Your New Era of Energy?' : '¿Listo para comenzar su Nueva Era de energía?'}
            </h2>
            <p className="text-[#4e5257] font-sans text-sm md:text-base max-w-2xl leading-relaxed">
              {t.btnAssessment === 'Schedule Free Assessment' 
                ? 'Get in touch with our team for a free, no-pressure home assessment. We will analyze your utility bills and roof condition to show you what you could save.'
                : 'Póngase en contacto con nuestro equipo para una evaluación del hogar gratuita y sin compromiso. Analizaremos sus facturas de servicios públicos y el estado de su techo para mostrarle lo que podría ahorrar.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Link
                href={isSpanish ? '/es/calculate-savings' : '/calculate-savings'}
                className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-[0_8px_30px_rgba(255,87,34,0.25)] hover:bg-[#e04a1b] hover:shadow-[0_8px_30px_rgba(255,87,34,0.35)] transition-all font-sans text-center"
              >
                {t.btnAssessment}
              </Link>
              <Link
                href={getPath('/contact')}
                className="bg-white text-[#14324b] border-2 border-[#E2E8F0] px-8 py-4 rounded-xl font-bold text-sm hover:border-[#ff5722] hover:text-[#ff5722] transition-all font-sans text-center"
              >
                {t.btnContact}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
