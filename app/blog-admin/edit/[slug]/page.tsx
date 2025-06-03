"use client"

import { useState, useEffect, FormEvent, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Save, Shield, Lock } from "lucide-react"

// 博客文章类型
type Post = {
  slug: string
  title: string
  date: string
  author: string
  category: string
  tags: string[]
  excerpt: string
  content: string
  coverImage: string
  readTime: string
}

// 作者类型
type Author = {
  id: string
  name: string
}

export default function EditPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // 使用 React.use() 来解包 params Promise
  const resolvedParams = use(params)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [authors, setAuthors] = useState<Author[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  
  // 检查登录状态
  useEffect(() => {
    const checkAuthStatus = () => {
      const isAdmin = localStorage.getItem('sps_admin_logged_in')
      if (isAdmin === 'true') {
        setIsLoggedIn(true)
      } else {
        router.push('/sps-admin')
      }
      setIsChecking(false)
    }
    
    checkAuthStatus()
  }, [router])
  
  // 加载文章数据
  useEffect(() => {
    if (!isLoggedIn) return
    const fetchPost = async () => {
      try {
        // 实际项目中应该从API获取数据
        // const response = await fetch(`/api/blog/posts/${resolvedParams.slug}`)
        // if (!response.ok) throw new Error('获取文章失败')
        // const data = await response.json()
        // setPost(data)
        
        // 模拟数据
        if (resolvedParams.slug === 'fcl-vs-lcl-rail-freight') {
          setPost({
            slug: "fcl-vs-lcl-rail-freight",
            title: "FCL vs LCL铁路货运：从中国发货哪种集装箱选择最佳",
            date: "2023-05-15",
            author: "zhang-ming",
            category: "SHIPPING",
            tags: ["铁路货运", "集装箱", "中欧班列", "物流优化"],
            excerpt: "了解FCL和LCL铁路货运的区别，为从中国发货优化物流策略。",
            content: "# FCL vs LCL铁路货运：从中国发货哪种集装箱选择最佳\n\n随着中欧班列的快速发展，铁路运输已成为连接中国与欧洲市场的重要物流方式。在选择铁路货运服务时，理解FCL（整箱货物）和LCL（拼箱货物）的区别至关重要...",
            coverImage: "/fcl-vs-lcl-rail-freight.png",
            readTime: "8 min"
          })
        } else if (resolvedParams.slug === 'amazon-fba-shipping-from-china-guide') {
          setPost({
            slug: "amazon-fba-shipping-from-china-guide",
            title: "亚马逊FBA从中国发货完全指南：卖家必读",
            date: "2023-01-12",
            author: "wang-jing",
            category: "FBA",
            tags: ["亚马逊FBA", "跨境电商", "中国供应链", "物流优化"],
            excerpt: "全面了解如何从中国供应商向亚马逊FBA仓库高效发货的策略和最佳实践。",
            content: "# 亚马逊FBA从中国发货完全指南：卖家必读\n\n如果您是亚马逊卖家，从中国采购产品并发往FBA仓库可能是您业务中最关键的环节之一...",
            coverImage: "/fba-shipping-services.png",
            readTime: "12 min"
          })
        } else {
          throw new Error('文章不存在')
        }
        
        // 模拟作者和分类数据
        setAuthors([
          { id: 'zhang-ming', name: '张明' },
          { id: 'li-wei', name: '李伟' },
          { id: 'wang-jing', name: '王静' }
        ])
        
        setCategories([
          'SHIPPING', 'FROM CHINA', 'E-COMMERCE', 'FBA', 'CUSTOMS', 'WAREHOUSE', 'OCEAN FREIGHT', 'AIR FREIGHT'
        ])
      } catch (error) {
        console.error('加载文章失败:', error)
        setError('加载文章失败，请稍后再试')
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchPost()
  }, [resolvedParams.slug, isLoggedIn])
  
  // 处理表单提交
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!post) return
    
    setIsSaving(true)
    
    try {
      // 实际项目中应该调用API
      // const response = await fetch(`/api/blog/posts/${post.slug}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(post)
      // })
      
      // if (!response.ok) throw new Error('保存失败')
      
      // 模拟API请求延迟
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 保存成功，返回列表页
      router.push('/sps-admin?tab=blog')
      router.refresh()
    } catch (error) {
      console.error('保存文章失败:', error)
      setError('保存文章失败，请稍后再试')
    } finally {
      setIsSaving(false)
    }
  }
  
  // 处理表单字段变化
  const handleChange = (field: keyof Post, value: string) => {
    if (!post) return
    
    setPost({
      ...post,
      [field]: value
    })
  }
  
  // 处理标签变化
  const handleTagsChange = (value: string) => {
    if (!post) return
    
    // 将逗号分隔的标签字符串转换为数组
    const tags = value.split(',').map(tag => tag.trim()).filter(Boolean)
    
    setPost({
      ...post,
      tags
    })
  }
  
  if (isChecking) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>检查认证状态...</p>
        </div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-6 p-4 bg-red-100 rounded-full w-fit">
              <Lock className="h-10 w-10 text-red-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900">访问受限</CardTitle>
            <CardDescription className="text-base">
              编辑文章功能需要管理员认证
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8 space-y-6">
            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                请先登录管理后台再访问此功能
              </AlertDescription>
            </Alert>
            
            <Link href="/sps-admin">
              <Button className="w-full h-12 text-base flex items-center justify-center gap-2">
                <Shield className="h-5 w-5" />
                返回管理后台
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }
  
  if (isLoading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">加载中...</div>
      </div>
    )
  }
  
  if (error || !post) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center text-red-600">{error || '文章不存在'}</div>
        <div className="mt-4 text-center">
          <Link href="/sps-admin?tab=blog">
            <Button>返回列表</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/sps-admin?tab=blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回博客管理
        </Link>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-6">编辑文章</h1>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 标题 */}
            <div className="grid gap-2">
              <Label htmlFor="title">标题</Label>
              <Input 
                id="title" 
                value={post.title} 
                onChange={(e) => handleChange('title', e.target.value)}
                required
              />
            </div>
            
            {/* 摘要 */}
            <div className="grid gap-2">
              <Label htmlFor="excerpt">摘要</Label>
              <Textarea 
                id="excerpt" 
                value={post.excerpt} 
                onChange={(e) => handleChange('excerpt', e.target.value)}
                rows={2}
                required
              />
            </div>
            
            {/* 内容 */}
            <div className="grid gap-2">
              <Label htmlFor="content">内容 (Markdown格式)</Label>
              <Textarea 
                id="content" 
                value={post.content} 
                onChange={(e) => handleChange('content', e.target.value)}
                rows={10}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 封面图片 */}
              <div className="grid gap-2">
                <Label htmlFor="coverImage">封面图片URL</Label>
                <Input 
                  id="coverImage" 
                  value={post.coverImage} 
                  onChange={(e) => handleChange('coverImage', e.target.value)}
                  placeholder="/images/your-image.jpg"
                  required
                />
              </div>
              
              {/* 阅读时间 */}
              <div className="grid gap-2">
                <Label htmlFor="readTime">阅读时间</Label>
                <Input 
                  id="readTime" 
                  value={post.readTime} 
                  onChange={(e) => handleChange('readTime', e.target.value)}
                  placeholder="5 min"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 作者 */}
              <div className="grid gap-2">
                <Label htmlFor="author">作者</Label>
                <Select 
                  value={post.author} 
                  onValueChange={(value) => handleChange('author', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="选择作者" />
                  </SelectTrigger>
                  <SelectContent>
                    {authors.map((author) => (
                      <SelectItem key={author.id} value={author.id}>
                        {author.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* 分类 */}
              <div className="grid gap-2">
                <Label htmlFor="category">分类</Label>
                <Select 
                  value={post.category} 
                  onValueChange={(value) => handleChange('category', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="选择分类" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* 发布日期 */}
              <div className="grid gap-2">
                <Label htmlFor="date">发布日期</Label>
                <Input 
                  id="date" 
                  type="date" 
                  value={post.date} 
                  onChange={(e) => handleChange('date', e.target.value)}
                  required
                />
              </div>
            </div>
            
            {/* 标签 */}
            <div className="grid gap-2">
              <Label htmlFor="tags">标签 (用逗号分隔)</Label>
              <Input 
                id="tags" 
                value={post.tags.join(', ')} 
                onChange={(e) => handleTagsChange(e.target.value)}
                placeholder="标签1, 标签2, 标签3"
              />
            </div>
            
            {/* 按钮 */}
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={() => router.push('/blog-admin')}>
                取消
              </Button>
              <Button type="submit" disabled={isSaving} className="flex items-center gap-2">
                {isSaving ? '保存中...' : (
                  <>
                    <Save className="h-4 w-4" />
                    保存文章
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 