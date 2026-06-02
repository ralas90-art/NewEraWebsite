import Analytics from '../components/Analytics';
import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

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
  themeColor: '#123B5D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'New Era Solar Energy | Florida\'s Solar Specialist',
  description: 'Make the switch to solar with confidence. New Era Solar Energy provides clear guidance, personalized assessments, and premium support for residential solar, roofing, and water purification in Florida.',
  keywords: ['solar energy', 'Florida solar', 'residential solar panels', 'solar installation', 'roofing FL', 'home water purification'],
  openGraph: {
    title: 'New Era Solar Energy | Florida\'s Solar Specialist',
    description: 'Make the switch to solar with confidence. Clear guidance, personalized assessments, and Florida-inspired support.',
    url: 'https://newerasolarenergy.com', // TODO: REPLACE_WITH_PRODUCTION_DOMAIN
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Era Solar Energy',
    description: 'Florida\'s trusted solar provider.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'New Era Solar Energy',
    description: "Florida's Solar Specialist providing residential solar, roofing, and water purification.",
    url: 'https://newerasolarenergy.com', // TODO: REPLACE_WITH_PRODUCTION_DOMAIN
    telephone: '+1-000-000-0000', // TODO: REPLACE_WITH_REAL_PHONE_NUMBER
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
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
