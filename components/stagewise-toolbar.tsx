'use client'

import { useEffect, useState } from 'react'

export function StagewiseDevToolbar() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // 只在开发模式下显示
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

  // 暂时显示一个占位符，等待 stagewise 包修复兼容性问题
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      background: '#007acc', 
      color: 'white', 
      padding: '8px 12px', 
      borderRadius: '6px',
      fontSize: '12px',
      fontFamily: 'monospace',
      zIndex: 9999,
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      cursor: 'pointer'
    }}>
      🔧 Stagewise 开发工具栏
      <div style={{ fontSize: '10px', opacity: 0.8, marginTop: '2px' }}>
        (等待包兼容性修复)
      </div>
    </div>
  )
} 