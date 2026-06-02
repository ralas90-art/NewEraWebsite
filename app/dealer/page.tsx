import type { Metadata } from 'next';
import Link from 'next/link';
import { DealerApplicationForm } from '@/components/forms/DealerApplicationForm';

export const metadata: Metadata = {
  title: 'Become a Dealer Partner | New Era Solar Energy',
  description:
    'Partner with New Era Solar Energy as an EPC contractor, dealer, or territory sales partner. Build your business on a trusted platform.',
  openGraph: {
    title: 'Become a Dealer Partner | New Era Solar Energy',
    description: 'Partner with New Era Solar Energy. EPC, dealer, and territory sales opportunities available.',
    type: 'website',
  },
};

const whyCards = [
  {
    icon: '⚙️',
    title: 'Proven System',
    desc: 'We bring a tested, repeatable sales and fulfillment process that helps partners close more deals with less friction.',
  },
  {
    icon: '📊',
    title: 'Lead Support',
    desc: 'Depending on partnership level and territory, we offer lead support to help you grow your book of business faster.',
  },
  {
    icon: '🏗️',
    title: 'Back-End Operations',
    desc: 'From permitting to utility interconnection, our operations team handles the complex back-end so you can focus on sales.',
  },
  {
    icon: '🚀',
    title: 'Growth-Focused Culture',
    desc: 'We invest in our partners. Expect ongoing training, product updates, and a team that genuinely wants to see you win.',
  },
];

const partnerTypes = [
  {
    icon: '🤝',
    title: 'Independent Solar Sales Dealers',
    desc: 'Run your own customer relationships and sales process while leveraging New Era&apos;s infrastructure, pricing, and back-end support.',
  },
  {
    icon: '🏗️',
    title: 'EPC / Installation Contractors',
    desc: 'Grow your installation volume by becoming a certified install partner. We bring the deals; you bring the craftsmanship.',
  },
  {
    icon: '🗺️',
    title: 'Territory Development Partners',
    desc: 'Claim a geographic territory and build a team under New Era&apos;s brand. Ideal for experienced solar professionals ready to scale.',
  },
];

const faqItems = [
  {
    q: 'Do I need a solar license to partner?',
    a: 'Licensing requirements vary by state and partnership type. We review credentials as part of the application process and will guide you on any requirements.',
  },
  {
    q: 'Do you provide leads?',
    a: 'Lead support varies by partnership level and territory. This is discussed in detail during your partner onboarding call.',
  },
  {
    q: 'How long does the application process take?',
    a: 'Our partner team reviews applications and typically responds within 2 business days to schedule an introductory call.',
  },
];

export default function DealerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'New Era Solar Energy',
    description: 'Residential solar, roofing, and water purification services across FL, MA, and CT.',
    url: 'https://newerasolarenergy.com',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: 'Become a Dealer', item: 'https://newerasolarenergy.com/dealer' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#123B5D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-6 text-xs text-[#5F6F75] font-sans flex items-center gap-2">
        <Link href="/" className="hover:text-[#FF8A3D] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#123B5D] font-semibold">Become a Dealer</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-[#123B5D] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a4a75] via-[#123B5D] to-[#0d2d4a] pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block bg-[#FF8A3D]/20 text-[#FF8A3D] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Partner Program
            </span>
            <h1 className="font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Grow Your Business as a<br />
              <span className="text-[#FF8A3D]">New Era Solar Partner</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you&apos;re an independent solar dealer, an EPC contractor, or a territory development
              partner — New Era Solar Energy gives you the infrastructure, brand, and support to scale.
            </p>
            <a
              href="#dealer-form"
              className="inline-block bg-[#FF8A3D] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all shadow-lg shadow-[#FF8A3D]/25"
            >
              Apply to Partner →
            </a>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-poppins font-bold text-3xl text-[#123B5D] text-center mb-12">
          Why Partner With New Era Solar Energy?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyCards.map((card) => (
            <div key={card.title} className="bg-white border border-[#E6EDF2] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-poppins font-bold text-lg text-[#123B5D] mb-3">{card.title}</h3>
              <p className="text-[#5F6F75] text-sm font-sans leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Types */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-poppins font-bold text-3xl text-[#123B5D] text-center mb-12">
          Who We Work With
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnerTypes.map((type) => (
            <div key={type.title} className="bg-white border border-[#E6EDF2] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className="font-poppins font-bold text-lg text-[#123B5D] mb-3">{type.title}</h3>
              <p className="text-[#5F6F75] text-sm font-sans leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <DealerApplicationForm />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="font-poppins font-bold text-2xl text-[#123B5D] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map(({ q, a }) => (
            <div key={q} className="bg-white border border-[#E6EDF2] rounded-2xl p-6 shadow-sm">
              <h3 className="font-poppins font-semibold text-[#123B5D] text-base mb-2">{q}</h3>
              <p className="text-[#5F6F75] text-sm font-sans leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
