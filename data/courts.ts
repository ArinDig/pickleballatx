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
  longDescription?: string[];
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
    mainImage: '/images/courts/pickle-ranch-braker-main.jpg',
    images: [
      '/images/courts/pickle-ranch-braker-1.jpg',
      '/images/courts/pickle-ranch-braker-2.jpg',
      '/images/courts/pickle-ranch-braker-3.jpg'
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
    featured: true,
    customTitle: 'Austin Pickle Ranch Braker Lane | 16 Indoor Pickleball Courts, Bar & Pro Shop',
    customDescription: "Austin's largest indoor pickleball facility — 16 climate-controlled courts + 2 outdoor on Braker Lane. Full bar, pro shop, locker rooms. Members and non-members welcome. Book online or call (737) 242-5898.",
    longDescription: [
      'Austin Pickle Ranch on Braker Lane is the closest thing Austin has to a full-service pickleball destination. The facility runs 16 dedicated indoor courts with climate control — a big deal in Austin summers — plus 2 outdoor courts when the weather cooperates. All courts use professional-grade surfaces and permanent nets, and the lighting is dialed in for evening play. Whether you\'re warming up at 6am or wrapping up a match at 9pm, the facility handles it.',
      'The full bar and food service set Braker Lane apart from every other pickleball option in Austin. You can grab a drink between matches, watch games from the lounge areas, or turn a weeknight session into a longer evening out. Locker rooms, a pro shop, and in-house instruction round out the amenities — this is a place that takes the game seriously without making it feel intimidating to newer players.',
      'Non-members are welcome with a reservation or session payment, so you don\'t need a membership commitment to play. Reservations can be made online at austinpickleranch.com or by phone at (737) 242-5898. Located at 11000 Middle Fiskville Road (Building B) near North Lamar and Braker Lane, with free parking on-site. If you\'re willing to pay to play, this is the best indoor pickleball experience in Austin.'
    ]
  },
  {
    id: '3',
    name: 'Austin Tennis and Pickleball Center',
    slug: 'austin-tennis-pickleball',
    address: '7800 Johnny Morris Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78724',
    latitude: 30.31145,
    longitude: -97.63869,
    phone: '(512) 928-8119',
    website: 'https://www.playatctennis.com/pages/index.cfm?siteid=21588',
    mainImage: '/images/courts/austin-tennis-pickleball-main.jpg',
    images: [
      '/images/courts/austin-tennis-pickleball-1.jpg',
      '/images/courts/austin-tennis-pickleball-2.jpg',
      '/images/courts/austin-tennis-pickleball-3.jpg'
    ],
    description: 'City of Austin tennis and pickleball center at Walnut Creek Sports Park with 8 lighted outdoor pickleball courts. Reservations are required.',
    amenities: ['Restrooms', 'Parking', 'Lighting', 'Pro Shop', 'Lessons Available'],
    courtType: 'outdoor',
    numberOfCourts: 8,
    isFree: false,
    pricing: {
      details: 'Court fees apply; reservations required',
      rates: ['See the reservation site for current rates']
    },
    reservationRequired: true,
    reservationInfo: 'Reservations required through the City\'s booking site (playatctennis.com)',
    hours: {
      monday: '8:30 AM - 10:00 PM',
      tuesday: '8:30 AM - 10:00 PM',
      wednesday: '8:30 AM - 10:00 PM',
      thursday: '8:30 AM - 10:00 PM',
      friday: '8:30 AM - 10:00 PM',
      saturday: '8:30 AM - 9:00 PM',
      sunday: '8:30 AM - 9:00 PM',
      notes: 'Lighted during park hours.'
    },
    features: ['Professional Courts', 'Lighting', 'Pro Shop', 'Lessons'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'The Austin Tennis and Pickleball Center is the City of Austin\'s reservable court facility at Walnut Creek Sports Park, 7800 Johnny Morris Road in Northeast Austin. The city lists 8 outdoor pickleball courts here, lighted during park hours. Unlike the neighborhood park courts, you can\'t just show up and play: reservations are required.',
      'The courts draw a range of skill levels, and the reservation system makes it a good fit for a group that wants a guaranteed court at a set time rather than waiting in line at a busy free park.',
      'Book through the city\'s reservation site (playatctennis.com), which also shows current court fees. Hours are 8:30 a.m. to 10 p.m. on weekdays and 8:30 a.m. to 9 p.m. on weekends.'
    ],
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
    images: [],
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
    longDescription: [
      'Bouldin Acres on South Lamar is Austin\'s most social pickleball venue — 2 outdoor courts embedded in a full entertainment complex with food trucks, bars, live music, a dog park, and playgrounds. It\'s explicitly not a serious training facility, and that\'s the whole point. The atmosphere is casual, loud, and very Austin, making it ideal for groups where the non-players are just as important as the players.',
      'Court reservations are required and book up quickly on weekends, so plan ahead if you want a specific time slot. The courts are free to reserve but operated within the Bouldin Acres venue, which means you\'re expected to eat and drink while you\'re there. Given the options — craft cocktails, local food trucks, and usually live music on weekends — that\'s not a hardship.',
      'Dog-friendly, family-friendly, and party-friendly, Bouldin Acres draws the South Lamar social crowd rather than the competitive pickleball circuit. If you have friends who\'ve never played before, this is a great introduction — low pressure, plenty of entertainment options if they get bored, and a vibe that makes the sport feel accessible rather than intimidating.'
    ],
    featured: false
  },
  {
    id: '5',
    name: 'PopStroke Austin (formerly The Pitch)',
    slug: 'popstroke-austin',
    address: '13000 Harris Ridge Blvd',
    city: 'Austin',
    state: 'TX',
    zipCode: '78753',
    latitude: 30.4194,
    longitude: -97.6897,
    phone: '(737) 370-9280',
    website: 'https://popstroke.com/venues/austin/',
    mainImage: '/images/courts/pitch-1.jpg',
    images: [
      '/images/courts/The-Pitch-2.jpg'
    ],
    description: 'Formerly known as The Pitch, this North Austin entertainment complex was taken over by PopStroke (the Tiger Woods-backed mini golf brand) in September 2025 — and the 3 outdoor pickleball courts are still open and bookable. The venue now centers on two 18-hole mini golf courses, sand volleyball, an ice cream parlor, and a full-service restaurant, with pickleball as one of several ways to spend an evening there.',
    amenities: ['Restaurant', 'Bar', 'Mini Golf', 'Sand Volleyball', 'Ice Cream Parlor', 'Multiple Sports Courts', 'Outdoor Seating'],
    customTitle: 'The Pitch Pickleball Austin (Now PopStroke) — Courts, Mini Golf & More | Pickleball ATX',
    customDescription: "Still playing pickleball at The Pitch on Burnet Rd? It's now PopStroke — same 3 outdoor courts, new ownership, new amenities (mini golf, sand volleyball, ice cream). Updated hours, phone, and booking info here.",
    courtType: 'outdoor',
    numberOfCourts: 3,
    isFree: false,
    pricing: {
      details: 'Court rental required',
      rates: ['Court Rental: $25/hour', 'Group Packages Available']
    },
    reservationRequired: true,
    reservationInfo: 'Book pickleball courts online via the PopStroke at The Pitch CourtReserve portal, or call ahead. Reservations recommended, especially during peak hours.',
    hours: {
      monday: '9:00 AM - 12:00 AM',
      tuesday: '9:00 AM - 12:00 AM',
      wednesday: '9:00 AM - 12:00 AM',
      thursday: '9:00 AM - 12:00 AM',
      friday: '9:00 AM - 12:00 AM',
      saturday: '9:00 AM - 12:00 AM',
      sunday: '9:00 AM - 12:00 AM',
      notes: 'Hours updated as of July 2026 under PopStroke ownership — same daily hours every day of the week.'
    },
    features: ['Food & Drinks', 'Multiple Sports', 'Entertainment', 'Outdoor Seating', 'Mini Golf'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'If you knew this venue as The Pitch, here\'s the update: PopStroke — the mini golf and entertainment brand backed by Tiger Woods and TaylorMade — officially took over the property in September 2025. The good news for pickleball players is that nothing changed on that front: the same 3 outdoor courts are still here, still in good condition, and still bookable. What changed is everything around them. The venue rebranded from a bars-and-restaurants sports complex into a PopStroke location built around two 18-hole mini golf courses, with sand volleyball, a full-service restaurant, and an ice cream parlor added to the mix.',
      'Court rental is still $25/hour. The easiest way to book is through the PopStroke at The Pitch reservation portal (linked from their site), or you can call ahead. Reservations are recommended, especially in the evenings when the mini golf and dining crowd fills up the property — this is a busier, more heavily trafficked venue than it was before the takeover. If you\'re used to the old Pitch hours, note that PopStroke runs a single consistent schedule now: 9am to midnight, every day of the week, rather than the shorter weekday hours the old venue kept.',
      'The pickleball crowd here still skews social over competitive — think beginner groups, first dates, and office outings rather than serious drilling sessions. That hasn\'t changed with the ownership switch. What has changed is that there\'s a lot more to do before or after your match: a round of mini golf, sand volleyball, ice cream, or a full sit-down meal are all part of the same visit now. For groups where only some people play pickleball, this arguably makes the venue an even better fit than before.',
      'The complex is located at 13000 Harris Ridge Blvd in North Austin (the same general area long associated with the Burnet Road/183 corridor), with free on-site parking. Hours are 9am–midnight daily. If you\'re coming from central or south Austin, budget 20–25 minutes on 183 North or Mopac depending on traffic. Search for "PopStroke Austin" if you\'re looking it up directly — the venue\'s own marketing has shifted to that name, even though locals (and this page) still refer to it as The Pitch.',
    ],
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
    mainImage: '/images/courts/Lake Travis Biergarten-1.jpg',
    images: [
      '/images/courts/Lake Travis Biergarten-2.jpg',
      '/images/courts/Lake Travis Biergarten-3.jpg'
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
    longDescription: [
      'Lake Travis Biergarten combines two of Austin\'s favorite pastimes — outdoor recreation and cold beer — with 2 outdoor pickleball courts overlooking Lake Travis off Ranch Road 620. It\'s not your typical pickleball destination, but that\'s exactly the point. The courts are set in a scenic Hill Country lakeside setting that makes the whole experience feel like a day trip rather than just a game.',
      'Court rental is required, and reservations are recommended, especially on weekends when the full venue — beer garden, live music, and lake views — draws a crowd. This isn\'t the spot for serious training or competitive play. It\'s ideal for a mixed group where some people want to play and others are happy watching with a drink in hand.',
      'Food and drinks are available on-site, the bar and restaurant make it easy to extend the outing well beyond your court time, and the lake views add a backdrop you won\'t find anywhere else in the Austin pickleball scene. Equipment rental may be available — confirm when booking. Located about 30 minutes from central Austin off 620, it\'s a worthwhile drive for a social outing.'
    ],
    featured: false
  },
  {
    id: '7',
    name: 'Little Zilker Neighborhood Park',
    slug: 'little-zilker',
    address: '2016 Bluebonnet Lane',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    latitude: 30.2515,
    longitude: -97.77429,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/Little_Zilker-1.jpg',
    images: [],
    description: 'Small neighborhood park in the Zilker neighborhood with 1 lighted multi-purpose court striped for 4 pickleball courts and a multi-sport net system. Free, first-come, first-served, 7 a.m. to 10 p.m.',
    amenities: ['Court Lights', 'Multi-Sport Net System'],
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
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 10:00 PM',
      notes: 'Lighted during park hours.'
    },
    features: ['Free Play', 'Public Access', 'Lighting', 'Multi-Sport Net System'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Little Zilker Neighborhood Park is a small city park at 2016 Bluebonnet Lane in the Zilker neighborhood. It is a separate park from Zilker Metropolitan Park, which trips up first-time visitors. The city lists 1 multi-purpose outdoor court here, striped for 4 pickleball courts, with a multi-sport net system and lights during park hours.',
      'Open play runs 7 days a week from 7 a.m. to 10 p.m., free and first-come, first-served. City court rules apply: if people are waiting, keep your game to 60 minutes and don\'t tie up more than one court.',
      'The courts draw players from Zilker, Barton Hills, Bouldin Creek and South Lamar. Expect a wait on spring and fall weekend mornings; weekday afternoons are usually easier. The lights make it one of the few central options for after-work games in winter.'
    ],
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
    latitude: 30.24094,
    longitude: -97.76858,
    phone: '(512) 978-2440',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/south-austin-rec-main.jpg',
    images: [
      '/images/courts/south-austin-rec-1.jpg',
      '/images/courts/south-austin-rec-2.jpg'
    ],
    description: 'South Austin rec center and neighborhood park on Cumberland Road. Outdoors, 2 dedicated lighted pickleball courts, free 8 a.m. to 10 p.m. Indoors, 1 multi-purpose court striped for 4 with scheduled open play.',
    amenities: ['Court Lights (outdoor)', 'Air Conditioning (indoor)', 'Dedicated Outdoor Courts', 'Indoor Open Play'],
    courtType: 'both',
    numberOfCourts: 6,
    isFree: true,
    pricing: {
      details: 'Outdoor park courts are free; call the center about any fee for indoor open play',
      rates: ['Indoor open play: call (512) 978-2440', 'Outdoor courts: free']
    },
    reservationRequired: false,
    reservationInfo: 'Outdoor courts are first-come, first-served. Indoor play is during scheduled open play times.',
    hours: {
      monday: '8:00 AM - 10:00 PM',
      tuesday: '8:00 AM - 10:00 PM',
      wednesday: '8:00 AM - 10:00 PM',
      thursday: '8:00 AM - 10:00 PM',
      friday: '8:00 AM - 10:00 PM',
      saturday: '8:00 AM - 10:00 PM',
      sunday: '8:00 AM - 10:00 PM',
      notes: 'Hours shown are for the 2 outdoor park courts. Indoor open play: Tue 7-9 PM (all ages); Varsity Generation Tue & Fri 11 AM-2 PM.'
    },
    features: ['Indoor Courts', 'Outdoor Courts', 'Lighting', 'Scheduled Open Play'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'South Austin Recreation Center and South Austin Neighborhood Park share 1100 Cumberland Road, and the city lists pickleball both inside and out.',
      'Outdoors, the neighborhood park has 2 dedicated pickleball courts, lighted during park hours and open 7 days a week from 8 a.m. to 10 p.m. They are free and first-come, first-served.',
      'Indoors, the rec center has 1 multi-purpose gym court striped for 4 pickleball courts. All-ages open play is Tuesday from 7 to 9 p.m., and Varsity Generation (older adult) open play is Tuesday and Friday from 11 a.m. to 2 p.m. Call the center at (512) 978-2440 to confirm the schedule and any drop-in fee. For players in 78704, the combination of lit outdoor courts and an indoor session makes this one of the most useful city locations south of the river.'
    ],
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
    latitude: 30.18572,
    longitude: -97.80155,
    phone: '(512) 974-6090',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/dittmar-rec-main.jpg',
    images: [
      '/images/courts/dittmar-rec-1.jpg',
      '/images/courts/dittmar-rec-2.jpg'
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
      tuesday: '12:00 PM - 3:00 PM',
      thursday: '12:00 PM - 3:00 PM',
      saturday: '10:00 AM - 2:00 PM',
      notes: 'Pickleball open play hours shown (City of Austin). Waiver required on first visit only.'
    },
    features: ['Indoor Courts', 'Air Conditioning', 'Community Programs', 'Free Open Play'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Dittmar Recreation Center is one of the City of Austin\'s best-kept secrets for free indoor pickleball. Located on West Dittmar Road in South Austin, the center has 4 indoor courts available during open play sessions at no cost beyond a simple waiver — sign once on your first visit, then just check in each time after that. No membership required, no day pass, no court fee.',
      'The courts are multi-purpose gym space, which means you\'ll be playing on a smooth floor with pickleball lines marked out — functional and air-conditioned, which is what matters when it\'s 100 degrees outside. The city lists open play on Tuesday and Thursday from noon to 3 p.m. and Saturday from 10 a.m. to 2 p.m. Schedules change by season, so call (512) 974-6090 before making the trip.',
      'Parking is free on-site. The facility also has a fitness center and community program offerings that vary throughout the year. For South Austin players who don\'t want to pay for indoor court access, Dittmar is one of the more accessible options — the waiver-not-membership model removes the friction of signing up for a full city rec membership just to try indoor play.'
    ],
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
    mainImage: '/images/courts/pickleball-kingdom-main.jpg',
    images: [
      '/images/courts/pickleball-kingdom-1.jpg',
      '/images/courts/pickleball-kingdom-2.jpg',
      '/images/courts/pickleball-kingdom-3.jpg'
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
    longDescription: [
      'Pickleball Kingdom is a national indoor pickleball franchise that brought 11 climate-controlled courts to Pflugerville, making it the largest indoor court count in the Austin metro area. The courts have professional-grade surfaces, the kind of consistent bounce and slide you\'d expect at a dedicated facility rather than a converted gym space. Climate control is real — courts stay comfortable even when Austin is in the middle of a heat wave.',
      'The facility offers a tiered membership structure as well as public play sessions, so you don\'t have to commit to a membership to try it out. Organized leagues, tournaments, and clinics run throughout the year, giving both casual and competitive players structured ways to engage beyond just showing up and rallying. A pro shop and equipment rental round out the experience.',
      'With 11 courts, wait times during open play are generally manageable even on busy evenings. Reservations are required for guaranteed court time. Located off Howard Lane in Pflugerville, it\'s convenient for players in the northeast Austin suburbs and accessible from both 130 and 183. If you\'re serious about the game and want a premium facility experience, Pickleball Kingdom is the metro\'s most complete offering.'
    ],
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
    phone: '(737) 265-7002',
    website: 'https://pickleland.com',
    mainImage: '/images/courts/Pickleland_Courts_DSC6142.jpg',
    images: [
      '/images/courts/Pickleland_Courts_DSC6088.jpg',
      '/images/courts/Pickleland_DSC4911.jpg',
      '/images/courts/Pickleland_DSC4921.jpg',
      '/images/courts/Pickleland_DSC4943.jpg',
    ],
    description: 'Voted Best Pickleball Club in Austin, featuring 9 indoor courts with high ceilings and excellent lighting. Offers daily open play sessions, lessons, and events for all skill levels.',
    amenities: ['High Ceilings', 'Excellent Lighting', 'Open Play', 'Lessons', 'Events', 'Equipment Rental'],
    courtType: 'indoor',
    numberOfCourts: 9,
    isFree: false,
    pricing: {
      details: 'Membership and daily play options available',
      rates: ['Daily Pass: $5-20', 'Monthly Membership: $59-119', 'Annual Membership: $649-1309']
    },
    reservationRequired: false,
    reservationInfo: 'Open play available, reservations recommended for private bookings',
    hours: {
      monday: '8:00 AM - 10:00 PM',
      tuesday: '8:00 AM - 10:00 PM',
      wednesday: '8:00 AM - 10:00 PM',
      thursday: '8:00 AM - 10:00 PM',
      friday: '8:00 AM - 10:00 PM',
      saturday: '8:00 AM - 8:00 PM',
      sunday: '8:00 AM - 8:00 PM'
    },
    features: ['Open Play', 'High Ceilings', 'Excellent Lighting', 'Lessons', 'Community Events'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Pickleland has earned the distinction of being voted Best Pickleball Club in Austin — a recognition that reflects the quality of its 9 indoor courts, which feature high ceilings and excellent lighting that genuinely make a difference in playability. The facility is located in Pflugerville off Martin Lane, making it the closest premium indoor option for players in the northeast Austin and Round Rock corridor.',
      'Unlike reservation-heavy facilities, Pickleland offers walk-in open play — no advance booking required for regular sessions. Daily open play runs throughout the week at varying times, making it accessible for players with flexible schedules. Lessons and clinics are also available for players who want structured instruction, and community events run regularly to keep the social side of the game active.',
      'Equipment rental is available for newcomers who want to try before they buy. The atmosphere skews welcoming and community-oriented rather than competitive — it\'s a good spot for players of all levels. Pflugerville location means easy parking and no downtown traffic headaches. If you haven\'t made the drive out there yet, it\'s worth it for the court quality alone.'
    ],
    featured: false
  },
  {
    id: '13',
    name: 'Pan American Neighborhood Park',
    slug: 'pan-american-park',
    address: '307 Chicon Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78702',
    latitude: 30.25901,
    longitude: -97.72367,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/pan-american-park-main.jpg',
    images: [
      '/images/courts/pan-american-park-1.jpg',
      '/images/courts/pan-american-park-2.jpg',
      '/images/courts/pan-american-park-3.jpg',
      '/images/courts/pan-american-park-4.jpg'
    ],
    description: 'East Austin park with 3 dedicated outdoor pickleball courts plus 1 multi-purpose court striped for pickleball, lighted during park hours. Free, but roller derby practice takes the courts on Tuesday and Thursday evenings and weekend mornings.',
    amenities: ['Court Lights', 'Dedicated Pickleball Courts', 'Multi-Sport Net System'],
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
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 7:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 7:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 9:00 AM',
      sunday: '7:00 AM - 9:00 AM',
      notes: 'Courts unavailable Tue/Thu 7-10 PM and Sat/Sun 9 AM-12 PM for roller derby practice. Lighted during park hours.'
    },
    features: ['Free Play', 'Dedicated Courts', 'Public Access', 'Lighting'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Pan American Neighborhood Park is at 307 Chicon Street in East Austin, next to the Oswaldo A.B. Cantu/Pan American Recreation Center. The city lists 3 dedicated outdoor pickleball courts plus 1 multi-purpose court striped for one more, so up to 4 games can run at once. The courts are lit during park hours.',
      'The schedule is the catch. Roller derby practice uses the courts on Tuesday and Thursday evenings (7 to 10 p.m.) and on weekend mornings (9 a.m. to noon). That leaves open play from 7 a.m. to 10 p.m. on Monday, Wednesday and Friday, 7 a.m. to 7 p.m. on Tuesday and Thursday, and only 7 to 9 a.m. on Saturday and Sunday. For weekend games, go early or pick another court.',
      'Play is free and first-come, first-served. The rec center next door runs a separate Varsity Generation (older adult) open play on Monday mornings, 10 a.m. to noon. If the park courts are full, Rosewood Neighborhood Park is another free East Austin option on the city list.'
    ],
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
    latitude: 30.27041,
    longitude: -97.715,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/rosewood-park-main.jpg',
    images: [],
    description: 'East Austin park with 2 dedicated outdoor pickleball courts and 1 multi-purpose court striped for 2 more, lighted during park hours. The city notes nets are not included, so bring a portable net.',
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
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 10:00 PM',
      notes: 'Lighted during park hours. City lists nets as not included.'
    },
    features: ['Free Play', 'Dedicated Courts', 'Public Access', 'Lighting'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Rosewood Neighborhood Park is a community staple in East Austin, on Rosewood Avenue in the historic Rosewood neighborhood. The city lists 2 dedicated outdoor pickleball courts plus 1 multi-purpose court striped for 2 more, with lights during park hours. The city\'s listing says nets are not included, so bring a portable net to be sure you can play.',
      'The courts draw a casual to intermediate crowd from the surrounding East Austin neighborhoods, including Chestnut, Govalle and the MLK area. As East Austin has grown, Rosewood has become a convenient free option for newer residents who don\'t want to drive to a larger facility.',
      'Open play is 7 a.m. to 10 p.m. every day, free and first-come, first-served. Weekday mornings tend to be the quietest, while weekend afternoons can get busy.'
    ],
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
    latitude: 30.21513,
    longitude: -97.86319,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/dick-nichols-park-main.jpg',
    images: [
      '/images/courts/dick-nichols-park-1.jpg',
      '/images/courts/dick-nichols-park-2.jpg'
    ],
    description: 'Southwest Austin district park with 2 lighted multi-purpose courts striped for 5 pickleball courts and a multi-sport net system. Free, first-come, first-served, 7 a.m. to 10 p.m.',
    amenities: ['Restrooms', 'Parking', 'Walking Trails', 'Picnic Areas', 'Sports Fields'],
    courtType: 'outdoor',
    numberOfCourts: 5,
    isFree: true,
    pricing: {
      details: 'Free to play',
      rates: ['No cost']
    },
    reservationRequired: false,
    reservationInfo: 'First-come, first-served basis',
    hours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 10:00 PM',
      notes: 'Lighted during park hours. Multi-sport net system on site.'
    },
    features: ['Free Play', 'Large Park', 'Public Access', 'Lighting', 'Multi-Sport Net System'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Dick Nichols District Park is a large green space in Southwest Austin off Beckett Road near William Cannon. The city lists 2 multi-purpose outdoor courts here, striped for 5 pickleball courts, with lights during park hours. The courts use a multi-sport net system, and the city publishes instructions for setting it up.',
      'The location serves players from Circle C, Sendera, Shady Hollow and the rest of the 78749 area. Free outdoor courts are thinner on this side of town, so Dick Nichols has become a regular spot for neighborhood groups. Weekday mornings are the easiest time to get a court.',
      'Open play is 7 a.m. to 10 p.m. every day, free and first-come, first-served. The surrounding park has walking trails and sports fields, and the larger footprint gives it a more relaxed feel than the crowded central courts.'
    ],
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
    latitude: 30.34827,
    longitude: -97.73994,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/beverly-sheffield-park-main.jpg',
    images: [
      '/images/courts/beverly-sheffield-park-1.jpg',
      '/images/courts/beverly-sheffield-park-2.jpg',
      '/images/courts/beverly-sheffield-park-3.jpg'
    ],
    description: 'North-central Austin district park with 2 lighted multi-purpose courts striped for 4 pickleball courts and a multi-sport net system. Free, first-come, first-served, 7 a.m. to 10 p.m.',
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
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 10:00 PM',
      notes: 'Lighted during park hours. Multi-sport net system on site.'
    },
    features: ['Free Play', 'Hard Surface', 'Public Access', 'Lighting', 'Multi-Sport Net System'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Beverly S. Sheffield Northwest District Park is a large city park on Ardath Street in the 78757 area, between Allandale and Crestview. The city lists 2 multi-purpose outdoor courts striped for 4 pickleball courts, with a multi-sport net system and lights during park hours.',
      'The park also has walking trails, sports fields and picnic areas, so it works for a longer outing. It is a useful free option for players in Allandale, Crestview, Brentwood and the surrounding neighborhoods who would rather not drive to a rec center.',
      'Open play is 7 a.m. to 10 p.m. every day, free and first-come, first-served. Weekday mornings are typically the most open; weekend afternoons see heavier general park use. The lights make evening games possible year-round.'
    ],
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
    latitude: 30.33994,
    longitude: -97.73078,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/brentwood-park-main.jpg',
    images: [
      '/images/courts/brentwood-park-1.jpg',
      '/images/courts/brentwood-park-2.jpg',
      '/images/courts/brentwood-park-3.jpg'
    ],
    description: 'Central Austin neighborhood park with 2 lighted hard courts set up for pickleball — free, first-come first-served, bring your own net. Part of a well-equipped park that also includes a free public pool, sand volleyball, basketball, a softball field, and an adult workout area.',
    amenities: ['Restrooms', 'Free Parking', 'Court Lights', 'Free Public Pool', 'Sand Volleyball', 'Basketball Court', 'Softball Field', 'Playscape', 'Adult Workout Area', 'Covered Pavilion', 'Walking Path'],
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
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 10:00 PM',
      notes: 'Lighted during park hours. Bring your own portable net.'
    },
    features: ['Free Play', 'Multi-Sport', 'Public Access', 'Bring Own Nets'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Brentwood Neighborhood Park sits in one of Austin\'s most walkable central neighborhoods, just north of 45th Street off Arroyo Seco. The park has 2 courts that can be set up for pickleball on the existing hard surface — players need to bring their own portable net.',
      'The park draws a mix of Brentwood locals and players from surrounding Hyde Park and Allandale who prefer a low-key neighborhood setting over the busier city rec centers. Courts are free, no reservation required, first-come first-served. Because it\'s only 2 courts and nets aren\'t permanent, it\'s best suited for a group that\'s coming together rather than hoping to find a pickup game.',
      'What makes Brentwood worth the trip beyond the courts is everything around them. The park includes a free public swimming pool — no admission, with a main pool running roughly 3.5 to 4.7 feet deep plus a shallow kiddie pool with a fountain — along with a sand volleyball court, basketball court, softball field, playscape, adult workout equipment, a covered pavilion, and a walking path. For a family where one person wants court time and everyone else wants something to do, few central Austin parks stack up this well.',
      'The courts are lighted, which extends play well past sunset in the summer and is not a given at neighborhood parks this size. Parking is free along Arroyo Seco. Best times are weekday mornings and early afternoons when courts are less crowded; expect more competition for space on summer evenings and weekends when the pool draws a crowd.'
    ],
    featured: false
  },
  {
    id: '18',
    name: 'Austin High Tennis Center',
    slug: 'austin-high-tennis',
    address: '2001 W Cesar Chavez Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78703',
    latitude: 30.27324,
    longitude: -97.76537,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/austin-high-tennis-main.jpg',
    images: [
      '/images/courts/austin-high-tennis-1.jpg',
      '/images/courts/austin-high-tennis-2.jpg',
      '/images/courts/austin-high-tennis-3.jpg'
    ],
    description: 'Austin ISD tennis center with 3 dedicated, lighted outdoor pickleball courts shared with the City of Austin. Free when not reserved for school use: weekday evenings during the school year, all day in summer.',
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
      monday: '5:30 PM - 10:00 PM',
      tuesday: '5:30 PM - 10:00 PM',
      wednesday: '5:30 PM - 10:00 PM',
      thursday: '5:30 PM - 10:00 PM',
      friday: '5:30 PM - 10:00 PM',
      notes: 'School year: Mon-Fri 5:30-10 PM. Summer: 7 days, 7 AM-10 PM. No public play during AISD events.'
    },
    features: ['Free Play', 'Permanent Nets', 'Public Access', 'Lighting'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Austin High Tennis Center sits at 2001 W. Cesar Chavez Street on the north shore of Lady Bird Lake, one of the best locations of any free court in the city. It has 3 dedicated outdoor pickleball courts with lights for evening play.',
      'The courts are shared through an agreement between the City of Austin and Austin ISD, so public time depends on the school calendar. During the school year, open play is Monday through Friday from 5:30 to 10 p.m. In summer it opens up to 7 days a week, 7 a.m. to 10 p.m. There is no public play during AISD events.',
      'When the courts are open to the public they are free and first-come, first-served. The location makes them popular with downtown and Clarksville residents and with people pairing a game with a run on the Butler Trail, so weekday evenings can be busy.'
    ],
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
    latitude: 30.35443,
    longitude: -97.68222,
    phone: '(512) 978-2525',
    website: 'https://www.austintexas.gov/parks/locations/gustavo-gus-l-garcia-recreation-center',
    mainImage: '/images/courts/gus-garcia-main.jpg',
    images: [
      '/images/courts/gus-garcia-2.jpg'
    ],
    description: 'North Austin rec center and district park on Rundberg Lane. Indoors, 1 multi-purpose court striped for 3 pickleball courts with scheduled open play. Outdoors in the district park, 1 multi-purpose court striped for 2, open 7 a.m. to 10 p.m.',
    amenities: ['Indoor Open Play', 'Outdoor Multi-Purpose Court', 'Air Conditioning (indoor)'],
    courtType: 'both',
    numberOfCourts: 5,
    isFree: true,
    pricing: {
      details: 'Outdoor park court is free; call the center about any fee for indoor open play',
      rates: ['Indoor open play: call (512) 978-2525', 'Outdoor court: free']
    },
    reservationRequired: false,
    reservationInfo: 'No reservation for the outdoor court. Indoor play is during scheduled open play times.',
    hours: {
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 10:00 PM',
      notes: 'Outdoor district park court: 7 AM-10 PM daily. Indoor open play: Tue & Thu 11 AM-1 PM, Sat 10 AM-12 PM, Sun 1-2:30 PM.'
    },
    features: ['Indoor Courts', 'Outdoor Court', 'Scheduled Open Play', 'Air Conditioning'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Gustavo "Gus" L. Garcia Recreation Center and District Park share an address at 1201 E. Rundberg Lane in North Austin, and the city lists pickleball in both places.',
      'Inside the rec center, 1 multi-purpose gym court is striped for 3 pickleball courts. Indoor open play runs Tuesday and Thursday from 11 a.m. to 1 p.m., Saturday from 10 a.m. to noon, and Sunday from 1 to 2:30 p.m. Call the center at (512) 978-2525 to confirm the schedule and whether there is a drop-in fee.',
      'Outside, the district park has 1 multi-purpose court striped for 2 pickleball courts, open 7 days a week from 7 a.m. to 10 p.m. That court is free and first-come, first-served. For players around Georgian Acres, North Lamar and the Rundberg corridor, it is the closest city option with both indoor and outdoor play.'
    ],
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
    latitude: 30.33458,
    longitude: -97.75173,
    phone: '(512) 974-6972',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/northwest-rec-main.jpg',
    images: [
      '/images/courts/northwest-rec-1.jpg',
      '/images/courts/northwest-rec-2.jpg'
    ],
    description: 'Northwest Austin rec center with 1 multi-purpose indoor court striped for 3 pickleball courts. Open play Monday and Wednesday, 10:30 a.m. to 1:30 p.m.',
    amenities: ['Air Conditioning', 'Restrooms', 'Parking', 'Multi-Purpose Court'],
    courtType: 'indoor',
    numberOfCourts: 3,
    isFree: true,
    pricing: {
      details: 'Open play during scheduled times; call the center about any fee',
      rates: ['Call (512) 974-6972 about fees']
    },
    reservationRequired: false,
    reservationInfo: 'Drop in during scheduled open play.',
    hours: {
      monday: '10:30 AM - 1:30 PM',
      wednesday: '10:30 AM - 1:30 PM',
      notes: 'Pickleball open play hours shown (City of Austin). Call to confirm before going.'
    },
    features: ['Indoor Courts', 'Air Conditioning', 'Multi-Purpose', 'Scheduled Open Play'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Northwest Recreation Center is a City of Austin facility at 2913 Northland Drive. The city lists 1 multi-purpose indoor court striped for 3 pickleball courts, so it is gym-floor play rather than dedicated courts. It is air-conditioned, which matters in July and August.',
      'Pickleball open play is Monday and Wednesday from 10:30 a.m. to 1:30 p.m. That schedule suits retirees, remote workers and anyone with a free midday. Call the center at (512) 974-6972 to confirm times and whether there is a drop-in fee, since rec-center schedules change by season.',
      'With 3 courts, it is a small, social session with a steady group of regulars. If you need evening or weekend play on this side of town, the lighted outdoor courts at Beverly S. Sheffield Northwest District Park and Brentwood Neighborhood Park are both nearby.'
    ],
    featured: false
  },
  {
    id: '21',
    name: 'Mary Moore Searight Metro Park',
    slug: 'mary-moore-searight',
    address: '907 W Slaughter Lane',
    city: 'Austin',
    state: 'TX',
    zipCode: '78748',
    latitude: 30.17386,
    longitude: -97.80655,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/parks',
    mainImage: '/images/courts/mary-moore-searight-main.jpg',
    images: [
    ],
    description: 'Large South Austin metro park with 1 multi-purpose court striped for 4 pickleball courts and a multi-sport net system. Free, first-come, first-served, 7 a.m. to 10 p.m.',
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
      monday: '7:00 AM - 10:00 PM',
      tuesday: '7:00 AM - 10:00 PM',
      wednesday: '7:00 AM - 10:00 PM',
      thursday: '7:00 AM - 10:00 PM',
      friday: '7:00 AM - 10:00 PM',
      saturday: '7:00 AM - 10:00 PM',
      sunday: '7:00 AM - 10:00 PM',
      notes: 'Not listed as lighted by the city; plan to finish by dark.'
    },
    features: ['Free Play', 'Public Access', 'Community Park', 'Multi-Sport Net System'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Mary Moore Searight Metropolitan Park is one of the largest parks in South Austin, off Slaughter Lane. The city lists 1 multi-purpose outdoor court here, striped for 4 pickleball courts, with a multi-sport net system.',
      'The park draws players from the Slaughter Lane and Manchaca Road corridor, including Shady Hollow and nearby South Austin neighborhoods. Because the pickleball court is one small part of a big park, it is generally less crowded than the central neighborhood courts.',
      'Open play is 7 a.m. to 10 p.m. every day, free and first-come, first-served. The city does not list lights at this court, so plan evening games around sunset. Slaughter Lane backs up at rush hour, so leave extra time if you are coming from I-35 or MoPac.'
    ],
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
    phone: '(512) 221-1926',
    website: 'https://www.goracfit.com',
    email: 'info@goracfit.com',
    mainImage: '/images/courts/racfit-main.jpg',
    images: [
      '/images/courts/racfit-1.jpg',
      '/images/courts/racfit-2.jpg',
      '/images/courts/racfit-3.jpg',
      '/images/courts/racfit-4.jpg',
      '/images/courts/racfit-5.jpg'
    ],
    description: 'RacFit is a premier tennis, pickleball, fitness, and social club in Buda, Texas — now open as of May 2026. The facility features 8 regulation pickleball courts with 4 covered by a steel shade structure, a full-service bar (Courtside Cantina), 22,000 sq ft of indoor space, and on-site ActiveCare. Membership required.',
    longDescription: [
      'RacFit opened in May 2026 in Buda, and it is the most complete racquet sports facility south of Austin proper. The pickleball setup is 8 regulation courts with a steel shade structure covering 4 of them — a meaningful detail in Central Texas, where covered outdoor play is the difference between a July session being enjoyable or miserable. The club also runs 8 tennis courts (2 of them indoor) and 2 fitness rooms, so court time is not competing with a single shared multipurpose space the way it does at most rec centers.',
      'Programming is the real differentiator versus a drop-in venue. RacFit runs structured adult and junior pickleball tracks, clinics, and seasonal camps, with full fall registration opening ahead of the season. Courts and clinics are both booked through book.goracfit.com, which shows live availability rather than a static schedule. Beyond racquet sports, the club runs Les Mills fitness programming, a MultiBall interactive digital sports wall, and on-site ActiveCare childcare — that last one matters if you have been putting off league play because of kid logistics.',
      'The facility spans 22,000 square feet of climate-controlled indoor space with locker rooms, a full bar with indoor and outdoor seating, a walking trail, and large community social areas. Membership is required to play; current tiers run around $179/month for an all-inclusive couples baseline, with ActiveCare and additional family members at $49/month each. Located at 1390 Robert S Light Blvd in Buda, it primarily serves Buda, Kyle, and far South Austin players — worth the drive if you want covered courts and structured programming rather than first-come-first-served park play. Call (512) 221-1926 or email info@goracfit.com for current membership availability and tours.'
    ],
    amenities: ['Steel Shade Structure', 'Full Bar (Courtside Cantina)', 'Indoor/Outdoor Seating', 'Locker Rooms', 'Fitness Rooms', 'Digital Sports Room', 'On-site ActiveCare', 'Walking Trail', 'Community Social Spaces', '22,000 sq ft Indoor Space'],
    courtType: 'outdoor',
    numberOfCourts: 8,
    isFree: false,
    pricing: {
      details: 'Membership required — visit goracfit.com for current rates',
      rates: [
        'All Inclusive - Couple - Baseline: $179/month',
        'ActiveCare: $49/month',
        'Additional Family Member: $49/month',
        'Visit goracfit.com for current membership options and availability'
      ]
    },
    reservationRequired: true,
    reservationInfo: 'Membership required to play. Visit goracfit.com for membership information and to get started.',
    hours: {
      notes: 'RacFit does not publish fixed daily hours — court availability is driven by the booking calendar and seasonal programming. Book courts and view live availability at book.goracfit.com, or call (512) 221-1926.'
    },
    features: ['Now Open', 'Covered Courts', 'Full Bar', 'Fitness Center', 'Social Club', 'Programming for All Ages', 'ActiveCare On-site'],
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
    mainImage: '/images/courts/highway-71-brewing-main.jpg',
    images: [
      '/images/courts/highway-71-brewing-1.jpg',
      '/images/courts/highway-71-brewing-2.jpg'
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
    longDescription: [
      'Highway 71 Brewing in Spicewood is about as unique as Austin-area pickleball gets — a family-owned Hill Country brewery that happens to have a temperature-controlled indoor pickleball court alongside its taproom, pizza kitchen, golf simulators, and live music setup. It\'s not for the player who wants to grind out 3 hours of drills. It\'s for the group that wants a genuinely different kind of Saturday.',
      'The single indoor court is temperature-controlled, which makes it comfortable year-round regardless of what\'s happening outside in the Hill Country heat. Court time requires a reservation, and given the brewery context, the experience is intentionally relaxed — play a game, grab a craft beer, challenge someone to the golf simulator, repeat. The staff is welcoming and the overall vibe is casual and family-friendly.',
      'Located on State Highway 71 about 30 minutes west of central Austin near Lake Travis, Highway 71 Brewing is a destination rather than a convenience. Best approached as a day trip or an evening out rather than a quick court session. Worth the drive for the novelty and the Hill Country setting alone — and the beer is legitimately good.'
    ],
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
    mainImage: '/images/courts/anderson-mill-amna-main.jpg',
    images: [
      '/images/courts/anderson-mill-amna-1.jpg'
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
    longDescription: [
      'The Anderson Mill Neighborhood Association pickleball courts on School House Lane serve a specific and intentional community — AMNA members and Anderson Mill Limited District (AMLD) keyholders. The 4 outdoor courts are not open to the general public, which means the player pool is smaller and more consistent, and the atmosphere is deliberately neighborhood-focused rather than city-wide.',
      'Weekly open play sessions rotate formats to mix things up — round robin, king of the court, and other structured formats keep regulars engaged and help newer players integrate into the group. The community-first approach means you\'re more likely to know the people you\'re playing with after a few visits, which is a meaningful difference from the anonymity of large city facilities.',
      'If you live in Anderson Mill or the surrounding neighborhood and have AMLA district access, these courts are worth checking out specifically for the community aspect. Four courts with a consistent, friendly player pool is often more enjoyable than a larger facility with strangers cycling through. Contact the AMNA directly for current session schedules and membership access details.'
    ],
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
    mainImage: '/images/courts/anderson-mill-west-park-main.jpg',
    images: [
      '/images/courts/anderson-mill-west-park-1.jpg'
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
    longDescription: [
      'Anderson Mill West Park is a well-appointed community park in Cedar Park on El Salido Parkway, offering 4 lighted tennis courts with pickleball striping — playable for both sports. A large covered pavilion, playground, restrooms, basketball court, gazebo, walking trail, and picnic tables make this one of the more complete park complexes in the northwest suburbs.',
      'Access requires a yearly district membership with the Anderson Mill Limited District, making it a members-only facility rather than a public drop-in option. The membership covers the broader park complex, not just the courts — it\'s worth it for families or regular players who will use the full park. Court reservations are required for guaranteed time.',
      'The lighted courts make evening play viable year-round, which is particularly valuable in summer when daytime play is uncomfortable. Located off El Salido in Cedar Park, the park is convenient for players in the Anderson Mill, Four Points, and Lakeline areas. Contact the AMLD for current membership rates, reservation procedures, and pickleball-specific session availability.'
    ],
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
    mainImage: '/images/courts/lakeline-oaks-park-2.jpg',
    images: [
      '/images/courts/lakeline-oaks-park-1.jpg',
      '/images/courts/lakeline-oaks-park-main.jpg'
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
    longDescription: [
      'Lakeline Oaks Park in Cedar Park provides 6 pickleball courts set up on tennis court surfaces, with permanent pickleball nets included with access — a notable detail for players tired of hauling portable equipment. The park is operated by the Brushy Creek Municipal Utility District, which means access requires a yearly district membership rather than a simple drop-in fee.',
      'For Cedar Park residents in the district, the membership pays for itself quickly given the quality of the courts and the online reservation system that lets you book specific court times. The reservation system reduces wait times and guarantees your slot, which is more than you can say for most free first-come courts in the area. Six courts also means capacity for multiple groups to play simultaneously.',
      'Located on Old Mill Road in Cedar Park, Lakeline Oaks is convenient for players in the 78613 and surrounding zip codes who don\'t want to drive to Austin proper for quality courts. Restrooms and parking are on-site. If you\'re a Cedar Park or Leander resident, the district membership is the clearest path to consistent, well-maintained court access without the drive south.'
    ],
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
    mainImage: '/images/courts/Pickle_Hub-1.jpg',
    images: [],
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
    longDescription: [
      'Pickle Hub on Menchaca Road is South Austin\'s most ambitious pickleball-and-entertainment mashup — 2 outdoor courts wrapped in a full social venue that includes Drifters Social Coffee & Cocktail, the Pickle Pub sports bar, rotating food trucks, a stage, fire pits, and a dog park. It\'s designed for the group that wants a venue, not just a court. If you\'re coming solo to grind drills, this isn\'t your spot. If you\'re organizing a date, a group hang, or a work outing that needs to satisfy both players and non-players, Pickle Hub delivers.',
      'The courts are dedicated outdoor pickleball — not converted tennis lines, not a parking lot setup. Equipment rental is available on-site for players who don\'t have their own paddles. Live music runs Thursday through Sunday, which adds to the energy later in the evening. The venue is explicitly family-friendly until 9pm on weekdays and 5pm on weekends, after which the bar-and-music side takes over.',
      'Hours skew evening-heavy on weekdays (opens at 3pm) and extend to 2am Thursday through Friday, making this one of the few Austin pickleball options that functions as a late-night destination. Located at 10630 Menchaca Road, Building B, in South Austin near Slaughter Lane. Reservations are recommended — contact Pickle Hub directly or visit picklehubatx.com. Parking is available on-site.'
    ],
    featured: false
  },
  {
    id: '32',
    name: 'Bouldin Acres - Menchaca',
    slug: 'bouldin-acres-menchaca',
    address: '10400 Menchaca Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78748',
    latitude: 30.1672,
    longitude: -97.8276,
    phone: '(737) 284-3472',
    website: 'https://menchaca.bouldinacres.com',
    mainImage: '/images/courts/bouldin-acres-menchaca-main.jpg',
    images: [
      '/images/courts/bouldin-acres-menchaca-1.jpg'
    ],
    description: 'South Austin location of Bouldin Acres on Menchaca Road, with 2 reservable outdoor pickleball courts alongside a full bar, CM Smokehouse BBQ, a playground, and yard games. Courts are for customers only and must be booked online in advance. Rates run $10-$20 per half hour depending on day and time.',
    amenities: ['Food & Drinks', 'Outdoor Courts', 'CM Smokehouse BBQ', 'Playground', 'Yard Games', 'TVs', 'Paddle Rental', 'Dog Friendly'],
    courtType: 'outdoor',
    numberOfCourts: 2,
    isFree: false,
    pricing: {
      details: 'Court rental by the half hour; paddle rental available',
      rates: [
        'Mon-Thu 11AM-6PM: $10 per half hour',
        'Mon-Thu 6PM-close: $20 per half hour',
        'Fri-Sun 11AM-close: $20 per half hour',
        'Paddle rental: $2.50 per paddle'
      ]
    },
    reservationRequired: true,
    reservationInfo: 'Courts must be reserved online in advance — bookings open one week ahead. Check in with a Bouldin Acres Game Host on arrival, even if bringing your own paddle. Cancel at least one hour before your slot for a possible refund; no refunds for no-shows.',
    hours: {
      monday: '11:00 AM - 12:00 AM',
      tuesday: '11:00 AM - 12:00 AM',
      wednesday: '11:00 AM - 12:00 AM',
      thursday: '11:00 AM - 12:00 AM',
      friday: '11:00 AM - 12:00 AM',
      saturday: '11:00 AM - 12:00 AM',
      sunday: '11:00 AM - 12:00 AM',
      notes: 'Venue hours. Pickleball courts are unavailable Monday-Wednesday 6-10PM due to Austin Sports & Social Club league nights (some holidays and select dates excluded). Kid-friendly until 8PM.'
    },
    features: ['Reservable Courts', 'Food & Drinks', 'Family Friendly', 'ASSC League Play', 'Paddle Rental'],
    accessibility: ['Wheelchair Accessible'],
    parking: 'Free on-site parking',
    longDescription: [
      'Bouldin Acres on Menchaca Road brings the same formula as the original South Lamar location to far South Austin: 2 outdoor pickleball courts attached to a full bar, a CM Smokehouse food truck, and a big open yard. Pickleball here is part of a night out rather than a training session — you book a half hour, play a few games, and then eat. The Menchaca location fills a real gap, since the 78748 corridor south of Slaughter had almost no paid court options before it opened.',
      'Courts are customer-only and must be reserved online in advance, with bookings opening a week out. Pricing is time-of-day based: $10 per half hour on weekday afternoons (Mon-Thu, 11AM-6PM), and $20 per half hour evenings and all weekend. Paddle rental runs $2.50 if you show up empty-handed. Everyone checks in with a Game Host before stepping on court, athletic shoes are required, and players under 12 need a parent present. Worth knowing before you drive out: the courts are blocked Monday through Wednesday from 6-10PM for Austin Sports & Social Club leagues, which is prime evening time.',
      'The venue itself runs 11AM to midnight every day and is genuinely family-friendly until 8PM, with a full playground on site — a real differentiator versus most bar-and-court venues in Austin. Dogs are welcome in the general area, though not on the courts. Between the shorter 30-minute booking blocks, the food truck, and the yard games, this works best for casual groups and mixed-skill crews rather than players hunting for extended competitive play.'
    ],
    featured: false
  },
  {
    id: '33',
    name: 'Balcones Country Club',
    slug: 'balcones-country-club',
    address: '8600 Balcones Club Dr',
    city: 'Austin',
    state: 'TX',
    zipCode: '78750',
    latitude: 30.3874,
    longitude: -97.7662,
    phone: '(512) 258-1621',
    website: 'https://www.balconescountryclub.com',
    email: 'balconespickleball@gmail.com',
    mainImage: '/images/courts/balcones-country-club-main.jpg',
    images: [
      '/images/courts/balcones-country-club-1.jpg',
      '/images/courts/balcones-country-club-2.jpg'
    ],
    description: 'Private Northwest Austin club with 4 outdoor concrete pickleball courts, permanent lines, and portable nets. Runs organized play, clinics, and leagues through the week, with seasonal Open Play sessions. Courts are booked via the CourtReserve app; a social membership with pickleball access is required, and members may bring guests.',
    amenities: ['Outdoor Concrete Courts', 'Permanent Lines', 'Portable Nets', 'Clinics & Leagues', 'Seasonal Open Play', 'CourtReserve Booking', 'Country Club Amenities', 'Guest Access'],
    courtType: 'outdoor',
    numberOfCourts: 4,
    isFree: false,
    pricing: {
      details: 'Membership required. Members may bring guests to weekly open play sessions.',
      rates: ['Membership required for access', 'Guest play available with member']
    },
    reservationRequired: false,
    reservationInfo: 'Weekly Open Play sessions open to members and guests — no reservation required for open play',
    hours: {
      notes: 'Court reservations generally run 7AM-9PM via the CourtReserve app. Open Play times shift seasonally — typically weekend afternoons in winter and early evenings in summer. Confirm the current schedule with the club at (512) 258-1621 before planning a visit.'
    },
    features: ['Membership Required', 'Guest Access', 'Weekly Open Play', 'Outdoor Courts', 'NW Austin'],
    accessibility: ['Contact facility for accessibility information'],
    parking: 'Club parking available',
    longDescription: [
      'Balcones Country Club sits off Balcones Club Drive in Northwest Austin and runs 4 outdoor concrete pickleball courts with permanent lines and portable nets. Unlike most private clubs in the area, pickleball here is not an afterthought bolted onto the tennis program — the courts stay active through the week with organized play, clinics, leagues, and casual matches, so there is usually something on the calendar rather than just open court time.',
      'Court access runs through the CourtReserve app, with the reservation window generally spanning 7AM to 9PM. Open Play is the entry point for most newer players, and the schedule rotates seasonally: weekend afternoon sessions through the cooler months, shifting to early evening slots in summer to dodge the worst of the heat. Because those times move, it is worth a quick call to the club at (512) 258-1621 before you drive out — a wasted trip across 183 is an annoying way to learn the schedule changed.',
      'Access requires a country club social membership with the pickleball add-on, and members can bring guests. For players in the 78750 corridor — Balcones, Spicewood Springs, Anderson Mill, Four Points — that private-club requirement is the tradeoff for having reliably maintained courts in a part of town where free public options are genuinely scarce. Reach out through balconescountryclub.com or balconespickleball@gmail.com for membership details and current programming.'
    ],
    featured: false
  },
  // Added 3 Nov 2026 after a reader (contact form, 24 Oct) pointed out these clubs were missing.
  // Facts checked against each club's own website on 3 Nov 2026. Main images are placeholder
  // cards made for this site ("photos coming soon"), not stock photos; replace with real photos.
  {
    id: '34',
    name: 'Apex Pickleball Clubs',
    slug: 'apex-pickleball-clubs-cedar-park',
    address: '501 Cypress Creek Rd',
    city: 'Cedar Park',
    state: 'TX',
    zipCode: '78613',
    latitude: 30.4972,
    longitude: -97.8222,
    phone: '(737) 394-6801',
    website: 'https://apexpbclubs.com',
    email: 'info@apexpbclubs.com',
    mainImage: '/images/courts/apex-pickleball-clubs-cedar-park-main.jpg',
    images: [],
    description: 'Indoor club in Cedar Park with 16 climate-controlled courts, including 2 championship courts, plus coaching, leagues, tournaments and the PickleDilly\'s restaurant on site. You don\'t need a membership: guests can book courts or drop in to open play.',
    amenities: ['16 Indoor Courts', 'Climate Controlled', 'Championship Courts', 'Restaurant & Bar', 'Pro Shop', 'Coaching', 'Party Room'],
    courtType: 'indoor',
    numberOfCourts: 16,
    isFree: false,
    pricing: {
      details: 'Guests welcome without a membership. Members get priority booking, daily open play and discounts.',
      rates: ['Guest drop-in open play: $17.50 for 2 hours', 'Single membership: $149.95/month', 'Couples membership: $249.95/month'],
    },
    reservationRequired: true,
    reservationInfo: 'Create a free account on the Apex site to reserve a court or sign up for open play at your level. Members can book up to 14 days ahead.',
    hours: {
      notes: 'Open 7 days a week. Open play and court times vary by day; check the club calendar on apexpbclubs.com.',
    },
    features: ['Indoor', 'Open Play', 'Leagues', 'Tournaments', 'Clinics & Lessons', 'Youth Programs', 'Food & Drinks'],
    parking: 'On-site parking',
    customDescription: 'Apex Pickleball Clubs in Cedar Park: 16 indoor climate-controlled courts, guest drop-in open play ($17.50 for 2 hours), memberships, leagues, monthly tournaments and an on-site restaurant.',
    longDescription: [
      'Apex Pickleball Clubs is a dedicated indoor club on Cypress Creek Road in Cedar Park, with 16 climate-controlled courts. Two are championship courts, and the playing surface is cushioned outdoor-style surfacing rather than a gym floor. At 16 courts it is one of the larger indoor facilities in the Austin area.',
      'You don\'t have to be a member. Guests create a free account on the Apex website, then either reserve a court or sign up for an open play session at their level; drop-in open play for guests is $17.50 for two hours. Apex\'s own math is that membership ($149.95 a month for one person) pays off if you play more than about once a week, since members get two hours of open play a day included, priority booking up to 14 days out and discounts on clinics and leagues.',
      'Beyond open play, Apex runs leagues, lessons with PPR-certified coaches, a youth program, a free intro-to-pickleball class and a monthly tournament series that draws players from across Central Texas; its October 2026 Dink and Slam Jam had 268 players. PickleDilly\'s, the restaurant and bar on site, makes it an easy place to stay after a session. Our events page lists upcoming Apex tournaments.',
    ],
    featured: false
  },
  {
    id: '35',
    name: 'The Picklr Austin West',
    slug: 'picklr-austin-west',
    address: '8201 N FM 620, Suite 130',
    city: 'Austin',
    state: 'TX',
    zipCode: '78726',
    latitude: 30.4169,
    longitude: -97.8435,
    phone: '(737) 257-6035',
    website: 'https://thepicklr.com/location/austin-west/',
    email: 'austinwest.tx@thepicklrfranchise.com',
    mainImage: '/images/courts/picklr-austin-west-main.jpg',
    images: [],
    description: 'Indoor pickleball club on FM 620 in northwest Austin with 11 dedicated courts, sound baffling to cut the noise, and memberships that work at Picklr clubs nationwide. Open daily 6 AM to 11 PM; book through the Picklr app.',
    amenities: ['11 Indoor Courts', 'Sound Baffling', 'Pro Shop', 'Leagues', 'Clinics'],
    courtType: 'indoor',
    numberOfCourts: 11,
    isFree: false,
    pricing: {
      details: 'Memberships or single-session court bookings through The Picklr app.',
      rates: ['Memberships starting at $99/month', 'Unlimited membership works at Picklr clubs nationwide', 'Single court bookings available in the app'],
    },
    reservationRequired: true,
    reservationInfo: 'Book courts, open play, leagues and clinics through The Picklr app. Walk-in open play is also offered.',
    hours: {
      monday: '6:00 AM - 11:00 PM',
      tuesday: '6:00 AM - 11:00 PM',
      wednesday: '6:00 AM - 11:00 PM',
      thursday: '6:00 AM - 11:00 PM',
      friday: '6:00 AM - 11:00 PM',
      saturday: '6:00 AM - 11:00 PM',
      sunday: '6:00 AM - 11:00 PM',
    },
    features: ['Indoor', 'Open Play', 'Leagues', 'Clinics', 'Nationwide Membership'],
    parking: 'On-site parking',
    customDescription: 'The Picklr Austin West on FM 620: 11 dedicated indoor pickleball courts with sound baffling, open daily 6 AM to 11 PM. Memberships from $99/month, or book a single session in the app.',
    longDescription: [
      'The Picklr Austin West is part of a national chain of indoor pickleball clubs, in a retail center on North FM 620 in northwest Austin. It has 11 dedicated courts built for pickleball, with an outdoor-style court surface and custom sound baffling, so it is noticeably quieter than playing in a gym or warehouse.',
      'Access runs through The Picklr app, where you book courts, open play, leagues and clinics. Memberships start at $99 a month, and the Unlimited tier works at every Picklr location in the country, which matters if you travel. If you don\'t want a membership, you can book a single court session instead.',
      'The club is open every day from 6 AM to 11 PM, so early-morning and late-evening play are both realistic. A second Austin location, The Picklr Oak Hill on Highway 71, has been announced; we\'ll add it once it is open.',
    ],
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