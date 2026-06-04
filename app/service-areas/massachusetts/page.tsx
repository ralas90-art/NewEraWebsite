import type { Metadata } from 'next';
import MassachusettsPageContent from '@/components/pages/MassachusettsPageContent';

export const metadata: Metadata = {
  title: 'Solar Energy in Massachusetts | New Era Solar Energy',
  description:
    'Massachusetts homeowners benefit from strong solar incentives, the SMART program, and robust net metering. New Era Solar Energy brings premium residential solar to MA.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/service-areas/massachusetts',
    languages: {
      'en': 'https://newerasolarenergy.com/service-areas/massachusetts',
      'es': 'https://newerasolarenergy.com/es/service-areas/massachusetts',
    },
  },
};

export default function MassachusettsPage() {
  return <MassachusettsPageContent locale="en" />;
}
