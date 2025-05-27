import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { getAllPosts, getAllCategories, getAuthorById, searchPosts, getAllAuthors } from "@/lib/blog"
import { format } from "date-fns"
import { BlogSearch } from "@/components/blog/BlogSearch"

export const metadata: Metadata = {
  title: "Blog - SinoPrime International Shipping",
  description: "Expert insights, industry news, and practical guides on international logistics and shipping from China.",
}

type SearchParams = {
  q?: string;
  category?: string;
}

export default function BlogPage({ 
  searchParams 
}: { 
  searchParams: SearchParams
}) {
  // Get all blog posts
  let blogPosts = getAllPosts()
  
  // 在组件内部获取作者数据，而不是在模块级别
  const authors = getAllAuthors();
  const authorsMap = new Map(authors.map(author => [author.id, author]));
  
  // Handle search query
  const searchQuery = searchParams?.q
  if (searchQuery) {
    blogPosts = searchPosts(searchQuery)
  }
  
  // Handle category filtering
  const categoryFilter = searchParams?.category
  if (categoryFilter) {
    blogPosts = blogPosts.filter(post => 
      post.category.toLowerCase() === categoryFilter.toLowerCase()
    )
  }
  
  // Get all categories
  const categories = getAllCategories()
  
  // Get the latest 3 articles as sidebar recommendations
  const recentPosts = getAllPosts().slice(0, 3)
  
  // Check if there are any filters applied
  const hasFilter = Boolean(searchQuery || categoryFilter)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-blue-950">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/logistics-hero-bg.jpg"
            alt="Logistics background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SinoPrime Shipping Blog</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Expert insights, industry news, and practical guides on international logistics and shipping from China
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - Article Grid */}
          <div className="lg:col-span-3">
        {/* Search Bar */}
            <div className="mb-8">
              <BlogSearch />
        </div>

            {/* Filter Info */}
            {hasFilter && (
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  {searchQuery ? `Search results for "${searchQuery}"` : 
                   categoryFilter ? `Category: ${categoryFilter.toUpperCase()}` : ''}
                </p>
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm">
                  View All Posts
                </Link>
          </div>
        )}

            {/* Articles Grid */}
            {blogPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {blogPosts.map((post) => {
                  const author = authorsMap.get(post.author);
                  
                  // Format date
                  let formattedDate = post.date
                  try {
                    if (post.date) {
                      formattedDate = format(new Date(post.date), 'MMM d, yyyy')
                    }
                  } catch (e) {
                    console.error("Date formatting error:", e)
                  }
                  
                  return (
                    <Card key={post.slug} className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                      <CardContent className="p-0">
                        {/* Cover Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                            src={post.coverImage || "/placeholder-byhpf.png"}
                          alt={post.title}
                          fill
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                          {/* Category Tag Overlay */}
                          <div className="absolute top-3 left-3">
                            <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                              {post.category}
                            </span>
                          </div>
                      </div>
                        
                        {/* Article Content */}
                        <div className="p-4">
                        <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-lg font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors leading-tight">
                            {post.title}
                          </h2>
                        </Link>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{formattedDate}</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
                </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No articles found matching your criteria</p>
                <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                  Return to All Articles
                </Link>
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm text-gray-500 bg-gray-200 rounded">Previous</button>
                <button className="px-3 py-1 text-sm bg-red-600 text-white rounded">1</button>
                <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">2</button>
                <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">3</button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded">8</button>
                <button className="px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded">Next</button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog"
                    className="flex items-center justify-between text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <span>All Categories</span>
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                      {blogPosts.length}
                    </span>
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category.key}>
                    <Link
                      href={`/blog?category=${category.key}`}
                      className={`flex items-center justify-between transition-colors ${
                        categoryFilter === category.key 
                          ? "text-red-600 font-medium"
                          : "text-gray-600 hover:text-red-600"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => {
                  let formattedDate = post.date
                  try {
                    if (post.date) {
                      formattedDate = format(new Date(post.date), 'MMM d, yyyy')
                    }
                  } catch (e) {
                    console.error("Date formatting error:", e)
                  }
                  
                  return (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 shrink-0 bg-gray-100 rounded overflow-hidden">
                          <Image
                            src={post.coverImage || "/placeholder-byhpf.png"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                    </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 text-sm leading-tight">
                        {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{formattedDate}</p>
                    </div>
                  </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-900 rounded-lg shadow-sm p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-blue-100 text-sm mb-4">Get the latest logistics insights and shipping tips delivered to your inbox.</p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300"
                />
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Need Shipping Solutions */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-red-600">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Need Shipping Solutions?</h3>
              <p className="text-gray-600 text-sm mb-4">Contact our experts for personalized logistics solutions from China to worldwide destinations.</p>
              <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
