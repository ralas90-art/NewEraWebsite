import type { Metadata } from 'next';
import Link from 'next/link';
import { CareerApplicationForm } from '@/components/forms/CareerApplicationForm';

export const metadata: Metadata = {
  title: 'Careers at New Era Solar Energy',
  description:
    'Join a fast-growing clean energy team. New Era Solar Energy is hiring solar sales consultants, home upgrade advisors, appointment setters, and more.',
  openGraph: {
    title: 'Careers at New Era Solar Energy',
    description: 'Join a fast-growing clean energy team across FL, MA, and CT.',
    type: 'website',
  },
};

type JobPosting = {
  title: string;
  type: string;
  location: string;
  market: string;
  compensation: string;
  description: string;
};

const jobs: JobPosting[] = [
  {
    title: 'Solar Sales Consultant',
    type: 'Commission-based + Bonuses',
    location: 'Remote / Field',
    market: 'FL, MA, CT',
    compensation: 'Commission-based + Bonuses',
    description:
      'Help homeowners make the switch to solar. This role is ideal for motivated sales professionals who want to grow in the clean energy space. You will conduct home assessments, present custom proposals, and guide customers through the process from interest to installation.',
  },
  {
    title: 'Roofing / Home Upgrade Advisor',
    type: 'Full-time',
    location: 'Field',
    market: 'FL',
    compensation: 'Full-time',
    description:
      'Conduct home upgrade consultations covering solar readiness, roofing assessments, and water filtration evaluations. You will be the trusted expert who helps homeowners understand their full home upgrade picture.',
  },
  {
    title: 'Appointment Setter',
    type: 'Full-time or Part-time',
    location: 'Remote',
    market: 'All markets',
    compensation: 'Full-time or Part-time',
    description:
      'Schedule qualified solar assessments for our field teams. Strong communication skills and a growth mindset required. You will be the first voice many homeowners hear — make it count.',
  },
  {
    title: 'Customer Success Specialist',
    type: 'Full-time',
    location: 'Remote / Office',
    market: 'FL',
    compensation: 'Full-time',
    description:
      'Support customers from contract signing through installation activation. Empathy and organization are your superpowers. You will coordinate with installation crews, utility contacts, and homeowners to ensure a smooth, five-star experience.',
  },
  {
    title: 'Dealer Partner / Territory Partner',
    type: 'Contract',
    location: 'Remote / Field',
    market: 'All markets',
    compensation: 'Contract',
    description:
      'Run your own territory as a New Era dealer partner. Ideal for experienced solar sales professionals ready to scale. Build a team, grow a book of business, and operate with the backing of a proven platform.',
  },
];

export default function CareersPage() {
  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Solar Sales Consultant',
    description:
      'Help homeowners make the switch to solar. This role is ideal for motivated sales professionals who want to grow in the clean energy space.',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'New Era Solar Energy',
      sameAs: 'https://newerasolarenergy.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    employmentType: ['FULL_TIME', 'CONTRACTOR'],
    datePosted: '2026-06-01',
    jobLocationType: 'TELECOMMUTE',
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: {
        '@type': 'QuantitativeValue',
        value: 0,
        unitText: 'YEAR',
        description: 'Commission-based with performance bonuses',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://newerasolarenergy.com/careers' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-newera-dark-gray">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-6 text-xs text-[#5F6F75] font-sans flex items-center gap-2">
        <Link href="/" className="hover:text-[#ff5722] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-newera-dark-gray font-semibold">Careers</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block bg-[#082fa3]/15 text-[#082fa3] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Join the Team
        </span>
        <h1 className="font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl text-newera-dark-gray leading-[1.1] mb-6">
          Build Your Career<br />
          in <span className="text-[#ff5722]">Clean Energy</span>
        </h1>
        <p className="text-[#5F6F75] text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
          New Era Solar Energy is growing fast across Florida, Massachusetts, and Connecticut. We are
          looking for driven, values-aligned people who want to do meaningful work and build long careers
          in the clean energy industry.
        </p>
      </section>

      {/* Open Positions */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-poppins font-bold text-3xl text-newera-dark-gray mb-10">Open Positions</h2>
        <div className="space-y-5">
          {jobs.map((job) => (
            <div key={job.title} className="bg-white border border-[#e5e5e5] rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-poppins font-bold text-xl text-newera-dark-gray mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#F5F7FA] border border-[#e5e5e5] text-[#5F6F75] text-xs font-semibold px-3 py-1 rounded-full">
                      📍 {job.location}
                    </span>
                    <span className="bg-[#F5F7FA] border border-[#e5e5e5] text-[#5F6F75] text-xs font-semibold px-3 py-1 rounded-full">
                      🌎 {job.market}
                    </span>
                    <span className="bg-[#ff572220]/40 text-[#ff5722] text-xs font-semibold px-3 py-1 rounded-full">
                      💼 {job.compensation}
                    </span>
                  </div>
                  <p className="text-[#5F6F75] text-sm font-sans leading-relaxed">{job.description}</p>
                </div>
                <a
                  href="#career-form"
                  className="shrink-0 bg-newera-dark-blue text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-newera-dark-blue/90 transition-colors text-center self-start"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-3xl mx-auto px-6 pb-4">
        <h2 className="font-poppins font-bold text-3xl text-newera-dark-gray mb-6 text-center">Apply Now</h2>
        <CareerApplicationForm />
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-[#082fa3]/10 border border-[#082fa3]/30 rounded-2xl p-5 text-sm text-newera-dark-gray font-sans leading-relaxed">
          <strong>Note:</strong> We review applications weekly. No resume upload required in this phase
          — use the experience summary field to tell us about your background and what you bring to the team.
        </div>
      </section>
    </div>
  );
}
