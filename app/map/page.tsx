import { Metadata } from 'next'
import { getAllCourts } from '@/data/courts'
import CourtsMap from '@/components/CourtsMap'
import { FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Pickleball Court Map | All Courts in Austin, TX | Pickleball ATX',
  description: 'Interactive map showing all pickleball courts in Austin, Texas. Find courts near you, filter by indoor/outdoor, free/paid, and get directions.',
  openGraph: {
    title: 'Pickleball Court Map | All Courts in Austin, TX',
    description: 'Interactive map showing all pickleball courts in Austin, Texas.',
    type: 'website',
  },
}

export default function MapPage() {
  const courts = getAllCourts()

  const stats = {
    total: courts.length,
    free: courts.filter(c => c.isFree).length,
    indoor: courts.filter(c => c.courtType === 'indoor' || c.courtType === 'both').length,
    outdoor: courts.filter(c => c.courtType === 'outdoor' || c.courtType === 'both').length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pickleball Court Map
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              Explore all {stats.total} pickleball courts in Austin on an interactive map
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="font-semibold">{stats.total}</span> Total Courts
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="font-semibold">{stats.free}</span> Free Courts
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="font-semibold">{stats.indoor}</span> Indoor Courts
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="font-semibold">{stats.outdoor}</span> Outdoor Courts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container-custom py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-start mb-4">
            <FaInfoCircle className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
            <div className="text-sm text-gray-600">
              <p className="mb-2">
                <strong>How to use the map:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Click on any marker to see court details</li>
                <li>Use the zoom controls or scroll to zoom in/out</li>
                <li>Drag the map to explore different areas</li>
                <li>Click "View Details" in the popup to see full court information</li>
              </ul>
            </div>
          </div>
        </div>

        <CourtsMap courts={courts} />

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-primary-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Total Courts</h3>
            </div>
            <p className="text-3xl font-bold text-primary-600">{stats.total}</p>
            <p className="text-sm text-gray-500 mt-1">Across Austin area</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Free Courts</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">{stats.free}</p>
            <p className="text-sm text-gray-500 mt-1">No cost to play</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Indoor Courts</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">{stats.indoor}</p>
            <p className="text-sm text-gray-500 mt-1">Climate controlled</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-orange-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Outdoor Courts</h3>
            </div>
            <p className="text-3xl font-bold text-orange-600">{stats.outdoor}</p>
            <p className="text-sm text-gray-500 mt-1">Fresh air & sunshine</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-primary-50 rounded-lg p-6 border border-primary-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-700 mb-4">
            Browse our complete list of courts with detailed information, hours, pricing, and amenities.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/courts"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Courts
            </a>
            <a
              href="/courts/free"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
            >
              Free Courts Only
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

