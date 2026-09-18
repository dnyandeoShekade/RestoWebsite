"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import MenuCard from "./MenuCard";
import { SectionLabel, SectionTitle } from "./SectionBits";
import { useSite } from "./SiteContext";
import { menuFilters, menuItems } from "@/data/menu";

export default function SignatureDishes() {
  const { addToCart } = useSite();
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? menuItems : menuItems.filter((m) => m.category === filter);
  const signature = menuItems.slice(0, 3);

  return (
    <section id="menu" className="relative scroll-mt-20 overflow-hidden bg-wine py-16 sm:py-20 lg:py-28">
      <p aria-hidden className="pointer-events-none absolute right-0 top-6 select-none font-display text-[22vw] uppercase leading-none text-cream/[0.06] sm:text-[12vw]">Menu</p>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal><SectionLabel light>House favorites</SectionLabel><SectionTitle light className="mt-3 max-w-2xl sm:mt-4">Flavors you&apos;ll think about tomorrow</SectionTitle></Reveal>
          <Reveal delay="reveal-delay-1"><p className="max-w-sm text-sm leading-relaxed text-cream/75 sm:text-[15px]">Three dishes built our name. The full menu keeps people coming back every week.</p></Reveal>
        </div>

        <Reveal delay="reveal-delay-1">
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {signature.map((d) => (
              <MenuCard key={d.id} dish={d} />
            ))}
          </div>
        </Reveal>

        <Reveal delay="reveal-delay-2">
          <div className="mt-10 rounded-[1.4rem] bg-winedark/70 p-4 sm:mt-16 sm:rounded-[2rem] sm:p-10">
            <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
              <h3 className="font-display text-[clamp(1.65rem,7.5vw,1.9rem)] uppercase leading-tight text-cream sm:text-3xl">The full lineup</h3>
              <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto scroll-smooth px-4 pb-1 sm:mx-0 sm:px-0" role="tablist" aria-label="Filter menu by category">
                {menuFilters.map((f) => (
                  <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)} className={`shrink-0 snap-start rounded-full px-4 py-2 text-[11px] font-extrabold uppercase tracking-widest transition-all active:scale-95 sm:px-5 sm:py-2.5 sm:text-[12px] ${filter === f ? "bg-gold text-coal shadow-[0_6px_18px_rgba(244,166,35,0.4)]" : "border border-cream/10 bg-cream/10 text-cream/80 hover:bg-cream/20 hover:text-cream"}`}>{f}</button>
                ))}
              </div>
            </div>
            <p aria-live="polite" className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/50 sm:hidden">{shown.length} {shown.length === 1 ? "dish" : "dishes"} · {filter}</p>
            <div className="mt-4 grid gap-2.5 sm:mt-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((m) => (
                <div key={m.id} className="animate-fade-in flex items-center gap-3 rounded-2xl bg-cream/[0.06] p-2.5 transition-colors hover:bg-cream/[0.12] active:bg-cream/[0.14] sm:gap-4 sm:rounded-3xl sm:p-3">
                  <Image src={m.image} alt={m.name} width={160} height={160} sizes="72px" className="h-[68px] w-[68px] shrink-0 rounded-xl object-cover sm:h-20 sm:w-20 sm:rounded-2xl" loading="lazy" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-[15px] uppercase leading-[1.1] text-cream sm:text-lg">{m.name}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold/90 sm:text-[11px] sm:tracking-widest">{m.category} · ${m.price}</p>
                  </div>
                  <button onClick={() => addToCart(m)} aria-label={`Add ${m.name} to order`} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-coal shadow-[0_6px_16px_rgba(244,166,35,0.35)] transition-transform hover:scale-110 active:scale-95 sm:h-11 sm:w-11"><Plus size={18} /></button>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
