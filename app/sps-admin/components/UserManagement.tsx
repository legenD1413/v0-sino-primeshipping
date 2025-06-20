'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Key, 
  Eye, 
  EyeOff, 
  Shield, 
  User, 
  Mail, 
  Calendar,
  Search,
  RefreshCw
} from 'lucide-react'

// 用户接口定义
interface User {
  id: string
  username: string
  email: string
  role: 'admin' | 'user'
  lastLogin: string
  createdAt?: string
  isActive?: boolean
}

// 用户表单接口
interface UserForm {
  username: string
  email: string
  password: string
  role: 'admin' | 'user'
}

// 密码修改表单接口
interface PasswordForm {
  userId: string
  newPassword: string
  confirmPassword: string
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  
  // 对话框状态
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  
  // 表单状态
  const [userForm, setUserForm] = useState<UserForm>({
    username: '',
    email: '',
    password: '',
    role: 'user'
  })
  
  const [passwordForm, setPasswordForm] = useState<PasswordForm>({
    userId: '',
    newPassword: '',
    confirmPassword: ''
  })
  
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [deletingUser, setDeletingUser] = useState<User | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const { toast } = useToast()

  // 组件挂载时加载用户列表
  useEffect(() => {
    loadUsers()
  }, [])

  // 初始化数据库
  const initializeDatabase = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/sps-admin/database/init-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      const data = await response.json()
      
      if (response.ok) {
        toast({
          title: "初始化成功",
          description: data.message,
        })
        // 稍微延迟后重新加载用户列表，确保数据库操作完成
        setTimeout(() => {
          loadUsers()
        }, 1000)
      } else {
        toast({
          title: "初始化失败",
          description: data.error || "数据库初始化失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "错误",
        description: "网络错误，请重试",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  // 加载用户列表
  const loadUsers = async () => {
    setIsLoading(true)
    try {
      console.log('=== 开始加载用户列表 ===')
      const response = await fetch('/api/sps-admin/users', {
        headers: {
          'Authorization': 'Bearer admin-token'
        }
      })
      
      console.log('API响应状态:', response.status)
      
      if (response.ok) {
        const data = await response.json()
        console.log('API返回的数据:', data)
        console.log('用户数组:', data.users)
        console.log('用户数量:', data.users?.length || 0)
        
        setUsers(data.users || [])
        
        if (data.users && data.users.length > 0) {
          toast({
            title: "加载成功",
            description: `已加载 ${data.users.length} 个用户`,
          })
        }
      } else {
        const errorData = await response.json()
        console.error('API错误响应:', errorData)
        toast({
          title: "加载失败",
          description: errorData.error || "无法加载用户列表",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('加载用户列表失败:', error)
      toast({
        title: "错误",
        description: "网络错误，请重试",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  // 添加用户
  const handleAddUser = async () => {
    console.log('=== 开始添加用户 ===')
    console.log('用户表单数据:', userForm)
    
    if (!userForm.username || !userForm.email || !userForm.password) {
      console.log('表单验证失败：缺少必需字段')
      toast({
        title: "验证失败",
        description: "请填写所有必需字段",
        variant: "destructive"
      })
      return
    }

    try {
      console.log('发送API请求...')
      const response = await fetch('/api/sps-admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer admin-token'
        },
        body: JSON.stringify(userForm)
      })

      console.log('API响应状态:', response.status)
      const data = await response.json()
      console.log('API响应数据:', data)

      if (response.ok) {
        console.log('用户创建成功')
        toast({
          title: "成功",
          description: "用户创建成功"
        })
        setIsAddDialogOpen(false)
        resetUserForm()
        loadUsers()
      } else {
        console.log('用户创建失败:', data.error)
        toast({
          title: "创建失败",
          description: data.error || "创建用户失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.error('添加用户网络错误:', error)
      toast({
        title: "错误",
        description: "网络错误，请重试",
        variant: "destructive"
      })
    }
  }

  // 编辑用户
  const handleEditUser = async () => {
    if (!editingUser || !userForm.username || !userForm.email) {
      toast({
        title: "验证失败",
        description: "请填写用户名和邮箱",
        variant: "destructive"
      })
      return
    }

    try {
      const response = await fetch('/api/sps-admin/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer admin-token'
        },
        body: JSON.stringify({
          id: editingUser.id,
          username: userForm.username,
          email: userForm.email,
          role: userForm.role
        })
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "成功",
          description: "用户信息更新成功"
        })
        setIsEditDialogOpen(false)
        setEditingUser(null)
        resetUserForm()
        loadUsers()
      } else {
        toast({
          title: "更新失败",
          description: data.error || "更新用户信息失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "错误",
        description: "网络错误，请重试",
        variant: "destructive"
      })
    }
  }

  // 修改密码
  const handleChangePassword = async () => {
    if (!passwordForm.newPassword || !passwordForm.confirmPassword) {
      toast({
        title: "验证失败",
        description: "请输入新密码并确认",
        variant: "destructive"
      })
      return
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast({
        title: "验证失败",
        description: "两次输入的密码不一致",
        variant: "destructive"
      })
      return
    }

    if (passwordForm.newPassword.length < 6) {
      toast({
        title: "验证失败",
        description: "密码长度至少6位",
        variant: "destructive"
      })
      return
    }

    try {
      const response = await fetch('/api/sps-admin/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer admin-token'
        },
        body: JSON.stringify({
          id: passwordForm.userId,
          newPassword: passwordForm.newPassword
        })
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "成功",
          description: "密码修改成功"
        })
        setIsPasswordDialogOpen(false)
        resetPasswordForm()
      } else {
        toast({
          title: "修改失败",
          description: data.error || "密码修改失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "错误",
        description: "网络错误，请重试",
        variant: "destructive"
      })
    }
  }

  // 删除用户
  const handleDeleteUser = async () => {
    if (!deletingUser) return

    try {
      const response = await fetch(`/api/sps-admin/users?id=${deletingUser.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer admin-token'
        }
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "成功",
          description: "用户删除成功"
        })
        setIsDeleteDialogOpen(false)
        setDeletingUser(null)
        loadUsers()
      } else {
        toast({
          title: "删除失败",
          description: data.error || "删除用户失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "错误",
        description: "网络错误，请重试",
        variant: "destructive"
      })
    }
  }

  // 切换用户状态（启用/禁用）
  const handleToggleUserStatus = async (user: User) => {
    try {
      const response = await fetch('/api/sps-admin/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer admin-token'
        },
        body: JSON.stringify({
          id: user.id,
          isActive: !user.isActive
        })
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "成功",
          description: `用户已${user.isActive ? '禁用' : '启用'}`
        })
        loadUsers()
      } else {
        toast({
          title: "操作失败",
          description: data.error || "切换用户状态失败",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "错误",
        description: "网络错误，请重试",
        variant: "destructive"
      })
    }
  }

  // 重置表单
  const resetUserForm = () => {
    setUserForm({
      username: '',
      email: '',
      password: '',
      role: 'user'
    })
  }

  const resetPasswordForm = () => {
    setPasswordForm({
      userId: '',
      newPassword: '',
      confirmPassword: ''
    })
  }

  // 打开编辑对话框
  const openEditDialog = (user: User) => {
    setEditingUser(user)
    setUserForm({
      username: user.username,
      email: user.email,
      password: '',
      role: user.role
    })
    setIsEditDialogOpen(true)
  }

  // 打开密码修改对话框
  const openPasswordDialog = (user: User) => {
    setPasswordForm({
      userId: user.id,
      newPassword: '',
      confirmPassword: ''
    })
    setIsPasswordDialogOpen(true)
  }

  // 打开删除确认对话框
  const openDeleteDialog = (user: User) => {
    setDeletingUser(user)
    setIsDeleteDialogOpen(true)
  }

  // 过滤用户列表
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === 'all' || user.role === roleFilter
    return matchesSearch && matchesRole
  })



  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              用户管理
            </CardTitle>
            <CardDescription>
              管理系统用户账户，包括添加、编辑、删除用户和修改密码
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={loadUsers}
              variant="outline"
              size="sm"
              disabled={isLoading}
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              刷新
            </Button>
            <Button
              onClick={() => setIsAddDialogOpen(true)}
              size="sm"
            >
              <Plus className="h-4 w-4 mr-1" />
              添加用户
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* 搜索和过滤 */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="搜索用户名或邮箱..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="筛选角色" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部角色</SelectItem>
              <SelectItem value="admin">管理员</SelectItem>
              <SelectItem value="user">普通用户</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 用户列表 */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="text-center py-8">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2" />
              <p className="text-gray-500">加载中...</p>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">没有找到匹配的用户</p>
              {users.length === 0 && searchTerm === '' && roleFilter === 'all' && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">数据库可能未初始化或没有用户数据</p>
                  <Button onClick={initializeDatabase} variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    初始化数据库
                  </Button>
                </div>
              )}
            </div>
          ) : (
            filteredUsers.map((user) => (
              <Card key={user.id} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            {user.role === 'admin' ? (
                              <Shield className="h-4 w-4 text-blue-600" />
                            ) : (
                              <User className="h-4 w-4 text-blue-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold">{user.username}</h3>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {user.email}
                            </p>
                          </div>
                        </div>
                        <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                          {user.role === 'admin' ? '管理员' : '普通用户'}
                        </Badge>
                        {!user.isActive && (
                          <Badge variant="destructive">
                            已禁用
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        最后登录: {user.lastLogin}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        onClick={() => openEditDialog(user)}
                        variant="outline"
                        size="sm"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => openPasswordDialog(user)}
                        variant="outline"
                        size="sm"
                      >
                        <Key className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => handleToggleUserStatus(user)}
                        variant="outline"
                        size="sm"
                        title={user.isActive ? '禁用用户' : '启用用户'}
                      >
                        {user.isActive ? '禁用' : '启用'}
                      </Button>
                      {user.id !== '1' && (
                        <Button
                          onClick={() => openDeleteDialog(user)}
                          variant="outline"
                          size="sm"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* 添加用户对话框 */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>添加新用户</DialogTitle>
              <DialogDescription>
                创建一个新的系统用户账户
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="username">用户名 *</Label>
                <Input
                  id="username"
                  value={userForm.username}
                  onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                  placeholder="输入用户名"
                />
              </div>
              
              <div>
                <Label htmlFor="email">邮箱 *</Label>
                <Input
                  id="email"
                  type="email"
                  value={userForm.email}
                  onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                  placeholder="输入邮箱地址"
                />
              </div>
              
              <div>
                <Label htmlFor="password">密码 *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={userForm.password}
                    onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                    placeholder="输入密码（至少6位）"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="role">角色</Label>
                <Select value={userForm.role} onValueChange={(value: 'admin' | 'user') => setUserForm({ ...userForm, role: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">普通用户</SelectItem>
                    <SelectItem value="admin">管理员</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddDialogOpen(false)
                  resetUserForm()
                }}
              >
                取消
              </Button>
              <Button onClick={handleAddUser}>
                创建用户
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 编辑用户对话框 */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>编辑用户信息</DialogTitle>
              <DialogDescription>
                修改用户的基本信息和角色
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-username">用户名 *</Label>
                <Input
                  id="edit-username"
                  value={userForm.username}
                  onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                  placeholder="输入用户名"
                />
              </div>
              
              <div>
                <Label htmlFor="edit-email">邮箱 *</Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={userForm.email}
                  onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                  placeholder="输入邮箱地址"
                />
              </div>
              
              <div>
                <Label htmlFor="edit-role">角色</Label>
                <Select value={userForm.role} onValueChange={(value: 'admin' | 'user') => setUserForm({ ...userForm, role: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">普通用户</SelectItem>
                    <SelectItem value="admin">管理员</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditDialogOpen(false)
                  setEditingUser(null)
                  resetUserForm()
                }}
              >
                取消
              </Button>
              <Button onClick={handleEditUser}>
                保存更改
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 修改密码对话框 */}
        <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>修改密码</DialogTitle>
              <DialogDescription>
                为用户设置新密码
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="new-password">新密码 *</Label>
                <div className="relative">
                  <Input
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                    placeholder="输入新密码（至少6位）"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="confirm-password">确认新密码 *</Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                    placeholder="再次输入新密码"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              {passwordForm.newPassword && passwordForm.confirmPassword && 
               passwordForm.newPassword !== passwordForm.confirmPassword && (
                <Alert>
                  <AlertDescription>
                    两次输入的密码不一致
                  </AlertDescription>
                </Alert>
              )}
            </div>
            
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsPasswordDialogOpen(false)
                  resetPasswordForm()
                }}
              >
                取消
              </Button>
              <Button onClick={handleChangePassword}>
                修改密码
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* 删除确认对话框 */}
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>确认删除用户</DialogTitle>
              <DialogDescription>
                此操作不可撤销。确定要删除用户 "{deletingUser?.username}" 吗？
              </DialogDescription>
            </DialogHeader>
            
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsDeleteDialogOpen(false)
                  setDeletingUser(null)
                }}
              >
                取消
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDeleteUser}
              >
                确认删除
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
} 