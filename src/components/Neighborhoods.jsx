import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ArrowRight,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  AlertCircle,
  Home,
  Compass,
} from 'lucide-react'
import '../styles/Neighborhoods.css'

// The 7 Hampton Roads Cities — Practical Starting Points & Authentic Context
const citiesData = [
  {
    id: 'vb',
    name: 'Virginia Beach',
    tagline: 'Coastal Energy, Endless Shorelines & 18 Distinct Communities',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=82',
    vibe: 'Coastal Living & Established Suburbs',
    representativeAreas: 'Oceanfront, Chic’s Beach, Kempsville, Great Neck, Salem, Red Mill',
    typicalHousing: 'From attainable 1970s brick ranches in Kempsville to beach cottages and modern coastal subdivisions.',
    description:
      'The largest city in Hampton Roads. Stretching from the vibrant resort oceanfront and tranquil North End to calm Chesapeake Bay waters at Chic’s Beach, central suburban enclaves in Kempsville, and open southern acreage in Princess Anne.',
    highlights: ['Oceanfront Boardwalk & Surf', 'Chesapeake Bay Boating & Chic’s Beach', 'First Landing State Park Trails', 'Town Center Urban Dining'],
    tradeoffSummary: 'Popular coastal zones have variable flood insurance maps; inland neighborhoods offer strong lot sizes and no resort traffic.',
    searchUrl: 'https://jakemainesrealtor.com/virginia/virginia-beach/',
  },
  {
    id: 'chesapeake',
    name: 'Chesapeake',
    tagline: 'Spacious Suburban Comfort, Active Parks & Waterway Canals',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=82',
    vibe: 'Suburban Serenity & Family Communities',
    representativeAreas: 'Great Bridge, Greenbrier, Western Branch, Hickory, Deep Creek',
    typicalHousing: 'Generous 3- to 5-bedroom single-family homes, established split-levels, and modern master-planned communities with two-car garages.',
    description:
      'Known for spacious residential lot sizes, extensive community parks, and the scenic Intracoastal Waterway winding through Great Bridge and Greenbrier. A staple choice for buyers wanting quiet suburban neighborhoods.',
    highlights: ['Intracoastal Waterway Boating', 'Chesapeake City Park & Arboretum', 'Greenbrier Shopping Corridor', 'Dismal Swamp Canal Trail'],
    tradeoffSummary: 'Rush-hour bridge traffic across the High-Rise Bridge and Battlefield Boulevard requires travel planning during peak times.',
    searchUrl: 'https://jakemainesrealtor.com/virginia/virginia-beach/',
  },
  {
    id: 'norfolk',
    name: 'Norfolk',
    tagline: 'The Cultural Epicenter — Arts, Waterfront Dining & Historic Ghent',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=82',
    vibe: 'Urban Energy & Historic Maritime Character',
    representativeAreas: 'Ghent, Freemason, Colonial Place, Ocean View, Larchmont',
    typicalHousing: 'Victorian row houses, historic brownstones, brick townhomes, and coastal cottages along Ocean View on the Chesapeake Bay.',
    description:
      'A dynamic urban waterfront hub featuring cobblestone streets in historic Freemason, tree-lined Victorian brownstones in Ghent, a thriving arts district in NEON, and major maritime and medical employment centers.',
    highlights: ['Chrysler Museum of Art', 'Historic Ghent & Colley Ave Dining', 'Downtown Waterfront Promenade & Ferry', 'Ocean View Bayfront Beaches'],
    tradeoffSummary: 'Historic properties feature smaller private yards and street parking; check historical district exterior guidelines.',
    searchUrl: 'https://jakemainesrealtor.com/virginia/virginia-beach/',
  },
  {
    id: 'portsmouth',
    name: 'Portsmouth',
    tagline: 'Centuries of Maritime Heritage, Historic Architecture & Seawall Views',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=82',
    vibe: 'Historic Charm & Value',
    representativeAreas: 'Olde Towne, Churchland, Port Norfolk, Park Manor',
    typicalHousing: 'Remarkably preserved 18th- and 19th-century homes in Olde Towne alongside classic mid-century ranches in Churchland.',
    description:
      'Located directly across the Elizabeth River from Norfolk. Olde Towne Portsmouth offers one of the largest collections of historic homes in Virginia, accompanied by a scenic seawall promenade and pedestrian ferry access.',
    highlights: ['Olde Towne Historic District', 'Naval Shipyard Museum', 'Seawall Waterfront Walk', 'Ferry to Downtown Norfolk'],
    tradeoffSummary: 'Downtown tunnel tolls to Norfolk should be factored into daily work commutes; Churchland offers non-toll routes via Western Freeway.',
    searchUrl: 'https://jakemainesrealtor.com/virginia/virginia-beach/',
  },
  {
    id: 'suffolk',
    name: 'Suffolk',
    tagline: 'Expansive Horizons, Open Acreage & Thriving New Centers',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=82',
    vibe: 'Spacious Living & Modern Suburban Growth',
    representativeAreas: 'Harbour View, North Suffolk, Driver, Downtown Historic, Holland',
    typicalHousing: 'Modern master-planned communities and townhomes in North Suffolk, plus large-lot country homes and acreage in the south.',
    description:
      'The largest land-area city in Virginia. From golf-course communities in North Suffolk with quick commute access across the Monitor-Merrimac bridge-tunnel, to peaceful acreage living and Great Dismal Swamp nature reserves.',
    highlights: ['Great Dismal Swamp Reserve', 'Harbour View Golf Communities', 'Expansive Acreage Living', 'Nansemond River Access'],
    tradeoffSummary: 'Southern Suffolk involves longer driving distances to commercial centers; North Suffolk offers much quicker highway connectivity.',
    searchUrl: 'https://jakemainesrealtor.com/virginia/virginia-beach/',
  },
  {
    id: 'hampton',
    name: 'Hampton',
    tagline: 'Coastal Horizons, Historic Fort Monroe & Aerospace Leadership',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=82',
    vibe: 'Bayside History & Coastal Charm',
    representativeAreas: 'Buckroe Beach, Phoebus, Fox Hill, Grandview, Coliseum Central',
    typicalHousing: 'Cottages and bungalows near the Chesapeake Bay, established suburban brick homes, and newer coastal infill developments.',
    description:
      'Situated at the mouth of the Chesapeake Bay, Hampton features pristine public sandy shores at Buckroe Beach, the rich historic ramparts of Fort Monroe National Monument, and the creative walkable shops of historic Phoebus.',
    highlights: ['Fort Monroe National Monument', 'Buckroe Beach Boardwalk & Pier', 'NASA Langley & Langley AFB', 'Phoebus Arts & Dining'],
    tradeoffSummary: 'Crossing the Hampton Roads Bridge-Tunnel (HRBT) to Norfolk during rush hours or summer weekends requires route awareness.',
    searchUrl: 'https://jakemainesrealtor.com/virginia/virginia-beach/',
  },
  {
    id: 'newport-news',
    name: 'Newport News',
    tagline: 'James River Shorelines, High-Tech Centers & Parklands',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=82',
    vibe: 'Riverfront Industry & Scenic Parks',
    representativeAreas: 'Hilton Village, City Center at Oyster Point, Denbigh, Riverside',
    typicalHousing: 'English village cottages in historic Hilton Village, riverfront colonials along the James, and attainable starter homes in Denbigh.',
    description:
      'Home to Newport News Shipbuilding and the tech corridor at Jefferson Lab. Features the sprawling 7,700-acre Newport News Park, historic Hilton Village near the James River, and bustling shopping at City Center at Oyster Point.',
    highlights: ['Newport News Park & Trails', 'Historic Hilton Village & Pier', 'City Center at Oyster Point', 'Mariners’ Museum & Noland Trail'],
    tradeoffSummary: 'Linear city layout spans over 20 miles along the Peninsula, so daily drive times vary depending on which end of town you live in.',
    searchUrl: 'https://jakemainesrealtor.com/virginia/virginia-beach/',
  },
]

// The 18 verified Virginia Beach neighborhoods grouped by lifestyle
const vbNeighborhoodClusters = [
  {
    cluster: 'Coastal & Oceanfront Living',
    desc: 'Unrivaled surf access, ocean views, and beach community atmosphere.',
    items: [
      { name: 'Oceanfront', tag: 'Resort District', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/ocean-front/' },
      { name: 'North End', tag: 'Premier Coastal', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/north-end/' },
      { name: 'Croatan', tag: 'Surfing Enclave', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/croatan/' },
      { name: 'Sandbridge', tag: 'Secluded Beach Retreat', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/sandbridge/' },
      { name: 'Chic’s Beach', tag: 'Chesapeake Bayfront', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/chics-beach/' },
    ],
  },
  {
    cluster: 'Established Bay & Waterfront Communities',
    desc: 'Deepwater frontage, private boat docks, and mature canopy neighborhoods.',
    items: [
      { name: 'Great Neck', tag: 'Waterfront & Schools', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/great-neck/' },
      { name: 'Little Neck', tag: 'Scenic River Peninsula', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/little-neck/' },
      { name: 'Thoroughgood', tag: 'Historic Western Bay', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/thoroughgood/' },
      { name: 'Bayside', tag: 'Classic Bay Setting', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/bayside/' },
      { name: 'Lynnhaven', tag: 'Central Waterways', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/lynnhaven/' },
    ],
  },
  {
    cluster: 'Town Center & Central Suburban Corridors',
    desc: 'Walkable dining, high-rise living, and central commuting convenience.',
    items: [
      { name: 'Town Center', tag: 'Urban Downtown Hub', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/town-center/' },
      { name: 'Aragona Village', tag: 'Central Suburban', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/aragona-village/' },
      { name: 'Kempsville', tag: 'Established Family Hub', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/kempsville/' },
    ],
  },
  {
    cluster: 'South Virginia Beach & Family Enclaves',
    desc: 'Spacious yards, modern master-planned neighborhoods, and country calm.',
    items: [
      { name: 'Princess Anne', tag: 'Scenic Country Estates', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/princess-anne/' },
      { name: 'Red Mill', tag: 'South VB Hub', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/red-mill/' },
      { name: 'Salem', tag: 'Suburban Convenience', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/salem/' },
      { name: 'Green Run', tag: 'Active Community Parks', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/green-run/' },
      { name: 'Timberlake', tag: 'Lakeside Residential', url: 'https://jakemainesrealtor.com/virginia-beach-neighborhoods/timberlake/' },
    ],
  },
]

// Seven Homebuyer Discovery Questions (Phase 2C Item 4)
// Fair-housing compliant discovery covering Budget, Areas, Home Type, Commute, Lifestyle, Priorities, Timeline.
const quizQuestions = [
  {
    id: 1,
    topic: 'Budget',
    title: 'Comfortable Homebuying Budget',
    subtitle: 'What price tier feels most sustainable and comfortable for your next purchase?',
    options: [
      {
        id: 'under_400k',
        label: 'Under $400K (Starter & Value)',
        desc: 'Attainable single-family ranches, townhomes & established condos',
        cityMatch: ['portsmouth', 'hampton', 'newport-news', 'norfolk', 'chesapeake'],
      },
      {
        id: '400k_650k',
        label: '$400K – $650K (Core Hampton Roads)',
        desc: 'Established suburban neighborhoods, traditional builds & upgraded townhomes',
        cityMatch: ['vb', 'chesapeake', 'suffolk', 'norfolk'],
      },
      {
        id: '650k_900k',
        label: '$650K – $900K (Move-Up & Space)',
        desc: 'Spacious 4+ BR homes, generous lots, and premier residential pockets',
        cityMatch: ['vb', 'chesapeake', 'suffolk'],
      },
      {
        id: '900k_plus',
        label: '$900K+ (Executive & Waterfront)',
        desc: 'Waterfront frontage, deepwater access, oceanfront, or custom acreage',
        cityMatch: ['vb', 'norfolk', 'chesapeake'],
      },
    ],
  },
  {
    id: 2,
    topic: 'Geography',
    title: 'Preferred Hampton Roads Areas',
    subtitle: 'Which geographic section of Hampton Roads appeals to you most?',
    options: [
      {
        id: 'southside_coastal',
        label: 'Virginia Beach & Chesapeake',
        desc: 'Atlantic shoreline, calm bay waters, and expansive Southside suburban neighborhoods',
        cityMatch: ['vb', 'chesapeake'],
      },
      {
        id: 'urban_waterfront',
        label: 'Norfolk & Portsmouth',
        desc: 'Historic districts, urban walkability, cultural arts, and active riverfronts',
        cityMatch: ['norfolk', 'portsmouth'],
      },
      {
        id: 'western_growth',
        label: 'Suffolk & Western Branch',
        desc: 'New master-planned communities, open horizons, and semi-rural elbow room',
        cityMatch: ['suffolk', 'chesapeake'],
      },
      {
        id: 'peninsula',
        label: 'Hampton & Newport News',
        desc: 'James River vistas, historic towns, aerospace hubs, and bay beaches',
        cityMatch: ['hampton', 'newport-news'],
      },
      {
        id: 'open_minded',
        label: 'Open to Any Hampton Roads City',
        desc: 'Show me the best fit across all seven cities based on my lifestyle and budget',
        cityMatch: ['vb', 'chesapeake', 'norfolk', 'portsmouth', 'suffolk', 'hampton', 'newport-news'],
      },
    ],
  },
  {
    id: 3,
    topic: 'Home Type',
    title: 'Home Type & Space Requirements',
    subtitle: 'What architectural layout and property configuration best fits your household?',
    options: [
      {
        id: 'suburban_yard',
        label: 'Traditional Single-Family with Yard',
        desc: 'Established two-story or colonial build with private outdoor yard space',
        cityMatch: ['chesapeake', 'vb', 'suffolk'],
      },
      {
        id: 'ranch_onestory',
        label: 'Single-Story Brick Ranch / Cottage',
        desc: 'Accessible single-level living, manageable upkeep, and classic mid-century construction',
        cityMatch: ['vb', 'portsmouth', 'newport-news', 'hampton'],
      },
      {
        id: 'townhome_lowmaint',
        label: 'Low-Maintenance Townhome or Condo',
        desc: 'Lock-and-leave living with exterior maintenance taken care of',
        cityMatch: ['norfolk', 'vb', 'newport-news', 'suffolk'],
      },
      {
        id: 'moveup_large',
        label: '4+ Bedroom Move-Up with Garage',
        desc: 'Generous square footage, flex work space, 2-car garage, and room to grow',
        cityMatch: ['chesapeake', 'vb', 'suffolk'],
      },
    ],
  },
  {
    id: 4,
    topic: 'Commute',
    title: 'Work Location & Commute Priorities',
    subtitle: 'Where is your primary daily destination, and how do you prefer to travel?',
    options: [
      {
        id: 'naval_bases',
        label: 'Naval Station Norfolk / Little Creek / Portsmouth',
        desc: 'Need quick Southside commute access without crossing major bridge-tunnels',
        cityMatch: ['norfolk', 'vb', 'portsmouth'],
      },
      {
        id: 'peninsula_shipyard',
        label: 'Newport News Shipbuilding / NASA / Peninsula',
        desc: 'Convenient to Peninsula employment corridors and I-64 transit',
        cityMatch: ['newport-news', 'hampton'],
      },
      {
        id: 'southside_central',
        label: 'Central VB / Town Center / Chesapeake',
        desc: 'Local Southside business corridors and shopping centers',
        cityMatch: ['vb', 'chesapeake'],
      },
      {
        id: 'remote_minimal',
        label: 'Remote Work / Flexible Commute',
        desc: 'Working from home; commute time is not a major restriction',
        cityMatch: ['vb', 'suffolk', 'chesapeake', 'hampton'],
      },
    ],
  },
  {
    id: '5',
    topic: 'Lifestyle',
    title: 'Lifestyle & Neighborhood Atmosphere',
    subtitle: 'What daily community environment feels most natural and appealing?',
    options: [
      {
        id: 'beach_water',
        label: 'Laid-Back Coastal Beach Community',
        desc: 'Flip-flops, morning surf, bay sunsets, and waterfront recreation',
        cityMatch: ['vb', 'hampton'],
      },
      {
        id: 'suburban_peace',
        label: 'Quiet Suburban Neighborhood & Cul-de-Sacs',
        desc: 'Mature tree canopies, neighborhood bike rides, and community parks',
        cityMatch: ['chesapeake', 'vb', 'newport-news'],
      },
      {
        id: 'walkable_culture',
        label: 'Walkable Urban Enclave & Historic Vibe',
        desc: 'Step out to local cafes, bakeries, indie dining, and historic streetscapes',
        cityMatch: ['norfolk', 'portsmouth'],
      },
      {
        id: 'semirural_elbow',
        label: 'Semi-Rural Openness & Space Between Homes',
        desc: 'Generous acreage, farm stands, privacy, and wide open horizons',
        cityMatch: ['suffolk', 'chesapeake', 'vb'],
      },
    ],
  },
  {
    id: 6,
    topic: 'Household Needs',
    title: 'Important Household Considerations',
    subtitle: 'Beyond the home itself, what property factor is critical to your daily life?',
    options: [
      {
        id: 'fenced_pets',
        label: 'Large Fenced Yard for Pets & Gardening',
        desc: 'Safe enclosed outdoor room for dogs to run, kids to play, or vegetable beds',
        cityMatch: ['chesapeake', 'suffolk', 'vb'],
      },
      {
        id: 'no_hoa_rules',
        label: 'Low / No Restrictive HOA Rules',
        desc: 'Freedom for parking work trucks, storing boats, or keeping backyard sheds',
        cityMatch: ['vb', 'portsmouth', 'hampton', 'suffolk'],
      },
      {
        id: 'boat_kayak',
        label: 'Quick Access to Water, Boat Ramps & Kayaking',
        desc: 'Living within minutes of public launches, fishing piers, or boat slips',
        cityMatch: ['vb', 'hampton', 'norfolk', 'chesapeake'],
      },
      {
        id: 'shopping_convenience',
        label: 'Quick Proximity to Groceries, Dining & Errand Hubs',
        desc: '5- to 10-minute access to supermarkets, healthcare, and retail',
        cityMatch: ['vb', 'norfolk', 'chesapeake', 'newport-news'],
      },
    ],
  },
  {
    id: 7,
    topic: 'Timeline',
    title: 'Your Moving Timeline',
    subtitle: 'When are you hoping to be settled into your next home?',
    options: [
      {
        id: 'immediate',
        label: 'Ready within 30–60 Days',
        desc: 'Actively searching, pre-approved or cash ready, eager to tour properties',
      },
      {
        id: 'planning',
        label: 'Planning for 3–6 Months',
        desc: 'Evaluating neighborhoods, building down payment, timing lease end',
      },
      {
        id: 'relocating',
        label: 'Relocating to Hampton Roads / Military PCS',
        desc: 'Moving from out-of-area and need local perspective on neighborhoods',
      },
      {
        id: 'exploring',
        label: 'Exploring Options & Future Planning',
        desc: 'Gathering local market perspective for a future transition',
      },
    ],
  },
]

export default function Neighborhoods() {
  const [activeCityId, setActiveCityId] = useState('vb')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizCompleted, setQuizCompleted] = useState(false)

  const activeCity = citiesData.find((c) => c.id === activeCityId) || citiesData[0]

  // Handle Quiz selection
  const handleSelectOption = (questionId, option) => {
    const updated = { ...quizAnswers, [questionId]: option }
    setQuizAnswers(updated)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRetakeQuiz = () => {
    setQuizAnswers({})
    setCurrentQuestion(0)
    setQuizCompleted(false)
  }

  // Calculate top matches based on user discovery answers
  const computeMatches = () => {
    const scores = { vb: 0, chesapeake: 0, norfolk: 0, portsmouth: 0, suffolk: 0, hampton: 0, 'newport-news': 0 }

    Object.values(quizAnswers).forEach((ans) => {
      if (ans.cityMatch) {
        ans.cityMatch.forEach((cid) => {
          if (scores[cid] !== undefined) scores[cid] += 1
        })
      }
    })

    const sortedCityIds = Object.keys(scores).sort((a, b) => scores[b] - scores[a])
    const topThree = sortedCityIds.slice(0, 3).map((id, index) => {
      const city = citiesData.find((c) => c.id === id)
      const pct = 96 - index * 6
      return { ...city, matchPct: `${pct}% Match` }
    })

    return topThree
  }

  const topMatches = quizCompleted ? computeMatches() : []

  return (
    <div className="nb-experience">
      {/* 1. CINEMATIC HERO */}
      <section className="nb-hero" aria-labelledby="nb-hero-title">
        <div className="nb-hero-bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85"
            alt="Hampton Roads coastal neighborhood"
            className="nb-hero-img"
          />
          <div className="nb-hero-overlay" />
        </div>

        <div className="container nb-hero-content">
          <div className="nb-badge">
            <span className="nb-badge-dot" />
            ALL 7 HAMPTON ROADS CITIES · COMMUNITY DISCOVERY
          </div>

          <h1 id="nb-hero-title" className="nb-hero-title">
            Discover Your Sense of Place.<br />
            <span>Explore Hampton Roads.</span>
          </h1>

          <p className="nb-hero-subtitle">
            From calm Chesapeake Bay beaches and historic cobblestone avenues to quiet suburban cul-de-sacs
            and open acreage. Explore the seven cities and 18 Virginia Beach communities that define coastal
            Virginia living.
          </p>

          <div className="nb-hero-actions">
            <a
              href="#neighborhood-quiz"
              className="btn btn-primary nb-btn-main"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('neighborhood-quiz')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Take the 7-Question Discovery Quiz
              <ArrowRight size={16} />
            </a>

            <a
              href="#city-explorer"
              className="btn btn-outline nb-btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('city-explorer')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore All 7 Cities
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. SEVEN-QUESTION INTERACTIVE DISCOVERY QUIZ (Phase 2C Item 4) */}
      <section className="nb-quiz-section" id="neighborhood-quiz" aria-labelledby="nb-quiz-heading">
        <div className="container">
          <div className="section-header">
            <p className="label-overline">Interactive Homebuyer Discovery</p>
            <hr className="gold-rule center" aria-hidden="true" />
            <h2 className="display-2" id="nb-quiz-heading">
              Find Your <em>Hampton Roads Match</em>
            </h2>
            <p>
              Answer seven key homebuyer questions covering budget, preferred areas, home style, commute,
              and daily lifestyle. Results provide multiple relevant options with clear explanations and trade-offs.
            </p>
          </div>

          <div className="nb-quiz-container">
            {!quizCompleted ? (
              <div className="nb-quiz-card">
                {/* Progress bar */}
                <div className="nb-quiz-progress-wrap">
                  <div className="nb-quiz-progress-meta">
                    <span className="nb-quiz-step-count">
                      Question {currentQuestion + 1} of {quizQuestions.length} · {quizQuestions[currentQuestion].topic}
                    </span>
                    <span className="nb-quiz-pct">
                      {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete
                    </span>
                  </div>
                  <div className="nb-quiz-progress-track">
                    <div
                      className="nb-quiz-progress-fill"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question title */}
                <div className="nb-quiz-q-header">
                  <span className="nb-quiz-q-category">QUESTION 0{currentQuestion + 1} · {quizQuestions[currentQuestion].title}</span>
                  <h3 className="nb-quiz-q-title">{quizQuestions[currentQuestion].subtitle}</h3>
                </div>

                {/* Options grid */}
                <div className="nb-quiz-options-grid" role="radiogroup" aria-label={quizQuestions[currentQuestion].title}>
                  {quizQuestions[currentQuestion].options.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      role="radio"
                      aria-checked={quizAnswers[quizQuestions[currentQuestion].id]?.id === opt.id}
                      className={`nb-quiz-option-card ${
                        quizAnswers[quizQuestions[currentQuestion].id]?.id === opt.id ? 'is-selected' : ''
                      }`}
                      onClick={() => handleSelectOption(quizQuestions[currentQuestion].id, opt)}
                    >
                      <div className="nb-option-dot" />
                      <div className="nb-option-content">
                        <strong>{opt.label}</strong>
                        <p>{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Navigation controls */}
                <div className="nb-quiz-nav-row">
                  {currentQuestion > 0 && (
                    <button
                      type="button"
                      className="nb-quiz-back-btn"
                      onClick={() => setCurrentQuestion((prev) => prev - 1)}
                    >
                      ← Previous Question
                    </button>
                  )}
                  <span className="nb-quiz-hint">Select an option to advance to the next step</span>
                </div>
              </div>
            ) : (
              /* RESULTS DISPLAY WITH WHY & TRADEOFFS */
              <div className="nb-quiz-results-box" role="region" aria-label="Quiz Results">
                <div className="nb-results-header">
                  <span className="nb-badge">DISCOVERY SUMMARY COMPLETE</span>
                  <h3 className="nb-results-title">
                    Your Matched <em>Hampton Roads Destinations</em>
                  </h3>
                  <p className="nb-results-subtitle">
                    Based on your budget, commute priorities, and lifestyle preferences, here are three
                    cities and representative neighborhoods that offer strong alignment:
                  </p>
                </div>

                <div className="nb-results-grid">
                  {topMatches.map((match) => (
                    <div className="nb-match-card" key={match.id}>
                      <div className="nb-match-media">
                        <img src={match.image} alt={match.name} loading="lazy" />
                        <span className="nb-match-badge">{match.matchPct}</span>
                        <div className="nb-match-gradient" />
                      </div>
                      <div className="nb-match-body">
                        <span className="nb-match-vibe">{match.vibe}</span>
                        <h4>{match.name}</h4>
                        <p className="nb-match-desc">{match.description}</p>

                        <div className="nb-match-details">
                          <div className="nb-match-detail-row">
                            <Home size={14} className="nb-match-detail-icon" />
                            <div>
                              <strong>Representative Areas:</strong>
                              <span>{match.representativeAreas}</span>
                            </div>
                          </div>

                          <div className="nb-match-detail-row">
                            <Compass size={14} className="nb-match-detail-icon" />
                            <div>
                              <strong>Typical Housing:</strong>
                              <span>{match.typicalHousing}</span>
                            </div>
                          </div>

                          <div className="nb-match-tradeoff-box">
                            <AlertCircle size={14} className="nb-tradeoff-alert-icon" />
                            <div>
                              <strong>Trade-off to weigh:</strong>
                              <p>{match.tradeoffSummary}</p>
                            </div>
                          </div>
                        </div>

                        <div className="nb-match-actions">
                          <button
                            type="button"
                            className="btn btn-outline nb-btn-explore-match"
                            onClick={() => {
                              setActiveCityId(match.id)
                              document.getElementById('city-explorer')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                          >
                            Explore {match.name} Guide Below ↓
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="nb-results-footer">
                  <div className="nb-results-footer-actions">
                    <button type="button" className="btn btn-outline" onClick={handleRetakeQuiz}>
                      <RotateCcw size={15} />
                      Retake Discovery Quiz
                    </button>

                    <Link to="/contact" className="btn btn-primary" id="nb-discuss-results-btn">
                      Discuss Results With Jake
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                  <p className="nb-results-disclaimer">
                    Demonstration discovery tool using transparent local matching criteria. Not an MLS guarantee.
                    Descriptions comply with Fair Housing guidelines and avoid demographic ranking or unverified statistics.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 7-CITY REGIONAL EXPLORER */}
      <section className="nb-explorer-section" id="city-explorer" aria-labelledby="nb-explorer-title">
        <div className="container">
          <div className="section-header">
            <p className="label-overline">Regional Guide</p>
            <hr className="gold-rule center" aria-hidden="true" />
            <h2 className="display-2" id="nb-explorer-title">
              The Seven Cities of <em>Hampton Roads</em>
            </h2>
            <p>
              Select any city below to explore its distinct character, representative communities,
              and signature lifestyle highlights.
            </p>
          </div>

          {/* City navigation tabs */}
          <div className="nb-city-tabs" role="tablist" aria-label="Select a Hampton Roads city">
            {citiesData.map((city) => (
              <button
                key={city.id}
                type="button"
                role="tab"
                id={`tab-${city.id}`}
                aria-selected={activeCityId === city.id}
                aria-controls={`panel-${city.id}`}
                className={`nb-city-tab ${activeCityId === city.id ? 'is-active' : ''}`}
                onClick={() => setActiveCityId(city.id)}
              >
                <span>{city.name}</span>
                {city.id === 'vb' && <small className="nb-tab-badge">18 Guides</small>}
              </button>
            ))}
          </div>

          {/* Active City Showcase Panel */}
          <div
            className="nb-city-showcase"
            id={`panel-${activeCity.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCity.id}`}
          >
            <div className="nb-showcase-grid">
              <div className="nb-showcase-media">
                <img src={activeCity.image} alt={activeCity.name} />
                <div className="nb-showcase-badge">
                  <MapPin size={14} />
                  <span>{activeCity.vibe}</span>
                </div>
              </div>

              <div className="nb-showcase-info">
                <span className="label-overline">COMMUNITY SHOWCASE</span>
                <h3 className="nb-showcase-name">{activeCity.name}</h3>
                <p className="nb-showcase-tagline">{activeCity.tagline}</p>
                <p className="nb-showcase-desc">{activeCity.description}</p>

                <div className="nb-showcase-meta-box">
                  <strong>Key Representative Areas:</strong>
                  <p>{activeCity.representativeAreas}</p>
                </div>

                <div className="nb-showcase-highlights">
                  <span className="nb-highlights-label">Area Highlights & Recreation:</span>
                  <div className="nb-highlights-tags">
                    {activeCity.highlights.map((h) => (
                      <span key={h} className="nb-highlight-tag">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="nb-showcase-actions">
                  <a
                    href={activeCity.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary nb-btn-action"
                  >
                    Search Active REIN Listings
                    <ExternalLink size={15} />
                  </a>

                  <Link to="/contact" className="btn btn-outline nb-btn-action">
                    Ask Jake About {activeCity.name}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VIRGINIA BEACH 18-NEIGHBORHOOD DIRECTORY */}
      <section className="nb-clusters-section" aria-labelledby="nb-clusters-title">
        <div className="container">
          <div className="section-header">
            <p className="label-overline">Hyperlocal Deep-Dive</p>
            <hr className="gold-rule center" aria-hidden="true" />
            <h2 className="display-2" id="nb-clusters-title">
              Virginia Beach <em>Neighborhood Directory</em>
            </h2>
            <p>
              Explore all 18 Virginia Beach communities Jake covers, categorized by coastal proximity,
              waterfront access, urban convenience, and quiet suburban enclaves.
            </p>
          </div>

          <div className="nb-clusters-grid">
            {vbNeighborhoodClusters.map((c) => (
              <div className="nb-cluster-card" key={c.cluster}>
                <div className="nb-cluster-header">
                  <h3 className="nb-cluster-title">{c.cluster}</h3>
                  <p className="nb-cluster-desc">{c.desc}</p>
                </div>

                <ul className="nb-cluster-list">
                  {c.items.map((item) => (
                    <li key={item.name} className="nb-cluster-item">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nb-cluster-link"
                      >
                        <span className="nb-cluster-name">{item.name}</span>
                        <span className="nb-cluster-tag">{item.tag}</span>
                        <ExternalLink size={13} className="nb-cluster-ext" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
