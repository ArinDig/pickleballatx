import { Metadata } from 'next'
import Link from 'next/link'
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Pickleball Gear & Equipment - Best Paddles, Balls & Accessories',
  description: 'Shop the best pickleball gear and equipment. Find top-rated paddles, balls, shoes, bags, and accessories for players of all skill levels. Amazon affiliate links.',
  keywords: [
    'pickleball paddles',
    'pickleball equipment',
    'pickleball gear',
    'pickleball balls',
    'pickleball shoes',
    'pickleball accessories',
    'best pickleball paddle',
    'pickleball bag'
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
  },
  {
    name: 'JOOLA Ben Johns Hyperion CFS 16mm Pickleball Paddle',
    asin: 'B09VCS7578',
    category: 'Paddles',
    rating: 4.8,
    reviewCount: '1,800+',
    description: 'Signature paddle of Ben Johns. Carbon fiber surface with foam core for exceptional control and touch.',
  },
  {
    name: 'ONIX Graphite Z5 Pickleball Paddle',
    asin: 'B005BSW2UW',
    category: 'Paddles',
    rating: 4.6,
    reviewCount: '5,200+',
    description: 'Best-selling graphite paddle. Great balance of power and control. Perfect for intermediate players.',
  },
  {
    name: 'Paddletek Tempest Wave Pro Pickleball Paddle',
    asin: 'B0D1YMMN2P',
    category: 'Paddles',
    rating: 4.7,
    reviewCount: '1,200+',
    description: 'Polymer core with fiberglass face. Excellent for players who want more control and less power.',
  },
  
  // Balls
  {
    name: 'Onix Pure 2 Outdoor Pickleball Balls (12-Pack)',
    asin: 'B07L445FC2',
    category: 'Balls',
    rating: 4.6,
    reviewCount: '3,500+',
    description: 'Official tournament ball. Durable construction with consistent bounce. Perfect for outdoor play.',
  },
  {
    name: 'Franklin X-40 Performance Pickleball Balls (12-Pack)',
    asin: 'B074P8MZW9',
    category: 'Balls',
    rating: 4.5,
    reviewCount: '4,800+',
    description: 'Most popular pickleball ball. USAPA approved. Great for both indoor and outdoor play.',
  },
  
  // Shoes
  {
    name: 'ASICS Gel-Rocket 10 Volleyball Shoes',
    asin: 'B08VS7473J',
    category: 'Shoes',
    rating: 4.6,
    reviewCount: '2,100+',
    description: 'Lightweight court shoes with excellent grip. Popular choice for pickleball players. Great lateral support.',
  },
  {
    name: 'K-Swiss Express Light Pickleball Shoes',
    asin: 'B07V2647ZZ',
    category: 'Shoes',
    rating: 4.5,
    reviewCount: '850+',
    description: 'Designed specifically for pickleball. Non-marking sole with superior court grip and comfort.',
  },
  
  // Bags
  {
    name: 'Selkirk Pickleball Paddle Backpack',
    asin: 'B0CGYXLSX7',
    category: 'Bags',
    rating: 4.7,
    reviewCount: '650+',
    description: 'Dedicated paddle compartment, ball pockets, and shoe storage. Perfect for carrying all your gear.',
  },
  {
    name: 'Onix Pickleball Paddle Bag',
    asin: 'B0778VJXRX',
    category: 'Bags',
    rating: 4.4,
    reviewCount: '1,200+',
    description: 'Affordable paddle bag with multiple pockets. Holds 2-4 paddles plus balls and accessories.',
  },
  
  // Accessories
  {
    name: 'Pickleball Paddle Grip Tape (3-Pack)',
    asin: 'B000HEKHBQ',
    category: 'Accessories',
    rating: 4.5,
    reviewCount: '2,800+',
    description: 'Overgrip tape for better control and comfort. Absorbs sweat and reduces slippage.',
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
  const categories = ['All', 'Paddles', 'Balls', 'Shoes', 'Bags', 'Accessories']
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

        {/* SEO Content */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Choosing the Right Pickleball Equipment
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Whether you're just starting out or looking to upgrade your gear, having the right equipment 
              can make a significant difference in your pickleball game. Here's what to consider when 
              shopping for pickleball gear:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pickleball Paddles</h3>
            <p>
              The paddle is the most important piece of equipment. Look for paddles that match your playing 
              style—power players may prefer carbon fiber surfaces, while control players often choose polymer 
              or fiberglass cores. Weight, grip size, and paddle shape all affect your performance.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pickleball Balls</h3>
            <p>
              Outdoor balls are typically heavier with smaller holes, while indoor balls are lighter with 
              larger holes. The Onix Pure 2 and Franklin X-40 are both excellent choices that meet USAPA 
              tournament standards.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Court Shoes</h3>
            <p>
              Proper court shoes provide the lateral support and grip needed for quick movements. Look for 
              non-marking soles and good cushioning. Many players use volleyball or tennis shoes designed 
              for indoor courts.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Accessories</h3>
            <p>
              Don't forget the essentials: a good paddle bag to protect your equipment, grip tape for better 
              control, and extra balls for practice. These small investments can significantly improve your 
              playing experience.
            </p>
            
            <p className="mt-6">
              All products featured on this page are carefully selected based on customer reviews, ratings, 
              and popularity within the pickleball community. Click through to Amazon to see current prices 
              and availability, as they change frequently.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

