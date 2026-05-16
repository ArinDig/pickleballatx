import { Metadata } from 'next'
import { courts } from '@/data/courts'
import CourtsFilter from '@/components/CourtsFilter'

export const metadata: Metadata = {
  title: 'Outdoor Pickleball Courts in Austin, TX',
  description: 'Find outdoor pickleball courts in Austin, Texas. Enjoy the beautiful Austin weather while playing pickleball at parks and outdoor facilities.',
  keywords: ['outdoor pickleball austin', 'outdoor pickleball courts austin', 'austin outdoor pickleball', 'park pickleball austin'],
  openGraph: {
    title: 'Outdoor Pickleball Courts in Austin, TX | Pickleball ATX',
    description: 'Find outdoor pickleball courts in Austin, Texas. Enjoy the beautiful Austin weather while playing.',
    url: 'https://pickleballatx.org/courts/outdoor',
  },
  alternates: {
    canonical: 'https://pickleballatx.org/courts/outdoor',
  },
}

export default function OutdoorCourtsPage() {
  const outdoorCourts = courts.filter(court => 
    court.courtType === 'outdoor' || court.courtType === 'both'
  )

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Outdoor Pickleball Courts in Austin
          </h1>
          <p className="text-xl text-amber-50">
            Enjoy Austin's beautiful weather - {outdoorCourts.length} outdoor locations
          </p>
        </div>
      </section>

      <CourtsFilter courts={courts} defaultType="outdoor" />

      {/* Comprehensive Content */}
      <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Outdoor Pickleball Courts in Austin</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Austin's outdoor pickleball courts take advantage of the city's generally pleasant weather, 
                  offering players the opportunity to enjoy the sport in beautiful natural settings. With 
                  {outdoorCourts.length} outdoor locations throughout the Austin metro area, players can 
                  experience pickleball in parks, recreation centers, and dedicated outdoor facilities.
                </p>
                <p>
                  Outdoor play in Austin offers a unique experience, combining the sport with the city's 
                  natural beauty, fresh air, and vibrant community atmosphere. Many outdoor courts are 
                  located in scenic park settings, providing a relaxing and enjoyable environment for play.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Benefits of Outdoor Play
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Natural Setting:</strong> Outdoor courts often feature beautiful surroundings, 
                  from tree-lined parks to waterfront locations, enhancing the overall playing experience.</li>
                  <li><strong>Fresh Air:</strong> Playing outdoors provides excellent ventilation and fresh 
                  air, which many players find more enjoyable than indoor environments.</li>
                  <li><strong>Cost-Effective:</strong> Many outdoor courts are free or have lower fees 
                  than indoor facilities, making them accessible to more players.</li>
                  <li><strong>Community Atmosphere:</strong> Outdoor courts often have a more casual, 
                  community-oriented feel, making them great for social play and meeting new players.</li>
                  <li><strong>Flexible Scheduling:</strong> Many outdoor courts are available on a 
                  first-come, first-served basis, allowing for spontaneous play sessions.</li>
                  <li><strong>Variety of Locations:</strong> Outdoor courts are distributed throughout 
                  Austin, making it easier to find a court near your home or work.</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Tips for Outdoor Play in Austin
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Best Times to Play:</strong> Early morning (before 10 AM) and evening 
                  (after 6 PM) are ideal during Austin's hot summer months. Spring and fall offer 
                  comfortable temperatures throughout the day. Winter play is generally pleasant, though 
                  occasional cold fronts may require warmer clothing.</li>
                  <li><strong>Stay Hydrated:</strong> Austin's heat can be intense, especially from 
                  May through September. Bring plenty of water and take regular breaks. Many outdoor 
                  facilities have water fountains, but it's always wise to bring your own supply.</li>
                  <li><strong>Sun Protection:</strong> Austin receives abundant sunshine year-round. 
                  Wear broad-spectrum sunscreen (SPF 30+), a hat or visor, and sunglasses. Consider 
                  playing in shaded courts when available during peak sun hours.</li>
                  <li><strong>Appropriate Clothing:</strong> Wear lightweight, breathable fabrics that 
                  wick moisture. Light colors reflect heat better than dark colors. Consider moisture-wicking 
                  athletic wear designed for hot weather.</li>
                  <li><strong>Night Play:</strong> Many outdoor courts in Austin feature excellent 
                  lighting systems, making evening play a popular option. This allows players to avoid 
                  the heat while still enjoying outdoor play.</li>
                  <li><strong>Weather Monitoring:</strong> Austin weather can change quickly. Check 
                  forecasts before heading out, especially during spring and fall when storms can develop 
                  rapidly. Have a backup plan for indoor play if weather becomes unfavorable.</li>
                  <li><strong>Court Surface Awareness:</strong> Outdoor courts may have different surfaces 
                  than indoor courts. Be aware that wind can affect ball flight, and sun glare may impact 
                  visibility at certain times of day.</li>
                  <li><strong>Equipment Considerations:</strong> Outdoor play may require different ball 
                  types depending on wind conditions. Some players prefer slightly heavier balls for 
                  outdoor play in windy conditions.</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Seasonal Considerations
                </h3>
                <p>
                  Austin's climate offers year-round outdoor play opportunities, but each season has 
                  unique characteristics:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Spring (March-May):</strong> Generally ideal weather with comfortable 
                  temperatures. This is one of the best times for outdoor play in Austin.</li>
                  <li><strong>Summer (June-August):</strong> Hot and humid. Early morning and evening 
                  play are essential. Stay hydrated and take frequent breaks. Consider shaded courts 
                  when available.</li>
                  <li><strong>Fall (September-November):</strong> Excellent weather returns with 
                  comfortable temperatures. Another prime season for outdoor play.</li>
                  <li><strong>Winter (December-February):</strong> Generally mild, though occasional 
                  cold fronts can bring chilly weather. Most days are pleasant for outdoor play with 
                  appropriate clothing.</li>
                </ul>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Types of Outdoor Courts
                </h3>
                <p>
                  Austin's outdoor pickleball facilities include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Dedicated Pickleball Courts:</strong> Courts designed specifically for 
                  pickleball with proper dimensions and surfaces.</li>
                  <li><strong>Multi-Use Courts:</strong> Courts that can be converted between pickleball 
                  and tennis, often with temporary nets and line markings.</li>
                  <li><strong>Park Courts:</strong> Courts located in public parks, often with beautiful 
                  natural settings and additional park amenities.</li>
                  <li><strong>Covered Outdoor Courts:</strong> Some facilities offer covered outdoor 
                  courts that protect from sun and light rain while maintaining outdoor air flow.</li>
                </ul>
                <p className="mt-6">
                  For specific information about outdoor facilities, including hours, lighting availability, 
                  amenities, and weather policies, visit the individual court pages linked above. Remember 
                  that outdoor play is weather-dependent, so always have a backup plan and check conditions 
                  before heading out.
                </p>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

