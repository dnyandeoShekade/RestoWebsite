"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import { SectionLabel, SectionTitle } from "./SectionBits";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const go = (d) => setIdx((p) => (p + d + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden bg-wine py-20 lg:py-28">
      <Quote size={220} className="pointer-events-none absolute -left-8 top-8 text-cream/[0.06]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal><div className="flex justify-center"><SectionLabel light>Reviews</SectionLabel></div><SectionTitle light className="mx-auto mt-4">Loved by people who love food</SectionTitle></Reveal>
        <Reveal delay="reveal-delay-1">
          <div key={idx} className="animate-fade-in mt-12">
            <p className="flex justify-center gap-1 text-gold">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={18} fill="currentColor" strokeWidth={0} />))}</p>
            <blockquote className="font-display mx-auto mt-6 max-w-3xl text-2xl uppercase leading-tight text-cream sm:text-4xl">&ldquo;{t.quote}&rdquo;</blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Image src={t.image} alt={t.name} width={80} height={80} className="h-14 w-14 rounded-full border-2 border-gold object-cover" />
              <div className="text-left"><p className="font-bold text-cream">{t.name}</p><p className="text-xs font-semibold uppercase tracking-widest text-cream/60">{t.role}</p></div>
            </div>
          </div>
        </Reveal>
        <div className="mt-10 flex items-center justify-center gap-3">
          <button onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-gold hover:border-gold hover:text-coal"><ArrowLeft size={19} /></button>
          <div className="flex gap-2">{testimonials.map((_, i) => (<button key={i} onClick={() => setIdx(i)} aria-label={`Go to testimonial ${i + 1}`} className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-2.5 bg-cream/30 hover:bg-cream/60"}`} />))}</div>
          <button onClick={() => go(1)} aria-label="Next testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-gold hover:border-gold hover:text-coal"><ArrowRight size={19} /></button>
        </div>
      </div>
    </section>
  );
}
