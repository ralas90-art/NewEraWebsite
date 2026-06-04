import type { Metadata } from 'next';
import SolarPageContent from '@/components/pages/SolarPageContent';

export const metadata: Metadata = {
  title: 'Residential Solar Energy in Florida | New Era Solar Energy',
  description:
    'Explore solar energy for your home with New Era Solar Energy. Get a free assessment, personalized system design, and clear guidance from Florida solar experts.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/solar',
    languages: {
      'en': 'https://newerasolarenergy.com/solar',
      'es': 'https://newerasolarenergy.com/es/solar',
    },
  },
  openGraph: {
    title: 'Residential Solar Energy in Florida | New Era Solar Energy',
    description:
      'Explore solar energy for your home with New Era Solar Energy. Get a free assessment, personalized system design, and clear guidance from Florida solar experts.',
    url: 'https://newerasolarenergy.com/solar',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function SolarPage() {
  return <SolarPageContent locale="en" />;
}
