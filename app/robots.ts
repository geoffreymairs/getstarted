import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.getstarted.co.nz'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/workshop', '/confirmation', '/success', '/cancel', '/thank-you'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
