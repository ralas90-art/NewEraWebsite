import React from 'react';
import Link from 'next/link';
import { ReviewTabs } from '@/components/ReviewTabs';
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
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isSpanish ? 'Inicio' : 'Home', item: 'https://newerasolarenergy.com' },
          { '@type': 'ListItem', position: 2, name: isSpanish ? 'Reseñas' : 'Reviews', item: isSpanish ? 'https://newerasolarenergy.com/es/reviews' : 'https://newerasolarenergy.com/reviews' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'New Era Solar Energy',
        url: 'https://newerasolarenergy.com',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '3',
          bestRating: '5',
          worstRating: '1',
          description: isSpanish 
            ? 'Reseñas verificadas de clientes de Google Maps para New Era Solar Energy.' 
            : 'Verified customer reviews from Google Maps for New Era Solar Energy.',
        },
      },
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

        {/* Review Tabs Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <ReviewTabs />
        </section>

        {/* CTA Row */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
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


