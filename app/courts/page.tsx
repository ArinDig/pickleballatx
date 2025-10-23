import { Metadata } from 'next'
import { courts } from '@/data/courts'
import CourtCard from '@/components/CourtCard'
import FilterBar from '@/components/FilterBar'

export const metadata: Metadata = {
  title: 'All Pickleball Courts in Austin, TX',
  description: 'Browse all pickleball courts in Austin, Texas. Find indoor, outdoor, free, and paid courts with detailed information on hours, amenities, and locations.',
  keywords: ['austin pickleball courts', 'all pickleball courts austin', 'pickleball locations austin', 'austin pickleball directory'],
  openGraph: {
    title: 'All Pickleball Courts in Austin, TX | Pickleball ATX',
    description: 'Browse all pickleball courts in Austin, Texas. Find indoor, outdoor, free, and paid courts with detailed information.',
    url: 'https://pickleballatx.org/courts',
  },
  alternates: {
    canonical: 'https://pickleballatx.org/courts',
  },
}

export default function CourtsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Pickleball Courts in Austin
          </h1>
          <p className="text-xl text-primary-50">
            Discover {courts.length} pickleball locations across the Austin metro area
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
            Showing all {courts.length} courts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
      </section>
    </div>
  )
}

