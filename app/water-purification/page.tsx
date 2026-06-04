import type { Metadata } from 'next';
import WaterPageContent from '@/components/pages/WaterPageContent';

export const metadata: Metadata = {
  title: 'Home Water Purification | New Era Solar Energy',
  description:
    'Clean, filtered water for your entire home. New Era Solar Energy installs whole-house filtration systems, under-sink RO systems, and water quality testing.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/water-purification',
    languages: {
      'en': 'https://newerasolarenergy.com/water-purification',
      'es': 'https://newerasolarenergy.com/es/water-purification',
    },
  },
  openGraph: {
    title: 'Home Water Purification | New Era Solar Energy',
    description:
      'Clean, filtered water for your entire home. New Era Solar Energy installs whole-house filtration systems, under-sink RO systems, and water quality testing.',
    url: 'https://newerasolarenergy.com/water-purification',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function WaterPurificationPage() {
  return <WaterPageContent locale="en" />;
}
