import type { Metadata } from 'next';
import CareersPageContent from '@/components/pages/CareersPageContent';

export const metadata: Metadata = {
  title: 'Careers at New Era Solar Energy',
  description:
    'Join a fast-growing clean energy team. New Era Solar Energy is hiring solar sales consultants, home upgrade advisors, appointment setters, and more.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/careers',
    languages: {
      'en': 'https://newerasolarenergy.com/careers',
      'es': 'https://newerasolarenergy.com/es/careers',
    },
  },
  openGraph: {
    title: 'Careers at New Era Solar Energy',
    description: 'Join a fast-growing clean energy team across FL, MA, and CT.',
    url: 'https://newerasolarenergy.com/careers',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CareersPage() {
  return <CareersPageContent locale="en" />;
}
