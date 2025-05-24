import Image from "next/image"
import { cn } from "@/lib/utils"

interface AsiaRegionImageProps {
  subRegion?: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export function AsiaRegionImage({
  subRegion = "east-asia",
  className,
  width = 600,
  height = 400,
  priority = false,
}: AsiaRegionImageProps) {
  // 格式化子区域名称
  const formattedSubRegion = subRegion.toLowerCase().replace(/\s+/g, "-")

  // 构建图片路径
  const imagePath = `/${formattedSubRegion}-shipping-new.png`

  // 备用图片路径
  const fallbackPath = "/asia-shipping.png"

  return (
    <div className={cn("relative w-full aspect-video", className)}>
      <Image
        src={imagePath || "/placeholder.svg"}
        alt={`${subRegion} shipping routes in Asia`}
        fill
        className="object-cover rounded-md"
        priority={priority}
        onError={(e) => {
          // 如果图片加载失败，使用备用图片
          e.currentTarget.src = fallbackPath
        }}
      />
    </div>
  )
}
