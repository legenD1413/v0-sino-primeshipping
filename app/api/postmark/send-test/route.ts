import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { apiToken, fromEmail, replyToEmail, messageStream, testEmail, toEmail, ccEmail, bccEmail } = body

    // 验证必需的字段
    if (!apiToken || !fromEmail || !testEmail) {
      return NextResponse.json(
        { error: '缺少必需的字段' },
        { status: 400 }
      )
    }

    // 准备收件人地址
    // 主收件人：如果配置了收件箱则使用收件箱，否则使用测试邮箱
    const primaryTo = toEmail || testEmail
    
    // 准备抄送地址列表
    const ccAddresses = []
    
    // 如果配置了收件箱且与测试邮箱不同，将测试邮箱添加到抄送
    if (toEmail && testEmail && toEmail !== testEmail) {
      ccAddresses.push(testEmail)
    }
    
    // 如果配置了抄送邮箱，添加到抄送列表
    if (ccEmail) {
      ccAddresses.push(ccEmail)
    }

    // 准备邮件数据
    const emailData = {
      From: fromEmail,
      To: primaryTo,
      Subject: 'SPS 邮件系统测试',
      ...(ccAddresses.length > 0 && { Cc: ccAddresses.join(', ') }),  // 抄送邮箱列表
      ...(bccEmail && { Bcc: bccEmail }),  // 如果有密抄邮箱则添加
      HtmlBody: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>SPS 邮件系统测试</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #2563eb; margin-bottom: 10px;">SPS 邮件系统测试</h1>
                    <p style="color: #666; font-size: 16px;">新普瑞姆国际货运邮件系统配置测试</p>
                </div>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="color: #1e40af; margin-top: 0;">✅ 配置测试成功</h2>
                    <p>恭喜！您的Postmark邮件系统配置已成功。这表明：</p>
                    <ul style="color: #4b5563;">
                        <li>API令牌配置正确</li>
                        <li>发件人邮箱验证通过</li>
                        <li>邮件发送功能正常</li>
                        <li>DNS配置无误</li>
                        <li>收件人配置正确</li>
                    </ul>
                </div>
                
                <div style="background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    <h3 style="color: #1e40af; margin-top: 0;">邮件发送详情</h3>
                    <p><strong>发件人:</strong> ${fromEmail}</p>
                    <p><strong>主收件人:</strong> ${primaryTo}</p>
                    ${ccAddresses.length > 0 ? `<p><strong>抄送收件人:</strong> ${ccAddresses.join(', ')}</p>` : ''}
                    ${bccEmail ? `<p><strong>密抄收件人:</strong> ${bccEmail}</p>` : ''}
                    <p><strong>回复地址:</strong> ${replyToEmail}</p>
                    <p><strong>消息流:</strong> ${messageStream}</p>
                    <p><strong>测试时间:</strong> ${new Date().toLocaleString('zh-CN')}</p>
                </div>
                
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-top: 20px;">
                    <h3 style="color: #0369a1; margin-top: 0;">📧 收件人说明</h3>
                    <p style="margin-bottom: 10px;"><strong>主收件人:</strong> ${toEmail ? '配置的收件箱' : '测试邮箱'}</p>
                    ${toEmail && testEmail && toEmail !== testEmail ? `<p style="margin-bottom: 10px;"><strong>抄送收件人:</strong> 包含测试邮箱以确保您能收到</p>` : ''}
                    ${ccEmail ? `<p style="margin-bottom: 10px;"><strong>抄送收件人:</strong> 包含配置的抄送邮箱</p>` : ''}
                    ${bccEmail ? `<p style="margin-bottom: 10px;"><strong>密抄收件人:</strong> 包含配置的密抄邮箱（其他收件人看不到）</p>` : ''}
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 14px;">
                        此邮件由 SPS 管理系统自动发送，请勿回复
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
SPS 邮件系统测试

恭喜！您的Postmark邮件系统配置已成功。

邮件发送详情：
- 发件人: ${fromEmail}
- 主收件人: ${primaryTo}
${ccAddresses.length > 0 ? `- 抄送收件人: ${ccAddresses.join(', ')}` : ''}
${bccEmail ? `- 密抄收件人: ${bccEmail}` : ''}
- 回复地址: ${replyToEmail}
- 消息流: ${messageStream}
- 测试时间: ${new Date().toLocaleString('zh-CN')}

收件人说明：
- 主收件人: ${toEmail ? '配置的收件箱' : '测试邮箱'}
${toEmail && testEmail && toEmail !== testEmail ? '- 抄送收件人: 包含测试邮箱以确保您能收到' : ''}
${ccEmail ? '- 抄送收件人: 包含配置的抄送邮箱' : ''}
${bccEmail ? '- 密抄收件人: 包含配置的密抄邮箱（其他收件人看不到）' : ''}

此邮件由 SPS 管理系统自动发送，请勿回复。

© 2024 新普瑞姆国际货运有限公司
      `,
      ReplyTo: replyToEmail,
      MessageStream: messageStream
    }

    // 记录邮件发送详情（用于调试）
    console.log('邮件发送详情:', {
      To: primaryTo,
      Cc: ccAddresses.length > 0 ? ccAddresses.join(', ') : '无',
      Bcc: bccEmail || '无',
      totalRecipients: 1 + ccAddresses.length + (bccEmail ? 1 : 0)
    })

    // 发送邮件到Postmark
    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': apiToken
      },
      body: JSON.stringify(emailData)
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('Postmark API错误:', result)
      return NextResponse.json(
        { 
          error: 'Postmark API错误', 
          details: result.Message || result.ErrorCode || '未知错误'
        },
        { status: response.status }
      )
    }

    // 返回成功响应，包含收件人详情
    return NextResponse.json({
      success: true,
      message: '测试邮件发送成功',
      messageId: result.MessageID,
      submittedAt: result.SubmittedAt,
      recipients: {
        to: primaryTo,
        cc: ccAddresses.length > 0 ? ccAddresses : null,
        bcc: bccEmail || null,
        total: 1 + ccAddresses.length + (bccEmail ? 1 : 0)
      }
    })

  } catch (error) {
    console.error('发送测试邮件时出错:', error)
    return NextResponse.json(
      { error: '发送测试邮件时出错', details: error instanceof Error ? error.message : '未知错误' },
      { status: 500 }
    )
  }
} 