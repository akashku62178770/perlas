"use client";
import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export function useScrollProgress(outputRange: [number, number] = [0, 1]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const value = useTransform(scrollYProgress, [0, 1], outputRange);
  return { ref, value, scrollYProgress };
}
