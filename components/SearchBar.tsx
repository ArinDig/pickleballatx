'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/courts?search=${encodeURIComponent(query)}`)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courts by name, location, or amenities..."
            className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-200 rounded-full shadow-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
            aria-label="Search pickleball courts"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
            aria-label="Submit search"
          >
            <FaSearch />
          </button>
        </div>
      </form>
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => router.push('/courts/free')}
          className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors"
        >
          Free Courts
        </button>
        <button
          onClick={() => router.push('/courts/indoor')}
          className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors"
        >
          Indoor Courts
        </button>
        <button
          onClick={() => router.push('/courts/outdoor')}
          className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 border border-gray-200 transition-colors"
        >
          Outdoor Courts
        </button>
      </div>
    </div>
  )
}

