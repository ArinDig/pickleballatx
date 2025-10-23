'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function FilterBar() {
  const pathname = usePathname()

  const filters = [
    { name: 'All Courts', href: '/courts' },
    { name: 'Free Courts', href: '/courts/free' },
    { name: 'Indoor', href: '/courts/indoor' },
    { name: 'Outdoor', href: '/courts/outdoor' },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = pathname === filter.href
        return (
          <Link
            key={filter.name}
            href={filter.href}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              isActive
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {filter.name}
          </Link>
        )
      })}
    </div>
  )
}

