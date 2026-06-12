"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "../motion/FadeIn";
import { StaggerChildren, itemVariants } from "../motion/StaggerChildren";
import { SectionLabel } from "../ui/SectionLabel";
import { CONTINUUM_PILLARS } from "../../lib/constants";
import Image from "next/image";

const softPillars = CONTINUUM_PILLARS.filter((p) => p.layer === "soft");
const hardPillars = CONTINUUM_PILLARS.filter((p) => p.layer === "hard");

function PillarCard({
  title,
  description,
  index,
  layer,
}: {
  title: string;
  description: string;
  index: number;
  layer: "soft" | "hard";
}) {
  const accentColor =
    layer === "soft" ? "rgba(201,168,76,0.5)" : "rgba(74,124,158,0.5)";
  const accentBg =
    layer === "soft" ? "rgba(201,168,76,0.04)" : "rgba(74,124,158,0.04)";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, borderColor: accentColor }}
      style={{
        padding: "1.5rem",
        border: "1px solid var(--color-border)",
        borderRadius: 4,
        backgroundColor: "var(--color-steel)",
        cursor: "none",
        transition: "border-color 0.3s, transform 0.3s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Number */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.625rem",
          color: "var(--color-muted)",
          letterSpacing: "0.08em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div
        style={{
          width: 28,
          height: 1,
          backgroundColor: layer === "soft" ? "var(--color-gold)" : "#4a7c9e",
          marginBottom: "1rem",
        }}
      />

      <h4
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.9375rem",
          fontWeight: 500,
          color: "var(--color-white)",
          marginBottom: "0.75rem",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "0.8125rem",
          lineHeight: 1.7,
          color: "var(--color-muted)",
          fontWeight: 300,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

function ConnectingLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0",
        position: "relative",
      }}
      className="hidden lg:flex"
    >
      <svg width="2" height="120" viewBox="0 0 2 120">
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="120"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "var(--color-gold)",
          border: "2px solid var(--color-obsidian)",
        }}
      />
    </div>
  );
}

export function Continuum() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      id="continuum"
      ref={ref}
      style={{
        padding: "8rem 2rem",
        backgroundColor: "var(--color-obsidian)",
        position: "relative",
      }}
    >
      {/* Subtle texture */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
          opacity: bgOpacity,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ marginBottom: "5rem" }}>
          <FadeIn delay={0}>
            <SectionLabel>The Full Continuum</SectionLabel>
          </FadeIn>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: "2rem",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <FadeIn delay={0.1} direction="up">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  color: "var(--color-white)",
                  maxWidth: 560,
                }}
              >
                One principal.
                <br />
                <span style={{ color: "var(--color-dim)" }}>
                  One accountable record.
                </span>
                {/* Perlas holds both at once — which means the engineer who designs your sustainment plan and the auditor who signs off on it report to the same principal. No seam for the blame to fall through. */}
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  color: "var(--color-muted)",
                  maxWidth: 380,
                  fontWeight: 300,
                }}
              >
                This is the layer that protects the signer. 
                Every pillar below exists because someone in 
                your position has to defend this decision in a hearing
                 room, years from now.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Soft layer */}
        <div style={{ marginBottom: "1rem" }}>
          <FadeIn delay={0.1}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Soft Layer — Transaction & Governance
              </span>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: "var(--color-border)",
                }}
              />
            </div>
          </FadeIn>

          <StaggerChildren
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            } as React.CSSProperties}
          >
            {softPillars.map((pillar, i) => (
              <PillarCard
                key={pillar.title}
                {...pillar}
                index={i}
                layer="soft"
              />
            ))}
          </StaggerChildren>
        </div>

        <ConnectingLine />

        {/* Hard layer */}
        <div>
          <FadeIn delay={0.1}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#4a7c9e",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Hard Layer — Platform & Sustainment
              </span>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: "var(--color-border)",
                }}
              />
            </div>
          </FadeIn>

          <StaggerChildren
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            } as React.CSSProperties}
          >
            {hardPillars.map((pillar, i) => (
              <PillarCard
                key={pillar.title}
                {...pillar}
                index={i}
                layer="hard"
              />
            ))}
          </StaggerChildren>
        </div>

        {/* Bottom CTA block */}
        <FadeIn delay={0.2} direction="up">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              marginTop: "5rem",
              padding: "3rem",
              border: "1px solid var(--color-border)",
              borderRadius: 4,
              backgroundColor: "var(--color-obsidian-2)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=1200&q=80"
              // Control room / command center — governance, oversight
              alt="Command and control"
              fill
              style={{ objectFit: "cover", objectPosition: "center", opacity: 0.12 }}
            />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  color: "var(--color-gold)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                The moat
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "var(--color-white)",
                  letterSpacing: "-0.02em",
                }}
              >
                The buyer signs one continuum instead of stitching together a
                consultant, a financier, an integrator, a shipyard, and a law
                firm.
              </p>
            </div>
            <motion.a
              href="#triad"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "0.75rem 2rem",
                backgroundColor: "transparent",
                color: "var(--color-gold)",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: 3,
                fontSize: "0.8125rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: "none",
                whiteSpace: "nowrap",
              }}
            >
              See the Domains →
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
