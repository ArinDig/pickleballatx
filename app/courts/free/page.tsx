import { Metadata } from 'next'
import Link from 'next/link'
import { courts } from '@/data/courts'
import CourtsFilter from '@/components/CourtsFilter'
import GearPicks, { GearPick } from '@/components/GearPicks'
import {
  CITY_PARK_COURTS,
  CITY_REC_OPEN_PLAY,
  CITY_RESERVABLE,
  CITY_COURTS_CHECKED,
  CITY_COURTS_SOURCE,
} from '@/data/cityCourts'

export const metadata: Metadata = {
  title: 'Free Pickleball Courts in Austin, TX (All City Parks)',
  description: 'Every free City of Austin park with pickleball courts: 21 parks with addresses, open-play hours, lights and net details, plus rec-center open play times.',
  keywords: ['free pickleball austin', 'free pickleball courts austin', 'austin free pickleball', 'public pickleball courts austin'],
  openGraph: {
    title: 'Free Pickleball Courts in Austin, TX | Pickleball ATX',
    description: 'Every free City of Austin park with pickleball courts, with hours, lights and nets.',
    url: 'https://pickleballatx.org/courts/free',
  },
  alternates: {
    canonical: 'https://pickleballatx.org/courts/free',
  },
}

// What to bring to a free court. ASINs checked 24 Oct 2026 (see components/GearPicks.tsx).
const FREE_COURT_PICKS: GearPick[] = [
  {
    asin: 'B0BYV7P9X7',
    name: 'MTEN Pickleball Paddle Set of 2',
    image: 'https://m.media-amazon.com/images/I/817bcNLqMLL._AC_SX679_.jpg',
    label: 'Cheapest way to start',
    why: 'Two fiberglass paddles, four outdoor balls, two grip tapes and a carry bag. Plenty for finding out whether you like the game, and rated 4.7 stars across more than 9,500 reviews.',
  },
  {
    asin: 'B01F7VC6MQ',
    name: 'Selkirk SLK Neo Paddle Set of 2',
    image: 'https://m.media-amazon.com/images/I/71YJpULdrjL._AC_SX679_.jpg',
    label: 'Step up for two players',
    why: 'Two graphite paddles from one of the best-known paddle brands, plus three outdoor balls and a sling bag. A good buy for a couple or two friends who already know they will keep playing.',
  },
  {
    asin: 'B074P8MZW9',
    name: 'Franklin X-40 Outdoor Pickleballs',
    image: 'https://m.media-amazon.com/images/I/71ttt0pVlCL._AC_SX679_.jpg',
    label: 'For park courts',
    why: 'Most free courts in Austin are outdoor park courts, and an outdoor ball is harder and more wind-resistant. Bring a few of your own; balls crack and go missing.',
  },
  {
    asin: 'B07PVPZTPH',
    name: 'Franklin X-26 Indoor Pickleballs',
    image: 'https://m.media-amazon.com/images/I/61nac98gL2L._AC_SX679_.jpg',
    label: 'For rec centers',
    why: 'Dittmar, Gus Garcia and Northwest are indoor. Indoor balls are softer and lighter for gym floors; an outdoor ball bounces too fast and loud inside.',
  },
]

export default function FreeCourtsPage() {

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Pickleball Courts in Austin
          </h1>
          <p className="text-xl text-green-50">
            All {CITY_PARK_COURTS.length} free City of Austin park locations, plus rec-center open play.{' '}
            <a href="#city-courts" className="underline font-semibold">Jump to the full city list</a>
          </p>
        </div>
      </section>

      <CourtsFilter courts={courts} defaultPrice="free" />

      {/* CTAs */}
      <section className="container-custom pb-8 space-y-6">
        {/* PopStroke Austin CTA */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-gray-900">Want courts with mini golf, food & a full evening out?</p>
            <p className="text-gray-600 text-sm mt-1">
              <Link href="/courts/popstroke-austin" className="text-primary-600 hover:underline font-medium">PopStroke Austin (formerly The Pitch)</Link> combines 3 outdoor pickleball courts with mini golf, sand volleyball, and a full-service restaurant — Austin's most social pickleball spot.
            </p>
          </div>
          <Link
            href="/courts/popstroke-austin"
            className="flex-shrink-0 inline-flex items-center px-5 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
          >
            See PopStroke →
          </Link>
        </div>

      </section>

      {/* Every City of Austin court, from the city's official list */}
      <section id="city-courts" className="container-custom py-10 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Every City of Austin Pickleball Court
          </h2>
          <p className="text-gray-700 mb-2">
            These are the {CITY_PARK_COURTS.length} park locations on Austin Parks and Recreation&apos;s official
            pickleball list. All are free and first-come, first-served. &quot;Net system&quot; means a
            multi-sport net you set up on site; &quot;bring your own&quot; means pack a portable net.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Source:{' '}
            <a href={CITY_COURTS_SOURCE} target="_blank" rel="noopener" className="text-primary-600 hover:underline">
              City of Austin pickleball page
            </a>
            , checked {CITY_COURTS_CHECKED}. Hours change, so check the city page before a long drive.
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-900">
                <tr>
                  <th className="p-3 font-semibold">Park</th>
                  <th className="p-3 font-semibold">Courts</th>
                  <th className="p-3 font-semibold">Nets</th>
                  <th className="p-3 font-semibold">Open play</th>
                  <th className="p-3 font-semibold">Lights</th>
                </tr>
              </thead>
              <tbody>
                {CITY_PARK_COURTS.map((c) => (
                  <tr key={c.name} className="border-t border-gray-200 align-top">
                    <td className="p-3">
                      {c.slug ? (
                        <Link href={`/courts/${c.slug}`} className="font-semibold text-primary-600 hover:underline">
                          {c.name}
                        </Link>
                      ) : (
                        <span className="font-semibold text-gray-900">{c.name}</span>
                      )}
                      <div className="text-gray-600">{c.address}, {c.zip}</div>
                    </td>
                    <td className="p-3 text-gray-700">{c.courts}</td>
                    <td className="p-3 text-gray-700 whitespace-nowrap">{c.nets}</td>
                    <td className="p-3 text-gray-700">
                      {c.openPlay}
                      {c.note && <div className="text-amber-700 mt-1">{c.note}</div>}
                    </td>
                    <td className="p-3 text-gray-700">{c.lighted ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-700 mt-4">
            The city also runs one reservable facility:{' '}
            <Link href={`/courts/${CITY_RESERVABLE.slug}`} className="text-primary-600 hover:underline font-medium">
              {CITY_RESERVABLE.name}
            </Link>{' '}
            ({CITY_RESERVABLE.address}). {CITY_RESERVABLE.detail} Court fees apply.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-2">Rec Center Open Play</h3>
          <p className="text-gray-700 mb-4">
            These city rec centers run scheduled pickleball sessions, mostly on gym courts. The city&apos;s list
            doesn&apos;t mention fees, so call the center to confirm the schedule and any drop-in cost.
          </p>
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-900">
                <tr>
                  <th className="p-3 font-semibold">Rec center</th>
                  <th className="p-3 font-semibold">Courts</th>
                  <th className="p-3 font-semibold">Open play</th>
                </tr>
              </thead>
              <tbody>
                {CITY_REC_OPEN_PLAY.map((r) => (
                  <tr key={r.name} className="border-t border-gray-200 align-top">
                    <td className="p-3">
                      {r.slug ? (
                        <Link href={`/courts/${r.slug}`} className="font-semibold text-primary-600 hover:underline">
                          {r.name}
                        </Link>
                      ) : (
                        <span className="font-semibold text-gray-900">{r.name}</span>
                      )}
                      <div className="text-gray-600">
                        {r.address} &middot;{' '}
                        <a href={`tel:${r.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">{r.phone}</a>
                      </div>
                    </td>
                    <td className="p-3 text-gray-700">{r.courts}</td>
                    <td className="p-3 text-gray-700">
                      {r.openPlay}
                      {r.note && <div className="text-gray-600 mt-1">{r.note}</div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">City court rules, in short</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>First-come, first-served unless the listing says otherwise.</li>
              <li>If others are waiting, keep your game to 60 minutes. One group, one court.</li>
              <li>No taping or painting lines, and don&apos;t alter or add nets.</li>
              <li>Tennis courts without pickleball lines are for tennis only.</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              Questions or a court problem? The city&apos;s pickleball contact is{' '}
              <a href="mailto:pickleball@austintexas.gov" className="text-primary-600 hover:underline">pickleball@austintexas.gov</a>.
            </p>
          </div>
        </div>
      </section>

      <GearPicks
        title="What to Bring to a Free Court"
        intro="Most free courts don't provide equipment, so plan on bringing a paddle and your own balls. These are the picks we'd start with, depending on budget and whether you're playing outdoors or at a rec center."
        picks={FREE_COURT_PICKS}
      />

      {/* Comprehensive Content */}
      <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Free Pickleball Courts in Austin</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Austin&apos;s free pickleball courts are almost all run by the Austin Parks and Recreation
                  Department. The {CITY_PARK_COURTS.length} park locations on the city&apos;s list cost nothing to
                  use and need no reservation, and several rec centers add scheduled indoor sessions.
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
                  <li><strong>Indoor Recreation Centers:</strong> Rec centers like Dittmar, Gus Garcia and
                  Northwest run scheduled open play on air-conditioned gym courts. Sessions are a few hours a week,
                  so check the times in the table above and call ahead.</li>
                  <li><strong>Outdoor Park Courts:</strong> Most free courts are in city parks, either dedicated
                  pickleball courts or multi-purpose courts striped for pickleball. About half are lighted
                  for evening play; the table above shows which.</li>
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
    </div>
  )
}

