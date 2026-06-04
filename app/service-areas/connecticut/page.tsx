import type { Metadata } from 'next';
import ConnecticutPageContent from '@/components/pages/ConnecticutPageContent';

export const metadata: Metadata = {
  title: 'Solar Energy in Connecticut | New Era Solar Energy',
  description:
    'Connecticut homeowners benefit from net metering programs and state incentives. New Era Solar Energy provides residential solar, roofing, and water purification across CT.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/service-areas/connecticut',
    languages: {
      'en': 'https://newerasolarenergy.com/service-areas/connecticut',
      'es': 'https://newerasolarenergy.com/es/service-areas/connecticut',
    },
  },
};

export default function ConnecticutPage() {
  return <ConnecticutPageContent locale="en" />;
}
