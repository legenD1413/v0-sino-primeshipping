import { Globe, Ship, FileCheck, DollarSign, Package, HelpCircle } from "lucide-react"

interface FAQCategoryIconProps {
  category: string
  size?: number
  className?: string
}

export function FAQCategoryIcon({ category, size = 24, className = "" }: FAQCategoryIconProps) {
  switch (category) {
    case "general":
      return <Globe size={size} className={className} />
    case "shipping":
      return <Ship size={size} className={className} />
    case "customs":
      return <FileCheck size={size} className={className} />
    case "pricing":
      return <DollarSign size={size} className={className} />
    case "services":
      return <Package size={size} className={className} />
    default:
      return <HelpCircle size={size} className={className} />
  }
}
