"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { SubRegionIcon } from "@/components/sub-region-icon"
import { RegionImage } from "@/components/region-image"
// import { ResourceItemIcon } from "@/components/resource-item-icon"
import { ServiceIcon } from "@/components/service-icon"

// Update the regions object to rename FBA Services to Sino Services and Express & Fulfillment to Overseas Services
const regions = {
  B2C: {
    "Sino Services": ["FBA Prep & Ship", "Direct-to-Consumer Shipping", "Small Parcel Express", "Express"],
    "Warehouse Services": ["Overseas Warehousing & Fulfillment", "Returns Management"],
  },
  B2B: {
    "Ocean Freight": ["FCL to port", "FCL to Door", "LCL to Door"],
    "Air Freight": ["Air to Door", "Express"],
    //Clearance: [], // Removed "Customs Brokerage"
    //SOLUTIONS: ["Oversized Cargo", "Dangerous Goods", "Customs Brokerage"], // Added "Customs Brokerage", removed one "Oversized Cargo"
  },
}

// Update transportLogistics to split Shipping Modes into two columns
// Also update E-commerce Solution to use two columns
const transportLogistics = {
  "Shipping Modes": {
    "Ocean & Land": ["Sea Freight", "Rail Freight", "SPS DDP Service"],
    "Air & Express": ["Air Freight", "Express"],
  },
  "E-commerce Solution": {
    "Amazon Services": ["Amazon FBA Shipping", "Amazon FBA Preparation", "Amazon Seller Support", "FBA Prep Services"],
    "Online Business": ["Dropshipping", "Door to Door Service", "Returns Management", "Inventory Management"],
  },
  "Warehousing & Fulfillment": ["In Shenzhen", "In Shanghai", "In Yiwu", "In Ningbo"],
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeRegion, setActiveRegion] = useState<string>("B2C")
  const [activeSubRegion, setActiveSubRegion] = useState<string>("Sino Services") // Updated default sub-region
  const [activeCategory, setActiveCategory] = useState<string>("Shipping Modes")
  const [activeShippingSection, setActiveShippingSection] = useState<string>("Ocean & Land")
  const [activeEcommerceSection, setActiveEcommerceSection] = useState<string>("Amazon Services")

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(menu)
    }
  }

  // Update the handleRegionHover function to set the default sub-region for B2C to "Sino Services"
  const handleRegionHover = (region: string) => {
    setActiveRegion(region)
    // Set default sub-region when region changes
    if (region === "B2C")
      setActiveSubRegion("Sino Services") // Updated default sub-region
    else if (region === "B2B") setActiveSubRegion("Ocean Freight")
  }

  const handleSubRegionHover = (subRegion: string) => {
    setActiveSubRegion(subRegion)
  }

  const handleCategoryHover = (category: string) => {
    setActiveCategory(category)
  }

  const handleShippingSectionHover = (section: string) => {
    setActiveShippingSection(section)
  }

  const handleEcommerceSectionHover = (section: string) => {
    setActiveEcommerceSection(section)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (activeDropdown && !target.closest(".dropdown-container") && !target.closest(".dropdown-menu")) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setActiveDropdown(null)
    }
  }

  // Get countries for the active region
  const getActiveRegionCountries = () => {
    if (activeRegion === "B2C" || activeRegion === "B2B") {
      return regions[activeRegion as keyof typeof regions]
    }
    return regions[activeRegion as keyof typeof regions] || []
  }

  // Get services for the active category
  const getActiveCategoryServices = () => {
    if (activeCategory === "Shipping Modes") {
      return transportLogistics[activeCategory as keyof typeof transportLogistics] || {}
    }
    if (activeCategory === "E-commerce Solution") {
      return transportLogistics[activeCategory as keyof typeof transportLogistics] || {}
    }
    return transportLogistics[activeCategory as keyof typeof transportLogistics] || []
  }

  // Get shipping modes for the active section
  const getActiveShippingModes = () => {
    if (activeCategory === "Shipping Modes") {
      const shippingModes = transportLogistics["Shipping Modes"] as Record<string, string[]>
      return shippingModes[activeShippingSection] || []
    }
    return []
  }

  // Get e-commerce services for the active section
  const getActiveEcommerceServices = () => {
    if (activeCategory === "E-commerce Solution") {
      const ecommerceServices = transportLogistics["E-commerce Solution"] as Record<string, string[]>
      return ecommerceServices[activeEcommerceSection] || []
    }
    return []
  }

  // Update the hasSubRegions function to only include B2C and B2B
  const hasSubRegions = (category: string) => {
    return category === "B2C" || category === "B2B"
  }

  // Check if a category has sub-sections
  const hasSubSections = (category: string) => {
    return category === "Shipping Modes" || category === "E-commerce Solution"
  }

  // Check if a sub-region should be displayed (hide empty categories)
  const shouldDisplaySubRegion = (subRegion: string, services: string[]) => {
    return services.length > 0
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white text-black shadow-sm" onKeyDown={handleKeyDown}>
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <Image src="/sps-logo-black.png" alt="SPS Logo" width={80} height={30} className="h-8 w-auto" />
            </div>
          </Link>
        </div>

        {/* Navigation items centered */}
        <div className="hidden lg:flex flex-1 justify-center">
          <nav className="flex space-x-4">
            {/* HOW IT WORKS - First position */}
            <Link
              href="/how-it-works"
              className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md menu-item-hover"
            >
              HOW IT WORKS
            </Link>

            {/* OUR SERVICES dropdown - Second position */}
            <div className="relative dropdown-container" onClick={() => toggleDropdown("shipping")}>
              <button
                className="flex items-center px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md menu-item-hover"
                aria-expanded={activeDropdown === "shipping"}
                aria-haspopup="true"
              >
                OUR SERVICES
                <ChevronDown
                  className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-200 icon-rotate",
                    activeDropdown === "shipping" ? "rotate-180" : "",
                  )}
                />
              </button>
              <div className={cn("dropdown-menu", activeDropdown === "shipping" ? "dropdown-active" : "")}>
                <div className="dropdown-content">
                  <div className="regions-column">
                    <h3 className="regions-title">CATEGORIES</h3>
                    <ul className="regions-list flex flex-row space-x-2" role="menu">
                      <li role="menuitem">
                        <button
                          className={cn(
                            "region-tab",
                            activeRegion === "B2C" ? "region-tab-active" : "region-tab-inactive",
                          )}
                          onMouseEnter={() => handleRegionHover("B2C")}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleRegionHover("B2C")
                          }}
                        >
                          B2C
                        </button>
                      </li>
                      <li role="menuitem">
                        <button
                          className={cn(
                            "region-tab",
                            activeRegion === "B2B" ? "region-tab-active" : "region-tab-inactive",
                          )}
                          onMouseEnter={() => handleRegionHover("B2B")}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleRegionHover("B2B")
                          }}
                        >
                          B2B
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="destinations-content">
                    <div className="region-layout">
                      {/* B2C services */}
                      {activeRegion === "B2C" && (
                        <div className="destinations-columns america-columns menu-fade-in">
                          {Object.entries(getActiveRegionCountries() as Record<string, string[]>).map(
                            ([subRegion, services], idx) => (
                              <div
                                key={subRegion}
                                className={`destinations-column menu-fade-in menu-stagger-${idx + 1}`}
                                onMouseEnter={() => handleSubRegionHover(subRegion)}
                              >
                                <h3 className="destinations-title flex items-center">
                                  <SubRegionIcon subRegion={subRegion} className="sub-region-icon" />
                                  {subRegion}
                                </h3>
                                <ul className="destinations-list" role="menu">
                                  {services.map((service, serviceIdx) => (
                                    <li
                                      key={service}
                                      role="menuitem"
                                      className={`destination-item menu-fade-in-right menu-stagger-${serviceIdx + 1}`}
                                    >
                                      <Link
                                        href={`/services/${service.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                                        className="menu-item-hover flex items-center"
                                      >
                                        <ServiceIcon service={service} />
                                        {service}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ),
                          )}
                        </div>
                      )}

                      {/* B2B services */}
                      {activeRegion === "B2B" && (
                        <div className="destinations-columns europe-columns menu-fade-in">
                          {Object.entries(getActiveRegionCountries() as Record<string, string[]>).map(
                            ([subRegion, services], idx) =>
                              // Only display sub-regions with services
                              shouldDisplaySubRegion(subRegion, services) && (
                                <div
                                  key={subRegion}
                                  className={`destinations-column menu-fade-in menu-stagger-${idx + 1}`}
                                  onMouseEnter={() => handleSubRegionHover(subRegion)}
                                  onClick={() => handleSubRegionHover(subRegion)}
                                >
                                  <h3 className="destinations-title flex items-center">
                                    <SubRegionIcon subRegion={subRegion} className="sub-region-icon" />
                                    {subRegion}
                                  </h3>
                                  <ul className="destinations-list" role="menu">
                                    {services.map((service, serviceIdx) => (
                                      <li
                                        key={service}
                                        role="menuitem"
                                        className={`destination-item menu-fade-in-right menu-stagger-${serviceIdx + 1}`}
                                      >
                                        <Link
                                          href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                                          className="menu-item-hover flex items-center"
                                        >
                                          <ServiceIcon service={service} />
                                          {service}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ),
                          )}
                        </div>
                      )}

                      {/* Sub-region image - dynamically changes based on active sub-region */}
                      <div className="region-image menu-fade-in menu-stagger-3">
                        <RegionImage
                          region={activeSubRegion}
                          key={`${activeRegion}-${activeSubRegion}`} // Add key prop to force re-render when region changes
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SPS 19 - Moved to third position with dark blue color */}
            <Link
              href="/sps-99"
              className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md menu-item-hover text-[#0A2240] font-semibold"
            >
              SPS 19
            </Link>

            {/* ABOUT US - Now in fourth position */}
            <Link
              href="/about-us"
              className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md menu-item-hover"
            >
              ABOUT US
            </Link>
          </nav>
        </div>

        {/* Quote button and mobile menu on the right */}
        <div className="flex items-center space-x-4">
          <Link href="/get-quote">
            <Button className="hidden sm:flex bg-[#0A2240] text-white hover:bg-[#081A33]">Get a Quote</Button>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden border-gray-300 text-black hover:bg-gray-100">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center">
                  <Image src="/sps-logo-black.png" alt="SPS Logo" width={80} height={30} className="h-8 w-auto" />
                </div>
                <SheetClose className="rounded-full p-1 hover:bg-gray-100">
                  <X className="h-5 w-5" />
                </SheetClose>
              </div>
              <div className="p-4">
                <EnhancedMobileMenu setOpen={setOpen} />
                <div className="mt-6">
                  <Link href="/get-quote">
                    <Button className="w-full bg-[#0A2240] text-white hover:bg-[#081A33]">Get a Quote</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

interface EnhancedMobileMenuProps {
  setOpen: (open: boolean) => void
}

// 修改EnhancedMobileMenu组件，添加动画效果

function EnhancedMobileMenu({ setOpen }: EnhancedMobileMenuProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null)
  const [animatingItems, setAnimatingItems] = useState<boolean>(false)

  // Define hasSubRegions function inside EnhancedMobileMenu
  const hasSubRegions = (category: string) => {
    return category === "B2C" || category === "B2B"
  }

  // Check if a category has sub-sections
  const hasSubSections = (category: string) => {
    return category === "Shipping Modes" || category === "E-commerce Solution"
  }

  // Check if a sub-region should be displayed (hide empty categories)
  const shouldDisplaySubRegion = (subRegion: string, services: string[]) => {
    return services.length > 0
  }

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
      setActiveCategory(null)
      setActiveSubCategory(null)
    } else {
      setActiveSection(section)
      setActiveCategory(null)
      setActiveSubCategory(null)
      setAnimatingItems(true)
      setTimeout(() => setAnimatingItems(false), 500)
    }
  }

  const toggleCategory = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null)
    } else {
      setActiveCategory(category)
      setActiveSubCategory(null)
    }
  }

  const toggleSubCategory = (subCategory: string) => {
    setActiveSubCategory(activeSubCategory === subCategory ? null : subCategory)
  }

  // 生成动画类名
  const getAnimationClass = (index: number) => {
    const staggerClass = `menu-stagger-${Math.min(index + 1, 5)}`
    return `menu-fade-in-right ${staggerClass}`
  }

  return (
    <div className="mobile-menu-container">
      {/* HOW IT WORKS - First position */}
      <Link
        href="/how-it-works"
        className="mobile-menu-title ripple-effect menu-item-hover"
        onClick={() => setOpen(false)}
      >
        <span className="mobile-menu-title-text">HOW IT WORKS</span>
      </Link>

      <div className="mobile-divider"></div>

      {/* OUR SERVICE Section - Second position */}
      <div className="mobile-menu-section">
        <button
          className="flex w-full items-center justify-between py-2 text-lg font-medium"
          onClick={() => toggleSection("services")}
          aria-expanded={activeSection === "services"}
        >
          <span className="mobile-menu-title-text">OUR SERVICES</span>
          <ChevronDown
            className={cn(
              "mobile-menu-icon icon-rotate",
              activeSection === "services" ? "mobile-menu-icon-rotate" : "",
            )}
          />
        </button>
        {activeSection === "services" && (
          <div className="mt-2 space-y-4 pl-4">
            {Object.entries(regions).map(([category, subItems]) => (
              <div key={category} className="space-y-2">
                <button
                  className="flex w-full items-center justify-between font-medium"
                  onClick={() => toggleCategory(category)}
                  aria-expanded={activeCategory === category}
                >
                  {category}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeCategory === category ? "rotate-180" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "space-y-2 pl-4 overflow-hidden transition-all duration-300",
                    activeCategory === category ? "max-h-[2000px]" : "max-h-0",
                  )}
                >
                  {hasSubRegions(category) ? (
                    Object.entries(subItems as Record<string, string[]>).map(
                      ([subRegion, countries]) =>
                        // Only display sub-regions with services
                        countries.length > 0 && (
                          <div key={subRegion} className="space-y-2 mt-2">
                            <button
                              className="flex w-full items-center justify-between text-sm font-medium"
                              onClick={() => toggleSubCategory(subRegion)}
                              aria-expanded={activeSubCategory === subRegion}
                            >
                              <div className="flex items-center">
                                <SubRegionIcon subRegion={subRegion} className="sub-region-icon-mobile" />
                                {subRegion}
                              </div>
                              <ChevronDown
                                className={cn(
                                  "h-3 w-3 transition-transform duration-200",
                                  activeSubCategory === subRegion ? "rotate-180" : "",
                                )}
                              />
                            </button>
                            <ul
                              className={cn(
                                "space-y-2 pl-4 overflow-hidden transition-all duration-300",
                                activeSubCategory === subRegion ? "max-h-96" : "max-h-0",
                              )}
                            >
                              {countries.map((country) => (
                                <li key={country} className="py-1 flex items-center">
                                  <span className="inline-block w-2 h-2 mr-2 bg-red-500 rounded-full"></span>
                                  <Link
                                    href={`/services/${country.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                                    className="block text-sm hover:text-primary"
                                  >
                                    {country}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ),
                    )
                  ) : hasSubSections(category) ? (
                    Object.entries(transportLogistics).map(([section, modes]) => (
                      <div key={section} className="space-y-2 mt-2">
                        <button
                          className="flex w-full items-center justify-between text-sm font-medium"
                          onClick={() => toggleSubCategory(section)}
                          aria-expanded={activeSubCategory === section}
                        >
                          {section}
                          <ChevronDown
                            className={cn(
                              "h-3 w-3 transition-transform duration-200",
                              activeSubCategory === section ? "rotate-180" : "",
                            )}
                          />
                        </button>
                        <ul
                          className={cn(
                            "space-y-2 pl-4 overflow-hidden transition-all duration-300",
                            activeSubCategory === section ? "max-h-96" : "max-h-0",
                          )}
                        >
                          {modes.map((mode) => (
                            <li key={mode} className="py-1">
                              <Link
                                href={`/services/${mode.toLowerCase().replace(/\s+/g, "-")}`}
                                className="block text-sm hover:text-primary"
                              >
                                {mode}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <ul className="space-y-2">
                      {Array.isArray(subItems) &&
                        subItems.map((item) => (
                          <li key={item} className="py-1">
                            <Link
                              href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                              className="block text-sm hover:text-primary"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SPS 19 - Moved to third position with dark blue color */}
      <div className="mobile-divider"></div>
      <Link
        href="/sps-99"
        className="mobile-menu-title ripple-effect menu-item-hover text-[#0A2240] font-semibold"
        onClick={() => setOpen(false)}
      >
        <span className="mobile-menu-title-text">SPS 19</span>
      </Link>

      {/* ABOUT US - Now in fourth position */}
      <div className="mobile-divider"></div>
      <Link href="/about-us" className="mobile-menu-title ripple-effect menu-item-hover" onClick={() => setOpen(false)}>
        <span className="mobile-menu-title-text">ABOUT US</span>
      </Link>
    </div>
  )
}
