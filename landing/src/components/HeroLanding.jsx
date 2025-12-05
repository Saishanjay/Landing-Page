import { useState, useEffect, useRef } from 'react';
import './HeroLanding.css';

const HeroLanding = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const firstMenuLinkRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  const handleMenuLinkClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    
    // Wait for menu to close, then scroll to section
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Wait for menu animation to complete
  };

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusableElements = menu.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element when menu opens
    if (firstElement) {
      setTimeout(() => firstElement.focus(), 100);
    }

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    menu.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscape);

    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';

    return () => {
      menu.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Setup', href: '#setup' },
    { label: 'Audience', href: '#audience' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  const platformIcons = [
    { name: 'Amazon', letter: 'A', color: '#FF9900', delay: '0s', duration: '6s' },
    { name: 'Meta', letter: 'M', color: '#0081FB', delay: '0.5s', duration: '7s' },
    { name: 'TikTok', letter: 'T', color: '#000000', delay: '1s', duration: '5.5s' },
    { name: 'Google', letter: 'G', color: '#4285F4', delay: '1.5s', duration: '8s' },
    { name: 'Shopify', letter: 'S', color: '#96BF48', delay: '2s', duration: '6.5s' },
    { name: 'Meta', letter: 'M', color: '#0081FB', delay: '2.5s', duration: '7.5s' },
    { name: 'Amazon', letter: 'A', color: '#FF9900', delay: '3s', duration: '5s' },
    { name: 'Google', letter: 'G', color: '#4285F4', delay: '3.5s', duration: '9s' },
  ];

  const pillPositions = [
    { top: '15%', left: '10%' },
    { top: '20%', right: '12%' },
    { top: '35%', left: '8%' },
    { top: '40%', right: '15%' },
    { bottom: '25%', left: '12%' },
    { bottom: '30%', right: '10%' },
    { bottom: '15%', left: '18%' },
    { bottom: '20%', right: '18%' },
  ];

  return (
    <div className="landing-page">
      {/* Concentric rings */}
      <div className="rings-container">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
      </div>

      {/* Floating platform icons */}
      {platformIcons.map((icon, index) => (
        <div
          key={index}
          className="floating-pill"
          style={{
            ...pillPositions[index],
            '--delay': icon.delay,
            '--duration': icon.duration,
          }}
        >
          <div className="pill-content" style={{ color: icon.color }}>
            {icon.letter}
          </div>
        </div>
      ))}

      {/* Header */}
      <header className="landing-header">
        <div className="header-container">
          <div className="logo">AdShark</div>
          <nav className="header-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a href="#login" className="login-link">Login</a>
            <button className="demo-button-header" aria-label="Book a demo">
              Book Demo
            </button>
          </div>
          {/* Mobile Hamburger Button */}
          <button
            ref={hamburgerRef}
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-icon" aria-hidden="true">
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-panel">
          {/* Close Button */}
          <button
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            <ul className="mobile-menu-links">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleMenuLinkClick(e, link.href)}
                    ref={index === 0 ? firstMenuLinkRef : null}
                    className="mobile-menu-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Actions */}
          <div className="mobile-menu-actions">
            <a href="#login" className="mobile-login-link" onClick={(e) => { e.preventDefault(); closeMenu(); }}>
              Login
            </a>
            <button
              className="mobile-demo-button"
              onClick={(e) => { e.preventDefault(); closeMenu(); }}
              aria-label="Book a demo"
            >
              Book Demo
            </button>
          </div>
        </div>
        {/* Backdrop */}
        <div className="mobile-menu-backdrop" onClick={closeMenu} aria-hidden="true"></div>
      </div>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge" role="status" aria-label="Tagline">
            <span className="badge-text">Smarter spend. Better returns</span>
            <svg
              className="star-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 0L9.79611 5.52786L15.6085 5.52786L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786L6.20389 5.52786L8 0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Unlock Clarity on
            <br />
            Every Ad Dollar
          </h1>

          {/* Subtext */}
          <p className="hero-subtext">
            AdShark is your single source of truth for marketing attribution. Cut through channel noise and drive efficient growth.
          </p>

          {/* Email Capture Form */}
          <form className="email-capture-form" onSubmit={handleSubmit}>
            <label htmlFor="email-input" className="visually-hidden">
              Enter your email address
            </label>
            <input
              id="email-input"
              type="email"
              className="email-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
            <button
              type="submit"
              className="cta-button"
              aria-label="Book a demo with your email"
            >
              Book Demo
            </button>
          </form>
        </div>
      </main>

      {/* Radial spotlight effect */}
      <div className="spotlight"></div>
    </div>
  );
};

export default HeroLanding;

