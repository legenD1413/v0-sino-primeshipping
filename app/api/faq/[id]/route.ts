import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

// 更新FAQ
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { question, answer, category, searchable_text, is_popular, is_active, sort_order } = body
    
    if (!question || !answer || !category) {
      return NextResponse.json(
        { success: false, error: '问题、答案和分类为必填项' },
        { status: 400 }
      )
    }
    
    const result = await db.query(
      `UPDATE faq_items 
       SET question = $1, answer = $2, category = $3, searchable_text = $4, 
           is_popular = $5, is_active = $6, sort_order = $7, updated_at = CURRENT_TIMESTAMP
       WHERE id = $8
       RETURNING *`,
      [question, answer, category, searchable_text || '', is_popular || false, is_active !== false, sort_order || 0, parseInt(id)]
    )
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'FAQ不存在' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ success: true, data: result.rows[0] })
  } catch (error) {
    console.error('更新FAQ失败:', error)
    return NextResponse.json(
      { success: false, error: '更新FAQ失败' },
      { status: 500 }
    )
  }
}

// 删除FAQ
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    const result = await db.query(
      'DELETE FROM faq_items WHERE id = $1 RETURNING *',
      [parseInt(id)]
    )
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'FAQ不存在' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ success: true, message: 'FAQ删除成功' })
  } catch (error) {
    console.error('删除FAQ失败:', error)
    return NextResponse.json(
      { success: false, error: '删除FAQ失败' },
      { status: 500 }
    )
  }
} 