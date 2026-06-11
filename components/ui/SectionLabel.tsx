interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.3rem 0.75rem",
        border: "1px solid rgba(201,168,76,0.2)",
        borderRadius: 2,
        backgroundColor: "rgba(201,168,76,0.04)",
        fontSize: "0.6875rem",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--color-gold)",
        fontFamily: "var(--font-mono)",
      }}
    >
      <span
        style={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--color-gold)",
          display: "inline-block",
        }}
      />
      {children}
    </div>
  );
}
