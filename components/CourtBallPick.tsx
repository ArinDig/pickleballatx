import Image from 'next/image'
import Link from 'next/link'

/*
  Court-type-aware ball recommendation for court detail pages (added Oct 2026).

  Why this exists: every PB affiliate link used to live on /gear and the beginner-gear
  guide, which almost nobody lands on. Search traffic arrives on the court pages, which
  had zero product placements. This puts one genuinely useful recommendation where the
  reader already is: outdoor and indoor pickleballs are different products, and bringing
  the wrong one is a common beginner mistake.

  Both ASINs verified in stock on Amazon, 10 Oct 2026:
    B074P8MZW9  Franklin X-40 Outdoor  — 4.7 stars
    B07PVPZTPH  Franklin X-26 Indoor   — 4.4 stars, 1,664 reviews
  Re-check before relying on them; out-of-stock links earn nothing and look neglected.

  Deliberately no paddle here: the beginner paddle on /gear (ONIX Z5, B005BSW2UW) showed
  "Only 1 left in stock" on the same date, and pinning a near-sold-out product to 27 pages
  is worse than linking to /gear.

  rel="sponsored" is required by Google for affiliate links — it matters for AdSense review.
*/

const TAG = 'adiaustin-pb-20'

const BALLS = {
  outdoor: {
    asin: 'B074P8MZW9',
    name: 'Franklin X-40 Outdoor Pickleballs',
    image: 'https://m.media-amazon.com/images/I/71ttt0pVlCL._AC_SX679_.jpg',
    why: 'Harder plastic and 40 smaller holes, so they hold a truer line in the wind and survive concrete. The ball most outdoor tournaments use.',
  },
  indoor: {
    asin: 'B07PVPZTPH',
    name: 'Franklin X-26 Indoor Pickleballs',
    image: 'https://m.media-amazon.com/images/I/61nac98gL2L._AC_SX679_.jpg',
    why: 'Softer, lighter and 26 larger holes, made for gym floors and climate-controlled courts. An outdoor ball bounces too fast and loud indoors.',
  },
} as const

type CourtType = 'indoor' | 'outdoor' | 'both'

export default function CourtBallPick({
  courtType,
  courtName,
}: {
  courtType: CourtType
  courtName: string
}) {
  const picks =
    courtType === 'both' ? [BALLS.outdoor, BALLS.indoor] : [BALLS[courtType]]

  const lead =
    courtType === 'both'
      ? `${courtName} has both indoor and outdoor courts, and they call for different balls.`
      : courtType === 'indoor'
        ? `${courtName}'s courts are indoor, which means an indoor ball.`
        : `${courtName}'s courts are outdoor, which means an outdoor ball.`

  return (
    <section className="container-custom py-10 border-t border-gray-200">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Bring the Right Ball</h2>
        <p className="text-gray-700 mb-6">
          {lead} Indoor and outdoor pickleballs are built differently, and bringing the
          wrong one is one of the most common beginner mistakes.
        </p>

        <div className={`grid gap-4 ${picks.length > 1 ? 'md:grid-cols-2' : ''}`}>
          {picks.map((b) => (
            <a
              key={b.asin}
              href={`https://www.amazon.com/dp/${b.asin}/?tag=${TAG}`}
              target="_blank"
              rel="sponsored noopener nofollow"
              className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-400 hover:shadow-sm transition-all"
            >
              <Image
                src={b.image}
                alt={b.name}
                width={96}
                height={96}
                className="flex-shrink-0 rounded object-contain bg-white"
              />
              <div>
                <div className="font-semibold text-gray-900">{b.name}</div>
                <p className="text-sm text-gray-600 mt-1">{b.why}</p>
                <span className="inline-block mt-2 text-sm font-semibold text-primary-600">
                  View on Amazon &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Need a paddle or bag too? See our{' '}
          <Link href="/gear" className="text-primary-600 hover:underline">
            pickleball gear picks
          </Link>
          .
        </p>
        <p className="text-xs text-gray-500 mt-2">
          As an Amazon Associate, Pickleball ATX earns from qualifying purchases. This does not
          change what we recommend.{' '}
          <Link href="/disclaimer" className="underline">
            Disclosure
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
