import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    console.log('开始运行 ecommerce_platforms 字段迁移...')

    // 执行迁移脚本
    const migrationScript = `
      -- 添加 ecommerce_platforms 字段到 quote_requests 表
      DO $$
      BEGIN
          -- 检查字段是否存在
          IF NOT EXISTS (
              SELECT 1 
              FROM information_schema.columns 
              WHERE table_name = 'quote_requests' 
              AND column_name = 'ecommerce_platforms'
          ) THEN
              -- 添加字段 (允许 NULL，因为现有记录没有这个字段)
              ALTER TABLE quote_requests 
              ADD COLUMN ecommerce_platforms VARCHAR(50);
              
              RAISE NOTICE 'ecommerce_platforms 字段已添加到 quote_requests 表';
          ELSE
              RAISE NOTICE 'ecommerce_platforms 字段已存在于 quote_requests 表中';
          END IF;
      END $$;
    `

    await db.query(migrationScript)
    console.log('迁移脚本执行成功')

    // 添加注释
    await db.query(`
      COMMENT ON COLUMN quote_requests.ecommerce_platforms IS '电商平台类型';
    `)

    // 创建索引
    await db.query(`
      CREATE INDEX IF NOT EXISTS idx_quote_requests_ecommerce_platforms 
      ON quote_requests(ecommerce_platforms);
    `)

    // 验证字段是否成功添加
    const verificationQuery = `
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns 
      WHERE table_name = 'quote_requests' 
      AND column_name = 'ecommerce_platforms'
    `
    
    const verificationResult = await db.query(verificationQuery)

    return NextResponse.json({
      success: true,
      message: 'ecommerce_platforms 字段迁移成功完成',
      fieldInfo: verificationResult.rows[0] || null,
      migrationComplete: verificationResult.rows.length > 0
    })

  } catch (error) {
    console.error('ecommerce_platforms 字段迁移失败:', error)
    return NextResponse.json(
      { 
        success: false,
        error: '数据库迁移失败', 
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
} 