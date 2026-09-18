"use client";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useSite } from "./SiteContext";

export default function MenuCard({ dish }) {
  const { addToCart, setCartOpen } = useSite();
  return (
    <article className="group h-full overflow-hidden rounded-[1.4rem] bg-cream p-2.5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:rounded-[2rem] sm:p-3">
      <div className="relative overflow-hidden rounded-[1.1rem] sm:rounded-[1.6rem]">
        <Image src={dish.image} alt={dish.name} width={700} height={520} sizes="(max-width: 640px) 90vw, 400px" className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64" loading="lazy" />
        {dish.tag && <span className="absolute left-3 top-3 rounded-full bg-coal/80 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-gold backdrop-blur sm:left-4 sm:top-4 sm:text-[11px]">{dish.tag}</span>}
        <span className="absolute bottom-3 right-3 grid h-12 w-12 place-items-center rounded-full bg-gold font-display text-base text-coal shadow-lg sm:bottom-4 sm:right-4 sm:h-14 sm:w-14 sm:text-lg">${dish.price}</span>
      </div>
      <div className="px-2 pb-3 pt-4 sm:px-3 sm:pb-4 sm:pt-5">
        <h3 className="font-display text-xl uppercase leading-tight text-coal sm:text-2xl">{dish.name}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-coal/65 sm:mt-2 sm:text-sm">{dish.description}</p>
        <div className="mt-4 flex gap-2 sm:mt-5">
          <button onClick={() => addToCart(dish)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-coal py-3 text-[12px] font-extrabold uppercase tracking-wider text-cream transition-colors hover:bg-wine active:scale-[0.98] sm:text-[13px]"><Plus size={16} /> Add to order</button>
          <button onClick={() => setCartOpen(true)} className="rounded-full border-2 border-coal/15 px-4 text-[12px] font-extrabold uppercase text-coal transition-colors hover:border-wine hover:text-wine active:scale-[0.98] sm:px-5 sm:text-[13px]">View</button>
        </div>
      </div>
    </article>
  );
}
