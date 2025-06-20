import { NextRequest, NextResponse } from 'next/server'
import { executeQuery } from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    const debugLog: string[] = []
    
    debugLog.push('=== 修复users表开始 ===')
    
    // 1. 检查is_active列是否存在
    debugLog.push('步骤1: 检查is_active列是否存在')
    const checkColumn = await executeQuery(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'users' AND column_name = 'is_active'
    `)
    
    const columnExists = checkColumn.success && checkColumn.data && checkColumn.data.length > 0
    debugLog.push(`is_active列存在: ${columnExists}`)
    
    if (!columnExists) {
      // 2. 添加is_active列
      debugLog.push('步骤2: 添加is_active列')
      const addColumn = await executeQuery(`
        ALTER TABLE users 
        ADD COLUMN is_active BOOLEAN DEFAULT TRUE
      `)
      
      debugLog.push(`添加is_active列: ${addColumn.success ? '成功' : '失败'}`)
      if (!addColumn.success) {
        debugLog.push(`添加列错误: ${addColumn.error}`)
        return NextResponse.json({
          success: false,
          error: `添加is_active列失败: ${addColumn.error}`,
          debugLog
        })
      }
      
      // 3. 设置现有用户为活跃状态
      debugLog.push('步骤3: 设置现有用户为活跃状态')
      const updateExisting = await executeQuery(`
        UPDATE users SET is_active = TRUE WHERE is_active IS NULL
      `)
      
      debugLog.push(`更新现有用户: ${updateExisting.success ? '成功' : '失败'}`)
      if (!updateExisting.success) {
        debugLog.push(`更新用户错误: ${updateExisting.error}`)
      }
    } else {
      debugLog.push('步骤2: is_active列已存在，跳过添加')
    }
    
    // 4. 验证修复结果
    debugLog.push('步骤4: 验证修复结果')
    const finalCheck = await executeQuery(`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns 
      WHERE table_name = 'users' 
      ORDER BY ordinal_position
    `)
    
    debugLog.push(`最终表结构查询: ${finalCheck.success ? '成功' : '失败'}`)
    if (finalCheck.success && finalCheck.data) {
      debugLog.push(`最终列数: ${finalCheck.data.length}`)
      const isActiveColumn = finalCheck.data.find((col: any) => col.column_name === 'is_active')
      debugLog.push(`is_active列现在存在: ${!!isActiveColumn}`)
    }
    
    // 5. 查看所有用户数据
    debugLog.push('步骤5: 查看所有用户数据')
    const allUsers = await executeQuery('SELECT * FROM users')
    debugLog.push(`查询用户: ${allUsers.success ? '成功' : '失败'}`)
    if (allUsers.success && allUsers.data) {
      debugLog.push(`用户数量: ${allUsers.data.length}`)
      allUsers.data.forEach((user: any, index: number) => {
        debugLog.push(`用户${index + 1}: ${user.username} - 激活: ${user.is_active}`)
      })
    }
    
    debugLog.push('=== 修复users表完成 ===')
    
    return NextResponse.json({
      success: true,
      message: 'users表修复完成',
      debugLog,
      data: {
        columnExists,
        finalStructure: finalCheck.data,
        allUsers: allUsers.data
      }
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 