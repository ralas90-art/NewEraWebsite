import type { Metadata } from 'next';
import CostSavingsPageContent from '@/components/pages/CostSavingsPageContent';

export const metadata: Metadata = {
  title: 'Costos y Ahorros de Energía Solar | New Era Solar Energy',
  description:
    'Comprenda las opciones de financiamiento de energía solar, los ahorros potenciales de energía y lo que significan las pautas de crédito fiscal federal para los propietarios. Obtenga una estimación de ahorros personalizada.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/cost-savings',
    languages: {
      'en': 'https://newerasolarenergy.com/cost-savings',
      'es': 'https://newerasolarenergy.com/es/cost-savings',
    },
  },
  openGraph: {
    title: 'Costos y Ahorros de Energía Solar | New Era Solar Energy',
    description:
      'Comprenda las opciones de financiamiento de energía solar, los ahorros potenciales de energía y lo que significan las pautas de crédito fiscal federal para los propietarios. Obtenga una estimación de ahorros personalizada.',
    url: 'https://newerasolarenergy.com/es/cost-savings',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishCostSavingsPage() {
  return <CostSavingsPageContent locale="es" />;
}
