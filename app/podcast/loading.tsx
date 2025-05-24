import { Headphones } from "lucide-react"

export default function PodcastLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section Skeleton */}
      <div className="relative rounded-2xl overflow-hidden mb-12 bg-gray-200 animate-pulse">
        <div className="px-6 py-16 md:py-24 md:px-12">
          <div className="max-w-3xl">
            <div className="h-12 bg-gray-300 rounded-lg mb-4 w-3/4"></div>
            <div className="h-8 bg-gray-300 rounded-lg mb-8 w-full"></div>
            <div className="flex items-center space-x-4">
              <div className="h-10 w-32 bg-gray-300 rounded-full"></div>
              <div className="h-10 w-32 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Podcast List Skeleton */}
      <div className="space-y-8">
        <div className="h-10 bg-gray-200 rounded-lg mb-8 w-48 animate-pulse"></div>

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md animate-pulse"
          >
            <div className="md:flex">
              <div className="md:w-1/3 lg:w-1/4">
                <div className="aspect-square md:aspect-auto md:h-full bg-gray-300 flex items-center justify-center">
                  <Headphones className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div className="p-6 md:w-2/3 lg:w-3/4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe Section Skeleton */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <div className="md:flex items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-1 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="h-10 w-40 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-10 w-44 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
