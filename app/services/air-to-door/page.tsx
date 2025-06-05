import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle,
  Clock,
  Globe,
  Package,
  Shield,
  Truck,
  ArrowRight,
  MapPin,
  FileCheck,
  Plane,
  FileText,
} from "lucide-react"

export default function AirToDoorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16 group">
        <Image
          src="/air-to-door-hero.png"
          alt="Air Freight to Door Service"
          fill
          className="object-cover brightness-[0.7] transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
        <div className="relative z-10 py-24 px-6 md:px-12 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4 animate-fade-in">
              Premium Logistics Solution
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in-delay">
              Air Freight to Door Service
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-delay-2">
              A comprehensive door-to-door air freight solution from China to North America with fast delivery and
              complete visibility.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors hover:shadow-lg"
              >
                Get a Quote <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#learn-more"
                className="inline-flex items-center bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What is Air Freight to Door Service */}
      <section id="learn-more" className="mb-20">
        <div className="flex flex-col items-center mb-8">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Service Overview
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">What is Air Freight to Door Service?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-4 rounded-full"></div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <p className="text-lg mb-6 leading-relaxed">
                "Air Freight to Door" is a{" "}
                <span className="font-semibold text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-blue-100">
                  one-stop, end-to-end
                </span>{" "}
                international air freight logistics solution. It's not just about transporting goods from the departure
                airport to the destination airport, but covers the entire process from pickup at the shipper's location
                (such as your supplier or warehouse in China) to safe and timely delivery to the final address specified
                by your North American consumers.
              </p>
              <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-full shadow-md">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-blue-800 font-medium">
                  From factory floor in China to your customer's door in North America - all with a single service
                  provider.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-75 blur-lg group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <Image
                  src="/air-freight-concept.png"
                  alt="Air Freight Concept"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold px-4 py-2 rounded-md shadow-lg">
                  10-15 Days Transit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our End-to-End Process</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="relative mb-12">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 -translate-y-1/2 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 relative z-10 border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <div className="pt-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Pickup & Consolidation</h3>
                </div>
                <p className="text-gray-600">
                  We collect your goods from factories or warehouses in China, or you can deliver to our consolidation
                  centers in Yiwu, Shenzhen, or Shanghai.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    Factory Pickup
                  </span>
                  <span className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    Warehouse Collection
                  </span>
                  <span className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    Consolidation
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 relative z-10 border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <div className="pt-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Export & Air Transport</h3>
                </div>
                <p className="text-gray-600">
                  We handle all export documentation, customs clearance, and book optimal air freight routes from China
                  to North America.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    Documentation
                  </span>
                  <span className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    Export Clearance
                  </span>
                  <span className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    Air Freight
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 relative z-10 border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <div className="pt-6">
                <div className="flex items-center mb-4">
                  <Truck className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Import & Delivery</h3>
                </div>
                <p className="text-gray-600">
                  We manage import customs clearance, duties payment, and final delivery to your customer's door via
                  courier or truck.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    Import Clearance
                  </span>
                  <span className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    Duties Handling
                  </span>
                  <span className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    Last-Mile Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Detailed Process Flow</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                        1
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-blue-800">Pickup (Optional)</p>
                      <p className="text-gray-600">
                        We can pick up goods from your specified location (factory, warehouse) based on your needs. For
                        sellers who have already consolidated goods at our domestic consolidation warehouse, the process
                        starts from there.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                        2
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-blue-800">Export Customs Clearance & Documentation</p>
                      <p className="text-gray-600">
                        We handle all necessary export customs procedures and documents to ensure smooth departure of
                        goods, including invoices, packing lists, customs declarations, etc.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                        3
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-blue-800">International Air Freight</p>
                      <p className="text-gray-600">
                        We select appropriate airlines and routes based on the nature of the goods, time requirements,
                        and budget, transporting goods from major international airports in the country of origin (e.g.,
                        China) to entry airports in the destination country (e.g., US, Canada).
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                        4
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-blue-800">Import Customs Clearance</p>
                      <p className="text-gray-600">
                        After goods arrive at the destination airport, we or our partners handle complex import customs
                        procedures, including customs declaration, payment of duties and taxes (usually confirmed with
                        you in advance, such as DDP - Delivered Duty Paid).
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                        5
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-blue-800">Duties & Taxes Handling</p>
                      <p className="text-gray-600">
                        We pay import duties, consumption taxes, and other relevant taxes on your behalf according to
                        your instructions, or assist you in completing the payment process. For D2C small parcels, DDP
                        mode is usually adopted, meaning duties are included in the freight, and consumers don't need to
                        pay extra.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                        6
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-blue-800">Last-Mile Delivery</p>
                      <p className="text-gray-600">
                        After customs clearance, goods are transferred from the airport or our overseas operation center
                        and delivered directly to your final consumers through local express networks (such as UPS,
                        FedEx, USPS, Canada Post, etc.) or truck delivery.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Process Flow Showcase */}
          <div className="relative">
            <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/air-to-door-process.png" 
                alt="Complete Door-to-Door Air Transport Process" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center text-white">
                      <div className="bg-white/20 rounded-full p-2 mr-3">
                        <Plane className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">Complete Air Transport Solution</h4>
                        <p className="text-white/90 text-sm">From factory pickup in China to customer's door in North America</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-white">
                      <div className="text-center">
                        <div className="text-2xl font-bold">10-15</div>
                        <div className="text-xs text-white/80">Days Transit</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">72hr</div>
                        <div className="text-xs text-white/80">Delivery</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">GPS</div>
                        <div className="text-xs text-white/80">Tracking</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner Badges */}
              <div className="absolute top-4 left-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Door-to-Door Service
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Real-time Tracking
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-800">Origin (China)</span>
                </div>
                <p className="text-gray-600 text-sm">Complete door-to-door pickup with export clearance</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <Plane className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">Air Transport</span>
                </div>
                <p className="text-gray-600 text-sm">Fast and secure air freight with real-time monitoring</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-500">
                <div className="flex items-center mb-2">
                  <Truck className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="font-semibold text-orange-800">Destination (Canada & USA )</span>
                </div>
                <p className="text-gray-600 text-sm">Import clearance and 72-hour delivery guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Air Freight to Door */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Key Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose Air Freight to Door Service?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-500 transition-colors"></div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors transform group-hover:scale-110 duration-300">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Speed</h3>
              <p className="text-gray-600 mb-4">
                Air freight is the fastest of all transportation modes, significantly reducing transportation time to
                meet customer expectations for quick receipt.
              </p>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="font-medium text-gray-800 mb-2">Especially suitable for:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">New product launches & restocking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Seasonal & holiday promotion products</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">High-value, light and small products</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Time-sensitive customer orders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-500 transition-colors"></div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors transform group-hover:scale-110 duration-300">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Convenience</h3>
              <p className="text-gray-600 mb-4">
                You only need to hand over the goods to us, and we take care of the subsequent complicated processes
                such as customs declaration, clearance, and delivery.
              </p>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="font-medium text-gray-800 mb-2">Benefits include:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Single point of contact</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Simplified logistics management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Focus on your core business</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Reduced administrative burden</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-500 transition-colors"></div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors transform group-hover:scale-110 duration-300">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Full Visibility</h3>
              <p className="text-gray-600 mb-4">
                We provide end-to-end logistics tracking information from pickup to delivery, making it convenient for
                you and your customers to know the status of goods in real-time.
              </p>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="font-medium text-gray-800 mb-2">Tracking features:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Real-time shipment updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Milestone notifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Delivery status updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Customer tracking portal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-500 transition-colors"></div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors transform group-hover:scale-110 duration-300">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Enhanced Security</h3>
              <p className="text-gray-600 mb-4">
                Compared to sea freight, air freight has fewer transit links, shorter in-transit time, and relatively
                lower risk of damage and loss.
              </p>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="font-medium text-gray-800 mb-2">Security advantages:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Reduced handling points</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Shorter exposure to risks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Strict airport security protocols</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <span className="text-gray-600">Better for high-value items</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Mile Delivery Options */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Delivery Options
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Last Mile Delivery Solutions</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 group-hover:from-blue-500 group-hover:to-blue-600 transition-colors">
              <div className="flex items-center">
                <Package className="h-8 w-8 mr-3 animate-pulse" />
                <h3 className="text-2xl font-semibold">Express Courier Delivery</h3>
              </div>
              <p className="mt-2 text-blue-100">FedEx / UPS / USPS / Canada Post</p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-4 text-blue-800">Ideal for:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Standard boxes with single item weight not exceeding 22KG</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Longest side not exceeding 120CM, second longest side not exceeding 76CM</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Girth (width+height)*2+length not exceeding 266CM</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Single item weight less than 10KG</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Well-packaged goods that are not easily damaged</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Remote delivery addresses where truck delivery is not available or expensive</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
                <p className="text-blue-800 font-medium">
                  Perfect for e-commerce orders and direct-to-consumer shipments requiring fast delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 group-hover:from-blue-600 group-hover:to-blue-800 transition-colors">
              <div className="flex items-center">
                <Truck className="h-8 w-8 mr-3 animate-pulse" />
                <h3 className="text-2xl font-semibold">Truck LTL Delivery</h3>
              </div>
              <p className="mt-2 text-blue-100">Less Than Truckload Freight Services</p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-4 text-blue-800">Ideal for:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Overweight, oversized goods with courier surcharges (single item weight over 22KG)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Longest side exceeding 120CM or second longest side exceeding 76CM</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Girth (width+height)*2+length exceeding 266CM</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Very light items where courier services charge minimum 10KG (not economical)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>High-value products requiring special handling to avoid damage or loss</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Goods requiring pallet or wooden crate packaging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Bulk shipments (generally over 500KG) where truck delivery offers better pricing</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
                <p className="text-blue-800 font-medium">
                  Optimal for B2B shipments, larger consumer goods, and commercial deliveries requiring special
                  handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SPS */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Our Advantage
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose SPS?</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 bg-gradient-to-br from-white to-blue-50">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-green-100 to-green-200 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Fast Transit Time</h3>
                    <p className="text-gray-600">
                      10-15 days door-to-door delivery from China to North America, ensuring your products reach
                      customers quickly.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-green-100 to-green-200 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Strategic Consolidation Points</h3>
                    <p className="text-gray-600">
                      Multiple consolidation points available in Yiwu, Shenzhen, and Shanghai, China for your
                      convenience.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 p-8 bg-gradient-to-br from-blue-50 to-blue-100">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-green-100 to-green-200 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Streamlined Process</h3>
                    <p className="text-gray-600">
                      Simple and efficient business process with seamless connections between all logistics stages.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-green-100 to-green-200 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Transparent Pricing</h3>
                    <p className="text-gray-600">
                      Clear, upfront pricing with no hidden fees or surprise charges, allowing for better budget
                      planning.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <div className="flex items-center justify-center">
              <FileCheck className="h-6 w-6 mr-2" />
              <p className="text-lg font-medium">
                All services backed by our satisfaction guarantee and 24/7 customer support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="relative rounded-xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 group-hover:from-blue-500 group-hover:to-blue-800 transition-colors duration-500"></div>
          <div
            className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
          <div className="relative z-10 py-16 px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
              Ready to Ship with Air Freight to Door?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              Contact us today to get a customized solution for your air freight needs. Our logistics experts are ready
              to help optimize your supply chain.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
              <Link
                href="/get-quote"
                className="inline-flex items-center bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors hover:shadow-xl group"
              >
                Get a Quote{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
