"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../lib/constants";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, border-color 0.4s ease",
          backgroundColor: scrolled
            ? "rgba(8, 8, 9, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(34,34,40,0.8)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 2rem",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "none",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--color-white)",
              }}
            >
              PERLAS
            </motion.div>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--color-gold)",
                marginBottom: 2,
              }}
            />
          </a>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  position: "relative",
                  padding: "0.4rem 0.85rem",
                  fontSize: "0.8125rem",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  color:
                    activeLink === link.href
                      ? "var(--color-gold-light)"
                      : "var(--color-dim)",
                  transition: "color 0.2s ease",
                  cursor: "none",
                  textTransform: "uppercase",
                }}
              >
                {hoveredLink === link.href && (
                  <motion.div
                    layoutId="nav-hover"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 4,
                      backgroundColor: "rgba(201,168,76,0.06)",
                      border: "1px solid rgba(201,168,76,0.12)",
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex"
            style={{
              padding: "0.45rem 1.1rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--color-obsidian)",
              backgroundColor: "var(--color-gold)",
              borderRadius: 3,
              cursor: "none",
              transition: "background-color 0.2s",
            }}
          >
            Engage
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden"
            style={{
              background: "none",
              border: "none",
              padding: "0.5rem",
              cursor: "none",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{
                display: "block",
                width: 22,
                height: 1,
                backgroundColor: "var(--color-light)",
              }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{
                display: "block",
                width: 22,
                height: 1,
                backgroundColor: "var(--color-light)",
              }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{
                display: "block",
                width: 22,
                height: 1,
                backgroundColor: "var(--color-light)",
              }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: "rgba(8,8,9,0.97)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--color-border)",
              padding: "1.5rem 2rem 2rem",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    padding: "0.8rem 0",
                    fontSize: "1.1rem",
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    color: "var(--color-light)",
                    borderBottom: "1px solid var(--color-border)",
                    cursor: "none",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
