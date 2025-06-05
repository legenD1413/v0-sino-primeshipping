import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/database'

// 表单数据接口
interface QuoteFormData {
  fullName: string
  company: string
  email: string
  phone: string
  country: string
  productCategories: string
  ecommercePlatforms: string
  originCountry: string
  destinationCountry: string[]
  shippingMethod: string[]
  description: string
}

export async function POST(request: NextRequest) {
  try {
    const formData: QuoteFormData = await request.json()
    
    // 验证必需的字段
    if (!formData.fullName || !formData.email || !formData.company || !formData.country || !formData.productCategories || !formData.ecommercePlatforms || formData.destinationCountry.length === 0 || formData.shippingMethod.length === 0 || !formData.description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 从数据库获取Postmark配置
    let postmarkConfig
    try {
      const configQuery = `
        SELECT config_value 
        FROM system_config 
        WHERE config_key = 'postmark_config'
      `
      const configResult = await db.query(configQuery)
      
      if (configResult.rows.length > 0) {
        postmarkConfig = configResult.rows[0].config_value
      } else {
        // 使用默认配置
        postmarkConfig = {
          apiToken: process.env.POSTMARK_API_TOKEN || '68ef6c85-6260-4277-8527-530727b0cc22',
          fromEmail: 'noreply@sinoprimeshipping.com',
          replyToEmail: 'support@sinoprimeshipping.com',
          messageStream: 'outbound',
          toEmail: 'quotes@sinoprimeshipping.com',
          ccEmail: 'admin@sinoprimeshipping.com',
          bccEmail: ''
        }
      }
    } catch (configError) {
      console.error('获取邮件配置失败，使用默认配置:', configError)
      postmarkConfig = {
        apiToken: process.env.POSTMARK_API_TOKEN || '68ef6c85-6260-4277-8527-530727b0cc22',
        fromEmail: 'noreply@sinoprimeshipping.com',
        replyToEmail: 'support@sinoprimeshipping.com',
        messageStream: 'outbound',
        toEmail: 'quotes@sinoprimeshipping.com',
        ccEmail: 'admin@sinoprimeshipping.com',
        bccEmail: ''
      }
    }

    // 准备收件人地址
    const primaryTo = postmarkConfig.toEmail
    const ccAddresses = []
    
    if (postmarkConfig.ccEmail) {
      ccAddresses.push(postmarkConfig.ccEmail)
    }

    // 获取国家的中文名称
    const countryMap: Record<string, string> = {
      'usa': '美国',
      'canada': '加拿大',
      'other': '其他'
    }

    // 获取目的地国家的中文名称
    const destinationMap: Record<string, string> = {
      'usa': '美国',
      'canada': '加拿大',
      'usa-canada': '美国和加拿大',
      'other': '其他'
    }

    // 获取运输方式的中文名称
    const shippingMethodMap: Record<string, string> = {
      'fba-prep': 'FBA准备和发货服务',
      'dtc-shipping': 'DTC直接发货',
      'international-express': '国际快递',
      'warehousing': '仓储和配送',
      'lcl-door': 'LCL拼箱到门',
      'fcl-door': 'FCL整箱到门',
      'air-freight': '空运到门'
    }

    // 获取电商平台的中文名称
    const ecommercePlatformMap: Record<string, string> = {
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

    const countryCN = countryMap[formData.country] || formData.country
    const destinationsCN = formData.destinationCountry.map(d => destinationMap[d] || d).join(', ')
    const shippingMethodsCN = formData.shippingMethod.map(s => shippingMethodMap[s] || s).join(', ')
    const ecommercePlatformCN = ecommercePlatformMap[formData.ecommercePlatforms] || formData.ecommercePlatforms

    // 准备邮件内容
    const emailData = {
      From: postmarkConfig.fromEmail,
      To: primaryTo,
      ...(ccAddresses.length > 0 && { Cc: ccAddresses.join(', ') }),
      ...(postmarkConfig.bccEmail && { Bcc: postmarkConfig.bccEmail }),
      Subject: `新的专业报价申请 - ${formData.fullName}`,
      HtmlBody: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>新的报价申请</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #1e40af; margin-bottom: 10px;">💼 新的专业报价申请</h1>
                    <p style="color: #666; font-size: 16px;">收到新的客户报价请求</p>
                </div>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="color: #1e40af; margin-top: 0;">📋 联系信息</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">姓名：</td>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${formData.fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">公司名称：</td>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${formData.company}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">邮箱：</td>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${formData.email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">电话：</td>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${formData.phone || '未提供'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">国家：</td>
                            <td style="padding: 8px 0;">${countryCN} (${formData.country})</td>
                        </tr>
                    </table>
                </div>

                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="color: #0369a1; margin-top: 0;">📦 产品信息</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e0f2fe; font-weight: bold; width: 140px;">主要产品类别：</td>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e0f2fe;">${formData.productCategories}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e0f2fe; font-weight: bold;">电商平台：</td>
                            <td style="padding: 8px 0; border-bottom: 1px solid #e0f2fe;">${ecommercePlatformCN}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">产品来源国：</td>
                            <td style="padding: 8px 0;">中国 (${formData.originCountry})</td>
                        </tr>
                    </table>
                </div>

                <div style="background: #fef3f2; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="color: #dc2626; margin-top: 0;">🚚 物流需求</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #fecaca; font-weight: bold; width: 140px;">目的地国家：</td>
                            <td style="padding: 8px 0; border-bottom: 1px solid #fecaca;">${destinationsCN}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold;">运输方式：</td>
                            <td style="padding: 8px 0;">${shippingMethodsCN}</td>
                        </tr>
                    </table>
                </div>
                
                <div style="background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    <h3 style="color: #1e40af; margin-top: 0;">📝 详细需求描述</h3>
                    <p style="white-space: pre-wrap; line-height: 1.6;">${formData.description}</p>
                </div>
                
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #10b981;">
                    <h3 style="color: #059669; margin-top: 0;">📞 后续行动</h3>
                    <ul style="color: #047857; margin: 0;">
                        <li>请在24小时内回复客户报价请求</li>
                        <li>准备详细的物流方案和报价</li>
                        <li>安排客户咨询和需求确认</li>
                        <li>在管理后台标记处理状态</li>
                    </ul>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 14px;">
                        申请时间：${new Date().toLocaleString('zh-CN')}
                    </p>
                    <p style="color: #6b7280; font-size: 14px;">
                        此邮件由 SPS 报价系统自动发送
                    </p>
                    <p style="color: #6b7280; font-size: 12px;">
                        © 2024 新普瑞姆国际货运有限公司
                    </p>
                </div>
            </div>
        </body>
        </html>
      `,
      TextBody: `
新的专业报价申请

联系信息：
- 姓名：${formData.fullName}
- 公司名称：${formData.company}
- 邮箱：${formData.email}
- 电话：${formData.phone || '未提供'}
- 国家：${countryCN} (${formData.country})

产品信息：
- 主要产品类别：${formData.productCategories}
- 电商平台：${ecommercePlatformCN}
- 产品来源国：中国 (${formData.originCountry})

物流需求：
- 目的地国家：${destinationsCN}
- 运输方式：${shippingMethodsCN}

详细需求描述：
${formData.description}

申请时间：${new Date().toLocaleString('zh-CN')}

后续行动：
- 请在24小时内回复客户报价请求
- 准备详细的物流方案和报价
- 安排客户咨询和需求确认
- 在管理后台标记处理状态

此邮件由 SPS 报价系统自动发送。
© 2024 新普瑞姆国际货运有限公司
      `,
      ReplyTo: postmarkConfig.replyToEmail,
      MessageStream: postmarkConfig.messageStream
    }

    // 保存表单数据到数据库（优先进行）
    let savedQuoteId = null
    try {
      console.log('准备保存报价申请到数据库...')
      console.log('表单数据:', formData)
      
      const insertQuery = `
        INSERT INTO quote_requests (
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
          email_sent,
          submitted_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW())
        RETURNING id
      `
      
      const result = await db.query(insertQuery, [
        formData.fullName,
        formData.email,
        formData.company,
        formData.phone || null,
        formData.country,
        formData.productCategories,
        formData.ecommercePlatforms,
        formData.originCountry,
        JSON.stringify(formData.destinationCountry),
        JSON.stringify(formData.shippingMethod),
        formData.description,
        'pending',
        false // 先设为false，邮件发送成功后再更新
      ])
      
      savedQuoteId = result.rows[0]?.id
      console.log('数据库保存成功，ID:', savedQuoteId)
    } catch (dbError) {
      console.error('保存报价申请到数据库失败:', dbError)
      return NextResponse.json(
        { 
          error: 'Database save failed', 
          details: dbError instanceof Error ? dbError.message : 'Unknown database error'
        },
        { status: 500 }
      )
    }

    // 尝试发送邮件到Postmark
    let emailResult = null
    let emailSent = false
    try {
      const emailResponse = await fetch('https://api.postmarkapp.com/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Postmark-Server-Token': postmarkConfig.apiToken
        },
        body: JSON.stringify(emailData)
      })

      emailResult = await emailResponse.json()

      if (emailResponse.ok) {
        emailSent = true
        console.log('邮件发送成功:', emailResult.MessageID)
        
        // 更新数据库中的邮件状态
        try {
          await db.query(`
            UPDATE quote_requests 
            SET email_sent = true, 
                email_message_id = $1,
                recipients_to = $2,
                recipients_cc = $3,
                recipients_bcc = $4
            WHERE id = $5
          `, [
            emailResult.MessageID,
            primaryTo,
            ccAddresses.length > 0 ? ccAddresses.join(', ') : null,
            postmarkConfig.bccEmail || null,
            savedQuoteId
          ])
        } catch (updateError) {
          console.error('更新邮件状态失败:', updateError)
        }
      } else {
        console.error('Postmark邮件发送失败:', emailResult)
        // 不返回错误，因为数据已经保存到数据库
      }
    } catch (emailError) {
      console.error('邮件发送过程出错:', emailError)
      // 不返回错误，因为数据已经保存到数据库
    }

    // 记录成功信息
    console.log('报价申请处理成功:', {
      quoteId: savedQuoteId,
      emailSent: emailSent,
      messageId: emailResult?.MessageID,
      submittedAt: emailResult?.SubmittedAt,
      recipients: {
        to: primaryTo,
        cc: ccAddresses.length > 0 ? ccAddresses : null,
        bcc: postmarkConfig.bccEmail || null
      }
    })

    return NextResponse.json({
      success: true,
      message: emailSent ? 'Quote request submitted successfully! Email notification sent.' : 'Quote request submitted successfully! Email notification will be sent shortly.',
      quoteId: savedQuoteId,
      messageId: emailResult?.MessageID,
      submittedAt: emailResult?.SubmittedAt,
      emailSent: emailSent
    })

  } catch (error) {
    console.error('处理报价申请时出错:', error)
    return NextResponse.json(
      { error: 'Server error, please try again later', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 