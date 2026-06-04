import type { Metadata } from 'next';
import ReviewsPageContent from '@/components/pages/ReviewsPageContent';

export const metadata: Metadata = {
  title: 'Opiniones de Clientes | New Era Solar Energy',
  description:
    'Vea lo que dicen los propietarios en Florida, Massachusetts y Connecticut sobre su experiencia solar con New Era Solar Energy.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/reviews',
    languages: {
      'en': 'https://newerasolarenergy.com/reviews',
      'es': 'https://newerasolarenergy.com/es/reviews',
    },
  },
};

export default function SpanishReviewsPage() {
  return <ReviewsPageContent locale="es" />;
}
