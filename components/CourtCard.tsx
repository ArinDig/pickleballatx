import Image from 'next/image'
import Link from 'next/link'
import { Court } from '@/data/courts'
import { FaMapMarkerAlt, FaPhone, FaClock, FaDollarSign } from 'react-icons/fa'

interface CourtCardProps {
  court: Court
}

export default function CourtCard({ court }: CourtCardProps) {
  return (
    <Link href={`/courts/${court.slug}`} className="card block overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <Image
          src={court.mainImage}
          alt={`${court.name} - Pickleball court in Austin, TX`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {court.isFree && (
            <span className="badge badge-green font-semibold shadow-sm">
              FREE
            </span>
          )}
          {court.featured && (
            <span className="badge bg-yellow-400 text-yellow-900 font-semibold shadow-sm">
              FEATURED
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <span className="badge badge-blue font-semibold shadow-sm">
            {court.courtType === 'indoor' ? 'INDOOR' : court.courtType === 'outdoor' ? 'OUTDOOR' : 'BOTH'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {court.name}
        </h3>
        
        {/* Location */}
        <div className="flex items-start text-gray-600 mb-2">
          <FaMapMarkerAlt className="mt-1 mr-2 text-primary-600 flex-shrink-0" />
          <span className="text-sm">{court.address}, {court.city}, {court.state} {court.zipCode}</span>
        </div>

        {/* Phone */}
        {court.phone && (
          <div className="flex items-center text-gray-600 mb-2">
            <FaPhone className="mr-2 text-primary-600" />
            <span className="text-sm">{court.phone}</span>
          </div>
        )}

        {/* Courts Count */}
        <div className="flex items-center text-gray-600 mb-3">
          <FaClock className="mr-2 text-primary-600" />
          <span className="text-sm">{court.numberOfCourts} {court.numberOfCourts === 1 ? 'Court' : 'Courts'} Available</span>
        </div>

        {/* Pricing */}
        <div className="flex items-start text-gray-600 mb-4">
          <FaDollarSign className="mt-1 mr-2 text-primary-600 flex-shrink-0" />
          <span className="text-sm">
            {court.isFree ? 'Free to play' : court.pricing?.details || 'Paid facility'}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {court.description}
        </p>

        {/* Amenities */}
        {court.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {court.amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                {amenity}
              </span>
            ))}
            {court.amenities.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                +{court.amenities.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="text-primary-600 font-medium text-sm group-hover:underline">
          View Details →
        </div>
      </div>
    </Link>
  )
}

