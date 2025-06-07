'use client'

import { useEffect } from 'react'

// TypeScript 类型声明
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
    localAnalytics: {
      events: any[]
      track: (eventName: string, parameters?: any) => void
    }
    initLocalAnalytics: () => void
  }
  
  interface Navigator {
    userLanguage?: string;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // 检查网络环境
    const checkNetworkEnvironment = () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const language = navigator.language || navigator.userLanguage || 'en';
      
      // 如果是中文环境且时区为亚洲，可能在受限网络环境
      const isRestrictedNetwork = (language.indexOf('zh') === 0 || language.indexOf('cn') !== -1) && 
                                 (timezone === 'Asia/Shanghai' || timezone === 'Asia/Beijing');
      
      return isRestrictedNetwork;
    }

    // 初始化本地分析系统
    initializeLocalAnalytics()
    
    // 如果检测到受限网络环境，立即使用本地分析，不等待GTM
    if (checkNetworkEnvironment()) {
      console.log('🌏 检测到受限网络环境，使用本地分析系统');
      createFallbackGtag();
      return;
    }
    
    // 检查 GTM 是否加载成功
    const checkGTM = () => {
      if (typeof window.gtag === 'function') {
        console.log('✅ GTM 加载成功')
      } else {
        console.log('⚠️ GTM 未加载，使用本地分析')
        // 创建备用的 gtag 函数
        createFallbackGtag()
      }
    }
    
    // 延迟检查 GTM 加载状态（仅在非受限网络环境）
    const timer = setTimeout(checkGTM, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  const initializeLocalAnalytics = () => {
    // 创建本地分析系统
    window.localAnalytics = {
      events: [],
      track: function(eventName: string, parameters: any = {}) {
        const event = {
          event: eventName,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          ...parameters
        }
        
        this.events.push(event)
        console.log('📊 本地分析事件:', eventName, parameters)
        
        // 发送到服务器
        fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event)
        }).catch(err => console.log('分析数据发送失败:', err))
      }
    }

    // 暴露初始化函数给全局，供GTM错误处理调用
    window.initLocalAnalytics = initializeLocalAnalytics

    // 发送初始页面访问事件
    window.localAnalytics.track('page_view', {
      page_path: window.location.pathname,
      page_title: document.title
    })

    console.log('✅ 本地分析系统已初始化')
  }

  const createFallbackGtag = () => {
    window.gtag = function() {
      const args = Array.from(arguments)
      
      // 添加到 dataLayer
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(arguments)
      
      // 处理事件
      if (args[0] === 'event') {
        const eventName = args[1]
        const parameters = args[2] || {}
        window.localAnalytics.track(eventName, parameters)
      } else if (args[0] === 'config') {
        console.log('GTM 配置:', args[1], args[2])
      }
    }
    console.log('✅ 备用 gtag 函数已创建')
  }

  return null
}

// 导出分析工具函数
export const analytics = {
  // 页面访问
  pageView: (path: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GTM-PCJRWMF2', {
        page_path: path,
      })
    }
  },
  
  // 按钮点击
  buttonClick: (buttonName: string, location?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'button',
        event_label: `${buttonName}${location ? `_${location}` : ''}`,
      })
    }
  },
  
  // 表单提交
  formSubmit: (formName: string, success: boolean = true) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'submit', {
        event_category: 'form',
        event_label: formName,
        value: success ? 1 : 0
      })
    }
  },
  
  // 文件下载
  fileDownload: (fileName: string, fileType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download', {
        event_category: 'file',
        event_label: `${fileName}.${fileType}`,
      })
    }
  },
  
  // 外部链接点击
  externalLink: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'external_link',
        event_label: url,
      })
    }
  },
  
  // 联系方式点击
  contactClick: (method: 'email' | 'phone' | 'whatsapp', value: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'contact',
        event_label: `${method}_${value}`,
      })
    }
  },
  
  // 服务页面访问
  serviceView: (serviceName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view', {
        event_category: 'service',
        event_label: serviceName,
      })
    }
  },
  
  // 报价请求
  quoteRequest: (serviceType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'request', {
        event_category: 'quote',
        event_label: serviceType,
      })
    }
  },
  
  // 管理员功能使用
  adminAction: (action: string, module: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'admin', {
        event_category: module,
        event_label: action,
      })
    }
  }
} 