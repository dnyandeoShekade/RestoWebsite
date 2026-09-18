"use client";
import Image from "next/image";
import Reveal from "./Reveal";
import { SectionLabel, SectionTitle } from "./SectionBits";
import { IMG } from "@/data/images";

const shots = [
  { src: IMG.smashBurger, name: "Ember Smash", tall: false },
  { src: IMG.heroPizza, name: "Blistered Crust", tall: false },
  { src: IMG.feast, name: "The Spread", tall: true },
  { src: IMG.trufflePasta, name: "Truffle Fire", tall: false },
  { src: IMG.heroWings, name: "Smoked Wings", tall: false },
  { src: IMG.dessert, name: "Sweet Finish", tall: true },
  { src: IMG.tacos, name: "Burnt Ends", tall: false },
  { src: IMG.salad, name: "Garden Glow", tall: false },
];

export default function Gallery() {
  return (
    <section className="bg-cream pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal><SectionLabel>Gallery</SectionLabel><SectionTitle className="mt-4">A feast for your eyes</SectionTitle></Reveal>
          <Reveal delay="reveal-delay-1"><p className="font-hand text-2xl text-wine">shot fresh, served hotter →</p></Reveal>
        </div>
        <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {shots.map((s, i) => (
            <Reveal key={s.name + i}>
              <figure className="group relative break-inside-avoid overflow-hidden rounded-[1.6rem]">
                <Image src={s.src} alt={s.name} width={600} height={s.tall ? 800 : 500} className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${s.tall ? "h-80" : "h-60"}`} loading="lazy" />
                <figcaption className="absolute inset-0 flex items-end bg-coal/0 p-5 opacity-0 transition-all duration-300 group-hover:bg-coal/55 group-hover:opacity-100">
                  <span className="font-display text-xl uppercase text-cream">{s.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
