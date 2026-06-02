"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const MODULES = [
  {
    num: "01",
    file: "history_of_programming",
    ext: ".md",
    tier: "Foundations",
    title: "A Short History of Programming",
    desc: "From punch cards and assembly to modern toolchains — and why that lineage still shapes the code you write today.",
    time: "25 min",
    status: "published",
  },
  {
    num: "02",
    file: "how_computers_work",
    ext: ".md",
    tier: "Foundations",
    title: "How a Computer Actually Works",
    desc: "The CPU, memory, and buses beneath the abstraction — what really happens when an instruction executes.",
    time: "40 min",
    status: "published",
  },
  {
    num: "03",
    file: "source_to_binary",
    ext: ".md",
    tier: "Foundations",
    title: "From Source Code to Running Program",
    desc: "Compilers, linkers, and loaders: trace a line of text all the way to a live process in memory.",
    time: "35 min",
    status: "published",
  },
  {
    num: "04",
    file: "why_many_languages",
    ext: ".md",
    tier: "Languages",
    title: "Why So Many Languages Exist",
    desc: "Tradeoffs, paradigms, and the forces — performance, safety, ergonomics — that keep spawning new languages.",
    time: "20 min",
    status: "soon",
  },
  {
    num: "05",
    file: "language_families",
    ext: ".md",
    tier: "Languages",
    title: "Language Families & What They're Good At",
    desc: "Imperative, functional, object-oriented, and beyond — how to pick the right tool for the problem in front of you.",
    time: "30 min",
    status: "soon",
  },
  {
    num: "11",
    file: "intro_embedded",
    ext: ".c",
    tier: "Systems & Embedded",
    title: "Introduction to Embedded Systems",
    desc: "Programming when there's no OS, no screen, and every byte is precious. A different mindset entirely.",
    time: "45 min",
    status: "soon",
  },
  {
    num: "12",
    file: "microcontrollers",
    ext: ".c",
    tier: "Systems & Embedded",
    title: "Microcontrollers & Hardware Basics",
    desc: "Registers, GPIO, timers, and interrupts — talking directly to silicon with nothing in the way.",
    time: "50 min",
    status: "locked",
  },
];

const STATUS_COUNTS = {
  published: MODULES.filter((m) => m.status === "published").length,
  soon: MODULES.filter((m) => m.status === "soon").length,
  locked: MODULES.filter((m) => m.status === "locked").length,
};

const COMPILE_LINES = [
  { html: '<span style="color:var(--accent)">→</span> tier 01 · foundations', state: "ok" },
  { html: "&nbsp;&nbsp;module 01 · history_of_programming", state: "ok" },
  { html: "&nbsp;&nbsp;module 02 · how_computers_work", state: "ok" },
  { html: "&nbsp;&nbsp;module 03 · source_to_binary", state: "ok" },
  { html: '<span style="color:var(--accent)">→</span> tier 02 · languages', state: "pend" },
  { html: "&nbsp;&nbsp;module 04 · why_many_languages", state: "pend" },
  { html: "&nbsp;&nbsp;module 05 · language_families", state: "pend" },
  { html: '<span style="color:var(--accent)">→</span> tier 04 · systems &amp; embedded', state: "pend" },
];

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 2"/>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="11" width="16" height="9" rx="2"/>
      <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  );
}

function CompileBar() {
  const boxRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const segRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const log = logRef.current;
    const seg = segRef.current;
    const pct = pctRef.current;
    if (!box || !log || !seg || !pct) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = Math.round((3 / 7) * 100);
    const timers: ReturnType<typeof setTimeout>[] = [];
    let live = true;

    const fillBar = () => {
      if (!live) return;
      seg.style.width = target + "%";
      if (reduce) { pct.textContent = target + "%"; return; }
      let cur = 0;
      const iv = setInterval(() => {
        if (!live) { clearInterval(iv); return; }
        cur += 1;
        pct.textContent = cur + "%";
        if (cur >= target) clearInterval(iv);
      }, 22);
    };

    let animated = false;
    const animate = () => {
      if (!live || animated) return;
      animated = true;
      COMPILE_LINES.forEach(({ html, state }, idx) => {
        const t = setTimeout(() => {
          if (!live) return;
          const d = document.createElement("div");
          d.innerHTML = `<span class="${state === "ok" ? "ok" : "pend"}">[${state === "ok" ? " ok " : "····"}]</span> ${html}`;
          if (state === "pend") d.style.opacity = "0.55";
          log.appendChild(d);
        }, reduce ? 0 : idx * 230);
        timers.push(t);
      });
      const barT = setTimeout(fillBar, reduce ? 0 : COMPILE_LINES.length * 230 + 100);
      timers.push(barT);
    };

    if (reduce || !("IntersectionObserver" in window)) {
      animate();
      return () => { live = false; timers.forEach(clearTimeout); };
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { animate(); io.disconnect(); }
      });
    }, { threshold: 0.25 });

    io.observe(box);
    const fallback = setTimeout(animate, 2600);
    timers.push(fallback);

    return () => {
      live = false;
      io.disconnect();
      timers.forEach(clearTimeout);
      log.innerHTML = "";
      seg.style.width = "0%";
      pct.textContent = "0%";
    };
  }, []);

  return (
    <div className="compile reveal" id="compile" ref={boxRef}>
      <div className="titlebar">
        <span className="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="file mono">
          build_progress<span className="ext"> — make</span>
        </span>
        <span className="right mono">course.lock</span>
      </div>
      <div className="term-body">
        <div className="log mono" ref={logRef}></div>
        <div className="bar">
          <div className="seg" ref={segRef} style={{ width: "0%" }}></div>
        </div>
        <div className="bar-label">
          <span>compiling course content…</span>
          <span className="pct" ref={pctRef}>0%</span>
        </div>
      </div>
    </div>
  );
}

export default function Modules() {
  const [filter, setFilter] = useState("all");

  const visible = MODULES.filter(
    (m) => filter === "all" || m.status === filter
  );

  return (
    <section className="block wrap" id="modules">
      <div className="section-head reveal">
        <div className="section-tag mono">
          <span className="cmt">// </span>modules/
        </div>
        <h2>The module library.</h2>
        <p>
          Every module is self-contained, richly illustrated, and released as it&apos;s finished.
          Published modules are ready now — the rest are on the way.
        </p>
      </div>

      <div className="filter-row reveal d1 mono" id="filters">
        {(["all", "published", "soon", "locked"] as const).map((f) => (
          <button
            key={f}
            className={`chip${filter === f ? " active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "all" : f === "soon" ? "coming soon" : f}
            <span className="c">
              {f === "all"
                ? MODULES.length
                : f === "published"
                ? STATUS_COUNTS.published
                : f === "soon"
                ? STATUS_COUNTS.soon
                : STATUS_COUNTS.locked}
            </span>
          </button>
        ))}
      </div>

      <div className="modules" id="module-grid">
        {visible.map((m, i) => {
          const delay = `d${Math.min(i, 5)}`;
          return (
            <article key={m.num} className={`card ${m.status} reveal ${delay}`} data-status={m.status}>
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  {m.file}
                  <span className="ext">{m.ext}</span>
                </span>
                <span className="statusdot" title={m.status === "published" ? "Published" : m.status === "soon" ? "Coming Soon" : "Locked"}></span>
              </div>
              <div className="card-body">
                <div className="card-meta mono">
                  <span className="mnum">MODULE {m.num}</span>
                  <span>·</span>
                  <span className="tierlabel">{m.tier}</span>
                </div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <div className="card-foot">
                  <span className="time">
                    <ClockIcon /> {m.time}
                  </span>
                  {m.status === "published" ? (
                    <span className="card-cta mono">
                      open <ArrowIcon />
                    </span>
                  ) : m.status === "locked" ? (
                    <span className="badge locked">
                      <LockIcon /> Locked
                    </span>
                  ) : (
                    <span className="badge soon">Coming Soon</span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <CompileBar />
    </section>
  );
}
