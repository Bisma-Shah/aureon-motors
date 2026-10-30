import { Vehicle, GalleryItem } from '../types/vehicle';

export const VEHICLES: Vehicle[] = [
  {
    id: 'gt-x',
    name: 'AUREON GT-X',
    modelCode: 'GTX-400',
    category: 'Performance',
    categoryLabel: 'Luxury Performance Coupe',
    headline: 'POWER, PERFECTED.',
    description: 'A bold expression of engineering and design. Created for those who demand precision, elegance, and exhilarating performance.',
    detailedOverview: 'The flagship AUREON GT-X is sculpted from aerospace-grade dry carbon fiber and lightweight forged aluminum. Designed from a blank canvas to deliver uncompromising cornering poise and breath-taking aerodynamic stability at high velocities.',
    image: '/src/assets/images/featured_coupe_gtx_1793358308537.jpg',
    specs: {
      power: '620 HP',
      acceleration: '3.2s (0–100 km/h)',
      topSpeed: '320 km/h',
      transmission: '8-Speed Dual-Clutch',
      drivetrain: 'All-Wheel Drive',
      torque: '820 Nm @ 2,200–5,800 RPM',
      curbWeight: '1,540 kg'
    },
    estimatedPrice: '$285,000 USD (Est.)',
    highlights: [
      'Active Variable Carbon Aerodynamics',
      'Torque-Vectoring Rear Mechanical Differential',
      'Ceramic Composite Braking Matrix with Gold Calipers',
      'Adaptive Electro-Hydraulic Suspension Architecture'
    ],
    dimensions: {
      length: '4,690 mm',
      width: '1,960 mm',
      height: '1,280 mm',
      wheelbase: '2,740 mm'
    },
    availableColors: [
      { name: 'Obsidian Matte', hex: '#1C1D21' },
      { name: 'Titanium Silver', hex: '#8F939D' },
      { name: 'Champagne Frost', hex: '#C8A96B' },
      { name: 'Midnight Sapphire', hex: '#16233B' }
    ]
  },
  {
    id: 'v12-r',
    name: 'AUREON V12 R',
    modelCode: 'V12-GT',
    category: 'Grand Touring',
    categoryLabel: 'Grand Touring',
    headline: 'EFFORTLESS CONTINENTAL VELOCITY.',
    description: 'Naturally aspirated quad-cam 6.5L V12 architecture delivering sovereign authority, acoustic grandeur, and transcontinental touring luxury.',
    detailedOverview: 'Engineered for seamless intercontinental journeys, the V12 R merges supreme grand touring refinement with an unyielding 740 horsepower heart. The cabin provides whisper-quiet acoustics at triple-digit cruising speeds.',
    image: '/src/assets/images/vehicle_v12_grandtourer_1793358310510.jpg',
    specs: {
      power: '740 HP',
      acceleration: '2.9s (0–100 km/h)',
      topSpeed: '345 km/h',
      transmission: '8-Speed Seamless Shift',
      drivetrain: 'Rear-Biased Dynamic AWD',
      torque: '760 Nm @ 6,750 RPM',
      curbWeight: '1,680 kg'
    },
    estimatedPrice: '$360,000 USD (Est.)',
    highlights: [
      'Hand-Assembled 6.5L Naturally Aspirated V12',
      'Full Monocoque Acoustic Isolation Shield',
      'Active Rear-Wheel Steer Assistance (±3.5°)',
      'Bespoke Analogue Chronometer Instruments'
    ],
    dimensions: {
      length: '4,820 mm',
      width: '1,980 mm',
      height: '1,295 mm',
      wheelbase: '2,880 mm'
    },
    availableColors: [
      { name: 'Monaco Liquid Silver', hex: '#9AA0A6' },
      { name: 'Verde British Racing', hex: '#1B2C24' },
      { name: 'Obsidian Jet', hex: '#141416' },
      { name: 'Royal Amethyst', hex: '#2A1B30' }
    ]
  },
  {
    id: 'e-vision',
    name: 'AUREON E-VISION',
    modelCode: 'EV-800',
    category: 'Electric',
    categoryLabel: 'Electric Performance',
    headline: 'THE SILENT REVOLUTION.',
    description: 'Quad-motor electric powertrain deploying 1,020 instant horsepower with sub-zero latency and active aerodynamic energy recapture.',
    detailedOverview: 'The E-VISION represents Aureon’s vision of the electric century: an ultra-rigid carbon tub enclosing an 800V silicon-carbide architecture. Capable of recharging 10% to 80% in 14 minutes with instantaneous launch control.',
    image: '/src/assets/images/vehicle_evision_electric_1793358310193.jpg',
    specs: {
      power: '1,020 HP',
      acceleration: '2.1s (0–100 km/h)',
      topSpeed: '330 km/h',
      transmission: 'Direct-Drive 2-Speed Rear / 1-Speed Front',
      drivetrain: 'Quad Independent Motors (Torque Vectoring)',
      torque: '1,420 Nm Instantaneous',
      range: '620 km WLTP (118 kWh Battery)',
      curbWeight: '1,890 kg'
    },
    estimatedPrice: '$295,000 USD (Est.)',
    highlights: [
      '800V Ultra-Fast Architecture (350 kW DC charging)',
      'Active Aerodynamic Air-Curtains with 0.198 Cd',
      'Holographic Head-Up Telemetry Display',
      'Solid-State Battery Thermal Management'
    ],
    dimensions: {
      length: '4,760 mm',
      width: '1,990 mm',
      height: '1,270 mm',
      wheelbase: '2,920 mm'
    },
    availableColors: [
      { name: 'Electric Glacier Blue', hex: '#3B6899' },
      { name: 'Matte Stealth Carbon', hex: '#1A1C20' },
      { name: 'Starlight White Ceramic', hex: '#E2E5EA' },
      { name: 'Solaris Champagne Gold', hex: '#C8A96B' }
    ]
  },
  {
    id: 'x-terra',
    name: 'AUREON X-TERRA',
    modelCode: 'XT-900',
    category: 'SUV',
    categoryLabel: 'Luxury SUV',
    headline: 'DOMINANCE ACROSS HORIZONS.',
    description: 'Elevated all-terrain mastery cloaked in sculpted automotive luxury. Twin-turbocharged V8 hybrid paired with predictive air suspension.',
    detailedOverview: 'X-TERRA transcends traditional SUV paradigms. It marries sovereign desert and mountain conquering capability with five-star cabin acoustics, four individual executive lounge recliners, and refrigerated crystal console.',
    image: '/src/assets/images/vehicle_xterra_suv_1793358310823.jpg',
    specs: {
      power: '680 HP',
      acceleration: '3.6s (0–100 km/h)',
      topSpeed: '295 km/h',
      transmission: '9-Speed Quick-Shift All-Terrain',
      drivetrain: 'Multi-Mode Intelligent Locking 4WD',
      torque: '900 Nm @ 1,800–4,500 RPM',
      curbWeight: '2,320 kg'
    },
    estimatedPrice: '$235,000 USD (Est.)',
    highlights: [
      'Predictive Hydraulic Roll-Control Matrix',
      'Terrain Radar Scanning up to 150m Ahead',
      'Executive 4-Seat First-Class Lounge Seating',
      '3,500 kg Towing Capacity with Dynamic Sway Control'
    ],
    dimensions: {
      length: '5,080 mm',
      width: '2,040 mm',
      height: '1,720 mm',
      wheelbase: '3,070 mm'
    },
    availableColors: [
      { name: 'Anthracite Graphite', hex: '#353942' },
      { name: 'Santorini Sand Gold', hex: '#A39171' },
      { name: 'Nordic Midnight', hex: '#121824' },
      { name: 'Summit Frost Silver', hex: '#CED4DA' }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Aerodynamic Silhouette',
    subtitle: 'AUREON GT-X on Alpine Alpine pass',
    category: 'Exterior Sculpting',
    image: '/src/assets/images/hero_aureon_gtx_1793358308839.jpg',
    aspect: 'wide',
    description: 'Precision-formed body panels channels airflow smoothly over the rear variable aero foil at 300+ km/h.'
  },
  {
    id: 'g-2',
    title: 'Studio Monolith',
    subtitle: 'GT-X Dark Matte Profile',
    category: 'Form & Surface',
    image: '/src/assets/images/featured_coupe_gtx_1793358308537.jpg',
    aspect: 'wide',
    description: 'Low stance, wide rear track, and bespoke forged alloy wheels with gold six-piston ceramic calipers.'
  },
  {
    id: 'g-3',
    title: 'Continental Horizon',
    subtitle: 'V12 R on Pacific Coast Highway',
    category: 'Motion Dynamics',
    image: '/src/assets/images/vehicle_v12_grandtourer_1793358310510.jpg',
    aspect: 'standard',
    description: 'Poise and composure through sweeping coastal bends. Sovereign naturally aspirated V12 acoustic resonance.'
  },
  {
    id: 'g-4',
    title: 'Luminescent Horizon',
    subtitle: 'E-VISION Silicon Architecture',
    category: 'Future Electric',
    image: '/src/assets/images/vehicle_evision_electric_1793358310193.jpg',
    aspect: 'standard',
    description: 'Full-width solid-state laser light signature slicing through concrete subterranean architecture.'
  },
  {
    id: 'g-5',
    title: 'Overland Mastery',
    subtitle: 'X-TERRA Summit Elevation',
    category: 'All-Terrain Luxury',
    image: '/src/assets/images/vehicle_xterra_suv_1793358310823.jpg',
    aspect: 'standard',
    description: 'Commanding views above the morning cloud inversion. Rugged capability framed in tailored luxury.'
  },
  {
    id: 'g-6',
    title: 'Sensory Cockpit',
    subtitle: 'Hand-Milled Titanium & Carbon',
    category: 'Interior Craftsmanship',
    image: '/src/assets/images/gallery_interior_craftsmanship_1793358311394.jpg',
    aspect: 'standard',
    description: 'Tactile knurled rotary controls, perforated aniline leather, and race-derived ergonomics.'
  }
];

export const BRAND_PHILOSOPHY = [
  {
    number: '01',
    title: 'Precision Engineering',
    tagline: 'EVERY DETAIL IS CONSIDERED.',
    description: 'Every mechanical component is subjected to microscopic scrutiny. Aerodynamic surfaces work in tandem with the powertrain to convert physical resistance into purposeful downforce.'
  },
  {
    number: '02',
    title: 'Timeless Design',
    tagline: 'CONTEMPORARY PROPORTIONS MEET ENDURING ELEGANCE.',
    description: 'We reject fleeting automotive trends in favor of disciplined geometry. The lines of an Aureon remain as striking decades later as the day it first touched the road.'
  },
  {
    number: '03',
    title: 'Human-Centered Innovation',
    tagline: 'TECHNOLOGY SHOULD ENHANCE THE DRIVE, NOT DISTRACT.',
    description: 'Intelligent systems operate silently in the background. Haptic switches, crystal-clear optics, and immediate mechanical feedback preserve the visceral connection between driver and vehicle.'
  }
];

export const BRAND_STATS = [
  { value: '620', unit: 'HP', label: 'PEAK CONCEPT OUTPUT' },
  { value: '3.2', unit: 'SEC', label: '0–100 KM/H VELOCITY' },
  { value: '320', unit: 'KM/H', label: 'MAXIMUM TOP SPEED' },
  { value: '100%', unit: 'INTENTION', label: 'PURPOSEFUL CRAFTSMANSHIP' }
];
