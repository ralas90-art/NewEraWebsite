import type { Metadata } from 'next';
import ServiceAreasPageContent from '@/components/pages/ServiceAreasPageContent';

export const metadata: Metadata = {
  title: 'Solar Service Areas | New Era Solar Energy',
  description:
    'New Era Solar Energy serves homeowners across Florida, Massachusetts, and Connecticut. Find your area and explore solar opportunities near you.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/service-areas',
    languages: {
      'en': 'https://newerasolarenergy.com/service-areas',
      'es': 'https://newerasolarenergy.com/es/service-areas',
    },
  },
};

export default function ServiceAreasPage() {
  return <ServiceAreasPageContent locale="en" />;
}
