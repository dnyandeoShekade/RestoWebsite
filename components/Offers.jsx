"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import { SectionLabel, SectionTitle } from "./SectionBits";
import { useSite } from "./SiteContext";
import { IMG } from "@/data/images";

export default function Offers() {
  const { setCartOpen, showToast } = useSite();
  return (
    <section className="overflow-hidden bg-cream pb-14 sm:pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up"><SectionLabel>Limited time</SectionLabel><SectionTitle className="mt-3 max-w-3xl sm:mt-4">Deals worth dropping everything for</SectionTitle></Reveal>
        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal variant="left">
            <article className="group relative min-h-[420px] overflow-hidden rounded-[1.6rem] sm:min-h-[480px] sm:rounded-[2rem] lg:min-h-[560px]">
              <Image src={IMG.burgerAlt} alt="The Big Bite double burger" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-coal/35" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-coal/90 to-transparent" />
              <span className="absolute left-6 top-6 rounded-full bg-gold px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-coal">Save $8 · This week</span>
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <p className="font-hand text-2xl text-gold">double trouble</p>
                <h3 className="font-display text-5xl uppercase leading-none text-cream sm:text-6xl">The Big<br />Bite</h3>
                <p className="mt-3 max-w-sm font-semibold text-cream/85">Double the burger. Double the satisfaction. Two patties, extra cheese, fries included.</p>
                <div className="mt-6 flex flex-wrap items-center gap-4"><Button onClick={() => showToast("Big Bite deal applied at checkout")}>Order Now <ArrowRight size={16} /></Button><p className="font-display text-3xl text-cream">$19 <span className="text-lg text-cream/50 line-through">$27</span></p></div>
              </div>
            </article>
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay="reveal-delay-1">
              <article className="group relative flex min-h-[260px] items-end overflow-hidden rounded-[2rem] bg-wine p-7">
                <Image src={IMG.feast} alt="Family feast spread" fill className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
                <div className="relative"><p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-gold">Feeds 4–6</p><h3 className="font-display mt-1 text-4xl uppercase text-cream">Family Feast</h3><p className="mt-1 text-sm font-semibold text-cream/80">2 pizzas + 12 wings + loaded fries · $49</p><button onClick={() => setCartOpen(true)} className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-gold">Claim feast <ArrowRight size={15} /></button></div>
              </article>
            </Reveal>
            <Reveal delay="reveal-delay-2">
              <article className="group relative min-h-[260px] overflow-hidden rounded-[2rem] bg-coal p-7">
                <Image src={IMG.pizzaAlt} alt="Fire and cheese pizza" width={500} height={400} className="absolute -right-10 -top-10 h-52 w-52 rounded-full border-8 border-cream/10 object-cover transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
                <div className="relative max-w-[60%]"><p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-gold">Tue – Thu</p><h3 className="font-display mt-1 text-4xl uppercase text-cream">Fire & Cheese</h3><p className="mt-1 text-sm font-semibold text-cream/70">Any large pizza + cooler · $24</p><button onClick={() => setCartOpen(true)} className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-gold">Grab it <ArrowRight size={15} /></button></div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
