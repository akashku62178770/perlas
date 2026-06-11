"use client";
import { useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export function CountUp({ to, suffix = "", duration = 2.2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = Math.round(value) + suffix;
        }
      },
    });
    return controls.stop;
  }, [inView, to, suffix, duration]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}
