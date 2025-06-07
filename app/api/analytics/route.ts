import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const analyticsData = await request.json()
    
    // 记录分析数据到控制台
    console.log('📊 收到分析数据:', {
      timestamp: analyticsData.timestamp,
      event: analyticsData.event,
      url: analyticsData.url,
      userAgent: analyticsData.userAgent
    })
    
    // 转发数据到统计端点
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/analytics/stats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(analyticsData)
      })
    } catch (error) {
      console.error('转发统计数据失败:', error)
    }
    
    return NextResponse.json({ 
      success: true, 
      message: '分析数据已接收' 
    })
    
  } catch (error) {
    console.error('处理分析数据时出错:', error)
    return NextResponse.json(
      { success: false, message: '处理失败' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: '本地分析数据收集端点',
    status: 'active',
    gtmId: 'GTM-PCJRWMF2',
    endpoints: {
      stats: '/api/analytics/stats',
      config: '/api/analytics/config'
    }
  })
} 