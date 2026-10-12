import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/ContactFooter.css'

const CONTACT_EMAIL = 'contact@jakemainesrealtor.com' // Confirm this address with Jake before publishing.
const CURRENT_YEAR = new Date().getFullYear()

const contactDetails = [
  { icon: '📍', label: 'Serving', value: 'Virginia Beach & Hampton Roads, VA' },
  { icon: '📧', label: 'Email', value: CONTACT_EMAIL },
]

const footerLinks = {
  Services: [
    { label: 'Buy a Home', to: '/buy' },
    { label: 'Sell a Home', to: '/sell' },
    { label: 'Sell Ready Program', to: '/sell' },
    { label: 'Browse Listings', to: '/listings' },
  ],
  Communities: [
    { label: 'Virginia Beach', to: '/neighborhoods' },
    { label: 'Chesapeake', to: '/neighborhoods' },
    { label: 'Norfolk', to: '/neighborhoods' },
    { label: 'Sandbridge', to: '/neighborhoods' },
    { label: 'Hampton', to: '/neighborhoods' },
    { label: 'Newport News', to: '/neighborhoods' },
  ],
  Company: [
    { label: 'About Jake', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'YouTube Channel', href: 'https://www.youtube.com/@jakemaines' },
    { label: 'Zillow Profile', href: 'https://www.zillow.com/profile/jakemaines' },
  ],
}

export default function ContactFooter() {
  const location = useLocation()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: location.pathname === '/sell' ? 'sell-ready' : '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Temporary email handoff until a verified CRM endpoint is connected.
    // Opening an email draft is NOT confirmation that a message was sent.
    const subject = `Website inquiry: ${formData.interest || 'General'}`
    const body = [
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Interest: ${formData.interest || 'Not specified'}`,
      '',
      formData.message,
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="contact-section" id="contact" aria-label="Contact Jake Maines">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <p className="label-overline">Get in Touch</p>
              <hr className="gold-rule" aria-hidden="true" />
              <h2 className="display-2">Let's Start<br />Your Story.</h2>
              <p className="contact-info-body">
                Whether you're buying your first home, selling a property, or exploring
                the Sell Ready program, Jake is ready to listen and help you consider
                your next move.
              </p>

              <div className="contact-details">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="contact-detail-item">
                    <div className="contact-detail-icon" aria-hidden="true">{detail.icon}</div>
                    <div>
                      <div className="contact-detail-label">{detail.label}</div>
                      <div className="contact-detail-value">{detail.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-form-card">
              <form onSubmit={handleSubmit} aria-label="Contact form">
                <h3 className="contact-form-title">Send Jake a Message</h3>
                <div className="contact-form-grid">
                  <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" className="contact-form-input"
                      placeholder="Jane" value={formData.firstName} onChange={handleChange}
                      required autoComplete="given-name" />
                  </div>
                  <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" className="contact-form-input"
                      placeholder="Smith" value={formData.lastName} onChange={handleChange}
                      required autoComplete="family-name" />
                  </div>
                  <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" className="contact-form-input"
                      placeholder="jane@example.com" value={formData.email} onChange={handleChange}
                      required autoComplete="email" />
                  </div>
                  <div className="contact-form-field">
                    <label className="contact-form-label" htmlFor="phone">Phone (Optional)</label>
                    <input id="phone" name="phone" type="tel" className="contact-form-input"
                      placeholder="(757) 555-0100" value={formData.phone} onChange={handleChange}
                      autoComplete="tel" />
                  </div>
                  <div className="contact-form-field full-width">
                    <label className="contact-form-label" htmlFor="interest">I'm Interested In</label>
                    <select id="interest" name="interest" className="contact-form-select"
                      value={formData.interest} onChange={handleChange}>
                      <option value="">Select one…</option>
                      <option value="buy">Buying a Home</option>
                      <option value="sell">Selling a Home</option>
                      <option value="sell-ready">Sell Ready Program</option>
                      <option value="valuation">Home Valuation</option>
                      <option value="invest">Investment Properties</option>
                      <option value="relocate">Relocation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="contact-form-field full-width">
                    <label className="contact-form-label" htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" className="contact-form-textarea"
                      placeholder="Tell Jake a little about your plans…"
                      value={formData.message} onChange={handleChange} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary contact-form-submit" id="contact-form-submit-btn">
                  Prepare Email to Jake
                </button>
                <p className="contact-form-privacy">
                  This currently opens an email draft in your email app. You must send the email yourself.
                  Direct website submissions will be available once the CRM is connected.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="nav-logo-name">Jake Maines</span>
              <span className="nav-logo-tag">Realty · Virginia Beach & Hampton Roads</span>
              <p className="footer-brand-desc">
                Helping buyers and sellers navigate real estate opportunities
                across Virginia Beach and the greater Hampton Roads region.
              </p>
              <div className="footer-social" aria-label="Social media links">
                <a href="https://www.youtube.com/@jakemaines" target="_blank" rel="noopener noreferrer"
                  className="footer-social-link" aria-label="YouTube">▶</a>
                <a href="https://www.zillow.com/profile/jakemaines" target="_blank" rel="noopener noreferrer"
                  className="footer-social-link" aria-label="Zillow">Z</a>
                <a href="https://jakemainesrealtor.com/" target="_blank" rel="noopener noreferrer"
                  className="footer-social-link" aria-label="Jake's current website">⌂</a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([column, links]) => (
              <div key={column}>
                <p className="footer-col-title">{column}</p>
                <ul className="footer-links" role="list">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link className="footer-link" to={link.to}>{link.label}</Link>
                      ) : (
                        <a className="footer-link" href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <p className="footer-legal">
              © {CURRENT_YEAR} Jake Maines Realty. All rights reserved.{' '}
              This website is for informational purposes only and does not constitute legal or financial advice.{' '}
              Sell Ready results vary; renovation work and costs are subject to separately agreed terms.
            </p>
            <p className="footer-license">Virginia Beach, VA · Hampton Roads</p>
          </div>

          <div className="stone-credit" aria-label="Website design credit">
            <span className="stone-credit-eyebrow">WEBSITE DESIGN & TECHNOLOGY</span>
            <a href="https://12stoneconsulting.com" target="_blank" rel="noopener noreferrer" className="stone-credit-link">
              Smart Website by <strong>12 Stone</strong> <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
