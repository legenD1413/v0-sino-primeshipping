import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('=== 简单登录测试开始 ===')
    
    // 直接调用登录API
    const loginResponse = await fetch('http://localhost:3000/api/sps-admin/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'sps2024!'
      })
    })
    
    const loginData = await loginResponse.json()
    
    console.log('登录API状态码:', loginResponse.status)
    console.log('登录API响应:', loginData)
    console.log('响应是否OK:', loginResponse.ok)
    
    return NextResponse.json({
      success: true,
      message: '简单登录测试完成',
      data: {
        apiStatus: loginResponse.status,
        apiOk: loginResponse.ok,
        apiResponse: loginData,
        testResult: loginResponse.ok && loginData.success
      }
    })
    
  } catch (error) {
    console.error('简单登录测试失败:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
} 