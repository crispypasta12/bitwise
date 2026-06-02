import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow mono">
            <span className="pulse-dot"></span>v1.0 · 5 tiers · shipping incrementally
          </span>
          <h1 className="reveal">
            Learn to build
            <br />
            <span className="accent">systems</span>, from
            <br />
            first principles.
          </h1>
          <p className="lede reveal d1">
            Bitwise is a structured course that takes you from{" "}
            <strong>punch cards to microcontrollers</strong> — understanding not just{" "}
            <em>how</em> to code, but how the machine underneath actually works.
          </p>
          <div className="cta-row reveal d2">
            <a href="#modules" className="btn btn-primary">
              Start Learning <span className="arr">→</span>
            </a>
            <a href="#roadmap" className="btn btn-ghost">
              View the roadmap
            </a>
          </div>
          <div className="hero-stats reveal d3">
            <div className="stat">
              <div className="n mono">
                <span className="accent">3</span>/7
              </div>
              <div className="l mono">MODULES LIVE</div>
            </div>
            <div className="stat">
              <div className="n mono">5</div>
              <div className="l mono">LEARNING TIERS</div>
            </div>
            <div className="stat">
              <div className="n mono">~4h</div>
              <div className="l mono">PUBLISHED SO FAR</div>
            </div>
          </div>
        </div>

        <Terminal />
      </div>
    </section>
  );
}
