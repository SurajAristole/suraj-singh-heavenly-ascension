import React, { useState, useEffect } from 'react';

/**
 * ScrollSlideBox Component
 * Enlarged parchment wanted-poster tablet that pops / slides down when scrolling down.
 * Matches the reference layout with prominent presence and clean Suraj Singh details.
 */
export default function ScrollSlideBox({ onOpenScroll }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger slide down when scrolled past 30px
      if (window.scrollY > 30) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-20 w-[94vw] max-w-[680px] pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : '-translate-y-36 opacity-0 scale-95 pointer-events-none'
      }`}
      id="scroll-pop-box"
    >
      {/* Heavy Xuan Sword Tablet Box */}
      <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(251,191,36,0.35)] border-2 border-amber-500/60 p-6 sm:p-10 text-white">
        {/* Sword Base Photo */}
        <img
          src="/sword.jpg"
          alt="Heavy Xuan Sword Base"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.2]"
        />
        {/* Dark Vignette & Molten Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.85)_100%)]" />

        {/* Vintage Double Border & Corner Rivets */}
        <div className="absolute inset-2 border border-amber-500/30 rounded-xl pointer-events-none" />
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400" />

        <div className="relative z-10">
          {/* Header Tag */}
          <div className="text-center mb-2">
            <span className="inline-block text-[11px] sm:text-xs font-mono tracking-[0.25em] font-extrabold text-amber-400 uppercase border-b border-amber-500/30 pb-1">
              ✦ BATTLE THROUGH THE HEAVENS · HEAVY XUAN RULER ✦
            </span>
          </div>

          {/* Main Name on Sword Base */}
          <div className="text-center my-3">
            <h2 className="font-mystic font-black text-3xl sm:text-5xl tracking-[0.16em] text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-orange-500 drop-shadow-[0_2px_20px_rgba(245,158,11,0.8)] uppercase">
              SURAJ SINGH
            </h2>
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-amber-200/90 font-bold mt-1">
              FULL-STACK DEVELOPER • JAVA BACKEND
            </p>
          </div>

          {/* Sub-info banner */}
          <div className="text-center text-[11px] sm:text-xs font-mono tracking-wider text-slate-300 my-3 py-1.5 border-y border-amber-500/25 bg-black/40 rounded-sm">
            <span>LOCATION: INDIA • ABESIT • OPEN TO ROLES</span>
          </div>

          {/* Bounty / Cultivation Realm Banner */}
          <div className="bg-black/65 border border-amber-500/40 rounded-xl p-3 sm:p-4 my-4 text-center shadow-inner">
            <div className="text-[10px] sm:text-xs font-mono font-extrabold tracking-[0.2em] text-amber-400 uppercase">
              CULTIVATION BOUNTY • DOU QI STRENGTH
            </div>
            <div className="font-mystic font-black text-2xl sm:text-3xl text-white tracking-wider my-1 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]">
              ⚡ 1,111,000,000 QI
            </div>
            <div className="text-[10px] sm:text-xs font-mono font-semibold text-emerald-400 tracking-widest uppercase">
              PEAK HEAVENLY FLAME MASTERY · DEAD OR ALIVE
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button
              onClick={() => onOpenScroll && onOpenScroll('projects')}
              className="px-4 py-2.5 text-xs sm:text-sm font-mono font-bold tracking-wider text-black bg-gradient-to-r from-amber-300 to-yellow-500 rounded-xl shadow-md hover:from-amber-400 hover:to-yellow-400 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              📜 VIEW SCRIPTURES
            </button>
            <button
              onClick={() => onOpenScroll && onOpenScroll('contact')}
              className="px-4 py-2.5 text-xs sm:text-sm font-mono font-bold tracking-wider text-white bg-slate-900/90 border border-amber-500/50 rounded-xl shadow-md hover:border-amber-400 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              📬 TRANSMIT QI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
