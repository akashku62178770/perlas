"use client";
import { motion } from "framer-motion";
// import { cn } from "..//lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  size = "md",
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    textDecoration: "none",
    border: "1px solid",
    borderRadius: 3,
    cursor: "none",
    transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
    fontSize: size === "sm" ? "0.75rem" : size === "lg" ? "0.9375rem" : "0.8125rem",
    padding:
      size === "sm"
        ? "0.4rem 0.9rem"
        : size === "lg"
        ? "0.85rem 2rem"
        : "0.6rem 1.4rem",
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--color-gold)",
      borderColor: "var(--color-gold)",
      color: "var(--color-obsidian)",
    },
    ghost: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: "var(--color-dim)",
    },
    outline: {
      backgroundColor: "transparent",
      borderColor: "rgba(201,168,76,0.3)",
      color: "var(--color-gold)",
    },
  };

  const props = {
    style: { ...baseStyle, ...variantStyles[variant] },
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a href={href} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...props}>
      {children}
    </motion.button>
  );
}
