import Link from 'next/link'
import { Metadata } from 'next'
import { FaHome, FaSearch, FaMapMarkerAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Page Not Found - Pickleball ATX',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <FaHome className="text-3xl text-primary-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Home</h3>
            <p className="text-sm text-gray-600">Return to homepage</p>
          </Link>

          <Link
            href="/courts"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <FaMapMarkerAlt className="text-3xl text-primary-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">All Courts</h3>
            <p className="text-sm text-gray-600">Browse all courts</p>
          </Link>

          <Link
            href="/courts/free"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <FaSearch className="text-3xl text-primary-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Free Courts</h3>
            <p className="text-sm text-gray-600">Find free courts</p>
          </Link>
        </div>

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            Looking for a specific pickleball court in Austin? Try searching our directory!
          </p>
          <Link
            href="/courts"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            View All Courts
          </Link>
        </div>
      </div>
    </div>
  )
}

