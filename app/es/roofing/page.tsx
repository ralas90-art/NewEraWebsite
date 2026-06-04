import type { Metadata } from 'next';
import RoofingPageContent from '@/components/pages/RoofingPageContent';

export const metadata: Metadata = {
  title: 'Servicios de Techos | New Era Solar Energy',
  description:
    'Proteja su hogar con inspecciones, reparaciones y reemplazos de techos profesionales. New Era Solar Energy ofrece servicios de techado para mantener su hogar listo para la energía solar.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/roofing',
    languages: {
      'en': 'https://newerasolarenergy.com/roofing',
      'es': 'https://newerasolarenergy.com/es/roofing',
    },
  },
  openGraph: {
    title: 'Servicios de Techos | New Era Solar Energy',
    description:
      'Proteja su hogar con inspecciones, reparaciones y reemplazos de techos profesionales. New Era Solar Energy ofrece servicios de techado para mantener su hogar listo para la energía solar.',
    url: 'https://newerasolarenergy.com/es/roofing',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishRoofingPage() {
  return <RoofingPageContent locale="es" />;
}
