import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

// 报价申请记录接口
interface QuoteRequest {
  id: number
  fullName: string
  email: string
  company: string
  phone: string
  country: string
  productCategories: string
  originCountry: string
  destinationCountries: string[]
  shippingMethods: string[]
  description: string
  status: string
  emailSent: boolean
  emailMessageId: string
  recipientsTo: string
  recipientsCc: string
  recipientsBcc: string
  replyStatus: string
  adminNotes: string
  quoteProvided: boolean
  quoteAmount: number
  quoteCurrency: string
  quoteValidUntil: string
  submittedAt: string
  repliedAt: string
  updatedAt: string
}

// GET: 获取报价申请记录列表
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const status = searchParams.get('status')
    const replyStatus = searchParams.get('replyStatus')
    const country = searchParams.get('country')
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

    if (country) {
      whereConditions.push(`country = $${paramIndex}`)
      queryParams.push(country)
      paramIndex++
    }

    if (search) {
      whereConditions.push(`(full_name ILIKE $${paramIndex} OR email ILIKE $${paramIndex} OR company ILIKE $${paramIndex})`)
      queryParams.push(`%${search}%`)
      paramIndex++
    }

    const whereClause = whereConditions.length > 0 ? `WHERE ${whereConditions.join(' AND ')}` : ''

    // 获取总数
    const countQuery = `SELECT COUNT(*) FROM quote_requests ${whereClause}`
    const countResult = await db.query(countQuery, queryParams)
    const totalCount = parseInt(countResult.rows[0].count)

    // 获取数据
    const dataQuery = `
      SELECT 
        id,
        full_name,
        email,
        company,
        phone,
        country,
        product_categories,
        origin_country,
        destination_countries,
        shipping_methods,
        description,
        status,
        email_sent,
        email_message_id,
        recipients_to,
        recipients_cc,
        recipients_bcc,
        reply_status,
        admin_notes,
        quote_provided,
        quote_amount,
        quote_currency,
        quote_valid_until,
        submitted_at,
        replied_at,
        updated_at
      FROM quote_requests 
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
        COUNT(CASE WHEN status = 'quoted' THEN 1 END) as quoted,
        COUNT(CASE WHEN status = 'approved' THEN 1 END) as approved,
        COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected,
        COUNT(CASE WHEN reply_status = 'no_reply' THEN 1 END) as no_reply,
        COUNT(CASE WHEN reply_status = 'replied' THEN 1 END) as replied,
        COUNT(CASE WHEN email_sent = true THEN 1 END) as email_sent,
        COUNT(CASE WHEN quote_provided = true THEN 1 END) as quote_provided
      FROM quote_requests
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
    console.error('获取报价申请记录时出错:', error)
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

// PUT: 更新报价申请记录
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const updateData = await request.json()

    if (!id) {
      return NextResponse.json(
        { error: '缺少报价申请ID' },
        { status: 400 }
      )
    }

    // 构建更新查询
    const allowedFields = [
      'status',
      'reply_status', 
      'admin_notes',
      'quote_provided',
      'quote_amount',
      'quote_currency',
      'quote_valid_until'
    ]
    
    const updateFields = []
    const updateValues = []
    let paramIndex = 1

    for (const [key, value] of Object.entries(updateData)) {
      if (allowedFields.includes(key)) {
        updateFields.push(`${key} = $${paramIndex}`)
        updateValues.push(value)
        paramIndex++
      }
    }

    if (updateFields.length === 0) {
      return NextResponse.json(
        { error: '没有有效的更新字段' },
        { status: 400 }
      )
    }

    // 添加replied_at时间戳（如果回复状态更新为已回复）
    if (updateData.reply_status === 'replied') {
      updateFields.push(`replied_at = NOW()`)
    }

    // 添加updated_at时间戳
    updateFields.push(`updated_at = NOW()`)
    
    updateValues.push(id) // 最后一个参数是ID
    
    const updateQuery = `
      UPDATE quote_requests 
      SET ${updateFields.join(', ')}
      WHERE id = $${paramIndex}
      RETURNING *
    `

    const result = await db.query(updateQuery, updateValues)

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: '未找到指定的报价申请记录' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: '报价申请记录更新成功',
      data: result.rows[0]
    })

  } catch (error) {
    console.error('更新报价申请记录时出错:', error)
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

// DELETE: 删除报价申请记录
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: '缺少报价申请ID' },
        { status: 400 }
      )
    }

    const deleteQuery = `DELETE FROM quote_requests WHERE id = $1 RETURNING *`
    const result = await db.query(deleteQuery, [id])

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: '未找到指定的报价申请记录' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: '报价申请记录删除成功',
      data: result.rows[0]
    })

  } catch (error) {
    console.error('删除报价申请记录时出错:', error)
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