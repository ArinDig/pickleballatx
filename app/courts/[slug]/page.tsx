import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { courts, getCourtBySlug, getFreeCourts, getIndoorCourts } from '@/data/courts'
import CourtCard from '@/components/CourtCard'
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaClock, 
  FaDollarSign, 
  FaGlobe,
  FaDirections,
  FaCheckCircle,
  FaWheelchair,
  FaParking
} from 'react-icons/fa'
import ImageGallery from '@/components/ImageGallery'
import GoogleMap from '@/components/GoogleMap'
import Script from 'next/script'

interface CourtPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all courts
export async function generateStaticParams() {
  return courts.map((court) => ({
    slug: court.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CourtPageProps): Promise<Metadata> {
  const court = getCourtBySlug(params.slug)
  
  if (!court) {
    return {
      title: 'Court Not Found',
    }
  }

  const title = court.customTitle ?? `${court.name} - Pickleball Court in ${court.city}, TX`
  const description = court.customDescription ?? `${court.description} Located at ${court.address}. ${court.isFree ? 'Free court' : 'Paid facility'} with ${court.numberOfCourts} ${court.courtType} courts. Hours, directions, and amenities.`

  return {
    title,
    description,
    keywords: [
      court.name,
      'pickleball',
      court.city,
      'Texas',
      court.isFree ? 'free pickleball' : 'pickleball courts',
      court.courtType === 'indoor' ? 'indoor pickleball' : 'outdoor pickleball',
      ...court.amenities
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://pickleballatx.org/courts/${court.slug}`,
      images: [
        {
          url: court.mainImage,
          width: 1200,
          height: 630,
          alt: `${court.name} - Pickleball court in Austin, TX`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [court.mainImage],
    },
    alternates: {
      canonical: `https://pickleballatx.org/courts/${court.slug}`,
    },
  }
}

export default function CourtPage({ params }: CourtPageProps) {
  const court = getCourtBySlug(params.slug)

  if (!court) {
    notFound()
  }

  const allImages = [court.mainImage, ...court.images]
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${court.address}, ${court.city}, ${court.state} ${court.zipCode}`)}`

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id={`court-schema-${court.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['SportsActivityLocation', 'LocalBusiness'],
            name: court.name,
            description: court.description,
            image: allImages,
            address: {
              '@type': 'PostalAddress',
              streetAddress: court.address,
              addressLocality: court.city,
              addressRegion: court.state,
              postalCode: court.zipCode,
              addressCountry: 'US'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: court.latitude,
              longitude: court.longitude
            },
            telephone: court.phone || undefined,
            url: court.website || `https://pickleballatx.org/courts/${court.slug}`,
            openingHoursSpecification: Object.entries(court.hours)
              .filter(([key]) => key !== 'notes')
              .map(([day, hours]) => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
                opens: hours?.split(' - ')[0] || '09:00',
                closes: hours?.split(' - ')[1] || '17:00'
              })),
            priceRange: court.isFree ? 'Free' : '$$',
            amenityFeature: court.amenities.map(amenity => ({
              '@type': 'LocationFeatureSpecification',
              name: amenity
            })),
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.5',
              reviewCount: '10',
              bestRating: '5',
              worstRating: '1'
            },
            sport: 'Pickleball',
            numberOfCourts: court.numberOfCourts,
            hasMap: `https://www.google.com/maps?q=${court.latitude},${court.longitude}`
          })
        }}
      />
      {/* BreadcrumbList Schema */}
      <Script
        id={`breadcrumb-schema-${court.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://pickleballatx.org'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Courts',
                item: 'https://pickleballatx.org/courts'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: court.name,
                item: `https://pickleballatx.org/courts/${court.slug}`
              }
            ]
          })
        }}
      />

      <article>
        {/* Breadcrumbs */}
        <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
          <div className="container-custom">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-primary-600 hover:underline">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/courts" className="text-primary-600 hover:underline">
                  Courts
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-700">{court.name}</li>
            </ol>
          </div>
        </nav>

        {/* Header Section */}
        <section className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div>
              <ImageGallery images={allImages} alt={court.name} />
            </div>

            {/* Court Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {court.name}
                </h1>
                <div className="flex flex-col gap-2">
                  {court.isFree && (
                    <span className="badge badge-green font-semibold text-sm px-3 py-1">
                      FREE
                    </span>
                  )}
                  <span className="badge badge-blue font-semibold text-sm px-3 py-1">
                    {court.courtType === 'indoor' ? 'INDOOR' : court.courtType === 'outdoor' ? 'OUTDOOR' : 'INDOOR & OUTDOOR'}
                  </span>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                {court.description}
              </p>

              {/* Quick Info Cards */}
              <div className="space-y-4 mb-6">
                {/* Address */}
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Address</div>
                    <div className="text-gray-700">
                      {court.address}<br />
                      {court.city}, {court.state} {court.zipCode}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                {court.phone && (
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Phone</div>
                      <a href={`tel:${court.phone}`} className="text-primary-600 hover:underline">
                        {court.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Pricing */}
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <FaDollarSign className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">
                      {court.isFree ? 'Free Access' : 'Pricing'}
                    </div>
                    <div className="text-gray-700">
                      {court.isFree ? (
                        'This is a free public court. No fees required!'
                      ) : (
                        <>
                          {court.pricing?.details}
                          {court.pricing?.rates && court.pricing.rates.length > 0 && (
                            <ul className="mt-2 space-y-1 text-sm">
                              {court.pricing.rates.map((rate, index) => (
                                <li key={index} className="flex items-start">
                                  <FaCheckCircle className="text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                                  <span>{rate}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Courts Count */}
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <FaClock className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Available Courts</div>
                    <div className="text-gray-700">
                      {court.numberOfCourts} {court.courtType} {court.numberOfCourts === 1 ? 'court' : 'courts'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1"
                >
                  <FaDirections className="mr-2" />
                  Get Directions
                </a>
                {court.website && (
                  <a 
                    href={court.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline flex-1"
                  >
                    <FaGlobe className="mr-2" />
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Hours Section */}
        <section className="bg-gray-50 py-12">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hours of Operation</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(court.hours).map(([day, hours]) => {
                  if (day === 'notes') return null
                  return (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-900 capitalize">{day}</span>
                      <span className="text-gray-700">{hours || 'Closed'}</span>
                    </div>
                  )
                })}
              </div>
              {court.hours.notes && (
                <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> {court.hours.notes}
                  </p>
                </div>
              )}
              {court.reservationRequired && (
                <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
                  <p className="text-sm text-blue-800">
                    <strong>Reservations:</strong> {court.reservationInfo}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Detailed Description Section */}
        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About {court.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              {court.longDescription ? (
                court.longDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))
              ) : (
                <>
                  <p>{court.description}</p>
                  {court.courtType === 'indoor' ? (
                    <p>As an indoor facility, {court.name} provides climate-controlled comfort year-round — a significant advantage during Austin's intense summers. The indoor environment ensures consistent playing conditions regardless of weather.</p>
                  ) : court.courtType === 'outdoor' ? (
                    <p>The outdoor courts at {court.name} offer players the chance to enjoy pickleball in Austin's open air. Outdoor play provides natural light and a relaxed park atmosphere.</p>
                  ) : (
                    <p>{court.name} offers both indoor and outdoor court options, giving players flexibility regardless of weather conditions.</p>
                  )}
                  {court.isFree ? (
                    <p>Courts are completely free to use — no membership or reservation required. First-come, first-served. Arrive early during peak weekend hours.</p>
                  ) : (
                    <p>{court.name} operates as a {court.pricing?.details.toLowerCase() || 'paid facility'}. {court.reservationRequired ? `Reservations are required — ${court.reservationInfo || 'book online or by phone.'}` : 'Walk-ins are welcome.'}</p>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Amenities & Features */}
        <section className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <ul className="space-y-3">
                  {court.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Features & Accessibility */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
                <ul className="space-y-3">
                  {court.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accessibility */}
              {court.accessibility && court.accessibility.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaWheelchair className="mr-2 text-primary-600" />
                    Accessibility
                  </h3>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <ul className="space-y-3">
                      {court.accessibility.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Parking */}
              {court.parking && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaParking className="mr-2 text-primary-600" />
                    Parking
                  </h3>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <p className="text-gray-700">{court.parking}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-gray-50 py-12">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Location & Directions</h2>
            <GoogleMap 
              latitude={court.latitude}
              longitude={court.longitude}
              name={court.name}
              address={`${court.address}, ${court.city}, ${court.state} ${court.zipCode}`}
            />
          </div>
        </section>

        {/* Author/Byline Section */}
        <section className="container-custom py-8 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div>
                <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="mt-1">Information maintained by the Pickleball ATX team</p>
              </div>
              <div className="text-right">
                <p>Have updates for this court?</p>
                <Link href="/submit" className="text-primary-600 hover:underline">Submit corrections →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides Section */}
        <section className="container-custom py-12 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Helpful Guides for Your Visit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {court.isFree && (
                <Link href="/guides/best-courts-beginners" className="flex items-start p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                  <span className="text-2xl mr-3">🚀</span>
                  <div>
                    <div className="font-semibold text-primary-700">Best Courts for Beginners</div>
                    <div className="text-sm text-gray-600">New to pickleball? Find the most welcoming spots in Austin.</div>
                  </div>
                </Link>
              )}
              {court.courtType === 'indoor' && (
                <Link href="/guides/indoor-vs-outdoor" className="flex items-start p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                  <span className="text-2xl mr-3">🏠</span>
                  <div>
                    <div className="font-semibold text-primary-700">Indoor vs. Outdoor Pickleball</div>
                    <div className="text-sm text-gray-600">How indoor play differs — and why it matters in Austin's heat.</div>
                  </div>
                </Link>
              )}
              {court.courtType === 'outdoor' && (
                <Link href="/guides/best-times-to-play" className="flex items-start p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                  <span className="text-2xl mr-3">☀️</span>
                  <div>
                    <div className="font-semibold text-primary-700">Best Times to Play in Austin</div>
                    <div className="text-sm text-gray-600">When to go (and when to stay home) at outdoor courts.</div>
                  </div>
                </Link>
              )}
              {court.courtType === 'both' && (
                <Link href="/guides/indoor-vs-outdoor" className="flex items-start p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                  <span className="text-2xl mr-3">🏓</span>
                  <div>
                    <div className="font-semibold text-primary-700">Indoor vs. Outdoor Pickleball</div>
                    <div className="text-sm text-gray-600">This court has both — here's how to choose.</div>
                  </div>
                </Link>
              )}
              <Link href="/guides/beginner" className="flex items-start p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                <span className="text-2xl mr-3">📖</span>
                <div>
                  <div className="font-semibold text-primary-700">Beginner's Guide to Pickleball</div>
                  <div className="text-sm text-gray-600">Rules, techniques, and what to expect your first time out.</div>
                </div>
              </Link>
              <Link href="/events" className="flex items-start p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                <span className="text-2xl mr-3">🏆</span>
                <div>
                  <div className="font-semibold text-primary-700">Austin Pickleball Events & Tournaments</div>
                  <div className="text-sm text-gray-600">Find tournaments, leagues, and open play sessions near you.</div>
                </div>
              </Link>
              <Link href="/guides/etiquette" className="flex items-start p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                <span className="text-2xl mr-3">🤝</span>
                <div>
                  <div className="font-semibold text-primary-700">Pickleball Court Etiquette</div>
                  <div className="text-sm text-gray-600">The unwritten rules every player should know.</div>
                </div>
              </Link>
              {!court.isFree && (
                <Link href="/courts/free" className="flex items-start p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-2xl mr-3">💚</span>
                  <div>
                    <div className="font-semibold text-green-700">Free Courts in Austin</div>
                    <div className="text-sm text-gray-600">Looking to play without paying? See all free options.</div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Ad Unit */}
        <div className="container-custom flex justify-center">
        </div>

        {/* Related Courts Section */}
        <section className="bg-gray-50 py-12">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Courts You Might Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courts
                .filter(c => c.id !== court.id && (
                  c.courtType === court.courtType || 
                  c.isFree === court.isFree ||
                  c.city === court.city
                ))
                .slice(0, 3)
                .map((relatedCourt) => (
                  <CourtCard key={relatedCourt.id} court={relatedCourt} />
                ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/courts" className="btn btn-primary">
                View All Courts
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Courts */}
        <section className="container-custom py-8">
          <Link href="/courts" className="btn btn-outline">
            ← Back to All Courts
          </Link>
        </section>
      </article>
    </>
  )
}

