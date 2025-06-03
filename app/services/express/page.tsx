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
  Clock,
  MapPin,
  Search,
  AlertTriangle,
  DollarSign,
  Users,
  Plane,
  Ship,
  Calculator,
  Target,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageFallbackWrapper } from "@/components/image-fallback-wrapper"
import Head from "next/head"

export default function ExpressPage() {
  return (
    <>
      <Head>
        <title>International Express Service | Fast Global Delivery | SPS Logistics</title>
        <meta
          name="description"
          content="Professional International Express Service for fast and reliable delivery of parcels, documents, and goods worldwide. Door-to-door service with end-to-end tracking and customs clearance support."
        />
        <meta
          name="keywords"
          content="International Express Service, Global Delivery, DHL Express, UPS, FedEx, Express Shipping, Door-to-door Delivery, Customs Clearance, TikTok Shop Shipping, Cross-border Express"
        />
      </Head>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16">
          <div className="absolute inset-0">
            {/* Background Image */}
            <ImageFallbackWrapper
              src="/data-viz-overlay.png"
              fallbackSrc="/placeholder.svg?height=600&width=1200&query=international+express+delivery+global"
              alt="International Express Service Background"
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
                International Express Service
              </h1>
              <p className="text-xl md:text-2xl font-light">
                Fast and reliable global logistics solution for delivery of parcels, documents, and goods worldwide. 
                Integrating air, land, and sea transport with efficient customs clearance and delivery networks.
              </p>
            </div>
          </div>
        </div>

        {/* Service Introduction Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">What is International Express Service?</h2>
            <p className="text-lg text-gray-700 mb-6">
              International Express Service is a <strong>global logistics solution for fast and reliable delivery of parcels, 
              documents, and other goods worldwide</strong>. It integrates various transportation modes such as air, land, 
              and sea, along with efficient customs clearance and delivery networks, ensuring goods are quickly and safely 
              transported from one country to another.
            </p>
            <p className="text-lg text-gray-700">
              Our service provides comprehensive solutions for TikTok Shop sellers, independent store owners, and crowdfunding 
              creators who need to deliver products to customers globally with speed and reliability.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <ImageFallbackWrapper
              src="/express-service-hero.jpg"
              fallbackSrc="/data-viz-overlay.png"
              alt="International Express Service"
              width={600}
              height={400}
              className="object-cover"
              wrapperClassName="h-[400px]"
            />
          </div>
        </div>

        {/* Core Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-t-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-500" />
                  High Timeliness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Compared to standard international freight, international express prioritizes speed, typically utilizing 
                  air transport to complete cross-border deliveries within a short timeframe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-green-500" />
                  Door-to-Door Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Provides full logistics services from the sender's pickup address to the recipient's delivery address, 
                  minimizing intermediate steps and ensuring seamless delivery experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="mr-2 h-5 w-5 text-purple-500" />
                  End-to-End Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Every shipment has a unique tracking number, allowing customers to check the real-time status and 
                  location of their goods online throughout the delivery process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-orange-500" />
                  Customs Clearance Agency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Professional international express companies provide or coordinate customs clearance services at the 
                  destination, assisting with declarations, tax payments, and other procedures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5 text-red-500" />
                  High Reliability & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Express companies have strict cargo handling procedures and security measures in place to reduce the 
                  risk of loss or damage during transit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5 text-teal-500" />
                  Wide Application Range
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Suitable for various types of goods, including documents, small parcels, e-commerce products, samples, 
                  and urgent supplies across different industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Main Types of International Express Services</h2>
          <div className="space-y-8">
            {/* Global Express Giants */}
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Globe className="mr-2 h-6 w-6 text-blue-600" />
                  Global Express Giants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700">DHL Express</h4>
                    <p className="text-gray-700 mb-4">Focuses on international express and freight, with extensive global network coverage and reliable service.</p>
                    
                    <h4 className="font-semibold mb-2 text-blue-700">UPS (United Parcel Service)</h4>
                    <p className="text-gray-700">The world's largest package delivery company and a leading provider of supply chain services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-700">FedEx (Federal Express)</h4>
                    <p className="text-gray-700 mb-4">Known globally for its fast air transport network and reliable delivery services.</p>
                    
                    <h4 className="font-semibold mb-2 text-blue-700">TNT Express</h4>
                    <p className="text-gray-700">Strong in intra-European road and global express services (acquired by FedEx).</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Postal Express Services */}
            <Card className="bg-gradient-to-r from-green-50 to-green-100">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Server className="mr-2 h-6 w-6 text-green-600" />
                  Postal Express Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Such as <strong>EMS (Express Mail Service)</strong>, which relies on national postal systems, offering 
                  broad coverage and relatively economical pricing for international express delivery.
                </p>
              </CardContent>
            </Card>

            {/* Special Line Express */}
            <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="mr-2 h-6 w-6 text-purple-600" />
                  Special Line Express
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Direct shipping services developed for specific countries or regions, usually integrating air freight, 
                  customs clearance, and local delivery. These often balance transit time and cost, like China-Europe lines 
                  or US lines, and are often preferred by e-commerce sellers.
                </p>
              </CardContent>
            </Card>

            {/* Freight Forwarder Integrated Services */}
            <Card className="bg-gradient-to-r from-orange-50 to-orange-100">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <RefreshCw className="mr-2 h-6 w-6 text-orange-600" />
                  Freight Forwarder Integrated Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Many freight forwarding companies integrate services from different express carriers to offer more 
                  competitive pricing or customized solutions tailored to specific business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Advantages of International Express Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Users className="mr-2 h-5 w-5 text-blue-600" />
                  Enhanced Customer Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Fast delivery can improve the overall shopping experience, especially in the e-commerce sector, 
                  leading to higher customer retention and positive reviews.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <RefreshCw className="mr-2 h-5 w-5 text-blue-600" />
                  Supply Chain Smoothness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  For urgent samples, parts, or replenishment stock, international express can provide quick response, 
                  preventing production disruptions and maintaining business continuity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-blue-600" />
                  Simplified Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Door-to-door and customs clearance agency services reduce the sender's logistics management burden, 
                  allowing focus on core business activities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5 text-blue-600" />
                  High-Value Goods Assurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  For high-value, time-sensitive goods, express services offer higher assurance with better tracking, 
                  security, and insurance coverage options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Express Advantages Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our International Express Advantages</h2>
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Optimized Channel Selection</h3>
                  <p className="text-lg mb-4">
                    Based on varying factors such as cargo weight, dimensions, product classification (commodity/HS code), 
                    timeliness requirements, and destination address, we meticulously select and optimize the most 
                    cost-effective and efficient international express channel.
                  </p>
                  <p className="text-lg">
                    We work with leading carriers like <strong>DHL, UPS, and FedEx</strong>, ensuring your goods reach 
                    their destination with maximum efficiency and economy.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/20 rounded-lg p-4">
                    <Plane className="h-8 w-8 mx-auto mb-2" />
                    <span className="font-semibold">Air Transport</span>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <Truck className="h-8 w-8 mx-auto mb-2" />
                    <span className="font-semibold">Ground Delivery</span>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <Globe className="h-8 w-8 mx-auto mb-2" />
                    <span className="font-semibold">Global Network</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Considerations Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Important Considerations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <DollarSign className="mr-2 h-5 w-5 text-yellow-600" />
                  Cost Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  International express typically costs more than sea or rail freight and is suitable for goods requiring 
                  high timeliness. Consider the value-to-weight ratio of your products.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />
                  Prohibited & Restricted Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Each country has strict regulations regarding items in international express shipments. It's crucial 
                  to be aware of these restrictions to avoid delays or confiscation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <FileText className="mr-2 h-5 w-5 text-blue-600" />
                  Customs Duties & Taxes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Importing countries may impose duties, VAT, and other fees, usually payable by the recipient, or 
                  optionally by the sender (DDP - Delivered Duty Paid).
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Package className="mr-2 h-5 w-5 text-green-600" />
                  Packaging Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Proper packaging is crucial for ensuring cargo safety during transit. Follow carrier-specific 
                  packaging guidelines to prevent damage and ensure successful delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Calculator className="mr-2 h-5 w-5 text-purple-600" />
                  Volumetric Weight
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  International express usually charges based on the greater of the actual weight or the volumetric 
                  weight (dimensional weight), which affects shipping costs significantly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Search className="mr-2 h-5 w-5 text-teal-600" />
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Accurate and complete shipping documentation is essential for customs clearance and delivery. 
                  Ensure all commercial invoices and declarations are properly completed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Target Customers Section */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Perfect for E-commerce Success</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            For <strong>TikTok Shop sellers, independent store owners, and crowdfunding creators</strong>, international express 
            is a critical component for ensuring customers receive their goods quickly, enhancing user satisfaction, and 
            maintaining market competitiveness.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader className="text-center">
                <Store className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <CardTitle>TikTok Shop Sellers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Fast delivery for trending products to capitalize on viral moments and maintain customer engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle>Independent Store Owners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Reliable shipping solutions to compete with larger e-commerce platforms and build customer loyalty.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle>Crowdfunding Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Timely delivery of backed products to maintain trust and fulfill campaign promises to supporters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-blue-600 text-white rounded-xl py-12 px-8">
          <h2 className="text-3xl font-bold mb-4">Choose the Right Express Partner</h2>
          <p className="text-xl mb-8">
            Choosing the right international express service provider means your global business can operate more 
            efficiently and smoothly. Let us help you optimize your shipping strategy.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Express Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  )
}
