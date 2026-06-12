import { Metadata } from 'next'
import Link from 'next/link'
import { FaBook, FaClock, FaGraduationCap, FaHandshake, FaMapMarkerAlt, FaQuestionCircle, FaRocket, FaStar, FaSun, FaTrophy } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Pickleball Guides & Resources - Learn to Play Pickleball in Austin',
  description: 'Comprehensive guides to help you learn pickleball, improve your game, and make the most of Austin\'s pickleball scene. Beginner tips, equipment guides, etiquette, tournaments, and more.',
  keywords: [
    'pickleball guide',
    'learn pickleball',
    'pickleball beginner guide',
    'how to play pickleball',
    'pickleball tips',
    'pickleball rules',
    'pickleball etiquette',
    'pickleball tournaments Austin',
    'best pickleball courts beginners Austin'
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/guides',
  },
}

const guides = [
  {
    title: 'Austin Pickleball: What Nobody Tells You Before Your First Game',
    description: 'A local\'s honest take on the Austin scene — the heat, how open play really works at each venue, which courts are worth paying for, and how to find a game when you\'re new.',
    href: '/guides/austin-pickleball-guide',
    icon: FaStar,
    category: 'Austin Guide',
  },
  {
    title: 'Beginner\'s Guide to Pickleball',
    description: 'Everything you need to know to get started with pickleball, from basic rules to essential techniques and court etiquette.',
    href: '/guides/beginner',
    icon: FaRocket,
    category: 'Getting Started',
  },
  {
    title: 'Best Pickleball Courts for Beginners in Austin (2026)',
    description: 'New to pickleball in Austin? These are the best courts to start — welcoming, affordable, with open play and no pressure.',
    href: '/guides/best-courts-beginners',
    icon: FaMapMarkerAlt,
    category: 'Getting Started',
  },
  {
    title: 'Pickleball Etiquette: Do\'s and Don\'ts on the Court',
    description: 'The unwritten rules of pickleball — line calls, court rotation, doubles communication, and how to be a great player to play with.',
    href: '/guides/etiquette',
    icon: FaHandshake,
    category: 'Court Culture',
  },
  {
    title: 'Pickleball Tournaments & Events in Austin (2026)',
    description: 'How to find competitive play in Austin, what to expect at your first tournament, skill ratings explained, and Austin\'s best tournament venues.',
    href: '/guides/tournaments-events',
    icon: FaTrophy,
    category: 'Competitive Play',
  },
  {
    title: 'Indoor vs. Outdoor Pickleball: Which Is Right for You?',
    description: 'How indoor and outdoor pickleball differ in balls, surfaces, play style, and cost — and why the choice matters more in Austin than most cities.',
    href: '/guides/indoor-vs-outdoor',
    icon: FaSun,
    category: 'Court Culture',
  },
  {
    title: 'Best Times to Play Pickleball in Austin (Weather & Crowds)',
    description: 'Season-by-season and hour-by-hour guide to timing your Austin pickleball game — including how to survive summer and find courts when they\'re not packed.',
    href: '/guides/best-times-to-play',
    icon: FaClock,
    category: 'Austin Guide',
  },
  {
    title: 'Best Pickleball Gear for Beginners in Austin (2026)',
    description: 'What to buy, what to skip, and honest reviews of the best starter paddles, balls, shoes, and bags for new Austin players.',
    href: '/guides/beginner-gear',
    icon: FaQuestionCircle,
    category: 'Equipment',
  },
  {
    title: 'How to Choose a Pickleball Paddle',
    description: 'A comprehensive guide to selecting the perfect pickleball paddle based on your playing style, skill level, and preferences.',
    href: '/guides/choosing-paddle',
    icon: FaQuestionCircle,
    category: 'Equipment',
  },
  {
    title: 'Pickleball Rules & Scoring',
    description: 'Learn the official pickleball rules, scoring system, and common situations you\'ll encounter on the court.',
    href: '/guides/rules',
    icon: FaBook,
    category: 'Rules & Strategy',
  },
  {
    title: 'Improving Your Pickleball Game',
    description: 'Tips and techniques to take your pickleball skills to the next level, from basic shots to advanced strategies.',
    href: '/guides/improving-game',
    icon: FaGraduationCap,
    category: 'Strategy & Tips',
  },
]

export default function GuidesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pickleball Guides & Resources
          </h1>
          <p className="text-xl text-primary-50">
            Learn everything you need to know about pickleball, from basics to advanced strategies
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-custom py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Whether you're completely new to pickleball or looking to improve your game, our comprehensive 
              guides provide valuable information to help you succeed on the court. From understanding the 
              basics to mastering advanced techniques, these resources are designed to support players at 
              every skill level.
            </p>
            <p>
              Our guides cover everything from equipment selection and court etiquette to rules, scoring, 
              and strategic play. Each guide is written with the Austin pickleball community in mind, 
              providing relevant information for players in our area.
            </p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {guides.map((guide) => {
            const Icon = guide.icon
            return (
              <Link
                key={guide.href}
                href={guide.href}
                className="card p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                      <Icon className="text-2xl text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <span className="text-sm font-semibold text-primary-600 mb-2 block">
                      {guide.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {guide.description}
                    </p>
                    <span className="text-primary-600 font-semibold">
                      Read Guide →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Additional Resources */}
        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Additional Resources
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                In addition to our guides, we recommend exploring these valuable resources:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>USA Pickleball Association (USAPA):</strong> The official governing body 
                for pickleball in the United States. Their website offers official rules, tournament 
                information, and educational resources.</li>
                <li><strong>Local Austin Pickleball Groups:</strong> Join local Facebook groups and 
                community organizations to connect with other players, find playing partners, and 
                learn about local events and tournaments.</li>
                <li><strong>Court Directory:</strong> Use our comprehensive <Link href="/courts" className="text-primary-600 hover:underline">court directory</Link> to 
                find the perfect place to play in Austin.</li>
                <li><strong>Equipment Guide:</strong> Check out our <Link href="/gear" className="text-primary-600 hover:underline">gear page</Link> for 
                recommendations on paddles, balls, shoes, and other essential equipment.</li>
              </ul>
              <p>
                Remember, the best way to improve at pickleball is through regular practice and play. 
                Use these guides as a foundation, then get out on the court and apply what you've learned. 
                The Austin pickleball community is welcoming and supportive, so don't hesitate to join 
                open play sessions and connect with other players.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

