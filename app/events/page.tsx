import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import GearPicks, { GearPick } from '@/components/GearPicks'

export const metadata: Metadata = {
  title: 'Austin Pickleball Events, Tournaments & Meetups 2026 | Pickleball ATX',
  description: 'Austin pickleball tournaments for November and December 2026, with dates, venues and entry fees, plus recurring leagues, mixers and open play. Submit your event to be listed.',
  keywords: [
    'austin pickleball events 2026',
    'austin pickleball tournaments',
    'pickleball meetups austin texas',
    'austin pickleball open play',
    'pickleball leagues austin',
    'pickleball social events austin tx'
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/events',
  },
}

// Tournament-day kit. ASINs checked 24 Oct 2026 (see components/GearPicks.tsx).
const TOURNAMENT_PICKS: GearPick[] = [
  {
    asin: 'B074P8MZW9',
    name: 'Franklin X-40 Outdoor Pickleballs',
    image: 'https://m.media-amazon.com/images/I/71ttt0pVlCL._AC_SX679_.jpg',
    label: 'Outdoor events',
    why: 'USA Pickleball approved and the official ball of the US Open. Warming up with the ball you will play with makes the first game less of an adjustment.',
  },
  {
    asin: 'B07PVPZTPH',
    name: 'Franklin X-26 Indoor Pickleballs',
    image: 'https://m.media-amazon.com/images/I/61nac98gL2L._AC_SX679_.jpg',
    label: 'Indoor events',
    why: 'Several upcoming events, including Fall Flannel Fest at Austin Pickle Ranch, are indoors. Indoor balls play slower and softer, so practice with one beforehand.',
  },
  {
    asin: 'B000HEKHBQ',
    name: 'Gamma Supreme Overgrip (3-Pack)',
    image: 'https://m.media-amazon.com/images/I/51HvY8NvzvL._AC_SX679_.jpg',
    label: 'Fresh grip',
    why: 'Wrap a new overgrip the night before. A worn grip gets slicker as a long day of matches goes on, and a fresh one takes a couple of minutes to put on.',
  },
  {
    asin: 'B0CGYXLSX7',
    name: 'Selkirk Pickleball Backpack',
    image: 'https://m.media-amazon.com/images/I/815c4u3XyGL._AC_SX679_.jpg',
    label: 'Carry it all',
    why: 'Holds up to six paddles plus balls, water and a change of shirt, with a padded front pocket for keys and phone. Small enough to keep courtside.',
  },
]

export default function EventsPage() {
  return (
    <>
      <Script
        id="events-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Austin Pickleball Events, Tournaments & Meetups 2026',
            description: 'Dated Austin pickleball tournaments plus recurring leagues, mixers and open play, updated monthly.',
            url: 'https://pickleballatx.org/events',
            publisher: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
              logo: {
                '@type': 'ImageObject',
                url: 'https://pickleballatx.org/logo.png',
              },
            },
          }),
        }}
      />

      <div>
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Austin Pickleball Events & Tournaments
            </h1>
            <p className="text-xl text-primary-50">
              Dated tournaments for the next two months, plus leagues, mixers and open play — updated monthly
            </p>
            <p className="text-primary-100/90 text-sm mt-4">
              Last updated: October 24, 2026 · <a href="#submit" className="underline hover:text-white">Submit your event ↓</a>
            </p>
          </div>
        </section>

        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Upcoming Tournaments — dated, from organizer registration pages (checked Oct 23, 2026). Refresh monthly. */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Tournaments: November–December 2026</h2>
              <p className="text-gray-600 mb-6">Dates, venues and fees come from each event&apos;s registration page. Organizers change details, so confirm before you register.</p>

              <div className="space-y-4">

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded mb-2">Nov 14–15</span>
                  <h3 className="text-xl font-bold text-gray-900">Fall Flannel Fest 2026</h3>
                  <p className="text-gray-600 mt-1"><strong>Saturday–Sunday, November 14–15, 2026</strong> · Austin Pickle Ranch, Austin</p>
                  <p className="text-gray-700 mt-3">
                    Austin Pickle Ranch's second annual flannel-themed indoor tournament: round-robin pool play with a playoff, about two to two and a half hours of play, and medals for the top three in each division. Entry is $50–$60. Flannel encouraged, not required.
                  </p>
                  <p className="mt-3">
                    <a href="https://app.fluidpb.com/tournaments/fall-flannel-fest-2026" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">Register on Fluid PB →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded mb-2">Nov 20–21</span>
                  <h3 className="text-xl font-bold text-gray-900">Turkey Bowl — Violet Crown Pickleball</h3>
                  <p className="text-gray-600 mt-1"><strong>Friday–Saturday, November 20–21, 2026</strong> · RacFit, 1390 Robert S. Light Blvd, Buda</p>
                  <p className="text-gray-700 mt-3">
                    Violet Crown Pickleball hosts its Turkey Bowl at <Link href="/courts/racfit-buda" className="text-primary-600 hover:underline">RacFit Buda</Link>, with a significant share of proceeds going to the St. Ignatius Food Pantry. Divisions are gated by DUPR rating and skill, with a beginner division that needs no rating (or a DUPR under 2.75). Cash or sponsored prizes; not DUPR-recorded. Entry is $35–$45.
                  </p>
                  <p className="mt-3">
                    <a href="https://app.fluidpb.com/tournaments/turkey-bowl-violet-crown-pickleball" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">Register on Fluid PB →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded mb-2">Nov 22</span>
                  <h3 className="text-xl font-bold text-gray-900">Everything Pickleball Come &amp; Eat It Tournament</h3>
                  <p className="text-gray-600 mt-1"><strong>Sunday, November 22, 2026</strong> · Tejas PB Club, 4701 FM 3405 Bldg 7, Georgetown</p>
                  <p className="text-gray-700 mt-3">
                    A one-day tournament with divisions from novice up through higher DUPR levels, plus swag bags, snacks and a paddle giveaway drawing. Entry is free for the novice to lower-intermediate division; registration closes November 20.
                  </p>
                  <p className="mt-3">
                    <a href="https://app.fluidpb.com/tournaments/everything-pickleball-come-eat-it-tournament-sunday-nov-22nd-2027-tejas-pb-club-georgetown-tx" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">Register on Fluid PB →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">Dec 11–13</span>
                  <h3 className="text-xl font-bold text-gray-900">Liveball Austin Winter Classic</h3>
                  <p className="text-gray-600 mt-1"><strong>Friday–Sunday, December 11–13, 2026</strong> · Austin (venue to be announced)</p>
                  <p className="text-gray-700 mt-3">
                    A three-day winter event from Liveball. The organizer has listed the dates but not the venue yet. Registration opens October 26 and is listed as free.
                  </p>
                  <p className="mt-3">
                    <a href="https://app.fluidpb.com/tournaments/liveball-austin-winter-classic" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">View on Fluid PB →</a>
                  </p>
                </div>

              </div>
            </div>

            <GearPicks
              embedded
              title="Tournament-Day Kit"
              intro="Signed up for one of these? A few small things make a long day of matches easier."
              picks={TOURNAMENT_PICKS}
            />

            {/* Tournament series */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tournament Series to Watch</h2>

              <div className="space-y-4">

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded mb-2">APA Tour</span>
                  <h3 className="text-xl font-bold text-gray-900">APA Tournaments at Austin Pickle Ranch</h3>
                  <p className="text-gray-600 mt-1"><strong>2026 dates: Austin Gold Cup May 2–3 · Austin Open September 19–20</strong> · Austin Pickle Ranch</p>
                  <p className="text-gray-700 mt-3">
                    The Amateur Pickleball Association, the largest amateur tour in the country, held two events at Austin Pickle Ranch this year. Both are done; watch the APA site for 2027 dates.
                  </p>
                  <p className="mt-3">
                    <a href="https://apatournaments.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">APA Tournaments →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">ERA Tour</span>
                  <h3 className="text-xl font-bold text-gray-900">ERA Pickleball Tour: Austin Open</h3>
                  <p className="text-gray-600 mt-1"><strong>2026 dates: May 14–17</strong> · Austin Pickle Ranch</p>
                  <p className="text-gray-700 mt-3">
                    A multi-day sanctioned event with cash payouts in the higher skill brackets. The 2026 stop has passed; check the tour listing for next year.
                  </p>
                  <p className="mt-3">
                    <a href="https://pickleballtournaments.com/tournaments/era-pickleball-tour-austin-open" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">View on PickleballTournaments.com →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded mb-2">Apex Clubs</span>
                  <h3 className="text-xl font-bold text-gray-900">Apex Pickleball Club Tournaments</h3>
                  <p className="text-gray-600 mt-1"><strong>Monthly</strong> · Cedar Park</p>
                  <p className="text-gray-700 mt-3">
                    Apex runs tournaments on its indoor courts most months, from members-only club events to amateur opens. Its 002 Dink and Slam Pickleball Jam drew 268 players on October 24.
                  </p>
                  <p className="mt-3">
                    <a href="https://apexpbclubs.com/tournaments" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">Apex Tournament Schedule →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mb-2">Pickleland</span>
                  <h3 className="text-xl font-bold text-gray-900">Pickleland Weekly Mini Tournaments</h3>
                  <p className="text-gray-600 mt-1"><strong>Weekly</strong> · Pickleland, 21427 Martin Lane, Pflugerville</p>
                  <p className="text-gray-700 mt-3">
                    Free mini tournaments during regular open play, plus rotating bracket formats through the year. The lowest-barrier way to get competitive games in the Austin area.
                  </p>
                  <p className="mt-3">
                    <a href="https://pickleland.com/tournaments" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">Pickleland Tournament Schedule →</a>
                  </p>
                </div>

              </div>
            </div>

            {/* Recurring Events */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recurring Events & Leagues</h2>

              <div className="space-y-4">

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900">Austin Sports & Social Club — Pickleball Leagues</h3>
                  <p className="text-gray-600 text-sm mb-3">Multiple Austin locations</p>
                  <p className="text-gray-700">
                    ASSC runs co-ed social pickleball leagues on weekday evenings across Austin. The format is
                    more social than competitive — games after work, then post-game hangouts at sponsor bars.
                    Good for players who want regular play and want to meet people, not necessarily grind ratings.
                  </p>
                  <p className="mt-3">
                    <a href="https://austinssc.com/pickleball" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">View ASSC Pickleball Leagues →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900">Eastside Paddle Club — Leagues & Mixers</h3>
                  <p className="text-gray-600 text-sm mb-3">East Austin</p>
                  <p className="text-gray-700">
                    Eastside Paddle Club offers a mix of competitive leagues, social mixers, and lessons in East
                    Austin. Ranges from beginner-friendly mixers to more competitive formats. Their leagues page has
                    the current schedule.
                  </p>
                  <p className="mt-3">
                    <a href="https://eastsidepaddleclub.com/leagues" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">View Eastside Paddle Club Leagues →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900">Pickleland Weekly Events — Mixers, DUPR Scrambles & Open Play</h3>
                  <p className="text-gray-600 text-sm mb-3">21427 Martin Lane, Pflugerville TX</p>
                  <p className="text-gray-700">
                    Pickleland runs the busiest weekly indoor schedule in the Austin area: DUPR-rated scrambles,
                    themed social nights, a Singles Mixer, an LGBTQIA+ Mixer, and daily open play on 9 climate-controlled
                    courts. If you want structured events without committing to a full league, Pickleland's drop-in
                    event calendar changes every week.
                  </p>
                  <p className="mt-3">
                    <a href="https://pickleland.com/events-tournaments" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">View Pickleland Events Calendar →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900">Austin Pickle Ranch Open Play</h3>
                  <p className="text-gray-600 text-sm mb-3">11000 Middle Fiskville Road, Austin TX</p>
                  <p className="text-gray-700">
                    Austin Pickle Ranch offers regular open play sessions across skill levels — you don't need a
                    partner or a reservation to participate. Open play is one of the best ways to meet Austin's
                    broader pickleball community and play against a variety of styles and skill levels in a
                    climate-controlled environment.
                  </p>
                  <p className="mt-3">
                    <a href="https://austinpickleranch.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">Visit Austin Pickle Ranch →</a>
                  </p>
                </div>

              </div>
            </div>

            {/* Submit Event */}
            <div id="submit" className="bg-primary-50 border border-primary-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Submit Your Event</h2>
              <p className="text-gray-700 mb-4">
                Running a tournament, league, open play session, or social meetup in Austin? We review
                submissions monthly and list approved events on this page at no charge.
              </p>
              <p className="text-gray-700 mb-6">
                Include the event name, date, location, skill level, cost (if any), and a registration or
                info link. We'll reach out if we have questions.
              </p>
              <a
                href="mailto:info@pickleballatx.org?subject=Event%20Submission%20-%20Pickleball%20ATX&body=Event%20Name%3A%0ADate%3A%0ALocation%2FAddress%3A%0ASkill%20Level(s)%3A%0ACost%3A%0ARegistration%20Link%3A%0AAdditional%20Details%3A"
                className="inline-block bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Submit an Event →
              </a>
              <p className="text-gray-500 text-sm mt-4">
                This page is updated monthly. Send an event at least two weeks before its date to make the next update.
              </p>
            </div>

            {/* Find more */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Find More Austin Pickleball Events</h3>
              <p className="text-gray-700 mb-4">
                The best way to stay current on Austin pickleball events is to follow the venues and
                organizations directly. A few reliable sources:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>→ <a href="https://pickleballtournaments.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">PickleballTournaments.com</a> — national tournament search, filter by Texas/Austin</li>
                <li>→ <a href="https://apatournaments.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">APA Tournaments</a> — the largest amateur tour, strong Texas presence</li>
                <li>→ <a href="https://app.fluidpb.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Fluid PB</a> — registration for many Central Texas tournaments, filterable by city</li>
                <li>→ <a href="https://www.meetup.com/austinssc/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Austin Sports & Social Club on Meetup</a> — social leagues and mixers</li>
                <li>→ <Link href="/courts" className="text-primary-600 hover:underline">Austin Pickleball Courts Directory</Link> — all 27 Austin-area courts with hours and contact info</li>
              </ul>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}
