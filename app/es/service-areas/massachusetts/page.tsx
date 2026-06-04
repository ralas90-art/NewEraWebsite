import type { Metadata } from 'next';
import MassachusettsPageContent from '@/components/pages/MassachusettsPageContent';

export const metadata: Metadata = {
  title: 'Energía Solar en Massachusetts | New Era Solar Energy',
  description:
    'Los propietarios de Massachusetts se benefician de incentivos solares muy sólidos, el programa SMART y una medición neta excelente. New Era Solar Energy ofrece energía solar premium en MA.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/service-areas/massachusetts',
    languages: {
      'en': 'https://newerasolarenergy.com/service-areas/massachusetts',
      'es': 'https://newerasolarenergy.com/es/service-areas/massachusetts',
    },
  },
};

export default function SpanishMassachusettsPage() {
  return <MassachusettsPageContent locale="es" />;
}
