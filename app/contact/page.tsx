import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { FaEnvelope, FaInfoCircle, FaMapMarkerAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact Us - Pickleball ATX',
  description: 'Get in touch with Pickleball ATX. Submit a new court, report incorrect information, or ask questions about pickleball courts in Austin, Texas.',
  alternates: {
    canonical: 'https://pickleballatx.org/contact',
  },
}

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-50">
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions, suggestions, or want to report incorrect information? We're here to help
              make Pickleball ATX the best resource for finding pickleball courts in Austin.
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
                    <a href="mailto:info@pickleballatx.org" className="text-primary-600 hover:underline">
                      info@pickleballatx.org
                    </a>
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
                  <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  <p className="mt-1 text-gray-600">
                    Austin, Texas
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
                  <h3 className="text-lg font-semibold text-gray-900">What We Can Help With</h3>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Submit a new court</li>
                    <li>• Update court information</li>
                    <li>• Report incorrect details</li>
                    <li>• General inquiries</li>
                    <li>• Partnership opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 border-l-4 border-primary-600 rounded">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Know of a Court We're Missing?</h3>
              <p className="text-gray-700">
                We're always working to keep our directory complete and up-to-date. If you know of a
                pickleball court in the Austin area that's not listed, please let us know using the
                contact form!
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

