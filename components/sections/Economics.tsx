"use client";
import { motion } from "framer-motion";
import { FadeIn } from "../motion/FadeIn";
import { StaggerChildren, itemVariants } from "../motion/StaggerChildren";
import { SectionLabel } from "../ui/SectionLabel";
import { ECONOMICS_SECTORS } from "../../lib/constants";

function LCCFormula() {
  const terms = [
    { symbol: "C_acq", label: "Acquisition cost" },
    { symbol: "C_ops", label: "Annual operations" },
    { symbol: "C_mnt", label: "Maintenance & overhaul" },
    { symbol: "S_mro", label: "In-country MRO savings" },
  ];

  return (
    <div
      style={{
        padding: "2.5rem",
        border: "1px solid var(--color-border)",
        borderRadius: 4,
        backgroundColor: "var(--color-steel)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background mono text */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.5625rem",
          color: "var(--color-border-light)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        LCC MODEL
      </div>

      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6875rem",
          color: "var(--color-gold)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}
      >
        Lifecycle Cost Framework
      </div>

      {/* Formula display */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(0.75rem, 1.5vw, 0.9375rem)",
          color: "var(--color-light)",
          marginBottom: "2rem",
          lineHeight: 1.6,
          overflowX: "auto",
        }}
      >
        <span style={{ color: "var(--color-dim)" }}>LCC = </span>
        <span style={{ color: "var(--color-white)" }}>C</span>
        <sub style={{ color: "var(--color-gold)", fontSize: "0.7em" }}>acq</sub>
        <span style={{ color: "var(--color-dim)" }}> + Σ </span>
        <span style={{ color: "var(--color-dim)" }}>(</span>
        <span style={{ color: "var(--color-white)" }}>C</span>
        <sub style={{ color: "var(--color-gold)", fontSize: "0.7em" }}>ops</sub>
        <span style={{ color: "var(--color-dim)" }}> + </span>
        <span style={{ color: "var(--color-white)" }}>C</span>
        <sub style={{ color: "var(--color-gold)", fontSize: "0.7em" }}>mnt</sub>
        <span style={{ color: "#4a7c9e" }}> − S</span>
        <sub style={{ color: "#4a7c9e", fontSize: "0.7em" }}>local MRO</sub>
        <span style={{ color: "var(--color-dim)" }}>) / (1 + r)</span>
        <sup style={{ color: "var(--color-dim)", fontSize: "0.7em" }}>t</sup>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.75rem",
        }}
      >
        {terms.map((term, i) => (
          <motion.div
            key={term.symbol}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "flex-start",
              padding: "0.6rem 0",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <code
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: i === 3 ? "#4a7c9e" : "var(--color-gold)",
                flexShrink: 0,
                minWidth: 40,
              }}
            >
              {term.symbol}
            </code>
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--color-muted)",
                lineHeight: 1.4,
              }}
            >
              {term.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          backgroundColor: "rgba(74,124,158,0.06)",
          border: "1px solid rgba(74,124,158,0.15)",
          borderRadius: 3,
        }}
      >
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-dim)",
            lineHeight: 1.6,
            fontStyle: "italic",
          }}
        >
          The decisive term is S
          <sub style={{ fontSize: "0.75em" }}>local MRO</sub>. By siting
          maintenance in-country, Perlas generates a recurring saving that
          compounds across every year of the platform's life.
        </p>
      </div>
    </div>
  );
}

export function Economics() {
  return (
    <section
      id="economics"
      style={{
        padding: "8rem 2rem",
        backgroundColor: "var(--color-obsidian)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "5rem" }}>
          <FadeIn>
            <SectionLabel>Sovereign Economic Infrastructure</SectionLabel>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              marginTop: "2rem",
              alignItems: "end",
            }}
            className="flex flex-col lg:grid"
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
                }}
              >
                Civilian infrastructure
                <br />
                <span style={{ color: "var(--color-dim)" }}>
                  is national security
                </span>
                <br />
                by another name.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  color: "var(--color-muted)",
                  fontWeight: 300,
                }}
              >
                A power grid, a rail spine, a pharmaceutical supply chain, a
                food and commodity network—each is a Sovereign Industrial Asset
                whose failure is a strategic event. The continuum that governs a
                defense program governs a resource program identically.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Sectors grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            border: "1px solid var(--color-border)",
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: "5rem",
          }}
        >
          {ECONOMICS_SECTORS.map((sector, i) => (
            <FadeIn key={sector.title} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={{ backgroundColor: "rgba(201,168,76,0.04)" }}
                style={{
                  padding: "2rem",
                  backgroundColor: "var(--color-steel)",
                  borderRight: "1px solid var(--color-border)",
                  height: "100%",
                  cursor: "none",
                  transition: "background-color 0.3s",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "1.5rem",
                    color: "var(--color-gold)",
                    marginBottom: "1.25rem",
                    opacity: 0.7,
                  }}
                >
                  {sector.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--color-white)",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {sector.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    lineHeight: 1.7,
                    color: "var(--color-muted)",
                    fontWeight: 300,
                  }}
                >
                  {sector.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* LCC Model */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="flex flex-col lg:grid"
        >
          <FadeIn direction="right">
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  color: "var(--color-gold)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                Hook 1 — The Economics Lead
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 300,
                  lineHeight: 1.3,
                  color: "var(--color-white)",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                The cheapest platform to buy is rarely the cheapest platform to
                keep.
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  color: "var(--color-dim)",
                  fontWeight: 300,
                  marginBottom: "2rem",
                }}
              >
                We prove which is which—before you sign. The Lifecycle Cost
                model uses your own operational data to demonstrate a lower total
                burden under localized sustainment, even when acquisition price
                is identical to a foreign offer.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.65rem 1.5rem",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: 3,
                  color: "var(--color-gold)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  cursor: "none",
                }}
              >
                Request an LCC Model
              </motion.a>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <LCCFormula />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
