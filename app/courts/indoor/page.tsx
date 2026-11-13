import { Metadata } from 'next'
import { courts } from '@/data/courts'
import Link from 'next/link'
import CourtsFilter from '@/components/CourtsFilter'
import GearPicks, { GearPick } from '@/components/GearPicks'

export const metadata: Metadata = {
  title: 'Indoor Pickleball Courts in Austin, TX',
  description: 'Indoor pickleball courts in Austin for winter play: every indoor club and rec center compared by courts, cost and how to play without a membership, plus lit outdoor courts for evenings.',
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

// Outdoor courts with lights. City courts checked against the City of Austin pickleball list (13 Nov 2026).
const LIT_OUTDOOR = [
  'little-zilker', 'austin-high-tennis', 'pan-american-park', 'rosewood-park', 'south-austin-rec',
  'dick-nichols-park', 'beverly-sheffield-park', 'brentwood-park', 'austin-tennis-pickleball',
  'anderson-mill-west-park',
]

// ASINs checked 6 Nov 2026 (see components/GearPicks.tsx).
const WINTER_PICKS: GearPick[] = [
  {
    asin: 'B07PVPZTPH',
    name: 'Franklin X-26 Indoor Pickleballs',
    image: 'https://m.media-amazon.com/images/I/61nac98gL2L._AC_SX679_.jpg',
    label: 'Indoor ball',
    why: 'Softer and lighter than an outdoor ball, with bigger holes, made for gym floors and indoor club surfaces. Many open-play sessions use indoor balls, so it helps to practice with one.',
  },
  {
    asin: 'B08VS7473J',
    name: 'ASICS Gel-Rocket 10 Indoor Court Shoes',
    image: 'https://m.media-amazon.com/images/I/51On8-rbGBL._AC_SX679_.jpg',
    label: 'Non-marking shoes',
    why: 'Indoor courts usually require non-marking court shoes, and running shoes grip badly on lateral moves. A gum-rubber court shoe like this one covers both. Listed in men\'s sizing.',
  },
]

export default function IndoorCourtsPage() {
  const indoorCourts = courts.filter(court => 
    court.courtType === 'indoor' || court.courtType === 'both'
  )
  const byCourts = [...indoorCourts].sort((a, b) => b.numberOfCourts - a.numberOfCourts)
  const litOutdoor = courts.filter(c => LIT_OUTDOOR.includes(c.slug))

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

      <CourtsFilter courts={courts} defaultType="indoor" />

      {/* Winter play — added Nov 2026. Table is built from data/courts.ts so it stays in sync. */}
      <section className="container-custom py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Playing Through the Winter</h2>
          <p className="text-gray-700 mb-3">
            Austin winters are mild, but they still change the game. The sun sets around 5:30 in
            December, cold snaps and wind make outdoor play miserable, and the harder plastic in
            outdoor balls is more likely to crack in the cold. That&apos;s when indoor courts earn their
            keep. Here is every indoor option in our directory, largest first, with the simplest way to
            play there without signing up for anything long-term.
          </p>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border border-gray-200">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="p-3 border-b">Facility</th>
                  <th className="p-3 border-b">Area</th>
                  <th className="p-3 border-b">Courts</th>
                  <th className="p-3 border-b">Cost to start</th>
                </tr>
              </thead>
              <tbody>
                {byCourts.map((c) => (
                  <tr key={c.slug} className="border-b last:border-0">
                    <td className="p-3">
                      <Link href={`/courts/${c.slug}`} className="text-primary-600 hover:underline font-semibold">
                        {c.name}
                      </Link>
                    </td>
                    <td className="p-3 text-gray-700">{c.city}</td>
                    <td className="p-3 text-gray-700">
                      {c.numberOfCourts}
                      {c.courtType === 'both' ? ' (indoor + outdoor)' : ''}
                    </td>
                    <td className="p-3 text-gray-700">{c.pricing?.rates?.[0] ?? c.pricing?.details ?? 'Contact facility'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Court counts and prices come from each facility&apos;s own information and change; check the
            facility page before you go.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Cheapest Indoor Options</h3>
          <p className="text-gray-700">
            The city recreation centers are the budget route, with scheduled open play a few hours a
            week (times for every center are on our{' '}
            <Link href="/courts/free#city-courts" className="text-primary-600 hover:underline">free courts page</Link>).
            Dittmar runs open play after a one-time waiver; call the other centers about any drop-in fee. Among the private clubs, Apex in Cedar Park lets guests drop into open play
            without a membership, and Pickleland and Pickleball Kingdom both sell daily passes.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Prefer Outdoors? Courts With Lights</h3>
          <p className="text-gray-700 mb-3">
            On mild winter evenings, these outdoor courts have lights, so you can keep playing after the
            early sunset:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {litOutdoor.map((c) => (
              <li key={c.slug}>
                <Link href={`/courts/${c.slug}`} className="text-primary-600 hover:underline">
                  {c.name}
                </Link>{' '}
                — {c.city}, {c.numberOfCourts} courts{c.isFree ? ', free' : ''}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-3">
            Check each park&apos;s listed hours; city parks close at set times even when the lights work.
          </p>
        </div>
      </section>

      <GearPicks
        title="Gear for Indoor Play"
        intro="Two things that make the move indoors easier."
        picks={WINTER_PICKS}
        checked="November 6, 2026"
      />

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
                  Austin Recreation Center, Gus Garcia Recreation Center, and Northwest Recreation Center
                  offer affordable or free access to indoor courts. These facilities typically have
                  organized open play sessions and welcome players of all skill levels.</li>
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
    </div>
  )
}

