
import '../styles/Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

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
            LOCAL EXPERTISE. SMARTER REAL ESTATE.
          </div>

         <h1 className="hero-title">
  A Smarter Way to Buy.<br />
  <span>A Better Way to Sell.</span>
</h1>

     <p className="hero-subtitle">
  From finding the right home to unlocking your property's
  potential, Jake Maines brings local expertise and innovative
  selling solutions to every move.
</p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-btn hero-btn-primary"
              onClick={() => scrollTo('search')}
            >
              Explore Homes
              <span aria-hidden="true">↗</span>
            </button>

            <button
              type="button"
              className="hero-btn hero-btn-secondary"
              onClick={() => scrollTo('sell-ready')}
            >
              Discover Sell Ready
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="hero-community">
            <span className="hero-community-line" />
            <span>VIRGINIA BEACH • CHESAPEAKE • NORFOLK • HAMPTON ROADS</span>
          </div>
        </div>
      </div>

      
    </section>
  )
}
