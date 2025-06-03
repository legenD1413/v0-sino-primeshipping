'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Eye, EyeOff, LogOut, Users, Mail, Shield, Plus, Edit, Trash2, Database, Server, CheckCircle, XCircle, RefreshCw, FileText, MessageSquare, Search, Calendar, Filter, Clock, ChevronDown, ChevronRight, Download } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import BlogManagement from './components/BlogManagement'

// 模拟用户数据
interface User {
  id: string
  username: string
  email: string
  role: 'admin' | 'user'
  lastLogin: string
}

// Postmark配置接口
interface PostmarkConfig {
  apiToken: string
  fromEmail: string
  replyToEmail: string
  messageStream: string
  toEmail: string          // 收件箱
  ccEmail: string          // 抄送邮箱
  bccEmail: string         // 密抄邮箱
}

// 表单提交记录接口
interface FormSubmission {
  id: number
  full_name: string
  email: string
  company: string
  business_type: string
  description: string
  status: string
  email_sent: boolean
  email_message_id: string
  recipients_to: string
  recipients_cc: string
  recipients_bcc: string
  reply_status: string
  admin_notes: string
  submitted_at: string
  replied_at: string
  updated_at: string
}

export default function SPSAdminPage() {
  // 登录状态管理
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState('')
  
  // 用户管理状态
  const [users, setUsers] = useState<User[]>([
    { 
      id: '1', 
      username: 'admin', 
      email: 'admin@sinoprimeshipping.com', 
      role: 'admin',
      lastLogin: '2024-01-15 14:30:00'
    },
    { 
      id: '2', 
      username: 'user1', 
      email: 'user1@sinoprimeshipping.com', 
      role: 'user',
      lastLogin: '2024-01-14 09:15:00'
    }
  ])
  
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '', role: 'user' as 'admin' | 'user' })
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [passwordReset, setPasswordReset] = useState({ userId: '', newPassword: '' })
  
  // Postmark配置状态
  const [postmarkConfig, setPostmarkConfig] = useState<PostmarkConfig>({
    apiToken: '68ef6c85-6260-4277-8527-530727b0cc22',
    fromEmail: 'noreply@sinoprimeshipping.com',
    replyToEmail: 'support@sinoprimeshipping.com',
    messageStream: 'outbound',
    toEmail: '',                    // 收件箱
    ccEmail: '',                    // 抄送邮箱
    bccEmail: ''                    // 密抄邮箱
  })
  
  const [testEmail, setTestEmail] = useState('')
  const [isTestingEmail, setIsTestingEmail] = useState(false)
  
  // 数据库管理状态
  const [databaseStatus, setDatabaseStatus] = useState<{
    isConnected: boolean
    lastTest: string | null
    connectionInfo: any
    tables: any[]
  }>({
    isConnected: false,
    lastTest: null,
    connectionInfo: null,
    tables: []
  })
  const [isTestingDatabase, setIsTestingDatabase] = useState(false)
  const [isInitializingDatabase, setIsInitializingDatabase] = useState(false)
  
  // 表单管理状态
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([])
  const [formStats, setFormStats] = useState<any>({})
  const [formPagination, setFormPagination] = useState<any>({})
  const [isLoadingForms, setIsLoadingForms] = useState(false)
  const [formFilters, setFormFilters] = useState({
    status: '',
    replyStatus: '',
    businessType: '',
    search: ''
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedForm, setSelectedForm] = useState<FormSubmission | null>(null)
  const [isUpdatingForm, setIsUpdatingForm] = useState(false)
  const [expandedFormId, setExpandedFormId] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("users")
  const [hasLoadedForms, setHasLoadedForms] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  
  const { toast } = useToast()

  // 检查登录状态和加载保存的配置
  useEffect(() => {
    const isAdmin = localStorage.getItem('sps_admin_logged_in')
    if (isAdmin === 'true') {
      setIsLoggedIn(true)
      // 登录后加载数据库中的配置
      loadPostmarkConfig()
      
      // 检查URL中是否有tab参数，如果直接访问blog标签页，需要加载表单数据
      const urlParams = new URLSearchParams(window.location.search)
      const tabParam = urlParams.get('tab')
      if (tabParam) {
        setActiveTab(tabParam)
        if (tabParam === 'forms' && !hasLoadedForms) {
          // 延迟一点确保组件已经渲染
          setTimeout(() => {
            handleLoadFormSubmissions(1)
          }, 500)
        }
      }
    }
    
    // 加载保存的测试邮件地址
    const savedTestEmail = localStorage.getItem('test_email')
    if (savedTestEmail) {
      setTestEmail(savedTestEmail)
    }
  }, [])

  // 从数据库加载Postmark配置
  const loadPostmarkConfig = async () => {
    try {
      const response = await fetch('/api/sps-admin/config')
      const result = await response.json()
      
      if (response.ok && result.success) {
        setPostmarkConfig(result.config)
        
        // 如果使用的是默认配置，显示提示
        if (result.isDefault && result.message) {
          console.log('邮件配置信息:', result.message)
          if (result.message.includes('数据库表尚未初始化')) {
            toast({
              title: "配置提示",
              description: "使用默认邮件配置，建议先初始化数据库",
              variant: "default"
            })
          }
        }
      } else {
        console.error('加载Postmark配置失败:', result.error)
        toast({
          title: "配置加载失败",
          description: result.message || "将使用默认配置",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('加载Postmark配置时出错:', error)
      toast({
        title: "配置加载错误",
        description: "网络错误，将使用默认配置",
        variant: "destructive"
      })
    }
  }

  // 设置认证状态（同时设置localStorage和cookie）
  const setAuthStatus = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
      localStorage.setItem('sps_admin_logged_in', 'true')
      // 设置cookie，有效期24小时
      document.cookie = 'sps_admin_logged_in=true; path=/; max-age=86400; SameSite=Lax'
    } else {
      localStorage.removeItem('sps_admin_logged_in')
      // 删除cookie
      document.cookie = 'sps_admin_logged_in=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax'
    }
  }

  // 登录处理
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    
    // 简单的登录验证（实际项目中应该使用安全的认证系统）
    if (loginForm.username === 'admin' && loginForm.password === 'sps2024!') {
      setIsLoggedIn(true)
      setAuthStatus(true)
      toast({
        title: "登录成功",
        description: "欢迎回到SPS管理后台",
      })
      // 登录成功后检查当前标签页，如果是表单管理则加载数据
      setTimeout(() => {
        if (activeTab === 'forms' && !hasLoadedForms) {
          handleLoadFormSubmissions(1)
        }
      }, 1000)
    } else {
      setLoginError('用户名或密码错误')
    }
  }

  // 登出处理
  const handleLogout = () => {
    setIsLoggedIn(false)
    setAuthStatus(false)
    setLoginForm({ username: '', password: '' })
    toast({
      title: "已登出",
      description: "安全退出管理后台",
    })
  }

  // 添加用户
  const handleAddUser = () => {
    if (!newUser.username || !newUser.email || !newUser.password) {
      toast({
        title: "错误",
        description: "请填写所有必填字段",
        variant: "destructive"
      })
      return
    }

    const user: User = {
      id: Date.now().toString(),
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      lastLogin: '从未登录'
    }

    setUsers([...users, user])
    setNewUser({ username: '', email: '', password: '', role: 'user' })
    
    toast({
      title: "用户创建成功",
      description: `用户 ${user.username} 已成功创建`,
    })
  }

  // 删除用户
  const handleDeleteUser = (userId: string) => {
    if (window.confirm('确定要删除这个用户吗？此操作不可撤销。')) {
      setUsers(users.filter(user => user.id !== userId))
      toast({
        title: "用户已删除",
        description: "用户已成功从系统中移除",
      })
    }
  }

  // 重置密码
  const handlePasswordReset = () => {
    if (!passwordReset.newPassword) {
      toast({
        title: "错误",
        description: "请输入新密码",
        variant: "destructive"
      })
      return
    }

    toast({
      title: "密码重置成功",
      description: "用户密码已成功重置",
    })
    setPasswordReset({ userId: '', newPassword: '' })
  }

  // 保存Postmark配置
  const handleSavePostmarkConfig = async () => {
    try {
      const response = await fetch('/api/sps-admin/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postmarkConfig)
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast({
          title: "配置已保存",
          description: "Postmark邮件系统配置已成功更新到数据库",
        })
      } else {
        toast({
          title: "保存失败",
          description: result.error || "保存配置时出错",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('保存Postmark配置时出错:', error)
      toast({
        title: "保存失败",
        description: "网络错误，请检查连接后重试",
        variant: "destructive"
      })
    }
  }

  // 测试邮件发送
  const handleTestEmail = async () => {
    if (!testEmail) {
      toast({
        title: "错误",
        description: "请输入测试邮件地址",
        variant: "destructive"
      })
      return
    }

    setIsTestingEmail(true)
    
    try {
      const response = await fetch('/api/postmark/send-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...postmarkConfig,
          testEmail
        })
      })

      const result = await response.json()

      if (response.ok) {
        // 构造收件人详情描述
        let recipientDetails = `主收件人: ${result.recipients?.to || testEmail}`
        if (result.recipients?.cc && result.recipients.cc.length > 0) {
          recipientDetails += `\n抄送: ${result.recipients.cc.join(', ')}`
        }
        if (result.recipients?.bcc) {
          recipientDetails += `\n密抄: ${result.recipients.bcc}`
        }
        recipientDetails += `\n总收件人: ${result.recipients?.total || 1} 人`
        
        toast({
          title: "测试邮件发送成功",
          description: recipientDetails,
        })
      } else {
        toast({
          title: "发送失败",
          description: result.details || result.error || "发送测试邮件时出错",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('发送测试邮件时出错:', error)
      toast({
        title: "发送失败",
        description: "网络错误，请检查您的连接后重试",
        variant: "destructive"
      })
    } finally {
      setIsTestingEmail(false)
    }
  }

  // 测试数据库连接
  const handleTestDatabase = async () => {
    setIsTestingDatabase(true)
    
    try {
      const response = await fetch('/api/sps-admin/database/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setDatabaseStatus({
          isConnected: true,
          lastTest: new Date().toLocaleString('zh-CN'),
          connectionInfo: result.data,
          tables: databaseStatus.tables
        })
        
        toast({
          title: "数据库连接成功",
          description: result.message,
        })
        
        // 同时获取表信息
        handleGetDatabaseTables()
      } else {
        setDatabaseStatus({
          isConnected: false,
          lastTest: new Date().toLocaleString('zh-CN'),
          connectionInfo: null,
          tables: []
        })
        
        toast({
          title: "数据库连接失败",
          description: result.error || result.message,
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('测试数据库连接时出错:', error)
      setDatabaseStatus({
        isConnected: false,
        lastTest: new Date().toLocaleString('zh-CN'),
        connectionInfo: null,
        tables: []
      })
      
      toast({
        title: "连接失败",
        description: "网络错误，请检查您的连接后重试",
        variant: "destructive"
      })
    } finally {
      setIsTestingDatabase(false)
    }
  }

  // 获取数据库表信息
  const handleGetDatabaseTables = async () => {
    try {
      const response = await fetch('/api/sps-admin/database/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setDatabaseStatus(prev => ({
          ...prev,
          tables: result.tables || []
        }))
      }
    } catch (error) {
      console.error('获取数据库表信息时出错:', error)
    }
  }

  // 初始化数据库
  const handleInitializeDatabase = async () => {
    if (!window.confirm('确定要初始化数据库吗？这将创建必要的表结构。')) {
      return
    }
    
    setIsInitializingDatabase(true)
    
    try {
      const response = await fetch('/api/sps-admin/database/init', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast({
          title: "数据库初始化成功",
          description: result.message,
        })
        
        // 重新获取表信息
        handleGetDatabaseTables()
      } else {
        toast({
          title: "数据库初始化失败",
          description: result.error || result.message,
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('初始化数据库时出错:', error)
      toast({
        title: "初始化失败",
        description: "网络错误，请检查您的连接后重试",
        variant: "destructive"
      })
    } finally {
      setIsInitializingDatabase(false)
    }
  }

  // 初始化表单数据库表
  const handleInitializeFormsTable = async () => {
    if (!window.confirm('确定要初始化表单数据表吗？这将创建表单提交记录表。')) {
      return
    }
    
    setIsInitializingDatabase(true)
    
    try {
      const response = await fetch('/api/sps-admin/database/init-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast({
          title: "表单数据表初始化成功",
          description: result.message,
        })
        
        // 重新获取表信息
        handleGetDatabaseTables()
        // 加载表单数据
        handleLoadFormSubmissions()
      } else {
        toast({
          title: "表单数据表初始化失败",
          description: result.error || result.message,
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('初始化表单数据表时出错:', error)
      toast({
        title: "初始化失败",
        description: "网络错误，请检查您的连接后重试",
        variant: "destructive"
      })
    } finally {
      setIsInitializingDatabase(false)
    }
  }

  // 加载表单提交记录
  const handleLoadFormSubmissions = async (page = 1) => {
    setIsLoadingForms(true)
    
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20'
      })
      
      if (formFilters.status) params.append('status', formFilters.status)
      if (formFilters.replyStatus) params.append('replyStatus', formFilters.replyStatus)
      if (formFilters.businessType) params.append('businessType', formFilters.businessType)
      if (formFilters.search) params.append('search', formFilters.search)

      const response = await fetch(`/api/sps-admin/forms?${params.toString()}`)
      const result = await response.json()

      if (response.ok && result.success) {
        setFormSubmissions(result.data)
        setFormStats(result.stats)
        setFormPagination(result.pagination)
        setCurrentPage(page)
        setHasLoadedForms(true)
      } else {
        toast({
          title: "加载表单数据失败",
          description: result.error || "请稍后重试",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('加载表单数据时出错:', error)
      toast({
        title: "加载失败",
        description: "网络错误，请检查您的连接后重试",
        variant: "destructive"
      })
    } finally {
      setIsLoadingForms(false)
    }
  }

  // 更新表单状态
  const handleUpdateFormStatus = async (formId: number, updates: any) => {
    setIsUpdatingForm(true)
    
    try {
      const response = await fetch('/api/sps-admin/forms', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: formId,
          ...updates
        })
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast({
          title: "更新成功",
          description: result.message,
        })
        
        // 重新加载数据
        handleLoadFormSubmissions(currentPage)
        setSelectedForm(null)
      } else {
        toast({
          title: "更新失败",
          description: result.error || "请稍后重试",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('更新表单状态时出错:', error)
      toast({
        title: "更新失败",
        description: "网络错误，请检查您的连接后重试",
        variant: "destructive"
      })
    } finally {
      setIsUpdatingForm(false)
    }
  }

  // 删除表单记录
  const handleDeleteForm = async (formId: number) => {
    if (!window.confirm('确定要删除这条表单记录吗？此操作不可撤销。')) {
      return
    }
    
    try {
      const response = await fetch(`/api/sps-admin/forms?id=${formId}`, {
        method: 'DELETE'
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast({
          title: "删除成功",
          description: result.message,
        })
        
        // 重新加载数据
        handleLoadFormSubmissions(currentPage)
      } else {
        toast({
          title: "删除失败",
          description: result.error || "请稍后重试",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('删除表单记录时出错:', error)
      toast({
        title: "删除失败",
        description: "网络错误，请检查您的连接后重试",
        variant: "destructive"
      })
    }
  }

  // 导出Excel文件
  const handleExportExcel = async () => {
    setIsExporting(true)
    
    try {
      toast({
        title: "开始导出",
        description: "正在生成Excel文件，请稍候...",
      })

      const response = await fetch('/api/sps-admin/forms/export', {
        method: 'GET'
      })

      if (!response.ok) {
        const errorResult = await response.json()
        throw new Error(errorResult.error || '导出失败')
      }

      // 获取文件名（从响应头中获取，如果没有则使用默认名称）
      const contentDisposition = response.headers.get('content-disposition')
      let fileName = 'SPS_申请表单数据.xlsx'
      
      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)
        if (fileNameMatch && fileNameMatch[1]) {
          fileName = decodeURIComponent(fileNameMatch[1].replace(/['"]/g, ''))
        }
      }

      // 创建下载链接
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      
      // 触发下载
      document.body.appendChild(link)
      link.click()
      
      // 清理
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast({
        title: "导出成功",
        description: `Excel文件已下载：${fileName}`,
      })

    } catch (error) {
      console.error('导出Excel时出错:', error)
      toast({
        title: "导出失败",
        description: error instanceof Error ? error.message : "导出Excel时出现错误，请稍后重试",
        variant: "destructive"
      })
    } finally {
      setIsExporting(false)
    }
  }

  // 登录表单
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-fit">
              <Shield className="h-10 w-10 text-blue-600" />
            </div>
            <CardTitle className="text-3xl font-bold">SPS 管理后台</CardTitle>
            <CardDescription className="text-base">
              请输入管理员凭据以访问系统
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="username" className="text-base">用户名</Label>
                <Input
                  id="username"
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                  placeholder="请输入用户名"
                  required
                  className="h-12 text-base"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="password" className="text-base">密码</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    placeholder="请输入密码"
                    required
                    className="h-12 text-base pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
              
              {loginError && (
                <Alert variant="destructive">
                  <AlertDescription className="text-base">{loginError}</AlertDescription>
                </Alert>
              )}
              
              <Button type="submit" className="w-full h-12 text-base">
                登录
              </Button>
            </form>
            
            <div className="mt-8 text-base text-gray-600 text-center">
              <p>默认管理员账户：</p>
              <p>用户名: admin / 密码: sps2024!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // 管理界面
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-full mx-auto px-4">
        {/* 头部 */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">SPS 管理后台</h1>
            <p className="text-lg text-gray-600 mt-2">新普瑞姆国际货运管理系统</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2 px-6 py-3 text-base">
            <LogOut className="h-5 w-5" />
            登出
          </Button>
        </div>

        {/* 主要内容 */}
        <Tabs 
          value={activeTab}
          defaultValue="users" 
          className="space-y-8"
          onValueChange={(value) => {
            setActiveTab(value)
            // 当切换到表单管理标签页时自动加载数据
            if (value === "forms" && !hasLoadedForms) {
              toast({
                title: "正在加载表单数据",
                description: "首次加载可能需要几秒钟...",
              })
              handleLoadFormSubmissions(1)
            }
          }}
        >
          <TabsList className="grid w-full grid-cols-5 h-14">
            <TabsTrigger value="users" className="flex items-center gap-2 text-base px-6 py-3">
              <Users className="h-5 w-5" />
              用户管理
            </TabsTrigger>
            <TabsTrigger value="forms" className="flex items-center gap-2 text-base px-6 py-3">
              <FileText className="h-5 w-5" />
              表单管理
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2 text-base px-6 py-3">
              <MessageSquare className="h-5 w-5" />
              博客管理
            </TabsTrigger>
            <TabsTrigger value="postmark" className="flex items-center gap-2 text-base px-6 py-3">
              <Mail className="h-5 w-5" />
              邮件系统
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2 text-base px-6 py-3">
              <Database className="h-5 w-5" />
              数据库管理
            </TabsTrigger>
          </TabsList>

          {/* 用户管理标签页 */}
          <TabsContent value="users" className="space-y-8">
            {/* 添加新用户 */}
            <Card>
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Plus className="h-6 w-6" />
                  添加新用户
                </CardTitle>
                <CardDescription className="text-base">
                  创建新的系统用户账户
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="new-username">用户名</Label>
                    <Input
                      id="new-username"
                      value={newUser.username}
                      onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                      placeholder="输入用户名"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-email">邮箱</Label>
                    <Input
                      id="new-email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                      placeholder="输入邮箱地址"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">密码</Label>
                    <Input
                      id="new-password"
                      type="password"
                      value={newUser.password}
                      onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                      placeholder="输入密码"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-role">角色</Label>
                    <select
                      id="new-role"
                      value={newUser.role}
                      onChange={(e) => setNewUser({...newUser, role: e.target.value as 'admin' | 'user'})}
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="user">普通用户</option>
                      <option value="admin">管理员</option>
                    </select>
                  </div>
                </div>
                                  <Button onClick={handleAddUser} className="mt-6 px-6 py-3 text-base">
                  添加用户
                </Button>
              </CardContent>
            </Card>

            {/* 用户列表 */}
            <Card>
              <CardHeader className="pb-6">
                <CardTitle className="text-xl">现有用户</CardTitle>
                <CardDescription className="text-base">
                  管理系统中的所有用户账户
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-6 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-6">
                          <div>
                            <h3 className="font-medium text-lg">{user.username}</h3>
                            <p className="text-base text-gray-600">{user.email}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              user.role === 'admin' 
                                ? 'bg-red-100 text-red-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {user.role === 'admin' ? '管理员' : '普通用户'}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          最后登录: {user.lastLogin}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setPasswordReset({userId: user.id, newPassword: ''})}
                        >
                          <Edit className="h-4 w-4" />
                          重置密码
                        </Button>
                        {user.id !== '1' && ( // 防止删除主管理员
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                            删除
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 密码重置区域 */}
            {passwordReset.userId && (
              <Card>
                <CardHeader>
                  <CardTitle>重置用户密码</CardTitle>
                  <CardDescription>
                    为选定用户设置新密码
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 items-end">
                    <div className="flex-1 space-y-2">
                      <Label htmlFor="reset-password">新密码</Label>
                      <Input
                        id="reset-password"
                        type="password"
                        value={passwordReset.newPassword}
                        onChange={(e) => setPasswordReset({...passwordReset, newPassword: e.target.value})}
                        placeholder="输入新密码"
                      />
                    </div>
                    <Button onClick={handlePasswordReset}>
                      重置密码
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setPasswordReset({userId: '', newPassword: ''})}
                    >
                      取消
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* 表单管理标签页 */}
          <TabsContent value="forms" className="space-y-8">
            {/* 统计概览 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-100 rounded-lg mr-6">
                      <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-600">总申请数</p>
                      <p className="text-3xl font-bold">{formStats.total || 0}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center">
                    <div className="p-3 bg-yellow-100 rounded-lg mr-6">
                      <Clock className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-600">待处理</p>
                      <p className="text-3xl font-bold">{formStats.pending || 0}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-100 rounded-lg mr-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-600">已回复</p>
                      <p className="text-3xl font-bold">{formStats.replied || 0}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center">
                    <div className="p-3 bg-purple-100 rounded-lg mr-6">
                      <Mail className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-600">邮件已发送</p>
                      <p className="text-3xl font-bold">{formStats.email_sent || 0}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 筛选和搜索 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  筛选和搜索
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <Label>搜索</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="搜索姓名、邮箱或公司"
                        value={formFilters.search}
                        onChange={(e) => setFormFilters({...formFilters, search: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>申请状态</Label>
                    <select
                      value={formFilters.status}
                      onChange={(e) => setFormFilters({...formFilters, status: e.target.value})}
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">全部状态</option>
                      <option value="pending">待处理</option>
                      <option value="processing">处理中</option>
                      <option value="approved">已通过</option>
                      <option value="rejected">已拒绝</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label>回复状态</Label>
                    <select
                      value={formFilters.replyStatus}
                      onChange={(e) => setFormFilters({...formFilters, replyStatus: e.target.value})}
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">全部回复状态</option>
                      <option value="no_reply">未回复</option>
                      <option value="replied">已回复</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label>业务类型</Label>
                    <select
                      value={formFilters.businessType}
                      onChange={(e) => setFormFilters({...formFilters, businessType: e.target.value})}
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">全部类型</option>
                      <option value="tiktok">TikTok销售商</option>
                      <option value="kickstarter">Kickstarter创作者</option>
                      <option value="indiegogo">Indiegogo创作者</option>
                      <option value="ecommerce">电商品牌</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  <Button 
                    onClick={() => handleLoadFormSubmissions(1)}
                    disabled={isLoadingForms}
                  >
                    {isLoadingForms ? "搜索中..." : "搜索"}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setFormFilters({status: '', replyStatus: '', businessType: '', search: ''})
                      handleLoadFormSubmissions(1)
                    }}
                  >
                    重置
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleExportExcel}
                    disabled={isExporting}
                    className="flex items-center gap-2"
                  >
                    {isExporting ? (
                      <RefreshCw className="h-4 w-4 animate-spin" />
                    ) : (
                      <Download className="h-4 w-4" />
                    )}
                    {isExporting ? "导出中..." : "导出Excel"}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleInitializeFormsTable}
                    disabled={isInitializingDatabase}
                  >
                    {isInitializingDatabase ? "初始化中..." : "初始化表单数据表"}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleLoadFormSubmissions(1)}
                    disabled={isLoadingForms}
                  >
                    {isLoadingForms ? "刷新中..." : "刷新数据"}
                  </Button>
                  {hasLoadedForms && (
                    <span className="text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      数据已加载
                    </span>
                  )}
                  <Button 
                    variant="outline"
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/debug/check-forms')
                        const result = await response.json()
                        console.log('调试结果:', result)
                        alert(response.ok ? '调试完成，请查看控制台' : `错误: ${result.error}`)
                      } catch (error) {
                        console.error('调试失败:', error)
                        alert('调试失败')
                      }
                    }}
                  >
                    调试检查
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/debug/test-form-submit', { method: 'POST' })
                        const result = await response.json()
                        console.log('测试提交结果:', result)
                        alert(response.ok ? '测试数据插入成功，请刷新' : `错误: ${result.error}`)
                        if (response.ok) {
                          handleLoadFormSubmissions(1)
                        }
                      } catch (error) {
                        console.error('测试提交失败:', error)
                        alert('测试提交失败')
                      }
                    }}
                  >
                    测试提交
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/debug/check-form-data')
                        const result = await response.json()
                        console.log('表单数据调试结果:', result)
                        if (response.ok && result.success) {
                          console.table(result.data.recentForms)
                          alert(`数据查询成功！
总记录: ${result.data.stats.total}
邮件已发送: ${result.data.stats.email_sent_count}
有收件人信息: ${result.data.stats.has_recipients_count}
详细信息请查看控制台`)
                        } else {
                          alert(`查询失败: ${result.error}`)
                        }
                      } catch (error) {
                        console.error('查询表单数据失败:', error)
                        alert('查询失败')
                      }
                    }}
                  >
                    查看表单数据
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 表单列表 */}
            <Card>
              <CardHeader className="pb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl">申请表单列表</CardTitle>
                    <CardDescription className="text-base">
                      管理所有的SPS 19 Pioneer项目申请
                    </CardDescription>
                  </div>
                  <Button 
                    onClick={handleExportExcel}
                    disabled={isExporting || formSubmissions.length === 0}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                  >
                    {isExporting ? (
                      <RefreshCw className="h-4 w-4 animate-spin" />
                    ) : (
                      <Download className="h-4 w-4" />
                    )}
                    {isExporting ? "导出中..." : "导出全部数据"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {isLoadingForms ? (
                  <div className="text-center py-8">
                    <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
                    <p>加载中...</p>
                  </div>
                ) : formSubmissions.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>暂无表单记录</p>
                    <p className="text-sm">请先初始化表单数据表</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* 表格 */}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">姓名</th>
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">邮箱</th>
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">公司</th>
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">业务类型</th>
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">申请状态</th>
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">回复状态</th>
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">邮件状态</th>
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">提交时间</th>
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-900">操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          {formSubmissions.map((form) => (
                            <React.Fragment key={form.id}>
                              <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => setExpandedFormId(expandedFormId === form.id ? null : form.id)}>
                                <td className="border border-gray-200 px-4 py-3">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-900">{form.full_name}</span>
                                    {expandedFormId === form.id ? (
                                      <ChevronDown className="h-4 w-4 text-gray-400" />
                                    ) : (
                                      <ChevronRight className="h-4 w-4 text-gray-400" />
                                    )}
                                  </div>
                                </td>
                                <td className="border border-gray-200 px-4 py-3">
                                  <span className="text-gray-600">{form.email}</span>
                                </td>
                                <td className="border border-gray-200 px-4 py-3">
                                  <span className="text-gray-600">{form.company}</span>
                                </td>
                                <td className="border border-gray-200 px-4 py-3">
                                  <span className="text-gray-600">
                                    {form.business_type === 'tiktok' ? 'TikTok销售商' :
                                     form.business_type === 'kickstarter' ? 'Kickstarter创作者' :
                                     form.business_type === 'indiegogo' ? 'Indiegogo创作者' :
                                     form.business_type === 'ecommerce' ? '电商品牌' :
                                     '其他'}
                                  </span>
                                </td>
                                <td className="border border-gray-200 px-4 py-3">
                                  <Badge variant={
                                    form.status === 'pending' ? 'default' :
                                    form.status === 'processing' ? 'secondary' :
                                    form.status === 'approved' ? 'default' :
                                    'destructive'
                                  }>
                                    {form.status === 'pending' ? '待处理' :
                                     form.status === 'processing' ? '处理中' :
                                     form.status === 'approved' ? '已通过' :
                                     form.status === 'rejected' ? '已拒绝' : form.status}
                                  </Badge>
                                </td>
                                <td className="border border-gray-200 px-4 py-3">
                                  <Badge variant={form.reply_status === 'replied' ? 'default' : 'secondary'}>
                                    {form.reply_status === 'replied' ? '已回复' : '未回复'}
                                  </Badge>
                                </td>
                                <td className="border border-gray-200 px-4 py-3">
                                  {form.email_sent ? (
                                    <Badge variant="outline" className="text-green-600">
                                      <Mail className="h-3 w-3 mr-1" />
                                      邮件已发送
                                    </Badge>
                                  ) : (
                                    <Badge variant="outline" className="text-orange-600">
                                      <XCircle className="h-3 w-3 mr-1" />
                                      未发送
                                    </Badge>
                                  )}
                                </td>
                                <td className="border border-gray-200 px-4 py-3">
                                  <span className="text-sm text-gray-500">
                                    {new Date(form.submitted_at).toLocaleString('zh-CN')}
                                  </span>
                                </td>
                                <td className="border border-gray-200 px-4 py-3" onClick={(e) => e.stopPropagation()}>
                                  <div className="flex gap-2">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => setSelectedForm(form)}
                                      className="text-xs"
                                    >
                                      <Edit className="h-3 w-3 mr-1" />
                                      编辑
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleDeleteForm(form.id)}
                                      className="text-red-600 hover:text-red-700 text-xs"
                                    >
                                      <Trash2 className="h-3 w-3 mr-1" />
                                      删除
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                              {/* 展开的详细信息行 */}
                              {expandedFormId === form.id && (
                                <tr>
                                  <td colSpan={9} className="border border-gray-200 bg-gray-50 px-4 py-4">
                                    <div className="space-y-4">
                                      <div>
                                        <h4 className="font-medium text-gray-900 mb-2">业务描述:</h4>
                                        <p className="text-gray-600 text-sm">{form.description}</p>
                                      </div>
                                      
                                      {form.email_sent && (form.recipients_to || form.recipients_cc || form.recipients_bcc) && (
                                        <div>
                                          <h4 className="font-medium text-gray-900 mb-2">实际邮件收件人:</h4>
                                          <div className="text-sm text-gray-600 space-y-1">
                                            {form.recipients_to && <p><strong>主收件人:</strong> {form.recipients_to}</p>}
                                            {form.recipients_cc && <p><strong>抄送:</strong> {form.recipients_cc}</p>}
                                            {form.recipients_bcc && <p><strong>密抄:</strong> {form.recipients_bcc}</p>}
                                            {form.email_message_id && <p><strong>邮件ID:</strong> {form.email_message_id}</p>}
                                          </div>
                                        </div>
                                      )}
                                      
                                      {form.admin_notes && (
                                        <div>
                                          <h4 className="font-medium text-gray-900 mb-2">管理员备注:</h4>
                                          <div className="bg-blue-50 p-3 rounded">
                                            <p className="text-blue-800 text-sm">{form.admin_notes}</p>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </td>
                                                                 </tr>
                               )}
                             </React.Fragment>
                           ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* 分页 */}
                    {formPagination.totalPages > 1 && (
                      <div className="flex justify-between items-center mt-6">
                        <div className="text-sm text-gray-600">
                          显示第 {(currentPage - 1) * (formPagination.limit || 20) + 1} - {Math.min(currentPage * (formPagination.limit || 20), formPagination.totalCount)} 条，
                          共 {formPagination.totalCount} 条记录
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleLoadFormSubmissions(currentPage - 1)}
                            disabled={!formPagination.hasPrev || isLoadingForms}
                          >
                            上一页
                          </Button>
                          <span className="px-3 py-1 text-sm">
                            第 {currentPage} / {formPagination.totalPages} 页
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleLoadFormSubmissions(currentPage + 1)}
                            disabled={!formPagination.hasNext || isLoadingForms}
                          >
                            下一页
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 编辑表单弹窗 */}
            {selectedForm && (
              <Card>
                <CardHeader>
                  <CardTitle>编辑申请状态和备注</CardTitle>
                  <CardDescription>
                    更新 {selectedForm.full_name} 的申请状态
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label>申请状态</Label>
                      <select
                        id="edit-status"
                        defaultValue={selectedForm.status}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="pending">待处理</option>
                        <option value="processing">处理中</option>
                        <option value="approved">已通过</option>
                        <option value="rejected">已拒绝</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label>回复状态</Label>
                      <select
                        id="edit-reply-status"
                        defaultValue={selectedForm.reply_status}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="no_reply">未回复</option>
                        <option value="replied">已回复</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Label>管理员备注</Label>
                    <Textarea
                      id="edit-notes"
                      defaultValue={selectedForm.admin_notes}
                      placeholder="添加管理员备注..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      onClick={() => {
                        const statusSelect = document.getElementById('edit-status') as HTMLSelectElement
                        const replyStatusSelect = document.getElementById('edit-reply-status') as HTMLSelectElement
                        const notesTextarea = document.getElementById('edit-notes') as HTMLTextAreaElement
                        
                        handleUpdateFormStatus(selectedForm.id, {
                          status: statusSelect.value,
                          replyStatus: replyStatusSelect.value,
                          adminNotes: notesTextarea.value
                        })
                      }}
                      disabled={isUpdatingForm}
                    >
                      {isUpdatingForm ? "更新中..." : "更新状态"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedForm(null)}
                    >
                      取消
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* 博客管理标签页 */}
          <TabsContent value="blog" className="space-y-8">
            <BlogManagement />
          </TabsContent>

          {/* Postmark邮件系统标签页 */}
          <TabsContent value="postmark" className="space-y-8">
            <Card>
              <CardHeader className="pb-8">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Mail className="h-6 w-6" />
                  Postmark 邮件系统配置
                </CardTitle>
                <CardDescription className="text-base">
                  配置Postmark邮件服务的相关参数
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="api-token">API 令牌</Label>
                    <Input
                      id="api-token"
                      value={postmarkConfig.apiToken}
                      onChange={(e) => setPostmarkConfig({...postmarkConfig, apiToken: e.target.value})}
                      placeholder="输入Postmark API令牌"
                      className="font-mono text-sm"
                    />
                    <p className="text-xs text-gray-500">
                      从Postmark控制台获取的服务器API令牌
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="from-email">发件人邮箱</Label>
                    <Input
                      id="from-email"
                      type="email"
                      value={postmarkConfig.fromEmail}
                      onChange={(e) => setPostmarkConfig({...postmarkConfig, fromEmail: e.target.value})}
                      placeholder="noreply@yourcompany.com"
                    />
                    <p className="text-xs text-gray-500">
                      邮件的默认发送地址
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reply-email">回复邮箱</Label>
                    <Input
                      id="reply-email"
                      type="email"
                      value={postmarkConfig.replyToEmail}
                      onChange={(e) => setPostmarkConfig({...postmarkConfig, replyToEmail: e.target.value})}
                      placeholder="support@yourcompany.com"
                    />
                    <p className="text-xs text-gray-500">
                      用户回复邮件时的接收地址
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message-stream">消息流</Label>
                    <Input
                      id="message-stream"
                      value={postmarkConfig.messageStream}
                      onChange={(e) => setPostmarkConfig({...postmarkConfig, messageStream: e.target.value})}
                      placeholder="outbound"
                    />
                    <p className="text-xs text-gray-500">
                      Postmark消息流标识符
                    </p>
                  </div>
                </div>

                {/* 邮件接收者配置 */}
                <Separator />
                <div className="space-y-4">
                  <h4 className="text-lg font-medium">邮件接收者配置</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="to-email">收件箱</Label>
                      <Input
                        id="to-email"
                        type="email"
                        value={postmarkConfig.toEmail}
                        onChange={(e) => setPostmarkConfig({...postmarkConfig, toEmail: e.target.value})}
                        placeholder="recipient@company.com"
                      />
                      <p className="text-xs text-gray-500">
                        主要收件人邮箱地址
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cc-email">抄送邮箱 (CC)</Label>
                      <Input
                        id="cc-email"
                        type="email"
                        value={postmarkConfig.ccEmail}
                        onChange={(e) => setPostmarkConfig({...postmarkConfig, ccEmail: e.target.value})}
                        placeholder="cc@company.com"
                      />
                      <p className="text-xs text-gray-500">
                        抄送收件人邮箱地址（可选）
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bcc-email">密抄邮箱 (BCC)</Label>
                      <Input
                        id="bcc-email"
                        type="email"
                        value={postmarkConfig.bccEmail}
                        onChange={(e) => setPostmarkConfig({...postmarkConfig, bccEmail: e.target.value})}
                        placeholder="bcc@company.com"
                      />
                      <p className="text-xs text-gray-500">
                        密抄收件人邮箱地址（可选）
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  {/* 测试邮件地址输入 */}
                  <div className="space-y-2">
                    <Label htmlFor="test-email">测试邮件地址</Label>
                    <Input
                      id="test-email"
                      type="email"
                      value={testEmail}
                      onChange={(e) => {
                        const newValue = e.target.value
                        setTestEmail(newValue)
                        // 实时保存测试邮件地址到localStorage
                        localStorage.setItem('test_email', newValue)
                      }}
                      placeholder="输入要接收测试邮件的地址"
                    />
                    <p className="text-xs text-gray-500">
                      输入您的邮箱地址以接收测试邮件
                    </p>
                  </div>

                                  <div className="flex gap-4">
                  <Button onClick={handleSavePostmarkConfig}>
                    保存配置
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleTestEmail}
                    disabled={isTestingEmail}
                  >
                    {isTestingEmail ? "发送中..." : "发送测试邮件"}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={loadPostmarkConfig}
                  >
                    重新加载配置
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/sps-admin/database/init', {
                          method: 'POST'
                        })
                        const result = await response.json()
                        
                        if (response.ok && result.success) {
                          toast({
                            title: "数据库初始化成功",
                            description: "配置表已创建，正在重新加载配置",
                          })
                          setTimeout(() => loadPostmarkConfig(), 1000)
                        } else {
                          toast({
                            title: "初始化失败",
                            description: result.error || "请稍后重试",
                            variant: "destructive"
                          })
                        }
                      } catch (error) {
                        console.error('初始化数据库时出错:', error)
                        toast({
                          title: "初始化失败",
                          description: "网络错误，请检查连接",
                          variant: "destructive"
                        })
                      }
                    }}
                  >
                    初始化配置表
                  </Button>
                </div>
                </div>

                {/* 配置预览 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">当前配置预览</h4>
                  <div className="text-sm space-y-1 text-gray-600">
                    <p><strong>API令牌:</strong> {postmarkConfig.apiToken ? '已配置' : '未配置'}</p>
                    <p><strong>发件人:</strong> {postmarkConfig.fromEmail}</p>
                    <p><strong>回复地址:</strong> {postmarkConfig.replyToEmail}</p>
                    <p><strong>消息流:</strong> {postmarkConfig.messageStream}</p>
                    <p><strong>收件箱:</strong> {postmarkConfig.toEmail || '未设置'}</p>
                    <p><strong>抄送邮箱:</strong> {postmarkConfig.ccEmail || '未设置'}</p>
                    <p><strong>密抄邮箱:</strong> {postmarkConfig.bccEmail || '未设置'}</p>
                  </div>
                </div>

                {/* 使用说明 */}
                <Alert>
                  <Mail className="h-4 w-4" />
                  <AlertDescription>
                    <strong>配置说明：</strong>
                    <br />
                    1. API令牌需要从Postmark控制台获取
                    <br />
                    2. 发件人邮箱必须是已验证的域名
                    <br />
                    3. 收件箱是邮件的主要收件人（可选，留空将发送到测试邮箱）
                    <br />
                    4. 抄送和密抄邮箱为可选字段，支持多个收件人配置
                    <br />
                    5. 确保域名DNS记录已正确配置
                    <br />
                    6. 建议先发送测试邮件验证配置
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 数据库管理标签页 */}
          <TabsContent value="database" className="space-y-8">
            {/* 数据库连接状态 */}
            <Card>
              <CardHeader className="pb-8">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Server className="h-6 w-6" />
                  数据库连接状态
                </CardTitle>
                <CardDescription className="text-base">
                  检查和测试PostgreSQL数据库连接
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-8">
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm ${
                    databaseStatus.isConnected 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {databaseStatus.isConnected ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <XCircle className="h-4 w-4" />
                    )}
                    {databaseStatus.isConnected ? '已连接' : '未连接'}
                  </div>
                  
                  {databaseStatus.lastTest && (
                    <span className="text-sm text-gray-500">
                      最后测试: {databaseStatus.lastTest}
                    </span>
                  )}
                </div>

                <div className="flex gap-6">
                  <Button 
                    onClick={handleTestDatabase}
                    disabled={isTestingDatabase}
                    className="flex items-center gap-2 px-6 py-3 text-base"
                  >
                    {isTestingDatabase ? (
                      <RefreshCw className="h-5 w-5 animate-spin" />
                    ) : (
                      <Database className="h-5 w-5" />
                    )}
                    {isTestingDatabase ? "测试中..." : "测试连接"}
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={handleInitializeDatabase}
                    disabled={isInitializingDatabase || !databaseStatus.isConnected}
                    className="flex items-center gap-2 px-6 py-3 text-base"
                  >
                    {isInitializingDatabase ? (
                      <RefreshCw className="h-5 w-5 animate-spin" />
                    ) : (
                      <Server className="h-5 w-5" />
                    )}
                    {isInitializingDatabase ? "初始化中..." : "初始化数据库"}
                  </Button>
                </div>

                {/* 连接信息 */}
                {databaseStatus.connectionInfo && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">连接信息</h4>
                    <div className="text-sm space-y-1 text-gray-600">
                      <p><strong>当前时间:</strong> {new Date(databaseStatus.connectionInfo.currentTime).toLocaleString('zh-CN')}</p>
                      <p><strong>数据库版本:</strong> {databaseStatus.connectionInfo.version}</p>
                      <p><strong>表数量:</strong> {databaseStatus.connectionInfo.totalTables}</p>
                      <p><strong>连接配置:</strong> {databaseStatus.connectionInfo.connectionString}</p>
                      <p><strong>连接池状态:</strong> 总连接: {databaseStatus.connectionInfo.poolStats?.totalCount}, 空闲: {databaseStatus.connectionInfo.poolStats?.idleCount}, 等待: {databaseStatus.connectionInfo.poolStats?.waitingCount}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 数据库表信息 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  数据库表信息
                </CardTitle>
                <CardDescription>
                  查看当前数据库中的所有表
                </CardDescription>
              </CardHeader>
              <CardContent>
                {databaseStatus.tables.length > 0 ? (
                  <div className="space-y-4">
                    <div className="grid gap-4">
                      {databaseStatus.tables.map((table: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{table.table_name}</h4>
                            <p className="text-sm text-gray-600">
                              类型: {table.table_type} | 可插入: {table.is_insertable_into}
                            </p>
                          </div>
                          <div className="text-sm text-gray-500">
                            表
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Database className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>暂无表信息</p>
                    <p className="text-sm">请先测试数据库连接</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 数据库配置说明 */}
            <Alert>
              <Database className="h-4 w-4" />
              <AlertDescription>
                <strong>数据库配置说明：</strong>
                <br />
                1. 确保环境变量 DATABASE_URL 已正确配置
                <br />
                2. 数据库连接使用 SSL 加密传输
                <br />
                3. 初始化操作将创建用户表和配置表
                <br />
                4. 建议定期备份数据库数据
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
} 