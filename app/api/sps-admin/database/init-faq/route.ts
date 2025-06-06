import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

export async function POST(request: NextRequest) {
  try {
    console.log('开始初始化FAQ表...')
    
    // 读取SQL文件内容并执行
    const createTableSQL = `
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
    `
    
    // 执行创建表的SQL
    await db.query(createTableSQL)
    console.log('FAQ表创建成功')
    
    // 检查是否已有数据
    const countResult = await db.query('SELECT COUNT(*) FROM faq_items')
    const existingCount = parseInt(countResult.rows[0].count)
    
    if (existingCount === 0) {
      // 插入示例数据
      const insertDataSQL = `
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
         true, 5),

        ('How long will my shipment take?',
         'Transit times depend on the shipping method and destination:<ul><li>Express: 3-5 business days worldwide</li><li>Air Freight: 5-8 business days</li><li>Sea-Air: 12-15 business days</li><li>Ocean FCL/LCL to North America: 25-35 days</li><li>Ocean FCL/LCL to Europe: 30-40 days</li><li>Ocean FCL/LCL to Australia/NZ: 20-30 days</li><li>Ocean FCL/LCL to Southeast Asia: 10-20 days</li><li>Rail to Europe: 18-22 days</li></ul>These are estimates and may vary due to customs clearance, port congestion, or seasonal factors.',
         'shipping',
         'Transit times depend on the shipping method and destination: Express: 3-5 business days worldwide Air Freight: 5-8 business days Sea-Air: 12-15 business days Ocean FCL/LCL to North America: 25-35 days Ocean FCL/LCL to Europe: 30-40 days Ocean FCL/LCL to Australia/NZ: 20-30 days Ocean FCL/LCL to Southeast Asia: 10-20 days Rail to Europe: 18-22 days. These are estimates and may vary due to customs clearance, port congestion, or seasonal factors.',
         false, 6),

        ('How can I track my shipment?',
         'You can track your shipment in several ways:<ul><li>Through our online tracking portal on our website</li><li>Via our mobile app (iOS and Android)</li><li>By email notifications (opt-in during booking)</li><li>By contacting your account manager</li></ul>All shipments receive a unique tracking number upon confirmation. Our system provides real-time updates at key milestones throughout the shipping journey.',
         'shipping',
         'You can track your shipment in several ways: Through our online tracking portal on our website Via our mobile app (iOS and Android) By email notifications (opt-in during booking) By contacting your account manager. All shipments receive a unique tracking number upon confirmation. Our system provides real-time updates at key milestones throughout the shipping journey.',
         false, 7),

        ('What documents are required for international shipping?',
         'Standard required documents include:<ul><li>Commercial Invoice</li><li>Packing List</li><li>Bill of Lading or Air Waybill</li><li>Certificate of Origin (when applicable)</li><li>Import/Export Declarations</li></ul>Depending on the product and destination, additional documents may be required:<ul><li>Product certifications (CE, FDA, etc.)</li><li>Material Safety Data Sheets (for chemicals)</li><li>Fumigation certificates (for wooden packaging)</li><li>Inspection certificates</li><li>Special permits for restricted items</li></ul>Our customs compliance team can provide guidance on the specific documentation required for your shipment and destination.',
         'customs',
         'Standard required documents include: Commercial Invoice Packing List Bill of Lading or Air Waybill Certificate of Origin (when applicable) Import/Export Declarations. Depending on the product and destination, additional documents may be required: Product certifications (CE, FDA, etc.) Material Safety Data Sheets (for chemicals) Fumigation certificates (for wooden packaging) Inspection certificates Special permits for restricted items. Our customs compliance team can provide guidance on the specific documentation required for your shipment and destination.',
         true, 8),

        ('How is shipping cost calculated?',
         'Shipping costs are calculated based on several factors:<ul><li><strong>For Express and Air Freight:</strong> Primarily based on chargeable weight (the greater of actual weight or dimensional weight)</li><li><strong>For LCL Ocean Freight:</strong> Based on volume (cubic meters or CBM)</li><li><strong>For FCL Ocean Freight:</strong> Fixed rate per container size (20ft, 40ft, 40ft HC)</li><li><strong>Additional factors affecting all shipments:</strong><ul><li>Origin and destination locations</li><li>Service level selected (standard, expedited, etc.)</li><li>Fuel surcharges and security fees</li><li>Special handling requirements</li><li>Insurance coverage</li><li>Seasonal factors and market conditions</li></ul></li></ul>For accurate pricing, we recommend requesting a quote with your specific shipment details. Volume discounts are available for regular shippers.',
         'pricing',
         'Shipping costs are calculated based on several factors: For Express and Air Freight: Primarily based on chargeable weight (the greater of actual weight or dimensional weight) For LCL Ocean Freight: Based on volume (cubic meters or CBM) For FCL Ocean Freight: Fixed rate per container size (20ft, 40ft, 40ft HC) Additional factors affecting all shipments: Origin and destination locations Service level selected (standard, expedited, etc.) Fuel surcharges and security fees Special handling requirements Insurance coverage Seasonal factors and market conditions. For accurate pricing, we recommend requesting a quote with your specific shipment details. Volume discounts are available for regular shippers.',
         true, 9),

        ('What is your FBA preparation service?',
         'Our FBA (Fulfillment by Amazon) preparation service helps sellers meet Amazon''s strict requirements before shipping to FBA warehouses. The service includes:<ul><li><strong>Inspection:</strong> Quality check of products against specifications</li><li><strong>Labeling:</strong> Application of Amazon FNSKU labels, warning labels, and expiration dates</li><li><strong>Packaging:</strong> Proper packaging according to Amazon requirements</li><li><strong>Bundling:</strong> Creating multi-packs or kits as needed</li><li><strong>Poly-bagging:</strong> Sealing products in compliant poly bags with suffocation warnings</li><li><strong>Box preparation:</strong> Proper carton labeling and packaging</li><li><strong>Shipment creation:</strong> Assistance with Amazon shipping plan creation</li><li><strong>Direct delivery:</strong> Shipping directly to Amazon fulfillment centers</li></ul>We have dedicated FBA prep facilities in China with staff trained in Amazon''s latest requirements. This service helps prevent costly rejections, delays, and additional fees at Amazon warehouses.',
         'services',
         'Our FBA (Fulfillment by Amazon) preparation service helps sellers meet Amazon''s strict requirements before shipping to FBA warehouses. The service includes: Inspection: Quality check of products against specifications Labeling: Application of Amazon FNSKU labels, warning labels, and expiration dates Packaging: Proper packaging according to Amazon requirements Bundling: Creating multi-packs or kits as needed Poly-bagging: Sealing products in compliant poly bags with suffocation warnings Box preparation: Proper carton labeling and packaging Shipment creation: Assistance with Amazon shipping plan creation Direct delivery: Shipping directly to Amazon fulfillment centers. We have dedicated FBA prep facilities in China with staff trained in Amazon''s latest requirements. This service helps prevent costly rejections, delays, and additional fees at Amazon warehouses.',
         true, 10);
      `
      
      await db.query(insertDataSQL)
      console.log('FAQ示例数据插入成功')
    }
    
    // 添加表注释
    await db.query(`
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
    `)
    
    return NextResponse.json({
      success: true,
      message: 'FAQ表初始化成功',
      existingRecords: existingCount
    })

  } catch (error) {
    console.error('初始化FAQ表时出错:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: '初始化FAQ表失败', 
        details: error instanceof Error ? error.message : '未知错误'
      },
      { status: 500 }
    )
  }
} 