import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Package, Truck, Clock, Globe, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react"
import { ImageFallbackWrapper } from "@/components/image-fallback-wrapper"

export default function FBAPrepAndShipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <div className="absolute inset-0">
          {/* Replace image with gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700">
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Amazon FBA Prep & Ship Services</h1>
            <p className="text-xl md:text-2xl font-light">
              Professional preparation and shipping services for Amazon FBA sellers, ensuring your products meet all
              Amazon requirements and reach fulfillment centers efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Comprehensive FBA Preparation Services</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our Amazon FBA Prep & Ship service provides a complete solution for Amazon sellers looking to streamline
            their supply chain from China to Amazon fulfillment centers worldwide. We handle every aspect of the
            preparation process to ensure your products meet all of Amazon's strict requirements.
          </p>
          <p className="text-lg text-gray-700">
            With our expertise in Amazon's constantly evolving policies and procedures, we help you avoid costly
            mistakes, delays, and potential account issues while optimizing your inventory management.
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <ImageFallbackWrapper
            src="/fba-prep-hero-new.png"
            fallbackSrc="/placeholder.svg?height=400&width=600&query=amazon+fba+preparation+warehouse"
            alt="Amazon FBA Preparation Services"
            width={600}
            height={400}
            className="object-cover"
            wrapperClassName="h-[400px]"
          />
        </div>
      </div>

      {/* Process Flow */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our FBA Prep & Ship Process</h2>

        <div className="relative">
          {/* Process flow diagram - replaced with CSS-based solution */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Receiving</h3>
              <p className="text-gray-700">
                We receive your inventory from manufacturers or suppliers and verify quantities and condition.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Inspection</h3>
              <p className="text-gray-700">
                Thorough quality control to identify any defects or issues before shipping to Amazon.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Preparation</h3>
              <p className="text-gray-700">
                Complete FBA prep including labeling, bundling, poly bagging, and other Amazon requirements.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 relative z-10">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Shipping</h3>
              <p className="text-gray-700">
                Strategic shipping to Amazon fulfillment centers with tracking and delivery confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Comprehensive FBA Services</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inspection Services */}
          <Card className="border-t-4 border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                Inspection Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Detailed product inspection against your specifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Verification of product quantity, color, size, and functionality
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Identification and removal of damaged or defective items</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Photo documentation of inventory condition</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Labeling Services */}
          <Card className="border-t-4 border-green-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="mr-2 h-5 w-5 text-green-500" />
                Labeling Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">FNSKU labeling for Amazon inventory tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">UPC/EAN barcode application</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Expiration date and batch code labeling</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Custom product and packaging labels</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Packaging Services */}
          <Card className="border-t-4 border-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="mr-2 h-5 w-5 text-purple-500" />
                Packaging Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Poly bagging to protect products from dust and moisture</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Bubble wrapping for fragile items</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Bundle creation for multi-product listings</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Box preparation with proper Amazon shipping labels</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Shipping Services */}
          <Card className="border-t-4 border-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="mr-2 h-5 w-5 text-orange-500" />
                Shipping Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Strategic routing to Amazon fulfillment centers</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Carrier selection optimization for cost and speed</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Shipment creation in Amazon Seller Central</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Real-time tracking and delivery confirmation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our FBA Prep & Ship Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <ShieldCheck className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Amazon Compliance Expertise</h3>
            <p className="text-gray-700">
              Our team stays up-to-date with all Amazon FBA requirements and policy changes to ensure your products
              always meet compliance standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Clock className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Turnaround Times</h3>
            <p className="text-gray-700">
              Efficient processing ensures your products move quickly from receipt to Amazon fulfillment centers,
              minimizing storage costs and maximizing selling time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Globe className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global FBA Experience</h3>
            <p className="text-gray-700">
              We support shipments to Amazon fulfillment centers across North America, Europe, and other global
              marketplaces where Amazon operates.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to streamline your Amazon FBA operations?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Contact our team today to discuss how our FBA Prep & Ship services can help your Amazon business grow.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-medium text-blue-700 shadow transition-colors hover:bg-gray-100"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
