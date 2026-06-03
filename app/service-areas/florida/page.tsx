import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Sun, Shield, DollarSign, Wind, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Energy in Florida | New Era Solar Energy',
  description:
    'Florida homeowners enjoy excellent solar conditions year-round. New Era Solar Energy provides residential solar, roofing, and water purification across South Florida, Central Florida, and beyond.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolarenergy.com' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://newerasolarenergy.com/service-areas' },
        { '@type': 'ListItem', position: 3, name: 'Florida', item: 'https://newerasolarenergy.com/service-areas/florida' },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'New Era Solar Energy — Florida',
      url: 'https://newerasolarenergy.com/service-areas/florida',
      areaServed: { '@type': 'State', name: 'Florida' },
      description: 'Residential solar installation, roofing, and water purification services across Florida.',
      address: { '@type': 'PostalAddress', addressRegion: 'FL', addressCountry: 'US' },
    },
  ],
};

const BENEFITS = [
  {
    icon: <Sun className="w-6 h-6 text-[#ff5722]" />,
    title: '230+ Sunny Days Per Year',
    desc: 'Florida consistently ranks among the highest solar resource states in the country. More sunlight means more clean energy production from your system. (Source: National Renewable Energy Lab — regional average; actual output depends on your specific location and roof conditions.)',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#ff5722]" />,
    title: 'Net Metering Policy Available',
    desc: 'Florida utilities offer net metering programs that allow homeowners to receive credits for excess solar energy sent to the grid. Policies and credit rates vary by utility provider — we help you understand how your specific utility handles solar credits.',
  },
  {
    icon: <Shield className="w-6 h-6 text-[#ff5722]" />,
    title: 'No State Income Tax on Solar Savings',
    desc: 'Florida does not impose a state income tax, which means the financial benefits of your solar system stay in your pocket. This is one factor that can improve the economics of solar for Florida homeowners.',
  },
  {
    icon: <Wind className="w-6 h-6 text-[#ff5722]" />,
    title: 'Hurricane-Resistant Mounting Available',
    desc: 'Modern solar panel systems are engineered to meet Florida&apos;s stringent wind load requirements. We discuss wind ratings, mounting methods, and manufacturer certifications during your free assessment.',
  },
];

const CITIES = [
  'Miami', 'Fort Lauderdale', 'Orlando', 'Tampa',
  'Jacksonville', 'Boca Raton', 'Palm Beach', 'Sarasota',
  'Naples', 'Cape Coral', 'West Palm Beach', 'Gainesville',
];

const FAQS = [
  {
    question: 'Does Florida have net metering?',
    answer:
      'Florida utilities offer net metering programs, though policies and credit rates vary by utility provider. We help you understand how your specific utility handles solar credits before you commit to a system.',
  },
  {
    question: 'Will solar panels survive Florida hurricanes?',
    answer:
      'Modern solar panel systems are engineered to meet Florida&apos;s wind load requirements. We discuss wind ratings and mounting methods during your assessment and only install systems that meet applicable Florida Building Code standards for your area.',
  },
  {
    question: 'How much sun does Florida get compared to other states?',
    answer:
      'Florida consistently ranks among the top states for solar resource potential per the National Renewable Energy Lab. However, shading, roof orientation, tilt angle, and local weather patterns all affect your specific system&apos;s output — which is why we conduct a site-specific assessment.',
  },
  {
    question: 'Is my utility compatible with solar in Florida?',
    answer:
      'We work with homeowners served by FPL, Duke Energy Florida, TECO (Tampa Electric), and other Florida utilities. Your utility connection, rate plan, and interconnection requirements are all reviewed during your free home assessment.',
  },
];

export default function FloridaPage() {
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
              <Link href="/service-areas" className="hover:underline">Service Areas</Link>
              <span className="mx-2 opacity-60">/</span>
              <span className="opacity-80">Florida</span>
            </nav>
            <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-3 block">
              The Sunshine State
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl leading-tight mb-5">
              Solar Energy in Florida —<br className="hidden md:block" /> One of the Best States for Going Solar
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Florida&apos;s combination of abundant sunshine, high utility rates, and net metering policies creates a compelling case for residential solar. New Era Solar Energy guides Florida homeowners through every step.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all inline-flex items-center gap-2 justify-center"
              >
                Get My Free Florida Assessment
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

        {/* Why Florida Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase text-[#082fa3] tracking-widest mb-2 block">Solar Advantage</span>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-newera-dark-gray">
              Why Florida Is Ideal for Residential Solar
            </h2>
            <p className="text-[#5F6F75] font-sans text-sm mt-3 max-w-2xl mx-auto">
              Florida&apos;s climate and policy environment align well for residential solar. Here&apos;s what makes the Sunshine State one of the top solar markets in the US.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-white border border-[#e5e5e5] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#ff5722]/10 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-poppins font-bold text-lg text-newera-dark-gray mb-3">{b.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cities */}
        <section className="bg-white border-t border-[#e5e5e5] py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-xl text-newera-dark-gray mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ff5722]" />
              Florida Cities We Serve
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {CITIES.map((city) => (
                <div key={city} className="bg-[#F5F7FA] border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm font-bold text-newera-dark-gray font-poppins text-center">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5F6F75] font-sans mt-4 italic">
              Don&apos;t see your city? <Link href="/contact" className="text-[#ff5722] hover:underline">Contact us</Link> — we likely serve your area.
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
        <section className="bg-white border-t border-[#e5e5e5] py-4">
          <div className="max-w-4xl mx-auto px-6">
            <FAQAccordion
              items={FAQS}
              title="Florida Solar FAQs"
              subtitle="Common questions from Florida homeowners considering solar."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-newera-dark-blue py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to Go Solar in Florida?
            </h2>
            <p className="text-white/80 font-sans text-sm md:text-base mb-8 leading-relaxed">
              Start with a free, no-pressure home assessment. We&apos;ll review your roof, energy bills, and utility to give you an honest picture of what solar could look like for your home.
            </p>
            <Link
              href="/contact"
              className="bg-[#ff5722] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e04a1b] transition-all inline-block"
            >
              Schedule My Free Florida Assessment
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
