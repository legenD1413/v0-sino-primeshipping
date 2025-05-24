"use client"

import { useEffect } from "react"

// 预加载关键图片以提高性能
const criticalImages = [
  "/container-ship-logistics.png",
  "/global-shipping-routes.png",
  "/logistics-services.png",
  "/ecommerce-fulfillment-center.png",
  "/sps-logo.png",
  "/sp-colorful-logo.png",
]

export function CriticalImagesPreloader() {
  useEffect(() => {
    criticalImages.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return null
}
