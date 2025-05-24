"use client"

import { useState, useEffect, useRef } from "react"
import { BookOpenIcon, PrinterIcon, DownloadIcon, ArrowUpIcon, ChevronRightIcon } from "lucide-react"

interface TableOfContentsProps {
  content: string
}

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeHeading, setActiveHeading] = useState<string>("")
  const [isMobile, setIsMobile] = useState(false)
  const tocRef = useRef<HTMLDivElement>(null)
  const [tocHeight, setTocHeight] = useState(0)

  // 生成安全的锚点ID
  const generateId = (text: string, index: number): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // 移除特殊字符
      .replace(/\s+/g, '-')     // 空格替换为连字符
      .replace(/--+/g, '-')     // 多个连字符替换为单个
      .replace(/^-+|-+$/g, '')  // 移除开头和结尾的连字符
      || `heading-${index}`     // 如果为空则使用默认ID
  }

  // 检测设备类型和可视区域高度
  useEffect(() => {
    const checkDimensions = () => {
      setIsMobile(window.innerWidth < 768)
      
      // 计算可用高度，减去页面顶部和底部的空间
      const windowHeight = window.innerHeight
      const availableHeight = windowHeight - 150 // 减去页面顶部和底部的空间
      setTocHeight(Math.min(500, availableHeight)) // 最大高度为500px
    }
    
    checkDimensions()
    window.addEventListener('resize', checkDimensions)
    return () => window.removeEventListener('resize', checkDimensions)
  }, [])

  useEffect(() => {
    // 等待DOM渲染完成后再查找标题
    const timer = setTimeout(() => {
      const proseElement = document.querySelector('.prose')
      if (!proseElement) return
      
      // 查找一级和二级标题 H1, H2
      const headingElements = proseElement.querySelectorAll('h1, h2')
      const extractedHeadings: Heading[] = []
      
      headingElements.forEach((heading, index) => {
        const text = heading.textContent || ''
        if (!text.trim()) return // 跳过空标题
        
        const level = parseInt(heading.tagName.charAt(1))
        const id = generateId(text, index)
        
        // 为标题添加 ID（如果没有的话）
        if (!heading.id) {
          heading.id = id
        }
        
        extractedHeadings.push({
          id: heading.id || id,
          text: text.trim(),
          level
        })
      })
      
      setHeadings(extractedHeadings)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [content])

  useEffect(() => {
    // 监听滚动事件，更新活跃的标题
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean)
      const scrollTop = window.scrollY + 150 // 增加偏移量以更好地检测当前标题
      
      let currentActiveHeading = ""
      
      for (let i = 0; i < headingElements.length; i++) {
        const element = headingElements[i]
        if (element && element.offsetTop <= scrollTop) {
          currentActiveHeading = headings[i].id
        }
      }
      
      setActiveHeading(currentActiveHeading)
      
      // 检查目录是否需要调整位置，确保不超出屏幕
      if (tocRef.current && !isMobile) {
        const tocElement = tocRef.current
        const tocRect = tocElement.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // 如果目录底部接近或超出视口底部，调整位置
        if (tocRect.bottom > windowHeight - 20) {
          const newMaxHeight = windowHeight - tocRect.top - 20
          tocElement.style.maxHeight = `${newMaxHeight}px`
          tocElement.style.overflowY = 'auto'
        } else if (tocRect.height < tocHeight) {
          // 如果目录高度小于预设值，恢复正常
          tocElement.style.maxHeight = `${tocHeight}px`
          tocElement.style.overflowY = 'auto'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始化时也执行一次
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings, isMobile, tocHeight])

  useEffect(() => {
    // 检查URL哈希并滚动到对应位置
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1)
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          const offsetTop = element.offsetTop - 100
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
          setActiveHeading(hash)
        }, 500) // 等待页面完全加载
      }
    }
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      
      // 更新URL哈希，但不触发页面跳转
      if (typeof window !== 'undefined') {
        const newUrl = `${window.location.pathname}${window.location.search}#${id}`
        window.history.replaceState(null, '', newUrl)
      }
      
      setActiveHeading(id)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handlePrint = () => {
    window.print()
  }

  const handlePDF = () => {
    // 简单的PDF生成方案，可以后续改进
    window.print()
  }

  if (headings.length === 0) return null

  // 样式调整为固定在屏幕右侧的紧凑版本
  return (
    <>
      {/* 移动设备版本 */}
      {isMobile && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3">
            <div className="flex items-center">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              <h3 className="text-sm font-semibold">Table of Contents</h3>
            </div>
          </div>
          <div className="p-4">
            <nav className="space-y-1">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`
                    block w-full text-left py-1.5 px-2 rounded-md transition-colors duration-200 text-sm
                    group
                    ${heading.level === 1 
                      ? 'font-semibold text-gray-900' 
                      : 'font-medium text-gray-700 ml-4'
                    }
                    ${activeHeading === heading.id 
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500 pl-1' 
                      : 'hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent pl-1'
                    }
                  `}
                  title={`Go to: ${heading.text}`}
                >
                  <span className="flex items-center">
                    <ChevronRightIcon className={`w-3.5 h-3.5 mr-1.5 ${heading.level === 1 ? 'text-blue-500' : 'text-blue-400'}`} />
                    <span className="line-clamp-1">{heading.text}</span>
                  </span>
                </button>
              ))}
            </nav>
            <div className="flex gap-2 mt-4">
              <button
                onClick={handlePrint}
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors duration-200 text-xs"
              >
                <PrinterIcon className="w-3 h-3" />
                Print
              </button>
              <button
                onClick={handlePDF}
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 text-xs"
              >
                <DownloadIcon className="w-3 h-3" />
                PDF
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 桌面设备版本 - 固定在右侧中部 */}
      {!isMobile && (
        <div 
          ref={tocRef}
          className="fixed right-8 top-1/2 transform -translate-y-1/2 w-64 bg-white rounded-lg shadow-md overflow-hidden z-40"
          style={{ 
            maxHeight: `${tocHeight}px`,
            overflowY: 'auto'
          }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sticky top-0 z-10">
            <div className="flex items-center">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              <h3 className="text-sm font-semibold">Table of Contents</h3>
            </div>
          </div>
          
          <div className="p-3">
            <nav className="space-y-1">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`
                    block w-full text-left py-1 px-2 text-sm transition-colors duration-200
                    ${heading.level === 1 
                      ? 'font-medium text-gray-900' 
                      : 'font-normal text-gray-700 ml-2'
                    }
                    ${activeHeading === heading.id 
                      ? 'text-blue-600' 
                      : 'hover:text-blue-600'
                    }
                  `}
                  title={`Go to: ${heading.text}`}
                >
                  <span className="flex items-center">
                    <ChevronRightIcon className={`w-3.5 h-3.5 mr-1.5 ${heading.level === 1 ? 'text-blue-500' : 'text-blue-400'}`} />
                    <span className="line-clamp-1">{heading.text}</span>
                  </span>
                </button>
              ))}
            </nav>
            
            <div className="flex gap-2 mt-4 border-t border-gray-100 pt-3">
              <button
                onClick={scrollToTop}
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors duration-200 text-xs"
                title="Back to Top"
              >
                <ArrowUpIcon className="w-3 h-3" />
                Top
              </button>
              <button
                onClick={handlePrint}
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors duration-200 text-xs"
              >
                <PrinterIcon className="w-3 h-3" />
                Print
              </button>
              <button
                onClick={handlePDF}
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 text-xs"
              >
                <DownloadIcon className="w-3 h-3" />
                PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 