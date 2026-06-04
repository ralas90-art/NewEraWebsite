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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
