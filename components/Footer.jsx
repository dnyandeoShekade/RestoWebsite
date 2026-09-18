"use client";
import { useState } from "react";
import Link from "next/link";
import { Flame, AtSign, Camera, Music2, Send, MapPin, Clock } from "lucide-react";
import { useSite } from "./SiteContext";

export default function Footer() {
  const { showToast } = useSite();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");

  const subscribe = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr("Please enter a valid email.");
      return;
    }
    setErr("");
    setEmail("");
    showToast("You're on the list. Hungry mail incoming.");
  };

  return (
    <footer className="bg-coal pt-16 text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-wine text-cream"><Flame size={21} /></span>
              <span className="font-display text-2xl uppercase">Ember <span className="text-gold">&</span> Crust</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">Made for cravings. Crafted with fire. Fire-kissed favorites served fresh every day in Austin, TX.</p>
            <div className="mt-6 flex gap-3">
              {[{ icon: Camera, label: "Instagram" }, { icon: AtSign, label: "Facebook" }, { icon: Music2, label: "TikTok" }].map((s) => (
                <button key={s.label} onClick={() => showToast(`Follow us on ${s.label} — @emberandcrust`)} aria-label={s.label} className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/80 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"><s.icon size={18} /></button>
              ))}
            </div>
          </div>
          <nav aria-label="Menu links">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.24em] text-gold">Menu</p>
            <ul className="mt-5 space-y-3 text-[15px] font-semibold text-cream/75">
              {["Burgers", "Pizza", "Pasta", "Drinks"].map((m) => (<li key={m}><Link href="#menu" className="transition-colors hover:text-gold">{m}</Link></li>))}
            </ul>
          </nav>
          <nav aria-label="Company links">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.24em] text-gold">Company</p>
            <ul className="mt-5 space-y-3 text-[15px] font-semibold text-cream/75">
              <li><Link href="#story" className="transition-colors hover:text-gold">Our Story</Link></li>
              <li><Link href="#catering" className="transition-colors hover:text-gold">Catering</Link></li>
              <li><Link href="#journal" className="transition-colors hover:text-gold">Journal</Link></li>
              <li><button onClick={() => showToast("Write to hello@emberandcrust.com")} className="transition-colors hover:text-gold">Contact</button></li>
            </ul>
          </nav>
          <div>
            <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.24em] text-gold"><MapPin size={14} /> Visit</p>
            <p className="mt-4 text-[15px] font-semibold text-cream/80">123 Market Street<br />Austin, TX 78701</p>
            <p className="mt-4 flex items-start gap-2 text-sm text-cream/60"><Clock size={16} className="mt-0.5 shrink-0" /> Mon–Thu 11AM–10PM<br />Fri–Sun 11AM–11PM</p>
            <div className="mt-6 rounded-3xl bg-cream/[0.06] p-5">
              <p className="font-hand text-2xl text-gold">Get hungry in your inbox.</p>
              <form onSubmit={subscribe} className="mt-3 flex gap-2" noValidate>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" aria-label="Email address" className="min-w-0 flex-1 rounded-full bg-coal px-4 py-3 text-sm text-cream placeholder:text-cream/35 border border-cream/15 outline-none focus:border-gold" />
                <button type="submit" aria-label="Subscribe" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-coal transition-transform hover:scale-105"><Send size={17} /></button>
              </form>
              {err && <p className="mt-2 text-xs font-semibold text-red-300">{err}</p>}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-6 text-xs font-semibold uppercase tracking-widest text-cream/40 sm:flex-row">
          <p>© 2026 Ember & Crust. All rights reserved.</p>
          <p>Made with fire in Austin, TX</p>
        </div>
      </div>
    </footer>
  );
}
