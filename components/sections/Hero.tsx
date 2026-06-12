"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { TextReveal } from "@/components/motion/TextReveal";
import { CountUp } from "../motion/CountUp";
import { FadeIn } from "../motion/FadeIn";
import { STATS } from "../../lib/constants";
import { TextReveal } from "../motion/TextReveal";

function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gridSize = 64;
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      // Vertical lines
      for (let c = 0; c < cols; c++) {
        const x = c * gridSize;
        const pulse = Math.sin(frame * 0.008 + c * 0.3) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(201,168,76,${0.03 + pulse * 0.04})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let r = 0; r < rows; r++) {
        const y = r * gridSize;
        const pulse = Math.sin(frame * 0.008 + r * 0.3) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(201,168,76,${0.02 + pulse * 0.025})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Intersection dots
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * gridSize;
          const y = r * gridSize;
          const pulse =
            Math.sin(frame * 0.01 + c * 0.5 + r * 0.3) * 0.5 + 0.5;
          if (pulse > 0.7) {
            ctx.fillStyle = `rgba(201,168,76,${(pulse - 0.7) * 0.4})`;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.6,
        pointerEvents: "none",
      }}
    />
  );
}

function TigerMark() {
  return (
    <motion.svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)" }}
      className="hidden xl:block"
    >
      {/* Outer circle */}
      <motion.circle
        cx="140"
        cy="140"
        r="130"
        stroke="rgba(201,168,76,0.12)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
      />
      {/* Inner ring */}
      <motion.circle
        cx="140"
        cy="140"
        r="105"
        stroke="rgba(201,168,76,0.06)"
        strokeWidth="0.5"
        strokeDasharray="4 8"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "140px 140px" }}
      />

      {/* Abstract tiger stripes / force lines */}
      {[0, 30, 60, 90, 120, 150].map((angle, i) => (
        <motion.line
          key={angle}
          x1="140"
          y1="40"
          x2="140"
          y2="240"
          stroke="rgba(201,168,76,0.15)"
          strokeWidth="0.5"
          style={{
            transformOrigin: "140px 140px",
            transform: `rotate(${angle}deg)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 + i * 0.1, duration: 0.6 }}
        />
      ))}

      {/* Center mark */}
      <motion.circle
        cx="140"
        cy="140"
        r="6"
        fill="var(--color-gold)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "140px 140px" }}
      />

      {/* Pulse ring */}
      <motion.circle
        cx="140"
        cy="140"
        r="6"
        stroke="var(--color-gold)"
        strokeWidth="1"
        fill="none"
        animate={{ r: [6, 40], opacity: [0.5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 2 }}
      />

      {/* PERLAS text on arc */}
      <path id="textArc" d="M 40 140 A 100 100 0 0 1 240 140" fill="none" />
      <motion.text
        fontSize="9"
        fill="rgba(201,168,76,0.4)"
        letterSpacing="8"
        fontFamily="var(--font-mono)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <textPath href="#textArc" startOffset="10%">
          FORCE IN MOTION · SOVEREIGN CAPABILITY ·
        </textPath>
      </motion.text>
    </motion.svg>
  );
}

// At the top of Hero.tsx — replace TigerMark entirely with this:
import Image from "next/image";

function HeroImagePanel() {
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "45%",
        overflow: "hidden",
      }}
      className="hidden xl:block"
    >
      {/* Main image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Image
          src="/svc-strategic.jpg"
          // src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
          // Naval warship at sea — dramatic, sovereign
          alt="Naval fleet"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* Left-to-right gradient so text side stays dark */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--color-obsidian) 0%, rgba(8,8,9,0.6) 40%, transparent 100%)",
          }}
        />
        {/* Bottom darkening */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--color-obsidian) 0%, transparent 40%)",
          }}
        />
        {/* Gold tint overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(201,168,76,0.06)",
            mixBlendMode: "color",
          }}
        />
      </motion.div>

      {/* Floating stat card — bottom left of image panel */}
      {/* <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "2rem",
          padding: "1.25rem 1.5rem",
          backgroundColor: "rgba(8,8,9,0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: 4,
        }}
      >
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.5625rem", color: "var(--color-gold)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Asset Readiness
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 500, color: "var(--color-white)", lineHeight: 1 }}>
          AR = MTBF / (MTBF + MTTR<sub style={{ fontSize: "0.6em" }}>local</sub>)
        </div>
        <div style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--color-muted)" }}>
          Engineered before delivery. Written into contract.
        </div>
      </motion.div> */}
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "var(--color-obsidian)",
      }}
    >
      <GridBackground />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "20%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* <TigerMark /> */}
      <HeroImagePanel />

      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 2rem",
          paddingTop: "8rem",
          paddingBottom: "6rem",
          y,
          opacity,
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <FadeIn delay={0.1}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                width: 32,
                height: 1,
                backgroundColor: "var(--color-gold)",
              }}
            />
            <span
              style={{
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Sovereign Capability Facilitator · Est. Philippines
            </span>
          </div>
        </FadeIn>

        {/* Main headline */}
        <div style={{ maxWidth: 800, marginBottom: "2rem" }}>
          <TextReveal
            as="h1"
            text="A sovereign nation does not rent its security."
            delay={0.2}
            stagger={0.05}
            className="hero-headline"
          />
          <TextReveal
            as="h1"
            text="It holds it."
            delay={0.9}
            stagger={0.08}
          />
        </div>

        {/* Sub-headline */}
        <FadeIn delay={1.4} direction="up" distance={24}>
          <p
            style={{
              fontSize: "1.125rem",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--color-dim)",
              maxWidth: 520,
              marginBottom: "3rem",
            }}
          >
            From the first government-to-government conversation to the final
            depot-level overhaul. One principal. One accountable record.
            Building nations that can keep what they buy. We model the cost of keeping it before you sign for buying it.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={1.6} direction="up" distance={20}>
          <div
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
          >
            <motion.a
              href="#continuum"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.75rem 2rem",
                backgroundColor: "var(--color-gold)",
                color: "var(--color-obsidian)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 3,
                cursor: "none",
                border: "1px solid var(--color-gold)",
              }}
            >
              The Full Continuum
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.75rem 2rem",
                backgroundColor: "transparent",
                color: "var(--color-light)",
                fontSize: "0.8125rem",
                fontWeight: 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 3,
                cursor: "none",
                border: "1px solid rgba(212,212,222,0.2)",
              }}
            >
              Engage Perlas →
            </motion.a>
          </div>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={1.9} direction="up" distance={20}>
          <div
            style={{
              display: "flex",
              gap: "3rem",
              marginTop: "5rem",
              paddingTop: "3rem",
              borderTop: "1px solid var(--color-border)",
              flexWrap: "wrap",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.25rem",
                    fontWeight: 500,
                    color: "var(--color-white)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 400,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--color-muted)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.625rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Scroll
        </span>
        <motion.div
          style={{
            width: 1,
            height: 40,
            backgroundColor: "var(--color-border)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100%",
              backgroundColor: "var(--color-gold)",
            }}
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background:
            "linear-gradient(to bottom, transparent, var(--color-obsidian))",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
