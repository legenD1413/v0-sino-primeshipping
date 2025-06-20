import { NextRequest, NextResponse } from 'next/server'
import { executeQuery } from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    console.log('开始用户表迁移...')
    
    // 执行迁移脚本
    const migrationQuery = `
      DO $$ 
      BEGIN
          -- 检查 is_active 列是否存在
          IF NOT EXISTS (
              SELECT 1 
              FROM information_schema.columns 
              WHERE table_name = 'users' 
              AND column_name = 'is_active'
          ) THEN
              -- 添加 is_active 列
              ALTER TABLE users ADD COLUMN is_active BOOLEAN DEFAULT true;
              
              -- 将所有现有用户设置为活跃状态
              UPDATE users SET is_active = true WHERE is_active IS NULL;
              
              RAISE NOTICE '已为用户表添加 is_active 列';
          ELSE
              RAISE NOTICE 'is_active 列已存在，跳过添加';
          END IF;
      END $$;
    `
    
    const result = await executeQuery(migrationQuery)
    
    if (result.success) {
      console.log('用户表迁移成功')
      return NextResponse.json({
        success: true,
        message: '用户表迁移成功'
      })
    } else {
      console.error('用户表迁移失败:', result.error)
      return NextResponse.json({
        success: false,
        error: result.error
      }, { status: 500 })
    }
  } catch (error) {
    console.error('迁移过程中发生错误:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 