import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://newerasolarenergy.com';

  const routes = [
    '',
    '/solar',
    '/roofing',
    '/water-purification',
    '/cost-savings',
    '/process',
    '/service-areas',
    '/service-areas/florida',
    '/service-areas/massachusetts',
    '/service-areas/connecticut',
    '/reviews',
    '/referral',
    '/referral-terms',
    '/contact',
    '/dealer',
    '/careers',
    '/about',
    '/es',
    '/es/solar',
    '/es/roofing',
    '/es/water-purification',
    '/es/cost-savings',
    '/es/process',
    '/es/service-areas',
    '/es/service-areas/florida',
    '/es/service-areas/massachusetts',
    '/es/service-areas/connecticut',
    '/es/reviews',
    '/es/referral',
    '/es/referral-terms',
    '/es/contact',
    '/es/dealer',
    '/es/careers',
    '/es/about',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
