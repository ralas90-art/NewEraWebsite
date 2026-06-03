import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact New Era Solar Energy | Free Home Assessment',
  description:
    'Schedule your free solar assessment, ask a question, or request information about solar, roofing, or water purification services. We are here to help.',
  openGraph: {
    title: 'Contact New Era Solar Energy | Free Home Assessment',
    description: 'Get in touch with our team. Free solar assessments, bilingual support, and fast response times.',
    type: 'website',
  },
};

const faqItems = [
  {
    q: 'How fast do you respond to inquiries?',
    a: 'Our team typically responds within 1 business day. For urgent matters, call us directly during our listed business hours.',
  },
  {
    q: 'Is the consultation truly free?',
    a: 'Yes. Our home assessment and solar consultation carry no charge and zero obligation. We believe in letting the numbers speak for themselves.',
  },
  {
    q: 'Do you offer bilingual support?',
    a: 'Yes. We provide full support in English and Spanish throughout the consultation, proposal, and installation process.',
  },
];

export default function ContactPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'New Era Solar Energy',
    description: 'Residential solar, roofing, and water purification services across FL, MA, and CT.',
    url: 'https://newerasolarenergy.com',
    telephone: '+1-000-000-0000', // TODO: REPLACE_WITH_REAL_PHONE_NUMBER
    email: 'hello@newerasolarenergy.com',
    openingHours: 'Mo-Sa 08:00-19:00',
    areaServed: [
      { '@type': 'State', name: 'Florida' },
      { '@type': 'State', name: 'Massachusetts' },
      { '@type': 'State', name: 'Connecticut' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    availableLanguage: ['English', 'Spanish'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://newerasolarenergy.com/contact' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-newera-dark-gray">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-6 text-xs text-[#5F6F75] font-sans flex items-center gap-2">
        <Link href="/" className="hover:text-[#ff5722] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-newera-dark-gray font-semibold">Contact</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-14 text-center">
        <span className="inline-block bg-[#082fa3]/15 text-[#082fa3] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Contact Us
        </span>
        <h1 className="font-poppins font-extrabold text-4xl md:text-5xl text-newera-dark-gray leading-[1.1] mb-4">
          Get in Touch With Our Team
        </h1>
        <p className="text-[#5F6F75] text-lg font-sans leading-relaxed max-w-xl mx-auto">
          Whether you have a question, want to schedule an assessment, or just want to learn more — we&apos;re here.
        </p>
      </section>

      {/* 2-Column Layout */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — Contact Info */}
          <div className="space-y-6">
            <div className="bg-white border border-[#e5e5e5] rounded-3xl p-8 shadow-sm">
              <h2 className="font-poppins font-bold text-xl text-newera-dark-gray mb-6">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">📞</span>
                  <div>
                    <p className="text-[10px] font-bold text-[#5F6F75] uppercase tracking-widest mb-0.5">Phone</p>
                    <a href="tel:+10000000000" className="text-newera-dark-gray font-semibold font-sans hover:text-[#ff5722] transition-colors">
                      (000) 000-0000
                    </a>
                    <p className="text-xs text-[#5F6F75] font-sans">Placeholder — updated prior to launch</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">✉️</span>
                  <div>
                    <p className="text-[10px] font-bold text-[#5F6F75] uppercase tracking-widest mb-0.5">Email</p>
                    <a href="mailto:hello@newerasolarenergy.com" className="text-newera-dark-gray font-semibold font-sans hover:text-[#ff5722] transition-colors">
                      hello@newerasolarenergy.com
                    </a>
                    <p className="text-xs text-[#5F6F75] font-sans">Placeholder — updated prior to launch</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">🕐</span>
                  <div>
                    <p className="text-[10px] font-bold text-[#5F6F75] uppercase tracking-widest mb-0.5">Business Hours</p>
                    <p className="text-newera-dark-gray font-semibold font-sans">Mon – Sat, 8:00 AM – 7:00 PM EST</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">📍</span>
                  <div>
                    <p className="text-[10px] font-bold text-[#5F6F75] uppercase tracking-widest mb-0.5">Service Areas</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {['Florida', 'Massachusetts', 'Connecticut'].map((state) => (
                        <span key={state} className="bg-[#082fa3]/15 text-newera-dark-gray text-xs font-semibold px-3 py-1 rounded-full border border-[#082fa3]/30">
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">🌐</span>
                  <div>
                    <p className="text-[10px] font-bold text-[#5F6F75] uppercase tracking-widest mb-0.5">Languages</p>
                    <p className="text-newera-dark-gray font-semibold font-sans">Bilingual support available in English and Spanish.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Trust signals */}
            <div className="bg-newera-dark-blue rounded-3xl p-8 text-white">
              <h3 className="font-poppins font-bold text-lg mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  'Response within 1 business day',
                  'Free, no-obligation home assessment',
                  'Zero high-pressure sales tactics',
                  'Bilingual consultation available',
                  'Licensed, insured, and experienced team',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-sans text-white/90">
                    <span className="text-[#ff5722] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Lead Form */}
          <div>
            <div className="bg-white border border-[#e5e5e5] rounded-3xl p-2 shadow-sm">
              <LeadForm />
            </div>
          </div>
        </div>
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
