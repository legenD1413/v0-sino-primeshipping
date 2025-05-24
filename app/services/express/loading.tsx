import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section Skeleton */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-16">
        <Skeleton className="h-full w-full" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-12 w-3/4 max-w-3xl mb-4" />
          <Skeleton className="h-6 w-2/3 max-w-2xl mb-8" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="max-w-3xl mx-auto mb-16">
        <Skeleton className="h-6 w-32 mb-4" />
        <Skeleton className="h-10 w-3/4 mb-6" />
        <Skeleton className="h-[200px] w-full rounded-xl mb-8" />
        <Skeleton className="h-6 w-full mb-4" />
        <Skeleton className="h-6 w-full mb-4" />
        <Skeleton className="h-6 w-3/4" />
      </div>

      {/* Features Grid Skeleton */}
      <div className="max-w-6xl mx-auto mb-16">
        <Skeleton className="h-6 w-32 mb-4" />
        <Skeleton className="h-10 w-2/3 mb-10" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border rounded-xl p-6">
              <Skeleton className="h-12 w-12 rounded-full mb-4" />
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>

      {/* Providers Section Skeleton */}
      <div className="max-w-6xl mx-auto mb-16">
        <Skeleton className="h-6 w-32 mb-4" />
        <Skeleton className="h-10 w-2/3 mb-10" />

        <div className="rounded-xl overflow-hidden mb-8">
          <div className="p-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="rounded-lg p-6">
                  <Skeleton className="h-8 w-1/2 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
          <Skeleton className="h-64 w-full" />
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="rounded-xl overflow-hidden">
        <Skeleton className="h-[300px] w-full" />
      </div>
    </div>
  )
}
