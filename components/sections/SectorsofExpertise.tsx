"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "../motion/FadeIn";
import { StaggerChildren, itemVariants } from "../motion/StaggerChildren";
import { SectionLabel } from "../ui/SectionLabel";
import { SECTORS_OF_EXPERTISE } from "../../lib/constants";

function SectorCard({
  sector,
  index,
}: {
  sector: (typeof SECTORS_OF_EXPERTISE)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      initial="rest"
      animate="rest"
      style={{
        position: "relative",
        borderRadius: 6,
        width: "100%",
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-steel)",
        overflow: "hidden",
        cursor: "none",
      }}
    >
      {/* Image header */}
      <div style={{ position: "relative", height: 180, width: "100%", overflow: "hidden" }}>
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.06 },
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={sector.image}
            alt={sector.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>

        {/* Grayscale + gold tint wash, lifts on hover */}
        <motion.div
          variants={{
            rest: { opacity: 0.85 },
            hover: { opacity: 0.55 },
          }}
          transition={{ duration: 0.4 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "var(--color-obsidian)",
            mixBlendMode: "color",
          }}
        />

        {/* Bottom fade into card body */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--color-steel) 0%, rgba(22,22,26,0.1) 55%, transparent 100%)",
          }}
        />

        {/* Top-left domain tag */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            padding: "0.25rem 0.6rem",
            borderRadius: 2,
            border: "1px solid rgba(201,168,76,0.3)",
            backgroundColor: "rgba(8,8,9,0.6)",
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.5625rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
            }}
          >
            {sector.tag}
          </span>
        </div>

        {/* Number, bottom-right of image */}
        <div
          style={{
            position: "absolute",
            bottom: "0.75rem",
            right: "1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.625rem",
            color: "rgba(212,212,222,0.4)",
            letterSpacing: "0.08em",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            width: 24,
            height: 1,
            backgroundColor: "var(--color-gold)",
            marginBottom: "0.875rem",
            opacity: 0.6,
          }}
        />
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.0625rem",
            fontWeight: 500,
            color: "var(--color-white)",
            letterSpacing: "-0.01em",
            marginBottom: "0.5rem",
          }}
        >
          {sector.title}
        </h3>
        <p
          style={{
            fontSize: "0.8125rem",
            lineHeight: 1.6,
            color: "var(--color-muted)",
            fontWeight: 300,
          }}
        >
          {sector.description}
        </p>
      </div>

      {/* Hover border glow */}
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 6,
          border: "1px solid rgba(201,168,76,0.4)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

export function SectorsOfExpertise() {
  return (
    <section
      id="sectors"
      style={{
        padding: "8rem 2rem",
        backgroundColor: "var(--color-obsidian)",
        borderTop: "1px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <FadeIn>
            <SectionLabel>Markets We Serve</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1} direction="up">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--color-white)",
                marginTop: "2rem",
                maxWidth: 640,
              }}
            >
              Sectors of <span style={{ color: "var(--color-gold)" }}>Expertise</span>
            </h2>
          </FadeIn>
        </div>

        {/* Grid */}
        <StaggerChildren
          style={
            {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            } as React.CSSProperties
          }
        >
          {SECTORS_OF_EXPERTISE.map((sector, i) => (
            <SectorCard key={sector.key} sector={sector} index={i} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}