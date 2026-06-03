import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Module 1: A Short History of Programming | Bitwise",
  description:
    "Learn why programming evolved from mechanical machines and punch cards to high-level languages, operating systems, the internet, cloud, AI, and embedded systems.",
};

const heroNodes = [
  ["Gears", "mechanical"],
  ["Cards", "stored steps"],
  ["1010", "machine code"],
  ["ASM", "assembly"],
  ["C", "systems"],
  ["Web", "networked"],
  ["Cloud", "scale"],
  ["MCU", "embedded"],
  ["AI", "models"],
];

const learningGoals = [
  ["LANG", "Why programming languages evolved"],
  ["ABST", "Why abstraction is the central theme in programming history"],
  ["PATH", "How we moved from mechanical computation to modern software systems"],
  ["BIN", "Why machine code is hard for humans but easy for machines"],
  ["HL", "Why high-level languages are easier for humans but need more layers to run"],
  ["SYS", "How operating systems, the internet, mobile, cloud, AI, and embedded systems fit into the bigger story"],
];

const abstractionLayers = [
  "Applications and systems",
  "Libraries/frameworks",
  "High-level languages",
  "Assembly",
  "Machine code",
  "Bits and bytes",
  "Electrical signals",
];

const timelineStages = [
  {
    key: "A",
    title: "Mechanical Computation",
    era: "Early computing dream",
    icon: "GEAR",
    problem: "People wanted machines that could perform calculations and follow ordered steps.",
    abstraction: "A machine could be designed around a sequence of logical operations.",
    mattered: "The dream was already there: use a machine to perform logical steps.",
    detail:
      "Mechanical calculators, Charles Babbage, and Ada Lovelace showed that computation could be described as a process, not just a single calculation.",
  },
  {
    key: "B",
    title: "Punch Cards",
    era: "Physical programs",
    icon: "CARD",
    problem: "Humans needed a repeatable way to control machines without manually reconfiguring everything.",
    abstraction: "Instructions and data represented as physical patterns.",
    mattered: "Programs could be stored, repeated, changed, and fed into machines.",
    detail:
      "A pattern of holes became a way to carry instructions or data outside the machine itself.",
  },
  {
    key: "C",
    title: "Machine Code",
    era: "Electronic computers",
    icon: "1010",
    problem: "Computers could execute instructions, but humans had to write in a form very close to the hardware.",
    abstraction: "Binary instruction sets.",
    mattered: "This gave direct control over the computer, but it was extremely hard for humans to read and write.",
    detail: "Machine code is hard for humans, easy for machines.",
  },
  {
    key: "D",
    title: "Assembly Language",
    era: "Named CPU instructions",
    icon: "ASM",
    problem: "Writing binary directly was too error-prone.",
    abstraction: "Mnemonic instructions like MOV, ADD, and JMP.",
    mattered: "Humans could write low-level programs more reliably while still controlling the CPU closely.",
    detail: "Assembly is readable compared with binary, but it is still close to the machine.",
  },
  {
    key: "E",
    title: "High-Level Languages",
    era: "Bigger software",
    icon: "FUNC",
    problem: "Assembly was still too detailed for large programs.",
    abstraction: "Variables, functions, loops, types, modules, and portable source code.",
    mattered: "People could build larger software faster and with fewer mistakes.",
    detail:
      "FORTRAN, COBOL, C, and later Python, Java, JavaScript, and many others moved programming closer to human problem solving.",
  },
  {
    key: "F",
    title: "Operating Systems",
    era: "Shared resources",
    icon: "OS",
    problem: "Every program should not have to manually control every hardware detail.",
    abstraction: "Files, processes, memory management, drivers, and user interfaces.",
    mattered: "Programs became easier to build because the OS handled common hardware and resource management.",
    detail: "The OS became a service layer between applications and hardware.",
  },
  {
    key: "G",
    title: "The Internet",
    era: "Networked software",
    icon: "NET",
    problem: "Computers needed to communicate and share information.",
    abstraction: "Protocols, websites, servers, browsers, and APIs.",
    mattered: "Software became distributed. A program could depend on another computer across the world.",
    detail: "Programming changed from isolated programs to connected systems.",
  },
  {
    key: "H",
    title: "Mobile, Cloud, AI, and Embedded Systems",
    era: "Software everywhere",
    icon: "SYS",
    problem: "Software now needs to run everywhere, scale globally, respond quickly, and interact with the physical world.",
    abstraction: "Cloud platforms, mobile SDKs, AI frameworks, firmware libraries, APIs, and real-time systems.",
    mattered: "Modern engineers need to understand not just code, but systems.",
    detail:
      "Phones, web apps, cloud servers, AI systems, microcontrollers, sensors, and connected devices are now part of one larger story.",
  },
];

const misconceptions = [
  [
    "Programming history is just memorizing dates.",
    "The important lesson is why each new layer of abstraction was created.",
  ],
  [
    "New languages make old languages useless.",
    "Older languages still matter when their tradeoffs are useful. C and assembly are still important in embedded systems and low-level software.",
  ],
  [
    "High-level languages are always better.",
    "They are often easier and faster to use, but sometimes you need lower-level control.",
  ],
  [
    "Low-level programming is only for old computers.",
    "Low-level programming is still used in firmware, drivers, operating systems, performance-critical systems, and hardware control.",
  ],
  [
    "AI means programming is no longer important.",
    "AI changes how we build software, but understanding systems, logic, debugging, and tradeoffs is still essential.",
  ],
];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="lesson-badge mono">{children}</span>;
}

function ChipIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="chip-icon mono" aria-hidden="true">
      {children}
    </span>
  );
}

function TinyArrow() {
  return (
    <span className="tiny-arrow mono" aria-hidden="true">
      -&gt;
    </span>
  );
}

function CodeLine({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="history-code-line">
      <span className="mono">{label}</span>
      <code>{children}</code>
    </div>
  );
}

export default function ModuleOnePage() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="ambient-blob"></div>
        <div className="ambient-blob"></div>
      </div>

      <Nav brandHref="/" sectionPrefix="/" />

      <main id="top" className="lesson-page history-lesson">
        <section className="lesson-hero wrap history-hero">
          <div className="lesson-hero-grid">
            <div className="lesson-hero-copy">
              <span className="eyebrow mono">
                <span className="pulse-dot"></span>history.trace()
              </span>
              <h1 className="reveal">Module 1: A Short History of Programming</h1>
              <p className="lesson-subtitle reveal d1">
                Programming evolved because humans needed better ways to control increasingly complex machines.
              </p>
              <div className="lesson-badges reveal d2" aria-label="Lesson metadata">
                <Badge>Difficulty: Beginner</Badge>
                <Badge>Duration: 25-35 minutes</Badge>
                <Badge>Tier: Foundations</Badge>
              </div>
            </div>

            <div className="history-hero-visual panel reveal d2" aria-label="Programming evolution timeline visual">
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  evolution_timeline<span className="ext">.system</span>
                </span>
                <span className="right mono">module_01</span>
              </div>
              <div className="history-hero-body">
                <div className="history-orbit-line" aria-hidden="true"></div>
                <div className="history-node-grid">
                  {heroNodes.map(([label, caption], index) => (
                    <div className={`history-node n${index}`} key={label}>
                      <span className="mono">{label}</span>
                      <small>{caption}</small>
                    </div>
                  ))}
                </div>
                <div className="history-hero-caption mono">
                  <span>machine</span>
                  <TinyArrow />
                  <span>code</span>
                  <TinyArrow />
                  <span>systems</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="hook">
          <div className="map-card-wide reveal">
            <div>
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>the_real_history_lesson
              </div>
              <h2>History is not the point. Complexity is.</h2>
              <p>
                Most beginners think programming history is about old machines and famous names.
                The useful lesson is different: every major step happened because humans needed a
                better way to manage complexity.
              </p>
              <p>
                At first, humans controlled machines directly. As machines became more powerful,
                direct control became too hard. So humans created layers of abstraction.
              </p>
              <p className="lesson-callout">
                Programming is the history of humans building better layers between human ideas
                and machine behavior.
              </p>
            </div>
            <div className="abstraction-flow" aria-label="Abstraction layers between human idea and machine action">
              <div className="simple-flow mono">
                <span>Human idea</span>
                <TinyArrow />
                <span>Machine action</span>
              </div>
              <div className="layered-flow mono">
                {["Human idea", "Language", "Compiler / Runtime", "OS / Firmware", "Hardware", "Machine action"].map(
                  (item, index) => (
                    <span key={item} className={`flow-pill d${Math.min(index, 5)}`}>
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="goals">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>mission_objectives
            </div>
            <h2>By the end of this module, you should understand:</h2>
          </div>
          <div className="goal-grid">
            {learningGoals.map(([icon, goal], index) => (
              <article className={`goal-card reveal d${Math.min(index, 5)}`} key={goal}>
                <ChipIcon>{icon}</ChipIcon>
                <p>{goal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="core-thesis">
          <div className="thesis-grid">
            <article className="thesis-card reveal">
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>core_thesis
              </div>
              <h2>Programming history is not about memorizing dates.</h2>
              <p className="thesis-statement">
                It is about understanding why abstraction keeps increasing.
              </p>
              <p>
                Abstraction means hiding low-level details so humans can work with bigger ideas.
                Instead of thinking about electrical signals, we think about 1s and 0s. Instead of
                thinking about 1s and 0s, we think about instructions. Instead of thinking about
                every instruction, we write C, Python, or JavaScript.
              </p>
              <p>
                And instead of managing every hardware detail ourselves, we use operating systems,
                frameworks, libraries, and APIs.
              </p>
            </article>
            <div className="abstraction-ladder panel reveal d1" aria-label="Abstraction ladder from electrical signals to systems">
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  abstraction_ladder<span className="ext">.diagram</span>
                </span>
              </div>
              <div className="ladder-body">
                {abstractionLayers.map((layer, index) => (
                  <div className={`ladder-rung reveal d${Math.min(index, 5)}`} key={layer}>
                    <span className="mono">{String(abstractionLayers.length - index).padStart(2, "0")}</span>
                    <strong>{layer}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="timeline">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>historical_timeline
            </div>
            <h2>The pattern: problem, new layer, bigger possibilities.</h2>
            <p>
              The eras matter less than the cause-and-effect chain. Each step made machines easier
              to control at a larger scale.
            </p>
          </div>
          <ol className="history-timeline">
            {timelineStages.map((stage, index) => (
              <li className={`timeline-item reveal d${Math.min(index % 6, 5)}`} key={stage.title}>
                <div className="timeline-marker">
                  <ChipIcon>{stage.key}</ChipIcon>
                </div>
                <article className="timeline-card">
                  <div className="timeline-card-head">
                    <div>
                      <span className="timeline-era mono">{stage.era}</span>
                      <h3>{stage.title}</h3>
                    </div>
                    <span className="timeline-icon mono" aria-hidden="true">
                      {stage.icon}
                    </span>
                  </div>
                  <p>{stage.detail}</p>
                  <div className="timeline-facts">
                    <div>
                      <strong>Problem</strong>
                      <span>{stage.problem}</span>
                    </div>
                    <div>
                      <strong>New abstraction</strong>
                      <span>{stage.abstraction}</span>
                    </div>
                    <div>
                      <strong>Why it mattered</strong>
                      <span>{stage.mattered}</span>
                    </div>
                  </div>
                  {stage.title === "Assembly Language" ? (
                    <div className="binary-assembly-card" aria-label="Binary versus assembly example">
                      <CodeLine label="Binary">10110000 01100001</CodeLine>
                      <CodeLine label="Assembly">MOV AL, 61h</CodeLine>
                    </div>
                  ) : null}
                  {stage.title === "Operating Systems" ? (
                    <div className="os-stack" aria-label="Apps operating system hardware stack">
                      <span>Apps</span>
                      <span>Operating System</span>
                      <span>Hardware</span>
                    </div>
                  ) : null}
                  {stage.title === "The Internet" ? (
                    <div className="client-server-map mono" aria-label="Browser server database diagram">
                      <span>Browser</span>
                      <TinyArrow />
                      <span>Server</span>
                      <TinyArrow />
                      <span>Database</span>
                    </div>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="lesson-section wrap" id="comparison">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>abstraction_tradeoff
            </div>
            <h2>Higher-level code is easier to write, but farther from the machine.</h2>
          </div>
          <div className="language-comparison-grid">
            <article className="comparison-panel reveal">
              <h3>Machine Code vs Assembly vs High-Level Language</h3>
              <div className="comparison-code-grid">
                <div>
                  <span className="mono">Machine Code</span>
                  <code>10110000 01100001</code>
                </div>
                <div>
                  <span className="mono">Assembly</span>
                  <code>MOV AL, 61h</code>
                </div>
                <div>
                  <span className="mono">High-Level</span>
                  <code>print(&quot;Hello&quot;)</code>
                </div>
              </div>
              <p>
                As we move up, humans get more readability, but the computer needs more translation
                layers.
              </p>
            </article>
            <article className="tradeoff-chart reveal d1" aria-label="Low-level to high-level tradeoff chart">
              <div className="tradeoff-axis">
                {["Machine Code", "Assembly", "C", "Java", "Python", "JavaScript"].map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              <div className="tradeoff-labels">
                <span>Low-level: more hardware control, more responsibility</span>
                <span>High-level: more human readability, more tool/runtime layers</span>
              </div>
              <div className="exact-compare">
                <p>
                  <strong>Machine code:</strong> Hard for humans, easy for machines.
                </p>
                <p>
                  <strong>Python:</strong> Easy for humans, needs layers to run on machines.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="lesson-section wrap" id="worked-example">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>worked_example.print_hello
            </div>
            <h2>Worked example: printing &quot;Hello&quot; to the screen.</h2>
            <p>
              The beginner view is one line. The systems view includes the hidden layers from
              Module 0.
            </p>
          </div>
          <div className="hello-flow reveal" aria-label="Printing Hello abstraction flow">
            {[
              ["Human intention", '"I want to show Hello"'],
              ["High-level code", 'print("Hello")'],
              ["Runtime / compiler", "Translate the idea"],
              ["Operating system", "Request text display"],
              ["Display driver", "Control the screen"],
              ["Screen hardware", "Change pixels"],
              ["User result", "User sees text"],
            ].map(([title, text], index) => (
              <div className={`hello-step d${Math.min(index, 5)}`} key={title}>
                <ChipIcon>{String(index + 1).padStart(2, "0")}</ChipIcon>
                <div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="embedded">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>embedded_connection
            </div>
            <h2>Why this history matters for embedded systems.</h2>
            <p>
              In web or app development, many hardware details are hidden by operating systems and
              frameworks. In embedded systems, the engineer often works much closer to the hardware.
            </p>
          </div>
          <div className="embedded-grid">
            <article className="path-card reveal">
              <h3>Web app path</h3>
              <div className="path-stack mono" aria-label="Web app abstraction path">
                {["User", "Browser", "JavaScript", "OS", "Hardware"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
            <article className="path-card reveal d1">
              <h3>Embedded path</h3>
              <div className="path-stack embedded mono" aria-label="Embedded abstraction path">
                {["Code", "Firmware", "Register / peripheral", "Hardware pin / sensor", "Real-world action"].map(
                  (item) => (
                    <span key={item}>{item}</span>
                  )
                )}
              </div>
            </article>
          </div>
          <div className="embedded-examples reveal d2">
            {[
              "Turning a GPIO pin on/off",
              "Reading a sensor",
              "Sending bytes over UART/I2C/SPI",
              "Managing limited memory",
              "Meeting timing deadlines",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="lesson-callout reveal">
            Embedded systems bring us closer to the lower layers of the abstraction ladder.
          </p>
        </section>

        <section className="lesson-section wrap" id="misconceptions">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>myth_vs_reality
            </div>
            <h2>Common misconceptions.</h2>
          </div>
          <div className="myth-list">
            {misconceptions.map(([myth, reality], index) => (
              <details className={`myth-card reveal d${Math.min(index, 5)}`} key={myth}>
                <summary>
                  <span className="myth-label mono">MYTH</span>
                  <strong>{myth}</strong>
                </summary>
                <p>
                  <span className="reality-label mono">REALITY</span>
                  {reality}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="exercise">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>hands_on_timeline
            </div>
            <h2>Exercise: complete the programming evolution timeline.</h2>
            <p>
              Fill in the missing stages and write one sentence explaining why each step mattered.
            </p>
          </div>
          <div className="exercise-grid">
            <form className="worksheet-card timeline-worksheet reveal" aria-label="Programming evolution worksheet">
              <div className="blank-timeline mono" aria-label="Timeline to complete">
                {["Babbage/Lovelace", "Punch cards", "Assembly", "C", "Java/Python/JavaScript", "Cloud/Web/AI"].map(
                  (item) => (
                    <span key={item}>{item}</span>
                  )
                )}
              </div>
              {[
                "What problem did each stage solve?",
                "What new abstraction did it introduce?",
                "Which stage feels closest to hardware?",
                "Which stage feels closest to human thinking?",
                "Where do embedded systems fit in this timeline?",
              ].map((question, index) => (
                <label key={question}>
                  <span>
                    {index + 1}. {question}
                  </span>
                  <textarea name={`question-${index + 1}`} rows={2}></textarea>
                </label>
              ))}
            </form>
            <article className="sample-answer panel reveal d1">
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  partial_answer<span className="ext">.txt</span>
                </span>
              </div>
              <div className="sample-body">
                <h3>Punch cards</h3>
                <p>
                  <strong>Problem solved:</strong> Machines needed repeatable instructions.
                </p>
                <p>
                  <strong>New abstraction:</strong> Instructions could be stored as physical patterns.
                </p>
                <p>
                  <strong>Why it mattered:</strong> Programs could be reused instead of manually recreated.
                </p>
                <h3>C</h3>
                <p>
                  <strong>Problem solved:</strong> Assembly was too detailed for building larger software.
                </p>
                <p>
                  <strong>New abstraction:</strong> Variables, functions, structured programming, portable code.
                </p>
                <p>
                  <strong>Why it mattered:</strong> Programmers could write efficient code without writing every CPU instruction manually.
                </p>
              </div>
            </article>
          </div>
          <pre className="template-block reveal" aria-label="Copyable timeline worksheet template"><code>{`Stage:
Problem solved:
New abstraction:
Why it mattered:

Closest to hardware:
Closest to human thinking:
Where embedded systems fit:`}</code></pre>
        </section>

        <section className="lesson-section wrap" id="recap">
          <div className="recap-card reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>recap
            </div>
            <h2>What to keep in your head.</h2>
            <ul>
              <li>Programming evolved to help humans control complex machines.</li>
              <li>Each major step introduced a new abstraction.</li>
              <li>Low-level code gives more control but is harder for humans.</li>
              <li>High-level code is easier for humans but depends on more layers.</li>
              <li>Operating systems, the internet, cloud, mobile, AI, and embedded systems are all part of this evolution.</li>
              <li>Embedded systems keep programmers connected to hardware and the physical world.</li>
            </ul>
            <div className="recap-flow mono">
              <span>Complex machines</span>
              <TinyArrow />
              <span>Need control</span>
              <TinyArrow />
              <span>New abstractions</span>
              <TinyArrow />
              <span>Bigger systems</span>
              <TinyArrow />
              <span>Modern computing</span>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="next">
          <div className="next-card reveal">
            <div>
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>next_lesson
              </div>
              <h2>Next: How a Computer Actually Works</h2>
              <p>
                Next, we will look inside the machine and understand CPU, memory, storage, buses,
                and what actually happens when a program runs.
              </p>
              <div className="architecture-preview mono" aria-label="Computer architecture preview">
                <span>CPU</span>
                <span>RAM</span>
                <span>Storage</span>
                <span>Bus</span>
              </div>
            </div>
            <div className="lesson-nav-actions">
              <Link href="/#modules" className="btn btn-ghost">
                Back to Course Roadmap
              </Link>
              <Link href="/modules/what-is-this-course-about" className="btn btn-ghost">
                Previous: Module 0
              </Link>
              <button className="btn btn-disabled" disabled>
                Next: Module 2
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer brandHref="/" sectionPrefix="/" />
      <ScrollReveal />
    </>
  );
}
