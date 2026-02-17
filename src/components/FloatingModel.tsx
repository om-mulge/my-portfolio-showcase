import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        scale={hovered ? 1.15 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1.4, 4]} />
        <MeshDistortMaterial
          color="hsl(160, 84%, 45%)"
          emissive="hsl(160, 84%, 25%)"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={hovered ? 0.5 : 0.3}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const GlowingParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 120;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="hsl(160, 84%, 55%)"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

const FloatingModel = () => {
  return (
    <div className="w-full h-full" style={{ cursor: "grab" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="hsl(160, 84%, 55%)" />
        <pointLight position={[-3, -3, -3]} intensity={0.4} color="hsl(160, 84%, 40%)" />
        <AnimatedSphere />
        <GlowingParticles />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default FloatingModel;
