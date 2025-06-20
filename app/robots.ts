import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://sinoprimeshipping.com' // 替换为您的实际域名

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // 禁止抓取管理后台和API路由
        disallow: [
          '/sps-admin/*',
          '/blog-admin/*',
          '/api/*',
          '/get-quote/thank-you-quote',
          '/sps-99/thank-you-sp19',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/sps-admin/*',
          '/blog-admin/*',
          '/api/*',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 