"use client";
import Link from "next/link";
import { useSite } from "./SiteContext";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Catering", href: "#catering" },
  { label: "Journal", href: "#journal" },
];

export default function MobileMenu() {
  const { mobileOpen, setMobileOpen, setBookingOpen } = useSite();
  return (
    <div className={`overflow-hidden transition-all duration-300 lg:hidden ${mobileOpen ? "max-h-[440px]" : "max-h-0"}`}>
      <nav className="mx-4 mb-4 space-y-1 rounded-3xl bg-coal p-4 shadow-2xl" aria-label="Mobile">
        {links.map((l) => (
          <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="block rounded-2xl px-4 py-3 font-display text-2xl uppercase tracking-wide text-cream transition-colors hover:bg-wine hover:text-gold">
            {l.label}
          </Link>
        ))}
        <button onClick={() => { setMobileOpen(false); setBookingOpen(true); }} className="mt-2 w-full rounded-2xl bg-gold px-4 py-3.5 text-sm font-extrabold uppercase tracking-wider text-coal">
          Book a Table
        </button>
      </nav>
    </div>
  );
}

