import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar interactive" id="site-header">
      <div className="brand" id="brand-identity">
        <div className="brand-flame-icon" title="BTTH Dual Flame Core">
          <span style={{ fontSize: '11px' }}>⚡</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="brand-title">SURAJ SINGH</span>
          <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--color-green-neon)', letterSpacing: '0.05em' }}>
            JAVA BACKEND DEVELOPER
          </span>
        </div>
      </div>

      <nav className="nav-badges" aria-label="Status Indicators">
        <div className="badge badge-antigravity" id="badge-discipline">
          <span className="badge-dot" />
          <span>CS &amp; Engineering</span>
        </div>
        <div className="badge badge-dpr" id="badge-dpr-status">
          <span className="badge-dot" />
          <span>BTTH Void Realm</span>
        </div>
      </nav>
    </header>
  );
}
