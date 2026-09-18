"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Star, Flame, Leaf, Clock, Bike } from "lucide-react";
import Button from "./Button";
import { useSite } from "./SiteContext";
import { IMG } from "@/data/images";

const embers = [
  { left: "8%", size: 7, delay: "0s", duration: "5.6s" },
  { left: "22%", size: 5, delay: "1.4s", duration: "6.8s" },
  { left: "46%", size: 8, delay: "0.7s", duration: "6.1s" },
  { left: "68%", size: 5, delay: "2.1s", duration: "7.2s" },
  { left: "84%", size: 7, delay: "1s", duration: "5.9s" },
];

export default function Hero() {
  const { setBookingOpen } = useSite();
  const artRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY || 0, 560);
        if (artRef.current) artRef.current.style.transform = `translateY(${y * 0.08}px)`;
        if (glowRef.current) glowRef.current.style.transform = `translateY(${y * -0.05}px)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="home" className="hero-grain relative overflow-hidden bg-winedark">
      <div ref={glowRef} className="pointer-events-none absolute inset-0">
        <div className="animate-glow-pulse absolute -left-24 top-6 h-72 w-72 rounded-full opacity-40 blur-3xl sm:h-[480px] sm:w-[480px]" style={{ background: "radial-gradient(circle, #C81A24 0%, transparent 65%)" }} />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full opacity-30 blur-3xl sm:h-[420px] sm:w-[420px]" style={{ background: "radial-gradient(circle, #F4A623 0%, transparent 65%)" }} />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-24 hidden justify-center gap-[26%] sm:flex">
        {embers.map((e, i) => (
          <span key={i} className="animate-ember rounded-full bg-gold/80" style={{ width: e.size, height: e.size, animationDelay: e.delay, animationDuration: e.duration }} />
        ))}
      </div>
      <p className="pointer-events-none absolute -bottom-4 left-0 select-none whitespace-nowrap font-display text-[20vw] uppercase leading-none text-cream/[0.05] sm:text-[18vw]">Ember & Crust</p>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="max-w-xl">
          <p className="animate-hero-left inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-gold sm:px-4 sm:text-[11px] sm:tracking-[0.3em]"><Flame size={14} /> Smoke • Flavor • Craft</p>
          <h1 className="animate-hero-left hero-d1 font-display mt-5 uppercase leading-[0.92] text-cream text-[clamp(2.75rem,12.5vw,4.4rem)] sm:text-[clamp(3.2rem,9vw,6.8rem)]">Come hungry.<br /><span className="text-gold">Leave obsessed.</span></h1>
          <p className="animate-hero-left hero-d2 mt-5 max-w-md text-[15px] leading-relaxed text-cream/80 sm:mt-6 sm:text-lg">Bold flavors, fire-kissed favorites, and unforgettable moments — served fresh every day.</p>
          <div className="animate-hero-left hero-d3 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row"><Button href="#menu" className="w-full justify-center px-6 py-4 text-sm sm:w-auto">Explore Menu <ArrowRight size={17} /></Button><Button variant="outline" onClick={() => setBookingOpen(true)} className="w-full justify-center px-6 py-4 text-sm sm:w-auto">Book a Table</Button></div>
          <div className="animate-hero-left hero-d4 mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 sm:mt-8"><div className="flex -space-x-3">{[IMG.avatar1, IMG.avatar2, IMG.avatar3].map((a) => (<Image key={a} src={a} alt="Happy guest" width={44} height={44} className="h-10 w-10 rounded-full border-2 border-winedark object-cover sm:h-11 sm:w-11" />))}</div><div><p className="flex items-center gap-1 text-gold">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={14} fill="currentColor" strokeWidth={0} />))}<span className="ml-1 text-sm font-bold text-cream">4.9</span></p><p className="text-[11px] font-semibold uppercase tracking-widest text-cream/60 sm:text-xs">2,400+ happy reviews</p></div><p className="hidden items-center gap-2 rounded-full bg-cream/10 px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-cream/80 md:inline-flex"><Clock size={13} className="text-gold" /> 9-min fire to table</p></div>
        </div>
        <div ref={artRef} className="relative mx-auto w-full max-w-[420px] px-2 pb-10 pt-4 sm:max-w-[540px] sm:px-0 sm:pb-8 lg:max-w-[540px]">
          <div className="animate-hero-right relative">
          <div aria-hidden className="hero-orbit absolute -top-8 left-1/2 hidden h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-dashed border-cream/20 sm:block lg:h-[620px] lg:w-[620px]">
            <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_22px_rgba(244,166,35,0.9)]" />
          </div>
          <div aria-hidden className="hero-orbit-reverse absolute top-16 left-1/2 hidden h-[430px] w-[430px] -translate-x-1/2 rounded-full border border-cream/10 sm:block lg:h-[480px] lg:w-[480px]">
            <span className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rounded-full bg-cream/70" />
          </div>
          <div className="animate-hero-up hero-d2 relative overflow-hidden rounded-[2rem] border-4 border-cream/15 shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:rounded-[2.5rem]">
            <Image src={IMG.heroBurger} alt="Signature Ember smash burger" width={1100} height={1200} priority sizes="(max-width: 640px) 92vw, (max-width: 1024px) 520px, 560px" className="animate-ken-burns h-[340px] w-full object-cover sm:h-[520px] lg:h-[560px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-coal/50 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-2xl bg-coal/70 px-4 py-3 backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:px-5 sm:py-4"><div className="min-w-0"><p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-gold sm:text-[11px]">Signature</p><p className="font-display truncate text-lg uppercase text-cream sm:text-xl">Ember Smash Burger</p></div><p className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold font-display text-base text-coal sm:h-14 sm:w-14 sm:text-lg">$16</p></div>
          </div>
          <div className="animate-hero-up hero-d3 animate-card-bob absolute -left-1 top-8 w-24 rotate-[-8deg] overflow-hidden rounded-2xl border-4 border-cream shadow-2xl sm:-left-4 sm:top-10 sm:w-32 lg:-left-12 lg:w-40 lg:rounded-3xl"><Image src={IMG.heroPizza} alt="Wood-fired pizza" width={400} height={400} sizes="(max-width: 640px) 96px, 160px" className="h-24 w-full object-cover sm:h-32 lg:h-40" /></div>
          <div className="animate-hero-up hero-d4 animate-card-bob-late absolute -right-1 top-[38%] w-20 rotate-[7deg] overflow-hidden rounded-2xl border-4 border-cream shadow-2xl sm:-right-3 sm:w-28 lg:-right-8 lg:w-36 lg:rounded-3xl"><Image src={IMG.heroFries} alt="Crispy fries" width={400} height={400} sizes="(max-width: 640px) 80px, 144px" className="h-20 w-full object-cover sm:h-28 lg:h-36" /></div>
          <div className="animate-hero-up hero-d4 absolute -bottom-1 left-3 flex items-center gap-3 rounded-2xl bg-cream px-3 py-2.5 shadow-2xl sm:-bottom-6 sm:left-8 sm:px-4 sm:py-3"><Image src={IMG.heroDrink} alt="Smoked berry cooler" width={80} height={80} className="h-10 w-10 rounded-xl object-cover sm:h-12 sm:w-12" /><div><p className="text-[10px] font-extrabold uppercase tracking-widest text-wine sm:text-[11px]">Sip it cold</p><p className="text-[13px] font-bold text-coal sm:text-sm">Smoked Berry Cooler</p></div></div>
          <div className="animate-hero-up hero-d5 absolute -top-3 right-4 grid h-12 w-12 place-items-center rounded-full bg-gold text-coal shadow-xl sm:-top-4 sm:left-6 sm:right-auto sm:h-14 sm:w-14"><Leaf size={22} /></div>
          <div className="animate-hero-up hero-d5 absolute -bottom-2 right-2 hidden items-center gap-2 rounded-full bg-coal/80 px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-cream backdrop-blur sm:inline-flex lg:-right-6"><Bike size={15} className="text-gold" /> 25-min delivery</div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-cream/15 bg-winedeep/60"><div className="flex overflow-hidden py-2.5 sm:py-3"><div className="animate-marquee flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8">{["Smash Burgers", "Wood-Fired Pizza", "Smoked Wings", "Truffle Pasta", "Loaded Fries", "Craft Coolers", "Smash Burgers", "Wood-Fired Pizza", "Smoked Wings", "Truffle Pasta", "Loaded Fries", "Craft Coolers"].map((t, i) => (<span key={i} className="flex items-center gap-6 whitespace-nowrap font-display text-base uppercase tracking-wider text-cream/80 sm:gap-8 sm:text-lg">{t} <Flame size={16} className="text-gold" /></span>))}</div></div></div>
    </section>
  );
}
