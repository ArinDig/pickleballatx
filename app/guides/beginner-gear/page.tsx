import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { FaArrowLeft, FaExternalLinkAlt, FaCheckCircle, FaStar } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Best Pickleball Gear for Beginners in Austin, TX (2026 Guide)',
  description: 'Just starting pickleball in Austin? Here\'s exactly what gear you need to buy — and what to skip. Beginner-friendly recommendations for paddles, balls, shoes, and bags with honest reviews.',
  keywords: [
    'best pickleball gear beginners',
    'pickleball equipment beginners austin',
    'what to buy pickleball beginner',
    'beginner pickleball paddle',
    'cheap pickleball paddle',
    'pickleball starter kit',
    'pickleball gear austin texas',
    'best pickleball paddle under 100',
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/guides/beginner-gear',
  },
}

const AMAZON_TAG = 'adiaustin-20'

function amazonUrl(asin: string) {
  return `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`
}

const picks = [
  {
    label: 'Best Overall Beginner Paddle',
    name: 'ONIX Graphite Z5 Pickleball Paddle',
    asin: 'B005BSW2UW',
    price: '~$60–80',
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/91MGvMxCbFL._AC_SX679_.jpg',
    why: 'The Z5 has been a top-selling beginner paddle for years for good reason. The graphite face gives you a solid pop without being overwhelming, and the price makes it easy to commit before you know exactly what you like. Plenty of Austin open-play regulars started on this paddle.',
    proscons: {
      pros: ['Affordable', 'Durable graphite face', 'Good pop for beginners', 'Widely available'],
      cons: ['Mid-weight (heavier than graphite-only paddles)', 'Not ideal for advanced spin play'],
    },
  },
  {
    label: 'Best Budget Upgrade',
    name: 'Paddletek Tempest Wave Pro Pickleball Paddle',
    asin: 'B0D1YMMN2P',
    price: '~$80–100',
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/61Z-xW2GYGL._AC_SX679_.jpg',
    why: 'If you\'ve played a few times and want a step up without spending $150+, the Tempest Wave Pro is excellent. Polymer core and fiberglass face give you a softer touch and better control — important when you\'re learning to dink.',
    proscons: {
      pros: ['Excellent control', 'Soft touch', 'Great for learning the kitchen game', 'Lightweight'],
      cons: ['Less power than graphite paddles', 'Takes time to appreciate the feel'],
    },
  },
  {
    label: 'Best Beginner Ball (Outdoor)',
    name: 'Franklin X-40 Performance Pickleball Balls (12-Pack)',
    asin: 'B074P8MZW9',
    price: '~$25–35',
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/71ttt0pVlCL._AC_SX679_.jpg',
    why: 'The Franklin X-40 is the most popular ball at Austin\'s outdoor courts and is used in many local tournaments. Buying a 12-pack is practical — outdoor balls wear faster on rough court surfaces. USAPA approved.',
    proscons: {
      pros: ['Standard ball at most Austin outdoor courts', 'USAPA approved', 'Consistent bounce', 'Good value in bulk'],
      cons: ['Outdoor only (different from indoor balls)', 'Can crack in extreme cold'],
    },
  },
  {
    label: 'Best Court Shoes for Beginners',
    name: 'ASICS Gel-Rocket 10 Volleyball Shoes',
    asin: 'B08VS7473J',
    price: '~$55–70',
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/51On8-rbGBL._AC_SY695_.jpg',
    why: 'Running shoes are the #1 injury risk for new pickleball players. Court shoes like the Gel-Rocket give you the lateral support and non-marking sole you need. The ASICS is one of the best value options and works on both indoor and outdoor courts.',
    proscons: {
      pros: ['Excellent lateral support', 'Non-marking sole', 'Comfortable out of the box', 'Works indoors and outdoors'],
      cons: ['Not pickleball-specific branding', 'Runs slightly narrow for wide feet'],
    },
  },
  {
    label: 'Best Beginner Bag',
    name: 'Onix Pickleball Paddle Bag',
    asin: 'B0778VJXRX',
    price: '~$25–40',
    rating: 4.4,
    image: 'https://m.media-amazon.com/images/I/91+OshSKaUL._AC_SX679_.jpg',
    why: 'You don\'t need a $100 bag when you\'re starting out. The Onix bag holds 2–4 paddles and has pockets for balls and accessories. Simple, affordable, and does the job. Upgrade when you know you\'re committed to the sport.',
    proscons: {
      pros: ['Very affordable', 'Fits 2–4 paddles', 'Multiple pockets', 'Lightweight'],
      cons: ['No shoe compartment', 'Basic construction'],
    },
  },
]

export default function BeginnerGearPage() {
  const publishedDate = '2026-03-28'

  return (
    <div>
      <Script
        id="article-schema-beginner-gear"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Best Pickleball Gear for Beginners in Austin, TX (2026 Guide)',
            description: 'Honest, beginner-friendly pickleball gear recommendations for Austin players — paddles, balls, shoes, and bags.',
            image: 'https://pickleballatx.org/images/og-image.jpg',
            datePublished: publishedDate,
            dateModified: publishedDate,
            author: { '@type': 'Organization', name: 'Pickleball ATX', url: 'https://pickleballatx.org' },
            publisher: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
              logo: { '@type': 'ImageObject', url: 'https://pickleballatx.org/images/logo.png' },
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://pickleballatx.org/guides/beginner-gear' },
            articleSection: 'Guides',
            keywords: 'pickleball gear beginners, best pickleball paddle beginner, pickleball shoes, austin pickleball equipment',
          }),
        }}
      />
      <Script
        id="breadcrumb-schema-beginner-gear"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pickleballatx.org' },
              { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://pickleballatx.org/guides' },
              { '@type': 'ListItem', position: 3, name: 'Best Pickleball Gear for Beginners', item: 'https://pickleballatx.org/guides/beginner-gear' },
            ],
          }),
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
            Best Pickleball Gear for Beginners in Austin (2026)
          </h1>
          <p className="text-xl text-primary-50">
            What to buy, what to skip, and where to play once you're geared up
          </p>
          <p className="text-primary-100/90 text-sm mt-4">
            By Pickleball ATX · Published March 28, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="max-w-4xl mx-auto">

          {/* Affiliate Disclosure */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-sm text-gray-600">
            <strong>Disclosure:</strong> This page contains Amazon affiliate links. If you purchase through our links, we may earn a small commission at no extra cost to you. This helps us keep Pickleball ATX free and up to date.
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">

            <p className="text-xl font-medium text-gray-800">
              So you've decided to try pickleball — great choice. Austin has one of the best pickleball communities in Texas, and getting started is easier than you think. But before you buy anything, here's the honest truth:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">The 3 things you actually need to start:</p>
              <ul className="list-none space-y-1">
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2 flex-shrink-0" /> A beginner-friendly paddle ($40–$100)</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2 flex-shrink-0" /> Outdoor pickleballs (or borrow some at your first session)</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-500 mr-2 flex-shrink-0" /> Court shoes with lateral support (not running shoes)</li>
              </ul>
              <p className="mt-3 text-sm">Everything else — fancy bags, gloves, custom grips — can wait until you know you love the game.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">Austin-Specific Advice Before You Buy</h2>
            <p>
              A few things that matter specifically in Austin:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Outdoor courts dominate.</strong> Most of Austin's free public courts are outdoor, so buy outdoor balls (Franklin X-40 or similar), not indoor ones. Indoor balls are softer and wear faster on rough outdoor surfaces.</li>
              <li><strong>It gets hot.</strong> From May through October, playing outdoors means sweating a lot. A grip overgrip ($8–$15) on your paddle helps with control. Consider a light moisture-wicking shirt over athletic gear.</li>
              <li><strong>Start at a free court.</strong> You can play at Dittmar Recreation Center, South Austin Rec Center, or Pan Am for free. No need to pay for court time to learn. See our <Link href="/courts/free" className="text-primary-600 hover:underline">free courts in Austin</Link> list.</li>
              <li><strong>Borrow before you buy.</strong> Many open-play sessions have loaner paddles or friendly players who'll let you try theirs. Go once before spending money if you can.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">Our Top Picks for Beginners</h2>
          </div>

          {/* Product Picks */}
          <div className="space-y-10 mt-4">
            {picks.map((pick) => (
              <div key={pick.asin} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="bg-primary-600 text-white text-sm font-semibold px-4 py-2">
                  {pick.label}
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 w-full md:w-40 h-40 relative bg-gray-50 rounded-lg overflow-hidden">
                      <Image
                        src={pick.image}
                        alt={pick.name}
                        fill
                        className="object-contain"
                        sizes="160px"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{pick.name}</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.floor(pick.rating) ? 'text-yellow-400' : 'text-gray-200'} />
                          ))}
                        </div>
                        <span className="text-gray-600 text-sm">{pick.rating}/5</span>
                        <span className="text-primary-600 font-semibold">{pick.price}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{pick.why}</p>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <p className="font-semibold text-green-700 mb-1">Pros</p>
                          <ul className="space-y-1">
                            {pick.proscons.pros.map((p) => (
                              <li key={p} className="flex items-start text-gray-600">
                                <span className="text-green-500 mr-1">+</span> {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-red-700 mb-1">Cons</p>
                          <ul className="space-y-1">
                            {pick.proscons.cons.map((c) => (
                              <li key={c} className="flex items-start text-gray-600">
                                <span className="text-red-400 mr-1">−</span> {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <a
                        href={amazonUrl(pick.asin)}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2.5 rounded-lg transition-colors"
                      >
                        View on Amazon <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional advice sections */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-12">

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">What About Sets and Bundles?</h2>
            <p>
              Amazon is full of "complete pickleball starter sets" in the $30–$50 range. These usually include 2 paddles, 4 balls, and a bag. They work fine for your first time playing in a backyard or driveway, but they're not what you'd want at a real court.
            </p>
            <p>
              The paddles in these sets are typically heavy wood or low-grade composite that doesn't give you accurate feedback on how a real paddle feels. Once you get serious, you'll end up buying a real paddle anyway. Better to skip straight to a real beginner paddle from the list above.
            </p>
            <p>
              <strong>Exception:</strong> If you want to buy one set to try in your backyard before committing, that's a fine approach. Just know you'll likely want to upgrade within a few weeks.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">What Skill Level Are You?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-left">Level</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Recommended Paddle</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Budget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Complete beginner (first time)</td>
                    <td className="border border-gray-200 px-4 py-2">ONIX Graphite Z5</td>
                    <td className="border border-gray-200 px-4 py-2">$60–80</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Casual player (1–3 months in)</td>
                    <td className="border border-gray-200 px-4 py-2">Paddletek Tempest Wave Pro</td>
                    <td className="border border-gray-200 px-4 py-2">$80–100</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Getting serious (3–6 months)</td>
                    <td className="border border-gray-200 px-4 py-2">JOOLA Ben Johns Hyperion or Selkirk</td>
                    <td className="border border-gray-200 px-4 py-2">$100–160</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">Gear You Don't Need Yet</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>A premium $150+ paddle.</strong> You won't feel the difference until you're consistently playing 2–3 times a week and working on specific shots.</li>
              <li><strong>A pickleball machine.</strong> Great for drilling, completely unnecessary when learning.</li>
              <li><strong>Pickleball-specific gloves.</strong> Useful for some players in cold weather or with grip issues — definitely not day one gear.</li>
              <li><strong>Multiple paddles.</strong> One good beginner paddle is all you need.</li>
              <li><strong>An expensive bag.</strong> A simple tote or the Onix bag above is fine until you know how much gear you actually accumulate.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">Ready to Play? Find a Court in Austin</h2>
            <p>
              Now that you've got your gear, the next step is getting on a court. Austin has over 25 locations to choose from — including several that are completely free.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="/courts/free"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Find Free Courts in Austin
              </Link>
              <Link
                href="/courts"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
              >
                Browse All Courts
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">More Resources for New Players</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><Link href="/guides/beginner" className="text-primary-600 hover:underline">Beginner's Guide to Pickleball</Link> — rules, scoring, court etiquette, and basic techniques</li>
              <li><Link href="/guides/choosing-paddle" className="text-primary-600 hover:underline">How to Choose a Pickleball Paddle</Link> — deeper dive into materials, weight, and grip size</li>
              <li><Link href="/guides/rules" className="text-primary-600 hover:underline">Pickleball Rules & Scoring</Link> — so you know what's going on when you show up to open play</li>
              <li><Link href="/gear" className="text-primary-600 hover:underline">Full Gear Page</Link> — all our product recommendations including intermediate and advanced gear</li>
            </ul>

          </div>
        </div>
      </section>
    </div>
  )
}
