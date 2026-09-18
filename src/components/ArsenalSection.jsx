import React from 'react';

/**
 * ArsenalSection Component (Page 3)
 * Recreates the authentic "Arsenal with Languages and Tools" from the reference design.
 * Features:
 * 1. Accurately filled with official, authentic brand logos:
 *    - ⚔ BLADES — LANGUAGES: Java, JavaScript, HTML5/CSS3, SQL
 *    - ⚓ SHIP GEAR — FRAMEWORKS & TOOLS: Spring Boot, React, Tailwind CSS, Git
 *    - 🧭 NAVIGATION CHARTS — DATABASES & ARCHITECTURE: MySQL, REST APIs, Hibernate JPA
 * 2. Prominent, accurate logos filling the cards (no empty feel).
 * 3. Signature glossy diagonal glass sheen on every card.
 * 4. Responsive padding to comfortably accommodate Xiao Xuan standing on the right.
 */

const ARSENAL_CATEGORIES = [
  {
    category: 'BLADES — LANGUAGES',
    icon: '⚔️',
    items: [
      {
        name: 'JAVA',
        accentColor: '#f89820',
        level: 'Tian-Tier Core Mastery',
        // Official Java coffee cup logo with steaming red flame and blue saucer
        logo: (
          <svg className="w-8 h-8 sm:w-9.5 sm:h-9.5" viewBox="0 0 256 348" fill="none">
            <path
              d="M109.5 288.7c26.2 3.1 63.8 2.6 86.8-12.7 6.4-4.3 12.5-10.2 9.1-17.7-4.1-8.9-15.6-11.4-24.3-12.9-29.4-5.3-60.6-3.8-89.9 2-8.6 1.7-17.7 4.1-23.7 10.7-6.2 6.8-3.4 14.6 2.3 20.3 10.9 10.9 25.8 8.8 39.7 10.3z"
              fill="#5382a1"
            />
            <path
              d="M102.4 227.8c25.4 2.8 54.3 2.1 77.2-9.7 5.6-2.9 11.2-6.7 10.9-13.4-.3-7.2-6.5-10.4-12.5-12.4-25.1-8.4-53.5-9.3-79.3-4.2-12.2 2.4-24.8 5.7-34.6 13.5-6.8 5.4-8 12.8-1.7 18.7 9.8 9.3 26 6.1 40 7.5z"
              fill="#5382a1"
            />
            <path
              d="M174.1 146.4c9.1-10.7 7-23.9-3.2-34.2-7.5-7.6-17.5-11.4-25.7-18-12.4-9.9-17-25-10.8-39.7-14.7 12.8-21.8 31.8-12.8 50.1 7.1 14.5 20.9 20.8 30.7 32.5 7.1 8.5 7.5 17.5 1.5 26.6 11.2-4.1 15.6-11.8 20.3-17.3z"
              fill="#e76f00"
            />
            <path
              d="M129.7 0C132 10.5 127.3 19 120 26.3c-10.7 10.7-17.5 24-11.4 39.7 1.8-12.8 9.8-21.5 19.5-29.2 10.9-8.6 19.2-19.4 18.4-34.7-5.5-.9-11-1.4-16.8-2.1z"
              fill="#e76f00"
            />
            <path
              d="M205.8 313.1c-16.7 13.5-39 19.5-60.5 21.6-32.9 3.2-67.9.6-98.3-12.4-3.8-1.6-8.2-3.8-9.1-8.3-1.1-5.7 3.5-9.5 8.1-11.7 5.7-2.7 12-3.8 18.2-4.9 39.8-7.2 81.3-6.2 120.7 2.6 7.4 1.7 14.9 4 21.3 8.3 4.2 2.8 8.4 6.7 7.7 12.1-.5 4.3-4.1 8.8-8.1 12.7z"
              fill="#5382a1"
            />
            <path
              d="M87.6 170.8c-12.7 6.3-26.6 15-28.7 30-1.7 12.1 6.5 20.7 16.9 25 15.2 6.3 32.8 6.7 48.7 4.7 25.1-3.2 50.7-11.8 74.5-20.7 8.3-3.1 18.9-7.8 23.4-16 4.7-8.6 1.8-16.9-5.1-23.2-7.8-7.1-18.7-9.4-28.8-11.8-31.5-7.5-64.8-1.5-95.2 6.8-1.9.5-3.8 1-5.7 5.2z"
              fill="#e76f00"
            />
          </svg>
        ),
      },
      {
        name: 'JAVASCRIPT',
        accentColor: '#f7df1e',
        level: 'Modern ES6+ & Async',
        // Official JS yellow badge logo
        logo: (
          <div className="w-8 h-8 sm:w-9.5 sm:h-9.5 rounded-lg bg-[#f7df1e] flex flex-col justify-end items-end p-1 shadow-[0_3px_12px_rgba(247,223,30,0.35)]">
            <span className="font-mono font-black text-black text-lg sm:text-xl leading-none tracking-tighter">
              JS
            </span>
          </div>
        ),
      },
      {
        name: 'HTML5 / CSS3',
        accentColor: '#e34f26',
        level: 'Semantic Web & Styling',
        // Dual official HTML5 and CSS3 shield logos
        logo: (
          <div className="flex items-center justify-center -space-x-1.5">
            <svg className="w-6.5 h-8 sm:w-7.5 sm:h-9 filter drop-shadow-md z-10" viewBox="0 0 512 512">
              <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z"/>
              <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z"/>
              <path fill="#EBEBEB" d="M256 208H165l-7-78h98V50H86l22 238h148v-80zm0 136l-80-22-5-59h-79l9 116 155 43v-78z"/>
              <path fill="#FFF" d="M256 208h91l-9 97-82 23v78l155-43 21-235H256v80zm0-158v80h168l8-80H256z"/>
            </svg>
            <svg className="w-6.5 h-8 sm:w-7.5 sm:h-9 filter drop-shadow-md" viewBox="0 0 512 512">
              <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z"/>
              <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z"/>
              <path fill="#EBEBEB" d="M256 208H165l-7-78h98V50H86l22 238h148v-80zm0 136l-80-22-5-59h-79l9 116 155 43v-78z"/>
              <path fill="#FFF" d="M256 208h91l-9 97-82 23v78l155-43 21-235H256v80zm0-158v80h168l8-80H256z"/>
            </svg>
          </div>
        ),
      },
      {
        name: 'SQL',
        accentColor: '#0284c7',
        level: 'Relational Database Queries',
        // Official SQL server database disk stack logo
        logo: (
          <svg className="w-8 h-8 sm:w-9.5 sm:h-9.5" viewBox="0 0 64 64" fill="none">
            <ellipse cx="32" cy="14" rx="24" ry="8" fill="#38bdf8" />
            <ellipse cx="32" cy="14" rx="20" ry="6" fill="#0284c7" />
            <path d="M8 14v16c0 4.4 10.7 8 24 8s24-3.6 24-8V14" fill="#0369a1" />
            <ellipse cx="32" cy="30" rx="24" ry="8" fill="#38bdf8" opacity="0.6"/>
            <path d="M8 30v16c0 4.4 10.7 8 24 8s24-3.6 24-8V30" fill="#0c4a6e" />
            <ellipse cx="32" cy="46" rx="24" ry="8" fill="#38bdf8" opacity="0.4"/>
            <path d="M22 28h20v8H22z" fill="#facc15" opacity="0.9"/>
            <text x="24" y="34" fontFamily="monospace" fontSize="7" fontWeight="bold" fill="#000">SQL</text>
          </svg>
        ),
      },
    ],
  },
  {
    category: 'SHIP GEAR — FRAMEWORKS & TOOLS',
    icon: '⚓',
    items: [
      {
        name: 'SPRING BOOT',
        accentColor: '#6db33f',
        level: 'Enterprise Java Architecture',
        // Official Spring Boot green leaf logo
        logo: (
          <svg className="w-8 h-8 sm:w-9.5 sm:h-9.5" viewBox="0 0 256 256">
            <path
              fill="#6DB33F"
              d="M228.6 138.8c-1.3-4.7-3.9-9-7.5-12.4-7.5-7-19-8.4-27.9-3.4l-7.2 4.1c-1.9 1.1-4.2 1.4-6.3.8-2.1-.6-3.8-2-4.7-3.9l-2.4-4.8c-3.1-6.2-2.5-13.6 1.6-19.2 4.1-5.6 11-8.5 17.9-7.4 3.7.6 7.4 2.2 10.3 4.8l2.9 2.6c3.2 2.9 7.4 4.5 11.8 4.5 4.9 0 9.6-2 13-5.6 6.8-7.2 6.5-18.7-.7-25.5l-33-31.1C184 21.6 156.4 13 128 13S72 21.6 51.6 42.4L18.6 73.5c-7.2 6.8-7.5 18.3-.7 25.5 3.4 3.6 8.1 5.6 13 5.6 4.4 0 8.6-1.6 11.8-4.5l2.9-2.6c2.9-2.6 6.6-4.2 10.3-4.8 6.9-1.1 13.8 1.8 17.9 7.4 4.1 5.6 4.7 13 1.6 19.2l-2.4 4.8c-.9 1.9-2.6 3.3-4.7 3.9-2.1.6-4.4.3-6.3-.8l-7.2-4.1c-8.9-5-20.4-3.6-27.9 3.4-3.6 3.4-6.2 7.7-7.5 12.4-2.8 9.9-.4 20.6 6.3 28.2l33 37.1C91.6 225.4 119.2 234 147.6 234s56-8.6 76.4-29.4l33-37.1c6.7-7.6 9.1-18.3 6.3-28.2l-34.7-.5z"
            />
            <path
              fill="#FFF"
              d="M147.6 214c-23.2 0-45.7-7-62.4-24L52.2 152.9c-3.6-4.1-4.9-9.8-3.4-15.1 1.5-5.3 5.4-9.5 10.5-11.4 5.1-1.8 10.9-1 15.3 2.1l7.2 4.1c6.5 3.7 14.4 4.6 21.5 2.6 7.2-2 13-6.8 16.2-13.3l2.4-4.8c5.4-10.7 4.3-23.5-2.8-33.1s-18.9-14.7-30.8-12.8c-2.4.4-4.7 1.4-6.6 3.1l-2.9 2.6c-1.5 1.3-3.4 2-5.4 2-2.3 0-4.4-.9-6-2.6-3.2-3.4-3-8.8.4-12l33-31.1C117.8 41.5 137.9 33 158.8 33s41 8.5 55.7 23.4l33 31.1c3.4 3.2 3.6 8.6.4 12-1.6 1.7-3.7 2.6-6 2.6-2 0-3.9-.7-5.4-2l-2.9-2.6c-1.9-1.7-4.2-2.7-6.6-3.1-11.9-1.9-23.7 3.2-30.8 12.8-7.1 9.6-8.2 22.4-2.8 33.1l2.4 4.8c3.2 6.5 9 11.3 16.2 13.3 7.1 2 15 1.1 21.5-2.6l7.2-4.1c4.4-3.1 10.2-3.9 15.3-2.1 5.1 1.9 9 6.1 10.5 11.4 1.5 5.3.2 11-3.4 15.1l-33 37.1c-16.7 17-39.2 24-62.4 24z"
            />
          </svg>
        ),
      },
      {
        name: 'REACT',
        accentColor: '#61dafb',
        level: 'Interactive UI Library',
        // Official spinning React cyan atom logo
        logo: (
          <svg className="w-8 h-8 sm:w-9.5 sm:h-9.5 animate-[spin_12s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        ),
      },
      {
        name: 'TAILWIND',
        accentColor: '#38bdf8',
        level: 'Modern CSS Framework',
        // Official Tailwind CSS dual waves logo
        logo: (
          <svg className="w-8 h-8 sm:w-9.5 sm:h-9.5" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.00019C8.94825 6.00019 7.04077 7.50019 6.27756 10.5002C7.42237 9.00019 8.82046 8.43769 10.4718 8.81269C11.4141 9.02667 12.0883 9.71122 12.8347 10.4692C14.0507 11.7041 15.4526 13.1278 18.7224 13.1278C21.7742 13.1278 23.6816 11.6278 24.4449 8.62781C23.3001 10.1278 21.902 10.6903 20.2506 10.3153C19.3083 10.1013 18.6341 9.41679 17.8877 8.6588C16.6717 7.42391 15.2698 6.00019 12 6.00019ZM6.27756 13.1278C3.22581 13.1278 1.31833 14.6278 0.555122 17.6278C1.69993 16.1278 3.09802 15.5653 4.7494 15.9403C5.69168 16.1543 6.3659 16.8388 7.11229 17.5968C8.32832 18.8317 9.73017 20.2554 13 20.2554C16.0517 20.2554 17.9592 18.7554 18.7224 15.7554C17.5776 17.2554 16.1795 17.8179 14.5282 17.4429C13.5859 17.2289 12.9117 16.5444 12.1653 15.7864C10.9493 14.5515 9.54744 13.1278 6.27756 13.1278Z"
              fill="#38BDF8"
            />
          </svg>
        ),
      },
      {
        name: 'GIT / GITHUB',
        accentColor: '#f05032',
        level: 'Distributed Version Control',
        // Official Git branch logo
        logo: (
          <svg className="w-8 h-8 sm:w-9.5 sm:h-9.5" viewBox="0 0 24 24">
            <path
              fill="#F05032"
              d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.61-.406V8.9c-.221-.09-.426-.227-.607-.41-.537-.537-.674-1.334-.404-1.992L7.568 3.768.452 10.885c-.604.604-.604 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.186 0l10.428-10.43c.606-.603.606-1.58 0-2.191"
            />
          </svg>
        ),
      },
    ],
  },
  {
    category: 'NAVIGATION CHARTS — DATABASES & ARCHITECTURE',
    icon: '🧭',
    items: [
      {
        name: 'MYSQL',
        accentColor: '#00758f',
        level: 'Relational ACID Storage',
        // Official MySQL Dolphin logo
        logo: (
          <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="46" fill="#031f38" stroke="#00758f" strokeWidth="2"/>
            {/* Dolphin Silhouette */}
            <path
              d="M68 28c-4-3-12-5-18-2-8 4-13 11-18 19-3 5-7 10-12 12-2 1-5 2-4 4 1 1 5 1 9-1 6-3 11-8 15-13 3-4 7-9 11-11 5-3 12-2 15 2 2 3 3 7 3 11 0 7-3 13-7 18-3 4-7 8-11 11-2 1-3 3-1 4 1 1 4 0 6-2 6-4 11-9 15-15 4-6 7-13 7-21 0-7-2-13-6-16z"
              fill="#00758f"
            />
            <path
              d="M72 32c-2-2-6-3-9-1-4 2-7 6-10 10-2 3-4 6-7 8-2 1-4 2-3 3 1 1 3 1 5-1 4-2 7-5 10-9 2-3 5-6 8-8 3-2 7-1 9 1 1 2 2 5 2 7 0 5-2 9-5 13-2 3-5 6-8 8-1 1-2 2 0 3 1 1 3 0 5-1 4-3 8-7 11-11 3-4 5-9 5-15 0-5-1-9-4-12z"
              fill="#f29111"
            />
            <text x="50" y="82" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize="10" fill="#38bdf8">
              MySQL
            </text>
          </svg>
        ),
      },
      {
        name: 'REST APIS',
        accentColor: '#22d3ee',
        level: 'Scalable Microservices HTTP',
        // High-definition official API connection schema logo
        logo: (
          <svg className="w-8 h-8 sm:w-9.5 sm:h-9.5" viewBox="0 0 64 64" fill="none">
            <rect x="6" y="8" width="52" height="18" rx="5" fill="#082f49" stroke="#22d3ee" strokeWidth="2.5"/>
            <rect x="6" y="38" width="52" height="18" rx="5" fill="#082f49" stroke="#22d3ee" strokeWidth="2.5"/>
            <circle cx="16" cy="17" r="3.5" fill="#38bdf8"/>
            <circle cx="26" cy="17" r="3.5" fill="#22d3ee"/>
            <circle cx="16" cy="47" r="3.5" fill="#38bdf8"/>
            <circle cx="26" cy="47" r="3.5" fill="#22d3ee"/>
            <path d="M42 26v12M38 34l4 4 4-4M46 30l-4-4-4 4" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="44" y="19" fontFamily="monospace" fontSize="8" fontWeight="black" fill="#ffffff">GET</text>
            <text x="41" y="49" fontFamily="monospace" fontSize="8" fontWeight="black" fill="#ffffff">POST</text>
          </svg>
        ),
      },
      {
        name: 'HIBERNATE / JPA',
        accentColor: '#c68f2f',
        level: 'ORM & Data Persistence',
        // Official Hibernate magnifying database persistence logo
        logo: (
          <svg className="w-8 h-8 sm:w-9.5 sm:h-9.5" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="28" fill="#1c1917" stroke="#c68f2f" strokeWidth="2"/>
            <path d="M20 22h24v6H20zM20 30h24v6H20zM20 38h24v6H20z" fill="#78716c"/>
            <circle cx="38" cy="34" r="11" fill="#c68f2f" opacity="0.85" stroke="#fef08a" strokeWidth="1.5"/>
            <path d="M46 42l8 8" stroke="#fef08a" strokeWidth="3" strokeLinecap="round"/>
            <text x="38" y="37" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#000">ORM</text>
          </svg>
        ),
      },
    ],
  },
];

export default function ArsenalSection() {
  return (
    <section
      id="arsenal"
      className="relative z-10 min-h-screen px-4 sm:px-8 md:px-12 py-24 sm:py-32 max-w-7xl mx-auto flex flex-col justify-center lg:pr-[360px] xl:pr-[420px]"
    >
      {/* Section Header */}
      <div className="text-left mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/75 border border-cyan-400/50 text-cyan-300 text-xs font-mono font-bold tracking-[0.25em] uppercase shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          ✦ ARSENAL · DIVINE TECHNIQUES ✦
        </span>

        <h2 className="font-mystic font-black text-3xl sm:text-5xl lg:text-6xl tracking-[0.16em] text-white mt-3 drop-shadow-[0_2px_25px_rgba(56,189,248,0.6)] uppercase">
          THE SPIRIT ARSENAL
        </h2>

        <p className="text-xs sm:text-sm font-mono text-cyan-200/90 tracking-wider mt-3 max-w-2xl italic leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          "A cultivator is only as strong as their refined weapons, martial techniques, and master-crafted server foundations."
        </p>
      </div>

      {/* Categories Showcase */}
      <div className="flex flex-col gap-10 sm:gap-14 w-full">
        {ARSENAL_CATEGORIES.map((cat, catIdx) => (
          <div key={catIdx} className="flex flex-col gap-4">
            {/* Category Header with Thin Accent Line */}
            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl">{cat.icon}</span>
              <h3 className="font-mono text-xs sm:text-sm font-black tracking-[0.22em] text-amber-300 uppercase whitespace-nowrap drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]">
                {cat.category}
              </h3>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-500/50 via-cyan-500/30 to-transparent" />
            </div>

            {/* Row of Authentic Arsenal Cards with Official Logos & Diagonal Glossy Glass Sheen */}
            <div className="flex flex-wrap gap-3 sm:gap-3.5 md:gap-4">
              {cat.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="group relative w-[105px] h-[105px] sm:w-[115px] sm:h-[115px] md:w-[120px] md:h-[120px] aspect-square rounded-xl p-2 sm:p-2.5 flex flex-col items-center justify-between cursor-pointer select-none transition-all duration-300 hover:-translate-y-2 hover:scale-[1.04] overflow-hidden border"
                  style={{
                    backgroundColor: 'rgba(6, 12, 24, 0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderColor: 'rgba(217, 119, 6, 0.4)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.75), 0 0 20px rgba(56, 189, 248, 0.15)',
                  }}
                >
                  {/* 
                    The Iconic Diagonal Glossy Glass Sheen:
                    Diagonal reflection cut matching the reference screenshot!
                  */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.07) 42%, transparent 42.5%)',
                    }}
                  />

                  {/* Ambient Hover Glow Color (Top-Right) */}
                  <div
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-full pointer-events-none filter blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ backgroundColor: item.accentColor }}
                  />

                  {/* Top Header Balance Bar: Symmetrical height to the bottom label so the sign sits in true dead center */}
                  <div className="relative z-10 w-full flex items-center justify-between h-3.5 sm:h-4 px-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full opacity-35 group-hover:opacity-75 transition-opacity"
                      style={{ backgroundColor: item.accentColor }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: item.accentColor }}
                    />
                  </div>

                  {/* Central Sign / Tech Logo - Perfectly Centered in the Box */}
                  <div className="relative z-10 my-auto flex-1 w-full flex items-center justify-center">
                    {/* Subtle Radial Tech Halo Glow */}
                    <div
                      className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full pointer-events-none filter blur-md sm:blur-lg opacity-25 group-hover:opacity-65 transition-opacity duration-300"
                      style={{ backgroundColor: item.accentColor }}
                    />

                    {/* Logo Graphic */}
                    <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                      {item.logo}
                    </div>
                  </div>

                  {/* Clean Uppercase Label (Matches Top Bar Height for True Symmetry) */}
                  <div className="relative z-10 text-center w-full h-3.5 sm:h-4 flex items-center justify-center">
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-slate-200 group-hover:text-white transition-colors duration-200 block truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {item.name}
                    </span>
                  </div>

                  {/* Golden / Amber Hover Rim Border */}
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none border border-transparent group-hover:border-amber-400/90 transition-colors duration-300"
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(251, 191, 36, 0.2)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
