"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Rocket,
  Shield,
  TrendingUp,
  Clock,
  MessageSquare,
  BarChart3,
  Compass,
  CheckCircle,
  Zap,
  Users,
  Heart,
  MessageCircle,
  ClipboardList,
  Settings,
  Search,
  Package,
  Send,
  LineChart,
  Target,
  Award,
  Check,
  ChevronRight,
  ArrowRight,
} from "lucide-react"

export default function SPS99Page() {
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
          <Image src="/sps-99-hero-bg.png" alt="Global Supply Chain" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_70%)]" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-red-500 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-red-400 animate-pulse"
            style={{ animationDelay: "1.2s" }}
          />
          <div
            className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-red-500 animate-pulse"
            style={{ animationDelay: "0.7s" }}
          />
          <div
            className="absolute top-1/2 left-3/4 w-2 h-2 rounded-full bg-red-400 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-3/4 left-2/3 w-3 h-3 rounded-full bg-red-500 animate-pulse"
            style={{ animationDelay: "0.9s" }}
          />
        </div>

        {/* Hero Content */}
        <div
          className={`container-custom relative z-10 text-white text-center max-w-4xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Rocket className="h-10 w-10 mr-3 text-red-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                99
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Stop Juggling, Start Scaling
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white/90">
            Your Dedicated China Supply Chain Partner for TikTok & Crowdfunding Success
          </h2>

          <p className="text-lg md:text-xl text-red-400 font-medium mb-6 border-b border-t border-red-500/30 py-2 inline-block">
            SPS 99 供应链先锋计划 - 为您的爆款和众筹保驾护航
          </p>

          <p
            className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We handle the A-Z of China sourcing and shipping to Canada & USA , so you can focus on creating viral
            content and delighting your backers.{" "}
            <span className="font-semibold text-white">Exclusively for 19 Pioneer Partners.</span>
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href="#apply"
              className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300 flex items-center shadow-lg shadow-red-900/20 hover:shadow-red-900/40 hover:-translate-y-1"
            >
              <Shield className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              <span>Apply to Become a Pioneer Partner</span>
              <ArrowRight className="h-5 w-5 ml-2 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>

            <Link
              href="#how-it-works"
              className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-md transition-all duration-300 flex items-center border border-white/20 hover:border-white/40 hover:-translate-y-1"
            >
              <span>Learn How SPS 99 Works</span>
              <ArrowRight className="h-5 w-5 ml-2 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>
          </div>
        </div>



        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-red-500/20 rounded-full animate-ping opacity-20" />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 border border-red-500/20 rounded-full animate-ping opacity-10"
          style={{ animationDuration: "3s" }}
        />
      </section>

      {/* Pain Points Section */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-red-500/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-gray-900 relative inline-block">
              Tired of China Supply Chain Nightmares?
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </h2>
            <p className="text-lg text-red-500 italic mb-6 mt-6 font-medium">还在为中国供应链的难题烦恼吗？</p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              TikTok sellers and crowdfunding creators face unique challenges when sourcing from China. Here are the
              most common pain points we solve:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pain Point 1 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />

              <div className="flex items-center mb-6 relative">
                <div className="p-3 bg-red-50 rounded-lg mr-4 group-hover:bg-red-100 transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  Viral orders creating shipping chaos?
                </h3>
              </div>
              <p className="text-gray-700 mb-4 pl-16">
                When your TikTok product goes viral, can your supply chain keep up? Don't let logistics bottlenecks kill
                your momentum.
              </p>
              <p className="text-sm text-red-500 mt-2 font-medium pl-16">爆单了，却被物流拖后腿？</p>
            </div>

            {/* Pain Point 2 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />

              <div className="flex items-center mb-6 relative">
                <div className="p-3 bg-red-50 rounded-lg mr-4 group-hover:bg-red-100 transition-colors duration-300">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  Worried about crowdfunding deadlines?
                </h3>
              </div>
              <p className="text-gray-700 mb-4 pl-16">
                Missing backer deadlines damages trust and reputation. Our dedicated team ensures your crowdfunding
                promises are kept.
              </p>
              <p className="text-sm text-red-500 mt-2 font-medium pl-16">担心众筹承诺的发货日期无法兑现？</p>
            </div>

            {/* Pain Point 3 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />

              <div className="flex items-center mb-6 relative">
                <div className="p-3 bg-red-50 rounded-lg mr-4 group-hover:bg-red-100 transition-colors duration-300">
                  <MessageSquare className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  Lacking expertise with China suppliers?
                </h3>
              </div>
              <p className="text-gray-700 mb-4 pl-16">
                Language barriers and cultural differences shouldn't cost you money. Our bilingual team negotiates the
                best terms on your behalf.
              </p>
              <p className="text-sm text-red-500 mt-2 font-medium pl-16">缺乏与中国供应商谈判的专业知识？</p>
            </div>

            {/* Pain Point 4 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />

              <div className="flex items-center mb-6 relative">
                <div className="p-3 bg-red-50 rounded-lg mr-4 group-hover:bg-red-100 transition-colors duration-300">
                  <BarChart3 className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  Struggling with fluctuating volumes?
                </h3>
              </div>
              <p className="text-gray-700 mb-4 pl-16">
                From zero to thousands of orders overnight - we scale with your success, providing flexible solutions
                for unpredictable demand.
              </p>
              <p className="text-sm text-red-500 mt-2 font-medium pl-16">订单量波动大，难以找到稳定支持？</p>
            </div>

            {/* Pain Point 5 */}
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />

              <div className="flex items-center mb-6 relative">
                <div className="p-3 bg-red-50 rounded-lg mr-4 group-hover:bg-red-100 transition-colors duration-300">
                  <Compass className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                  Lost in the maze of global logistics?
                </h3>
              </div>
              <p className="text-gray-700 mb-4 pl-16">
                Navigate the complexities of global supply chains with our end-to-end solution, from factory floor to
                customer door.
              </p>
              <p className="text-sm text-red-500 mt-2 font-medium pl-16">徘徊在中国采购和跨境物流的复杂迷宫中？</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Introduction Section */}
      <section className="bg-gray-50 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center p-3 bg-red-50 rounded-full mb-4 mx-auto w-20 h-20">
                <Rocket className="h-10 w-10 text-red-500" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              Introducing the SPS 99 Pioneer Partner Program
            </h2>
            <p className="text-lg text-red-500 font-medium mb-6">SPS 99 先锋伙伴计划：您专属的幕后采购物流团队</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              We're not just another logistics provider. We're your dedicated partner, offering an end-to-end supply
              chain solution from China to North America, exclusively for 19 selected TikTok sellers and crowdfunding
              creators.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {/* Advantage 1 */}
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors duration-300">
                  <CheckCircle className="h-10 w-10 text-red-500" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">Hassle-Free Full Service</h3>
              <p className="text-red-500 text-sm mb-3 text-center font-medium">省心省力全程服务</p>
              <p className="text-gray-600 text-center text-sm">
                From supplier negotiation to final delivery, we handle every step so you don't have to.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors duration-300">
                  <Zap className="h-10 w-10 text-red-500" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">Built for Virality & Scale</h3>
              <p className="text-red-500 text-sm mb-3 text-center font-medium">为爆款而生</p>
              <p className="text-gray-600 text-center text-sm">
                Flexible solutions that adapt instantly to your fluctuating demands and viral success.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors duration-300">
                  <Users className="h-10 w-10 text-red-500" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">Exclusive Pioneer Support</h3>
              <p className="text-red-500 text-sm mb-3 text-center font-medium">19位先锋专属</p>
              <p className="text-gray-600 text-center text-sm">
                Deep, personalized attention that mass-market logistics providers simply cannot offer.
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors duration-300">
                  <Heart className="h-10 w-10 text-red-500" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">True Partnership</h3>
              <p className="text-red-500 text-sm mb-3 text-center font-medium">真诚合作</p>
              <p className="text-gray-600 text-center text-sm">
                We invest in your success because your growth is our growth. We win together.
              </p>
            </div>

            {/* Advantage 5 */}
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors duration-300">
                  <MessageCircle className="h-10 w-10 text-red-500" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">E-commerce Friend</h3>
              <p className="text-red-500 text-sm mb-3 text-center font-medium">"电商朋友"</p>
              <p className="text-gray-600 text-center text-sm">
                Sincere cooperation focused on your growth, with cultural understanding that bridges East and West.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Process Section */}
      <section id="how-it-works" className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-50 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-50 rounded-full opacity-50 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center p-3 bg-red-50 rounded-full mb-4 mx-auto w-20 h-20">
                <Settings className="h-10 w-10 text-red-500" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              Your Success Blueprint: How We Partner With You
            </h2>
            <p className="text-lg text-red-500 font-medium mb-4">您的成功蓝图：我们如何与您携手合作</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              We believe in a transparent and collaborative process. Here's how we turn your vision into reality:
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Phase 1 */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-1 rounded-xl inline-block mb-10">
              <div className="bg-white px-6 py-3 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Phase 1: Collaborative Solution Design</h3>
                <p className="text-red-500 font-medium">方案制定</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-start mb-10 group">
                  <div className="flex-shrink-0 bg-red-100 rounded-full p-4 mr-6 group-hover:bg-red-200 transition-colors duration-300">
                    <ClipboardList className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        1
                      </span>
                      <h4 className="text-xl font-bold text-gray-900">Defining Your Requirements</h4>
                    </div>
                    <p className="text-red-500 text-sm mb-3 font-medium">明确您的服务需求</p>
                    <p className="text-gray-700">
                      It all starts with your vision. You'll outline your specific needs for procurement, custom
                      packaging, quality inspection, preferred logistics channels, target costs, and any other unique
                      requirements for your products.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-red-100 rounded-full p-4 mr-6 group-hover:bg-red-200 transition-colors duration-300">
                    <Settings className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        2
                      </span>
                      <h4 className="text-xl font-bold text-gray-900">Tailored Proposal & Refinement</h4>
                    </div>
                    <p className="text-red-500 text-sm mb-3 font-medium">SPS定制初步方案与共同完善</p>
                    <p className="text-gray-700">
                      Based on your input, our experts at SPS will develop an initial, comprehensive service proposal.
                      We then work closely with you, discussing every detail and refining the plan until it perfectly
                      aligns with your goals and budget. This ensures a clear roadmap and mutual understanding before
                      any execution begins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -left-10 w-full h-full bg-red-50 rounded-xl transform rotate-3"></div>
                <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-red-200 rounded-xl transform -rotate-3"></div>
                <div className="relative">
                  <Image
                    src="/collaborative-solution-design.png"
                    alt="Collaborative Solution Design"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-red-100">
                    <p className="font-bold text-gray-900">Collaborative</p>
                    <p className="text-red-500 font-bold">Planning</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-1 rounded-xl inline-block mb-10">
              <div className="bg-white px-6 py-3 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Phase 2: Flawless Execution & Continuous Optimization
                </h3>
                <p className="text-red-500 font-medium">方案实施与持续优化</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -top-10 -right-10 w-full h-full bg-red-50 rounded-xl transform -rotate-3"></div>
                  <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-red-200 rounded-xl transform rotate-3"></div>
                  <div className="relative">
                    <Image
                      src="/flawless-execution-process.png"
                      alt="Flawless Execution Process"
                      width={500}
                      height={400}
                      className="rounded-xl shadow-xl"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-red-100">
                      <p className="font-bold text-gray-900">Flawless</p>
                      <p className="text-red-500 font-bold">Execution</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="flex items-start mb-10 group">
                  <div className="flex-shrink-0 bg-red-100 rounded-full p-4 mr-6 group-hover:bg-red-200 transition-colors duration-300">
                    <Search className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        3
                      </span>
                      <h4 className="text-xl font-bold text-gray-900">Sample Confirmation & Quality Assurance</h4>
                    </div>
                    <p className="text-red-500 text-sm mb-3 font-medium">样品确认与品质保障</p>
                    <p className="text-gray-700">
                      For many products, confirming a sample is key. We facilitate this process to ensure the product
                      meets all your quality standards before bulk production or sourcing. Your approval is our green
                      light.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-10 group">
                  <div className="flex-shrink-0 bg-red-100 rounded-full p-4 mr-6 group-hover:bg-red-200 transition-colors duration-300">
                    <Package className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        4
                      </span>
                      <h4 className="text-xl font-bold text-gray-900">Goods Preparation in China</h4>
                    </div>
                    <p className="text-red-500 text-sm mb-3 font-medium">中国端批量货物入仓与准备</p>
                    <p className="text-gray-700">
                      Once approved (or if samples aren't needed), your bulk goods are sourced or received at our China
                      consolidation center. Our team handles professional receiving, rigorous quality inspection (as per
                      agreed standards), secure warehousing, and meticulous preparation for shipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-10 group">
                  <div className="flex-shrink-0 bg-red-100 rounded-full p-4 mr-6 group-hover:bg-red-200 transition-colors duration-300">
                    <Send className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        5
                      </span>
                      <h4 className="text-xl font-bold text-gray-900">Order Fulfillment & Global Shipping</h4>
                    </div>
                    <p className="text-red-500 text-sm mb-3 font-medium">接收订单，按单出货，全球配送</p>
                    <p className="text-gray-700">
                      As your orders come in (from TikTok Shop, crowdfunding backers, your e-commerce store, etc.), we
                      pick, pack, and ship them according to the pre-defined logistics solution. Whether it's individual
                      B2C parcels or larger B2B consignments to North America, we ensure efficient and reliable
                      dispatch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 bg-red-100 rounded-full p-4 mr-6 group-hover:bg-red-200 transition-colors duration-300">
                    <LineChart className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        6
                      </span>
                      <h4 className="text-xl font-bold text-gray-900">Real-time Tracking & Optimization</h4>
                    </div>
                    <p className="text-red-500 text-sm mb-3 font-medium">全程追踪，数据报告与反馈优化</p>
                    <p className="text-gray-700">
                      You and your customers get access to real-time tracking. We provide regular performance reports
                      and maintain an open feedback loop. This allows us to proactively address any issues and
                      continuously refine strategies for even better efficiency and cost-effectiveness in the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16 p-8 bg-gradient-to-r from-red-50 to-white rounded-2xl border border-red-100 shadow-sm">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                You focus on your brand and sales; we manage the complexities behind the scenes.
              </p>
              <p className="text-red-500 font-medium">您专注于品牌和销售，我们将幕后的复杂事务交给我们。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="bg-gray-50 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-50 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-50 rounded-full opacity-50 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center p-3 bg-red-50 rounded-full mb-4 mx-auto w-20 h-20">
                <Target className="h-10 w-10 text-red-500" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              Is the SPS 99 Pioneer Program Right for You?
            </h2>
            <p className="text-lg text-red-500 font-medium mb-4">SPS 99 先锋伙伴计划适合您吗？</p>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TikTok Sellers */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 relative">
                <Image src="/tiktok-viral-products.png" alt="TikTok Sellers" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="bg-red-500 p-2 rounded-lg mr-3">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-white text-2xl font-bold">TikTok Sellers</h3>
                    </div>
                    <p className="text-red-400 font-medium">TikTok 卖家</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 border-l-4 border-red-500 pl-4 italic">
                  Selling China-sourced products, needing reliable fulfillment for viral growth in US & Canada.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Ready for sudden viral demand spikes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Fast shipping to maintain momentum</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Quality control for 5-star reviews</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="#apply"
                    className="group flex items-center text-red-500 font-medium hover:text-red-700 transition-colors duration-300"
                  >
                    <span>Learn if you qualify</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Crowdfunding Creators */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 relative">
                <Image src="/data-viz-overlay.png" alt="Crowdfunding Creators" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="bg-red-500 p-2 rounded-lg mr-3">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-white text-2xl font-bold">Crowdfunding Creators</h3>
                    </div>
                    <p className="text-red-400 font-medium">众筹项目创建者</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 border-l-4 border-red-500 pl-4 italic">
                  Needing to deliver quality products from China to backers on time, every time in US & Canada.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Meet backer delivery promises</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Scale from prototype to mass production</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Transparent updates for backers</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="#apply"
                    className="group flex items-center text-red-500 font-medium hover:text-red-700 transition-colors duration-300"
                  >
                    <span>Learn if you qualify</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Emerging E-commerce Brands */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 relative">
                <Image
                  src="/ecommerce-supply-chain.png"
                  alt="Emerging E-commerce Brands"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="bg-red-500 p-2 rounded-lg mr-3">
                        <Package className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-white text-2xl font-bold">E-commerce Brands</h3>
                    </div>
                    <p className="text-red-400 font-medium">新兴电商品牌</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6 border-l-4 border-red-500 pl-4 italic">
                  Valuing a dedicated, expert partner for their China supply chain to North America.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Streamlined sourcing and logistics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Consistent quality and delivery times</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">Focus on growth, not supply chain headaches</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="#apply"
                    className="group flex items-center text-red-500 font-medium hover:text-red-700 transition-colors duration-300"
                  >
                    <span>Learn if you qualify</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusivity Section */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-50 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-50 rounded-full opacity-50 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center p-3 bg-red-50 rounded-full mb-4 w-20 h-20">
                  <Award className="h-10 w-10 text-red-500" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
                Why Only 19 Pioneer Partners?
              </h2>
              <p className="text-lg text-red-500 font-medium mb-6">为何仅限19位先锋伙伴？</p>
              <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mb-8"></div>

              <p className="text-lg text-gray-700 mb-8">
                We believe true value comes from deep partnership, not a wide net. By limiting to 19 Pioneers, we ensure
                each partner receives our focused expertise, personalized support, and a commitment to mutual success.
                We want to be your trusted '电商朋友' (E-commerce Friend).
              </p>

              <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-xl border border-red-100 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-gray-900">What our limited capacity means for you:</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 rounded-full p-3 mr-4">
                      <Target className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Dedicated Account Team</span>
                      <p className="text-gray-600">Your own specialists who know your business inside and out</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 rounded-full p-3 mr-4">
                      <Award className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Priority Service</span>
                      <p className="text-gray-600">Front-of-line privileges for all your logistics needs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 rounded-full p-3 mr-4">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">True Partnership Mindset</span>
                      <p className="text-gray-600">We're invested in your long-term success, not just transactions</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-full h-full bg-red-50 rounded-xl transform rotate-3"></div>
              <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-red-200 rounded-xl transform -rotate-3"></div>
              <div className="relative">
                <Image
                  src="/exclusive-partnership-illustration.png"
                  alt="Exclusive Partnership"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-red-100 flex items-center">
                  <div className="mr-4">
                    <p className="font-bold text-gray-900">Limited to</p>
                    <p className="text-red-500 font-bold">Pioneer Partners</p>
                  </div>
                  <div className="bg-red-500 text-white text-4xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                    19
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Criteria & Final CTA Section */}
      <section id="apply" className="bg-gray-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/sps-99-cta-bg.png" alt="Background Pattern" fill className="object-cover" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_70%)]" />

        {/* Animated Particles */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-red-500 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-1/3 left-1/2 w-3 h-3 rounded-full bg-red-400 animate-pulse"
            style={{ animationDelay: "1.2s" }}
          />
          <div
            className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-red-500 animate-pulse"
            style={{ animationDelay: "0.7s" }}
          />
          <div
            className="absolute top-1/2 left-3/4 w-2 h-2 rounded-full bg-red-400 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-3/4 left-2/3 w-3 h-3 rounded-full bg-red-500 animate-pulse"
            style={{ animationDelay: "0.9s" }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center p-3 bg-red-500 rounded-full mb-4 mx-auto w-20 h-20">
                <Rocket className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Become an SPS 99 Pioneer Partner?
            </h2>
            <p className="text-lg text-red-400 font-medium mb-6">准备好成为SPS 99先锋伙伴了吗？</p>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <div className="bg-red-500 p-2 rounded-lg mr-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                Membership Criteria
              </h3>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-red-500/20 backdrop-blur-sm rounded-full p-2 mr-4">
                    <ChevronRight className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-xl block mb-1">Stable sourcing needs from China</span>
                    <p className="text-gray-300">Regular orders that benefit from consistent management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-red-500/20 backdrop-blur-sm rounded-full p-2 mr-4">
                    <ChevronRight className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-xl block mb-1">Growth-oriented business</span>
                    <p className="text-gray-300">Clear plans for scaling your TikTok or crowdfunding success</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-red-500/20 backdrop-blur-sm rounded-full p-2 mr-4">
                    <ChevronRight className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-xl block mb-1">Value sincere, long-term partnership</span>
                    <p className="text-gray-300">Looking for a true partner, not just a service provider</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-red-500/20 backdrop-blur-sm rounded-full p-2 mr-4">
                    <ChevronRight className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-xl block mb-1">Willing to provide feedback</span>
                    <p className="text-gray-300">Help us continuously improve our service for you</p>
                  </div>
                </li>
              </ul>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <p className="text-xl font-semibold mb-4">
                  Spaces are limited to ensure personalized attention for each Pioneer Partner.
                </p>
                <div className="flex items-center">
                  <div className="bg-red-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    7
                  </div>
                  <p className="font-bold text-red-400 text-xl">
                    Pioneer Partner positions remaining for this quarter.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center">Start Your Application</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium mb-2">
                    Business Type
                  </label>
                  <div className="relative">
                    <select
                      id="business"
                      className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300 appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-gray-700">
                        Select your business type
                      </option>
                      <option value="tiktok" className="text-gray-900 bg-white">
                        TikTok seller
                      </option>
                      <option value="kickstarter" className="text-gray-900 bg-white">
                        Kickstarter Creator
                      </option>
                      <option value="indiegogo" className="text-gray-900 bg-white">
                        Indiegogo Creator
                      </option>
                      <option value="ecommerce" className="text-gray-900 bg-white">
                        E-commerce Brand
                      </option>
                      <option value="other" className="text-gray-900 bg-white">
                        Other
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Briefly describe your business and China sourcing needs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Tell us about your business"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40 hover:-translate-y-1"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
