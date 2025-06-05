import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BarChart3, Package, RefreshCcw, Globe, ClipboardCheck, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Returns Management | SinoPrimeShipping",
  description:
    "Professional returns management and reverse logistics services for e-commerce businesses. Streamline your return process and improve customer satisfaction.",
}

export default function ReturnsManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16">
        <div className="absolute inset-0">
          <Image
            src="/returns-management-hero.png"
            alt="Returns Management"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 py-24 px-6 md:px-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Professional Returns Management: Optimize Costs, Enhance Customer Satisfaction, Empower Business Growth
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Say goodbye to returns processing headaches! We provide a one-stop, intelligent reverse logistics solution
              that turns every return into an opportunity to enhance brand value and optimize operations.
            </p>
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <ClipboardCheck className="h-8 w-8 text-primary" />
            We Understand Your Returns Challenges
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <p className="mb-6 text-lg">Are you struggling with these return pain points?</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-lg">Poor Customer Experience</p>
                <p className="text-muted-foreground">
                  Complicated return processes leading to customer dissatisfaction and declining loyalty?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-lg">High Operational Costs</p>
                <p className="text-muted-foreground">
                  Expensive transportation, storage, and labor costs eroding profits, with difficulty recovering value
                  from returned goods?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-lg">Brand Image Damage</p>
                <p className="text-muted-foreground">
                  Unprofessional, untimely returns processing affecting your market reputation and brand credibility?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-lg">Low Internal Efficiency</p>
                <p className="text-muted-foreground">
                  Lack of systematic management in the returns process leading to operational chaos and inaccurate
                  inventory data?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-lg">Lack of Data Insights</p>
                <p className="text-muted-foreground">
                  Valuable returns data not being effectively analyzed and utilized, missing opportunities for product
                  improvement and operational optimization?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-lg">Cross-Border Returns Challenges</p>
                <p className="text-muted-foreground">
                  High international shipping costs, complex customs clearance processes, lengthy processing times, and
                  urgent need to improve overseas customer return experiences?
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="font-semibold text-xl text-primary">We can effectively solve all these challenges for you!</p>
          </div>
        </CardContent>
      </Card>

      {/* Services Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            Our One-Stop Professional Returns Processing Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive, efficient, and transparent returns management solutions covering every step from
            customer application to final disposition, precisely addressing your core needs and maximizing return value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-xl overflow-hidden h-[400px]">
            <Image src="/returns-process-flow-new.png" alt="Returns Process Flow" fill className="object-cover" />
          </div>
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <RefreshCcw className="h-5 w-5 text-primary" />
                Convenient Return Initiation & Authorization (RMA)
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Support for customers to easily initiate returns through multiple channels (online portal, app,
                    etc.)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Intelligent RMA system that quickly reviews and generates authorizations based on your return
                    policy, providing clear return guidelines
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Efficient Product Return & Tracking
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Optimized customer return experience with flexible logistics options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    End-to-end logistics tracking, allowing you and your customers to monitor return status in real-time
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 flex flex-col justify-center order-2 md:order-1">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                Professional Inspection & Value Assessment
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Strict standard unboxing inspection, verifying product condition, accessories, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Precise assessment of product grades (e.g., Grade A - directly resalable, Grade B - needs
                    refurbishment, Grade C - can be dismantled for parts, Grade D - requires recycling/disposal), laying
                    the foundation for subsequent processing
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Refined Receiving & Warehousing Management
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Rapid receipt, preliminary sorting, and systematic registration, ensuring returned goods are
                    properly handled immediately
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden h-[400px] order-1 md:order-2">
            <Image src="/returns-inspection.png" alt="Returns Inspection Process" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Diversified Processing & Value Maximization
          </h3>

          <div className="relative rounded-xl overflow-hidden h-[300px] mb-8">
            <Image src="/returns-value-recovery.png" alt="Returns Value Recovery" fill className="object-cover" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <RefreshCcw className="h-5 w-5 text-primary" />
                  Quick Restocking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Grade A items in good condition are quickly returned to sales channels</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <RefreshCcw className="h-5 w-5 text-primary" />
                  Professional Refurbishment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Give Grade B items new life, enhancing resale value</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Multi-Channel Liquidation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Efficiently handle Grade B/C items through discount channels, secondary markets, etc., quickly
                  activating assets
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-xl overflow-hidden h-[400px]">
            <Image src="/returns-data-analytics.png" alt="Returns Data Analytics" fill className="object-cover" />
          </div>
          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                In-depth Data Insights & Analysis
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Provide detailed return data reports, in-depth analysis of return rates, return reasons, product
                    defects, etc.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Help you optimize product design and quality control, improve marketing descriptions, adjust
                    inventory strategies, and evaluate supplier performance
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <RefreshCcw className="h-5 w-5 text-primary" />
                Flexible Customer Settlement Solutions
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Support for multiple settlement methods including refunds, exchanges, repair and return, store
                    credits/points, enhancing customer satisfaction
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Border Solutions Section */}
      <Card className="mb-16 border-none shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative h-full min-h-[400px]">
            <Image src="/global-returns-network.png" alt="Global Returns Network" fill className="object-cover" />
          </div>
          <div>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
                <Globe className="h-7 w-7 text-primary" />
                Customized Return Solutions for Cross-Border E-commerce
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <p className="mb-6">
                We deeply understand the unique nature and high costs of cross-border e-commerce returns, and specially
                provide:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Global Returns Network</p>
                    <p className="text-muted-foreground">
                      Establish local return addresses or utilize overseas warehouses to receive returns, significantly
                      reducing international transportation costs, shortening processing cycles, and enhancing return
                      convenience for overseas customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Intelligent Customs Clearance Assistance</p>
                    <p className="text-muted-foreground">
                      Simplify complex return entry customs procedures, improving clearance efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Localized Value-Added Services</p>
                    <p className="text-muted-foreground">
                      Complete inspection, grading, refurbishment, secondary sales, or eco-friendly processing at
                      overseas return processing centers, maximizing residual product value.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Multilingual Support</p>
                    <p className="text-muted-foreground">
                      Reduce communication barriers with overseas customers, ensuring a smooth return experience.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>

      {/* Why Choose Us Section */}
      <Card className="mb-16 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
            <TrendingUp className="h-7 w-7 text-primary" />
            Choose Us: Turn Returns from a Burden into a New Engine for Growth
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Focused Expertise</p>
                  <p className="text-muted-foreground">
                    Deeply rooted in returns management, with an experienced expert team and mature operational systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Technology-Driven</p>
                  <p className="text-muted-foreground">
                    Advanced system platforms ensuring efficient processes, transparent data, and intelligent
                    decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Customized Flexibility</p>
                  <p className="text-muted-foreground">
                    Provide tailored solutions based on your business scale, product characteristics, and specific
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-lg">Value-Oriented</p>
                  <p className="text-muted-foreground">
                    Committed to reducing your return costs, improving operational efficiency, enhancing customer
                    experience, and mining data value to help your business succeed continuously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your returns management?</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Contact our team today to discover how SinoPrimeShipping can turn your returns process into a competitive
          advantage.
        </p>
        <Link
          href="/get-quote"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
