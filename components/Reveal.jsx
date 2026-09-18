"use client";
import { useEffect, useRef } from "react";

const variants = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
};

export default function Reveal({ children, className = "", delay = "", variant = "up", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${variants[variant] || ""} ${delay} ${className}`}>
      {children}
    </Tag>
  );
}
