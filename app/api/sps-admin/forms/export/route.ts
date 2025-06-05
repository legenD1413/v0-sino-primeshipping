import { NextRequest, NextResponse } from 'next/server'
import { Pool } from 'pg'
import * as XLSX from 'xlsx'

// 数据库连接配置
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_gqE7GGOxtNOGwmxZKpBD1YDCUAKsBnLr@ep-old-snowflake-a5u2r6j1.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

export async function GET(request: NextRequest) {
  try {
    // 从数据库获取所有表单数据
    const query = `
      SELECT 
        id,
        full_name,
        email,
        company,
        country,
        sales_platforms,
        product_categories,
        monthly_order_volume,
        logistics_challenges,
        other_challenge,
        description,
        status,
        reply_status,
        email_sent,
        email_message_id,
        recipients_to,
        recipients_cc,
        recipients_bcc,
        admin_notes,
        submitted_at,
        replied_at,
        updated_at
      FROM form_submissions 
      ORDER BY submitted_at DESC
    `
    
    const result = await pool.query(query)
    const formData = result.rows

    if (formData.length === 0) {
      return NextResponse.json({
        success: false,
        error: '没有找到表单数据'
      }, { status: 404 })
    }

    // 处理数据，转换为Excel友好的格式
    const excelData = formData.map((form, index) => ({
      '序号': index + 1,
      '姓名': form.full_name,
      '邮箱': form.email,
      '公司': form.company,
      '国家': form.country,
      '销售平台': Array.isArray(form.sales_platforms) ? form.sales_platforms.join(', ') : form.sales_platforms,
      '产品类别': form.product_categories,
      '月订单量': form.monthly_order_volume,
      '物流挑战': Array.isArray(form.logistics_challenges) ? form.logistics_challenges.join(', ') : form.logistics_challenges,
      '其他挑战': form.other_challenge || '',
      '业务描述': form.description,
      '申请状态': translateStatus(form.status),
      '回复状态': form.reply_status === 'replied' ? '已回复' : '未回复',
      '邮件发送状态': form.email_sent ? '已发送' : '未发送',
      '邮件ID': form.email_message_id || '',
      '主收件人': form.recipients_to || '',
      '抄送收件人': form.recipients_cc || '',
      '密抄收件人': form.recipients_bcc || '',
      '管理员备注': form.admin_notes || '',
      '提交时间': formatDate(form.submitted_at),
      '回复时间': form.replied_at ? formatDate(form.replied_at) : '',
      '更新时间': form.updated_at ? formatDate(form.updated_at) : ''
    }))

    // 创建工作簿
    const workbook = XLSX.utils.book_new()
    
    // 创建工作表
    const worksheet = XLSX.utils.json_to_sheet(excelData)
    
    // 设置列宽
    const columnWidths = [
      { wch: 6 },   // 序号
      { wch: 15 },  // 姓名
      { wch: 25 },  // 邮箱
      { wch: 20 },  // 公司
      { wch: 12 },  // 国家
      { wch: 20 },  // 销售平台
      { wch: 15 },  // 产品类别
      { wch: 15 },  // 月订单量
      { wch: 25 },  // 物流挑战
      { wch: 20 },  // 其他挑战
      { wch: 40 },  // 业务描述
      { wch: 12 },  // 申请状态
      { wch: 12 },  // 回复状态
      { wch: 15 },  // 邮件发送状态
      { wch: 30 },  // 邮件ID
      { wch: 25 },  // 主收件人
      { wch: 25 },  // 抄送收件人
      { wch: 25 },  // 密抄收件人
      { wch: 30 },  // 管理员备注
      { wch: 20 },  // 提交时间
      { wch: 20 },  // 回复时间
      { wch: 20 }   // 更新时间
    ]
    worksheet['!cols'] = columnWidths
    
    // 添加工作表到工作簿
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SPS申请表单数据')
    
    // 生成Excel文件缓冲区
    const excelBuffer = XLSX.write(workbook, {
      type: 'buffer',
      bookType: 'xlsx'
    })
    
    // 生成文件名（包含当前日期）
    const currentDate = new Date().toISOString().split('T')[0]
    const fileName = `SPS_申请表单数据_${currentDate}.xlsx`
    
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
    console.error('导出Excel时出错:', error)
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
    'approved': '已通过',
    'rejected': '已拒绝'
  }
  return statuses[status] || status
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