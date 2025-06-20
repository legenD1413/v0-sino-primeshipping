import { NextRequest, NextResponse } from 'next/server'
import { executeQuery } from '@/lib/database'
import { hashPassword } from '@/lib/users-data'

export async function POST(request: NextRequest) {
  try {
    console.log('=== 测试添加用户API ===')
    
    // 测试数据
    const testUser = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'test123',
      role: 'user'
    }
    
    console.log('测试用户数据:', testUser)
    
    // 直接执行数据库插入
    const hashedPassword = hashPassword(testUser.password)
    console.log('密码哈希长度:', hashedPassword.length)
    
    const result = await executeQuery(`
      INSERT INTO users (username, email, password_hash, role, last_login, is_active)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, username, email, password_hash, role, last_login, created_at, updated_at, is_active
    `, [
      testUser.username,
      testUser.email,
      hashedPassword,
      testUser.role,
      '从未登录',
      true
    ])
    
    console.log('数据库插入结果:', result)
    
    if (result.success && result.data && result.data.length > 0) {
      const newUser = result.data[0]
      console.log('创建的用户:', newUser)
      
      return NextResponse.json({
        success: true,
        message: '测试用户创建成功',
        user: {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
          role: newUser.role,
          createdAt: newUser.created_at,
          isActive: newUser.is_active
        }
      })
    } else {
      return NextResponse.json({
        success: false,
        error: '数据库插入失败',
        details: result.error
      }, { status: 500 })
    }
    
  } catch (error) {
    console.error('测试添加用户失败:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 