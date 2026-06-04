import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contacto New Era Solar Energy | Evaluación Gratuita del Hogar',
  description:
    'Programe su evaluación solar gratuita, haga una pregunta o solicite información sobre los servicios de energía solar, techado o purificación de agua. Estamos aquí para ayudarle.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/contact',
    languages: {
      'en': 'https://newerasolarenergy.com/contact',
      'es': 'https://newerasolarenergy.com/es/contact',
    },
  },
  openGraph: {
    title: 'Contacto New Era Solar Energy | Evaluación Gratuita del Hogar',
    description:
      'Programe su evaluación solar gratuita, haga una pregunta o solicite información sobre los servicios de energía solar, techado o purificación de agua. Estamos aquí para ayudarle.',
    url: 'https://newerasolarenergy.com/es/contact',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishContactPage() {
  return <ContactPageContent locale="es" />;
}
