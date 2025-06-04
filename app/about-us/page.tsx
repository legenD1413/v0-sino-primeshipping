import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Globe, Target, Users, Award, Truck, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | SinoPrime Shipping - China to North America Logistics Partner",
  description:
    "Learn about SinoPrime Shipping, your dedicated fulfillment partner connecting China manufacturing to North American markets with reliable, efficient logistics solutions.",
  keywords:
    "China Fulfillment Partner, North American Market Logistics, E-commerce Logistics China to North America, Cross-border Logistics China, Shipping from China to USA, Shipping from China to Canada",
}

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
        <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
          Paving Your Way from China to North America
        </p>
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src="/global-shipping-routes.png"
            alt="Global shipping routes connecting China to North America"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-16">
        <div className="prose prose-lg max-w-none">
          <p>
            In today's wave of globalization, getting your products from manufacturing bases in China to eager consumers
            in North America can often feel like navigating a complex maze. This is why Sinoprime Shipping was born with
            a clear mission: we are not just a logistics provider, but a dedicated and trustworthy fulfillment partner.
            We simplify every link in your supply chain, allowing you to focus wholeheartedly on your core
            business—enhancing brand value and winning customer satisfaction.
          </p>
          <p>
            We have a deep understanding of the numerous challenges faced by e-commerce sellers and businesses sourcing
            from China. We recognized the market's urgent need for an innovative solution that combines top-tier
            logistics intelligence with a wholehearted commitment to client success. Sinoprime Shipping brings together
            a team of experts passionate about the logistics industry, market-savvy elites, and adept problem-solvers.
            We are dedicated to seamlessly connecting your production lines with North American consumers through
            efficient, reliable, and transparent services.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <div className="flex items-center mb-6">
          <Target className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold">Our Mission: Your Success is Our Course</h2>
        </div>
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            We are committed to empowering businesses, especially e-commerce entrepreneurs and B2B companies, to easily
            expand into the Canadian and U.S. markets. To this end, we strive to:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Lightbulb className="h-5 w-5 text-blue-600 mr-2" />
              Simplify Complexity
            </h3>
            <p className="text-gray-700">
              We transform complex and daunting international shipping and fulfillment processes into streamlined,
              manageable, and predictable operations for you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Truck className="h-5 w-5 text-blue-600 mr-2" />
              Deliver with Certainty
            </h3>
            <p className="text-gray-700">
              We ensure every shipment of yours arrives safely, on time, and in perfect condition at its destination.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <HeartHandshake className="h-5 w-5 text-blue-600 mr-2" />
              Build Partnerships
            </h3>
            <p className="text-gray-700">
              We build long-term, stable cooperative relationships with you based on trust, candid communication, and a
              vision of mutual growth, acting as a reliable extension of your team.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Lightbulb className="h-5 w-5 text-blue-600 mr-2" />
              Drive Innovation
            </h3>
            <p className="text-gray-700">
              We actively apply cutting-edge technology and industry best practices to continuously optimize service
              quality and provide data insights, helping you strategize and make decisions effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Award className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold">Why Choose SPS Sinoprime Shipping?</h2>
        </div>
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Section - Takes 1/3 width on large screens */}
          <div className="lg:col-span-1">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/north-america-shipping-new.png"
                alt="SPS Sinoprime Shipping comprehensive logistics solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Grid - Takes 2/3 width on large screens */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Globe className="h-5 w-5 text-blue-600 mr-2" />
                North America Focused, Global Perspective
              </h3>
              <p className="text-gray-700 text-sm">
                We are rooted in facilitating China-Canada and China-U.S. trade, while precisely focusing on the unique
                needs and operational details of the North American market.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Truck className="h-5 w-5 text-blue-600 mr-2" />
                End-to-End Worry-Free Process
              </h3>
              <p className="text-gray-700 text-sm">
                From initial consultation and supplier coordination in China to "last-mile" delivery in North America,
                we meticulously manage every step for you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <HeartHandshake className="h-5 w-5 text-blue-600 mr-2" />
                Your Dedicated "E-commerce Friend"
              </h3>
              <p className="text-gray-700 text-sm">
                We pride ourselves on our "customer-first" service philosophy. At SPS, you are never just a tracking
                number.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Award className="h-5 w-5 text-blue-600 mr-2" />
                Professional Experience, Efficient Guarantee
              </h3>
              <p className="text-gray-700 text-sm">
                Our team has many years of practical experience in international logistics and supply chain management.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Section - Full width below */}
        <div className="mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Lightbulb className="h-5 w-5 text-blue-600 mr-2" />
              Technology-Empowered, Smart Logistics
            </h3>
            <p className="text-gray-700">
              We use advanced logistics platforms and tracking systems, allowing you to grasp real-time cargo
              dynamics, with everything under control. Our technology solutions provide transparency and efficiency
              throughout your entire supply chain journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <div className="flex items-center mb-8">
          <ShieldCheck className="h-8 w-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold">Our Values: The Beacons That Guide Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Award className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity First</h3>
            <p className="text-gray-700">
              All our business dealings are based on honesty, trustworthiness, and transparency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Paramount</h3>
            <p className="text-gray-700">Our clients' success is our unwavering primary goal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pursuit of Excellence</h3>
            <p className="text-gray-700">
              We strive for perfection and continuous improvement, committed to providing the highest standard of
              service.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center md:col-span-3 md:grid md:grid-cols-2 md:gap-6">
            <div className="flex flex-col items-center text-center mb-6 md:mb-0">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <HeartHandshake className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Cooperation</h3>
              <p className="text-gray-700">
                We firmly believe in the power of working together—whether with clients, partners, or internally.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Adaptation</h3>
              <p className="text-gray-700">
                In the ever-changing landscape of global trade, we maintain keen insight, actively adapting to and
                meeting evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 md:p-12 rounded-xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/global-shipping-routes.png" 
            alt="Global logistics network background" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Let's Build Your Bridge to North American Success Together</h2>
        <div className="mb-8">
          <p className="text-lg text-white mb-4 leading-relaxed">
            We understand that choosing a logistics partner is a crucial decision for business development. At SPS
            Sinoprime Shipping, we are confident in our commitment to providing you with exceptional service that not
            only meets your logistics needs but also powerfully boosts your business growth.
          </p>
          <p className="text-lg text-white leading-relaxed">
            We invite you to learn more about our various services or contact us directly to discuss how SPS can become
            your ideal partner in optimizing your China-to-North America supply chain, creating brilliance together.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/services"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-center transition-all duration-300 hover:transform hover:scale-105"
          >
            Explore Our Services
          </Link>
          <Link
            href="/contact"
              className="bg-transparent hover:bg-blue-700/50 border border-white text-white px-6 py-3 rounded-lg font-medium text-center transition-all duration-300 hover:transform hover:scale-105"
          >
            Contact Us
          </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
