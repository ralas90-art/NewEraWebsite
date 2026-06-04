import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const isProductionDomain = siteUrl.includes('newerasolarenergy.com');
  const domain = 'https://newerasolarenergy.com';

  if (!isProductionDomain) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
