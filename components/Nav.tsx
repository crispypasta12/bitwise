"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <span className="logo mono">&amp;</span>
          <span>
            <b>bit</b>
            <span className="blink-accent">wise</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#overview">overview</a>
          <a href="#roadmap">roadmap</a>
          <a href="#modules">modules</a>
          <a href="#modules" className="nav-cta">
            start_learning()
          </a>
        </nav>
      </div>
    </header>
  );
}
