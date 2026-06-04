import type { Metadata } from 'next';
import CostSavingsPageContent from '@/components/pages/CostSavingsPageContent';

export const metadata: Metadata = {
  title: 'Solar Cost & Savings | New Era Solar Energy',
  description:
    'Understand solar financing options, potential energy savings, and what the federal tax credit changes mean for homeowners. Get a personalized savings estimate.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/cost-savings',
    languages: {
      'en': 'https://newerasolarenergy.com/cost-savings',
      'es': 'https://newerasolarenergy.com/es/cost-savings',
    },
  },
  openGraph: {
    title: 'Solar Cost & Savings | New Era Solar Energy',
    description:
      'Understand solar financing options, potential energy savings, and what the federal tax credit changes mean for homeowners. Get a personalized savings estimate.',
    url: 'https://newerasolarenergy.com/cost-savings',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CostSavingsPage() {
  return <CostSavingsPageContent locale="en" />;
}
