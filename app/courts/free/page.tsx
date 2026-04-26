import { Metadata } from 'next'
import Link from 'next/link'
import { getFreeCourts } from '@/data/courts'
import CourtCard from '@/components/CourtCard'
import FilterBar from '@/components/FilterBar'

export const metadata: Metadata = {
  title: 'Free Pickleball Courts in Austin, TX',
  description: 'Find free pickleball courts in Austin, Texas. No membership or fees required. Discover public parks and recreation centers with free pickleball access.',
  keywords: ['free pickleball austin', 'free pickleball courts austin', 'austin free pickleball', 'public pickleball courts austin'],
  openGraph: {
    title: 'Free Pickleball Courts in Austin, TX | Pickleball ATX',
    description: 'Find free pickleball courts in Austin, Texas. No membership or fees required.',
    url: 'https://pickleballatx.org/courts/free',
  },
  alternates: {
    canonical: 'https://pickleballatx.org/courts/free',
  },
}

export default function FreeCourtsPage() {
  const freeCourts = getFreeCourts()

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Pickleball Courts in Austin
          </h1>
          <p className="text-xl text-green-50">
            Play pickleball without breaking the bank - {freeCourts.length} free locations
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-gray-50 py-6 sticky top-16 z-40 shadow-sm">
        <div className="container-custom">
          <FilterBar />
        </div>
      </section>

      {/* Courts Grid */}
      <section className="container-custom py-12">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {freeCourts.length} free courts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeCourts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
        
        {/* The Pitch CTA */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-gray-900">Want courts with food, drinks & a full evening out?</p>
            <p className="text-gray-600 text-sm mt-1">
              <Link href="/courts/the-pitch" className="text-primary-600 hover:underline font-medium">The Pitch on Burnet Road</Link> combines 3 outdoor pickleball courts with restaurants, bars, and a coffee shop — Austin's most social pickleball spot.
            </p>
          </div>
          <Link
            href="/courts/the-pitch"
            className="flex-shrink-0 inline-flex items-center px-5 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
          >
            See The Pitch →
          </Link>
        </div>

        {/* Gear CTA */}
        <div className="mt-6 bg-primary-50 border border-primary-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-gray-900">New to pickleball?</p>
            <p className="text-gray-600 text-sm mt-1">
              All you need is a paddle and some balls. We picked the best beginner gear so you don't have to guess.
            </p>
          </div>
          <Link
            href="/guides/beginner-gear"
            className="flex-shrink-0 inline-flex items-center px-5 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            Best Gear for Beginners →
          </Link>
        </div>

        {/* Comprehensive Content */}
        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Free Pickleball Courts in Austin</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Austin is fortunate to have an excellent selection of free pickleball facilities, primarily 
                  operated by the Austin Parks and Recreation Department. These public courts provide accessible 
                  opportunities for residents and visitors to enjoy pickleball without any membership fees or 
                  court rental costs. With {freeCourts.length} free locations across the city, players have 
                  numerous options for affordable play.
                </p>
                <p>
                  Free pickleball courts in Austin serve as community hubs where players of all skill levels 
                  can come together. These facilities are particularly valuable for beginners who want to try 
                  the sport without financial commitment, families looking for affordable recreation, and 
                  players who prefer the casual, welcoming atmosphere of public facilities.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Types of Free Courts
                </h3>
                <p>
                  Austin's free pickleball facilities include both indoor and outdoor options:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Indoor Recreation Centers:</strong> Facilities like South Austin Recreation Center, 
                  Pan Am Recreation Center, and Dittmar Recreation Center offer climate-controlled indoor courts 
                  perfect for year-round play. These centers typically have multiple courts, organized open play 
                  sessions, and amenities like restrooms, water fountains, and parking.</li>
                  <li><strong>Outdoor Park Courts:</strong> Many Austin parks feature dedicated pickleball courts 
                  or multi-use courts that can be converted for pickleball. These outdoor courts often have 
                  excellent lighting for evening play and take advantage of Austin's beautiful weather.</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  How Free Courts Work
                </h3>
                <p>
                  Most free pickleball courts in Austin operate on a first-come, first-served basis. However, 
                  many recreation centers have scheduled open play times where players can drop in and join games. 
                  Some facilities may require:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Signing a waiver on your first visit</li>
                  <li>Signing in at the front desk</li>
                  <li>Following posted court rotation rules during busy times</li>
                  <li>Bringing your own equipment (paddles and balls)</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Tips for Playing at Free Courts
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Arrive Early:</strong> Popular times can get busy, so arriving early increases 
                  your chances of getting court time.</li>
                  <li><strong>Check Schedules:</strong> Many recreation centers post open play schedules. 
                  Check their websites or call ahead for the most current information.</li>
                  <li><strong>Be Patient:</strong> During peak hours, you may need to wait for a court. 
                  This is a great time to meet other players and observe games.</li>
                  <li><strong>Follow Etiquette:</strong> Respect court rotation systems, wait your turn, 
                  and be welcoming to players of all skill levels.</li>
                  <li><strong>Bring Equipment:</strong> While some facilities may have loaner equipment, 
                  it's best to bring your own paddles and balls.</li>
                  <li><strong>Stay Hydrated:</strong> Especially important for outdoor courts during 
                  Austin's hot summers.</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Benefits of Free Courts
                </h3>
                <p>
                  Free pickleball courts provide numerous benefits to the Austin community:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Accessibility:</strong> No financial barriers to entry, making pickleball 
                  accessible to everyone regardless of income level.</li>
                  <li><strong>Community Building:</strong> These facilities bring together diverse groups 
                  of players, fostering a sense of community and belonging.</li>
                  <li><strong>Health & Wellness:</strong> Free access encourages regular physical activity 
                  and promotes healthy lifestyles.</li>
                  <li><strong>Skill Development:</strong> Beginners can learn and practice without 
                  financial pressure, while experienced players can enjoy casual games.</li>
                </ul>
                <p className="mt-6">
                  For specific information about hours, amenities, and open play schedules, visit the 
                  individual court pages linked above. We recommend calling ahead or checking facility 
                  websites for the most current information, especially during holidays or special events.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

