-- 创建报价请求表
CREATE TABLE IF NOT EXISTS quote_requests (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  country VARCHAR(100) NOT NULL,
  product_categories TEXT NOT NULL,
  origin_country VARCHAR(100) NOT NULL DEFAULT 'china',
  destination_country JSONB NOT NULL,
  shipping_method JSONB NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  admin_notes TEXT,
  replied_at TIMESTAMP,
  submitted_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_quote_requests_email ON quote_requests(email);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_submitted_at ON quote_requests(submitted_at);
CREATE INDEX IF NOT EXISTS idx_quote_requests_company ON quote_requests(company);

-- 创建更新时间触发器
CREATE OR REPLACE FUNCTION update_quote_requests_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_quote_requests_updated_at
    BEFORE UPDATE ON quote_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_quote_requests_updated_at();

-- 添加注释
COMMENT ON TABLE quote_requests IS '报价请求表';
COMMENT ON COLUMN quote_requests.id IS '主键ID';
COMMENT ON COLUMN quote_requests.full_name IS '客户姓名';
COMMENT ON COLUMN quote_requests.company IS '公司名称';
COMMENT ON COLUMN quote_requests.email IS '邮箱地址';
COMMENT ON COLUMN quote_requests.phone IS '电话号码';
COMMENT ON COLUMN quote_requests.country IS '客户所在国家';
COMMENT ON COLUMN quote_requests.product_categories IS '产品类别';
COMMENT ON COLUMN quote_requests.origin_country IS '货物发货国';
COMMENT ON COLUMN quote_requests.destination_country IS '目的国/地区 (JSON数组)';
COMMENT ON COLUMN quote_requests.shipping_method IS '运输方式 (JSON数组)';
COMMENT ON COLUMN quote_requests.description IS '需求描述';
COMMENT ON COLUMN quote_requests.status IS '处理状态 (pending, processing, quoted, closed)';
COMMENT ON COLUMN quote_requests.admin_notes IS '管理员备注';
COMMENT ON COLUMN quote_requests.replied_at IS '回复时间';
COMMENT ON COLUMN quote_requests.submitted_at IS '提交时间';
COMMENT ON COLUMN quote_requests.updated_at IS '更新时间';
COMMENT ON COLUMN quote_requests.created_at IS '创建时间'; 