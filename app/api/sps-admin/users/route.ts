import { NextRequest, NextResponse } from 'next/server'
import { 
  getAllUsers, 
  getUserById, 
  getUserByUsername, 
  addUser, 
  updateUser, 
  deleteUser, 
  isUserExists,
  hashPassword,
  verifyPassword,
  initializeDefaultUsers,
  type User 
} from '@/lib/users-data'

// 验证管理员权限的简单函数
function isAuthenticated(request: NextRequest) {
  // 在实际项目中，应该验证JWT token或session
  const authHeader = request.headers.get('authorization')
  return authHeader === 'Bearer admin-token' // 简化的验证
}

// 安全地返回用户信息（不包含密码）
function getSafeUser(user: User) {
  const { password, ...safeUser } = user
  return safeUser
}

// GET - 获取所有用户
export async function GET(request: NextRequest) {
  try {
    console.log('=== 用户列表API调用 ===')
    
    // 在实际项目中应该验证管理员权限
    
    // 返回用户列表，但不包含密码
    const users = await getAllUsers()
    console.log('从数据库获取的用户数量:', users.length)
    console.log('用户详情:', users.map(u => ({ id: u.id, username: u.username, email: u.email })))
    
    const safeUsers = users.map(getSafeUser)
    console.log('安全用户数据数量:', safeUsers.length)

    return NextResponse.json({ 
      users: safeUsers,
      debug: {
        totalUsers: users.length,
        timestamp: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('获取用户列表失败:', error)
    return NextResponse.json(
      { error: '获取用户列表失败: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    )
  }
}

// POST - 创建新用户
export async function POST(request: NextRequest) {
  try {
    console.log('=== 创建用户API调用 ===')
    const body = await request.json()
    console.log('接收到的数据:', { ...body, password: body.password ? '***' : undefined })
    
    const { username, email, password, role } = body

    // 验证必需字段
    if (!username || !email || !password) {
      console.log('验证失败：缺少必需字段')
      return NextResponse.json(
        { error: '用户名、邮箱和密码不能为空' },
        { status: 400 }
      )
    }

    // 检查用户名是否已存在
    console.log('检查用户是否已存在...')
    const exists = await isUserExists(username, email)
    console.log('用户存在检查结果:', exists)
    
    if (exists) {
      console.log('用户已存在，返回409错误')
      return NextResponse.json(
        { error: '用户名或邮箱已存在' },
        { status: 409 }
      )
    }

    // 创建新用户
    console.log('开始创建新用户...')
    const hashedPassword = hashPassword(password)
    console.log('密码哈希长度:', hashedPassword.length)
    
    const newUser = await addUser({
      username,
      email,
      password: hashedPassword,
      role: role || 'user',
      lastLogin: '从未登录',
      isActive: true
    })

    console.log('用户创建结果:', newUser ? { id: newUser.id, username: newUser.username } : '失败')

    if (!newUser) {
      console.log('创建用户失败：addUser返回null')
      return NextResponse.json(
        { error: '创建用户失败' },
        { status: 500 }
      )
    }

    console.log('=== 创建用户API完成 ===')
    
    // 返回创建的用户信息（不包含密码）
    return NextResponse.json({ 
      message: '用户创建成功', 
      user: getSafeUser(newUser)
    })
  } catch (error) {
    console.error('创建用户失败:', error)
    return NextResponse.json(
      { error: '创建用户失败: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    )
  }
}

// PUT - 更新用户信息
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, username, email, role, newPassword, isActive } = body

    console.log('=== 密码修改API调用 ===')
    console.log('接收到的数据:', { id, username, email, role, newPassword: newPassword ? '***' : undefined, isActive })

    if (!id) {
      return NextResponse.json(
        { error: '用户ID不能为空' },
        { status: 400 }
      )
    }

    // 查找用户
    const existingUser = await getUserById(id)
    console.log('查找用户结果:', existingUser ? { id: existingUser.id, username: existingUser.username } : '用户不存在')
    
    if (!existingUser) {
      return NextResponse.json(
        { error: '用户不存在' },
        { status: 404 }
      )
    }

    // 构建更新数据
    const updates: Partial<User> = {}
    
    if (username !== undefined) updates.username = username
    if (email !== undefined) updates.email = email
    if (role !== undefined) updates.role = role
    if (newPassword !== undefined) {
      const hashedPassword = hashPassword(newPassword)
      updates.password = hashedPassword
      console.log('新密码哈希值:', hashedPassword)
    }
    if (isActive !== undefined) updates.isActive = isActive

    console.log('准备更新的字段:', Object.keys(updates))

    // 更新用户信息
    const updatedUser = await updateUser(id, updates)
    console.log('更新结果:', updatedUser ? '成功' : '失败')

    if (!updatedUser) {
      return NextResponse.json(
        { error: '更新用户信息失败' },
        { status: 500 }
      )
    }

    // 验证密码是否真的更新了
    if (newPassword !== undefined) {
      const verificationResult = verifyPassword(newPassword, updatedUser.password)
      console.log('密码验证结果:', verificationResult)
    }

    console.log('=== 密码修改API完成 ===')

    // 返回更新后的用户信息（不包含密码）
    return NextResponse.json({ 
      message: '用户信息更新成功', 
      user: getSafeUser(updatedUser),
      debug: newPassword ? {
        passwordUpdated: true,
        verificationPassed: verifyPassword(newPassword, updatedUser.password)
      } : undefined
    })
  } catch (error) {
    console.error('更新用户信息失败:', error)
    return NextResponse.json(
      { error: '更新用户信息失败: ' + (error instanceof Error ? error.message : String(error)) },
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

    // 删除用户
    const deletedUser = await deleteUser(userId)
    
    if (!deletedUser) {
      return NextResponse.json(
        { error: '用户不存在' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      message: '用户删除成功',
      deletedUser: getSafeUser(deletedUser)
    })
  } catch (error) {
    console.error('删除用户失败:', error)
    return NextResponse.json(
      { error: '删除用户失败' },
      { status: 500 }
    )
  }
} 