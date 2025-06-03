import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

// 表单提交记录接口
interface FormSubmission {
  id: number
  fullName: string
  email: string
  company: string
  businessType: string
  description: string
  status: string
  emailSent: boolean
  emailMessageId: string
  recipientsTo: string
  recipientsCc: string
  recipientsBcc: string
  replyStatus: string
  adminNotes: string
  submittedAt: string
  repliedAt: string
  updatedAt: string
}

// GET: 获取表单提交记录列表
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const status = searchParams.get('status')
    const replyStatus = searchParams.get('replyStatus')
    const businessType = searchParams.get('businessType')
    const search = searchParams.get('search')

    const offset = (page - 1) * limit

    // 构建查询条件
    let whereConditions = []
    let queryParams = []
    let paramIndex = 1

    if (status) {
      whereConditions.push(`status = $${paramIndex}`)
      queryParams.push(status)
      paramIndex++
    }

    if (replyStatus) {
      whereConditions.push(`reply_status = $${paramIndex}`)
      queryParams.push(replyStatus)
      paramIndex++
    }

    if (businessType) {
      whereConditions.push(`business_type = $${paramIndex}`)
      queryParams.push(businessType)
      paramIndex++
    }

    if (search) {
      whereConditions.push(`(full_name ILIKE $${paramIndex} OR email ILIKE $${paramIndex} OR company ILIKE $${paramIndex})`)
      queryParams.push(`%${search}%`)
      paramIndex++
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(' AND ')}` : ''

    // 获取总数
    const countQuery = `SELECT COUNT(*) FROM form_submissions ${whereClause}`
    const countResult = await db.query(countQuery, queryParams)
    const totalCount = parseInt(countResult.rows[0].count)

    // 获取数据
    const dataQuery = `
      SELECT 
        id,
        full_name,
        email,
        company,
        business_type,
        description,
        status,
        email_sent,
        email_message_id,
        recipients_to,
        recipients_cc,
        recipients_bcc,
        reply_status,
        admin_notes,
        submitted_at,
        replied_at,
        updated_at
      FROM form_submissions 
      ${whereClause}
      ORDER BY submitted_at DESC
      LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
    `
    
    queryParams.push(limit, offset)
    const dataResult = await db.query(dataQuery, queryParams)

    // 获取统计信息
    const statsQuery = `
      SELECT 
        COUNT(*) as total,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending,
        COUNT(CASE WHEN status = 'processing' THEN 1 END) as processing,
        COUNT(CASE WHEN status = 'approved' THEN 1 END) as approved,
        COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected,
        COUNT(CASE WHEN reply_status = 'no_reply' THEN 1 END) as no_reply,
        COUNT(CASE WHEN reply_status = 'replied' THEN 1 END) as replied,
        COUNT(CASE WHEN email_sent = true THEN 1 END) as email_sent
      FROM form_submissions
    `
    const statsResult = await db.query(statsQuery)

    return NextResponse.json({
      success: true,
      data: dataResult.rows,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        hasNext: page * limit < totalCount,
        hasPrev: page > 1
      },
      stats: statsResult.rows[0]
    })

  } catch (error) {
    console.error('获取表单数据时出错:', error)
    return NextResponse.json(
      { 
        success: false,
        error: '数据库查询失败', 
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
}

// PUT: 更新表单状态和备注
export async function PUT(request: NextRequest) {
  try {
    const { id, status, replyStatus, adminNotes } = await request.json()

    if (!id) {
      return NextResponse.json(
        { error: '缺少表单ID' },
        { status: 400 }
      )
    }

    // 构建更新字段
    let updateFields = []
    let queryParams = []
    let paramIndex = 1

    if (status) {
      updateFields.push(`status = $${paramIndex}`)
      queryParams.push(status)
      paramIndex++
    }

    if (replyStatus) {
      updateFields.push(`reply_status = $${paramIndex}`)
      queryParams.push(replyStatus)
      paramIndex++
      
      // 如果标记为已回复，设置回复时间
      if (replyStatus === 'replied') {
        updateFields.push(`replied_at = NOW()`)
      }
    }

    if (adminNotes !== undefined) {
      updateFields.push(`admin_notes = $${paramIndex}`)
      queryParams.push(adminNotes)
      paramIndex++
    }

    if (updateFields.length === 0) {
      return NextResponse.json(
        { error: '没有需要更新的字段' },
        { status: 400 }
      )
    }

    updateFields.push(`updated_at = NOW()`)

    const updateQuery = `
      UPDATE form_submissions 
      SET ${updateFields.join(', ')}
      WHERE id = $${paramIndex}
      RETURNING *
    `
    
    queryParams.push(id)
    const result = await db.query(updateQuery, queryParams)

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: '未找到指定的表单记录' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: '表单状态更新成功',
      data: result.rows[0]
    })

  } catch (error) {
    console.error('更新表单状态时出错:', error)
    return NextResponse.json(
      { 
        success: false,
        error: '数据库更新失败', 
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
}

// DELETE: 删除表单记录
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: '缺少表单ID' },
        { status: 400 }
      )
    }

    const deleteQuery = `DELETE FROM form_submissions WHERE id = $1 RETURNING *`
    const result = await db.query(deleteQuery, [id])

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: '未找到指定的表单记录' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: '表单记录删除成功',
      data: result.rows[0]
    })

  } catch (error) {
    console.error('删除表单记录时出错:', error)
    return NextResponse.json(
      { 
        success: false,
        error: '数据库删除失败', 
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
} 