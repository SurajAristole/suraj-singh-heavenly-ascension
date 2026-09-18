import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';

function ScrollMesh({
  scrollData,
  isSelected,
  isHovered,
  onHover,
  onSelect,
}) {
  const meshGroupRef = useRef();
  const auraHaloRef = useRef();

  useFrame((_, delta) => {
    if (auraHaloRef.current) {
      auraHaloRef.current.rotation.z += delta * 1.5;
    }
  });

  const glowColor = scrollData.themeColor || '#10b981';
  const emissiveLevel = isSelected ? 4.5 : isHovered ? 3.5 : 2.0;

  return (
    <group
      ref={meshGroupRef}
      position={scrollData.position}
      rotation={scrollData.rotation || [0, 0, 0]}
      scale={isHovered ? 1.25 : 1.08}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = 'pointer';
        onHover(scrollData.id);
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
        onHover(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(scrollData);
      }}
    >
      {/* 3D Floating HTML Label above scroll */}
      <Html
        position={[0, 0.95, 0]}
        center
        distanceFactor={9}
        zIndexRange={[100, 0]}
        style={{ pointerEvents: 'none' }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            padding: '4px 10px',
            borderRadius: '999px',
            background: isHovered || isSelected ? 'rgba(15, 16, 35, 0.95)' : 'rgba(10, 10, 22, 0.8)',
            border: `1.5px solid ${glowColor}`,
            color: '#ffffff',
            boxShadow: `0 0 16px ${glowColor}`,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1.0)',
          }}
        >
          <span style={{ fontSize: '13px' }}>{scrollData.icon}</span>
          <span>{scrollData.badge}</span>
        </div>
      </Html>

      {/* --- Main Rolled Parchment Cylinder --- */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.32, 0.32, 2.1, 14]} />
        <meshStandardMaterial
          color={scrollData.bodyColor || '#dfd1b3'}
          roughness={0.65}
          metalness={0.1}
          flatShading={true}
        />
      </mesh>

      {/* --- Inner Wooden / Spindle Axle Rod --- */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.11, 0.11, 2.7, 10]} />
        <meshStandardMaterial
          color="#1e1e24"
          roughness={0.3}
          metalness={0.7}
          flatShading={true}
        />
      </mesh>

      {/* --- Ornate Golden Finial End-Caps --- */}
      {[-1.35, 1.35].map((xPos, idx) => (
        <group key={idx} position={[xPos, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          {/* Gold collar ring */}
          <mesh>
            <cylinderGeometry args={[0.22, 0.14, 0.22, 10]} />
            <meshStandardMaterial
              color="#fbbf24"
              roughness={0.2}
              metalness={0.85}
              flatShading={true}
            />
          </mesh>
          {/* Glowing celestial gemstone tip */}
          <mesh position={[0, idx === 0 ? -0.16 : 0.16, 0]}>
            <octahedronGeometry args={[0.16, 0]} />
            <meshStandardMaterial
              color={glowColor}
              emissive={glowColor}
              emissiveIntensity={emissiveLevel}
              roughness={0.1}
              metalness={0.5}
            />
          </mesh>
        </group>
      ))}

      {/* --- Central Talismanic Silk Binding Ribbon --- */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.35, 0.045, 8, 16]} />
        <meshStandardMaterial
          color={glowColor}
          emissive={glowColor}
          emissiveIntensity={emissiveLevel}
          roughness={0.2}
        />
      </mesh>

      {/* --- Floating Wireframe Halo Ring --- */}
      <mesh ref={auraHaloRef} position={[0, 0.45, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.55, 0.025, 4, 12]} />
        <meshStandardMaterial
          color={glowColor}
          emissive={glowColor}
          emissiveIntensity={emissiveLevel}
          wireframe={true}
        />
      </mesh>
    </group>
  );
}

export default function FloatingScroll({
  scrollData,
  isSelected,
  isHovered,
  onHover,
  onSelect,
}) {
  return (
    <Float
      speed={scrollData.floatSpeed || 2.0}
      rotationIntensity={scrollData.rotationIntensity || 0.6}
      floatIntensity={scrollData.floatIntensity || 1.2}
      floatingRange={scrollData.floatingRange || [-0.2, 0.2]}
    >
      <ScrollMesh
        scrollData={scrollData}
        isSelected={isSelected}
        isHovered={isHovered}
        onHover={onHover}
        onSelect={onSelect}
      />
    </Float>
  );
}
