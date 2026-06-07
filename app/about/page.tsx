import type { Metadata } from 'next';
import AboutPageContent from '@/components/pages/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us | New Era Solar Energy',
  description:
    'Powered by Integrity. Driven by Excellence. Built on Family Values. Discover New Era Solar Energy\'s mission to deliver high-quality renewable energy, roofing, and water solutions with honest guidance and outstanding service.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/about',
    languages: {
      'en': 'https://newerasolarenergy.com/about',
      'es': 'https://newerasolarenergy.com/es/about',
    },
  },
  openGraph: {
    title: 'About Us | New Era Solar Energy',
    description:
      'Powered by Integrity. Driven by Excellence. Built on Family Values. Discover New Era Solar Energy\'s mission to deliver high-quality renewable energy, roofing, and water solutions with honest guidance and outstanding service.',
    url: 'https://newerasolarenergy.com/about',
    siteName: 'New Era Solar Energy',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutPageContent locale="en" />;
}
