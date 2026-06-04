import type { Metadata } from 'next';
import ReviewsPageContent from '@/components/pages/ReviewsPageContent';

export const metadata: Metadata = {
  title: 'Customer Reviews | New Era Solar Energy',
  description:
    'See what homeowners across Florida, Massachusetts, and Connecticut are saying about their solar journey with New Era Solar Energy.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/reviews',
    languages: {
      'en': 'https://newerasolarenergy.com/reviews',
      'es': 'https://newerasolarenergy.com/es/reviews',
    },
  },
};

export default function ReviewsPage() {
  return <ReviewsPageContent locale="en" />;
}
