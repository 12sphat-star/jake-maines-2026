import { Link } from 'react-router-dom'
import '../styles/SuccessStories.css'


const advisorySteps = [
  {
    number: '01',
    label: 'Your Personal Strategy',
    eyebrow: 'UNDERSTAND YOUR GOALS',
    desc: "Jake starts by understanding your goals, timeline, and property. Together, you'll review market conditions, pricing considerations, and the selling approach that best fits your situation.",
  },
  {
    number: '02',
    label: 'From Listing to Offers',
    eyebrow: 'MARKETING & COMMUNICATION',
    desc: "Once your home is ready, Jake helps coordinate its market presentation, buyer inquiries, showings, and offers—keeping you informed as opportunities develop.",
  },
  {
    number: '03',
    label: 'Contract to Closing',
    eyebrow: 'GUIDANCE THROUGH CLOSING',
    desc: "From negotiating terms through inspections, appraisal, and closing coordination, Jake helps you navigate the details and understand each important decision along the way.",
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
  Selling your home involves more than putting a sign in the yard.
  From your first conversation through closing day, Jake provides
  personalized guidance, clear communication, and a strategy built
  around your goals.
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
            <Link
  to="/contact"
  state={{
    sellerInquiry: true,
  }}
  className="btn btn-primary"
  id="advisory-consult-cta"
>
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
