"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const canAnimate =
      !reduce &&
      "IntersectionObserver" in window &&
      document.visibilityState === "visible";

    if (!canAnimate) {
      document.body.classList.add("reveal-off");
      els.forEach((e) => e.classList.add("in"));
      return;
    }

    const vh = window.innerHeight || 800;
    els.forEach((e) => {
      if (e.getBoundingClientRect().top < vh * 0.95) e.classList.add("in");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((e) => {
      if (!e.classList.contains("in")) io.observe(e);
    });

    const sweep = setTimeout(() => {
      els.forEach((e) => {
        e.classList.add("in");
        const op = parseFloat(getComputedStyle(e).opacity);
        if (op < 0.5) {
          e.style.transition = "none";
          e.style.opacity = "1";
          e.style.transform = "none";
        }
      });
    }, 700);

    const fallback = setTimeout(() => {
      els.forEach((e) => e.classList.add("in"));
    }, 1400);

    return () => {
      io.disconnect();
      clearTimeout(sweep);
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
