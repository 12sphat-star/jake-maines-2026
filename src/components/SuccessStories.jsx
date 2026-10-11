import '../styles/SuccessStories.css'

// All stories are placeholder design content — real testimonials to be collected from verified clients
const stories = [
  {
    id: 'story-1',
    initials: 'S.M.',
    name: '[Client Name — Placeholder]',
    location: 'Virginia Beach Oceanfront',
    quote: '"Working with Jake transformed what felt like an overwhelming process into something incredibly smooth. His knowledge of the market gave us the confidence to make the right moves at the right time."',
    result: '⚠️ Specific outcome data not provided — placeholder for verified testimonial',
  },
  {
    id: 'story-2',
    initials: 'T.R.',
    name: '[Client Name — Placeholder]',
    location: 'Great Neck, Virginia Beach',
    quote: '"The Sell Ready program opened our eyes to improvements we hadn\'t considered. Jake\'s contractor connections were professional, and we felt supported throughout the entire journey."',
    result: '⚠️ Specific outcome data not provided — placeholder for verified testimonial',
  },
  {
    id: 'story-3',
    initials: 'A.K.',
    name: '[Client Name — Placeholder]',
    location: 'Chesapeake, VA',
    quote: '"Jake found us the perfect home in a competitive market. His negotiation skill and local insight made all the difference. We couldn\'t be happier with where we landed."',
    result: '⚠️ Specific outcome data not provided — placeholder for verified testimonial',
  },
]

export default function SuccessStories() {
  return (
    <section className="success-section" id="stories" aria-label="Seller and buyer success stories">
      <div className="container">
        <div className="section-header">
          <p className="label-overline">Client Experiences</p>
          <hr className="gold-rule center" aria-hidden="true" />
          <h2 className="display-2">Real People, Real Results.</h2>
          <p>
            Every transaction tells a story. Here's what clients say about working with Jake 
            across Virginia Beach and Hampton Roads.
          </p>
        </div>

        <div className="stories-grid" role="list" aria-label="Client testimonials">
          {stories.map(story => (
            <article
              key={story.id}
              id={story.id}
              className="story-card"
              role="listitem"
              aria-label={`Testimonial from ${story.name}`}
            >
              {/* Before / After design placeholder */}
              <div
                className="story-card-images"
                aria-label="Before and after home transformation placeholder"
              >
                <div className="story-image-panel story-image-before" aria-hidden="true">
                  <span className="story-image-icon">🏚</span>
                  <span className="story-image-label">Before</span>
                </div>
                <div className="story-image-panel story-image-after" aria-hidden="true">
                  <span className="story-image-icon">🏡</span>
                  <span className="story-image-label">After</span>
                </div>
                <div className="story-divider-badge" aria-hidden="true">→</div>
              </div>

              {/* Body */}
              <div className="story-card-body">
                <div className="story-stars" aria-label="5 star rating">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} aria-hidden="true">{s}</span>
                  ))}
                </div>

                <blockquote className="story-card-quote">{story.quote}</blockquote>

                <div className="story-card-attribution">
                  <div className="story-attribution-avatar" aria-hidden="true">
                    {story.initials}
                  </div>
                  <div>
                    <div className="story-attribution-name">{story.name}</div>
                    <div className="story-attribution-location">{story.location}</div>
                  </div>
                </div>

                <div className="story-card-result" role="note">
                  <span className="story-result-text">{story.result}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="success-disclaimer" role="note">
          ⚠️ Testimonials shown above are design placeholders only. All published testimonials must be sourced from 
          verified clients and approved for use. Do not publish this page with placeholder content.
          Individual results vary and are not guaranteed.
        </p>
      </div>
    </section>
  )
}
