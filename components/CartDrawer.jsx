"use client";
import Image from "next/image";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useSite } from "./SiteContext";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeItem, subtotal, showToast } = useSite();
  if (!cartOpen) return null;
  return (
    <div className="fixed inset-0 z-[70]">
      <div className="animate-fade-in absolute inset-0 bg-coal/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <aside className="animate-drawer-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl" role="dialog" aria-label="Your order">
        <div className="flex items-center justify-between border-b border-coal/10 px-6 py-5">
          <h2 className="font-display flex items-center gap-2 text-2xl uppercase text-coal"><ShoppingBag size={22} className="text-wine" /> Your order</h2>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="grid h-10 w-10 place-items-center rounded-full bg-coal/5 text-coal hover:bg-coal/10"><X size={19} /></button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="grid h-20 w-20 place-items-center rounded-full bg-parchment text-wine"><ShoppingBag size={30} /></p>
              <p className="font-display mt-5 text-2xl uppercase text-coal">Nothing here yet</p>
              <p className="mt-2 max-w-[240px] text-sm text-coal/60">Your cravings are waiting. Add something delicious from the menu.</p>
              <button onClick={() => setCartOpen(false)} className="mt-6 rounded-full bg-wine px-7 py-3 text-[13px] font-extrabold uppercase tracking-wider text-cream hover:bg-winedark">Browse menu</button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-4 rounded-3xl bg-white p-3 shadow-[0_10px_30px_rgba(36,16,13,0.08)]">
                  <Image src={item.image} alt={item.name} width={160} height={160} className="h-20 w-20 shrink-0 rounded-2xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-display text-base uppercase leading-tight text-coal">{item.name}</p>
                      <button onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`} className="text-coal/35 transition-colors hover:text-wine"><Trash2 size={16} /></button>
                    </div>
                    <p className="mt-0.5 text-sm font-bold text-wine">${item.price} each</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full bg-parchment px-2 py-1">
                        <button onClick={() => updateQty(item.id, -1)} aria-label="Decrease quantity" className="grid h-7 w-7 place-items-center rounded-full bg-cream text-coal hover:bg-coal hover:text-cream"><Minus size={14} /></button>
                        <span className="min-w-5 text-center text-sm font-extrabold">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} aria-label="Increase quantity" className="grid h-7 w-7 place-items-center rounded-full bg-coal text-cream hover:bg-wine"><Plus size={14} /></button>
                      </div>
                      <p className="font-display text-lg text-coal">${(item.price * item.qty).toFixed(0)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cart.length > 0 && (
          <div className="border-t border-coal/10 bg-cream px-6 py-5">
            <div className="flex justify-between text-sm font-bold text-coal/70"><span>Subtotal</span><span className="font-display text-2xl text-coal">${subtotal.toFixed(0)}</span></div>
            <p className="mt-1 text-xs text-coal/50">Taxes and delivery calculated at checkout.</p>
            <button onClick={() => showToast("Checkout is a demo — call (512) 555-0184 to order")} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-wine py-4 text-[13px] font-extrabold uppercase tracking-wider text-cream transition-colors hover:bg-winedark">Checkout <ArrowRight size={16} /></button>
          </div>
        )}
      </aside>
    </div>
  );
}
