import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    // 创建报价申请记录表
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS quote_requests (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        country VARCHAR(50) NOT NULL,
        product_categories TEXT NOT NULL,
        ecommerce_platforms VARCHAR(50),
        origin_country VARCHAR(50) NOT NULL DEFAULT 'china',
        destination_countries JSONB NOT NULL,
        shipping_methods JSONB NOT NULL,
        description TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        email_sent BOOLEAN DEFAULT FALSE,
        email_message_id VARCHAR(255),
        recipients_to VARCHAR(255),
        recipients_cc TEXT,
        recipients_bcc VARCHAR(255),
        reply_status VARCHAR(20) DEFAULT 'no_reply',
        admin_notes TEXT,
        quote_provided BOOLEAN DEFAULT FALSE,
        quote_amount DECIMAL(10,2),
        quote_currency VARCHAR(3) DEFAULT 'USD',
        quote_valid_until DATE,
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
        -- 添加 phone 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='quote_requests' AND column_name='phone') THEN
          ALTER TABLE quote_requests ADD COLUMN phone VARCHAR(50);
        END IF;
        
        -- 添加 origin_country 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='quote_requests' AND column_name='origin_country') THEN
          ALTER TABLE quote_requests ADD COLUMN origin_country VARCHAR(50) NOT NULL DEFAULT 'china';
        END IF;
        
        -- 添加 destination_countries 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='quote_requests' AND column_name='destination_countries') THEN
          ALTER TABLE quote_requests ADD COLUMN destination_countries JSONB;
        END IF;
        
        -- 添加 shipping_methods 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='quote_requests' AND column_name='shipping_methods') THEN
          ALTER TABLE quote_requests ADD COLUMN shipping_methods JSONB;
        END IF;
        
        -- 添加 quote_provided 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='quote_requests' AND column_name='quote_provided') THEN
          ALTER TABLE quote_requests ADD COLUMN quote_provided BOOLEAN DEFAULT FALSE;
        END IF;
        
        -- 添加 quote_amount 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='quote_requests' AND column_name='quote_amount') THEN
          ALTER TABLE quote_requests ADD COLUMN quote_amount DECIMAL(10,2);
        END IF;
        
        -- 添加 quote_currency 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='quote_requests' AND column_name='quote_currency') THEN
          ALTER TABLE quote_requests ADD COLUMN quote_currency VARCHAR(3) DEFAULT 'USD';
        END IF;
        
        -- 添加 quote_valid_until 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='quote_requests' AND column_name='quote_valid_until') THEN
          ALTER TABLE quote_requests ADD COLUMN quote_valid_until DATE;
        END IF;
        
        -- 添加 ecommerce_platforms 字段
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='quote_requests' AND column_name='ecommerce_platforms') THEN
          ALTER TABLE quote_requests ADD COLUMN ecommerce_platforms VARCHAR(50);
        END IF;
      END $$;
    `

    await db.query(addNewColumnsQuery)

    // 创建索引以提高查询性能
    const createIndexes = [
      'CREATE INDEX IF NOT EXISTS idx_quote_requests_email ON quote_requests(email);',
      'CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);',
      'CREATE INDEX IF NOT EXISTS idx_quote_requests_country ON quote_requests(country);',
      'CREATE INDEX IF NOT EXISTS idx_quote_requests_submitted_at ON quote_requests(submitted_at);',
      'CREATE INDEX IF NOT EXISTS idx_quote_requests_reply_status ON quote_requests(reply_status);',
      'CREATE INDEX IF NOT EXISTS idx_quote_requests_quote_provided ON quote_requests(quote_provided);'
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
      WHERE table_name = 'quote_requests' 
      ORDER BY ordinal_position;
    `
    
    const tableInfo = await db.query(tableInfoQuery)

    return NextResponse.json({
      success: true,
      message: '报价申请表创建/更新成功',
      tableInfo: tableInfo.rows,
      tableCount: tableInfo.rows.length
    })

  } catch (error) {
    console.error('创建报价申请表时出错:', error)
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