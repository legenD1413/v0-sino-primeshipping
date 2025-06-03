import Link from "next/link"
import {
  Check,
  ArrowRight,
  Package,
  Truck,
  Globe,
  BarChart,
  ShieldCheck,
  Store,
  Server,
  Box,
  RefreshCw,
  FileText,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageFallbackWrapper } from "@/components/image-fallback-wrapper"
import Head from "next/head"

export default function DirectToConsumerShippingPage() {
  return (
    <>
      <Head>
        <title>Direct-to-Consumer Shipping China | Cross-border Logistics China to North America</title>
        <meta
          name="description"
          content="Professional Direct-to-Consumer Shipping services from China to USA and Canada. Your trusted China Fulfillment Partner for e-commerce logistics and cross-border shipping."
        />
        <meta
          name="keywords"
          content="Direct-to-Consumer Shipping China, Cross-border Logistics China, E-commerce Logistics China to North America, Shipping from China to USA, Shipping from China to Canada, China Fulfillment Partner"
        />
      </Head>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16">
          <div className="absolute inset-0">
            {/* Background Image */}
            <ImageFallbackWrapper
              src="/data-viz-overlay.png"
              fallbackSrc="/placeholder.svg?height=600&width=1200&query=china+north+america+shipping+logistics"
              alt="Direct-to-Consumer Shipping Background"
              width={1200}
              height={600}
              className="object-cover w-full h-full"
              wrapperClassName="w-full h-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80">
              {/* Add pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
              {/* Add light effect */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white opacity-10 rounded-full blur-3xl"></div>
            </div>
          </div>
          <div className="relative z-10 py-24 px-6 md:px-12 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Direct-to-Consumer Shipping from China to North America
              </h1>
              <p className="text-xl md:text-2xl font-light">
                Your trusted China Fulfillment Partner for shipping products directly from Chinese warehouses to end
                consumers in USA and Canada, empowering independent stores and merchant-fulfilled platform sellers.
              </p>
            </div>
          </div>
        </div>

        {/* Service Definition Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">What is Direct-to-Consumer Shipping from China?</h2>
            <p className="text-lg text-gray-700 mb-6">
              DTC Shipping refers to the process where{" "}
              <strong>
                products are shipped directly from the seller's warehouse in China (or their third-party logistics
                partner/3PL) to the end consumer in North America
              </strong>
              , without passing through traditional retailers, distributors, or centralized platform warehouses (like
              Amazon FBA).
            </p>
            <p className="text-lg text-gray-700">
              As your dedicated Cross-border Logistics China partner, we help sellers market their products directly to
              consumers through their independent websites (built with platforms like Shopify, WooCommerce) or
              third-party marketplaces (such as Amazon Seller Central with Merchant Fulfilled Network/MFN option, eBay,
              Etsy, etc.), handling the picking, packing, and final delivery of orders from China to USA and Canada.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <ImageFallbackWrapper
              src="/b2c-services-image.jpg"
              fallbackSrc="/ecommerce-shipping-warehouse.png"
              alt="Direct-to-Consumer Shipping China to North America"
              width={600}
              height={400}
              className="object-cover"
              wrapperClassName="h-[400px]"
            />
          </div>
        </div>

        {/* Service Target Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Who We Serve with E-commerce Logistics from China</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Store className="mr-2 h-5 w-5 text-blue-500" />
                  Independent Store Owners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Sellers who build their online stores using platforms like Shopify, WooCommerce, BigCommerce, Magento,
                  Wix, Squarespace, or custom-built systems and need reliable Shipping from China to USA and Canada.
                </p>
                <p className="text-gray-700">
                  They have complete control over their brand, customer data, and user experience, thus requiring a
                  trusted China Fulfillment Partner to handle order fulfillment and cross-border logistics.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5 text-green-500" />
                  Platform Sellers - Merchant Fulfilled
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Amazon MFN/FBM (Merchant Fulfilled Network):</strong> Sellers who list products on Amazon
                      but need a reliable partner for E-commerce Logistics China to North America.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>eBay Sellers:</strong> Most eBay sellers seeking efficient Shipping from China to USA for
                      their customers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Etsy Sellers:</strong> Sellers of handcrafted items, vintage goods, etc., who need
                      Cross-border Logistics China services.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Other Platform Sellers:</strong> Such as Wish, Walmart Marketplace (with self-fulfillment
                      options) requiring Direct-to-Consumer Shipping China solutions.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Key Components of Our Direct-to-Consumer Shipping China Services
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-blue-600" />
                  Order Intake & Processing
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Automatic synchronization of order information from the seller's independent site or e-commerce
                      platform via API, plugins, or file import (e.g., CSV).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Order validation and inventory allocation.</span>
                  </li>
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Server className="mr-2 h-5 w-5 text-blue-600" />
                  Warehousing & Inventory Management
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      As your China Fulfillment Partner, we store your products in our strategically located warehouses.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Advanced inventory management system allowing sellers to view inventory levels, inbound, and
                      outbound shipments in real-time.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      SKU management, batch management, expiration date management, etc.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Box className="mr-2 h-5 w-5 text-blue-600" />
                  Picking & Packing
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Accurate picking of products from our China warehouses based on order information.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Standard packaging or brand customized packaging (e.g., boxes or tape printed with logos).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Inclusion of marketing inserts, thank you cards, etc.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Kitting & Bundling services.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Truck className="mr-2 h-5 w-5 text-blue-600" />
                  Carrier Selection & Shipping from China to USA/Canada
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Partnerships with multiple carriers specializing in North American Market Logistics.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Selection of optimal shipping solutions based on package destination, weight, dimensions, time
                      requirements, and cost for both USA and Canada markets.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Generation and printing of shipping labels.</span>
                  </li>
                </ul>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-blue-600" />
                  Cross-border Logistics China & Customs Clearance
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Expert handling of export declarations, international transportation, and Customs Brokerage North
                      America services.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Management of duties and taxes (DDP - Delivered Duty Paid or DDU - Delivered Duty Unpaid).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Key Scenario:</strong> Specialized in E-commerce Logistics China to North America,
                      particularly for Chinese sellers shipping directly to consumers in USA and Canada.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <RefreshCw className="mr-2 h-5 w-5 text-blue-600" />
                  Tracking & Returns Management
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Comprehensive tracking for all Direct-to-Consumer Shipping China packages.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Synchronization of tracking information back to the seller's e-commerce platform, with automatic
                      or assisted notification to end consumers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Complete returns management for Cross-border Logistics China shipments, including receiving,
                      inspection, restocking, or disposal services.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose DTC Shipping Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Our Direct-to-Consumer Shipping China Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Store className="mr-2 h-5 w-5 text-blue-600" />
                  Brand Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  As your China Fulfillment Partner, we help strengthen your brand image through customized packaging
                  and delivery experiences, which is difficult to achieve with platform fulfillment services like FBA.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5 text-blue-600" />
                  Customer Relationship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our Direct-to-Consumer Shipping China service ensures you directly own customer data, enabling more
                  personalized marketing and customer service.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-blue-600" />
                  Flexibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Greater flexibility in choosing warehouse locations, shipping methods, and promotional strategies for
                  your North American Market Logistics needs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <BarChart className="mr-2 h-5 w-5 text-blue-600" />
                  Cost Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  For certain product categories or sales volumes, our E-commerce Logistics China to North America
                  services may be more cost-effective than using platform fulfillment services (such as FBA's high
                  storage and fulfillment fees).
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-blue-600" />
                  Multi-channel Selling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  If you sell across multiple platforms and independent sites, our unified Cross-border Logistics China
                  services simplify inventory and order management.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Package className="mr-2 h-5 w-5 text-blue-600" />
                  Direct Access to North American Consumers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our Shipping from China to USA and Canada services help you bypass intermediaries and establish direct
                  connections with North American consumers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Value Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How We Add Value as Your China Fulfillment Partner</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden">
              <ImageFallbackWrapper
                src="/ecommerce-fulfillment-center.png"
                fallbackSrc="/modern-ecommerce-fulfillment-center.png"
                alt="E-commerce Logistics China to North America"
                width={600}
                height={400}
                className="object-cover"
                wrapperClassName="h-[400px]"
              />
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Simplifying Complex Cross-border Logistics</h3>
                    <p className="text-gray-700">
                      Our expertise in Shipping from China to USA and Canada allows you to focus on products, marketing,
                      and customer service without worrying about logistics details.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Competitive North American Market Logistics Rates</h3>
                    <p className="text-gray-700">
                      We obtain better carrier prices through volume consolidation, reducing your E-commerce Logistics
                      China to North America costs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Improving Delivery Efficiency and Customer Satisfaction</h3>
                    <p className="text-gray-700">
                      Our Direct-to-Consumer Shipping China services ensure quick and accurate delivery, increasing
                      end-consumer satisfaction and enhancing brand loyalty.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Seamless Technology Integration</h3>
                    <p className="text-gray-700">
                      We connect with your sales systems, automating order processing and Cross-border Logistics China
                      workflows.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Expert Customs Brokerage North America</h3>
                    <p className="text-gray-700">
                      Specializing in E-commerce Logistics China to North America, we provide end-to-end cross-border
                      logistics services with professional customs clearance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Optimize Your Direct-to-Consumer Shipping from China?
          </h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Contact our team today to learn how our E-commerce Logistics China to North America solutions can help your
            business grow in the USA and Canadian markets.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-medium text-blue-700 shadow transition-colors hover:bg-gray-100"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  )
}
