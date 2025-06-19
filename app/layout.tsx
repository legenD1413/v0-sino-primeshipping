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
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SinoPrime Shipping | International Logistics Solutions",
  description: "Professional international logistics and shipping solutions from China to worldwide destinations",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
    generator: 'v0.dev'
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
