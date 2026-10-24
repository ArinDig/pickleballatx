import Image from 'next/image'
import Link from 'next/link'

/*
  Small, page-specific Amazon picks block (added Oct 2026).

  Why: /courts/free and /events are PB's two highest-traffic pages (about 80% of search clicks
  in Sep–Oct 2026) and had no affiliate placements. Each page passes its own short list so the
  picks match what the reader is doing there; nothing here is a generic "shop" block.

  Every ASIN used with this component was checked on Amazon on 24 Oct 2026 for title, rating,
  image and stock. Re-check before relying on them (the 1st/15th affiliate link check covers PB).
  No prices on purpose: they drift, and a stale price looks worse than none.

  rel="sponsored" is required by Google for affiliate links.
*/

const TAG = 'adiaustin-pb-20'

export type GearPick = {
  asin: string
  name: string
  image: string
  label: string
  why: string
}

export default function GearPicks({
  title,
  intro,
  picks,
  checked = 'October 24, 2026',
  embedded = false,
}: {
  title: string
  intro: string
  picks: GearPick[]
  checked?: string
  /** true when placed inside a page's existing content column (no outer container/padding) */
  embedded?: boolean
}) {
  const box = (
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 mb-6">{intro}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {picks.map((p) => (
            <a
              key={p.asin}
              href={`https://www.amazon.com/dp/${p.asin}/?tag=${TAG}`}
              target="_blank"
              rel="sponsored noopener nofollow"
              className="flex gap-4 items-start rounded-lg p-4 border border-gray-200 hover:border-primary-400 hover:shadow-sm transition-all"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={88}
                height={88}
                className="flex-shrink-0 rounded object-contain bg-white"
              />
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary-700 mb-1">
                  {p.label}
                </span>
                <div className="font-semibold text-gray-900">{p.name}</div>
                <p className="text-sm text-gray-600 mt-1">{p.why}</p>
                <span className="inline-block mt-2 text-sm font-semibold text-primary-600">
                  View on Amazon &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-5">
          More options, including paddles for every budget, in our{' '}
          <Link href="/gear" className="text-primary-600 hover:underline">
            gear picks
          </Link>{' '}
          and{' '}
          <Link href="/guides/beginner-gear" className="text-primary-600 hover:underline">
            beginner gear guide
          </Link>
          .
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Products checked on Amazon {checked}. As an Amazon Associate, Pickleball ATX earns from
          qualifying purchases. This does not change what we recommend.{' '}
          <Link href="/disclaimer" className="underline">
            Disclosure
          </Link>
          .
        </p>
      </div>
  )
  return embedded ? box : <section className="container-custom py-10">{box}</section>
}
