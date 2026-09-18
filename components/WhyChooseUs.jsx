"use client";
import { Flame, Leaf, HandPlatter, Armchair } from "lucide-react";
import Reveal from "./Reveal";
import { SectionLabel, SectionTitle } from "./SectionBits";

const feats = [
  { n: "01", icon: Flame, title: "Big Flavor", text: "Live fire, bold seasoning, and sauces made every single morning." },
  { n: "02", icon: Leaf, title: "Fresh Ingredients", text: "Produce from Texas farms, dough proved daily, never frozen." },
  { n: "03", icon: HandPlatter, title: "Fast Friendly Service", text: "Fired in minutes, served with a smile — lunch or late night." },
  { n: "04", icon: Armchair, title: "A Place to Stay", text: "Warm light, loud laughs, long tables built for staying awhile." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-winedark py-20 lg:py-28">
      <p className="pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap font-display text-[13vw] uppercase leading-none text-cream/[0.04]">Good times</p>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionLabel light>Why regulars return</SectionLabel><SectionTitle light className="mt-4">Made for good times</SectionTitle></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {feats.map((f, i) => (
            <Reveal key={f.n} delay={i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : i === 3 ? "reveal-delay-3" : ""}>
              <div className="group h-full rounded-[1.8rem] border border-cream/10 bg-cream/[0.05] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:bg-cream/[0.09]">
                <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-wine text-gold transition-colors group-hover:bg-gold group-hover:text-coal"><f.icon size={22} /></span><span className="font-display text-lg text-cream/25">{f.n}</span></div>
                <h3 className="font-display mt-6 text-2xl uppercase text-cream">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
