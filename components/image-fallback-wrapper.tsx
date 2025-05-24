"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ImageFallbackWrapperProps extends Omit<ImageProps, "src" | "alt"> {
  src: string
  alt: string
  fallbackSrc?: string
  wrapperClassName?: string
}

export function ImageFallbackWrapper({
  src,
  alt,
  fallbackSrc = "/global-shipping-routes.png",
  wrapperClassName,
  className,
  ...props
}: ImageFallbackWrapperProps) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setLoading(true)
    setError(false)
  }, [src])

  return (
    <div className={cn("relative", wrapperClassName)}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-md">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
        </div>
      )}
      <Image
        {...props}
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        className={cn("object-cover rounded-md", className)}
        onLoadingComplete={() => setLoading(false)}
        onError={() => {
          if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc)
            setError(true)
          }
        }}
      />
      {error && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-50 text-red-500 text-xs p-1 text-center">
          原图加载失败，显示备用图片
        </div>
      )}
    </div>
  )
}
