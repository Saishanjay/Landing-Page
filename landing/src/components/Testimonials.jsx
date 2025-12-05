import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [focusedCard, setFocusedCard] = useState(null);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: 'Replaced 5 different attribution tools with just AdShark. Finally have a single source of truth for our $2M+ monthly ad spend.',
      name: 'Mike Johnson',
      role: 'CMO, RetailBrand',
      avatar: 'M',
      brand: 'meta',
    },
    {
      id: 2,
      quote: 'The transparency we get from AdShark has completely changed how we allocate budget. No more guessing games.',
      name: 'Sarah Chen',
      role: 'Head of Growth, TechStart',
      avatar: 'S',
      brand: 'tiktok',
    },
    {
      id: 3,
      quote: 'Finally, attribution that actually works. We cut our wasted ad spend by 40% in the first quarter.',
      name: 'David Martinez',
      role: 'Founder, EcomCo',
      avatar: 'D',
      brand: 'amazon',
    },
    {
      id: 4,
      quote: 'AdShark gives us the confidence to scale. We know exactly which channels drive profitable growth.',
      name: 'Emily Watson',
      role: 'Marketing Director, FashionHub',
      avatar: 'E',
      brand: 'shopify',
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll('.testimonial-card');
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestCard = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = index;
        }
      });

      setActiveCard(closestCard);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.testimonial-card');
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: -40000, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-container">
        {/* Badge */}
        <div className="testimonials-badge" role="status" aria-label="Section badge">
          <svg
            className="star-icon-testimonials"
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
          <span className="badge-text-testimonials">Testimonials</span>
        </div>

        {/* Headline */}
        <h2 id="testimonials-heading" className="testimonials-headline">
          What Our Clients Say
        </h2>

        {/* Subtitle */}
        <p className="testimonials-subtitle">
          Trusted by growth leaders who demand real results, not just pretty reports.
        </p>

        {/* Testimonials Carousel */}
        <div className="testimonials-carousel-wrapper">
          {/* Left Fade Overlay */}
          <div className="carousel-fade carousel-fade-left" aria-hidden="true"></div>

          {/* Scroll Container */}
          <ul
            ref={scrollContainerRef}
            className="testimonials-carousel"
            role="list"
            aria-label="Client testimonials carousel"
            aria-roledescription="carousel"
          >
            {testimonials.map((testimonial, index) => (
              <li
                key={testimonial.id}
                className={`testimonial-card ${activeCard === index ? 'active' : ''} ${focusedCard === testimonial.id ? 'focused' : ''}`}
                onMouseEnter={() => setFocusedCard(testimonial.id)}
                onMouseLeave={() => setFocusedCard(null)}
                onFocus={() => setFocusedCard(testimonial.id)}
                onBlur={() => setFocusedCard(null)}
                tabIndex={0}
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <article className="testimonial-content">
                  {/* Brand Logo */}
                  <div className="testimonial-brand" aria-hidden="true">
                    <img
                      src={`/assets/${testimonial.brand}.svg`}
                      alt=""
                      className="brand-logo-testimonial"
                      loading="lazy"
                    />
                  </div>

                  {/* Quote */}
                  <blockquote className="testimonial-quote">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* User Info */}
                  <div className="testimonial-user">
                    <div className="user-avatar" aria-hidden="true">
                      <span className="avatar-initial">{testimonial.avatar}</span>
                    </div>
                    <div className="user-info">
                      <div className="user-name">{testimonial.name}</div>
                      <div className="user-role">{testimonial.role}</div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {/* Right Fade Overlay */}
          <div className="carousel-fade carousel-fade-right" aria-hidden="true"></div>
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls" aria-label="Carousel navigation">
          <button
            className="carousel-button carousel-button-left"
            onClick={scrollLeft}
            aria-label="Previous testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="carousel-button carousel-button-right"
            onClick={scrollRight}
            aria-label="Next testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Decorative Glow Bar */}
        <div className="testimonials-glow" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Testimonials;

