export interface CourtHours {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
  notes?: string;
}

export interface Court {
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  phone?: string;
  website?: string;
  email?: string;
  mainImage: string;
  images: string[];
  description: string;
  amenities: string[];
  courtType: 'indoor' | 'outdoor' | 'both';
  numberOfCourts: number;
  isFree: boolean;
  pricing?: {
    details: string;
    rates?: string[];
  };
  reservationRequired: boolean;
  reservationInfo?: string;
  hours: CourtHours;
  features: string[];
  accessibility?: string[];
  parking?: string;
  featured?: boolean;
}

export const courts: Court[] = [
  {
    id: '1',
    name: 'Austin Pickle Ranch - Braker Lane',
    slug: 'austin-pickle-ranch-braker',
    address: '11000 Middle Fiskville Road, Building B',
    city: 'Austin',
    state: 'TX',
    zipCode: '78753',
    latitude: 30.3803,
    longitude: -97.6852,
    phone: '(737) 242-5898',
    website: 'https://www.austinpickleranch.com',
    mainImage: 'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/17299530/pexels-photo-17299530.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'State-of-the-art indoor pickleball facility featuring 16 dedicated courts with climate control. Austin Pickle Ranch offers a premium playing experience with both indoor and outdoor lounge areas, making it perfect for year-round play.',
    amenities: ['Locker Rooms', 'Pro Shop', 'Food & Beverage', 'Lounge Areas', 'Climate Controlled'],
    courtType: 'indoor',
    numberOfCourts: 16,
    isFree: false,
    pricing: {
      details: 'Membership required',
      rates: ['Monthly: $89', 'Annual: $899', 'Day Pass: $15']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations can be made online or by phone',
    hours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '7:00 AM - 9:00 PM',
      sunday: '7:00 AM - 9:00 PM'
    },
    features: ['Professional Courts', 'Lighting', 'Climate Control', 'Pro Shop', 'Food Service'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: true
  },
  {
    id: '2',
    name: 'Austin Pickle Ranch - West 6th',
    slug: 'austin-pickle-ranch-6th',
    address: '1200 West 6th Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78703',
    latitude: 30.2709,
    longitude: -97.7619,
    phone: '(737) 242-5898',
    website: 'https://www.austinpickleranch.com',
    mainImage: 'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Downtown location featuring 8 outdoor dedicated pickleball courts with professional lighting. Perfect for evening play with a vibrant atmosphere in the heart of Austin.',
    amenities: ['Professional Lighting', 'Seating Areas', 'Water Stations', 'Shade Structures'],
    courtType: 'outdoor',
    numberOfCourts: 8,
    isFree: false,
    pricing: {
      details: 'Membership required',
      rates: ['Monthly: $79', 'Annual: $799', 'Day Pass: $12']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations can be made online or by phone',
    hours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '7:00 AM - 9:00 PM',
      sunday: '7:00 AM - 9:00 PM'
    },
    features: ['Professional Courts', 'Lighting', 'Shade Structures', 'Water Stations'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Street parking and paid lots nearby',
    featured: true
  },
  {
    id: '3',
    name: 'Austin Tennis and Pickleball Center',
    slug: 'austin-tennis-pickleball',
    address: '5000 Berkman Drive',
    city: 'Austin',
    state: 'TX',
    zipCode: '78724',
    latitude: 30.2967,
    longitude: -97.6422,
    phone: '(512) 928-8119',
    website: 'https://www.austintennisandpickleballcenter.com',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Multi-sport facility featuring 8 dedicated outdoor pickleball courts with excellent lighting for night play. Offers both membership and pay-per-play options for flexible access.',
    amenities: ['Restrooms', 'Parking', 'Lighting', 'Pro Shop', 'Lessons Available'],
    courtType: 'outdoor',
    numberOfCourts: 8,
    isFree: false,
    pricing: {
      details: 'Membership and pay-per-play options available',
      rates: ['Court Rental: $25/hour', 'Monthly Membership: $65', 'Annual Membership: $650']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations required, can be made online or by phone',
    hours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '7:00 AM - 9:00 PM',
      sunday: '7:00 AM - 9:00 PM'
    },
    features: ['Professional Courts', 'Lighting', 'Pro Shop', 'Lessons'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '4',
    name: 'Bouldin Acres',
    slug: 'bouldin-acres',
    address: '2027 South Lamar Boulevard',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    latitude: 30.2408,
    longitude: -97.7713,
    phone: '(512) 382-1849',
    website: 'https://www.bouldinacres.com',
    mainImage: 'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Unique entertainment venue featuring 2 outdoor pickleball courts alongside food trucks, bars, and family-friendly activities. A great spot to play pickleball and enjoy Austin\'s outdoor social scene.',
    amenities: ['Food Trucks', 'Bars', 'Dog Park', 'Playgrounds', 'Lawn Games', 'Live Music'],
    courtType: 'outdoor',
    numberOfCourts: 2,
    isFree: false,
    pricing: {
      details: 'Court rental required',
      rates: ['Court Rental: $20/hour', 'Group Rates Available']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations recommended, especially on weekends',
    hours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 11:00 PM',
      saturday: '10:00 AM - 11:00 PM',
      sunday: '10:00 AM - 10:00 PM'
    },
    features: ['Food & Drinks', 'Entertainment', 'Family Friendly', 'Dog Friendly'],
    accessibility: ['Wheelchair Accessible'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '5',
    name: 'The Pitch',
    slug: 'the-pitch',
    address: '12000 Burnet Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78753',
    latitude: 30.4194,
    longitude: -97.6897,
    phone: '(512) 829-4974',
    website: 'https://www.thepitchaustin.com',
    mainImage: 'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Sports and entertainment complex with 3 outdoor pickleball courts. Features multiple restaurants, bars, and a coffee shop, making it a complete destination for recreation and dining.',
    amenities: ['Restaurants', 'Bars', 'Coffee Shop', 'Multiple Sports Courts', 'Outdoor Seating'],
    courtType: 'outdoor',
    numberOfCourts: 3,
    isFree: false,
    pricing: {
      details: 'Court rental required',
      rates: ['Court Rental: $25/hour', 'Group Packages Available']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations recommended, especially during peak hours',
    hours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 11:00 PM',
      saturday: '8:00 AM - 11:00 PM',
      sunday: '8:00 AM - 10:00 PM'
    },
    features: ['Food & Drinks', 'Multiple Sports', 'Entertainment', 'Outdoor Seating'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '6',
    name: 'Lake Travis Biergarten',
    slug: 'lake-travis-biergarten',
    address: '15600 FM 2769',
    city: 'Austin',
    state: 'TX',
    zipCode: '78734',
    latitude: 30.3989,
    longitude: -97.9889,
    phone: '(512) 266-8399',
    website: 'https://www.laketravisbiergarten.com',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Scenic outdoor venue with 2 pickleball courts overlooking Lake Travis. Perfect for combining pickleball with dining and drinks in a beautiful lakeside setting.',
    amenities: ['Restaurant', 'Bar', 'Lake Views', 'Outdoor Seating', 'Live Music'],
    courtType: 'outdoor',
    numberOfCourts: 2,
    isFree: false,
    pricing: {
      details: 'Court rental required',
      rates: ['Court Rental: $30/hour', 'Includes equipment rental']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations required, call ahead for availability',
    hours: {
      monday: '11:00 AM - 9:00 PM',
      tuesday: '11:00 AM - 9:00 PM',
      wednesday: '11:00 AM - 9:00 PM',
      thursday: '11:00 AM - 9:00 PM',
      friday: '11:00 AM - 10:00 PM',
      saturday: '10:00 AM - 10:00 PM',
      sunday: '10:00 AM - 9:00 PM'
    },
    features: ['Lake Views', 'Food & Drinks', 'Scenic Location', 'Equipment Rental'],
    accessibility: ['Wheelchair Accessible'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '7',
    name: 'Little Zilker Park',
    slug: 'little-zilker',
    address: '2100 Barton Springs Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78746',
    latitude: 30.2644,
    longitude: -97.7706,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Public park with 4 outdoor pickleball courts available on a first-come, first-served basis. Located near Zilker Park with easy access to other recreational facilities.',
    amenities: ['Restrooms', 'Parking', 'Playground', 'Walking Trails', 'Picnic Areas'],
    courtType: 'outdoor',
    numberOfCourts: 4,
    isFree: true,
    pricing: {
      details: 'Free to play',
      rates: ['No cost']
    },
    reservationRequired: false,
    reservationInfo: 'First-come, first-served basis',
    hours: {
      monday: '5:00 AM - 10:00 PM',
      tuesday: '5:00 AM - 10:00 PM',
      wednesday: '5:00 AM - 10:00 PM',
      thursday: '5:00 AM - 10:00 PM',
      friday: '5:00 AM - 10:00 PM',
      saturday: '5:00 AM - 10:00 PM',
      sunday: '5:00 AM - 10:00 PM'
    },
    features: ['Free Play', 'Public Access', 'Family Friendly', 'Park Setting'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '8',
    name: 'South Austin Recreation Center',
    slug: 'south-austin-rec',
    address: '1100 Cumberland Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    latitude: 30.2156,
    longitude: -97.7713,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'City recreation center featuring 6 indoor pickleball courts with air conditioning. Offers programs, leagues, and open play sessions for all skill levels.',
    amenities: ['Air Conditioning', 'Restrooms', 'Parking', 'Fitness Center', 'Programs Available'],
    courtType: 'indoor',
    numberOfCourts: 6,
    isFree: false,
    pricing: {
      details: 'City recreation center rates apply',
      rates: ['Daily Pass: $3', 'Monthly Pass: $25', 'Annual Pass: $200']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations required for court time',
    hours: {
      monday: '6:00 AM - 9:00 PM',
      tuesday: '6:00 AM - 9:00 PM',
      wednesday: '6:00 AM - 9:00 PM',
      thursday: '6:00 AM - 9:00 PM',
      friday: '6:00 AM - 9:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '8:00 AM - 6:00 PM'
    },
    features: ['Indoor Courts', 'Air Conditioning', 'Programs', 'Leagues'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '9',
    name: 'Dittmar Recreation Center',
    slug: 'dittmar-rec',
    address: '1009 W. Dittmar Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78745',
    latitude: 30.2156,
    longitude: -97.7713,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Community recreation center with 4 indoor pickleball courts. Offers affordable access to pickleball with various programs and open play times.',
    amenities: ['Air Conditioning', 'Restrooms', 'Parking', 'Community Programs', 'Fitness Center'],
    courtType: 'indoor',
    numberOfCourts: 4,
    isFree: false,
    pricing: {
      details: 'City recreation center rates apply',
      rates: ['Daily Pass: $3', 'Monthly Pass: $25', 'Annual Pass: $200']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations required for court time',
    hours: {
      monday: '6:00 AM - 9:00 PM',
      tuesday: '6:00 AM - 9:00 PM',
      wednesday: '6:00 AM - 9:00 PM',
      thursday: '6:00 AM - 9:00 PM',
      friday: '6:00 AM - 9:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '8:00 AM - 6:00 PM'
    },
    features: ['Indoor Courts', 'Air Conditioning', 'Community Programs', 'Affordable'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '10',
    name: 'Pan Am Recreation Center',
    slug: 'pan-am-rec',
    address: '2100 E. 3rd Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78702',
    latitude: 30.2644,
    longitude: -97.7206,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Historic recreation center featuring 8 indoor pickleball courts with excellent facilities. Known for its community programs and competitive leagues.',
    amenities: ['Air Conditioning', 'Restrooms', 'Parking', 'Historic Building', 'Competitive Leagues'],
    courtType: 'indoor',
    numberOfCourts: 8,
    isFree: false,
    pricing: {
      details: 'City recreation center rates apply',
      rates: ['Daily Pass: $3', 'Monthly Pass: $25', 'Annual Pass: $200']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations required for court time',
    hours: {
      monday: '6:00 AM - 9:00 PM',
      tuesday: '6:00 AM - 9:00 PM',
      wednesday: '6:00 AM - 9:00 PM',
      thursday: '6:00 AM - 9:00 PM',
      friday: '6:00 AM - 9:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '8:00 AM - 6:00 PM'
    },
    features: ['Indoor Courts', 'Air Conditioning', 'Competitive Leagues', 'Historic Facility'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '11',
    name: 'Castle Court Austin',
    slug: 'castle-court',
    address: '8900 Research Boulevard',
    city: 'Austin',
    state: 'TX',
    zipCode: '78758',
    latitude: 30.3803,
    longitude: -97.7206,
    phone: '(512) 345-6789',
    website: 'https://www.castlecourtaustin.com',
    mainImage: 'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Premium indoor pickleball facility with 12 dedicated courts featuring professional-grade surfaces and lighting. Offers lessons, leagues, and tournaments.',
    amenities: ['Professional Courts', 'Lighting', 'Pro Shop', 'Lessons', 'Tournaments', 'Locker Rooms'],
    courtType: 'indoor',
    numberOfCourts: 12,
    isFree: false,
    pricing: {
      details: 'Membership and court rental options',
      rates: ['Court Rental: $35/hour', 'Monthly Membership: $95', 'Annual Membership: $950']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations required, can be made online or by phone',
    hours: {
      monday: '6:00 AM - 11:00 PM',
      tuesday: '6:00 AM - 11:00 PM',
      wednesday: '6:00 AM - 11:00 PM',
      thursday: '6:00 AM - 11:00 PM',
      friday: '6:00 AM - 11:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 10:00 PM'
    },
    features: ['Professional Courts', 'Lighting', 'Pro Shop', 'Lessons', 'Tournaments'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: true
  },
  {
    id: '12',
    name: 'Other Racquet Social Club',
    slug: 'other-racquet',
    address: '4500 Spicewood Springs Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78759',
    latitude: 30.3803,
    longitude: -97.7506,
    phone: '(512) 234-5678',
    website: 'https://www.otherracquet.com',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Multi-racquet sports facility featuring 6 indoor pickleball courts alongside tennis and other racquet sports. Offers comprehensive programs for all skill levels.',
    amenities: ['Multi-Sport Facility', 'Pro Shop', 'Lessons', 'Leagues', 'Tournaments', 'Restaurant'],
    courtType: 'indoor',
    numberOfCourts: 6,
    isFree: false,
    pricing: {
      details: 'Membership and court rental options',
      rates: ['Court Rental: $30/hour', 'Monthly Membership: $85', 'Annual Membership: $850']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations required, can be made online or by phone',
    hours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '7:00 AM - 9:00 PM',
      sunday: '7:00 AM - 9:00 PM'
    },
    features: ['Multi-Sport', 'Professional Courts', 'Pro Shop', 'Lessons', 'Restaurant'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  }
]

// Helper functions
export function getAllCourts(): Court[] {
  return courts
}

export function getCourtBySlug(slug: string): Court | undefined {
  return courts.find(court => court.slug === slug)
}

export function getFreeCourts(): Court[] {
  return courts.filter(court => court.isFree)
}

export function getIndoorCourts(): Court[] {
  return courts.filter(court => court.courtType === 'indoor')
}

export function getOutdoorCourts(): Court[] {
  return courts.filter(court => court.courtType === 'outdoor')
}

export function getFeaturedCourts(): Court[] {
  return courts.filter(court => court.featured)
}

export function searchCourts(query: string): Court[] {
  const lowercaseQuery = query.toLowerCase()
  return courts.filter(court => 
    court.name.toLowerCase().includes(lowercaseQuery) ||
    court.address.toLowerCase().includes(lowercaseQuery) ||
    court.city.toLowerCase().includes(lowercaseQuery) ||
    court.description.toLowerCase().includes(lowercaseQuery) ||
    court.amenities.some(amenity => amenity.toLowerCase().includes(lowercaseQuery))
  )
}