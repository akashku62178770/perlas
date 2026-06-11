"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../motion/FadeIn";
import { SectionLabel } from "../ui/SectionLabel";
import { NAV_LINKS } from "../../lib/constants";

function TigerMarkFooter() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5rem",
      }}
    >
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
        {/* Outer ring — slow rotate */}
        <motion.circle
          cx="80"
          cy="80"
          r="72"
          stroke="rgba(201,168,76,0.12)"
          strokeWidth="0.5"
          strokeDasharray="3 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "80px 80px" }}
        />

        {/* Pulse rings */}
        {[0, 0.8, 1.6].map((delay, i) => (
          <motion.circle
            key={i}
            cx="80"
            cy="80"
            r="10"
            stroke="rgba(201,168,76,0.4)"
            strokeWidth="0.5"
            fill="none"
            animate={{ r: [10, 65], opacity: [0.5, 0], strokeWidth: [1, 0.3] }}
            transition={{
              duration: 3,
              delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Static inner ring */}
        <circle
          cx="80"
          cy="80"
          r="52"
          stroke="rgba(201,168,76,0.08)"
          strokeWidth="0.5"
        />

        {/* Lines */}
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <line
            key={angle}
            x1="80"
            y1="28"
            x2="80"
            y2="132"
            stroke="rgba(201,168,76,0.1)"
            strokeWidth="0.5"
            style={{ transformOrigin: "80px 80px", transform: `rotate(${angle}deg)` }}
          />
        ))}

        {/* Center */}
        <circle cx="80" cy="80" r="5" fill="var(--color-gold)" />
        <circle cx="80" cy="80" r="2" fill="var(--color-obsidian)" />
      </svg>
    </div>
  );
}

export function Footer() {
  const [formState, setFormState] = useState({
    name: "",
    organisation: "",
    email: "",
    message: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    backgroundColor: "var(--color-steel)",
    border: "1px solid var(--color-border)",
    borderRadius: 3,
    color: "var(--color-light)",
    fontSize: "0.875rem",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color 0.2s",
    cursor: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.6875rem",
    fontFamily: "var(--font-mono)",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--color-muted)",
    marginBottom: "0.5rem",
  };

  return (
    <>
      {/* Contact section */}
      <section
        id="contact"
        style={{
          padding: "8rem 2rem 6rem",
          backgroundColor: "var(--color-obsidian)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: "6rem",
              alignItems: "start",
            }}
            className="flex flex-col lg:grid"
          >
            {/* Left */}
            <div>
              <FadeIn>
                <SectionLabel>Engage Perlas</SectionLabel>
              </FadeIn>
              <FadeIn delay={0.1} direction="up">
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 300,
                    lineHeight: 1.2,
                    letterSpacing: "-0.03em",
                    color: "var(--color-white)",
                    marginTop: "2rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  A nation that can keep what it buys is sovereign.
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.8,
                    color: "var(--color-muted)",
                    fontWeight: 300,
                    marginBottom: "3rem",
                  }}
                >
                  We structure the program, sustain it in-country, prove its
                  economics, and hand your audit board the record before they
                  ask for it. The conversation begins with a single message.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {[
                    { label: "Hub", value: "Manila, Philippines" },
                    { label: "Network", value: "5 continents" },
                    { label: "Response", value: "48-hour acknowledgment" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.875rem 0",
                        borderBottom: "1px solid var(--color-border)",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--color-muted)",
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--color-dim)",
                          fontWeight: 300,
                        }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right — form */}
            <FadeIn delay={0.15} direction="left">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    padding: "4rem 3rem",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: 4,
                    backgroundColor: "rgba(201,168,76,0.04)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.625rem",
                      color: "var(--color-gold)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Transmission Received
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 300,
                      color: "var(--color-white)",
                      lineHeight: 1.4,
                    }}
                  >
                    We will acknowledge within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                    padding: "2.5rem",
                    border: "1px solid var(--color-border)",
                    borderRadius: 4,
                    backgroundColor: "var(--color-obsidian-2)",
                  }}
                >
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                  >
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        style={inputStyle}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Organisation</label>
                      <input
                        type="text"
                        value={formState.organisation}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, organisation: e.target.value }))
                        }
                        style={inputStyle}
                        placeholder="Ministry / Agency"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      style={inputStyle}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Primary Interest</label>
                    <select
                      value={formState.interest}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, interest: e.target.value }))
                      }
                      style={{
                        ...inputStyle,
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b6b72' stroke-width='1.5'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      <option value="">Select domain...</option>
                      <option value="aviation">Aviation — Aerospace MRO</option>
                      <option value="naval">Naval — Fleet Programs</option>
                      <option value="land">Land — Mobility Systems</option>
                      <option value="energy">Energy & Grid Integration</option>
                      <option value="pharma">Pharmaceutical Supply</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: 100,
                      }}
                      placeholder="Describe the program or capability you are considering..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      padding: "0.875rem 2rem",
                      backgroundColor: "var(--color-gold)",
                      color: "var(--color-obsidian)",
                      border: "none",
                      borderRadius: 3,
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      cursor: "none",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Initiate Contact
                  </motion.button>

                  <p
                    style={{
                      fontSize: "0.6875rem",
                      color: "var(--color-muted)",
                      textAlign: "center",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Communications are confidential and handled at principal level.
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer
        style={{
          backgroundColor: "var(--color-obsidian-2)",
          borderTop: "1px solid var(--color-border)",
          padding: "5rem 2rem 3rem",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <TigerMarkFooter />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "3rem",
              marginBottom: "4rem",
            }}
          >
            {/* Brand */}
            <div style={{ maxWidth: 320 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--color-white)",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                PERLAS
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "var(--color-gold)",
                    marginBottom: 2,
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  lineHeight: 1.7,
                  color: "var(--color-muted)",
                  fontWeight: 300,
                  marginBottom: "1rem",
                }}
              >
                Sovereign Capability Facilitator. From the Philippine hub,
                across a network spanning five continents.
              </p>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                }}
              >
                Force in Motion
              </div>
            </div>

            {/* Nav */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  marginBottom: "1rem",
                }}
              >
                Navigation
              </div>
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-dim)",
                      textDecoration: "none",
                      fontWeight: 300,
                      cursor: "none",
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Compliance */}
            <div style={{ maxWidth: 260 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  marginBottom: "1rem",
                }}
              >
                Regulatory Frameworks
              </div>
              {[
                "Section 53(g) RA 9184 IRR",
                "RA 12024 — SRDP Compliance",
                "COA Circular No. 2009-001",
                "NIST & ISO 27001 Cyber",
                "UN · OFAC · EU Sanctions Clean",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-muted)",
                    fontFamily: "var(--font-mono)",
                    padding: "0.3rem 0",
                    borderBottom: "1px solid rgba(34,34,40,0.5)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "2rem",
              borderTop: "1px solid var(--color-border)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "0.6875rem",
                color: "var(--color-muted)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
              }}
            >
              © {new Date().getFullYear()} Perlas. All rights reserved.
            </p>
            <p
              style={{
                fontSize: "0.6875rem",
                color: "var(--color-muted)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
              }}
            >
              Philippine Hub · Multi-Domain · Sovereign First
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
