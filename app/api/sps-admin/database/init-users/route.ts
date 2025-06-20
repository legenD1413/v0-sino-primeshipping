import { NextRequest, NextResponse } from 'next/server'
import { executeQuery } from '@/lib/database'
import { hashPassword } from '@/lib/users-data'

export async function POST(request: NextRequest) {
  try {
    console.log('开始初始化用户数据库...')
    
    // 1. 确保用户表存在
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(20) DEFAULT 'user',
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP
      )
    `
    
    const createResult = await executeQuery(createTableQuery)
    console.log('创建用户表结果:', createResult.success ? '成功' : createResult.error)
    
    // 2. 检查是否已有管理员用户
    const checkAdminQuery = `SELECT id, username FROM users WHERE username = $1`
    const checkResult = await executeQuery(checkAdminQuery, ['admin'])
    
    if (checkResult.success && checkResult.data && checkResult.data.length > 0) {
      console.log('管理员用户已存在:', checkResult.data[0])
      return NextResponse.json({
        success: true,
        message: '用户数据库已初始化，管理员用户已存在',
        data: {
          adminExists: true,
          admin: checkResult.data[0]
        }
      })
    }
    
    // 3. 创建默认管理员用户
    const hashedPassword = hashPassword('sps2024!')
    const insertAdminQuery = `
      INSERT INTO users (username, email, password_hash, role, is_active, last_login)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, username, email, role, created_at
    `
    
    const insertResult = await executeQuery(insertAdminQuery, [
      'admin',
      'admin@sinoprimeshipping.com',
      hashedPassword,
      'admin',
      true,
      '从未登录'
    ])
    
    if (insertResult.success && insertResult.data && insertResult.data.length > 0) {
      console.log('默认管理员用户创建成功:', insertResult.data[0])
      
      // 4. 验证用户数据
      const verifyQuery = `SELECT COUNT(*) as user_count FROM users`
      const verifyResult = await executeQuery(verifyQuery)
      
      return NextResponse.json({
        success: true,
        message: '用户数据库初始化成功，默认管理员用户已创建',
        data: {
          adminCreated: true,
          admin: insertResult.data[0],
          totalUsers: verifyResult.data?.[0]?.user_count || 0
        }
      })
    } else {
      throw new Error('创建默认管理员用户失败')
    }
    
  } catch (error) {
    console.error('初始化用户数据库失败:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 