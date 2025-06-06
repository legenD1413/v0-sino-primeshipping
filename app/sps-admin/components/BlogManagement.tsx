'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from '@/hooks/use-toast'
import { PlusCircle, Pencil, Trash2, Eye, FileText, Calendar, User, Tag } from "lucide-react"
import { format } from "date-fns"

// 博客文章类型定义
type Post = {
  slug: string
  title: string
  date: string
  author: string
  category: string
  excerpt: string
  tags?: string[]
  status?: 'draft' | 'published' | 'archived'
}

export default function BlogManagement() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
    archived: 0
  })
  const { toast } = useToast()
  
  // 加载文章列表
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog/posts')
        if (!response.ok) throw new Error('获取文章失败')
        const data = await response.json()
        setPosts(data)
        
        // 计算统计信息
        const newStats = {
          total: data.length,
          published: data.filter((p: Post) => p.status === 'published').length,
          draft: data.filter((p: Post) => p.status === 'draft').length,
          archived: data.filter((p: Post) => p.status === 'archived').length
        }
        setStats(newStats)
      } catch (error) {
        console.error('加载文章失败:', error)
        // 如果API调用失败，使用模拟数据
        const mockPosts = [
          {
            slug: 'fcl-vs-lcl-rail-freight',
            title: 'FCL vs LCL铁路货运：从中国发货哪种集装箱选择最佳',
            date: '2023-05-15',
            author: 'Zhang Ming',
            category: 'SHIPPING',
            excerpt: '了解FCL和LCL铁路货运的区别，为从中国发货优化物流策略。',
            tags: ['铁路货运', '集装箱', '中欧班列', '物流优化'],
            status: 'published' as const
          },
          {
            slug: 'amazon-fba-shipping-from-china-guide',
            title: '亚马逊FBA从中国发货完全指南：卖家必读',
            date: '2023-01-12',
            author: 'Wang Jing',
            category: 'FBA',
            excerpt: '全面了解如何从中国供应商向亚马逊FBA仓库高效发货的策略和最佳实践。',
            tags: ['亚马逊FBA', '跨境电商', '中国供应链', '物流优化'],
            status: 'published' as const
          },
          {
            slug: 'shipping-guide-2024',
            title: '2024年国际物流完整指南',
            date: '2024-01-15',
            author: 'Li Wei',
            category: 'SHIPPING',
            excerpt: '全面了解2024年国际物流的最新趋势和最佳实践',
            tags: ['物流', '指南', '2024'],
            status: 'draft' as const
          }
        ]
        setPosts(mockPosts)
        setStats({
          total: 3,
          published: 2,
          draft: 1,
          archived: 0
        })
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchPosts()
  }, [])
  
  // 处理搜索和过滤
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  
  // 获取所有分类
  const categories = [...new Set(posts.map(post => post.category))]
  
  // 处理删除文章
  const handleDeletePost = async (slug: string) => {
    if (!confirm('确定要删除这篇文章吗？此操作不可撤销。')) return
    
    try {
      const response = await fetch(`/api/blog/posts/${slug}`, {
        method: 'DELETE'
      })
      
      if (!response.ok) throw new Error('删除失败')
      
      // 更新列表
      setPosts(posts.filter(post => post.slug !== slug))
      toast({
        title: "删除成功",
        description: "文章已成功删除",
      })
    } catch (error) {
      console.error('删除文章失败:', error)
      toast({
        title: "删除失败",
        description: "删除文章失败，请稍后再试",
        variant: "destructive"
      })
    }
  }
  
  // 格式化日期
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'yyyy-MM-dd')
    } catch (e) {
      return dateString
    }
  }

  return (
    <div className="space-y-8">
      {/* 统计概览 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">总文章数</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg mr-4">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">已发布</p>
                <p className="text-2xl font-bold">{stats.published}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                <Pencil className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">草稿</p>
                <p className="text-2xl font-bold">{stats.draft}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-gray-100 rounded-lg mr-4">
                <Trash2 className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">已归档</p>
                <p className="text-2xl font-bold">{stats.archived}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 主要内容 */}
      <Card>
        <CardHeader className="pb-6">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">博客文章管理</CardTitle>
              <CardDescription className="text-base">
                管理所有博客文章的创建、编辑和发布
              </CardDescription>
            </div>
            <Link href="/blog-admin/new">
              <Button className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                创建新文章
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {/* 搜索和过滤 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Input
              placeholder="搜索文章标题、分类或作者..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">所有分类</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          {/* 文章列表 */}
          {isLoading ? (
            <div className="text-center py-12">加载中...</div>
          ) : filteredPosts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">标题</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">分类</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">作者</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">状态</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">发布日期</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.map((post) => (
                    <tr key={post.slug} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">
                        <div>
                          <span className="font-medium text-gray-900">{post.title}</span>
                          {post.excerpt && (
                            <p className="text-sm text-gray-500 mt-1">{post.excerpt}</p>
                          )}
                        </div>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        <Badge variant="outline">{post.category}</Badge>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{post.author}</span>
                        </div>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        <Badge variant={
                          post.status === 'published' ? 'default' :
                          post.status === 'draft' ? 'secondary' :
                          'outline'
                        }>
                          {post.status === 'published' ? '已发布' :
                           post.status === 'draft' ? '草稿' :
                           post.status === 'archived' ? '已归档' : '未知'}
                        </Badge>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                        </div>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        <div className="flex gap-2">
                          <Link href={`/blog/${post.slug}`} target="_blank">
                            <Button variant="outline" size="sm" className="text-xs">
                              <Eye className="h-3 w-3 mr-1" />
                              查看
                            </Button>
                          </Link>
                          <Link href={`/blog-admin/edit/${post.slug}`}>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-xs"
                            >
                              <Pencil className="h-3 w-3 mr-1" />
                              编辑
                            </Button>
                          </Link>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600 hover:text-red-700 text-xs"
                            onClick={() => handleDeletePost(post.slug)}
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            删除
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-gray-500">未找到匹配的文章</p>
              <Button 
                className="mt-4" 
                variant="outline"
                onClick={() => window.open('/blog-admin/new', '_blank')}
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                创建第一篇文章
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 