"use client"
import { Tag } from "lucide-react"

interface PodcastCategoryFilterProps {
  categories: string[]
  onCategoryChange: (category: string | null) => void
  activeCategory: string | null
}

export default function PodcastCategoryFilter({
  categories,
  onCategoryChange,
  activeCategory,
}: PodcastCategoryFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="h-5 w-5 text-blue-700" />
        <h3 className="font-medium">Filter by Category</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeCategory === null ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All Topics
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
