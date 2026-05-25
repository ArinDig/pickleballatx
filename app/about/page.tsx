import { Metadata } from 'next'
import Link from 'next/link'
import { FaMapMarkedAlt, FaUsers, FaHistory } from 'react-icons/fa'
import { courts } from '@/data/courts'

export const metadata: Metadata = {
  title: 'About Pickleball ATX - Austin\'s Pickleball Court Directory',
  description: 'Pickleball ATX tracks every pickleball court in the Austin metro area — free courts, indoor facilities, breweries, rec centers, and suburb locations. Updated regularly by local players.',
  keywords: ['about pickleball atx', 'austin pickleball directory', 'austin pickleball community', 'austin pickleball courts'],
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
            Austin metro coverage. Court-tested. Updated by players, for players.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-16">
        <div className="max-w-3xl mx-auto">

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">

            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <FaHistory className="text-primary-600 mr-3 flex-shrink-0" />
              How This Started
            </h2>

            <p>
              We've watched Austin's pickleball scene transform over the past few years — from a handful
              of converted tennis courts at places like Dittmar Rec and Pan Am to dedicated indoor
              facilities like Pickleball Kingdom in Pflugerville and Pickleland, to a new wave of
              social venues like Bouldin Acres and Pickle Hub, and now full-service clubs like RacFit
              in Buda that opened in May 2026. It's been a lot of change, fast.
            </p>

            <p>
              The problem we kept running into: court information was scattered everywhere. A Facebook
              group here, a city parks PDF there, a brewery's Instagram for hours that may or may not
              be current. We're Austin-area players and community members who got tired of
              showing up to courts with outdated information, so we built the resource we wished existed.
            </p>

            <p>
              Pickleball ATX now covers {courts.length} courts across the Austin metro — free public
              parks, City of Austin rec centers, indoor dedicated facilities, brewery courts, and
              neighborhood association courts in the suburbs. Every listing includes hours, pricing,
              court type, amenities, and directions. We update it when things change, because they do.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 flex items-center mt-10">
              <FaMapMarkedAlt className="text-primary-600 mr-3 flex-shrink-0" />
              What We Track
            </h2>

            <p>
              Austin's court landscape is genuinely varied, and we try to reflect that. We cover:
            </p>

            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-2 mt-1">→</span>
                <span><strong>Free public courts</strong> — parks like Beverly Sheffield, Dick Nichols, and Austin High Tennis Center where you just show up and play.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-2 mt-1">→</span>
                <span><strong>City rec centers</strong> — Dittmar (free open play with a waiver), Pan Am (leagues and competitive open play), South Austin Rec, Gus Garcia, and Northwest Rec.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-2 mt-1">→</span>
                <span><strong>Dedicated indoor facilities</strong> — Pickleball Kingdom and Pickleland in Pflugerville for players who want professional surfaces and climate control year-round.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-2 mt-1">→</span>
                <span><strong>Social venues</strong> — Bouldin Acres, Pickle Hub, The Pitch, Highway 71 Brewing, and Lake Travis Biergarten, where pickleball is part of a larger night out.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 font-bold mr-2 mt-1">→</span>
                <span><strong>Suburb and community courts</strong> — Anderson Mill, Lakeline Oaks, RacFit in Buda, and others for players outside central Austin.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 flex items-center mt-10">
              <FaUsers className="text-primary-600 mr-3 flex-shrink-0" />
              Staying Current
            </h2>

            <p>
              Court information goes stale quickly — hours change, facilities open and close, nets get
              added or removed. We verify listings through a combination of direct facility contact,
              community feedback, and regular visits. We're part of the Austin pickleball
              community, which means we hear about changes through the same channels you do:
              word of mouth at open play, facility announcements, and the local pickleball groups
              that track this stuff obsessively.
            </p>

            <p>
              We added RacFit to the directory the same month it opened (May 2026) because we have
              connections to that facility and were following its launch. That's the kind of
              ground-level awareness we try to bring to the whole directory.
            </p>

            <p>
              That said, hours and pricing do change — always worth a quick check on a facility's
              website before making a trip, especially for holiday hours, temporary closures, or
              special events. If you spot something outdated, use the link below to let us know
              and we'll get it fixed.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-8 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">New to Pickleball?</h3>
              <p className="text-gray-700 mb-4">
                If you've never played before, start with our beginner's guide — it covers the rules,
                basic technique, and the best Austin courts for first-timers. Dittmar Rec is our
                top recommendation: free indoor courts, no membership required, and a welcoming
                crowd for newer players.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/guides/beginner" className="btn btn-primary">Beginner's Guide</Link>
                <Link href="/guides/best-courts-beginners" className="btn btn-outline">Best Courts for Beginners</Link>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Your Court</h3>
            <p className="text-gray-700 mb-6">
              Browse all {courts.length} courts in the Austin metro, or filter by free, indoor, or outdoor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courts" className="btn btn-primary text-lg px-8 py-3">
                Browse All Courts
              </Link>
              <Link href="/courts/free" className="btn btn-outline text-lg px-8 py-3">
                Free Courts Only
              </Link>
              <Link href="/courts/indoor" className="btn btn-outline text-lg px-8 py-3">
                Indoor Courts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Something Wrong or Missing?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Court hours changed? New facility opened? We want to know — keeping this accurate
            is the whole point.
          </p>
          <Link href="/contact" className="btn btn-primary text-lg px-8 py-3">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

