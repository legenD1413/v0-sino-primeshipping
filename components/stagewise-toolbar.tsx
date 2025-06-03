'use client'

import { StagewiseToolbar } from '@stagewise/toolbar-next'

// Stagewise工具栏配置
const stagewiseConfig = {
  plugins: []
}

export function StagewiseDevToolbar() {
  // 暂时禁用 Stagewise Toolbar 以解决超时问题
  // 只在开发模式下渲染工具栏
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  // 临时禁用以解决超时问题
  return null
  
  // 如需重新启用，请取消注释下面的行并注释掉上面的 return null
  // return <StagewiseToolbar config={stagewiseConfig} />
} 