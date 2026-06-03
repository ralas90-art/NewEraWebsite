import type { Metadata } from 'next';
import Link from 'next/link';
import { ReferralForm } from '@/components/forms/ReferralForm';

export const metadata: Metadata = {
  title: 'Refer a Homeowner | New Era Solar Energy',
  description:
    'Earn $1,000 for every friend, neighbor, or family member you refer who goes solar with New Era Solar Energy. No limit on how many you can refer.',
  openGraph: {
    title: 'Refer a Homeowner | New Era Solar Energy',
    description: 'Earn $1,000 for every solar referral. No limit.',
    type: 'website',
  },
};

const faqItems = [
  {
    q: 'How much do I get for a referral?',
    a: 'You receive $1,000 for each referred homeowner whose solar system is fully installed and activated by New Era Solar Energy.',
  },
  {
    q: 'Is there a limit to how many people I can refer?',
    a: 'No. You can refer as many homeowners as you want. Every qualified installation earns you $1,000.',
  },
  {
    q: 'When do I get paid?',
    a: 'Referral rewards are paid within 30 days of the referred homeowner&apos;s system activation. See program terms and conditions for full details.',
  },
];

const steps = [
  {
    num: '01',
    icon: '📋',
    title: 'Submit a Referral',
    desc: 'Fill out the simple form below with your contact info and your friend&apos;s details. Takes under 2 minutes.',
  },
  {
    num: '02',
    icon: '☀️',
    title: 'We Consult With Your Friend',
    desc: 'Our solar advisors reach out, schedule a free home assessment, and walk them through their options — zero pressure.',
  },
  {
    num: '03',
    icon: '💰',
    title: 'You Get Paid $1,000',
    desc: 'Once their system is fully installed and utility-activated, we pay you $1,000. No chasing, no hassle.',
  },
];

export default function ReferralPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solar Referral Program',
    provider: { '@type': 'Organization', name: 'New Era Solar Energy' },
    description: 'Earn $1,000 for every homeowner you refer who installs solar with New Era Solar Energy.',
    areaServed: ['FL', 'MA', 'CT'],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: 'Referral Program', item: 'https://newerasolarenergy.com/referral' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-newera-dark-gray">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-6 text-xs text-[#5F6F75] font-sans flex items-center gap-2">
        <Link href="/" className="hover:text-[#ff5722] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-newera-dark-gray font-semibold">Referral Program</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block bg-[#ff572220]/50 text-[#ff5722] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Referral Program
        </span>
        <h1 className="font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl text-newera-dark-gray leading-[1.1] mb-6">
          Get Paid <span className="text-[#ff5722]">$1,000</span><br />
          for Every Solar Referral
        </h1>
        <p className="text-[#5F6F75] text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-10">
          Know someone who could benefit from solar? Refer them to New Era Solar Energy and earn $1,000
          when their system is installed and activated. No limit — refer as many as you want.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#referral-form"
            className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all shadow-lg shadow-[#ff5722]/25"
          >
            Refer Someone Now
          </a>
          <Link
            href="/solar"
            className="bg-newera-dark-blue text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-newera-dark-blue/90 transition-colors"
          >
            Learn About Going Solar
          </Link>
        </div>
        <p className="text-[10px] text-[#5F6F75] font-sans mt-4 italic">
          * Referral reward paid within 30 days after referred homeowner&apos;s solar system is fully installed and utility-activated. Subject to program terms and conditions.
        </p>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-poppins font-bold text-3xl text-newera-dark-gray text-center mb-12">
          How the Referral Program Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white border border-[#e5e5e5] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <span className="text-[#082fa3] text-xs font-black uppercase tracking-widest">{step.num}</span>
              <h3 className="font-poppins font-bold text-lg text-newera-dark-gray mt-2 mb-3">{step.title}</h3>
              <p className="text-[#5F6F75] text-sm font-sans leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800 font-sans leading-relaxed mt-8 max-w-3xl mx-auto">
          <strong>Referral Reward Notice:</strong> The $1,000 referral reward is paid within 30 days after the referred
          homeowner&apos;s solar system is fully installed and utility-activated. Reward subject to program terms. No limit
          on total referrals. Referral reward is not a tax-deductible charitable contribution. Consult a tax professional
          regarding potential income tax implications of referral payments received.
        </div>
      </section>

      {/* Referral Form */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <ReferralForm />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="font-poppins font-bold text-2xl text-newera-dark-gray mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqItems.map(({ q, a }) => (
            <div key={q} className="bg-white border border-[#e5e5e5] rounded-2xl p-6 shadow-sm">
              <h3 className="font-poppins font-semibold text-newera-dark-gray text-base mb-2">{q}</h3>
              <p className="text-[#5F6F75] text-sm font-sans leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
