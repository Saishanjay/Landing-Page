import { useState } from 'react';
import './SetupTimeline.css';

const SetupTimeline = () => {
  const [focusedStep, setFocusedStep] = useState(null);

  const steps = [
    {
      id: 1,
      number: 1,
      title: 'Connect Platforms',
      description: 'Easily link Meta, Google, Shopify, TikTok, and more to centralize your marketing data in just a few clicks.',
      active: true,
    },
    {
      id: 2,
      number: 2,
      title: 'Install Pixel',
      description: 'Install our tracking pixel with one click—no developer required. Start collecting powerful attribution data instantly without the technical hassle.',
      active: false,
    },
    {
      id: 3,
      number: 3,
      title: 'Get Insights',
      description: 'Quickly access unified reports across all platforms. Gain clear visibility into your campaign performance within hours, not weeks.',
      active: false,
    },
  ];

  return (
    <section className="setup-timeline-section" id="setup" aria-labelledby="setup-heading">
      <div className="setup-container">
        <div className="setup-grid">
          {/* Left Column */}
          <header className="setup-content">
            {/* Badge */}
            <div className="setup-badge" role="status" aria-label="Section badge">
              <svg
                className="star-icon-setup"
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
              <span className="badge-text-setup">Setup Simplicity</span>
            </div>

            {/* Headline */}
            <h2 id="setup-heading" className="setup-headline">
              Setup That
              <br />
              Doesn't Suck
            </h2>

            {/* Subtitle */}
            <p className="setup-subtitle">
              Trusted by growth leaders who demand real results, not just pretty reports.
            </p>
          </header>

          {/* Right Column - Timeline */}
          <ol className="setup-timeline" role="list">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={`setup-step ${step.active ? 'active' : ''} ${focusedStep === step.id ? 'focused' : ''}`}
                onMouseEnter={() => setFocusedStep(step.id)}
                onMouseLeave={() => setFocusedStep(null)}
                onFocus={() => setFocusedStep(step.id)}
                onBlur={() => setFocusedStep(null)}
                tabIndex={0}
                aria-labelledby={`step-title-${step.id}`}
              >
                <div className="step-connector-line" aria-hidden="true"></div>
                <div className="step-node-wrapper">
                  {step.active && <div className="step-halo" aria-hidden="true"></div>}
                  <div className={`step-number-badge ${step.active ? 'active' : ''}`}>
                    <span className="step-number">{step.number}</span>
                  </div>
                </div>
                <div className="step-content">
                  <h3 id={`step-title-${step.id}`} className="step-title">
                    {step.title}
                  </h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default SetupTimeline;

