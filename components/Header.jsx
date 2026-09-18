"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Flame, ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { useSite } from "./SiteContext";
import MobileMenu from "./MobileMenu";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Catering", href: "#catering" },
  { label: "Journal", href: "#journal" },
];

export default function Header() {
  const { count, setCartOpen, setBookingOpen, mobileOpen, setMobileOpen, toast } = useSite();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 shadow-[0_8px_30px_rgba(36,16,13,0.12)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="#home" className="flex items-center gap-2.5" aria-label="Ember and Crust home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-wine text-cream">
              <Flame size={20} strokeWidth={2.2} />
            </span>
            <span
              className={`font-display text-lg uppercase leading-none tracking-wide sm:text-xl ${
                scrolled ? "text-coal" : "text-cream"
              }`}
            >
              Ember <span className="text-gold">&</span> Crust
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`link-underline text-[13px] font-bold uppercase tracking-[0.16em] transition-colors ${
                  scrolled ? "text-coal hover:text-wine" : "text-cream/90 hover:text-gold"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className={`relative grid h-11 w-11 place-items-center rounded-full border transition-all hover:-translate-y-0.5 ${
                scrolled
                  ? "border-coal/15 bg-white/70 text-coal hover:border-wine hover:text-wine"
                  : "border-cream/25 bg-cream/10 text-cream backdrop-blur hover:border-gold hover:text-gold"
              }`}
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag size={19} />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 grid h-6 min-w-6 place-items-center rounded-full bg-gold px-1 text-[11px] font-extrabold text-coal">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setBookingOpen(true)}
              className="hidden rounded-full bg-gold px-6 py-3 text-[13px] font-extrabold uppercase tracking-wider text-coal shadow-[0_10px_24px_rgba(244,166,35,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#ffb63d] sm:inline-flex"
            >
              Book a Table
            </button>
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex rounded-full bg-gold px-4 py-2.5 text-[12px] font-extrabold uppercase tracking-wider text-coal sm:hidden"
            >
              Book
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
                scrolled ? "text-coal" : "text-cream"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        <MobileMenu />
      </header>

      {toast && (
        <div className="animate-pop-in fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-coal px-5 py-3 text-sm font-semibold text-cream shadow-2xl">
          {toast}
        </div>
      )}
    </>
  );
}
