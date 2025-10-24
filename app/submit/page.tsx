import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Submit a Court',
  description: 'Submit a new pickleball court to be added to our Austin directory. Help us grow the pickleball community in ATX!',
  robots: {
    index: true,
    follow: true,
  },
}

export default function SubmitCourtPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Submit a Court</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Know of a pickleball court in Austin that we're missing? Help us grow our directory 
          by submitting the details below. We'll review and add it to our comprehensive guide!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Court Information</h2>
          <ContactForm />
        </div>

        {/* Guidelines */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Submission Guidelines</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What We Need</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Court name and location</li>
                <li>• Address and contact information</li>
                <li>• Hours of operation</li>
                <li>• Pricing information (free or paid)</li>
                <li>• Court type (indoor/outdoor)</li>
                <li>• Number of courts available</li>
                <li>• Amenities and features</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Court Types We Include</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Public recreation centers</li>
                <li>• Private sports facilities</li>
                <li>• Community centers</li>
                <li>• Parks with dedicated courts</li>
                <li>• Indoor and outdoor facilities</li>
                <li>• Free and paid courts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">What Happens Next</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• We'll review your submission within 48 hours</li>
                <li>• We may contact you for additional details</li>
                <li>• Once verified, we'll add it to our directory</li>
                <li>• You'll receive confirmation when it's live</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">
                Your contribution helps us create the most comprehensive pickleball directory 
                in Austin. Together, we're building a stronger pickleball community!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
