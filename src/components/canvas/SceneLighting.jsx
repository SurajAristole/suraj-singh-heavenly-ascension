import React from 'react';

/**
 * SceneLighting
 * Provides rich low-poly shading so stone facets, bevels, and scrolls
 * are clearly defined and never render as flat black silhouettes.
 */
export default function SceneLighting() {
  return (
    <>
      {/* Soft ambient void light for base geometry visibility */}
      <ambientLight intensity={0.9} color="#e2e8f0" />

      {/* Main directional celestial light defining facets and shadows */}
      <directionalLight
        position={[6, 9, 6]}
        intensity={1.8}
        color="#ffffff"
      />

      {/* Secondary fill light from opposite angle to prevent dark voids */}
      <directionalLight
        position={[-6, 4, -4]}
        intensity={0.8}
        color="#a5b4fc"
      />

      {/* Purple mystic flame key light hovering above dais */}
      <pointLight
        position={[0, 3.5, 1.5]}
        intensity={2.8}
        distance={15}
        decay={2}
        color="#c084fc"
      />

      {/* Emerald underglow bounce light beneath platform */}
      <pointLight
        position={[0, -2.5, 0]}
        intensity={2.0}
        distance={12}
        decay={2}
        color="#00ffaa"
      />
    </>
  );
}
