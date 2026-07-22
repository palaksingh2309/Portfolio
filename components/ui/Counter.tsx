"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CounterProps = {
  value: string; // e.g. "20K+", "850+", "6", "5×"
};

export default function Counter({ value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (!isInView) return;

    // Parse the number and suffixes from the string
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2];

    const duration = 1500; // 1.5 seconds animation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing: easeOutQuad
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * targetNumber);

      setDisplayValue(`${currentValue}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue || value}</span>;
}
