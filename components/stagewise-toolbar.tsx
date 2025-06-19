'use client'

import { useEffect, useState } from 'react'

export function StagewiseDevToolbar() {
  const [isClient, setIsClient] = useState(false)
  const [StagewiseToolbar, setStagewiseToolbar] = useState<any>(null)

  useEffect(() => {
    setIsClient(true)
    
    // 动态导入Stagewise工具栏以避免SSR问题
    const loadStagewise = async () => {
      try {
        const { StagewiseToolbar: Toolbar } = await import('@stagewise/toolbar-next')
        setStagewiseToolbar(() => Toolbar)
      } catch (error) {
        console.warn('Failed to load Stagewise toolbar:', error)
      }
    }

    if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_DISABLE_STAGEWISE !== 'true') {
      loadStagewise()
    }
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

  // 如果Stagewise组件已加载，渲染它
  if (StagewiseToolbar) {
    return <StagewiseToolbar />
  }

  // 加载中的占位符
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
      🔧 Stagewise 工具栏加载中...
    </div>
  )
} 