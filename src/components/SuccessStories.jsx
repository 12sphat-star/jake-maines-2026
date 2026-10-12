import { Link } from 'react-router-dom'
import '../styles/SuccessStories.css'

const advisorySteps = [
  {
    number: '01',
    label: 'Pre-Listing Assessment',
    eyebrow: 'EVALUATION & DATA',
    desc: 'An in-depth property walk-through to review condition, evaluate recent neighborhood sales across Hampton Roads, and identify strategic value-building opportunities.',
  },
  {
    number: '02',
    label: 'Strategic Preparation',
    eyebrow: 'THE SELL READY PATH',
    desc: 'Whether coordinating high-impact updates through the Sell Ready program or focusing on key cosmetic details, Jake helps you prioritize updates that matter to prospective buyers.',
  },
  {
    number: '03',
    label: 'Targeted Market Launch',
    eyebrow: 'MAXIMUM VISIBILITY',
    desc: 'Professional photography and video walkthroughs, tailored listing distribution, and disciplined negotiation focused on your ideal timeline and net outcome.',
  },
]

export default function SuccessStories() {
  return (
    <section className="advisory-section" id="seller-advisory" aria-labelledby="advisory-heading">
      <div className="container">
        <div className="section-header">
          <p className="label-overline">Strategic Representation</p>
          <hr className="gold-rule center" aria-hidden="true" />
          <h2 className="display-2" id="advisory-heading">A Guided Path from Consultation to Closing</h2>
          <p>
            Selling a home in Hampton Roads requires thoughtful preparation. Jake’s advisory 
            approach helps you protect your equity, avoid unnecessary expenses, and enter 
            the market with a clear plan.
          </p>
        </div>

        <div className="advisory-grid" role="list" aria-label="Seller advisory steps">
          {advisorySteps.map((step) => (
            <article className="advisory-card" key={step.number} role="listitem">
              <div className="advisory-card-top">
                <span className="advisory-number">{step.number}</span>
                <span className="advisory-kicker">{step.eyebrow}</span>
              </div>
              <h3 className="advisory-title">{step.label}</h3>
              <p className="advisory-desc">{step.desc}</p>
            </article>
          ))}
        </div>

        <div className="advisory-footer">
          <div className="advisory-cta-row">
            <Link to="/contact" className="btn btn-primary" id="advisory-consult-cta">
              Schedule a Seller Consultation
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href="https://www.zillow.com/profile/jakemaines"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              id="advisory-zillow-cta"
            >
              Read Verified Reviews on Zillow
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="advisory-disclaimer" role="note">
            Each property and market situation is unique. Consultations provide customized guidance 
            based on current market conditions and individual homeowner goals.
          </p>
        </div>
      </div>
    </section>
  )
}
