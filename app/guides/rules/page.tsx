import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Pickleball Rules & Scoring - Complete Guide',
  description: 'Learn the official pickleball rules, scoring system, serving rules, and common situations. Complete guide to understanding how pickleball is played.',
  keywords: [
    'pickleball rules',
    'pickleball scoring',
    'pickleball serving rules',
    'how to play pickleball',
    'pickleball game rules',
    'pickleball court rules'
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/guides/rules',
  },
}

export default function RulesPage() {
  return (
    <>
      {/* Article Schema */}
      <Script
        id="article-schema-rules"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Pickleball Rules & Scoring - Complete Guide',
            description: 'Comprehensive guide to official pickleball rules, scoring system, and game play.',
            author: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
            },
            datePublished: '2025-01-01',
            dateModified: '2025-01-31',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://pickleballatx.org/guides/rules',
            },
          }),
        }}
      />
      
      <div>
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="container-custom">
            <Link href="/guides" className="inline-flex items-center text-primary-100 hover:text-white mb-4">
              ← Back to Guides
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pickleball Rules & Scoring
            </h1>
            <p className="text-xl text-primary-50">
              Complete guide to understanding how pickleball is played
            </p>
            <p className="text-primary-100/90 text-sm mt-4">
              By Pickleball ATX · Published January 1, 2025 · Last updated January 31, 2025
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="lead">
                Understanding the rules of pickleball is essential for enjoying the game and playing correctly. 
                While pickleball combines elements of tennis, badminton, and ping-pong, it has its own unique 
                set of rules that make it distinct. This guide covers the official rules as established by 
                USA Pickleball, the sport's governing body in the United States.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Court Dimensions and Setup
              </h2>
              <p>
                A pickleball court is 20 feet wide and 44 feet long, divided into several key areas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Baseline:</strong> The back line of the court (22 feet from the net)</li>
                <li><strong>Non-Volley Zone (Kitchen):</strong> The 7-foot area on both sides of the net where 
                players cannot volley (hit the ball in the air)</li>
                <li><strong>Service Areas:</strong> The court is divided into right and left service areas on 
                each side</li>
                <li><strong>Center Line:</strong> Divides the service areas on each side of the net</li>
                <li><strong>Net Height:</strong> 36 inches at the sidelines, 34 inches at the center</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Scoring System
              </h2>
              <p>
                Pickleball uses a unique scoring system:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Games are played to 11 points</strong>, but you must win by 2 points</li>
                <li><strong>Tournament games</strong> may be played to 15 or 21 points, also win by 2</li>
                <li><strong>Only the serving team can score</strong> - if the receiving team wins the rally, 
                they gain the serve but don't score</li>
                <li><strong>Score is called as three numbers:</strong> Serving team's score, Receiving team's 
                score, Server number (1 or 2)</li>
                <li><strong>Example:</strong> "3-2-1" means serving team has 3, receiving team has 2, and 
                it's the first server's turn</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Serving Rules
              </h2>
              <p>
                Serving in pickleball has specific requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Underhand Serve:</strong> The serve must be hit underhand with the paddle below 
                the waist</li>
                <li><strong>Contact Point:</strong> The paddle must contact the ball below the server's navel</li>
                <li><strong>Foot Position:</strong> At least one foot must be behind the baseline when serving</li>
                <li><strong>Serve Motion:</strong> The serve must be an upward arc motion</li>
                <li><strong>Service Area:</strong> The serve must land in the diagonal service area (right 
                court serves to right court, left to left)</li>
                <li><strong>Two-Bounce Rule:</strong> After the serve, the ball must bounce once on each side 
                before volleys are allowed</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Double Bounce Rule
              </h2>
              <p>
                One of pickleball's most important rules:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The ball must bounce once on the receiving side after the serve</li>
                <li>The ball must then bounce once on the serving side after the return</li>
                <li>After these two bounces, players can volley (hit the ball in the air) or let it bounce</li>
                <li>This rule prevents serve-and-volley dominance and extends rallies</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Non-Volley Zone (The Kitchen)
              </h2>
              <p>
                The 7-foot non-volley zone is a critical area with specific rules:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No Volleying:</strong> Players cannot hit the ball in the air (volley) while 
                standing in the non-volley zone</li>
                <li><strong>Can Hit After Bounce:</strong> Players can hit the ball after it bounces in the 
                non-volley zone</li>
                <li><strong>Momentum Rule:</strong> If a player's momentum carries them into the non-volley 
                zone after a volley, it's a fault</li>
                <li><strong>Foot Placement:</strong> Any part of the body touching the non-volley zone during 
                a volley is a fault</li>
                <li><strong>Strategy:</strong> The kitchen is where most dinking (soft shots) occurs</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Serving Sequence in Doubles
              </h2>
              <p>
                Doubles play has a specific serving rotation:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>The first server serves from the right side</li>
                <li>If the serving team wins the point, the server moves to the left side and serves again</li>
                <li>If the serving team loses the rally, the serve goes to the second server on the same team</li>
                <li>When the second server loses the serve, the serve goes to the receiving team</li>
                <li>The receiving team's first server serves from the right side, and the pattern continues</li>
                <li>At the start of the game, only one player serves (the second server is skipped on the 
                first service turn)</li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Faults
              </h2>
              <p>
                A fault results in the loss of the rally. Common faults include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Serve Faults:</strong> Ball doesn't land in the correct service area, foot fault 
                (stepping on or over the baseline), hitting the ball above the waist</li>
                <li><strong>Volley Faults:</strong> Hitting a volley while in the non-volley zone, hitting 
                the ball out of bounds</li>
                <li><strong>Double Bounce:</strong> Hitting the ball before it bounces on your side (after 
                the serve and return)</li>
                <li><strong>Net Faults:</strong> Ball hits the net on a serve and doesn't land in the service 
                area, ball hits a permanent object before bouncing</li>
                <li><strong>Contact Faults:</strong> Hitting the ball twice, catching or carrying the ball</li>
                <li><strong>Non-Volley Zone Faults:</strong> Volleying from the kitchen, momentum carrying 
                you into the kitchen after a volley</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Let Serves
              </h2>
              <p>
                A "let" occurs when:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The serve hits the net but lands in the correct service area - the serve is replayed</li>
                <li>A player is not ready when the serve occurs (must be called immediately)</li>
                <li>There's interference from an outside source (ball from another court, etc.)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Line Calls
              </h2>
              <p>
                Understanding line calls is important for fair play:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Balls are "in" if they touch any part of the line</strong> - lines are considered 
                part of the court</li>
                <li><strong>Players make their own calls</strong> - honesty and sportsmanship are essential</li>
                <li><strong>If unsure, call it "in"</strong> - give your opponent the benefit of the doubt</li>
                <li><strong>No replays</strong> - if a ball is called out, the point is over</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Common Situations
              </h2>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ball Hits the Net During Play</h3>
                <p>If the ball hits the net during a rally and goes over, play continues. Only serves that hit 
                the net and land in the service area are replayed (let).</p>
              </div>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ball Bounces Twice</h3>
                <p>If the ball bounces twice on one side before being returned, it's a fault. The ball must 
                be returned before the second bounce.</p>
              </div>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Player Hits Ball Twice</h3>
                <p>If a player hits the ball twice with their paddle in one continuous motion, it's legal. 
                However, if there's a distinct second hit, it's a fault.</p>
              </div>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ball Hits Player or Clothing</h3>
                <p>If the ball hits a player or their clothing before bouncing, it's a fault. The ball must 
                hit the paddle or bounce first.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Singles vs. Doubles Rules
              </h2>
              <p>
                Most rules are the same, but there are key differences:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Singles:</strong> Only one serve per side (no second server). Server serves from 
                right side when score is even, left side when score is odd.</li>
                <li><strong>Doubles:</strong> Two serves per side (first and second server). More complex serving 
                rotation as described above.</li>
                <li><strong>Court Size:</strong> Same dimensions for both singles and doubles play.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Official Rules Resources
              </h2>
              <p>
                For the most current and detailed rules, refer to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>USA Pickleball:</strong> The official rulebook is available at{' '}
                <a href="https://usapickleball.org" target="_blank" rel="noopener noreferrer" 
                className="text-primary-600 hover:underline">usapickleball.org</a></li>
                <li><strong>International Federation of Pickleball (IFP):</strong> For international tournament rules</li>
                <li><strong>Local Leagues:</strong> Some local leagues may have modified rules - always check 
                with tournament or league organizers</li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Play?</h3>
                <p className="mb-4">
                  Now that you understand the rules, find a court near you! Check out our{' '}
                  <Link href="/courts" className="text-primary-600 hover:underline font-semibold">court directory</Link> to 
                  find pickleball facilities in Austin.
                </p>
                <p>
                  For more tips on getting started, visit our{' '}
                  <Link href="/guides/beginner" className="text-primary-600 hover:underline font-semibold">beginner's guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
