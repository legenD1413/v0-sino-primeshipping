'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Trash2, Edit, Plus, Save, X, Search, Filter, RefreshCw, Eye, EyeOff } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
  searchable_text: string
  is_popular: boolean
  is_active: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

interface FAQStats {
  total: number
  active: number
  popular: number
  general: number
  shipping: number
  customs: number
  pricing: number
  services: number
}

const categories = [
  { value: 'general', label: '常规问题' },
  { value: 'shipping', label: '运输物流' },
  { value: 'customs', label: '海关合规' },
  { value: 'pricing', label: '价格付款' },
  { value: 'services', label: '服务解决方案' }
]

export default function FAQManagement() {
  const [faqs, setFaqs] = useState<FAQItem[]>([])
  const [stats, setStats] = useState<FAQStats>({
    total: 0, active: 0, popular: 0, general: 0, 
    shipping: 0, customs: 0, pricing: 0, services: 0
  })
  const [loading, setLoading] = useState(true)
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // 筛选和搜索状态
  const [filters, setFilters] = useState({
    category: 'all',
    active: 'all',
    popular: 'all',
    search: ''
  })
  
  // 分页状态
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  })

  // 表单状态
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: 'general',
    searchable_text: '',
    is_popular: false,
    is_active: true,
    sort_order: 0
  })

  const { toast } = useToast()

  // 获取FAQ列表
  const fetchFAQs = async (page = 1) => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
        ...(filters.category && filters.category !== 'all' && { category: filters.category }),
        ...(filters.active && filters.active !== 'all' && { active: filters.active }),
        ...(filters.search && { search: filters.search })
      })
      
      const response = await fetch(`/api/faq?${params}`)
      const result = await response.json()
      
      if (result.success) {
        setFaqs(result.data)
        setStats(result.stats)
        setPagination(result.pagination)
      } else {
        toast({
          title: "错误",
          description: "获取FAQ失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "错误", 
        description: "获取FAQ失败",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFAQs()
  }, [filters, pagination.page])

  // 重置表单
  const resetForm = () => {
    setFormData({
      question: '',
      answer: '',
      category: 'general',
      searchable_text: '',
      is_popular: false,
      is_active: true,
      sort_order: 0
    })
    setEditingFaq(null)
  }

  // 打开编辑对话框
  const openEditDialog = (faq: FAQItem) => {
    setEditingFaq(faq)
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
      searchable_text: faq.searchable_text,
      is_popular: faq.is_popular,
      is_active: faq.is_active,
      sort_order: faq.sort_order
    })
    setIsDialogOpen(true)
  }

  // 保存FAQ
  const saveFAQ = async () => {
    if (!formData.question.trim() || !formData.answer.trim()) {
      toast({
        title: "验证错误",
        description: "问题和答案不能为空",
        variant: "destructive"
      })
      return
    }

    try {
      setIsSubmitting(true)
      const url = editingFaq ? `/api/faq/${editingFaq.id}` : '/api/faq'
      const method = editingFaq ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        toast({
          title: "成功",
          description: editingFaq ? 'FAQ更新成功' : 'FAQ创建成功'
        })
        setIsDialogOpen(false)
        resetForm()
        fetchFAQs(pagination.page)
      } else {
        toast({
          title: "错误",
          description: result.error || '保存失败',
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "错误",
        description: '保存失败',
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // 删除FAQ
  const deleteFAQ = async (id: number, question: string) => {
    if (!confirm(`确定要删除FAQ "${question}" 吗？`)) return
    
    try {
      const response = await fetch(`/api/faq/${id}`, { method: 'DELETE' })
      const result = await response.json()
      
      if (result.success) {
        toast({
          title: "成功",
          description: 'FAQ删除成功'
        })
        fetchFAQs(pagination.page)
      } else {
        toast({
          title: "错误",
          description: result.error || '删除失败',
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "错误",
        description: '删除失败',
        variant: "destructive"
      })
    }
  }

  // 快速切换状态
  const toggleFAQStatus = async (id: number, field: 'is_active' | 'is_popular', value: boolean) => {
    try {
      const faq = faqs.find(f => f.id === id)
      if (!faq) return

      const updatedData = {
        ...faq,
        [field]: value
      }

      const response = await fetch(`/api/faq/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        fetchFAQs(pagination.page)
        toast({
          title: "成功",
          description: '状态更新成功'
        })
      } else {
        toast({
          title: "错误",
          description: '状态更新失败',
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "错误",
        description: '状态更新失败',
        variant: "destructive"
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* 统计卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            <div className="text-sm text-gray-600">总数</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
            <div className="text-sm text-gray-600">启用</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{stats.popular}</div>
            <div className="text-sm text-gray-600">热门</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">{stats.general}</div>
            <div className="text-sm text-gray-600">常规</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-indigo-600">{stats.shipping}</div>
            <div className="text-sm text-gray-600">物流</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{stats.customs}</div>
            <div className="text-sm text-gray-600">海关</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-amber-600">{stats.pricing}</div>
            <div className="text-sm text-gray-600">价格</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">{stats.services}</div>
            <div className="text-sm text-gray-600">服务</div>
          </CardContent>
        </Card>
      </div>

      {/* 操作栏 */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>FAQ管理</CardTitle>
            <div className="flex gap-2">
              <Button onClick={() => fetchFAQs(pagination.page)} variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" />
                刷新
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={resetForm} size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    添加FAQ
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingFaq ? '编辑FAQ' : '添加FAQ'}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="category">分类 *</Label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map(cat => (
                              <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="sort_order">排序</Label>
                        <Input
                          id="sort_order"
                          type="number"
                          value={formData.sort_order}
                          onChange={(e) => setFormData({...formData, sort_order: parseInt(e.target.value) || 0})}
                          placeholder="排序号（数字越小越靠前）"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="question">问题 *</Label>
                      <Input
                        id="question"
                        value={formData.question}
                        onChange={(e) => setFormData({...formData, question: e.target.value})}
                        placeholder="输入问题"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="answer">答案 *</Label>
                      <Textarea
                        id="answer"
                        value={formData.answer}
                        onChange={(e) => setFormData({...formData, answer: e.target.value})}
                        placeholder="输入答案（支持HTML格式）"
                        rows={8}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="searchable_text">搜索文本</Label>
                      <Textarea
                        id="searchable_text"
                        value={formData.searchable_text}
                        onChange={(e) => setFormData({...formData, searchable_text: e.target.value})}
                        placeholder="用于搜索的文本（可选，纯文本格式）"
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={formData.is_popular}
                          onCheckedChange={(checked) => setFormData({...formData, is_popular: checked})}
                        />
                        <Label>热门问题</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={formData.is_active}
                          onCheckedChange={(checked) => setFormData({...formData, is_active: checked})}
                        />
                        <Label>启用</Label>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        <X className="mr-2 h-4 w-4" />
                        取消
                      </Button>
                      <Button onClick={saveFAQ} disabled={isSubmitting}>
                        <Save className="mr-2 h-4 w-4" />
                        {isSubmitting ? '保存中...' : '保存'}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* 筛选器 */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="搜索问题..."
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
                className="max-w-sm"
              />
            </div>
            <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="选择分类" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部分类</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filters.active} onValueChange={(value) => setFilters({...filters, active: value})}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="状态" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="true">启用</SelectItem>
                <SelectItem value="false">禁用</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* FAQ列表 */}
          {loading ? (
            <div className="text-center py-8">加载中...</div>
          ) : faqs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">暂无FAQ数据</div>
          ) : (
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant={faq.is_active ? 'default' : 'secondary'}>
                            {faq.is_active ? '启用' : '禁用'}
                          </Badge>
                          {faq.is_popular && <Badge variant="destructive">热门</Badge>}
                          <Badge variant="outline">
                            {categories.find(c => c.value === faq.category)?.label}
                          </Badge>
                          <span className="text-sm text-gray-500">排序: {faq.sort_order}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost" 
                          size="sm"
                          onClick={() => toggleFAQStatus(faq.id, 'is_active', !faq.is_active)}
                          title={faq.is_active ? '禁用' : '启用'}
                        >
                          {faq.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => openEditDialog(faq)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          onClick={() => deleteFAQ(faq.id, faq.question)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div 
                      className="text-gray-700 text-sm prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: faq.answer.substring(0, 200) + (faq.answer.length > 200 ? '...' : '') }}
                    />
                    <div className="mt-4 text-xs text-gray-500">
                      创建时间: {new Date(faq.created_at).toLocaleString('zh-CN')} | 
                      更新时间: {new Date(faq.updated_at).toLocaleString('zh-CN')}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* 分页 */}
          {pagination.pages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-6">
              <Button 
                variant="outline" 
                size="sm"
                disabled={pagination.page <= 1}
                onClick={() => setPagination({...pagination, page: pagination.page - 1})}
              >
                上一页
              </Button>
              <span className="text-sm">
                第 {pagination.page} 页，共 {pagination.pages} 页
              </span>
              <Button 
                variant="outline" 
                size="sm"
                disabled={pagination.page >= pagination.pages}
                onClick={() => setPagination({...pagination, page: pagination.page + 1})}
              >
                下一页
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 