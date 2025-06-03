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
            <div className="flex space-x-4">
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
                <Link href="/services/sea-freight" className="text-muted-foreground hover:text-primary">
                  Sea Freight
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="text-muted-foreground hover:text-primary">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link href="/services/express" className="text-muted-foreground hover:text-primary">
                  Express
                </Link>
              </li>
              <li>
                <Link href="/services/amazon-fba-shipping" className="text-muted-foreground hover:text-primary">
                  Amazon FBA Shipping
                </Link>
              </li>
              <li>
                <Link href="/services/door-to-door-service" className="text-muted-foreground hover:text-primary">
                  Door to Door Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
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
            <h3 className="mb-4 text-sm font-semibold uppercase">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">123 Logistics Center, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                <Link href="tel:+8612345678901" className="text-muted-foreground hover:text-primary">
                  +86 123 4567 8901
                </Link>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                <Link href="mailto:info@sinoprimeshipping.com" className="text-muted-foreground hover:text-primary">
                  info@sinoprimeshipping.com
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
