"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "../motion/FadeIn";
import { TextReveal } from "../motion/TextReveal";
import Image from "next/image";

const MANIFESTO_LINES = [
  "A frigate that cannot be sustained at home is not a warship.",
  "It is a debt flying a flag.",
  "A transport aircraft grounded for one component, shipped from one distant depot,",
  "on one foreign timetable, is not an asset on the national books.",
  "It is anxiety on the national balance sheet.",
];

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineX = useTransform(scrollYProgress, [0.1, 0.5], [-40, 0]);
  const lineOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "var(--color-obsidian-2)",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Decorative left line */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: "var(--color-gold)",
          scaleY: scrollYProgress,
          transformOrigin: "top",
          opacity: 0.6,
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "6rem",
            alignItems: "start",
          }}
          className="flex flex-col xl:grid"
        >
          {/* Left — label */}
          <FadeIn direction="right">
            <div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "1.5rem",
                }}
              >
                Neutralizing the White Elephant
              </div>
              <p
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "var(--color-muted)",
                  maxWidth: 280,
                }}
              >
                The capital platform, bought at great political cost, that
                degrades into a monument the moment the foreign supply line
                breaks.
              </p>

              <div
                style={{
                  marginTop: "3rem",
                  padding: "1.5rem",
                  border: "1px solid var(--color-border)",
                  borderLeft: "2px solid var(--color-gold)",
                  backgroundColor: "rgba(201,168,76,0.03)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-gold)",
                    marginBottom: "0.75rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  THE PERLAS MECHANISM
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "var(--color-dim)",
                  }}
                >
                  We move the depot, not the dependency. 
                  Maintenance, repair, and overhaul is re-sited inside your own 
                  economic zone — your engineers, your toolchains, your spares inventory. 
                  The asset stops waiting on a foreign queue because the queue no longer exists. 
                  We've engineered the failure point out of the supply chain before the contract is signed.
                  {/* Not a softer dependency. Not a friendlier vendor.{" "}
                  <span style={{ color: "var(--color-light)", fontWeight: 500 }}>
                    Sovereignty
                  </span>
                  —the unconditional ability of a state to keep its own
                  fleets ready on terms it sets for itself. */}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — manifesto lines */}
          <div>
            {MANIFESTO_LINES.map((line, i) => (
              <FadeIn key={i} delay={i * 0.12} direction="up" distance={20}>
                <p
                  style={{
                    fontSize: i < 2 ? "1.75rem" : "1.125rem",
                    fontFamily: "var(--font-display)",
                    fontWeight: i < 2 ? 300 : 300,
                    lineHeight: 1.4,
                    color: i < 2 ? "var(--color-white)" : "var(--color-dim)",
                    marginBottom: i === 1 ? "2.5rem" : "0.75rem",
                    borderBottom: i === 1 ? "1px solid var(--color-border)" : "none",
                    paddingBottom: i === 1 ? "2.5rem" : 0,
                  }}
                >
                  {line}
                </p>
              </FadeIn>
            ))}

            <FadeIn delay={0.8} direction="up">
              <div
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 1,
                    backgroundColor: "var(--color-gold)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "var(--color-gold)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Perlas exists to end that condition.
                  Here is how: localized custody, modeled economics, 
                  and an audit trail that exists before your auditors 
                  ask for it. Three structures. One signature.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "relative",
        height: 320,
        marginTop: "5rem",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid var(--color-border)",
      }}
    >
      <Image
        src="/engine-bg.jpg"
        // src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=80"
        // Military aircraft in hangar — shows MRO, depot context
        alt="Aerospace maintenance facility"
        fill
        style={{ objectFit: "cover", objectPosition: "center " }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(8,8,9,0.9) 0%, rgba(8,8,9,0.3) 60%, rgba(8,8,9,0.7) 100%)",
        }}
      />
      {/* Overlaid quote */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          padding: "0 4rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
            fontWeight: 300,
            color: "var(--color-white)",
            maxWidth: 600,
            lineHeight: 1.4,
            letterSpacing: "-0.02em",
          }}
        >
          "Perlas takes the opposite position. We hold{" "}
          <span style={{ color: "var(--color-gold)" }}>Lifecycle Custody</span> of
          a national capability from the first G2G conversation to the final
          depot-level overhaul."
        </p>
      </div>
    </motion.div>
    </section>
  );
}
