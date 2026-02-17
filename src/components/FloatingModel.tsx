import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const GlowingCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08);
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshStandardMaterial
          color="hsl(160, 84%, 45%)"
          emissive="hsl(160, 84%, 35%)"
          emissiveIntensity={1.2}
          transparent
          opacity={0.85}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      {/* Inner glow sphere */}
      <mesh scale={0.65}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="hsl(160, 84%, 60%)" transparent opacity={0.3} />
      </mesh>
    </Float>
  );
};

const RotatingRing = ({ radius, speed, tilt, thickness = 0.015 }: { radius: number; speed: number; tilt: [number, number, number]; thickness?: number }) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += speed * 0.01;
      ringRef.current.rotation.x = tilt[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} rotation={tilt}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial
        color="hsl(160, 84%, 50%)"
        emissive="hsl(160, 84%, 40%)"
        emissiveIntensity={0.8}
        transparent
        opacity={0.6}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
};

const OrbitingParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.2 + Math.random() * 2;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="hsl(160, 84%, 60%)"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const FloatingModel = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center" style={{ opacity: 0.2 }}>
      <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px]" style={{ pointerEvents: "auto" }}>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[3, 3, 3]} intensity={1} color="hsl(160, 84%, 55%)" />
          <pointLight position={[-3, -3, -3]} intensity={0.5} color="hsl(160, 84%, 40%)" />
          <pointLight position={[0, 0, 3]} intensity={0.6} color="hsl(160, 84%, 60%)" />

          <GlowingCore />

          {/* Rotating rings at different angles */}
          <RotatingRing radius={1.1} speed={1} tilt={[0.3, 0, 0]} thickness={0.02} />
          <RotatingRing radius={1.4} speed={-0.7} tilt={[1.2, 0.5, 0]} thickness={0.012} />
          <RotatingRing radius={1.7} speed={0.5} tilt={[0.8, -0.3, 0.4]} thickness={0.01} />

          <OrbitingParticles />
        </Canvas>
      </div>
    </div>
  );
};

export default FloatingModel;
