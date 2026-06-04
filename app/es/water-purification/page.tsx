import type { Metadata } from 'next';
import WaterPageContent from '@/components/pages/WaterPageContent';

export const metadata: Metadata = {
  title: 'Purificación de Agua para el Hogar | New Era Solar Energy',
  description:
    'Agua limpia y filtrada para todo su hogar. New Era Solar Energy instala sistemas de filtración para toda la casa, sistemas de ósmosis inversa bajo el fregadero y pruebas de calidad del agua.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/water-purification',
    languages: {
      'en': 'https://newerasolarenergy.com/water-purification',
      'es': 'https://newerasolarenergy.com/es/water-purification',
    },
  },
  openGraph: {
    title: 'Purificación de Agua para el Hogar | New Era Solar Energy',
    description:
      'Agua limpia y filtrada para todo su hogar. New Era Solar Energy instala sistemas de filtración para toda la casa, sistemas de ósmosis inversa bajo el fregadero y pruebas de calidad del agua.',
    url: 'https://newerasolarenergy.com/es/water-purification',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishWaterPurificationPage() {
  return <WaterPageContent locale="es" />;
}
