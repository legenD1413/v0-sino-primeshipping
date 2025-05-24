"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface RegionImageDisplayProps {
  src: string
  alt: string
  caption: string
  width?: number
  height?: number
  className?: string
}

export function RegionImageDisplay({
  src,
  alt,
  caption,
  width = 400,
  height = 250,
  className,
}: RegionImageDisplayProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="region-image-container">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "w-full h-auto object-cover transition-all duration-500 ease-in-out",
          isLoading ? "image-loading" : "image-loaded",
          className,
        )}
        onLoad={() => setIsLoading(false)}
      />
      <p className="region-image-caption">{caption}</p>
    </div>
  )
}
