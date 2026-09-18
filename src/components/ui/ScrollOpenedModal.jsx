import React, { useEffect, useState } from 'react';

/**
 * ScrollOpenedModal Component
 * The authentic unrolled scroll page that opens with animation.
 * Features:
 * 1. Unrolling 3D Animation: Top spool rolls up, bottom spool rolls down, revealing data parchment.
 * 2. Body-Matching Boundaries:
 *    - Scroll 1: Golden cylindrical spools, crimson/gold wave brocade borders, blazing red/amber flame aura.
 *    - Scroll 2: Polished silver metallic spools, dark obsidian leather & silver dragon wave borders, silver mist.
 *    - Scroll 3: Scorched weathered parchment headers, hemp rope with skull talismans, glowing blood-red runes.
 *    - Scroll 4: Violet flame spools, dancing purple plasma fire borders, ethereal twilight vellum.
 * 3. Comprehensive Data Display for each scripture.
 * 4. Responsive scrolling and close controls (ESC key, backdrop, close button).
 */
export default function ScrollOpenedModal({ scroll, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  // Handle ESC key to close
  useEffect(() => {
    if (!scroll) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleInitiateClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [scroll]);

  if (!scroll) return null;

  const scrollNum = String(scroll.scrollNum || '1');

  const handleInitiateClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 380); // match roll-up animation time
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleInitiateClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Unrolled Scroll: ${scroll.title}`}
    >
      {/* Container for the 3D Unrolling Scroll Page */}
      <div
        className={`relative w-full max-w-3xl max-h-[92vh] flex flex-col items-center justify-between cursor-default select-text ${
          isClosing ? 'animate-roll-up' : 'animate-roll-down'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Render body-matching boundary and content based on scrollNum */}
        {scrollNum === '1' && (
          <FlameScrollContent scroll={scroll} onClose={handleInitiateClose} />
        )}
        {scrollNum === '2' && (
          <ObsidianScrollContent scroll={scroll} onClose={handleInitiateClose} />
        )}
        {scrollNum === '3' && (
          <SkullRunicScrollContent scroll={scroll} onClose={handleInitiateClose} />
        )}
        {scrollNum === '4' && (
          <VioletFlameScrollContent scroll={scroll} onClose={handleInitiateClose} />
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCROLL 1: BLAZING CRIMSON & MOLTEN GOLD CELESTIAL SCROLL
// Boundary matches Scroll 1: Gold cylinder spools, crimson wave brocade, red flame corona
// -------------------------------------------------------------
function FlameScrollContent({ scroll, onClose }) {
  return (
    <div className="relative w-full flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(239,68,68,0.45)]">
      {/* TOP SPOOL ROD: Ornate Golden Finials with Red Cord Wraps */}
      <div className="relative z-20 w-full h-11 sm:h-13 bg-gradient-to-r from-[#ca8a04] via-[#fef08a] to-[#ca8a04] rounded-full border-2 border-amber-300 shadow-[0_4px_20px_rgba(239,68,68,0.7)] flex items-center justify-between px-3 sm:px-6">
        {/* Left Golden Finial Knob */}
        <div className="flex items-center gap-1">
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-amber-200 to-amber-700 border border-amber-100 shadow-md" />
          <div className="w-2.5 h-6 bg-red-700 rounded-sm border border-amber-300" />
        </div>

        {/* Center Spool Seal */}
        <div className="flex items-center gap-2">
          <span className="text-red-950 font-mono font-black text-[11px] sm:text-xs tracking-[0.25em] uppercase px-3 py-0.5 rounded-full bg-amber-300/60 border border-red-800/30">
            ✦ SCROLL 1 · CELESTIAL FLAME CORE ✦
          </span>
        </div>

        {/* Right Golden Finial Knob */}
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-6 bg-red-700 rounded-sm border border-amber-300" />
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-amber-200 to-amber-700 border border-amber-100 shadow-md" />
        </div>
      </div>

      {/* UNROLLED PARCHMENT BODY */}
      <div
        className="relative z-10 -my-2.5 mx-2 sm:mx-4 overflow-hidden rounded-lg border-x-4 border-amber-500/80 bg-[#160b0c] text-white p-6 sm:p-10 shadow-inner flex flex-col max-h-[72vh] overflow-y-auto"
        style={{
          boxShadow: 'inset 0 0 50px rgba(0,0,0,0.9), 0 0 40px rgba(239,68,68,0.3)',
          backgroundImage: 'radial-gradient(ellipse at center, #240d0f 0%, #110608 100%)',
        }}
      >
        {/* Golden Wave Brocade Left & Right Side Borders */}
        <div className="absolute top-0 bottom-0 left-0 w-3 bg-[repeating-linear-gradient(45deg,#b45309,#b45309_4px,#ef4444_4px,#ef4444_8px)] opacity-70" />
        <div className="absolute top-0 bottom-0 right-0 w-3 bg-[repeating-linear-gradient(45deg,#b45309,#b45309_4px,#ef4444_4px,#ef4444_8px)] opacity-70" />

        {/* Ornate Corner Inlays */}
        <div className="absolute top-3 left-6 w-4 h-4 border-t-2 border-l-2 border-amber-400" />
        <div className="absolute top-3 right-6 w-4 h-4 border-t-2 border-r-2 border-amber-400" />
        <div className="absolute bottom-3 left-6 w-4 h-4 border-b-2 border-l-2 border-amber-400" />
        <div className="absolute bottom-3 right-6 w-4 h-4 border-b-2 border-r-2 border-amber-400" />

        {/* Scroll Header */}
        <div className="flex items-start justify-between border-b border-amber-500/30 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-xl bg-red-950/80 border border-amber-500/40 shadow-inner">
              {scroll.icon}
            </span>
            <div>
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-amber-400 uppercase">
                {scroll.subtitle}
              </div>
              <h2 className="font-mystic font-black text-2xl sm:text-3xl text-amber-200 tracking-wider">
                {scroll.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-full bg-red-950/80 border border-amber-500/50 text-amber-300 font-mono text-xs font-bold hover:bg-amber-400 hover:text-black transition-all cursor-pointer shadow-md"
            aria-label="Seal Scripture"
          >
            ✕ SEAL SCROLL
          </button>
        </div>

        {/* Tier Badge & Description */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-black tracking-wider bg-gradient-to-r from-red-600/30 to-amber-500/30 border border-amber-400/50 text-amber-300 mb-3">
            ✦ {scroll.tier} ✦
          </span>
          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-sans font-medium">
            {scroll.description}
          </p>
        </div>

        {/* Scroll Content: Skills Categorized */}
        {scroll.skillsList && (
          <div className="flex flex-col gap-4">
            {scroll.skillsList.map((category, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/50 border border-amber-500/25 shadow-sm"
              >
                <div className="text-xs font-mono font-bold tracking-wider text-amber-300 uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>{category.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-red-950/60 border border-red-500/40 text-amber-100 hover:border-amber-300 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BOTTOM SPOOL ROD: Matching Golden Spool */}
      <div className="relative z-20 w-full h-11 sm:h-13 bg-gradient-to-r from-[#ca8a04] via-[#fef08a] to-[#ca8a04] rounded-full border-2 border-amber-300 shadow-[0_4px_20px_rgba(239,68,68,0.7)] flex items-center justify-between px-3 sm:px-6">
        <div className="flex items-center gap-1">
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-amber-200 to-amber-700 border border-amber-100 shadow-md" />
          <div className="w-2.5 h-6 bg-red-700 rounded-sm border border-amber-300" />
        </div>
        <div className="text-red-950 font-mono font-bold text-[10px] sm:text-xs tracking-widest uppercase">
          ✦ TIAN-TIER JAVA BACKEND ARSENAL ✦
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-6 bg-red-700 rounded-sm border border-amber-300" />
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-amber-200 to-amber-700 border border-amber-100 shadow-md" />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCROLL 2: DARK OBSIDIAN & SILVER DRAGON SCROLL
// Boundary matches Scroll 2: Polished silver metallic spools, obsidian leather with silver dragon engravings
// -------------------------------------------------------------
function ObsidianScrollContent({ scroll, onClose }) {
  return (
    <div className="relative w-full flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(56,189,248,0.35)]">
      {/* TOP SPOOL ROD: Polished Silver Spool with Cross-Hatched Handles */}
      <div className="relative z-20 w-full h-11 sm:h-13 bg-gradient-to-r from-[#64748b] via-[#e2e8f0] to-[#64748b] rounded-full border-2 border-slate-300 shadow-[0_4px_20px_rgba(148,163,184,0.6)] flex items-center justify-between px-3 sm:px-6">
        {/* Left Silver Spool Knob with Wire Wrap */}
        <div className="flex items-center gap-1">
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-slate-100 to-slate-700 border border-slate-200 shadow-md" />
          <div className="w-2.5 h-6 bg-slate-900 rounded-sm border border-slate-300" />
        </div>

        {/* Center Silver Title */}
        <div className="flex items-center gap-2">
          <span className="text-slate-950 font-mono font-black text-[11px] sm:text-xs tracking-[0.25em] uppercase px-3 py-0.5 rounded-full bg-slate-200/70 border border-slate-400">
            ✦ SCROLL 2 · OBSIDIAN DRAGON SCRIPTURE ✦
          </span>
        </div>

        {/* Right Silver Spool Knob */}
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-6 bg-slate-900 rounded-sm border border-slate-300" />
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-slate-100 to-slate-700 border border-slate-200 shadow-md" />
        </div>
      </div>

      {/* UNROLLED PARCHMENT BODY */}
      <div
        className="relative z-10 -my-2.5 mx-2 sm:mx-4 overflow-hidden rounded-lg border-x-4 border-slate-400/80 bg-[#0a0f18] text-white p-6 sm:p-10 shadow-inner flex flex-col max-h-[72vh] overflow-y-auto"
        style={{
          boxShadow: 'inset 0 0 50px rgba(0,0,0,0.95), 0 0 40px rgba(56,189,248,0.25)',
          backgroundImage: 'radial-gradient(ellipse at center, #10192a 0%, #060910 100%)',
        }}
      >
        {/* Silver Dragon Wave Side Trim */}
        <div className="absolute top-0 bottom-0 left-0 w-3 bg-[repeating-linear-gradient(45deg,#334155,#334155_4px,#94a3b8_4px,#94a3b8_8px)] opacity-60" />
        <div className="absolute top-0 bottom-0 right-0 w-3 bg-[repeating-linear-gradient(45deg,#334155,#334155_4px,#94a3b8_4px,#94a3b8_8px)] opacity-60" />

        {/* Silver Diamond Corner Rivets */}
        <div className="absolute top-3 left-6 w-3.5 h-3.5 rotate-45 border border-cyan-400 bg-cyan-900/40" />
        <div className="absolute top-3 right-6 w-3.5 h-3.5 rotate-45 border border-cyan-400 bg-cyan-900/40" />
        <div className="absolute bottom-3 left-6 w-3.5 h-3.5 rotate-45 border border-cyan-400 bg-cyan-900/40" />
        <div className="absolute bottom-3 right-6 w-3.5 h-3.5 rotate-45 border border-cyan-400 bg-cyan-900/40" />

        {/* Scroll Header */}
        <div className="flex items-start justify-between border-b border-slate-700/60 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-xl bg-slate-900 border border-slate-600 shadow-inner">
              {scroll.icon}
            </span>
            <div>
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-cyan-300 uppercase">
                {scroll.subtitle}
              </div>
              <h2 className="font-mystic font-black text-2xl sm:text-3xl text-white tracking-wider">
                {scroll.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-full bg-slate-800 border border-cyan-400/50 text-cyan-200 font-mono text-xs font-bold hover:bg-cyan-400 hover:text-black transition-all cursor-pointer shadow-md"
            aria-label="Seal Scripture"
          >
            ✕ SEAL SCROLL
          </button>
        </div>

        {/* Tier Badge & Description */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-black tracking-wider bg-cyan-950/60 border border-cyan-400/50 text-cyan-300 mb-3">
            ✦ {scroll.tier} ✦
          </span>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans font-medium">
            {scroll.description}
          </p>
        </div>

        {/* About Details Grid */}
        {scroll.details && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {scroll.details.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60 shadow-sm flex flex-col gap-1"
              >
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  {item.label}
                </span>
                <span className="text-sm sm:text-base font-semibold text-white font-sans">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BOTTOM SPOOL ROD: Matching Silver Spool */}
      <div className="relative z-20 w-full h-11 sm:h-13 bg-gradient-to-r from-[#64748b] via-[#e2e8f0] to-[#64748b] rounded-full border-2 border-slate-300 shadow-[0_4px_20px_rgba(148,163,184,0.6)] flex items-center justify-between px-3 sm:px-6">
        <div className="flex items-center gap-1">
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-slate-100 to-slate-700 border border-slate-200 shadow-md" />
          <div className="w-2.5 h-6 bg-slate-900 rounded-sm border border-slate-300" />
        </div>
        <div className="text-slate-950 font-mono font-bold text-[10px] sm:text-xs tracking-widest uppercase">
          ✦ DISCIPLINE & CULTIVATION PATH · SURAJ SINGH ✦
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-6 bg-slate-900 rounded-sm border border-slate-300" />
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-slate-100 to-slate-700 border border-slate-200 shadow-md" />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCROLL 3: WEATHERED DEMONIC SKULL & BLOOD RUNIC SCROLL
// Boundary matches Scroll 3: Weathered scorched parchment edges, hemp rope binding, skull talisman, glowing red runes
// -------------------------------------------------------------
function SkullRunicScrollContent({ scroll, onClose }) {
  return (
    <div className="relative w-full flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_65px_rgba(220,38,38,0.5)]">
      {/* TOP HEADER: Weathered Scorched Leather with Hemp Rope & Skull Talismans */}
      <div className="relative z-20 w-full py-2.5 px-4 sm:px-6 bg-gradient-to-r from-[#2b0c0c] via-[#4a1515] to-[#2b0c0c] rounded-t-xl border-t-2 border-x-2 border-red-700/80 shadow-[0_4px_25px_rgba(220,38,38,0.5)] flex items-center justify-between">
        {/* Rope with Skull Talismans */}
        <div className="flex items-center gap-2">
          <span className="text-xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">💀</span>
          <span className="text-xs font-mono font-extrabold text-red-300 tracking-[0.2em] uppercase">
            ✦ SCROLL 3 · ANCIENT RUNIC SOVEREIGNTY ✦
          </span>
          <span className="text-xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">💀</span>
        </div>

        <button
          onClick={onClose}
          className="px-3 py-1 rounded-full bg-black/80 border border-red-500 text-red-300 font-mono text-xs font-bold hover:bg-red-600 hover:text-white transition-all cursor-pointer shadow-md"
          aria-label="Seal Scripture"
        >
          ✕ SEAL SCROLL
        </button>
      </div>

      {/* UNROLLED PARCHMENT BODY */}
      <div
        className="relative z-10 overflow-hidden border-x-4 border-red-800 bg-[#140707] text-white p-6 sm:p-10 shadow-inner flex flex-col max-h-[72vh] overflow-y-auto"
        style={{
          boxShadow: 'inset 0 0 60px rgba(0,0,0,0.95), 0 0 35px rgba(220,38,38,0.3)',
          backgroundImage: 'radial-gradient(ellipse at center, #240909 0%, #0d0404 100%)',
        }}
      >
        {/* Left & Right Pulsing Runic Glyphs Border */}
        <div className="absolute top-0 bottom-0 left-1 w-4 text-[10px] text-red-500/70 font-mono flex flex-col justify-around select-none pointer-events-none">
          {['᚛', 'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛈ', 'ᛇ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ', '᚜'].map((r, i) => (
            <span key={i}>{r}</span>
          ))}
        </div>
        <div className="absolute top-0 bottom-0 right-1 w-4 text-[10px] text-red-500/70 font-mono flex flex-col justify-around select-none pointer-events-none">
          {['᚛', 'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛈ', 'ᛇ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ', '᚜'].map((r, i) => (
            <span key={i}>{r}</span>
          ))}
        </div>

        {/* Scroll Header */}
        <div className="flex items-start justify-between border-b border-red-800/40 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-xl bg-red-950 border border-red-700 shadow-inner">
              {scroll.icon}
            </span>
            <div>
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-red-400 uppercase">
                {scroll.subtitle}
              </div>
              <h2 className="font-mystic font-black text-2xl sm:text-3xl text-red-100 tracking-wider">
                {scroll.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Tier Badge & Description */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-black tracking-wider bg-red-950/70 border border-red-500/60 text-red-400 mb-3">
            ✦ {scroll.tier} ✦
          </span>
          <p className="text-sm sm:text-base text-red-100/90 leading-relaxed font-sans font-medium">
            {scroll.description}
          </p>
        </div>

        {/* Projects Feats List */}
        {scroll.projectsList && (
          <div className="flex flex-col gap-4">
            {scroll.projectsList.map((proj, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-black/60 border border-red-800/50 shadow-md hover:border-red-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-mystic font-bold text-lg text-amber-200">
                    {proj.name}
                  </h4>
                  <span className="text-xs font-mono font-bold text-red-400">
                    ✦ BATTLE FEAT 0{idx + 1}
                  </span>
                </div>
                <div className="text-xs font-mono text-amber-400/90 mb-2">
                  {proj.tech}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BOTTOM FOOTER: Scorched Antique Border */}
      <div className="relative z-20 w-full py-2.5 px-4 sm:px-6 bg-gradient-to-r from-[#2b0c0c] via-[#4a1515] to-[#2b0c0c] rounded-b-xl border-b-2 border-x-2 border-red-700/80 shadow-[0_4px_25px_rgba(220,38,38,0.5)] flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-red-300 tracking-widest uppercase">
          ᚛ DI-TIER SOVEREIGN PROJECTS & ARCHITECTURES ᚜
        </span>
        <span className="text-xs font-mono text-red-400">⚡ SEALS OF FEATS</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// SCROLL 4: ETHEREAL VIOLET HEAVENLY FLAME SCROLL
// Boundary matches Scroll 4: Swirling purple plasma flame corona, dark violet parchment, ethereal spools
// -------------------------------------------------------------
function VioletFlameScrollContent({ scroll, onClose }) {
  return (
    <div className="relative w-full flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_65px_rgba(168,85,247,0.5)]">
      {/* TOP SPOOL: Violet Flame Corona Spool */}
      <div className="relative z-20 w-full h-11 sm:h-13 bg-gradient-to-r from-[#3b0764] via-[#a855f7] to-[#3b0764] rounded-full border-2 border-purple-300 shadow-[0_4px_25px_rgba(168,85,247,0.7)] flex items-center justify-between px-3 sm:px-6">
        <div className="flex items-center gap-1">
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-purple-200 to-purple-800 border border-purple-100 shadow-md" />
          <div className="w-2.5 h-6 bg-purple-950 rounded-sm border border-purple-300" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-white font-mono font-black text-[11px] sm:text-xs tracking-[0.25em] uppercase px-3 py-0.5 rounded-full bg-purple-950/70 border border-purple-400 shadow-sm">
            ✦ SCROLL 4 · VIOLET HEAVENLY FLAME ✦
          </span>
        </div>

        <div className="flex items-center gap-1">
          <div className="w-2.5 h-6 bg-purple-950 rounded-sm border border-purple-300" />
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-purple-200 to-purple-800 border border-purple-100 shadow-md" />
        </div>
      </div>

      {/* UNROLLED PARCHMENT BODY */}
      <div
        className="relative z-10 -my-2.5 mx-2 sm:mx-4 overflow-hidden rounded-lg border-x-4 border-purple-400 bg-[#0e0717] text-white p-6 sm:p-10 shadow-inner flex flex-col max-h-[72vh] overflow-y-auto"
        style={{
          boxShadow: 'inset 0 0 55px rgba(0,0,0,0.95), 0 0 40px rgba(168,85,247,0.3)',
          backgroundImage: 'radial-gradient(ellipse at center, #210c38 0%, #090310 100%)',
        }}
      >
        {/* Violet Plasma Side Corona */}
        <div className="absolute top-0 bottom-0 left-0 w-3 bg-[repeating-linear-gradient(45deg,#581c87,#581c87_4px,#c084fc_4px,#c084fc_8px)] opacity-60" />
        <div className="absolute top-0 bottom-0 right-0 w-3 bg-[repeating-linear-gradient(45deg,#581c87,#581c87_4px,#c084fc_4px,#c084fc_8px)] opacity-60" />

        {/* Scroll Header */}
        <div className="flex items-start justify-between border-b border-purple-700/50 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-xl bg-purple-950 border border-purple-500 shadow-inner">
              {scroll.icon}
            </span>
            <div>
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-purple-300 uppercase">
                {scroll.subtitle}
              </div>
              <h2 className="font-mystic font-black text-2xl sm:text-3xl text-purple-100 tracking-wider">
                {scroll.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-full bg-purple-900 border border-purple-400 text-purple-200 font-mono text-xs font-bold hover:bg-purple-400 hover:text-black transition-all cursor-pointer shadow-md"
            aria-label="Seal Scripture"
          >
            ✕ SEAL SCROLL
          </button>
        </div>

        {/* Tier Badge & Description */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-black tracking-wider bg-purple-950/70 border border-purple-400/60 text-purple-300 mb-3">
            ✦ {scroll.tier} ✦
          </span>
          <p className="text-sm sm:text-base text-purple-100/90 leading-relaxed font-sans font-medium">
            {scroll.description}
          </p>
        </div>

        {/* Contact Transmission Channels */}
        {scroll.contacts && (
          <div className="flex flex-col gap-3.5">
            {scroll.contacts.map((c, idx) => (
              <a
                key={idx}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-black/50 border border-purple-600/40 hover:border-purple-300 hover:bg-purple-950/40 transition-all flex items-center justify-between group no-underline text-white cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">
                    {c.label === 'Email' ? '✉️' : c.label === 'GitHub' ? '🐙' : '💼'}
                  </span>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
                      {c.label}
                    </div>
                    <div className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-purple-200 transition-colors">
                      {c.value}
                    </div>
                  </div>
                </div>

                <span className="text-sm font-mono text-purple-300 group-hover:translate-x-1.5 transition-transform">
                  TRANSMIT ➔
                </span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* BOTTOM SPOOL: Matching Violet Spool */}
      <div className="relative z-20 w-full h-11 sm:h-13 bg-gradient-to-r from-[#3b0764] via-[#a855f7] to-[#3b0764] rounded-full border-2 border-purple-300 shadow-[0_4px_25px_rgba(168,85,247,0.7)] flex items-center justify-between px-3 sm:px-6">
        <div className="flex items-center gap-1">
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-purple-200 to-purple-800 border border-purple-100 shadow-md" />
          <div className="w-2.5 h-6 bg-purple-950 rounded-sm border border-purple-300" />
        </div>
        <div className="text-white font-mono font-bold text-[10px] sm:text-xs tracking-widest uppercase">
          ✦ DIRECT SPIRIT RESONANCE · INITIATE TRANSMISSION ✦
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-6 bg-purple-950 rounded-sm border border-purple-300" />
          <div className="w-5 h-7 sm:w-6 sm:h-8 rounded-full bg-gradient-to-b from-purple-200 to-purple-800 border border-purple-100 shadow-md" />
        </div>
      </div>
    </div>
  );
}
