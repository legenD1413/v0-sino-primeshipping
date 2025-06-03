"use client"

import { useState, useEffect, FormEvent } from "react"
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

export default function NewPostPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const [post, setPost] = useState<Post>({
    slug: '',
    title: '',
    date: new Date().toISOString().split('T')[0], // 默认为今天
    author: '',
    category: '',
    tags: [],
    excerpt: '',
    content: '',
    coverImage: '',
    readTime: ''
  })
  
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
  
  // 加载作者和分类数据
  useEffect(() => {
    if (!isLoggedIn) return
    
    const fetchData = async () => {
      try {
        // 模拟数据 - 未来可以从API获取
        setAuthors([
          { id: 'zhang-ming', name: 'Ming Zhang' },
          { id: 'li-wei', name: 'Wei Li' },
          { id: 'wang-jing', name: 'Jing Wang' }
        ])
        
        setCategories([
          'SHIPPING', 'FROM CHINA', 'E-COMMERCE', 'FBA', 'CUSTOMS', 'WAREHOUSE', 'OCEAN FREIGHT', 'AIR FREIGHT'
        ])
      } catch (error) {
        console.error('加载数据失败:', error)
        setError('加载数据失败，请稍后再试')
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchData()
  }, [isLoggedIn])
  
  // 自动生成slug
  useEffect(() => {
    if (post.title) {
      // 简单的slug生成逻辑
      const slug = post.title
        .toLowerCase()
        .replace(/\s+/g, '-') // 替换空格为连字符
        .replace(/[^\w\-]+/g, '') // 移除非字母数字字符
        .replace(/\-\-+/g, '-') // 替换多个连字符为单个连字符
        .replace(/^-+/, '') // 移除开头的连字符
        .replace(/-+$/, '') // 移除结尾的连字符
      
      setPost(prev => ({ ...prev, slug }))
    }
  }, [post.title])
  
  // 处理表单提交
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // 清空之前的错误信息
    setError(null)
    
    // 简单验证
    if (!post.title || !post.content || !post.author || !post.category) {
      setError('请填写所有必填字段')
      return
    }
    
    setIsSaving(true)
    
    try {
      // 调用API创建文章
      const response = await fetch('/api/blog/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || '创建失败')
      }
      
      // 创建成功，返回列表页
      router.push('/sps-admin?tab=blog')
      router.refresh()
    } catch (error) {
      console.error('创建文章失败:', error)
      setError(error instanceof Error ? error.message : '创建文章失败，请稍后再试')
    } finally {
      setIsSaving(false)
    }
  }
  
  // 处理表单字段变化
  const handleChange = (field: keyof Post, value: string) => {
    setPost({
      ...post,
      [field]: value
    })
  }
  
  // 处理标签变化
  const handleTagsChange = (value: string) => {
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
              创建文章功能需要管理员认证
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
          <h1 className="text-2xl font-bold mb-6">创建新文章</h1>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 标题 */}
            <div className="grid gap-2">
              <Label htmlFor="title">标题 *</Label>
              <Input 
                id="title" 
                value={post.title} 
                onChange={(e) => handleChange('title', e.target.value)}
                required
              />
            </div>
            
            {/* Slug */}
            <div className="grid gap-2">
              <Label htmlFor="slug">
                Slug * <span className="text-gray-500 text-sm">(URL友好标识符)</span>
              </Label>
              <Input 
                id="slug" 
                value={post.slug} 
                onChange={(e) => handleChange('slug', e.target.value)}
                required
                placeholder="your-article-title"
              />
            </div>
            
            {/* 摘要 */}
            <div className="grid gap-2">
              <Label htmlFor="excerpt">摘要 *</Label>
              <Textarea 
                id="excerpt" 
                value={post.excerpt} 
                onChange={(e) => handleChange('excerpt', e.target.value)}
                rows={2}
                required
                placeholder="简要描述文章内容，将显示在列表页..."
              />
            </div>
            
            {/* 内容 */}
            <div className="grid gap-2">
              <Label htmlFor="content">内容 (Markdown格式) *</Label>
              <Textarea 
                id="content" 
                value={post.content} 
                onChange={(e) => handleChange('content', e.target.value)}
                rows={10}
                required
                placeholder="# 文章标题&#10;&#10;这是文章的正文内容..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 封面图片 */}
              <div className="grid gap-2">
                <Label htmlFor="coverImage">封面图片URL *</Label>
                <Input 
                  id="coverImage" 
                  value={post.coverImage} 
                  onChange={(e) => handleChange('coverImage', e.target.value)}
                  placeholder="/blog/your-image.jpg"
                  required
                />
              </div>
              
              {/* 阅读时间 */}
              <div className="grid gap-2">
                <Label htmlFor="readTime">阅读时间 *</Label>
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
                <Label htmlFor="author">作者 *</Label>
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
                <Label htmlFor="category">分类 *</Label>
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
                <Label htmlFor="date">发布日期 *</Label>
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
                {isSaving ? '创建中...' : (
                  <>
                    <Save className="h-4 w-4" />
                    创建文章
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