import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Zap, Snowflake, DollarSign, Award, MapPin, ArrowRight, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Energy in Massachusetts | New Era Solar Energy',
  description:
    'Massachusetts homeowners benefit from strong solar incentives, the SMART program, and robust net metering. New Era Solar Energy brings premium residential solar to MA.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolarenergy.com' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://newerasolarenergy.com/service-areas' },
        { '@type': 'ListItem', position: 3, name: 'Massachusetts', item: 'https://newerasolarenergy.com/service-areas/massachusetts' },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'New Era Solar Energy — Massachusetts',
      url: 'https://newerasolarenergy.com/service-areas/massachusetts',
      areaServed: { '@type': 'State', name: 'Massachusetts' },
      description: 'Residential solar installation services across Massachusetts including the SMART program.',
      address: { '@type': 'PostalAddress', addressRegion: 'MA', addressCountry: 'US' },
    },
  ],
};

const BENEFITS = [
  {
    icon: <Award className="w-6 h-6 text-[#FF8A3D]" />,
    title: 'Top-Ranked US Solar Market',
    desc: 'Massachusetts is consistently ranked among the leading US states for solar adoption and policy strength. Supportive legislation, utility cooperation, and state-level programs have made MA a model solar market.',
  },
  {
    icon: <Zap className="w-6 h-6 text-[#FF8A3D]" />,
    title: 'SMART Program Incentive Payments',
    desc: 'The Solar Massachusetts Renewable Target (SMART) program provides per-kilowatt-hour compensation for solar generation. Program capacity blocks and compensation rates change — consult current DOER guidance or visit mass.gov/smart for current details.',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#FF8A3D]" />,
    title: 'Net Metering Available',
    desc: 'Massachusetts net metering allows homeowners to receive bill credits for excess solar energy exported to the grid. Policies and compensation structures vary by utility and customer class.',
  },
  {
    icon: <Snowflake className="w-6 h-6 text-[#FF8A3D]" />,
    title: 'Snow-Load Rated Panel Systems',
    desc: 'We spec and install solar systems designed to handle Massachusetts snow and ice loads. Seasonal variation is factored into your production estimates during your free assessment.',
  },
];

const CITIES = [
  'Boston', 'Worcester', 'Springfield', 'Cambridge',
  'Lowell', 'New Bedford', 'Brockton', 'Quincy',
  'Lynn', 'Fall River', 'Newton', 'Somerville',
];

const FAQS = [
  {
    question: 'What is the SMART program in Massachusetts?',
    answer:
      'SMART is a state incentive program that provides per-kilowatt-hour compensation for solar generation. Rates and availability depend on your utility and the current program capacity block. Visit mass.gov/smart for current program details before making a purchasing decision.',
  },
  {
    question: 'Does snow affect solar panel performance in Massachusetts?',
    answer:
      'Snow can temporarily reduce output when it covers panels. However, panels are mounted at an angle that helps snow slide off, and the reflectivity of snow can actually boost nearby panel output. We spec systems to Massachusetts snow load requirements and discuss expected seasonal production variation during your assessment.',
  },
  {
    question: 'How does net metering work in Massachusetts?',
    answer:
      'Net metering in Massachusetts allows you to receive bill credits for excess solar energy you send to the grid. The credit rate and structure vary by utility and customer class. We review your specific utility and rate plan during your free home assessment.',
  },
  {
    question: 'Can Massachusetts homeowners still claim the federal solar tax credit?',
    answer:
      'Federal tax credit eligibility rules have changed for systems placed in service after December 31, 2025. Consult a qualified tax professional for current eligibility guidance. Do not rely on tax credit projections without professional tax advice.',
  },
];

export default function MassachusettsPage() {
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
              <span className="opacity-80">Massachusetts</span>
            </nav>
            <span className="text-[10px] font-bold uppercase text-[#5EC8E5] tracking-widest mb-3 block">
              The Bay State
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl leading-tight mb-5">
              Solar Energy in Massachusetts —<br className="hidden md:block" /> Strong Incentives, Year-Round Savings
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Massachusetts combines robust state-level incentives, net metering, and the SMART program to make residential solar a strong financial decision — even through New England winters.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all inline-flex items-center gap-2 justify-center"
              >
                Get My Free MA Assessment
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

        {/* Why Massachusetts Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase text-[#5EC8E5] tracking-widest mb-2 block">Solar Advantage</span>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#123B5D]">
              Massachusetts Is a Leading Solar State
            </h2>
            <p className="text-[#5F6F75] font-sans text-sm mt-3 max-w-2xl mx-auto">
              Massachusetts has built one of the country&apos;s most supportive solar environments through progressive policy, strong utility cooperation, and state-backed incentive programs.
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

          {/* SMART Program Disclaimer */}
          <div className="mt-8 bg-[#F5F7FA] border border-[#E6EDF2] rounded-2xl p-5 flex gap-3">
            <Info className="w-5 h-5 text-[#5EC8E5] shrink-0 mt-0.5" />
            <p className="text-sm text-[#5F6F75] font-sans leading-relaxed">
              <strong className="text-[#123B5D]">SMART Program Notice:</strong> SMART program eligibility, compensation rates, and availability are subject to change. Contact your utility or visit{' '}
              <a href="https://www.mass.gov/solar-smart" target="_blank" rel="noopener noreferrer" className="text-[#FF8A3D] hover:underline">
                mass.gov/smart
              </a>{' '}
              for current program details before making any purchasing decision.
            </p>
          </div>
        </section>

        {/* Cities */}
        <section className="bg-white border-t border-[#E6EDF2] py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-xl text-[#123B5D] mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#FF8A3D]" />
              Massachusetts Cities We Serve
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
              title="Massachusetts Solar FAQs"
              subtitle="Common questions from Massachusetts homeowners considering residential solar."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#123B5D] py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to Go Solar in Massachusetts?
            </h2>
            <p className="text-white/80 font-sans text-sm md:text-base mb-8 leading-relaxed">
              Get a personalized assessment that accounts for your utility, roof, and local incentive programs. No pressure, no obligation — just honest information.
            </p>
            <Link
              href="/contact"
              className="bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all inline-block"
            >
              Schedule My Free MA Assessment
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
