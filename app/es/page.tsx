import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'New Era Solar Energy | Energía Solar para Dueños de Casa',
  description:
    'Explora opciones solares, estima tus ahorros y recibe una evaluación gratis con New Era Solar Energy. Atención en inglés y español.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es',
    languages: {
      'en': 'https://newerasolarenergy.com',
      'es': 'https://newerasolarenergy.com/es',
    },
  },
  openGraph: {
    title: 'New Era Solar Energy | Energía Solar para Dueños de Casa',
    description:
      'Explora opciones solares, estima tus ahorros y recibe una evaluación gratis con New Era Solar Energy. Atención en inglés y español.',
    url: 'https://newerasolarenergy.com/es',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishHome() {
  return <Home />;
}
