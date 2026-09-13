import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'Disclaimer for Pickleball ATX - how court information is compiled, the limits of its accuracy, our independence from listed facilities, and our advertising and affiliate disclosures.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pickleballatx.org/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer - Pickleball ATX',
    description:
      'How court information is compiled, the limits of its accuracy, and our advertising and affiliate disclosures.',
    url: 'https://pickleballatx.org/disclaimer',
    type: 'website',
  },
}

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> September 13, 2026
        </p>

        <p className="text-gray-700 mb-8">
          Pickleball ATX is an independent directory of pickleball courts in the Austin, Texas area.
          This page explains where our information comes from, what we can and cannot vouch for, and
          how we make money. If anything here is unclear, please{' '}
          <Link href="/contact" className="text-primary-600 hover:underline">
            get in touch
          </Link>
          .
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Court Information May Be Out of Date
          </h2>
          <p className="text-gray-700 mb-4">
            Court listings are compiled from the facility&apos;s own website and signage, municipal
            parks and recreation listings, and first-hand visits. We correct pages as we learn about
            changes, and we date our updates where we can.
          </p>
          <p className="text-gray-700 mb-4">
            Even so, this information changes faster than any directory can track. Fees increase.
            Hours shift between seasons. Courts close for resurfacing, get converted back to tennis,
            or get taken over by a league for the evening. Venues change ownership or shut down.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>
              Please confirm hours, fees, reservation requirements, and availability with the facility
              directly before travelling
            </strong>
            &mdash; particularly if you are driving any distance, paying to play, or bringing a group.
            Every court page lists the venue&apos;s phone number and website where we have them.
          </p>
          <p className="text-gray-700 mb-4">
            We do not guarantee that any listing is complete, current, or error-free, and we are not
            responsible for a wasted trip, a closed facility, or a fee that has changed. If you find
            something wrong, telling us is the fastest way to get it fixed for the next person.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            We Are Not Affiliated With the Courts We List
          </h2>
          <p className="text-gray-700 mb-4">
            Pickleball ATX is not affiliated with, endorsed by, sponsored by, or operated in
            partnership with any of the courts, clubs, parks departments, or municipalities described
            on this site. Business names, logos, and trademarks belong to their respective owners and
            are used only to identify the facility being described.
          </p>
          <p className="text-gray-700 mb-4">
            Because we are independent, we cannot book courts, sell memberships or passes, register
            you for leagues, issue permits, or resolve disputes, refunds, or lost property. Those
            requests need to go to the facility.
          </p>
          <p className="text-gray-700 mb-4">
            Listings are free. We do not accept payment for inclusion, for ranking, or for a more
            favorable description.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Affiliate Disclosure</h2>
          <p className="text-gray-700 mb-4">
            Pickleball ATX participates in the Amazon Services LLC Associates Program, an affiliate
            advertising program designed to provide a means for sites to earn advertising fees by
            advertising and linking to Amazon.com. Some links on our gear and guide pages are
            affiliate links, which means we may earn a commission if you make a purchase after
            clicking one.
          </p>
          <p className="text-gray-700 mb-4">
            This costs you nothing extra, and it does not change what we recommend or how we describe
            a product. We are not paid by any paddle, shoe, or equipment manufacturer to feature their
            products.
          </p>
          <p className="text-gray-700 mb-4">
            Prices and availability shown for any product are accurate only as of the time they were
            written and can change without notice. Check the retailer&apos;s own page for current
            pricing before buying.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Advertising</h2>
          <p className="text-gray-700 mb-4">
            This site may display advertising served by third-party advertising partners. Those
            partners, not us, control which advertisements you see, and their presence on a page is
            not an endorsement of the advertiser by Pickleball ATX. Our{' '}
            <Link href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
            </Link>{' '}
            explains what data advertising partners may collect and how to opt out of personalized
            advertising.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Play at Your Own Risk
          </h2>
          <p className="text-gray-700 mb-4">
            Pickleball is a physical activity and carries a risk of injury. Nothing on this site is
            medical, fitness, or coaching advice, and we make no representation about the safety,
            condition, or suitability of any court, surface, or facility we describe. Court surfaces
            crack, lighting fails, and conditions change with weather.
          </p>
          <p className="text-gray-700 mb-4">
            You are responsible for assessing whether a facility and your own fitness are appropriate
            before you play, and for following the posted rules of whatever venue you are at. Consult
            a qualified professional about your health before starting a new activity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">External Links</h2>
          <p className="text-gray-700 mb-4">
            We link to facility websites, reservation systems, municipal pages, and retailers for your
            convenience. We do not control those sites and are not responsible for their content,
            accuracy, availability, or privacy practices. Following an external link means leaving
            this site and being governed by that site&apos;s terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Found an Error?</h2>
          <p className="text-gray-700 mb-4">
            We would rather be corrected than be wrong. If a listing is inaccurate, out of date, or
            describes a court that no longer exists, please{' '}
            <Link href="/contact" className="text-primary-600 hover:underline">
              contact us
            </Link>{' '}
            with the court name and what needs changing, and we will verify and update it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Policies</h2>
          <p className="text-gray-700 mb-4">
            See also our{' '}
            <Link href="/terms" className="text-primary-600 hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
