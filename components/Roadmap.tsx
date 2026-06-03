const tiers = [
  {
    num: "01",
    status: "live",
    statusLabel: "Live",
    name: "Foundations",
    desc: "How code runs and the machine beneath it — history, hardware, compilation.",
    mods: ["done", "done", "done"],
    modLabel: "3 / 3",
    active: true,
    current: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z"/>
        <path d="M3 12l9 4.5L21 12"/>
        <path d="M3 16.5 12 21l9-4.5"/>
      </svg>
    ),
  },
  {
    num: "02",
    status: "live",
    statusLabel: "Live",
    name: "Programming Basics",
    desc: "Universal concepts, beginner data structures, and the ideas that transfer across languages.",
    mods: ["done", "done"],
    modLabel: "2 / 2",
    active: true,
    current: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 6 3 12l5 6"/>
        <path d="M16 6l5 6-5 6"/>
      </svg>
    ),
  },
  {
    num: "03",
    status: "",
    statusLabel: "Planned",
    name: "Domains",
    desc: "Where code goes to work — web, data, graphics, networking and beyond.",
    mods: ["", "", ""],
    modLabel: "planned",
    active: false,
    current: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.4"/>
        <rect x="14" y="3" width="7" height="7" rx="1.4"/>
        <rect x="3" y="14" width="7" height="7" rx="1.4"/>
        <rect x="14" y="14" width="7" height="7" rx="1.4"/>
      </svg>
    ),
  },
  {
    num: "04",
    status: "soon",
    statusLabel: "2 soon",
    name: "Systems & Embedded",
    desc: "Programming close to the metal: no OS, no screen, every byte accounted for.",
    mods: ["soon", "soon"],
    modLabel: "2 soon",
    active: false,
    current: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="2"/>
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>
      </svg>
    ),
  },
  {
    num: "05",
    status: "",
    statusLabel: "Planned",
    name: "Capstone",
    desc: "Put it all together — design and build a real system, end to end.",
    mods: [""],
    modLabel: "planned",
    active: false,
    current: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 21V4a1 1 0 0 1 1-1h11l-2 4 2 4H6"/>
      </svg>
    ),
  },
];

export default function Roadmap() {
  return (
    <section className="block wrap" id="roadmap" style={{ paddingTop: 0 }}>
      <div className="section-head reveal">
        <div className="section-tag mono">
          <span className="cmt">{"// "}</span>learning_path.map
        </div>
        <h2>Five tiers, built to compound.</h2>
        <p>
          Each tier assumes the last. You&apos;ll never be asked to take something on faith that an
          earlier module didn&apos;t already explain.
        </p>
      </div>

      <div className="roadmap reveal d1" id="roadmap-track">
        <div className="track">
          <div className="fill"></div>
          <div className="pulse-bar"></div>
        </div>

        {tiers.map((tier) => {
          const cls = [
            "tier",
            tier.active ? "active" : "dim",
            tier.current ? "current" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={tier.num} className={cls}>
              <div className="node">
                {tier.icon}
                <span className="nnum mono">{tier.num}</span>
              </div>
              <div className="tcard">
                <div className="tc-top">
                  <span className="tnum mono">TIER {tier.num}</span>
                  <span className={`tstatus${tier.status ? " " + tier.status : ""}`}>
                    {tier.statusLabel}
                  </span>
                </div>
                <div className="tname mono">{tier.name}</div>
                <div className="tdesc">{tier.desc}</div>
                <div className="tmods">
                  {tier.mods.map((m, i) => (
                    <span key={i} className={`m${m ? " " + m : ""}`}></span>
                  ))}
                  <span className="mlabel">{tier.modLabel}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
