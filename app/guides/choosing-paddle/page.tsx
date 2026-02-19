import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { FaCheckCircle, FaInfoCircle, FaRocket } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'How to Choose a Pickleball Paddle - Complete Guide',
  description: 'Learn how to choose the perfect pickleball paddle based on your skill level, playing style, and preferences. Comprehensive guide to paddle materials, weight, grip size, and more.',
  keywords: [
    'pickleball paddle guide',
    'how to choose pickleball paddle',
    'best pickleball paddle',
    'pickleball paddle selection',
    'pickleball paddle materials',
    'pickleball paddle weight'
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/guides/choosing-paddle',
  },
}

export default function ChoosingPaddlePage() {
  return (
    <>
      {/* Article Schema */}
      <Script
        id="article-schema-paddle"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Choose a Pickleball Paddle - Complete Guide',
            description: 'Comprehensive guide to selecting the perfect pickleball paddle based on skill level, playing style, and preferences.',
            author: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Pickleball ATX',
              logo: {
                '@type': 'ImageObject',
                url: 'https://pickleballatx.org/logo.png',
              },
            },
            datePublished: '2025-01-01',
            dateModified: '2025-01-31',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://pickleballatx.org/guides/choosing-paddle',
            },
          }),
        }}
      />
      
      <div>
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="container-custom">
            <Link href="/guides" className="inline-flex items-center text-primary-100 hover:text-white mb-4">
              ← Back to Guides
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How to Choose a Pickleball Paddle
            </h1>
            <p className="text-xl text-primary-50">
              A comprehensive guide to finding the perfect paddle for your game
            </p>
            <p className="text-primary-100/90 text-sm mt-4">
              By Pickleball ATX · Published January 1, 2025 · Last updated January 31, 2025
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="lead">
                Choosing the right pickleball paddle is one of the most important decisions you'll make as a player. 
                Your paddle directly affects your control, power, spin, and overall enjoyment of the game. With 
                hundreds of options available, finding the perfect paddle can seem overwhelming. This guide will 
                help you understand the key factors to consider and make an informed decision.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Understanding Paddle Materials
              </h2>
              <p>
                Modern pickleball paddles are made from various materials, each offering different characteristics:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Graphite:</strong> Lightweight and responsive, graphite paddles offer excellent control 
                and touch. They're popular among players who prioritize precision over power. Graphite paddles tend 
                to be more expensive but provide a premium feel.</li>
                <li><strong>Composite:</strong> Made from fiberglass or carbon fiber mixed with polymer, composite 
                paddles offer a balance of power and control. They're durable and provide good value for most players. 
                Composite paddles are the most common type on the market.</li>
                <li><strong>Polymer Core:</strong> Many modern paddles feature a polymer (Nomex or polypropylene) core 
                sandwiched between face materials. Nomex cores provide more power and a "poppy" feel, while 
                polypropylene cores offer better control and a softer touch.</li>
                <li><strong>Wood:</strong> Traditional wood paddles are the most affordable option but are heavier and 
                less responsive than modern materials. They're great for beginners but most players upgrade as they 
                improve.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Paddle Weight Considerations
              </h2>
              <p>
                Paddle weight significantly impacts your game. Paddles typically range from 6.5 to 9.5 ounces:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Lightweight (6.5-7.5 oz):</strong> Easier to maneuver and generate quick reactions. 
                Ideal for players who rely on finesse, dinking, and quick volleys. Reduces arm fatigue during 
                long play sessions. Best for players with arm or shoulder issues.</li>
                <li><strong>Mid-weight (7.5-8.5 oz):</strong> The most popular weight range, offering a balance 
                of power and control. Suitable for most players and playing styles. Provides good stability 
                without being too heavy.</li>
                <li><strong>Heavyweight (8.5+ oz):</strong> Generates more power and requires less effort for 
                deep shots. Better for players who want to drive the ball hard. Can cause more fatigue and may 
                be harder to control for some players.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Grip Size Selection
              </h2>
              <p>
                Proper grip size is crucial for comfort and control. Most paddles come in sizes 4, 4.25, and 4.5 inches:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Measure Your Hand:</strong> Hold your paddle hand flat and measure from the tip of your 
                ring finger to the middle crease in your palm. This measurement corresponds to your ideal grip size.</li>
                <li><strong>Size 4 (4 inches):</strong> Best for smaller hands. Allows for more wrist action and 
                spin generation. Common among female players and players with smaller hands.</li>
                <li><strong>Size 4.25 (4.25 inches):</strong> The most popular size, suitable for most players. 
                Provides a good balance of control and comfort.</li>
                <li><strong>Size 4.5 (4.5 inches):</strong> Best for larger hands. Provides more stability and 
                reduces grip fatigue. Common among male players with larger hands.</li>
              </ul>
              <p>
                <strong>Tip:</strong> If you're between sizes, choose the smaller option. You can always add an 
                overgrip to increase size, but you can't make a grip smaller.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Paddle Shape and Size
              </h2>
              <p>
                Paddles come in different shapes, each affecting the sweet spot and playing characteristics:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Standard/Widebody:</strong> The most common shape, offering a good balance of power 
                and control. Maximum width is 8.25 inches, maximum length is 17 inches.</li>
                <li><strong>Elongated:</strong> Longer paddles (up to 17 inches) provide more reach and power 
                but may sacrifice some control. Good for players who want extra reach at the net.</li>
                <li><strong>Widebody:</strong> Wider paddles maximize the sweet spot and provide more power. 
                Easier for beginners to hit consistently.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Choosing Based on Skill Level
              </h2>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Beginner Players</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Start with a mid-weight composite paddle (7.5-8.0 oz)</li>
                  <li>Choose a wider paddle for a larger sweet spot</li>
                  <li>Look for good value - you don't need the most expensive paddle</li>
                  <li>Consider a paddle with good control over power</li>
                  <li>Wood or entry-level composite paddles are fine to start</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Intermediate Players</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Upgrade to a higher-quality composite or graphite paddle</li>
                  <li>Consider your playing style - power player or control player?</li>
                  <li>Experiment with different weights to find your preference</li>
                  <li>Look for paddles with good spin capabilities</li>
                  <li>Consider paddles with polymer cores for better feel</li>
                </ul>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Players</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Invest in premium graphite or carbon fiber paddles</li>
                  <li>Fine-tune weight based on your specific needs</li>
                  <li>Consider specialized paddles for your playing style</li>
                  <li>Look for paddles with advanced core technologies</li>
                  <li>May want multiple paddles for different conditions or opponents</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Playing Style Considerations
              </h2>
              <p>
                Your playing style should influence your paddle choice:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Power Players:</strong> Heavier paddles (8.0+ oz) with stiffer cores help generate 
                more power. Look for paddles designed for power and drive shots.</li>
                <li><strong>Control Players:</strong> Lighter to mid-weight paddles (7.0-8.0 oz) with softer 
                cores provide better touch and control. Ideal for dinking and placement shots.</li>
                <li><strong>All-Around Players:</strong> Mid-weight paddles (7.5-8.0 oz) with balanced 
                characteristics work well for players who mix power and finesse.</li>
                <li><strong>Spin Players:</strong> Look for paddles with textured surfaces that enhance spin. 
                Some paddles have specialized surface treatments for maximum spin generation.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Testing and Trying Paddles
              </h2>
              <p>
                Before making a purchase, try to test paddles whenever possible:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Demo Programs:</strong> Many retailers and manufacturers offer demo programs where 
                you can try paddles before buying.</li>
                <li><strong>Borrow from Friends:</strong> Ask other players if you can try their paddles during 
                a game to get a feel for different options.</li>
                <li><strong>Local Pro Shops:</strong> Visit local pickleball facilities that may have demo paddles 
                available for testing.</li>
                <li><strong>Read Reviews:</strong> While not a substitute for trying, reviews can provide valuable 
                insights from other players with similar playing styles.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Budget Considerations
              </h2>
              <p>
                Paddles range from $20 to $300+, but price doesn't always correlate with performance for your 
                specific needs:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Entry Level ($20-50):</strong> Wood or basic composite paddles. Perfect for beginners 
                who want to try the sport without a large investment.</li>
                <li><strong>Mid-Range ($50-150):</strong> Quality composite and entry-level graphite paddles. 
                Good value for most recreational players.</li>
                <li><strong>Premium ($150-250):</strong> High-quality graphite and advanced composite paddles. 
                Best for serious players who play regularly.</li>
                <li><strong>Professional ($250+):</strong> Top-of-the-line paddles with advanced technologies. 
                For competitive players and professionals.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Additional Features to Consider
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Edge Guard:</strong> Protects the paddle from damage. Most modern paddles include this.</li>
                <li><strong>Grip Material:</strong> Cushioned grips reduce vibration and improve comfort. Some 
                paddles have moisture-wicking grips for better control when sweating.</li>
                <li><strong>Noise Level:</strong> Some facilities have noise restrictions. Quieter paddles may 
                be required in certain locations.</li>
                <li><strong>Warranty:</strong> Check the manufacturer's warranty. Quality paddles typically come 
                with at least a one-year warranty.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                Final Recommendations
              </h2>
              <p>
                When choosing your paddle, remember:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>There's no "perfect" paddle for everyone - it's about finding what works for you</li>
                <li>Your first paddle doesn't have to be your last - you can upgrade as you improve</li>
                <li>Comfort and feel are more important than brand names or price tags</li>
                <li>Consider your playing style, skill level, and physical characteristics</li>
                <li>Don't be afraid to try different paddles as your game evolves</li>
              </ul>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Shop?</h3>
                <p className="mb-4">
                  Check out our <Link href="/gear" className="text-primary-600 hover:underline font-semibold">gear page</Link> for 
                  paddle recommendations with direct links to purchase. We've curated a selection of quality 
                  paddles suitable for players at every level.
                </p>
                <p>
                  For more information about getting started with pickleball, visit our{' '}
                  <Link href="/guides/beginner" className="text-primary-600 hover:underline font-semibold">beginner's guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
