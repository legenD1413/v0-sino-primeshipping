"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
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

export default function SPS19FBAPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  // 表单状态管理
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    country: '',
    salesPlatforms: [] as string[],
    productCategories: '',
    monthlyOrderVolume: '',
    logisticsChallenges: [] as string[],
    otherChallenge: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // 表单输入处理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // 表单提交处理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    // 表单验证
    if (!formData.fullName || !formData.email || !formData.company || !formData.country || formData.salesPlatforms.length === 0 || !formData.productCategories || !formData.monthlyOrderVolume || formData.logisticsChallenges.length === 0 || !formData.description) {
      setSubmitStatus('error')
      setSubmitMessage('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/sps-99/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Application submitted successfully! We will contact you soon.')
        // 清空表单
        setFormData({
          fullName: '',
          company: '',
          email: '',
          country: '',
          salesPlatforms: [] as string[],
          productCategories: '',
          monthlyOrderVolume: '',
          logisticsChallenges: [] as string[],
          otherChallenge: '',
          description: ''
        })
        // 跳转到感谢页面
        setTimeout(() => {
          router.push('/sps-99/thank-you-sp19')
        }, 1000)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.error || 'Submission failed, please try again later')
      }
    } catch (error) {
      console.error('表单提交错误:', error)
      setSubmitStatus('error')
      setSubmitMessage('Network error, please check your connection and try again')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/sps-99-hero-bg.png" alt="Global Supply Chain" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/85" />
          <div className="absolute inset-0 bg-black/40" />
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
          <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
            <div className="relative mb-4 sm:mb-6">
              <Rocket className="h-12 w-12 sm:h-16 sm:w-16 text-red-500 animate-pulse mx-auto" />
              <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                FBA
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Stop Worrying About FBA Logistics. Start Scaling Your Amazon Business.
            </h1>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-white/90 leading-relaxed px-2 sm:px-4">
            Your dedicated FBA Prep & Ship partner in China, seamlessly delivering your products to Amazon warehouses in the USA, Canada, Mexico, and the UK.
          </h2>

          <p
            className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Focus on growth, not logistics. We handle everything from FBA prep to global shipping.
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
              <span>Get a Free Quote</span>
              <ArrowRight className="h-5 w-5 ml-2 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>

            <Link
              href="#how-it-works"
              className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-md transition-all duration-300 flex items-center border border-white/20 hover:border-white/40 hover:-translate-y-1"
            >
              <span>Learn How It Works</span>
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
              Are You Facing These FBA Head-On Challenges?
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your path to Amazon success shouldn't be blocked by logistics hurdles. We understand your pain points:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Pain Point 1 */}
            <div className="group bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />

              <div className="flex flex-col mb-6 relative">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-50 rounded-lg mr-4 group-hover:bg-red-100 transition-colors duration-300">
                    <TrendingUp className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300 leading-tight">
                    Suppliers Unfamiliar with FBA Rules?
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Worried about delays or extra fees from non-compliant labels and packaging.
                </p>
              </div>
            </div>

            {/* Pain Point 2 */}
            <div className="group bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />

              <div className="flex flex-col mb-6 relative">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-50 rounded-lg mr-4 group-hover:bg-red-100 transition-colors duration-300">
                    <Clock className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300 leading-tight">
                    Fear of FBA Rejection?
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  One small mistake can lead to an entire shipment being rejected, resulting in significant losses.
                </p>
              </div>
            </div>

            {/* Pain Point 3 */}
            <div className="group bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />

              <div className="flex flex-col mb-6 relative">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-50 rounded-lg mr-4 group-hover:bg-red-100 transition-colors duration-300">
                    <MessageSquare className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300 leading-tight">
                    Wasting Time on Prep Instead of Sales?
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  You should be focused on product sourcing, operations, and marketing, not manual labor.
                </p>
              </div>
            </div>

            {/* Pain Point 4 */}
            <div className="group bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-full -translate-x-5 -translate-y-5 group-hover:scale-150 transition-all duration-500" />

              <div className="flex flex-col mb-6 relative">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-50 rounded-lg mr-4 group-hover:bg-red-100 transition-colors duration-300">
                    <BarChart3 className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-red-500 transition-colors duration-300 leading-tight">
                    Overwhelmed by International Shipping & Customs?
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Sea freight, air freight, duties, paperwork... every step presents a challenge.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Our Service Section */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-50 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-50 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-red-100 rounded-full opacity-30 blur-2xl" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-red-200 rounded-full opacity-20 blur-xl" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-full mb-6 mx-auto w-24 h-24 shadow-lg">
                <Package className="h-12 w-12 text-red-500" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-gray-900 relative">
              Your All-in-One Global FBA Solution
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              We handle everything for you, from China to North America (USA/CA/MX) and the United Kingdom (UK).
            </p>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            </div>
          </div>

          {/* Step 1: Source Optimization */}
          <div className="mb-24">
            <div className="relative mb-12">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-300 rounded-full opacity-30"></div>
              <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-1 rounded-2xl inline-block shadow-xl">
                <div className="bg-white px-8 py-4 rounded-xl">
                  <div className="flex items-center">
                    <div className="bg-red-500 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-lg">
                      1
                </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Expert FBA Prep Services</h3>
                      <p className="text-red-500 font-semibold text-lg">Strictly Adhering to Latest Amazon Standards</p>
              </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-xl mr-4 shadow-md">
                      <Search className="h-8 w-8 text-red-600" />
                    </div>
                    Core Services
                  </h4>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">1. Receiving & Quality Inspection</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Quantity counting, visual checks to ensure your products meet Amazon standards before prep.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">2. Meticulous Preparation</h5>
                      <p className="text-gray-700 leading-relaxed">
                        FNSKU labeling, suffocation warnings, shipping mark application according to FBA requirements.
              </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-300 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">3. Custom Packaging</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Repackaging, product bundling/kitting, reinforcement to meet Amazon's packaging requirements.
                      </p>
                    </div>
                  </div>
                </div>
            </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl mr-4 shadow-md">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                    Value Created for You
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
              </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Ensure Compliance, Avoid Risks:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">We are FBA policy experts. We solve potential issues in China, preventing costly correction fees.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Focus on Growth, Not Logistics:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Outsource the hassle to us and focus 100% on growing your store and sales.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Maximize Your Profit:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Significantly lower your first-mile costs through optimized packaging and best shipping routes.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl mr-4 shadow-md">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="font-bold text-blue-800 text-xl">Why This Matters for Your Business</span>
                  </div>
                  <p className="text-blue-700 leading-relaxed text-lg">
                    Professional FBA prep is essential for Amazon success. We ensure your products meet all Amazon requirements, avoiding costly rejections and delays that can damage your seller performance.
              </p>
                </div>
              </div>
            </div>
            </div>

          {/* Step 2: Meticulous Pre-processing */}
          <div className="mb-24">
            <div className="relative mb-12">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-300 rounded-full opacity-30"></div>
              <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-1 rounded-2xl inline-block shadow-xl">
                <div className="bg-white px-8 py-4 rounded-xl">
                  <div className="flex items-center">
                    <div className="bg-red-500 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-lg">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Flexible & Cost-Effective Shipping</h3>
                      <p className="text-red-500 font-semibold text-lg">Tailored Solutions Based on Your Timeline and Budget</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-xl mr-4 shadow-md">
                      <Package className="h-8 w-8 text-red-600" />
                    </div>
                    Core Services
                  </h4>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">1. Ocean Freight</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Most cost-effective, perfect for large volumes and non-urgent restocks.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">2. Air Freight</h5>
                      <p className="text-gray-700 leading-relaxed">
                        The ideal balance of speed and cost for medium-sized shipments with time sensitivity.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-300 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">3. International Express</h5>
                      <p className="text-gray-700 leading-relaxed">
                        The fastest delivery for urgent restocks or small, high-value shipments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl mr-4 shadow-md">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    Value Created for You
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Reduced Errors & Damage:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Inspection upon arrival and professional packaging minimize subsequent issues.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Improved Inbound Efficiency:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Standardized operations ensure goods move quickly and accurately to the next stage.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Enhanced Brand Perception:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Customized packaging helps elevate the unboxing experience for your TikTok customers.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl mr-4 shadow-md">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="font-bold text-blue-800 text-xl">Quality Control That Scales</span>
                  </div>
                  <p className="text-blue-700 leading-relaxed text-lg">
                    Professional pre-processing is essential for all business models. TikTok sellers need consistent quality for viral growth. Crowdfunding creators require meticulous preparation to meet backer expectations. E-commerce brands benefit from standardized packaging that reinforces brand identity and reduces returns.
              </p>
                </div>
              </div>
            </div>
            </div>

          {/* Step 3: Smart First-Mile */}
          <div className="mb-24">
            <div className="relative mb-12">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-300 rounded-full opacity-30"></div>
              <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-1 rounded-2xl inline-block shadow-xl">
                <div className="bg-white px-8 py-4 rounded-xl">
                  <div className="flex items-center">
                    <div className="bg-red-500 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-lg">
                      3
                </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Hassle-Free Global Customs Clearance</h3>
                      <p className="text-red-500 font-semibold text-lg">Expert Brokerage for USA, Canada, Mexico, and UK</p>
              </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-xl mr-4 shadow-md">
                      <Send className="h-8 w-8 text-red-600" />
                    </div>
                    Core Services
                  </h4>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">1. Expert Documentation Handling</h5>
                      <p className="text-gray-700 leading-relaxed">
                        Our expert brokerage team handles all import/export documentation and duty processes.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">2. Smooth Customs Clearance</h5>
                      <p className="text-gray-700 leading-relaxed">Ensuring your goods clear customs smoothly in the USA, Canada, Mexico, and the UK.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-300 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">3. Direct FBA Warehouse Delivery</h5>
                      <p className="text-gray-700 leading-relaxed">Safe delivery directly to your designated Amazon FBA warehouse locations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl mr-4 shadow-md">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    Value Created for You
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Your Gateway to Global Markets:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">One partner to effortlessly manage all your shipments to four key marketplaces.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Avoid Costly Delays:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Professional customs handling prevents shipment delays and unexpected fees.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Peace of Mind:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Complete transparency with full tracking from China to Amazon warehouses.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl mr-4 shadow-md">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="font-bold text-blue-800 text-xl">Strategic Shipping for Growth</span>
                  </div>
                  <p className="text-blue-700 leading-relaxed text-lg">
                    Smart first-mile logistics is crucial for all our partners. TikTok sellers need rapid restocking for viral moments. Crowdfunding creators require predictable delivery timelines to meet backer expectations. E-commerce brands benefit from optimized shipping costs that improve profit margins and customer satisfaction.
              </p>
                </div>
              </div>
            </div>
            </div>

          {/* Step 4: Seamless Integration */}
          <div className="mb-24">
            <div className="relative mb-12">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-300 rounded-full opacity-30"></div>
              <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-1 rounded-2xl inline-block shadow-xl">
                <div className="bg-white px-8 py-4 rounded-xl">
                  <div className="flex items-center">
                    <div className="bg-red-500 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-lg">
                      4
                </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Seamless Integration</h3>
                      <p className="text-red-500 font-semibold text-lg">Automated Order Information Flow</p>
              </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-xl mr-4 shadow-md">
                      <Settings className="h-8 w-8 text-red-600" />
                    </div>
                    Core Services
                  </h4>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">1. Automatic Platform Order Sync</h5>
                      <p className="text-gray-700 leading-relaxed">Seamless integration of your TikTok Shop with our Order Management System (OMS) through API.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">2. Real-time Information Transfer</h5>
                      <p className="text-gray-700 leading-relaxed">Order details are automatically synchronized to our fulfillment system when customers place orders.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-300 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">3. Two-Way Inventory Sync</h5>
                      <p className="text-gray-700 leading-relaxed">Real-time inventory updates prevent overselling and ensure accurate stock levels.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl mr-4 shadow-md">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    Value Created for You
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Efficiency Doubled, Errors Slashed:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Full automation eliminates manual order processing errors.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Lightning-Fast Response:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Orders enter fulfillment queue with almost zero delay after generation.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Accurate Inventory Management:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Effectively prevent overselling or unnecessary inventory buildup.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl mr-4 shadow-md">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="font-bold text-blue-800 text-xl">Automation That Scales With Success</span>
                  </div>
                  <p className="text-blue-700 leading-relaxed text-lg">
                    When orders surge—whether from a viral TikTok, successful crowdfunding campaign, or marketing breakthrough—automated order processing ensures you never miss a sale. Our integration handles thousands of orders seamlessly, letting you focus on what you do best: creating content and growing your brand.
              </p>
                </div>
              </div>
            </div>
            </div>

          {/* Step 5: Efficient Fulfillment */}
          <div className="mb-24">
            <div className="relative mb-12">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-300 rounded-full opacity-30"></div>
              <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-1 rounded-2xl inline-block shadow-xl">
                <div className="bg-white px-8 py-4 rounded-xl">
                  <div className="flex items-center">
                    <div className="bg-red-500 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-lg">
                      5
                </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900"> Efficient Fulfillment</h3>
                      <p className="text-red-500 font-semibold text-lg">Localized High-Speed Order Processing & Delivery</p>
              </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-xl mr-4 shadow-md">
                      <Package className="h-8 w-8 text-red-600" />
                    </div>
                    Core Services
                  </h4>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">1. Intelligent Warehouse Management</h5>
                      <p className="text-gray-700 leading-relaxed">Systematic storage and management in US/Canada local fulfillment centers.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">2. Precise Order Processing</h5>
                      <div className="space-y-3 text-gray-700 leading-relaxed">
                        <p><span className="font-semibold text-blue-600">Picking:</span> Efficient and accurate item selection</p>
                        <p><span className="font-semibold text-green-600">Checking:</span> Double-check SKUs and quantities</p>
                        <p><span className="font-semibold text-purple-600">Packing:</span> Professional packing with marketing materials</p>
                        <p><span className="font-semibold text-orange-600">Shipping:</span> Optimal carrier selection and label printing</p>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-300 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">3. Fast Local Delivery & Tracking</h5>
                      <p className="text-gray-700 leading-relaxed">Partner with local couriers for last-mile delivery with real-time tracking updates.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl mr-4 shadow-md">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    Value Created for You
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Lightning-Fast Shipping:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">1-5 business days delivery within US/Canada significantly boosts customer satisfaction.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Reduced Logistics Costs:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Local delivery is more cost-effective than international direct mail.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Enhanced Shop Reputation:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Fast, reliable logistics improve reviews and customer repurchase rates.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Convenient Returns Handling:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Local return reception and processing services optimize after-sales experience.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl mr-4 shadow-md">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="font-bold text-blue-800 text-xl">Speed That Builds Loyalty</span>
                  </div>
                  <p className="text-blue-700 leading-relaxed text-lg">
                    Fast, local fulfillment drives customer satisfaction across all channels. TikTok buyers expect quick gratification. Crowdfunding backers appreciate early delivery. E-commerce customers leave better reviews and return for repeat purchases when shipping exceeds expectations.
              </p>
            </div>
              </div>
            </div>
          </div>

          {/* Step 6: Transparent Operations */}
          <div className="mb-16">
            <div className="relative mb-12">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-300 rounded-full opacity-30"></div>
              <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-1 rounded-2xl inline-block shadow-xl">
                <div className="bg-white px-8 py-4 rounded-xl">
                  <div className="flex items-center">
                    <div className="bg-red-500 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-lg">
                      6
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Transparent Operations</h3>
                      <p className="text-red-500 font-semibold text-lg">SPS Proactive Order Fulfillment Performance Reports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-xl mr-4 shadow-md">
                      <BarChart3 className="h-8 w-8 text-red-600" />
                    </div>
                    Core Services
                  </h4>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">1. SPS System Support</h5>
                      <p className="text-gray-700 leading-relaxed">Monitor and manage entire fulfillment process through our Service Performance System.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">2. Proactive Information Feedback</h5>
                      <p className="text-gray-700 leading-relaxed">Detailed order fulfillment reports and operational data analysis provided periodically.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-300 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">3. Comprehensive Report Coverage</h5>
                      <p className="text-gray-700 leading-relaxed">Orders processed, shipping rates, delivery times, inventory turnover, cost analysis, and KPIs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-red-200 shadow-md hover:shadow-lg transition-all duration-300">
                      <h5 className="font-bold text-gray-900 mb-3 text-lg">4. Visualized Data Dashboard</h5>
                      <p className="text-gray-700 leading-relaxed">Online dashboard for real-time inventory, orders, and logistics monitoring.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl mr-4 shadow-md">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    Value Created for You
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Operational Status at Your Fingertips:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">All key data proactively presented for peace of mind.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Drive Smart Decisions:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Accurate data enables effective forecasting, planning, and strategy adjustments.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Risk Alerts & Rapid Response:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Prompt notifications for potential issues with collaborative solutions.</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <div className="bg-green-100 p-2 rounded-full mr-4 mt-1 group-hover:bg-green-200 transition-colors duration-300">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 text-lg">Build Long-Term Trust:</span>
                        <p className="text-gray-700 mt-1 leading-relaxed">Transparent, proactive communication is the cornerstone of our service.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl mr-4 shadow-md">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="font-bold text-blue-800 text-xl">Data-Driven Growth Strategy</span>
                  </div>
                  <p className="text-blue-700 leading-relaxed text-lg">
                    Clear fulfillment data empowers smarter business decisions. TikTok sellers can optimize content based on conversion patterns. Crowdfunding creators gain insights for future campaigns. E-commerce brands discover which products drive the highest lifetime customer value and plan inventory accordingly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 p-10 bg-gradient-to-r from-red-50 via-white to-red-50 rounded-3xl border-2 border-red-100 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <div key={step} className="w-4 h-4 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: `${step * 0.2}s` }}></div>
                ))}
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-4">
              Six integrated steps, one seamless solution for your China supply chain success.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Process Section */}
      <section id="how-it-works" className="bg-gray-50 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

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
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-red-100">
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
              Is the SPS 19 Pioneer Program Right for You?
            </h2>
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
              <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full mb-8"></div>

              <p className="text-lg text-gray-700 mb-8">
                We believe true value comes from deep partnership, not a wide net. By limiting to 19 Pioneers, we ensure
                each partner receives our focused expertise, personalized support, and a commitment to mutual success.
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
                      <p className="text-gray-700 mt-1 leading-relaxed">Your own specialists who know your business inside and out</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 rounded-full p-3 mr-4">
                      <Award className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Priority Service</span>
                      <p className="text-gray-700 mt-1 leading-relaxed">Front-of-line privileges for all your logistics needs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100 rounded-full p-3 mr-4">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">True Partnership Mindset</span>
                      <p className="text-gray-700 mt-1 leading-relaxed">We're invested in your long-term success, not just transactions</p>
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
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg border border-red-100 flex items-center">
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
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-white">
              Ready to Become an SPS 19 Pioneer Partner?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <div className="bg-red-500 p-2 rounded-lg mr-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                Membership Criteria
              </h3>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-500/20 backdrop-blur-sm rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-xl block mb-1">Stable sourcing needs from China</span>
                    <p className="text-white/80 mt-1 leading-relaxed">Regular orders that benefit from consistent management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-500/20 backdrop-blur-sm rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-xl block mb-1">Growth-oriented business</span>
                    <p className="text-white/80 mt-1 leading-relaxed">Clear plans for scaling your TikTok or crowdfunding success</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-green-500/20 backdrop-blur-sm rounded-full p-2 mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-xl block mb-1">Value sincere, long-term partnership</span>
                    <p className="text-white/80 mt-1 leading-relaxed">Looking for a true partner, not just a service provider</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center">Start Your Application</h3>
              
              {/* 状态提示 */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {submitMessage}
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                  <div className="flex items-center">
                    <div className="h-5 w-5 mr-2 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="text-white text-xs">!</span>
                    </div>
                    {submitMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Contact Information</h4>
                  
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                      Your Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company/Store Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="Your company or store name"
                      required
                    />
                  </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                    <label htmlFor="country" className="block text-sm font-medium mb-2">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="" disabled className="text-gray-700">Select your country</option>
                      <option value="usa" className="text-gray-900 bg-white">United States</option>
                      <option value="canada" className="text-gray-900 bg-white">Canada</option>
                      <option value="other" className="text-gray-900 bg-white">Other</option>
                    </select>
                  </div>
                </div>

                  {/* Business Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Business Information</h4>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Primary Sales Platform * (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'tiktok-us', label: 'TikTok Shop US' },
                        { value: 'tiktok-ca', label: 'TikTok Shop CA' },
                        { value: 'website-us', label: 'Independent Website US' },
                        { value: 'website-ca', label: 'Independent Website CA' },
                        { value: 'crowdfunding', label: 'Crowdfunding Platform' },
                        { value: 'other', label: 'Other' }
                      ].map((platform) => (
                        <label key={platform.value} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            value={platform.value}
                            checked={formData.salesPlatforms.includes(platform.value)}
                            onChange={(e) => {
                              const value = e.target.value;
                              setFormData(prev => ({
                                ...prev,
                                salesPlatforms: e.target.checked 
                                  ? [...prev.salesPlatforms, value]
                                  : prev.salesPlatforms.filter(p => p !== value)
                              }));
                            }}
                            className="rounded border-gray-600 text-red-600 focus:ring-red-500"
                          />
                          <span className="text-white text-sm">{platform.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productCategories" className="block text-sm font-medium mb-2">
                      Main Product Categories *
                  </label>
                  <select
                      id="productCategories"
                      name="productCategories"
                      value={formData.productCategories}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    required
                  >
                    <option value="" disabled className="text-gray-700">Select product category</option>
                    <option value="bike-vehicle" className="text-gray-900 bg-white">Bike & Vehicle</option>
                    <option value="books" className="text-gray-900 bg-white">Books</option>
                    <option value="clothing-shoes-accessories" className="text-gray-900 bg-white">Clothing, Shoes & Accessories</option>
                    <option value="computers-tablets-networking" className="text-gray-900 bg-white">Computers/Tablets & Networking</option>
                    <option value="consumer-electronics" className="text-gray-900 bg-white">Consumer Electronics</option>
                    <option value="cosmetics-skincare" className="text-gray-900 bg-white">Cosmetics & Skincare</option>
                    <option value="garden" className="text-gray-900 bg-white">Garden</option>
                    <option value="health-beauty" className="text-gray-900 bg-white">Health & Beauty</option>
                    <option value="home-decoration" className="text-gray-900 bg-white">Home & Decoration</option>
                    <option value="jewelry-watch" className="text-gray-900 bg-white">Jewelry & Watch</option>
                    <option value="kitchenware" className="text-gray-900 bg-white">Kitchenware</option>
                    <option value="pet-supplies" className="text-gray-900 bg-white">Pet Supplies</option>
                    <option value="sports-fitness-outdoors" className="text-gray-900 bg-white">Sports/Fitness & Outdoors</option>
                    <option value="toys-games" className="text-gray-900 bg-white">Toys & Games</option>
                    <option value="others" className="text-gray-900 bg-white">Others</option>
                  </select>
                </div>

                <div>
                    <label htmlFor="monthlyOrderVolume" className="block text-sm font-medium mb-2">
                      Monthly Order Volume *
                  </label>
                    <select
                      id="monthlyOrderVolume"
                      name="monthlyOrderVolume"
                      value={formData.monthlyOrderVolume}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      required
                    >
                      <option value="" disabled className="text-gray-700">Select monthly order volume</option>
                      <option value="under-100" className="text-gray-900 bg-white">&lt; 100</option>
                      <option value="100-500" className="text-gray-900 bg-white">100 - 500</option>
                      <option value="501-2000" className="text-gray-900 bg-white">501 - 2000</option>
                      <option value="over-2000" className="text-gray-900 bg-white">2000+</option>
                    </select>
                  </div>
                </div>
                </div>

                {/* Logistics Needs - Full Width */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Logistics Needs</h4>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Primary Business Challenge in Logistics * (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'high-costs', label: 'High shipping costs' },
                        { value: 'slow-delivery', label: 'Slow delivery times' },
                        { value: 'customs', label: 'Customs clearance issues' },
                        { value: 'no-tracking', label: 'Lack of tracking' },
                        { value: 'damaged-goods', label: 'Damaged/Lost goods' },
                        { value: 'other', label: 'Other' },
                        { value: 'none', label: 'None' }
                      ].map((challenge) => (
                        <label key={challenge.value} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            value={challenge.value}
                            checked={formData.logisticsChallenges.includes(challenge.value)}
                            onChange={(e) => {
                              const value = e.target.value;
                              setFormData(prev => ({
                                ...prev,
                                logisticsChallenges: e.target.checked 
                                  ? [...prev.logisticsChallenges, value]
                                  : prev.logisticsChallenges.filter(c => c !== value)
                              }));
                            }}
                            className="rounded border-gray-600 text-red-600 focus:ring-red-500"
                          />
                          <span className="text-white text-sm">{challenge.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.logisticsChallenges.includes('other') && (
                    <div>
                      <label htmlFor="otherChallenge" className="block text-sm font-medium mb-2">
                        Please describe other challenges
                      </label>
                      <input
                        type="text"
                        id="otherChallenge"
                        name="otherChallenge"
                        value={formData.otherChallenge}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                        placeholder="Describe your other logistics challenges"
                      />
                </div>
                  )}

                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Briefly describe your needs *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-white/10 backdrop-blur-sm text-white rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                      placeholder="Tell us about your specific needs and requirements"
                    required
                  />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-all duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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
