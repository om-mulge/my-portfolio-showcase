import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const TRAIL_LENGTH = 20;
const IDLE_TIMEOUT = 120;

const CursorTrail = () => {
  const [positions, setPositions] = useState(
    Array(TRAIL_LENGTH).fill({ x: 0, y: 0 })
  );

  const [idle, setIdle] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setIdle(false);

      setPositions((prev) => {
        const newPositions = [{ x: e.clientX, y: e.clientY }, ...prev];
        return newPositions.slice(0, TRAIL_LENGTH);
      });

      if (idleTimer.current) clearTimeout(idleTimer.current);

      idleTimer.current = setTimeout(() => {
        setIdle(true);
      }, IDLE_TIMEOUT);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {positions.map((pos, index) => {
        const size = idle
          ? index === 0
            ? 6
            : 0
          : 4 + index * 0.9;

        const opacity = idle
          ? index === 0
            ? 1
            : 0
          : 1 - index / TRAIL_LENGTH;

        return (
          <motion.div
            key={index}
            className="pointer-events-none fixed top-0 left-0 rounded-full z-[9999]"
            animate={{
              x: pos.x - size / 2,
              y: pos.y - size / 2,
              width: size,
              height: size,
              opacity: opacity,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            style={{
              backgroundColor: "hsl(160, 84%, 45%)",
              boxShadow: "0 0 20px hsla(160, 84%, 45%, 0.6)",
            }}
          />
        );
      })}
    </>
  );
};

export default CursorTrail;
