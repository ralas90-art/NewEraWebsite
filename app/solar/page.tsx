import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Residential Solar Energy in Florida | New Era Solar Energy',
  description:
    'Explore solar energy for your home with New Era Solar Energy. Get a free assessment, personalized system design, and clear guidance from Florida solar experts.',
  openGraph: {
    title: 'Residential Solar Energy in Florida | New Era Solar Energy',
    description:
      'Explore solar energy for your home with New Era Solar Energy. Get a free assessment, personalized system design, and clear guidance from Florida solar experts.',
    url: 'https://newerasolar.placeholder.com/solar',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How much do solar panels cost?',
    answer:
      'Cost varies based on system size, roof type, and energy usage. A free assessment gives you a real number for your home — no guesswork, no pressure.',
  },
  {
    question: 'How long do solar panels last?',
    answer:
      'Quality panels are typically rated for 25+ years. We walk you through warranty coverage in detail during your consultation so you know exactly what you own.',
  },
  {
    question: 'Will solar panels work if my roof needs repair?',
    answer:
      'We assess roof condition as part of our free evaluation. If your roof needs work before installation, we can coordinate roofing services so everything is done right the first time.',
  },
  {
    question: 'What happens to my electricity bill after going solar?',
    answer:
      'Bills typically decrease. Exact savings depend on your system size, utility rate plan, and energy consumption. We walk through detailed projections during your assessment so you understand the numbers before you commit.',
  },
  {
    question: 'Do I need to be home during installation?',
    answer:
      'Generally yes for access and key walkthrough points. Installation usually takes 1–3 days. Your dedicated project coordinator will schedule a time that works for your family.',
  },
];

export default function SolarPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Solar Energy Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'New Era Solar Energy',
      url: 'https://newerasolar.placeholder.com',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    areaServed: { '@type': 'State', name: 'Florida' },
    description:
      'Residential solar energy assessment, custom system design, installation, and activation for Florida homeowners.',
    url: 'https://newerasolar.placeholder.com/solar',
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolar.placeholder.com' },
      { '@type': 'ListItem', position: 2, name: 'Solar Energy', item: 'https://newerasolar.placeholder.com/solar' },
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
          <li className="text-[#123B5D] font-semibold">Solar Energy</li>
        </ol>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-20 flex flex-col gap-16">

        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden bg-[#123B5D] px-8 md:px-14 py-16 md:py-24 mt-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#123B5D] via-[#1a4a75] to-[#0e2d48] opacity-95 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-[#FF8A3D]/20 border border-[#FF8A3D]/40 text-[#FF8A3D] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              Residential Solar — Florida
            </span>
            <h1 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6">
              Residential Solar Energy —{' '}
              <span className="text-[#FF8A3D]">Built for Your Home, Your Roof, Your Budget</span>
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-sans">
              Going solar is one of the most important decisions a homeowner can make. New Era Solar Energy guides you through every step — from your first site assessment to the day your system goes live — with zero pressure and full transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)] text-center"
              >
                Get a Free Solar Assessment
              </Link>
              <Link
                href="/process"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors text-center"
              >
                Explore Our Process
              </Link>
            </div>
          </div>
        </section>

        {/* How Solar Works */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-2">The Process</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#123B5D]">How Solar Energy Works for Your Home</h2>
            <p className="text-[#5F6F75] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              We simplify every phase so you always know where you stand and what comes next.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Site Assessment',
                icon: '🏠',
                desc: 'Our team evaluates your roof orientation, shading, structural condition, and current energy usage to determine what solar can realistically do for your home.',
              },
              {
                step: '02',
                title: 'Custom System Design',
                icon: '📐',
                desc: 'We engineer a system sized specifically for your household — matching panel count, inverter type, and layout to your actual energy profile and roof geometry.',
              },
              {
                step: '03',
                title: 'Installation & Activation',
                icon: '⚡',
                desc: 'Our certified installers complete the job efficiently, handle permitting, and walk you through system activation so you understand exactly how to monitor your output.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-[#E6EDF2] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[11px] font-bold text-[#5EC8E5] uppercase tracking-widest">Step {item.step}</span>
                </div>
                <h3 className="font-poppins font-bold text-xl text-[#123B5D]">{item.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white border border-[#E6EDF2] rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-2">Key Advantages</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#123B5D]">Why Homeowners Choose Solar</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '💡',
                title: 'Lower Monthly Bills',
                desc: 'Solar offsets grid consumption, which can meaningfully reduce what you pay your utility provider each month — especially during Florida&apos;s peak summer months.',
              },
              {
                icon: '🔋',
                title: 'Energy Independence',
                desc: 'Generate your own power and reduce exposure to utility rate increases. Pair with battery storage for even greater independence during outages.',
              },
              {
                icon: '📈',
                title: 'Increased Home Value',
                desc: 'Studies consistently show that solar installations increase property values. It&apos;s a home improvement that works for you even if you sell.',
              },
              {
                icon: '🌱',
                title: 'Environmental Impact',
                desc: 'Every kilowatt-hour of solar power displaces grid electricity generated from fossil fuels — a tangible, lasting contribution to cleaner air.',
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

        {/* Solar Readiness Checklist */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-2">Self-Assessment</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#123B5D]">Is Your Home Ready for Solar?</h2>
            <p className="text-[#5F6F75] font-sans mt-4 max-w-xl mx-auto text-base leading-relaxed">
              Most Florida homes are strong candidates. These factors help us size and design your system for maximum performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { check: 'You own your home', detail: 'Solar panels are a permanent improvement — ownership is required for installation.' },
              { check: 'Your roof is in good condition', detail: 'We assess roof health as part of our free evaluation. A solid roof ensures long system life.' },
              { check: 'South- or west-facing roof sections available', detail: 'Optimal panel orientation maximizes energy production. We map your roof during our site visit.' },
              { check: 'Monthly electric bills over $100', detail: 'Higher utility costs typically mean faster payback on a solar investment. We run real numbers for your situation.' },
            ].map((item) => (
              <div key={item.check} className="bg-white border border-[#E6EDF2] rounded-2xl p-6 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-[#FF8A3D]/10 border border-[#FF8A3D]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#FF8A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-poppins font-bold text-[#123B5D] text-sm mb-1">{item.check}</p>
                  <p className="text-[#5F6F75] font-sans text-xs leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IRS Tax Credit Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800 font-sans leading-relaxed mt-4">
          <strong>Federal Solar Tax Credit Notice:</strong> Federal solar tax credit rules have changed. For qualifying residential clean energy property installed from 2022 through December 31, 2025, the credit was generally 30%. Under current IRS guidance, the credit is not available for property placed in service after December 31, 2025. Homeowners should consult a qualified tax professional to confirm eligibility.
        </div>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-2">Common Questions</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#123B5D]">Solar Energy — Frequently Asked Questions</h2>
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
          <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-4">Take the First Step</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">Ready to Start?</h2>
          <p className="text-white/80 font-sans text-base max-w-xl mx-auto mb-8 leading-relaxed">
            A free, no-pressure solar assessment is the best way to understand what solar can actually do for your home. Schedule yours today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)]"
          >
            Get a Free Solar Assessment
          </Link>
        </section>

      </main>
    </div>
  );
}
