import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/SellReady.css'
const stages = [
  {
    number: '01',
    label: 'Evaluate',
    eyebrow: 'DISCOVER THE OPPORTUNITY',
    title: 'What could your home be worth?',
    description:
      "Before listing, Jake helps identify improvements that could increase your home's appeal and potential selling price. The goal is to understand where an investment might make financial sense.",
    bullets: [
      'Evaluate your property',
      'Identify value-building opportunities',
      'Explore potential returns',
    ],
    symbol: '⌂',
  },
  {
    number: '02',
    label: 'Improve',
    eyebrow: 'MAKE SMART IMPROVEMENTS',
    title: 'Invest where it could matter most.',
    description:
      'Not every renovation delivers the same value. Jake helps you explore targeted improvements, understand the estimated costs, and determine which updates may help your home compete more effectively.',
    bullets: [
      'Prioritize strategic renovations',
      'Review improvement costs',
      'Prepare your home for buyers',
    ],
    symbol: '✳',
  },
  {
    number: '03',
    label: 'Launch',
    eyebrow: 'POSITION FOR A STRONGER SALE',
    title: 'Bring your improved home to market.',
    description:
      'With the improvements complete, Jake develops a listing and marketing strategy designed to showcase your property, attract qualified buyers, and pursue the strongest achievable outcome.',
    bullets: [
      'Professional property presentation',
      'Strategic pricing and marketing',
      'Negotiate with your goals in mind',
    ],
    symbol: '↗',
  },
]
const money = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
const clamp = (n, max = 100000000) => Math.min(max, Math.max(0, Number.isFinite(n) ? n : 0))
export default function SellReady() {
  const navigate = useNavigate()
  const [active, setActive] = useState(0)
  const [tourOpen, setTourOpen] = useState(false)
  const [asIs, setAsIs] = useState(300000)
  const [improved, setImproved] = useState(340000)
  const [improvements, setImprovements] = useState(15000)
  const [sellingRate, setSellingRate] = useState(0)
  const [visible, setVisible] = useState(true)
  const root = useRef(null)
  useEffect(() => {
    const node = root.current
    if (!node || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.08 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  const goToContact = () => {
    navigate('/contact')
  }
  const update = (setter, max) => (event) => setter(clamp(Number(event.target.value), max))
  const asIsNet = asIs * (1 - sellingRate / 100)
  const improvedNet = improved * (1 - sellingRate / 100) - improvements
  const delta = improvedNet - asIsNet
  const current = stages[active]
  useEffect(() => {
    if (!tourOpen) return
    const closeOnEscape = (event) => { if (event.key === 'Escape') setTourOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [tourOpen])
  return (
    <section className={`sell-ready ${visible ? 'sr-visible' : ''}`} id="sell-ready" ref={root} aria-labelledby="sr-heading">
      <div className="container">
        <div className="sr-intro sr-reveal">
          <div className="sr-intro-copy">
            <div className="sr-kicker"><span className="sr-kicker-dot" /> JAKE'S SELL READY PROGRAM</div>
            <h2 id="sr-heading" className="sr-title">
  Improve Before You Move.
  <span> Unlock Your Home's Potential.</span>
</h2>
            <p className="sr-lead">
  Don't just put your home on the market.
  Discover how strategic renovations and improvements
  could increase buyer interest, strengthen your
  home's market value, and potentially put more
  money in your pocket when you sell.
</p>
            <div className="sr-actions">
              <button className="sr-button sr-button-primary" type="button" onClick={goToContact}>Discuss My Selling Options <span aria-hidden="true">↗</span></button>
              <a className="sr-button sr-button-outline" href="https://www.youtube.com/watch?v=z7Nk3Ofy5r4" target="_blank" rel="noopener noreferrer">Watch Jake's Story <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="sr-video-area">
            <div className="sr-video-topline"><span className="sr-live-dot" /> THE SELL READY STORY</div>
            <div className="sr-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/z7Nk3Ofy5r4" title="Jake Maines Sell Ready program video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            <p className="sr-video-caption">Watch Jake explain the thinking behind Sell Ready.</p>
          </div>
        </div>
        {/* Signature interactive selling journey */}
        <div className="sr-process sr-reveal">
          <div className="sr-journey-heading">
            <span className="sr-overline">THE SELL READY EXPERIENCE</span>
            <h3>A thoughtful plan. <em>Built around your home.</em></h3>
            <p>Explore the three decisions that shape a more thoughtful selling strategy.</p>
          </div>
          <div className="sr-timeline" aria-label="Three stages of Sell Ready">
            <div className="sr-timeline-track" aria-hidden="true"><span style={{ width: `${(active / 2) * 100}%` }} /></div>
            {stages.map((stage, index) => (
              <button
                key={stage.number}
                type="button"
                className={`sr-timeline-card ${active === index ? 'is-active' : ''}`}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                aria-controls="sr-stage-panel"
              >
                <span className="sr-timeline-top"><span className="sr-timeline-number">{stage.number}</span><span className="sr-timeline-indicator" aria-hidden="true">{active === index ? '●' : '○'}</span></span>
                <strong>{stage.label}</strong>
                <small>{stage.eyebrow.toLowerCase()}</small>
                <span className="sr-timeline-link">Explore this stage <span aria-hidden="true">↗</span></span>
              </button>
            ))}
          </div>
          <div className="sr-feature-panel" id="sr-stage-panel" key={active} aria-live="polite">
            <div className="sr-feature-copy">
              <span className="sr-feature-eyebrow">STAGE {current.number} / 03 · {current.label.toUpperCase()}</span>
              <h4>{current.title}</h4>
              <p>{current.description}</p>
              <div className="sr-feature-points">
                {current.bullets.map((bullet, index) => <span key={bullet}><b>0{index + 1}</b> {bullet}</span>)}
              </div>
              <div className="sr-feature-actions">
                <button type="button" className="sr-feature-next" onClick={() => setActive((active + 1) % stages.length)}>
                  {active === 2 ? 'Explore from the beginning' : 'Discover the next stage'} <span aria-hidden="true">→</span>
                </button>
                <span className="sr-feature-counter">{current.number} <span>/ 03</span></span>
              </div>
            </div>
            <div className={`sr-feature-art sr-feature-art-${active}`} aria-hidden="true">
              <div className="sr-art-glow" />
              <div className="sr-art-outline sr-art-outline-one" />
              <div className="sr-art-outline sr-art-outline-two" />
              <div className="sr-art-main-number">{current.number}</div>
              <span className="sr-art-label">{current.label}</span>
              <span className="sr-art-bottom">YOUR HOME · YOUR NEXT CHAPTER</span>
            </div>
          </div>
          <p className="sr-journey-note">A conceptual overview of the selling process. Individual results and program eligibility vary.</p>
        </div>
        <div className="sr-calculator sr-reveal">
          <div className="sr-calculator-copy"><span className="sr-overline">INTERACTIVE SELLING SCENARIOS</span><h3>
  Improve Before You Move.
  <br />
  What Could You Potentially Gain?
</h3>
          <p>
  See how strategic improvements could affect your
  potential selling proceeds. Compare selling your
  home as-is with making targeted renovations before
  listing, using numbers you can adjust yourself.
  Results are hypothetical and not a guarantee
  of your home's value or sale proceeds.
</p>
          <div className="sr-calc-note"><strong>Consider the full picture.</strong> Improvements cost money, and a higher sale price doesn't always mean a better net result. Jake can help you discuss your options.</div>
          </div>
          <div className="sr-calc-panel">
            <div className="sr-calc-grid">
              <label className="sr-field"><span>As-is sale price ($)</span><input type="number" min="0" step="1000" value={asIs} onChange={update(setAsIs)} /></label>
              <label className="sr-field"><span>Sale price after improvements ($)</span><input type="number" min="0" step="1000" value={improved} onChange={update(setImproved)} /></label>
              <label className="sr-field"><span>Improvement costs ($)</span><input type="number" min="0" step="500" value={improvements} onChange={update(setImprovements)} /></label>
              <label className="sr-field"><span>Assumed selling costs for both options (%)</span><input type="number" min="0" max="100" step="0.5" value={sellingRate} onChange={update(setSellingRate, 100)} /></label>
            </div>
            <div className="sr-calc-results">
            {/* OPTION 1: SELL AS-IS */}
            <div className="sr-calc-result">
              <span className="sr-option-label">OPTION 1</span>
              <h4>Sell As-Is</h4>
              <p>Sell your home without making improvements.</p>

              <div className="sr-breakdown-row">
                <span>Estimated sale price</span>
                <strong>{money(asIs)}</strong>
              </div>
              <div className="sr-breakdown-row">
                <span>Assumed selling costs ({sellingRate}%)</span>
                <strong>−{money(asIs * sellingRate / 100)}</strong>
              </div>
              <div className="sr-option-total">
                <span>Illustrative proceeds</span>
                <strong>{money(asIsNet)}</strong>
              </div>
            </div>

            {/* OPTION 2: SELL READY */}
            <div className="sr-calc-result sr-calc-sell-ready">
              <span className="sr-option-label">OPTION 2</span>
              <h4>Sell Ready</h4>
              <p>Make strategic improvements before selling.</p>

              <div className="sr-breakdown-row">
                <span>Estimated sale price</span>
                <strong>{money(improved)}</strong>
              </div>
              <div className="sr-breakdown-row">
                <span>Assumed selling costs ({sellingRate}%)</span>
                <strong>−{money(improved * sellingRate / 100)}</strong>
              </div>
              <div className="sr-breakdown-row">
                <span>Improvement investment</span>
                <strong>−{money(improvements)}</strong>
              </div>
              <div className="sr-option-total">
                <span>Illustrative proceeds</span>
                <strong>{money(improvedNet)}</strong>
              </div>
            </div>
          </div>

          <div className={`sr-difference ${delta < 0 ? 'sr-difference-negative' : ''}`}>
            <span>
              {delta > 0
                ? 'Potential Additional Proceeds with Sell Ready'
                : delta < 0
                  ? 'Potential Reduction in Proceeds with Sell Ready'
                  : 'No Difference Between Scenarios'}
            </span>
            <strong aria-live="polite">
              {delta > 0 ? '+' : delta < 0 ? '−' : ''}{money(Math.abs(delta))}
            </strong>
            <small>
              Hypothetical comparison only. Excludes mortgage payoff, taxes,
              other closing expenses, financing charges, and transaction-specific
              costs. Selling costs are adjustable assumptions, not a quoted or
              standard fee. Actual results may vary.
            </small>
          </div>

          <button className="sr-button sr-button-primary sr-calc-cta" type="button" onClick={goToContact}>Discuss My Selling Options <span aria-hidden="true">→</span></button>
          </div>
        </div>
        {/* Real property footage — intentionally compact for the portfolio demo */}
        <div className="sr-property-showcase sr-reveal">
          <div className="sr-section-heading">
            <span className="sr-overline">FEATURED PROPERTY</span>
            <h3>Real Homes. Real Possibilities.</h3>
            <p>Take a closer look at a property featured by Jake Maines.</p>
          </div>
         <div className="sr-property-video">
  <iframe
    src="https://www.youtube.com/embed/xFF_p7BVNTA"
    title="Jake Maines featured property walkthrough"
    width="100%"
    height="100%"
    style={{ border: 0, aspectRatio: '16 / 9' }}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>
          <button type="button" className="sr-video-expand" onClick={() => setTourOpen(true)}>
            <span aria-hidden="true">⛶</span> Enlarge property tour
          </button>
        </div>
        {tourOpen && (
          <div className="sr-tour-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setTourOpen(false) }}>
            <div className="sr-tour-dialog" role="dialog" aria-modal="true" aria-label="Expanded property tour">
              <button className="sr-tour-close" type="button" onClick={() => setTourOpen(false)} aria-label="Close property tour">✕ Close</button>
              <iframe
  src="https://www.youtube.com/embed/xFF_p7BVNTA?autoplay=1"
  title="Expanded Jake Maines property tour"
  width="100%"
  height="100%"
  style={{ border: 0, aspectRatio: '16 / 9' }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>
            </div>
          </div>
        )}
        <p className="sr-disclaimer"><strong>Sell Ready disclosure:</strong> Any renovation work, costs, financing, or payment arrangements must be reviewed and agreed upon separately. Improvements do not guarantee a higher sale price, faster sale, or greater net proceeds.</p>
      </div>
    </section>
  )
}
