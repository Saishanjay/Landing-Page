import { useState } from 'react';
import './CoreFeatures.css';

const CoreFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const brandLogos = [
    { name: 'Amazon', id: 'amazon' },
    { name: 'Shopify', id: 'shopify' },
    { name: 'Meta', id: 'meta' },
    { name: 'Google Ads', id: 'google' },
    { name: 'TikTok', id: 'tiktok' },
  ];

  const brandIcons = ['amazon', 'google', 'meta', 'shopify', 'tiktok'];

  const winningCreatives = [
    { ctr: '3.5%', roas: '250%', avatar: 'A' },
    { ctr: '4.2%', roas: '320%', avatar: 'B' },
  ];

  return (
    <section className="core-features-section" id="features" aria-labelledby="features-heading">
      <div className="features-container">
        {/* Badge */}
        <div className="features-badge" role="status" aria-label="Section badge">
          <svg
            className="star-icon-features"
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
          <span className="badge-text-features">Core Features</span>
        </div>

        {/* Headline */}
        <h2 id="features-heading" className="features-headline">
          Everything You Need to Measure
          <br />
          What Matters
        </h2>

        {/* Subtext */}
        <p className="features-subtext">
          Trusted by growth leaders who demand real results, not just pretty reports.
        </p>

        {/* Brand row */}
        <nav className="features-brand-row" aria-label="Supported platforms">
          {brandLogos.map((brand, index) => (
            <div key={index} className="features-brand-item" aria-label={brand.name}>
              <img
                src={`/assets/${brand.id}.svg`}
                alt={`${brand.name} logo`}
                className="features-brand-img"
                loading="lazy"
              />
            </div>
          ))}
        </nav>

        {/* Feature card grid */}
        <div className="features-grid">
          {/* Top row - Card 1: Multi-Touch Attribution */}
          <article
            className="feature-card"
            onMouseEnter={() => setHoveredCard('multi-touch')}
            onMouseLeave={() => setHoveredCard(null)}
            onFocus={() => setHoveredCard('multi-touch')}
            onBlur={() => setHoveredCard(null)}
          >
            <div className="card-vignette">
              {brandIcons.map((icon, idx) => (
                <div key={idx} className="brand-icon-circle" style={{ '--delay': `${idx * 0.2}s` }}>
                  <img
                    src={`/assets/${icon}.svg`}
                    alt=""
                    className="brand-icon-small"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
            <h3 className="card-title">Multi-Touch Attribution</h3>
            <p className="card-description">
              Track every interaction from first click to final purchase across all channels and devices.
            </p>
          </article>

          {/* Top row - Card 2: Channel-Agnostic ROAS */}
          <article
            className="feature-card"
            onMouseEnter={() => setHoveredCard('roas')}
            onMouseLeave={() => setHoveredCard(null)}
            onFocus={() => setHoveredCard('roas')}
            onBlur={() => setHoveredCard(null)}
          >
            <div className="roas-table">
              <div className="table-row">
                <span className="table-platform">Google</span>
                <span className="table-value">$2.4M</span>
              </div>
              <div className="table-divider"></div>
              <div className="table-row">
                <span className="table-platform">Meta</span>
                <span className="table-value">$1.8M</span>
              </div>
              <div className="table-divider"></div>
              <div className="table-row">
                <span className="table-platform">TikTok</span>
                <span className="table-value">$950K</span>
              </div>
            </div>
            <button className="roas-pill" aria-label="View Platform ROAS">
              Platform ROAS%
            </button>
            <h3 className="card-title">Channel-Agnostic ROAS</h3>
            <p className="card-description">
              See true return on ad spend without platform bias or inflated numbers.
            </p>
          </article>

          {/* Top row - Card 3: First-Party Pixel */}
          <article
            className="feature-card"
            onMouseEnter={() => setHoveredCard('pixel')}
            onMouseLeave={() => setHoveredCard(null)}
            onFocus={() => setHoveredCard('pixel')}
            onBlur={() => setHoveredCard(null)}
          >
            <div className="shield-icon-wrapper">
              <svg
                className="shield-icon"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M32 8L48 14V28C48 40 42 50 32 56C22 50 16 40 16 28V14L32 8Z"
                  fill="url(#shieldGradient)"
                  stroke="#7C4DFF"
                  strokeWidth="2"
                />
                <path
                  d="M28 32L30 34L36 28"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="shieldGradient" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7C4DFF" />
                    <stop offset="1" stopColor="#6F2DF7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="card-title">First-Party Pixel</h3>
            <p className="card-description">
              Accurate, privacy-safe tracking that works beyond iOS changes and cookie restrictions.
            </p>
          </article>

          {/* Bottom row - Card 4: Creative-Level Insights (spans 2 columns) */}
          <article
            className="feature-card feature-card-wide"
            onMouseEnter={() => setHoveredCard('creative')}
            onMouseLeave={() => setHoveredCard(null)}
            onFocus={() => setHoveredCard('creative')}
            onBlur={() => setHoveredCard(null)}
          >
            <div className="creative-card-content">
              <div className="creative-left">
                <div className="winning-creatives">
                  {winningCreatives.map((creative, idx) => (
                    <div
                      key={idx}
                      className="winning-creative-card"
                      onMouseEnter={(e) => e.currentTarget.classList.add('hovered')}
                      onMouseLeave={(e) => e.currentTarget.classList.remove('hovered')}
                    >
                      <div className="creative-thumbnail">
                        <div className="thumbnail-placeholder">{creative.avatar}</div>
                      </div>
                      <div className="creative-stats">
                        <div className="stat-line">
                          <span className="stat-label">CTR:</span>
                          <span className="stat-value">{creative.ctr}</span>
                        </div>
                        <div className="stat-line">
                          <span className="stat-label">ROAS:</span>
                          <span className="stat-value">{creative.roas}</span>
                        </div>
                      </div>
                      <div className="creative-avatar">
                        <div className="avatar-circle">{creative.avatar}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="profitable-ads-pill" aria-label="View Profitable Ads">
                  Profitable Ads
                </button>
              </div>
              <div className="creative-right">
                <h3 className="card-title">Creative-Level Insights</h3>
                <p className="card-description">
                  Identify winning ads and creatives that actually drive profitable growth.
                </p>
              </div>
            </div>
          </article>

          {/* Bottom row - Card 5: Profitability Metrics */}
          <article
            className="feature-card"
            onMouseEnter={() => setHoveredCard('metrics')}
            onMouseLeave={() => setHoveredCard(null)}
            onFocus={() => setHoveredCard('metrics')}
            onBlur={() => setHoveredCard(null)}
          >
            <div className="metrics-chart-wrapper">
              <svg
                className="metrics-chart"
                width="100%"
                height="120"
                viewBox="0 0 200 120"
                aria-hidden="true"
              >
                <polyline
                  points="10,100 30,85 50,70 70,60 90,45 110,50 130,40 150,35 170,30 190,25"
                  fill="none"
                  stroke="url(#chartGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="190" cy="25" r="4" fill="#7C4DFF" className="chart-dot">
                  <animate
                    attributeName="opacity"
                    values="1;0.5;1"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7C4DFF" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#6F2DF7" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="metrics-floating-card float">
                <div className="metric-item">
                  <span className="metric-label">CAC:</span>
                  <span className="metric-value">$400</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">LTV:</span>
                  <span className="metric-value">$4500</span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Margin:</span>
                  <span className="metric-value">35%</span>
                </div>
              </div>
            </div>
            <h3 className="card-title">Profitability Metrics</h3>
            <p className="card-description">
              Track CAC, AOV, LTV, and margin in real-time to optimize for profit, not just revenue.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;

