import React, { useState } from 'react';

/**
 * CertificatesSection Component (Page 4)
 * "SHIP LOG · SACRED ATTESTATIONS & SEALS"
 * 
 * Features:
 * 1. Background: Celestial Altar Realm (background3.jpg) with atmospheric glowing torch overlays.
 * 2. Realistic Floating Scrolls:
 *    - Uses the extracted authentic Scroll 1 (scroll1_extracted.png).
 *    - Gently floats/hovers in place (like Yao Lao and Xiao Xuan) with organic staggered physics.
 * 3. Downward Scroll Unrolling Animation:
 *    - Clicking any scroll triggers an authentic downward unroll animation.
 *    - Reveals the real certificate image from the public folder inside an ornate parchment frame.
 *    - Rolls back up smoothly on command.
 * 4. Timeline Navigation:
 *    - Arranged "one after another" with glowing golden Dou Qi celestial line and milestone nodes.
 *    - Displays issuer, topic, date, and verification credentials matching the reference layout.
 */

export const CERTIFICATES = [
  {
    id: 'cert-1',
    title: 'Network Fundamentals',
    issuer: 'Infosys Springboard',
    date: 'April 8, 2026',
    credentialUrl: 'https://verify.onwingspan.com',
    image: '/cert_network_fundamentals.jpg',
    category: 'Networking & Protocols',
    description:
      'Comprehensive mastery of network topologies, OSI layers, TCP/IP protocol suites, routing mechanisms, and secure packet transmissions.',
    tier: 'Heaven-Tier Attestation',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
  },
  {
    id: 'cert-2',
    title: 'Database Management System Part - 1',
    issuer: 'Infosys Springboard',
    date: 'September 30, 2025',
    credentialUrl: 'https://verify.onwingspan.com',
    image: '/cert_dbms_part1.jpg',
    category: 'Relational Database Architecture',
    description:
      'Foundational database models, ER schema diagrams, relational algebra, SQL querying, normalization up to BCNF, and ACID transaction rules.',
    tier: 'Earth-Tier Attestation',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.4)',
  },
  {
    id: 'cert-3',
    title: 'Database Management System Part - 2',
    issuer: 'Infosys Springboard',
    date: 'November 24, 2025',
    credentialUrl: 'https://verify.onwingspan.com',
    image: '/cert_dbms_part2.jpg',
    category: 'Advanced Database Systems',
    description:
      'Advanced indexing mechanics, B-trees, query optimization execution plans, concurrency protocols, deadlock handling, and fault recovery.',
    tier: 'Earth-Tier Attestation',
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.4)',
  },
  {
    id: 'cert-4',
    title: 'Java Master Course',
    issuer: 'Tutedude',
    date: 'September 1, 2026',
    certificateId: 'TD-SURA-JA-1554',
    credentialUrl: null,
    image: '/cert_tutedude_java.jpg',
    category: 'Core Java & OOP Architecture',
    description:
      'Complete mastery of Java OOP fundamentals, Collections framework, Multithreading & Concurrency, Memory management, and JVM internal execution.',
    tier: 'Tian-Tier Sacred Seal',
    accentColor: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
  },
  {
    id: 'cert-5',
    title: 'GUI Programming with C++',
    issuer: 'Infosys Springboard',
    date: 'November 13, 2025',
    credentialUrl: 'https://verify.onwingspan.com',
    image: '/cert_gui_cpp.jpg',
    category: 'C++ Systems & User Interfaces',
    description:
      'C++ event-driven UI construction, memory allocation, pointer arithmetic, widget hierarchies, and cross-platform desktop application programming.',
    tier: 'Mystic-Tier Attestation',
    accentColor: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
  },
  {
    id: 'cert-6',
    title: 'Basic Fundamentals of Linux & AWS Cloud Computing',
    issuer: 'ABESIT Group of Institutions',
    date: 'August 18, 2025 – November 20, 2025 (36 Hrs)',
    credentialUrl: null,
    image: '/cert_linux_aws.jpg',
    category: 'Cloud Infrastructure & Linux Systems',
    description:
      'Rigorous 36-hour industrial training program on Linux bash operations, permissions, package management, AWS EC2 virtualization, S3 buckets, and cloud deployment.',
    tier: 'Divine-Tier Attestation',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
  },
];

export default function CertificatesSection() {
  // Store which scroll is unrolled inline (id or null)
  const [openScrollId, setOpenScrollId] = useState(null);
  // Store full-screen preview certificate
  const [modalCert, setModalCert] = useState(null);

  const toggleScroll = (id) => {
    setOpenScrollId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="shiplog"
      className="relative z-10 min-h-screen px-4 sm:px-8 md:px-12 py-24 sm:py-32 max-w-7xl mx-auto flex flex-col justify-center lg:pr-[360px] xl:pr-[420px]"
    >
      {/* Section Header */}
      <div className="text-left mb-14 sm:mb-20 max-w-3xl">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/75 border border-purple-400/50 text-purple-300 text-xs font-mono font-bold tracking-[0.25em] uppercase shadow-[0_0_25px_rgba(168,85,247,0.4)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          ✦ SHIP LOG · SACRED ATTESTATIONS ✦
        </span>

        <h2 className="font-mystic font-black text-3xl sm:text-5xl lg:text-6xl tracking-[0.16em] text-white mt-3 drop-shadow-[0_2px_25px_rgba(192,132,252,0.6)] uppercase">
          THE CELESTIAL ARCHIVES
        </h2>

        <p className="text-xs sm:text-sm font-mono text-purple-200/90 tracking-wider mt-3 max-w-2xl italic leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          "Every refined covenant, battle credential, and Dou Qi breakthrough seal inscribed into celestial scriptures. Click any sacred scroll to unroll the certificate downwards."
        </p>
      </div>

      {/* Timeline of Scrolls Put One After Another (Clean templates with zero overlapping dots) */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-10 sm:gap-14">
        {CERTIFICATES.map((cert, index) => {
          const isOpen = openScrollId === cert.id;
          // Staggered floating animation class: alternates 1, 2, 3
          const floatClass =
            index % 3 === 0
              ? 'antigravity-scroll-hover-1'
              : index % 3 === 1
              ? 'antigravity-scroll-hover-2'
              : 'antigravity-scroll-hover-3';

          return (
            <div
              key={cert.id}
              className="relative flex flex-col md:flex-row items-start gap-5 sm:gap-8 group"
            >
              {/* Scroll Card Container */}
              <div className="w-full flex flex-col rounded-2xl border border-purple-500/30 bg-[#060a18]/85 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(168,85,247,0.12)] transition-all duration-300 hover:border-amber-400/70 overflow-hidden">
                {/* Upper Section: Real Floating Scroll + Metadata Header */}
                <div
                  onClick={() => toggleScroll(cert.id)}
                  className="p-4 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6 cursor-pointer select-none transition-colors duration-200 hover:bg-purple-950/20"
                >
                  {/* Left: Certificate Text Details */}
                  <div className="flex-1 flex flex-col gap-2.5 text-left w-full">
                    {/* Issuer & Tier Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border shadow-sm"
                        style={{
                          color: cert.accentColor,
                          borderColor: `${cert.accentColor}55`,
                          backgroundColor: `${cert.accentColor}15`,
                        }}
                      >
                        {cert.issuer}
                      </span>

                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-300 border border-slate-700 bg-slate-900/60">
                        {cert.tier}
                      </span>

                      <span className="text-[11px] font-mono text-slate-400 ml-auto">
                        {cert.date}
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="font-mystic font-black text-xl sm:text-2xl text-white tracking-wide group-hover:text-amber-300 transition-colors duration-200 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                      {cert.title}
                    </h3>

                    {/* Brief Lore Description */}
                    <p className="text-xs sm:text-sm font-sans text-slate-300/90 leading-relaxed max-w-xl">
                      {cert.description}
                    </p>

                    {/* Status & Interactive Button */}
                    <div className="flex items-center gap-4 mt-2">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 border cursor-pointer group-hover:scale-105"
                        style={{
                          backgroundColor: isOpen
                            ? 'rgba(239, 68, 68, 0.2)'
                            : 'rgba(245, 158, 11, 0.15)',
                          borderColor: isOpen
                            ? 'rgba(239, 68, 68, 0.6)'
                            : 'rgba(245, 158, 11, 0.6)',
                          color: isOpen ? '#fca5a5' : '#fef08a',
                          boxShadow: isOpen
                            ? '0 0 15px rgba(239, 68, 68, 0.4)'
                            : '0 0 15px rgba(245, 158, 11, 0.3)',
                        }}
                      >
                        <span>{isOpen ? '✕' : '📜'}</span>
                        <span>{isOpen ? 'ROLL UP SCROLL' : 'UNROLL SACRED SCROLL'}</span>
                        <span
                          className={`transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-red-400' : 'text-amber-400'
                          }`}
                        >
                          ↓
                        </span>
                      </button>

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs font-mono text-cyan-400 hover:text-cyan-200 underline flex items-center gap-1 transition-colors"
                        >
                          <span>Verify Certificate</span>
                          <span>↗</span>
                        </a>
                      )}

                      {cert.certificateId && (
                        <span className="text-xs font-mono text-amber-300/80">
                          ID: <span className="text-white font-bold">{cert.certificateId}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: The Real Extracted Scroll (Slightly Hovering like Yao Lao & Xiao Xuan) */}
                  <div className="relative flex-shrink-0 flex items-center justify-center p-2">
                    {/* Ambient fiery Dou Qi halo behind hovering scroll */}
                    <div
                      className="absolute w-36 sm:w-48 h-20 sm:h-24 rounded-full pointer-events-none filter blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-500"
                      style={{
                        backgroundColor: isOpen ? '#ef4444' : '#f59e0b',
                      }}
                    />

                    {/* Pure Floating Scroll with antigravity-float physics */}
                    <div className={`relative ${floatClass} transition-transform duration-300 group-hover:scale-105`}>
                      <img
                        src="/scroll1_extracted.png"
                        alt={`Sacred Scroll for ${cert.title}`}
                        className="w-56 sm:w-64 md:w-72 h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.95)] drop-shadow-[0_0_20px_rgba(239,68,68,0.55)] cursor-pointer select-none"
                      />
                      {/* Interactive hint on hover */}
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/80 border border-amber-400/50 text-[10px] font-mono text-amber-300 uppercase tracking-wider whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        ✦ Click to Unroll ✦
                      </span>
                    </div>
                  </div>
                </div>

                {/* Downward Unrolling Scroll Content (When Clicked) */}
                {isOpen && (
                  <div className="relative w-full border-t border-amber-500/40 bg-gradient-to-b from-[#0a0f24] via-[#050814] to-[#04060e] p-4 sm:p-8 animate-unroll-down overflow-hidden">
                    {/* Top Golden Spool Bar of Unrolled Scroll */}
                    <div className="relative z-10 w-full h-8 sm:h-10 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-700 rounded-full border-2 border-yellow-200 shadow-[0_4px_25px_rgba(239,68,68,0.7)] flex items-center justify-between px-4 sm:px-8 mb-6">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-6 rounded-full bg-gradient-to-b from-amber-200 to-amber-700 border border-amber-100 shadow" />
                        <div className="w-2 h-5 bg-red-700 rounded-sm" />
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs font-black tracking-[0.25em] text-black uppercase">
                        ✦ UNROLLED SACRED CERTIFICATE ✦
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-5 bg-red-700 rounded-sm" />
                        <div className="w-4 h-6 rounded-full bg-gradient-to-b from-amber-200 to-amber-700 border border-amber-100 shadow" />
                      </div>
                    </div>

                    {/* Unrolled Parchment Container with Authentic Certificate Image Inside */}
                    <div className="relative mx-auto max-w-3xl rounded-xl p-3 sm:p-5 bg-[#0e142a]/95 border-2 border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(245,158,11,0.2)]">
                      {/* Corner Runes */}
                      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
                      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-400" />
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-400" />
                      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-400" />

                      {/* Real Certificate Image from Public Folder */}
                      <div
                        onClick={() => setModalCert(cert)}
                        className="group/cert relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-black border border-amber-400/40 cursor-zoom-in shadow-2xl"
                        title="Click to view full screen"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain filter brightness-105 contrast-105 transition-transform duration-300 group-hover/cert:scale-[1.02]"
                        />

                        {/* Hover Overlay indicating click to zoom */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
                          <span className="px-4 py-2 rounded-full bg-black/85 border border-amber-400 text-xs font-mono font-bold text-amber-300 shadow-xl">
                            🔍 Click to Enlarge Certificate
                          </span>
                        </div>
                      </div>

                      {/* Certificate Footer Meta in Parchment */}
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-xs font-mono text-emerald-400 font-bold">
                            AUTHENTIC SEAL VERIFIED
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setModalCert(cert)}
                            className="px-3.5 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-400/50 text-xs font-mono text-cyan-300 hover:bg-cyan-900 transition-colors cursor-pointer"
                          >
                            🔍 Full View
                          </button>

                          <button
                            type="button"
                            onClick={() => toggleScroll(cert.id)}
                            className="px-3.5 py-1.5 rounded-lg bg-red-950/80 border border-red-400/50 text-xs font-mono text-red-300 hover:bg-red-900 transition-colors cursor-pointer"
                          >
                            ✕ Roll Up
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Golden Spool Bar of Unrolled Scroll */}
                    <div className="relative z-10 w-full h-8 sm:h-10 bg-gradient-to-r from-amber-700 via-amber-300 to-amber-700 rounded-full border-2 border-yellow-200 shadow-[0_4px_25px_rgba(239,68,68,0.7)] flex items-center justify-between px-4 sm:px-8 mt-6">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-6 rounded-full bg-gradient-to-b from-amber-200 to-amber-700 border border-amber-100 shadow" />
                        <div className="w-2 h-5 bg-red-700 rounded-sm" />
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] text-black font-bold tracking-widest uppercase">
                        SEAL OF SURAJ SINGH • DOU EMPEROR
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-5 bg-red-700 rounded-sm" />
                        <div className="w-4 h-6 rounded-full bg-gradient-to-b from-amber-200 to-amber-700 border border-amber-100 shadow" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Full-Screen Immersive Modal when clicking Enlarge */}
      {modalCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in"
          onClick={() => setModalCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center animate-roll-down"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Close Button */}
            <div className="w-full flex items-center justify-between px-4 py-2 bg-slate-900/90 rounded-t-xl border-t border-x border-amber-400/40">
              <span className="text-xs font-mono font-bold text-amber-300">
                📜 {modalCert.issuer} — {modalCert.title}
              </span>
              <button
                type="button"
                onClick={() => setModalCert(null)}
                className="w-8 h-8 rounded-full bg-red-900/80 border border-red-400 text-white font-bold flex items-center justify-center hover:bg-red-800 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Certificate Display */}
            <div className="relative w-full overflow-auto max-h-[82vh] bg-black p-2 rounded-b-xl border-b border-x border-amber-400/40 flex items-center justify-center shadow-2xl">
              <img
                src={modalCert.image}
                alt={modalCert.title}
                className="max-h-[78vh] w-auto object-contain rounded filter contrast-105"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
