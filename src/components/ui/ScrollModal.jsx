import React from 'react';

export default function ScrollModal({ scroll, onClose }) {
  if (!scroll) return null;

  return (
    <div className="scroll-modal-backdrop interactive" onClick={onClose}>
      <aside
        className="scroll-details-card"
        id="scroll-inspect-modal"
        aria-label="Scroll Details"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: `1.5px solid ${scroll.themeColor}`,
          boxShadow: `0 16px 48px rgba(0,0,0,0.85), 0 0 32px ${scroll.themeColor}33`,
        }}
      >
        <div className="scroll-details-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.4rem' }}>{scroll.icon}</span>
            <div>
              <h2 className="scroll-title" style={{ color: scroll.themeColor }}>
                {scroll.title}
              </h2>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
                {scroll.subtitle}
              </div>
            </div>
          </div>
          <button
            className="close-btn"
            id="btn-close-scroll"
            onClick={onClose}
            aria-label="Close scroll details"
          >
            ✕
          </button>
        </div>

        <div className="scroll-tier" style={{ borderColor: scroll.themeColor, color: scroll.themeColor }}>
          {scroll.tier}
        </div>

        <p className="scroll-desc">{scroll.description}</p>

        {/* --- Render Content Specific to Each Scroll --- */}

        {/* 1. Skills Arsenal */}
        {scroll.skillsList && (
          <div className="skills-container">
            {scroll.skillsList.map((category, idx) => (
              <div key={idx} className="skill-category-block">
                <div className="skill-cat-title">{category.category}</div>
                <div className="skill-tags-cloud">
                  {category.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="skill-pill" style={{ borderColor: `${scroll.themeColor}55` }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. About Details */}
        {scroll.details && (
          <div className="about-grid">
            {scroll.details.map((item, idx) => (
              <div key={idx} className="about-item-box">
                <div className="about-label">{item.label}</div>
                <div className="about-value">{item.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Projects List */}
        {scroll.projectsList && (
          <div className="projects-container">
            {scroll.projectsList.map((project, idx) => (
              <div key={idx} className="project-card-mini">
                <div className="project-header">
                  <span className="project-name">{project.name}</span>
                </div>
                <div className="project-tech">{project.tech}</div>
                <p className="project-desc">{project.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* 4. Contact Links */}
        {scroll.contacts && (
          <div className="contact-links-grid">
            {scroll.contacts.map((c, idx) => (
              <a
                key={idx}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-link"
                style={{ borderColor: `${scroll.themeColor}66` }}
              >
                <span className="contact-label">{c.label}</span>
                <span className="contact-val" style={{ color: scroll.themeColor }}>{c.value} ↗</span>
              </a>
            ))}
          </div>
        )}
      </aside>
    </div>
  );
}
