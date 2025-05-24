"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Search,
  X,
  ArrowUp,
  ChevronRight,
  Globe,
  Ship,
  FileCheck,
  DollarSign,
  Package,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HighlightText } from "@/components/highlight-text"
import { FAQFeedback } from "@/components/faq-feedback"
import { FAQCategoryIcon } from "@/components/faq-category-icon"
import { cn } from "@/lib/utils"

// FAQ data structure
interface FAQItem {
  id: string
  question: string
  answer: React.ReactNode
  category: string
  searchableText?: string // Added for search purposes
  popular?: boolean
}

// Helper function to extract searchable text from React nodes
function getSearchableText(node: React.ReactNode): string {
  if (typeof node === "string") {
    return node
  }

  if (Array.isArray(node)) {
    return node.map(getSearchableText).join(" ")
  }

  if (node && typeof node === "object" && "props" in node) {
    const { children } = node.props || {}
    return getSearchableText(children)
  }

  return ""
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("general")
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>([])
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [popularQuestions, setPopularQuestions] = useState<FAQItem[]>([])

  // Define all FAQ items
  const faqItems: FAQItem[] = [
    // General Questions
    {
      id: "general-1",
      question: "What is SinoPrime Shipping?",
      answer: (
        <div>
          SinoPrime Shipping is a comprehensive international logistics provider specializing in shipping solutions from
          China to global destinations. We offer a wide range of services including FCL and LCL ocean freight, air
          freight, express shipping, FBA preparation, and overseas warehousing solutions.
        </div>
      ),
      category: "general",
      searchableText:
        "SinoPrime Shipping is a comprehensive international logistics provider specializing in shipping solutions from China to global destinations. We offer a wide range of services including FCL and LCL ocean freight, air freight, express shipping, FBA preparation, and overseas warehousing solutions.",
      popular: true,
    },
    {
      id: "general-2",
      question: "Which countries do you ship to?",
      answer: (
        <div>
          We ship to over 200 countries and territories worldwide, with particularly strong networks in North America,
          Europe, Australia, Southeast Asia, and the Middle East. Our global logistics network ensures reliable delivery
          to virtually any destination.
        </div>
      ),
      category: "general",
      searchableText:
        "We ship to over 200 countries and territories worldwide, with particularly strong networks in North America, Europe, Australia, Southeast Asia, and the Middle East. Our global logistics network ensures reliable delivery to virtually any destination.",
    },
    {
      id: "general-3",
      question: "How can I contact customer support?",
      answer: (
        <div>
          You can contact our customer support team through multiple channels:
          <ul className="list-disc pl-5 mt-2">
            <li>Email: support@sinoprimeshipping.com</li>
            <li>Phone: +1 (888) 123-4567</li>
            <li>Live Chat: Available on our website during business hours</li>
            <li>Contact Form: Fill out the form on our Contact page</li>
          </ul>
          Our support team is available Monday through Friday, 9:00 AM to 6:00 PM (GMT+8).
        </div>
      ),
      category: "general",
      searchableText:
        "You can contact our customer support team through multiple channels: Email: support@sinoprimeshipping.com Phone: +1 (888) 123-4567 Live Chat: Available on our website during business hours Contact Form: Fill out the form on our Contact page. Our support team is available Monday through Friday, 9:00 AM to 6:00 PM (GMT+8).",
    },
    {
      id: "general-4",
      question: "Do you have a minimum order requirement?",
      answer: (
        <div>
          Our minimum order requirements vary by service type:
          <ul className="list-disc pl-5 mt-2">
            <li>Express Shipping: No minimum</li>
            <li>Air Freight: 45kg minimum</li>
            <li>LCL Ocean Freight: 0.5 CBM minimum</li>
            <li>FCL Ocean Freight: No minimum (full container)</li>
          </ul>
          For smaller shipments, we recommend our express or small parcel services which have no minimum requirements.
        </div>
      ),
      category: "general",
      searchableText:
        "Our minimum order requirements vary by service type: Express Shipping: No minimum Air Freight: 45kg minimum LCL Ocean Freight: 0.5 CBM minimum FCL Ocean Freight: No minimum (full container). For smaller shipments, we recommend our express or small parcel services which have no minimum requirements.",
    },
    {
      id: "general-5",
      question: "What makes SinoPrime Shipping different from other logistics providers?",
      answer: (
        <div>
          SinoPrime Shipping differentiates itself through:
          <ul className="list-disc pl-5 mt-2">
            <li>Specialized China-to-global shipping expertise</li>
            <li>Comprehensive end-to-end logistics solutions</li>
            <li>Dedicated account managers for personalized service</li>
            <li>Advanced tracking and visibility systems</li>
            <li>Competitive rates through established carrier relationships</li>
            <li>Value-added services like FBA preparation and overseas warehousing</li>
            <li>Multilingual support team with deep industry knowledge</li>
          </ul>
          Our focus is on creating customized logistics solutions that address your specific business needs.
        </div>
      ),
      category: "general",
      searchableText:
        "SinoPrime Shipping differentiates itself through: Specialized China-to-global shipping expertise Comprehensive end-to-end logistics solutions Dedicated account managers for personalized service Advanced tracking and visibility systems Competitive rates through established carrier relationships Value-added services like FBA preparation and overseas warehousing Multilingual support team with deep industry knowledge. Our focus is on creating customized logistics solutions that address your specific business needs.",
    },

    // Shipping & Logistics
    {
      id: "shipping-1",
      question: "What shipping methods do you offer?",
      answer: (
        <div>
          We offer multiple shipping methods to meet different needs:
          <ul className="list-disc pl-5 mt-2">
            <li>Express Shipping (3-5 days)</li>
            <li>Air Freight (5-8 days)</li>
            <li>Sea-Air Combined (12-15 days)</li>
            <li>LCL Ocean Freight (25-35 days)</li>
            <li>FCL Ocean Freight (25-40 days)</li>
            <li>Rail Freight (18-22 days to Europe)</li>
            <li>Special Cargo Solutions for oversized or dangerous goods</li>
          </ul>
          Delivery times vary based on destination and current logistics conditions.
        </div>
      ),
      category: "shipping",
      searchableText:
        "We offer multiple shipping methods to meet different needs: Express Shipping (3-5 days) Air Freight (5-8 days) Sea-Air Combined (12-15 days) LCL Ocean Freight (25-35 days) FCL Ocean Freight (25-40 days) Rail Freight (18-22 days to Europe) Special Cargo Solutions for oversized or dangerous goods. Delivery times vary based on destination and current logistics conditions.",
      popular: true,
    },
    {
      id: "shipping-2",
      question: "How long will my shipment take?",
      answer: (
        <div>
          Transit times depend on the shipping method and destination:
          <ul className="list-disc pl-5 mt-2">
            <li>Express: 3-5 business days worldwide</li>
            <li>Air Freight: 5-8 business days</li>
            <li>Sea-Air: 12-15 business days</li>
            <li>Ocean FCL/LCL to North America: 25-35 days</li>
            <li>Ocean FCL/LCL to Europe: 30-40 days</li>
            <li>Ocean FCL/LCL to Australia/NZ: 20-30 days</li>
            <li>Ocean FCL/LCL to Southeast Asia: 10-20 days</li>
            <li>Rail to Europe: 18-22 days</li>
          </ul>
          These are estimates and may vary due to customs clearance, port congestion, or seasonal factors. For the most
          accurate transit time for your specific route, please contact our team.
        </div>
      ),
      category: "shipping",
      searchableText:
        "Transit times depend on the shipping method and destination: Express: 3-5 business days worldwide Air Freight: 5-8 business days Sea-Air: 12-15 business days Ocean FCL/LCL to North America: 25-35 days Ocean FCL/LCL to Europe: 30-40 days Ocean FCL/LCL to Australia/NZ: 20-30 days Ocean FCL/LCL to Southeast Asia: 10-20 days Rail to Europe: 18-22 days. These are estimates and may vary due to customs clearance, port congestion, or seasonal factors. For the most accurate transit time for your specific route, please contact our team.",
    },
    {
      id: "shipping-3",
      question: "How can I track my shipment?",
      answer: (
        <div>
          You can track your shipment in several ways:
          <ul className="list-disc pl-5 mt-2">
            <li>Through our online tracking portal on our website</li>
            <li>Via our mobile app (iOS and Android)</li>
            <li>By email notifications (opt-in during booking)</li>
            <li>By contacting your account manager</li>
          </ul>
          All shipments receive a unique tracking number upon confirmation. Our system provides real-time updates at key
          milestones throughout the shipping journey.
        </div>
      ),
      category: "shipping",
      searchableText:
        "You can track your shipment in several ways: Through our online tracking portal on our website Via our mobile app (iOS and Android) By email notifications (opt-in during booking) By contacting your account manager. All shipments receive a unique tracking number upon confirmation. Our system provides real-time updates at key milestones throughout the shipping journey.",
    },
    {
      id: "shipping-4",
      question: "What's the difference between FCL and LCL shipping?",
      answer: (
        <div>
          <p>
            <strong>FCL (Full Container Load):</strong> You book an entire container exclusively for your cargo. This is
            ideal for larger shipments (typically over 15 CBM) or when you want to avoid co-loading with other shippers'
            goods.
          </p>

          <p className="mt-2">
            <strong>LCL (Less than Container Load):</strong> Your cargo shares container space with other shippers'
            goods. This is more economical for smaller shipments (0.5-15 CBM) but may have slightly longer transit times
            due to consolidation and deconsolidation processes.
          </p>

          <p className="mt-2">Key differences include:</p>
          <ul className="list-disc pl-5 mt-1">
            <li>Cost structure (FCL has fixed container rates; LCL charges by volume)</li>
            <li>Transit time (FCL is typically faster)</li>
            <li>Handling (LCL involves more handling of your goods)</li>
            <li>Security (FCL offers more security as only your goods are in the container)</li>
          </ul>

          <p className="mt-2">
            We can help you determine which option is most cost-effective based on your shipment size and requirements.
          </p>
        </div>
      ),
      category: "shipping",
      searchableText:
        "FCL (Full Container Load): You book an entire container exclusively for your cargo. This is ideal for larger shipments (typically over 15 CBM) or when you want to avoid co-loading with other shippers' goods. LCL (Less than Container Load): Your cargo shares container space with other shippers' goods. This is more economical for smaller shipments (0.5-15 CBM) but may have slightly longer transit times due to consolidation and deconsolidation processes. Key differences include: Cost structure (FCL has fixed container rates; LCL charges by volume) Transit time (FCL is typically faster) Handling (LCL involves more handling of your goods) Security (FCL offers more security as only your goods are in the container). We can help you determine which option is most cost-effective based on your shipment size and requirements.",
      popular: true,
    },
    {
      id: "shipping-5",
      question: "What should I do if my shipment is delayed?",
      answer: (
        <div>
          If your shipment is delayed:
          <ol className="list-decimal pl-5 mt-2">
            <li>Check the tracking information for status updates</li>
            <li>Contact your dedicated account manager for detailed information</li>
            <li>Request an estimated new delivery date</li>
            <li>Ask about alternative routing options if available</li>
          </ol>
          <p className="mt-2">
            Our team proactively monitors shipments and will typically notify you of significant delays before you need
            to inquire. We work diligently to minimize delays and find alternative solutions when disruptions occur.
          </p>
          <p className="mt-2">
            For time-sensitive shipments, we recommend selecting our premium services which include priority handling
            and expedited options in case of delays.
          </p>
        </div>
      ),
      category: "shipping",
      searchableText:
        "If your shipment is delayed: Check the tracking information for status updates Contact your dedicated account manager for detailed information Request an estimated new delivery date Ask about alternative routing options if available. Our team proactively monitors shipments and will typically notify you of significant delays before you need to inquire. We work diligently to minimize delays and find alternative solutions when disruptions occur. For time-sensitive shipments, we recommend selecting our premium services which include priority handling and expedited options in case of delays.",
    },

    // Customs & Compliance
    {
      id: "customs-1",
      question: "What documents are required for international shipping?",
      answer: (
        <div>
          Standard required documents include:
          <ul className="list-disc pl-5 mt-2">
            <li>Commercial Invoice</li>
            <li>Packing List</li>
            <li>Bill of Lading or Air Waybill</li>
            <li>Certificate of Origin (when applicable)</li>
            <li>Import/Export Declarations</li>
          </ul>
          <p className="mt-2">Depending on the product and destination, additional documents may be required:</p>
          <ul className="list-disc pl-5 mt-1">
            <li>Product certifications (CE, FDA, etc.)</li>
            <li>Material Safety Data Sheets (for chemicals)</li>
            <li>Fumigation certificates (for wooden packaging)</li>
            <li>Inspection certificates</li>
            <li>Special permits for restricted items</li>
          </ul>
          <p className="mt-2">
            Our customs compliance team can provide guidance on the specific documentation required for your shipment
            and destination.
          </p>
        </div>
      ),
      category: "customs",
      searchableText:
        "Standard required documents include: Commercial Invoice Packing List Bill of Lading or Air Waybill Certificate of Origin (when applicable) Import/Export Declarations. Depending on the product and destination, additional documents may be required: Product certifications (CE, FDA, etc.) Material Safety Data Sheets (for chemicals) Fumigation certificates (for wooden packaging) Inspection certificates Special permits for restricted items. Our customs compliance team can provide guidance on the specific documentation required for your shipment and destination.",
      popular: true,
    },

    // Pricing & Payment
    {
      id: "pricing-1",
      question: "How is shipping cost calculated?",
      answer: (
        <div>
          Shipping costs are calculated based on several factors:
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>For Express and Air Freight:</strong> Primarily based on chargeable weight (the greater of actual
              weight or dimensional weight)
            </li>
            <li>
              <strong>For LCL Ocean Freight:</strong> Based on volume (cubic meters or CBM)
            </li>
            <li>
              <strong>For FCL Ocean Freight:</strong> Fixed rate per container size (20ft, 40ft, 40ft HC)
            </li>
            <li>
              <strong>Additional factors affecting all shipments:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Origin and destination locations</li>
                <li>Service level selected (standard, expedited, etc.)</li>
                <li>Fuel surcharges and security fees</li>
                <li>Special handling requirements</li>
                <li>Insurance coverage</li>
                <li>Seasonal factors and market conditions</li>
              </ul>
            </li>
          </ul>
          <p className="mt-2">
            For accurate pricing, we recommend requesting a quote with your specific shipment details. Volume discounts
            are available for regular shippers.
          </p>
        </div>
      ),
      category: "pricing",
      searchableText:
        "Shipping costs are calculated based on several factors: For Express and Air Freight: Primarily based on chargeable weight (the greater of actual weight or dimensional weight) For LCL Ocean Freight: Based on volume (cubic meters or CBM) For FCL Ocean Freight: Fixed rate per container size (20ft, 40ft, 40ft HC) Additional factors affecting all shipments: Origin and destination locations Service level selected (standard, expedited, etc.) Fuel surcharges and security fees Special handling requirements Insurance coverage Seasonal factors and market conditions. For accurate pricing, we recommend requesting a quote with your specific shipment details. Volume discounts are available for regular shippers.",
      popular: true,
    },

    // Services & Solutions
    {
      id: "services-1",
      question: "What is your FBA preparation service?",
      answer: (
        <div>
          Our FBA (Fulfillment by Amazon) preparation service helps sellers meet Amazon's strict requirements before
          shipping to FBA warehouses. The service includes:
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>Inspection:</strong> Quality check of products against specifications
            </li>
            <li>
              <strong>Labeling:</strong> Application of Amazon FNSKU labels, warning labels, and expiration dates
            </li>
            <li>
              <strong>Packaging:</strong> Proper packaging according to Amazon requirements
            </li>
            <li>
              <strong>Bundling:</strong> Creating multi-packs or kits as needed
            </li>
            <li>
              <strong>Poly-bagging:</strong> Sealing products in compliant poly bags with suffocation warnings
            </li>
            <li>
              <strong>Box preparation:</strong> Proper carton labeling and packaging
            </li>
            <li>
              <strong>Shipment creation:</strong> Assistance with Amazon shipping plan creation
            </li>
            <li>
              <strong>Direct delivery:</strong> Shipping directly to Amazon fulfillment centers
            </li>
          </ul>
          <p className="mt-2">
            We have dedicated FBA prep facilities in China with staff trained in Amazon's latest requirements. This
            service helps prevent costly rejections, delays, and additional fees at Amazon warehouses.
          </p>
          <p className="mt-2">
            We can work with your existing suppliers or receive goods from multiple vendors for consolidation before FBA
            shipment.
          </p>
        </div>
      ),
      category: "services",
      searchableText:
        "Our FBA (Fulfillment by Amazon) preparation service helps sellers meet Amazon's strict requirements before shipping to FBA warehouses. The service includes: Inspection: Quality check of products against specifications Labeling: Application of Amazon FNSKU labels, warning labels, and expiration dates Packaging: Proper packaging according to Amazon requirements Bundling: Creating multi-packs or kits as needed Poly-bagging: Sealing products in compliant poly bags with suffocation warnings Box preparation: Proper carton labeling and packaging Shipment creation: Assistance with Amazon shipping plan creation Direct delivery: Shipping directly to Amazon fulfillment centers. We have dedicated FBA prep facilities in China with staff trained in Amazon's latest requirements. This service helps prevent costly rejections, delays, and additional fees at Amazon warehouses. We can work with your existing suppliers or receive goods from multiple vendors for consolidation before FBA shipment.",
      popular: true,
    },
  ]

  // Set up popular questions
  useEffect(() => {
    setPopularQuestions(faqItems.filter((item) => item.popular))
  }, [])

  // Filter FAQs based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      // If no search query, show all FAQs for the active tab
      setFilteredFAQs(faqItems.filter((item) => item.category === activeTab))
      setExpandedItems([])
      return
    }

    const query = searchQuery.toLowerCase().trim()
    const filtered = faqItems.filter((item) => {
      return (
        item.question.toLowerCase().includes(query) ||
        (item.searchableText && item.searchableText.toLowerCase().includes(query))
      )
    })

    setFilteredFAQs(filtered)

    // Auto-expand items that match the search
    setExpandedItems(filtered.map((item) => item.id))

    // If search results include items from other tabs, switch to the tab with most results
    if (filtered.length > 0) {
      const categoryCounts = filtered.reduce(
        (acc, item) => {
          acc[item.category] = (acc[item.category] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      )

      const mostFrequentCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0][0]
      setActiveTab(mostFrequentCategory)
    }
  }, [searchQuery, activeTab])

  // Handle scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Render FAQ items with highlighted text
  const renderFAQContent = (content: React.ReactNode, highlight: string): React.ReactNode => {
    if (!highlight.trim() || typeof content !== "object") {
      return content
    }

    // Clone the content and replace text nodes with highlighted versions
    return React.Children.map(content as React.ReactElement, (child) => {
      if (!child || typeof child !== "object") {
        return child
      }

      // If it's a text element or has no children, return as is
      if (!child.props || !child.props.children) {
        return child
      }

      // If children is a string, highlight it
      if (typeof child.props.children === "string") {
        return React.cloneElement(child, {
          ...child.props,
          children: <HighlightText text={child.props.children} highlight={highlight} />,
        })
      }

      // If children is an array or another React element, recursively process it
      return React.cloneElement(child, {
        ...child.props,
        children: renderFAQContent(child.props.children, highlight),
      })
    })
  }

  const categoryInfo = {
    general: {
      title: "General Questions",
      description: "Basic information about our company and services",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-700",
    },
    shipping: {
      title: "Shipping & Logistics",
      description: "Information about shipping methods, transit times, and tracking",
      icon: <Ship className="h-6 w-6" />,
      color: "bg-indigo-100 text-indigo-700",
    },
    customs: {
      title: "Customs & Compliance",
      description: "Documentation, regulations, and customs clearance",
      icon: <FileCheck className="h-6 w-6" />,
      color: "bg-green-100 text-green-700",
    },
    pricing: {
      title: "Pricing & Payment",
      description: "Cost calculation, payment methods, and insurance",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-700",
    },
    services: {
      title: "Services & Solutions",
      description: "Specialized services and logistics solutions",
      icon: <Package className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-700",
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/faq-header-bg.png')] bg-cover bg-center" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions about our shipping and logistics services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300" size={20} />
                <Input
                  type="search"
                  placeholder="Search for questions..."
                  className="pl-12 pr-12 py-6 w-full border-0 rounded-full shadow-lg text-gray-800 focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              {searchQuery ? (
                <p className="text-sm mt-2 text-blue-100">
                  <span className="font-medium">{filteredFAQs.length} results</span> found for "
                  <span className="font-medium">{searchQuery}</span>"
                </p>
              ) : (
                <p className="text-sm text-blue-200 mt-2">Type to search through our FAQ</p>
              )}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Popular Questions Section */}
          {!searchQuery && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {popularQuestions.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                  >
                    <div className="flex items-start">
                      <div
                        className={`p-2 rounded-full mr-3 ${categoryInfo[item.category as keyof typeof categoryInfo].color}`}
                      >
                        <FAQCategoryIcon category={item.category} size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">{item.question}</h3>
                        <Link
                          href={`#${item.id}`}
                          className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                          onClick={(e) => {
                            e.preventDefault()
                            setActiveTab(item.category)
                            setExpandedItems([...expandedItems, item.id])
                            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                          }}
                        >
                          View answer <ChevronRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category Tabs */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="bg-gray-50 p-4 border-b">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent">
                  {Object.entries(categoryInfo).map(([key, info]) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      className={cn(
                        "flex items-center justify-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg py-3",
                        "transition-all duration-200 hover:bg-gray-100 data-[state=active]:text-blue-700",
                      )}
                    >
                      <FAQCategoryIcon category={key} size={18} />
                      <span className="hidden md:inline">{info.title.split(" ")[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content */}
              {Object.entries(categoryInfo).map(([category, info]) => (
                <TabsContent key={category} value={category} className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <div className={`p-2 rounded-full mr-3 ${info.color}`}>{info.icon}</div>
                      <h2 className="text-2xl font-bold text-gray-800">{info.title}</h2>
                    </div>
                    <p className="text-gray-600 ml-12">{info.description}</p>
                  </div>

                  {filteredFAQs.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <div className="inline-block p-3 rounded-full bg-gray-100 mb-4">
                        <Search size={24} className="text-gray-400" />
                      </div>
                      <p className="text-gray-500 mb-4">No questions found matching your search.</p>
                      <Button variant="outline" onClick={() => setSearchQuery("")}>
                        Clear Search
                      </Button>
                    </div>
                  ) : (
                    <Accordion
                      type="multiple"
                      value={expandedItems}
                      onValueChange={setExpandedItems}
                      className="w-full space-y-4"
                    >
                      {filteredFAQs
                        .filter((item) => !searchQuery || item.category === category || searchQuery)
                        .map((item) => (
                          <AccordionItem
                            key={item.id}
                            value={item.id}
                            id={item.id}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                          >
                            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 data-[state=open]:bg-gray-50">
                              <div className="flex items-center text-left">
                                <HighlightText
                                  text={item.question}
                                  highlight={searchQuery}
                                  className="font-medium text-gray-800"
                                />
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 py-4 bg-white border-t border-gray-100">
                              <div className="prose max-w-none text-gray-700">
                                {searchQuery ? renderFAQContent(item.answer, searchQuery) : item.answer}
                                <FAQFeedback questionId={item.id} question={item.question} />
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                    </Accordion>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Contact Section */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Still have questions?</h3>
            <p className="mb-6 text-gray-600">Our team is ready to help with any questions not covered in our FAQ.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-blue-100 rounded-full mr-2">
                    <Mail size={18} className="text-blue-700" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Email Us</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">Get a response within 24 hours</p>
                <a
                  href="mailto:support@sinoprimeshipping.com"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  support@sinoprimeshipping.com
                </a>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-green-100 rounded-full mr-2">
                    <Phone size={18} className="text-green-700" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Call Us</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">Available 9AM-6PM (GMT+8)</p>
                <a href="tel:+18881234567" className="text-green-600 hover:text-green-800 text-sm font-medium">
                  +1 (888) 123-4567
                </a>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-purple-100 rounded-full mr-2">
                    <MessageSquare size={18} className="text-purple-700" />
                  </div>
                  <h4 className="font-semibold text-gray-800">Live Chat</h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">Chat with our support team</p>
                <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                  Start a conversation
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">Contact Support</Button>
              </Link>
              <Link href="/quote" className="inline-block">
                <Button variant="outline" className="w-full sm:w-auto border-blue-200 text-blue-700 hover:bg-blue-50">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  )
}
