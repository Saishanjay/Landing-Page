import { useState, useEffect } from 'react';
import './AttributionProblem.css';

const AttributionProblem = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Lazy load the portrait image
    const img = new Image();
    img.src = '/assets/person.jpg';
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      // Fallback to placeholder if image doesn't exist
      setImageLoaded(true);
    };
  }, []);

  const brandLogos = [
    { name: 'Amazon', id: 'amazon' },
    { name: 'Shopify', id: 'shopify' },
    { name: 'Meta', id: 'meta' },
    { name: 'Google Ads', id: 'google' },
    { name: 'TikTok', id: 'tiktok' },
  ];

  const checklistItems = [
    'Hacked-together spreadsheets that break every month',
    'Trusting inflated platform dashboards that don\'t match',
    'Vanity tools with pretty charts but no actionable direction',
  ];

  const floatingPills = [
    { name: 'Amazon', id: 'amazon', color: '#FF9900', delay: '0s', duration: '6s', top: '10%', left: '-8%' },
    { name: 'Google', id: 'google', color: '#4285F4', delay: '0.5s', duration: '7s', top: '25%', right: '-20%' },
    { name: 'Shopify', id: 'shopify', color: '#96BF48', delay: '1s', duration: '5.5s', top: '50%', left: '-12%' },
    { name: 'Meta', id: 'meta', color: '#0081FB', delay: '1.5s', duration: '8s', bottom: '30%', right: '-8%' },
    { name: 'TikTok', id: 'tiktok', color: '#000000', delay: '2s', duration: '6.5s', bottom: '15%', left: '-10%' },
    { name: 'Amazon', id: 'amazon', color: '#FF9900', delay: '2.5s', duration: '7.5s', top: '15%', right: '-6%' },
    // { name: 'Google', id: 'google', color: '#4285F4', delay: '3s', duration: '5s', bottom: '40%', left: '-6%' },
    // { name: 'Meta', id: 'meta', color: '#0081FB', delay: '3.5s', duration: '9s', top: '60%', right: '-12%' },
  ];

  return (
    <section className="attribution-problem-section" id="problem" aria-labelledby="problem-heading">
      <div className="problem-container">
        {/* Brand logos row */}
        <nav className="brand-logos-row" aria-label="Supported platforms">
          {brandLogos.map((brand, index) => (
            <div key={index} className="brand-logo-item" aria-label={brand.name}>
              <img
                src={`/assets/${brand.id}.svg`}
                alt={`${brand.name} logo`}
                className="brand-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </nav>

        {/* Two-column grid */}
        <div className="problem-grid">
          {/* Left column - Content */}
          <article className="problem-content">
            {/* Badge */}
            <div className="problem-badge" role="status" aria-label="Tagline">
              <svg
                className="star-icon-small"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 0L9.79611 5.52786L15.6085 5.52786L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786L6.20389 5.52786L8 0Z"
                  fill="currentColor"
                />
              </svg>
              <span className="badge-text">Smarter spend. Better returns</span>
            </div>

            {/* Heading */}
            <h2 id="problem-heading" className="problem-heading">
              The Attribution Problem
              <br />
              Nobody Solved Well
            </h2>

            {/* Subtext */}
            <p className="problem-subtext">
              iOS 14.5 shattered tracking. Cookies are dying. Platform dashboards lie. Meanwhile, you're stuck making million-dollar decisions with broken data.
            </p>

            {/* Checklist */}
            <ul className="problem-checklist" role="list">
              {checklistItems.map((item, index) => (
                <li key={index} className="checklist-item">
                  <div className="checklist-content">
                    <svg
                      className="checklist-star"
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 0L9.79611 5.52786L15.6085 5.52786L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786L6.20389 5.52786L8 0Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="checklist-text">{item}</span>
                  </div>
                  {index < checklistItems.length - 1 && <div className="checklist-divider" aria-hidden="true"></div>}
                </li>
              ))}
            </ul>
          </article>

          {/* Right column - Visual */}
          <div className="problem-visual">
            <figure className="portrait-card-wrapper">
              <div className="portrait-card">
                {imageLoaded ? (
                  <img
                    src="/assets/person.jpg"
                    alt="Marketing professional analyzing attribution data"
                    className="portrait-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling?.classList.add('show');
                    }}
                  />
                ) : null}
                <div className={`portrait-placeholder ${imageLoaded ? '' : 'show'}`}>
                  <img
                    src="/assets/person-placeholder.svg.png"
                    alt="Marketing image"
                    className="placeholder-svg.jpg"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Floating pills */}
              {floatingPills.map((pill, index) => (
                <div
                  key={index}
                  className="problem-pill"
                  style={{
                    '--delay': pill.delay,
                    '--duration': pill.duration,
                    ...(pill.top && { top: pill.top }),
                    ...(pill.bottom && { bottom: pill.bottom }),
                    ...(pill.left && { left: pill.left }),
                    ...(pill.right && { right: pill.right }),
                  }}
                  aria-label={`${pill.name} platform`}
                >
                  <div className="problem-pill-content">
                    <img
                      src={`/assets/${pill.id}.svg`}
                      alt={`${pill.name} logo`}
                      className="pill-logo"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttributionProblem;

