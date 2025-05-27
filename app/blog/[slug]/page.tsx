import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarIcon, ClockIcon, TagIcon, ShareIcon, ArrowLeftIcon } from "lucide-react"
import { getPostBySlug, getAllPostSlugs, getRelatedPosts, getAllAuthors } from "@/lib/blog"
import { format } from "date-fns"
import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { TableOfContents } from "@/components/blog/TableOfContents"

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    }
  }
  
  return {
    title: `${post.title} | SinoPrime Logistics Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

// Generate static paths
export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }
  
  // 在组件内部获取作者数据，而不是在模块级别
  const authors = getAllAuthors();
  const authorsMap = new Map(authors.map(author => [author.id, author]));
  
  // 从预缓存的作者Map中获取作者信息，而不是调用getAuthorById
  const author = authorsMap.get(post.author);
  console.log(`详情页 - 文章: ${slug}, 作者ID: "${post.author}", 获取到的作者:`, author);
  console.log("详情页 - 所有作者:", authors);
  
  // Get related articles
  const relatedPosts = getRelatedPosts(slug, 2)
  
  // Format date
  let formattedDate = post.date
  try {
    if (post.date) {
      formattedDate = format(new Date(post.date), 'MMMM d, yyyy')
    }
  } catch (e) {
    console.error("Date formatting error:", e)
  }

  return (
    <div className="bg-gray-50 pt-12 pb-20">
      <div className="container-custom">
        {/* 添加固定在右侧的目录组件 */}
        <TableOfContents content={post.content} />
        
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article title and meta information */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {/* Featured image */}
          <div className="relative w-full h-[400px]">
            <Image 
              src={post.coverImage || "/placeholder-byhpf.png"} 
              alt={post.title} 
              fill 
              className="object-cover" 
              priority
            />
      </div>

          {/* Article title and meta information */}
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500">
                <CalendarIcon className="mr-1 h-4 w-4" />
                <span className="text-sm">{formattedDate}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <ClockIcon className="mr-1 h-4 w-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            {/* Author information */}
            {author ? (
            <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white mr-4">
                  {author.name.charAt(0)}
              </div>
              <div>
                  <div className="font-medium">{author.name}</div>
                  <div className="text-sm text-gray-500">{author.role}</div>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white mr-4">
                  {post.author ? post.author.charAt(0).toUpperCase() : 'A'}
            </div>
                <div>
                  <div className="font-medium">{post.author ? `Author: ${post.author}` : 'Anonymous Author'}</div>
                  <div className="text-sm text-gray-500">Contributor</div>
          </div>
        </div>
            )}
          </div>
        </div>

        {/* Article content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              {/* 移除目录组件，因为它已经固定在右侧 */}

              <div 
                className="prose max-w-none" 
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12">
                  <Separator className="mb-6" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                        #{tag}
                      </Link>
              ))}
            </div>
          </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author information card */}
            {author && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white mr-4">
                    {author.name.charAt(0)}
        </div>
                  <div>
                    <div className="font-medium">{author.name}</div>
                    <div className="text-sm text-gray-500">{author.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{author.bio}</p>
              </div>
            )}
            
            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="block group">
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 shrink-0">
                          <Image
                            src={relatedPost.coverImage || "/placeholder-byhpf.png"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{relatedPost.readTime}</p>
                        </div>
                  </div>
                </Link>
              ))}
            </div>
              </div>
            )}
            
            {/* View all articles button */}
            <Link href="/blog">
              <Button className="w-full">View All Articles</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
