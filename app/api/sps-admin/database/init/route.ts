import { NextRequest, NextResponse } from 'next/server'
import { initializeDatabase } from '@/lib/database'

// POST - 初始化数据库表
export async function POST(request: NextRequest) {
  try {
    const result = await initializeDatabase()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message
      })
    } else {
      return NextResponse.json({
        success: false,
        message: result.message,
        error: result.error
      }, { status: 500 })
    }
  } catch (error) {
    console.error('数据库初始化失败:', error)
    return NextResponse.json({
      success: false,
      message: '数据库初始化失败',
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 