"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { PlusCircle, Pencil, Trash2, Eye } from "lucide-react"
import { format } from "date-fns"

// 博客文章类型定义
type Post = {
  slug: string
  title: string
  date: string
  author: string
  category: string
  excerpt: string
}

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  
  // 加载文章列表
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog/posts')
        if (!response.ok) throw new Error('获取文章失败')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('加载文章失败:', error)
        // 如果API调用失败，使用空数组
        setPosts([])
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchPosts()
  }, [])
  
  // 处理搜索
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
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
    } catch (error) {
      console.error('删除文章失败:', error)
      alert('删除文章失败，请稍后再试')
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
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">博客管理</h1>
        <Link href="/blog-admin/new">
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            创建新文章
          </Button>
        </Link>
      </div>
      
      {/* 搜索栏 */}
      <div className="mb-6">
        <Input
          placeholder="搜索文章标题、分类或作者..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>
      
      {/* 文章列表 */}
      {isLoading ? (
        <div className="text-center py-12">加载中...</div>
      ) : filteredPosts.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>标题</TableHead>
                <TableHead>分类</TableHead>
                <TableHead>作者</TableHead>
                <TableHead>发布日期</TableHead>
                <TableHead className="text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.slug}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>{formatDate(post.date)}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Link href={`/blog/${post.slug}`} target="_blank">
                      <Button variant="outline" size="sm" className="inline-flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        查看
                      </Button>
                    </Link>
                    <Link href={`/blog-admin/edit/${post.slug}`}>
                      <Button variant="outline" size="sm" className="inline-flex items-center">
                        <Pencil className="h-4 w-4 mr-1" />
                        编辑
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="inline-flex items-center text-red-600 hover:text-red-800"
                      onClick={() => handleDeletePost(post.slug)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      删除
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">未找到匹配的文章</p>
        </div>
      )}
    </div>
  )
} 