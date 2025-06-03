import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    console.log('开始测试表单提交...')
    
    // 测试数据
    const testData = {
      fullName: '测试用户',
      email: 'test@example.com',
      company: '测试公司',
      businessType: 'tiktok',
      description: '这是一个测试提交'
    }

    console.log('准备插入测试数据:', testData)

    // 插入测试数据
    const insertQuery = `
      INSERT INTO form_submissions (
        full_name, 
        email, 
        company, 
        business_type, 
        description, 
        status,
        email_sent,
        email_message_id,
        submitted_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
      RETURNING id, submitted_at
    `
    
    const result = await db.query(insertQuery, [
      testData.fullName,
      testData.email,
      testData.company,
      testData.businessType,
      testData.description,
      'pending',
      false,
      'test-message-id'
    ])

    console.log('插入结果:', result.rows[0])

    // 验证数据是否插入成功
    const verifyQuery = 'SELECT COUNT(*) as total FROM form_submissions'
    const verifyResult = await db.query(verifyQuery)
    console.log('验证结果 - 总记录数:', verifyResult.rows[0].total)

    return NextResponse.json({
      success: true,
      message: '测试数据插入成功',
      insertedId: result.rows[0].id,
      submittedAt: result.rows[0].submitted_at,
      totalRecords: verifyResult.rows[0].total
    })

  } catch (error) {
    console.error('测试表单提交出错:', error)
    return NextResponse.json(
      { 
        success: false,
        error: '测试提交失败',
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
} 