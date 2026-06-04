import type { Metadata } from 'next';
import ReferralTermsPageContent from '@/components/pages/ReferralTermsPageContent';

export const metadata: Metadata = {
  title: 'Referral Program Terms & Conditions | New Era Solar Energy',
  description: 'Program terms and eligibility rules for the New Era Solar Energy referral rewards program.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/referral-terms',
    languages: {
      'en': 'https://newerasolarenergy.com/referral-terms',
      'es': 'https://newerasolarenergy.com/es/referral-terms',
    },
  },
};

export default function ReferralTermsPage() {
  return <ReferralTermsPageContent locale="en" />;
}
