import { NextRequest, NextResponse } from 'next/server'
import { testDatabaseConnection, getDatabaseTables, initializeDatabase } from '@/lib/database'

// POST - 测试数据库连接
export async function POST(request: NextRequest) {
  try {
    const result = await testDatabaseConnection()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
        data: result.data
      })
    } else {
      return NextResponse.json({
        success: false,
        message: result.message,
        error: result.error
      }, { status: 500 })
    }
  } catch (error) {
    console.error('数据库测试失败:', error)
    return NextResponse.json({
      success: false,
      message: '数据库测试失败',
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
}

// GET - 获取数据库表信息
export async function GET(request: NextRequest) {
  try {
    const result = await getDatabaseTables()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: '获取数据库表信息成功',
        tables: result.data
      })
    } else {
      return NextResponse.json({
        success: false,
        message: '获取数据库表信息失败',
        error: result.error
      }, { status: 500 })
    }
  } catch (error) {
    console.error('获取数据库表信息失败:', error)
    return NextResponse.json({
      success: false,
      message: '获取数据库表信息失败',
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 