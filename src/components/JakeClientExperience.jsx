
import { Link } from 'react-router-dom'
import '../styles/JakeClientExperience.css'

export default function JakeClientExperience() {
  return (
    <section
      className="jce-section"
      aria-labelledby="jce-heading"
    >
      <div className="container">
        <div className="jce-heading">
          <p className="label-overline">
            THE JAKE MAINES EXPERIENCE
          </p>

          <h2 id="jce-heading" className="display-2">
            Your Goals. A Strategy Built Around You.
          </h2>

          <p>
            No two real estate journeys are the same.
            Jake helps you understand your options,
            navigate important decisions, and move
            forward with a clear plan.
          </p>
        </div>

        <div className="jce-grid">
          <article className="jce-card jce-buyer">
            <span className="jce-eyebrow">FOR BUYERS</span>

            <h3>
              Find the Right Home.
              <br />
              Make the Right Move.
            </h3>

            <p>
              From exploring Hampton Roads neighborhoods
              to evaluating properties and preparing
              competitive offers, Jake helps you
              approach your home search with confidence.
            </p>

            <ul>
              <li>Understand your needs and priorities</li>
              <li>Explore neighborhoods and properties</li>
              <li>Evaluate options and negotiate offers</li>
              <li>Navigate inspections through closing</li>
            </ul>

            <Link to="/buy" className="jce-link">
              Explore the Buying Experience
              <span aria-hidden="true">→</span>
            </Link>
          </article>

          <article className="jce-card jce-seller">
            <span className="jce-eyebrow">FOR SELLERS</span>

            <h3>
              Your Home Deserves
              <br />
              a Smarter Strategy.
            </h3>

            <p>
              Jake helps you assess your home's
              market position, consider strategic
              improvements, and develop a plan
              for presenting it to potential buyers.
            </p>

            <ul>
              <li>Review your property and market position</li>
              <li>Explore Sell Ready preparation options</li>
              <li>Develop a tailored marketing approach</li>
              <li>Navigate offers and the closing process</li>
            </ul>

            <Link to="/sell-ready" className="jce-link">
              Explore the Sell Ready Program
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}
