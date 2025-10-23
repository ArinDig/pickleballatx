import { Metadata } from 'next'
import { courts } from '@/data/courts'
import CourtCard from '@/components/CourtCard'
import FilterBar from '@/components/FilterBar'

export const metadata: Metadata = {
  title: 'Outdoor Pickleball Courts in Austin, TX',
  description: 'Find outdoor pickleball courts in Austin, Texas. Enjoy the beautiful Austin weather while playing pickleball at parks and outdoor facilities.',
  keywords: ['outdoor pickleball austin', 'outdoor pickleball courts austin', 'austin outdoor pickleball', 'park pickleball austin'],
  openGraph: {
    title: 'Outdoor Pickleball Courts in Austin, TX | Pickleball ATX',
    description: 'Find outdoor pickleball courts in Austin, Texas. Enjoy the beautiful Austin weather while playing.',
    url: 'https://pickleballatx.org/courts/outdoor',
  },
  alternates: {
    canonical: 'https://pickleballatx.org/courts/outdoor',
  },
}

export default function OutdoorCourtsPage() {
  const outdoorCourts = courts.filter(court => 
    court.courtType === 'outdoor' || court.courtType === 'both'
  )

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Outdoor Pickleball Courts in Austin
          </h1>
          <p className="text-xl text-amber-50">
            Enjoy Austin's beautiful weather - {outdoorCourts.length} outdoor locations
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
            Showing {outdoorCourts.length} outdoor courts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outdoorCourts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
        
        {/* Info Box */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Tips for Outdoor Play in Austin</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Best Times:</strong> Early morning or evening play is ideal during summer months</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Stay Hydrated:</strong> Bring plenty of water, especially during hot Texas days</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Sun Protection:</strong> Wear sunscreen, hat, and sunglasses for daytime play</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Night Play:</strong> Many outdoor courts have excellent lighting for evening games</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span><strong>Weather Check:</strong> Monitor weather conditions and have a backup plan</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

