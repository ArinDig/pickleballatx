'use client'

import { useState, useMemo } from 'react'
import { Court } from '@/data/courts'
import CourtCard from '@/components/CourtCard'

interface CourtsFilterProps {
  courts: Court[]
}

type TypeFilter = 'all' | 'indoor' | 'outdoor' | 'both'
type PriceFilter = 'all' | 'free' | 'paid'

const filterButtons = [
  { label: 'All Courts', type: 'all' as TypeFilter, price: 'all' as PriceFilter },
  { label: 'Free Courts', type: 'all' as TypeFilter, price: 'free' as PriceFilter },
  { label: 'Indoor', type: 'indoor' as TypeFilter, price: 'all' as PriceFilter },
  { label: 'Outdoor', type: 'outdoor' as TypeFilter, price: 'all' as PriceFilter },
  { label: 'Free + Indoor', type: 'indoor' as TypeFilter, price: 'free' as PriceFilter },
  { label: 'Free + Outdoor', type: 'outdoor' as TypeFilter, price: 'free' as PriceFilter },
]

export default function CourtsFilter({ courts }: CourtsFilterProps) {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all')
  const [priceFilter, setPriceFilter] = useState<PriceFilter>('all')

  const activeKey = `${typeFilter}-${priceFilter}`

  function applyPreset(type: TypeFilter, price: PriceFilter) {
    setTypeFilter(type)
    setPriceFilter(price)
  }

  const filtered = useMemo(() => {
    return courts.filter((court) => {
      const matchesType =
        typeFilter === 'all' ||
        court.courtType === typeFilter ||
        (typeFilter === 'indoor' && court.courtType === 'both') ||
        (typeFilter === 'outdoor' && court.courtType === 'both')

      const matchesPrice =
        priceFilter === 'all' ||
        (priceFilter === 'free' && court.isFree) ||
        (priceFilter === 'paid' && !court.isFree)

      const matchesSearch =
        !search.trim() ||
        court.name.toLowerCase().includes(search.toLowerCase()) ||
        court.address.toLowerCase().includes(search.toLowerCase()) ||
        court.city.toLowerCase().includes(search.toLowerCase()) ||
        court.amenities.some((a) => a.toLowerCase().includes(search.toLowerCase())) ||
        court.features.some((f) => f.toLowerCase().includes(search.toLowerCase()))

      return matchesType && matchesPrice && matchesSearch
    })
  }, [courts, typeFilter, priceFilter, search])

  return (
    <>
      {/* Search + Filter Controls */}
      <div className="bg-gray-50 py-6 sticky top-16 z-40 shadow-sm">
        <div className="container-custom space-y-4">
          {/* Search input */}
          <div className="relative max-w-xl">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, location, or amenity..."
              className="w-full px-4 py-2.5 pr-10 border border-gray-200 rounded-full shadow-sm text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all bg-white"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg leading-none"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Filter preset buttons */}
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((btn) => {
              const isActive = typeFilter === btn.type && priceFilter === btn.price
              return (
                <button
                  key={btn.label}
                  onClick={() => applyPreset(btn.type, btn.price)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                    isActive
                      ? 'bg-primary-600 text-white border-primary-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {btn.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="container-custom py-12">
        <div className="mb-6">
          <p className="text-gray-600 text-sm">
            {filtered.length === courts.length
              ? `Showing all ${courts.length} courts`
              : `${filtered.length} of ${courts.length} courts`}
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((court) => (
              <CourtCard key={court.id} court={court} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">No courts match your filters.</p>
            <button
              onClick={() => { setTypeFilter('all'); setPriceFilter('all'); setSearch('') }}
              className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  )
}
