import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  Package,
  Plane,
  TruckIcon,
  Clock,
  BarChart,
  Globe,
  Scale,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Small Parcel Express | SinoPrimeShipping",
  description:
    "Optimized international shipping solution for cross-border e-commerce small parcels, offering the perfect balance of speed, reliability, and cost-effectiveness.",
}

export default function SmallParcelExpressPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 mix-blend-multiply z-10"></div>
          <Image
            src="/data-viz-overlay.png"
            alt="Small Parcel Express"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 py-24 px-6 md:px-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Small Parcel Express: Optimized Shipping for Cross-Border E-Commerce
            </h1>
            <p className="text-xl md:text-2xl font-light">
              The perfect balance of speed, reliability, and cost-effectiveness for your international e-commerce
              shipments.
            </p>
          </div>
        </div>
      </div>

      {/* What is Small Parcel Express Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            What is Small Parcel Express?
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-6 text-lg">
              Small Parcel Express (Special Line for Small Parcels) is an optimized international logistics service
              specifically designed for cross-border e-commerce small packages, typically weighing under 2kg (though
              some lines may accommodate up to 5kg or more).
            </p>
            <p className="mb-6 text-lg">
              It combines air transportation (line haul) with local delivery in the destination country, providing a
              solution that is faster and more reliable than traditional postal packages, with better tracking
              capabilities, while being more cost-effective than commercial express services (like DHL, FedEx, UPS).
            </p>
            <p className="mb-6 text-lg">
              The term "Special Line" refers to optimized shipping channels that logistics providers have established
              for specific countries or regions (such as US Line, Canada Line, UK Line) through resource
              integration and process optimization.
            </p>
            <div className="mt-8">
              <Link href="#how-it-works" className="flex items-center font-medium text-primary hover:text-primary/80">
                Learn how Small Parcel Express works <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image src="/small-parcel-delivery.png" alt="Small Parcel Express Concept" fill className="object-cover" />
          </div>
        </CardContent>
      </Card>

      {/* How It Works Section */}
      <div className="mb-16" id="how-it-works">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <TruckIcon className="h-8 w-8 text-primary" />
            How Small Parcel Express Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Small Parcel Express service follows a streamlined operational process to ensure efficient delivery of
            your e-commerce packages to customers worldwide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Package className="h-4 w-4 text-primary" />
                </div>
                Consolidation at Origin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We collect and consolidate large volumes of small parcels from different e-commerce sellers that are
                destined for the same country or region, creating economies of scale.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <TruckIcon className="h-4 w-4 text-primary" />
                </div>
                Origin Handling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Packages are sorted, packed, labeled with international shipping labels, and processed for export
                customs declaration, ensuring compliance with all regulations.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Plane className="h-4 w-4 text-primary" />
                </div>
                Line Haul Transportation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Consolidated parcels are transported to the destination country or major transit hub, typically via air
                freight (chartered flights, reserved cargo space, or commercial flights).
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                Customs Clearance at Destination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our logistics partners handle bulk customs clearance at the destination, using optimized processes
                specifically designed for e-commerce small parcels and low-value goods.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <TruckIcon className="h-4 w-4 text-primary" />
                </div>
                Last-Mile Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                After customs clearance, parcels are handed over to local postal systems (like USPS, Royal Mail) or
                commercial courier companies (like DPD, Hermes) for final delivery to recipients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Features Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <CheckCircle className="h-8 w-8 text-primary" />
            Key Features & Benefits
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-8 text-lg">
                Our Small Parcel Express service offers a range of features and benefits designed specifically for
                cross-border e-commerce businesses shipping small, lightweight items internationally.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Highly Targeted Service</h3>
                    <p className="text-muted-foreground">
                      Specifically designed for cross-border B2C e-commerce sellers, optimized for small, lightweight
                      products typically under 2kg (with some lines accommodating up to 5kg).
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Optimized Delivery Times</h3>
                    <p className="text-muted-foreground">
                      Faster than standard postal packages. For example, delivery to North America and Europe typically
                      takes 7-15 business days, compared to 15-40 days for regular postal packages.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Cost-Effective Solution</h3>
                    <p className="text-muted-foreground">
                      Priced between postal packages and commercial express services, offering an excellent balance of
                      cost and performance for e-commerce businesses.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Enhanced Tracking</h3>
                    <p className="text-muted-foreground">
                      Most special lines provide full or partial tracking information, offering more stable and detailed
                      tracking than standard postal packages.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Scale className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Service Diversity</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>Regular goods vs. special goods lines (for electronics, cosmetics, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>Economy lines vs. express lines with different delivery times and pricing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>DDP (Delivered Duty Paid) options available on select routes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-10 lg:mt-0">
              <div className="relative h-[500px] overflow-hidden rounded-xl">
                <Image
                  src="/warehousing-fulfillment.png"
                  alt="Small Parcel Express Features"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-lg bg-white p-6 shadow-xl">
                <h3 className="mb-2 text-xl font-bold">Weight & Size Limitations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Typically for packages under 2kg (some lines accept up to 5kg)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Size restrictions vary by line but generally for small items</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Value limitations for customs clearance purposes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>Specific restrictions for certain product categories</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            How We Compare
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            See how our Small Parcel Express service compares to other international shipping methods for e-commerce
            businesses.
          </p>

          <div className="overflow-hidden rounded-xl border bg-white shadow">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse text-left">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="p-4 font-medium">Shipping Method</th>
                    <th className="p-4 font-medium">Speed</th>
                    <th className="p-4 font-medium">Cost</th>
                    <th className="p-4 font-medium">Tracking</th>
                    <th className="p-4 font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-primary/5">
                    <td className="p-4 font-medium">Small Parcel Express</td>
                    <td className="p-4">7-15 days</td>
                    <td className="p-4">Medium</td>
                    <td className="p-4">Good</td>
                    <td className="p-4">E-commerce small parcels with balanced cost and speed requirements</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">International Postal Packages (China Post, ePacket)</td>
                    <td className="p-4">15-40 days</td>
                    <td className="p-4">Low</td>
                    <td className="p-4">Limited</td>
                    <td className="p-4">Very low-value items where delivery time is not critical</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Commercial Express (DHL, FedEx, UPS)</td>
                    <td className="p-4">3-7 days</td>
                    <td className="p-4">High</td>
                    <td className="p-4">Excellent</td>
                    <td className="p-4">Urgent or high-value items requiring fast delivery</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Overseas Warehouse Fulfillment</td>
                    <td className="p-4">1-3 days</td>
                    <td className="p-4">High (setup)</td>
                    <td className="p-4">Excellent</td>
                    <td className="p-4">High-volume sellers with predictable inventory needs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">vs. International Postal Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Advantages:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Faster delivery times</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Better tracking capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Higher reliability and stability</span>
                    </li>
                  </ul>
                  <p className="font-medium mt-4">Disadvantages:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                      <span>Slightly higher cost than postal options</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">vs. Commercial Express Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Advantages:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Much more cost-effective for low-value items</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Better economies of scale for multiple small shipments</span>
                    </li>
                  </ul>
                  <p className="font-medium mt-4">Disadvantages:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                      <span>Slower than commercial express services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                      <span>Less comprehensive service and claims handling</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">vs. Overseas Warehouse Fulfillment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Advantages:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>No need to pre-stock inventory in overseas warehouses</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Lower startup costs and inventory risk</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Ideal for new product testing or diverse SKU catalogs</span>
                    </li>
                  </ul>
                  <p className="font-medium mt-4">Disadvantages:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                      <span>Longer delivery times than local warehouse fulfillment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                      <span>More complex returns handling process</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <Globe className="h-8 w-8 text-primary" />
            Ideal Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Our Small Parcel Express service is the perfect solution for these e-commerce scenarios:
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cross-Border Marketplace Sellers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Perfect for sellers on AliExpress, Wish, eBay, and Amazon (Merchant Fulfilled) who ship products
                  directly from China to international consumers.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Balanced delivery times to meet marketplace requirements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Cost-effective for maintaining competitive pricing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Reliable tracking to maintain good seller metrics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Independent Online Stores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ideal for independent e-commerce websites shipping products directly to global customers from China or
                  other manufacturing hubs.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Flexible shipping options for different customer needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Better customer experience than standard postal options</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Cost control for maintaining profitable operations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Balanced Service Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Perfect for sellers seeking better delivery times and service than postal packages while controlling
                  logistics costs.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Improved customer satisfaction with faster delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Reduced customer inquiries with better tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Cost optimization for low to medium-value products</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Summary Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <BarChart className="h-8 w-8 text-primary" />
            The Perfect Balance for E-Commerce Shipping
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image src="/logistics-services.png" alt="Small Parcel Express Summary" fill className="object-cover" />
              </div>
            </div>

            <div>
              <p className="mb-6 text-lg">
                Small Parcel Express is a vital shipping method in cross-border e-commerce logistics, finding the
                optimal balance between cost, delivery time, and reliability through resource integration and process
                optimization for specific routes.
              </p>
              <p className="mb-8 text-lg">
                Choosing the right special line depends on your specific product characteristics, budget constraints,
                delivery time requirements, and destination country policies. Our logistics experts can help you select
                the optimal solution for your business needs.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Expert Advice
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Optimize Your E-Commerce Shipping?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Let our Small Parcel Express service help you find the perfect balance between cost, speed, and reliability
          for your cross-border e-commerce business.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get a Free Quote
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  )
}
