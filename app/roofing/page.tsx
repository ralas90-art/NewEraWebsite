import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roofing Services | New Era Solar Energy',
  description:
    'Protect your home with professional roof inspections, repairs, and replacements. New Era Solar Energy provides roofing services to keep your home solar-ready.',
  openGraph: {
    title: 'Roofing Services | New Era Solar Energy',
    description:
      'Protect your home with professional roof inspections, repairs, and replacements. New Era Solar Energy provides roofing services to keep your home solar-ready.',
    url: 'https://newerasolarenergy.com/roofing',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do I know if I need a new roof before installing solar?',
    answer:
      'Our team inspects roof age, material condition, decking integrity, and estimated remaining lifespan during the free assessment. We will tell you honestly whether your roof can support a solar installation or needs work first.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most residential roof replacements take 1–3 days depending on roof size, pitch, and selected materials. Your project coordinator will give you a firm timeline before work begins.',
  },
  {
    question: 'What type of roofing material is best for solar panels?',
    answer:
      'Asphalt shingles, metal roofing, and flat roof membranes are all compatible with solar installations. Each has different mounting methods and cost profiles. We evaluate the best solution for your specific home during the site visit.',
  },
  {
    question: 'Will insurance cover storm damage to my roof?',
    answer:
      'Many homeowner policies cover wind and hail damage. We help document damage thoroughly for insurance claims. Please consult your insurance provider for coverage specifics and claim procedures.',
  },
];

export default function RoofingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Roofing Services',
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
      'Professional roof inspections, repair, replacement, storm damage assessment, and solar roof readiness evaluation for Florida homeowners.',
    url: 'https://newerasolarenergy.com/roofing',
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
      { '@type': 'ListItem', position: 2, name: 'Roofing', item: 'https://newerasolarenergy.com/roofing' },
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
          <li className="text-[#123B5D] font-semibold">Roofing</li>
        </ol>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pb-20 flex flex-col gap-16">

        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden bg-[#123B5D] px-8 md:px-14 py-16 md:py-24 mt-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e2d48] via-[#123B5D] to-[#1a4a75] opacity-95 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5EC8E5]/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-[#5EC8E5]/20 border border-[#5EC8E5]/40 text-[#5EC8E5] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              Roofing Services — Florida
            </span>
            <h1 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-6">
              A Strong Roof{' '}
              <span className="text-[#FF8A3D]">Protects Everything</span>{' '}
              Underneath It
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-sans">
              Before solar panels go on, the roof underneath must be solid. New Era Solar Energy provides comprehensive roofing services — from free inspections to full replacements — ensuring your home is protected and solar-ready.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)]"
            >
              Get a Free Roof Assessment
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-2">What We Offer</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#123B5D]">Our Roofing Services</h2>
            <p className="text-[#5F6F75] font-sans mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              From a quick health check to a full replacement, we handle roofing with the same care and transparency we bring to solar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Roof Inspection',
                desc: 'We examine your roof&apos;s age, material, decking, flashing, and drainage in detail. You receive a clear written summary of findings with honest recommendations — no upsells, just facts.',
                tag: 'Free with Assessment',
              },
              {
                icon: '🏗️',
                title: 'Roof Replacement',
                desc: 'When it&apos;s time for a new roof, we coordinate the full replacement — material selection, permitting, removal of old materials, and installation — timed to set you up for solar if that&apos;s the next step.',
                tag: 'Full Service',
              },
              {
                icon: '🌪️',
                title: 'Wind & Storm Damage Assessment',
                desc: 'Florida&apos;s hurricane season is unforgiving. We document storm damage thoroughly, help you understand repair options, and provide documentation to support your insurance claim.',
                tag: 'Insurance Support',
              },
              {
                icon: '☀️',
                title: 'Solar Roof Readiness',
                desc: 'Before any solar installation, we confirm your roof can structurally support the system. We evaluate load capacity, penetration points, and remaining lifespan to ensure your investment is protected from day one.',
                tag: 'Pre-Solar Check',
              },
            ].map((svc) => (
              <div key={svc.title} className="bg-white border border-[#E6EDF2] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-4xl">{svc.icon}</span>
                  <span className="bg-[#5EC8E5]/10 border border-[#5EC8E5]/20 text-[#5EC8E5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">{svc.tag}</span>
                </div>
                <h3 className="font-poppins font-bold text-xl text-[#123B5D]">{svc.title}</h3>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roofing + Solar Connection */}
        <section className="bg-white border border-[#E6EDF2] rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-3">Why It Matters</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#123B5D] mb-4">
                Before You Go Solar, Make Sure Your Roof Is Ready
              </h2>
              <p className="text-[#5F6F75] font-sans text-sm leading-relaxed mb-4">
                Solar panels are designed to last 25+ years. If your roof needs replacing in 5 years, you will face the added cost of removing and reinstalling your solar system at that time. Getting your roof evaluated before going solar is one of the smartest things a homeowner can do.
              </p>
              <p className="text-[#5F6F75] font-sans text-sm leading-relaxed mb-6">
                Our process addresses both at once — we assess your roof condition and solar potential simultaneously, so you have a complete picture before making any decision.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#123B5D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#1a4a75] transition-colors"
              >
                Schedule a Combined Assessment
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Roof Life Remaining', value: 'Evaluated at no cost', icon: '📅' },
                { label: 'Structural Load Check', value: 'Required before solar', icon: '⚖️' },
                { label: 'Penetration Planning', value: 'Mapped during design phase', icon: '📍' },
                { label: 'Insurance Documentation', value: 'Provided upon request', icon: '📋' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-[#F5F7FA] border border-[#E6EDF2] rounded-xl p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-poppins font-bold text-sm text-[#123B5D]">{item.label}</p>
                    <p className="text-[#5F6F75] font-sans text-xs mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-2">Common Questions</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#123B5D]">Roofing — Common Questions</h2>
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
          <span className="text-[11px] font-bold uppercase text-[#5EC8E5] tracking-widest block mb-4">No-Pressure Assessment</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Know What Shape Your Roof Is In
          </h2>
          <p className="text-white/80 font-sans text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Our free assessment gives you a complete picture of your roof&apos;s condition, estimated remaining lifespan, and solar readiness — with zero obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all shadow-[0_8px_30px_rgb(255,138,61,0.3)]"
          >
            Get a Free Roof Assessment
          </Link>
        </section>

      </main>
    </div>
  );
}
