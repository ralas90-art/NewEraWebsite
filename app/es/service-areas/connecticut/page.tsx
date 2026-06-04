import type { Metadata } from 'next';
import ConnecticutPageContent from '@/components/pages/ConnecticutPageContent';

export const metadata: Metadata = {
  title: 'Energía Solar en Connecticut | New Era Solar Energy',
  description:
    'Los propietarios de Connecticut se benefician de excelentes tarifas eléctricas de medición neta y programas de incentivos estatales. New Era Solar Energy ofrece energía solar en CT.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/service-areas/connecticut',
    languages: {
      'en': 'https://newerasolarenergy.com/service-areas/connecticut',
      'es': 'https://newerasolarenergy.com/es/service-areas/connecticut',
    },
  },
};

export default function SpanishConnecticutPage() {
  return <ConnecticutPageContent locale="es" />;
}
