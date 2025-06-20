import { NextRequest, NextResponse } from 'next/server'
import { executeQuery } from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    const debugLog: string[] = []
    const debugData: any = {}
    
    debugLog.push('=== 数据库连接测试开始 ===')
    
    // 1. 测试基本数据库连接
    debugLog.push('步骤1: 测试数据库连接')
    try {
      const connectionTest = await executeQuery('SELECT 1 as test')
      debugLog.push(`数据库连接测试: ${connectionTest.success ? '成功' : '失败'}`)
      if (!connectionTest.success) {
        debugLog.push(`连接错误: ${connectionTest.error}`)
      }
      debugData.connectionTest = connectionTest
    } catch (error) {
      debugLog.push(`数据库连接异常: ${error}`)
      debugData.connectionError = error
    }
    
    // 2. 检查users表是否存在
    debugLog.push('步骤2: 检查users表结构')
    try {
      const tableCheck = await executeQuery(`
        SELECT column_name, data_type, is_nullable, column_default
        FROM information_schema.columns 
        WHERE table_name = 'users' 
        ORDER BY ordinal_position
      `)
      debugLog.push(`users表结构查询: ${tableCheck.success ? '成功' : '失败'}`)
      if (tableCheck.success && tableCheck.data) {
        debugLog.push(`users表列数: ${tableCheck.data.length}`)
        tableCheck.data.forEach((col: any) => {
          debugLog.push(`  列: ${col.column_name} (${col.data_type}) - 可空: ${col.is_nullable}`)
        })
        debugData.tableStructure = tableCheck.data
      } else {
        debugLog.push(`表结构查询错误: ${tableCheck.error}`)
      }
    } catch (error) {
      debugLog.push(`检查表结构异常: ${error}`)
    }
    
    // 3. 尝试查询users表中的所有数据
    debugLog.push('步骤3: 查询users表中的所有数据')
    try {
      const allUsersQuery = await executeQuery('SELECT * FROM users')
      debugLog.push(`查询所有用户: ${allUsersQuery.success ? '成功' : '失败'}`)
      if (allUsersQuery.success && allUsersQuery.data) {
        debugLog.push(`用户表中的记录数: ${allUsersQuery.data.length}`)
        debugData.allUsersInDB = allUsersQuery.data
      } else {
        debugLog.push(`查询用户错误: ${allUsersQuery.error}`)
      }
    } catch (error) {
      debugLog.push(`查询用户异常: ${error}`)
    }
    
    // 4. 尝试插入测试用户
    debugLog.push('步骤4: 尝试插入测试用户')
    try {
      const testInsert = await executeQuery(`
        INSERT INTO users (username, email, password_hash, role, last_login, is_active)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, username, email
      `, ['test_user', 'test@test.com', 'test_hash', 'user', '测试', true])
      
      debugLog.push(`测试插入: ${testInsert.success ? '成功' : '失败'}`)
      if (testInsert.success && testInsert.data) {
        debugLog.push(`插入的用户ID: ${testInsert.data[0]?.id}`)
        debugData.testInsertResult = testInsert.data[0]
        
        // 删除测试用户
        await executeQuery('DELETE FROM users WHERE username = $1', ['test_user'])
        debugLog.push('测试用户已删除')
      } else {
        debugLog.push(`插入错误: ${testInsert.error}`)
        debugData.insertError = testInsert.error
      }
    } catch (error) {
      debugLog.push(`插入测试异常: ${error}`)
      debugData.insertException = error
    }
    
    debugLog.push('=== 数据库连接测试完成 ===')
    
    return NextResponse.json({
      success: true,
      message: '数据库连接测试完成',
      debugLog,
      debugData
    })
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 