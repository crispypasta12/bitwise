type FooterProps = {
  brandHref?: string;
  sectionPrefix?: string;
};

export default function Footer({
  brandHref = "#top",
  sectionPrefix = "",
}: FooterProps) {
  const sectionHref = (id: string) => `${sectionPrefix}#${id}`;

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href={brandHref}>
              <span className="logo mono">&amp;</span>
              <span>
                <b>bit</b>
                <span className="blink-accent">wise</span>
              </span>
            </a>
            <p>
              A first-principles course in programming &amp; systems engineering. Built for curious
              minds who want to understand the whole stack.
            </p>
          </div>
          <div className="foot-col">
            <h4>Course</h4>
            <a href={sectionHref("overview")}>Overview</a>
            <a href={sectionHref("roadmap")}>Roadmap</a>
            <a href={sectionHref("modules")}>Modules</a>
          </div>
          <div className="foot-col">
            <h4>Tiers</h4>
            <a href={sectionHref("roadmap")}>Foundations</a>
            <a href={sectionHref("roadmap")}>Languages</a>
            <a href={sectionHref("roadmap")}>Systems &amp; Embedded</a>
          </div>
        </div>
        <div className="foot-prompt mono">
          <span className="prompt">visitor@bitwise</span>
          <span>:</span>
          <span style={{ color: "var(--syn-func)" }}>~</span>
          <span>$ echo &quot;built with curiosity · © 2026&quot;</span>
          <span className="cursor"></span>
        </div>
      </div>
    </footer>
  );
}
