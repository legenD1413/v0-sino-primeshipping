import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sinoprimeshipping.com' // 替换为您的实际域名
  
  // 获取当前时间作为lastModified
  const currentDate = new Date()
  
  // 静态页面路由
  const staticRoutes = [
    '',
    '/about-us',
    '/how-it-works',
    '/get-quote',
    '/faq',
    '/blog',
    '/services',
    '/business-type-example',
    '/podcast',
    '/sps-99',
  ]

  // 服务页面路由
  const serviceRoutes = [
    '/services/air-to-door',
    '/services/direct-to-consumer-shipping',
    '/services/express',
    '/services/fba-prep-and-ship',
    '/services/fcl-to-door',
    '/services/fcl-to-port',
    '/services/lcl-to-door',
    '/services/overseas-warehousing-and-fulfillment',
    '/services/returns-management',
    '/services/small-parcel-express',
  ]

  // SPS-99子页面路由
  const sps99Routes = [
    '/sps-99/sps-19cc',
    '/sps-99/sps-19eb',
    '/sps-99/sps-19fba',
    '/sps-99/sps-19tt',
  ]

  // 创建静态页面sitemap条目
  const staticSitemapEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 创建服务页面sitemap条目
  const serviceSitemapEntries = serviceRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 创建SPS-99页面sitemap条目
  const sps99SitemapEntries = sps99Routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // 获取博客文章并创建sitemap条目
  let blogSitemapEntries: MetadataRoute.Sitemap = []
  try {
    const posts = getAllPosts()
    blogSitemapEntries = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Failed to fetch blog posts for sitemap:', error)
  }

  // FAQ页面静态条目（避免构建时数据库依赖）
  const faqSitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }
  ]

  // 特殊博客页面
  const specialBlogEntries = [
    {
      url: `${baseUrl}/blog/fcl-vs-lcl-rail-freight`,
      lastModified: new Date('2023-05-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ]

  // 合并所有sitemap条目
  return [
    ...staticSitemapEntries,
    ...serviceSitemapEntries,
    ...sps99SitemapEntries,
    ...blogSitemapEntries,
    ...faqSitemapEntries,
    ...specialBlogEntries,
  ]
} 