import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function OverseasWarehousingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-xl">
        <div className="absolute inset-0">
          <Image
            src="/overseas-warehousing-hero.png"
            alt="Overseas Warehousing and Fulfillment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40" />
        </div>
        <div className="relative z-10 px-6 py-24 text-white md:px-12 md:py-32">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Overseas Warehousing & Fulfillment</h1>
          <p className="mb-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Streamline your cross-border e-commerce with our comprehensive overseas warehousing and fulfillment
            solutions. Reduce shipping times, lower costs, and enhance customer satisfaction.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
          >
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>

      {/* Core Definition */}
      <section className="mb-16">
        <div className="mb-8 flex items-center">
          <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Core Definition</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <p className="text-lg text-gray-700">
              <strong>Overseas Warehousing & Fulfillment</strong> is a comprehensive cross-border e-commerce logistics
              solution. It involves sellers{" "}
              <strong>pre-shipping products in bulk to warehouses located in target sales countries/regions</strong>,
              and when consumers place orders through the seller's online store (independent site or e-commerce
              platform), the overseas warehousing service provider{" "}
              <strong>
                processes the order by picking, packing, and delivering directly to end consumers through local
                logistics channels
              </strong>
              .
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/overseas-warehousing-concept.png"
              alt="Overseas Warehousing Concept"
              width={500}
              height={350}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Business Process */}
      <section className="mb-16">
        <div className="mb-8 flex items-center">
          <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M16.24 16.24l2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <path d="M4.93 19.07l2.83-2.83" />
              <path d="M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Business Process</h2>
        </div>

        <div className="mb-8 flex justify-center">
          <Image
            src="/overseas-warehousing-process.png"
            alt="Overseas Warehousing Process Flow"
            width={900}
            height={300}
            className="rounded-lg"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold">First-Mile / Head Haul Logistics</h3>
            <p className="text-gray-600">
              Sellers ship products in bulk from their country (e.g., China) to overseas warehouses via sea, air, rail,
              or land transport. Professional overseas warehouse service providers typically assist with booking,
              customs declaration, and clearance services.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold">Overseas Warehousing</h3>
            <p className="text-gray-600">
              After goods arrive and clear customs, they're transported to the designated overseas warehouse. Warehouse
              staff unload, count, inspect (optional), label (e.g., SKU codes, warehouse codes), and store the goods
              according to preset storage logic. Sellers can monitor inventory in real-time through WMS.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold">Order Processing & Synchronization</h3>
            <p className="text-gray-600">
              When consumers place orders on the seller's e-commerce platform or independent site, order information is
              automatically or semi-automatically synchronized to the overseas warehouse's WMS or OMS through API
              interfaces, plugins, or manual imports.
            </p>
          </div>

          {/* Step 4 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl font-bold">4</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold">Fulfillment / Pick, Pack, and Ship</h3>
            <p className="text-gray-600">
              After receiving orders, the warehouse system generates picking lists. Operators pick items, verify
              accuracy, package according to product characteristics and seller requirements (including custom branded
              packaging if provided), weigh packages, print and attach local logistics labels, and dispatch to local
              courier partners.
            </p>
          </div>

          {/* Step 5 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl font-bold">5</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold">Last-Mile Delivery</h3>
            <p className="text-gray-600">
              Local logistics service providers deliver packages from overseas warehouses to end consumers. Tracking
              numbers are typically provided so both sellers and buyers can check package status. Major carriers include
              UPS, FedEx, USPS in the US, and Canada Post, UPS, UniUni in Canada.
            </p>
          </div>

          {/* Step 6 */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl font-bold">6</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold">After-Sales & Returns Management</h3>
            <p className="text-gray-600">
              If consumers need to return items, products can be returned to the overseas warehouse. The warehouse
              inspects returned items and processes them according to seller instructions: restocking for resale,
              disposal, repair, or return to the seller (higher cost). Exchanges or reshipments can be processed
              directly from the overseas warehouse.
            </p>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="mb-16">
        <div className="mb-8 flex items-center">
          <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <circle cx="12" cy="10" r="2" />
              <line x1="8" x2="8" y1="2" y2="4" />
              <line x1="16" x2="16" y1="2" y2="4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Target Customer Groups</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-blue-600 p-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Cross-Border E-commerce Sellers</h3>
            <p className="text-gray-700">
              Sellers on platforms like Amazon, eBay, Wish, AliExpress, or those with independent sites (Shopify,
              WooCommerce, etc.) looking to improve delivery times and customer experience.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-blue-600 p-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Global Brand Expansion Companies</h3>
            <p className="text-gray-700">
              Businesses looking to establish their brand in target markets and provide a localized shopping experience
              with fast delivery and easy returns.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-sm">
            <div className="mb-4 rounded-full bg-blue-600 p-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Sellers with Established Sales Volume</h3>
            <p className="text-gray-700">
              Businesses with stable sales volumes or products with high potential that can benefit from the advantages
              of overseas warehousing despite the initial investment.
            </p>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="mb-16">
        <div className="mb-8 flex items-center">
          <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="M4.93 4.93l2.83 2.83" />
              <path d="M16.24 16.24l2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <path d="M4.93 19.07l2.83-2.83" />
              <path d="M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Core Advantages</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Significantly Reduced Delivery Times</h3>
            <p className="text-gray-600">
              Shipping from local warehouses allows consumers to receive products quickly (typically 1-5 days), greatly
              enhancing the user experience.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Lower Last-Mile Logistics Costs</h3>
            <p className="text-gray-600">
              Local delivery costs are typically much lower than direct cross-border shipping costs from the country of
              origin.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Enhanced Customer Experience</h3>
            <p className="text-gray-600">
              Fast logistics and convenient return/exchange services help improve conversion rates, repeat purchase
              rates, and positive reviews.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
                <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Improved Product Competitiveness</h3>
            <p className="text-gray-600">
              Offering local shipping services often leads to better product exposure on platforms and makes it easier
              for consumers to accept higher prices.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Simplified Returns Process</h3>
            <p className="text-gray-600">
              Customers can return products to local warehouses, making processing faster and more convenient, reducing
              return costs and communication barriers for both sellers and buyers.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="m9 16 2 2 4-4" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Avoid Peak Season Congestion</h3>
            <p className="text-gray-600">
              During peak sales seasons (like Black Friday, Christmas), international logistics can become congested,
              but overseas warehouse shipping is not affected by this.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Better Seasonal Product Management</h3>
            <p className="text-gray-600">
              Stock can be prepared in advance at overseas warehouses to meet seasonal demand or large promotional
              activities.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold">Platform Policy Support</h3>
            <p className="text-gray-600">
              For example, Amazon's FBA is itself an overseas warehouse model, while self-built or third-party overseas
              warehouses for MFN shipping can also gain platform traffic preference and buyer trust if delivery times
              meet standards.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges and Costs */}
      <section className="mb-16">
        <div className="mb-8 flex items-center">
          <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" x2="12" y1="9" y2="13" />
              <line x1="12" x2="12.01" y1="17" y2="17" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Potential Challenges & Costs</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-red-100 p-2 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="8" height="8" x="2" y="2" rx="1" />
                    <path d="M6 6h.01" />
                    <rect width="8" height="8" x="14" y="2" rx="1" />
                    <path d="M18 6h.01" />
                    <rect width="8" height="8" x="2" y="14" rx="1" />
                    <path d="M6 18h.01" />
                    <path d="M14 18h.01" />
                    <path d="M18 18h.01" />
                    <path d="M14 14h8v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Inventory Pressure & Capital Occupation</h3>
              </div>
              <p className="text-gray-600">
                Need to stock inventory overseas in advance, tying up capital and potentially creating slow-moving
                inventory risk.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-red-100 p-2 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Warehousing Fees</h3>
              </div>
              <p className="text-gray-600">
                Including warehouse rental fees, management fees, and operation fees, which are ongoing expenses.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-red-100 p-2 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                    <path d="M12 3v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">First-Mile Logistics Cost & Complexity</h3>
              </div>
              <p className="text-gray-600">
                Shipping large quantities of goods overseas requires professional logistics operations and incurs
                certain costs.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-red-100 p-2 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                    <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                    <path d="M12 12v3" />
                    <path d="M12 3v3" />
                    <path d="M8 18h8" />
                    <path d="M2 22h20" />
                    <path d="M2 18h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Tax & Compliance Issues</h3>
              </div>
              <p className="text-gray-600">
                Need to understand and comply with the destination country's import duties, consumption taxes (such as
                VAT, GST), and relevant laws and regulations.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-red-100 p-2 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Dependence on Service Providers</h3>
              </div>
              <p className="text-gray-600">
                The operational efficiency, accuracy, and system stability of service providers directly impact
                business.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-3 rounded-full bg-red-100 p-2 text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.93 1.93 0 0 0-.97 1.68v4.62a1.93 1.93 0 0 0 .97 1.68l3.65 1.89" />
                    <path d="m22 17.92-3.37-1.75a1.77 1.77 0 0 0-1.63 0l-4.72 2.45a1.77 1.77 0 0 1-1.63 0l-3.28-1.7a1.77 1.77 0 0 0-1.63 0L2 18.54" />
                    <path d="M14.92 6.04 8.43 9.58a1.77 1.77 0 0 1-1.63 0l-2.71-1.41" />
                    <path d="M14.92 12.04 8.43 15.58a1.77 1.77 0 0 1-1.63 0l-2.71-1.41" />
                    <path d="M14.92 18.04 8.43 21.58a1.77 1.77 0 0 1-1.63 0l-2.71-1.41" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">High Product Selection Requirements</h3>
              </div>
              <p className="text-gray-600">
                Not suitable for all products; more suitable for products with stable sales, moderate volume, high added
                value, or high requirements for logistics timeliness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-16">
        <div className="mb-8 flex items-center">
          <div className="mr-4 rounded-full bg-blue-100 p-2 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold">Summary & Outlook</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-8">
            <h3 className="mb-4 text-xl font-bold text-blue-800">Strategic Value</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-blue-200 p-1">
                  <svg className="h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Overseas warehousing is an inevitable choice for cross-border e-commerce development, significantly optimizing shopping experience and logistics efficiency through forward logistics deployment
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-blue-200 p-1">
                  <svg className="h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Despite inventory and capital pressures, the competitive advantages and customer satisfaction improvements are significant strategic benefits
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-8">
            <h3 className="mb-4 text-xl font-bold text-blue-800">Development Recommendations</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-blue-200 p-1">
                  <svg className="h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Selecting reliable overseas warehouse service providers is crucial, considering their service capabilities, system stability, and operational efficiency
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-blue-200 p-1">
                  <svg className="h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Develop appropriate overseas warehousing strategies based on product characteristics, sales scale, and market demand to achieve optimal balance between logistics costs and efficiency
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:col-span-2">
            <h3 className="mb-4 text-xl font-bold text-blue-800">Future Outlook</h3>
            <p className="text-gray-700">
              As cross-border e-commerce continues to evolve and consumer demands for rapid delivery increase, overseas warehousing will play an increasingly crucial role in global supply chains. Through digital transformation, intelligent operations, and network optimization, overseas warehousing services will provide sellers with more efficient and flexible solutions, supporting sustained business growth in international markets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-12 text-white shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Optimize Your Cross-Border Logistics?</h2>
          <p className="mb-8 text-lg text-white/90">
            Contact us today to learn how our overseas warehousing and fulfillment solutions can help your business
            reduce shipping times, lower costs, and enhance customer satisfaction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/services">Explore More Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
