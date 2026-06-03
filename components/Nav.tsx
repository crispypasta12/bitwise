"use client";

import { useEffect, useState } from "react";

type NavProps = {
  brandHref?: string;
  sectionPrefix?: string;
};

export default function Nav({
  brandHref = "#top",
  sectionPrefix = "",
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const sectionHref = (id: string) => `${sectionPrefix}#${id}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <a className="brand" href={brandHref}>
          <span className="logo mono">&amp;</span>
          <span>
            <b>bit</b>
            <span className="blink-accent">wise</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href={sectionHref("overview")}>overview</a>
          <a href={sectionHref("roadmap")}>roadmap</a>
          <a href={sectionHref("modules")}>modules</a>
          <a href={sectionHref("modules")} className="nav-cta">
            start_learning()
          </a>
        </nav>
      </div>
    </header>
  );
}
