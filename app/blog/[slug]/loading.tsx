export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          {/* 返回按钮占位 */}
          <div className="h-6 w-32 bg-gray-200 rounded mb-8"></div>

          {/* 标题占位 */}
          <div className="h-12 bg-gray-200 rounded-lg mb-4"></div>

          {/* 元信息占位 */}
          <div className="flex space-x-4 mb-8">
            <div className="h-6 w-24 bg-gray-200 rounded"></div>
            <div className="h-6 w-24 bg-gray-200 rounded"></div>
          </div>

          {/* 作者信息占位 */}
          <div className="flex items-center mb-12">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <div className="h-5 w-24 bg-gray-200 rounded mb-1"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* 特色图片占位 */}
          <div className="h-64 md:h-96 bg-gray-200 rounded-lg mb-12"></div>

          {/* 内容占位 */}
          <div className="space-y-4 mb-12">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            <div className="h-8 bg-gray-200 rounded w-3/6 mt-8 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>

          {/* 标签占位 */}
          <div className="flex space-x-2 mb-6">
            <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
            <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
