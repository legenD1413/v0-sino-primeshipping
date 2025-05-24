"use client"

import { useState } from "react"
import { BusinessTypeSelector } from "@/components/business-type-selector"

export default function BusinessTypePage() {
  const [businessType, setBusinessType] = useState<"b2c" | "b2b">("b2c")

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">选择业务类型</h1>

        <BusinessTypeSelector onChange={(value) => setBusinessType(value)} defaultValue="b2c" />

        <div className="mt-8 p-4 bg-gray-50 rounded-md">
          <p>
            当前选择的业务类型: <span className="font-bold text-red-500">{businessType.toUpperCase()}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
