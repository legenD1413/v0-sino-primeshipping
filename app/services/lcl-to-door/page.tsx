import Image from "next/image"
import Link from "next/link"
import {
  Package,
  Truck,
  DollarSign,
  Zap,
  ShieldCheck,
  ArrowRight,
  BarChart4,
  CheckCircle,
  FileCheck,
} from "lucide-react"

export default function LCLToDoorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <Image
          src="/lcl-to-door-hero.jpg"
          alt="LCL to Door Service"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
        <div className="relative z-10 py-24 px-6 md:px-12 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              Cost-Effective Logistics Solution
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">LCL to Door Service</h1>
            <p className="text-xl md:text-2xl font-light mb-8">
              Cost-effective shipping solution for small cargo volumes with complete door-to-door delivery
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Core Definition */}
      <section id="learn-more" className="mb-20">
        <div className="flex flex-col items-center mb-8">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Service Overview
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">What is LCL to Door Service?</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
          <p className="text-lg mb-8 leading-relaxed">
            "LCL to Door" is an international logistics service designed for shippers whose cargo volume is insufficient
            to fill an entire container (Less than Container Load - LCL). In this service model, logistics providers
            (typically freight forwarders or consolidators) collect small shipments from multiple shippers at their
            warehouse, consolidate them into a single container for ocean transport. After reaching the destination
            port, the container is unpacked and sorted, and individual customer shipments are delivered to their
            specified final addresses (Destination Door) through inland transportation.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="font-bold text-xl text-blue-800 mb-3">Key Meaning of "LCL"</h3>
              <p className="text-gray-700">
                Refers to cargo with smaller volumes that share container space with other customers' goods.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="font-bold text-xl text-blue-800 mb-3">Key Meaning of "To Door"</h3>
              <p className="text-gray-700">
                Indicates that the logistics provider is responsible for the entire logistics arrangement from the
                origin "door" to the destination "door," including pickup at origin, export customs clearance, ocean
                shipping, import customs clearance, and final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-8">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Challenges & Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Addressing Small Cargo Shipping Challenges</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6">
              <h3 className="text-2xl font-bold">Common Challenges in Small Cargo Shipping</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">High Costs for Small Volumes</h4>
                    <p className="text-gray-700">
                      Shipping small cargo volumes can be prohibitively expensive when using full container services.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complex Logistics Coordination</h4>
                    <p className="text-gray-700">
                      Managing multiple logistics providers for different segments of the shipping journey.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Inventory Management Pressure</h4>
                    <p className="text-gray-700">
                      Forced to order large quantities to make full container shipments economically viable.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Last Mile Delivery Challenges</h4>
                    <p className="text-gray-700">
                      Difficulty in arranging appropriate final delivery for different types of cargo.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
              <h3 className="text-2xl font-bold">Our LCL to Door Solutions</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost-Effective for Small Shipments</h4>
                    <p className="text-gray-700">
                      Pay only for the space your cargo occupies, sharing container costs with other shippers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">End-to-End Service</h4>
                    <p className="text-gray-700">
                      Single provider handling the entire shipping process from origin to final destination.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Order Quantities</h4>
                    <p className="text-gray-700">
                      Ship smaller quantities more frequently, optimizing your inventory management.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tailored Last Mile Options</h4>
                    <p className="text-gray-700">
                      Choose between express courier or truck LTL delivery based on your specific cargo requirements.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Key Benefits
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Core Advantages of LCL to Door Service</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="h-2 bg-blue-600 group-hover:bg-blue-500 transition-colors"></div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cost-Effective for Small Shipments</h3>
              <p className="text-gray-600">
                More economical than FCL for small batches of goods, as you only pay for the space and weight your cargo
                occupies.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="h-2 bg-blue-600 group-hover:bg-blue-500 transition-colors"></div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexibility</h3>
              <p className="text-gray-600">
                No need to wait until you have enough cargo to fill an entire container before shipping.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="h-2 bg-blue-600 group-hover:bg-blue-500 transition-colors"></div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Convenience</h3>
              <p className="text-gray-600">
                "To Door" service provides customers with a one-stop solution from shipping to receipt, reducing
                operational steps.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="h-2 bg-blue-600 group-hover:bg-blue-500 transition-colors"></div>
            <div className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <BarChart4 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reduced Inventory Pressure</h3>
              <p className="text-gray-600">
                Allows businesses to purchase or sell in smaller quantities and multiple batches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Flow */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">LCL to Door Service Process</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        {/* Hero Image Section */}
        <div className="mb-12">
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image src="/lcl-process-flow.png" alt="LCL to Door Service Process" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                Seamless End-to-End Logistics Solution
              </h3>
              <p className="text-white/90 text-lg">
                From collection in China to delivery at your door in North America
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-800 mb-1">Collection & Consolidation</h3>
                  <p className="text-blue-600 text-sm font-medium">Cargo Collection & Assembly</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Multiple shipments are collected from different shippers and consolidated at our warehouse.
              </p>
              <div className="flex items-center space-x-4 text-sm text-blue-600">
                <div className="flex items-center">
                  <Package className="h-4 w-4 mr-1" />
                  <span>Collection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Quality Check</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-800 mb-1">Ocean Transport</h3>
                  <p className="text-blue-600 text-sm font-medium">Sea Freight Shipping</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Consolidated cargo is loaded into containers and shipped via ocean freight to the destination port.
              </p>
              <div className="flex items-center space-x-4 text-sm text-blue-600">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l10 5.5-10 5.5L2 7.5 12 2z" />
                  </svg>
                  <span>Sea Freight</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span>Tracking</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-700 to-blue-800"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-800 mb-1">Deconsolidation & Delivery</h3>
                  <p className="text-blue-600 text-sm font-medium">Container Unpacking & Distribution</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cargo is deconsolidated at destination and delivered to each consignee's door via appropriate transport.
              </p>
              <div className="flex items-center space-x-4 text-sm text-blue-600">
                <div className="flex items-center">
                  <Truck className="h-4 w-4 mr-1" />
                  <span>Last Mile</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Last Mile Delivery */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Delivery Options
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Last Mile Delivery Options</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="flex items-center">
                <Package className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-semibold">Express Courier Delivery</h3>
              </div>
              <p className="mt-2 text-blue-100">
                Delivery through Fedex/UPS express courier services for smaller packages.
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-4 text-blue-800">Ideal for cargo that:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Is in standard boxes with individual weight not exceeding 22KG</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Has longest side not exceeding 120CM, second longest side not exceeding 76CM
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Has girth (width+height)*2+length not exceeding 266CM</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Has individual weight less than 10KG</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Is well-packaged and not easily damaged</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Delivery address is remote where truck delivery is not available or costly
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6">
              <div className="flex items-center">
                <Truck className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-semibold">Truck LTL Delivery</h3>
              </div>
              <p className="mt-2 text-blue-100">
                Delivery through truck less-than-truckload services for larger or special cargo.
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-4 text-blue-800">Ideal for cargo that:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Is overweight or oversized (individual weight exceeding 22KG)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Has longest side exceeding 120CM or second longest side exceeding 76CM
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Has girth (width+height)*2+length exceeding 266CM</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Is very light (less than 10KG) where courier services would charge minimum 10KG
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Requires high delivery standards with minimal compression, damage, or loss
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Is high-value or requires pallet/wooden crate packaging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Is bulk cargo (generally over 500KG) where truck delivery offers better pricing
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Delivery Showcase */}
        <div className="mt-12">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-64 md:h-80 lg:h-96">
              <Image 
                src="/last-mile-delivery.png" 
                alt="Last Mile Delivery - Door to Door Service" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-transparent to-orange-900/40"></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl px-6">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <Truck className="h-5 w-5 mr-2" />
                    <span className="font-medium">Professional Last Mile Delivery</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                    From Port to Your Doorstep
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    Reliable final delivery service ensuring your cargo reaches its destination safely and on time
                  </p>
                </div>
              </div>

              {/* Bottom Info Cards */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center text-white mb-2">
                      <Package className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Express Courier</span>
                    </div>
                    <p className="text-white/80 text-sm">FedEx/UPS for packages ≤22KG</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center text-white mb-2">
                      <Truck className="h-5 w-5 mr-2" />
                      <span className="font-semibold">LTL Freight</span>
                    </div>
                    <p className="text-white/80 text-sm">Truck delivery for larger cargo</p>
                  </div>
                </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose SinoPrime Shipping</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Fast Consolidation Cycle</h3>
                    <p className="text-gray-600">
                      Consolidation and shipping completed within 3-7 days, ensuring your cargo moves quickly
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Multiple Collection Points</h3>
                    <p className="text-gray-600">
                      Cargo collection and export available in Yiwu, Shenzhen, and Shanghai, China
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 p-8 bg-gray-50">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Simple & Efficient Process</h3>
                    <p className="text-gray-600">
                      Streamlined business process with efficient connections and no hidden charges
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-1 mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Transparent Pricing</h3>
                    <p className="text-gray-600">Clear, upfront pricing with no hidden fees or surprise charges</p>
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

      {/* Summary */}
      <section className="mb-20">
        <div className="flex flex-col items-center mb-8">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
            Overview
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Summary</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-lg leading-relaxed">
            The "LCL to Door" service provides an economical and convenient logistics option for small-volume
            international trade. It reduces transportation costs for individual shipments by sharing container resources
            and simplifies customer operations through end-to-end coordination by freight forwarders. However, customers
            should also be aware of its characteristics such as longer transportation times and multiple cargo handling
            steps, and make appropriate preparations (such as enhanced packaging and insurance). Choosing an experienced
            freight forwarder with a comprehensive network is key to ensuring smooth LCL to Door service.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
          <div className="relative z-10 py-16 px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Ship Your Cargo?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact our team today to get a customized LCL to Door shipping solution for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
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
