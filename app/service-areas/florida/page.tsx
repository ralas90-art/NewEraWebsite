import type { Metadata } from 'next';
import FloridaPageContent from '@/components/pages/FloridaPageContent';

export const metadata: Metadata = {
  title: 'Solar Energy in Florida | New Era Solar Energy',
  description:
    'Florida homeowners enjoy excellent solar conditions year-round. New Era Solar Energy provides residential solar, roofing, and water purification across South Florida, Central Florida, and beyond.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/service-areas/florida',
    languages: {
      'en': 'https://newerasolarenergy.com/service-areas/florida',
      'es': 'https://newerasolarenergy.com/es/service-areas/florida',
    },
  },
};

export default function FloridaPage() {
  return <FloridaPageContent locale="en" />;
}
