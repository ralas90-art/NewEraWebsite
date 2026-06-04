import type { Metadata } from 'next';
import ReferralPageContent from '@/components/pages/ReferralPageContent';

export const metadata: Metadata = {
  title: 'Refer a Homeowner | New Era Solar Energy',
  description:
    'Earn $1,000 for every friend, neighbor, or family member you refer who goes solar with New Era Solar Energy. No limit on how many you can refer.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/referral',
    languages: {
      'en': 'https://newerasolarenergy.com/referral',
      'es': 'https://newerasolarenergy.com/es/referral',
    },
  },
  openGraph: {
    title: 'Refer a Homeowner | New Era Solar Energy',
    description: 'Earn $1,000 for every solar referral. No limit.',
    url: 'https://newerasolarenergy.com/referral',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ReferralPage() {
  return <ReferralPageContent locale="en" />;
}
