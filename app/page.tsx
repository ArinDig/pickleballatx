import { Metadata } from 'next'
import Script from 'next/script'
import { courts, getFeaturedCourts, getFreeCourts } from '@/data/courts'
import CourtCard from '@/components/CourtCard'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import Link from 'next/link'
import { FaMapMarkerAlt, FaClock, FaDollarSign, FaPhone } from 'react-icons/fa'
import { AdsterraBanner728x90, AdsterraBanner320x50 } from '@/components/AdsterraAds'

export const metadata: Metadata = {
  title: 'Pickleball ATX - Complete Guide to Austin Pickleball Courts',
  description: 'Discover the best pickleball courts in Austin, Texas. Find free and paid courts, hours, locations, amenities, and book your next game. Your complete Austin pickleball directory.',
  alternates: {
    canonical: 'https://pickleballatx.org',
  },
}

export default function Home() {
  const featuredCourts = getFeaturedCourts()
  const freeCourts = getFreeCourts()

  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="faq-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How many pickleball courts are in Austin?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Austin has ${courts.length} pickleball court locations across the metro area, including both free public courts and paid facilities.`
                }
              },
              {
                '@type': 'Question',
                name: 'Are there free pickleball courts in Austin?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Yes, Austin has ${getFreeCourts().length} free pickleball courts operated by the Parks and Recreation Department, including South Austin Recreation Center, Pan Am Recreation Center, and Dittmar Recreation Center.`
                }
              },
              {
                '@type': 'Question',
                name: 'What are the best indoor pickleball courts in Austin?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Austin offers several excellent indoor pickleball facilities including Austin Pickle Ranch with 16 indoor courts, The Austin Tennis and Pickleball Center, and various recreation centers with climate-controlled courts perfect for year-round play.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do I need a membership to play pickleball in Austin?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No, many Austin pickleball courts are free and open to the public. Some premium facilities require memberships or charge court fees, but there are plenty of free options available at city recreation centers.'
                }
              },
              {
                '@type': 'Question',
                name: 'Where can I find pickleball courts near me in Austin?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use our comprehensive directory to find pickleball courts by location, type (indoor/outdoor), and price. Our interactive map shows all court locations across the Austin metro area.'
                }
              }
            ]
          })
        }}
      />
      <Hero />
      
      {/* Search Section */}
      <section className="container-custom py-8 -mt-8 relative z-10">
        <SearchBar />
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">{courts.length}</div>
              <div className="text-gray-600 mt-2">Total Courts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">{freeCourts.length}</div>
              <div className="text-gray-600 mt-2">Free Courts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">
                {courts.reduce((acc, court) => acc + court.numberOfCourts, 0)}
              </div>
              <div className="text-gray-600 mt-2">Total Playing Courts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600 mt-2">Some Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courts */}
      <section className="container-custom py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Courts</h2>
            <p className="text-gray-600 mt-2">Top-rated pickleball destinations in Austin</p>
          </div>
          <Link href="/courts" className="btn btn-outline hidden md:inline-flex">
            View All Courts
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourts.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/courts" className="btn btn-outline">
            View All Courts
          </Link>
        </div>
      </section>

      {/* Free Courts Section */}
      <section className="bg-primary-50 py-16">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Free Courts</h2>
              <p className="text-gray-600 mt-2">Play pickleball without breaking the bank</p>
            </div>
            <Link href="/courts/free" className="btn btn-primary hidden md:inline-flex">
              See All Free Courts
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeCourts.slice(0, 3).map((court) => (
              <CourtCard key={court.id} court={court} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/courts/free" className="btn btn-primary">
              See All Free Courts
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container-custom py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Pickleball ATX?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Your comprehensive guide to finding the perfect pickleball court in Austin
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Locations</h3>
            <p className="text-gray-600">
              Detailed addresses and maps for every court in Austin
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
              <FaClock className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p className="text-gray-600">
              Up-to-date operating hours and availability information
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
              <FaDollarSign className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pricing</h3>
            <p className="text-gray-600">
              Clear pricing info and reservation details for all courts
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
              <FaPhone className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-600">
              Direct links and phone numbers to book your court
            </p>
          </div>
        </div>
      </section>

      {/* Adsterra - between Why Choose and SEO Content */}
      <div className="container-custom py-2">
        <AdsterraBanner728x90 />
        <AdsterraBanner320x50 />
      </div>

      {/* SEO Content Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pickleball in Austin, Texas
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Austin has quickly become one of the top pickleball destinations in Texas, with a thriving 
              community and courts for every skill level. Whether you're looking for free public courts 
              at city parks or premium indoor facilities with climate control, Austin's pickleball scene 
              has something for everyone.
            </p>
            <p>
              Our comprehensive directory features {courts.length} pickleball locations across the Austin 
              metro area, including both free and paid options. From beginner-friendly recreational centers 
              to professional tournament venues, we've mapped out every court with detailed information on 
              hours, amenities, pricing, and how to book.
            </p>
            <p>
              <strong>Free Courts:</strong> Austin Parks and Recreation operates several excellent free 
              facilities including South Austin Recreation Center, Pan Am Recreation Center, and Dittmar 
              Recreation Center. These city-run venues offer indoor and outdoor courts with organized 
              open play sessions throughout the week.
            </p>
            <p>
              <strong>Premium Facilities:</strong> For players seeking a more upscale experience, Austin 
              boasts world-class facilities like Austin Pickle Ranch with 16 indoor courts, The Austin 
              Tennis and Pickleball Center with 8 dedicated courts, and exclusive membership clubs like 
              Castle Court Austin and Other Racquet Social Club.
            </p>
            <p>
              <strong>Indoor vs Outdoor:</strong> Austin's weather makes year-round outdoor play possible, 
              but summer heat can be challenging. Many facilities offer both options, with indoor courts 
              providing climate-controlled comfort during peak summer months and covered outdoor courts 
              with lighting for evening play.
            </p>
            <p>
              Whether you're a seasoned player or just getting started with pickleball, Pickleball ATX 
              makes it easy to find your perfect court. Use our search and filter tools to find courts 
              by location, price, amenities, and more. Get out there and play!
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Pickleball is Growing in Austin
            </h3>
            <p>
              Pickleball's explosive growth in Austin reflects the city's active lifestyle and welcoming 
              community spirit. The sport appeals to Austinites of all ages because it's easy to learn, 
              social, and provides excellent exercise without the high-impact stress of many other sports. 
              Austin's mild winters and beautiful outdoor settings make it an ideal location for both 
              indoor and outdoor play year-round.
            </p>
            <p>
              The Austin pickleball community is known for being particularly welcoming to newcomers. 
              Many facilities offer beginner-friendly open play sessions, lessons, and social events that 
              help new players integrate into the community. This inclusive atmosphere has contributed to 
              the sport's rapid growth in the area.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Getting Started with Pickleball in Austin
            </h3>
            <p>
              New to pickleball? Austin offers numerous opportunities to get started:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Free Public Courts:</strong> Start at one of Austin's free recreation centers 
              where you can play without any financial commitment. These facilities often have scheduled 
              open play times perfect for beginners.</li>
              <li><strong>Lessons and Clinics:</strong> Many facilities offer beginner lessons and clinics 
              taught by experienced instructors. These are excellent ways to learn proper technique and 
              meet other new players.</li>
              <li><strong>Open Play Sessions:</strong> Most facilities have designated open play times 
              where players of all levels can drop in and join games. These sessions are great for 
              learning through play.</li>
              <li><strong>Equipment:</strong> You'll need a paddle, balls, and appropriate court shoes. 
              Check out our <Link href="/gear" className="text-primary-600 hover:underline">gear page</Link> for 
              equipment recommendations, or visit our <Link href="/guides/beginner" className="text-primary-600 hover:underline">beginner's guide</Link> for 
              comprehensive information about getting started.</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Resources for Austin Pickleball Players
            </h3>
            <p>
              Pickleball ATX provides comprehensive resources to support your pickleball journey:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Complete Court Directory:</strong> Detailed information on every pickleball 
              facility in the Austin area, including hours, pricing, amenities, and contact information.</li>
              <li><strong>Interactive Map:</strong> Visual map showing all court locations to help you 
              find facilities near your home or work.</li>
              <li><strong>Equipment Guides:</strong> Recommendations for paddles, balls, shoes, and 
              accessories to help you choose the right gear for your game.</li>
              <li><strong>Educational Guides:</strong> Comprehensive guides covering everything from 
              basic rules and techniques to advanced strategies and equipment selection.</li>
              <li><strong>Filtered Searches:</strong> Find courts by type (indoor/outdoor), price (free/paid), 
              and location to quickly identify options that meet your needs.</li>
            </ul>
            <p className="mt-6">
              Our directory is regularly updated to ensure accuracy, but we always recommend calling ahead 
              or checking a facility's official website for the most current information, especially for 
              holiday hours, special events, or temporary closures. We also welcome community feedback 
              to help keep our information current and comprehensive.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

