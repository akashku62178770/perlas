"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../motion/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { AUDIT_OBJECTIONS } from "../../lib/constants";
import Image from "next/image";

function BlockchainViz() {
  const blocks = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0",
        padding: "1.5rem 0",
        overflowX: "auto",
      }}
    >
      {blocks.map((i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.15,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              width: 80,
              border: "1px solid var(--color-border-light)",
              borderRadius: 3,
              padding: "0.75rem 0.5rem",
              backgroundColor: "var(--color-steel)",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.5rem",
                color: "var(--color-gold)",
                letterSpacing: "0.06em",
                marginBottom: "0.3rem",
              }}
            >
              BLOCK {String(i + 1).padStart(3, "0")}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.5rem",
                color: "var(--color-muted)",
                wordBreak: "break-all",
                lineHeight: 1.3,
              }}
            >
              {["a4f2", "9c1b", "3e7d", "8f0a", "2b5c"][i]}...
            </div>
            <div
              style={{
                marginTop: "0.4rem",
                width: "100%",
                height: 1,
                backgroundColor: "var(--color-border)",
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.4375rem",
                color: "var(--color-muted)",
                marginTop: "0.3rem",
              }}
            >
              ✓ VERIFIED
            </div>
          </motion.div>

          {/* Connector */}
          {i < blocks.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15 + 0.1,
                duration: 0.3,
                ease: "easeOut",
              }}
              style={{
                width: 24,
                height: 1,
                backgroundColor: "var(--color-gold)",
                opacity: 0.3,
                transformOrigin: "left",
                flexShrink: 0,
              }}
            />
          )}
        </div>
      ))}

      {/* COA read-only tag */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          marginLeft: 16,
          padding: "0.4rem 0.75rem",
          border: "1px dashed rgba(201,168,76,0.3)",
          borderRadius: 2,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.5rem",
            color: "var(--color-gold)",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          COA · READ ONLY
        </div>
      </motion.div>
    </div>
  );
}

function ObjectionCard({
  objection,
  isOpen,
  onToggle,
}: {
  objection: (typeof AUDIT_OBJECTIONS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        border: "1px solid",
        borderColor: isOpen ? "rgba(201,168,76,0.25)" : "var(--color-border)",
        borderRadius: 4,
        overflow: "hidden",
        transition: "border-color 0.3s",
        backgroundColor: isOpen ? "rgba(201,168,76,0.02)" : "var(--color-steel)",
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "1.5rem 2rem",
          background: "none",
          border: "none",
          cursor: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
          textAlign: "left",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              color: "var(--color-gold)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            {objection.tag}
          </div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "var(--color-white)",
            }}
          >
            &ldquo;{objection.question}&rdquo;
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 24,
            height: 24,
            border: "1px solid",
            borderColor: isOpen ? "var(--color-gold)" : "var(--color-border)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginTop: "0.25rem",
          }}
        >
          <span
            style={{
              fontSize: "1rem",
              color: isOpen ? "var(--color-gold)" : "var(--color-muted)",
              lineHeight: 1,
            }}
          >
            +
          </span>
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 2rem 2rem",
                borderTop: "1px solid var(--color-border)",
                paddingTop: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-gold)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Approved Response
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  color: "var(--color-dim)",
                  fontWeight: 300,
                  maxWidth: 680,
                }}
              >
                {objection.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AuditShield() {
  const [openId, setOpenId] = useState<string | null>("broker");

  return (
    <section
      id="audit"
      style={{
        padding: "8rem 2rem",
        backgroundColor: "var(--color-obsidian-2)",
        borderTop: "1px solid var(--color-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      {/* <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(201,168,76,0.04) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      /> */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <Image
          // src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
          src="/cap-forensic.jpg"
          // Server room / data infrastructure — audit, ledger context
          alt=""
          fill
          style={{ objectFit: "cover", opacity: 0.4, filter: "grayscale(100%)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 90% 10%, rgba(201,168,76,0.04) 0%, transparent 50%)",
          }}
        />
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginBottom: "5rem",
            alignItems: "end",
          }}
          className="flex flex-col lg:grid"
        >
          <div>
            <FadeIn>
              <SectionLabel>The Audit Shield</SectionLabel>
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
                We pre-clear your audit board before your committee ever sits down.
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <div>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  color: "var(--color-muted)",
                  fontWeight: 300,
                  marginBottom: "2rem",
                }}
              >
                Every Acquisition Director operates under a comptroller, a
                legislature, and an anti-corruption body. The downside of a
                procurement scandal is career-ending. The upside of a marginally
                better deal is nothing by comparison.
                
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {[
                  "Section 53(g) RA 9184 IRR — G2G velocity",
                  "RA 12024 — SRDP offset pre-structuring",
                  "COA Circular 2009-001 — Audit trail architecture",
                  "Consortium blockchain ledger — Read-only COA access",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.8125rem",
                      color: "var(--color-dim)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: "0.1em" }}>
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Blockchain viz */}
        <FadeIn delay={0.1}>
          <div
            style={{
              marginBottom: "3rem",
              padding: "1.5rem 2rem",
              border: "1px solid var(--color-border)",
              borderRadius: 4,
              backgroundColor: "var(--color-steel)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.625rem",
                color: "var(--color-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Consortium Blockchain Ledger — Live Audit View
            </div>
            <BlockchainViz />
          </div>
        </FadeIn>

        {/* Objections */}
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {AUDIT_OBJECTIONS.map((obj, i) => (
            <FadeIn key={obj.id} delay={i * 0.1}>
              <ObjectionCard
                objection={obj}
                isOpen={openId === obj.id}
                onToggle={() => setOpenId(openId === obj.id ? null : obj.id)}
              />
            </FadeIn>
          ))}
        </div> */}
      </div>
    </section>
  );
}
