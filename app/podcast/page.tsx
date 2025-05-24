"use client"

import { useState, useEffect } from "react"
import { Headphones, Clock, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import PodcastCategoryFilter from "@/components/podcast-category-filter"

// This would typically come from a database or API
const podcasts = [
  {
    id: "001",
    title: "Global Supply Chain Disruptions: Strategies and Solutions",
    description:
      "In this episode, we invite supply chain management experts to discuss the causes and impacts of global supply chain disruptions, and strategies businesses can adopt to address them.",
    date: "2023-11-15",
    duration: "45:22",
    image: "/podcast-supply-chain.png",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["Wei Li - Supply Chain Management Expert"],
    categories: ["Supply Chain", "Risk Management", "Global Logistics", "Business Strategy"],
  },
  {
    id: "002",
    title: "Cross-Border E-commerce Logistics Optimization: From China to Global Markets",
    description:
      "This episode explores how cross-border e-commerce sellers can optimize their logistics processes from China to global markets, reducing costs and improving customer satisfaction.",
    date: "2023-12-01",
    duration: "38:15",
    image: "/podcast-ecommerce.png",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["Lily Wang - Cross-Border E-commerce Consultant"],
    categories: ["E-commerce", "Cross-Border Logistics", "China Exports", "Last-Mile Delivery"],
  },
  {
    id: "003",
    title: "FCL vs LCL: How to Choose the Best Shipping Method for Your Cargo",
    description:
      "An in-depth analysis of the advantages and disadvantages of Full Container Load and Less than Container Load shipping, helping importers and exporters choose the most suitable shipping method for their cargo.",
    date: "2024-01-10",
    duration: "42:37",
    image: "/podcast-fcl-lcl.png",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["Michael Chen - International Freight Expert"],
    categories: ["Ocean Freight", "Container Shipping", "Import/Export", "Cost Optimization"],
  },
  {
    id: "004",
    title: "Amazon FBA Logistics Strategies: Secrets to Maximizing Profits",
    description:
      "This episode discusses how Amazon sellers can optimize their FBA logistics strategies to reduce costs and increase profit margins.",
    date: "2024-02-05",
    duration: "51:08",
    image: "/podcast-amazon-fba.png",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["Emily Wang - Amazon Logistics Specialist"],
    categories: ["Amazon FBA", "E-commerce", "Inventory Management", "Profit Optimization"],
  },
  {
    id: "005",
    title: "Sustainable Logistics: The Future of Green Supply Chains",
    description:
      "Exploring sustainable development trends in the logistics industry and how businesses can implement environmentally friendly logistics strategies to reduce their carbon footprint.",
    date: "2024-03-20",
    duration: "47:55",
    image: "/podcast-sustainable-logistics.png",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["David Liu - Sustainable Logistics Consultant"],
    categories: ["Sustainability", "Green Logistics", "Carbon Footprint", "Environmental Compliance"],
  },
  {
    id: "006",
    title: "Rail Freight Revolution: New Routes Between Asia and Europe",
    description:
      "Discover how the expanding rail network between China and Europe is transforming international shipping with faster transit times and competitive costs compared to ocean freight.",
    date: "2024-04-10",
    duration: "39:45",
    image: "/podcast-rail-freight.png",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["Robert Chen - Rail Freight Specialist"],
    categories: ["Rail Freight", "China-Europe Logistics", "Multimodal Transport", "Supply Chain"],
  },
  {
    id: "007",
    title: "Customs Compliance: Navigating International Trade Regulations",
    description:
      "Expert advice on managing customs compliance across different regions, avoiding delays and penalties, and streamlining your international shipping processes.",
    date: "2024-04-25",
    duration: "44:18",
    image: "/podcast-customs-compliance.png",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["Jennifer Wu - International Trade Compliance Expert"],
    categories: ["Customs Compliance", "International Trade", "Import/Export", "Regulatory Affairs"],
  },
]

export default function PodcastPage() {
  // Extract all unique categories
  const allCategories = Array.from(new Set(podcasts.flatMap((podcast) => podcast.categories))).sort()

  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [filteredPodcasts, setFilteredPodcasts] = useState(podcasts)

  // Filter podcasts when category changes
  useEffect(() => {
    if (activeCategory === null) {
      setFilteredPodcasts(podcasts)
    } else {
      setFilteredPodcasts(podcasts.filter((podcast) => podcast.categories.includes(activeCategory)))
    }
  }, [activeCategory])

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 z-0"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/podcast-pattern.png')] z-0"></div>
        <div className="relative z-10 px-6 py-16 md:py-24 md:px-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SinoPrime Shipping Podcast</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Deep insights into international logistics, supply chain management, and cross-border e-commerce
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full">
                <Headphones className="w-5 h-5 mr-2" />
                <span>{podcasts.length} Episodes</span>
              </div>
              <div className="flex items-center bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 mr-2" />
                <span>Monthly Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <PodcastCategoryFilter
        categories={allCategories}
        onCategoryChange={setActiveCategory}
        activeCategory={activeCategory}
      />

      {/* Podcast List */}
      <div className="space-y-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{activeCategory ? `${activeCategory} Episodes` : "Latest Episodes"}</h2>
          <div className="text-gray-500">
            {filteredPodcasts.length} {filteredPodcasts.length === 1 ? "episode" : "episodes"} found
          </div>
        </div>

        {filteredPodcasts.length === 0 ? (
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-medium mb-2">No episodes found</h3>
            <p className="text-gray-600 mb-4">We couldn't find any episodes in the "{activeCategory}" category.</p>
            <button
              onClick={() => setActiveCategory(null)}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              View all episodes
            </button>
          </div>
        ) : (
          filteredPodcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="md:flex">
                <div className="md:w-1/3 lg:w-1/4 relative">
                  <div className="aspect-square md:aspect-auto md:h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Headphones className="w-16 h-16 text-white opacity-75 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{podcast.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{formatDate(podcast.date)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:w-2/3 lg:w-3/4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {podcast.categories.slice(0, 3).map((category) => (
                      <span
                        key={category}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded cursor-pointer hover:bg-blue-200"
                        onClick={(e) => {
                          e.preventDefault()
                          setActiveCategory(category)
                        }}
                      >
                        {category}
                      </span>
                    ))}
                    {podcast.categories.length > 3 && (
                      <span className="text-xs text-gray-500 px-1">+{podcast.categories.length - 3} more</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{podcast.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Hosts: {podcast.hosts.join(", ")}</div>
                    <div className="text-sm text-gray-500">Guests: {podcast.guests.join(", ")}</div>
                  </div>
                  <Link
                    href={`/podcast/${podcast.id}`}
                    className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium"
                  >
                    Listen Now
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Subscribe Section */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
        <div className="md:flex items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-2">Subscribe to Our Podcast</h3>
            <p className="text-gray-600">
              Don't miss an episode! Subscribe to our podcast on your favorite platform to get the latest logistics and
              supply chain insights.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Image src="/apple-podcasts-icon.png" alt="Apple Podcasts" width={24} height={24} className="mr-2" />
              <span>Apple Podcasts</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Image src="/spotify-icon.png" alt="Spotify" width={24} height={24} className="mr-2" />
              <span>Spotify</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Image src="/google-podcasts-icon.png" alt="Google Podcasts" width={24} height={24} className="mr-2" />
              <span>Google Podcasts</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}
