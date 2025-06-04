import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Image src="/sps-logo-black.png" alt="SPS Logo" width={80} height={30} className="h-8 w-auto" />
              <span className="font-bold">SinoPrime Shipping</span>
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              Professional international logistics solutions from China to Canada and USA destinations.
            </p>
            <div className="mb-4 flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Suite 4019, Jincheng Building, Fuyong Street, Bao'an District, Shenzhen</span>
            </div>
            <div className="flex space-x-4 hidden">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Services</h3>
            <ul className="space-y-2 text-sm">
             
           
             
              <li>
                <Link href="/services/fba-prep-and-ship" className="text-muted-foreground hover:text-primary">
                FBA Prep & Ship Services
                </Link>
              </li>

              <li>
                <Link href="/services/direct-to-consumer-shipping" className="text-muted-foreground hover:text-primary">
                DTC Shipping
                </Link>
              </li>

              <li>
                <Link href="/services/express" className="text-muted-foreground hover:text-primary">
                International Express
                </Link>
              </li>

              <li>
                <Link href="/services/overseas-warehousing-and-fulfillment" className="text-muted-foreground hover:text-primary">
                Warehousing & Fulfillment
                </Link>
              </li>

              <li>
                <Link href="/services/lcl-to-door" className="text-muted-foreground hover:text-primary">
                LCL to Door
                </Link>
              </li>

              <li>
                <Link href="/services/fcl-to-door" className="text-muted-foreground hover:text-primary">
                FCL to Door
                </Link>
              </li>


              <li>
                <Link href="/services/air-to-door" className="text-muted-foreground hover:text-primary">
                  Air Freight to Door
                </Link>
              </li>


            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="hidden">
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li className="hidden">
                <Link href="/podcast" className="text-muted-foreground hover:text-primary">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">SPS Program</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sps-99" className="text-muted-foreground hover:text-primary">
                  SPS 19 Pioneer Program
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SinoPrime Shipping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
