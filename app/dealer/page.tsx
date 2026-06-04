import type { Metadata } from 'next';
import DealerPageContent from '@/components/pages/DealerPageContent';

export const metadata: Metadata = {
  title: 'Become a Dealer Partner | New Era Solar Energy',
  description:
    'Partner with New Era Solar Energy as an EPC contractor, dealer, or territory sales partner. Build your business on a trusted platform.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/dealer',
    languages: {
      'en': 'https://newerasolarenergy.com/dealer',
      'es': 'https://newerasolarenergy.com/es/dealer',
    },
  },
  openGraph: {
    title: 'Become a Dealer Partner | New Era Solar Energy',
    description: 'Partner with New Era Solar Energy. EPC, dealer, and territory sales opportunities available.',
    url: 'https://newerasolarenergy.com/dealer',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function DealerPage() {
  return <DealerPageContent locale="en" />;
}
