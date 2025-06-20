-- 为用户表添加 is_active 列
-- 如果列不存在，则添加它，默认值为 true

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