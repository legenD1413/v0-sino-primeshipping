import { Headphones, Clock, Calendar, Share2, Download, ArrowLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import AudioPlayer from "@/components/audio-player"

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
    audioUrl: "/podcasts/global-supply-chain-disruptions.mp3",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["Wei Li - Supply Chain Management Expert"],
    transcript: `
      <p><strong>Mark:</strong> Welcome to the SinoPrime Shipping Podcast. I'm your host, Mark Zhang.</p>
      
      <p><strong>Sarah:</strong> And I'm Sarah Johnson. Today, we're discussing a topic that's been affecting businesses worldwide: global supply chain disruptions.</p>
      
      <p><strong>Mark:</strong> That's right, Sarah. The past few years have seen unprecedented challenges in global supply chains, from the pandemic to geopolitical tensions and natural disasters.</p>
      
      <p><strong>Sarah:</strong> To help us understand these issues and explore potential solutions, we're joined by Wei Li, a supply chain management expert with over 15 years of experience in international logistics.</p>
      
      <p><strong>Mark:</strong> Wei, welcome to the podcast.</p>
      
      <p><strong>Wei:</strong> Thank you for having me, Mark and Sarah. It's a pleasure to be here.</p>
      
      <p><strong>Mark:</strong> Let's start with the basics. What are the main causes of the supply chain disruptions we've been seeing globally?</p>
      
      <p><strong>Wei:</strong> That's a great question. The disruptions we're experiencing are the result of multiple factors converging simultaneously. The COVID-19 pandemic was certainly the initial trigger, causing factory shutdowns, labor shortages, and transportation restrictions. But we're also dealing with pre-existing structural issues in global supply chains that were exposed by the pandemic.</p>
      
      <p><strong>Wei:</strong> These include the just-in-time inventory systems that many companies relied on, which left little room for error, as well as the concentration of manufacturing in certain regions, creating single points of failure.</p>
      
      <p><strong>Sarah:</strong> And how have these disruptions impacted businesses differently across various industries?</p>
      
      <p><strong>Wei:</strong> The impacts have varied widely. Industries with complex supply chains, like automotive and electronics, were hit particularly hard due to their reliance on semiconductors and specialized components. Retail and consumer goods faced challenges with inventory management and fulfillment. Healthcare struggled with critical supplies during the pandemic.</p>
      
      <p><strong>Wei:</strong> E-commerce businesses saw a surge in demand but faced fulfillment challenges. The impacts also varied by company size - smaller businesses often had less leverage with suppliers and fewer resources to adapt quickly.</p>
      
      <p><strong>Mark:</strong> What strategies have you seen companies implement successfully to address these challenges?</p>
    `,
    showNotes: [
      "Introduction to global supply chain disruptions",
      "Main causes: pandemic, geopolitical tensions, natural disasters",
      "Impact on different industries and business sizes",
      "Successful adaptation strategies",
      "Future trends in supply chain management",
      "Recommendations for businesses to build resilience",
    ],
    topics: ["Supply Chain", "Risk Management", "Global Logistics", "Business Strategy"],
    relatedEpisodes: ["002", "005"],
  },
  {
    id: "002",
    title: "Cross-Border E-commerce Logistics Optimization: From China to Global Markets",
    description:
      "This episode explores how cross-border e-commerce sellers can optimize their logistics processes from China to global markets, reducing costs and improving customer satisfaction.",
    date: "2023-12-01",
    duration: "38:15",
    image: "/podcast-ecommerce.png",
    audioUrl: "/podcasts/cross-border-ecommerce-logistics.mp3",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["Lily Wang - Cross-Border E-commerce Consultant"],
    transcript: `
      <p><strong>Mark:</strong> Welcome to another episode of the SinoPrime Shipping Podcast. I'm Mark Zhang.</p>
      
      <p><strong>Sarah:</strong> And I'm Sarah Johnson. Today we're diving into cross-border e-commerce logistics, specifically focusing on optimizing shipments from China to global markets.</p>
      
      <p><strong>Mark:</strong> This is a topic that's relevant to so many businesses today, from small Shopify store owners to large marketplace sellers.</p>
      
      <p><strong>Sarah:</strong> Absolutely. And to help us navigate this complex topic, we're joined by Lily Wang, a cross-border e-commerce consultant who has helped hundreds of businesses optimize their international logistics.</p>
    `,
    showNotes: [
      "Introduction to cross-border e-commerce logistics",
      "Common challenges when shipping from China",
      "Strategies for cost optimization",
      "Improving delivery times and customer satisfaction",
      "Technology solutions for better logistics management",
      "Case studies of successful e-commerce businesses",
    ],
    topics: ["E-commerce", "Cross-Border Logistics", "China Exports", "Last-Mile Delivery"],
    relatedEpisodes: ["001", "004"],
  },
  {
    id: "003",
    title: "FCL vs LCL: How to Choose the Best Shipping Method for Your Cargo",
    description:
      "An in-depth analysis of the advantages and disadvantages of Full Container Load and Less than Container Load shipping, helping importers and exporters choose the most suitable shipping method for their cargo.",
    date: "2024-01-10",
    duration: "42:37",
    image: "/podcast-fcl-lcl.png",
    audioUrl: "/podcasts/fcl-vs-lcl.mp3",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["Michael Chen - International Freight Expert"],
    transcript: `
      <p><strong>Mark:</strong> Welcome to the SinoPrime Shipping Podcast. I'm Mark Zhang.</p>
      
      <p><strong>Sarah:</strong> And I'm Sarah Johnson. Today we're tackling one of the most common questions we get from our clients: Should I ship FCL or LCL?</p>
      
      <p><strong>Mark:</strong> That's right. Full Container Load versus Less than Container Load is a decision that can significantly impact your shipping costs, transit times, and overall logistics strategy.</p>
      
      <p><strong>Sarah:</strong> To help us break down this topic, we're joined by Michael Chen, an international freight expert with over 20 years of experience in the industry.</p>
    `,
    showNotes: [
      "Defining FCL and LCL shipping",
      "Cost comparison and breakeven points",
      "Transit time differences",
      "Risk factors and cargo security",
      "Environmental considerations",
      "Decision framework for choosing between FCL and LCL",
    ],
    topics: ["Ocean Freight", "Container Shipping", "Import/Export", "Cost Optimization"],
    relatedEpisodes: ["001", "005"],
  },
  {
    id: "004",
    title: "Amazon FBA Logistics Strategies: Secrets to Maximizing Profits",
    description:
      "This episode discusses how Amazon sellers can optimize their FBA logistics strategies to reduce costs and increase profit margins.",
    date: "2024-02-05",
    duration: "51:08",
    image: "/podcast-amazon-fba.png",
    audioUrl: "/podcasts/amazon-fba-logistics.mp3",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["Emily Wang - Amazon Logistics Specialist"],
    transcript: `
      <p><strong>Mark:</strong> Welcome to the SinoPrime Shipping Podcast. I'm Mark Zhang.</p>
      
      <p><strong>Sarah:</strong> And I'm Sarah Johnson. Today we're focusing on Amazon FBA logistics strategies and how sellers can maximize their profits.</p>
      
      <p><strong>Mark:</strong> Amazon's Fulfillment by Amazon program has revolutionized e-commerce, but it also comes with its own set of challenges and costs.</p>
      
      <p><strong>Sarah:</strong> To help us navigate these challenges, we're joined by Emily Wang, an Amazon logistics specialist who has helped countless sellers optimize their FBA operations.</p>
    `,
    showNotes: [
      "Introduction to Amazon FBA logistics",
      "Common FBA fees and how to minimize them",
      "Inventory management strategies",
      "Prep and shipping best practices",
      "International FBA considerations",
      "Case studies of successful FBA sellers",
    ],
    topics: ["Amazon FBA", "E-commerce", "Inventory Management", "Profit Optimization"],
    relatedEpisodes: ["002", "005"],
  },
  {
    id: "005",
    title: "Sustainable Logistics: The Future of Green Supply Chains",
    description:
      "Exploring sustainable development trends in the logistics industry and how businesses can implement environmentally friendly logistics strategies to reduce their carbon footprint.",
    date: "2024-03-20",
    duration: "47:55",
    image: "/podcast-sustainable-logistics.png",
    audioUrl: "/podcasts/sustainable-logistics.mp3",
    hosts: ["Mark Zhang", "Sarah Johnson"],
    guests: ["David Liu - Sustainable Logistics Consultant"],
    transcript: `
      <p><strong>Mark:</strong> Welcome to the SinoPrime Shipping Podcast. I'm Mark Zhang.</p>
      
      <p><strong>Sarah:</strong> And I'm Sarah Johnson. Today we're exploring a topic that's becoming increasingly important in our industry: sustainable logistics and green supply chains.</p>
      
      <p><strong>Mark:</strong> That's right. As environmental concerns grow, businesses are under increasing pressure to reduce their carbon footprint, and logistics is a major contributor to global emissions.</p>
      
      <p><strong>Sarah:</strong> To help us understand how companies can make their supply chains more sustainable, we're joined by David Liu, a sustainable logistics consultant who has worked with businesses of all sizes to implement green logistics strategies.</p>
    `,
    showNotes: [
      "The environmental impact of logistics operations",
      "Regulatory trends and compliance requirements",
      "Sustainable transportation options",
      "Warehouse and packaging sustainability",
      "Measuring and reporting carbon footprint",
      "The business case for sustainable logistics",
    ],
    topics: ["Sustainability", "Green Logistics", "Carbon Footprint", "Environmental Compliance"],
    relatedEpisodes: ["001", "003"],
  },
]

function generateMetadata({ params }: { params: { id: string } }) {
  const podcast = podcasts.find((p) => p.id === params.id)
  if (!podcast) {
    return {
      title: "Podcast Episode Not Found | SinoPrime Shipping",
      description: "The requested podcast episode could not be found.",
    }
  }

  return {
    title: `${podcast.title} | SinoPrime Shipping Podcast`,
    description: podcast.description,
  }
}

export default function PodcastEpisodePage({ params }: { params: { id: string } }) {
  const podcast = podcasts.find((p) => p.id === params.id)

  if (!podcast) {
    notFound()
  }

  // Find related podcasts
  const relatedPodcasts = podcasts.filter((p) => podcast.relatedEpisodes.includes(p.id))

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back to podcasts link */}
      <Link href="/podcast" className="inline-flex items-center text-blue-700 hover:text-blue-900 mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        Back to all episodes
      </Link>

      {/* Podcast header */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 lg:w-1/4 relative">
            <div className="aspect-square md:aspect-auto md:h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Headphones className="w-24 h-24 text-white opacity-75" />
              </div>
            </div>
          </div>
          <div className="p-6 md:w-2/3 lg:w-3/4">
            <div className="flex flex-wrap gap-2 mb-4">
              {podcast.topics.map((topic) => (
                <span key={topic} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {topic}
                </span>
              ))}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{podcast.title}</h1>
            <p className="text-gray-600 mb-4">{podcast.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formatDate(podcast.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{podcast.duration}</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-1">Hosts: {podcast.hosts.join(", ")}</div>
              <div className="text-sm text-gray-500">Guests: {podcast.guests.join(", ")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Audio player */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md mb-8">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Listen to this Episode</h2>
          <AudioPlayer audioUrl={podcast.audioUrl} title={podcast.title} />
          <div className="flex justify-end mt-4 space-x-2">
            <button className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Show notes */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md mb-8">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Show Notes</h2>
          <ul className="space-y-2">
            {podcast.showNotes.map((note, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Transcript */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md mb-8">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Transcript</h2>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: podcast.transcript }} />
        </div>
      </div>

      {/* Related episodes */}
      {relatedPodcasts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Episodes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPodcasts.map((relatedPodcast) => (
              <Link
                key={relatedPodcast.id}
                href={`/podcast/${relatedPodcast.id}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex">
                  <div className="w-1/4 relative">
                    <div className="aspect-square relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Headphones className="w-8 h-8 text-white opacity-75" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 w-3/4">
                    <h3 className="font-bold text-sm mb-1 group-hover:text-blue-700 transition-colors line-clamp-2">
                      {relatedPodcast.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{relatedPodcast.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Subscribe section */}
      <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
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
