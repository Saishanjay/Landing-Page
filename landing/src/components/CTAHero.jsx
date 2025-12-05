import { useState } from 'react';
import './CTAHero.css';

const CTAHero = () => {
  const [focusedButton, setFocusedButton] = useState(null);

  const platformPills = [
    {
      id: 'google',
      name: 'Google',
      position: 'left-third',
      delay: '0s',
      duration: '6s',
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" fill="#4285F4"/>
          <path d="M16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4Z" fill="white"/>
          <path d="M16 8C18.209 8 20 9.791 20 12C20 14.209 18.209 16 16 16C13.791 16 12 14.209 12 12C12 9.791 13.791 8 16 8Z" fill="#4285F4"/>
          <path d="M16 18C18.761 18 21 20.239 21 23C21 23.552 20.552 24 20 24H12C11.448 24 11 23.552 11 23C11 20.239 13.239 18 16 18Z" fill="#4285F4"/>
        </svg>
      ),
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      position: 'left-center',
      delay: '1s',
      duration: '7s',
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" fill="#000000"/>
          <path d="M16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4Z" fill="white"/>
          <path d="M14 10L18 10L18 14L14 14L14 10Z" fill="#000000"/>
          <path d="M14 16L18 16L18 20L14 20L16 18L14 16Z" fill="#000000"/>
        </svg>
      ),
    },
    {
      id: 'amazon',
      name: 'Amazon',
      position: 'right-center',
      delay: '2s',
      duration: '5.5s',
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2ZM16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4Z" fill="#FF9900"/>
          <path d="M12 10L20 10L20 12L14 12L14 14L19 14L19 16L14 16L14 20L12 20L12 10Z" fill="#FF9900"/>
        </svg>
      ),
    },
    {
      id: 'shopify',
      name: 'Shopify',
      position: 'right-third',
      delay: '3s',
      duration: '8s',
      icon: (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" fill="#96BF48"/>
          <path d="M16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4Z" fill="white"/>
          <path d="M12 12L20 12L20 20L12 20L12 12Z" fill="#96BF48"/>
          <path d="M13 13L19 13L19 19L13 19L13 13Z" fill="white"/>
          <path d="M15 15L17 15L17 17L15 17L15 15Z" fill="#96BF48"/>
        </svg>
      ),
    },
  ];

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const handleStartTrial = () => {
    console.log('Start Free Trial clicked');
    // Add your action here
  };

  const handleBookDemo = () => {
    console.log('Book Demo clicked');
    // Add your action here
  };

  return (
    <section className="cta-hero-section" aria-labelledby="cta-heading">
      <div className="cta-container">
        <div className="cta-panel">
          {/* Decorative Connector Lines */}
          <div className="connector-lines" aria-hidden="true">
            <svg
              className="connector-svg"
              width="100%"
              height="100%"
              viewBox="0 0 800 200"
              preserveAspectRatio="none"
            >
              <path
                d="M 50 100 Q 200 80 400 100 T 750 100"
                stroke="rgba(11, 16, 32, 0.08)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 4"
              />
              <path
                d="M 100 120 Q 250 100 450 120 T 800 120"
                stroke="rgba(11, 16, 32, 0.06)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="3 3"
              />
            </svg>
          </div>

          {/* Floating Platform Pills */}
          {platformPills.map((pill) => (
            <div
              key={pill.id}
              className={`platform-pill pill-${pill.position}`}
              style={{
                '--delay': pill.delay,
                '--duration': pill.duration,
              }}
              aria-hidden="true"
            >
              <div className="pill-content">
                {pill.icon}
              </div>
            </div>
          ))}

          {/* Badge */}
          <div className="cta-badge" role="status" aria-label="Section badge">
            <svg
              className="star-icon-cta"
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
            <span className="badge-text-cta">Next Step</span>
          </div>

          {/* Headline */}
          <h2 id="cta-heading" className="cta-headline">
            Ready to Grow Smarter?
          </h2>

          {/* Subtext */}
          <p className="cta-subtext">
            AdShark gives you the clarity to scale profitably.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button
              className="cta-button cta-button-primary"
              onClick={handleStartTrial}
              onKeyDown={(e) => handleKeyDown(e, handleStartTrial)}
              onFocus={() => setFocusedButton('primary')}
              onBlur={() => setFocusedButton(null)}
              aria-label="Start free trial"
            >
              Start Free Trial
            </button>
            <button
              className="cta-button cta-button-secondary"
              onClick={handleBookDemo}
              onKeyDown={(e) => handleKeyDown(e, handleBookDemo)}
              onFocus={() => setFocusedButton('secondary')}
              onBlur={() => setFocusedButton(null)}
              aria-label="Book a demo"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAHero;

