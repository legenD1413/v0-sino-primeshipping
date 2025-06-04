'use client'

import { StagewiseToolbar } from '@stagewise/toolbar-next'
import { useEffect, useState } from 'react'

// Stagewise工具栏配置，增加超时设置
const stagewiseConfig = {
  plugins: [],
  timeout: 30000, // 30秒超时
  retryAttempts: 3, // 重试次数
  enableErrorLogging: true // 启用错误日志
}

export function StagewiseDevToolbar() {
  const [isClient, setIsClient] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // 只在开发模式下渲染工具栏
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  // 如果明确禁用Stagewise，则不渲染
  if (process.env.NEXT_PUBLIC_DISABLE_STAGEWISE === 'true') {
    return null
  }

  // 确保只在客户端渲染，避免SSR问题
  if (!isClient) {
  return null
  }

  // 如果有错误，暂时禁用工具栏
  if (hasError) {
    return (
      <div style={{ 
        position: 'fixed', 
        bottom: '20px', 
        right: '20px', 
        background: '#ff6b6b', 
        color: 'white', 
        padding: '10px', 
        borderRadius: '5px',
        fontSize: '12px',
        zIndex: 9999
      }}>
        Stagewise工具栏暂时不可用
      </div>
    )
  }

  try {
    return (
      <div suppressHydrationWarning>
        <StagewiseToolbar config={stagewiseConfig} />
      </div>
    )
  } catch (error) {
    console.error('Stagewise工具栏错误:', error)
    setHasError(true)
    return null
  }
} 