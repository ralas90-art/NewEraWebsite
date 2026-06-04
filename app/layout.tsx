import Analytics from '../components/Analytics';
import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  themeColor: '#ff5722',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "New Era Solar Energy | Florida's Solar Specialist",
  icons: {
    icon: '/logo-sun.png',
    shortcut: '/logo-sun.png',
    apple: '/logo-sun.png',
  },
  description: 'Make the switch to solar with confidence. New Era Solar Energy provides clear savings assessments, zero-pressure guidance, and premium support for residential solar, roofing, and water purification in Florida, Massachusetts, and Connecticut.',
  keywords: ['solar energy', 'Florida solar', 'residential solar panels', 'solar installation', 'roofing FL', 'home water purification', 'Massachusetts solar', 'Connecticut solar'],
  openGraph: {
    title: "New Era Solar Energy | Florida's Solar Specialist",
    description: 'Make the switch to solar with confidence. Compare solar options, estimate savings, and make a confident decision with bilingual no-pressure guidance.',
    url: 'https://newerasolarenergy.com',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://newerasolarenergy.com/logo-sun.png',
        width: 512,
        height: 512,
        alt: 'New Era Solar Energy Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Era Solar Energy',
    description: "Florida's trusted solar and home upgrades provider.",
    images: ['https://newerasolarenergy.com/logo-sun.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'New Era Solar Energy',
    description: "Florida's Solar Specialist providing residential solar, roofing, and water purification.",
    url: 'https://newerasolarenergy.com', // TODO: REPLACE_WITH_PRODUCTION_DOMAIN
    telephone: '+1-321-381-3192',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F5F7FA] text-newera-dark-gray flex flex-col min-h-screen" suppressHydrationWarning>
        <Analytics />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
