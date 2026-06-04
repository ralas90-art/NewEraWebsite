import type { Metadata } from 'next';
import ProcessPageContent from '@/components/pages/ProcessPageContent';

export const metadata: Metadata = {
  title: 'Nuestro Proceso de Instalación Solar | New Era Solar Energy',
  description:
    'Desde su primera pregunta hasta su primer día con energía solar. Vea exactamente cómo New Era Solar Energy le guía en cada paso: evaluación, diseño, permisos, instalación y activación.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/process',
    languages: {
      'en': 'https://newerasolarenergy.com/process',
      'es': 'https://newerasolarenergy.com/es/process',
    },
  },
  openGraph: {
    title: 'Nuestro Proceso de Instalación Solar | New Era Solar Energy',
    description:
      'Desde su primera pregunta hasta su primer día con energía solar. Vea exactamente cómo New Era Solar Energy le guía en cada paso: evaluación, diseño, permisos, instalación y activación.',
    url: 'https://newerasolarenergy.com/es/process',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishProcessPage() {
  return <ProcessPageContent locale="es" />;
}
