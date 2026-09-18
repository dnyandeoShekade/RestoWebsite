"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { SectionLabel } from "./SectionBits";
import { IMG } from "@/data/images";

export default function StorySection() {
  return (
    <section id="story" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-md">
            <div className="arch overflow-hidden border-8 border-parchment shadow-[0_30px_70px_rgba(36,16,13,0.2)]">
              <Image src={IMG.storyPortrait} alt="Guest enjoying ribs at Ember and Crust" width={800} height={1000} className="h-[480px] w-full object-cover sm:h-[560px]" loading="lazy" />
            </div>
            <div className="animate-floaty absolute -right-4 top-24 w-32 rotate-6 overflow-hidden rounded-3xl border-4 border-cream shadow-2xl sm:-right-10 sm:w-40">
              <Image src={IMG.storyChef} alt="Chef working the flame grill" width={400} height={400} className="h-32 w-full object-cover sm:h-40" loading="lazy" />
            </div>
            <div className="absolute -left-3 bottom-10 rounded-2xl bg-wine px-5 py-4 text-cream shadow-2xl sm:-left-8">
              <p className="font-display text-3xl leading-none">12+</p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-cream/70">Years on the flame</p>
            </div>
            <p className="font-hand absolute -top-6 left-4 rotate-[-6deg] rounded-xl bg-gold px-4 py-1 text-xl text-coal shadow-lg">made with fire & feeling</p>
          </div>
        </Reveal>
        <div>
          <Reveal><SectionLabel>Our story</SectionLabel></Reveal>
          <Reveal delay="reveal-delay-1"><h2 className="font-display mt-4 uppercase leading-[0.95] text-coal text-4xl sm:text-5xl lg:text-[64px]">Food should feel like a moment.</h2></Reveal>
          <Reveal delay="reveal-delay-2">
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-coal/70 sm:text-base">At Ember & Crust, we believe great food is about more than what&apos;s on the plate. It&apos;s the smell from the kitchen, the first bite, the people around the table and the reason you come back.</p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-coal/70 sm:text-base">Everything starts over live fire — dough blistered to order, patties smashed on a screaming-hot grill, wings lacquered twice. No shortcuts, no freezer bags, just craft you can taste.</p>
          </Reveal>
          <Reveal delay="reveal-delay-3">
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href="#journal" className="group inline-flex items-center gap-2 rounded-full bg-coal px-7 py-3.5 text-[13px] font-extrabold uppercase tracking-wider text-cream transition-all hover:-translate-y-0.5 hover:bg-wine">Our Story <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
              <p className="font-hand text-3xl text-wine">Made with fire & feeling.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
