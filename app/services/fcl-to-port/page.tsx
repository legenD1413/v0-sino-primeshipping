import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Ship, Globe, Truck, FileText, Clock, TrendingUp, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "FCL to Port Service | SinoPrimeShipping",
  description:
    "Professional Full Container Load (FCL) shipping services from origin to destination port. Efficient international ocean freight solutions for your business.",
}

export default function FCLToPortPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <div className="absolute inset-0">
          <Image
            src="/fcl-to-port-hero.png"
            alt="FCL to Port Service"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 py-24 px-6 md:px-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              FCL to Port Service: Efficient Full Container Load Shipping Solutions
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Professional ocean freight service for transporting your full container loads from origin to destination
              port, optimizing your international shipping operations.
            </p>
          </div>
        </div>
      </div>

      {/* Service Definition Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <Ship className="h-8 w-8 text-primary" />
            What is FCL to Port Service?
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <p className="text-lg mb-6">
            FCL to Port (Full Container Load to Port) is an international ocean freight service where the shipper fills
            one or more standard containers (20ft, 40ft, 40ft High Cube, etc.) with cargo. The service covers
            transportation from the Port of Loading (POL) to the Port of Discharge (POD),{" "}
            <strong>
              but does not include import customs clearance, duty payment, or inland transportation from the destination
              port to the consignee's final warehouse (the "last mile" delivery).
            </strong>
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-lg">Full Container Load (FCL)</p>
                <p className="text-muted-foreground">
                  The shipper's cargo exclusively occupies one or more containers, not mixed with other shippers' cargo
                  in the same container. This differs from LCL (Less than Container Load).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-lg">To Port Service</p>
                <p className="text-muted-foreground">
                  The transportation responsibility ends at the terminal of the destination port, not including customs
                  clearance or inland delivery to the final destination.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Benefits Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            Benefits of FCL to Port Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Optimize your international shipping with our professional FCL to Port service, offering numerous advantages
            for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Predictable Transit Times
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Direct routing with fewer stops and handling points leads to more reliable delivery schedules.</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Cost-Effective for Large Volumes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                More economical than LCL when shipping large quantities, with fixed container rates regardless of
                weight.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Enhanced Cargo Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Reduced handling and exclusive container use minimize damage and loss risks during transportation.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Service Process Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            FCL to Port Service Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures efficient handling of your full container shipments from origin to
            destination port.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden h-[400px] mb-12">
          <Image src="/fcl-to-port-process.png" alt="FCL to Port Process Flow" fill className="object-cover" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {step.icon}
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Ports & Service Areas Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <Globe className="h-7 w-7 text-primary" />
            Key Ports & Service Areas
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="font-medium flex items-center gap-2">
                <Ship className="h-5 w-5 text-primary" />
                Main Ports of Loading in China
              </p>
              <ul className="pl-5 space-y-1">
                <li className="text-muted-foreground">Shenzhen</li>
                <li className="text-muted-foreground">Guangzhou</li>
                <li className="text-muted-foreground">Hong Kong</li>
                <li className="text-muted-foreground">Xiamen</li>
                <li className="text-muted-foreground">Shanghai</li>
                <li className="text-muted-foreground">Ningbo</li>
                <li className="text-muted-foreground">Qingdao</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-medium flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                FCL Delivery Range in Canada
              </p>
              <p className="text-muted-foreground">
                Toronto, Vancouver, Montreal, Halifax and other gateway cities, as well as Saskatoon, Winnipeg,
                Edmonton, Calgary and other inland key nodes and surrounding areas.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-medium flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Main Destination Ports in the US
              </p>
              <ul className="pl-5 space-y-1">
                <li className="text-muted-foreground">Los Angeles</li>
                <li className="text-muted-foreground">New York</li>
                <li className="text-muted-foreground">Chicago</li>
                <li className="text-muted-foreground">Savannah</li>
                <li className="text-muted-foreground">Houston</li>
                <li className="text-muted-foreground">Seattle</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Choose Us Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <TrendingUp className="h-7 w-7 text-primary" />
            Why Choose SinoPrimeShipping for FCL to Port Service?
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Global Network</p>
                  <p className="text-muted-foreground">
                    Extensive partnerships with major shipping lines ensuring competitive rates and reliable service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Experienced Team</p>
                  <p className="text-muted-foreground">
                    Professional logistics experts with deep knowledge of international shipping regulations and
                    procedures.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Advanced Tracking</p>
                  <p className="text-muted-foreground">
                    Real-time container tracking and status updates throughout the shipping journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Customized Solutions</p>
                  <p className="text-muted-foreground">
                    Tailored shipping solutions based on your specific cargo requirements, budget, and timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-xl p-12 text-white shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to ship your full container?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto text-blue-50">
          Contact our team today to get a competitive quote for your FCL to Port shipping needs.
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

const serviceSteps = [
  {
    title: "Booking",
    description:
      "Shipper or freight forwarder books space and containers with the shipping line, providing cargo details, ports, estimated shipping date, and container specifications.",
    icon: <FileText className="h-5 w-5 text-primary mr-1" />,
  },
  {
    title: "Container Pick-up & Stuffing",
    description:
      "Shipping line provides empty containers. Shipper loads cargo into containers, ensuring proper stowage and securing. Containers are sealed after loading.",
    icon: <Package className="h-5 w-5 text-primary mr-1" />,
  },
  {
    title: "Customs Declaration & Drayage to POL",
    description:
      "Shipper declares export cargo to customs. Arranges trucking of loaded containers to the origin port terminal. Submits Verified Gross Mass (VGM) data.",
    icon: <Truck className="h-5 w-5 text-primary mr-1" />,
  },
  {
    title: "Origin Port Operations",
    description:
      "Terminal operations including loading containers onto the vessel. Shipping line charges Origin Terminal Handling Charge (OTHC).",
    icon: <Globe className="h-5 w-5 text-primary mr-1" />,
  },
  {
    title: "Ocean Freight",
    description:
      "After loading, containers begin ocean transportation from origin port to destination port. Shipping line issues Bill of Lading (B/L).",
    icon: <Ship className="h-5 w-5 text-primary mr-1" />,
  },
  {
    title: "Arrival at POD & Discharge",
    description:
      "Upon vessel arrival at destination port, containers are unloaded to the terminal yard. Shipping line or agent issues Arrival Notice to consignee or designated party.",
    icon: <Package className="h-5 w-5 text-primary mr-1" />,
  },
]
