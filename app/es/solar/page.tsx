import type { Metadata } from 'next';
import SolarPageContent from '@/components/pages/SolarPageContent';

export const metadata: Metadata = {
  title: 'Energía Solar Residencial en Florida | New Era Solar Energy',
  description:
    'Explore opciones de energía solar para su hogar con New Era Solar Energy. Obtenga una evaluación gratuita, un diseño de sistema personalizado y asesoría clara de expertos solares en Florida.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/solar',
    languages: {
      'en': 'https://newerasolarenergy.com/solar',
      'es': 'https://newerasolarenergy.com/es/solar',
    },
  },
  openGraph: {
    title: 'Energía Solar Residencial en Florida | New Era Solar Energy',
    description:
      'Explore opciones de energía solar para su hogar con New Era Solar Energy. Obtenga una evaluación gratuita, un diseño de sistema personalizado y asesoría clara de expertos solares en Florida.',
    url: 'https://newerasolarenergy.com/es/solar',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishSolarPage() {
  return <SolarPageContent locale="es" />;
}
