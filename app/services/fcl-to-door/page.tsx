import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Ship, Package, Truck, Globe, ClipboardCheck, TrendingUp, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "FCL to Door | SinoPrimeShipping",
  description:
    "Professional ocean freight FCL to door services for businesses. Full container load shipping from China to worldwide destinations with end-to-end logistics solutions.",
}

export default function FCLToDoorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <div className="absolute inset-0">
          <Image
            src="/fcl-to-door-hero.jpg"
            alt="FCL to Door Service"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 py-24 px-6 md:px-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ocean Freight FCL to Door: Seamless End-to-End Container Shipping Solutions
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Simplify your international logistics with our comprehensive door-to-door full container load services,
              connecting China to global destinations with reliability and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Core Definition Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <Ship className="h-8 w-8 text-primary" />
            What is FCL to Door Service?
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <p className="mb-8 text-lg leading-relaxed">
            "Ocean Freight FCL to Door" is an international logistics service where the shipper (Consignor) rents an
            entire container (Full Container Load - FCL) to transport their goods. The logistics service provider
            (typically a Freight Forwarder or NVOCC) is responsible for the complete logistics process from the
            shipper's factory/warehouse (Origin Door), through export customs clearance, ocean transportation, import
            customs clearance, and finally delivery to the consignee's specified destination factory/warehouse
            (Destination Door).
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="font-bold text-xl text-blue-800 mb-3">Key Meaning of "FCL"</h3>
              <p className="text-gray-700">
                Refers to shipping where the customer's cargo fills an entire container, providing exclusive use without
                sharing space with other shippers' goods.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="font-bold text-xl text-blue-800 mb-3">Key Meaning of "To Door"</h3>
              <p className="text-gray-700">
                This means the logistics provider handles almost all logistics segments from the origin "door" to the
                destination "door," providing customers with a one-stop solution.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Advantages Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            Core Advantages of FCL to Door Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our FCL to Door service offers multiple benefits that streamline your international shipping process while
            maximizing security and cost-effectiveness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Convenience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Customers only need to deal with one logistics service provider, simplifying complex international
                logistics processes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                End-to-End Responsibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The logistics service provider is responsible for the entire transportation process, reducing
                coordination work for the customer.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Cargo Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                With FCL shipping, cargo remains in the container from loading to unloading, controlled by the shipper
                and consignee, reducing the risk of damage and loss.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Controllable Transit Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Compared to LCL, FCL operations involve fewer handling steps, resulting in more stable overall transit
                times.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Cost-Effective for Sufficient Volume
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                When cargo volume is sufficient to fill or nearly fill a container, FCL shipping typically offers lower
                unit costs than LCL.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Service Coverage Section */}
      <Card className="mb-16 border-none shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative h-full min-h-[400px]">
            <Image
              src="/fcl-to-door-coverage-map.jpg"
              alt="FCL to Door Service Coverage Map showing shipping routes from China to North America and Europe"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
                <Globe className="h-7 w-7 text-primary" />
                Our FCL to Door Service Coverage
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <h3 className="font-bold text-xl mb-4">Major Ports of Origin in China:</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Shenzhen</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Guangzhou</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Hong Kong</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Xiamen</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Shanghai</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ningbo</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Qingdao</span>
                </div>
              </div>

              <h3 className="font-bold text-xl mb-4">FCL Delivery Coverage in Canada:</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Toronto</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Vancouver</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Montreal</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Halifax</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Saskatoon</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Winnipeg</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Edmonton</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Calgary</span>
                </div>
              </div>

              <h3 className="font-bold text-xl mb-4">Main Destination Ports for FCL Delivery in the US:</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Los Angeles</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>New York</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Chicago</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Savannah</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Houston</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Seattle</span>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      {/* Service Process Flow */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <ClipboardCheck className="h-8 w-8 text-primary" />
            FCL to Door Service Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures your cargo moves efficiently from origin to destination with complete
            visibility and professional handling at every step.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden h-[400px] mb-12">
          <Image src="/fcl-to-door-process.jpg" alt="FCL to Door Process Flow" fill className="object-cover" />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                1
              </div>
              <h3 className="font-bold text-lg text-blue-800">Origin Pickup</h3>
            </div>
            <p className="text-gray-700">
              We arrange container pickup from your factory or warehouse, ensuring proper loading and documentation.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                2
              </div>
              <h3 className="font-bold text-lg text-blue-800">Export Customs</h3>
            </div>
            <p className="text-gray-700">
              Our team handles all export customs clearance procedures to ensure smooth departure from the origin
              country.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                3
              </div>
              <h3 className="font-bold text-lg text-blue-800">Ocean Transport</h3>
            </div>
            <p className="text-gray-700">
              Your container is loaded onto the vessel and transported to the destination port with real-time tracking.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                4
              </div>
              <h3 className="font-bold text-lg text-blue-800">Destination Delivery</h3>
            </div>
            <p className="text-gray-700">
              We manage import customs clearance and arrange final delivery to your specified destination address.
            </p>
          </div>
        </div>
      </div>

      {/* Container Types Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            Container Types We Offer
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">20' Standard Container</p>
                  <p className="text-muted-foreground">
                    Ideal for dense, heavy cargo with internal dimensions of 5.9m × 2.35m × 2.39m and capacity of 33.2
                    cubic meters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">40' Standard Container</p>
                  <p className="text-muted-foreground">
                    Perfect for larger shipments with internal dimensions of 12.03m × 2.35m × 2.39m and capacity of 67.7
                    cubic meters.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">40' High Cube Container</p>
                  <p className="text-muted-foreground">
                    Extra height for voluminous cargo with internal dimensions of 12.03m × 2.35m × 2.69m and capacity of
                    76.4 cubic meters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Special Containers</p>
                  <p className="text-muted-foreground">
                    We also offer refrigerated containers, open-top containers, and flat rack containers for specialized
                    cargo needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-[300px]">
            <Image src="/container-types.jpg" alt="Container Types" fill className="object-cover" />
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <TrendingUp className="h-7 w-7 text-primary" />
            Why Choose SinoPrime Shipping for FCL to Door Service
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Extensive Network</p>
                  <p className="text-muted-foreground">
                    Strong partnerships with major shipping lines and local transportation providers in both origin and
                    destination countries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Competitive Rates</p>
                  <p className="text-muted-foreground">
                    Leveraging our volume and relationships to secure the best possible rates for our customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Customs Expertise</p>
                  <p className="text-muted-foreground">
                    In-depth knowledge of customs regulations in major markets to ensure smooth clearance processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Dedicated Support</p>
                  <p className="text-muted-foreground">
                    Personal account managers and 24/7 customer service to address any concerns throughout the shipping
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-xl p-12 text-white shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to ship your container?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto text-blue-50">
          Contact our team today to get a customized FCL to Door shipping solution for your business needs.
        </p>
        <Link
                      href="/get-quote"
          className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-medium text-blue-600 shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl transform hover:scale-105"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  )
}
