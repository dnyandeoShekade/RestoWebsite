export function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.28em] ${
        light ? "text-gold" : "text-wine"
      }`}
    >
      <span className={`inline-block h-[2px] w-8 ${light ? "bg-gold" : "bg-wine"}`} />
      {children}
    </p>
  );
}

export function SectionTitle({ children, className = "", light = false }) {
  return (
    <h2
      className={`font-display uppercase leading-[0.95] text-4xl sm:text-5xl lg:text-[64px] ${
        light ? "text-cream" : "text-coal"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
