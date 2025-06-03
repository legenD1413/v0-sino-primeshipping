import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 检查是否访问博客管理路由
  if (request.nextUrl.pathname.startsWith('/blog-admin')) {
    // 从cookie或header中检查认证状态
    // 注意：由于localStorage在服务端不可用，我们需要使用cookie来存储认证状态
    const isAuthenticated = request.cookies.get('sps_admin_logged_in')?.value === 'true'
    
    if (!isAuthenticated) {
      // 如果未认证，重定向到登录页面
      const loginUrl = new URL('/sps-admin', request.url)
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/blog-admin/:path*'
  ]
}