"use client"

import Image from "next/image"
import Link from "next/link"
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  ShareIcon,
  ArrowLeftIcon,
  TruckIcon,
  ShieldIcon,
  ClockIcon as ClockCountdownIcon,
  DollarSignIcon,
  BarChart3Icon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronUpIcon,
  BookOpenIcon,
  PrinterIcon,
  DownloadIcon,
  MailIcon,
} from "lucide-react"

export default function FCLvsLCLRailFreightPage() {
  // Blog post data
  const post = {
    title: "FCL vs LCL Rail Freight: Choosing the Right Option for China-North America Shipping",
    date: "May 18, 2023",
    author: "Michael Chen",
    authorRole: "Logistics Specialist",
    readTime: "10 min",
    image: "/fcl-vs-lcl-rail-freight.png",
    tags: ["Rail Freight", "FCL", "LCL", "China-North America", "Supply Chain"],
    relatedPosts: [
      {
        slug: "china-to-north-america-shipping-guide",
        title: "Complete Guide to China-North America Shipping: Latest Trends for 2023",
      },
      { slug: "customs-clearance-guide", title: "US Customs Clearance Guide: Key Steps to Avoid Delays" },
      { slug: "rail-freight-advantages", title: "The Rising Advantages of Rail Freight in International Logistics" },
    ],
  }

  return (
    <div className="bg-white">
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 opacity-90 hover:opacity-100"
        aria-label="Back to top"
      >
        <ChevronUpIcon className="w-5 h-5" />
      </button>

      {/* Return button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Article title and meta information */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-800 bg-opacity-50 px-3 py-1 rounded-full text-sm text-blue-100 mb-4">
              <TruckIcon className="w-4 h-4 mr-2" />
              Logistics Insights
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center text-sm md:text-base text-blue-100 mb-6">
              <div className="flex items-center mr-6 mb-2">
                <CalendarIcon className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <ClockIcon className="w-4 h-4 mr-2" />
                <span>{post.readTime} read</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mr-3 border-2 border-white">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-lg">{post.author}</div>
                <div className="text-sm text-blue-200">{post.authorRole}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured image */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Table of contents - Desktop */}
      <div className="hidden lg:block sticky top-6 float-right w-64 ml-8 bg-gray-50 rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-800 text-white p-4">
          <div className="flex items-center">
            <BookOpenIcon className="w-5 h-5 mr-2" />
            <h3 className="font-medium">Table of Contents</h3>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#introduction" className="text-blue-800 hover:text-blue-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                Introduction
              </a>
            </li>
            <li>
              <a href="#fcl-rail-freight" className="text-blue-800 hover:text-blue-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                FCL Rail Freight
              </a>
            </li>
            <li>
              <a href="#lcl-rail-freight" className="text-blue-800 hover:text-blue-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                LCL Rail Freight
              </a>
            </li>
            <li>
              <a href="#cost-comparison" className="text-blue-800 hover:text-blue-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                Cost Comparison
              </a>
            </li>
            <li>
              <a href="#transit-times" className="text-blue-800 hover:text-blue-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                Transit Times
              </a>
            </li>
            <li>
              <a href="#making-the-choice" className="text-blue-800 hover:text-blue-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                Making the Right Choice
              </a>
            </li>
            <li>
              <a href="#conclusion" className="text-blue-800 hover:text-blue-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                Conclusion
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <button className="flex items-center justify-center p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors w-full text-sm">
              <PrinterIcon className="w-4 h-4 mr-1" />
              Print
            </button>
            <button className="flex items-center justify-center p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors w-full text-sm">
              <DownloadIcon className="w-4 h-4 mr-1" />
              PDF
            </button>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Table of contents - Mobile */}
          <div className="lg:hidden mb-8 bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 text-white p-4">
              <div className="flex items-center">
                <BookOpenIcon className="w-5 h-5 mr-2" />
                <h3 className="font-medium">Quick Navigation</h3>
              </div>
            </div>
            <nav className="p-4">
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li>
                  <a href="#introduction" className="text-blue-800 hover:text-blue-600">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#fcl-rail-freight" className="text-blue-800 hover:text-blue-600">
                    FCL Rail Freight
                  </a>
                </li>
                <li>
                  <a href="#lcl-rail-freight" className="text-blue-800 hover:text-blue-600">
                    LCL Rail Freight
                  </a>
                </li>
                <li>
                  <a href="#cost-comparison" className="text-blue-800 hover:text-blue-600">
                    Cost Comparison
                  </a>
                </li>
                <li>
                  <a href="#transit-times" className="text-blue-800 hover:text-blue-600">
                    Transit Times
                  </a>
                </li>
                <li>
                  <a href="#making-the-choice" className="text-blue-800 hover:text-blue-600">
                    Making the Right Choice
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-2xl h-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-gray-500">EXPERT ANALYSIS</span>
                </div>
              </div>
            </div>

            <h2 id="introduction" className="flex items-center text-blue-900 scroll-mt-20">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-md mr-3">
                <TruckIcon className="w-6 h-6" />
              </span>
              Introduction to Rail Freight Between China and North America
            </h2>
            <p className="lead text-xl text-gray-700">
              Rail freight has emerged as a viable alternative to ocean and air shipping for goods moving between China
              and North America. With the development of the China-Europe Railway Express and connections to North
              American rail networks, businesses now have more options for transporting their goods across continents.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="text-blue-900 font-medium">
                When considering rail freight, one of the most important decisions is choosing between Full Container
                Load (FCL) and Less than Container Load (LCL) shipping. This choice can significantly impact your
                shipping costs, transit times, and overall logistics strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-700 rounded-lg shadow-md p-6 border border-blue-600 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-2 rounded-full mr-3 group-hover:rotate-12 transition-transform duration-300">
                    <TruckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                    FCL Rail Freight
                  </h3>
                </div>
                <p className="text-white">Full Container Load: Your goods are the only items in the container.</p>
              </div>
              <div className="bg-blue-700 rounded-lg shadow-md p-6 border border-blue-600 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-2 rounded-full mr-3 group-hover:rotate-12 transition-transform duration-300">
                    <BarChart3Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                    LCL Rail Freight
                  </h3>
                </div>
                <p className="text-white">
                  Less than Container Load: Your goods share container space with other shipments.
                </p>
              </div>
            </div>

            <h2 id="fcl-rail-freight" className="flex items-center text-blue-900 scroll-mt-20">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-md mr-3">
                <TruckIcon className="w-6 h-6" />
              </span>
              Understanding FCL Rail Freight
            </h2>
            <p>
              Full Container Load (FCL) rail freight involves shipping goods in a dedicated container that is
              exclusively used for your cargo. This option is ideal for larger shipments that can fill an entire
              container.
            </p>

            <div className="relative my-8">
              <Image
                src="/fcl-container-loading.png"
                alt="FCL Container Loading Process"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <p className="text-white text-sm">FCL containers being loaded onto a freight train</p>
              </div>
            </div>

            <h3 className="text-blue-800 flex items-center">
              <ShieldIcon className="w-5 h-5 mr-2 text-green-600" />
              Advantages of FCL Rail Freight:
            </h3>
            <div className="bg-green-50 rounded-lg p-6 my-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Enhanced Security:</strong>
                    <p className="text-gray-700">
                      Your goods are the only items in the container, reducing the risk of damage or contamination from
                      other shipments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Faster Transit:</strong>
                    <p className="text-gray-700">
                      FCL shipments typically experience fewer delays as they don't require consolidation or
                      deconsolidation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Cost-Effective for Large Volumes:</strong>
                    <p className="text-gray-700">
                      For shipments that can fill at least 75% of a container, FCL is often more economical on a
                      per-unit basis.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Simplified Tracking:</strong>
                    <p className="text-gray-700">
                      Monitoring a single container is more straightforward than tracking individual pallets within a
                      shared container.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-blue-800 flex items-center">
              <XCircleIcon className="w-5 h-5 mr-2 text-red-600" />
              Disadvantages of FCL Rail Freight:
            </h3>
            <div className="bg-red-50 rounded-lg p-6 my-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-red-800">Higher Minimum Cost:</strong>
                    <p className="text-gray-700">
                      The minimum cost for FCL is higher, making it less suitable for smaller shipments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-red-800">Potential for Unused Space:</strong>
                    <p className="text-gray-700">
                      If your goods don't fill the container, you're essentially paying for unused space.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 id="lcl-rail-freight" className="flex items-center text-blue-900 scroll-mt-20">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-md mr-3">
                <BarChart3Icon className="w-6 h-6" />
              </span>
              Understanding LCL Rail Freight
            </h2>
            <p>
              Less than Container Load (LCL) rail freight involves sharing container space with other shippers. Your
              goods are consolidated with other shipments heading to the same destination, making it a more economical
              option for smaller cargo volumes.
            </p>

            <div className="relative my-8">
              <Image
                src="/lcl-consolidation.png"
                alt="LCL Consolidation Process"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <p className="text-white text-sm">LCL cargo being consolidated in a warehouse before loading</p>
              </div>
            </div>

            <h3 className="text-blue-800 flex items-center">
              <ShieldIcon className="w-5 h-5 mr-2 text-green-600" />
              Advantages of LCL Rail Freight:
            </h3>
            <div className="bg-green-50 rounded-lg p-6 my-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Lower Minimum Costs:</strong>
                    <p className="text-gray-700">
                      You only pay for the space your goods occupy, making it more affordable for smaller shipments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Flexibility:</strong>
                    <p className="text-gray-700">
                      LCL allows for more frequent shipping without waiting to accumulate enough goods to fill a
                      container.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-green-800">Ideal for Testing New Markets:</strong>
                    <p className="text-gray-700">
                      When entering new markets, LCL allows you to ship smaller quantities to test demand.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-blue-800 flex items-center">
              <XCircleIcon className="w-5 h-5 mr-2 text-red-600" />
              Disadvantages of LCL Rail Freight:
            </h3>
            <div className="bg-red-50 rounded-lg p-6 my-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-red-800">Longer Transit Times:</strong>
                    <p className="text-gray-700">
                      LCL shipments require additional handling for consolidation and deconsolidation, adding to transit
                      time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-red-800">Higher Risk of Damage:</strong>
                    <p className="text-gray-700">More handling increases the risk of damage to your goods.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-red-800">Higher Cost per Unit:</strong>
                    <p className="text-gray-700">
                      While the minimum cost is lower, the cost per unit volume is typically higher than FCL.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-red-800">More Complex Documentation:</strong>
                    <p className="text-gray-700">
                      Sharing container space means more complex paperwork and potential for delays.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 id="cost-comparison" className="flex items-center text-blue-900 scroll-mt-20">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-md mr-3">
                <DollarSignIcon className="w-6 h-6" />
              </span>
              Comparing Costs: FCL vs LCL Rail Freight
            </h2>
            <p>When comparing costs between FCL and LCL rail freight, several factors come into play:</p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-blue-800 text-white">
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-white">
                      Factor
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-white">FCL</th>
                    <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-white">LCL</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Base Rate</td>
                    <td className="px-6 py-4 whitespace-nowrap">Higher minimum cost</td>
                    <td className="px-6 py-4 whitespace-nowrap">Lower minimum cost</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Cost per CBM</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">Lower for large volumes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-red-600 font-medium">Higher</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Handling Fees</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">Lower (less handling)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-red-600 font-medium">Higher (more handling)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">Insurance</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">Potentially lower rates</td>
                    <td className="px-6 py-4 whitespace-nowrap text-red-600 font-medium">Potentially higher rates</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-yellow-800">
                <strong>Rule of Thumb:</strong> If your shipment exceeds 15 cubic meters (CBM) or weighs more than 10
                tons, FCL rail freight is likely more economical. For smaller shipments, LCL typically offers better
                value.
              </p>
            </div>

            <h2 id="transit-times" className="flex items-center text-blue-900 scroll-mt-20">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-md mr-3">
                <ClockCountdownIcon className="w-6 h-6" />
              </span>
              Transit Times: FCL vs LCL Rail Freight
            </h2>
            <p>
              Transit times for rail freight between China and North America vary based on several factors, including
              origin and destination points, border crossings, and whether you're shipping FCL or LCL.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="font-bold flex items-center">
                    <TruckIcon className="w-5 h-5 mr-2" />
                    FCL Rail Freight
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-center">
                      <span className="block text-4xl font-bold text-blue-800">18-24</span>
                      <span className="text-gray-600">days</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-center">
                    From major Chinese cities to major North American destinations
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="font-bold flex items-center">
                    <BarChart3Icon className="w-5 h-5 mr-2" />
                    LCL Rail Freight
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-center">
                      <span className="block text-4xl font-bold text-blue-800">21-31</span>
                      <span className="text-gray-600">days</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-center">
                    Adds 3-7 days to FCL transit times due to additional handling
                  </p>
                </div>
              </div>
            </div>

            <h2 id="making-the-choice" className="flex items-center text-blue-900 scroll-mt-20">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-md mr-3">
                <CheckCircleIcon className="w-6 h-6" />
              </span>
              Making the Right Choice for Your Business
            </h2>
            <p>
              When deciding between FCL and LCL rail freight for your China-North America shipping needs, consider these
              key factors:
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <TruckIcon className="w-5 h-5 mr-2 text-blue-700" />
                  Choose FCL Rail Freight If:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Your shipment volume exceeds 15 CBM or 10 tons</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>You're shipping high-value goods that require enhanced security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Minimizing transit time is a priority</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>You have regular, large-volume shipments</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <BarChart3Icon className="w-5 h-5 mr-2 text-blue-700" />
                  Choose LCL Rail Freight If:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Your shipment volume is less than 15 CBM or 10 tons</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>You're shipping less frequently or testing new markets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Budget constraints are a primary concern</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>You need flexibility in shipping schedules</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 id="conclusion" className="flex items-center text-blue-900 scroll-mt-20">
              <span className="bg-blue-100 text-blue-800 p-1 rounded-md mr-3">
                <CheckCircleIcon className="w-6 h-6" />
              </span>
              Conclusion
            </h2>
            <p>
              Both FCL and LCL rail freight options offer viable alternatives to traditional ocean and air shipping
              between China and North America. The right choice depends on your specific business needs, shipment
              volume, budget constraints, and time sensitivity.
            </p>

            <div className="bg-blue-800 text-white rounded-lg p-8 my-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-white">Expert Logistics Solutions from Sino Prime Shipping</h3>
              <p className="mb-6">
                At Sino Prime Shipping, we offer comprehensive FCL and LCL rail freight solutions tailored to your
                unique requirements. Our logistics experts can help you analyze your shipping needs and recommend the
                most cost-effective and efficient option for your China-North America logistics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-blue-100 transition-colors inline-flex items-center justify-center"
                >
                  <MailIcon className="w-5 h-5 mr-2" />
                  Contact Our Experts
                </a>
                <a
                  href="/quote"
                  className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  <DollarSignIcon className="w-5 h-5 mr-2" />
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap items-center">
              <TagIcon className="w-5 h-5 text-gray-500 mr-2" />
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm mr-2 mb-2 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share buttons */}
          <div className="mt-6 flex items-center">
            <span className="mr-4 text-gray-600 flex items-center">
              <ShareIcon className="w-5 h-5 mr-2" />
              Share this article:
            </span>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="sr-only">Share on Facebook</span>F
              </button>
              <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <span className="sr-only">Share on Twitter</span>T
              </button>
              <button className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                <span className="sr-only">Share on LinkedIn</span>L
              </button>
              <button className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <span className="sr-only">Share on WhatsApp</span>W
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related articles */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-blue-900">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost, index) => (
                <Link
                  key={index}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="h-3 bg-blue-600"></div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-blue-900 group-hover:text-blue-700 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-blue-600 group-hover:translate-x-1 transition-transform">Read more →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter signup */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated on Logistics Trends</h2>
            <p className="mb-6 text-blue-100">
              Subscribe to our newsletter for the latest insights on China-North America shipping
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-l-md flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
