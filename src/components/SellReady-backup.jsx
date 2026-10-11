import { useEffect, useRef, useState } from 'react'
import '../styles/SellReady.css'

const stages = [
  { number: '01', label: 'Evaluate', title: 'See your home through a buyer’s eyes.', eyebrow: 'START WITH CLARITY', description: 'Walk through the property, understand your goals, and identify improvements worth exploring before you list.', bullets: ['Property walkthrough', 'Local-market perspective', 'Improvement opportunities'], symbol: '⌂' },
  { number: '02', label: 'Improve', title: 'Make every improvement intentional.', eyebrow: 'BUILD THE RIGHT PLAN', description: 'Explore targeted updates with Jake and his contractor network. Eligible costs may be deferred until closing under program terms.', bullets: ['Prioritize the right projects', 'Review costs and terms', 'Coordinate next steps'], symbol: '✳' },
  { number: '03', label: 'Launch', title: 'Put your best home forward.', eyebrow: 'READY FOR THE MARKET', description: 'Prepare your home for photography, marketing, and buyer interest with a listing strategy built around your property.', bullets: ['Professional presentation', 'Thoughtful launch strategy', 'Clear next steps'], symbol: '↗' },
]

const money = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
const clamp = (n, max = 100000000) => Math.min(max, Math.max(0, Number.isFinite(n) ? n : 0))

export default function SellReady() {
  const [active, setActive] = useState(0)
  const [asIs, setAsIs] = useState(300000)
  const [improved, setImproved] = useState(340000)
  const [improvements, setImprovements] = useState(15000)
  const [sellingRate, setSellingRate] = useState(6)
  const [visible, setVisible] = useState(false)
  const root = useRef(null)

  useEffect(() => {
    const node = root.current
    if (!node) return
    if (!('IntersectionObserver' in window)) { setVisible(true); return }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.08 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const goToContact = () => {
    const destination = document.getElementById('contact')
    if (destination) destination.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }
  const update = (setter, max) => (event) => setter(clamp(Number(event.target.value), max))
  const asIsNet = asIs * (1 - sellingRate / 100)
  const improvedNet = improved * (1 - sellingRate / 100) - improvements
  const delta = improvedNet - asIsNet
  const current = stages[active]

  return (
    <section className={`sell-ready ${visible ? 'sr-visible' : ''}`} id="sell-ready" ref={root} aria-labelledby="sr-heading">
      <div className="container">
        <div className="sr-intro sr-reveal">
          <div className="sr-intro-copy">
            <div className="sr-kicker"><span className="sr-kicker-dot" /> JAKE'S SELL READY PROGRAM</div>
            <h2 id="sr-heading" className="sr-title">Before You Sell As-Is, <span>See What's Possible.</span></h2>
            <p className="sr-lead">Your home may have more potential than you realize. Explore targeted improvements before listing, with qualifying costs that may be deferred until closing under program terms.</p>
            <div className="sr-actions">
              <button className="sr-button sr-button-primary" type="button" onClick={goToContact}>Explore My Home's Potential <span aria-hidden="true">↗</span></button>
              <a className="sr-button sr-button-outline" href="https://www.youtube.com/watch?v=z7Nk3Ofy5r4" target="_blank" rel="noopener noreferrer">Watch Jake's Story <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="sr-video-area">
            <div className="sr-video-topline"><span className="sr-live-dot" /> THE SELL READY STORY</div>
            <div className="sr-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/z7Nk3Ofy5r4" title="Jake Maines Sell Ready program video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            <p className="sr-video-caption">Watch Jake explain the thinking behind Sell Ready.</p>
          </div>
        </div>

        <div className="sr-process sr-reveal">
          <div className="sr-process-heading"><div><span className="sr-overline">A DIFFERENT WAY TO PREPARE</span><h3>One home. Three smart moves.</h3></div><p>Explore each stage of the Sell Ready journey.</p></div>
          <div className="sr-journey">
            <div className="sr-stage-nav" aria-label="Sell Ready journey stages">
              {stages.map((stage, index) => <button key={stage.number} type="button" className={`sr-stage-button ${active === index ? 'is-active' : ''}`} onClick={() => setActive(index)} aria-pressed={active === index}>
                <span className="sr-stage-index">{stage.number}</span><span className="sr-stage-name"><strong>{stage.label}</strong><small>{stage.eyebrow}</small></span><span className="sr-stage-arrow" aria-hidden="true">↗</span>
              </button>)}
            </div>
            <div className={`sr-stage-showcase sr-scene-${active}`}>
              <div className="sr-scene" aria-hidden="true"><div className="sr-scene-grid" /><div className="sr-scene-orbit sr-scene-orbit-one" /><div className="sr-scene-orbit sr-scene-orbit-two" /><div className="sr-scene-house"><div className="sr-house-roof"/><div className="sr-house-body"><div className="sr-house-window"/><div className="sr-house-door"/><div className="sr-house-window"/></div></div><div className="sr-scene-symbol" key={`symbol-${active}`}>{current.symbol}</div><div className="sr-scene-stamp">{current.eyebrow}</div></div>
              <div className="sr-stage-detail" key={active} aria-live="polite"><div><span className="sr-stage-detail-count">STAGE {current.number} / 03</span><h4>{current.title}</h4><p>{current.description}</p><div className="sr-stage-chips">{current.bullets.map(bullet => <span key={bullet}>{bullet}</span>)}</div></div><button type="button" className="sr-stage-next" onClick={() => setActive((active + 1) % stages.length)}>{active === 2 ? 'Start over' : 'Next stage'} <span aria-hidden="true">→</span></button></div>
            </div>
          </div>
          <p className="sr-journey-note">Concept illustration of the process, not a documented renovation or a guaranteed result.</p>
        </div>

            </div>

    {/* FEATURED PROPERTY VIDEO */}
    <div className="sr-property-showcase">
      <div className="sr-section-heading">
        <span className="sr-overline">FEATURED PROPERTY</span>
        <h3>Real Homes. Real Possibilities.</h3>
        <p>
          Take a closer look at a property featured by Jake Maines
          and discover what's possible with the right preparation.
        </p>
      </div>

      <div className="sr-property-video">
  <video
    controls
    preload="none"
    playsInline
    aria-label="Jake Maines featured property walkthrough"
  >
    <source src="/videos/jake-property-tour.mp4" type="video/mp4" />
    Your browser does not support video playback.
  </video>

  <button
    type="button"
    className="sr-video-expand"
    onClick={() =>
      window.open("/videos/jake-property-tour.mp4", "_blank", "noopener,noreferrer")
    }
  >
    ⛶ Enlarge Property Tour
  </button>
</div>
    </div>

    {/* EXISTING CALCULATOR — LEAVE UNCHANGED */}
    <div className="sr-calculator sr-reveal">
        <div className="sr-calculator sr-reveal">
        <div className="sr-calculator-copy"><span className="sr-overline">INTERACTIVE SELLING SCENARIOS</span><h3>Could improvements change the numbers?</h3><p>Try different assumptions and compare two hypothetical selling scenarios. This is an educational illustration—not a property valuation, forecast, or estimate of actual proceeds.</p><div className="sr-calc-note"><strong>Consider the full picture.</strong> Improvements cost money, and a higher sale price doesn't always mean a better net result. Jake can help you discuss your options.</div></div>
          <div className="sr-calc-panel">
            <div className="sr-calc-grid">
              <label className="sr-field"><span>As-is sale price ($)</span><input type="number" min="0" step="1000" value={asIs} onChange={update(setAsIs)} /></label>
              <label className="sr-field"><span>Improved sale price ($)</span><input type="number" min="0" step="1000" value={improved} onChange={update(setImproved)} /></label>
              <label className="sr-field"><span>Improvement costs ($)</span><input type="number" min="0" step="500" value={improvements} onChange={update(setImprovements)} /></label>
              <label className="sr-field"><span>Assumed selling costs (%)</span><input type="number" min="0" max="100" step="0.5" value={sellingRate} onChange={update(setSellingRate, 100)} /></label>
            </div>
            <div className="sr-calc-results"><div className="sr-calc-result"><span>As-is scenario</span><strong>{money(asIsNet)}</strong></div><div className="sr-calc-result"><span>After improvements</span><strong>{money(improvedNet)}</strong></div></div>
            <div className={`sr-difference ${delta < 0 ? 'sr-difference-negative' : ''}`}><span>Illustrative difference</span><strong aria-live="polite">{delta > 0 ? '+' : delta < 0 ? '−' : ''}{money(Math.abs(delta))}</strong><small>Before mortgage payoff, taxes, other closing expenses, financing charges, and transaction-specific costs. The selling-cost percentage is an adjustable assumption, not a standard or guaranteed fee.</small></div>
            <button className="sr-button sr-button-primary sr-calc-cta" type="button" onClick={goToContact}>Discuss My Selling Options <span aria-hidden="true">→</span></button>
          </div>
        </div>
        <p className="sr-disclaimer"><strong>Sell Ready disclosure:</strong> Participation and deferred improvement costs are subject to eligibility and program terms. Qualifying costs may become payable at closing or under other circumstances specified in the agreement. Improvements do not guarantee a higher sale price, faster sale, or greater net proceeds.</p>
      </div>
    </section>
  )
}
