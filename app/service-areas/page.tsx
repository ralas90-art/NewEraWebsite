import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Service Areas | New Era Solar Energy',
  description:
    'New Era Solar Energy serves homeowners across Florida, Massachusetts, and Connecticut. Find your area and explore solar opportunities near you.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://newerasolarenergy.com' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://newerasolarenergy.com/service-areas' },
      ],
    },
    {
      '@type': 'LocalBusiness',
      name: 'New Era Solar Energy',
      url: 'https://newerasolarenergy.com',
      areaServed: [
        { '@type': 'State', name: 'Florida' },
        { '@type': 'State', name: 'Massachusetts' },
        { '@type': 'State', name: 'Connecticut' },
      ],
    },
  ],
};

const STATES = [
  {
    name: 'Florida',
    slug: 'florida',
    flag: '☀️',
    tagline: 'Year-round sunshine & strong solar economics',
    description:
      'Year-round sunshine, high utility rates, and strong net metering rules make Florida one of the best states for residential solar. From Miami to Jacksonville, New Era Solar Energy serves homeowners across the Sunshine State.',
    cities: ['Miami', 'Fort Lauderdale', 'Orlando', 'Tampa', 'Jacksonville', 'Boca Raton', 'Palm Beach'],
    highlight: '230+ sunny days/year',
  },
  {
    name: 'Massachusetts',
    slug: 'massachusetts',
    flag: '⚡',
    tagline: 'SMART program & robust net metering',
    description:
      'Massachusetts SMART incentive program and strong net metering make it a top solar state even with seasonal weather. MA homeowners benefit from state-level support that improves the economics of going solar.',
    cities: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'New Bedford'],
    highlight: '#1 Solar Policy State',
  },
  {
    name: 'Connecticut',
    slug: 'connecticut',
    flag: '🌿',
    tagline: 'Green Bank financing & net metering credits',
    description:
      'Connecticut homeowners benefit from competitive net metering tariffs and state incentive programs supporting clean energy. With some of the highest electricity rates in the country, solar savings in CT are significant.',
    cities: ['Hartford', 'Bridgeport', 'New Haven', 'Stamford', 'Waterbury', 'Norwalk'],
    highlight: 'Top 10 electricity rates in US',
  },
];

export default function ServiceAreasPage() {
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
              <span className="opacity-80">Service Areas</span>
            </nav>
            <span className="text-[10px] font-bold uppercase text-[#5EC8E5] tracking-widest mb-3 block">
              Where We Work
            </span>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl leading-tight mb-5">
              We Serve Homeowners Across the East Coast
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              New Era Solar Energy provides residential solar, roofing, and water purification services across three states — each with unique incentives, policies, and solar opportunities.
            </p>
          </div>
        </section>

        {/* State Cards */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATES.map((state) => (
              <div
                key={state.slug}
                className="bg-white border border-[#E6EDF2] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="text-4xl mb-4">{state.flag}</div>
                <div className="inline-flex mb-3">
                  <span className="bg-[#5EC8E5]/10 text-[#5EC8E5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {state.highlight}
                  </span>
                </div>
                <h2 className="font-poppins font-bold text-2xl text-[#123B5D] mb-2">
                  Solar in {state.name}
                </h2>
                <p className="text-[#5F6F75] font-sans text-sm leading-relaxed mb-6 flex-grow">
                  {state.description}
                </p>
                <Link
                  href={`/service-areas/${state.slug}`}
                  className="bg-[#123B5D] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1a4a75] transition-colors inline-flex items-center gap-2 justify-center"
                >
                  Explore {state.name} Solar
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Cities Section */}
        <section className="bg-white border-t border-[#E6EDF2] py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold uppercase text-[#5EC8E5] tracking-widest mb-2 block">
                Local Coverage
              </span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-[#123B5D]">
                Cities and Communities We Serve
              </h2>
              <p className="text-[#5F6F75] font-sans text-sm mt-3 max-w-xl mx-auto">
                We work with homeowners across dozens of cities in FL, MA, and CT. If you don&apos;t see your city below, contact us — we likely serve your area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STATES.map((state) => (
                <div key={state.slug}>
                  <h3 className="font-poppins font-bold text-lg text-[#123B5D] mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FF8A3D]" />
                    {state.name}
                  </h3>
                  <ul className="space-y-2">
                    {state.cities.map((city) => (
                      <li key={city} className="flex items-center gap-2 text-sm text-[#5F6F75] font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5EC8E5] shrink-0" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-[#5F6F75] font-sans text-sm mb-4">
                Not seeing your city listed?
              </p>
              <Link
                href="/contact"
                className="bg-[#FF8A3D] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#ff7a21] transition-all inline-flex items-center gap-2"
              >
                Contact Us to Check Your Area
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
