import { Metadata } from 'next'
import { courts } from '@/data/courts'
import CourtCard from '@/components/CourtCard'
import FilterBar from '@/components/FilterBar'

export const metadata: Metadata = {
  title: 'Indoor Pickleball Courts in Austin, TX',
  description: 'Find indoor pickleball courts in Austin, Texas. Climate-controlled facilities perfect for year-round play, rain or shine.',
  keywords: ['indoor pickleball austin', 'indoor pickleball courts austin', 'austin indoor pickleball', 'climate controlled pickleball austin'],
  openGraph: {
    title: 'Indoor Pickleball Courts in Austin, TX | Pickleball ATX',
    description: 'Find indoor pickleball courts in Austin, Texas. Climate-controlled facilities perfect for year-round play.',
    url: 'https://pickleballatx.org/courts/indoor',
  },
  alternates: {
    canonical: 'https://pickleballatx.org/courts/indoor',
  },
}

export default function IndoorCourtsPage() {
  const indoorCourts = courts.filter(court => 
    court.courtType === 'indoor' || court.courtType === 'both'
  )

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Indoor Pickleball Courts in Austin
          </h1>
          <p className="text-xl text-blue-50">
            Climate-controlled facilities for year-round play - {indoorCourts.length} locations
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
            Showing {indoorCourts.length} indoor courts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indoorCourts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
        
        {/* Comprehensive Content */}
        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Indoor Pickleball Courts in Austin</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Austin's indoor pickleball facilities offer the perfect solution for year-round play, 
                  especially during the hot Texas summers when outdoor play can be challenging. With 
                  {indoorCourts.length} indoor locations across the Austin metro area, players have 
                  access to climate-controlled environments that ensure comfortable play regardless of 
                  weather conditions.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Why Choose Indoor Courts?
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Climate Control:</strong> Air-conditioned facilities provide comfortable 
                  temperatures year-round, making it possible to play even during Austin's scorching 
                  summer months when temperatures regularly exceed 100°F. This is especially important 
                  for extended play sessions and tournaments.</li>
                  <li><strong>Weather Protection:</strong> Indoor courts eliminate weather-related 
                  cancellations. No need to worry about rain, wind, extreme heat, or cold. Your game 
                  is never interrupted by weather conditions.</li>
                  <li><strong>Consistent Playing Conditions:</strong> Indoor facilities offer uniform 
                  lighting, no wind interference, and consistent court surfaces. This creates a more 
                  predictable playing experience and allows players to focus on technique and strategy 
                  rather than adapting to changing environmental conditions.</li>
                  <li><strong>Premium Court Surfaces:</strong> Many indoor facilities feature 
                  professional-grade court surfaces designed specifically for pickleball. These surfaces 
                  provide optimal ball bounce and player traction, enhancing the overall playing experience.</li>
                  <li><strong>Extended Playing Hours:</strong> With controlled lighting and climate, 
                  indoor facilities can operate early in the morning and late into the evening, providing 
                  more flexibility for players with busy schedules.</li>
                  <li><strong>Better for Competitive Play:</strong> Consistent conditions make indoor 
                  courts ideal for tournaments, leagues, and serious practice sessions where players want 
                  to eliminate environmental variables.</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Types of Indoor Facilities
                </h3>
                <p>
                  Austin's indoor pickleball facilities range from public recreation centers to premium 
                  private clubs:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Public Recreation Centers:</strong> City-operated facilities like South 
                  Austin Recreation Center and Pan Am Recreation Center offer affordable or free access 
                  to indoor courts. These facilities typically have organized open play sessions and 
                  welcome players of all skill levels.</li>
                  <li><strong>Dedicated Pickleball Facilities:</strong> Specialized venues like Austin 
                  Pickle Ranch focus exclusively on pickleball, offering multiple courts, professional 
                  instruction, and organized leagues. These facilities often feature the latest court 
                  technology and amenities.</li>
                  <li><strong>Multi-Sport Facilities:</strong> Some indoor facilities accommodate multiple 
                  sports, with dedicated pickleball courts alongside tennis, basketball, or other activities. 
                  These venues offer diverse recreational options.</li>
                  <li><strong>Membership Clubs:</strong> Premium facilities that require membership but 
                  offer exclusive access, advanced amenities, and a more curated playing experience.</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  What to Expect at Indoor Courts
                </h3>
                <p>
                  Indoor pickleball facilities typically offer:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Climate-controlled environments with comfortable temperatures</li>
                  <li>Professional lighting systems designed for optimal visibility</li>
                  <li>High-quality court surfaces (often cushioned or specialized pickleball surfaces)</li>
                  <li>Restrooms and changing facilities</li>
                  <li>Water fountains or hydration stations</li>
                  <li>Seating areas for players and spectators</li>
                  <li>Equipment storage or rental options (at some facilities)</li>
                  <li>Pro shops or equipment sales (at premium facilities)</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Planning Your Visit
                </h3>
                <p>
                  Before visiting an indoor facility, consider:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Reservations:</strong> Many indoor facilities require advance reservations, 
                  especially during peak hours. Check individual facility policies.</li>
                  <li><strong>Pricing:</strong> Indoor facilities may charge hourly rates, require memberships, 
                  or offer free access (at public recreation centers). Check pricing before visiting.</li>
                  <li><strong>Equipment:</strong> Most facilities require you to bring your own paddles and 
                  balls, though some offer rental equipment.</li>
                  <li><strong>Attire:</strong> Indoor courts typically require non-marking court shoes. 
                  Check facility policies on footwear requirements.</li>
                  <li><strong>Peak Hours:</strong> Indoor facilities can be busier during evenings and 
                  weekends. Consider off-peak times for more court availability.</li>
                </ul>
                <p className="mt-6">
                  For detailed information about specific indoor facilities, including hours, pricing, 
                  reservation policies, and amenities, visit the individual court pages linked above. 
                  We recommend calling ahead or checking facility websites for the most current 
                  information and to make reservations when required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

