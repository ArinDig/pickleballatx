import { MetadataRoute } from 'next'
import { courts } from '@/data/courts'

/*
  lastModified dates are real (set Oct 2026). Previously every URL used the build time, which stamped
  the whole site as "changed today" on every deploy, and Google learns to ignore lastmod when it
  always moves. When you edit a page, update its date here. COURT_PAGES_UPDATED covers
  data/courts.ts and the court page template; bump it when either changes.
*/
const COURT_PAGES_UPDATED = new Date('2026-10-18')

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pickleballatx.org'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/courts`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/map`,
      lastModified: new Date('2025-11-25'),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courts/free`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courts/indoor`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courts/outdoor`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/gear`,
      lastModified: new Date('2026-10-11'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date('2026-10-23'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date('2026-06-12'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/austin-pickleball-guide`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/beginner`,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/best-courts-beginners`,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/best-times-to-play`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/indoor-vs-outdoor`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/tournaments-events`,
      lastModified: new Date('2026-09-15'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/etiquette`,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/beginner-gear`,
      lastModified: new Date('2026-10-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/choosing-paddle`,
      lastModified: new Date('2026-07-30'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/rules`,
      lastModified: new Date('2026-06-12'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/improving-game`,
      lastModified: new Date('2026-06-12'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: new Date('2025-11-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-08-17'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2025-11-01'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date('2026-09-13'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Dynamic court pages
  const courtPages = courts.map((court) => ({
    url: `${baseUrl}/courts/${court.slug}`,
    lastModified: COURT_PAGES_UPDATED,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...courtPages]
}

