import type { Metadata } from 'next';
import HomePageContent from '@/components/pages/HomePageContent';

export const metadata: Metadata = {
  title: 'New Era Solar Energy | Solar, Roofing & Water Purification',
  description:
    'New Era Solar Energy helps homeowners in Florida, Massachusetts, and Connecticut explore solar energy, roofing, and water purification solutions with clear guidance and bilingual support.',
  alternates: {
    canonical: 'https://newerasolarenergy.com',
    languages: {
      'en': 'https://newerasolarenergy.com',
      'es': 'https://newerasolarenergy.com/es',
    },
  },
  openGraph: {
    title: 'New Era Solar Energy | Solar, Roofing & Water Purification',
    description:
      'New Era Solar Energy helps homeowners in Florida, Massachusetts, and Connecticut explore solar energy, roofing, and water purification solutions with clear guidance and bilingual support.',
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
    title: 'New Era Solar Energy | Solar, Roofing & Water Purification',
    description: 'New Era Solar Energy helps homeowners in Florida, Massachusetts, and Connecticut explore home upgrades.',
    images: ['https://newerasolarenergy.com/logo-sun.png'],
  },
};

export default function HomePage() {
  return <HomePageContent locale="en" />;
}
