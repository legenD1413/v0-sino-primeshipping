"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface BusinessTypeSelectorProps {
  onChange?: (value: "b2c" | "b2b") => void
  defaultValue?: "b2c" | "b2b"
  className?: string
}

export function BusinessTypeSelector({ onChange, defaultValue = "b2c", className }: BusinessTypeSelectorProps) {
  const [selected, setSelected] = useState<"b2c" | "b2b">(defaultValue)

  const handleSelect = (value: "b2c" | "b2b") => {
    setSelected(value)
    onChange?.(value)
  }

  return (
    <div className={cn("flex flex-row bg-gray-50 rounded-md", className)}>
      <button
        type="button"
        onClick={() => handleSelect("b2c")}
        className={cn(
          "flex items-center px-4 py-3 focus:outline-none",
          selected === "b2c" ? "text-red-500" : "text-gray-900",
        )}
      >
        <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-2">
          {selected === "b2c" && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
        </div>
        <span className="font-medium">B2C</span>
      </button>

      <button
        type="button"
        onClick={() => handleSelect("b2b")}
        className={cn(
          "flex items-center px-4 py-3 focus:outline-none",
          selected === "b2b" ? "text-red-500" : "text-gray-900",
        )}
      >
        <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center mr-2">
          {selected === "b2b" && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
        </div>
        <span className="font-medium">B2B</span>
      </button>
    </div>
  )
}
