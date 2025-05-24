import { CategoryIcon } from "@/components/category-icon"

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">Our Services</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6 shadow-sm">
          <div className="mb-4 flex items-center">
            <CategoryIcon category="B2C" className="mr-3 h-8 w-8" size={20} />
            <h2 className="text-xl font-semibold">B2C Services</h2>
          </div>
          <p className="text-gray-600">
            Our Business-to-Customer services provide comprehensive logistics solutions for e-commerce businesses and
            retailers shipping directly to consumers.
          </p>
        </div>

        <div className="rounded-lg border p-6 shadow-sm">
          <div className="mb-4 flex items-center">
            <CategoryIcon category="B2B" className="mr-3 h-8 w-8" size={20} />
            <h2 className="text-xl font-semibold">B2B Services</h2>
          </div>
          <p className="text-gray-600">
            Our Business-to-Business services offer specialized logistics solutions for companies shipping to other
            businesses, including wholesale, manufacturing, and distribution.
          </p>
        </div>
      </div>
    </div>
  )
}
