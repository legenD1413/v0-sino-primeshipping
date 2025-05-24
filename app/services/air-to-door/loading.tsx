import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section Skeleton */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <Skeleton className="h-[400px] w-full" />
      </div>

      {/* What is Air Freight Section Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-10 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-40 w-full rounded-xl" />
      </section>

      {/* Service Process Section Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-10 w-2/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Skeleton className="h-96 rounded-xl" />
          <Skeleton className="h-96 rounded-xl" />
        </div>
        <Skeleton className="h-60 w-full rounded-xl" />
      </section>

      {/* Why Choose Section Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-10 w-2/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Skeleton className="h-80 rounded-xl" />
          <Skeleton className="h-80 rounded-xl" />
          <Skeleton className="h-80 rounded-xl" />
          <Skeleton className="h-80 rounded-xl" />
        </div>
      </section>

      {/* Last Mile Delivery Options Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-10 w-2/3 mx-auto mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="h-96 rounded-xl" />
          <Skeleton className="h-96 rounded-xl" />
        </div>
      </section>

      {/* Why Choose SPS Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-10 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-60 w-full rounded-xl" />
      </section>

      {/* CTA Section Skeleton */}
      <Skeleton className="h-60 w-full rounded-xl" />
    </div>
  )
}
