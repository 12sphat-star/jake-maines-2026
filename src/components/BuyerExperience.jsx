import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  Waves,
  Home,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Sparkles,
  MapPin,
  Calendar,
  AlertCircle,
  RotateCcw,
} from 'lucide-react'
import '../styles/BuyerExperience.css'

const LIVE_SEARCH_URL = 'https://jakemainesrealtor.com/virginia/virginia-beach/'

// 3 Buyer Steps — Authentic, Conversational Copy (Phase 2C Item 3)
const buyerPaths = [
  {
    step: '01',
    title: "Let's Find Your Fit",
    icon: Compass,
    eyebrow: 'STEP 01 · BUDGET & VISION',
    desc: "We'll talk about your budget, what matters most, and where you'd love to live.",
    points: [
      'Honest budget & monthly payment comfort check',
      'Clarify non-negotiables vs. nice-to-haves',
      'Realistic neighborhood matches across all 7 cities',
    ],
  },
  {
    step: '02',
    title: "Let's Tour Some Homes",
    icon: Home,
    eyebrow: 'STEP 02 · TOURS & PERSPECTIVE',
    desc: 'Explore homes and neighborhoods that match your needs, with Jake helping you understand the details.',
    points: [
      'Private in-person tours and video walkthroughs',
      'Clear explanations of flood zones, HOAs, and lot conditions',
      'Local context on traffic, noise, and resale strength',
    ],
  },
  {
    step: '03',
    title: "Let's Get You Home",
    icon: ShieldCheck,
    eyebrow: 'STEP 03 · OFFER TO CLOSING',
    desc: 'From making an offer to inspections and closing day, Jake helps guide you through the process.',
    points: [
      'Protective contingencies and competitive offer strategy',
      'Home inspection review and repair negotiations',
      'Step-by-step guidance from contract to keys',
    ],
  },
]

// Everyday Hampton Roads Housing Styles (Phase 2C Item 1 & 2)
const homeStyles = [
  {
    id: 'starter',
    label: 'Starter / First-Time Home',
    note: 'Manageable footprint, ranch or cottage, sensible upkeep',
    badge: 'Attainable Living',
  },
  {
    id: 'suburban',
    label: 'Classic Suburban Home',
    note: 'Established 3–4 BR single family, quiet street, fenced yard',
    badge: 'Everyday Classic',
  },
  {
    id: 'townhome',
    label: 'Low-Maintenance Townhome',
    note: 'Exterior care included, easy lock-and-leave convenience',
    badge: 'Low Maintenance',
  },
  {
    id: 'moveup',
    label: 'Move-Up Family Home',
    note: '4+ bedrooms, 2-car garage, larger lot, room to grow',
    badge: 'Growing Households',
  },
  {
    id: 'coastal',
    label: 'Coastal / Water-Adjacent',
    note: 'Beach cottages, inlet breezes, bayside or canal access',
    badge: 'Coastal Living',
  },
]

const lifestylePriorities = [
  {
    id: 'commute',
    label: 'Short Commute to Bases & Work',
    desc: 'Quick access to Norfolk Naval, Little Creek, Oceana, or Shipyard',
    icon: Compass,
  },
  {
    id: 'yard',
    label: 'Spacious Yard & Quiet Streets',
    desc: 'Room for pets, kids, gardening, and safe neighborhood bike rides',
    icon: Home,
  },
  {
    id: 'walkable',
    label: 'Walkable Dining & Culture',
    desc: 'Stroll to local coffee shops, bakeries, parks, and evening dining',
    icon: Sparkles,
  },
  {
    id: 'beach',
    label: 'Beach, Boating & Water Life',
    desc: 'Sand between your toes, paddleboarding, and coastal weekends',
    icon: Waves,
  },
  {
    id: 'value',
    label: 'Maximum Value For Dollar',
    desc: 'More house and land for your budget, sensible taxes, low HOAs',
    icon: CheckCircle2,
  },
]

const budgetTiers = [
  {
    id: 'under400',
    label: 'Under $400K',
    desc: 'Solid starter homes, townhomes & established condos across Hampton Roads',
  },
  {
    id: '400-600',
    label: '$400K – $600K',
    desc: 'The core Hampton Roads suburban sweet spot: 3–4 BR ranches & two-stories',
  },
  {
    id: '600-850',
    label: '$600K – $850K',
    desc: 'Expanded move-up homes, premier neighborhood pockets & generous lots',
  },
  {
    id: '850plus',
    label: '$850K+ / Coastal',
    desc: 'Waterfront, custom builds, deepwater docks & premier coastal enclaves',
  },
]

const timelineOptions = [
  { id: 'ready', label: 'Ready Now (0–60 Days)' },
  { id: '3-6mo', label: 'Planning for 3–6 Months' },
  { id: 'pcs', label: 'Military PCS / Relocating Soon' },
  { id: 'exploring', label: 'Exploring & Learning the Market' },
]

// Curated Hampton Roads Communities Covering All 7 Cities
const communityDatabase = [
  {
    id: 'vb-kempsville',
    name: 'Kempsville & Salem',
    city: 'Virginia Beach',
    badge: 'Central Suburban Classic',
    styles: ['starter', 'suburban'],
    priorities: ['commute', 'yard', 'value'],
    budgets: ['under400', '400-600'],
    housing: 'Established 1970s–1980s brick ranches and two-stories on 1/4-acre mature lots.',
    whyFits:
      'Provides a central Virginia Beach location with 20-minute highway access to both Norfolk Naval Station and Town Center. Great yard space with established street canopies and no mandatory HOA fees.',
    tradeoff:
      'Most homes are 40+ years old; factor in occasional updates to original plumbing, wiring, or cosmetic finishes during home inspections.',
  },
  {
    id: 'chesapeake-greenbrier',
    name: 'Greenbrier & Great Bridge',
    city: 'Chesapeake',
    badge: 'Suburban Comfort & Parks',
    styles: ['suburban', 'moveup'],
    priorities: ['yard', 'commute', 'value'],
    budgets: ['400-600', '600-850'],
    housing: 'Traditional single-family homes and newer subdivisions with two-car garages and fenced yards.',
    whyFits:
      'Ideal for buyers wanting spacious yards and well-kept neighborhood parks along the Intracoastal Waterway. Solid suburban community with convenient retail corridors and highway connections.',
    tradeoff:
      'Peak rush-hour traffic across the High-Rise Bridge and Battlefield Boulevard can add travel time to Norfolk or Peninsula destinations.',
  },
  {
    id: 'norfolk-ghent',
    name: 'Historic Ghent & Freemason',
    city: 'Norfolk',
    badge: 'Walkable Arts & History',
    styles: ['townhome', 'starter'],
    priorities: ['walkable', 'commute'],
    budgets: ['under400', '400-600', '600-850'],
    housing: 'Historic brownstones, classic turn-of-the-century townhomes, and modern condominiums.',
    whyFits:
      'Unmatched walkability in Hampton Roads. Walk to Colley Avenue restaurants, the Chrysler Museum, and local bakeries with quick 10-minute access to downtown Norfolk and EVMS.',
    tradeoff:
      'Street parking is common, lot sizes are compact, and older historic properties require attentive exterior upkeep.',
  },
  {
    id: 'vb-chicsbeach',
    name: 'Chic’s Beach & Bayside',
    city: 'Virginia Beach',
    badge: 'Casual Coastal Living',
    styles: ['coastal', 'townhome', 'suburban'],
    priorities: ['beach', 'walkable'],
    budgets: ['400-600', '600-850', '850plus'],
    housing: 'Beach cottages, multi-level coastal homes, and duplexes along the Chesapeake Bay shoreline.',
    whyFits:
      'Calmer bay waters, sunset golf-cart culture, and walkable local seafood cafes without the high-density tourist traffic of the Atlantic oceanfront resort area.',
    tradeoff:
      'Tighter street parking and variable flood elevation zones; flood insurance policies should be reviewed carefully prior to making an offer.',
  },
  {
    id: 'suffolk-harbourview',
    name: 'Harbour View & North Suffolk',
    city: 'Suffolk',
    badge: 'Newer Builds & Space',
    styles: ['suburban', 'townhome', 'moveup'],
    priorities: ['value', 'yard', 'commute'],
    budgets: ['400-600', '600-850'],
    housing: 'Modern master-planned neighborhoods, townhomes, and golf-course adjacent single-family properties.',
    whyFits:
      'Delivers exceptional square footage per dollar with contemporary open-concept floor plans, community amenities, and direct access across the Monitor-Merrimac Bridge-Tunnel (I-664).',
    tradeoff:
      'Bridge-tunnel traffic during peak morning and evening rush hours is a factor for commuters heading to Southside naval installations.',
  },
  {
    id: 'hampton-buckroe',
    name: 'Buckroe Beach & Phoebus',
    city: 'Hampton',
    badge: 'Coastal Town Charm',
    styles: ['starter', 'coastal', 'townhome'],
    priorities: ['beach', 'value', 'walkable'],
    budgets: ['under400', '400-600'],
    housing: 'Cottages, mid-century bungalows, and modern coastal infill homes near the Chesapeake Bay.',
    whyFits:
      'Offers some of the most attainable coastal living in the entire mid-Atlantic region. Enjoy public sandy beaches, boardwalk strolls, and historic Phoebus dining at an accessible price point.',
    tradeoff:
      'Crossing the Hampton Roads Bridge-Tunnel (HRBT) to Norfolk or Virginia Beach during summer weekends requires route planning.',
  },
  {
    id: 'nn-hilton',
    name: 'Hilton Village & Oyster Point',
    city: 'Newport News',
    badge: 'Historic Character & Convenience',
    styles: ['starter', 'suburban', 'townhome'],
    priorities: ['walkable', 'commute', 'value'],
    budgets: ['under400', '400-600'],
    housing: 'English-village style architectural cottages, brick ranchers, and contemporary midtown condos.',
    whyFits:
      'Features distinctive English architectural charm near the James River, walkable village shops, and easy proximity to Newport News Shipbuilding and the tech corridor.',
    tradeoff:
      'Preserved historic design guidelines in Hilton Village mean exterior renovations require district review; lot sizes are cozy.',
  },
  {
    id: 'portsmouth-oldetowne',
    name: 'Olde Towne & Churchland',
    city: 'Portsmouth',
    badge: 'Historic Seawall & Great Value',
    styles: ['starter', 'suburban', 'townhome'],
    priorities: ['value', 'walkable', 'commute'],
    budgets: ['under400', '400-600'],
    housing: 'Historic 18th/19th century townhomes in Olde Towne, and generous mid-century ranches in Churchland.',
    whyFits:
      'Outstanding historic value with riverfront seawall views, pedestrian ferry to downtown Norfolk, and attainable single-story homes in Churchland with ample yard space.',
    tradeoff:
      'Downtown tunnel tolls to Norfolk should be factored into daily commuting expenses.',
  },
  {
    id: 'vb-greatneck',
    name: 'Great Neck & Thoroughgood',
    city: 'Virginia Beach',
    badge: 'Established Move-Up Enclave',
    styles: ['moveup', 'suburban', 'coastal'],
    priorities: ['yard', 'commute', 'beach'],
    budgets: ['600-850', '850plus'],
    housing: 'Spacious 4+ bedroom colonials and custom waterfront properties with mature trees.',
    whyFits:
      'One of the most established and sought-after residential corridors in Virginia Beach. Close to Lynnhaven River inlets, excellent dining, and convenient to both the oceanfront and highway corridors.',
    tradeoff:
      'Competitive price tier with limited inventory under $600K; properties frequently receive strong interest upon listing.',
  },
]

// Aspirational Yet Attainable Hampton Roads Lifestyle Gallery (Phase 2C Item 1)
const lifestyleGalleries = [
  {
    title: 'Coastal Living & Calm Bay Shores',
    location: 'Chic’s Beach, Oceanfront, Buckroe Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82',
    desc: 'From the Atlantic surf to the gentle waters of the Chesapeake Bay. Beach cottages, evening walks on the sand, and casual coastal communities.',
  },
  {
    title: 'Established Brick Ranches & Tree-Lined Streets',
    location: 'Kempsville, Greenbrier, Thoroughgood, Churchland',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=82',
    desc: 'Mature oak canopies, generous fenced yards for kids and pets, and solid single-story and two-story builds. The authentic foundation of everyday Hampton Roads life.',
  },
  {
    title: 'Walkable Historic Streets & Modern Townhomes',
    location: 'Ghent (Norfolk), Town Center (VB), Olde Towne (Portsmouth)',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=82',
    desc: 'Stroll to morning coffee, neighborhood bakeries, art galleries, and evening dining with low-maintenance lock-and-leave living.',
  },
  {
    title: 'Spacious Suburban Living & Growing Families',
    location: 'Great Bridge, Hickory, North Suffolk, Red Mill',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=82',
    desc: 'Room to stretch out. Two-car garages, community walking trails, neighborhood parks, and spacious layouts designed for growing households.',
  },
]

export default function BuyerExperience() {
  const [selectedStyle, setSelectedStyle] = useState('suburban')
  const [selectedPriority, setSelectedPriority] = useState('yard')
  const [selectedBudget, setSelectedBudget] = useState('400-600')
  const [selectedTimeline, setSelectedTimeline] = useState('3-6mo')
  const [hasGenerated, setHasGenerated] = useState(false)

  const activeStyle = homeStyles.find((s) => s.id === selectedStyle)
  const activePriority = lifestylePriorities.find((p) => p.id === selectedPriority)
  const activeBudget = budgetTiers.find((b) => b.id === selectedBudget)
  const activeTimeline = timelineOptions.find((t) => t.id === selectedTimeline)

  // Dynamic Rule-Based Matching Across All 7 Cities (Phase 2C Item 2)
  const matchedCommunities = useMemo(() => {
    // Score each community based on selections
    const scored = communityDatabase.map((community) => {
      let score = 0
      let matchReasons = []

      // Style score
      if (community.styles.includes(selectedStyle)) {
        score += 35
        matchReasons.push(`Home style matches your search for ${activeStyle?.label.toLowerCase()}`)
      }

      // Priority score
      if (community.priorities.includes(selectedPriority)) {
        score += 35
        matchReasons.push(`Strong alignment with your priority for ${activePriority?.label.toLowerCase()}`)
      }

      // Budget score
      if (community.budgets.includes(selectedBudget)) {
        score += 30
        matchReasons.push(`Established home options in the ${activeBudget?.label} price range`)
      } else {
        // Partial penalty if outside budget
        score -= 15
      }

      return {
        ...community,
        score,
        matchReasons,
      }
    })

    // Sort by highest score, select top 3-4
    scored.sort((a, b) => b.score - a.score)
    return scored.slice(0, 3)
  }, [selectedStyle, selectedPriority, selectedBudget, activeStyle, activePriority, activeBudget])

  const handleGenerateBlueprint = () => {
    setHasGenerated(true)
    setTimeout(() => {
      document.getElementById('buyer-summary')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleResetPreferences = () => {
    setSelectedStyle('suburban')
    setSelectedPriority('yard')
    setSelectedBudget('400-600')
    setSelectedTimeline('3-6mo')
    setHasGenerated(false)
  }

  return (
    <div className="bx-experience">
      {/* 1. CINEMATIC BUT ATTAINABLE HERO */}
      <section className="bx-hero" aria-labelledby="bx-hero-title">
        <div className="bx-hero-bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1800&q=82"
            alt="Welcoming Hampton Roads suburban home with front porch"
            className="bx-hero-img"
          />
          <div className="bx-hero-overlay" />
        </div>

        <div className="container bx-hero-content">
          <div className="bx-badge">
            <span className="bx-badge-dot" />
            HAMPTON ROADS · BUYER EXPERIENCE & ADVISORY
          </div>

          <h1 id="bx-hero-title" className="bx-hero-title">
            Find More Than a House.<br />
            <span>Find Where You Belong.</span>
          </h1>

          <p className="bx-hero-subtitle">
            From first-time starter homes and tree-lined suburban ranches to townhomes and coastal neighborhoods.
            Jake Maines delivers honest local guidance, private tours, and skilled negotiation across all seven
            Hampton Roads cities.
          </p>

          <div className="bx-hero-actions">
            <a
              href="#buyer-planner"
              className="btn btn-primary bx-btn-main"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('buyer-planner')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Build Your Buyer Blueprint
              <ArrowRight size={16} />
            </a>

            <a
              href={LIVE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline bx-btn-secondary"
            >
              Browse Active REIN/MLS Search
              <ExternalLink size={15} />
            </a>
          </div>

          <div className="bx-trust-strip">
            <div className="bx-trust-item">
              <CheckCircle2 size={15} className="bx-trust-icon" />
              <span>Direct REIN/MLS Access</span>
            </div>
            <div className="bx-trust-item">
              <CheckCircle2 size={15} className="bx-trust-icon" />
              <span>Realistic Flood & HOA Analysis</span>
            </div>
            <div className="bx-trust-item">
              <CheckCircle2 size={15} className="bx-trust-icon" />
              <span>Covers All 7 Hampton Roads Cities</span>
            </div>
            <div className="bx-trust-item">
              <CheckCircle2 size={15} className="bx-trust-icon" />
              <span>Zero-Pressure Advice</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REWRITTEN THREE BUYER STEPS (Phase 2C Item 3) */}
      <section className="bx-roadmap-section" aria-labelledby="bx-roadmap-title">
        <div className="container">
          <div className="section-header">
            <p className="label-overline">How Jake Works With You</p>
            <hr className="gold-rule center" aria-hidden="true" />
            <h2 className="display-2" id="bx-roadmap-title">
              Three Simple Steps to <em>Your Next Home</em>
            </h2>
            <p>
              No corporate jargon or high-pressure tactics. Just straightforward, experienced local advice
              from our first conversation through move-in day.
            </p>
          </div>

          <div className="bx-roadmap-grid" role="list">
            {buyerPaths.map((path) => {
              const IconComp = path.icon
              return (
                <article className="bx-roadmap-card" key={path.step} role="listitem">
                  <div className="bx-roadmap-header">
                    <span className="bx-roadmap-number">{path.step}</span>
                    <IconComp size={24} className="bx-roadmap-icon" />
                  </div>
                  <span className="bx-roadmap-eyebrow">{path.eyebrow}</span>
                  <h3 className="bx-roadmap-heading">{path.title}</h3>
                  <p className="bx-roadmap-desc">{path.desc}</p>
                  <ul className="bx-roadmap-points">
                    {path.points.map((pt) => (
                      <li key={pt}>
                        <CheckCircle2 size={14} className="bx-point-check" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. WORKING INTERACTIVE BUYER BLUEPRINT (Phase 2C Item 2) */}
      <section className="bx-planner-section" id="buyer-planner" aria-labelledby="bx-planner-title">
        <div className="container">
          <div className="section-header">
            <p className="label-overline">Interactive Home Finder</p>
            <hr className="gold-rule center" aria-hidden="true" />
            <h2 className="display-2" id="bx-planner-title">
              Craft Your <em>Buyer Blueprint</em>
            </h2>
            <p>
              Select your preferences below. The Blueprint updates dynamically to show you realistic
              Hampton Roads neighborhoods and explains exactly why they fit your criteria.
            </p>
          </div>

          <div className="bx-planner-grid">
            {/* Interactive selection controls */}
            <div className="bx-planner-controls">
              {/* Category 1: Home Style */}
              <div className="bx-control-group">
                <div className="bx-group-header">
                  <span className="bx-step-pill">01</span>
                  <div>
                    <h3>Preferred Property Style</h3>
                    <p className="bx-group-subtitle">Select the home style that fits your stage in life</p>
                  </div>
                </div>
                <div className="bx-option-chips" role="radiogroup" aria-label="Preferred Property Style">
                  {homeStyles.map((style) => (
                    <button
                      key={style.id}
                      type="button"
                      role="radio"
                      aria-checked={selectedStyle === style.id}
                      className={`bx-chip ${selectedStyle === style.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedStyle(style.id)}
                    >
                      <div className="bx-chip-header">
                        <span className="bx-chip-title">{style.label}</span>
                        <span className="bx-chip-badge">{style.badge}</span>
                      </div>
                      <span className="bx-chip-note">{style.note}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category 2: Lifestyle Priority */}
              <div className="bx-control-group">
                <div className="bx-group-header">
                  <span className="bx-step-pill">02</span>
                  <div>
                    <h3>Top Lifestyle Priority</h3>
                    <p className="bx-group-subtitle">What matters most in your day-to-day routine?</p>
                  </div>
                </div>
                <div className="bx-option-grid" role="radiogroup" aria-label="Lifestyle Priority">
                  {lifestylePriorities.map((p) => {
                    const IconComp = p.icon
                    return (
                      <button
                        key={p.id}
                        type="button"
                        role="radio"
                        aria-checked={selectedPriority === p.id}
                        className={`bx-priority-card ${selectedPriority === p.id ? 'is-active' : ''}`}
                        onClick={() => setSelectedPriority(p.id)}
                      >
                        <div className="bx-priority-header">
                          <IconComp size={22} className="bx-priority-icon" />
                          <span className="bx-priority-title">{p.label}</span>
                        </div>
                        <p className="bx-priority-desc">{p.desc}</p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Category 3: Budget Tier */}
              <div className="bx-control-group">
                <div className="bx-group-header">
                  <span className="bx-step-pill">03</span>
                  <div>
                    <h3>Comfortable Price Range</h3>
                    <p className="bx-group-subtitle">Target budget for your search</p>
                  </div>
                </div>
                <div className="bx-budget-row" role="radiogroup" aria-label="Comfortable Price Range">
                  {budgetTiers.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      role="radio"
                      aria-checked={selectedBudget === b.id}
                      className={`bx-budget-card ${selectedBudget === b.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedBudget(b.id)}
                    >
                      <strong>{b.label}</strong>
                      <small>{b.desc}</small>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category 4: Timeline */}
              <div className="bx-control-group">
                <div className="bx-group-header">
                  <span className="bx-step-pill">04</span>
                  <div>
                    <h3>Anticipated Moving Timeline</h3>
                    <p className="bx-group-subtitle">When are you hoping to be settled?</p>
                  </div>
                </div>
                <div className="bx-timeline-chips" role="radiogroup" aria-label="Anticipated Moving Timeline">
                  {timelineOptions.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      role="radio"
                      aria-checked={selectedTimeline === t.id}
                      className={`bx-timeline-chip ${selectedTimeline === t.id ? 'is-active' : ''}`}
                      onClick={() => setSelectedTimeline(t.id)}
                    >
                      <Calendar size={14} />
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bx-generate-action-bar">
                <button
                  type="button"
                  className="btn btn-primary bx-generate-btn"
                  id="generate-blueprint-btn"
                  onClick={handleGenerateBlueprint}
                >
                  <Sparkles size={16} />
                  <span>Generate My Custom Blueprint</span>
                </button>

                <button
                  type="button"
                  className="btn btn-outline bx-reset-btn"
                  onClick={handleResetPreferences}
                  title="Reset selections"
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Generated Blueprint Summary & Area Recommendations */}
            <aside
              className={`bx-planner-summary ${hasGenerated ? 'is-generated' : ''}`}
              id="buyer-summary"
              aria-label="Generated Buyer Blueprint"
            >
              <div className="bx-summary-card">
                <div className="bx-summary-top">
                  <span className="bx-summary-tag">
                    {hasGenerated ? '✓ YOUR TAILORED BLUEPRINT' : 'LIVE BLUEPRINT PREVIEW'}
                  </span>
                  <h3>Your Search Blueprint</h3>
                  <p>
                    {hasGenerated
                      ? 'Custom recommendations based on your preferences. Tweak selections anytime to recalculate.'
                      : 'Live preview. Adjust any choice on the left, or click Generate to finalize.'}
                  </p>
                </div>

                {/* Selections breakdown */}
                <div className="bx-summary-items">
                  <div className="bx-summary-row">
                    <span className="bx-summary-label">Target Style</span>
                    <strong>{activeStyle?.label}</strong>
                  </div>
                  <div className="bx-summary-row">
                    <span className="bx-summary-label">Top Priority</span>
                    <strong>{activePriority?.label}</strong>
                  </div>
                  <div className="bx-summary-row">
                    <span className="bx-summary-label">Budget Tier</span>
                    <strong>{activeBudget?.label}</strong>
                  </div>
                  <div className="bx-summary-row">
                    <span className="bx-summary-label">Timeframe</span>
                    <strong>{activeTimeline?.label}</strong>
                  </div>
                </div>

                {/* Recommendations with WHY and TRADEOFFS */}
                <div className="bx-summary-matches">
                  <div className="bx-matches-header">
                    <h4>Recommended Areas to Explore:</h4>
                    <span className="bx-matches-count">{matchedCommunities.length} Local Matches</span>
                  </div>

                  <div className="bx-community-cards">
                    {matchedCommunities.map((c) => (
                      <div className="bx-community-card" key={c.id}>
                        <div className="bx-community-card-top">
                          <div>
                            <strong className="bx-community-name">{c.name}</strong>
                            <span className="bx-community-city">
                              <MapPin size={12} />
                              {c.city}
                            </span>
                          </div>
                          <span className="bx-community-badge">{c.badge}</span>
                        </div>

                        <p className="bx-community-housing">
                          <strong>Typical Homes:</strong> {c.housing}
                        </p>

                        <div className="bx-community-why">
                          <strong>Why This Fits You:</strong>
                          <p>{c.whyFits}</p>
                        </div>

                        <div className="bx-community-tradeoff">
                          <AlertCircle size={13} className="bx-tradeoff-icon" />
                          <span>
                            <strong>Trade-off to weigh:</strong> {c.tradeoff}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Next Actions */}
                <div className="bx-summary-actions">
                  <Link
                    to="/contact"
                    className="btn btn-primary bx-summary-btn"
                    id="blueprint-discuss-cta"
                  >
                    Discuss This Blueprint With Jake
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={LIVE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline bx-summary-btn-outline"
                    id="blueprint-live-search-cta"
                  >
                    Search Current REIN Listings
                    <ExternalLink size={14} />
                  </a>
                </div>

                <p className="bx-summary-note">
                  Portfolio demonstration tool. Uses transparent local Hampton Roads matching rules.
                  No personal data collected or transmitted. Active MLS inventory links directly to Jake’s authorized REIN search portal.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. CURATED HAMPTON ROADS LIFESTYLE GALLERY */}
      <section className="bx-lifestyle-section" aria-labelledby="bx-lifestyle-title">
        <div className="container">
          <div className="section-header">
            <p className="label-overline">Everyday Hampton Roads Communities</p>
            <hr className="gold-rule center" aria-hidden="true" />
            <h2 className="display-2" id="bx-lifestyle-title">
              Every Neighborhood Has <em>Its Own Personality</em>
            </h2>
            <p>
              From calm bayside beaches and historic tree-lined avenues to quiet suburban cul-de-sacs,
              explore the distinctive lifestyle character across coastal Virginia.
            </p>
          </div>

          <div className="bx-gallery-grid">
            {lifestyleGalleries.map((item) => (
              <article className="bx-gallery-card" key={item.title}>
                <div className="bx-gallery-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="bx-gallery-gradient" />
                  <span className="bx-gallery-location">
                    <MapPin size={13} />
                    {item.location}
                  </span>
                </div>
                <div className="bx-gallery-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link to="/neighborhoods" className="bx-gallery-link">
                    Explore neighborhood guide
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="bx-gallery-cta">
            <Link to="/neighborhoods" className="btn btn-primary" id="bx-explore-all-neighborhoods">
              Explore All 7 Hampton Roads Cities & 18 Communities
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. REDESIGNED HIGH-ENERGY TWO-COLUMN BUYER CALL TO ACTION (Phase 2C Item 6) */}
      <section className="bx-conversion-section" aria-labelledby="bx-convert-title">
        <div className="container">
          <div className="bx-conversion-card">
            {/* Left column: Action copy */}
            <div className="bx-conversion-main">
              <span className="bx-badge">READY TO MOVE FORWARD?</span>
              <h2 id="bx-convert-title" className="bx-conversion-headline">
                Your Next Chapter Starts With <em>the Right Home.</em>
              </h2>
              <p className="bx-conversion-lead">
                Tell Jake what you&apos;re looking for. He&apos;ll help you explore the neighborhoods,
                homes, and possibilities that fit your next move.
              </p>

              <div className="bx-conversion-actions">
                <Link to="/contact" className="btn btn-primary bx-btn-main" id="bx-cta-contact-btn">
                  Connect With Jake
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={LIVE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white bx-btn-secondary"
                  id="bx-cta-search-btn"
                >
                  Search Active REIN Listings
                  <ExternalLink size={15} />
                </a>
              </div>

              <p className="bx-conversion-disclosure">
                Demonstration portfolio interface. No high-pressure sales or automated spam.
                In a production build, your criteria connects directly to Jake&apos;s custom REIN/MLS client portal.
              </p>
            </div>

            {/* Right column: Value Preview Panel */}
            <div className="bx-conversion-preview">
              <div className="bx-preview-card">
                <div className="bx-preview-header">
                  <span className="bx-preview-tag">LOCAL BUYER ADVANTAGE</span>
                  <h4>What Jake Helps You Clarify</h4>
                </div>

                <div className="bx-preview-list">
                  <div className="bx-preview-item">
                    <span className="bx-preview-num">01</span>
                    <div>
                      <strong>True Flood Zone & Insurance Costs</strong>
                      <p>Assess flood insurance requirements and base elevation before you make an offer.</p>
                    </div>
                  </div>

                  <div className="bx-preview-item">
                    <span className="bx-preview-num">02</span>
                    <div>
                      <strong>Realistic Commute Times</strong>
                      <p>Understand tunnel, bridge, and interstate rush hour flow to naval bases and business centers.</p>
                    </div>
                  </div>

                  <div className="bx-preview-item">
                    <span className="bx-preview-num">03</span>
                    <div>
                      <strong>HOA Terms & Property Restrictions</strong>
                      <p>Avoid surprise restrictions on pets, trucks, boats, or neighborhood rental limits.</p>
                    </div>
                  </div>

                  <div className="bx-preview-item">
                    <span className="bx-preview-num">04</span>
                    <div>
                      <strong>Unvarnished Property Conditions</strong>
                      <p>Get candid feedback on crawlspace dampness, HVAC age, roof condition, and resale potential.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
