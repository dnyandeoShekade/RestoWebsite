"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import Reveal from "./Reveal";
import { IMG } from "@/data/images";

export default function ExperienceSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="bg-cream px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]">
          <Image src={IMG.kitchen} alt="Ember and Crust kitchen with chefs at work" width={1800} height={900} className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[600px]" loading="lazy" />
          <div className="absolute inset-0 bg-coal/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-gold">Inside the fire</p>
            <h2 className="font-display mx-auto mt-4 max-w-3xl uppercase leading-[0.95] text-cream text-4xl sm:text-5xl lg:text-6xl">You see the dish.<br />We see the craft.</h2>
            <button onClick={() => setPlaying(true)} aria-label="Play kitchen film" className="group mt-8 flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-coal shadow-[0_16px_40px_rgba(244,166,35,0.5)] transition-transform group-hover:scale-110"><Play size={24} fill="currentColor" /></span>
              <span className="text-left text-sm font-bold uppercase tracking-widest text-cream">Watch the film<br /><span className="text-cream/60">1:24 min</span></span>
            </button>
          </div>
          {playing && (
            <div className="animate-fade-in absolute inset-0 z-10 flex flex-col items-center justify-center bg-coal/90 p-8 text-center">
              <button onClick={() => setPlaying(false)} aria-label="Close film" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"><X size={20} /></button>
              <p className="font-hand text-3xl text-gold">straight from the pass</p>
              <p className="font-display mt-2 max-w-md text-3xl uppercase text-cream">Every plate leaves the fire in under 9 minutes.</p>
              <p className="mt-3 max-w-md text-sm text-cream/70">Full video drops soon — until then, come watch the flames in person. The chef&apos;s counter seats six nightly.</p>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
