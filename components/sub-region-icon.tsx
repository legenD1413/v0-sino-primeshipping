import type React from "react"
import { cn } from "@/lib/utils"

interface SubRegionIconProps {
  iconName?: string
  className?: string
}

const SubRegionIcon: React.FC<SubRegionIconProps> = ({ iconName, className }) => {
  switch (iconName) {
    case "faq":
      return (
        <svg
          className={cn("w-4 h-4 mr-2 inline-block text-red-500", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-1.41 1.41C12.95 12.78 12 13.5 12 15h-2v-.5c0-1.1.9-2 2-2.5.83-.34 1.43-.94 1.75-1.75.32-.81.32-1.73 0-2.54-.32-.81-.92-1.41-1.75-1.75-.82-.33-1.74-.33-2.55 0l1.41 1.41C10.05 6.22 11 5.5 11 4.99h2v.5c0 1.1-.9 2-2 2.5-.83.34-1.43.94-1.75 1.75-.32.81-.32 1.73 0 2.54.32.81.92 1.41 1.75 1.75.82.33 1.74.33 2.55 0z" />
        </svg>
      )
    default:
      return (
        <svg
          className={cn("w-4 h-4 mr-2 inline-block text-red-500", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="8" fill="currentColor" />
        </svg>
      )
  }
}

export default SubRegionIcon

export { SubRegionIcon }
