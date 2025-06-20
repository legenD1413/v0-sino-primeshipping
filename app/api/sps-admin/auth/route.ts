import { NextRequest, NextResponse } from 'next/server'
import { 
  getUserByUsername, 
  updateUser, 
  verifyPassword, 
  hashPassword,
  initializeDefaultUsers,
  type User 
} from '@/lib/users-data'

// 简化的token生成
function generateToken(user: User): string {
  return `${user.role}-token-${user.id}`
}

// POST - 用户登录
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    console.log('=== 登录API调用 ===')
    console.log('登录用户名:', username)
    console.log('密码长度:', password ? password.length : 0)
    console.log('原始密码:', password)

    // 基本验证
    if (!username || !password) {
      console.log('基本验证失败: 用户名或密码为空')
      return NextResponse.json(
        { error: '用户名和密码不能为空' },
        { status: 400 }
      )
    }

    // 初始化默认用户（如果需要）
    console.log('开始初始化默认用户...')
    await initializeDefaultUsers()
    console.log('默认用户初始化完成')

    // 查找用户
    console.log('开始查找用户:', username)
    const user = await getUserByUsername(username)
    console.log('查找用户结果:', user ? { 
      id: user.id, 
      username: user.username, 
      isActive: user.isActive,
      passwordLength: user.password.length,
      passwordFirstChars: user.password.substring(0, 10) + '...'
    } : '用户不存在')

    if (!user) {
      console.log('用户查找失败: 用户不存在')
      return NextResponse.json(
        { error: '用户名或密码错误' },
        { status: 401 }
      )
    }

    // 检查用户状态
    console.log('检查用户状态, isActive:', user.isActive)
    if (!user.isActive) {
      console.log('用户状态检查失败: 账户已禁用')
      return NextResponse.json(
        { error: '账户已被禁用' },
        { status: 401 }
      )
    }

    // 验证密码 - 详细调试
    console.log('开始密码验证...')
    console.log('输入的密码:', password)
    console.log('存储的密码哈希:', user.password)
    console.log('输入密码的新哈希:', hashPassword(password))
    
    const isValidPassword = verifyPassword(password, user.password)
    console.log('密码验证结果:', isValidPassword)

    if (!isValidPassword) {
      console.log('密码验证失败')
      // 额外调试：尝试不同的验证方式
      const directHash = hashPassword(password)
      const directMatch = directHash === user.password
      console.log('直接哈希比较结果:', directMatch)
      console.log('直接生成的哈希:', directHash)
      console.log('存储的哈希:', user.password)
      console.log('哈希长度比较:', { direct: directHash.length, stored: user.password.length })
      
      return NextResponse.json(
        { 
          error: '用户名或密码错误',
          debug: {
            verifyPasswordResult: isValidPassword,
            directHashMatch: directMatch,
            inputPassword: password,
            inputPasswordHash: directHash,
            storedPasswordHash: user.password
          }
        },
        { status: 401 }
      )
    }

    // 更新最后登录时间
    console.log('密码验证成功，更新最后登录时间...')
    await updateUser(user.id, {
      lastLogin: new Date().toLocaleString('zh-CN')
    })

    console.log('登录成功，用户:', user.username)
    console.log('=== 登录API完成 ===')

    // 返回成功信息和token
    return NextResponse.json({
      success: true,
      message: '登录成功',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      },
      token: generateToken(user)
    })
  } catch (error) {
    console.error('登录失败:', error)
    return NextResponse.json(
      { error: '登录失败: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    )
  }
}

// PUT - 修改密码
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, currentPassword, newPassword } = body

    // 基本验证
    if (!username || !currentPassword || !newPassword) {
      return NextResponse.json(
        { error: '用户名、当前密码和新密码不能为空' },
        { status: 400 }
      )
    }

    // 查找用户
    const user = await getUserByUsername(username)
    if (!user) {
      return NextResponse.json(
        { error: '用户不存在' },
        { status: 404 }
      )
    }

    // 验证当前密码
    if (!verifyPassword(currentPassword, user.password)) {
      return NextResponse.json(
        { error: '当前密码错误' },
        { status: 401 }
      )
    }

    // 更新密码
    const updatedUser = await updateUser(user.id, {
      password: hashPassword(newPassword)
    })

    if (!updatedUser) {
      return NextResponse.json(
        { error: '密码修改失败' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: '密码修改成功'
    })
  } catch (error) {
    console.error('修改密码失败:', error)
    return NextResponse.json(
      { error: '修改密码失败' },
      { status: 500 }
    )
  }
}

// GET - 验证会话token（简化版本）
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json(
        { error: '缺少认证token' },
        { status: 401 }
      )
    }

    // 在实际项目中，这里应该验证JWT token或查询数据库中的会话
    // 这里只是一个简单的示例，总是返回有效
    return NextResponse.json({ 
      success: true,
      valid: true,
      message: '会话有效'
    })
  } catch (error) {
    console.error('Token validation error:', error)
    return NextResponse.json(
      { error: '验证token过程中发生错误' },
      { status: 500 }
    )
  }
} 