import type { Metadata } from 'next';
import ReferralTermsPageContent from '@/components/pages/ReferralTermsPageContent';

export const metadata: Metadata = {
  title: 'Términos y Condiciones del Programa de Referidos | New Era Solar Energy',
  description: 'Términos del programa y reglas de elegibilidad para el programa de recompensas de referidos de New Era Solar Energy.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/referral-terms',
    languages: {
      'en': 'https://newerasolarenergy.com/referral-terms',
      'es': 'https://newerasolarenergy.com/es/referral-terms',
    },
  },
};

export default function SpanishReferralTermsPage() {
  return <ReferralTermsPageContent locale="es" />;
}
