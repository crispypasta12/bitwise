"use client";

import { useEffect, useRef, useCallback } from "react";

interface TermLine {
  cls: string;
  html: string;
}

const MODULES = [
  { num: "01", file: "history_of_programming", ext: ".md", time: "25 min", status: "published" },
  { num: "02", file: "how_computers_work", ext: ".md", time: "40 min", status: "published" },
  { num: "03", file: "source_to_binary", ext: ".md", time: "35 min", status: "published" },
  { num: "04", file: "why_many_languages", ext: ".md", time: "20 min", status: "soon" },
  { num: "05", file: "language_families", ext: ".md", time: "30 min", status: "soon" },
  { num: "11", file: "intro_embedded", ext: ".c", time: "45 min", status: "soon" },
  { num: "12", file: "microcontrollers", ext: ".c", time: "50 min", status: "locked" },
];

export default function Terminal() {
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRowRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<HTMLDivElement>(null);
  const bootedRef = useRef(false);

  const scrollTerm = useCallback(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
  }, []);

  const appendLine = useCallback((cls: string, html: string) => {
    if (!outputRef.current) return;
    const d = document.createElement("div");
    d.className = `term-line ${cls}`;
    d.innerHTML = html;
    outputRef.current.appendChild(d);
    scrollTerm();
  }, [scrollTerm]);

  const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

  const typeText = useCallback(async (cls: string, glyph: string | null, text: string, speed = 30) => {
    if (!outputRef.current) return;
    const d = document.createElement("div");
    d.className = `term-line ${cls}`;
    if (glyph) {
      const g = document.createElement("span");
      g.className = "glyph mono";
      g.textContent = glyph;
      d.appendChild(g);
    }
    const span = document.createElement("span");
    d.appendChild(span);
    outputRef.current.appendChild(d);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      span.textContent = text;
      scrollTerm();
      return;
    }
    for (let i = 0; i < text.length; i++) {
      span.textContent += text[i];
      scrollTerm();
      await sleep(speed + Math.random() * speed * 0.8);
    }
  }, [scrollTerm]);

  const escapeHtml = (s: string) =>
    s.replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch] ?? ch));

  const cmdHelp = useCallback(() => {
    appendLine("out", '<span class="glyph mono">&gt;</span>available commands:');
    appendLine("sys", '&nbsp;&nbsp;<span class="str">help</span>     show this message');
    appendLine("sys", '&nbsp;&nbsp;<span class="str">start</span>    jump to the module library');
    appendLine("sys", '&nbsp;&nbsp;<span class="str">ls</span>       list published modules');
    appendLine("sys", '&nbsp;&nbsp;<span class="str">roadmap</span>  view the 5-tier learning path');
    appendLine("sys", '&nbsp;&nbsp;<span class="str">whoami</span>   who is this course for?');
    appendLine("sys", '&nbsp;&nbsp;<span class="str">clear</span>    clear the screen');
  }, [appendLine]);

  const cmdLs = useCallback(() => {
    appendLine("out", '<span class="glyph mono">&gt;</span>modules/');
    MODULES.forEach((m) => {
      const tag =
        m.status === "published"
          ? '<span class="str">published</span>'
          : m.status === "locked"
          ? '<span class="cmt">locked</span>'
          : '<span class="num">coming-soon</span>';
      appendLine(
        "sys",
        `&nbsp;&nbsp;<span class="fn">${m.num}</span>&nbsp;&nbsp;${m.file}${m.ext}&nbsp;&nbsp;<span class="cmt">${m.time}</span>&nbsp;&nbsp;${tag}`
      );
    });
  }, [appendLine]);

  const cmdWhoami = useCallback(() => {
    appendLine("out", '<span class="glyph mono">&gt;</span>a curious mind learning to build systems —');
    appendLine("sys", "&nbsp;&nbsp;no CS degree required, just patience and a terminal.");
  }, [appendLine]);

  const goTo = useCallback((id: string, note: string) => {
    appendLine("out", `<span class="glyph mono">&gt;</span>${note}`);
    const target = document.getElementById(id);
    if (target) {
      setTimeout(() => {
        const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 280);
    }
  }, [appendLine]);

  const run = useCallback((raw: string) => {
    const c = raw.trim().toLowerCase();
    appendLine("", `<span class="glyph mono">$</span>${escapeHtml(raw)}`);
    if (!c) return;
    switch (c) {
      case "help":
      case "?":
        cmdHelp();
        break;
      case "ls":
      case "ls -a":
      case "ls modules":
        cmdLs();
        break;
      case "start":
      case "./start_course.sh":
      case "start_learning()":
        goTo("modules", "Initializing modules… opening the library.");
        break;
      case "roadmap":
      case "map":
        goTo("roadmap", "Rendering learning_path.map…");
        break;
      case "whoami":
        cmdWhoami();
        break;
      case "clear":
      case "cls":
        if (outputRef.current) outputRef.current.innerHTML = "";
        break;
      case "sudo":
      case "sudo su":
        appendLine("err", '<span class="glyph mono">!</span>nice try. curiosity needs no root.');
        break;
      default:
        appendLine(
          "err",
          `<span class="glyph mono">!</span>command not found: ${escapeHtml(c)} — type <span class="str">help</span>`
        );
    }
  }, [appendLine, cmdHelp, cmdLs, cmdWhoami, goTo]);

  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    async function boot() {
      await sleep(reduce ? 0 : 500);
      await typeText("", "$", "whoami", 55);
      await sleep(reduce ? 0 : 260);
      await typeText("out", ">", "a curious mind learning to build systems", 22);
      await sleep(reduce ? 0 : 420);
      await typeText("", "$", "./start_course.sh", 50);
      await sleep(reduce ? 0 : 260);
      await typeText("sys", ">", "Initializing modules……… done", 22);
      await typeText("out", ">", "Foundations tier online · 3 lessons ready", 20);
      await sleep(reduce ? 0 : 300);
      appendLine("sys", '<span class="cmt">// terminal is live — type a command below</span>');
      if (inputRowRef.current) inputRowRef.current.style.display = "flex";
      scrollTerm();
    }

    setTimeout(boot, 350);
  }, [typeText, appendLine, scrollTerm]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = inputRef.current?.value ?? "";
      if (inputRef.current) inputRef.current.value = "";
      run(val);
      scrollTerm();
    }
  };

  const focusInput = () => {
    if (inputRowRef.current?.style.display !== "none") {
      inputRef.current?.focus();
    }
  };

  return (
    <div className="terminal panel reveal d2">
      <div className="titlebar">
        <span className="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="file mono">
          bitwise<span className="ext"> — zsh</span>
        </span>
        <span className="right mono">80×24</span>
      </div>
      <div className="term-body" id="term" ref={termRef} onClick={focusInput}>
        <div ref={outputRef}></div>
        <div className="term-input-row" ref={inputRowRef} style={{ display: "none" }}>
          <span className="glyph mono">$</span>
          <input
            className="term-input mono"
            ref={inputRef}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="terminal input"
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="term-hint mono">
          try <kbd>help</kbd> · <kbd>start</kbd> · <kbd>ls</kbd>
        </div>
      </div>
    </div>
  );
}
