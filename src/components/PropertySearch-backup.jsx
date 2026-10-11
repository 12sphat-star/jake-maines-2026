import { useState } from 'react'
import '../styles/PropertySearch.css'

const tabs = ['Buy', 'Sell', 'Neighborhoods']

const popularSearches = [
  'Virginia Beach Oceanfront',
  'Chesapeake Bay Views',
  'Great Neck',
  'Sandbridge',
  'Norfolk',
  'Chesapeake',
]

const sellOptions = [
  {
    icon: '🏡',
    title: 'Home Valuation',
    desc: 'Get an informed estimate of your home\'s current market value — completely free.',
  },
  {
    icon: '✨',
    title: 'Sell Ready Program',
    desc: 'Explore strategic pre-sale improvements with deferred costs until closing, designed to help maximize your home\'s potential.',
  },
  {
    icon: '📋',
    title: 'Listing Strategy',
    desc: 'Full-service marketing, professional photography, and a pricing strategy tailored to your goals.',
  },
]

const neighborhoods = [
  { name: 'Virginia Beach Oceanfront', listings: '42 listings' },
  { name: 'Great Neck',               listings: '28 listings' },
  { name: 'Sandbridge',               listings: '17 listings' },
  { name: 'Chesapeake',               listings: '55 listings' },
  { name: 'Norfolk',                  listings: '63 listings' },
  { name: 'Suffolk',                  listings: '31 listings' },
  { name: 'Hampton',                  listings: '24 listings' },
  { name: 'Newport News',             listings: '48 listings' },
]

const neighborhoodColors = [
  'linear-gradient(135deg, #16283B, #2a4a6b)',
  'linear-gradient(135deg, #2d4a5c, #4A7FA5)',
  'linear-gradient(135deg, #3d2f1e, #B69A71)',
  'linear-gradient(135deg, #1a3040, #3a6080)',
  'linear-gradient(135deg, #2c1f10, #8a6a40)',
  'linear-gradient(135deg, #162535, #2e5070)',
  'linear-gradient(135deg, #1e3535, #3a6560)',
  'linear-gradient(135deg, #281a10, #7a4a28)',
]

export default function PropertySearch() {
  const [activeTab,     setActiveTab]     = useState('Buy')
  const [searchQuery,   setSearchQuery]   = useState('')
  const [priceRange,    setPriceRange]    = useState('')
  const [bedrooms,      setBedrooms]      = useState('')

  return (
    <section className="search-section" id="search" aria-label="Property search">
      <div className="container">
        <div className="section-header">
          <p className="label-overline">Find Your Next Home</p>
          <hr className="gold-rule center" />
          <h2 className="display-2">What Are You Looking For?</h2>
        </div>

        {/* Tab navigation */}
        <div className="search-tabs" role="tablist" aria-label="Search type">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`search-tab ${activeTab === tab ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`search-panel-${tab.toLowerCase()}`}
              id={`search-tab-${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* BUY Panel */}
        {activeTab === 'Buy' && (
          <div
            id="search-panel-buy"
            role="tabpanel"
            aria-labelledby="search-tab-buy"
          >
            <div className="search-form">
              <div className="search-form-grid">
                <div className="search-field">
                  <label className="search-label" htmlFor="location-input">
                    Location or Neighborhood
                  </label>
                  <input
                    id="location-input"
                    type="text"
                    className="search-input"
                    placeholder="Virginia Beach, Chesapeake, Norfolk…"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    aria-label="Enter location or neighborhood"
                  />
                </div>

                <div className="search-field">
                  <label className="search-label" htmlFor="price-select">
                    Price Range
                  </label>
                  <select
                    id="price-select"
                    className="search-select"
                    value={priceRange}
                    onChange={e => setPriceRange(e.target.value)}
                    aria-label="Select price range"
                  >
                    <option value="">Any Price</option>
                    <option value="0-300k">Under $300K</option>
                    <option value="300k-500k">$300K – $500K</option>
                    <option value="500k-750k">$500K – $750K</option>
                    <option value="750k-1m">$750K – $1M</option>
                    <option value="1m+">$1M+</option>
                  </select>
                </div>

                <div className="search-field">
                  <label className="search-label" htmlFor="beds-select">
                    Bedrooms
                  </label>
                  <select
                    id="beds-select"
                    className="search-select"
                    value={bedrooms}
                    onChange={e => setBedrooms(e.target.value)}
                    aria-label="Select number of bedrooms"
                  >
                    <option value="">Any</option>
                    <option value="1">1+ Bed</option>
                    <option value="2">2+ Beds</option>
                    <option value="3">3+ Beds</option>
                    <option value="4">4+ Beds</option>
                    <option value="5">5+ Beds</option>
                  </select>
                </div>

                <button
                  className="search-btn"
                  id="property-search-submit"
                  aria-label="Search properties"
                  onClick={() => alert('IDX integration coming soon — contact Jake directly for listings!')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                  </svg>
                  Search
                </button>
              </div>

              {/* Popular searches */}
              <div className="search-popular">
                <span className="search-popular-label">Popular:</span>
                {popularSearches.map(tag => (
                  <button
                    key={tag}
                    className="search-tag"
                    onClick={() => setSearchQuery(tag)}
                    aria-label={`Search for ${tag}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SELL Panel */}
        {activeTab === 'Sell' && (
          <div
            id="search-panel-sell"
            role="tabpanel"
            aria-labelledby="search-tab-sell"
            className="sell-panel"
          >
            <h2 className="display-2">Sell Smarter.</h2>
            <p>
              From accurate valuations to the exclusive Sell Ready program, Jake's
              approach is designed to help you net more — not just sell faster.
            </p>
            <button
              className="btn btn-primary"
              id="sell-get-valuation"
              aria-label="Get a free home valuation"
              onClick={() => document.querySelector('#sell-ready')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get My Free Valuation
            </button>

            <div className="sell-options">
              {sellOptions.map(opt => (
                <div className="sell-option-card" key={opt.title}>
                  <div className="sell-option-icon" aria-hidden="true">{opt.icon}</div>
                  <div className="sell-option-title">{opt.title}</div>
                  <p className="sell-option-desc">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEIGHBORHOODS Panel */}
        {activeTab === 'Neighborhoods' && (
          <div
            id="search-panel-neighborhoods"
            role="tabpanel"
            aria-labelledby="search-tab-neighborhoods"
          >
            <div className="neighborhoods-grid-preview">
              {neighborhoods.map((n, i) => (
                <div
                  key={n.name}
                  className="neighborhood-preview-card"
                  style={{ background: neighborhoodColors[i] }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Explore ${n.name}`}
                >
                  <div>
                    <div className="neighborhood-preview-name">{n.name}</div>
                    <div className="neighborhood-preview-count">{n.listings}*</div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.65rem', color: 'var(--text-light)', marginTop: '1rem', textAlign: 'center', fontStyle: 'italic' }}>
              *Listing counts are representative placeholders. Live IDX integration coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
