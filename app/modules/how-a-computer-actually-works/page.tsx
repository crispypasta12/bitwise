import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Module 2: How a Computer Actually Works | Bitwise",
  description:
    "A beginner-friendly visual lesson on CPU, RAM, storage, input/output, buses, binary, instructions, and the fetch-decode-execute cycle.",
};

const learningGoals = [
  ["CPU", "What the CPU does"],
  ["RAM", "What RAM is used for"],
  ["STOR", "Why storage is different from RAM"],
  ["I/O", "What input and output mean"],
  ["BUS", "What a bus does"],
  ["01", "Why computers use binary"],
  ["INST", "What instructions are"],
  ["FDE", "What the fetch-decode-execute cycle means"],
  ["APP", "What happens when opening a simple app"],
];

const analogyPairs = [
  ["Worker", "CPU", "Reads instructions and performs the work."],
  ["Desk", "RAM", "Keeps active papers nearby while work is happening."],
  ["Filing cabinet", "Storage", "Keeps files and programs long-term."],
  ["Instruction sheet", "Program", "Lists the steps to follow."],
  ["Phone, window, screen", "Input / Output", "Communicates with the outside world."],
  ["Hallways and roads", "Bus", "Moves information between places."],
];

const components = [
  {
    key: "cpu",
    icon: "CPU",
    title: "CPU",
    analogy: "The worker reading instructions and doing tasks one step at a time.",
    text: "The CPU is the part that executes instructions. It performs calculations, makes decisions, and controls the flow of a program.",
    bullets: ["Executes instructions", "Performs arithmetic and logic", "Makes decisions", "Coordinates work", "Works extremely fast"],
  },
  {
    key: "ram",
    icon: "RAM",
    title: "RAM",
    analogy: "The desk where active work is spread out.",
    text: "RAM is temporary working memory. It holds the program and data currently being used.",
    bullets: ["Fast", "Temporary", "Used while programs are running", "Cleared when power is off"],
  },
  {
    key: "storage",
    icon: "SSD",
    title: "Storage",
    analogy: "The filing cabinet where files stay until needed.",
    text: "Storage keeps data long-term, even when the power is off.",
    bullets: ["Long-term", "Slower than RAM", "Stores files and applications", "Keeps data after shutdown"],
  },
  {
    key: "io",
    icon: "I/O",
    title: "Input and Output",
    analogy: "The computer communicating with people, devices, and the physical world.",
    text: "Input is how the computer receives information. Output is how it shows or sends results.",
    bullets: ["Keyboard, mouse, touchscreen", "Microphone, camera, sensor", "Screen, speaker, printer", "LED, motor, relay, network response"],
  },
  {
    key: "bus",
    icon: "BUS",
    title: "Bus",
    analogy: "The roads and wires connecting the buildings.",
    text: "A bus is a communication pathway that moves data between computer components.",
    bullets: ["Moves data", "Connects components", "Carries addresses, data, and control signals", "The beginner idea: information needs roads"],
  },
];

const instructions = [
  ["LOAD", "Get data from memory"],
  ["ADD", "Add two values"],
  ["STORE", "Save a result"],
  ["JUMP", "Move to another instruction"],
  ["CMP", "Compare values"],
];

const cycleSteps = [
  ["Fetch", "CPU gets the next instruction from memory.", "Get ADD 2 + 3"],
  ["Decode", "CPU figures out what the instruction means.", "This means add two numbers"],
  ["Execute", "CPU performs the instruction.", "Calculate 5"],
];

const calculatorSteps = [
  ["01", "Click icon", "The user gives input."],
  ["02", "OS loads program from storage", "The operating system finds the calculator app files."],
  ["03", "Program goes into RAM", "The active parts of the app are placed into working memory."],
  ["04", "CPU starts executing instructions", "The CPU begins running the app's instructions."],
  ["05", "UI appears", "The screen shows the calculator interface."],
  ["06", "User enters numbers", "Keyboard, mouse, or touchscreen input is received."],
  ["07", "CPU calculates", "The program's instructions tell the CPU what math to perform."],
  ["08", "Result is shown", "The display updates with the answer."],
];

const engineerFlow = [
  "Input event",
  "OS handles request",
  "App loaded from storage",
  "Instructions/data placed in RAM",
  "CPU fetches, decodes, executes",
  "Display output updates",
];

const embeddedExamples = [
  "Set a GPIO pin high to turn on an LED",
  "Read a value from a sensor",
  "Send bytes over UART",
  "Store data in flash memory",
  "React to a button press",
  "Control a motor",
];

const misconceptions = [
  ["The CPU stores all my files.", "Files are stored in storage. The CPU executes instructions."],
  ["RAM and storage are the same thing.", "RAM is temporary working memory. Storage is long-term memory."],
  ["A computer understands Python or C directly.", "The computer ultimately executes machine instructions. Higher-level code must be translated or interpreted."],
  ["Binary is only for old computers.", "Modern computers still rely on binary because hardware circuits represent states reliably."],
  ["Opening an app is simple.", "It looks simple to the user, but many layers work together underneath."],
];

const recapItems = [
  "The CPU executes instructions.",
  "RAM holds active programs and data temporarily.",
  "Storage keeps files and programs long-term.",
  "Input/output lets the computer communicate with users and the outside world.",
  "Buses move data between parts.",
  "Binary represents information using 0s and 1s.",
  "A program runs as instructions that the CPU repeatedly fetches, decodes, and executes.",
  "Opening an app involves storage, RAM, CPU, OS, input, and output working together.",
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

export default function ModuleTwoPage() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="ambient-blob"></div>
        <div className="ambient-blob"></div>
      </div>

      <Nav brandHref="/" sectionPrefix="/" />

      <main id="top" className="lesson-page computer-lesson">
        <section className="lesson-hero wrap computer-hero">
          <div className="lesson-hero-grid">
            <div className="lesson-hero-copy">
              <span className="eyebrow mono">
                <span className="pulse-dot"></span>machine.inspect()
              </span>
              <h1 className="reveal">Module 2: How a Computer Actually Works</h1>
              <p className="lesson-subtitle reveal d1">
                Before writing code, let&apos;s understand the machine that runs it.
              </p>
              <div className="lesson-badges reveal d2" aria-label="Lesson metadata">
                <Badge>Difficulty: Beginner</Badge>
                <Badge>Duration: 30-40 minutes</Badge>
                <Badge>Tier: Foundations</Badge>
              </div>
            </div>

            <div className="computer-hero-visual panel reveal d2" aria-label="Computer component diagram">
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  machine_map<span className="ext">.diagram</span>
                </span>
                <span className="right mono">module_02</span>
              </div>
              <div className="motherboard-map">
                <span className="bus-line horizontal one" aria-hidden="true"></span>
                <span className="bus-line horizontal two" aria-hidden="true"></span>
                <span className="bus-line vertical one" aria-hidden="true"></span>
                <span className="data-pulse p1" aria-hidden="true"></span>
                <span className="data-pulse p2" aria-hidden="true"></span>
                <div className="board-part cpu mono">CPU</div>
                <div className="board-part ram mono">RAM</div>
                <div className="board-part storage mono">Storage</div>
                <div className="board-part io mono">Input / Output</div>
                <div className="board-part bus mono">Bus lines</div>
                <div className="hero-stack mono" aria-label="Program to output layer stack">
                  {["Program", "CPU", "Memory", "Hardware", "Output"].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="hook">
          <div className="map-card-wide reveal">
            <div>
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>under_the_screen
              </div>
              <h2>Opening an app feels like magic. Underneath, it is a machine following steps.</h2>
              <p>
                A beginner usually sees a computer as a screen, keyboard, apps, and files. Inside,
                the computer is constantly moving data, loading instructions, executing operations,
                and communicating with hardware.
              </p>
              <p>
                When you open an app, the operating system loads instructions from storage into
                memory, the CPU executes them, and hardware updates the screen.
              </p>
              <p className="lesson-callout">
                A computer is not smart by itself. It follows instructions extremely quickly.
              </p>
            </div>
            <div className="view-switch" aria-label="Beginner view compared with engineer view">
              <article>
                <span className="mono">Beginner view</span>
                <strong>Click icon</strong>
                <TinyArrow />
                <strong>App opens</strong>
              </article>
              <article>
                <span className="mono">Engineer view</span>
                <div className="mini-system-flow mono">
                  <span>Storage</span>
                  <TinyArrow />
                  <span>RAM</span>
                  <TinyArrow />
                  <span>CPU</span>
                  <TinyArrow />
                  <span>Screen</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="goals">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>learning_goals
            </div>
            <h2>By the end of this module, you should understand:</h2>
          </div>
          <div className="goal-grid computer-goals">
            {learningGoals.map(([icon, goal], index) => (
              <article className={`goal-card reveal d${Math.min(index, 5)}`} key={goal}>
                <ChipIcon>{icon}</ChipIcon>
                <p>{goal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="mental-model">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>office_analogy
            </div>
            <h2>The big mental model: an office worker solving tasks.</h2>
            <p>
              The worker is the CPU. The desk is RAM. The filing cabinet is storage. The
              instruction sheet is the program. The outside world communicates through input and
              output. The hallways are the buses.
            </p>
          </div>
          <div className="analogy-board reveal" aria-label="Office analogy mapped to computer components">
            {analogyPairs.map(([office, machine, text], index) => (
              <article className={`analogy-pair d${Math.min(index, 5)}`} key={office}>
                <div className="analogy-side">
                  <span className="mono">office</span>
                  <strong>{office}</strong>
                </div>
                <TinyArrow />
                <div className="analogy-side machine">
                  <span className="mono">computer</span>
                  <strong>{machine}</strong>
                </div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="components">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>core_components
            </div>
            <h2>The parts that make the machine feel alive.</h2>
            <p>Each part has a simple job. The power comes from how quickly they work together.</p>
          </div>
          <div className="component-grid">
            {components.map((component, index) => (
              <article className={`component-card ${component.key} reveal d${Math.min(index, 5)}`} key={component.title}>
                <div className="component-visual" aria-hidden="true">
                  <ChipIcon>{component.icon}</ChipIcon>
                  <span className="instruction-in mono">instruction in</span>
                  <TinyArrow />
                  <span className="result-out mono">result out</span>
                </div>
                <h3>{component.title}</h3>
                <p>{component.text}</p>
                <p className="analogy-note">{component.analogy}</p>
                <ul>
                  {component.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="load-flow panel reveal">
            <div className="titlebar">
              <span className="dots">
                <i></i>
                <i></i>
                <i></i>
              </span>
              <span className="file mono">
                load_app<span className="ext">.flow</span>
              </span>
            </div>
            <div className="storage-to-ram mono" aria-label="Application loaded from storage into RAM">
              <span>Storage: app files</span>
              <TinyArrow />
              <span>RAM: active program</span>
              <TinyArrow />
              <span>CPU: running instructions</span>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="binary">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>binary_and_instructions
            </div>
            <h2>Binary is the machine&apos;s reliable language of states.</h2>
            <p>
              Hardware circuits can reliably represent two states: off/on, low/high voltage, 0/1.
              A bit is one binary value. A byte is usually 8 bits.
            </p>
          </div>
          <div className="binary-grid">
            <article className="binary-card reveal" aria-label="Binary switch visual">
              <h3>Bits and bytes</h3>
              <div className="switch-row" aria-hidden="true">
                {["0", "1", "0", "0", "1", "0", "0", "0"].map((bit, index) => (
                  <span className={bit === "1" ? "on" : ""} key={`${bit}-${index}`}>
                    {bit}
                  </span>
                ))}
              </div>
              <div className="bit-examples mono">
                <span>1 bit: 0 or 1</span>
                <span>1 byte: 01001000</span>
              </div>
            </article>
            <article className="instruction-card reveal d1">
              <h3>Instructions</h3>
              <p>An instruction is a tiny command the CPU understands.</p>
              <div className="instruction-grid mono">
                {instructions.map(([name, text]) => (
                  <span key={name}>
                    <strong>{name}</strong>
                    <small>{text}</small>
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="lesson-section wrap" id="cycle">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>fetch_decode_execute
            </div>
            <h2>The CPU keeps repeating a simple loop.</h2>
            <p>
              Real CPUs are more complex, but fetch-decode-execute is the beginner mental model:
              get the instruction, understand it, perform it, then repeat.
            </p>
          </div>
          <div className="cycle-grid">
            <div className="cycle-diagram reveal" aria-label="Fetch decode execute cycle">
              <span className="cycle-pulse" aria-hidden="true"></span>
              {cycleSteps.map(([title, text, example], index) => (
                <article className={`cycle-step s${index + 1}`} key={title}>
                  <ChipIcon>{String(index + 1).padStart(2, "0")}</ChipIcon>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <code>{example}</code>
                </article>
              ))}
            </div>
            <article className="cycle-example panel reveal d1">
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  instruction_trace<span className="ext">.txt</span>
                </span>
              </div>
              <div className="sample-body">
                <h3>Instruction: ADD 2 + 3</h3>
                <p><strong>Fetch:</strong> CPU gets the instruction.</p>
                <p><strong>Decode:</strong> CPU understands it needs to add two numbers.</p>
                <p><strong>Execute:</strong> CPU calculates 5.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="lesson-section wrap" id="calculator">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>worked_example.calculator
            </div>
            <h2>Worked example: opening a calculator app.</h2>
            <p>
              The visible action is small. The system walkthrough shows storage, RAM, CPU, input,
              output, and the operating system working together.
            </p>
          </div>
          <div className="calculator-grid">
            <ol className="calculator-timeline reveal">
              {calculatorSteps.map(([num, title, text]) => (
                <li key={title}>
                  <ChipIcon>{num}</ChipIcon>
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ol>
            <article className="office-trace panel reveal d1">
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  office_equivalent<span className="ext">.note</span>
                </span>
              </div>
              <div className="sample-body">
                <h3>Office analogy</h3>
                <p>
                  The worker gets an instruction sheet from the filing cabinet, places it on the
                  desk, follows the steps, receives input, performs the calculation, and shows the
                  result.
                </p>
                <div className="calculator-flow mono" aria-label="Storage RAM CPU screen flow">
                  <span>Storage</span>
                  <TinyArrow />
                  <span>RAM</span>
                  <TinyArrow />
                  <span>CPU</span>
                  <TinyArrow />
                  <span>Screen</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="lesson-section wrap" id="views">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>beginner_vs_engineer
            </div>
            <h2>The user sees the result. The engineer sees the hidden layers.</h2>
          </div>
          <div className="comparison-grid">
            <article className="beginner-view reveal">
              <h3>Beginner view</h3>
              <div className="tap-flow mono" aria-label="Beginner calculator flow">
                <span className="tap-icon">Click calculator icon</span>
                <TinyArrow />
                <span className="tap-icon">Calculator opens</span>
                <TinyArrow />
                <span className="tap-icon">Type numbers</span>
                <TinyArrow />
                <span className="tap-icon">See answer</span>
              </div>
            </article>
            <article className="engineer-view reveal d1">
              <h3>Engineer view</h3>
              <ol className="engineer-timeline">
                {engineerFlow.map((step, index) => (
                  <li key={step}>
                    <ChipIcon>{String(index + 1).padStart(2, "0")}</ChipIcon>
                    <div>
                      <strong>{step}</strong>
                      <span>Part of the hidden system layer behind the simple user action.</span>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="lesson-callout">
                Module 0 gave us the system map. Module 1 showed why layers exist. This module
                shows what the machine is doing underneath those layers.
              </p>
            </article>
          </div>
        </section>

        <section className="lesson-section wrap" id="embedded">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>embedded_connection
            </div>
            <h2>Embedded systems make the invisible layers visible.</h2>
            <p>
              In desktop and mobile programming, many hardware details are hidden by the operating
              system. In embedded systems, the programmer often directly controls hardware behavior.
            </p>
          </div>
          <div className="embedded-computer-grid">
            <article className="path-card reveal">
              <h3>Desktop / mobile</h3>
              <div className="path-stack mono" aria-label="Desktop application path">
                {["App", "Operating system", "Drivers", "Hardware"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
            <article className="path-card reveal d1">
              <h3>Embedded device</h3>
              <div className="path-stack embedded mono" aria-label="Embedded firmware path">
                {["Firmware", "Registers / peripherals", "Sensor / LED / motor"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>
          <div className="embedded-examples reveal d2">
            {embeddedExamples.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="component-match reveal d3" aria-label="Desktop parts mapped to embedded parts">
            {[
              ["CPU", "microcontroller core"],
              ["RAM", "small but important working memory"],
              ["Storage", "flash memory"],
              ["Input/output", "sensors, buttons, motors, LEDs"],
              ["Buses", "internal buses or I2C/SPI/UART"],
            ].map(([left, right]) => (
              <span key={left}>
                <strong>{left}</strong> becomes {right}
              </span>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="misconceptions">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>myth_vs_reality
            </div>
            <h2>Common beginner misconceptions.</h2>
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
              <span className="cmt">{"// "}</span>hands_on_trace
            </div>
            <h2>Exercise: trace what happens when opening a calculator app.</h2>
            <p>Fill in the missing parts, then compare your answer with the sample.</p>
          </div>
          <div className="worksheet-grid">
            <form className="worksheet-card trace-worksheet reveal" aria-label="Calculator trace worksheet">
              {[
                "I click the calculator icon.",
                "The operating system...",
                "The program is loaded from...",
                "The program goes into...",
                "The CPU starts...",
                "The calculator UI...",
                "I enter numbers using...",
                "The CPU...",
                "The result is shown on...",
              ].map((label, index) => (
                <label key={label}>
                  <span>{index + 1}. {label}</span>
                  <input type="text" name={`trace-${index + 1}`} />
                </label>
              ))}
              <div className="reflection-questions">
                <h3>Reflection questions</h3>
                {[
                  "Which part acts like the worker?",
                  "Which part acts like the desk?",
                  "Which part acts like the filing cabinet?",
                  "What is the input?",
                  "What is the output?",
                  "Where does the program live before it runs?",
                  "Where does the program go while it is running?",
                ].map((question, index) => (
                  <label key={question}>
                    <span>{question}</span>
                    <input type="text" name={`reflection-${index + 1}`} />
                  </label>
                ))}
              </div>
            </form>
            <article className="sample-answer panel reveal d1">
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  sample_answer<span className="ext">.txt</span>
                </span>
              </div>
              <div className="sample-body">
                <ol className="sample-ordered">
                  <li>I click the calculator icon.</li>
                  <li>The operating system receives the input and finds the calculator app.</li>
                  <li>The program is loaded from storage.</li>
                  <li>The program goes into RAM.</li>
                  <li>The CPU starts executing the program&apos;s instructions.</li>
                  <li>The calculator UI appears on the screen.</li>
                  <li>I enter numbers using the keyboard, mouse, or touchscreen.</li>
                  <li>The CPU performs the calculation according to the program instructions.</li>
                  <li>The result is shown on the display.</li>
                </ol>
              </div>
            </article>
          </div>
          <pre className="template-block reveal" aria-label="Copyable calculator trace template"><code>{`1. I click the calculator icon.
2. The operating system...
3. The program is loaded from...
4. The program goes into...
5. The CPU starts...
6. The calculator UI...
7. I enter numbers using...
8. The CPU...
9. The result is shown on...`}</code></pre>
        </section>

        <section className="lesson-section wrap" id="recap">
          <div className="recap-card reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>recap
            </div>
            <h2>What to keep in your head.</h2>
            <ul>
              {recapItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="recap-system mono" aria-label="Compact system recap diagram">
              <span>Input</span>
              <TinyArrow />
              <span>Storage</span>
              <TinyArrow />
              <span>RAM</span>
              <TinyArrow />
              <span>CPU</span>
              <TinyArrow />
              <span>Output</span>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="next">
          <div className="next-card reveal">
            <div>
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>next_lesson
              </div>
              <h2>Next: From Source Code to Running Program</h2>
              <p>
                Next, we will connect the code you write to the machine you learned about here.
                You will see how source code becomes something the computer can actually run
                through compilers, interpreters, runtimes, and operating systems.
              </p>
              <div className="source-preview mono" aria-label="Source code to running program preview">
                <span>Source code</span>
                <TinyArrow />
                <span>Compiler / interpreter</span>
                <TinyArrow />
                <span>Running program</span>
                <TinyArrow />
                <span>CPU</span>
              </div>
            </div>
            <div className="lesson-nav-actions">
              <Link href="/#modules" className="btn btn-ghost">
                Back to Course Roadmap
              </Link>
              <Link href="/modules/short-history-of-programming" className="btn btn-ghost">
                Previous: Module 1
              </Link>
              <Link href="/modules/from-source-code-to-running-program" className="btn btn-primary">
                Next: Module 3
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer brandHref="/" sectionPrefix="/" />
      <ScrollReveal />
    </>
  );
}
