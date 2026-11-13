/*
  Every official City of Austin (Parks and Recreation) pickleball location, copied from
  https://www.austintexas.gov/parks/programs/pickleball on Nov 13, 2026.

  Keep the wording close to the city's. When the city page changes, update CITY_COURTS_CHECKED
  and re-check the matching entries in data/courts.ts (slug links below).
  The city page does not state fees for rec-center open play, so we don't call those free.
*/

export const CITY_COURTS_CHECKED = 'November 13, 2026'
export const CITY_COURTS_SOURCE = 'https://www.austintexas.gov/parks/programs/pickleball'

export type CityParkCourt = {
  name: string
  address: string
  zip: string
  courts: string
  nets: 'Dedicated' | 'Net system' | 'Bring your own' | 'Not included' | 'Not stated'
  openPlay: string
  lighted: boolean
  note?: string
  /** PB court page, when we have one */
  slug?: string
}

export const CITY_PARK_COURTS: CityParkCourt[] = [
  {
    name: 'Austin High Tennis Center',
    address: '2001 W. Cesar Chavez',
    zip: '78703',
    courts: '3 dedicated',
    nets: 'Dedicated',
    openPlay: 'School year: Mon–Fri 5:30–10 p.m. Summer: daily 7 a.m.–10 p.m.',
    lighted: true,
    note: 'Shared with Austin ISD. No public play during AISD events.',
    slug: 'austin-high-tennis',
  },
  {
    name: 'Balcones District Park',
    address: '12017 Amherst Dr.',
    zip: '78759',
    courts: '1 multi-purpose court striped for pickleball',
    nets: 'Bring your own',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: false,
  },
  {
    name: 'Beverly S. Sheffield Northwest District Park',
    address: '7000 Ardath St.',
    zip: '78757',
    courts: '2 multi-purpose, striped for 4',
    nets: 'Net system',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: true,
    slug: 'beverly-sheffield-park',
  },
  {
    name: 'Brentwood Neighborhood Park',
    address: '6710 Arroyo Seco',
    zip: '78757',
    courts: '1 multi-purpose, striped for 2',
    nets: 'Bring your own',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: true,
    slug: 'brentwood-park',
  },
  {
    name: 'Delta Pocket Park',
    address: '2325 Donley Dr.',
    zip: '78758',
    courts: '1 dedicated',
    nets: 'Dedicated',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: false,
  },
  {
    name: 'Dick Nichols District Park',
    address: '8011 Beckett Rd.',
    zip: '78749',
    courts: '2 multi-purpose, striped for 5',
    nets: 'Net system',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: true,
    slug: 'dick-nichols-park',
  },
  {
    name: 'Don Baylor Neighborhood Park',
    address: '2008 Enfield Rd.',
    zip: '78703',
    courts: '1 multi-purpose, striped for 2',
    nets: 'Net system',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: false,
  },
  {
    name: 'Eastside Pocket Park',
    address: '4617 Tannehill Ln.',
    zip: '78702',
    courts: '1 dedicated',
    nets: 'Dedicated',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: false,
  },
  {
    name: 'Gus Garcia District Park',
    address: '1201 E. Rundberg Ln.',
    zip: '78753',
    courts: '1 multi-purpose, striped for 2',
    nets: 'Not stated',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: false,
    slug: 'gus-garcia-rec',
  },
  {
    name: 'Hancock Recreation Center (outdoor court)',
    address: '811 E. 41st St.',
    zip: '78751',
    courts: '1 multi-purpose, striped for 2',
    nets: 'Not stated',
    openPlay: 'School year: Mon–Fri 7 a.m.–2:30 p.m. and 6:30–8:30 p.m.; Sat–Sun 7 a.m.–8:30 p.m. Summer and camp days: Mon–Fri 6:30–8:30 p.m.; Sat–Sun 7 a.m.–8:30 p.m.',
    lighted: false,
  },
  {
    name: 'Little Zilker Neighborhood Park',
    address: '2016 Bluebonnet Ln.',
    zip: '78704',
    courts: '1 multi-purpose, striped for 4',
    nets: 'Net system',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: true,
    slug: 'little-zilker',
  },
  {
    name: 'Mary Frances Baylor Clarksville Pocket Park',
    address: '1811 W. 11th St.',
    zip: '78703',
    courts: '1 dedicated',
    nets: 'Dedicated',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: false,
  },
  {
    name: 'Mary Moore Searight Metro Park',
    address: '907 W. Slaughter Ln.',
    zip: '78748',
    courts: '1 multi-purpose, striped for 4',
    nets: 'Net system',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: false,
    slug: 'mary-moore-searight',
  },
  {
    name: 'Mountain View Neighborhood Park',
    address: '8900 Westerkirk Dr.',
    zip: '78750',
    courts: '1 multi-purpose, striped for 4',
    nets: 'Net system',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: false,
  },
  {
    name: 'North Lake Creek Neighborhood Park',
    address: '9201 North Lake Creek',
    zip: '78753',
    courts: '1 multi-purpose, striped for 1',
    nets: 'Net system',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: false,
  },
  {
    name: 'Pan American Neighborhood Park',
    address: '307 Chicon St.',
    zip: '78702',
    courts: '3 dedicated + 1 multi-purpose striped for 1',
    nets: 'Dedicated',
    openPlay: 'Mon, Wed, Fri 7 a.m.–10 p.m. Tue, Thu 7 a.m.–7 p.m. Sat–Sun 7–9 a.m.',
    lighted: true,
    note: 'Roller derby practice: Tue/Thu 7–10 p.m. and Sat/Sun 9 a.m.–noon.',
    slug: 'pan-american-park',
  },
  {
    name: 'Patterson Neighborhood Park',
    address: '4200 Brookview Rd.',
    zip: '78722',
    courts: '1 multi-purpose, striped for 2',
    nets: 'Net system',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: true,
  },
  {
    name: 'Rosewood Neighborhood Park',
    address: '2300 Rosewood Ave.',
    zip: '78702',
    courts: '2 dedicated + 1 multi-purpose striped for 2',
    nets: 'Not included',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: true,
    slug: 'rosewood-park',
  },
  {
    name: 'Shipe Neighborhood Park',
    address: '4400 Avenue G',
    zip: '78751',
    courts: '1 multi-purpose, striped for 2',
    nets: 'Net system',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: true,
  },
  {
    name: 'South Austin Neighborhood Park',
    address: '1100 Cumberland Rd.',
    zip: '78704',
    courts: '2 dedicated',
    nets: 'Dedicated',
    openPlay: 'Daily 8 a.m.–10 p.m.',
    lighted: true,
    slug: 'south-austin-rec',
  },
  {
    name: 'Springwoods Neighborhood Park',
    address: '9117 Anderson Mill Rd.',
    zip: '78729',
    courts: '1 multi-purpose, striped for 2',
    nets: 'Not included',
    openPlay: 'Daily 7 a.m.–10 p.m.',
    lighted: false,
  },
]

/** The city's reservable (paid) facility, listed separately so the free table stays free. */
export const CITY_RESERVABLE = {
  name: 'Austin Tennis and Pickleball Center at Walnut Creek Sports Park',
  address: '7800 Johnny Morris Rd., 78724',
  detail: '8 lighted outdoor courts. Reservations required. Mon–Fri 8:30 a.m.–10 p.m., Sat–Sun 8:30 a.m.–9 p.m.',
  slug: 'austin-tennis-pickleball',
}

export type RecOpenPlay = {
  name: string
  address: string
  phone: string
  courts: string
  openPlay: string
  note?: string
  slug?: string
}

export const CITY_REC_OPEN_PLAY: RecOpenPlay[] = [
  { name: 'Alamo Recreation Center', address: '2100 Alamo St.', phone: '(512) 974-5680', courts: 'Covered outdoor basketball pavilion, temporary court markers', openPlay: 'Thu 4–8 p.m.' },
  { name: 'Austin Recreation Center', address: '1301 Shoal Creek Blvd.', phone: '(512) 978-2370', courts: '3 multi-purpose indoor', openPlay: 'Mon and Fri 9 a.m.–noon' },
  { name: 'Dittmar Recreation Center', address: '1009 W. Dittmar Rd.', phone: '(512) 974-6090', courts: '4 multi-purpose indoor', openPlay: 'Tue and Thu noon–3 p.m.; Sat 10 a.m.–2 p.m.', slug: 'dittmar-rec' },
  { name: 'Dottie Jordan Recreation Center', address: '2803 Loyola Ln.', phone: '(512) 978-2380', courts: '2 outdoor tennis courts', openPlay: 'Thu 4–7 p.m.', note: 'Nets, paddles and balls to check out until 6 p.m.' },
  { name: 'George Morales Dove Springs Recreation Center', address: '5801 Ainez Dr.', phone: '(512) 974-3840', courts: '3 indoor', openPlay: 'Mon 9 a.m.–noon; Wed 6–8:30 p.m.; Fri 9 a.m.–noon' },
  { name: 'Givens Recreation Center', address: '3811 E. 12th St.', phone: '(512) 974-2430', courts: '1 multi-purpose outdoor, striped for 4', openPlay: 'No set open play listed; call' },
  { name: 'Gus Garcia Recreation Center', address: '1201 E. Rundberg Ln.', phone: '(512) 978-2525', courts: '1 multi-purpose indoor, striped for 3', openPlay: 'Tue and Thu 11 a.m.–1 p.m.; Sat 10 a.m.–noon; Sun 1–2:30 p.m.', slug: 'gus-garcia-rec' },
  { name: 'Montopolis Recreation and Community Center', address: '1200 Montopolis Dr.', phone: '(512) 978-2300', courts: '1 multi-purpose indoor, striped for 2', openPlay: 'Mon 6–9 p.m.; Sat 10 a.m.–noon' },
  { name: 'Northwest Recreation Center', address: '2913 Northland Dr.', phone: '(512) 974-6972', courts: '1 multi-purpose indoor, striped for 3', openPlay: 'Mon and Wed 10:30 a.m.–1:30 p.m.', slug: 'northwest-rec' },
  { name: 'Oswaldo A.B. Cantu/Pan American Recreation Center', address: '2100 E. 3rd St.', phone: '(512) 978-2425', courts: 'Indoor', openPlay: 'Varsity Generation (older adults): Mon 10 a.m.–noon' },
  { name: 'Parque Zaragoza Recreation Center', address: '2608 Gonzales St.', phone: '(512) 978-2460', courts: '3 indoor', openPlay: 'Mon 6–8:30 p.m.', note: 'Nets, paddles and balls to check out at the front desk.' },
  { name: 'South Austin Recreation Center', address: '1100 Cumberland Rd.', phone: '(512) 978-2440', courts: '1 multi-purpose indoor, striped for 4', openPlay: 'All ages: Tue 7–9 p.m. Varsity Generation: Tue and Fri 11 a.m.–2 p.m.', slug: 'south-austin-rec' },
]
