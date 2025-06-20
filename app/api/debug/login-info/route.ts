import { NextRequest, NextResponse } from 'next/server'
import { executeQuery } from '@/lib/database'
import { verifyPassword } from '@/lib/users-data'

export async function GET(request: NextRequest) {
  try {
    console.log('=== 获取登录信息 ===')
    
    // 检查数据库中的admin用户
    const result = await executeQuery(`
      SELECT id, username, email, password_hash, role, created_at, last_login
      FROM users 
      WHERE username = 'admin'
    `)
    
    if (result.success && result.data && result.data.length > 0) {
      const admin = result.data[0]
      
      // 测试常见密码
      const testPasswords = ['sps2024!', 'admin', 'password', '123456']
      const passwordTests = testPasswords.map(pwd => ({
        password: pwd,
        matches: verifyPassword(pwd, admin.password_hash)
      }))
      
      return NextResponse.json({
        success: true,
        message: '找到管理员用户',
        data: {
          adminInfo: {
            id: admin.id,
            username: admin.username,
            email: admin.email,
            role: admin.role,
            createdAt: admin.created_at,
            lastLogin: admin.last_login,
            passwordHashLength: admin.password_hash.length
          },
          passwordTests,
          defaultCredentials: {
            username: 'admin',
            password: 'sps2024!',
            note: '这是初始化时设置的默认密码'
          }
        }
      })
    } else {
      return NextResponse.json({
        success: false,
        message: '未找到管理员用户',
        suggestion: '请先运行数据库初始化：POST /api/sps-admin/database/init-users'
      })
    }
    
  } catch (error) {
    console.error('获取登录信息失败:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 