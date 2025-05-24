import { User, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface CategoryIconProps {
  category: "B2C" | "B2B"
  className?: string
  size?: number
}

export function CategoryIcon({ category, className, size = 16 }: CategoryIconProps) {
  // 根据类别选择适当的图标
  if (category === "B2C") {
    return (
      <div className={cn("flex items-center justify-center rounded-full bg-red-100 p-1", className)}>
        <User className="text-red-500" size={size} />
      </div>
    )
  }

  if (category === "B2B") {
    return (
      <div className={cn("flex items-center justify-center rounded-full bg-red-100 p-1", className)}>
        <Building2 className="text-red-500" size={size} />
      </div>
    )
  }

  // 默认返回空元素
  return null
}
