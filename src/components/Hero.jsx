import { Link } from 'react-router-dom'
import '../styles/Hero.css'

const LIVE_SEARCH_URL = 'https://jakemainesrealtor.com/virginia/virginia-beach/'

export default function Hero() {
  return (
    <section className="hero" aria-label="Jake Maines Realty introduction">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/images/hero-beach.png"
          alt=""
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay-1" />
        <div className="hero-overlay-2" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-location">
            <span className="hero-location-dot" />
            VIRGINIA BEACH & HAMPTON ROADS · JAKE MAINES REALTY
          </div>

          <h1 className="hero-title">
            A Smarter Way to Buy.<br />
            <span>A Better Way to Sell.</span>
          </h1>

          <p className="hero-subtitle">
            Navigating Hampton Roads real estate with hyperlocal market insight, trusted guidance, 
            and innovative pre-sale strategies to maximize your home's value.
          </p>

          <div className="hero-actions">
            <Link
              to="/sell"
              className="hero-btn hero-btn-primary"
              id="hero-sell-ready-cta"
            >
              Explore Sell Ready
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href={LIVE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
              id="hero-search-cta"
            >
              Search Available Homes
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="hero-search-note">
            Property search connects directly to Jake’s live REIN/MLS search in a new tab.
          </p>

          <div className="hero-community">
            <span className="hero-community-line" />
            <span>VIRGINIA BEACH · CHESAPEAKE · NORFOLK · PORTSMOUTH · SUFFOLK · HAMPTON · NEWPORT NEWS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
