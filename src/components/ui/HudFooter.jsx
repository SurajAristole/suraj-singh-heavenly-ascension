import React from 'react';

export default function HudFooter() {
  return (
    <footer className="hud-footer" id="hud-footer">
      <div className="hud-left">
        <span className="hud-dot" />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
          SURFACE REALM: DOU ZONG · ZERO GRAVITY
        </span>
      </div>

      <div className="hud-center-hint interactive">
        <span>🖱️ Drag to orbit 3D void · Click any floating scroll to read</span>
      </div>

      <div className="hud-right">
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-green-neon)' }}>
          PERF: DPR [1, 1.5] CAPPED
        </span>
      </div>
    </footer>
  );
}
