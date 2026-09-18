"use client";
import { useState } from "react";
import { X, CalendarCheck, PartyPopper } from "lucide-react";
import { useSite } from "./SiteContext";

const times = ["12:00 PM", "1:30 PM", "5:00 PM", "6:30 PM", "7:30 PM", "9:00 PM"];

export default function BookingModal() {
  const { bookingOpen, setBookingOpen, showToast } = useSite();
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "2" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  if (!bookingOpen) return null;

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (form.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
    if (form.phone.replace(/\D/g, "").length < 7) errs.phone = "Enter a valid phone.";
    if (!form.date) errs.date = "Pick a date.";
    if (!form.time) errs.time = "Pick a time.";
    if (!form.guests || Number(form.guests) < 1) errs.guests = "At least 1 guest.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setDone(true);
    showToast(`Table for ${form.guests} reserved — see you soon, ${form.name.split(" ")[0]}!`);
  };

  const close = () => {
    setBookingOpen(false);
    window.setTimeout(() => setDone(false), 400);
  };

  const input = "w-full rounded-2xl border border-coal/15 bg-cream px-4 py-3 text-sm font-semibold text-coal outline-none placeholder:text-coal/35 focus:border-wine";

  return (
    <div className="fixed inset-0 z-[75] flex items-end justify-center sm:items-center sm:p-6">
      <div className="animate-fade-in absolute inset-0 bg-coal/65 backdrop-blur-sm" onClick={close} />
      <div className="animate-modal-in relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-[2rem] bg-cream p-6 sm:rounded-[2rem] sm:p-8" role="dialog" aria-label="Book a table">
        <button onClick={close} aria-label="Close booking" className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-coal/5 hover:bg-coal/10"><X size={19} /></button>
        {done ? (
          <div className="py-8 text-center">
            <p className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-wine text-gold"><PartyPopper size={32} /></p>
            <h2 className="font-display mt-5 text-4xl uppercase text-coal">You&apos;re booked!</h2>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-coal/65">{form.name.split(" ")[0]}, your table for {form.guests} on {form.date} at {form.time} is requested. We&apos;ll confirm by email shortly.</p>
            <button onClick={close} className="mt-6 rounded-full bg-coal px-8 py-3.5 text-[13px] font-extrabold uppercase tracking-wider text-cream hover:bg-wine">Done</button>
          </div>
        ) : (
          <>
            <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.24em] text-wine"><CalendarCheck size={15} /> Reserve a table</p>
            <h2 className="font-display mt-2 text-4xl uppercase text-coal">Book your moment</h2>
            <form onSubmit={submit} className="mt-6 grid gap-4" noValidate>
              <div><input className={input} placeholder="Full name" value={form.name} onChange={(e) => set("name", e.target.value)} aria-label="Name" />{errors.name && <p className="mt-1 text-xs font-bold text-wine">{errors.name}</p>}</div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><input className={input} type="email" placeholder="Email" value={form.email} onChange={(e) => set("email", e.target.value)} aria-label="Email" />{errors.email && <p className="mt-1 text-xs font-bold text-wine">{errors.email}</p>}</div>
                <div><input className={input} type="tel" placeholder="Phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} aria-label="Phone" />{errors.phone && <p className="mt-1 text-xs font-bold text-wine">{errors.phone}</p>}</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><input className={input} type="date" value={form.date} onChange={(e) => set("date", e.target.value)} aria-label="Date" />{errors.date && <p className="mt-1 text-xs font-bold text-wine">{errors.date}</p>}</div>
                <div><select className={input} value={form.time} onChange={(e) => set("time", e.target.value)} aria-label="Time"><option value="">Select time</option>{times.map((t) => (<option key={t}>{t}</option>))}</select>{errors.time && <p className="mt-1 text-xs font-bold text-wine">{errors.time}</p>}</div>
              </div>
              <div><select className={input} value={form.guests} onChange={(e) => set("guests", e.target.value)} aria-label="Number of guests">{[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (<option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>))}<option value="10">9+ (large party)</option></select>{errors.guests && <p className="mt-1 text-xs font-bold text-wine">{errors.guests}</p>}</div>
              <button type="submit" className="mt-1 rounded-full bg-wine py-4 text-[13px] font-extrabold uppercase tracking-wider text-cream transition-colors hover:bg-winedark">Confirm Reservation</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
