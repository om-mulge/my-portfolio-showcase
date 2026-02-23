import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const OrbRing = ({ radius, speed, tilt, opacity = 0.5 }: { radius: number; speed: number; tilt: [number, number, number]; opacity?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += speed * 0.01;
      ref.current.rotation.x = tilt[0] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.012, 16, 100]} />
      <meshStandardMaterial
        color="hsl(160, 84%, 50%)"
        emissive="hsl(160, 84%, 45%)"
        emissiveIntensity={1}
        transparent
        opacity={opacity}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

const OrbitingStar = ({ index, total, radius, speed, size = 0.04 }: { index: number; total: number; radius: number; speed: number; size?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  const angle = (index / total) * Math.PI * 2;

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + angle;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.y = Math.sin(t) * radius * 0.6 + Math.sin(t * 2) * 0.15;
      ref.current.position.z = Math.sin(t) * radius * 0.4;
      const pulse = 0.8 + Math.sin(state.clock.elapsedTime * 3 + index) * 0.4;
      ref.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshBasicMaterial color="hsl(160, 84%, 65%)" transparent opacity={0.9} />
    </mesh>
  );
};

const GlowSphere = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05);
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.35, 64, 64]} />
      <meshStandardMaterial
        color="hsl(160, 84%, 45%)"
        emissive="hsl(160, 84%, 40%)"
        emissiveIntensity={0.6}
        transparent
        opacity={0.07}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

const ProfileOrb = () => {
  return (
    <div className="absolute inset-[-60px] md:inset-[-70px] lg:inset-[-80px] z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[2, 2, 3]} intensity={0.8} color="hsl(160, 84%, 55%)" />
        <pointLight position={[-2, -1, 2]} intensity={0.4} color="hsl(170, 70%, 50%)" />

        <Float speed={1} floatIntensity={0.3}>
          <GlowSphere />

          <OrbRing radius={1.5} speed={0.8} tilt={[0.4, 0, 0]} opacity={0.45} />
          <OrbRing radius={1.7} speed={-0.6} tilt={[1.3, 0.5, 0]} opacity={0.35} />
          <OrbRing radius={1.9} speed={0.4} tilt={[0.7, -0.4, 0.5]} opacity={0.25} />

          {/* Orbiting stars */}
          {[...Array(10)].map((_, i) => (
            <OrbitingStar key={`s1-${i}`} index={i} total={10} radius={1.5} speed={0.5} size={0.045} />
          ))}
          {[...Array(8)].map((_, i) => (
            <OrbitingStar key={`s2-${i}`} index={i} total={8} radius={1.8} speed={-0.35} size={0.035} />
          ))}
          {[...Array(14)].map((_, i) => (
            <OrbitingStar key={`s3-${i}`} index={i} total={14} radius={2.0} speed={0.25} size={0.025} />
          ))}
        </Float>

        <Stars radius={3} depth={4} count={300} factor={1.5} saturation={0.5} fade speed={0.5} />
      </Canvas>
    </div>
  );
};

export default ProfileOrb;
