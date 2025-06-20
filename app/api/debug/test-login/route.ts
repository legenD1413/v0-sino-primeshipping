import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('=== 测试登录API ===')
    
    // 测试默认凭据
    const testCredentials = {
      username: 'admin',
      password: 'sps2024!'
    }
    
    console.log('测试凭据:', testCredentials)
    
    // 调用真实的登录API
    const response = await fetch(`${request.nextUrl.origin}/api/sps-admin/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testCredentials)
    })
    
    console.log('登录API响应状态:', response.status)
    const result = await response.json()
    console.log('登录API响应数据:', result)
    
    return NextResponse.json({
      testCredentials,
      apiResponse: {
        status: response.status,
        data: result
      },
      loginWorking: response.ok && result.success,
      recommendation: response.ok && result.success 
        ? '✅ 默认登录凭据工作正常' 
        : '❌ 登录失败，请检查数据库或重新初始化'
    })
    
  } catch (error) {
    console.error('测试登录失败:', error)
    return NextResponse.json({
      error: error instanceof Error ? error.message : '未知错误',
      recommendation: '❌ 测试失败，请检查服务器状态'
    }, { status: 500 })
  }
} 