import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PodcastNotFound() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/podcast" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        Back to all episodes
      </Link>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Episode Not Found</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the podcast episode you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          href="/podcast"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Browse All Episodes
        </Link>
      </div>
    </div>
  )
}
