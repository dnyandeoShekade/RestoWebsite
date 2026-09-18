"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SectionLabel, SectionTitle } from "./SectionBits";
import { categories } from "@/data/menu";

export default function CategorySection() {
  return (
    <section className="overflow-hidden bg-cream py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal variant="left">
            <SectionLabel>Explore the menu</SectionLabel>
            <SectionTitle className="mt-3 max-w-xl sm:mt-4">Your next craving starts here</SectionTitle>
          </Reveal>
          <Reveal variant="right" delay="reveal-delay-1">
            <p className="max-w-sm text-sm leading-relaxed text-coal/70 sm:text-[15px]">
              From crispy favorites to slow-crafted classics, find something worth coming back for.
            </p>
          </Reveal>
        </div>
      </div>
      <Reveal variant="up" delay="reveal-delay-1">
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mt-12 sm:gap-5 sm:px-6 lg:px-[max(1rem,calc((100vw-80rem)/2+2rem))]">
          {categories.map((c) => (
            <a key={c.name} href="#menu" className="group w-40 shrink-0 snap-start sm:w-52">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-parchment p-2.5 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_50px_rgba(167,7,22,0.18)] active:scale-[0.98] sm:rounded-[2rem] sm:p-3">
                <div className="overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem]">
                  <Image src={c.image} alt={c.name} width={400} height={400} sizes="(max-width: 640px) 160px, 208px" className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-52" loading="lazy" />
                </div>
                <div className="flex items-center justify-between gap-2 px-2 pb-2 pt-3 sm:pt-4">
                  <div className="min-w-0">
                    <p className="font-display truncate text-base uppercase leading-none text-coal transition-colors group-hover:text-wine sm:text-lg">{c.name}</p>
                    <p className="mt-1 truncate text-[11px] font-semibold uppercase tracking-widest text-coal/50 sm:text-xs">{c.blurb}</p>
                  </div>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-coal text-cream transition-all group-hover:bg-wine group-hover:text-gold sm:h-9 sm:w-9"><ArrowUpRight size={17} /></span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
