import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewTabs } from '@/components/ReviewTabs';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Reviews | New Era Solar Energy',
  description:
    'See what homeowners across Florida, Massachusetts, and Connecticut are saying about their solar journey with New Era Solar Energy.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolarenergy.com' },
        { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://newerasolarenergy.com/reviews' },
      ],
    },
    {
      '@type': 'Organization',
      name: 'New Era Solar Energy',
      url: 'https://newerasolarenergy.com',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '1',
        bestRating: '5',
        worstRating: '1',
        description: 'Aggregate rating placeholder — verified review data will be added prior to launch.',
      },
    },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#F5F7FA]">
        {/* Hero */}
        <section className="bg-newera-dark-blue text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-xs text-[#082fa3] mb-4 font-sans">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2 opacity-60">/</span>
              <span className="opacity-80">Reviews</span>
            </nav>
            <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-3 block">
              Homeowner Experiences
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl leading-tight mb-5">
              What Homeowners Say About New Era Solar Energy
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              We are committed to earning trust through transparent service, clear communication, and results. Below are verified customer experiences as we collect and verify reviews from our Google Business Profile.
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
            <div className="bg-white border border-[#e5e5e5] rounded-3xl p-8 shadow-sm flex flex-col gap-4">
              <h2 className="font-poppins font-bold text-xl text-newera-dark-gray">Share Your Experience</h2>
              <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">
                Already a New Era Solar customer? We&apos;d love to hear how your solar journey went. Leave us a review on Google to help other homeowners make confident decisions.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff5722] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all inline-flex items-center gap-2 self-start"
              >
                Leave a Google Review
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Start your journey */}
            <div className="bg-newera-dark-blue rounded-3xl p-8 flex flex-col gap-4">
              <h2 className="font-poppins font-bold text-xl text-white">Ready to Start Your Own Solar Journey?</h2>
              <p className="text-white/80 font-sans text-sm leading-relaxed">
                Join homeowners across Florida, Massachusetts, and Connecticut who are taking control of their energy costs with residential solar.
              </p>
              <Link
                href="/contact"
                className="bg-[#ff5722] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all inline-flex items-center gap-2 self-start"
              >
                Get My Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
