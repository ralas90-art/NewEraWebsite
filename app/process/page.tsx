import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CheckCircle, ClipboardList, Hammer, Lightbulb, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Solar Installation Process | New Era Solar Energy',
  description:
    'From your first question to your first day of solar power. See exactly how New Era Solar Energy guides you through every step — assessment, design, permits, installation, and activation.',
};

const STEPS = [
  {
    num: '01',
    icon: <Lightbulb className="w-7 h-7 text-[#FF8A3D]" />,
    title: 'Free Home Assessment',
    description:
      'We review your home, roof condition, energy bills, and long-term goals. There is zero pressure and no obligation. Our goal is to understand your situation so we can recommend the right system — or tell you honestly if solar isn&apos;t the best fit.',
    details: [
      'Roof and shading evaluation',
      'Energy usage and utility bill review',
      'Discussion of your goals and timeline',
      'Preliminary savings overview',
    ],
  },
  {
    num: '02',
    icon: <ClipboardList className="w-7 h-7 text-[#FF8A3D]" />,
    title: 'Custom System Design',
    description:
      'Our licensed engineers design a solar system sized precisely for your actual energy usage and roof specifications. No cookie-cutter packages — every system is purpose-built for your home.',
    details: [
      'Site-specific panel layout',
      'System sizing based on your actual kWh usage',
      'Equipment selection and specification review',
      'Production estimate walkthrough',
    ],
  },
  {
    num: '03',
    icon: <FileText className="w-7 h-7 text-[#FF8A3D]" />,
    title: 'Permits & Approvals',
    description:
      'Navigating permits, HOA applications, and utility interconnection paperwork is one of the most time-consuming parts of going solar. We handle all of it on your behalf — so you don&apos;t have to chase down a single form.',
    details: [
      'Building permit applications',
      'HOA design review submissions',
      'Utility interconnection agreements',
      'Regular status updates throughout',
    ],
  },
  {
    num: '04',
    icon: <Hammer className="w-7 h-7 text-[#FF8A3D]" />,
    title: 'Professional Installation',
    description:
      'Our experienced installation teams work efficiently and cleanly. Most residential solar projects are completed in 1 to 3 days. We protect your property, keep the worksite tidy, and walk you through the completed system before we leave.',
    details: [
      'Certified installation professionals',
      'Typical 1–3 day residential completion',
      'Property protection throughout the process',
      'System walkthrough before team departure',
    ],
  },
  {
    num: '05',
    icon: <CheckCircle className="w-7 h-7 text-[#FF8A3D]" />,
    title: 'Activation & Monitoring',
    description:
      'After the utility inspection and final approval, your solar system is activated. We walk you through how to monitor your system&apos;s production, review your equipment warranties, and make sure you feel confident about your new investment.',
    details: [
      'Utility inspection coordination',
      'System activation and test run',
      'Monitoring app setup and walkthrough',
      'Warranty and support documentation review',
    ],
  },
];

const FAQS = [
  {
    question: 'How long does the whole process take from assessment to activation?',
    answer:
      'Typically 4–10 weeks, depending on local permitting timelines and utility interconnection schedules. We keep you updated at every stage so there are no surprises.',
  },
  {
    question: 'Do you handle permits and HOA approvals?',
    answer:
      'Yes. We manage all permit applications, HOA design submissions, and utility interconnection paperwork on your behalf. You won&apos;t need to navigate a single government form.',
  },
  {
    question: 'What happens after installation?',
    answer:
      'We schedule the utility inspection, walk you through your system monitoring app, and provide ongoing support. Your job is simply to enjoy the clean energy your system produces.',
  },
  {
    question: 'What if something goes wrong after activation?',
    answer:
      'We provide post-installation support. Equipment warranties and workmanship guarantees are reviewed with you during your consultation. Contact us any time if a concern arises after activation.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolar.placeholder.com' },
        { '@type': 'ListItem', position: 2, name: 'Our Process', item: 'https://newerasolar.placeholder.com/process' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Residential Solar Installation',
      provider: { '@type': 'Organization', name: 'New Era Solar Energy' },
      description: 'End-to-end residential solar installation including assessment, design, permitting, installation, and activation.',
      areaServed: ['Florida', 'Massachusetts', 'Connecticut'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Solar Installation Services',
      },
    },
  ],
};

export default function ProcessPage() {
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
              <span className="opacity-80">Our Process</span>
            </nav>
            <span className="text-[10px] font-bold uppercase text-[#5EC8E5] tracking-widest mb-3 block">
              Simple &amp; Transparent
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl leading-tight mb-5">
              Our Solar Installation Process
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              From your first question to your first day of solar power. We guide you through every step — no surprises, no pressure, no confusion.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="space-y-8">
            {STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E6EDF2] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:gap-8"
              >
                {/* Step Number + Icon */}
                <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-3 md:w-24 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#F5F7FA] border border-[#E6EDF2] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="font-poppins font-black text-3xl text-[#E6EDF2] md:text-4xl">{step.num}</span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-poppins font-bold text-xl md:text-2xl text-[#123B5D] mb-3">
                    {step.title}
                  </h2>
                  <p className="text-[#5F6F75] font-sans text-sm md:text-base leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d, di) => (
                      <li key={di} className="flex items-center gap-2 text-sm text-[#5F6F75] font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D] shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Connector */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden md:none" />
                )}
              </div>
            ))}
          </div>

          {/* Timeline progress bar */}
          <div className="mt-12 bg-white border border-[#E6EDF2] rounded-3xl p-6 shadow-sm">
            <h3 className="font-poppins font-bold text-[#123B5D] text-lg mb-4 text-center">Typical Timeline Overview</h3>
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              {['Week 1–2: Assessment & Design', 'Week 2–6: Permits & Approvals', 'Week 6–8: Installation', 'Week 8–10: Activation'].map((label, i) => (
                <div key={i} className="flex-1 bg-[#F5F7FA] rounded-xl px-4 py-3 text-center">
                  <span className="text-xs font-bold text-[#123B5D] font-poppins block">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#5F6F75] font-sans text-center mt-3 italic">
              * Timeline varies based on local permitting and utility interconnection schedules.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-4 border-t border-[#E6EDF2]">
          <div className="max-w-4xl mx-auto px-6">
            <FAQAccordion
              items={FAQS}
              title="Process FAQs"
              subtitle="Common questions about the New Era Solar installation process."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#123B5D] py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-white/80 font-sans text-sm md:text-base mb-8 leading-relaxed">
              Your free home assessment is the first step. No pressure. No obligations. Just honest information about what solar could mean for your home.
            </p>
            <Link
              href="/contact"
              className="bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all inline-block"
            >
              Schedule Your Free Assessment
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
