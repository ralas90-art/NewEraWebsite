import type { Metadata } from 'next';
import RoofingPageContent from '@/components/pages/RoofingPageContent';

export const metadata: Metadata = {
  title: 'Roofing Services | New Era Solar Energy',
  description:
    'Protect your home with professional roof inspections, repairs, and replacements. New Era Solar Energy provides roofing services to keep your home solar-ready.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/roofing',
    languages: {
      'en': 'https://newerasolarenergy.com/roofing',
      'es': 'https://newerasolarenergy.com/es/roofing',
    },
  },
  openGraph: {
    title: 'Roofing Services | New Era Solar Energy',
    description:
      'Protect your home with professional roof inspections, repairs, and replacements. New Era Solar Energy provides roofing services to keep your home solar-ready.',
    url: 'https://newerasolarenergy.com/roofing',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RoofingPage() {
  return <RoofingPageContent locale="en" />;
}
