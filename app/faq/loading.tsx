import { Skeleton } from "@/components/ui/skeleton"

export default function FAQLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-10 w-3/4 mx-auto mb-2" />
        <Skeleton className="h-5 w-2/3 mx-auto mb-8" />

        {/* Search Bar Skeleton */}
        <Skeleton className="h-12 w-full mb-10" />

        {/* Tabs Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-10" />
            ))}
        </div>

        {/* Accordion Items Skeleton */}
        <div className="space-y-4 mb-8">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-12 w-full" />
                {i === 0 && (
                  <div className="pl-4 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-11/12" />
                    <Skeleton className="h-4 w-10/12" />
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Contact Section Skeleton */}
        <Skeleton className="h-40 w-full rounded-lg" />
      </div>
    </div>
  )
}
