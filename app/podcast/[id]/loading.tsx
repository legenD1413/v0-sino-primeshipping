import { Headphones } from "lucide-react"

export default function PodcastLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-8"></div>

      {/* Podcast header skeleton */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 lg:w-1/4 relative">
            <div className="aspect-square md:aspect-auto md:h-full relative bg-gray-200 animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <Headphones className="w-24 h-24 text-gray-300" />
              </div>
            </div>
          </div>
          <div className="p-6 md:w-2/3 lg:w-3/4">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-2/3"></div>

            <div className="flex gap-4 mb-4">
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>

            <div className="h-5 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-5 w-56 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Audio player skeleton */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md mb-8">
        <div className="p-6">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Show notes skeleton */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md mb-8">
        <div className="p-6">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-5 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Transcript skeleton */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md mb-8">
        <div className="p-6">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
