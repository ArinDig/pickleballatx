import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Pickleball Gear & Equipment - Best Paddles, Balls & Accessories',
  description: 'Shop the best pickleball gear and equipment. Find top-rated paddles, balls, shoes, bags, accessories, and tournament computers for players of all skill levels. Amazon affiliate links.',
  keywords: [
    'pickleball paddles',
    'pickleball equipment',
    'pickleball gear',
    'pickleball balls',
    'pickleball shoes',
    'pickleball accessories',
    'best pickleball paddle',
    'pickleball bag',
    'tournament computers',
    'MacBook for tournaments'
  ],
  alternates: {
    canonical: 'https://pickleballatx.org/gear',
  },
  openGraph: {
    title: 'Pickleball Gear & Equipment - Best Paddles, Balls & Accessories',
    description: 'Shop the best pickleball gear and equipment. Find top-rated paddles, balls, shoes, bags, and accessories.',
    url: 'https://pickleballatx.org/gear',
  },
}

interface Product {
  name: string
  asin: string
  category: string
  price?: string
  rating?: number
  reviewCount?: string
  description: string
  imageUrl?: string
}

const products: Product[] = [
  // Paddles
  {
    name: 'Selkirk Vanguard Hybrid Invikta Pickleball Paddle',
    asin: 'B0DTVTYF3M',
    category: 'Paddles',
    rating: 4.7,
    reviewCount: '2,500+',
    description: 'Premium carbon fiber paddle with polymer core. Great for power and control. Used by professional players.',
    imageUrl: 'https://m.media-amazon.com/images/I/71Bbm+ZlV9L._AC_SX679_.jpg',
  },
  {
    name: 'JOOLA Ben Johns Hyperion CFS 16mm Pickleball Paddle',
    asin: 'B09VCS7578',
    category: 'Paddles',
    rating: 4.8,
    reviewCount: '1,800+',
    description: 'Signature paddle of Ben Johns. Carbon fiber surface with foam core for exceptional control and touch.',
    imageUrl: 'https://m.media-amazon.com/images/I/41+oBnQbohL._AC_SX679_.jpg',
  },
  {
    name: 'ONIX Graphite Z5 Pickleball Paddle',
    asin: 'B005BSW2UW',
    category: 'Paddles',
    rating: 4.6,
    reviewCount: '5,200+',
    description: 'Best-selling graphite paddle. Great balance of power and control. Perfect for intermediate players.',
    imageUrl: 'https://m.media-amazon.com/images/I/91MGvMxCbFL._AC_SX679_.jpg',
  },
  {
    name: 'Paddletek Tempest Wave Pro Pickleball Paddle',
    asin: 'B0D1YMMN2P',
    category: 'Paddles',
    rating: 4.7,
    reviewCount: '1,200+',
    description: 'Polymer core with fiberglass face. Excellent for players who want more control and less power.',
    imageUrl: 'https://m.media-amazon.com/images/I/61Z-xW2GYGL._AC_SX679_.jpg',
  },
  
  // Balls
  {
    name: 'Onix Pure 2 Outdoor Pickleball Balls (12-Pack)',
    asin: 'B07L445FC2',
    category: 'Balls',
    rating: 4.6,
    reviewCount: '3,500+',
    description: 'Official tournament ball. Durable construction with consistent bounce. Perfect for outdoor play.',
    imageUrl: 'https://m.media-amazon.com/images/I/51WxL8efeiS._AC_SX679_.jpg',
  },
  {
    name: 'Franklin X-40 Performance Pickleball Balls (12-Pack)',
    asin: 'B074P8MZW9',
    category: 'Balls',
    rating: 4.5,
    reviewCount: '4,800+',
    description: 'Most popular pickleball ball. USAPA approved. Great for both indoor and outdoor play.',
    imageUrl: 'https://m.media-amazon.com/images/I/71ttt0pVlCL._AC_SX679_.jpg',
  },
  
  // Shoes
  {
    name: 'ASICS Gel-Rocket 10 Volleyball Shoes',
    asin: 'B08VS7473J',
    category: 'Shoes',
    rating: 4.6,
    reviewCount: '2,100+',
    description: 'Lightweight court shoes with excellent grip. Popular choice for pickleball players. Great lateral support.',
    imageUrl: 'https://m.media-amazon.com/images/I/51On8-rbGBL._AC_SY695_.jpg',
  },
  {
    name: 'K-Swiss Express Light Pickleball Shoes',
    asin: 'B07V2647ZZ',
    category: 'Shoes',
    rating: 4.5,
    reviewCount: '850+',
    description: 'Designed specifically for pickleball. Non-marking sole with superior court grip and comfort.',
    imageUrl: 'https://m.media-amazon.com/images/I/61ZAi6+CNgL._AC_SY695_.jpg',
  },
  
  // Bags
  {
    name: 'Selkirk Pickleball Paddle Backpack',
    asin: 'B0CGYXLSX7',
    category: 'Bags',
    rating: 4.7,
    reviewCount: '650+',
    description: 'Dedicated paddle compartment, ball pockets, and shoe storage. Perfect for carrying all your gear.',
    imageUrl: 'https://m.media-amazon.com/images/I/815c4u3XyGL._AC_SX679_.jpg',
  },
  {
    name: 'Onix Pickleball Paddle Bag',
    asin: 'B0778VJXRX',
    category: 'Bags',
    rating: 4.4,
    reviewCount: '1,200+',
    description: 'Affordable paddle bag with multiple pockets. Holds 2-4 paddles plus balls and accessories.',
    imageUrl: 'https://m.media-amazon.com/images/I/91+OshSKaUL._AC_SX679_.jpg',
  },
  
  // Accessories
  {
    name: 'Pickleball Paddle Grip Tape (3-Pack)',
    asin: 'B000HEKHBQ',
    category: 'Accessories',
    rating: 4.5,
    reviewCount: '2,800+',
    description: 'Overgrip tape for better control and comfort. Absorbs sweat and reduces slippage.',
    imageUrl: 'https://m.media-amazon.com/images/I/714yeZ6ao9L._AC_SX679_.jpg',
  },
  
  // Computers for Tournaments - All M4 models
  {
    name: 'Apple MacBook Air 13-inch (M4 chip, 16GB RAM, 256GB SSD)',
    asin: 'B0DZD9S5GC',
    category: 'Computers for Tournaments',
    rating: 4.7,
    reviewCount: '1,200+',
    description: 'Lightweight and portable laptop perfect for tournament management. M4 chip delivers excellent performance for running scoring software and managing brackets. Built for Apple Intelligence.',
    imageUrl: 'https://m.media-amazon.com/images/I/71cWZUr9SVL._AC_SX679_.jpg',
  },
  {
    name: 'Apple MacBook Pro 14-inch (M4 Pro chip, 18GB RAM, 512GB SSD)',
    asin: 'B0DLHY2BJ6',
    category: 'Computers for Tournaments',
    rating: 4.8,
    reviewCount: '850+',
    description: 'Powerful laptop ideal for tournament directors. M4 Pro chip delivers exceptional performance for viewing brackets and managing multiple matches simultaneously. Excellent display and great battery life for all-day events.',
    imageUrl: 'https://m.media-amazon.com/images/I/61-oTP1X4rL._AC_SX679_.jpg',
  },
  {
    name: 'Apple iMac 24-inch (M4 chip, 8GB RAM, 256GB SSD)',
    asin: 'B0DL75531G',
    category: 'Computers for Tournaments',
    rating: 4.6,
    reviewCount: '650+',
    description: 'All-in-one desktop perfect for tournament registration desks. M4 chip provides fast performance. Large 24-inch Retina display makes it easy to view brackets and manage player check-ins.',
    imageUrl: 'https://m.media-amazon.com/images/I/71RDE35cFIL._AC_SX679_.jpg',
  },
  {
    name: 'Apple MacBook Air 15-inch (M4 chip, 16GB RAM, 256GB SSD)',
    asin: 'B0F5538MJX',
    category: 'Computers for Tournaments',
    rating: 4.7,
    reviewCount: '450+',
    description: 'Larger screen size provides more workspace for tournament management. M4 chip delivers excellent performance. Still lightweight and portable for moving between courts. Built for Apple Intelligence.',
    imageUrl: 'https://m.media-amazon.com/images/I/712vcAGT7uL._AC_SX679_.jpg',
  },
  {
    name: 'Apple Mac Studio (M4 Max chip, 64GB RAM, 1TB SSD)',
    asin: 'B0FNS1ZX5B',
    category: 'Computers for Tournaments',
    rating: 4.9,
    reviewCount: '320+',
    description: 'Ultimate desktop powerhouse for power users. M4 Max chip with 64GB unified memory handles the most demanding tournament software and multiple simultaneous operations. Perfect for large tournaments with complex bracket management.',
    imageUrl: 'https://m.media-amazon.com/images/I/61A0JtxklsL._AC_SX679_.jpg',
  },
]

const AMAZON_AFFILIATE_TAG = 'adiaustin-20'

function getAmazonUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_AFFILIATE_TAG}`
}

function ProductCard({ product }: { product: Product }) {
  const amazonUrl = getAmazonUrl(product.asin)
  
  return (
    <div className="card p-6">
      <div className="flex flex-col h-full">
        {product.imageUrl && (
          <div className="mb-4 relative w-full h-48 bg-gray-50 rounded-lg overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="mb-4">
          <span className="badge badge-blue text-xs mb-2">{product.category}</span>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        </div>
        
        <div className="mt-auto">
          {product.rating && (
            <div className="flex items-center mb-3">
              <div className="flex items-center text-yellow-500 mr-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.floor(product.rating!) ? 'fill-current' : 'text-gray-300'}
                    size={14}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} {product.reviewCount && `(${product.reviewCount} reviews)`}
              </span>
            </div>
          )}
          
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn btn-primary w-full flex items-center justify-center"
          >
            View on Amazon
            <FaExternalLinkAlt className="ml-2" size={12} />
          </a>
          
          <p className="text-xs text-gray-500 mt-2 text-center">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function GearPage() {
  const categories = ['All', 'Paddles', 'Balls', 'Shoes', 'Bags', 'Accessories', 'Computers for Tournaments']
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {} as Record<string, Product[]>)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pickleball Gear & Equipment
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Find the best pickleball paddles, balls, shoes, and accessories to elevate your game. 
            We've curated top-rated products from Amazon to help you find exactly what you need.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        {/* Disclosure */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-blue-800">
            <strong>Disclosure:</strong> Pickleball ATX is a participant in the Amazon Services LLC Associates Program, 
            an affiliate advertising program designed to provide a means for sites to earn advertising fees by 
            advertising and linking to Amazon.com. When you purchase through our links, we may earn a commission 
            at no additional cost to you.
          </p>
        </div>

        {/* Categories */}
        {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <div key={category} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">{category}</h2>
              <span className="text-gray-600">{categoryProducts.length} products</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product, index) => (
                <ProductCard key={`${product.asin}-${index}`} product={product} />
              ))}
            </div>
          </div>
        ))}

        {/* Comprehensive Educational Content */}
        <section className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Guide to Choosing Pickleball Equipment
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  Whether you're a complete beginner or an experienced player looking to upgrade your gear, 
                  having the right pickleball equipment can significantly impact your performance, comfort, 
                  and enjoyment of the game. This comprehensive guide will help you understand what to look 
                  for when selecting pickleball gear.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pickleball Paddles: Your Most Important Equipment</h3>
                <p>
                  The paddle is arguably the most critical piece of equipment in pickleball. Your paddle 
                  choice directly affects your power, control, spin, and overall playing style. Here's 
                  what to consider:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Core Materials:</strong> Paddles typically feature polymer, Nomex, or 
                  aluminum cores. Polymer cores offer a soft feel and excellent control, making them 
                  popular among players who prioritize precision. Nomex cores provide more power and 
                  a harder feel, while aluminum cores offer a balance between power and control.</li>
                  <li><strong>Surface Materials:</strong> Carbon fiber surfaces provide maximum power and 
                  spin potential, ideal for aggressive players. Fiberglass surfaces offer a softer feel 
                  and good control. Graphite surfaces provide a balance between power and control with 
                  excellent responsiveness.</li>
                  <li><strong>Weight:</strong> Paddles typically range from 6.5 to 9.5 ounces. Lighter 
                  paddles (6.5-7.5 oz) offer better maneuverability and reduce arm fatigue, making them 
                  ideal for players who rely on quick reactions and finesse. Heavier paddles (8.0-9.5 oz) 
                  provide more power and stability, beneficial for players who want to drive the ball 
                  harder. Mid-weight paddles (7.5-8.0 oz) offer a balance suitable for most players.</li>
                  <li><strong>Grip Size:</strong> Proper grip size is crucial for comfort and control. 
                  Measure from the middle crease of your palm to the tip of your ring finger. Most paddles 
                  come in 4-inch (small), 4.25-inch (medium), and 4.5-inch (large) grip sizes. A grip 
                  that's too small can cause wrist issues, while one that's too large reduces maneuverability.</li>
                  <li><strong>Paddle Shape:</strong> Standard paddles have a traditional shape, while 
                  elongated paddles offer a longer reach and larger sweet spot. Wide-body paddles provide 
                  more surface area for hitting the ball.</li>
                  <li><strong>Edge Guard:</strong> Paddles with edge guards offer better durability and 
                  protection against court contact, while edgeless paddles maximize the hitting surface 
                  but may be more prone to damage.</li>
                </ul>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pickleball Balls: Indoor vs. Outdoor</h3>
                <p>
                  Pickleball balls are specifically designed for indoor or outdoor play, and using the 
                  right type is essential for optimal performance:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Outdoor Balls:</strong> Designed to withstand wind and outdoor conditions, 
                  outdoor balls are heavier (typically 0.9-0.95 ounces) with smaller, more numerous 
                  holes (usually 40 holes). The heavier weight helps maintain trajectory in windy 
                  conditions, while the smaller holes reduce wind resistance. Popular outdoor balls 
                  include the Franklin X-40, Onix Pure 2, and Dura Fast 40.</li>
                  <li><strong>Indoor Balls:</strong> Lighter (typically 0.78-0.85 ounces) with larger, 
                  fewer holes (usually 26 holes). The lighter weight and larger holes make them more 
                  suitable for indoor play where wind isn't a factor. Popular indoor balls include the 
                  Onix Fuse G2 and Jugs Indoor Pickleball Balls.</li>
                  <li><strong>USAPA Approval:</strong> For tournament play, ensure your balls are 
                  approved by the USA Pickleball Association (USAPA). Approved balls meet specific 
                  standards for size, weight, and bounce characteristics.</li>
                  <li><strong>Color:</strong> Most balls come in yellow or white. Yellow balls are 
                  generally easier to see, especially outdoors, while white balls are traditional and 
                  work well indoors with good lighting.</li>
                </ul>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Court Shoes: Essential for Safety and Performance</h3>
                <p>
                  Proper footwear is crucial for pickleball, providing the support, stability, and 
                  traction needed for the quick lateral movements, stops, and starts that characterize 
                  the game:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Non-Marking Soles:</strong> Essential for indoor courts. Non-marking 
                  soles prevent scuff marks and are required at most indoor facilities.</li>
                  <li><strong>Lateral Support:</strong> Pickleball involves significant side-to-side 
                  movement. Look for shoes with good lateral stability to prevent ankle injuries.</li>
                  <li><strong>Cushioning:</strong> Adequate cushioning reduces impact on joints during 
                  play. Look for shoes with responsive cushioning in the heel and forefoot.</li>
                  <li><strong>Traction:</strong> Court shoes should provide excellent grip on both 
                  indoor and outdoor surfaces. Herringbone or modified herringbone patterns typically 
                  offer the best traction.</li>
                  <li><strong>Fit:</strong> Proper fit is crucial. Shoes should be snug but not tight, 
                  with enough room in the toe box. Consider trying shoes on with the socks you'll wear 
                  while playing.</li>
                  <li><strong>Durability:</strong> Look for shoes with reinforced toe caps and durable 
                  outsoles, as pickleball involves frequent stops and starts that can wear down shoes quickly.</li>
                </ul>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Paddle Bags: Protecting Your Investment</h3>
                <p>
                  A good paddle bag protects your equipment and makes transportation easier:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Size:</strong> Choose a bag that accommodates your paddle(s), balls, and 
                  accessories. Single-paddle bags are compact, while multi-paddle bags offer more storage.</li>
                  <li><strong>Protection:</strong> Look for padded compartments to protect paddles from 
                  damage during transport.</li>
                  <li><strong>Organization:</strong> Multiple pockets help organize balls, grips, water 
                  bottles, and other accessories.</li>
                  <li><strong>Durability:</strong> Quality materials and construction ensure your bag 
                  lasts through regular use.</li>
                  <li><strong>Comfort:</strong> If you'll be carrying the bag frequently, consider 
                  padded straps and ergonomic design.</li>
                </ul>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Accessories</h3>
                <p>
                  Several accessories can enhance your playing experience:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Grip Tape:</strong> Overgrips can improve comfort, absorb sweat, and 
                  provide better control. They're easily replaceable and allow you to customize grip 
                  thickness.</li>
                  <li><strong>Ball Holders:</strong> Keep multiple balls easily accessible during play 
                  with ball holders that attach to your paddle or bag.</li>
                  <li><strong>Court Markers:</strong> Temporary court markers can be useful for 
                  setting up pickleball courts on multi-use surfaces.</li>
                  <li><strong>Protective Gear:</strong> Consider knee pads, elbow pads, or wrist 
                  supports if you have joint concerns or are recovering from injuries.</li>
                  <li><strong>Hydration:</strong> Stay hydrated with a quality water bottle, especially 
                  important for outdoor play in Austin's heat.</li>
                </ul>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Computers for Tournament Management</h3>
                <p>
                  For tournament directors and organizers, reliable computers are essential for managing 
                  brackets, scoring, and player registration. Apple computers are popular choices due to 
                  their reliability, performance, and excellent displays. Key considerations include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Portability:</strong> Laptops offer flexibility for moving between courts 
                  and locations.</li>
                  <li><strong>Performance:</strong> Tournament software can be demanding, especially 
                  when managing multiple matches simultaneously.</li>
                  <li><strong>Display Quality:</strong> Clear, bright displays make it easier to view 
                  brackets and manage information.</li>
                  <li><strong>Battery Life:</strong> Long battery life ensures uninterrupted operation 
                  during all-day tournaments.</li>
                  <li><strong>Reliability:</strong> Tournament computers must be dependable, as 
                  technical issues can disrupt events.</li>
                </ul>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Making Your Selection</h3>
                <p>
                  When choosing pickleball equipment, consider your skill level, playing style, and 
                  budget. Beginners may want to start with mid-range equipment to learn what works 
                  for them, while advanced players often have specific preferences based on experience. 
                  Don't hesitate to try different equipment as your game develops—what works for one 
                  player may not work for another.
                </p>
                <p>
                  All products featured on this page are carefully selected based on customer reviews, 
                  ratings, popularity within the pickleball community, and value. We regularly update 
                  our recommendations to reflect current market offerings and player feedback. Click 
                  through to Amazon to see current prices, availability, and detailed product 
                  specifications, as these change frequently.
                </p>
                <p className="mt-6">
                  Remember that the best equipment is the equipment that feels right for you and helps 
                  you enjoy the game. Don't be afraid to experiment and find what works best for your 
                  individual playing style and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

