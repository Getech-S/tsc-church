import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // If you have an admin dashboard, disallow it
    },
    sitemap: 'https://www.truesalvationchurch.com/sitemap.xml', 
  };
}