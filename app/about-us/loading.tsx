export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="mb-16 text-center">
          <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl mb-8"></div>
        </div>

        {/* Our Story Section Skeleton */}
        <div className="mb-16">
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
        </div>

        {/* Our Mission Section Skeleton */}
        <div className="mb-16 bg-gray-50 p-8 rounded-xl">
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 bg-gray-200 rounded-full mr-3"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section Skeleton */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-8 w-8 bg-gray-200 rounded-full mr-3"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="space-y-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="md:w-1/2">
                  <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values Section Skeleton */}
        <div className="mb-16 bg-gray-50 p-8 rounded-xl">
          <div className="flex items-center mb-8">
            <div className="h-8 w-8 bg-gray-200 rounded-full mr-3"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="bg-gray-200 h-12 w-12 rounded-full mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section Skeleton */}
        <div className="bg-gray-200 p-8 md:p-12 rounded-xl">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-8"></div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="h-12 bg-gray-300 rounded w-40"></div>
            <div className="h-12 bg-gray-300 rounded w-40"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
