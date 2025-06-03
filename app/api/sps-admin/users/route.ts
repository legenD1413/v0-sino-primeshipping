import { NextRequest, NextResponse } from 'next/server'

// 模拟用户数据存储（实际项目中应使用数据库）
let users = [
  { 
    id: '1', 
    username: 'admin', 
    email: 'admin@sinoprimeshipping.com', 
    password: 'sps2024!', // 实际项目中应该是哈希密码
    role: 'admin' as const,
    lastLogin: '2024-01-15 14:30:00'
  },
  { 
    id: '2', 
    username: 'user1', 
    email: 'user1@sinoprimeshipping.com', 
    password: 'user123', // 实际项目中应该是哈希密码
    role: 'user' as const,
    lastLogin: '2024-01-14 09:15:00'
  }
]

// 验证管理员权限的简单函数
function isAuthenticated(request: NextRequest) {
  // 在实际项目中，应该验证JWT token或session
  const authHeader = request.headers.get('authorization')
  return authHeader === 'Bearer admin-token' // 简化的验证
}

// GET - 获取所有用户
export async function GET(request: NextRequest) {
  try {
    // 在实际项目中应该验证管理员权限
    
    // 返回用户列表，但不包含密码
    const safeUsers = users.map(user => ({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      lastLogin: user.lastLogin
    }))

    return NextResponse.json({ users: safeUsers })
  } catch (error) {
    return NextResponse.json(
      { error: '获取用户列表失败' },
      { status: 500 }
    )
  }
}

// POST - 创建新用户
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, email, password, role } = body

    // 验证必需字段
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: '用户名、邮箱和密码不能为空' },
        { status: 400 }
      )
    }

    // 检查用户名是否已存在
    const existingUser = users.find(user => 
      user.username === username || user.email === email
    )
    
    if (existingUser) {
      return NextResponse.json(
        { error: '用户名或邮箱已存在' },
        { status: 409 }
      )
    }

    // 创建新用户
    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password, // 实际项目中应该哈希密码
      role: role || 'user',
      lastLogin: '从未登录'
    }

    users.push(newUser)

    // 返回创建的用户信息（不包含密码）
    const safeUser = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      lastLogin: newUser.lastLogin
    }

    return NextResponse.json({ 
      message: '用户创建成功', 
      user: safeUser 
    })
  } catch (error) {
    return NextResponse.json(
      { error: '创建用户失败' },
      { status: 500 }
    )
  }
}

// PUT - 更新用户信息
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, username, email, role, newPassword } = body

    if (!id) {
      return NextResponse.json(
        { error: '用户ID不能为空' },
        { status: 400 }
      )
    }

    // 查找用户
    const userIndex = users.findIndex(user => user.id === id)
    
    if (userIndex === -1) {
      return NextResponse.json(
        { error: '用户不存在' },
        { status: 404 }
      )
    }

    // 更新用户信息
    if (username) users[userIndex].username = username
    if (email) users[userIndex].email = email
    if (role) users[userIndex].role = role
    if (newPassword) users[userIndex].password = newPassword

    // 返回更新后的用户信息（不包含密码）
    const safeUser = {
      id: users[userIndex].id,
      username: users[userIndex].username,
      email: users[userIndex].email,
      role: users[userIndex].role,
      lastLogin: users[userIndex].lastLogin
    }

    return NextResponse.json({ 
      message: '用户信息更新成功', 
      user: safeUser 
    })
  } catch (error) {
    return NextResponse.json(
      { error: '更新用户信息失败' },
      { status: 500 }
    )
  }
}

// DELETE - 删除用户
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('id')

    if (!userId) {
      return NextResponse.json(
        { error: '用户ID不能为空' },
        { status: 400 }
      )
    }

    // 防止删除主管理员
    if (userId === '1') {
      return NextResponse.json(
        { error: '不能删除主管理员账户' },
        { status: 403 }
      )
    }

    // 查找并删除用户
    const userIndex = users.findIndex(user => user.id === userId)
    
    if (userIndex === -1) {
      return NextResponse.json(
        { error: '用户不存在' },
        { status: 404 }
      )
    }

    const deletedUser = users.splice(userIndex, 1)[0]

    return NextResponse.json({ 
      message: '用户删除成功',
      deletedUser: {
        id: deletedUser.id,
        username: deletedUser.username,
        email: deletedUser.email
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: '删除用户失败' },
      { status: 500 }
    )
  }
} 