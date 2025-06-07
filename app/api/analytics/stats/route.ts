import { NextRequest, NextResponse } from 'next/server'

// 模拟数据存储（实际项目中应该使用数据库）
let analyticsData: any[] = []

export async function GET() {
  try {
    // 计算统计数据
    const now = new Date()
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000)
    
    // 过滤最近24小时的数据
    const recentEvents = analyticsData.filter(event => 
      new Date(event.timestamp) > last24Hours
    )
    
    // 计算活跃用户（基于唯一IP或用户代理）
    const uniqueUsers = new Set(recentEvents.map(event => 
      event.userAgent + event.url.split('/')[2] // 简单的用户识别
    )).size
    
    // 计算页面浏览量
    const pageViews = recentEvents.filter(event => 
      event.event === 'page_view'
    ).length
    
    // 计算总事件数
    const totalEvents = recentEvents.length
    
    // 热门页面
    const pageViewEvents = recentEvents.filter(event => event.event === 'page_view')
    const pageStats = pageViewEvents.reduce((acc: any, event) => {
      const path = event.page_path || new URL(event.url).pathname
      acc[path] = (acc[path] || 0) + 1
      return acc
    }, {})
    
    const topPages = Object.entries(pageStats)
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, 5)
      .map(([page, views]) => ({ page, views }))
    
    // 热门事件
    const eventStats = recentEvents.reduce((acc: any, event) => {
      acc[event.event] = (acc[event.event] || 0) + 1
      return acc
    }, {})
    
    const topEvents = Object.entries(eventStats)
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, 5)
      .map(([event, count]) => ({ event, count }))
    
    const stats = {
      activeUsers: uniqueUsers,
      pageViews: pageViews,
      events: totalEvents,
      topPages: topPages,
      topEvents: topEvents,
      lastUpdated: new Date().toISOString()
    }
    
    return NextResponse.json(stats)
  } catch (error) {
    console.error('获取统计数据失败:', error)
    return NextResponse.json(
      { error: '获取统计数据失败' },
      { status: 500 }
    )
  }
}

// 用于接收分析数据（从主 analytics route 调用）
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // 存储数据（实际项目中应该保存到数据库）
    analyticsData.push({
      ...data,
      id: Date.now().toString(),
      receivedAt: new Date().toISOString()
    })
    
    // 保持最近1000条记录
    if (analyticsData.length > 1000) {
      analyticsData = analyticsData.slice(-1000)
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('保存分析数据失败:', error)
    return NextResponse.json(
      { error: '保存分析数据失败' },
      { status: 500 }
    )
  }
} 