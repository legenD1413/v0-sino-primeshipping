import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

// 获取所有FAQ
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const active = searchParams.get('active')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const search = searchParams.get('search')
    
    let query = 'SELECT * FROM faq_items'
    const conditions = []
    const params = []
    
    if (category) {
      conditions.push(`category = $${params.length + 1}`)
      params.push(category)
    }
    
    if (active !== null) {
      conditions.push(`is_active = $${params.length + 1}`)
      params.push(active === 'true')
    }
    
    if (search) {
      conditions.push(`(question ILIKE $${params.length + 1} OR searchable_text ILIKE $${params.length + 2})`)
      params.push(`%${search}%`, `%${search}%`)
    }
    
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ')
    }
    
    // 计算总数
    const countQuery = query.replace('SELECT *', 'SELECT COUNT(*)')
    const totalResult = await db.query(countQuery, params)
    const total = parseInt(totalResult.rows[0].count)
    
    // 添加排序和分页
    query += ' ORDER BY sort_order ASC, created_at DESC'
    query += ` LIMIT $${params.length + 1} OFFSET $${params.length + 2}`
    params.push(limit, (page - 1) * limit)
    
    const faqs = await db.query(query, params)
    
    // 获取统计信息
    const statsResult = await db.query(`
      SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE is_active = true) as active,
        COUNT(*) FILTER (WHERE is_popular = true) as popular,
        COUNT(*) FILTER (WHERE category = 'general') as general,
        COUNT(*) FILTER (WHERE category = 'shipping') as shipping,
        COUNT(*) FILTER (WHERE category = 'customs') as customs,
        COUNT(*) FILTER (WHERE category = 'pricing') as pricing,
        COUNT(*) FILTER (WHERE category = 'services') as services
      FROM faq_items
    `)
    const stats = statsResult.rows[0]
    
    return NextResponse.json({ 
      success: true, 
      data: faqs.rows,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      },
      stats
    })
  } catch (error) {
    console.error('获取FAQ失败:', error)
    return NextResponse.json(
      { success: false, error: '获取FAQ失败' },
      { status: 500 }
    )
  }
}

// 创建新FAQ
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { question, answer, category, searchable_text, is_popular, sort_order } = body
    
    if (!question || !answer || !category) {
      return NextResponse.json(
        { success: false, error: '问题、答案和分类为必填项' },
        { status: 400 }
      )
    }
    
    const result = await db.query(
      `INSERT INTO faq_items (question, answer, category, searchable_text, is_popular, sort_order)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [question, answer, category, searchable_text || '', is_popular || false, sort_order || 0]
    )
    
    return NextResponse.json({ success: true, data: result.rows[0] })
  } catch (error) {
    console.error('创建FAQ失败:', error)
    return NextResponse.json(
      { success: false, error: '创建FAQ失败' },
      { status: 500 }
    )
  }
} 