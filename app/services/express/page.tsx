import Image from "next/image"
import Link from "next/link"

export default function ExpressPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="relative h-96 rounded-lg overflow-hidden mb-10">
        <Image
          src="/express-hero-image.png"
          alt="International Express Service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold mb-4">International Express Service</h1>
          <p className="text-lg">Fast and reliable delivery worldwide.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {/* Feature 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Fast Delivery</h2>
          <p className="text-gray-700">We offer the fastest delivery options to ensure your packages arrive on time.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Worldwide Coverage</h2>
          <p className="text-gray-700">
            Our network spans across the globe, providing reliable delivery to almost any destination.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Real-time Tracking</h2>
          <p className="text-gray-700">Track your packages every step of the way with our advanced tracking system.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
        <p className="text-lg text-gray-700 mb-6">Experience the best international express service.</p>
        <Link href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </Link>
      </section>
    </div>
  )
}
