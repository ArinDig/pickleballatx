import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Austin Pickleball Events, Tournaments & Meetups 2026 | Pickleball ATX',
  description: 'Find Austin pickleball tournaments, open play sessions, leagues, and social events. Updated weekly. Submit your event to be listed on Pickleball ATX.',
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
            description: 'Austin pickleball tournaments, open play sessions, leagues, and social events — updated weekly.',
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
              Tournaments, open play sessions, social leagues, and community meetups — updated weekly
            </p>
            <p className="text-primary-100/90 text-sm mt-4">
              Last updated: July 30, 2026 · <a href="#submit" className="underline hover:text-white">Submit your event ↓</a>
            </p>
          </div>
        </section>

        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Upcoming Tournaments */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Tournaments</h2>

              <div className="space-y-4">

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded mb-2">APA Tournament</span>
                      <h3 className="text-xl font-bold text-gray-900">The Austin Gold Cup @ Austin Pickle Ranch</h3>
                      <p className="text-gray-600 mt-1">Austin Pickle Ranch · 11000 Middle Fiskville Road, Austin TX</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">
                    One of Austin's signature amateur tournaments hosted by the Amateur Pickleball Association —
                    the largest amateur player tour in the country. Multiple skill levels and formats. Austin Pickle
                    Ranch's 16 indoor courts make this a high-quality playing environment regardless of summer weather.
                  </p>
                  <p className="mt-3">
                    <a href="https://apatournaments.com/product/the-austin-gold-cup-austin-pickle-ranch/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">Register at APA Tournaments →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded mb-2">APA Tournament</span>
                      <h3 className="text-xl font-bold text-gray-900">The Austin Open @ Austin Pickle Ranch</h3>
                      <p className="text-gray-600 mt-1">Austin Pickle Ranch · 11000 Middle Fiskville Road, Austin TX</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">
                    Another APA-sanctioned event at Austin Pickle Ranch. The Austin Open draws players from
                    across Texas and the broader Southwest. Check the APA site for current dates, divisions,
                    and registration windows — these fill up.
                  </p>
                  <p className="mt-3">
                    <a href="https://apatournaments.com/product/the-austin-open-austin-pickle-ranch/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">Register at APA Tournaments →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">ERA Tour</span>
                      <h3 className="text-xl font-bold text-gray-900">ERA Pickleball Tour: Austin Open</h3>
                      <p className="text-gray-600 mt-1">Austin Pickle Ranch · Austin, TX</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">
                    The ERA Pickleball Tour brings a multi-day competitive event to Austin Pickle Ranch. The ERA
                    Tour runs sanctioned events across Texas with cash payouts at higher skill brackets. Check
                    their site for the next Austin stop and registration details.
                  </p>
                  <p className="mt-3">
                    <a href="https://pickleballtournaments.com/tournaments/era-pickleball-tour-austin-open" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">View on Pickleball Tournaments →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded mb-2">Apex Clubs</span>
                      <h3 className="text-xl font-bold text-gray-900">Apex Pickleball Club Tournaments</h3>
                      <p className="text-gray-600 mt-1">Cedar Park, TX (Greater Austin Area)</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">
                    Apex Pickleball Clubs runs monthly tournaments on indoor courts in Cedar Park for all skill levels —
                    from members-only club events to Amateur Opens to sanctioned Pro events. If you're in North Austin
                    or Cedar Park, Apex is one of the most active local tournament series.
                  </p>
                  <p className="mt-3">
                    <a href="https://apexpbclubs.com/tournaments" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">View Apex Tournament Schedule →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mb-2">Pickleland</span>
                      <h3 className="text-xl font-bold text-gray-900">Pickleland Weekly Tournaments & Brackets</h3>
                      <p className="text-gray-600 mt-1">Pickleland · 21427 Martin Lane, Pflugerville TX</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">
                    Pickleland hosts 16+ tournaments per year ranging from beginner-friendly round-robins to
                    DUPR-rated competitive brackets. They also run free mini-tournaments every week during
                    regular open play — the lowest-barrier way to get competitive reps in the Austin area.
                  </p>
                  <p className="mt-3">
                    <a href="https://pickleland.com/tournaments" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">View Pickleland Tournament Schedule →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded mb-2">002 Pickleball</span>
                      <h3 className="text-xl font-bold text-gray-900">002 Pickleball Summer Series</h3>
                      <p className="text-gray-600 mt-1">Austin, TX</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">
                    002 Pickleball runs a summer series from May through September with Men's Doubles, Mixed
                    Doubles, and Women's Doubles formats. Prize pools range from $800–$1,500 per event. A solid
                    option for intermediate and advanced players looking for cash-prize competition in Austin.
                  </p>
                  <p className="mt-3">
                    <a href="https://www.002pickleball.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">Visit 002 Pickleball →</a>
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
                    Austin. Ranges from beginner-friendly mixers to more competitive formats. Download their app
                    for the current schedule and court reservation availability.
                  </p>
                  <p className="mt-3">
                    <a href="https://eastsidepaddleclub.com/events" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-semibold">View Eastside Paddle Club Events →</a>
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900">Pickleland Weekly Events — Mixers, DUPR Scrambles & Open Play</h3>
                  <p className="text-gray-600 text-sm mb-3">21427 Martin Lane, Pflugerville TX</p>
                  <p className="text-gray-700">
                    Pickleland runs the busiest weekly indoor schedule in the Austin area: DUPR-rated scrambles,
                    themed social nights, a Singles Mixer, an LGBTQIA+ Mixer, and daily open play on 9 climate-controlled
                    courts. If you want structured events without committing to a full league, Pickleland's drop-in
                    event calendar is worth checking weekly.
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
                submissions weekly and list approved events on this page at no charge.
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
                This page is updated weekly. Submissions received by Friday will be reviewed for the following week's update.
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
                <li>→ <a href="https://www.meetup.com/austinssc/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Austin Sports & Social Club on Meetup</a> — social leagues and mixers</li>
                <li>→ <Link href="/courts" className="text-primary-600 hover:underline">Austin Pickleball Courts Directory</Link> — all 28 Austin-area courts with hours and contact info</li>
              </ul>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}
