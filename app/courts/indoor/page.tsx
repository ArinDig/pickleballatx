import { Metadata } from 'next'
import { courts } from '@/data/courts'
import CourtCard from '@/components/CourtCard'
import FilterBar from '@/components/FilterBar'

export const metadata: Metadata = {
  title: 'Indoor Pickleball Courts in Austin, TX',
  description: 'Find indoor pickleball courts in Austin, Texas. Climate-controlled facilities perfect for year-round play, rain or shine.',
  keywords: ['indoor pickleball austin', 'indoor pickleball courts austin', 'austin indoor pickleball', 'climate controlled pickleball austin'],
  openGraph: {
    title: 'Indoor Pickleball Courts in Austin, TX | Pickleball ATX',
    description: 'Find indoor pickleball courts in Austin, Texas. Climate-controlled facilities perfect for year-round play.',
    url: 'https://pickleballatx.org/courts/indoor',
  },
  alternates: {
    canonical: 'https://pickleballatx.org/courts/indoor',
  },
}

export default function IndoorCourtsPage() {
  const indoorCourts = courts.filter(court => 
    court.courtType === 'indoor' || court.courtType === 'both'
  )

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Indoor Pickleball Courts in Austin
          </h1>
          <p className="text-xl text-blue-50">
            Climate-controlled facilities for year-round play - {indoorCourts.length} locations
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-gray-50 py-6 sticky top-16 z-40 shadow-sm">
        <div className="container-custom">
          <FilterBar />
        </div>
      </section>

      {/* Courts Grid */}
      <section className="container-custom py-12">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {indoorCourts.length} indoor courts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indoorCourts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
        
        {/* Info Box */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Choose Indoor Courts?</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Climate Control:</strong> Comfortable play year-round, especially during hot Texas summers</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Weather Protection:</strong> No cancellations due to rain or extreme weather</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Consistent Conditions:</strong> No wind, sun glare, or temperature fluctuations</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Premium Surfaces:</strong> Many indoor facilities feature professional-grade court surfaces</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

