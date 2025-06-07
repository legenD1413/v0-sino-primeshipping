"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Package,
  Send,
  Globe,
  CheckCircle,
  ArrowRight,
  Truck,
  Plane,
  Ship,
  FileText,
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react"

export default function GetQuotePage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  // 表单状态管理
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategories: '',
    ecommercePlatforms: '',
    originCountry: 'china',
    destinationCountry: [] as string[],
    shippingMethod: [] as string[],
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
    if (!formData.fullName || !formData.email || !formData.company || !formData.country || !formData.productCategories || !formData.ecommercePlatforms || formData.destinationCountry.length === 0 || formData.shippingMethod.length === 0 || !formData.description) {
      setSubmitStatus('error')
      setSubmitMessage('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/get-quote/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Quote request submitted successfully! We will contact you soon.')
        // 清空表单
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          country: '',
          productCategories: '',
          ecommercePlatforms: '',
          originCountry: 'china',
          destinationCountry: [] as string[],
          shippingMethod: [] as string[],
          description: ''
        })
        // 跳转到感谢页面
        setTimeout(() => {
          router.push('/get-quote/thank-you-quote')
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
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-16 min-h-[375px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/express-service-hero.png"
            alt="Professional Shipping Quote Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Add dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 py-24 px-6 md:px-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get Your Professional Quote</h1>
            <p className="text-xl md:text-2xl font-light">
              Comprehensive international shipping solutions tailored for sellers, influencers, and creators. 
              Get personalized logistics strategies from China to North America.
            </p>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Comprehensive Quote & Consultation Services</h2>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Dear Valued Seller/Influencer/Creator,</h3>
          
          <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
              Greetings! We understand that in today's competitive e-commerce landscape, efficient, reliable, and cost-effective logistics are crucial to your success. To accurately grasp your unique requirements and provide truly <span className="font-semibold text-blue-600">"tailor-made"</span> professional logistics solutions, we sincerely invite you to take a few minutes to complete the following form.
            </p>
            
            <div>
              <p className="font-medium text-gray-900 mb-2">Your valuable information will enable us to:</p>
              <ul className="space-y-1 pl-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong className="text-gray-900">Gain a deeper understanding of your business characteristics and pain points.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong className="text-gray-900">Design logistics routes and service combinations that better fit your actual operations.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong className="text-gray-900">Offer proactive advice to help you optimize your supply chain and enhance customer satisfaction.</strong></span>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="font-medium text-gray-900 mb-2">By completing this form, you'll have the opportunity to receive:</p>
              <ul className="space-y-1 pl-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>A <strong className="text-gray-900">personalized logistics strategy analysis.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>A chance to <strong className="text-gray-900">connect with a senior logistics expert.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong className="text-gray-900">Preliminary solution suggestions</strong> for your current challenges.</span>
                </li>
              </ul>
            </div>
            
            <p className="text-center font-medium text-blue-700 bg-blue-50 rounded-lg p-3">
              We promise that all your information will be kept strictly confidential and used solely to provide you with superior service. <strong className="text-blue-900">Let's work together to empower your business dreams through more professional, detailed, and customized logistics services!</strong>
            </p>
            
            <p className="text-center text-gray-600 italic">
              Thank you for your time and participation!
            </p>
          </div>
        </div>
      </div>







      {/* Detailed Quote Form */}
      <div id="quote-form-details" className="bg-gray-50 rounded-xl p-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request Your Professional Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Fill out the form below and our team will provide you with a customized quote within 24 hours
            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="flex items-center border-b border-gray-200 pb-3">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="text-xl font-semibold text-gray-900">Contact Information</h4>
                  </div>
                  
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Store Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your company or store name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                      <span className="text-gray-500 text-xs ml-1">(Optional, for quick contact)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      required
                    >
                      <option value="" disabled>Select your country</option>
                      <option value="usa">United States</option>
                      <option value="canada">Canada</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-6">
                  <div className="flex items-center border-b border-gray-200 pb-3">
                    <Package className="h-6 w-6 text-blue-600 mr-3" />
                    <h4 className="text-xl font-semibold text-gray-900">Business Information</h4>
                  </div>

                  <div>
                    <label htmlFor="productCategories" className="block text-sm font-medium text-gray-700 mb-2">
                      Main Product Categories *
                    </label>
                    <select
                      id="productCategories"
                      name="productCategories"
                      value={formData.productCategories}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      required
                    >
                      <option value="" disabled>Select a product category</option>
                      <option value="bike-vehicle">Bike & Vehicle</option>
                      <option value="books">Books</option>
                      <option value="clothing-shoes-accessories">Clothing, Shoes & Accessories</option>
                      <option value="computers-tablets-networking">Computers/Tablets & Networking</option>
                      <option value="consumer-electronics">Consumer Electronics</option>
                      <option value="cosmetics-skincare">Cosmetics & Skincare</option>
                      <option value="garden">Garden</option>
                      <option value="health-beauty">Health & Beauty</option>
                      <option value="home-decoration">Home & Decoration</option>
                      <option value="jewelry-watch">Jewelry & Watch</option>
                      <option value="kitchenware">Kitchenware</option>
                      <option value="pet-supplies">Pet Supplies</option>
                      <option value="sports-fitness-outdoors">Sports/Fitness & Outdoors</option>
                      <option value="toys-games">Toys & Games</option>
                      <option value="others">Others</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="ecommercePlatforms" className="block text-sm font-medium text-gray-700 mb-2">
                      Your eCommerce platforms *
                    </label>
                    <select
                      id="ecommercePlatforms"
                      name="ecommercePlatforms"
                      value={formData.ecommercePlatforms}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      required
                    >
                      <option value="" disabled>Select your eCommerce platform</option>
                      <option value="shopify">Shopify</option>
                      <option value="amazon">Amazon</option>
                      <option value="wordpress">WordPress</option>
                      <option value="bigcommerce">BigCommerce</option>
                      <option value="wix">Wix</option>
                      <option value="ebay">Ebay</option>
                      <option value="etsy">Etsy</option>
                      <option value="lazada">Lazada</option>
                      <option value="magento">Magento</option>
                      <option value="lcl-fcl">LCL/FCL</option>
                      <option value="crowdfunding">Crowdfunding</option>
                      <option value="individual-order">Individual Order</option>
                      <option value="none-other">None/other</option>
                    </select>
                  </div>

                  <div className="hidden">
                    <label htmlFor="originCountry" className="block text-sm font-medium text-gray-700 mb-2">
                      Goods Originating Country *
                    </label>
                    <select
                      id="originCountry"
                      name="originCountry"
                      value={formData.originCountry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      required
                    >
                      <option value="china">China</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Destination Country/Region * (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'usa', label: 'United States' },
                        { value: 'canada', label: 'Canada' },
                        { value: 'usa-canada', label: 'United States and Canada' },
                        { value: 'other', label: 'Other' }
                      ].map((destination) => (
                        <label key={destination.value} className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            value={destination.value}
                            checked={formData.destinationCountry.includes(destination.value)}
                            onChange={(e) => {
                              const value = e.target.value;
                              setFormData(prev => ({
                                ...prev,
                                destinationCountry: e.target.checked 
                                  ? [...prev.destinationCountry, value]
                                  : prev.destinationCountry.filter(d => d !== value)
                              }));
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-700 text-sm group-hover:text-blue-600 transition-colors">{destination.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Preferred Shipping Method * (Select all that apply)
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'fba-prep', label: 'FBA Prep & Ship Services' },
                        { value: 'dtc-shipping', label: 'DTC Shipping' },
                        { value: 'international-express', label: 'International Express' },
                        { value: 'warehousing', label: 'Warehousing & Fulfillment' },
                        { value: 'lcl-door', label: 'LCL to Door' },
                        { value: 'fcl-door', label: 'FCL to Door' },
                        { value: 'air-freight', label: 'Air Freight to Door' }
                      ].map((method) => (
                        <label key={method.value} className="flex items-center space-x-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            value={method.value}
                            checked={formData.shippingMethod.includes(method.value)}
                            onChange={(e) => {
                              const value = e.target.value;
                              setFormData(prev => ({
                                ...prev,
                                shippingMethod: e.target.checked 
                                  ? [...prev.shippingMethod, value]
                                  : prev.shippingMethod.filter(m => m !== value)
                              }));
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-700 text-sm group-hover:text-blue-600 transition-colors">{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description - Full Width */}
              <div className="space-y-4">
                <div className="flex items-center border-b border-gray-200 pb-3">
                  <FileText className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Additional Details</h4>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Briefly describe your needs *
                  </label>
                  <p className="text-gray-600 text-sm mb-3">
                    Kindly complete the details. I understand that a thorough comprehension of your requirements is essential for me to deliver simple, effective service.
                  </p>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Please describe your specific shipping needs, volume requirements, timeline, special handling requirements, or any other relevant details..."
                    required
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Submit Quote Request
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
                
                {/* Success/Error Messages - Moved below the submit button */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      {submitMessage}
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <div className="flex items-center">
                      <div className="h-5 w-5 mr-2 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white text-xs">!</span>
                      </div>
                      {submitMessage}
                    </div>
                  </div>
                )}
                
                <p className="text-gray-600 text-sm text-center mt-3">
                  We'll respond to your quote request within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">What You'll Receive with Your Quote</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personalized Analysis */}
          <Card className="border-t-4 border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-500" />
                Personalized Logistics Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Detailed cost analysis for your specific routes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Transit time comparisons across different shipping methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Risk assessment and mitigation strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Customs and compliance guidance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Expert Consultation */}
          <Card className="border-t-4 border-green-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-green-500" />
                Expert Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">One-on-one consultation with senior logistics experts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Business-specific recommendations and strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Supply chain optimization suggestions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Long-term partnership opportunities</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Solution Recommendations */}
          <Card className="border-t-4 border-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="mr-2 h-5 w-5 text-purple-500" />
                Solution Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Customized shipping method selection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Warehouse and fulfillment center recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Technology integration suggestions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Cost optimization strategies</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Implementation Support */}
          <Card className="border-t-4 border-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-orange-500" />
                Implementation Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Step-by-step implementation guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Ongoing support during transition period</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Performance monitoring and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">24/7 customer support access</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 