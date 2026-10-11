import '../styles/Neighborhoods.css'

const neighborhoods = [
  {
    name: 'Virginia Beach Oceanfront',
    tag: 'Most Popular',
    desc: 'Iconic boardwalk living, resort energy, and some of the most coveted oceanfront properties on the East Coast.',
    gradient: 'linear-gradient(135deg, #0d1f30 0%, #1a3d5c 50%, #2563a8 100%)',
    avgPrice: '$[TBD]',
    listings: '[TBD]',
    featured: true,
  },
  {
    name: 'Great Neck',
    tag: 'Waterfront',
    desc: 'Peaceful bay-side living with top-rated schools and a strong sense of community.',
    gradient: 'linear-gradient(135deg, #12263a 0%, #1e4060 100%)',
    avgPrice: '$[TBD]',
    listings: '[TBD]',
    featured: false,
  },
  {
    name: 'Chesapeake',
    tag: 'Family-Friendly',
    desc: 'Spacious lots, excellent schools, and suburban comfort minutes from Virginia Beach.',
    gradient: 'linear-gradient(135deg, #1a2e1e 0%, #2d5c35 100%)',
    avgPrice: '$[TBD]',
    listings: '[TBD]',
    featured: false,
  },
  {
    name: 'Sandbridge',
    tag: 'Beach Retreat',
    desc: 'Secluded beach cottages and luxury estates at the southern end of Virginia Beach.',
    gradient: 'linear-gradient(135deg, #2a1a0e 0%, #5c3d1e 100%)',
    avgPrice: '$[TBD]',
    listings: '[TBD]',
    featured: false,
  },
  {
    name: 'Norfolk',
    tag: 'Urban Vibrant',
    desc: 'The cultural heart of Hampton Roads — thriving arts, waterfront dining, and diverse architecture.',
    gradient: 'linear-gradient(135deg, #1e1a2e 0%, #3a2d5c 100%)',
    avgPrice: '$[TBD]',
    listings: '[TBD]',
    featured: false,
  },
]

export default function Neighborhoods() {
  return (
    <section className="neighborhoods-section" id="neighborhoods" aria-label="Hampton Roads neighborhood discovery">
      <div className="container">
        <div className="section-header">
          <p className="label-overline">Discover Your Community</p>
          <hr className="gold-rule center" aria-hidden="true" />
          <h2 className="display-2">Hampton Roads Neighborhoods</h2>
          <p>
            Every community in Hampton Roads has its own character. Explore the areas 
            Jake knows best — from oceanfront luxury to serene suburban retreats.
          </p>
        </div>

        <div className="neighborhoods-cards" role="list">
          {neighborhoods.map(hood => (
            <div
              key={hood.name}
              className={`neighborhood-card ${hood.featured ? 'card-featured' : ''}`}
              role="listitem"
              tabIndex={0}
              aria-label={`Explore ${hood.name} neighborhood`}
            >
              {/* Background */}
              <div
                className="neighborhood-card-bg"
                style={{ background: hood.gradient }}
                aria-hidden="true"
              />

              {/* Explore arrow (hover) */}
              <span className="neighborhood-card-explore" aria-hidden="true">→</span>

              {/* Content */}
              <div className="neighborhood-card-content">
                {hood.tag && (
                  <span className="neighborhood-card-tag">{hood.tag}</span>
                )}
                <h3 className="neighborhood-card-name">{hood.name}</h3>
                <p className="neighborhood-card-desc">{hood.desc}</p>
                <div className="neighborhood-card-meta">
                  <div className="neighborhood-meta-stat">
                    <span className="neighborhood-meta-number">{hood.avgPrice}</span>
                    <span className="neighborhood-meta-label">Avg. Price*</span>
                  </div>
                  <div className="neighborhood-meta-stat">
                    <span className="neighborhood-meta-number">{hood.listings}</span>
                    <span className="neighborhood-meta-label">Active Listings*</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="neighborhood-card-placeholder-disclaimer" role="note">
          *Average prices and listing counts are placeholders. Live market data will be connected via IDX integration.
        </p>
      </div>
    </section>
  )
}
