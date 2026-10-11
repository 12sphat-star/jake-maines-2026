import { Link } from 'react-router-dom'
import '../styles/BuyerExperience.css'

const SEARCH_URL = 'https://jakemainesrealtor.com/virginia/virginia-beach/'

const paths = [
  {
    number: '01',
    title: 'Search available homes',
    description: 'Browse Virginia Beach homes using Jake’s existing property-search system.',
    label: 'Open live home search',
    href: SEARCH_URL,
    external: true,
  },
  {
    number: '02',
    title: 'Explore neighborhoods',
    description: 'Get to know the different places and lifestyles across Virginia Beach.',
    label: 'Discover neighborhoods',
    href: '/neighborhoods',
  },
  {
    number: '03',
    title: 'Connect with Jake',
    description: 'Discuss your home search, priorities, and next steps with a local real estate professional.',
    label: 'Start a conversation',
    href: '/contact',
  },
]

const communities = [
  {
    title: 'Coastal & beach living',
    names: 'Oceanfront · North End · Chic’s Beach · Sandbridge · Croatan',
  },
  {
    title: 'Established neighborhoods',
    names: 'Great Neck · Little Neck · Thoroughgood · Bayside · Lynnhaven',
  },
  {
    title: 'More communities to explore',
    names: 'Kempsville · Red Mill · Princess Anne · Salem · Green Run · Timberlake · Aragona Village · Town Center',
  },
]

export default function BuyerExperience() {
  return (
    <div className="bx-page">
      <section className="bx-hero" aria-labelledby="bx-title">
        <div className="bx-hero-inner">
          <div className="bx-hero-copy">
            <span className="bx-eyebrow">JAKE MAINES REALTY / BUY A HOME</span>
            <h1 id="bx-title">Find more than a house. <em>Find where you belong.</em></h1>
            <p>
              From the first search to the right neighborhood, explore your next move
              in Virginia Beach with a clear path forward.
            </p>
            <div className="bx-actions">
              <a className="bx-button bx-button-primary" href={SEARCH_URL} target="_blank" rel="noopener noreferrer">
                Search available homes <span aria-hidden="true">↗</span>
              </a>
              <Link className="bx-button bx-button-outline" to="/neighborhoods">
                Explore neighborhoods <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="bx-search-note">Property search opens on Jake’s existing website in a new tab.</p>
          </div>
          <div className="bx-hero-image">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85"
              alt="Illustrative contemporary home exterior"
            />
            <span>YOUR NEXT CHAPTER STARTS HERE</span>
          </div>
        </div>
      </section>

      <section className="bx-section" aria-labelledby="bx-path-title">
        <div className="bx-container">
          <div className="bx-section-heading">
            <span className="bx-eyebrow">YOUR HOME-BUYING JOURNEY</span>
            <h2 id="bx-path-title">Three ways to <em>get started.</em></h2>
            <p>Whether you're ready to browse or just exploring possibilities, choose the next step that works for you.</p>
          </div>
          <div className="bx-path-grid">
            {paths.map((path) => (
              <article className="bx-path-card" key={path.number}>
                <span className="bx-path-number">{path.number}</span>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                {path.external ? (
                  <a href={path.href} target="_blank" rel="noopener noreferrer">{path.label} <span aria-hidden="true">↗</span></a>
                ) : (
                  <Link to={path.href}>{path.label} <span aria-hidden="true">→</span></Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bx-section bx-neighborhood-section" aria-labelledby="bx-neighborhood-title">
        <div className="bx-container">
          <div className="bx-section-heading">
            <span className="bx-eyebrow">DISCOVER VIRGINIA BEACH</span>
            <h2 id="bx-neighborhood-title">Every neighborhood has <em>its own story.</em></h2>
            <p>Explore communities by setting and character. These groupings are a starting point—not personalized recommendations.</p>
          </div>
          <div className="bx-community-grid">
            {communities.map((community) => (
              <article className="bx-community-card" key={community.title}>
                <h3>{community.title}</h3>
                <p>{community.names}</p>
              </article>
            ))}
          </div>
          <div className="bx-neighborhood-footer">
            <Link className="bx-button bx-button-primary" to="/neighborhoods">
              Explore all neighborhoods <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bx-bottom-cta" aria-labelledby="bx-cta-title">
        <div className="bx-container bx-bottom-inner">
          <div>
            <span className="bx-eyebrow">READY FOR YOUR NEXT MOVE?</span>
            <h2 id="bx-cta-title">Let's talk about <em>what home means to you.</em></h2>
            <p>Connect with Jake to discuss your search and what matters most.</p>
          </div>
          <Link className="bx-button bx-button-gold" to="/contact">Connect with Jake <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <p className="bx-demo-disclaimer">12 Stone portfolio demonstration. Lifestyle photography is illustrative. Listings are accessed through Jake’s existing website; no IDX feed is integrated into this demo.</p>
    </div>
  )
}
