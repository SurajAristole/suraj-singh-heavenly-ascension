import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SceneLighting from './SceneLighting';
import AuraParticles from './AuraParticles';
import FloatingPlatform from './FloatingPlatform';
import FloatingScroll from './FloatingScroll';

export const SURAJ_SCROLLS = [
  {
    id: 'skills',
    scrollNum: '1',
    scrollName: 'Scroll 1',
    scrollImage: '/scroll1_clean.png',
    title: 'Java & Backend Arsenal',
    subtitle: 'Dou Qi Cultivation · Core Disciplines',
    tier: 'Tian-Tier Core Mastery',
    badge: 'Java Arsenal',
    icon: '☕',
    themeColor: '#f97316',
    bodyColor: '#342647',
    position: [-3.8, 0.9, 0.8],
    rotation: [0.15, 0.3, 0.2],
    floatSpeed: 1.8,
    rotationIntensity: 0.5,
    floatIntensity: 1.1,
    description: 'Forged through rigorous CS engineering. Specializes in robust enterprise backend architectures, scalable RESTful microservices, and optimized database transactions.',
    skillsList: [
      { category: 'Core & Languages', items: ['Java 17/21', 'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms'] },
      { category: 'Frameworks & Tools', items: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate / JPA', 'Maven'] },
      { category: 'Databases & APIs', items: ['MySQL', 'PostgreSQL', 'RESTful API Architecture', 'Microservices', 'Git / GitHub'] },
    ],
  },
  {
    id: 'about',
    scrollNum: '2',
    scrollName: 'Scroll 2',
    scrollImage: '/scroll2_clean.png',
    title: 'Origin & Cultivation Path',
    subtitle: 'About Suraj Singh',
    tier: 'Computer Science & Engineering',
    badge: 'About Suraj',
    icon: '👤',
    themeColor: '#38bdf8',
    bodyColor: '#17362a',
    position: [3.8, 1.0, 0.5],
    rotation: [-0.15, -0.3, -0.2],
    floatSpeed: 2.1,
    rotationIntensity: 0.6,
    floatIntensity: 1.2,
    description: 'A dedicated Computer Science and Engineering student focused on building high-performance, fault-tolerant backend systems. Driven by solving complex computational problems and crafting clean, maintainable server-side logic.',
    details: [
      { label: 'Name', value: 'Suraj Singh' },
      { label: 'Degree', value: 'B.Tech in Computer Science & Engineering' },
      { label: 'Primary Discipline', value: 'Java Backend Development' },
      { label: 'Philosophy', value: 'Clean Code, Solid Principles, Scalable Architecture' },
    ],
  },
  {
    id: 'projects',
    scrollNum: '3',
    scrollName: 'Scroll 3',
    scrollImage: '/scroll3_clean.png',
    title: 'Battle Feats & Projects',
    subtitle: 'Demonstrated Engineering Mastery',
    tier: 'Di-Tier Sovereign Projects',
    badge: 'Projects',
    icon: '⚡',
    themeColor: '#ef4444',
    bodyColor: '#423719',
    position: [-2.0, 2.6, -1.2],
    rotation: [0.25, 0.45, -0.15],
    floatSpeed: 2.3,
    rotationIntensity: 0.7,
    floatIntensity: 1.4,
    description: 'Engineered backend systems built with Spring Boot, secure authentication layers, and responsive database management.',
    projectsList: [
      {
        name: 'Enterprise Microservices Engine',
        tech: 'Java · Spring Boot · Spring Cloud · MySQL',
        desc: 'Decoupled service architecture featuring API gateway routing, service discovery, and centralized configuration.',
      },
      {
        name: 'Secure JWT Auth & User Management',
        tech: 'Spring Security · Hibernate · PostgreSQL',
        desc: 'Role-based access control (RBAC) with token refresh rotation and encrypted credential persistence.',
      },
      {
        name: 'High-Concurrency REST API Server',
        tech: 'Java 21 · REST · JUnit · Maven',
        desc: 'Robust API handling high throughput data ingestion with comprehensive unit testing.',
      },
    ],
  },
  {
    id: 'contact',
    scrollNum: '4',
    scrollName: 'Scroll 4',
    scrollImage: '/scroll4_clean.png',
    title: 'Spirit Transmission & Contact',
    subtitle: 'Initiate Communication',
    tier: 'Direct Resonance',
    badge: 'Contact',
    icon: '📬',
    themeColor: '#c084fc',
    bodyColor: '#1a3344',
    position: [2.3, 2.5, -1.4],
    rotation: [-0.25, -0.4, 0.15],
    floatSpeed: 2.4,
    rotationIntensity: 0.65,
    floatIntensity: 1.3,
    description: 'Ready to collaborate on impactful engineering projects, internships, or backend software opportunities.',
    contacts: [
      { label: 'Phone', value: '+91 88829 79132', href: 'tel:+918882979132' },
      { label: 'Email', value: 'surajsingh01928q@gmail.com', href: 'mailto:surajsingh01928q@gmail.com' },
      { label: 'LinkedIn', value: 'suraj-singh-27511a295', href: 'https://www.linkedin.com/in/suraj-singh-27511a295' },
    ],
  },
];

export default function VoidCanvas({
  hoveredPlatform,
  setHoveredPlatform,
  activeScroll,
  setActiveScroll,
  hoveredScrollId,
  setHoveredScrollId,
}) {
  return (
    <div className="void-canvas-wrapper" id="canvas-container">
      <Canvas
        dpr={[1, 1.5]} // Strict DPR limit eliminates lag
        camera={{ position: [0, 2.2, 7.8], fov: 44, near: 0.1, far: 50 }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          depth: true,
        }}
      >
        <Suspense fallback={null}>
          {/* Step 2: Scene Lighting (proper ambient + directional + key/fill) */}
          <SceneLighting />

          {/* Step 2: BTTH Green & Purple Sparkles Aura */}
          <AuraParticles auraMode="dual" speedMultiplier={1} />

          {/* Step 3: Low-Poly Floating Dais with rich slate stone & runes */}
          <FloatingPlatform
            speed={1.6}
            rotationIntensity={0.35}
            floatIntensity={0.85}
            hovered={hoveredPlatform}
            setHovered={setHoveredPlatform}
          />

          {/* Step 3: 4 Distinct Floating Scrolls with 3D labels */}
          {SURAJ_SCROLLS.map((scroll) => (
            <FloatingScroll
              key={scroll.id}
              scrollData={scroll}
              isSelected={activeScroll?.id === scroll.id}
              isHovered={hoveredScrollId === scroll.id}
              onHover={setHoveredScrollId}
              onSelect={setActiveScroll}
            />
          ))}

          {/* Smooth interactive camera navigation */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={4.5}
            maxDistance={12}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.75}
            dampingFactor={0.06}
            rotateSpeed={0.65}
          />
        </Suspense>
      </Canvas>

      <div className="void-canvas-overlay" />
    </div>
  );
}
