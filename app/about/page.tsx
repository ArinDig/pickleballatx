import { Metadata } from 'next'
import Link from 'next/link'
import { FaHeart, FaMapMarkedAlt, FaUsers, FaInfoCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'About Pickleball ATX - Your Austin Pickleball Guide',
  description: 'Learn about Pickleball ATX, Austin\'s comprehensive pickleball court directory. Our mission is to make it easy for everyone to find and enjoy pickleball in Austin, Texas.',
  keywords: ['about pickleball atx', 'pickleball austin info', 'austin pickleball community'],
  alternates: {
    canonical: 'https://pickleballatx.org/about',
  },
}

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Pickleball ATX
          </h1>
          <p className="text-xl text-primary-50">
            Your trusted guide to pickleball courts in Austin, Texas
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <FaHeart className="text-5xl text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Pickleball ATX was created to make it easier for everyone in the Austin area to find and
              enjoy pickleball. Whether you're a seasoned player or just getting started, we provide
              comprehensive, accurate information about every pickleball court in Austin.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <FaInfoCircle className="text-primary-600 mr-3" />
              What We Offer
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">✓</span>
                <span><strong>Comprehensive Directory:</strong> Complete information on all pickleball courts in the Austin metro area</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">✓</span>
                <span><strong>Detailed Information:</strong> Hours, pricing, amenities, contact details, and directions for every location</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">✓</span>
                <span><strong>Easy Filtering:</strong> Find exactly what you're looking for - free courts, indoor facilities, or outdoor options</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">✓</span>
                <span><strong>Regular Updates:</strong> We keep our information current so you always have accurate details</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">✓</span>
                <span><strong>Mobile Friendly:</strong> Access court information on any device, anytime, anywhere</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 flex items-center mt-8">
              <FaMapMarkedAlt className="text-primary-600 mr-3" />
              Why Pickleball ATX?
            </h3>
            
            <p>
              Austin's pickleball community has grown exponentially in recent years, with new courts and
              facilities opening regularly. We noticed that finding comprehensive, up-to-date information
              about all the available courts was challenging. Pickleball ATX solves this problem by
              aggregating all court information in one easy-to-use website.
            </p>

            <p>
              We're passionate about pickleball and about Austin. This directory is our way of giving
              back to the community and helping more people discover this amazing sport.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 flex items-center mt-8">
              <FaUsers className="text-primary-600 mr-3" />
              Join the Community
            </h3>
            
            <p>
              Pickleball ATX is more than just a directory - it's a resource for the entire Austin
              pickleball community. Whether you're looking for your local neighborhood court or planning
              to visit premium facilities, we've got you covered.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-2">About Pickleball</h4>
              <p className="text-gray-700">
                Pickleball is one of the fastest-growing sports in America, combining elements of tennis,
                badminton, and ping-pong. It's easy to learn, fun to play, and great for all ages and
                skill levels. The sport is played on a court about one-third the size of a tennis court
                with a perforated plastic ball and solid paddles.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Play?</h3>
            <p className="text-gray-700 mb-6">
              Browse our directory and find your perfect court today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courts" className="btn btn-primary text-lg px-8 py-3">
                Browse All Courts
              </Link>
              <Link href="/courts/free" className="btn btn-outline text-lg px-8 py-3">
                Find Free Courts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have a Question or Suggestion?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We'd love to hear from you! Know of a court we're missing? Have updated information?
          </p>
          <Link href="/contact" className="btn btn-primary text-lg px-8 py-3">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

