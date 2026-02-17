import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      pointsRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });
      // Keep max 50 points
      if (pointsRef.current.length > 50) {
        pointsRef.current.shift();
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    const maxAge = 60; // frames to fade

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const points = pointsRef.current;

      // Age all points
      for (let i = points.length - 1; i >= 0; i--) {
        points[i].age++;
        if (points[i].age > maxAge) {
          points.splice(i, 1);
        }
      }

      // Draw trail as connected segments
      if (points.length > 1) {
        for (let i = 1; i < points.length; i++) {
          const p0 = points[i - 1];
          const p1 = points[i];
          const life = 1 - p1.age / maxAge;
          const width = life * 4;

          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.strokeStyle = `hsla(160, 84%, 45%, ${life * 0.6})`;
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();
        }
      }

      // Draw glowing dot at each point
      for (const p of points) {
        const life = 1 - p.age / maxAge;
        const radius = life * 3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(160, 84%, 55%, ${life * 0.5})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
};

export default CursorTrail;
