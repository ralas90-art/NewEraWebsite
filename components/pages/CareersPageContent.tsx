import React from 'react';
import Link from 'next/link';
import { careersPageTranslations } from '@/lib/i18n/pagesContent';
import { Locale } from '@/lib/i18n/language';
import { CareerApplicationForm } from '@/components/forms/CareerApplicationForm';
import { MapPin, Globe, Briefcase } from 'lucide-react';

interface CareersPageContentProps {
  locale: Locale;
}

export default function CareersPageContent({ locale }: CareersPageContentProps) {
  const isSpanish = locale === 'es';
  const t = isSpanish ? careersPageTranslations.es : careersPageTranslations.en;

  const jobs = isSpanish
    ? [
        {
          title: 'Consultor de Ventas Solares',
          location: 'Remoto / Campo',
          market: 'FL, MA, CT',
          compensation: 'Comisión + Bonos',
          description:
            'Ayude a los dueños de casa a realizar la transición a energía solar. Este rol es ideal para profesionales de ventas motivados que deseen crecer en el sector de energía limpia. Realizará evaluaciones en el hogar, presentará propuestas personalizadas y guiará a los clientes en todo el proceso.',
        },
        {
          title: 'Asesor de Techo / Mejoras para el Hogar',
          location: 'Campo',
          market: 'FL',
          compensation: 'Tiempo completo',
          description:
            'Realizar consultas de mejoras para el hogar que cubran la preparación para energía solar, evaluaciones de techos y de calidad de agua. Será el experto de confianza que ayude a los propietarios a comprender el panorama completo de mejoras para su hogar.',
        },
        {
          title: 'Coordinador de Citas (Setter)',
          location: 'Remoto',
          market: 'Todos los mercados',
          compensation: 'Tiempo completo o Medio tiempo',
          description:
            'Programe evaluaciones de energía solar calificadas para nuestros equipos de campo. Se requieren sólidas habilidades de comunicación y mentalidad de crecimiento. Será la primera voz que escuchen muchos propietarios de viviendas.',
        },
        {
          title: 'Especialista en Éxito del Cliente',
          location: 'Remoto / Oficina',
          market: 'FL',
          compensation: 'Tiempo completo',
          description:
            'Brinde soporte a los clientes desde la firma del contrato hasta la activación de la instalación. La empatía y la organización son sus superpoderes. Coordinará con los equipos de instalación, servicios públicos y propietarios para garantizar una experiencia de cinco estrellas.',
        },
        {
          title: 'Socio Distribuidor / Socio de Territorio',
          location: 'Remoto / Campo',
          market: 'Todos los mercados',
          compensation: 'Contrato',
          description:
            'Dirija su propio territorio como socio distribuidor de New Era. Ideal para profesionales con experiencia en ventas solares listos para escalar. Construya un equipo, aumente su cartera de clientes y opere con el respaldo de una plataforma comprobada.',
        },
      ]
    : [
        {
          title: 'Solar Sales Consultant',
          location: 'Remote / Field',
          market: 'FL, MA, CT',
          compensation: 'Commission-based + Bonuses',
          description:
            'Help homeowners make the switch to solar. This role is ideal for motivated sales professionals who want to grow in the clean energy space. You will conduct home assessments, present custom proposals, and guide customers through the process from interest to installation.',
        },
        {
          title: 'Roofing / Home Upgrade Advisor',
          location: 'Field',
          market: 'FL',
          compensation: 'Full-time',
          description:
            'Conduct home upgrade consultations covering solar readiness, roofing assessments, and water filtration evaluations. You will be the trusted expert who helps homeowners understand their full home upgrade picture.',
        },
        {
          title: 'Appointment Setter',
          location: 'Remote',
          market: 'All markets',
          compensation: 'Full-time or Part-time',
          description:
            'Schedule qualified solar assessments for our field teams. Strong communication skills and a growth mindset required. You will be the first voice many homeowners hear — make it count.',
        },
        {
          title: 'Customer Success Specialist',
          location: 'Remote / Office',
          market: 'FL',
          compensation: 'Full-time',
          description:
            'Support customers from contract signing through installation activation. Empathy and organization are your superpowers. You will coordinate with installation crews, utility contacts, and homeowners to ensure a smooth, five-star experience.',
        },
        {
          title: 'Dealer Partner / Territory Partner',
          location: 'Remote / Field',
          market: 'All markets',
          compensation: 'Contract',
          description:
            'Run your own territory as a New Era dealer partner. Ideal for experienced solar sales professionals ready to scale. Build a team, grow a book of business, and operate with the backing of a proven platform.',
        },
      ];

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: isSpanish ? 'Consultor de Ventas Solares' : 'Solar Sales Consultant',
    description: isSpanish
      ? 'Ayude a los dueños de casa a realizar la transición a energía solar. Realice evaluaciones en el hogar y presente propuestas personalizadas.'
      : 'Help homeowners make the switch to solar. Conduct home assessments and present custom proposals.',
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
      { '@type': 'ListItem', position: 1, name: isSpanish ? 'Inicio' : 'Home', item: 'https://newerasolarenergy.com' },
      { '@type': 'ListItem', position: 2, name: isSpanish ? 'Empleo' : 'Careers', item: isSpanish ? 'https://newerasolarenergy.com/es/careers' : 'https://newerasolarenergy.com/careers' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#14324b]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-6 text-xs text-[#4e5257] font-sans flex items-center gap-2">
        <Link href={isSpanish ? '/es' : '/'} className="hover:text-[#ff5722] transition-colors">
          {isSpanish ? 'Inicio' : 'Home'}
        </Link>
        <span>/</span>
        <span className="text-[#14324b] font-semibold">
          {isSpanish ? 'Empleo' : 'Careers'}
        </span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <span className="inline-block bg-[#082fa3]/15 text-[#082fa3] text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          {t.heroTag}
        </span>
        <h1 className="font-poppins font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#14324b] leading-[1.1] mb-6">
          {isSpanish ? (
            <>Desarrolle su Carrera<br />en <span className="text-[#ff5722]">Energía Limpia</span></>
          ) : (
            <>Build Your Career<br />in <span className="text-[#ff5722]">Clean Energy</span></>
          )}
        </h1>
        <p className="text-[#4e5257] text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
          {t.heroDesc}
        </p>
      </section>

      {/* Open Positions */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-poppins font-bold text-3xl text-[#14324b] mb-10">
          {t.positionsTitle}
        </h2>
        <div className="space-y-5">
          {jobs.map((job) => (
            <div key={job.title} className="bg-white border border-[#E2E8F0] rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-poppins font-bold text-xl text-[#14324b] mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-[#F9FAFB] border border-[#E2E8F0] text-[#4e5257] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#ff5722]" />
                      {job.location}
                    </span>
                    <span className="bg-[#F9FAFB] border border-[#E2E8F0] text-[#4e5257] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#ff5722]" />
                      {job.market}
                    </span>
                    <span className="bg-[#ff572220]/40 text-[#ff5722] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#ff5722]" />
                      {job.compensation}
                    </span>
                  </div>
                  <p className="text-[#4e5257] text-sm font-sans leading-relaxed">{job.description}</p>
                </div>
                <a
                  href="#career-form"
                  className="shrink-0 bg-[#14324b] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#14324b]/90 transition-colors text-center self-start font-sans"
                >
                  {t.btnApply}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-3xl mx-auto px-6 pb-4">
        <h2 className="font-poppins font-bold text-3xl text-[#14324b] mb-6 text-center">
          {t.formHeading}
        </h2>
        <CareerApplicationForm />
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-[#082fa3]/10 border border-[#082fa3]/30 rounded-2xl p-5 text-sm text-[#14324b] font-sans leading-relaxed">
          <strong>{t.noteTitle}</strong> {t.noteDesc}
        </div>
      </section>
    </div>
  );
}

