import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact New Era Solar Energy | Free Home Assessment',
  description:
    'Schedule your free solar assessment, ask a question, or request information about solar, roofing, or water purification services. We are here to help.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/contact',
    languages: {
      'en': 'https://newerasolarenergy.com/contact',
      'es': 'https://newerasolarenergy.com/es/contact',
    },
  },
  openGraph: {
    title: 'Contact New Era Solar Energy | Free Home Assessment',
    description: 'Get in touch with our team. Free solar assessments, bilingual support, and fast response times.',
    url: 'https://newerasolarenergy.com/contact',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactPageContent locale="en" />;
}
