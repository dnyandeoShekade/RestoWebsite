"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { SectionLabel, SectionTitle } from "./SectionBits";
import { posts } from "@/data/content";
import { useSite } from "./SiteContext";

export default function Journal() {
  const { showToast } = useSite();
  return (
    <section id="journal" className="scroll-mt-20 bg-parchment py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Reveal><SectionLabel>Journal</SectionLabel><SectionTitle className="mt-4">Inside the kitchen</SectionTitle></Reveal>
          <Reveal delay="reveal-delay-1"><button onClick={() => showToast("Full journal coming soon")} className="group inline-flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-widest text-wine">All stories <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></button></Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : ""}>
              <article className="group h-full overflow-hidden rounded-[2rem] bg-cream shadow-[0_18px_45px_rgba(36,16,13,0.1)] transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image src={p.image} alt={p.title} width={700} height={460} className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <span className="absolute left-4 top-4 rounded-full bg-coal/80 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-gold backdrop-blur">{p.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-coal/45">{p.date}</p>
                  <h3 className="font-display mt-2 text-2xl uppercase leading-tight text-coal transition-colors group-hover:text-wine">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-coal/60">{p.excerpt}</p>
                  <button onClick={() => showToast("Story opening soon")} className="mt-4 inline-flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-widest text-wine">Read more <ArrowRight size={15} /></button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
