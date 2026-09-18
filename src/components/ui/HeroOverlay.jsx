import React from 'react';

export default function HeroOverlay({
  scrollsData,
  activeScroll,
  setActiveScroll,
}) {
  return (
    <main className="hero-content" id="hero-section">
      <div className="realm-tag" id="realm-tag">
        <span>✦</span> DOU QI CELESTIAL SANCTUM <span>✦</span>
      </div>

      <h1 className="hero-title" id="main-heading">
        Suraj <span className="purple-glow">Singh</span>
      </h1>

      <p className="hero-subtitle">
        <span className="emerald-glow">Computer Science &amp; Engineering</span> · Java Backend Developer
      </p>

      <p className="hero-description" id="hero-summary">
        Crafting resilient distributed systems, Spring Boot microservices, and high-performance server architectures within the Battle Through The Heavens void.
      </p>

      {/* Quick Access Scroll Selector Buttons */}
      <div className="interactive scroll-quick-nav" aria-label="Select Scripture Scroll">
        <span className="scroll-nav-label">UNSEAL SCRIPTURES:</span>
        <div className="scroll-buttons-row">
          {scrollsData.map((scroll) => {
            const isCurrent = activeScroll?.id === scroll.id;
            return (
              <button
                key={scroll.id}
                id={`btn-scroll-${scroll.id}`}
                className={`btn-scroll-tab ${isCurrent ? 'active' : ''}`}
                style={{
                  '--scroll-color': scroll.themeColor,
                }}
                onClick={() => setActiveScroll(scroll)}
              >
                <span>{scroll.icon}</span>
                <span>{scroll.badge}</span>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
