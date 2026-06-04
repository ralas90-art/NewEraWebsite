import type { Metadata } from 'next';
import ProcessPageContent from '@/components/pages/ProcessPageContent';

export const metadata: Metadata = {
  title: 'Our Solar Installation Process | New Era Solar Energy',
  description:
    'From your first question to your first day of solar power. See exactly how New Era Solar Energy guides you through every step — assessment, design, permits, installation, and activation.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/process',
    languages: {
      'en': 'https://newerasolarenergy.com/process',
      'es': 'https://newerasolarenergy.com/es/process',
    },
  },
  openGraph: {
    title: 'Our Solar Installation Process | New Era Solar Energy',
    description:
      'From your first question to your first day of solar power. See exactly how New Era Solar Energy guides you through every step — assessment, design, permits, installation, and activation.',
    url: 'https://newerasolarenergy.com/process',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ProcessPage() {
  return <ProcessPageContent locale="en" />;
}
