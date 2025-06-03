'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Mail, FileText, Home, Shield } from 'lucide-react'

export default function AdminNav() {
  const pathname = usePathname()

  const adminRoutes = [
    {
      href: '/',
      label: '返回首页',
      icon: Home,
      description: '回到网站主页'
    },
    {
      href: '/sps-admin',
      label: 'SPS 管理',
      icon: Shield,
      description: '用户管理和邮件配置'
    },
    {
      href: '/blog-admin',
      label: '博客管理',
      icon: FileText,
      description: '文章内容管理'
    }
  ]

  // 只在管理页面显示导航
  if (!pathname?.includes('-admin')) {
    return null
  }

  return (
    <Card className="fixed top-4 right-4 z-50 w-64 shadow-lg">
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-gray-900 mb-3">管理导航</h3>
          {adminRoutes.map((route) => {
            const Icon = route.icon
            const isActive = pathname === route.href
            
            return (
              <Link key={route.href} href={route.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start h-auto p-3 ${
                    isActive 
                      ? "bg-blue-600 text-white" 
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <div className="text-left min-w-0">
                      <div className="font-medium text-sm">{route.label}</div>
                      <div className={`text-xs ${
                        isActive 
                          ? "text-blue-100" 
                          : "text-gray-500"
                      }`}>
                        {route.description}
                      </div>
                    </div>
                  </div>
                </Button>
              </Link>
            )
          })}
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            SPS 管理系统
          </p>
        </div>
      </CardContent>
    </Card>
  )
} 