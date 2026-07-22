"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 70, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200); // offset by half width (400px)
      mouseY.set(e.clientY - 200); // offset by half height (400px)
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-pink/15 via-rose/10 to-deep/15 blur-[100px]"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}
