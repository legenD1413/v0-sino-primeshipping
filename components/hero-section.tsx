"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative bg-[#1e3a8a] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/hero-logistics-background.png"
            alt="China to North America logistics network"
            fill
            priority
            className={`object-cover object-center transition-opacity duration-700 ${
              imageLoaded ? "opacity-15" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-[#1e3a8a] opacity-85" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
            {/* Trusted partner badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1e3a8a]/50 border border-blue-300/30 text-white mb-8">
              <span className="text-yellow-400 mr-2">★</span>
              <span>Your Trusted China-to-North America Logistics Partner</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              You focus on your
              <span className="block">business,</span>
              <span className="text-blue-300 block">we handle the logistics</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              Your Dedicated China Logistics Partner for North American B2C &amp; B2B Needs: We simplify the entire
              China sourcing-to-NA delivery chain for everything from e-commerce parcels to commercial freight, ensuring
              efficient &amp; reliable arrival.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-6 py-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/solutions"
                className="inline-flex justify-center items-center px-6 py-3 rounded bg-transparent hover:bg-blue-800/50 text-white font-medium border border-blue-400/30 transition-colors"
              >
                Consult Logistics Solutions
              </Link>
            </div>
          </div>

          {/* Right side image placeholder - can be replaced with actual content */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gray-100/10 rounded-lg flex items-center justify-center">
              {/* This is where you can place your actual image or content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
