import { Link } from 'react-router-dom'
import '../styles/SellReadyTeaser.css'

const steps = [
  {
    number: '01',
    title: 'Evaluate',
    eyebrow: 'ASSESS THE POTENTIAL',
    description: "Understand your home's current market position and identify strategic value-building opportunities before listing.",
  },
  {
    number: '02',
    title: 'Improve',
    eyebrow: 'STRATEGIC PREPARATION',
    description: 'Consider targeted updates and renovations that may help your property compete effectively for qualified buyers.',
  },
  {
    number: '03',
    title: 'Launch',
    eyebrow: 'MARKET POSITIONING',
    description: 'Prepare to enter the market with professional presentation, refined pricing, and a clear, tailored selling strategy.',
  },
]

export default function SellReadyTeaser() {
  return (
    <section className="sr-teaser-section" id="sell-ready-teaser" aria-labelledby="sr-teaser-heading">
      <div className="container">
        <div className="sr-teaser-frame">
          <div className="sr-teaser-header">
            <div className="sr-teaser-badge">
              <span className="sr-teaser-badge-dot" />
              SIGNATURE SELLER PROGRAM
            </div>

            <h2 id="sr-teaser-heading" className="sr-teaser-title">
              Improve Before You Move.
              <span> Unlock Your Home's Potential.</span>
            </h2>

            <p className="sr-teaser-lead">
              Your home may have more potential than you think. Explore how thoughtful preparation 
              and strategic improvements could affect your property’s market appeal and potential net proceeds.
            </p>
          </div>

          <div className="sr-teaser-steps" role="list" aria-label="Three steps of the Sell Ready program">
            {steps.map((step) => (
              <div className="sr-teaser-step-card" key={step.number} role="listitem">
                <div className="sr-teaser-step-top">
                  <span className="sr-teaser-step-number">{step.number}</span>
                  <span className="sr-teaser-step-eyebrow">{step.eyebrow}</span>
                </div>
                <h3 className="sr-teaser-step-title">{step.title}</h3>
                <p className="sr-teaser-step-desc">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="sr-teaser-footer">
            <Link to="/sell" className="btn btn-primary sr-teaser-cta" id="teaser-sell-ready-cta">
              Explore the Sell Ready Experience
              <span aria-hidden="true">→</span>
            </Link>

            <p className="sr-teaser-disclaimer">
              Hypothetical overview for portfolio demonstration. Improvements and outcomes vary. 
              Renovation scope and costs are reviewed and agreed upon separately.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
