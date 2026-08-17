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
    address: '5000 Berkman Drive',
    city: 'Austin',
    state: 'TX',
    zipCode: '78724',
    latitude: 30.2967,
    longitude: -97.6422,
    phone: '(512) 928-8119',
    website: 'https://www.austintennisandpickleballcenter.com',
    mainImage: 'https://images.pexels.com/photos/29820785/pexels-photo-29820785.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/29439326/pexels-photo-29439326.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/17299530/pexels-photo-17299530.jpeg?w=800&h=600&fit=crop&crop=center'
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
    longDescription: [
      'Austin Tennis and Pickleball Center on Berkman Drive is one of the city\'s more serious dedicated facilities, offering 8 outdoor pickleball courts with permanent nets and excellent lighting for evening play. Unlike the city\'s recreation centers, this facility operates with both membership and pay-per-play options, giving players flexible access without a long-term commitment.',
      'The courts draw a range of skill levels, but the quality of the facility and the presence of a pro shop and lessons makes it particularly popular with intermediate and advanced players who want more than a neighborhood park offers. Clinics and private instruction are available — the in-house professionals can help you level up whether you\'re brand new or looking to sharpen specific skills.',
      'Reservations are required, which helps ensure court availability when you arrive. Free parking is on-site. Located in the North Loop/Mueller adjacent area off Berkman, it\'s reasonably central for Austin players and accessible from I-35. If you\'ve been playing at free public courts and want to experience a step up in court surface quality and facility amenities without committing to a full indoor facility membership, ATPC is worth a visit.'
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
    images: [
      'https://images.pexels.com/photos/17299528/pexels-photo-17299528.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/17299530/pexels-photo-17299530.jpeg?w=800&h=600&fit=crop&crop=center'
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
    slug: 'the-pitch',
    address: '13000 Harris Ridge Blvd',
    city: 'Austin',
    state: 'TX',
    zipCode: '78753',
    latitude: 30.4194,
    longitude: -97.6897,
    phone: '(737) 370-9280',
    website: 'https://www.thepitchaustin.com',
    mainImage: '/images/courts/pitch-1.png',
    images: [
      'https://images.pexels.com/photos/17299530/pexels-photo-17299530.jpeg?w=800&h=600&fit=crop&crop=center',
      '/images/courts/The-Pitch-2.png'
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
    longDescription: [
      'Lake Travis Biergarten combines two of Austin\'s favorite pastimes — outdoor recreation and cold beer — with 2 outdoor pickleball courts overlooking Lake Travis off Ranch Road 620. It\'s not your typical pickleball destination, but that\'s exactly the point. The courts are set in a scenic Hill Country lakeside setting that makes the whole experience feel like a day trip rather than just a game.',
      'Court rental is required, and reservations are recommended, especially on weekends when the full venue — beer garden, live music, and lake views — draws a crowd. This isn\'t the spot for serious training or competitive play. It\'s ideal for a mixed group where some people want to play and others are happy watching with a drink in hand.',
      'Food and drinks are available on-site, the bar and restaurant make it easy to extend the outing well beyond your court time, and the lake views add a backdrop you won\'t find anywhere else in the Austin pickleball scene. Equipment rental may be available — confirm when booking. Located about 30 minutes from central Austin off 620, it\'s a worthwhile drive for a social outing.'
    ],
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
      'https://images.pexels.com/photos/17299534/pexels-photo-17299534.jpeg?w=800&h=600&fit=crop&crop=center'
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
    longDescription: [
      'Little Zilker Park occupies a prime spot on Barton Springs Road at the edge of the Zilker Park complex, one of Austin\'s most beloved green spaces. The 4 outdoor pickleball courts are free and open to the public on a first-come, first-served basis, with no nets to haul in — permanent nets are in place. The combination of a great location and zero cost makes this one of the most visited free court spots on the south side.',
      'The courts attract players from Bouldin Creek, Barton Hills, South Congress, and beyond — the central location and proximity to Barton Springs means a lot of people fold pickleball into a broader outdoor morning that might include a swim or a run on the trail. Expect the courts to be busy on weekend mornings, especially in spring and fall. Weekday afternoons are generally easier.',
      'Restrooms and parking are available nearby within the Zilker complex. The park setting is hard to beat — massive trees, shade in the morning hours, and the general good energy of the Zilker area. A solid choice for casual play or for introducing newer players to the game in a relaxed, scenic environment.'
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
    latitude: 30.2156,
    longitude: -97.7713,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/32975182/pexels-photo-32975182.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/29439337/pexels-photo-29439337.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/17299533/pexels-photo-17299533.jpeg?w=800&h=600&fit=crop&crop=center'
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
    longDescription: [
      'South Austin Recreation Center on Cumberland Road is the City of Austin\'s primary indoor pickleball facility for the south side, offering 6 air-conditioned indoor courts. For South Austin residents in Zilker, Travis Heights, Bouldin, or the 78704 zip code, this is the closest option for year-round indoor play that sidesteps the weather entirely.',
      'The center runs a variety of programs including beginner clinics, open play sessions, and organized leagues — the lineup changes seasonally, so check the Austin Parks & Recreation website for current schedules and court reservation availability. Day passes and annual memberships are both accepted; memberships provide access to all City of Austin rec centers.',
      'The facility has full restrooms, a fitness center, and free on-site parking. The courts accommodate multiple skill levels across open play sessions. It\'s a well-run city facility that\'s grown with the pickleball boom — if you haven\'t visited recently, the programming is more robust than it was a few years ago.'
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
    latitude: 30.2156,
    longitude: -97.7713,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: '/images/courts/dittmar-rec-main.png',
    images: [
      '/images/courts/dittmar-rec-1.png',
      '/images/courts/dittmar-rec-2.png'
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
    longDescription: [
      'Dittmar Recreation Center is one of the City of Austin\'s best-kept secrets for free indoor pickleball. Located on West Dittmar Road in South Austin, the center has 4 indoor courts available during open play sessions at no cost beyond a simple waiver — sign once on your first visit, then just check in each time after that. No membership required, no day pass, no court fee.',
      'The courts are multi-purpose gym space, which means you\'ll be playing on a smooth floor with pickleball lines marked out — functional and air-conditioned, which is what matters when it\'s 100 degrees outside. Open play schedules change seasonally, so check the Austin Parks & Rec website or call ahead to confirm current times before making the trip.',
      'Parking is free on-site. The facility also has a fitness center and community program offerings that vary throughout the year. For South Austin players who don\'t want to pay for indoor court access, Dittmar is one of the more accessible options — the waiver-not-membership model removes the friction of signing up for a full city rec membership just to try indoor play.'
    ],
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
    mainImage: 'https://images.pexels.com/photos/29439337/pexels-photo-29439337.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/32975182/pexels-photo-32975182.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/17299531/pexels-photo-17299531.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Historic recreation center featuring 8 outdoor pickleball courts with excellent facilities. Known for its community programs and competitive leagues.',
    amenities: ['Restrooms', 'Parking', 'Historic Building', 'Competitive Leagues', 'Lighting'],
    courtType: 'outdoor',
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
    features: ['Outdoor Courts', 'Competitive Leagues', 'Historic Facility', 'Lighted Courts'],
    accessibility: ['Wheelchair Accessible', 'ADA Compliant'],
    parking: 'Free parking available',
    longDescription: [
      'Pan Am Recreation Center is one of Austin\'s most storied public facilities, housed in a historic building near East 3rd Street in the heart of the city. The center\'s 8 outdoor pickleball courts are among the largest court counts of any City of Austin facility, making it a hub for serious players who want structured competition and consistent open play options.',
      'The courts are set up for competitive play, and Pan Am has earned a reputation as a hub for organized leagues and structured programs. If you\'re looking to improve your game or find regular competition, the league play here draws a consistent crowd of intermediate to advanced players. Drop-in open play is also available — check the City of Austin Parks & Recreation schedule for current times.',
      'Access requires an Austin Recreation Center membership or day pass. Parking is free on-site. The historic building has full restroom facilities. Located at 2100 E. 3rd Street, it\'s convenient to East Austin and central neighborhoods, with easy access from I-35.'
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
    address: '2100 E 3rd Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78702',
    latitude: 30.2644,
    longitude: -97.7206,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: '/images/courts/pan-american-park-main.png',
    images: [
      '/images/courts/pan-american-park-1.png',
      '/images/courts/pan-american-park-2.png',
      '/images/courts/pan-american-park-3.png',
      '/images/courts/pan-american-park-4.png'
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
    longDescription: [
      'Pan American Neighborhood Park sits on East 3rd Street in central East Austin, just a few blocks from the Pan Am Recreation Center indoor facility. The park\'s 6 outdoor pickleball courts are free to use with permanent nets — no reservation, no membership, just show up and play. With 6 courts available, wait times are typically shorter than at smaller neighborhood parks.',
      'The outdoor courts draw a casual to intermediate crowd from East Austin neighborhoods including Govalle, Cherrywood, and the surrounding blocks. The east side pickleball community has grown significantly in recent years, and these courts have become a reliable gathering spot for morning drop-in games. Weekday mornings and late afternoons after 5pm are typically the most active.',
      'The park has restrooms, a playground, picnic areas, and walking trails. Parking is free. The combination of 6 courts with permanent nets, central East Austin location, and zero cost makes this one of the better free outdoor options on that side of I-35. If courts are full, the Pan Am Recreation Center indoor facility is steps away as a backup.'
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
    latitude: 30.2644,
    longitude: -97.7206,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: '/images/courts/rosewood-park-main.png',
    images: [],
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
    longDescription: [
      'Rosewood Neighborhood Park is a community staple in East Austin, located on Rosewood Avenue near the historically significant Rosewood neighborhood. The park has 4 outdoor pickleball courts — 2 with permanent nets and 2 where you\'ll need to bring your own. It\'s a good idea to call ahead or check Austin Parks & Rec schedules to confirm current net availability.',
      'The courts draw a casual to intermediate crowd from the surrounding East Austin neighborhoods, including players from Chestnut, Govalle, and MLK areas. Because East Austin has grown dramatically in recent years, Rosewood has become a convenient option for a lot of newer residents looking for free outdoor courts without making the drive to larger facilities.',
      'The park has restrooms, a playground, picnic areas, and walking trails. Parking is free. No reservation required — first-come, first-served. Weekday mornings tend to be the quietest, while weekend afternoons can get busy. Bring your own net for the 2 unmarked courts to guarantee you can play regardless of what\'s available.'
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
    latitude: 30.1800,
    longitude: -97.8200,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: '/images/courts/dick-nichols-park-main.png',
    images: [
      '/images/courts/dick-nichols-park-1.png',
      '/images/courts/dick-nichols-park-2.png'
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
    longDescription: [
      'Dick Nichols District Park is a 152-acre green space in Southwest Austin off Beckett Road near William Cannon, offering 4 outdoor pickleball courts on well-maintained hard surfaces. The courts don\'t have permanent nets, so you\'ll need to bring your own — portable nets are easy to find online for around $60–100 and are worth the investment if you plan to play here regularly.',
      'The Southwest Austin location serves players from Circle C, Sendera, Shady Hollow, and other neighborhoods in the 78749 area. Given the size of the park and the relative scarcity of free outdoor courts on this side of town, Dick Nichols has become a popular gathering spot for neighborhood pickleball groups. Bring friends and your own net and you\'ll likely have the courts to yourselves on weekday mornings.',
      'The surrounding park has restrooms, walking and biking trails, picnic areas, and sports fields. Parking is free and spacious. The park\'s Southwest Austin location means less congestion than central Austin courts, and the larger footprint gives the overall experience a more relaxed feel. Best for organized groups rather than drop-in pickup play.'
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
    latitude: 30.3500,
    longitude: -97.7500,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: '/images/courts/beverly-sheffield-park-main.png',
    images: [
      '/images/courts/beverly-sheffield-park-1.png',
      '/images/courts/beverly-sheffield-park-2.png',
      '/images/courts/beverly-sheffield-park-3.png'
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
    longDescription: [
      'Beverly S. Sheffield Northwest District Park is a large recreational complex in Northwest Austin, located on Ardath Street near the 183/Jollyville Road corridor. The park has 4 outdoor pickleball courts on hard surface — players need to bring their own nets, as permanent posts are not installed. Portable net systems are recommended if you plan to visit regularly.',
      'Northwest Austin doesn\'t have a ton of free outdoor court options in this quadrant, which makes Sheffield a useful stop for players in the 78759 and surrounding zip codes who don\'t want to drive all the way to a rec center. The courts are well-maintained as part of the larger district park complex, which includes walking trails, sports fields, restrooms, and picnic facilities.',
      'Parking is free. No reservation required — first-come, first-served. Because net setup is required, this location works best for organized groups rather than spontaneous drop-in play. Weekday mornings are typically the most available; weekend afternoons see heavier general park use. For players who live or work on the northwest side, Sheffield fills a gap in the free court landscape.'
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
    latitude: 30.3500,
    longitude: -97.7500,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: '/images/courts/brentwood-park-main.png',
    images: [
      '/images/courts/brentwood-park-1.png',
      '/images/courts/brentwood-park-2.png',
      '/images/courts/brentwood-park-3.png'
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
    longDescription: [
      'Brentwood Neighborhood Park sits in one of Austin\'s most walkable central neighborhoods, just north of 45th Street off Arroyo Seco. The park has 2 courts that can be set up for pickleball on the existing hard surface — players need to bring their own nets, which is worth knowing before you make the trip.',
      'The park draws a mix of Brentwood locals and players from surrounding Hyde Park and Allandale who prefer a low-key neighborhood setting over the busier city rec centers. Courts are free, no reservation required, first-come first-served. Because it\'s only 2 courts and nets aren\'t permanent, it\'s best suited for a group that\'s coming together rather than hoping to find a pickup game.',
      'The surrounding park has restrooms, a playground, walking trails, and tennis courts — making it a good spot for families who want to spread out. Parking is free along Arroyo Seco. Best times are weekday mornings and early afternoons when courts are less crowded.'
    ],
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
    mainImage: '/images/courts/austin-high-tennis-main.png',
    images: [
      '/images/courts/austin-high-tennis-1.png',
      '/images/courts/austin-high-tennis-2.png',
      '/images/courts/austin-high-tennis-3.png'
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
    longDescription: [
      'Austin High Tennis Center sits along West Cesar Chavez Street on the south bank of Lady Bird Lake, giving it one of the best locations of any free court in the city. The 3 outdoor pickleball courts have permanent nets and lines, and they\'re lit for evening play — a major advantage for players who want to avoid Austin\'s midday heat in summer.',
      'The location makes it popular with downtown and Clarksville residents, as well as anyone who pairs their pickleball session with a walk or run on the Butler Hike-and-Bike Trail nearby. Courts are free, first-come first-served, and open to anyone — no membership required. The proximity to downtown means it can get busy on weekday evenings and weekend mornings.',
      'Parking is free in the adjacent lot off Cesar Chavez, though it can fill up on busy days given the trail access. Restrooms are available. With lights for evening play and a prime central location, Austin High is one of the better free court options in the city for players who work downtown or live in central Austin neighborhoods.'
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
    latitude: 30.3200,
    longitude: -97.6800,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: '/images/courts/gus-garcia-1.png',
    images: [
      'https://images.pexels.com/photos/32975185/pexels-photo-32975185.jpeg?w=800&h=600&fit=crop&crop=center'
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
    longDescription: [
      'Gus Garcia Recreation Center serves North Austin from its location on Rundberg Lane, offering 4 indoor pickleball courts in an air-conditioned facility. For anyone who lives in the North Loop, Georgian Acres, or North Lamar corridor, Garcia is the most convenient City of Austin rec center with indoor pickleball — a meaningful advantage in the summer months.',
      'Access is free with an Austin Parks & Recreation membership, which covers all City of Austin rec centers for a single annual or monthly fee. Day passes are also available. The center offers both open play and structured programs — check the current schedule on the Austin Parks & Rec website as times shift seasonally.',
      'The facility has a full fitness center, restrooms, and free parking. The indoor courts attract a broad skill range from beginners to competitive regulars, with open play sessions drawing a social mixed crowd. If you\'re new to pickleball and looking for a low-barrier entry point with no court fees, Garcia is a solid starting point on the north side.'
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
    latitude: 30.3500,
    longitude: -97.7500,
    phone: '(512) 974-6700',
    website: 'https://www.austintexas.gov/department/parks-and-recreation',
    mainImage: 'https://images.pexels.com/photos/32975185/pexels-photo-32975185.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/17299530/pexels-photo-17299530.jpeg?w=800&h=600&fit=crop&crop=center'
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
    longDescription: [
      'Northwest Recreation Center is a City of Austin facility on Northland Drive, serving players in the Northwest Hills and Balcones neighborhoods with 3 indoor pickleball courts. The courts are multi-purpose — they\'re striped for pickleball on a hardwood-style gym floor — but they\'re functional and covered, which matters when Austin temperatures push past 100 degrees in July and August.',
      'Access is free with an Austin Parks & Recreation membership or day pass. The center draws a neighborhood crowd from the surrounding 78731 area, with open play sessions that tend toward casual and social rather than competitive. Check the current schedule on the Austin Parks & Rec site since court times and program offerings shift seasonally.',
      'Parking is free on-site. The facility also has a fitness center and restrooms. With only 3 courts, it\'s smaller than Pan Am or South Austin Rec, but that also means a more relaxed atmosphere and a consistent group of regulars. Good option for Northwest Austin players who want the convenience of a close-by indoor option without driving downtown.'
    ],
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
    mainImage: 'https://images.pexels.com/photos/17299528/pexels-photo-17299528.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/6265592/pexels-photo-6265592.jpeg?w=800&h=600&fit=crop&crop=center'
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
    longDescription: [
      'Mary Moore Searight Metropolitan Park spans nearly 350 acres in South Austin off Slaughter Lane, making it one of the largest parks on the south side of the city. The 3 outdoor pickleball courts are free to use, though players need to bring their own nets — the courts are striped but don\'t have permanent net posts.',
      'The park draws players from the surrounding Slaughter Lane and Manchaca Road corridor, including residents of Shady Hollow, Bauerle Ranch, and other South Austin neighborhoods. Because the park is large and the pickleball area is just one part of it, courts are generally less crowded than smaller neighborhood parks. It\'s a good option for groups who want space and a quieter environment.',
      'Beyond pickleball, the park has extensive walking and biking trails, sports fields, restrooms, and picnic areas — making it well worth the trip for a longer outdoor morning. Parking is free and ample. Slaughter Lane can back up during rush hour, so plan accordingly if you\'re coming from I-35 or Mopac.'
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
    website: 'https://www.goracfit.com',
    mainImage: '/images/courts/racfit-main.png',
    images: [
      '/images/courts/racfit-1.png',
      '/images/courts/racfit-2.png',
      '/images/courts/racfit-3.png',
      '/images/courts/racfit-4.png',
      '/images/courts/racfit-5.png'
    ],
    description: 'RacFit is a premier tennis, pickleball, fitness, and social club in Buda, Texas — now open as of May 2026. The facility features 8 regulation pickleball courts with 4 covered by a steel shade structure, a full-service bar (Courtside Cantina), 22,000 sq ft of indoor space, and on-site ActiveCare. Membership required.',
    longDescription: [
      'RacFit opened in May 2026 in Buda, bringing one of the most comprehensive racquet sport and fitness facilities to the South Austin area. The club features 8 regulation pickleball courts — 4 of which are covered by a steel shade structure — making it a comfortable option year-round, even during Austin\'s hottest months.',
      'Beyond the courts, RacFit is designed as a full social and wellness destination. The Courtside Cantina serves drinks courtside, while 22,000 square feet of indoor space includes fitness rooms, locker rooms, a digital sports room, and on-site ActiveCare. A walking trail and community social spaces round out the experience for members and their families.',
      'Membership is required to play at RacFit. Visit goracfit.com for current membership pricing, availability, and to schedule a tour. The facility serves the Buda and Kyle communities as well as the broader South Austin area.'
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
      monday: 'Check website for current hours',
      tuesday: 'Check website for current hours',
      wednesday: 'Check website for current hours',
      thursday: 'Check website for current hours',
      friday: 'Check website for current hours',
      saturday: 'Check website for current hours',
      sunday: 'Check website for current hours',
      notes: 'RacFit opened in May 2026. Check goracfit.com for current hours and programming schedule.'
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
    mainImage: 'https://images.pexels.com/photos/32975184/pexels-photo-32975184.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/29439326/pexels-photo-29439326.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/17299530/pexels-photo-17299530.jpeg?w=800&h=600&fit=crop&crop=center'
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
    mainImage: 'https://images.pexels.com/photos/29439367/pexels-photo-29439367.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/17299531/pexels-photo-17299531.jpeg?w=800&h=600&fit=crop&crop=center'
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
    mainImage: 'https://images.pexels.com/photos/17299534/pexels-photo-17299534.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/17299530/pexels-photo-17299530.jpeg?w=800&h=600&fit=crop&crop=center'
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
    mainImage: 'https://images.pexels.com/photos/17299533/pexels-photo-17299533.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/17299530/pexels-photo-17299530.jpeg?w=800&h=600&fit=crop&crop=center'
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
    mainImage: '/images/courts/Pickle_Hub-1.png',
    images: [
      'https://images.pexels.com/photos/17299531/pexels-photo-17299531.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/6265592/pexels-photo-6265592.jpeg?w=800&h=600&fit=crop&crop=center'
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
    address: 'Menchaca Road',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    latitude: 30.2400,
    longitude: -97.7800,
    phone: '(512) 382-1849',
    website: 'https://www.bouldinacres.com',
    mainImage: 'https://images.pexels.com/photos/35248381/pexels-photo-35248381.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/29439342/pexels-photo-29439342.jpeg?w=800&h=600&fit=crop&crop=center',
      'https://images.pexels.com/photos/17299531/pexels-photo-17299531.jpeg?w=800&h=600&fit=crop&crop=center'
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
    longDescription: [
      'Bouldin Acres expanded to a second location on Menchaca Road, bringing its signature mix of outdoor pickleball, food, drinks, and Austin entertainment culture to the Slaughter Lane corridor. Like the original South Lamar location, the Menchaca spot positions pickleball as part of a broader social experience rather than a standalone athletic venue.',
      'The 2 outdoor courts operate on a reservation basis, and the setup is designed for casual play alongside food and beverage options on-site. It\'s a good fit for groups that want to play a few games, grab some food, and hang out — not for players who want 3 hours of uninterrupted drill time. The Menchaca location gives South and Southwest Austin players an option closer to home than the original Bouldin Acres on South Lamar.',
      'Given that this is a newer location, hours, reservation procedures, and full amenity details may evolve — check the Bouldin Acres website or social channels for the most current information before visiting. Parking is available on-site. The venue adds a second social pickleball option to an area that was previously underserved by both free and paid court facilities.'
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
    website: 'https://www.balconescountryclub.com',
    email: 'balconespickleball@gmail.com',
    mainImage: 'https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?w=800&h=600&fit=crop&crop=center',
    images: [
      'https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?w=800&h=600&fit=crop&crop=center'
    ],
    description: 'Balcones Country Club features 4 outdoor pickleball courts striped on a tennis court, with weekly open play available for members and guests. Located in Northwest Austin, this private club offers a relaxed setting for recreational pickleball in the Balcones area.',
    amenities: ['Outdoor Courts', 'Weekly Open Play', 'Country Club Amenities', 'Guest Access'],
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
      notes: 'Weekly Open Play for members and guests. Contact the club directly for current open play schedule and membership information.'
    },
    features: ['Membership Required', 'Guest Access', 'Weekly Open Play', 'Outdoor Courts', 'NW Austin'],
    accessibility: ['Contact facility for accessibility information'],
    parking: 'Club parking available',
    longDescription: [
      'Balcones Country Club in Northwest Austin offers 4 pickleball courts striped on an outdoor tennis court, giving members and their guests a solid option for casual play in the 78750 area. The club runs weekly Open Play sessions — one of the few private club settings in NW Austin where guests can access courts without a full membership commitment.',
      'For players living in the Northwest Austin corridor — Balcones, Spicewood Springs, Four Points — this fills a real gap. The area is underserved by public pickleball courts, and the guest-accessible open play makes this a useful option even for non-members who know a member.',
      'This is a private country club, so court access requires either membership or a guest invitation. Reach out directly for current open play times, membership information, and any reservation requirements for member court time outside of open play sessions.'
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