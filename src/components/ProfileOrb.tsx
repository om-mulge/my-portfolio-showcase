import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const OrbRing = ({ radius, speed, tilt, opacity = 0.4 }: { radius: number; speed: number; tilt: [number, number, number]; opacity?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += speed * 0.008;
      ref.current.rotation.x = tilt[0] + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });
  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.008, 16, 80]} />
      <meshStandardMaterial
        color="hsl(160, 84%, 50%)"
        emissive="hsl(160, 84%, 45%)"
        emissiveIntensity={0.8}
        transparent
        opacity={opacity}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

const OrbitingStar = ({ index, total, radius, speed }: { index: number; total: number; radius: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  const angle = (index / total) * Math.PI * 2;

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + angle;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.y = Math.sin(t) * radius * 0.5;
      ref.current.position.z = Math.sin(t) * radius * 0.3;
      const pulse = 0.9 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.2;
      ref.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color="hsl(160, 84%, 65%)" transparent opacity={0.8} />
    </mesh>
  );
};

const ProfileOrb = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.15} />
        <pointLight position={[2, 2, 3]} intensity={0.6} color="hsl(160, 84%, 55%)" />

        <Float speed={0.8} floatIntensity={0.2}>
          <OrbRing radius={1.6} speed={0.6} tilt={[0.3, 0, 0]} opacity={0.35} />
          <OrbRing radius={1.85} speed={-0.4} tilt={[1.2, 0.5, 0]} opacity={0.2} />

          {[...Array(6)].map((_, i) => (
            <OrbitingStar key={i} index={i} total={6} radius={1.7} speed={0.35} />
          ))}
        </Float>
      </Canvas>
    </div>
  );
};

export default ProfileOrb;
