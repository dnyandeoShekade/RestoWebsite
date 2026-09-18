"use client";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SectionLabel, SectionTitle } from "./SectionBits";
import { useSite } from "./SiteContext";
import { IMG } from "@/data/images";

const cards = [
  { label: "10–200 guests", title: "Office Events", image: IMG.office },
  { label: "Birthdays & more", title: "Private Parties", image: IMG.party },
  { label: "Fri–Sun spreads", title: "Weekend Celebrations", image: IMG.table },
];

export default function Catering() {
  const { setBookingOpen } = useSite();
  return (
    <section id="catering" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal><SectionLabel> Catering</SectionLabel><SectionTitle className="mt-4 max-w-2xl">Catering for every kind of celebration</SectionTitle></Reveal>
          <Reveal delay="reveal-delay-1"><p className="max-w-sm text-[15px] leading-relaxed text-coal/70">From office lunches to birthday dinners, we bring the good stuff to your table.</p></Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : ""}>
              <article className="group relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(36,16,13,0.12)]">
                <Image src={c.image} alt={c.title} width={700} height={800} className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/85 via-coal/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-coal">{c.label}</span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <h3 className="font-display text-3xl uppercase leading-none text-cream">{c.title}</h3>
                  <button onClick={() => setBookingOpen(true)} aria-label={`Enquire about ${c.title}`} className="grid h-12 w-12 place-items-center rounded-full bg-gold text-coal transition-transform group-hover:rotate-45"><ArrowUpRight size={20} /></button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal><div className="mt-10 text-center"><button onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-wine px-8 py-4 text-[13px] font-extrabold uppercase tracking-wider text-cream transition-all hover:-translate-y-0.5 hover:bg-winedark">Explore Catering <ArrowRight size={16} /></button></div></Reveal>
      </div>
    </section>
  );
}
