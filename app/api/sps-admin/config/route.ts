import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

// 配置接口
interface PostmarkConfig {
  apiToken: string
  fromEmail: string
  replyToEmail: string
  messageStream: string
  toEmail: string
  ccEmail: string
  bccEmail: string
}

// GET: 获取邮件配置
export async function GET(request: NextRequest) {
  try {
    // 首先检查表是否存在
    const tableExistsQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'system_config'
      )
    `
    
    const tableExistsResult = await db.query(tableExistsQuery)
    
    if (!tableExistsResult.rows[0].exists) {
      console.log('system_config表不存在，返回默认配置')
      // 返回默认配置
      const defaultConfig: PostmarkConfig = {
        apiToken: process.env.POSTMARK_API_TOKEN || '68ef6c85-6260-4277-8527-530727b0cc22',
        fromEmail: 'noreply@sinoprimeshipping.com',
        replyToEmail: 'support@sinoprimeshipping.com',
        messageStream: 'outbound',
        toEmail: 'applications@sinoprimeshipping.com',
        ccEmail: 'admin@sinoprimeshipping.com',
        bccEmail: ''
      }
      
      return NextResponse.json({
        success: true,
        config: defaultConfig,
        isDefault: true,
        message: '使用默认配置（数据库表尚未初始化）'
      })
    }

    const query = `
      SELECT config_value 
      FROM system_config 
      WHERE config_key = 'postmark_config'
    `
    
    const result = await db.query(query)
    
    if (result.rows.length === 0) {
      // 返回默认配置
      const defaultConfig: PostmarkConfig = {
        apiToken: process.env.POSTMARK_API_TOKEN || '68ef6c85-6260-4277-8527-530727b0cc22',
        fromEmail: 'noreply@sinoprimeshipping.com',
        replyToEmail: 'support@sinoprimeshipping.com',
        messageStream: 'outbound',
        toEmail: 'applications@sinoprimeshipping.com',
        ccEmail: 'admin@sinoprimeshipping.com',
        bccEmail: ''
      }
      
      return NextResponse.json({
        success: true,
        config: defaultConfig,
        isDefault: true,
        message: '使用默认配置（未找到保存的配置）'
      })
    }

    return NextResponse.json({
      success: true,
      config: result.rows[0].config_value,
      isDefault: false
    })

  } catch (error) {
    console.error('获取邮件配置失败:', error)
    
    // 如果查询失败，也返回默认配置而不是错误
    const defaultConfig: PostmarkConfig = {
      apiToken: process.env.POSTMARK_API_TOKEN || '68ef6c85-6260-4277-8527-530727b0cc22',
      fromEmail: 'noreply@sinoprimeshipping.com',
      replyToEmail: 'support@sinoprimeshipping.com',
      messageStream: 'outbound',
      toEmail: 'applications@sinoprimeshipping.com',
      ccEmail: 'admin@sinoprimeshipping.com',
      bccEmail: ''
    }
    
    return NextResponse.json({
      success: true,
      config: defaultConfig,
      isDefault: true,
      message: '使用默认配置（数据库连接失败）',
      error: error instanceof Error ? error.message : '未知错误'
    })
  }
}

// POST: 保存邮件配置
export async function POST(request: NextRequest) {
  try {
    const config: PostmarkConfig = await request.json()
    
    // 验证必需字段
    if (!config.apiToken || !config.fromEmail) {
      return NextResponse.json(
        { error: '缺少必需的配置字段' },
        { status: 400 }
      )
    }

    // 首先确保表存在
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS system_config (
        id SERIAL PRIMARY KEY,
        config_key VARCHAR(100) UNIQUE NOT NULL,
        config_value JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `
    
    await db.query(createTableQuery)

    // 检查配置是否已存在
    const checkQuery = `
      SELECT id FROM system_config WHERE config_key = 'postmark_config'
    `
    const checkResult = await db.query(checkQuery)

    let query
    let params
    
    if (checkResult.rows.length > 0) {
      // 更新现有配置
      query = `
        UPDATE system_config 
        SET config_value = $1, updated_at = NOW()
        WHERE config_key = 'postmark_config'
        RETURNING *
      `
      params = [JSON.stringify(config)]
    } else {
      // 插入新配置
      query = `
        INSERT INTO system_config (config_key, config_value, created_at, updated_at)
        VALUES ('postmark_config', $1, NOW(), NOW())
        RETURNING *
      `
      params = [JSON.stringify(config)]
    }

    const result = await db.query(query, params)

    return NextResponse.json({
      success: true,
      message: '邮件配置保存成功',
      data: result.rows[0]
    })

  } catch (error) {
    console.error('保存邮件配置失败:', error)
    return NextResponse.json(
      { 
        success: false,
        error: '保存配置失败', 
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
} 