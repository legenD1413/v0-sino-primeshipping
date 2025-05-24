export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Header placeholder */}
      <div className="bg-blue-900 h-64 w-full">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="h-6 w-32 bg-blue-800 rounded-full mb-4"></div>
            <div className="h-10 bg-blue-800 rounded-lg w-3/4 mb-4"></div>
            <div className="h-10 bg-blue-800 rounded-lg w-2/3 mb-6"></div>
            <div className="flex space-x-4">
              <div className="h-5 w-24 bg-blue-800 rounded"></div>
              <div className="h-5 w-24 bg-blue-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured image placeholder */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="h-64 md:h-96 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      {/* Content placeholder */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Table of contents placeholder */}
          <div className="hidden lg:block sticky top-6 float-right w-64 ml-8 bg-gray-200 rounded-lg h-96"></div>

          {/* Mobile TOC placeholder */}
          <div className="lg:hidden mb-8 h-32 bg-gray-200 rounded-lg"></div>

          {/* Content sections */}
          <div className="space-y-8">
            <div>
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>

            <div className="h-64 bg-gray-200 rounded-lg"></div>

            <div>
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-48 bg-gray-200 rounded-lg"></div>
              <div className="h-48 bg-gray-200 rounded-lg"></div>
            </div>

            <div>
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>

            <div className="h-64 bg-gray-200 rounded-lg"></div>

            <div>
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>

          {/* Tags placeholder */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex space-x-2">
              <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
              <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Related articles placeholder */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="h-40 bg-gray-200 rounded-lg"></div>
              <div className="h-40 bg-gray-200 rounded-lg"></div>
              <div className="h-40 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter placeholder */}
      <div className="bg-blue-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="h-8 bg-blue-800 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-blue-800 rounded w-1/2 mx-auto mb-6"></div>
            <div className="h-12 bg-blue-800 rounded-lg max-w-lg mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
