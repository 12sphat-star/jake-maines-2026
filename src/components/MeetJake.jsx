import '../styles/MeetJake.css'


const pillars = [
  {
    title: 'Local Market Knowledge',
    sub: 'Virginia Beach and greater Hampton Roads',
  },
  {
    title: 'Marketing Background',
    sub: 'Strategic property presentation and positioning',
  },
  {
    title: 'Sell Ready Program',
    sub: 'Explore improvements before listing',
  },
  {
    title: 'Personalized Guidance',
    sub: 'From your first conversation through closing',
  },
]



const awards = [
  {
    icon: '🏡',
    label: 'Buyer Guidance',
    sub: 'From home search to closing',
  },
  {
    icon: '📈',
    label: 'Seller Strategy',
    sub: 'Preparation, pricing and marketing',
  },
  {
    icon: '🤝',
    label: 'Personal Service',
    sub: 'Guidance built around your goals',
  },
  {
    icon: '📍',
    label: 'Hampton Roads',
    sub: 'Local real estate knowledge',
  },
]


export default function MeetJake() {
  return (
    <section className="meet-jake" id="about" aria-label="About Jake Maines">
      <div className="container">
        <div className="meet-jake-grid">

          {/* Portrait column */}
          <div className="meet-jake-portrait-col">
            <div className="meet-jake-portrait-frame">
              <img
                src="/images/jake-portrait.png"
                alt="Jake Maines, Virginia Beach real estate professional"
                loading="lazy"
              />
            </div>
            <div className="meet-jake-badge" aria-label="Jake Maines credentials">
              <div className="meet-jake-badge-title">Jake Maines</div>
              <div className="meet-jake-badge-sub">Realtor® · Virginia Beach</div>
            </div>
          </div>

          {/* Content column */}
          <div className="meet-jake-content">
            <p className="label-overline">Your Local Expert</p>
            <hr className="gold-rule" aria-hidden="true" />
            <h2 className="display-2">Real Estate Is Personal. Your Strategy Should Be Too.</h2>

           
<p>
  Jake Maines made Hampton Roads his home in 2011 when
  he moved to the area to study marketing at Old Dominion
  University. Today, he helps buyers and sellers navigate
  the Virginia Beach and greater Hampton Roads real estate
  market with local knowledge, marketing experience, and
  personalized guidance.
</p>

<p>
  Whether you're searching for the right home or preparing
  to sell, Jake focuses on understanding your goals,
  developing a thoughtful strategy, and helping you make
  informed decisions. From neighborhood insights to
  property preparation and negotiations, his approach
  puts your priorities at the center of the process.
</p>


            <div className="meet-jake-pillars" aria-label="Jake's key differentiators">
              {pillars.map(p => (
                <div className="meet-jake-pillar" key={p.title}>
                  <div className="meet-jake-pillar-title">{p.title}</div>
                  <div className="meet-jake-pillar-sub">{p.sub}</div>
                </div>
              ))}
            </div>

            <div className="meet-jake-actions">
              <button
                className="btn btn-navy"
                id="meet-jake-connect-btn"
                aria-label="Connect with Jake Maines"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Connect with Jake
              </button>

              <div className="meet-jake-social" aria-label="Jake's social profiles">
                <a
                  href="https://www.youtube.com/@jakemaines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Jake Maines on YouTube"
                  title="YouTube"
                >
                  ▶
                </a>
                <a
                  href="https://www.zillow.com/profile/jakemaines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Jake Maines on Zillow"
                  title="Zillow"
                >
                  Z
                </a>
                <a
                  href="https://jakemainesrealtor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Jake Maines official website"
                  title="Website"
                >
                  ⌂
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Awards strip */}
        <div className="meet-jake-awards" aria-label="Real estate services and client advantages">
          <p className="meet-jake-awards-label">How Jake Helps His Clients</p>
          <div className="meet-jake-awards-row">
            {awards.map(a => (
              <div key={a.label} className="award-item">
                <span className="award-icon" aria-hidden="true">{a.icon}</span>
                <span className="award-label">{a.label}</span>
                <span className="award-sub">{a.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
