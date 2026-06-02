import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Water Purification | New Era Solar Energy',
  description:
    'Clean, filtered water for your entire home. New Era Solar Energy installs whole-house filtration systems, under-sink RO systems, and water quality testing.',
  openGraph: {
    title: 'Home Water Purification | New Era Solar Energy',
    description:
      'Clean, filtered water for your entire home. New Era Solar Energy installs whole-house filtration systems, under-sink RO systems, and water quality testing.',
    url: 'https://newerasolarenergy.com/water-purification',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What contaminants does a whole-house filter remove?',
    answer:
      'It depends on the system type and your specific water source. We test your water first to identify what is present, then recommend the right solution — whether that is sediment filtration, carbon filtration, water softening, or a combination.',
  },
  {
    question: 'How often do filters need to be replaced?',
    answer:
      'Typically every 6–12 months depending on usage and incoming water quality. We provide a service schedule with every installation so you always know when maintenance is due.',
  },
  {
    question: 'Is reverse osmosis (RO) water safe to drink?',
    answer:
      'Yes. Reverse osmosis removes a wide range of dissolved contaminants. We install systems certified to NSF/ANSI standards, so you can trust what comes out of your tap.',
  },
  {
    question: 'Can water filtration be bundled with solar?',
    answer:
      'Absolutely. We offer comprehensive home upgrade consultations that cover solar, roofing, and water filtration together — one assessment, one team, and a coordinated plan for your home.',
  },
];

export default function WaterPurificationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home Water Purification Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'New Era Solar Energy',
      url: 'https://newerasolarenergy.com',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    areaServed: { '@type': 'State', name: 'Florida' },
    description:
      'Whole-house water filtration, under-sink reverse osmosis systems, and water quality testing for Florida homeowners.',
    url: 'https://newerasolarenergy.com/water-purification',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: 'Water Purification', item: 'https://newerasolarenergy.com/water-purification' },
    ],
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F7FA] text-[#123B5D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-[#5F6F75] font-sans">
          <li><Link href="/" className="hover:text-[#FF8A3D] transition-colors">Home</Link></li>
          <li className="text-[#E6EDF2]">/</li>
          <li className="text-[#123B5D] font-semibold">Water Purification</li>
        </ol>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-20 flex flex-col gap-16">

        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden bg-[#123B5D] px-8 md:px-14 py-16 md:py-24 mt-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2a42] via-[#123B5D] to-[#1d5480] opacity-95 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5EC8E5]/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-[#5EC8E5]/20 border border-[#5EC8E5]/40 text-[#5EC8E5] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              Water Purification — Florida
            </span>
            <h1 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6">
              Clean Water for{' '}
              <span className="text-[#5EC8E5]">Every Room</span>{' '}
              in Your Home
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-sans">
              Florida&apos;s water quality varies significantly by municipality and well source. New Era Solar Energy installs whole-house and point-of-use filtration systems designed for what is actually in your water — starting with a test, not a guess.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)]"
            >
              Get a Free Water Quality Consultation
            </Link>
          </div>
        </section>

        {/* Products / Services */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-2">Our Solutions</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#123B5D]">Our Water Purification Solutions</h2>
            <p className="text-[#5F6F75] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              We begin with a water quality test, then recommend a system matched to what your water actually contains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏠',
                title: 'Whole-House Filtration',
                tag: 'Point of Entry',
                desc: 'Installed at the main water supply line so every faucet, shower, and appliance in your home receives filtered water. Effective for sediment, chlorine, and other common contaminants.',
                features: ['Protects appliances', 'Cleaner showers & laundry', 'Extends pipe lifespan'],
              },
              {
                icon: '💧',
                title: 'Under-Sink Reverse Osmosis',
                tag: 'Point of Use',
                desc: 'A multi-stage RO system installed under your kitchen sink delivers highly purified drinking water on demand. NSF/ANSI certified systems remove a wide spectrum of dissolved contaminants.',
                features: ['NSF/ANSI certified', 'Dedicated drinking faucet', 'Ideal for cooking & ice'],
              },
              {
                icon: '🔬',
                title: 'Water Quality Testing',
                tag: 'First Step',
                desc: 'Before recommending any system, we test your water to identify what is present. Florida water issues range from hard water minerals to agricultural runoff — you deserve to know exactly what you are dealing with.',
                features: ['Comprehensive panel', 'Written results report', 'No-obligation'],
              },
            ].map((svc) => (
              <div key={svc.title} className="bg-white border border-[#E6EDF2] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-4xl">{svc.icon}</span>
                  <span className="bg-[#5EC8E5]/10 border border-[#5EC8E5]/20 text-[#5EC8E5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">{svc.tag}</span>
                </div>
                <h3 className="font-poppins font-bold text-xl text-[#123B5D]">{svc.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{svc.desc}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {svc.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[#5F6F75] font-sans">
                      <svg className="w-3.5 h-3.5 text-[#5EC8E5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white border border-[#E6EDF2] rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-2">Why It Matters</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#123B5D]">Why Water Quality Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🩺',
                title: 'Health & Wellness',
                desc: 'Certain contaminants in unfiltered tap water — including heavy metals, disinfection byproducts, and agricultural chemicals — can accumulate over time. A tested, properly specified filtration system reduces that exposure.',
              },
              {
                icon: '🧺',
                title: 'Appliance & Plumbing Protection',
                desc: 'Hard water and sediment accelerate wear on water heaters, washing machines, dishwashers, and pipes. Whole-house filtration extends the life of your home&apos;s systems and reduces maintenance costs.',
              },
              {
                icon: '🌊',
                title: 'Better Taste & Experience',
                desc: 'Chlorine, sulfur, and iron all affect how your water smells and tastes. Clean, filtered water improves the quality of everything from your morning coffee to your evening shower.',
              },
            ].map((b) => (
              <div key={b.title} className="flex flex-col gap-3 p-6 bg-[#F5F7FA] rounded-2xl border border-[#E6EDF2]">
                <span className="text-3xl">{b.icon}</span>
                <h3 className="font-poppins font-bold text-lg text-[#123B5D]">{b.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-2">Common Questions</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#123B5D]">Water Purification — Your Questions Answered</h2>
          </div>
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white border border-[#E6EDF2] rounded-2xl shadow-sm group"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-poppins font-semibold text-[#123B5D] text-sm md:text-base list-none select-none hover:text-[#FF8A3D] transition-colors">
                  <span>{faq.question}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#F5F7FA] border border-[#E6EDF2] flex items-center justify-center text-[#5EC8E5] group-open:rotate-45 transition-transform">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16M4 12h16" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#123B5D] rounded-3xl px-8 md:px-16 py-14 text-center">
          <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-4">Start With a Test</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">Know What Is In Your Water</h2>
          <p className="text-white/80 font-sans text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Every water quality consultation starts with a test — not a sales pitch. We identify what is present, then recommend exactly what you need.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)]"
          >
            Get a Free Water Quality Consultation
          </Link>
        </section>

      </main>
    </div>
  );
}
