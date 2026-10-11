import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/PropertySearch.css'

// Illustrative lifestyle photography, not Jake Maines Realty listings.
const scenes = {
  buy: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=82',
  sell: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=82',
  area: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1100&q=82',
}

const communities = [
  'Virginia Beach Oceanfront',
  'Great Neck',
  'Sandbridge',
  'Chesapeake',
  'Norfolk',
  'Suffolk',
]

const prices = [
  ['', 'Any budget'],
  ['0-300k', 'Under $300K'],
  ['300k-500k', '$300K–$500K'],
  ['500k-750k', '$500K–$750K'],
  ['750k-1m', '$750K–$1M'],
  ['1m+', '$1M+'],
]

const experiences = [
  { id: 'buy', label: 'Buy a home', kicker: '01 / FIND YOUR PLACE' },
  { id: 'sell', label: 'Sell a home', kicker: '02 / MOVE FORWARD' },
  { id: 'area', label: 'Neighborhoods', kicker: '03 / EXPLORE LOCAL' },
]

export default function PropertySearch() {
  const [active, setActive] = useState('buy')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [beds, setBeds] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const select = (id) => {
    setActive(id)
    setSubmitted(false)
  }

  const summary = [
    location.trim() || 'Hampton Roads',
    prices.find(([value]) => value === price)?.[1] || 'Any budget',
    beds ? `${beds}+ bedrooms` : 'Any bedrooms',
  ].join(' · ')

  const selectedExperience = experiences.find(({ id }) => id === active)

  const handleReview = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="search"
      className="ps-discovery"
      aria-labelledby="ps-title"
    >
      <div className="ps-container">
        <header className="ps-heading">
          <span className="ps-eyebrow">
            JAKE MAINES REALTY <span aria-hidden="true">—</span> HAMPTON ROADS
          </span>
          <h2 id="ps-title">
            Your next chapter <em>starts here.</em>
          </h2>
          <p>
            Find your home, plan your sale, or discover your next neighborhood.
          </p>
        </header>

        <div className="ps-module">
          <div
            className="ps-tabs"
            role="tablist"
            aria-label="Choose your real estate experience"
          >
            {experiences.map(({ id, label }) => (
              <button
                key={id}
                id={`ps-tab-${id}`}
                type="button"
                role="tab"
                aria-selected={active === id}
                aria-controls="ps-panel"
                className={`ps-tab ${active === id ? 'is-active' : ''}`}
                onClick={() => select(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <div
            className="ps-content"
            id="ps-panel"
            role="tabpanel"
            aria-labelledby={`ps-tab-${active}`}
          >
            <div className="ps-visual">
              <img
                src={scenes[active]}
                alt={
                  active === 'buy'
                    ? 'Illustrative contemporary home exterior'
                    : active === 'sell'
                      ? 'Illustrative thoughtfully designed home interior'
                      : 'Illustrative wooded landscape'
                }
                loading="lazy"
              />
              <div className="ps-visual-shade" />
              <div className="ps-visual-caption">
                <span>{selectedExperience.kicker}</span>
                <strong>
                  {active === 'buy'
                    ? 'A home that feels like yours.'
                    : active === 'sell'
                      ? 'Sell with intention.'
                      : 'Find your sense of place.'}
                </strong>
              </div>
            </div>

            <div className="ps-panel-copy">
              {active === 'buy' && (
                <>
                  <span className="ps-eyebrow">YOUR SEARCH, YOUR WAY</span>
                  <h3>
                    Find your <em>kind of home.</em>
                  </h3>
                  <p>
                    Tell us what matters to you. This demo helps organize your
                    preferences; it does not search live listings.
                  </p>

                  <form className="ps-form" onSubmit={handleReview}>
                    <label>
                      City or neighborhood
                      <input
                        value={location}
                        onChange={(event) => {
                          setLocation(event.target.value)
                          setSubmitted(false)
                        }}
                        placeholder="Where would you love to live?"
                      />
                    </label>

                    <div className="ps-fields">
                      <label>
                        Budget
                        <select
                          value={price}
                          onChange={(event) => {
                            setPrice(event.target.value)
                            setSubmitted(false)
                          }}
                        >
                          {prices.map(([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </label>

                      <label>
                        Bedrooms
                        <select
                          value={beds}
                          onChange={(event) => {
                            setBeds(event.target.value)
                            setSubmitted(false)
                          }}
                        >
                          <option value="">Any</option>
                          {[1, 2, 3, 4, 5].map((number) => (
                            <option key={number} value={number}>
                              {number}+ bedrooms
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <button className="ps-primary" type="submit">
                      Review my preferences
                      <span aria-hidden="true">↗</span>
                    </button>
                  </form>

                  {submitted && (
                    <div className="ps-result" role="status">
                      <strong>Your home preferences</strong>
                      <p>{summary}</p>
                      <p>
                        These preferences are shown only on this page; they
                        have not been sent to Jake.
                      </p>
                      <Link to="/contact">Discuss your search →</Link>
                    </div>
                  )}
                </>
              )}

              {active === 'sell' && (
                <>
                  <span className="ps-eyebrow">JAKE'S SELL READY APPROACH</span>
                  <h3>
                    Improve before you move. <em>Unlock your home's potential.</em>
                  </h3>
                  <p>
                    Explore how targeted improvements could strengthen your
                    home's appeal and potentially improve your selling outcome.
                  </p>
                  <div className="ps-steps">
                    <span>01 Evaluate</span>
                    <span>02 Improve</span>
                    <span>03 Launch</span>
                  </div>
                  <Link className="ps-primary" to="/sell">
                    Explore Sell Ready
                    <span aria-hidden="true">↗</span>
                  </Link>
                </>
              )}

              {active === 'area' && (
                <>
                  <span className="ps-eyebrow">DISCOVER HAMPTON ROADS</span>
                  <h3>
                    Explore your <em>next neighborhood.</em>
                  </h3>
                  <p>
                    Select a community to add it to your home preferences,
                    or explore the neighborhood guide.
                  </p>
                  <div className="ps-communities">
                    {communities.map((name) => (
                      <button
                        key={name}
                        type="button"
                        onClick={() => {
                          setLocation(name)
                          select('buy')
                        }}
                      >
                        {name}
                        <span aria-hidden="true">↗</span>
                      </button>
                    ))}
                  </div>
                  <Link className="ps-text-link" to="/neighborhoods">
                    Explore all neighborhoods →
                  </Link>
                </>
              )}
            </div>
          </div>

          <p className="ps-disclaimer">
            Illustrative lifestyle photography. Portfolio demonstration only:
            no live property listings or IDX connection.
          </p>
        </div>
      </div>
    </section>
  )
}
