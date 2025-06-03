import { NextRequest, NextResponse } from 'next/server'

// 模拟用户数据（与users API路由保持一致）
const adminUsers = [
  { 
    id: '1', 
    username: 'admin', 
    email: 'admin@sinoprimeshipping.com', 
    password: 'sps2024!', // 实际项目中应该是哈希密码
    role: 'admin' as const,
    lastLogin: '2024-01-15 14:30:00'
  }
]

// POST - 管理员登录
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    // 验证必需字段
    if (!username || !password) {
      return NextResponse.json(
        { error: '用户名和密码不能为空' },
        { status: 400 }
      )
    }

    // 查找用户
    const user = adminUsers.find(u => 
      u.username === username && u.password === password
    )

    if (!user) {
      return NextResponse.json(
        { error: '用户名或密码错误' },
        { status: 401 }
      )
    }

    // 更新最后登录时间
    user.lastLogin = new Date().toLocaleString('zh-CN')

    // 返回登录成功信息（不包含密码）
    const safeUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      lastLogin: user.lastLogin
    }

    return NextResponse.json({ 
      message: '登录成功',
      user: safeUser,
      token: 'admin-token' // 简化的token，实际项目中应使用JWT
    })
  } catch (error) {
    console.error('登录错误:', error)
    return NextResponse.json(
      { error: '登录失败，请稍后重试' },
      { status: 500 }
    )
  }
}

// GET - 验证登录状态
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || authHeader !== 'Bearer admin-token') {
      return NextResponse.json(
        { error: '未登录或登录已过期' },
        { status: 401 }
      )
    }

    // 返回当前用户信息
    const user = adminUsers[0] // 简化实现
    const safeUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      lastLogin: user.lastLogin
    }

    return NextResponse.json({ 
      user: safeUser,
      isAuthenticated: true
    })
  } catch (error) {
    return NextResponse.json(
      { error: '验证失败' },
      { status: 500 }
    )
  }
} 