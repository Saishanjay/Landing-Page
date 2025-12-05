import { useState } from 'react';
import './Solutions.css';

const Solutions = () => {
  const [focusedCard, setFocusedCard] = useState(null);

  const solutions = [
    {
      id: 'unified',
      title: 'Unified Attribution Models',
      description: 'See the complete customer journey across all touchpoints with advanced modeling that actually works.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'first-party',
      title: 'First-Party, Transparent Data',
      description: 'Your data, your pixel, your truth. No black boxes or mysterious algorithms hiding what matters.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 'dashboards',
      title: 'Easy-to-Read Dashboards',
      description: 'Actionable insights in seconds, not hours. Built for marketers who need to move fast and scale smart.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="solutions-section" id="solutions" aria-labelledby="solutions-heading">
      <div className="solutions-container">
        {/* Badge */}
        <div className="solutions-badge" role="status" aria-label="Section badge">
          <svg
            className="star-icon-solutions"
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
          <span className="badge-text-solutions">Our Solutions</span>
        </div>

        {/* Headline */}
        <h2 id="solutions-heading" className="solutions-headline">
          A Clearer Picture = Better Decisions
        </h2>

        {/* Subtitle */}
        <p className="solutions-subtitle">
          We don't just show numbers. We guide action.
        </p>

        {/* Three-card grid */}
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <article
              key={solution.id}
              className={`solution-card ${focusedCard === solution.id ? 'focused' : ''}`}
              onMouseEnter={() => setFocusedCard(solution.id)}
              onMouseLeave={() => setFocusedCard(null)}
              onFocus={() => setFocusedCard(solution.id)}
              onBlur={() => setFocusedCard(null)}
              tabIndex={0}
              aria-labelledby={`solution-title-${solution.id}`}
            >
              <figure className="solution-icon-container" aria-hidden="true">
                {solution.icon}
              </figure>
              <h3 id={`solution-title-${solution.id}`} className="solution-title">
                {solution.title}
              </h3>
              <p className="solution-description">{solution.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

