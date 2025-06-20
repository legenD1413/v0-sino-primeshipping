import { NextRequest, NextResponse } from 'next/server'
import { getUserByUsername, verifyPassword } from '@/lib/users-data'

export async function POST(request: NextRequest) {
  try {
    console.log('=== 直接认证测试 ===')
    
    const username = 'admin'
    const password = 'sps2024!'
    
    console.log('测试凭据:', { username, password })
    
    // 1. 直接从数据库获取用户
    const user = await getUserByUsername(username)
    console.log('数据库用户查询结果:', user ? {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      passwordHashLength: user.password.length
    } : '未找到用户')
    
    if (!user) {
      return NextResponse.json({
        success: false,
        step: 'getUserByUsername',
        error: '用户不存在'
      })
    }
    
    // 2. 检查用户状态
    if (!user.isActive) {
      return NextResponse.json({
        success: false,
        step: 'userStatus',
        error: '用户已被禁用'
      })
    }
    
    // 3. 直接验证密码
    console.log('开始密码验证...')
    console.log('输入密码:', password)
    console.log('存储的哈希:', user.password)
    
    const passwordValid = verifyPassword(password, user.password)
    console.log('密码验证结果:', passwordValid)
    
    if (!passwordValid) {
      return NextResponse.json({
        success: false,
        step: 'passwordVerification',
        error: '密码验证失败',
        debug: {
          inputPassword: password,
          storedHashLength: user.password.length,
          verificationResult: passwordValid
        }
      })
    }
    
    // 4. 认证成功
    return NextResponse.json({
      success: true,
      message: '直接认证测试成功',
      data: {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        },
        authSteps: {
          userFound: true,
          userActive: user.isActive,
          passwordValid: passwordValid
        }
      }
    })
    
  } catch (error) {
    console.error('直接认证测试失败:', error)
    return NextResponse.json({
      success: false,
      step: 'exception',
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 