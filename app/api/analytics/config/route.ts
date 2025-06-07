import { NextRequest, NextResponse } from 'next/server'

// 模拟配置存储（实际项目中应该使用数据库）
let analyticsConfig = {
  gtm_id: 'GTM-PCJRWMF2',
  ga4_id: '',
  gtag_id: '',
  enabled: true,
  debug_mode: false,
  track_pageviews: true,
  track_events: true,
  track_ecommerce: false,
  use_direct_gtm: true,
  skip_gtm: false,
  use_local_only: false,
  fallback_enabled: true,
  custom_dimensions: [],
  goals: []
}

export async function GET() {
  try {
    return NextResponse.json(analyticsConfig)
  } catch (error) {
    console.error('获取配置失败:', error)
    return NextResponse.json(
      { error: '获取配置失败' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const newConfig = await request.json()
    
    // 验证配置
    if (!newConfig.gtm_id || !newConfig.gtm_id.startsWith('GTM-')) {
      return NextResponse.json(
        { error: 'GTM ID 格式不正确' },
        { status: 400 }
      )
    }
    
    // 更新配置
    analyticsConfig = {
      ...analyticsConfig,
      ...newConfig,
      updatedAt: new Date().toISOString()
    }
    
    console.log('Analytics 配置已更新:', analyticsConfig)
    
    return NextResponse.json({ 
      success: true, 
      message: '配置已保存',
      config: analyticsConfig 
    })
    
  } catch (error) {
    console.error('保存配置失败:', error)
    return NextResponse.json(
      { error: '保存配置失败' },
      { status: 500 }
    )
  }
}

// 测试连接
export async function PUT(request: NextRequest) {
  try {
    const { gtm_id } = await request.json()
    
    // 测试 GTM 连接
    try {
      const response = await fetch(`https://www.googletagmanager.com/gtm.js?id=${gtm_id}`, {
        method: 'HEAD',
        signal: AbortSignal.timeout(5000) // 5秒超时
      })
      
      if (response.ok) {
        return NextResponse.json({
          success: true,
          message: 'GTM 连接正常',
          gtm_status: 'active'
        })
      } else {
        return NextResponse.json({
          success: false,
          message: 'GTM 连接失败，将使用本地分析',
          gtm_status: 'failed'
        })
      }
    } catch (error) {
      return NextResponse.json({
        success: false,
        message: 'GTM 连接超时，将使用本地分析',
        gtm_status: 'timeout'
      })
    }
    
  } catch (error) {
    console.error('测试连接失败:', error)
    return NextResponse.json(
      { error: '测试连接失败' },
      { status: 500 }
    )
  }
} 