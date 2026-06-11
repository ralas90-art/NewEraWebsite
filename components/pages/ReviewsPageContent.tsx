import React from 'react';
import Link from 'next/link';
import { ReviewTabs } from '@/components/ReviewTabs';
import { WorkGallery } from '@/components/WorkGallery';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { reviewsPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';

interface ReviewsPageContentProps {
  locale: Locale;
}

export default function ReviewsPageContent({ locale }: ReviewsPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? reviewsPageTranslations.es : reviewsPageTranslations.en;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: isSpanish ? 'Inicio' : 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: isSpanish ? 'Reseñas' : 'Reviews', item: isSpanish ? 'https://newerasolarenergy.com/es/reviews' : 'https://newerasolarenergy.com/reviews' },
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
              <Link href={isSpanish ? '/es' : '/'} className="hover:underline">
                {t.breadcrumbs[0]}
              </Link>
              <span className="mx-2 opacity-60">/</span>
              <span className="opacity-80">{t.breadcrumbs[1]}</span>
            </nav>
            <span className="text-[10px] font-bold uppercase text-[#ff5722] tracking-widest mb-3 block">
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

        {/* Gallery of Completed Work */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#E2E8F0]">
          <WorkGallery locale={locale} />
        </section>

        {/* Review Tabs Section */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase text-[#ff5722] tracking-widest mb-3 block">
              {isSpanish ? 'Reseñas de Clientes' : 'Verified Reviews'}
            </span>
            <h2 className="font-poppins font-bold text-2xl md:text-4xl text-[#14324b] mb-4">
              {isSpanish ? 'Lo que dicen los dueños de casa' : 'Homeowner Testimonials'}
            </h2>
            <p className="text-[#4e5257] font-sans text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
              {isSpanish 
                ? 'Comentarios reales publicados por clientes en el Perfil de Empresa de Google de New Era Solar Energy.'
                : 'Real feedback published by customers on the New Era Solar Energy Google Business Profile.'}
            </p>
          </div>
          <ReviewTabs />
        </section>

        {/* CTA Row */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Share your experience */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm flex flex-col gap-4">
              <h2 className="font-poppins font-bold text-xl text-[#14324b]">{t.shareTitle}</h2>
              <p className="text-[#4e5257] font-sans text-sm leading-relaxed">
                {t.shareDesc}
              </p>
              <a
                href="https://share.google/l98mSvN0KB1nYSs0J"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff5722] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#ff5722]/90 transition-all inline-flex items-center gap-2 self-start font-sans"
              >
                {t.btnShare}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Start your journey */}
            <div className="bg-[#14324b] rounded-2xl p-8 flex flex-col gap-4">
              <h2 className="font-poppins font-bold text-xl text-white">{t.startTitle}</h2>
              <p className="text-white/80 font-sans text-sm leading-relaxed">
                {t.startDesc}
              </p>
              <Link
                href={isSpanish ? '/es/contact' : '/contact'}
                className="bg-[#ff5722] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#ff5722]/90 transition-all inline-flex items-center gap-2 self-start font-sans"
              >
                {t.btnStart}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


