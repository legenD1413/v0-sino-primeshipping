import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Clock, BarChart, Globe, Scale, CheckCircle, TruckIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works | Sino Prime Shipping",
  description: "Learn how our shipping and logistics services work to deliver your goods efficiently and reliably.",
}

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 mix-blend-multiply z-10"></div>
          <Image src="/logistics-hero-bg.jpg" alt="Logistics operations" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[url('/data-viz-overlay.png')] bg-cover opacity-30"></div>
        </div>
        <div className="relative z-20 py-24 px-6 md:px-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How SPS Works</h1>
            <p className="text-xl md:text-2xl font-light">
              Our goal is to make global logistics a stress-free process for you. Talk to our helpful shipping advisors
              today to find out how you can optimize for time and cost, and start shipping .
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Sign Up Free
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Easy Shipping Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <TruckIcon className="h-8 w-8 text-primary" />
            Easy Shipping Starts from Today
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Our streamlined process makes shipping from China to global destinations simple, efficient, and hassle-free
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Step 1 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Request a Quote</h3>
                <p className="text-muted-foreground">
                  Fill out our simple quote form with your shipment details. Our team will analyze your needs and
                  prepare a competitive quote tailored to your specific requirements.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Book Your Shipment</h3>
                <p className="text-muted-foreground">
                  Once you approve the quote, we'll guide you through the booking process, help with documentation, and
                  prepare your shipment for transport.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Track Your Shipment</h3>
                <p className="text-muted-foreground">
                  Monitor your shipment's progress in real-time through our advanced tracking system. Get updates at
                  every key milestone of the shipping process.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Delivery & Confirmation</h3>
                <p className="text-muted-foreground">
                  We coordinate the final delivery to ensure your shipment arrives safely and on time. Our team handles
                  all customs clearance and documentation requirements.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Expert Support Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <CheckCircle className="h-8 w-8 text-primary" />
            Expert Support at Every Step
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/expert-support-consultation.jpg"
                  alt="Expert shipping advisor providing consultation to client"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-lg mb-6">
                Our experienced shipping advisors are here to guide you through the entire process. From initial
                consultation to final delivery, we provide personalized support to ensure your shipping experience is
                smooth and stress-free.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Personalized shipping solutions tailored to your needs</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    Expert guidance on documentation and customs requirements
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Proactive communication throughout the shipping process</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Quick resolution of any issues that may arise</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <BarChart className="h-8 w-8 text-primary" />
            Why Choose Sino Prime Shipping
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Benefit 1 */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  Fast & Reliable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our optimized shipping routes and partnerships with leading carriers ensure your goods arrive on time,
                  every time.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Scale className="h-4 w-4 text-primary" />
                  </div>
                  Competitive Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our volume discounts and efficient operations allow us to offer some of the most competitive rates in
                  the industry.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  End-to-End Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From pickup to delivery, we handle every aspect of the shipping process so you don't have to worry
                  about a thing.
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Experience the simplicity and reliability of shipping with Sino Prime Shipping. Our expert team is ready to
          help you with your next shipment.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get a Quote
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Talk to Our Team
          </Button>
        </div>
      </div>
    </div>
  )
}
