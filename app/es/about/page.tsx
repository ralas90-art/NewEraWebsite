import type { Metadata } from 'next';
import AboutPageContent from '@/components/pages/AboutPageContent';

export const metadata: Metadata = {
  title: 'Quiénes Somos | New Era Solar Energy',
  description:
    'Impulsados por la integridad. Guiados por la excelencia. Construidos sobre valores familiares. Conozca la misión de New Era Solar Energy de ofrecer soluciones solares, techos y agua de alta calidad con asesoramiento honesto.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/about',
    languages: {
      'en': 'https://newerasolarenergy.com/about',
      'es': 'https://newerasolarenergy.com/es/about',
    },
  },
  openGraph: {
    title: 'Quiénes Somos | New Era Solar Energy',
    description:
      'Impulsados por la integridad. Guiados por la excelencia. Construidos sobre valores familiares. Conozca la misión de New Era Solar Energy de ofrecer soluciones solares, techos y agua de alta calidad con asesoramiento honesto.',
    url: 'https://newerasolarenergy.com/es/about',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishAboutPage() {
  return <AboutPageContent locale="es" />;
}
