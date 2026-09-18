import React from 'react';
import { Sparkles } from '@react-three/drei';

/**
 * AuraParticles
 * Adheres to roadmap:
 * "Establish the cosmic void. Use the <Sparkles> component from @react-three/drei
 * and give them green and purple color properties to generate the floating BTTH auras."
 */
export default function AuraParticles({ auraMode = 'dual', speedMultiplier = 1 }) {
  const showGreen = auraMode === 'dual' || auraMode === 'green';
  const showPurple = auraMode === 'dual' || auraMode === 'purple';

  return (
    <group name="aura-particles-group">
      {/* --- BTTH Green Flame Aura (Qinglian / Emerald Essence) --- */}
      {showGreen && (
        <>
          {/* Broad cosmic floating green embers */}
          <Sparkles
            count={75}
            scale={[12, 10, 12]}
            size={4.5}
            speed={0.45 * speedMultiplier}
            noise={0.3}
            color="#10b981"
            opacity={0.85}
          />
          {/* Dense rising green core flame particles */}
          <Sparkles
            count={45}
            scale={[5, 6, 5]}
            position={[0, 0.5, 0]}
            size={6}
            speed={0.75 * speedMultiplier}
            noise={0.5}
            color="#00ffaa"
            opacity={0.9}
          />
        </>
      )}

      {/* --- BTTH Mystic Purple Flame Aura (Amethyst / Spatial Void Essence) --- */}
      {showPurple && (
        <>
          {/* Broad cosmic floating purple sparkles */}
          <Sparkles
            count={85}
            scale={[14, 12, 14]}
            size={5.2}
            speed={0.5 * speedMultiplier}
            noise={0.4}
            color="#a855f7"
            opacity={0.85}
          />
          {/* Dense mystical violet core sparkles */}
          <Sparkles
            count={50}
            scale={[6, 7, 6]}
            position={[0, 0.2, 0]}
            size={7}
            speed={0.8 * speedMultiplier}
            noise={0.6}
            color="#c084fc"
            opacity={0.95}
          />
        </>
      )}

      {/* Deep void distant starlight sparkles */}
      <Sparkles
        count={60}
        scale={[20, 16, 20]}
        size={2.5}
        speed={0.2 * speedMultiplier}
        noise={0.2}
        color="#e0e7ff"
        opacity={0.4}
      />
    </group>
  );
}
