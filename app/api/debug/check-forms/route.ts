import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    console.log('开始调试检查...')
    
    // 1. 检查数据库连接
    const connectionTest = await db.query('SELECT NOW() as current_time')
    console.log('数据库连接正常:', connectionTest.rows[0])

    // 2. 检查表是否存在
    const tableExists = await db.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'form_submissions'
      )
    `)
    console.log('form_submissions表是否存在:', tableExists.rows[0].exists)

    if (!tableExists.rows[0].exists) {
      return NextResponse.json({
        success: false,
        error: 'form_submissions表不存在',
        suggestion: '请先初始化数据库表'
      })
    }

    // 3. 检查表结构
    const tableStructure = await db.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_schema = 'public' 
      AND table_name = 'form_submissions'
      ORDER BY ordinal_position
    `)
    console.log('表结构:', tableStructure.rows)

    // 4. 获取所有数据（不分页）
    const allData = await db.query('SELECT * FROM form_submissions ORDER BY submitted_at DESC')
    console.log('表中总记录数:', allData.rows.length)
    console.log('最近5条记录:', allData.rows.slice(0, 5))

    // 5. 获取统计信息
    const stats = await db.query(`
      SELECT 
        COUNT(*) as total,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending,
        COUNT(CASE WHEN email_sent = true THEN 1 END) as email_sent
      FROM form_submissions
    `)
    console.log('统计信息:', stats.rows[0])

    return NextResponse.json({
      success: true,
      debug: {
        databaseConnection: connectionTest.rows[0],
        tableExists: tableExists.rows[0].exists,
        tableStructure: tableStructure.rows,
        totalRecords: allData.rows.length,
        recentRecords: allData.rows.slice(0, 5),
        stats: stats.rows[0]
      }
    })

  } catch (error) {
    console.error('调试检查出错:', error)
    return NextResponse.json(
      { 
        success: false,
        error: '调试检查失败',
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
} 