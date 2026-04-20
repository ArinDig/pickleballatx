import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FaArrowLeft } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Indoor vs. Outdoor Pickleball: Which Is Right for You?',
  description: 'Comparing indoor and outdoor pickleball courts in Austin, TX. Differences in balls, surfaces, conditions, cost, and play style — and how to choose the right option for your game.',
  keywords: [
    'indoor vs outdoor pickleball',
    'indoor pickleball Austin',
    'outdoor pickleball Austin',
    'pickleball court differences',
    'pickleball indoor outdoor balls',
    'climate controlled pickleball Austin',
    'outdoor pickleball Texas heat',
    'pickleball court surface differences'
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/guides/indoor-vs-outdoor',
  },
}

export default function IndoorVsOutdoorPage() {
  const publishedDate = '2026-02-01'
  const modifiedDate = new Date().toISOString().split('T')[0]

  return (
    <div>
      {/* Article Schema */}
      <Script
        id="article-schema-indoor-outdoor"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Indoor vs. Outdoor Pickleball: Which Is Right for You?',
            description: 'Comparing indoor and outdoor pickleball in Austin — surfaces, balls, conditions, cost, and play style differences, plus how to choose.',
            image: 'https://pickleballatx.org/images/og-image.jpg',
            datePublished: publishedDate,
            dateModified: modifiedDate,
            author: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
              url: 'https://pickleballatx.org'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
              logo: {
                '@type': 'ImageObject',
                url: 'https://pickleballatx.org/images/logo.png'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://pickleballatx.org/guides/indoor-vs-outdoor'
            },
            articleSection: 'Guides',
            keywords: 'indoor pickleball, outdoor pickleball, indoor vs outdoor pickleball Austin'
          })
        }}
      />
      <Script
        id="breadcrumb-schema-indoor-outdoor"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pickleballatx.org' },
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://pickleballatx.org/guides' },
              { '@type': 'ListItem', position: 3, name: 'Indoor vs. Outdoor Pickleball', item: 'https://pickleballatx.org/guides/indoor-vs-outdoor' }
            ]
          })
        }}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <Link href="/guides" className="inline-flex items-center text-primary-100 hover:text-white mb-4">
            <FaArrowLeft className="mr-2" />
            Back to Guides
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Indoor vs. Outdoor Pickleball: Which Is Right for You?
          </h1>
          <p className="text-xl text-primary-50">
            How the two formats differ — and why it matters more in Austin than most places
          </p>
          <p className="text-primary-100/90 text-sm mt-4">
            By Pickleball ATX · Published February 1, 2026 · Last updated {modifiedDate}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-gray-800">
                Pickleball is pickleball — same rules, same court dimensions, same scoring. But indoor
                and outdoor play feel noticeably different, and in Austin those differences are amplified
                by the climate. This guide breaks down what changes between the two settings and helps
                you figure out which one fits your game, your schedule, and your tolerance for Texas heat.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">The Biggest Difference: The Ball</h2>
            <p>
              Most people assume the court surface or weather is what separates indoor and outdoor
              pickleball. The real differentiator is the ball — and it changes the feel of the game
              more than anything else.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Outdoor Balls</h3>
            <p>
              Outdoor pickleball balls are heavier, harder, and have smaller holes (typically 40 holes).
              They&apos;re designed to handle wind — the extra weight keeps them from getting pushed around —
              and to hold up against rough outdoor court surfaces like asphalt and concrete. The harder
              construction means a faster, lower bounce.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flight:</strong> More stable in wind due to heavier construction</li>
              <li><strong>Bounce:</strong> Lower, harder, faster off the court surface</li>
              <li><strong>Feel:</strong> Less control, more power-oriented play</li>
              <li><strong>Durability:</strong> Can crack in cold weather; wear faster on rough surfaces</li>
              <li><strong>Common brands:</strong> Onix Pure 2, Franklin X-40, Dura Fast 40</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Indoor Balls</h3>
            <p>
              Indoor balls are lighter, softer, and have larger holes (typically 26 holes). Without
              wind to contend with, they don&apos;t need the extra weight — and the softer construction
              creates a higher, slower bounce off smooth gym floors. The result is a game with longer
              rallies, more dinking, and more emphasis on touch and placement over raw power.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flight:</strong> Floatier, more affected by spin</li>
              <li><strong>Bounce:</strong> Higher, softer, slower</li>
              <li><strong>Feel:</strong> More control, softer touch, rewards finesse</li>
              <li><strong>Durability:</strong> Last longer than outdoor balls; less prone to cracking</li>
              <li><strong>Common brands:</strong> Onix Fuse, Gamma Photon, Jugs</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 my-6">
              <p className="text-gray-800 font-medium">
                💡 <strong>Practical note:</strong> If you play both formats, carry both ball types.
                Showing up to an indoor open play session with outdoor balls (or vice versa) is a
                common beginner mistake. Most facilities provide balls during open play, but if
                you&apos;re organizing your own game, match the ball to the surface.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Court Surfaces</h2>
            <p>
              Court surface affects how you move, how the ball bounces, and what footwear you should wear.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Outdoor Surfaces</h3>
            <p>
              Most outdoor pickleball courts in Austin are asphalt or concrete, often with an acrylic
              coating applied over the top. The coating provides some cushioning and improves grip,
              but these surfaces are still significantly harder than indoor alternatives. After a few
              hours of outdoor play, your knees and feet will notice.
            </p>
            <p>
              Outdoor surfaces also change with weather. They can be slippery when wet, and in Austin&apos;s
              summer heat, asphalt courts can get genuinely hot — both underfoot and radiating upward.
              Some Austin courts have shade structures that help (Pickle Hub&apos;s outdoor courts have
              covered areas), but most don&apos;t.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Indoor Surfaces</h3>
            <p>
              Indoor courts are almost always either hardwood (converted gym floors) or sport court
              tiles — both significantly more forgiving than asphalt. The cushioning reduces joint
              fatigue during longer sessions, which is why many serious players actually prefer indoor
              play for practice and tournaments regardless of the weather.
            </p>
            <p>
              Indoor surfaces require non-marking court shoes — the same type used for volleyball or
              tennis indoors. Running shoes can damage gym floors and may not be allowed at some
              facilities. Always check before showing up.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">How Play Style Differs</h2>
            <p>
              The ball and surface differences add up to a genuinely different game feel between
              indoor and outdoor play — not just slightly different, but distinct enough that dedicated
              players often have clear preferences.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Outdoor Play Style</h3>
            <p>
              Outdoor pickleball tends to be faster and more power-oriented. The harder ball comes
              off the paddle with more pace, the lower bounce forces quicker reactions, and wind
              can affect shot trajectory in ways that reward adaptability. Drive shots and aggressive
              net play work well outdoors because the ball&apos;s speed rewards hard hitters.
            </p>
            <p>
              Wind is the wild card outdoors. A steady crosswind changes how you position lobs,
              how you aim your serves, and how you time overheads. Learning to play in Austin&apos;s
              variable wind conditions is a skill in itself.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Indoor Play Style</h3>
            <p>
              Indoor pickleball rewards patience and precision. The softer, higher-bouncing ball
              creates more opportunities for the dinking game — the slow, strategic exchanges at
              the kitchen line that define high-level pickleball. Spin is more effective indoors
              because the lighter ball responds more dramatically to it.
            </p>
            <p>
              Many coaches actually recommend that beginners start indoors, because the slower pace
              gives you more time to develop proper form, footwork, and court positioning without
              being overwhelmed by a hard, fast outdoor ball.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">The Austin Factor: Why This Matters More Here</h2>
            <p>
              In most parts of the country, the indoor vs. outdoor choice is primarily about personal
              preference. In Austin, it becomes a practical necessity for a significant chunk of the year.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Summer Heat (May–September)</h3>
            <p>
              Austin summers are legitimately dangerous for sustained outdoor physical activity.
              Temperatures regularly exceed 100°F from June through August, with heat index values
              that can push the felt temperature well past that. Outdoor pickleball at 2pm in July
              is a heat exhaustion risk, not just discomfort.
            </p>
            <p>
              During peak summer months, most serious Austin players shift primarily to indoor courts.
              The city&apos;s indoor options — Dittmar Recreation Center, South Austin Rec, Pan Am,
              Austin Pickle Ranch, and Pickleland in Pflugerville — all offer climate-controlled
              environments that make year-round consistent play possible.
            </p>
            <p>
              If you do play outdoors in summer, limit it to early morning (before 9am) or evening
              (after 7pm), bring significantly more water than you think you need, and watch yourself
              and your partners for signs of heat illness.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">The Pleasant Season (October–April)</h3>
            <p>
              Austin&apos;s outdoor courts shine from October through April. Temperatures are mild,
              wind is manageable, and the city&apos;s park courts are genuinely enjoyable. This is when
              outdoor play at spots like the Pan American Neighborhood Park, Little Zilker, and
              Austin High Tennis Center is at its best.
            </p>
            <p>
              Spring and fall are when Austin&apos;s outdoor pickleball community is most active.
              If you&apos;re new to the sport and want to experience the outdoor game at its best,
              plan for this window.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Storms and Unpredictability</h3>
            <p>
              Austin weather can shift quickly — a sunny morning can become a thunderstorm by
              afternoon without much warning. If you&apos;re committing to a regular outdoor play
              schedule, build in flexibility. Many Austin players keep an indoor backup option
              in their rotation specifically for weather-cancelled outdoor sessions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Cost Comparison</h2>
            <p>
              Outdoor courts in Austin tend to be cheaper — many are free. Indoor courts typically
              involve facility fees, memberships, or court rental costs. Here&apos;s a rough breakdown:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Option</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Typical Cost</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Free outdoor public courts</td>
                    <td className="border border-gray-300 p-3">$0</td>
                    <td className="border border-gray-300 p-3">Pan Am Park, Little Zilker, Austin High</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">City rec center (indoor)</td>
                    <td className="border border-gray-300 p-3">$3 day pass / $25 month</td>
                    <td className="border border-gray-300 p-3">Dittmar (free!), South Austin Rec, Pan Am Rec</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Dedicated club membership</td>
                    <td className="border border-gray-300 p-3">$75–$89/month</td>
                    <td className="border border-gray-300 p-3">Pickleland, Pickleball Kingdom</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Premium facility (day rate)</td>
                    <td className="border border-gray-300 p-3">$15–$30/session</td>
                    <td className="border border-gray-300 p-3">Austin Pickle Ranch, Austin Tennis &amp; Pickleball Center</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              For most Austin players, the ideal setup is free or low-cost outdoor courts during
              the cooler months, and a rec center day pass or club membership during the summer.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Which Should You Choose?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">Go Outdoor If...</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ It&apos;s between October and April</li>
                  <li>✓ You&apos;re on a budget and want free options</li>
                  <li>✓ You like faster-paced, power-based play</li>
                  <li>✓ You want to play in a park setting</li>
                  <li>✓ You&apos;re a morning or evening player in summer</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Go Indoor If...</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ It&apos;s May through September</li>
                  <li>✓ You prefer a slower, more tactical game</li>
                  <li>✓ You have joint issues (softer surfaces)</li>
                  <li>✓ You want consistent, weather-proof play</li>
                  <li>✓ You&apos;re training for tournament play</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">The Smart Play: Do Both</h2>
            <p>
              Most experienced Austin players don&apos;t pick one over the other — they use both depending
              on the season and what they&apos;re trying to get out of a session. Outdoor play builds
              adaptability and power. Indoor play develops touch, patience, and the dinking game.
              Players who develop proficiency in both formats are more complete and more versatile
              in competitive situations.
            </p>
            <p>
              If you&apos;re just starting out, begin wherever is most accessible and affordable to you.
              Once you&apos;re hooked on the sport, experimenting with both settings will make you a
              better player.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Find Your Court</h3>
              <p className="mb-4">
                Browse Austin&apos;s indoor and outdoor options side by side and find the right fit
                for your schedule and budget.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/courts/indoor" className="btn btn-primary">
                  Indoor Courts
                </Link>
                <Link href="/courts/outdoor" className="btn btn-secondary">
                  Outdoor Courts
                </Link>
                <Link href="/courts/free" className="btn btn-secondary">
                  Free Courts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
