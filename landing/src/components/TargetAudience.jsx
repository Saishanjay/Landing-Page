import { useState } from 'react';
import './TargetAudience.css';

const TargetAudience = () => {
  const [focusedTile, setFocusedTile] = useState(null);

  const tiles = [
    {
      id: 'dtc',
      title: 'DTC Brands',
      subtitle: '$100k+/mo',
      description: 'Scale profitably with confidence in your attribution data.',
      position: 'top-left',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" />
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'performance',
      title: 'Performance Marketers',
      subtitle: '',
      description: 'Make data-driven optimizations that actually move the needle.',
      position: 'top-right',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M3 12L9 6L12 9L21 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 3H21V6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12L3 21L12 21L21 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'agencies',
      title: 'Agencies',
      subtitle: '',
      description: 'Deliver transparent reporting and prove ROI to your clients.',
      position: 'bottom-left',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'cmo',
      title: 'Founders & CMOs',
      subtitle: '',
      description: 'Get the clear picture you need to allocate budget with confidence.',
      position: 'bottom-right',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="target-audience-section" id="audience" aria-labelledby="audience-heading">
      <div className="audience-container">
        {/* Badge */}
        <div className="audience-badge" role="status" aria-label="Section badge">
          <svg
            className="star-icon-audience"
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
          <span className="badge-text-audience">Target Audience</span>
        </div>

        {/* Headline */}
        <h2 id="audience-heading" className="audience-headline">
          Built for Performance-Obsessed Teams
        </h2>

        {/* Subtitle */}
        <p className="audience-subtitle">
          Trusted by growth leaders who demand real results, not just pretty reports.
        </p>

        {/* Central Hub */}
        <div className="hub-wrapper">
          {/* Concentric Rings */}
          <div className="concentric-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
            <div className="ring ring-4"></div>
          </div>

          {/* Crosshair Lines */}
          <div className="crosshair">
            <div className="crosshair-line crosshair-vertical"></div>
            <div className="crosshair-line crosshair-horizontal"></div>
          </div>

          {/* Spotlight Glow */}
          <div className="spotlight-glow"></div>

          {/* Center Hub Pill */}
          <div className="hub-center">
            <div className="hub-pill">AdShark</div>
          </div>

          {/* Quadrant Tiles */}
          {tiles.map((tile) => (
            <article
              key={tile.id}
              className={`quadrant-tile tile-${tile.position} ${focusedTile === tile.id ? 'focused' : ''}`}
              onMouseEnter={() => setFocusedTile(tile.id)}
              onMouseLeave={() => setFocusedTile(null)}
              onFocus={() => setFocusedTile(tile.id)}
              onBlur={() => setFocusedTile(null)}
              tabIndex={0}
              aria-labelledby={`tile-title-${tile.id}`}
            >
              <figure className="tile-icon-container" aria-hidden="true">
                {tile.icon}
              </figure>
              <h3 id={`tile-title-${tile.id}`} className="tile-title">
                {tile.title}
                {tile.subtitle && <span className="tile-subtitle"> {tile.subtitle}</span>}
              </h3>
              <p className="tile-description">{tile.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

