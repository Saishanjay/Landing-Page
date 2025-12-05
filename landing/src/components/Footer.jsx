import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setEmailSuccess(false);

    if (!email) {
      setEmailError('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    // Success state
    setEmailSuccess(true);
    setEmail('');
    setTimeout(() => setEmailSuccess(false), 3000);
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const productsLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'API', href: '#api' },
    { label: 'Integrations', href: '#integrations' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Support', href: '#support' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
  ];

  const socialLinks = [
    {
      name: 'TikTok',
      href: 'https://tiktok.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="footer-container">
        {/* Content Area */}
        <div className="footer-content">
          {/* Column 1: Brand & Email */}
          <div className="footer-column footer-brand">
            <h3 className="footer-brand-title">AdShark</h3>
            <p className="footer-brand-description">
              AdShark empowers businesses to grow with smarter marketing insights and seamless integrations.
            </p>
            <form
              className="footer-email-form"
              onSubmit={handleEmailSubmit}
              aria-label="Email subscription form"
            >
              <label htmlFor="footer-email" className="visually-hidden">
                Enter your email address
              </label>
              <div className="email-input-wrapper">
                <input
                  id="footer-email"
                  type="email"
                  className={`footer-email-input ${emailError ? 'error' : ''} ${emailSuccess ? 'success' : ''}`}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  aria-invalid={emailError ? 'true' : 'false'}
                  aria-describedby={emailError ? 'email-error' : emailSuccess ? 'email-success' : undefined}
                />
                <button
                  type="submit"
                  className="footer-demo-button"
                  aria-label="Book a demo"
                  onKeyDown={(e) => handleKeyDown(e, handleEmailSubmit)}
                >
                  Book Demo
                </button>
              </div>
              {emailError && (
                <span id="email-error" className="email-error-message" role="alert">
                  {emailError}
                </span>
              )}
              {emailSuccess && (
                <span id="email-success" className="email-success-message" role="status">
                  Thank you! We'll be in touch soon.
                </span>
              )}
            </form>
          </div>

          {/* Column 2: Products */}
          <nav className="footer-column" aria-label="Products">
            <h4 className="footer-column-title">Products</h4>
            <ul className="footer-links">
              {productsLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Quick Links */}
          <nav className="footer-column" aria-label="Quick Links">
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Legal & Contact */}
          <div className="footer-column">
            <nav className="footer-legal" aria-label="Legal">
              <h4 className="footer-column-title">Legal</h4>
              <ul className="footer-links">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <address className="footer-contact">
              <a href="mailto:support@adshark.io" className="footer-contact-item">
                <svg
                  className="contact-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 3h12v10H2V3zm1 1v8h10V4H3zm1.5 1L8 7.5 11.5 5h-7zm-1 0L2 6.5v5L3.5 10V5zm9 0v5L14 11.5v-5L11.5 5z"
                    fill="currentColor"
                  />
                </svg>
                <span>support@adshark.io</span>
              </a>
              <a href="tel:+12365478941" className="footer-contact-item">
                <svg
                  className="contact-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.65 11.94a.678.678 0 0 1-.58-.122L6.162 9.38a.678.678 0 0 1-.122-.58l.122-1.034a.678.678 0 0 0-.122-.58L4.654 5.328z"
                    fill="currentColor"
                  />
                </svg>
                <span>+1 (236) 547-8941</span>
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 AdShark. All rights reserved.
          </div>
          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="social-icon-button"
                aria-label={`Open ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

