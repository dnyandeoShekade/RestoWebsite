"use client";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import { useSite } from "./SiteContext";
import { IMG } from "@/data/images";

export default function FinalCTA() {
  const { setBookingOpen } = useSite();
  return (
    <section className="relative overflow-hidden">
      <Image src={IMG.finalCTA} alt="Flames grilling food" fill className="object-cover" />
      <div className="absolute inset-0 bg-winedeep/80" />
      <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:py-32">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.3em] text-gold"><MapPin size={14} /> 123 Market Street · Austin</p>
          <h2 className="font-display mt-6 uppercase leading-[0.9] text-cream text-[clamp(3.5rem,10vw,7.5rem)]">Hungry<br />yet?</h2>
          <p className="font-display mx-auto mt-4 max-w-xl text-xl uppercase leading-snug text-cream/85 sm:text-2xl">Come for the food.<br />Stay for the moment.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Button onClick={() => setBookingOpen(true)}>Book a Table <ArrowRight size={16} /></Button><Button href="#menu" variant="cream">View Menu</Button></div>
          <p className="font-hand mt-6 text-2xl text-gold">tables go fast on weekends — just saying</p>
        </Reveal>
      </div>
    </section>
  );
}
