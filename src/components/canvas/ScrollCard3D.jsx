import React, { useState, useRef } from 'react';

/**
 * ScrollCard3D Component
 * Represents one of the 4 sacred ancient scrolls as a realistic, 3D floating artifact.
 * Features:
 * 1. Interactive mouse-tracking 3D tilt with perspective.
 * 2. Continuous antigravity floating levitation.
 * 3. Dynamic elemental aura and particles (Flames, Obsidian Dragon, Blood Runes, Violet Plasma).
 * 4. Ornate cultivation array / magic seal plinth underneath.
 * 5. Clear "SCROLL 1 / 2 / 3 / 4" numbering and sacred metadata.
 * 6. Interactive hover unsealing prompt and click unroll trigger.
 */
export default function ScrollCard3D({
  scrollData,
  scrollIndex,
  onOpen,
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse move handler for smooth 3D perspective tilt
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation in degrees
    const maxRotate = 14;
    const rotateY = ((x - centerX) / centerX) * maxRotate;
    const rotateX = -((y - centerY) / centerY) * maxRotate;
    
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setTilt({ rotateX, rotateY, glareX, glareY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  // Scroll color palettes & aura definitions
  const theme = getScrollTheme(scrollData.scrollNum || scrollIndex);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen(scrollData)}
      className="group relative cursor-pointer select-none perspective-[1200px] transition-transform duration-300"
      style={{ minHeight: '440px' }}
      role="button"
      tabIndex={0}
      aria-label={`Unseal ${scrollData.scrollName || `Scroll ${scrollIndex}`}: ${scrollData.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(scrollData);
        }
      }}
    >
      {/* 3D Tilting Card Container */}
      <div
        className="relative w-full h-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out border"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${
            isHovered ? 1.04 : 1
          }, ${isHovered ? 1.04 : 1}, 1)`,
          transformStyle: 'preserve-3d',
          borderColor: isHovered ? theme.accentColor : theme.borderColor,
          background: theme.cardBg,
          boxShadow: isHovered ? theme.hoverShadow : theme.defaultShadow,
        }}
      >
        {/* Specular Glare Layer tracking the cursor */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
          }}
        />

        {/* Ambient Elemental Glow Aura in Background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none filter blur-[50px] transition-all duration-500"
          style={{
            background: theme.auraBg,
            opacity: isHovered ? 0.8 : 0.4,
            transform: isHovered ? 'scale(1.25)' : 'scale(1)',
          }}
        />

        {/* Top Header: Scroll Number & Sacred Badge */}
        <div className="relative z-10 flex items-center justify-between" style={{ transform: 'translateZ(25px)' }}>
          <div className="flex items-center gap-2.5">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-black tracking-widest uppercase border flex items-center gap-1.5 shadow-sm"
              style={{
                borderColor: theme.accentColor,
                background: theme.badgeBg,
                color: theme.accentColor,
              }}
            >
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: theme.accentColor }} />
              SCROLL {scrollData.scrollNum || scrollIndex}
            </span>
            <span className="text-xl">{scrollData.icon}</span>
          </div>

          <span
            className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border border-slate-700/60 bg-black/50 text-slate-300"
          >
            {scrollData.tier}
          </span>
        </div>

        {/* Central 3D Floating Scroll Artifact Showcase */}
        <div
          className="relative z-10 my-4 flex-1 flex flex-col items-center justify-center py-2"
          style={{ transform: 'translateZ(40px)' }}
        >
          {/* Antigravity Floating Scroll Wrapper */}
          <div
            className={`relative w-full max-w-[340px] flex items-center justify-center transition-transform duration-500 ${
              isHovered ? 'scale-110 -translate-y-2' : 'antigravity-scroll-float'
            }`}
          >
            {/* Ornate Cultivation Array / Magic Seal Base beneath scroll */}
            <div
              className="absolute -bottom-6 w-44 h-20 pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              style={{
                transform: 'rotateX(75deg)',
                borderRadius: '50%',
                border: `2px dashed ${theme.accentColor}`,
                boxShadow: `0 0 25px ${theme.accentColor}`,
                animation: 'spin 18s linear infinite',
              }}
            />

            {/* Glowing Rune Ring around Scroll */}
            <div
              className="absolute inset-0 m-auto w-48 h-48 rounded-full pointer-events-none opacity-20 group-hover:opacity-60 transition-all duration-500"
              style={{
                border: `1px solid ${theme.accentColor}`,
                boxShadow: `inset 0 0 20px ${theme.accentColor}`,
                transform: isHovered ? 'scale(1.2)' : 'scale(1)',
              }}
            />

            {/* The Authentic 3D Scroll Image Asset */}
            <div className="relative z-10 w-full flex items-center justify-center">
              <img
                src={scrollData.scrollImage}
                alt={`Scroll ${scrollData.scrollNum || scrollIndex} - ${scrollData.title}`}
                className={`max-h-[170px] sm:max-h-[190px] w-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] transition-all duration-500 ${
                  theme.imageFilter
                } ${isHovered ? theme.hoverFilter : ''}`}
              />

              {/* Elemental Sparkle / Flame Corona Effect */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: isHovered ? 1 : 0.6,
                  boxShadow: `inset 0 0 30px ${theme.accentColor}44`,
                  mixBlendMode: 'screen',
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Title, Subtitle, and Interactive Unseal Button */}
        <div className="relative z-10 flex flex-col gap-2 pt-2 border-t border-slate-800/80" style={{ transform: 'translateZ(30px)' }}>
          <div>
            <h3
              className="font-mystic font-black text-xl sm:text-2xl tracking-wider text-white transition-colors duration-200"
              style={{
                color: isHovered ? theme.accentColor : '#ffffff',
                textShadow: isHovered ? `0 0 15px ${theme.accentColor}88` : 'none',
              }}
            >
              {scrollData.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 tracking-wider">
              {scrollData.subtitle}
            </p>
          </div>

          <p className="text-xs text-slate-300/90 leading-relaxed line-clamp-2">
            {scrollData.description}
          </p>

          {/* Interactive Unroll CTA Banner */}
          <div
            className="mt-2 py-2 px-4 rounded-xl flex items-center justify-between font-mono text-xs font-bold transition-all duration-300 border"
            style={{
              borderColor: isHovered ? theme.accentColor : 'rgba(148,163,184,0.2)',
              background: isHovered ? theme.buttonHoverBg : 'rgba(10,12,25,0.7)',
              color: isHovered ? '#ffffff' : theme.accentColor,
              boxShadow: isHovered ? `0 0 20px ${theme.accentColor}66` : 'none',
            }}
          >
            <span className="flex items-center gap-1.5 tracking-wider">
              <span>✦</span>
              <span>CLICK TO UNROLL SCROLL</span>
            </span>
            <span
              className="text-base transition-transform duration-300"
              style={{ transform: isHovered ? 'translateX(4px)' : 'none' }}
            >
              📜 ➔
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helpers for distinct visual identity for each of the 4 scrolls
function getScrollTheme(num) {
  const n = String(num);
  if (n === '1') {
    // Scroll 1: Blazing Crimson & Gold Celestial Flame Scroll
    return {
      accentColor: '#f97316',
      borderColor: 'rgba(249, 115, 22, 0.4)',
      cardBg: 'radial-gradient(120% 120% at 50% 10%, rgba(35, 12, 12, 0.92) 0%, rgba(10, 8, 14, 0.95) 100%)',
      defaultShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(239, 68, 68, 0.2)',
      hoverShadow: '0 25px 65px rgba(0, 0, 0, 0.95), 0 0 45px rgba(249, 115, 22, 0.55)',
      badgeBg: 'rgba(249, 115, 22, 0.15)',
      auraBg: 'radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, rgba(245, 158, 11, 0.2) 60%, transparent 80%)',
      buttonHoverBg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.8), rgba(245, 158, 11, 0.8))',
      imageFilter: 'brightness-110 contrast-110',
      hoverFilter: 'brightness-125 drop-shadow-[0_0_25px_rgba(249,115,22,0.8)]',
    };
  } else if (n === '2') {
    // Scroll 2: Dark Obsidian & Metallic Silver Dragon Scroll
    return {
      accentColor: '#38bdf8',
      borderColor: 'rgba(56, 189, 248, 0.35)',
      cardBg: 'radial-gradient(120% 120% at 50% 10%, rgba(15, 23, 42, 0.92) 0%, rgba(8, 10, 18, 0.95) 100%)',
      defaultShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(56, 189, 248, 0.15)',
      hoverShadow: '0 25px 65px rgba(0, 0, 0, 0.95), 0 0 40px rgba(56, 189, 248, 0.45)',
      badgeBg: 'rgba(56, 189, 248, 0.15)',
      auraBg: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(148, 163, 184, 0.2) 60%, transparent 80%)',
      buttonHoverBg: 'linear-gradient(135deg, rgba(56, 189, 248, 0.8), rgba(99, 102, 241, 0.8))',
      imageFilter: 'brightness-105 contrast-115',
      hoverFilter: 'brightness-120 drop-shadow-[0_0_25px_rgba(56,189,248,0.7)]',
    };
  } else if (n === '3') {
    // Scroll 3: Weathered Demonic Skull & Blood Runic Scroll
    return {
      accentColor: '#ef4444',
      borderColor: 'rgba(239, 68, 68, 0.4)',
      cardBg: 'radial-gradient(120% 120% at 50% 10%, rgba(38, 14, 14, 0.92) 0%, rgba(12, 6, 8, 0.95) 100%)',
      defaultShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(220, 38, 38, 0.25)',
      hoverShadow: '0 25px 65px rgba(0, 0, 0, 0.95), 0 0 45px rgba(239, 68, 68, 0.6)',
      badgeBg: 'rgba(239, 68, 68, 0.15)',
      auraBg: 'radial-gradient(circle, rgba(220, 38, 38, 0.5) 0%, rgba(153, 27, 27, 0.25) 60%, transparent 80%)',
      buttonHoverBg: 'linear-gradient(135deg, rgba(220, 38, 38, 0.85), rgba(185, 28, 28, 0.85))',
      imageFilter: 'brightness-105 contrast-120',
      hoverFilter: 'brightness-120 drop-shadow-[0_0_25px_rgba(239,68,68,0.8)]',
    };
  } else {
    // Scroll 4: Ethereal Violet Heavenly Flame Scroll
    return {
      accentColor: '#c084fc',
      borderColor: 'rgba(192, 132, 252, 0.4)',
      cardBg: 'radial-gradient(120% 120% at 50% 10%, rgba(28, 13, 44, 0.92) 0%, rgba(9, 7, 18, 0.95) 100%)',
      defaultShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(168, 85, 247, 0.25)',
      hoverShadow: '0 25px 65px rgba(0, 0, 0, 0.95), 0 0 45px rgba(192, 132, 252, 0.6)',
      badgeBg: 'rgba(192, 132, 252, 0.15)',
      auraBg: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(192, 132, 252, 0.25) 60%, transparent 80%)',
      buttonHoverBg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.85), rgba(147, 51, 234, 0.85))',
      imageFilter: 'brightness-110 contrast-115',
      hoverFilter: 'brightness-125 drop-shadow-[0_0_25px_rgba(192,132,252,0.85)]',
    };
  }
}
