import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CriticalImagesPreloader } from "@/components/critical-images-preloader"
import { StagewiseDevToolbar } from "@/components/stagewise-toolbar"
import AdminNav from "@/components/admin-nav"
import { Toaster } from "@/components/ui/toaster"
import GoogleAnalytics from "@/components/google-analytics"
import { StructuredData } from "@/components/structured-data"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SinoPrime Shipping | International Logistics Solutions",
  description: "Professional international logistics and shipping solutions from China to worldwide destinations. Expert FBA prep, LCL/FCL shipping, air freight, and customs clearance services.",
  keywords: [
    "international shipping",
    "logistics solutions", 
    "FBA prep services",
    "LCL shipping",
    "FCL shipping", 
    "air freight",
    "customs clearance",
    "China shipping",
    "supply chain management",
    "cross-border ecommerce"
  ],
  authors: [{ name: "SinoPrime Shipping Team" }],
  creator: "SinoPrime Shipping",
  publisher: "SinoPrime Shipping",
  metadataBase: new URL("https://sinoprimeshipping.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sinoprimeshipping.com",
    title: "SinoPrime Shipping | International Logistics Solutions",
    description: "Professional international logistics and shipping solutions from China to worldwide destinations. Expert FBA prep, LCL/FCL shipping, air freight, and customs clearance services.",
    siteName: "SinoPrime Shipping",
    images: [
      {
        url: "/business-logistics-hero5.png",
        width: 1200,
        height: 630,
        alt: "SinoPrime Shipping - International Logistics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SinoPrime Shipping | International Logistics Solutions",
    description: "Professional international logistics and shipping solutions from China to worldwide destinations.",
    images: ["/business-logistics-hero5.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // 请替换为您的Google验证码
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
  generator: 'Next.js',
  category: 'business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) - 紧跟在<body>开始标签后 */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCJRWMF2"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <CriticalImagesPreloader />
        <GoogleAnalytics />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <AdminNav />
          <Toaster />
        </ThemeProvider>
        <StagewiseDevToolbar />
      </body>
    </html>
  )
}
