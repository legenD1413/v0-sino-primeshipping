"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Lock, ArrowRight } from "lucide-react"

export default function BlogAdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const router = useRouter()
  
  // 检查登录状态
  useEffect(() => {
    const checkAuthStatus = () => {
      const isAdmin = localStorage.getItem('sps_admin_logged_in')
      if (isAdmin === 'true') {
        setIsLoggedIn(true)
        // 已登录用户重定向到安全的管理后台
        router.push('/sps-admin?tab=blog')
      } else {
        setIsLoggedIn(false)
      }
      setIsChecking(false)
    }
    
    checkAuthStatus()
  }, [router])

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

  // 如果未登录，显示安全提示页面
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center pb-8">
          <div className="mx-auto mb-6 p-4 bg-red-100 rounded-full w-fit">
            <Lock className="h-10 w-10 text-red-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900">访问受限</CardTitle>
          <CardDescription className="text-base">
            博客管理功能需要管理员认证
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8 space-y-6">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              <strong>安全提示：</strong>
              <br />
              为了保护系统安全，博客管理功能已移至需要认证的管理后台。
              <br />
              请使用管理员账户登录后访问博客管理功能。
            </AlertDescription>
          </Alert>
          
          <div className="space-y-4">
            <Link href="/sps-admin">
              <Button className="w-full h-12 text-base flex items-center justify-center gap-2">
                <Shield className="h-5 w-5" />
                前往安全管理后台
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                管理员账户: admin / sps2024!
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">博客管理功能包括：</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• 创建、编辑和删除文章</li>
              <li>• 文章状态管理</li>
              <li>• 分类和标签管理</li>
              <li>• 统计数据查看</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 