import { Package, Truck, RotateCcw, Warehouse, Ship, Plane, AlertTriangle, FileCheck } from "lucide-react"

interface ServiceIconProps {
  service: string
  className?: string
}

export function ServiceIcon({ service, className = "h-4 w-4 mr-2 text-red-500 flex-shrink-0" }: ServiceIconProps) {
  // B2C Services
  if (service === "FBA Prep & Ship") {
    return <Package className={className} />
  }
  if (service === "Direct-to-Consumer Shipping") {
    return <Truck className={className} />
  }
  if (service === "Small Parcel Express") {
    return <Package className={className} />
  }
  if (service === "Express") {
    return <Truck className={className} />
  }
  if (service === "Overseas Warehousing & Fulfillment") {
    return <Warehouse className={className} />
  }
  if (service === "Returns Management") {
    return <RotateCcw className={className} />
  }

  // B2B Services
  if (service.includes("Ocean")) {
    return <Ship className={className} />
  }
  if (service.includes("Air")) {
    return <Plane className={className} />
  }
  if (service === "Oversized Cargo") {
    return <Package className={className} />
  }
  if (service === "Dangerous Goods") {
    return <AlertTriangle className={className} />
  }
  if (service === "Customs Brokerage") {
    return <FileCheck className={className} />
  }

  // Default icon if no match
  return <Package className={className} />
}
