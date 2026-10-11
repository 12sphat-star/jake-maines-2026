import '../styles/MeetJake.css'

const pillars = [
  { title: 'Virginia Beach Native',    sub: 'Deep roots across all Hampton Roads communities' },
  { title: 'Local Market Specialist',  sub: 'Neighborhood-level data and hyperlocal insight' },
  { title: 'Sell Ready Creator',       sub: 'Pioneering the pre-sale improvement program' },
  { title: 'Full-Service Approach',    sub: 'From strategy through closing — and beyond' },
]

const awards = [
  { icon: '🏆', label: 'Top Producer',           sub: 'Placeholder — to be verified' },
  { icon: '⭐', label: '5-Star Reviews',          sub: 'Placeholder — to be verified' },
  { icon: '🤝', label: '12 Stone Portfolio',      sub: 'Flagship Agent' },
  { icon: '📍', label: 'Hampton Roads Expert',    sub: '10+ years local' },
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
                alt="Portrait placeholder — Jake Maines, Virginia Beach Realtor (actual photo to be provided)"
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
            <h2 className="display-2">Real Estate, Done Right.</h2>

            <p className="meet-jake-bio">
              Jake Maines isn't just a Virginia Beach Realtor® — he's a dedicated 
              advocate for every client who walks through his door. Born and raised 
              in the Hampton Roads area, Jake brings neighborhood-level insight that 
              national platforms simply can't replicate.
            </p>
            <p className="meet-jake-bio">
              His signature Sell Ready program represents a new standard: connecting 
              eligible homeowners with a vetted contractor network to explore strategic 
              pre-sale improvements that may help maximize their net proceeds — with 
              qualifying costs potentially deferred until closing.
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
        <div className="meet-jake-awards" aria-label="Recognition and achievements">
          <p className="meet-jake-awards-label">Recognition & Credentials</p>
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

        <p style={{ textAlign: 'center', fontSize: '0.62rem', color: 'var(--text-light)', fontStyle: 'italic', marginTop: '1rem' }}>
          ⚠️ Portrait shown is a placeholder. Awards and statistics shown require verification before publication.
        </p>
      </div>
    </section>
  )
}
