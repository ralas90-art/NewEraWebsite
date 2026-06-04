import type { Metadata } from 'next';
import ReferralPageContent from '@/components/pages/ReferralPageContent';

export const metadata: Metadata = {
  title: 'Recomiende a un Propietario | New Era Solar Energy',
  description:
    'Gane $1,000 por cada amigo, vecino o familiar que recomiende y que instale energía solar con New Era Solar Energy. Sin límite de recomendados.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/referral',
    languages: {
      'en': 'https://newerasolarenergy.com/referral',
      'es': 'https://newerasolarenergy.com/es/referral',
    },
  },
  openGraph: {
    title: 'Recomiende a un Propietario | New Era Solar Energy',
    description: 'Gane $1,000 por cada recomendado solar. Sin límite.',
    url: 'https://newerasolarenergy.com/es/referral',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishReferralPage() {
  return <ReferralPageContent locale="es" />;
}
