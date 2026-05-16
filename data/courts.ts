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
  customTitle?: string;
  customDescription?: string;
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
    latitude: 30.3800,
    longitude: -97.6850,
    phone: '(737) 242-5898',
    website: 'https://www.austinpickleranch.com',
    mainImage: '/images/courts/pickle-ranch-braker-main.png',
    images: [
      '/images/courts/pickle-ranch-braker-1.png',
      '/images/courts/pickle-ranch-braker-2.png',
      '/images/courts/pickle-ranch-braker-3.png'
    ],
    description: 'State-of-the-art pickleball facility featuring 16 indoor dedicated courts with climate control and 2 outdoor courts. Austin Pickle Ranch offers a premium playing experience with both indoor and outdoor lounge areas, making it perfect for year-round play. Open to both members and non-members with reservation or session payment options.',
    amenities: ['Locker Rooms', 'Pro Shop', 'Food & Beverage', 'Lounge Areas', 'Climate Controlled', 'Indoor Courts', 'Outdoor Courts'],
    courtType: 'both',
    numberOfCourts: 18,
    isFree: false,
    pricing: {
      details: 'Membership available, but non-members can play with reservation or session payment',
      rates: ['Membership options available', 'Session-based play for non-members', 'Contact for current rates and availability']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations can be made online or by phone. Non-members welcome with reservation or session payment',
    hours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '7:00 AM - 9:00 PM',
      sunday: '7:00 AM - 9:00 PM',
      notes: 'Hours may vary. Contact facility for most current hours and availability.'
    },
    features: ['Professional Courts', 'Lighting', 'Climate Control', 'Pro Shop', 'Food Service', 'Indoor & Outdoor Courts'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
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
    mainImage: 'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center'
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
    mainImage: '/images/courts/bouldin-1.jpg',
    images: [
      'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center'
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
    mainImage: '/images/courts/pitch-1.png',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      '/images/courts/The-Pitch-2.png'
    ],
    description: 'The Pitch is Austin\'s favorite sports and entertainment complex on Burnet Road — 3 outdoor pickleball courts surrounded by multiple restaurants, bars, and a coffee shop. Whether you\'re coming for a competitive match or just want to play while friends grab drinks, The Pitch makes pickleball a full evening out.',
    amenities: ['Restaurants', 'Bars', 'Coffee Shop', 'Multiple Sports Courts', 'Outdoor Seating'],
    customTitle: 'The Pitch Pickleball Austin — Courts, Bars & Restaurants on Burnet Rd | Pickleball ATX',
    customDescription: "Austin's best pickleball experience — 3 outdoor courts at The Pitch on Burnet Rd, surrounded by restaurants, bars, and a coffee shop. Book a court, check hours, and plan your visit.",
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
    address: '3519 B Ranch Road 620',
    city: 'Austin',
    state: 'TX',
    zipCode: '78734',
    latitude: 30.3989,
    longitude: -97.9889,
    phone: '(512) 266-8399',
    website: 'https://ltbatx.com/',
    mainImage: '/images/courts/Lake Travis Biergarten-1.png',
    images: [
      '/images/courts/Lake Travis Biergarten-2.png',
      '/images/courts/Lake Travis Biergarten-3.png'
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
    mainImage: '/images/courts/Little_Zilker-1.png',
    images: [
      'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center'
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
    mainImage: 'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center'
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
    mainImage: 'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Community recreation center with 4 indoor pickleball courts. Offers free open play pickleball sessions - sign a waiver on your first visit, then just sign in for subsequent visits. Various programs and open play times available.',
    amenities: ['Air Conditioning', 'Restrooms', 'Parking', 'Community Programs', 'Fitness Center'],
    courtType: 'indoor',
    numberOfCourts: 4,
    isFree: true,
    pricing: {
      details: 'Free for open play - waiver required on first visit',
      rates: ['Open Play: Free', 'Sign waiver on first visit, then sign in for subsequent visits']
    },
    reservationRequired: false,
    reservationInfo: 'Open play available - sign in required. Waiver required on first visit only.',
    hours: {
      monday: '6:00 AM - 9:00 PM',
      tuesday: '6:00 AM - 9:00 PM',
      wednesday: '6:00 AM - 9:00 PM',
      thursday: '6:00 AM - 9:00 PM',
      friday: '6:00 AM - 9:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '8:00 AM - 6:00 PM',
      notes: 'Contact center for current open play schedule. Waiver required on first visit only.'
    },
    features: ['Indoor Courts', 'Air Conditioning', 'Community Programs', 'Free Open Play'],
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
      'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center'
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
    name: 'Pickleball Kingdom - Pflugerville',
    slug: 'pickleball-kingdom-pflugerville',
    address: '1900 E Howard Lane, Buildings E & I',
    city: 'Pflugerville',
    state: 'TX',
    zipCode: '78660',
    latitude: 30.4500,
    longitude: -97.6200,
    phone: '(512) 555-0123',
    website: 'https://pickleballkingdom.com/pflugerville-tx',
    mainImage: '/images/courts/pickleball-kingdom-main.png',
    images: [
      '/images/courts/pickleball-kingdom-1.png',
      '/images/courts/pickleball-kingdom-2.png',
      '/images/courts/pickleball-kingdom-3.png'
    ],
    description: 'Major indoor pickleball center featuring 11 climate-controlled courts with professional surfaces. Offers membership tiers, public play, lessons, and tournaments in a welcoming community atmosphere.',
    amenities: ['Climate Control', 'Pro Shop', 'Event Space', 'Lessons', 'Tournaments', 'Equipment Rental'],
    courtType: 'indoor',
    numberOfCourts: 11,
    isFree: false,
    pricing: {
      details: 'Membership and public play options available',
      rates: ['Daily Pass: $15', 'Monthly Membership: $89', 'Annual Membership: $899']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations recommended, can be made online or by phone',
    hours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '7:00 AM - 9:00 PM',
      sunday: '7:00 AM - 9:00 PM'
    },
    features: ['Professional Courts', 'Climate Control', 'Pro Shop', 'Lessons', 'Tournaments'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: true
  },
  {
    id: '12',
    name: 'Pickleland - Pflugerville',
    slug: 'pickleland-pflugerville',
    address: '21427 Martin Lane',
    city: 'Pflugerville',
    state: 'TX',
    zipCode: '78660',
    latitude: 30.4500,
    longitude: -97.6200,
    phone: '(512) 555-0124',
    website: 'https://pickleland.com',
    mainImage: 'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Voted Best Pickleball Club in Austin, featuring 9 indoor courts with high ceilings and excellent lighting. Offers daily open play sessions, lessons, and events for all skill levels.',
    amenities: ['High Ceilings', 'Excellent Lighting', 'Open Play', 'Lessons', 'Events', 'Equipment Rental'],
    courtType: 'indoor',
    numberOfCourts: 9,
    isFree: false,
    pricing: {
      details: 'Membership and daily play options available',
      rates: ['Daily Pass: $12', 'Monthly Membership: $75', 'Annual Membership: $750']
    },
    reservationRequired: false,
    reservationInfo: 'Open play available, reservations recommended for private bookings',
    hours: {
      monday: '6:00 AM - 10:00 PM',
      tuesday: '6:00 AM - 10:00 PM',
      wednesday: '6:00 AM - 10:00 PM',
      thursday: '6:00 AM - 10:00 PM',
      friday: '6:00 AM - 10:00 PM',
      saturday: '7:00 AM - 9:00 PM',
      sunday: '7:00 AM - 9:00 PM'
    },
    features: ['Open Play', 'High Ceilings', 'Excellent Lighting', 'Lessons', 'Community Events'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '13',
    name: 'Pan American Neighborhood Park',
    slug: 'pan-american-park',
    address: '2100 E 3rd Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78702',
    latitude: 30.2644,
    longitude: -97.7206,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Neighborhood park featuring 6 outdoor pickleball courts with permanent nets. Perfect for casual play and community gatherings with easy access and no fees.',
    amenities: ['Restrooms', 'Parking', 'Playground', 'Walking Trails', 'Picnic Areas'],
    courtType: 'outdoor',
    numberOfCourts: 6,
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
    features: ['Free Play', 'Permanent Nets', 'Public Access', 'Family Friendly'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '14',
    name: 'Rosewood Neighborhood Park',
    slug: 'rosewood-park',
    address: '2300 Rosewood Avenue',
    city: 'Austin',
    state: 'TX',
    zipCode: '78702',
    latitude: 30.2644,
    longitude: -97.7206,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Community park with 4 outdoor pickleball courts - 2 with permanent nets and 2 requiring players to bring their own nets. Great for neighborhood play.',
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
    features: ['Free Play', 'Mixed Net Types', 'Public Access', 'Community Park'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '15',
    name: 'Dick Nichols District Park',
    slug: 'dick-nichols-park',
    address: '8011 Beckett Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78749',
    latitude: 30.1800,
    longitude: -97.8200,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Large 152-acre district park featuring 4 outdoor pickleball courts. Players need to bring their own nets, but the courts are well-maintained and free to use.',
    amenities: ['Restrooms', 'Parking', 'Walking Trails', 'Picnic Areas', 'Sports Fields'],
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
    features: ['Free Play', 'Large Park', 'Public Access', 'Bring Own Nets'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '16',
    name: 'Beverly S. Sheffield Northwest District Park',
    slug: 'beverly-sheffield-park',
    address: '7000 Ardath Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757',
    latitude: 30.3500,
    longitude: -97.7500,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Northwest Austin district park with 4 outdoor pickleball courts on hard surface. Players need to bring their own nets, but the courts are free and well-maintained.',
    amenities: ['Restrooms', 'Parking', 'Walking Trails', 'Picnic Areas', 'Sports Fields'],
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
    features: ['Free Play', 'Hard Surface', 'Public Access', 'Bring Own Nets'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '17',
    name: 'Brentwood Neighborhood Park',
    slug: 'brentwood-park',
    address: '6710 Arroyo Seco',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757',
    latitude: 30.3500,
    longitude: -97.7500,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Neighborhood park featuring tennis and pickleball courts. Players need to bring their own nets, but the courts are free and perfect for casual play.',
    amenities: ['Restrooms', 'Parking', 'Playground', 'Walking Trails', 'Tennis Courts'],
    courtType: 'outdoor',
    numberOfCourts: 2,
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
    features: ['Free Play', 'Multi-Sport', 'Public Access', 'Bring Own Nets'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '18',
    name: 'Austin High Tennis Center',
    slug: 'austin-high-tennis',
    address: '1717 W Cesar Chavez Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78703',
    latitude: 30.2700,
    longitude: -97.7600,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Public tennis center with 3 outdoor pickleball courts featuring permanent nets and lines. Available on a first-come, first-served basis with no fees.',
    amenities: ['Restrooms', 'Parking', 'Tennis Courts', 'Lighting'],
    courtType: 'outdoor',
    numberOfCourts: 3,
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
    features: ['Free Play', 'Permanent Nets', 'Public Access', 'Lighting'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '19',
    name: 'Gus Garcia Recreation Center',
    slug: 'gus-garcia-rec',
    address: '1201 E Rundberg Lane',
    city: 'Austin',
    state: 'TX',
    zipCode: '78753',
    latitude: 30.3200,
    longitude: -97.6800,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'North Austin recreation center with 4 indoor pickleball courts. Free access with Austin Parks & Recreation membership, offering programs and open play.',
    amenities: ['Air Conditioning', 'Restrooms', 'Parking', 'Fitness Center', 'Programs Available'],
    courtType: 'indoor',
    numberOfCourts: 4,
    isFree: true,
    pricing: {
      details: 'Free with Austin Parks & Rec membership',
      rates: ['Membership Required', 'No additional court fees']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations recommended for court time',
    hours: {
      monday: '6:00 AM - 9:00 PM',
      tuesday: '6:00 AM - 9:00 PM',
      wednesday: '6:00 AM - 9:00 PM',
      thursday: '6:00 AM - 9:00 PM',
      friday: '6:00 AM - 9:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '8:00 AM - 6:00 PM'
    },
    features: ['Indoor Courts', 'Air Conditioning', 'Programs', 'Free with Membership'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '20',
    name: 'Northwest Recreation Center',
    slug: 'northwest-rec',
    address: '2913 Northland Drive',
    city: 'Austin',
    state: 'TX',
    zipCode: '78757',
    latitude: 30.3500,
    longitude: -97.7500,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Northwest Austin recreation center with 3 indoor pickleball courts. Free access with Austin Parks & Recreation membership, featuring multi-purpose court with pickleball striping.',
    amenities: ['Air Conditioning', 'Restrooms', 'Parking', 'Fitness Center', 'Multi-Purpose Court'],
    courtType: 'indoor',
    numberOfCourts: 3,
    isFree: true,
    pricing: {
      details: 'Free with Austin Parks & Rec membership',
      rates: ['Membership Required', 'No additional court fees']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations recommended for court time',
    hours: {
      monday: '6:00 AM - 9:00 PM',
      tuesday: '6:00 AM - 9:00 PM',
      wednesday: '6:00 AM - 9:00 PM',
      thursday: '6:00 AM - 9:00 PM',
      friday: '6:00 AM - 9:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: '8:00 AM - 6:00 PM'
    },
    features: ['Indoor Courts', 'Air Conditioning', 'Multi-Purpose', 'Free with Membership'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '21',
    name: 'Mary Moore Searight Park',
    slug: 'mary-moore-searight',
    address: '907 W Slaughter Lane',
    city: 'Austin',
    state: 'TX',
    zipCode: '78748',
    latitude: 30.1800,
    longitude: -97.8200,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'South Austin park featuring 3 outdoor pickleball courts. Players need to bring their own nets, but the courts are free and perfect for community play.',
    amenities: ['Restrooms', 'Parking', 'Walking Trails', 'Picnic Areas', 'Sports Fields'],
    courtType: 'outdoor',
    numberOfCourts: 3,
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
    features: ['Free Play', 'Public Access', 'Community Park', 'Bring Own Nets'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '22',
    name: 'RacFit',
    slug: 'racfit-buda',
    address: '1390 Robert S Light Blvd S',
    city: 'Buda',
    state: 'TX',
    zipCode: '78610',
    latitude: 30.0817,
    longitude: -97.8400,
    website: 'https://www.goracfit.com',
    mainImage: '/images/courts/racfit-main.png',
    images: [
      '/images/courts/racfit-1.png',
      '/images/courts/racfit-2.png'
    ],
    description: 'New tennis, pickleball, fitness, and social club opening December 2025 in Buda, Texas. RacFit will feature 8 regulation pickleball courts with 4 covered by a steel shade structure, making it perfect for year-round play in the South Austin area. This premier facility will offer comprehensive programming for all ages and skill levels. Founders Membership pre-sale is currently active with over 67% of 300 available memberships already sold.',
    amenities: ['Steel Shade Structure', 'Full Bar (Courtside Cantina)', 'Indoor/Outdoor Seating', 'Locker Rooms', 'Fitness Rooms', 'Digital Sports Room', 'On-site ActiveCare', 'Walking Trail', 'Community Social Spaces', '22,000 sq ft Indoor Space'],
    courtType: 'outdoor',
    numberOfCourts: 8,
    isFree: false,
    pricing: {
      details: 'Membership required - Founders memberships available with special benefits',
      rates: [
        'All Inclusive - Couple - Baseline: $179/month (after $1 pre-sale payment, $0 initiation fee for Founders)',
        'ActiveCare: $49/month (after $1 pre-sale payment)',
        'Additional Family Member: $49/month (after $1 pre-sale payment)',
        'Founders Membership Benefits: $0 initiation fee, locked-in low rates, engraved brick, swag package, 4 tokens to Courtside Cantina',
        'Founders Memberships: Limited to 300 (over 200 sold - 67%+ sold out)'
      ]
    },
    reservationRequired: true,
    reservationInfo: 'Opening December 2025 - Founders Membership pre-sale active. Join priority access list for membership information and to reserve your spot.',
    hours: {
      monday: 'Opening December 2025',
      tuesday: 'Opening December 2025',
      wednesday: 'Opening December 2025',
      thursday: 'Opening December 2025',
      friday: 'Opening December 2025',
      saturday: 'Opening December 2025',
      sunday: 'Opening December 2025',
      notes: 'Facility opening December 2025. Founders Membership pre-sale is active with over 200 of 300 memberships already sold. Join the priority access list on their website for membership information and grand opening details.'
    },
    features: ['New Facility', 'Covered Courts', 'Full Bar', 'Fitness Center', 'Social Club', 'Programming for All Ages', 'ActiveCare On-site'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Parking available',
    featured: true
  },
  {
    id: '27',
    name: 'Highway 71 Brewing',
    slug: 'highway-71-brewing',
    address: '22111 State Highway 71',
    city: 'Spicewood',
    state: 'TX',
    zipCode: '78669',
    latitude: 30.5000,
    longitude: -98.1000,
    phone: '(512) 954-2611',
    website: 'https://www.hwy71brewing.com',
    mainImage: 'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Highway 71 Brewing is a family-owned Hill Country brewery offering craft beer, pizza, and a temperature-controlled indoor pickleball court. A unique combination of craft beer and pickleball in a comfortable, welcoming environment. Perfect for year-round play regardless of weather conditions.',
    amenities: ['Brewery', 'Pizza', 'Indoor Court', 'Temperature Controlled', 'Golf Simulators', 'Live Music', 'Outdoor Seating'],
    courtType: 'indoor',
    numberOfCourts: 1,
    isFree: false,
    pricing: {
      details: 'Court rental required',
      rates: ['Contact brewery for current rates']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations recommended, call ahead for availability',
    hours: {
      monday: 'Hours vary',
      tuesday: 'Hours vary',
      wednesday: 'Hours vary',
      thursday: 'Hours vary',
      friday: 'Hours vary',
      saturday: 'Hours vary',
      sunday: 'Hours vary',
      notes: 'Contact brewery for current hours and court availability. Live music on Friday nights.'
    },
    features: ['Brewery', 'Food & Drinks', 'Indoor Court', 'Temperature Controlled', 'Greater Austin Area', 'Scenic Location', 'Golf Simulators'],
    accessibility: ['Wheelchair Accessible'],
    parking: 'Parking available',
    featured: false
  },
  {
    id: '28',
    name: 'Anderson Mill Neighborhood Association (AMNA) Pickleball Courts',
    slug: 'anderson-mill-amna',
    address: '10701 School House Lane',
    city: 'Austin',
    state: 'TX',
    zipCode: '78750',
    latitude: 30.4500,
    longitude: -97.8000,
    website: 'https://andersonmillna.org/pickleball/',
    mainImage: 'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Anderson Mill Neighborhood Association pickleball courts offer weekly open play sessions for AMNA members and Anderson Mill Limited District (AMLD) keyholders. A community-focused venue encouraging neighbors to connect through pickleball with rotating play formats.',
    amenities: ['Restrooms', 'Parking', 'Community Programs', 'Open Play'],
    courtType: 'outdoor',
    numberOfCourts: 4,
    isFree: false,
    pricing: {
      details: 'Membership required',
      rates: ['Household memberships: $20 per year', 'Open to AMNA members and AMLD keyholders']
    },
    reservationRequired: false,
    reservationInfo: 'Open play sessions - no reservations needed',
    hours: {
      monday: 'Closed',
      tuesday: 'Closed',
      wednesday: '9:00 AM - 12:00 PM',
      thursday: '7:00 PM - 10:00 PM',
      friday: 'Closed',
      saturday: 'Closed',
      sunday: 'Closed',
      notes: 'Open play sessions: Wednesday mornings 9am-12pm and Thursday evenings 7pm-10pm. Membership required.'
    },
    features: ['Community Focused', 'Open Play', 'Rotating Formats', 'Membership Based'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '29',
    name: 'Anderson Mill West Park',
    slug: 'anderson-mill-west-park',
    address: '2900 El Salido Parkway',
    city: 'Cedar Park',
    state: 'TX',
    zipCode: '78613',
    latitude: 30.5000,
    longitude: -97.8500,
    website: 'https://wtcmud1.org/anderson-mill-west-park-and-pavilion/',
    mainImage: 'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Anderson Mill West Park features lighted tennis courts with pickleball striping. A comprehensive community park offering a variety of recreational facilities, including courts suitable for both tennis and pickleball. Access requires a yearly membership with the District.',
    amenities: ['Lighted Courts', 'Large Covered Pavilion', 'Playground', 'Restrooms', 'Basketball Court', 'Gazebo', 'Walking Trail', 'Picnic Tables', 'Grills'],
    courtType: 'outdoor',
    numberOfCourts: 4,
    isFree: false,
    pricing: {
      details: 'Membership required',
      rates: ['Yearly membership with District required', 'Contact for membership details']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations recommended, membership required for access',
    hours: {
      monday: 'Dawn to Dusk',
      tuesday: 'Dawn to Dusk',
      wednesday: 'Dawn to Dusk',
      thursday: 'Dawn to Dusk',
      friday: 'Dawn to Dusk',
      saturday: 'Dawn to Dusk',
      sunday: 'Dawn to Dusk',
      notes: 'Lighted courts available. Membership with District required for court access.'
    },
    features: ['Lighted Courts', 'Multi-Purpose', 'Community Park', 'Family Friendly', 'Membership Based'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '30',
    name: 'Lakeline Oaks Park',
    slug: 'lakeline-oaks-park',
    address: '1000 Old Mill Road',
    city: 'Cedar Park',
    state: 'TX',
    zipCode: '78613',
    latitude: 30.5000,
    longitude: -97.8500,
    website: 'https://wtcmud1.org/tennis/',
    mainImage: 'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Lakeline Oaks Park provides tennis courts striped for six pickleball courts. Pickleball nets are available on-site and included with the membership fee. Access requires a yearly membership with the District.',
    amenities: ['Pickleball Nets', 'Online Reservation System', 'Restrooms', 'Parking'],
    courtType: 'outdoor',
    numberOfCourts: 6,
    isFree: false,
    pricing: {
      details: 'Membership required',
      rates: ['Yearly membership with District required', 'Pickleball nets included with membership']
    },
    reservationRequired: true,
    reservationInfo: 'Online reservation system available, membership required',
    hours: {
      monday: 'Dawn to Dusk',
      tuesday: 'Dawn to Dusk',
      wednesday: 'Dawn to Dusk',
      thursday: 'Dawn to Dusk',
      friday: 'Dawn to Dusk',
      saturday: 'Dawn to Dusk',
      sunday: 'Dawn to Dusk',
      notes: 'Access card valid for one year from date of purchase. Online reservations available.'
    },
    features: ['Multiple Courts', 'Pickleball Nets Included', 'Online Reservations', 'Membership Based'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    featured: false
  },
  {
    id: '31',
    name: 'Pickle Hub',
    slug: 'pickle-hub-menchaca',
    address: '10630 Menchaca Road, Building B',
    city: 'Austin',
    state: 'TX',
    zipCode: '78748',
    latitude: 30.1642,
    longitude: -97.8312,
    phone: '(210) 850-6509',
    website: 'https://www.picklehubatx.com',
    mainImage: '/images/courts/Pickle_Hub-1.png',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Pickle Hub features 2 dedicated outdoor pickleball courts in South Austin. This vibrant venue combines pickleball with dining and entertainment, featuring Drifters Social Coffee & Cocktail, Pickle Pub sports bar, food trucks, live music, and a dog park. Equipment available for rent or bring your own. Family-friendly environment until 9pm on weekdays and 5pm on weekends.',
    amenities: ['Outdoor Courts', 'Coffee & Cocktails', 'Sports Bar', 'Food Trucks', 'Live Music', 'Dog Park', 'Equipment Rental', 'Fire Pits', 'Stage'],
    courtType: 'outdoor',
    numberOfCourts: 2,
    isFree: false,
    pricing: {
      details: 'Court rental required',
      rates: ['Contact facility for current rates', 'Equipment rental available']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations recommended, contact facility for availability',
    hours: {
      monday: '3:00 PM - 12:00 AM',
      tuesday: '3:00 PM - 12:00 AM',
      wednesday: '3:00 PM - 12:00 AM',
      thursday: '3:00 PM - 2:00 AM',
      friday: '3:00 PM - 2:00 AM',
      saturday: '12:00 PM - 12:00 AM',
      sunday: 'Open 24 Hours',
      notes: 'Family-friendly until 9pm weekdays and 5pm weekends. Live music Thursday through Sunday.'
    },
    features: ['Outdoor Courts', 'Food & Drinks', 'Entertainment', 'Live Music', 'Dog Friendly', 'Family Friendly', 'Equipment Rental'],
    accessibility: ['Wheelchair Accessible'],
    parking: 'Parking available',
    featured: false
  },
  {
    id: '32',
    name: 'Bouldin Acres - Menchaca',
    slug: 'bouldin-acres-menchaca',
    address: 'Menchaca Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    latitude: 30.2400,
    longitude: -97.7800,
    phone: '(512) 382-1849',
    website: 'https://www.bouldinacres.com',
    mainImage: 'https://images.pexels.com/photos/29821186/pexels-photo-29821186.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/11513316/pexels-photo-11513316.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/29820786/pexels-photo-29820786.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'New Bouldin Acres location on Menchaca Road featuring outdoor pickleball courts. This is the second location for Bouldin Acres, combining pickleball with dining and entertainment. More information coming soon.',
    amenities: ['Food & Drinks', 'Outdoor Courts', 'Entertainment'],
    courtType: 'outdoor',
    numberOfCourts: 2,
    isFree: false,
    pricing: {
      details: 'More information coming soon',
      rates: ['Contact facility for current rates']
    },
    reservationRequired: true,
    reservationInfo: 'More information coming soon',
    hours: {
      monday: 'More information coming soon',
      tuesday: 'More information coming soon',
      wednesday: 'More information coming soon',
      thursday: 'More information coming soon',
      friday: 'More information coming soon',
      saturday: 'More information coming soon',
      sunday: 'More information coming soon',
      notes: 'More information coming soon. Please contact the facility directly for current hours, pricing, and reservation requirements.'
    },
    features: ['New Location', 'Food & Drinks', 'Entertainment', 'Outdoor Courts'],
    accessibility: ['Wheelchair Accessible'],
    parking: 'Parking available',
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