-- 添加 ecommerce_platforms 字段到 quote_requests 表
-- 如果字段不存在则添加
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

-- 为新字段添加注释
COMMENT ON COLUMN quote_requests.ecommerce_platforms IS '电商平台类型';

-- 为新字段创建索引（可选，但有助于查询性能）
CREATE INDEX IF NOT EXISTS idx_quote_requests_ecommerce_platforms 
ON quote_requests(ecommerce_platforms); 