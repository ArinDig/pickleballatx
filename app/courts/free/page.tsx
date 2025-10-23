import { Metadata } from 'next'
import { getFreeCourts } from '@/data/courts'
import CourtCard from '@/components/CourtCard'
import FilterBar from '@/components/FilterBar'

export const metadata: Metadata = {
  title: 'Free Pickleball Courts in Austin, TX',
  description: 'Find free pickleball courts in Austin, Texas. No membership or fees required. Discover public parks and recreation centers with free pickleball access.',
  keywords: ['free pickleball austin', 'free pickleball courts austin', 'austin free pickleball', 'public pickleball courts austin'],
  openGraph: {
    title: 'Free Pickleball Courts in Austin, TX | Pickleball ATX',
    description: 'Find free pickleball courts in Austin, Texas. No membership or fees required.',
    url: 'https://pickleballatx.org/courts/free',
  },
  alternates: {
    canonical: 'https://pickleballatx.org/courts/free',
  },
}

export default function FreeC ourtsPage() {
  const freeCourts = getFreeCourts()

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Pickleball Courts in Austin
          </h1>
          <p className="text-xl text-green-50">
            Play pickleball without breaking the bank - {freeCourts.length} free locations
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
            Showing {freeCourts.length} free courts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeCourts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
        
        {/* Info Box */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">About Free Courts</h2>
          <p className="text-gray-700 mb-4">
            Austin offers several excellent free pickleball facilities, primarily operated by the city's
            Parks and Recreation department. These courts are open to the public and require no membership
            or fees. Most free courts operate on a first-come, first-served basis, though some have
            scheduled open play times.
          </p>
          <p className="text-gray-700">
            Free courts include both indoor and outdoor options, with many featuring lighting for evening play.
            Check individual court pages for specific hours, amenities, and any scheduled programs or events.
          </p>
        </div>
      </section>
    </div>
  )
}

