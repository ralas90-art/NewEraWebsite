import type { Metadata } from 'next';
import CareersPageContent from '@/components/pages/CareersPageContent';

export const metadata: Metadata = {
  title: 'Empleos en New Era Solar Energy',
  description:
    'Únase a un equipo de energía limpia de rápido crecimiento. New Era Solar Energy está contratando asesores de ventas solares, asesores de mejoras para el hogar y más.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/careers',
    languages: {
      'en': 'https://newerasolarenergy.com/careers',
      'es': 'https://newerasolarenergy.com/es/careers',
    },
  },
  openGraph: {
    title: 'Empleos en New Era Solar Energy',
    description: 'Únase a un equipo de energía limpia de rápido crecimiento en FL, MA y CT.',
    url: 'https://newerasolarenergy.com/es/careers',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishCareersPage() {
  return <CareersPageContent locale="es" />;
}
