import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQAccordion } from '@/components/FAQAccordion';
import { TrendingUp, Leaf, CreditCard, Cloud, MapPin, ArrowRight, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Energy in Connecticut | New Era Solar Energy',
  description:
    'Connecticut homeowners benefit from net metering programs and state incentives. New Era Solar Energy provides residential solar, roofing, and water purification across CT.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolar.placeholder.com' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://newerasolar.placeholder.com/service-areas' },
        { '@type': 'ListItem', position: 3, name: 'Connecticut', item: 'https://newerasolar.placeholder.com/service-areas/connecticut' },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'New Era Solar Energy — Connecticut',
      url: 'https://newerasolar.placeholder.com/service-areas/connecticut',
      areaServed: { '@type': 'State', name: 'Connecticut' },
      description: 'Residential solar installation, roofing, and water purification services across Connecticut.',
      address: { '@type': 'PostalAddress', addressRegion: 'CT', addressCountry: 'US' },
    },
  ],
};

const BENEFITS = [
  {
    icon: <TrendingUp className="w-6 h-6 text-[#FF8A3D]" />,
    title: 'Among the Highest Electricity Rates in the US',
    desc: 'Connecticut consistently ranks among the states with the highest average residential electricity rates. Higher electricity costs typically strengthen the financial case for solar — more savings potential per kilowatt-hour your system produces.',
  },
  {
    icon: <Leaf className="w-6 h-6 text-[#FF8A3D]" />,
    title: 'Net Metering Through Eversource and UI',
    desc: 'Net metering is available through Connecticut&apos;s major utilities — Eversource and United Illuminating (UI). Each utility has its own tariff structure and credit terms. We review your specific utility during your free assessment.',
  },
  {
    icon: <CreditCard className="w-6 h-6 text-[#FF8A3D]" />,
    title: 'CT Green Bank Programs & Financing',
    desc: 'The Connecticut Green Bank offers financing options and programs designed to make clean energy more accessible. Terms, eligibility, and availability are subject to change — visit ctgreenbank.com for current program details.',
  },
  {
    icon: <Cloud className="w-6 h-6 text-[#FF8A3D]" />,
    title: 'Year-Round Solar Potential',
    desc: 'Connecticut receives meaningful solar resource year-round, even accounting for seasonal weather. Modern solar systems are designed for New England conditions, and production estimates account for local climate patterns.',
  },
];

const CITIES = [
  'Hartford', 'Bridgeport', 'New Haven', 'Stamford',
  'Waterbury', 'Norwalk', 'Danbury', 'West Hartford',
  'Greenwich', 'Hamden', 'Meriden', 'Bristol',
];

const FAQS = [
  {
    question: 'What solar programs does Connecticut offer?',
    answer:
      'Connecticut offers net metering through its major utilities and state-backed clean energy financing through the CT Green Bank. Program details, eligibility, and availability vary — we walk you through current options that apply to your situation during your free assessment.',
  },
  {
    question: 'How high are electricity rates in Connecticut?',
    answer:
      'Connecticut has some of the highest average residential electricity rates in the US. Higher utility rates typically improve the financial case for solar — each kilowatt-hour your system produces is worth more in avoided utility costs. Your specific rate plan and usage determine your actual savings potential.',
  },
  {
    question: 'How does net metering work in Connecticut?',
    answer:
      'Connecticut utilities offer net metering credits for excess solar energy you send back to the grid. Eversource and United Illuminating (UI) each have their own tariff structures and credit terms. We review your specific utility and rate plan during your free home assessment.',
  },
  {
    question: 'Can I still get the federal solar tax credit in Connecticut?',
    answer:
      'Federal tax credit rules have changed for systems placed in service after December 31, 2025. Consult a qualified tax professional for current eligibility guidance specific to your situation. Do not rely on tax credit projections without independent professional tax advice.',
  },
];

export default function ConnecticutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#F5F7FA]">
        {/* Hero */}
        <section className="bg-[#123B5D] text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-xs text-[#5EC8E5] mb-4 font-sans">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2 opacity-60">/</span>
              <Link href="/service-areas" className="hover:underline">Service Areas</Link>
              <span className="mx-2 opacity-60">/</span>
              <span className="opacity-80">Connecticut</span>
            </nav>
            <span className="text-[10px] font-bold uppercase text-[#5EC8E5] tracking-widest mb-3 block">
              The Constitution State
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl leading-tight mb-5">
              Solar Energy in Connecticut —<br className="hidden md:block" /> Go Green, Save Smart
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Connecticut homeowners face some of the highest electricity rates in the country. Solar energy gives CT homeowners a way to take control of energy costs while supporting a cleaner grid.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all inline-flex items-center gap-2 justify-center"
              >
                Get My Free CT Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/process"
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/10 transition-all inline-flex items-center gap-2 justify-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Why Connecticut Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase text-[#5EC8E5] tracking-widest mb-2 block">Solar Advantage</span>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#123B5D]">
              Why Connecticut Homeowners Are Going Solar
            </h2>
            <p className="text-[#5F6F75] font-sans text-sm mt-3 max-w-2xl mx-auto">
              High electricity rates, net metering, and state financing programs make Connecticut a market where solar can deliver meaningful long-term value for homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-white border border-[#E6EDF2] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#FF8A3D]/10 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-poppins font-bold text-lg text-[#123B5D] mb-3">{b.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* CT Program Disclaimer */}
          <div className="mt-8 bg-[#F5F7FA] border border-[#E6EDF2] rounded-2xl p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#5EC8E5] shrink-0 mt-0.5" />
            <p className="text-sm text-[#5F6F75] font-sans leading-relaxed">
              <strong className="text-[#123B5D]">CT Program Notice:</strong> Net metering tariffs, Green Bank financing terms, and state incentive details are subject to change. Visit{' '}
              <a href="https://www.ctgreenbank.com" target="_blank" rel="noopener noreferrer" className="text-[#FF8A3D] hover:underline">
                ctgreenbank.com
              </a>{' '}
              or your utility&apos;s website for current program details before making any purchasing decision.
            </p>
          </div>
        </section>

        {/* Cities */}
        <section className="bg-white border-t border-[#E6EDF2] py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-xl text-[#123B5D] mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#FF8A3D]" />
              Connecticut Cities We Serve
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {CITIES.map((city) => (
                <div key={city} className="bg-[#F5F7FA] border border-[#E6EDF2] rounded-xl px-4 py-3 text-sm font-bold text-[#123B5D] font-poppins text-center">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F6F75] font-sans mt-4 italic">
              Don&apos;t see your city? <Link href="/contact" className="text-[#FF8A3D] hover:underline">Contact us</Link> — we likely serve your area.
            </p>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800 font-sans leading-relaxed mt-4">
            <strong>Federal Solar Tax Credit Notice:</strong> Federal solar tax credit rules have changed. For qualifying residential clean energy property installed from 2022 through December 31, 2025, the credit was generally 30%. Under current IRS guidance, the credit is not available for property placed in service after December 31, 2025. Homeowners should consult a qualified tax professional to confirm eligibility.
          </div>
          <p className="text-xs text-[#5F6F75] font-sans leading-relaxed mt-2 italic">
            * Savings estimates, return on investment timelines, and financing rates are based on regional averages and typical equipment performance. Actual results vary by homeowner, roof condition, utility rate plan, system size, local policies, credit profile, and other factors. A personalized site assessment and utility analysis is required before any final savings projection.
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white border-t border-[#E6EDF2] py-4">
          <div className="max-w-4xl mx-auto px-6">
            <FAQAccordion
              items={FAQS}
              title="Connecticut Solar FAQs"
              subtitle="Common questions from Connecticut homeowners considering residential solar."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#123B5D] py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to Go Solar in Connecticut?
            </h2>
            <p className="text-white/80 font-sans text-sm md:text-base mb-8 leading-relaxed">
              Start with a free, no-pressure home assessment. We review your roof, utility bill, and local programs to give you honest information about what solar could mean for your home.
            </p>
            <Link
              href="/contact"
              className="bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all inline-block"
            >
              Schedule My Free CT Assessment
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
