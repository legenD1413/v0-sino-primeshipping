import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Ship,
  Package,
  Globe,
  Building2,
  User,
  Clock,
  Shield,
  HeadphonesIcon,
  CheckCircle,
  Truck,
  FileText,
  ChevronRight,
  Star,
  TrendingUp,
  MapPin,
  BarChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Enhanced with gradient overlay and animation */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden bg-gradient-to-r from-[#051630] to-[#0A2240]">
        {/* Background Image with enhanced overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/china-north-america-logistics.png"
            alt="China to North America Logistics"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-blue-900/50"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 flex h-full items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {/* Text Content - Enhanced with better typography and animations */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm animate-fade-in">
                <Star className="h-4 w-4 mr-2 text-yellow-400" />
                <span>Your Trusted China-to-North America Logistics Partner</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white animate-fade-in">
                You focus on your business, we handle the logistics
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-white/90 animate-fade-in-delay">
                Your Dedicated China Logistics Partner for North American B2C & B2B Needs: We simplify the entire China
                sourcing-to-NA delivery chain for everything from e-commerce parcels to commercial freight, ensuring
                efficient & reliable arrival.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 animate-fade-in-delay-2">
                <Button
                  size="lg"
                  className="text-base bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-900/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/40"
                >
                  Get a Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-base text-white hover:bg-white/20 border-white/30 backdrop-blur-sm transition-all duration-300"
                >
                  Consult Logistics Solutions
                </Button>
              </div>
            </div>


          </div>
        </div>

        {/* Bottom separator - Enhanced with gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white"></div>
      </section>

      {/* Stats Banner - New section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Clients Served", icon: User },
              { value: "10,000+", label: "Shipments Completed", icon: Package },
              { value: "99.5%", label: "On-Time Delivery", icon: Clock },
              { value: "25+", label: "Countries Served", icon: Globe },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-blue-50 p-3 w-fit">
                  <stat.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#0A2240]">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Services Overview - B2C and B2B - Enhanced with better cards and hover effects */}
      <section className="section-spacing bg-white py-20">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
              <Package className="h-4 w-4 mr-2" />
              <span>Our Services</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-[#0A2240]">
              Tailored Logistics Solutions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Comprehensive services for both e-commerce sellers and businesses, designed to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* B2C Services */}
            <Card className="overflow-hidden border-0 shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] rounded-xl">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-1">
                <CardHeader className="bg-white pt-8 rounded-t-lg">
                  <div className="mb-4 rounded-full bg-blue-100 p-4 w-fit">
                    <User className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-[#0A2240]">B2C Services</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Specialized solutions for e-commerce sellers
                  </CardDescription>
                </CardHeader>
              </div>
              <CardContent className="pt-6 px-8">
                <ul className="space-y-4">
                  {[
                    { name: "FBA Prep & Ship", description: "Complete Amazon FBA preparation and shipping" },
                    { name: "Small Parcel Express", description: "Fast delivery for e-commerce packages" },
                    { name: "Direct-to-Consumer", description: "End-to-end fulfillment for online stores" },
                    { name: "Returns Management", description: "Efficient handling of customer returns" },
                  ].map((service, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mr-3 rounded-full bg-blue-100 p-1.5 group-hover:bg-blue-200 transition-colors duration-200">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-medium text-[#0A2240]">{service.name}</span>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-8 pb-8">
                <Link
                  href="/services#b2c"
                  className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Explore B2C Solutions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* B2B Services */}
            <Card className="overflow-hidden border-0 shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] rounded-xl">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-1">
                <CardHeader className="bg-white pt-8 rounded-t-lg">
                  <div className="mb-4 rounded-full bg-indigo-100 p-4 w-fit">
                    <Building2 className="h-7 w-7 text-indigo-600" />
                  </div>
                  <CardTitle className="text-2xl text-[#0A2240]">B2B Services</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Commercial freight solutions for businesses
                  </CardDescription>
                </CardHeader>
              </div>
              <CardContent className="pt-6 px-8">
                <ul className="space-y-4">
                  {[
                    { name: "Ocean Freight", description: "Cost-effective shipping for large volumes" },
                    { name: "Air Freight", description: "Fast transport for time-sensitive cargo" },
                    { name: "Rail Freight", description: "Economical China-Europe connections" },
                    { name: "Customs Brokerage", description: "Expert customs clearance services" },
                  ].map((service, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mr-3 rounded-full bg-indigo-100 p-1.5 group-hover:bg-indigo-200 transition-colors duration-200">
                        <CheckCircle className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <span className="font-medium text-[#0A2240]">{service.name}</span>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-8 pb-8">
                <Link
                  href="/services#b2b"
                  className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  Explore B2B Solutions <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 2. Key Advantages / Why Us - Enhanced with better cards and icons */}
      <section className="section-spacing bg-gray-50 py-20">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-green-50 text-green-700 text-sm font-medium">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-[#0A2240]">
              Our Competitive Advantages
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              What sets us apart in China-to-North America logistics and why our clients trust us
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "North America Experts",
                description: "Specialized knowledge of North American markets, regulations, and shipping routes",
                icon: Globe,
                color: "text-blue-600",
                bgColor: "bg-blue-100",
                hoverBgColor: "hover:bg-blue-200",
                borderColor: "border-blue-200",
              },
              {
                title: "Simplified Process",
                description: "We handle all the complexities so you can focus on growing your business",
                icon: Clock,
                color: "text-green-600",
                bgColor: "bg-green-100",
                hoverBgColor: "hover:bg-green-200",
                borderColor: "border-green-200",
              },
              {
                title: "Reliable & Efficient",
                description: "Consistent on-time delivery with optimized routes and carriers",
                icon: Shield,
                color: "text-purple-600",
                bgColor: "bg-purple-100",
                hoverBgColor: "hover:bg-purple-200",
                borderColor: "border-purple-200",
              },
              {
                title: "Dedicated Support",
                description: "Personal account managers who understand your specific needs",
                icon: HeadphonesIcon,
                color: "text-orange-600",
                bgColor: "bg-orange-100",
                hoverBgColor: "hover:bg-orange-200",
                borderColor: "border-orange-200",
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className={`border ${advantage.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group`}
              >
                <CardHeader>
                  <div
                    className={`mb-4 rounded-full ${advantage.bgColor} p-4 w-fit group-${advantage.hoverBgColor} transition-colors duration-200`}
                  >
                    <advantage.icon className={`h-7 w-7 ${advantage.color}`} />
                  </div>
                  <CardTitle className="text-xl text-[#0A2240]">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/about-us">
              <Button
                variant="outline"
                className="gap-2 border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-200"
              >
                Learn More About Our Advantages <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Simplified Process Overview - Enhanced with better visuals and connections */}
      <section className="section-spacing bg-white py-20">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
              <BarChart className="h-4 w-4 mr-2" />
              <span>How It Works</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-[#0A2240]">A Streamlined Process</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">From China to North America in five simple steps</p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  step: 1,
                  title: "Consultation",
                  description: "Discuss your shipping needs and get a tailored solution",
                  icon: HeadphonesIcon,
                  color: "text-blue-600",
                  bgColor: "bg-blue-100",
                },
                {
                  step: 2,
                  title: "China Pickup",
                  description: "We collect your goods from suppliers in China",
                  icon: Package,
                  color: "text-green-600",
                  bgColor: "bg-green-100",
                },
                {
                  step: 3,
                  title: "International Transit",
                  description: "Your cargo travels via the most efficient route",
                  icon: Ship,
                  color: "text-purple-600",
                  bgColor: "bg-purple-100",
                },
                {
                  step: 4,
                  title: "Customs Clearance",
                  description: "We handle all North American customs procedures",
                  icon: FileText,
                  color: "text-orange-600",
                  bgColor: "bg-orange-100",
                },
                {
                  step: 5,
                  title: "Final Delivery",
                  description: "Your products arrive at their final destination",
                  icon: Truck,
                  color: "text-red-600",
                  bgColor: "bg-red-100",
                },
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="relative mb-6 rounded-full bg-[#0A2240] p-5 w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-md">
                      {step.step}
                    </span>
                    <step.icon className="h-9 w-9 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0A2240] group-hover:text-blue-700 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Connecting Line (visible on desktop only) - Enhanced with gradient and animation */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 z-0 rounded-full"></div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/how-it-works">
              <Button className="gap-2 bg-[#0A2240] hover:bg-[#051630] transition-all duration-200 shadow-md hover:shadow-lg">
                See Detailed Process <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Trust Builders - Enhanced with better cards and testimonials */}
      <section className="section-spacing bg-gray-50 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Testimonials */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-yellow-50 text-yellow-700 text-sm font-medium">
                  <Star className="h-4 w-4 mr-2" />
                  <span>Client Testimonials</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0A2240]">What Our Clients Say</h2>
              </div>
              <div className="space-y-8">
                {[
                  {
                    quote:
                      "SinoPrimeShipping has transformed our logistics operations. Their expertise in China-to-US shipping has saved us time and money while improving reliability.",
                    author: "Sarah Johnson",
                    position: "Operations Director, E-commerce Brand",
                    image: "/diverse-person-portrait.png",
                  },
                  {
                    quote:
                      "The team's knowledge of customs procedures is invaluable. They've helped us navigate complex regulations and avoid costly delays.",
                    author: "Michael Chen",
                    position: "Import Manager, Retail Chain",
                    image: "/diverse-business-person.png",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="mb-6 text-blue-600">
                      <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="mb-6 text-lg italic text-gray-700 leading-relaxed">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-[#0A2240]">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Stats */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  <BarChart className="h-4 w-4 mr-2" />
                  <span>Our Impact</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0A2240]">Global Reach</h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  {
                    stat: "500+",
                    label: "Clients Served",
                    icon: User,
                    color: "text-blue-600",
                    bgColor: "bg-blue-100",
                    borderColor: "border-blue-200",
                  },
                  {
                    stat: "10,000+",
                    label: "Shipments Completed",
                    icon: Package,
                    color: "text-green-600",
                    bgColor: "bg-green-100",
                    borderColor: "border-green-200",
                  },
                  {
                    stat: "99.5%",
                    label: "On-Time Delivery",
                    icon: Clock,
                    color: "text-purple-600",
                    bgColor: "bg-purple-100",
                    borderColor: "border-purple-200",
                  },
                  {
                    stat: "25+",
                    label: "Countries Served",
                    icon: Globe,
                    color: "text-orange-600",
                    bgColor: "bg-orange-100",
                    borderColor: "border-orange-200",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${item.borderColor} group hover:translate-y-[-5px]`}
                  >
                    <div
                      className={`mx-auto mb-6 rounded-full ${item.bgColor} p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                    >
                      <item.icon className={`h-8 w-8 ${item.color}`} />
                    </div>
                    <div className={`text-3xl font-bold mb-2 ${item.color} text-center`}>{item.stat}</div>
                    <div className="text-sm text-gray-600 text-center">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Global Presence Map - New addition */}
              <div className="mt-8 rounded-xl bg-white p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-red-500 mr-2" />
                  <h3 className="text-lg font-semibold text-[#0A2240]">Our Global Presence</h3>
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image src="/global-shipping-routes.png" alt="Global Shipping Routes" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Link href="/global-network">
                      <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm">
                        View Our Network <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Resources/Blog Posts - Enhanced with better cards and hover effects */}
      <section className="section-spacing bg-white py-20 hidden">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-1 mb-4 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">
              <FileText className="h-4 w-4 mr-2" />
              <span>Resources</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-[#0A2240]">Logistics Insights</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Latest guides and resources to help optimize your supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Guide to Amazon FBA Shipping from China",
                excerpt:
                  "Learn the best practices for preparing and shipping your inventory to Amazon FBA warehouses from China.",
                image: "/fba-prep-hero-new.png",
                date: "May 15, 2023",
                category: "E-commerce",
                link: "/blog/amazon-fba-shipping-guide",
              },
              {
                title: "Understanding Incoterms for China-US Shipping",
                excerpt:
                  "A comprehensive breakdown of Incoterms and how they affect your responsibilities and costs in international shipping.",
                image: "/global-shipping-routes.png",
                date: "April 28, 2023",
                category: "International Trade",
                link: "/blog/incoterms-explained",
              },
              {
                title: "Optimizing Your Supply Chain from China",
                excerpt:
                  "Strategies to improve efficiency, reduce costs, and minimize risks in your China-based supply chain.",
                image: "/logistics-hero-bg.jpg",
                date: "June 5, 2023",
                category: "Supply Chain",
                link: "/blog/supply-chain-optimization",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] rounded-xl group"
              >
                <div className="relative h-52">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-medium text-white bg-blue-600 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl text-[#0A2240] group-hover:text-blue-700 transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href={post.link}
                    className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    Read More{" "}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/resources">
              <Button
                variant="outline"
                className="gap-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition-all duration-200"
              >
                View All Resources <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action - Matching the provided design */}
      <section className="py-20 relative overflow-hidden bg-[#1a2c4b]">
        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center px-4 py-1 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm">
              <Star className="h-4 w-4 mr-2 text-yellow-400" />
              <span>Ready to Simplify Your Logistics?</span>
            </div>
            <h2 className="mb-6 text-3xl md:text-4xl font-bold tracking-tight text-white whitespace-normal">
              You focus on your business, we handle the logistics
            </h2>
            <p className="mb-10 text-lg text-gray-300">
              Get in touch with our logistics experts for a customized solution tailored to your specific needs.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
