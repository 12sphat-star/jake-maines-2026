import { useState } from 'react'
import '../styles/FeaturedListings.css'

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
  const [favorites, setFavorites] = useState(new Set())

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
        <div className="listings-grid" role="list">
          {listings.map(listing => (
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
                  <span className="property-card-price-note"> ⓘ {listing.priceNote}</span>
                </div>
                <div className="property-card-address">{listing.address}</div>

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
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="listings-view-all">
          <button
            className="btn btn-outline"
            id="view-all-listings-btn"
            aria-label="View all available properties"
            onClick={() => alert('Full IDX property search launching soon!')}
          >
            View All Properties
          </button>
        </div>

        <p className="listings-disclaimer" role="note">
          Photos shown are illustrative placeholders. Actual property images, addresses, and prices will be populated via IDX integration prior to launch. 
          All content shown is for design demonstration only.
        </p>
      </div>
    </section>
  )
}
