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
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'State-of-the-art indoor pickleball facility featuring 16 dedicated courts with climate control. Austin Pickle Ranch offers a premium playing experience with both indoor and outdoor lounge areas, making it perfect for year-round play.',
    amenities: ['Locker Rooms', 'Pro Shop', 'Food & Beverage', 'Lounge Areas', 'Climate Controlled'],
    courtType: 'indoor',
    numberOfCourts: 16,
    isFree: false,
    pricing: {
      details: 'One-time fee required for access; court reservations available',
      rates: ['Drop-in sessions available', 'Membership options', 'Court rentals by the hour']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations can be made online through their website',
    hours: {
      monday: '7:00 AM - 11:00 PM',
      tuesday: '7:00 AM - 12:00 AM',
      wednesday: '7:00 AM - 12:00 AM',
      thursday: '7:00 AM - 12:00 AM',
      friday: '7:00 AM - 12:00 AM',
      saturday: '8:00 AM - 12:00 AM',
      sunday: '8:00 AM - 11:00 PM'
    },
    features: ['Tournament Quality Courts', 'LED Lighting', 'Professional Surface', 'Equipment Rentals'],
    accessibility: ['ADA Compliant', 'Wheelchair Accessible'],
    parking: 'Free parking lot on site',
    featured: true
  },
  {
    id: '2',
    name: 'Austin Pickle Ranch - West 6th Street',
    slug: 'austin-pickle-ranch-west-6th',
    address: '1717 W 6th St',
    city: 'Austin',
    state: 'TX',
    zipCode: '78703',
    latitude: 30.2709,
    longitude: -97.7619,
    phone: '(737) 242-5898',
    website: 'https://www.austinpickleranch.com',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Downtown location featuring 8 outdoor dedicated pickleball courts with professional lighting. Perfect for evening play with a vibrant atmosphere in the heart of Austin.',
    amenities: ['Professional Lighting', 'Seating Areas', 'Water Stations', 'Shade Structures'],
    courtType: 'outdoor',
    numberOfCourts: 8,
    isFree: false,
    pricing: {
      details: 'Membership required; court reservations open to the public',
      rates: ['Daily passes available', 'Monthly memberships', 'Annual memberships']
    },
    reservationRequired: true,
    reservationInfo: 'Book online or call ahead for court times',
    hours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '8:00 AM - 10:00 PM',
      sunday: '8:00 AM - 10:00 PM'
    },
    features: ['LED Court Lighting', 'Tournament Standards', 'Downtown Location', 'Equipment Available'],
    parking: 'Street parking and nearby lots',
    featured: true
  },
  {
    id: '3',
    name: 'The Austin Tennis and Pickleball Center',
    slug: 'austin-tennis-pickleball-center',
    address: '7800 Johnny Morris Rd',
    city: 'Austin',
    state: 'TX',
    zipCode: '78724',
    latitude: 30.2967,
    longitude: -97.6422,
    phone: '(512) 928-8119',
    website: 'https://www.austintennisandpickleballcenter.com',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Multi-sport facility featuring 8 dedicated outdoor pickleball courts with excellent lighting for night play. Offers both membership and pay-per-play options for flexible access.',
    amenities: ['Restrooms', 'Parking', 'Lighting', 'Pro Shop', 'Lessons Available'],
    courtType: 'outdoor',
    numberOfCourts: 8,
    isFree: false,
    pricing: {
      details: 'Payment or membership required',
      rates: ['Drop-in rates available', 'Membership discounts', 'Lesson packages']
    },
    reservationRequired: true,
    reservationInfo: 'Call or visit website to reserve courts',
    hours: {
      monday: '7:00 AM - 9:00 PM',
      tuesday: '7:00 AM - 9:00 PM',
      wednesday: '7:00 AM - 9:00 PM',
      thursday: '7:00 AM - 9:00 PM',
      friday: '7:00 AM - 9:00 PM',
      saturday: '8:00 AM - 8:00 PM',
      sunday: '8:00 AM - 8:00 PM'
    },
    features: ['Professional Instruction', 'Court Lighting', 'Equipment Rentals', 'Clinics & Events'],
    parking: 'Ample free parking',
    featured: true
  },
  {
    id: '4',
    name: 'Bouldin Acres',
    slug: 'bouldin-acres',
    address: '2027 S Lamar Blvd',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    latitude: 30.2408,
    longitude: -97.7713,
    phone: '(512) 382-1849',
    website: 'https://www.bouldinacres.com',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Unique entertainment venue featuring 2 outdoor pickleball courts alongside food trucks, bars, and family-friendly activities. A great spot to play pickleball and enjoy Austin\'s outdoor social scene.',
    amenities: ['Food Trucks', 'Bars', 'Dog Park', 'Playgrounds', 'Lawn Games', 'Live Music'],
    courtType: 'outdoor',
    numberOfCourts: 2,
    isFree: false,
    pricing: {
      details: 'Courts rented by the half-hour',
      rates: ['$10 per half hour (Mon-Thu, 11 AM-6 PM)', '$20 per half hour (Mon-Thu, 6 PM-Close)', '$20 per half hour (Fri-Sun, 11 AM-Close)']
    },
    reservationRequired: true,
    reservationInfo: 'Reserve online or in person',
    hours: {
      monday: '11:00 AM - 12:00 AM',
      tuesday: '11:00 AM - 12:00 AM',
      wednesday: '11:00 AM - 12:00 AM',
      thursday: '11:00 AM - 12:00 AM',
      friday: '11:00 AM - 12:00 AM',
      saturday: '11:00 AM - 12:00 AM',
      sunday: '11:00 AM - 12:00 AM',
      notes: '21+ after 10:00 PM'
    },
    features: ['Entertainment Venue', 'Pet Friendly', 'Full Bar', 'Food Options'],
    parking: 'On-site parking available',
    featured: false
  },
  {
    id: '5',
    name: 'The Pitch',
    slug: 'the-pitch',
    address: '13000 Harris Ridge Blvd',
    city: 'Austin',
    state: 'TX',
    zipCode: '78753',
    latitude: 30.4194,
    longitude: -97.6897,
    phone: '(512) 829-4974',
    website: 'https://www.thepitchaustin.com',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Sports and entertainment complex with 3 outdoor pickleball courts. Features multiple restaurants, bars, and a coffee shop, making it a complete destination for recreation and dining.',
    amenities: ['Restaurants', 'Bars', 'Coffee Shop', 'Multiple Sports Courts', 'Outdoor Seating'],
    courtType: 'outdoor',
    numberOfCourts: 3,
    isFree: false,
    pricing: {
      details: 'One court free for public use; two courts available for reservation',
      rates: ['Free court available first-come, first-served', 'Reservable courts have fees']
    },
    reservationRequired: false,
    reservationInfo: 'One free court, two courts can be reserved in advance',
    hours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 10:00 PM',
      saturday: '11:00 AM - 10:00 PM',
      sunday: '11:00 AM - 6:00 PM'
    },
    features: ['Dining Options', 'Entertainment Complex', 'Multiple Sports', 'Family Friendly'],
    parking: 'Large parking lot available',
    featured: false
  },
  {
    id: '6',
    name: 'Lake Travis Biergarten',
    slug: 'lake-travis-biergarten',
    address: '3519 Ranch Rd 620 N',
    city: 'Austin',
    state: 'TX',
    zipCode: '78734',
    latitude: 30.3896,
    longitude: -97.8943,
    website: 'https://www.laketravisbiergarten.com',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Beautiful lakeside venue offering 2 free outdoor pickleball courts with lighting. Combine your game with German-inspired food and beverages in a scenic setting near Lake Travis.',
    amenities: ['Free Access', 'Lighting', 'Restaurant', 'Beer Garden', 'Lake Views', 'Pet Friendly'],
    courtType: 'outdoor',
    numberOfCourts: 2,
    isFree: true,
    reservationRequired: false,
    reservationInfo: 'No reservations needed - first come, first served',
    hours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 11:00 PM',
      saturday: '11:00 AM - 11:00 PM',
      sunday: '11:00 AM - 10:00 PM'
    },
    features: ['Free Courts', 'Scenic Location', 'Food & Drinks', 'Night Lighting'],
    parking: 'Free parking on site',
    featured: true
  },
  {
    id: '7',
    name: 'Little Zilker Park',
    slug: 'little-zilker-park',
    address: '1900 Bluebonnet Ln',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    latitude: 30.2611,
    longitude: -97.7747,
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'City park featuring 2 free outdoor pickleball courts with lighting. Courts are lined on existing tennis courts, providing a convenient neighborhood option for casual play.',
    amenities: ['Free Access', 'Lighting', 'Park Setting', 'Playground', 'Green Space'],
    courtType: 'outdoor',
    numberOfCourts: 2,
    isFree: true,
    reservationRequired: false,
    reservationInfo: 'Free public courts - no reservation needed',
    hours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '6:00 AM - 10:00 PM',
      sunday: '6:00 AM - 10:00 PM'
    },
    features: ['Free Courts', 'Neighborhood Park', 'Tennis Court Lines', 'Night Lighting'],
    parking: 'Street parking available',
    featured: false
  },
  {
    id: '8',
    name: 'South Austin Recreation Center',
    slug: 'south-austin-rec-center',
    address: '1100 Cumberland Rd',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    latitude: 30.2378,
    longitude: -97.7537,
    phone: '(512) 978-2440',
    website: 'https://www.austintexas.gov/department/south-austin-recreation-center',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'City-operated recreation center with 4 free indoor pickleball courts. Offers organized open play sessions for different skill levels and age groups throughout the week.',
    amenities: ['Free Access', 'Indoor Courts', 'Restrooms', 'Fitness Center', 'Climate Controlled'],
    courtType: 'indoor',
    numberOfCourts: 4,
    isFree: true,
    reservationRequired: false,
    reservationInfo: 'Free during open play hours - check schedule for availability',
    hours: {
      monday: '6:00 PM - 9:00 PM (All Ages Open Play)',
      tuesday: '11:00 AM - 2:00 PM (Varsity Generation Open Play)',
      wednesday: 'By appointment',
      thursday: 'By appointment',
      friday: 'By appointment',
      saturday: 'Check schedule',
      sunday: 'Check schedule',
      notes: 'Specific open play hours vary - call ahead'
    },
    features: ['Free Courts', 'Scheduled Open Play', 'Skill-Based Sessions', 'Indoor Climate Control'],
    accessibility: ['ADA Compliant', 'Wheelchair Accessible'],
    parking: 'Free parking lot',
    featured: true
  },
  {
    id: '9',
    name: 'Dittmar Recreation Center',
    slug: 'dittmar-rec-center',
    address: '1009 W Dittmar Rd',
    city: 'Austin',
    state: 'TX',
    zipCode: '78745',
    latitude: 30.1933,
    longitude: -97.8042,
    phone: '(512) 974-6972',
    website: 'https://www.austintexas.gov/department/dittmar-recreation-center',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Austin Parks and Recreation facility offering 4 free indoor pickleball courts. Great option for climate-controlled play with organized sessions and open play times.',
    amenities: ['Free Access', 'Indoor Courts', 'Restrooms', 'Fitness Facilities', 'Air Conditioned'],
    courtType: 'indoor',
    numberOfCourts: 4,
    isFree: true,
    reservationRequired: false,
    reservationInfo: 'Free during open hours - check schedule for availability',
    hours: {
      monday: '9:00 AM - 9:00 PM',
      tuesday: '9:00 AM - 9:00 PM',
      wednesday: '9:00 AM - 9:00 PM',
      thursday: '9:00 AM - 9:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed',
      notes: 'Hours may vary - call ahead to confirm'
    },
    features: ['Free Courts', 'Indoor Play', 'Recreation Center Amenities', 'Community Programs'],
    accessibility: ['ADA Compliant', 'Wheelchair Accessible'],
    parking: 'Free parking lot',
    featured: false
  },
  {
    id: '10',
    name: 'Pan Am Recreation Center',
    slug: 'pan-am-rec-center',
    address: '2100 East 3rd St',
    city: 'Austin',
    state: 'TX',
    zipCode: '78702',
    latitude: 30.2602,
    longitude: -97.7162,
    phone: '(512) 978-2425',
    website: 'https://www.austintexas.gov/department/pan-american-recreation-center',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Large city recreation center with 6 free outdoor pickleball courts with lighting. One of the most popular public pickleball destinations in Austin with excellent facilities.',
    amenities: ['Free Access', 'Lighting', 'Restrooms', 'Water Fountains', 'Fitness Center'],
    courtType: 'outdoor',
    numberOfCourts: 6,
    isFree: true,
    reservationRequired: false,
    reservationInfo: 'Free public courts - no reservation required',
    hours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '8:00 AM - 8:00 PM',
      sunday: '8:00 AM - 8:00 PM'
    },
    features: ['Free Courts', 'Multiple Courts', 'Night Lighting', 'Popular Destination'],
    accessibility: ['ADA Compliant', 'Wheelchair Accessible'],
    parking: 'Free parking lot',
    featured: true
  },
  {
    id: '11',
    name: 'Castle Court Austin',
    slug: 'castle-court-austin',
    address: '12501 Cedar St',
    city: 'Austin',
    state: 'TX',
    zipCode: '78732',
    latitude: 30.3667,
    longitude: -97.8934,
    phone: '(512) 638-4656',
    website: 'https://castlecourtaustin.com',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Premium private pickleball club offering top-tier facilities and amenities. Features tournament-quality courts, comfortable viewing areas, and flexible membership options for serious players.',
    amenities: ['Premium Courts', 'Viewing Areas', 'Pro Shop', 'Lounge', 'Equipment Available'],
    courtType: 'both',
    numberOfCourts: 8,
    isFree: false,
    pricing: {
      details: 'Membership required for access',
      rates: ['Various membership tiers available', 'Contact for pricing details']
    },
    reservationRequired: true,
    reservationInfo: 'Members-only club - membership required',
    hours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '7:00 AM - 9:00 PM',
      sunday: '7:00 AM - 9:00 PM'
    },
    features: ['Private Club', 'Tournament Quality', 'Easy Booking System', 'Premium Amenities'],
    parking: 'Private parking lot',
    featured: false
  },
  {
    id: '12',
    name: 'Other Racquet Social Club',
    slug: 'other-racquet-social-club',
    address: '2717 Manor Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78722',
    latitude: 30.2775,
    longitude: -97.7103,
    website: 'https://www.otherracquet.com',
    mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594736797933-d0f0a2b3a0b4?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Exclusive members-only pickleball social club featuring 3 tournament-regulation courts. Premium amenities include full-service cabanas, clubhouse, and private dining for an elevated experience.',
    amenities: ['Tournament Courts', 'Cabanas', 'Clubhouse', 'Private Dining', 'Full Bar', 'Concierge Service'],
    courtType: 'outdoor',
    numberOfCourts: 3,
    isFree: false,
    pricing: {
      details: 'Members-only club with founding memberships',
      rates: ['Founding memberships from $2,500', 'Contact for current membership options']
    },
    reservationRequired: true,
    reservationInfo: 'Members-only - reservation through member portal',
    hours: {
      monday: '7:00 AM - 11:00 PM',
      tuesday: '7:00 AM - 11:00 PM',
      wednesday: '7:00 AM - 11:00 PM',
      thursday: '7:00 AM - 11:00 PM',
      friday: '7:00 AM - 11:00 PM',
      saturday: '7:00 AM - 11:00 PM',
      sunday: '7:00 AM - 11:00 PM'
    },
    features: ['Exclusive Club', 'Tournament Regulation', 'Social Events', 'Premium Service'],
    parking: 'Valet parking available',
    featured: false
  }
];

export function getCourtBySlug(slug: string): Court | undefined {
  return courts.find(court => court.slug === slug);
}

export function getFeaturedCourts(): Court[] {
  return courts.filter(court => court.featured);
}

export function getFreeCourts(): Court[] {
  return courts.filter(court => court.isFree);
}

export function getPaidCourts(): Court[] {
  return courts.filter(court => !court.isFree);
}

