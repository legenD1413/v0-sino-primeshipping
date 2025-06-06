"use client"

import React, { useState, useEffect } from "react"
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
  id: number
  question: string
  answer: string
  category: string
  searchable_text?: string
  is_popular?: boolean
  is_active?: boolean
  sort_order?: number
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("general")
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>([])
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [popularQuestions, setPopularQuestions] = useState<FAQItem[]>([])
  const [allFAQs, setAllFAQs] = useState<FAQItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // 从API获取FAQ数据
  const fetchFAQs = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/faq?active=true&limit=100')
      const result = await response.json()
      
      if (result.success) {
        setAllFAQs(result.data)
        setPopularQuestions(result.data.filter((item: FAQItem) => item.is_popular))
      } else {
        console.error('获取FAQ失败:', result.error)
      }
    } catch (error) {
      console.error('获取FAQ失败:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // 初始化加载数据
  useEffect(() => {
    fetchFAQs()
  }, [])

  // Filter FAQs based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      // If no search query, show all FAQs for the active tab
      setFilteredFAQs(allFAQs.filter((item) => item.category === activeTab))
      setExpandedItems([])
      return
    }

    const query = searchQuery.toLowerCase().trim()
    const filtered = allFAQs.filter((item) => {
      return (
        item.question.toLowerCase().includes(query) ||
        (item.searchable_text && item.searchable_text.toLowerCase().includes(query))
      )
    })

    setFilteredFAQs(filtered)

    // Auto-expand items that match the search
    setExpandedItems(filtered.map((item) => item.id.toString()))

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
  }, [searchQuery, activeTab, allFAQs])

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

  // Helper function to render HTML content safely
  const renderAnswerHTML = (htmlContent: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  }

  // Render FAQ content with highlighted text
  const renderFAQContent = (content: string, highlight: string): React.ReactNode => {
    if (!highlight.trim()) {
      return renderAnswerHTML(content)
    }

    // For highlighted search, we'll use the plain text version
    return <HighlightText text={content.replace(/<[^>]*>/g, '')} highlight={highlight} />
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading FAQ...</p>
        </div>
      </div>
    )
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
          {!searchQuery && popularQuestions.length > 0 && (
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
                            setExpandedItems([...expandedItems, item.id.toString()])
                            document.getElementById(item.id.toString())?.scrollIntoView({ behavior: "smooth" })
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
                            value={item.id.toString()}
                            id={item.id.toString()}
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
                                {searchQuery ? renderFAQContent(item.answer, searchQuery) : renderAnswerHTML(item.answer)}
                                <FAQFeedback questionId={item.id.toString()} question={item.question} />
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
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hidden">
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
