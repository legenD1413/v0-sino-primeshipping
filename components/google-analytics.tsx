'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// Google Analytics配置
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'GTM-PCJRWMF2'
const ENABLE_ANALYTICS = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'false'

// 声明全局gtag函数
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// 页面访问跟踪函数
const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && ENABLE_ANALYTICS) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// 事件跟踪函数
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag && ENABLE_ANALYTICS) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Google Analytics组件
export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname && ENABLE_ANALYTICS) {
      pageview(pathname)
    }
  }, [pathname])

  // 只在明确禁用时不加载
  if (!ENABLE_ANALYTICS) {
    return null
  }

  return (
    <>
      {/* Google Tag Manager (Head) */}
      <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GA_TRACKING_ID}');
          `,
        }}
      />

      {/* Google Tag Manager (NoScript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

// 常用事件跟踪函数导出
export const analytics = {
  // 页面访问
  pageView: (path: string) => pageview(path),
  
  // 按钮点击
  buttonClick: (buttonName: string, location?: string) => {
    trackEvent('click', 'button', `${buttonName}${location ? `_${location}` : ''}`)
  },
  
  // 表单提交
  formSubmit: (formName: string, success: boolean = true) => {
    trackEvent('submit', 'form', formName, success ? 1 : 0)
  },
  
  // 文件下载
  fileDownload: (fileName: string, fileType: string) => {
    trackEvent('download', 'file', `${fileName}.${fileType}`)
  },
  
  // 外部链接点击
  externalLink: (url: string) => {
    trackEvent('click', 'external_link', url)
  },
  
  // 联系方式点击
  contactClick: (method: 'email' | 'phone' | 'whatsapp', value: string) => {
    trackEvent('click', 'contact', `${method}_${value}`)
  },
  
  // 服务页面访问
  serviceView: (serviceName: string) => {
    trackEvent('view', 'service', serviceName)
  },
  
  // 报价请求
  quoteRequest: (serviceType: string) => {
    trackEvent('request', 'quote', serviceType)
  },
  
  // 管理员功能使用
  adminAction: (action: string, module: string) => {
    trackEvent('admin', module, action)
  }
} 