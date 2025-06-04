import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    // 创建表单提交记录表
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS form_submissions (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        country VARCHAR(50) NOT NULL,
        sales_platforms JSONB NOT NULL,
        product_categories TEXT NOT NULL,
        monthly_order_volume VARCHAR(50) NOT NULL,
        logistics_challenges JSONB NOT NULL,
        other_challenge TEXT,
        description TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        email_sent BOOLEAN DEFAULT FALSE,
        email_message_id VARCHAR(255),
        recipients_to VARCHAR(255),
        recipients_cc TEXT,
        recipients_bcc VARCHAR(255),
        reply_status VARCHAR(20) DEFAULT 'no_reply',
        admin_notes TEXT,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        replied_at TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `

    await db.query(createTableQuery)

    // 检查并添加新字段（如果表已存在但缺少新字段）
    const addNewColumnsQuery = `
      DO $$
      BEGIN
        -- 添加 country 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='form_submissions' AND column_name='country') THEN
          ALTER TABLE form_submissions ADD COLUMN country VARCHAR(50);
        END IF;
        
        -- 添加 sales_platforms 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='form_submissions' AND column_name='sales_platforms') THEN
          ALTER TABLE form_submissions ADD COLUMN sales_platforms JSONB;
        END IF;
        
        -- 添加 product_categories 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='form_submissions' AND column_name='product_categories') THEN
          ALTER TABLE form_submissions ADD COLUMN product_categories TEXT;
        END IF;
        
        -- 添加 monthly_order_volume 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='form_submissions' AND column_name='monthly_order_volume') THEN
          ALTER TABLE form_submissions ADD COLUMN monthly_order_volume VARCHAR(50);
        END IF;
        
        -- 添加 logistics_challenges 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='form_submissions' AND column_name='logistics_challenges') THEN
          ALTER TABLE form_submissions ADD COLUMN logistics_challenges JSONB;
        END IF;
        
        -- 添加 other_challenge 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='form_submissions' AND column_name='other_challenge') THEN
          ALTER TABLE form_submissions ADD COLUMN other_challenge TEXT;
        END IF;
        
        -- 移除旧的 business_type 字段（如果存在）
        IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='form_submissions' AND column_name='business_type') THEN
          ALTER TABLE form_submissions DROP COLUMN business_type;
        END IF;
      END $$;
    `

    await db.query(addNewColumnsQuery)

    // 创建索引以提高查询性能
    const createIndexes = [
      'CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON form_submissions(email);',
      'CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON form_submissions(status);',
      'CREATE INDEX IF NOT EXISTS idx_form_submissions_country ON form_submissions(country);',
      'CREATE INDEX IF NOT EXISTS idx_form_submissions_monthly_volume ON form_submissions(monthly_order_volume);',
      'CREATE INDEX IF NOT EXISTS idx_form_submissions_submitted_at ON form_submissions(submitted_at);',
      'CREATE INDEX IF NOT EXISTS idx_form_submissions_reply_status ON form_submissions(reply_status);'
    ]

    for (const indexQuery of createIndexes) {
      await db.query(indexQuery)
    }

    // 获取表信息
    const tableInfoQuery = `
      SELECT 
        column_name,
        data_type,
        is_nullable,
        column_default
      FROM information_schema.columns 
      WHERE table_name = 'form_submissions' 
      ORDER BY ordinal_position;
    `
    
    const tableInfo = await db.query(tableInfoQuery)

    return NextResponse.json({
      success: true,
      message: '表单提交记录表创建/更新成功',
      tableInfo: tableInfo.rows,
      tableCount: tableInfo.rows.length
    })

  } catch (error) {
    console.error('创建表单记录表时出错:', error)
    return NextResponse.json(
      { 
        success: false,
        error: '数据库操作失败', 
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
} 