import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">文章未找到</h2>
      <p className="text-lg text-gray-600 mb-8">抱歉，您要查找的博客文章不存在或已被移除。</p>
      <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
        返回博客列表
      </Link>
    </div>
  )
}
