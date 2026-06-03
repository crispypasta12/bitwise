import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Module 0: What Is This Course About? | Bitwise",
  description:
    "Orientation lesson for Bitwise: understand programming, software, hardware, systems, engineering roles, and the course map.",
};

const learningGoals = [
  "What programming is",
  "What software is",
  "What hardware is",
  "What a system is",
  "How software and hardware work together",
  "How programmer, software engineer, embedded engineer, and systems engineer differ",
  "Why this course exists",
];

const coreConcepts = [
  {
    label: "A",
    title: "What is programming?",
    short: "Programming is giving instructions to a computer to solve a problem or perform a task.",
    examples: ["Calculator app", "Traffic light controller", "Game character movement", "Temperature sensor reading"],
    diagram: ["Problem", "Instructions", "Computer action"],
  },
  {
    label: "B",
    title: "What is software?",
    short: "Software is the instructions, logic, data, and behavior that runs on hardware.",
    examples: ["Apps", "Websites", "Operating systems", "Firmware", "Scripts"],
    diagram: ["App", "OS", "Firmware", "Script"],
  },
  {
    label: "C",
    title: "What is hardware?",
    short: "Hardware is the physical part of a computing system: the electronics you can touch, power, connect, and sometimes break.",
    examples: ["CPU", "Memory", "Storage", "Screen", "Sensors", "Motors", "Microcontrollers"],
    diagram: ["CPU", "RAM", "Sensor", "Motor"],
  },
  {
    label: "D",
    title: "What is a system?",
    short: "A system is a group of parts working together to achieve a goal.",
    examples: ["A smartphone", "A washing machine", "A web app", "A robot", "A traffic signal"],
    diagram: ["Parts", "Connections", "Goal"],
  },
];

const mentalLayers = [
  ["User problem", "What someone wants to do", "UP"],
  ["Software", "The logic that solves the problem", "SW"],
  ["Operating system / firmware", "The layer that manages resources or controls hardware", "OS"],
  ["Hardware", "The physical electronics doing the work", "HW"],
  ["Real-world action", "The visible result", "RW"],
];

const engineerSteps = [
  ["Touchscreen input", "The phone records where your finger touched.", "IN"],
  ["OS event", "The operating system turns that touch into an event.", "OS"],
  ["App process starts", "The app gets memory and begins running.", "PR"],
  ["Code executes", "Program instructions decide what to show and do.", "CD"],
  ["Memory is used", "Data is loaded, stored, and updated.", "MM"],
  ["Screen updates", "Pixels change so you see the app.", "UI"],
  ["Network calls may happen", "The app may fetch remote data.", "NW"],
];

const roles = [
  {
    title: "Programmer",
    icon: "{}",
    focus: "Writing code to solve tasks",
    question: "How do I make this feature work?",
  },
  {
    title: "Software Engineer",
    icon: "SE",
    focus: "Building reliable, maintainable software systems",
    question: "How do we design, test, scale, and maintain this?",
  },
  {
    title: "Embedded Engineer",
    icon: "MCU",
    focus: "Writing software that runs close to hardware",
    question: "How do I make this device sense, respond, communicate, and stay reliable?",
  },
  {
    title: "Systems Engineer",
    icon: "SYS",
    focus: "Understanding the whole system and how parts interact",
    question: "How do hardware, software, requirements, risks, and constraints fit together?",
  },
];

const roadmapStages = [
  ["Foundations", "Programming basics and how computers run code"],
  ["Languages", "Why different programming languages exist"],
  ["Software Domains", "Frontend, backend, databases, and web apps"],
  ["Embedded", "Microcontrollers, sensors, hardware communication, and real-time constraints"],
  ["Professional Workflow", "Testing, debugging, reliability, and systems thinking"],
  ["Capstone", "End-to-end projects that connect code to real systems"],
];

const misconceptions = [
  [
    "Programming is just memorizing syntax.",
    "Syntax matters, but programming is mostly problem solving: breaking a goal into precise steps a computer can follow.",
  ],
  [
    "Software and hardware are separate worlds.",
    "They constantly interact. Software reads inputs, uses memory and processors, controls devices, and changes the real world.",
  ],
  [
    "One programming language is the best.",
    "Languages are tools with tradeoffs. The right choice depends on the problem, platform, team, and constraints.",
  ],
  [
    "Embedded systems are only for advanced engineers.",
    "The basics can be learned step by step: inputs, outputs, timing, memory, power, and reliability.",
  ],
  [
    "Systems engineering is only management.",
    "It is technical thinking about how parts interact, what can fail, and what constraints shape the design.",
  ],
];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="lesson-badge mono">{children}</span>;
}

function ChipIcon({ children }: { children: React.ReactNode }) {
  return <span className="chip-icon mono" aria-hidden="true">{children}</span>;
}

function TinyArrow() {
  return <span className="tiny-arrow mono" aria-hidden="true">-&gt;</span>;
}

export default function ModuleZeroPage() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="ambient-blob"></div>
        <div className="ambient-blob"></div>
      </div>

      <Nav brandHref="/" sectionPrefix="/" />

      <main id="top" className="lesson-page">
        <section className="lesson-hero wrap">
          <div className="lesson-hero-grid">
            <div className="lesson-hero-copy">
              <span className="eyebrow mono">
                <span className="pulse-dot"></span>orientation.start()
              </span>
              <h1 className="reveal">Module 0: What Is This Course About?</h1>
              <p className="lesson-subtitle reveal d1">
                Before learning syntax, let&apos;s understand what programming is really for.
              </p>
              <div className="lesson-badges reveal d2" aria-label="Lesson metadata">
                <Badge>Difficulty: Beginner</Badge>
                <Badge>Duration: 20-30 minutes</Badge>
                <Badge>Tier: Orientation</Badge>
              </div>
            </div>

            <div className="system-map panel reveal d2" aria-label="Course map visual">
              <div className="titlebar">
                <span className="dots"><i></i><i></i><i></i></span>
                <span className="file mono">course_map<span className="ext">.system</span></span>
                <span className="right mono">module_00</span>
              </div>
              <div className="system-map-body">
                <div className="map-orbit" aria-hidden="true">
                  <span className="map-node node-code">Code</span>
                  <span className="map-node node-software">Software</span>
                  <span className="map-node node-systems">Systems</span>
                  <span className="map-node node-hardware">Hardware</span>
                  <span className="map-node node-world">Real world</span>
                  <span className="map-chip mono">CPU</span>
                  <span className="map-card mono">{`if (idea) build();`}</span>
                </div>
                <div className="course-map-line mono">
                  <span>Code</span><TinyArrow /><span>Software</span><TinyArrow />
                  <span>Systems</span><TinyArrow /><span>Hardware</span><TinyArrow /><span>Real World</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="hook">
          <div className="map-card-wide reveal">
            <div>
              <div className="section-tag mono"><span className="cmt">{"// "}</span>map_before_forest</div>
              <h2>Most beginners start with syntax. That is only the trailhead.</h2>
              <p>
                You may learn variables, loops, functions, and arrays, but still wonder:
                where does this code go? What runs it? How does it become an app, a website,
                a device, or a machine that reacts to the real world?
              </p>
              <p>
                Before entering a forest, it helps to look at the map. This course is the map
                of programming, software, hardware, and systems.
              </p>
            </div>
            <div className="path-visual" aria-label="Learning path from beginner to systems">
              {["Beginner", "Code", "Software", "Web", "Embedded", "Systems"].map((item, index) => (
                <div className="path-step" key={item}>
                  <ChipIcon>{String(index).padStart(2, "0")}</ChipIcon>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="goals">
          <div className="section-head reveal">
            <div className="section-tag mono"><span className="cmt">{"// "}</span>mission_checklist</div>
            <h2>By the end of this module, you should understand:</h2>
          </div>
          <div className="goal-grid">
            {learningGoals.map((goal, index) => (
              <article className={`goal-card reveal d${Math.min(index, 5)}`} key={goal}>
                <ChipIcon>OK</ChipIcon>
                <p>{goal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="core-concepts">
          <div className="section-head reveal">
            <div className="section-tag mono"><span className="cmt">{"// "}</span>core_concepts</div>
            <h2>The four words that unlock the course.</h2>
            <p>These are simple ideas, but they connect almost everything you will learn later.</p>
          </div>
          <div className="concept-grid">
            {coreConcepts.map((concept, index) => (
              <article className={`concept-card reveal d${Math.min(index, 5)}`} key={concept.title}>
                <div className="concept-top">
                  <ChipIcon>{concept.label}</ChipIcon>
                  <h3>{concept.title}</h3>
                </div>
                <p>{concept.short}</p>
                <div className="mini-flow" aria-label={`${concept.title} diagram`}>
                  {concept.diagram.map((item, i) => (
                    <span key={item} className="mini-flow-item">
                      {item}
                      {i < concept.diagram.length - 1 ? <TinyArrow /> : null}
                    </span>
                  ))}
                </div>
                <ul className="example-list">
                  {concept.examples.map((example) => <li key={example}>{example}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="smartphone-system panel reveal">
            <div className="titlebar">
              <span className="dots"><i></i><i></i><i></i></span>
              <span className="file mono">smartphone_as_system<span className="ext">.diagram</span></span>
            </div>
            <div className="phone-diagram" aria-label="Smartphone system diagram">
              <div className="phone-center mono">Smartphone</div>
              {["Screen", "Battery", "CPU", "OS", "App", "Sensor", "Network", "User"].map((part) => (
                <span className="phone-node" key={part}>{part}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="mental-model">
          <div className="section-head reveal">
            <div className="section-tag mono"><span className="cmt">{"// "}</span>mental_model.pipeline</div>
            <h2>The layered model: from human need to real-world action.</h2>
            <p>This is the big picture. Code is not floating in space; it sits in a stack.</p>
          </div>
          <div className="layer-pipeline reveal" aria-label="Layered model from user problem to real-world action">
            <span className="pipeline-pulse" aria-hidden="true"></span>
            {mentalLayers.map(([title, text, icon], index) => (
              <div className={`layer-card d${Math.min(index, 5)}`} key={title}>
                <ChipIcon>{icon}</ChipIcon>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="worked-example">
          <div className="section-head reveal">
            <div className="section-tag mono"><span className="cmt">{"// "}</span>worked_example</div>
            <h2>Example: pressing a phone button opens an app.</h2>
          </div>
          <div className="comparison-grid">
            <article className="beginner-view reveal">
              <h3>Beginner view</h3>
              <div className="tap-flow" aria-label="Tap icon then app opens">
                <span className="tap-icon">Tap icon</span>
                <TinyArrow />
                <span className="tap-icon">App opens</span>
              </div>
              <p>Simple, useful, and true from the user&apos;s perspective.</p>
            </article>
            <article className="engineer-view reveal d1">
              <h3>Engineer view</h3>
              <ol className="engineer-timeline">
                {engineerSteps.map(([title, text, icon]) => (
                  <li key={title}>
                    <ChipIcon>{icon}</ChipIcon>
                    <div>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </div>
          <p className="lesson-callout reveal">
            Engineers learn to see the hidden layers behind simple user actions. That is not magic;
            it is practice, vocabulary, and good mental models.
          </p>
        </section>

        <section className="lesson-section wrap" id="roles">
          <div className="section-head reveal">
            <div className="section-tag mono"><span className="cmt">{"// "}</span>role_comparison</div>
            <h2>Different roles, overlapping skills.</h2>
            <p>These are not strict boxes. In real work, the boundaries overlap.</p>
          </div>
          <div className="role-grid">
            {roles.map((role, index) => (
              <article className={`role-card reveal d${Math.min(index, 5)}`} key={role.title}>
                <ChipIcon>{role.icon}</ChipIcon>
                <h3>{role.title}</h3>
                <p><strong>Focus:</strong> {role.focus}</p>
                <p><strong>Typical question:</strong> {`"${role.question}"`}</p>
              </article>
            ))}
          </div>
          <div className="overlap-visual reveal" aria-label="Role overlap visual">
            <span>Code</span>
            <span>Design</span>
            <span>Hardware</span>
            <span>Constraints</span>
            <strong>Shared engineering mindset</strong>
          </div>
        </section>

        <section className="lesson-section wrap" id="why-course">
          <div className="section-head reveal">
            <div className="section-tag mono"><span className="cmt">{"// "}</span>why_this_course_exists</div>
            <h2>This course teaches programming as part of a bigger system.</h2>
            <p>
              Most courses teach programming as syntax first. Syntax is important, but it is not
              the destination. You are here to learn how code becomes useful systems.
            </p>
          </div>
          <div className="course-roadmap reveal" aria-label="Course roadmap timeline">
            {roadmapStages.map(([stage, text], index) => (
              <article className="road-stage" key={stage}>
                <ChipIcon>{String(index + 1).padStart(2, "0")}</ChipIcon>
                <h3>{stage}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="misconceptions">
          <div className="section-head reveal">
            <div className="section-tag mono"><span className="cmt">{"// "}</span>myth_vs_reality</div>
            <h2>Common beginner misconceptions.</h2>
          </div>
          <div className="myth-list">
            {misconceptions.map(([myth, reality], index) => (
              <details className={`myth-card reveal d${Math.min(index, 5)}`} key={myth}>
                <summary>
                  <span className="myth-label mono">MYTH</span>
                  <strong>{myth}</strong>
                </summary>
                <p><span className="reality-label mono">REALITY</span>{reality}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="exercise">
          <div className="section-head reveal">
            <div className="section-tag mono"><span className="cmt">{"// "}</span>hands_on_reflection</div>
            <h2>Exercise: break down one everyday device as a system.</h2>
            <p>Pick a smartphone, microwave, washing machine, smartwatch, car key fob, printer, or game controller.</p>
          </div>
          <div className="worksheet-grid">
            <form className="worksheet-card reveal" aria-label="Device system worksheet">
              {[
                "Device",
                "User problem it solves",
                "Software involved",
                "Hardware involved",
                "Inputs",
                "Outputs",
                "Real-world action",
                "What could go wrong?",
              ].map((label) => (
                <label key={label}>
                  <span>{label}</span>
                  <input type="text" name={label.toLowerCase().replaceAll(" ", "-")} />
                </label>
              ))}
            </form>
            <article className="sample-answer panel reveal d1">
              <div className="titlebar">
                <span className="dots"><i></i><i></i><i></i></span>
                <span className="file mono">sample_answer<span className="ext">.txt</span></span>
              </div>
              <div className="sample-body">
                <h3>Smartphone alarm</h3>
                <p><strong>User problem:</strong> Wake up on time</p>
                <p><strong>Software:</strong> Clock app, operating system, notification/audio system</p>
                <p><strong>Hardware:</strong> Speaker, screen, battery, processor</p>
                <p><strong>Inputs:</strong> Alarm time set by user</p>
                <p><strong>Outputs:</strong> Sound, vibration, screen notification</p>
                <p><strong>Real-world action:</strong> User wakes up</p>
                <p><strong>What could go wrong:</strong> Battery dies, volume too low, app bug, OS notification issue</p>
              </div>
            </article>
          </div>
          <pre className="template-block reveal" aria-label="Copyable worksheet template"><code>{`Device:
User problem it solves:
Software involved:
Hardware involved:
Inputs:
Outputs:
Real-world action:
What could go wrong:`}</code></pre>
        </section>

        <section className="lesson-section wrap" id="recap">
          <div className="recap-card reveal">
            <div className="section-tag mono"><span className="cmt">{"// "}</span>recap</div>
            <h2>What to keep in your head.</h2>
            <ul>
              <li>Programming is instruction-giving for solving problems.</li>
              <li>Software is logic and behavior.</li>
              <li>Hardware is the physical machine.</li>
              <li>A system is many parts working together.</li>
              <li>Engineers learn to see hidden layers behind simple actions.</li>
              <li>This course moves from basic programming to complete systems.</li>
            </ul>
            <div className="recap-flow mono">
              <span>Problem</span><TinyArrow /><span>Software</span><TinyArrow />
              <span>Hardware</span><TinyArrow /><span>Real-world action</span>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="next">
          <div className="next-card reveal">
            <div>
              <div className="section-tag mono"><span className="cmt">{"// "}</span>next_lesson</div>
              <h2>Next: A Short History of Programming</h2>
              <p>
                Next, we will look at how programming evolved from mechanical computation and
                punch cards to assembly and modern high-level languages.
              </p>
              <div className="history-preview mono" aria-label="History preview timeline">
                <span>Mechanical computation</span><TinyArrow /><span>Punch cards</span>
                <TinyArrow /><span>Assembly</span><TinyArrow /><span>High-level languages</span>
              </div>
            </div>
            <div className="lesson-nav-actions">
              <Link href="/#modules" className="btn btn-ghost">Back to Course Roadmap</Link>
              <Link href="/modules/short-history-of-programming" className="btn btn-primary">Start Module 1</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer brandHref="/" sectionPrefix="/" />
      <ScrollReveal />
    </>
  );
}
