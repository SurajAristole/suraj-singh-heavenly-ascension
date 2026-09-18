import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import FloatingPlatform from './canvas/FloatingPlatform';
import FloatingScroll from './canvas/FloatingScroll';
import { SURAJ_SCROLLS } from './canvas/VoidCanvas';

/**
 * Scene Component
 * The 3D Antigravity Void Scene (React Three Fiber)
 * Features:
 * 1. Strict DPR Performance Check: [1, 1.5] to prevent UI lag.
 * 2. Balanced ambient & point lighting for rich low-poly stone and scroll facets.
 * 3. Green Lotus Core Flame (emerald sparkles) & Bone Chilling Flame (purple/white sparkles).
 * 4. The 3D Floating Ancient Scripture Scrolls (Java Arsenal, About Suraj, Projects, Contact)
 *    wrapped in <Float> with unique drift velocities.
 * 5. Low-Poly Floating Dais Platform with emissive rune inlays.
 */
export default function Scene({
  activeScroll,
  setActiveScroll,
  hoveredScrollId,
  setHoveredScrollId,
  hoveredPlatform,
  setHoveredPlatform,
}) {
  return (
    <div
      className="fixed inset-0 z-0 w-screen h-screen overflow-hidden bg-[#05050d]"
      id="canvas-container"
    >
      <Canvas
        dpr={[1, 1.5]} // Strict DPR limit
        camera={{ position: [0, 2.0, 7.6], fov: 45, near: 0.1, far: 50 }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting: Ambient + Key Directional + Point Lights */}
          <ambientLight intensity={0.85} color="#e0e7ff" />
          <directionalLight position={[6, 9, 6]} intensity={1.8} color="#ffffff" />
          <pointLight position={[0, 3.5, 1.5]} intensity={2.6} color="#c084fc" />
          <pointLight position={[0, -2.5, 0]} intensity={1.8} color="#00ffaa" />

          {/* Void Sparkles: Green Lotus Core Flame (Emerald) */}
          <Sparkles
            count={75}
            scale={[14, 11, 14]}
            size={4.8}
            speed={0.4}
            noise={0.3}
            color="#00ffaa"
            opacity={0.85}
          />

          {/* Void Sparkles: Bone Chilling Flame (Purple / White) */}
          <Sparkles
            count={80}
            scale={[16, 12, 16]}
            size={5.2}
            speed={0.5}
            noise={0.4}
            color="#e9d5ff"
            opacity={0.85}
          />

          {/* Floating Platform Dais wrapped in <Float> */}
          <FloatingPlatform
            speed={1.6}
            rotationIntensity={0.35}
            floatIntensity={0.85}
            hovered={hoveredPlatform}
            setHovered={setHoveredPlatform}
          />

          {/* Floating Ancient Scripture Scrolls wrapped in <Float> */}
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

          {/* OrbitControls for smooth camera rotation */}
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

      {/* Cosmic Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(3,3,8,0.7)_100%)] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
    </div>
  );
}
