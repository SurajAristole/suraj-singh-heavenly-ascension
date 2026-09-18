import React, { useState, useEffect } from 'react';

/**
 * Header Component
 * Top-left brand logo with the Heavenly Flame Lotus integrated directly with the name:
 * "SURAJ" [Glowing Flame Lotus] "SINGH"
 * Underlined with flame aura accents and "DOU EMPEROR • FULL-STACK DEVELOPER".
 * Clickable home link with hover:scale-105 and glowing aura bloom.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 px-6 sm:px-10 py-3.5 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'bg-[#05050f]/95 backdrop-blur-md border-b border-amber-500/25 shadow-[0_8px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Integrated Lotus & Name Brand Logo */}
      <a
        href="#origin"
        className="group inline-flex flex-col no-underline transition-transform duration-300 hover:scale-105 select-none"
        title="Suraj Singh — Dou Emperor Origin"
      >
        {/* Brand Name: SURAJ [Sword] SINGH */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* SURAJ */}
          <span className="font-mystic font-black text-2xl sm:text-3xl tracking-[0.16em] bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(245,158,11,0.6)] group-hover:drop-shadow-[0_2px_22px_rgba(251,191,36,0.9)] transition-all duration-300">
            SURAJ
          </span>

          {/* Heavy Xuan Sword with handle resting inclined on SURAJ */}
          <div className="relative flex items-center justify-center -my-2 -mx-1 sm:-mx-2 pointer-events-none select-none flex-shrink-0">
            {/* Ambient flame glow aura behind sword */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 via-orange-500/40 to-transparent blur-md rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Sword Cutout: flipped horizontally so the handle is at the top-left resting inclined on SURAJ, 
                and the blade extends between SURAJ and SINGH towards SINGH */}
            <img
              src="/sword.png"
              alt="Heavy Xuan Ruler"
              className="relative z-10 w-14 sm:w-20 h-8 sm:h-10 object-contain scale-x-[-1] -rotate-6 filter brightness-105 contrast-115 drop-shadow-[0_0_10px_rgba(245,158,11,0.85)] group-hover:drop-shadow-[0_0_18px_rgba(251,191,36,1)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* SINGH */}
          <span className="font-mystic font-black text-2xl sm:text-3xl tracking-[0.16em] bg-gradient-to-r from-yellow-500 via-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(245,158,11,0.6)] group-hover:drop-shadow-[0_2px_22px_rgba(251,191,36,0.9)] transition-all duration-300">
            SINGH
          </span>
        </div>

        {/* Integrated Subtitle & Flame Qi Thread */}
        <div className="flex items-center gap-2 mt-1">
          <div className="h-[1px] w-5 sm:w-8 bg-gradient-to-r from-transparent via-amber-400 to-emerald-400" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.15em] font-extrabold text-emerald-400 flex items-center gap-1.5 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#00ffaa] animate-ping" />
            DOU EMPEROR • FULL-STACK DEVELOPER
          </span>
          <div className="h-[1px] w-5 sm:w-8 bg-gradient-to-l from-transparent via-amber-400 to-emerald-400" />
        </div>
      </a>

      {/* Navigation Links matching the reference layout */}
      <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-slate-700/60 backdrop-blur-md shadow-lg">
        <a
          href="#origin"
          className="px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-400 bg-amber-500/15 border border-amber-400/40 transition-all hover:bg-amber-500/25"
        >
          🔥 ORIGIN
        </a>
        <a
          href="#scriptures"
          className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
        >
          📜 SCRIPTURES
        </a>
        <a
          href="#arsenal"
          className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
        >
          ⚔️ ARSENAL
        </a>
        <a
          href="#shiplog"
          className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
        >
          📜 SHIP LOG
        </a>
        <a
          href="#contact"
          className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
        >
          📬 SPIRIT TRANSMIT
        </a>
      </nav>
    </header>
  );
}
