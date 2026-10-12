import { useState, useEffect } from 'react'
import '../styles/FeaturedListings.css'
import { Link } from 'react-router-dom'

const filters = ['All', 'Waterfront', 'Luxury', 'New Construction', 'Under $500K']

// Placeholder listings — real IDX data will replace these
const listings = [
  {
    id: 'listing-001',
    image: '/images/property-exterior.png',
    badge: 'New Listing',
    badgeType: 'badge-new',
    price: '$— Placeholder',
    priceNote: 'Actual listing price withheld — IDX integration pending',
    address: '000 Oceanfront Avenue, Virginia Beach, VA',
    beds: 5,
    baths: 4,
    sqft: '3,800',
    tag: 'Waterfront',
  },
  {
    id: 'listing-002',
    image: '/images/property-pool.png',
    badge: 'Featured',
    badgeType: 'badge-new',
    price: '$— Placeholder',
    priceNote: 'Actual listing price withheld — IDX integration pending',
    address: '000 Bay View Lane, Chesapeake, VA',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    tag: 'Luxury',
  },
  {
    id: 'listing-003',
    image: '/images/property-interior.png',
    badge: 'Price Reduced',
    badgeType: 'badge-reduced',
    price: '$— Placeholder',
    priceNote: 'Actual listing price withheld — IDX integration pending',
    address: '000 Hampton Roads Court, Norfolk, VA',
    beds: 3,
    baths: 2,
    sqft: '2,100',
    tag: 'Under $500K',
  },
]

export default function FeaturedListings() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredListings =
  activeFilter === 'All'
    ? listings
    : listings.filter((listing) => listing.tag === activeFilter)
  const [favorites, setFavorites] = useState(() => {
  try {
    const saved = localStorage.getItem('jake-maines-favorites')
    return new Set(saved ? JSON.parse(saved) : [])
  } catch {
    return new Set()
  }
})

useEffect(() => {
  localStorage.setItem(
    'jake-maines-favorites',
    JSON.stringify([...favorites])
  )
}, [favorites])

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <section className="listings-section" id="listings" aria-label="Featured property listings">
      <div className="container">
        {/* Header row */}
        <div className="listings-header-row">
          <div className="section-header">
            <p className="label-overline">Curated Properties</p>
            <hr className="gold-rule" aria-hidden="true" />
            <h2 className="display-2">Featured Listings</h2>
            <p>Hand-selected homes across Virginia Beach and the Hampton Roads region.</p>
          </div>

          {/* Filters */}
          <div className="listings-filter-row" role="group" aria-label="Filter listings">
            {filters.map(f => (
              <button
                key={f}
                className={`listings-filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
                id={`filter-${f.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Listings grid */}
        {filteredListings.length === 0 && (
  <div className="listings-empty">
    <h3>No demonstration properties in this category yet.</h3>
    <p>
      Jake can help you explore available homes that match
      your preferences throughout Hampton Roads.
    </p>
    <button
      type="button"
      className="btn btn-outline"
      onClick={() => setActiveFilter('All')}
    >
      View All Examples
    </button>
  </div>
)}
        <div className="listings-grid" role="list">
          {filteredListings.map(listing => (
            <article
              key={listing.id}
              className="property-card"
              id={listing.id}
              role="listitem"
              aria-label={`Property at ${listing.address}`}
              tabIndex={0}
            >
              {/* Image */}
              <div className="property-card-image">
                <img
                  src={listing.image}
                  alt={`Property placeholder — ${listing.address}`}
                  loading="lazy"
                />
                <span className={`property-card-badge ${listing.badgeType}`} aria-label={listing.badge}>
                  {listing.badge}
                </span>
                <button
                  className="property-card-favorite"
                  onClick={(e) => { e.stopPropagation(); toggleFavorite(listing.id) }}
                  aria-label={favorites.has(listing.id) ? 'Remove from favorites' : 'Add to favorites'}
                  aria-pressed={favorites.has(listing.id)}
                >
                  {favorites.has(listing.id) ? '❤️' : '🤍'}
                </button>
              </div>

              
              {/* Body */}
              <div className="property-card-body">
                <div className="property-card-price">
                  {listing.price}
                  <span className="property-card-price-note">
                    {' '}ⓘ {listing.priceNote}
                  </span>
                </div>

                <div className="property-card-address">
                  {listing.address}
                </div>

                <div className="property-card-meta">
                  <div className="property-meta-item">
                    <span className="property-meta-icon" aria-hidden="true">🛏</span>
                    <span>{listing.beds} Beds</span>
                  </div>

                  <div className="property-meta-item">
                    <span className="property-meta-icon" aria-hidden="true">🚿</span>
                    <span>{listing.baths} Baths</span>
                  </div>

                  <div className="property-meta-item">
                    <span className="property-meta-icon" aria-hidden="true">📐</span>
                    <span>{listing.sqft} sq ft</span>
                  </div>
                </div>

                <div className="property-card-actions">
                  <Link
                    to="/contact"
                    state={{
                      propertyInquiry: {
                        id: listing.id,
                        address: listing.address,
                        category: listing.tag,
                      },
                    }}
                    className="btn btn-primary property-inquiry-btn"
                  >
                    Ask Jake About Similar Homes →
                  </Link>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* View all */}

{/* Featured Property Video Tour */}
<div className="featured-video-section">
  <div className="featured-video-heading">
    <p className="label-overline">Experience the Property</p>
    <h3>Take a Tour With Jake</h3>
    <p>
      Explore a featured property through video and discover
      how Jake brings homes to life for prospective buyers.
    </p>
  </div>

  <div className="featured-video-frame">
    <iframe
      src="https://www.youtube-nocookie.com/embed/OWGxpI1cujQ"
      title="Jake Maines Realty Featured Property Tour"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>

  <div className="featured-video-actions">
    <Link
      to="/contact"
      state={{
        propertyInquiry: {
          id: 'featured-video-tour',
          address: 'Featured Property Video Tour',
          category: 'Video Tour',
        },
      }}
      className="btn btn-primary"
    >
      Ask Jake About This Property →
    </Link>
  </div>
</div>

      <div className="listings-view-all">
  <Link
    to="/buy"
    className="btn btn-outline"
    id="view-all-listings-btn"
  >
    Find Homes That Match Your Needs →
  </Link>
</div>

        <p className="listings-disclaimer" role="note">
          Photos shown are illustrative placeholders. Actual property images, addresses, and prices will be populated via IDX integration prior to launch. 
          All content shown is for design demonstration only.
        </p>
      </div>
    </section>
  )
}
