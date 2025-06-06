-- 创建FAQ表
CREATE TABLE IF NOT EXISTS faq_items (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    searchable_text TEXT,
    is_popular BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 创建更新时间触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_faq_items_updated_at 
    BEFORE UPDATE ON faq_items 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_faq_category ON faq_items(category);
CREATE INDEX IF NOT EXISTS idx_faq_active ON faq_items(is_active);
CREATE INDEX IF NOT EXISTS idx_faq_popular ON faq_items(is_popular);
CREATE INDEX IF NOT EXISTS idx_faq_sort_order ON faq_items(sort_order);

-- 插入现有FAQ数据
INSERT INTO faq_items (question, answer, category, searchable_text, is_popular, sort_order) VALUES
('What is SinoPrime Shipping?', 
 'SinoPrime Shipping is a comprehensive international logistics provider specializing in shipping solutions from China to global destinations. We offer a wide range of services including FCL and LCL ocean freight, air freight, express shipping, FBA preparation, and overseas warehousing solutions.',
 'general',
 'SinoPrime Shipping is a comprehensive international logistics provider specializing in shipping solutions from China to global destinations. We offer a wide range of services including FCL and LCL ocean freight, air freight, express shipping, FBA preparation, and overseas warehousing solutions.',
 true, 1),

('Which countries do you ship to?',
 'We ship to over 200 countries and territories worldwide, with particularly strong networks in North America, Europe, Australia, Southeast Asia, and the Middle East. Our global logistics network ensures reliable delivery to virtually any destination.',
 'general',
 'We ship to over 200 countries and territories worldwide, with particularly strong networks in North America, Europe, Australia, Southeast Asia, and the Middle East. Our global logistics network ensures reliable delivery to virtually any destination.',
 false, 2),

('Do you have a minimum order requirement?',
 'Our minimum order requirements vary by service type:<ul><li>Express Shipping: No minimum</li><li>Air Freight: 45kg minimum</li><li>LCL Ocean Freight: 0.5 CBM minimum</li><li>FCL Ocean Freight: No minimum (full container)</li></ul>For smaller shipments, we recommend our express or small parcel services which have no minimum requirements.',
 'general',
 'Our minimum order requirements vary by service type: Express Shipping: No minimum Air Freight: 45kg minimum LCL Ocean Freight: 0.5 CBM minimum FCL Ocean Freight: No minimum (full container). For smaller shipments, we recommend our express or small parcel services which have no minimum requirements.',
 false, 3),

('What makes SinoPrime Shipping different from other logistics providers?',
 'SinoPrime Shipping differentiates itself through:<ul><li>Specialized China-to-global shipping expertise</li><li>Comprehensive end-to-end logistics solutions</li><li>Dedicated account managers for personalized service</li><li>Advanced tracking and visibility systems</li><li>Competitive rates through established carrier relationships</li><li>Value-added services like FBA preparation and overseas warehousing</li><li>Multilingual support team with deep industry knowledge</li></ul>Our focus is on creating customized logistics solutions that address your specific business needs.',
 'general',
 'SinoPrime Shipping differentiates itself through: Specialized China-to-global shipping expertise Comprehensive end-to-end logistics solutions Dedicated account managers for personalized service Advanced tracking and visibility systems Competitive rates through established carrier relationships Value-added services like FBA preparation and overseas warehousing Multilingual support team with deep industry knowledge. Our focus is on creating customized logistics solutions that address your specific business needs.',
 false, 4),

('What shipping methods do you offer?',
 'We offer multiple shipping methods to meet different needs:<ul><li>Express Shipping (3-5 days)</li><li>Air Freight (5-8 days)</li><li>Sea-Air Combined (12-15 days)</li><li>LCL Ocean Freight (25-35 days)</li><li>FCL Ocean Freight (25-40 days)</li><li>Rail Freight (18-22 days to Europe)</li><li>Special Cargo Solutions for oversized or dangerous goods</li></ul>Delivery times vary based on destination and current logistics conditions.',
 'shipping',
 'We offer multiple shipping methods to meet different needs: Express Shipping (3-5 days) Air Freight (5-8 days) Sea-Air Combined (12-15 days) LCL Ocean Freight (25-35 days) FCL Ocean Freight (25-40 days) Rail Freight (18-22 days to Europe) Special Cargo Solutions for oversized or dangerous goods. Delivery times vary based on destination and current logistics conditions.',
 true, 5);

COMMENT ON TABLE faq_items IS 'FAQ问答项目表';
COMMENT ON COLUMN faq_items.id IS '主键ID';
COMMENT ON COLUMN faq_items.question IS '问题内容';
COMMENT ON COLUMN faq_items.answer IS '答案内容，支持HTML格式';
COMMENT ON COLUMN faq_items.category IS '分类：general, shipping, customs, pricing, services';
COMMENT ON COLUMN faq_items.searchable_text IS '搜索文本，用于搜索匹配';
COMMENT ON COLUMN faq_items.is_popular IS '是否为热门问题';
COMMENT ON COLUMN faq_items.is_active IS '是否启用';
COMMENT ON COLUMN faq_items.sort_order IS '排序权重，数字越小越靠前';
COMMENT ON COLUMN faq_items.created_at IS '创建时间';
COMMENT ON COLUMN faq_items.updated_at IS '更新时间'; 