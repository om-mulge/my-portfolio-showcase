import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const GlowingCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.1);
      (coreRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        1.2 + Math.sin(t * 2) * 0.4;
    }
    if (innerRef.current) {
      innerRef.current.scale.setScalar(0.7 + Math.sin(t * 2.5) * 0.08);
    }
    if (outerRef.current) {
      outerRef.current.scale.setScalar(1.15 + Math.sin(t * 0.8) * 0.05);
      outerRef.current.rotation.y = t * 0.15;
      outerRef.current.rotation.x = t * 0.1;
    }
  });

  return (
    <Float speed={1.2} floatIntensity={0.6}>
      {/* Outer halo */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial
          color="hsl(160, 84%, 50%)"
          emissive="hsl(160, 84%, 40%)"
          emissiveIntensity={0.4}
          transparent
          opacity={0.08}
          wireframe
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Main orb */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshStandardMaterial
          color="hsl(160, 84%, 45%)"
          emissive="hsl(160, 84%, 35%)"
          emissiveIntensity={1.2}
          transparent
          opacity={0.9}
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>
      {/* Inner glow */}
      <mesh ref={innerRef} scale={0.7}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="hsl(160, 84%, 65%)" transparent opacity={0.35} />
      </mesh>
    </Float>
  );
};

const RotatingRing = ({
  radius,
  speed,
  tilt,
  thickness = 0.015,
  color = "hsl(160, 84%, 50%)",
}: {
  radius: number;
  speed: number;
  tilt: [number, number, number];
  thickness?: number;
  color?: string;
}) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += speed * 0.012;
      ringRef.current.rotation.x = tilt[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      ringRef.current.rotation.y += speed * 0.005;
    }
  });

  return (
    <mesh ref={ringRef} rotation={tilt}>
      <torusGeometry args={[radius, thickness, 16, 120]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.9}
        transparent
        opacity={0.55}
        metalness={0.95}
        roughness={0.05}
      />
    </mesh>
  );
};

const OrbitingParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 350;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.0 + Math.random() * 2.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      sz[i] = 0.01 + Math.random() * 0.04;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.3;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="hsl(160, 84%, 65%)"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

const EnergyStreaks = () => {
  const groupRef = useRef<THREE.Group>(null);
  const streakCount = 6;

  const streaks = useMemo(() => {
    return Array.from({ length: streakCount }, (_, i) => {
      const points: THREE.Vector3[] = [];
      const baseAngle = (i / streakCount) * Math.PI * 2;
      for (let j = 0; j <= 40; j++) {
        const t = j / 40;
        const r = 0.8 + t * 1.8;
        const angle = baseAngle + t * Math.PI * 1.5;
        points.push(
          new THREE.Vector3(
            r * Math.cos(angle),
            (Math.random() - 0.5) * 0.3 + Math.sin(t * Math.PI) * 0.5,
            r * Math.sin(angle)
          )
        );
      }
      return new THREE.CatmullRomCurve3(points).getPoints(50);
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {streaks.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="hsl(160, 84%, 55%)"
            transparent
            opacity={0.15}
            linewidth={1}
          />
        </line>
      ))}
    </group>
  );
};

const FloatingModel = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center"
      style={{ opacity: 0.25 }}
    >
      <div className="w-[700px] h-[700px] md:w-[900px] md:h-[900px]" style={{ pointerEvents: "auto" }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.15} />
          <pointLight position={[3, 3, 3]} intensity={1.2} color="hsl(160, 84%, 55%)" />
          <pointLight position={[-3, -3, -3]} intensity={0.6} color="hsl(160, 84%, 40%)" />
          <pointLight position={[0, 2, 4]} intensity={0.8} color="hsl(160, 84%, 65%)" />
          <pointLight position={[0, -2, -2]} intensity={0.3} color="hsl(170, 70%, 50%)" />

          <GlowingCore />

          <RotatingRing radius={1.0} speed={1.2} tilt={[0.3, 0, 0]} thickness={0.022} />
          <RotatingRing radius={1.3} speed={-0.8} tilt={[1.2, 0.5, 0]} thickness={0.015} color="hsl(160, 84%, 55%)" />
          <RotatingRing radius={1.6} speed={0.6} tilt={[0.8, -0.3, 0.4]} thickness={0.01} color="hsl(170, 70%, 50%)" />
          <RotatingRing radius={2.0} speed={-0.4} tilt={[0.5, 1.0, -0.2]} thickness={0.008} color="hsl(150, 80%, 45%)" />

          <OrbitingParticles />
          <EnergyStreaks />

          <Stars radius={4} depth={8} count={800} factor={2} saturation={0.5} fade speed={0.8} />
        </Canvas>
      </div>
    </div>
  );
};

export default FloatingModel;
