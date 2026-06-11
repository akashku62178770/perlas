"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DOMAINS } from "../../lib/constants";
import { FadeIn } from "../motion/FadeIn";
import { SectionLabel } from "../ui/SectionLabel"; 

function DomainTab({
  domain,
  isActive,
  onClick,
}: {
  domain: (typeof DOMAINS)[number];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        padding: "1rem 1.5rem",
        background: "none",
        border: "none",
        cursor: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.25rem",
        flex: 1,
        transition: "color 0.3s",
        borderBottom: isActive
          ? `2px solid ${domain.accentColor}`
          : "2px solid var(--color-border)",
      }}
    >
      {isActive && (
        <motion.div
          layoutId="domain-active-bg"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(201,168,76,0.04)",
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      <span
        style={{
          fontSize: "0.625rem",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: isActive ? domain.accentColor : "var(--color-muted)",
          transition: "color 0.3s",
          position: "relative",
        }}
      >
        {domain.domain}
      </span>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.125rem",
          fontWeight: 400,
          color: isActive ? "var(--color-white)" : "var(--color-dim)",
          transition: "color 0.3s",
          position: "relative",
        }}
      >
        {domain.label}
      </span>
    </button>
  );
}

function DomainContent({ domain }: { domain: (typeof DOMAINS)[number] }) {
  return (
    <motion.div
      key={domain.key}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "start",
        padding: "3rem 0",
      }}
      className="flex flex-col lg:grid"
    >
      {/* Left — main content */}
      <div>
        <div
          style={{
            fontSize: "0.6875rem",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: domain.accentColor,
            marginBottom: "1.5rem",
          }}
        >
          Sovereign Outcome
        </div>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 300,
            lineHeight: 1.3,
            color: "var(--color-white)",
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          {domain.tagline}
        </h3>

        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.8,
            color: "var(--color-dim)",
            fontWeight: 300,
            marginBottom: "2.5rem",
          }}
        >
          {domain.description}
        </p>

        <div
          style={{
            padding: "1.5rem",
            border: `1px solid rgba(${
              domain.key === "sky"
                ? "201,168,76"
                : domain.key === "land"
                ? "122,138,106"
                : "74,124,158"
            },0.2)`,
            borderRadius: 3,
            backgroundColor: `rgba(${
              domain.key === "sky"
                ? "201,168,76"
                : domain.key === "land"
                ? "122,138,106"
                : "74,124,158"
            },0.04)`,
          }}
        >
          <div
            style={{
              fontSize: "0.6875rem",
              fontFamily: "var(--font-mono)",
              color: domain.accentColor,
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            The Result
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-light)",
              lineHeight: 1.6,
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            {domain.outcome}
          </p>
        </div>
      </div>

      {/* Right — assets + engagement */}
      <div>
        <div
          style={{
            fontSize: "0.6875rem",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: "1.25rem",
          }}
        >
          Capability Assets
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          {domain.assets.map((asset, i) => (
            <motion.div
              key={asset}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
                padding: "0.875rem 0",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  backgroundColor: domain.accentColor,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-dim)",
                  fontWeight: 300,
                }}
              >
                {asset}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Engagement script preview */}
        <div
          style={{
            padding: "1.25rem",
            border: "1px solid var(--color-border)",
            borderRadius: 3,
            backgroundColor: "var(--color-steel)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              fontSize: "0.5625rem",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
            }}
          >
            Field Script
          </div>
          <p
            style={{
              fontSize: "0.8125rem",
              lineHeight: 1.7,
              color: "var(--color-dim)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            &ldquo;You already know the platform will perform. The question
            that decides this program is the one that gets asked in year four,
            when the initial logistics support has lapsed and a single component
            sends the asset into a foreign queue. We close that exposure at the
            structure stage.&rdquo;
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Triad() {
  const [active, setActive] = useState<"sky" | "land" | "sea">("sky");
  const activeDomain = DOMAINS.find((d) => d.key === active)!;

  return (
    <section
      id="triad"
      style={{
        padding: "8rem 2rem",
        backgroundColor: "var(--color-obsidian-2)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <FadeIn>
            <SectionLabel>The Triad of Defense Power</SectionLabel>
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
              }}
            >
              Multi-domain.
              <span style={{ color: "var(--color-dim)" }}> One continuum.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Domain tabs */}
        <FadeIn delay={0.15}>
          <div
            style={{
              display: "flex",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {DOMAINS.map((domain) => (
              <DomainTab
                key={domain.key}
                domain={domain}
                isActive={active === domain.key}
                onClick={() => setActive(domain.key as "sky" | "land" | "sea")}
              />
            ))}
          </div>
        </FadeIn>

        {/* Domain content */}
        <AnimatePresence mode="wait">
          <DomainContent key={active} domain={activeDomain} />
        </AnimatePresence>
      </div>
    </section>
  );
}
