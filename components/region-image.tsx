"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ImageIcon } from "lucide-react"

interface RegionImageProps {
  region: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export function RegionImage({ region, className, width = 600, height = 400, priority = false }: RegionImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>("")

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
    setImageSrc(getImageSrc())
  }, [region])

  // 将区域名称转换为文件名格式
  const formattedRegion = region.toLowerCase().replace(/\s+/g, "-")

  // 构建图片路径
  const imagePath = `/${formattedRegion}-shipping-new.png`

  // 备用图片路径
  const fallbackPath = "/global-shipping-routes.png"

  // Get image based on region/category
  const getImageSrc = () => {
    // B2C and B2B main categories
    if (region === "B2C") return "/b2c-services-image.jpg"
    if (region === "B2B") return "/b2b-services-image.png"

    // B2C subcategories
    if (region === "Sino Services" || region === "FBA Services") return "/chinese-warehouse-workers-new.png"
    if (region === "Overseas Services" || region === "Express & Fulfillment") return "/overseas-services-image.png"

    // B2B subcategories
    if (region === "Ocean Freight") return "/ocean-freight-image.png"
    if (region === "Air Freight") return "/air-freight-image.png"
    if (region === "Clearance") return "/customs-clearance-image.png"
    if (region === "SOLUTIONS") return "/solutions-image.png"

    // Solution categories
    if (region === "Industry Solutions") return "/region-images/industry-solutions-logistics.png"
    if (region === "Specialized Services") return "/region-images/specialized-services.png"
    if (region === "Supply Chain Solutions") return "/region-images/supply-chain-logistics.png"

    // European regions
    if (region === "Europe") return "/europe-shipping-new.png"
    if (region === "East Europe") return "/east-europe-shipping-new.png"
    if (region === "West Europe") return "/west-europe-shipping-new.png"
    if (region === "North Europe") return "/north-europe-shipping-new.png"
    if (region === "South Europe") return "/south-europe-shipping-new.png"

    // American regions
    if (region === "America") return "/america-shipping-new.png"
    if (region === "North America") return "/north-america-shipping-new.png"
    if (region === "South America") return "/south-america-shipping-new.png"

    // Asian regions
    if (region === "Asia") return "/container-ship-logistics.png"
    if (region === "East Asia") return "/container-ship-logistics.png"
    if (region === "South Asia") return "/global-shipping-routes.png"
    if (region === "Southeast Asia") return "/southeast-asia-shipping.png"
    if (region === "Central Asia") return "/logistics-services.png"

    // Oceania regions
    if (region === "Oceania") return "/oceania-shipping-new.png"
    if (region === "Australia") return "/australia-shipping-new.png"
    if (region === "New Zealand") return "/new-zealand-shipping-new.png"
    if (region === "Pacific Islands") return "/pacific-islands-shipping-new.png"
    if (region === "Polynesia") return "/polynesia-shipping-new.png"

    // Middle East regions
    if (region === "Middle East") return "/middle-east-shipping-new.png"
    if (region === "Gulf States") return "/gulf-states-shipping-new.png"
    if (region === "Levant") return "/levant-shipping-new.png"

    // African regions
    if (region === "Africa") return "/africa-shipping-new.png"
    if (region === "Southern Africa") return "/southern-africa-shipping-new.png"
    if (region === "East Africa") return "/east-africa-shipping-new.png"
    if (region === "West Africa") return "/west-africa-shipping-new.png"
    if (region === "Central Africa") return "/central-africa-shipping-new.png"
    if (region === "North Africa") return "/north-africa-shipping-new.png"

    // Default image
    return "/global-shipping-routes.png"
  }

  // Get fallback image if primary fails
  const getFallbackImageSrc = () => {
    if (region === "Sino Services" || region === "FBA Services") return "/chinese-workers-packaging.png"
    if (region === "Overseas Services" || region === "Express & Fulfillment") return "/express-fulfillment-image.png"
    if (region === "Ocean Freight" || region === "Air Freight" || region === "Clearance")
      return "/b2b-services-image.png"
    if (region === "SOLUTIONS") return "/solutions-cargo-image.png"

    // Default fallback
    return "/global-shipping-routes.png"
  }

  // Check if the image is an external URL
  const isExternalImage = (src: string) => {
    return src.startsWith("http://") || src.startsWith("https://")
  }

  // Get caption based on region
  const getCaption = () => {
    // B2C and B2B main categories
    if (region === "B2C") return "Business-to-Consumer logistics solutions"
    if (region === "B2B") return "Business-to-Business freight and logistics services"
    if (region === "Sino Services") return "Comprehensive Sino preparation and shipping services"
    if (region === "Overseas Services") return "Fast shipping and fulfillment solutions"
    if (region === "Ocean Freight") return "Reliable ocean freight services"
    if (region === "Air Freight") return "Fast and efficient air freight solutions"
    if (region === "Clearance") return "Expert customs clearance services"
    if (region === "SOLUTIONS") return "Specialized logistics solutions"

    // Default caption
    return "Global logistics solutions"
  }

  const isExternal = isExternalImage(imageSrc)

  const handleImageError = () => {
    // Try fallback image
    const fallbackSrc = getFallbackImageSrc()
    if (fallbackSrc !== imageSrc) {
      setImageSrc(fallbackSrc)
    } else {
      setHasError(true)
    }
  }

  return (
    <div className={cn("region-image-container overflow-hidden rounded-lg", className)}>
      <div className="relative w-full aspect-video">
        {!hasError ? (
          <Image
            src={imageSrc || "/placeholder.svg?height=300&width=400&query=logistics"}
            alt={`${region} shipping routes`}
            fill
            className={cn(
              "object-cover transition-all duration-500 ease-in-out rounded-md",
              isLoading ? "scale-105 blur-sm" : "scale-100 blur-0",
            )}
            onLoad={() => setIsLoading(false)}
            onError={handleImageError}
            priority={priority}
            unoptimized={isExternal}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <ImageIcon className="h-12 w-12 text-gray-400" />
          </div>
        )}

        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
          </div>
        )}

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1.5 text-white">
          <p className="text-xs leading-tight">{getCaption()}</p>
        </div>
      </div>
    </div>
  )
}
