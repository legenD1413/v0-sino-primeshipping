"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface EnhancedRegionImageProps {
  region: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export function EnhancedRegionImage({
  region,
  className,
  width = 600,
  height = 400,
  priority = false,
}: EnhancedRegionImageProps) {
  const [imageSrc, setImageSrc] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(false)

    // 将区域名称转换为文件名格式
    const formattedRegion = region.toLowerCase().replace(/\s+/g, "-")

    // 尝试不同的图片路径格式
    const possiblePaths = [
      `/region-images/${formattedRegion}-logistics.png`,
      `/${formattedRegion}-shipping.png`,
      `/${formattedRegion}-shipping-new.png`,
      `/${formattedRegion}-logistics.png`,
    ]

    // 特殊情况处理
    if (region.toLowerCase() === "b2c") {
      setImageSrc("/b2c-services-image.png")
      setIsLoading(false)
      return
    } else if (region.toLowerCase() === "b2b") {
      setImageSrc("/b2b-services-image.png")
      setIsLoading(false)
      return
    } else if (region.toLowerCase().includes("ocean") || region.toLowerCase().includes("freight")) {
      setImageSrc("/ocean-freight-image.png")
      setIsLoading(false)
      return
    } else if (region.toLowerCase().includes("air")) {
      setImageSrc("/air-freight-image.png")
      setIsLoading(false)
      return
    }

    // 检查图片是否存在
    const checkImage = async (path: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
        img.src = path
      })
    }

    const findValidImage = async () => {
      for (const path of possiblePaths) {
        const exists = await checkImage(path)
        if (exists) {
          setImageSrc(path)
          setIsLoading(false)
          return
        }
      }

      // 如果没有找到匹配的图片，使用默认图片
      setImageSrc("/global-shipping-routes.png")
      setIsLoading(false)
    }

    findValidImage()
  }, [region])

  if (isLoading) {
    return (
      <div className={cn("relative w-full aspect-video bg-gray-100 animate-pulse rounded-md", className)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={cn("relative w-full aspect-video bg-gray-100 rounded-md", className)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">图片加载失败</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative w-full aspect-video", className)}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={`${region} logistics image`}
        fill
        className="object-cover rounded-md"
        priority={priority}
      />
    </div>
  )
}
