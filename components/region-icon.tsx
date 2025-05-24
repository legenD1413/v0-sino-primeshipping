import { cn } from "@/lib/utils"

interface RegionIconProps {
  region: string
  className?: string
}

export function RegionIcon({ region, className }: RegionIconProps) {
  // Return the appropriate SVG based on the region
  switch (region) {
    case "B2C":
      return (
        <svg
          className={cn("w-4 h-4 mr-2 inline-block text-red-500", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            fill="currentColor"
            d="M8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 C9.79,16 8,14.21 8,12 Z"
          />
          <path fill="none" stroke="white" strokeWidth="1" d="M10,12 L14,12 M12,10 L12,14" />
        </svg>
      )
    case "B2B":
      return (
        <svg
          className={cn("w-4 h-4 mr-2 inline-block text-red-500", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            fill="currentColor"
            d="M8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 C9.79,16 8,14.21 8,12 Z"
          />
          <path fill="none" stroke="white" strokeWidth="1" d="M10,10 L14,10 M10,12 L14,12 M10,14 L14,14" />
        </svg>
      )
    case "Europe":
      return (
        <svg
          className={cn("w-4 h-4 mr-2 inline-block text-red-500", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            fill="currentColor"
            d="M14.5,6.5c0.5,0.3,0.9,0.7,1.2,1.2c0.3,0.5,0.5,1,0.5,1.6c0,0.6-0.2,1.1-0.5,1.6c-0.3,0.5-0.7,0.9-1.2,1.2
            c-0.5,0.3-1,0.5-1.6,0.5c-0.6,0-1.1-0.2-1.6-0.5c-0.5-0.3-0.9-0.7-1.2-1.2C9.8,10.4,9.6,9.9,9.6,9.3c0-0.6,0.2-1.1,0.5-1.6
            c0.3-0.5,0.7-0.9,1.2-1.2c0.5-0.3,1-0.5,1.6-0.5C13.5,6,14,6.2,14.5,6.5z"
          />
        </svg>
      )
    case "America":
      return (
        <svg
          className={cn("w-4 h-4 mr-2 inline-block text-red-500", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            fill="currentColor"
            d="M9,7.5c0.3-0.2,0.6-0.3,1-0.3c0.4,0,0.7,0.1,1,0.3c0.3,0.2,0.5,0.5,0.7,0.8c0.2,0.3,0.3,0.7,0.3,1.1
            c0,0.4-0.1,0.8-0.3,1.1c-0.2,0.3-0.4,0.6-0.7,0.8c-0.3,0.2-0.6,0.3-1,0.3c-0.4,0-0.7-0.1-1-0.3c-0.3-0.2-0.5-0.5-0.7-0.8
            C8.1,10.2,8,9.8,8,9.4c0-0.4,0.1-0.8,0.3-1.1C8.5,8,8.7,7.7,9,7.5z"
          />
          <path
            fill="currentColor"
            d="M11,12.5c0.3-0.2,0.6-0.3,1-0.3c0.4,0,0.7,0.1,1,0.3c0.3,0.2,0.5,0.5,0.7,0.8c0.2,0.3,0.3,0.7,0.3,1.1
            c0,0.4-0.1,0.8-0.3,1.1c-0.2,0.3-0.4,0.6-0.7,0.8c-0.3,0.2-0.6,0.3-1,0.3c-0.4,0-0.7-0.1-1-0.3c-0.3-0.2-0.5-0.5-0.7-0.8
            c-0.2-0.3-0.3-0.7-0.3-1.1c0-0.4,0.1-0.8,0.3-1.1C10.5,13,10.7,12.7,11,12.5z"
          />
        </svg>
      )
    case "Asia":
      return (
        <svg
          className={cn("w-4 h-4 mr-2 inline-block text-red-500", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            fill="currentColor"
            d="M16,10c0,0.8-0.2,1.5-0.5,2.2c-0.3,0.7-0.8,1.2-1.4,1.6c-0.6,0.4-1.3,0.6-2.1,0.6c-0.8,0-1.5-0.2-2.1-0.6
            c-0.6-0.4-1.1-0.9-1.4-1.6C8.2,11.5,8,10.8,8,10c0-0.8,0.2-1.5,0.5-2.2c0.3-0.7,0.8-1.2,1.4-1.6c0.6-0.4,1.3-0.6,2.1-0.6
            c0.8,0,1.5,0.2,2.1,0.6c0.6,0.4,1.1,0.9,1.4,1.6C15.8,8.5,16,9.2,16,10z"
          />
        </svg>
      )
    case "Oceania":
      return (
        <svg
          className={cn("w-4 h-4 mr-2 inline-block text-red-500", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            fill="currentColor"
            d="M15,15c-0.2,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.6,0.5-1,0.7c-0.4,0.2-0.8,0.3-1.3,0.3c-0.5,0-0.9-0.1-1.3-0.3
            c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-1c-0.2-0.4-0.3-0.8-0.3-1.3c0-0.5,0.1-0.9,0.3-1.3c0.2-0.4,0.4-0.7,0.7-1
            c0.3-0.3,0.6-0.5,1-0.7c0.4-0.2,0.8-0.3,1.3-0.3c0.5,0,0.9,0.1,1.3,0.3c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,1
            c0.2,0.4,0.3,0.8,0.3,1.3C15.3,14.2,15.2,14.6,15,15z"
          />
        </svg>
      )
    case "Middle East":
      return (
        <svg
          className={cn("w-4 h-4 mr-2 inline-block text-red-500", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            fill="currentColor"
            d="M14,9.5c0.3,0.3,0.5,0.6,0.7,1c0.2,0.4,0.3,0.8,0.3,1.2c0,0.4-0.1,0.8-0.3,1.2c-0.2,0.4-0.4,0.7-0.7,1
            c-0.3,0.3-0.6,0.5-1,0.7c-0.4,0.2-0.8,0.3-1.2,0.3c-0.4,0-0.8-0.1-1.2-0.3c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-1
            c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.6-0.5,1-0.7c0.4-0.2,0.8-0.3,1.2-0.3
            c0.4,0,0.8,0.1,1.2,0.3C13.4,9,13.7,9.2,14,9.5z"
          />
        </svg>
      )
    case "Africa":
      return (
        <svg
          className={cn("w-4 h-4 mr-2 inline-block text-red-500", className)}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            fill="currentColor"
            d="M15,11c0,0.7-0.1,1.4-0.4,2c-0.3,0.6-0.6,1.2-1.1,1.6c-0.5,0.4-1,0.8-1.6,1.1c-0.6,0.3-1.3,0.4-2,0.4
            c-0.7,0-1.4-0.1-2-0.4c-0.6-0.3-1.2-0.6-1.6-1.1c-0.4-0.5-0.8-1-1.1-1.6C5.1,12.4,5,11.7,5,11c0-0.7,0.1-1.4,0.4-2
            c0.3-0.6,0.6-1.2,1.1-1.6c0.5-0.4,1-0.8,1.6-1.1c0.6-0.3,1.3-0.4,2-0.4c0.7,0,1.4,0.1,2,0.4c0.6,0.3,1.2,0.6,1.6,1.1
            c0.4,0.5,0.8,1,1.1,1.6C14.9,9.6,15,10.3,15,11z"
          />
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
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
  }
}
