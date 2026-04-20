import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Beginner\'s Guide to Pickleball - Learn the Basics',
  description: 'Complete beginner\'s guide to pickleball. Learn the rules, basic techniques, court etiquette, and everything you need to get started playing pickleball in Austin.',
  keywords: [
    'pickleball beginner',
    'learn pickleball',
    'how to play pickleball',
    'pickleball basics',
    'pickleball for beginners',
    'pickleball tutorial'
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/guides/beginner',
  },
}

export default function BeginnerGuidePage() {
  const publishedDate = '2025-01-01'
  const modifiedDate = new Date().toISOString().split('T')[0]
  
  return (
    <div>
      {/* Article Schema */}
      <Script
        id="article-schema-beginner"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Beginner\'s Guide to Pickleball - Learn the Basics',
            description: 'Complete beginner\'s guide to pickleball. Learn the rules, basic techniques, court etiquette, and everything you need to get started playing pickleball in Austin.',
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
              '@id': 'https://pickleballatx.org/guides/beginner'
            },
            articleSection: 'Guides',
            keywords: 'pickleball beginner, learn pickleball, how to play pickleball, pickleball basics'
          })
        }}
      />
      {/* BreadcrumbList Schema */}
      <Script
        id="breadcrumb-schema-beginner"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://pickleballatx.org'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Guides',
                item: 'https://pickleballatx.org/guides'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Beginner\'s Guide to Pickleball',
                item: 'https://pickleballatx.org/guides/beginner'
              }
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
            Beginner's Guide to Pickleball
          </h1>
          <p className="text-xl text-primary-50">
            Everything you need to know to get started with America's fastest-growing sport
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
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What is Pickleball?</h2>
              <p>
                Pickleball is a paddle sport that combines elements of tennis, badminton, and ping-pong. 
                It's played on a court about one-third the size of a tennis court with a perforated plastic 
                ball (similar to a wiffle ball) and solid paddles. The sport was invented in 1965 and has 
                become one of the fastest-growing sports in America, particularly popular among all age groups 
                due to its accessibility and social nature.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Why Pickleball is Great for Beginners</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Easy to Learn:</strong> The basic rules are simple and can be learned in minutes, 
              making it accessible to players of all ages and athletic backgrounds.</li>
              <li><strong>Low Impact:</strong> The smaller court and slower ball speed make pickleball 
              easier on joints than many other racquet sports, ideal for players of all fitness levels.</li>
              <li><strong>Social Sport:</strong> Pickleball is inherently social, with doubles play being 
              the most common format. It's easy to meet new people and make friends on the court.</li>
              <li><strong>Affordable:</strong> Equipment costs are relatively low, and many courts offer 
              free or low-cost access.</li>
              <li><strong>Quick Games:</strong> Games typically last 15-20 minutes, making it easy to fit 
              into busy schedules.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">The Court and Equipment</h2>
            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Court Dimensions</h3>
            <p>
              A pickleball court is 20 feet wide and 44 feet long (the same size as a doubles badminton court). 
              The court is divided into several key areas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Baseline:</strong> The back line of the court (22 feet from the net)</li>
              <li><strong>Non-Volley Zone (Kitchen):</strong> A 7-foot area on both sides of the net where 
              players cannot volley (hit the ball in the air). This is marked by a line 7 feet from the net.</li>
              <li><strong>Service Areas:</strong> The court is divided into right and left service areas on 
              each side, similar to tennis.</li>
              <li><strong>Center Line:</strong> Divides the service areas on each side of the court.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Essential Equipment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Paddle:</strong> Solid paddles made of wood, composite, or graphite. Beginners 
              often start with mid-weight paddles (7.5-8.0 ounces) for a balance of power and control.</li>
              <li><strong>Ball:</strong> Perforated plastic balls with 26-40 holes. Outdoor balls are heavier 
              with smaller holes, while indoor balls are lighter with larger holes.</li>
              <li><strong>Court Shoes:</strong> Non-marking court shoes with good lateral support are 
              recommended for safety and performance.</li>
            </ul>
            <p className="mt-4">
              For detailed equipment recommendations, visit our <Link href="/gear" className="text-primary-600 hover:underline">gear page</Link>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Basic Rules</h2>
            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Serving</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>The serve must be hit underhand with the paddle below the waist</li>
              <li>The ball must be served diagonally across the court to the opposite service area</li>
              <li>Only one serve attempt is allowed (no second serve like in tennis)</li>
              <li>The server must keep both feet behind the baseline when serving</li>
              <li>In doubles, each player serves until they fault, then service rotates to the other team</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">The Two-Bounce Rule</h3>
            <p>
              One of the most important rules for beginners to understand:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The receiving team must let the served ball bounce before returning it</li>
              <li>The serving team must also let the return bounce before hitting it</li>
              <li>After these two bounces, players can volley (hit the ball in the air) or let it bounce</li>
              <li>This rule prevents serve-and-volley dominance and creates longer rallies</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">The Non-Volley Zone (Kitchen)</h3>
            <p>
              The 7-foot area on both sides of the net is called the "kitchen" or non-volley zone:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Players cannot volley (hit the ball in the air) while standing in this zone</li>
              <li>Players can enter the kitchen to hit a ball that has bounced</li>
              <li>If a player's momentum carries them into the kitchen after volleying, it's a fault</li>
              <li>This rule prevents players from crowding the net and creates more strategic play</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Scoring</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Only the serving team can score points</li>
              <li>Games are typically played to 11 points, win by 2</li>
              <li>Tournament play may use games to 15 or 21 points</li>
              <li>Points are scored when the opposing team commits a fault</li>
              <li>In doubles, both players on a team serve before the serve goes to the other team</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Faults</h3>
            <p>
              A fault results in the loss of the point or serve. Common faults include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hitting the ball out of bounds</li>
              <li>Hitting the ball into the net</li>
              <li>Volleying from the non-volley zone (kitchen)</li>
              <li>Violating the two-bounce rule</li>
              <li>Stepping into the court before completing the serve</li>
              <li>Hitting the ball before it crosses the net</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Basic Techniques for Beginners</h2>
            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">The Serve</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stand behind the baseline with both feet behind the line</li>
              <li>Hold the paddle below your waist</li>
              <li>Use an underhand motion to hit the ball</li>
              <li>Aim for the opposite service area diagonally across</li>
              <li>Keep your serve deep to push opponents back</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">The Return of Serve</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Let the ball bounce (required by the two-bounce rule)</li>
              <li>Return the ball deep to keep opponents at the baseline</li>
              <li>Aim for the back third of the court</li>
              <li>Get to the kitchen line after returning (this is called "the third shot")</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">The Third Shot</h3>
            <p>
              After the return of serve, the serving team hits the "third shot." This is a critical shot:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Let the ball bounce (required by the two-bounce rule)</li>
              <li>Options: Hit a drop shot (soft shot into the kitchen) or drive (hard shot at opponents)</li>
              <li>Beginners should focus on getting the ball over the net and into play</li>
              <li>After the third shot, move toward the kitchen line</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">Positioning</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>At the Baseline:</strong> Stand 2-3 feet behind the baseline when serving or 
              receiving serve</li>
              <li><strong>At the Kitchen:</strong> After the two-bounce rule is satisfied, move to the 
              kitchen line (but not in the kitchen) for better court coverage</li>
              <li><strong>In Doubles:</strong> Communicate with your partner about who covers which shots</li>
              <li><strong>Side-to-Side:</strong> Move together as a team, covering the court efficiently</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Court Etiquette</h2>
            <p>
              Pickleball has a strong tradition of good sportsmanship and court etiquette:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Call Your Own Lines:</strong> Be honest about whether balls are in or out</li>
              <li><strong>Respect the "Out" Call:</strong> If your opponent calls a ball out, respect 
              their call even if you disagree</li>
              <li><strong>Wait for Quiet:</strong> Don't start a point if there's a ball from another 
              court rolling onto your court</li>
              <li><strong>Retrieve Balls Quickly:</strong> Return errant balls to the correct court promptly</li>
              <li><strong>Be Welcoming:</strong> Pickleball is known for being welcoming to beginners. 
              Be patient and encouraging</li>
              <li><strong>Follow Rotation Rules:</strong> At busy courts, follow the posted rotation 
              system or ask about local customs</li>
              <li><strong>Keep It Fun:</strong> Remember that pickleball is meant to be enjoyable. 
              Keep a positive attitude and have fun</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Getting Started in Austin</h2>
            <p>
              Ready to start playing? Here's how to get involved in Austin's pickleball community:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Find a Court:</strong> Use our <Link href="/courts" className="text-primary-600 hover:underline">court directory</Link> to 
              find a location near you. Many recreation centers offer free or low-cost access.</li>
              <li><strong>Start with Open Play:</strong> Many facilities have scheduled open play sessions 
              where players of all levels can drop in and join games. This is perfect for beginners.</li>
              <li><strong>Take a Lesson:</strong> Many facilities and instructors offer beginner lessons. 
              Check with your local recreation center or pickleball facility.</li>
              <li><strong>Join a Group:</strong> Look for local pickleball groups on social media or 
              community boards to find playing partners and learn about events.</li>
              <li><strong>Practice the Basics:</strong> Before your first game, practice serving and 
              basic shots. Many courts have practice walls or areas.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Common Beginner Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Standing Too Far Back:</strong> After the serve and return, move toward the 
              kitchen line. Many beginners stay at the baseline and lose points.</li>
              <li><strong>Hitting Too Hard:</strong> Power isn't everything in pickleball. Control and 
              placement are often more important than speed.</li>
              <li><strong>Forgetting the Two-Bounce Rule:</strong> Remember to let the serve and return 
              bounce before volleying.</li>
              <li><strong>Volleying from the Kitchen:</strong> Be aware of the non-volley zone and avoid 
              volleying while in it.</li>
              <li><strong>Not Communicating:</strong> In doubles, communication with your partner is 
              essential for covering the court effectively.</li>
              <li><strong>Giving Up on Balls:</strong> Many balls that look out actually land in. 
              Always try to return the ball if you're not certain it's out.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Next Steps</h2>
            <p>
              Now that you understand the basics, you're ready to start playing! Remember:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Everyone was a beginner once - don't be intimidated</li>
              <li>Focus on having fun and learning, not just winning</li>
              <li>Practice regularly to improve your skills</li>
              <li>Ask questions and learn from more experienced players</li>
              <li>Be patient with yourself - improvement takes time</li>
            </ul>
            <p className="mt-6">
              For more advanced techniques and strategies, check out our <Link href="/guides/improving-game" className="text-primary-600 hover:underline">guide to improving your game</Link>. 
              And don't forget to explore our <Link href="/courts" className="text-primary-600 hover:underline">court directory</Link> to find the perfect 
              place to play in Austin!
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Play?</h3>
              <p className="mb-4">
                Find the perfect court for your first game using our comprehensive directory.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/courts" className="btn btn-primary">Browse All Courts</Link>
                <Link href="/courts/free" className="btn btn-secondary">Free Courts Only</Link>
                <Link href="/guides/best-courts-beginners" className="btn btn-secondary">Best Courts for Beginners</Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Great Starter Courts in Austin</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/courts/dittmar-rec" className="flex items-start p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary-400 hover:shadow-sm transition-all">
                <span className="text-2xl mr-3">🆓</span>
                <div>
                  <div className="font-semibold text-gray-900">Dittmar Recreation Center</div>
                  <div className="text-sm text-gray-600">Free indoor open play, no reservation needed. Perfect first stop.</div>
                </div>
              </Link>
              <Link href="/courts/pan-am-rec" className="flex items-start p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary-400 hover:shadow-sm transition-all">
                <span className="text-2xl mr-3">🆓</span>
                <div>
                  <div className="font-semibold text-gray-900">Pan Am Recreation Center</div>
                  <div className="text-sm text-gray-600">8 indoor courts plus free outdoor courts next door.</div>
                </div>
              </Link>
              <Link href="/courts/south-austin-rec" className="flex items-start p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary-400 hover:shadow-sm transition-all">
                <span className="text-2xl mr-3">🏛️</span>
                <div>
                  <div className="font-semibold text-gray-900">South Austin Recreation Center</div>
                  <div className="text-sm text-gray-600">6 indoor courts, daily pass option, beginner-friendly atmosphere.</div>
                </div>
              </Link>
              <Link href="/courts/pickleland-pflugerville" className="flex items-start p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary-400 hover:shadow-sm transition-all">
                <span className="text-2xl mr-3">🏓</span>
                <div>
                  <div className="font-semibold text-gray-900">Pickleland (Pflugerville)</div>
                  <div className="text-sm text-gray-600">Equipment rental available — great if you don't have a paddle yet.</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

