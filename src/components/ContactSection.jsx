import React, { useState } from 'react';

/**
 * ContactSection Component (Page 5)
 * "SPIRIT TRANSMISSION · CELESTIAL CONTACT"
 * 
 * Requirements:
 * 1. Background: Same as fourth page (background3.jpg).
 * 2. Top/Above: Contact Number, Email, and LinkedIn cards.
 * 3. Below: Live revolving animation of the high-quality Angry Buddha Lotus Flame (/flame-lotus.png).
 *    Animation consists of a smooth revolving/spinning lotus without zooming.
 */
export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);

  const contactData = [
    {
      id: 'phone',
      label: 'SPIRIT FREQUENCY · CONTACT NO',
      value: '+91 88829 79132',
      actionLabel: 'Call / WhatsApp',
      href: 'tel:+918882979132',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      accentColor: '#38bdf8',
      glowColor: 'rgba(56, 189, 248, 0.4)',
    },
    {
      id: 'email',
      label: 'SOUL DISPATCH · EMAIL',
      value: 'surajsingh01928q@gmail.com',
      actionLabel: 'Send Dispatch',
      href: 'mailto:surajsingh01928q@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      accentColor: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.4)',
    },
    {
      id: 'linkedin',
      label: 'MARTIAL ALLIANCE · LINKEDIN',
      value: 'suraj-singh-27511a295',
      actionLabel: 'Connect Profile',
      href: 'https://www.linkedin.com/in/suraj-singh-27511a295',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
        </svg>
      ),
      accentColor: '#a855f7',
      glowColor: 'rgba(168, 85, 247, 0.4)',
    },
  ];

  const handleCopy = (key, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen px-4 sm:px-8 md:px-12 py-24 sm:py-32 max-w-7xl mx-auto flex flex-col items-center justify-center text-center"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-400/50 text-purple-300 text-xs font-mono font-bold tracking-[0.25em] uppercase shadow-[0_0_25px_rgba(168,85,247,0.4)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          ✦ FIFTH REALM · SPIRIT TRANSMISSION ✦
        </span>

        <h2 className="font-mystic font-black text-3xl sm:text-5xl lg:text-6xl tracking-[0.16em] text-white mt-3 drop-shadow-[0_2px_25px_rgba(245,158,11,0.6)] uppercase">
          SPIRIT TRANSMISSION
        </h2>

        <p className="text-xs sm:text-sm font-mono text-purple-200/90 tracking-wider mt-3 max-w-xl mx-auto italic leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          "Send a soul communion across the void realms. Whether for backend engineering feats, scalable architectures, or martial alliances."
        </p>
      </div>

      {/* ========================================================
          1. CONTACT INFORMATION (ABOVE THE LOTUS ANIMATION)
          Cards for Contact No, Email, and LinkedIn
      ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full max-w-5xl mb-16 sm:mb-20">
        {contactData.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl border bg-[#060a18]/90 backdrop-blur-xl p-5 sm:p-6 flex flex-col items-center justify-between gap-4 transition-all duration-300 hover:scale-[1.03] shadow-xl"
            style={{
              borderColor: `${item.accentColor}40`,
              boxShadow: `0 15px 35px rgba(0,0,0,0.8), 0 0 25px ${item.glowColor}`,
            }}
          >
            {/* Top Icon with Ethereal Glow */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
              style={{
                backgroundColor: `${item.accentColor}18`,
                borderColor: `${item.accentColor}60`,
                borderWidth: '1px',
                color: item.accentColor,
                boxShadow: `0 0 20px ${item.glowColor}`,
              }}
            >
              {item.icon}
            </div>

            {/* Content Details */}
            <div className="flex flex-col items-center gap-1.5 w-full text-center">
              <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-slate-400">
                {item.label}
              </span>
              <span className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors break-all">
                {item.value}
              </span>
            </div>

            {/* Action Buttons: Direct Action & Copy */}
            <div className="flex items-center gap-2 w-full pt-2">
              <a
                href={item.href}
                target={item.id === 'linkedin' ? '_blank' : '_self'}
                rel="noreferrer"
                className="flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 border shadow-md no-underline"
                style={{
                  backgroundColor: `${item.accentColor}20`,
                  borderColor: `${item.accentColor}70`,
                  color: item.accentColor,
                }}
              >
                <span>{item.actionLabel}</span>
                <span>↗</span>
              </a>

              <button
                type="button"
                onClick={() => handleCopy(item.id, item.value)}
                className="py-2 px-3 rounded-xl text-xs font-mono font-bold bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-amber-400 transition-all cursor-pointer shadow-md"
                title="Copy to clipboard"
              >
                {copiedKey === item.id ? '✓ Copied' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================
          2. FULL HALF-PAGE RECTANGLE LOTUS FLAME PHOTO DISPLAY
          Fills the lower half of the page below the contact info
      ======================================================== */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Ambient Warm Molten Glow behind the rectangle */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-600/20 via-orange-500/25 to-red-600/20 blur-3xl pointer-events-none" />

        {/* Grand Half-Page Rectangle Container */}
        <div className="relative w-full h-[52vh] sm:h-[58vh] md:h-[64vh] lg:h-[70vh] min-h-[420px] max-h-[720px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-500/50 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(245,158,11,0.25)] bg-[#040714] group transition-all duration-500 hover:border-amber-400 hover:shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_75px_rgba(245,158,11,0.35)]">
          {/* Full High-Resolution Lotus Photo */}
          <img
            src="/flame-lotus.png"
            alt="Angry Buddha Lotus Flame"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-110 saturate-115 transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Atmospheric Depth Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070512]/90 via-transparent to-[#070512]/50 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(4,6,18,0.65)_100%)] pointer-events-none" />

          {/* Ancient Corner Runes & Inscribed Border */}
          <div className="absolute inset-3 sm:inset-4 border border-amber-400/35 rounded-xl sm:rounded-2xl pointer-events-none" />
          <div className="absolute top-4 sm:top-5 left-4 sm:left-5 w-4 h-4 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
          <div className="absolute top-4 sm:top-5 right-4 sm:right-5 w-4 h-4 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
          <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 w-4 h-4 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
          <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 w-4 h-4 border-b-2 border-r-2 border-amber-400 pointer-events-none" />

          {/* Bottom Title & Lore Inscription Banner */}
          <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
            <span className="font-mystic text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-amber-300 tracking-[0.2em] drop-shadow-[0_2px_12px_rgba(0,0,0,1)] drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] uppercase">
              ✦ ANGRY BUDDHA LOTUS FLAME ✦
            </span>
            <span className="text-[11px] sm:text-xs md:text-sm font-mono font-bold tracking-[0.25em] text-orange-200/90 mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,1)] uppercase">
              SUPREME CELESTIAL FLAME · SACRED ESSENCE OF SURAJ SINGH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
