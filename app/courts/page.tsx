import { Metadata } from 'next'
import Link from 'next/link'
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

      {/* Introduction Content */}
      <section className="container-custom py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Complete Directory of Austin Pickleball Courts
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Austin, Texas has emerged as one of the premier pickleball destinations in the United States, 
              with a rapidly growing community and an impressive selection of courts catering to players of 
              all skill levels. Our comprehensive directory features {courts.length} verified pickleball 
              locations across the greater Austin metropolitan area, from free public parks to premium 
              membership facilities.
            </p>
            <p>
              Whether you're a beginner looking for your first game, an intermediate player seeking regular 
              play opportunities, or an advanced competitor preparing for tournaments, Austin's diverse 
              pickleball scene has something to offer. Our directory includes detailed information about 
              each facility, including court types (indoor, outdoor, or both), pricing structures, amenities, 
              hours of operation, and contact information.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Types of Courts in Austin
            </h3>
            <p>
              Austin's pickleball facilities can be categorized into several types:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Free Public Courts:</strong> Operated by Austin Parks and Recreation, these facilities 
              offer no-cost access to pickleball courts. Popular locations include South Austin Recreation Center, 
              Pan Am Recreation Center, and Dittmar Recreation Center. These courts typically operate on a 
              first-come, first-served basis with scheduled open play sessions.</li>
              <li><strong>Premium Indoor Facilities:</strong> Climate-controlled venues perfect for year-round play, 
              especially during Austin's hot summers. Facilities like Austin Pickle Ranch feature multiple 
              professional-grade courts with advanced lighting and court surfaces.</li>
              <li><strong>Outdoor Park Courts:</strong> Scenic locations throughout Austin's park system, many 
              with excellent lighting for evening play. These courts take advantage of Austin's generally 
              pleasant weather while offering beautiful natural settings.</li>
              <li><strong>Membership Clubs:</strong> Exclusive facilities offering premium amenities, professional 
              instruction, and organized leagues. These clubs often feature both indoor and outdoor courts, 
              pro shops, and social areas.</li>
              <li><strong>Restaurant & Bar Venues:</strong> Unique locations combining pickleball with dining 
              and socializing, such as Bouldin Acres and Lake Travis Biergarten, offering a fun, casual 
              atmosphere for play.</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Finding the Right Court for You
            </h3>
            <p>
              With so many options available, choosing the right court depends on several factors:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Location:</strong> Consider proximity to your home or work. Austin's traffic can be 
              challenging, so finding a court nearby can make regular play more convenient.</li>
              <li><strong>Budget:</strong> Free courts are great for casual players, while membership facilities 
              offer premium amenities for those willing to invest more.</li>
              <li><strong>Skill Level:</strong> Some facilities cater to beginners with lessons and beginner-friendly 
              open play, while others attract more advanced players and competitive leagues.</li>
              <li><strong>Schedule:</strong> Check operating hours and availability. Some courts require reservations, 
              while others operate on a walk-up basis.</li>
              <li><strong>Amenities:</strong> Consider what's important to you - parking, restrooms, water fountains, 
              pro shops, food service, or social areas.</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Using This Directory
            </h3>
            <p>
              Our directory is designed to make finding the perfect pickleball court as easy as possible. Use 
              the filter bar above to narrow down your search by court type (indoor, outdoor, or both), pricing 
              (free or paid), or location. Each court listing includes comprehensive details about hours, 
              pricing, amenities, and how to make reservations. Click on any court card to view the full 
              detailed page with maps, photos, and complete information.
            </p>
            <p>
              We regularly update our directory to ensure accuracy, but we always recommend calling ahead or 
              checking a facility's official website for the most current information, especially for holiday 
              hours, special events, or temporary closures.
            </p>
          </div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="container-custom">
      </div>

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

        {/* Gear CTA */}
        <div className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-gray-900">Ready to gear up?</p>
            <p className="text-gray-600 text-sm mt-1">
              Don't show up to your first session empty-handed. Our beginner guide covers exactly what you need — and what you can skip.
            </p>
          </div>
          <Link
            href="/guides/beginner-gear"
            className="flex-shrink-0 inline-flex items-center px-5 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            Best Gear for Beginners →
          </Link>
        </div>
      </section>
    </div>
  )
}

