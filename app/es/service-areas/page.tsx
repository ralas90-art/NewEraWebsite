import type { Metadata } from 'next';
import ServiceAreasPageContent from '@/components/pages/ServiceAreasPageContent';

export const metadata: Metadata = {
  title: 'Áreas de Servicio de Energía Solar | New Era Solar Energy',
  description:
    'New Era Solar Energy atiende a propietarios de viviendas en Florida, Massachusetts y Connecticut. Encuentre su área y explore las oportunidades solares cerca de usted.',
  alternates: {
    canonical: 'https://newerasolarenergy.com/es/service-areas',
    languages: {
      'en': 'https://newerasolarenergy.com/service-areas',
      'es': 'https://newerasolarenergy.com/es/service-areas',
    },
  },
};

export default function SpanishServiceAreasPage() {
  return <ServiceAreasPageContent locale="es" />;
}
