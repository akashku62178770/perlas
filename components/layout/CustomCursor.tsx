"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const sx = useSpring(mx, { stiffness: 220, damping: 22, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 220, damping: 22, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (isHidden) setIsHidden(false);
    };

    const checkPointer = () => {
      const el = document.elementFromPoint(mx.get(), my.get());
      const cursor = el ? window.getComputedStyle(el).cursor : "auto";
      setIsPointer(cursor === "pointer");
    };

    const leave = () => setIsHidden(true);
    const enter = () => setIsHidden(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkPointer);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkPointer);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [mx, my, isHidden]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        style={{
          position: "fixed",
          left: mx,
          top: my,
          x: "-50%",
          y: "-50%",
          zIndex: 9999,
          pointerEvents: "none",
          width: isPointer ? 8 : 6,
          height: isPointer ? 8 : 6,
          borderRadius: "50%",
          backgroundColor: "var(--color-gold)",
          opacity: isHidden ? 0 : 1,
          transition: "width 0.2s, height 0.2s, opacity 0.2s",
        }}
      />

      {/* Outer ring */}
      <motion.div
        style={{
          position: "fixed",
          left: sx,
          top: sy,
          x: "-50%",
          y: "-50%",
          zIndex: 9998,
          pointerEvents: "none",
          width: isPointer ? 40 : 28,
          height: isPointer ? 40 : 28,
          borderRadius: "50%",
          border: "1px solid",
          borderColor: isPointer
            ? "rgba(201, 168, 76, 0.6)"
            : "rgba(201, 168, 76, 0.3)",
          opacity: isHidden ? 0 : 1,
          transition: "width 0.3s, height 0.3s, opacity 0.2s, border-color 0.2s",
        }}
      />

      {/* Crosshair lines — only on pointer */}
      {isPointer && (
        <motion.div
          style={{
            position: "fixed",
            left: sx,
            top: sy,
            x: "-50%",
            y: "-50%",
            zIndex: 9997,
            pointerEvents: "none",
            width: 56,
            height: 56,
            opacity: isHidden ? 0 : 0.25,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 1,
              backgroundColor: "var(--color-gold)",
              transform: "translateY(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              backgroundColor: "var(--color-gold)",
              transform: "translateX(-50%)",
            }}
          />
        </motion.div>
      )}
    </>
  );
}
