import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function DaisGeometry({ hovered, setHovered }) {
  const innerRingRef = useRef();
  const outerRingRef = useRef();
  const centralCoreRef = useRef();
  const fragmentsRef = useRef([]);

  useFrame((_, delta) => {
    if (innerRingRef.current) innerRingRef.current.rotation.z += delta * 0.35;
    if (outerRingRef.current) outerRingRef.current.rotation.z -= delta * 0.2;
    if (centralCoreRef.current) {
      centralCoreRef.current.rotation.y += delta * 0.6;
      centralCoreRef.current.rotation.x += delta * 0.25;
    }
  });

  return (
    <group
      position={[0, -1.1, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      {/* --- Tier 1: Main Octagonal Celestial Stone Foundation --- */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[3.2, 3.6, 0.55, 8]} />
        <meshStandardMaterial
          color="#373b54"
          roughness={0.6}
          metalness={0.15}
          flatShading={true}
        />
      </mesh>

      {/* --- Tier 2: Mid-Level Raised Stone Dais --- */}
      <mesh position={[0, 0.38, 0]}>
        <cylinderGeometry args={[2.4, 2.7, 0.3, 8]} />
        <meshStandardMaterial
          color="#484d6d"
          roughness={0.55}
          metalness={0.2}
          flatShading={true}
        />
      </mesh>

      {/* --- Tier 3: Inner Altar Podium --- */}
      <mesh position={[0, 0.62, 0]}>
        <cylinderGeometry args={[1.5, 1.7, 0.2, 8]} />
        <meshStandardMaterial
          color="#2a2d42"
          roughness={0.5}
          metalness={0.3}
          flatShading={true}
        />
      </mesh>

      {/* --- Glowing Emerald Rune Inlay Ring (Inner) --- */}
      <group position={[0, 0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh ref={innerRingRef}>
          <torusGeometry args={[2.0, 0.045, 8, 16]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#00ffaa"
            emissiveIntensity={hovered ? 3.5 : 2.2}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* --- Glowing Violet Rune Inlay Ring (Outer Perimeter) --- */}
      <group position={[0, 0.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh ref={outerRingRef}>
          <torusGeometry args={[3.35, 0.055, 8, 24]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#c084fc"
            emissiveIntensity={hovered ? 3.0 : 1.8}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* --- 4 Cardinal Levitating Pillar Crystals --- */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => {
        const rad = 2.8;
        const x = Math.cos(angle) * rad;
        const z = Math.sin(angle) * rad;
        const isGreen = i % 2 === 0;
        return (
          <group key={i} position={[x, 0.5, z]} rotation={[0, angle + Math.PI / 4, 0]}>
            {/* Low-poly crystalline obelisk */}
            <mesh>
              <octahedronGeometry args={[0.26, 0]} />
              <meshStandardMaterial
                color={isGreen ? "#064e3b" : "#3b0764"}
                emissive={isGreen ? "#00ffaa" : "#a855f7"}
                emissiveIntensity={2.0}
                roughness={0.3}
                flatShading={true}
              />
            </mesh>
          </group>
        );
      })}

      {/* --- Central Levitating Void Crystal Core --- */}
      <mesh ref={centralCoreRef} position={[0, 1.35, 0]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#4c1d95"
          emissive="#c084fc"
          emissiveIntensity={hovered ? 4.2 : 2.8}
          roughness={0.15}
          metalness={0.8}
          flatShading={true}
        />
      </mesh>

      {/* --- Floating Antigravity Stone Fragments Orbiting Dais --- */}
      {[
        { pos: [-3.8, 0.2, 1.5], scale: 0.35, rot: [0.3, 0.5, 0.1] },
        { pos: [3.6, -0.4, 1.8], scale: 0.45, rot: [-0.4, 0.2, 0.5] },
        { pos: [2.8, 0.8, -2.5], scale: 0.3, rot: [0.1, -0.6, 0.4] },
        { pos: [-3.2, -0.3, -2.0], scale: 0.4, rot: [-0.2, 0.8, -0.3] },
      ].map((frag, idx) => (
        <mesh
          key={idx}
          position={frag.pos}
          rotation={frag.rot}
          scale={frag.scale}
        >
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#474b6b"
            roughness={0.7}
            metalness={0.1}
            flatShading={true}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function FloatingPlatform({
  speed = 1.6,
  rotationIntensity = 0.35,
  floatIntensity = 0.85,
  hovered,
  setHovered,
}) {
  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
      floatingRange={[-0.15, 0.15]}
    >
      <DaisGeometry hovered={hovered} setHovered={setHovered} />
    </Float>
  );
}
