import { NextRequest, NextResponse } from 'next/server'
import { Pool } from 'pg'
import * as XLSX from 'xlsx'

// 数据库连接配置
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_gqE7GGOxtNOGwmxZKpBD1YDCUAKsBnLr@ep-old-snowflake-a5u2r6j1.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { ids } = body

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({
        success: false,
        error: '请提供要导出的记录ID'
      }, { status: 400 })
    }

    // 从数据库获取选定的报价申请数据
    const placeholders = ids.map((_, index) => `$${index + 1}`).join(',')
    const query = `
      SELECT 
        id,
        full_name,
        email,
        company,
        phone,
        country,
        product_categories,
        ecommerce_platforms,
        origin_country,
        destination_countries,
        shipping_methods,
        description,
        status,
        reply_status,
        email_sent,
        email_message_id,
        recipients_to,
        recipients_cc,
        recipients_bcc,
        admin_notes,
        quote_provided,
        quote_amount,
        quote_currency,
        quote_valid_until,
        submitted_at,
        replied_at,
        updated_at
      FROM quote_requests 
      WHERE id IN (${placeholders})
      ORDER BY submitted_at DESC
    `
    
    const result = await pool.query(query, ids)
    const quoteData = result.rows

    if (quoteData.length === 0) {
      return NextResponse.json({
        success: false,
        error: '没有找到指定的报价申请数据'
      }, { status: 404 })
    }

    // 处理数据，转换为Excel友好的格式
    const excelData = quoteData.map((quote, index) => ({
      '序号': index + 1,
      '客户姓名': quote.full_name,
      '邮箱地址': quote.email,
      '公司名称': quote.company,
      '联系电话': quote.phone || '',
      '所在国家': translateCountry(quote.country),
      '产品类别': quote.product_categories,
      '电商平台': translateEcommercePlatform(quote.ecommerce_platforms),
      '货物起运国': quote.origin_country === 'china' ? '中国' : quote.origin_country,
      '目的地国家': translateDestinations(quote.destination_countries),
      '运输方式': translateShippingMethods(quote.shipping_methods),
      '需求描述': quote.description,
      '申请状态': translateStatus(quote.status),
      '回复状态': quote.reply_status === 'replied' ? '已回复' : '未回复',
      '邮件发送状态': quote.email_sent ? '已发送' : '未发送',
      '邮件ID': quote.email_message_id || '',
      '主收件人': quote.recipients_to || '',
      '抄送收件人': quote.recipients_cc || '',
      '密抄收件人': quote.recipients_bcc || '',
      '管理员备注': quote.admin_notes || '',
      '是否提供报价': quote.quote_provided ? '是' : '否',
      '报价金额': quote.quote_amount || '',
      '报价货币': quote.quote_currency || '',
      '报价有效期': quote.quote_valid_until ? formatDate(quote.quote_valid_until) : '',
      '提交时间': formatDate(quote.submitted_at),
      '回复时间': quote.replied_at ? formatDate(quote.replied_at) : '',
      '更新时间': quote.updated_at ? formatDate(quote.updated_at) : ''
    }))

    // 创建工作簿
    const workbook = XLSX.utils.book_new()
    
    // 创建工作表
    const worksheet = XLSX.utils.json_to_sheet(excelData)
    
    // 设置列宽
    const columnWidths = [
      { wch: 6 },   // 序号
      { wch: 15 },  // 客户姓名
      { wch: 25 },  // 邮箱地址
      { wch: 20 },  // 公司名称
      { wch: 15 },  // 联系电话
      { wch: 12 },  // 所在国家
      { wch: 20 },  // 产品类别
      { wch: 15 },  // 电商平台
      { wch: 12 },  // 货物起运国
      { wch: 20 },  // 目的地国家
      { wch: 30 },  // 运输方式
      { wch: 40 },  // 需求描述
      { wch: 12 },  // 申请状态
      { wch: 12 },  // 回复状态
      { wch: 15 },  // 邮件发送状态
      { wch: 30 },  // 邮件ID
      { wch: 25 },  // 主收件人
      { wch: 25 },  // 抄送收件人
      { wch: 25 },  // 密抄收件人
      { wch: 30 },  // 管理员备注
      { wch: 15 },  // 是否提供报价
      { wch: 12 },  // 报价金额
      { wch: 12 },  // 报价货币
      { wch: 15 },  // 报价有效期
      { wch: 20 },  // 提交时间
      { wch: 20 },  // 回复时间
      { wch: 20 }   // 更新时间
    ]
    worksheet['!cols'] = columnWidths
    
    // 添加工作表到工作簿
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SPS报价申请数据')
    
    // 生成Excel文件缓冲区
    const excelBuffer = XLSX.write(workbook, {
      type: 'buffer',
      bookType: 'xlsx'
    })
    
    // 生成文件名（包含当前日期和记录数量）
    const currentDate = new Date().toISOString().split('T')[0]
    const fileName = `SPS_报价申请数据_${quoteData.length}条记录_${currentDate}.xlsx`
    
    // 返回Excel文件
    return new NextResponse(excelBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(fileName)}"`,
        'Content-Length': excelBuffer.length.toString()
      }
    })

  } catch (error) {
    console.error('导出报价申请Excel时出错:', error)
    return NextResponse.json({
      success: false,
      error: '导出失败，请稍后重试'
    }, { status: 500 })
  }
}

// 状态翻译函数
function translateStatus(status: string): string {
  const statuses: { [key: string]: string } = {
    'pending': '待处理',
    'processing': '处理中',
    'quoted': '已报价',
    'approved': '已通过',
    'rejected': '已拒绝'
  }
  return statuses[status] || status
}

// 国家翻译函数
function translateCountry(country: string): string {
  const countries: { [key: string]: string } = {
    'usa': '美国',
    'canada': '加拿大',
    'other': '其他'
  }
  return countries[country] || country
}

// 目的地国家翻译函数
function translateDestinations(destinations: any): string {
  if (!destinations) return ''
  
  const destinationArray = Array.isArray(destinations) ? destinations : 
    (typeof destinations === 'string' ? JSON.parse(destinations) : [])
    
  const destinationMap: { [key: string]: string } = {
    'usa': '美国',
    'canada': '加拿大',
    'usa-canada': '美国和加拿大',
    'other': '其他'
  }
  
  return destinationArray.map((d: string) => destinationMap[d] || d).join(', ')
}

// 运输方式翻译函数
function translateShippingMethods(methods: any): string {
  if (!methods) return ''
  
  const methodArray = Array.isArray(methods) ? methods : 
    (typeof methods === 'string' ? JSON.parse(methods) : [])
    
  const methodMap: { [key: string]: string } = {
    'fba-prep': 'FBA准备和发货服务',
    'dtc-shipping': 'DTC直接发货',
    'international-express': '国际快递',
    'warehousing': '仓储和配送',
    'lcl-door': 'LCL拼箱到门',
    'fcl-door': 'FCL整箱到门',
    'air-freight': '空运到门'
  }
  
  return methodArray.map((m: string) => methodMap[m] || m).join(', ')
}

// 电商平台翻译函数
function translateEcommercePlatform(platform: string): string {
  if (!platform) return ''
  
  const platformMap: { [key: string]: string } = {
    'shopify': 'Shopify',
    'amazon': 'Amazon',
    'wordpress': 'WordPress',
    'bigcommerce': 'BigCommerce',
    'wix': 'Wix',
    'ebay': 'Ebay',
    'etsy': 'Etsy',
    'lazada': 'Lazada',
    'magento': 'Magento',
    'lcl-fcl': 'LCL/FCL',
    'crowdfunding': '众筹平台',
    'individual-order': '个人订单',
    'none-other': '无/其他'
  }
  
  return platformMap[platform] || platform
}

// 日期格式化函数
function formatDate(dateString: string): string {
  if (!dateString) return ''
  try {
    return new Date(dateString).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  } catch (error) {
    return dateString
  }
} 