import type { Metadata } from 'next';
import FloridaPageContent from '@/components/pages/FloridaPageContent';

export const metadata: Metadata = {
  title: 'Energía Solar en Florida | New Era Solar Energy',
  description:
    'Los propietarios de Florida disfrutan de excelentes condiciones solares todo el año. New Era Solar Energy ofrece energía solar residencial, techos y purificación de agua en Florida.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/service-areas/florida',
    languages: {
      'en': 'https://newerasolarenergy.com/service-areas/florida',
      'es': 'https://newerasolarenergy.com/es/service-areas/florida',
    },
  },
};

export default function SpanishFloridaPage() {
  return <FloridaPageContent locale="es" />;
}
