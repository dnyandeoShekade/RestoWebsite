"use client";
import { createContext, useContext, useState, useMemo, useCallback, useRef } from "react";

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  const showToast = useCallback((msg) => {
    setToast(msg);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  const addToCart = useCallback(
    (item) => {
      setCart((prev) => {
        const found = prev.find((p) => p.id === item.id);
        if (found) {
          return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
        }
        return [...prev, { ...item, qty: 1 }];
      });
      showToast(`${item.name} added to your order`);
    },
    [showToast]
  );

  const updateQty = useCallback((id, delta) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0)
    );
  }, []);

  const removeItem = useCallback((id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const count = useMemo(() => cart.reduce((s, p) => s + p.qty, 0), [cart]);
  const subtotal = useMemo(
    () => cart.reduce((s, p) => s + p.qty * p.price, 0),
    [cart]
  );

  const value = {
    cart,
    count,
    subtotal,
    cartOpen,
    setCartOpen,
    bookingOpen,
    setBookingOpen,
    mobileOpen,
    setMobileOpen,
    toast,
    addToCart,
    updateQty,
    removeItem,
    showToast,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
