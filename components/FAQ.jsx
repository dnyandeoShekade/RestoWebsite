"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { SectionLabel } from "./SectionBits";
import { faqs } from "@/data/content";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Reveal><SectionLabel>FAQ</SectionLabel><h2 className="font-display mt-4 uppercase leading-[0.95] text-coal text-4xl sm:text-5xl lg:text-[58px]">Everything you want to know.</h2></Reveal>
          <Reveal delay="reveal-delay-1"><p className="mt-5 max-w-sm text-[15px] leading-relaxed text-coal/70">Still curious? Call (512) 555-0184 and a human — a friendly one — will help you out.</p>
            <div className="mt-6 rounded-3xl bg-coal p-6 text-cream"><p className="font-hand text-2xl text-gold">psst… walk-ins welcome</p><p className="mt-1 text-sm text-cream/70">Weekdays before 6PM almost always have a table waiting.</p></div>
          </Reveal>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : ""}>
                <div className={`overflow-hidden rounded-3xl border transition-colors ${isOpen ? "border-wine/20 bg-white shadow-[0_18px_40px_rgba(167,7,22,0.1)]" : "border-coal/10 bg-white/60"}`}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-display text-lg uppercase tracking-wide text-coal sm:text-xl">{f.q}</span>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? "rotate-45 bg-wine text-cream" : "bg-parchment text-coal"}`}><Plus size={18} /></span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden"><p className="px-6 pb-6 text-[15px] leading-relaxed text-coal/70">{f.a}</p></div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
