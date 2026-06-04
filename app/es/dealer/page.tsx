import type { Metadata } from 'next';
import DealerPageContent from '@/components/pages/DealerPageContent';

export const metadata: Metadata = {
  title: 'Conviértase en Socio Distribuidor | New Era Solar Energy',
  description:
    'Asóciese con New Era Solar Energy como contratista EPC, distribuidor o socio de ventas territoriales. Construya su negocio en una plataforma de confianza.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/dealer',
    languages: {
      'en': 'https://newerasolarenergy.com/dealer',
      'es': 'https://newerasolarenergy.com/es/dealer',
    },
  },
  openGraph: {
    title: 'Conviértase en Socio Distribuidor | New Era Solar Energy',
    description:
      'Asóciese con New Era Solar Energy como contratista EPC, distribuidor o socio de ventas territoriales. Construya su negocio en una plataforma de confianza.',
    url: 'https://newerasolarenergy.com/es/dealer',
    siteName: 'New Era Solar Energy',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SpanishDealerPage() {
  return <DealerPageContent locale="es" />;
}
