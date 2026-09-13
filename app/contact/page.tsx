import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import { FaEnvelope, FaInfoCircle, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact Us - Pickleball ATX',
  description:
    'Get in touch with Pickleball ATX. Report a court that has changed, submit a court we are missing, or ask about pickleball in the Austin area.',
  alternates: {
    canonical: 'https://pickleballatx.org/contact',
  },
  openGraph: {
    title: 'Contact Us - Pickleball ATX',
    description:
      'Report a court that has changed, submit a court we are missing, or ask about pickleball in the Austin area.',
    url: 'https://pickleballatx.org/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-50">
            Corrections are the most useful thing you can send us.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-4">
              Pickleball ATX is a directory of pickleball courts across Austin and the surrounding
              area &mdash; public parks and recreation centers, dedicated indoor clubs, and the bars
              and restaurants that have put courts in. We track court counts, surface type, lighting,
              fees, and whether you need a reservation.
            </p>
            <p className="text-gray-700 mb-8">
              Courts change constantly. Fees go up, hours shift with the season, resurfacing closes a
              park for a month, and venues open and close. If something on the site is wrong, telling
              us is genuinely the most valuable message we get.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600">
                    <FaEnvelope className="text-xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <p className="mt-1 text-gray-600">
                    <a
                      href="mailto:info@pickleballatx.org"
                      className="text-primary-600 hover:underline"
                    >
                      info@pickleballatx.org
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    A real person reads this. We are a small operation, so replies are not instant.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Where We Cover</h3>
                  <p className="mt-1 text-gray-600">
                    Austin and the surrounding metro &mdash; including Pflugerville, Cedar Park and
                    Lakeline, Anderson Mill, and the Lake Travis area. We are based in Austin, Texas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600">
                    <FaInfoCircle className="text-xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Reporting a Correction</h3>
                  <p className="mt-2 text-gray-600">
                    The more specific you can be, the faster we can fix it. Helpful details:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>&bull; Which court, by name or the page URL</li>
                    <li>&bull; What is wrong, and what it should say instead</li>
                    <li>&bull; How you know &mdash; you play there, you called, a posted sign</li>
                    <li>&bull; When you were last there, if you are reporting a closure</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-500">
                    We check reported changes against the facility or the city&apos;s own listing
                    before updating a page, so a source helps.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100 text-amber-700">
                    <FaExclamationTriangle className="text-xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What We Cannot Help With
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We are an independent directory. We are not affiliated with any of the courts,
                    clubs, or parks departments listed here, which means we cannot:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>&bull; Book or reserve a court for you</li>
                    <li>&bull; Sell memberships, day passes, or lesson packages</li>
                    <li>&bull; Register you for a league, clinic, or tournament</li>
                    <li>&bull; Handle refunds, complaints, or lost property</li>
                    <li>&bull; Issue city permits or facility access</li>
                  </ul>
                  <p className="mt-3 text-gray-600">
                    For any of those, contact the facility directly. Every court page on this site
                    lists the venue&apos;s own phone number and website where we have them.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 border-l-4 border-primary-600 rounded">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Know of a Court We Are Missing?
              </h3>
              <p className="text-gray-700 mb-3">
                New courts open in the Austin area regularly, and we would rather hear about one twice
                than not at all. If you know of somewhere we have not listed, send it over.
              </p>
              <Link
                href="/submit"
                className="text-primary-700 font-semibold hover:underline"
              >
                Submit a court &rarr;
              </Link>
            </div>

            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Venues, Press and Partners</h3>
              <p className="text-gray-700">
                If you run a court or club and want to correct or expand your listing, get in touch
                &mdash; listings are free and we do not charge for placement or ranking. We are also
                happy to answer questions from press or local organizers about pickleball in Austin.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
