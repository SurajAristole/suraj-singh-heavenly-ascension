import React, { useState } from 'react';
import Header from './components/Header';
import ScrollCard3D from './components/canvas/ScrollCard3D';
import ScrollOpenedModal from './components/ui/ScrollOpenedModal';
import ArsenalSection from './components/ArsenalSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import { SURAJ_SCROLLS } from './components/canvas/VoidCanvas';

/**
 * Main App Component
 * Page 1: Hero Exploration with Yao Lao Character & Domain Paper Tablet (Lava World Background)
 * Page 2: Interactive 3D Ancient Scripture Scrolls 1, 2, 3, 4 (Lava World Background ends here)
 * Page 3: The Spirit Arsenal — Languages & Tools (Celestial Ice Cavern Realm: background2.jpg)
 */
export default function App() {
  const [activeScroll, setActiveScroll] = useState(null);

  return (
    <div className="relative min-h-[300vh] bg-[#04060e] text-white selection:bg-amber-500 selection:text-black">
      {/* Top Fixed Header with Clean SURAJ [Sword] SINGH Logo & Navigation */}
      <Header />

      {/* ========================================================
          PAGES 1 & 2: CELESTIAL MAGMA REALM (LAVA WORLD)
          background.jpg covers Page 1 (#origin) and Page 2 (#scriptures),
          and ends cleanly at the second page.
      ======================================================== */}
      <div className="relative overflow-hidden">
        {/* Lava World Background for Pages 1 & 2 */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/background.jpg"
            alt="Celestial Magma Realm"
            className="w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.15]"
          />
          {/* Dark Vignette & Atmospheric Radial Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05050f]/85 via-black/40 to-[#04060e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.8)_100%)]" />
          {/* Ambient Molten Flame Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-amber-600/10 blur-[140px]" />
          {/* Fade transition at the end of the second page */}
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#04060e] to-transparent" />
        </div>

        {/* Hero Welcome Section: Yao Lao Presence & Exploration */}
        <section
          id="origin"
          className="relative z-10 min-h-screen flex flex-col justify-end items-center pb-20 px-6 overflow-hidden"
        >
          {/* Yao Lao (Medicine Venerable) Character: Pure 3D Floating Character */}
          <div className="absolute left-1 sm:left-4 md:left-8 lg:left-14 top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none flex items-center justify-center">
            {/* Pure Character: No blue film or halo glow, realistic 3D depth shadow */}
            <div className="relative antigravity-float">
              <img
                src="/yaolao.png"
                alt="Yao Lao — Medicine Venerable"
                className="h-[76vh] sm:h-[84vh] md:h-[90vh] max-h-[880px] w-auto object-contain filter brightness-105 contrast-110 drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] drop-shadow-[0_6px_14px_rgba(0,0,0,0.7)] transition-all duration-500"
              />
            </div>
          </div>

          {/* Domain Paper Tablet: Starting near Yao Lao and extending near the right corner */}
          <div className="absolute left-4 sm:left-6 md:left-[43%] lg:left-[41%] xl:left-[39%] right-4 sm:right-6 md:right-8 lg:right-10 xl:right-14 top-1/2 -translate-y-1/2 z-10 pointer-events-auto">
            {/* Ethereal Celestial Paper Container */}
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-cyan-400/50 shadow-[0_20px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(56,189,248,0.35)] bg-[#040814] transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_25px_90px_rgba(0,0,0,0.95),0_0_75px_rgba(56,189,248,0.45)]">
              {/* Domain Photo as the Parchment / Writing Base — Razor Sharp, Clear Tablets, High Definition */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/9] w-full max-h-[80vh] overflow-hidden">
                <img
                  src="/domain_paper.png"
                  alt="Celestial Domain Tablets"
                  className="w-full h-full object-cover object-center filter brightness-105 contrast-110 saturate-110"
                />

                {/* Ultra-subtle ethereal rim glow to define edges without dimming tablets */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(4,8,20,0.5)_100%)] pointer-events-none" />

                {/* Ancient Inscribed Double Border & Corner Runes (All 4 corners) */}
                <div className="absolute inset-2 sm:inset-3 border border-cyan-400/35 rounded-xl lg:rounded-2xl pointer-events-none" />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-300 pointer-events-none" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-300 pointer-events-none" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-300 pointer-events-none" />
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-300 pointer-events-none" />

                {/* Content Written Directly on Domain — Positioned Strictly Inside the Inner Line Boundary */}
                <div
                  id="domain-paper-content"
                  className="absolute inset-2 sm:inset-3 z-10 p-4 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-start items-start pointer-events-auto overflow-y-auto"
                >
                  <div className="max-w-3xl flex flex-col gap-2.5 sm:gap-3.5 text-left">
                    {/* Headline: Mastering the foundation */}
                    <h3 className="font-mystic text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-amber-300 tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,1)] drop-shadow-[0_0_18px_rgba(251,191,36,0.6)] leading-tight">
                      Mastering the foundation.
                    </h3>

                    {/* Body Content written boldly and clearly directly on the domain */}
                    <p className="font-sans text-sm sm:text-base md:text-lg lg:text-[1.125rem] text-white font-bold leading-relaxed tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,1)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                      I'm <span className="text-cyan-300 font-black drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">Suraj Singh</span>, an aspiring <span className="text-amber-300 font-black drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]">Java Backend Developer</span> and 4th-year B.Tech student. Just as a cultivator condenses their pure <span className="text-sky-300 font-black">Dou Qi</span>, I build powerful, scalable systems using <span className="text-cyan-200 font-black">Java</span> and <span className="text-cyan-200 font-black">Spring Boot</span>. Powered by <span className="text-amber-300 font-black">VS Code</span>, <span className="text-amber-300 font-black">GitHub</span>, and <span className="text-cyan-300 font-black">Antigravity</span>, I am actively breaking through to the next realm of software engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Explore Button */}
          <div className="relative z-20 text-center flex flex-col items-center gap-3">
            <a
              href="#scriptures"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/80 border border-amber-500/50 backdrop-blur-md text-xs sm:text-sm font-mono font-bold text-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer group no-underline"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span>📜 EXPLORE THE 4 SACRED SCROLLS 📜</span>
              <span className="text-amber-400 group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        </section>

        {/* 
          Ancient Sacred Scrolls Section (Page 2, right after domain page)
          The 4 realistic 3D floating Scrolls (Scroll 1, 2, 3, 4)
        */}
        <section id="scriptures" className="relative z-10 min-h-screen px-6 sm:px-12 py-28 max-w-6xl mx-auto flex flex-col justify-center">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-amber-400 uppercase">
              ✦ ANCIENT HERITAGE · SACRED SEALS ✦
            </span>
            <h2 className="font-mystic font-black text-3xl sm:text-5xl tracking-[0.16em] text-white mt-2 drop-shadow-[0_2px_15px_rgba(251,191,36,0.4)]">
              THE 4 CELESTIAL SCROLLS
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-300 tracking-wider mt-2 max-w-xl mx-auto">
              Click any sacred 3D scroll to unroll complete technical documentation, projects, and Dou Qi cultivation feats.
            </p>
          </div>

          {/* 4 Realistic 3D Interactive Scrolls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SURAJ_SCROLLS.map((scroll, index) => (
              <ScrollCard3D
                key={scroll.id}
                scrollData={scroll}
                scrollIndex={index + 1}
                onOpen={(data) => setActiveScroll(data)}
              />
            ))}
          </div>

          {/* Bottom Explore Arsenal Button */}
          <div className="mt-16 text-center flex flex-col items-center gap-3">
            <a
              href="#arsenal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/80 border border-cyan-500/50 backdrop-blur-md text-xs sm:text-sm font-mono font-bold text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer group no-underline"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span>⚔️ DESCEND TO THE SPIRIT ARSENAL ⚔️</span>
              <span className="text-cyan-400 group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        </section>
      </div>

      {/* ========================================================
          PAGE 3: THE SPIRIT ARSENAL (CELESTIAL ICE CAVERN REALM)
          background2.jpg becomes the active background from here!
      ======================================================== */}
      <div className="relative overflow-hidden min-h-screen bg-[#040816]">
        {/* Celestial Ice Cavern Realm Background (background2.jpg) - Ultra Clear & Centered */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/background2.jpg"
            alt="Celestial Ice Cavern Realm with Crescent Moon Mountain"
            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.08] saturate-[1.15]"
          />
          {/* Subtle Atmospheric Overlays: Keeps the Center Crescent Mountain & Aurora 100% Clear & Visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#04060e] via-transparent to-[#04060e]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(4,8,22,0.65)_100%)]" />
          {/* Subtle Ambient Astral Cyan Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cyan-500/15 blur-[160px]" />
        </div>

        {/* Third Page: The Spirit Arsenal */}
        <ArsenalSection />

        {/* Xiao Xuan Character: Pure 3D Floating Guardian on the Right Side of Page 3 */}
        <div className="absolute right-0 sm:right-2 md:right-4 lg:right-6 xl:right-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none flex items-center justify-center opacity-30 lg:opacity-100 transition-opacity duration-500">
          {/* Pure Character: Realistic 3D depth shadow & ethereal Dou Qi presence matching Yao Lao */}
          <div className="relative antigravity-float">
            <img
              src="/xiaoxuan.png"
              alt="Xiao Xuan — Ancient Clan Ancestor"
              className="h-[68vh] sm:h-[76vh] md:h-[84vh] lg:h-[88vh] max-h-[860px] w-auto object-contain filter brightness-105 contrast-110 drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] drop-shadow-[0_8px_20px_rgba(239,68,68,0.35)] transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          PAGE 4: THE SACRED ARCHIVES — SHIP LOG & CERTIFICATES
          background3.jpg becomes the active realm background!
      ======================================================== */}
      <div className="relative overflow-hidden min-h-screen bg-[#070512]">
        {/* Celestial Altar Realm Background (background3.jpg) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/background3.jpg"
            alt="Celestial Altar Temple Archive Realm"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.12] saturate-[1.2]"
          />
          {/* Atmospheric Vignette & Glowing Torches Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-black/45 to-[#04060e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(4,6,18,0.75)_100%)]" />
          {/* Ambient Violet/Magenta Temple Torch Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full bg-purple-600/15 blur-[160px]" />
        </div>

        {/* Certificates Section Component */}
        <CertificatesSection />

        {/* Bin Zui Character: Pure 3D Floating Guardian on the Right Side of Page 4 (Taller & Full-Length) */}
        <div className="absolute right-0 sm:right-2 md:right-4 lg:right-6 xl:right-10 top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none flex items-center justify-center opacity-30 lg:opacity-100 transition-opacity duration-500">
          {/* Pure Character: Realistic 3D depth shadow & ethereal Dou Qi presence matching Xiao Xuan & Yao Lao */}
          <div className="relative antigravity-float">
            <img
              src="/binzui.png"
              alt="Bin Zui — Hall of Souls Protector"
              className="h-[76vh] sm:h-[84vh] md:h-[92vh] lg:h-[96vh] xl:h-[102vh] max-h-[1020px] w-auto object-contain filter brightness-105 contrast-110 drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] drop-shadow-[0_8px_20px_rgba(168,85,247,0.4)] transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          PAGE 5: SPIRIT TRANSMISSION & CONTACT REALM
          Same background (background3.jpg) as Page 4!
      ======================================================== */}
      <div className="relative overflow-hidden min-h-screen bg-[#070512]">
        {/* Celestial Altar Realm Background (background3.jpg) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/background3.jpg"
            alt="Celestial Altar Temple Realm"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.12] saturate-[1.2]"
          />
          {/* Atmospheric Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-black/55 to-[#04060e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(4,6,18,0.75)_100%)]" />
          {/* Ambient Warm Flame Glow behind the lotus */}
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full bg-amber-600/15 blur-[160px]" />
        </div>

        {/* Contact Section: Info Above + Revolving Lotus Flame Animation Below */}
        <ContactSection />
      </div>

      {/* Quick Scroll & Arsenal Access Buttons at Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-20 hidden sm:flex flex-col items-end gap-2 pointer-events-auto">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/85 border border-slate-700/60 backdrop-blur-md shadow-2xl">
          {SURAJ_SCROLLS.map((scroll) => (
            <button
              key={scroll.id}
              onClick={() => setActiveScroll(scroll)}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 border border-slate-700/50 bg-slate-900/60 text-slate-300 hover:border-amber-400/80 hover:text-white cursor-pointer"
            >
              <span>{scroll.icon}</span>
              <span>Scroll {scroll.scrollNum || scroll.badge}</span>
            </button>
          ))}
          <a
            href="#arsenal"
            className="px-3 py-1 rounded-full text-xs font-mono font-bold transition-all duration-200 flex items-center gap-1 border border-cyan-500/50 bg-cyan-950/60 text-cyan-300 hover:border-cyan-300 hover:text-white cursor-pointer no-underline"
          >
            <span>⚔️</span>
            <span>Arsenal</span>
          </a>
          <a
            href="#shiplog"
            className="px-3 py-1 rounded-full text-xs font-mono font-bold transition-all duration-200 flex items-center gap-1 border border-purple-500/50 bg-purple-950/60 text-purple-300 hover:border-purple-300 hover:text-white cursor-pointer no-underline"
          >
            <span>📜</span>
            <span>Ship Log</span>
          </a>
          <a
            href="#contact"
            className="px-3 py-1 rounded-full text-xs font-mono font-bold transition-all duration-200 flex items-center gap-1 border border-amber-500/50 bg-amber-950/60 text-amber-300 hover:border-amber-300 hover:text-white cursor-pointer no-underline"
          >
            <span>📬</span>
            <span>Contact</span>
          </a>
        </div>
      </div>

      {/* Realistic Animated Unrolling Scroll Page Modal */}
      <ScrollOpenedModal
        scroll={activeScroll}
        onClose={() => setActiveScroll(null)}
      />
    </div>
  );
}
