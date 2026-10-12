
import '../styles/JakeNetworking.css'

const EVENT_URL =
  'https://jakemainesrealtor.com/networking-happy-hour/'

export default function JakeNetworking() {
  return (
    <section
      className="jn-section"
      aria-labelledby="jn-heading"
    >
      <div className="container">
        <div className="jn-layout">

          <div className="jn-content">
            <p className="jn-eyebrow">
              BEYOND REAL ESTATE
            </p>

            <div className="jn-gold-rule" />

            <h2 id="jn-heading">
              Building Relationships.
              <span> Connecting Hampton Roads.</span>
            </h2>

            <p className="jn-lead">
              Real estate is about people, and Jake's
              commitment to the community extends
              beyond buying and selling homes.
            </p>

            <p className="jn-description">
              Through Networking Happy Hour, Jake
              brings local professionals, business
              owners, entrepreneurs, and neighbors
              together to meet, exchange ideas, and
              develop meaningful connections.
            </p>

            <div className="jn-details">
              <div className="jn-detail">
                <span className="jn-detail-icon"
                  aria-hidden="true">01</span>
                <div>
                  <strong>Meet Local Professionals</strong>
                  <p>
                    Connect with people from across
                    the Hampton Roads community.
                  </p>
                </div>
              </div>

              <div className="jn-detail">
                <span className="jn-detail-icon"
                  aria-hidden="true">02</span>
                <div>
                  <strong>Build Meaningful Connections</strong>
                  <p>
                    Discover new relationships,
                    conversations, and opportunities.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="jn-button"
            >
              Explore Networking Happy Hour
              <span aria-hidden="true">↗</span>
            </a>

            <p className="jn-note">
              Visit the event page for current dates,
              locations, and participation details.
            </p>
          </div>

          <div className="jn-visual">
            <div className="jn-photo">
              <img
                src="/images/jake-networking.jpg"
                alt="Networking Happy Hour community gathering"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />

              <div className="jn-photo-fallback"
                aria-hidden="true">
                <span>CONNECT</span>
                <strong>GOOD PEOPLE.</strong>
                <strong>GREAT CONNECTIONS.</strong>
              </div>
            </div>

            <div className="jn-photo-caption">
             <strong>WHERE HAMPTON ROADS</strong>
<strong>CONNECTS.</strong>
              <span>Virginia Beach · Hampton Roads</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
