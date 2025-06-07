"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { CheckCircle, ArrowRight, Mail, Phone, Calendar, FileText } from "lucide-react"

export default function ThankYouQuotePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/express-service-hero.png" alt="Success Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/85" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-500 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-blue-400 animate-pulse"
            style={{ animationDelay: "1.2s" }}
          />
          <div
            className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-blue-500 animate-pulse"
            style={{ animationDelay: "0.7s" }}
          />
          <div
            className="absolute top-1/2 left-3/4 w-2 h-2 rounded-full bg-blue-400 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-3/4 left-2/3 w-3 h-3 rounded-full bg-blue-500 animate-pulse"
            style={{ animationDelay: "0.9s" }}
          />
        </div>

        {/* Success Content */}
        <div
          className={`container-custom relative z-10 text-white text-center max-w-4xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="bg-blue-500 rounded-full p-6 shadow-2xl shadow-blue-500/30">
                <CheckCircle className="h-16 w-16 text-white animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
                ✓
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Quote Request Submitted Successfully!
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
            Thank You for Choosing SinoPrime Shipping
          </h2>

          <p className="text-lg md:text-xl text-blue-400 font-medium mb-8 border-b border-t border-blue-500/30 py-4 inline-block">
            Your personalized logistics solution is on the way
          </p>

          <div
            className={`max-w-3xl mx-auto text-gray-200 mb-12 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl mb-6">
              We've received your quote request and our logistics experts are already reviewing your requirements. 
              You'll receive a comprehensive, tailored proposal soon.
            </p>
          </div>

          {/* Return to Get Quote Button */}
          <div
            className={`flex justify-center mb-8 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href="/get-quote"
              className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-md transition-all duration-300 flex items-center border border-white/20 hover:border-white/40 hover:-translate-y-1"
            >
              <ArrowRight className="h-5 w-5 mr-2 rotate-180 opacity-70 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300" />
              <span>Back to Get Quote</span>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500/20 rounded-full animate-ping opacity-20" />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 border border-blue-500/20 rounded-full animate-ping opacity-10"
          style={{ animationDuration: "3s" }}
        />
      </section>

      {/* Next Steps Section */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 relative inline-block">
              What Happens Next?
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Here's what you can expect in the coming days as we prepare your personalized quote
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />
              
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">Requirements Analysis</h3>
              </div>
              
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-blue-600 font-semibold">Within 24 hours</span>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Our logistics experts will carefully analyze your business requirements, 
                shipping volumes, and destination preferences to understand your unique needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />
              
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">Custom Quote Preparation</h3>
              </div>
              
              <div className="flex items-center mb-4">
                <FileText className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-blue-600 font-semibold">Within 2-3 business days</span>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We'll prepare a detailed, customized quote with multiple shipping options, 
                pricing tiers, and service recommendations tailored to your business.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />
              
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">Personal Consultation</h3>
              </div>
              
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-blue-600 font-semibold">Within 1 week</span>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Schedule a one-on-one consultation with our senior logistics consultant 
                to discuss your quote, answer questions, and finalize your shipping strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-12 w-12 text-white mr-4 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Professional Logistics Solutions Await
            </h2>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            You're one step closer to optimizing your supply chain with our expert logistics services. 
            We look forward to partnering with you for your business success.
          </p>
        </div>
      </section>
    </div>
  )
} 