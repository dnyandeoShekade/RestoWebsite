"use client";
import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "gold",
  className = "",
  type,
  ariaLabel,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide uppercase text-[13px] px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const styles = {
    gold: "bg-gold text-coal shadow-[0_10px_24px_rgba(244,166,35,0.35)] hover:shadow-[0_14px_30px_rgba(244,166,35,0.45)] hover:bg-[#ffb63d]",
    wine: "bg-wine text-cream shadow-[0_10px_24px_rgba(167,7,22,0.35)] hover:bg-winedark",
    cream: "bg-cream text-wine hover:bg-white",
    outline: "border-2 border-cream/60 text-cream hover:bg-cream hover:text-wine",
    outlineDark: "border-2 border-coal/20 text-coal hover:border-wine hover:text-wine",
  };
  const cls = `${base} ${styles[variant] || styles.gold} ${className}`;
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type || "button"} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
