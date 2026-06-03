import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Module 3: From Source Code to Running Program | Bitwise",
  description:
    "A beginner-friendly visual lesson on source code, compilers, interpreters, bytecode, virtual machines, linkers, runtimes, operating systems, and executables.",
};

const learningGoals = [
  ["SRC", "What source code is"],
  ["WHY", "Why computers need translation layers"],
  ["COMP", "What a compiler does"],
  ["INT", "What an interpreter does"],
  ["BYTE", "What bytecode and virtual machines are"],
  ["LINK", "What a linker does at a beginner level"],
  ["RUN", "What a runtime does"],
  ["EXE", "What an executable is"],
  ["OS", "What role the operating system plays when a program starts"],
  ["PATH", "Why C, Python, and Java/C# run differently"],
];

const layeredModel = [
  ["Human idea", "The goal in your head: print a message, read a sensor, calculate a value.", "IDEA"],
  ["Source code", "Human-readable text written in a programming language.", "SRC"],
  ["Translation / execution tools", "Compilers, interpreters, linkers, runtimes, or virtual machines prepare or run the code.", "TOOLS"],
  ["Machine instructions", "Low-level instructions that eventually reach the CPU.", "MACH"],
  ["CPU executes", "The CPU fetches, decodes, and executes instructions, as you saw in Module 2.", "CPU"],
  ["Program behavior", "The result appears as text, files, screen updates, network messages, or hardware action.", "OUT"],
];

const termCards = [
  {
    icon: "SRC",
    title: "Source Code",
    definition: "The human-readable text programmers write.",
    analogy: "A recipe written for people first, and tools second.",
    examples: [".c files", ".py files", ".java files", ".cs files", ".js files"],
  },
  {
    icon: "COMP",
    title: "Compiler",
    definition: "A tool that translates source code into another form before the program runs.",
    analogy: "A translator that reads the whole recipe and produces machine-ready instructions before execution.",
    examples: ["C compiler", "Java compiler", "C# compiler"],
  },
  {
    icon: "INT",
    title: "Interpreter",
    definition: "A program that runs code through a runtime environment instead of first producing a C-style standalone native executable.",
    analogy: "Someone reading instructions and carrying them out while the program runs.",
    examples: ["Python interpreter", "JavaScript runtime", "Shell interpreter"],
  },
  {
    icon: "BYTE",
    title: "Bytecode",
    definition: "An intermediate form lower-level than source code but not tied to one CPU the same way native machine code is.",
    analogy: "A portable instruction format for a virtual machine.",
    examples: ["Java bytecode", ".NET intermediate language", "internal Python bytecode"],
  },
  {
    icon: "VM",
    title: "Virtual Machine",
    definition: "A software-based execution environment that runs bytecode or intermediate language.",
    analogy: "A software machine that runs a portable version of your program.",
    examples: ["JVM", ".NET runtime environment"],
  },
  {
    icon: "LINK",
    title: "Linker",
    definition: "A tool that connects compiled code and libraries together to create a final program.",
    analogy: "A builder that combines your code with other code it depends on.",
    examples: ["Connects printf()", "Combines libraries", "Creates final executable"],
  },
  {
    icon: "RUN",
    title: "Runtime",
    definition: "The environment and support system a program needs while running.",
    analogy: "The language-specific support crew that helps the program run.",
    examples: ["Python runtime", "Java runtime/JVM", ".NET runtime", "C runtime library"],
  },
  {
    icon: "OS",
    title: "Operating System",
    definition: "The system software that loads programs and manages memory, files, input/output, and CPU time.",
    analogy: "The building manager that gives programs space and access to shared resources.",
    examples: ["Loads executable", "Manages RAM", "Handles files", "Schedules CPU time"],
  },
  {
    icon: "EXE",
    title: "Executable",
    definition: "A program file the operating system can load and run.",
    analogy: "A packaged program ready for the OS to start.",
    examples: [".exe on Windows", "Executable binary on Linux/macOS"],
  },
];

const executionPaths = [
  {
    label: "C",
    className: "c-path",
    primary: ["source code", "compiler", "machine code", "executable", "runs"],
    detailed: [".c source file", "compiler", "object code", "linker", "executable", "OS loads into RAM", "CPU executes instructions"],
    text:
      "C is usually compiled ahead of time. The compiler translates the source into lower-level output, the linker connects needed pieces, and the operating system loads the final executable.",
  },
  {
    label: "Python",
    className: "python-path",
    primary: ["source code", "interpreter/runtime", "runs"],
    detailed: [".py source file", "Python runtime starts", "program is read/executed", "OS provides services", "CPU runs instructions underneath"],
    text:
      "Python is usually run through the Python interpreter/runtime. Beginners do not normally create a standalone native executable manually in the same way as C.",
    note:
      "Some Python implementations may create intermediate bytecode internally, but the beginner mental model is: Python runs through an interpreter/runtime.",
  },
  {
    label: "Java / C#",
    className: "vm-path",
    primary: ["source code", "bytecode / IL", "VM/runtime", "runs"],
    detailed: ["source file", "compiler", "bytecode or intermediate language", "VM/runtime starts", "OS + CPU run lower-level instructions"],
    text:
      "Java and C# usually compile source code into an intermediate form first. That intermediate form runs on a virtual machine or runtime.",
    note:
      "Java source compiles to bytecode for the JVM. C# compiles to Intermediate Language for the .NET runtime.",
  },
];

const cRunSteps = [
  "Save source code.",
  "Compiler checks and translates code.",
  "Linker connects needed libraries.",
  "Executable is produced.",
  "OS loads the executable into memory.",
  "CPU executes the program instructions.",
];

const pythonRunSteps = [
  "Save source code.",
  "Python runtime/interpreter starts.",
  "It reads and executes the program.",
  "OS provides input/output services.",
  "CPU ultimately executes machine instructions underneath the runtime.",
];

const vmRunSteps = [
  "Save source code.",
  "Compiler creates bytecode or intermediate language.",
  "VM/runtime starts.",
  "VM/runtime executes or translates the intermediate form.",
  "OS and CPU run the lower-level instructions.",
];

const discussionQuestions = [
  ["Which one looks simpler?", "Python looks simpler for this example."],
  ["Which one gives more control?", "C gives more control and is closer to hardware."],
  ["Which one needs compilation?", "C usually needs compilation before running."],
  ["Which one is closer to hardware?", "C is closer to hardware."],
  ["Which one is faster to experiment with?", "Python is faster for quick experiments."],
  ["Which one might be more common in embedded systems?", "C is common in embedded systems."],
  ["Which one might be more common for scripting and automation?", "Python is common for scripting, automation, testing, and data work."],
];

const misconceptions = [
  [
    "The computer directly understands Python or C.",
    "The CPU ultimately executes machine instructions. Languages need compilers, interpreters, runtimes, or virtual machines.",
  ],
  [
    "Compiled languages are always better than interpreted languages.",
    "They have different tradeoffs. Compiled languages often give performance and control. Interpreted or runtime-based languages often give faster development and flexibility.",
  ],
  [
    "Python does not use the CPU because it uses an interpreter.",
    "The CPU still executes machine instructions underneath. The interpreter/runtime is itself a program running on the CPU.",
  ],
  [
    "An executable is the same thing as source code.",
    "Source code is human-readable text. An executable is a program file the OS can load and run.",
  ],
  [
    "If code works on my computer, it will always work everywhere.",
    "Programs depend on operating systems, runtimes, libraries, CPU architecture, and environment.",
  ],
];

const recapItems = [
  "Source code is written for humans.",
  "CPUs ultimately execute machine instructions.",
  "A compiler translates code before execution.",
  "An interpreter/runtime helps run code as the program executes.",
  "Bytecode or intermediate language sits between source code and machine code.",
  "A VM/runtime can run portable intermediate code.",
  "A linker connects compiled code with libraries.",
  "An executable is a program file the OS can load and run.",
  "Different languages use different paths because they optimize for different tradeoffs.",
  "Embedded firmware often makes the translation path from source code to hardware especially visible.",
];

const cHello = `#include <stdio.h>

int main(void)
{
    printf("Hello, world!\\n");
    return 0;
}`;

const pythonHello = `print("Hello, world!")`;

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

function InlinePipeline({ items }: { items: string[] }) {
  return (
    <div className="source-inline-pipeline mono">
      {items.map((item, index) => (
        <span className="source-inline-step" key={`${item}-${index}`}>
          {item}
          {index < items.length - 1 ? <TinyArrow /> : null}
        </span>
      ))}
    </div>
  );
}

function CodeCard({ title, ext, code }: { title: string; ext: string; code: string }) {
  return (
    <article className="source-code-card panel">
      <div className="titlebar">
        <span className="dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span className="file mono">
          {title}
          <span className="ext">{ext}</span>
        </span>
      </div>
      <pre className="source-code-block mono">
        <code>{code}</code>
      </pre>
    </article>
  );
}

function StepList({ title, steps }: { title: string; steps: string[] }) {
  return (
    <article className="run-step-card">
      <h3>{title}</h3>
      <ol>
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </article>
  );
}

export default function ModuleThreePage() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="ambient-blob"></div>
        <div className="ambient-blob"></div>
      </div>

      <Nav brandHref="/" sectionPrefix="/" />

      <main id="top" className="lesson-page source-lesson">
        <section className="lesson-hero wrap source-hero">
          <div className="lesson-hero-grid">
            <div className="lesson-hero-copy">
              <span className="eyebrow mono">
                <span className="pulse-dot"></span>run.trace()
              </span>
              <h1 className="reveal">Module 3: From Source Code to Running Program</h1>
              <p className="lesson-subtitle reveal d1">
                What really happens after you write code and press Run?
              </p>
              <div className="lesson-badges reveal d2" aria-label="Lesson metadata">
                <Badge>Difficulty: Beginner</Badge>
                <Badge>Duration: 35-45 minutes</Badge>
                <Badge>Tier: Foundations</Badge>
              </div>
            </div>

            <div className="source-hero-visual panel reveal d2" aria-label="Source code to running program pipeline">
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  source_to_run<span className="ext">.flow</span>
                </span>
                <span className="right mono">module_03</span>
              </div>
              <div className="source-hero-body">
                <div className="mini-editor mono" aria-label="Abstract source code editor">
                  <span><b>01</b> int main(void) {"{"}</span>
                  <span><b>02</b> &nbsp;&nbsp;{"printf(\"Hello\");"}</span>
                  <span><b>03</b> &nbsp;&nbsp;return 0;</span>
                  <span><b>04</b> {"}"}</span>
                </div>
                <div className="hero-translation-lane" aria-hidden="true">
                  <span className="code-packet p1">SRC</span>
                  <span className="code-packet p2">OBJ</span>
                  <span className="code-packet p3">EXE</span>
                </div>
                <div className="hero-machine" aria-label="CPU and computer visual">
                  <div className="hero-chip mono">CPU</div>
                  <div className="hero-screen mono">Running program</div>
                </div>
                <div className="hero-tool-row mono" aria-label="Tools between source code and CPU">
                  {["compiler", "interpreter", "runtime", "OS", "executable"].map((tool) => (
                    <span key={tool}>{tool}</span>
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
                <span className="cmt">{"// "}</span>the_hidden_translation
              </div>
              <h2>The computer does not naturally understand the code you write.</h2>
              <p>
                Beginners often imagine the computer directly reading C, Python, Java, C#, or
                JavaScript exactly as humans write it. That is not what happens.
              </p>
              <p>
                Source code is written for humans. Hardware executes low-level machine
                instructions. The tools in between translate, prepare, manage, or execute the
                program.
              </p>
              <p className="lesson-callout">
                The code you write is not always the code the CPU runs directly.
              </p>
            </div>
            <div className="human-machine-card" aria-label="Human source code compared with low-level instructions">
              <article>
                <span className="mono">Human sees</span>
                <code className="mono">{"print(\"Hello, world!\")"}</code>
              </article>
              <div className="translation-label mono">
                compiler / interpreter / runtime / VM / OS
              </div>
              <article>
                <span className="mono">Computer eventually executes</span>
                <code className="mono">10110000 01001000 ...</code>
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
          <div className="source-progress-strip mono reveal" aria-label="Journey from code to CPU">
            <span>source</span>
            <TinyArrow />
            <span>tools</span>
            <TinyArrow />
            <span>OS/runtime</span>
            <TinyArrow />
            <span>CPU</span>
          </div>
          <div className="goal-grid source-goals">
            {learningGoals.map(([icon, goal], index) => (
              <article className={`goal-card reveal d${Math.min(index, 5)}`} key={goal}>
                <ChipIcon>{icon}</ChipIcon>
                <p>{goal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="source-vs-machine">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>source_vs_machine_code
            </div>
            <h2>Source code is for humans. Machine code is for the CPU.</h2>
            <p>
              Source code is human-readable instructions written in a programming language.
              Machine code is low-level instructions the CPU can execute. The path between them
              depends on the language and its toolchain.
            </p>
          </div>
          <div className="source-layer-stack reveal" aria-label="Layered visual from human idea to program behavior">
            <span className="pipeline-pulse" aria-hidden="true"></span>
            {layeredModel.map(([title, text, icon], index) => (
              <article className={`layer-card d${Math.min(index, 5)}`} key={title}>
                <ChipIcon>{icon}</ChipIcon>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="lesson-callout reveal">
            Module 2 showed the CPU fetch-decode-execute cycle. This module explains how the
            instructions for that cycle are produced, loaded, or provided.
          </p>
        </section>

        <section className="lesson-section wrap" id="terms">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>tools_and_terms
            </div>
            <h2>The key pieces in the code-to-program path.</h2>
            <p>
              Keep these definitions simple for now. Later modules can add more detail after the
              mental model is stable.
            </p>
          </div>
          <div className="term-grid">
            {termCards.map((term, index) => (
              <article className={`term-card reveal d${Math.min(index, 5)}`} key={term.title}>
                <div className="concept-top">
                  <ChipIcon>{term.icon}</ChipIcon>
                  <h3>{term.title}</h3>
                </div>
                <p>{term.definition}</p>
                <p className="analogy-note">{term.analogy}</p>
                <ul className="example-list">
                  {term.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="three-paths">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>three_execution_paths
            </div>
            <h2>Three common ways code becomes a running program.</h2>
            <p>
              C, Python, and Java/C# are useful comparison points because they show different
              tradeoffs in translation, portability, runtime support, and hardware control.
            </p>
          </div>
          <div className="execution-paths">
            {executionPaths.map((path, index) => (
              <article className={`execution-path ${path.className} reveal d${Math.min(index, 5)}`} key={path.label}>
                <div className="path-head">
                  <ChipIcon>{path.label === "Java / C#" ? "VM" : path.label}</ChipIcon>
                  <div>
                    <h3>{path.label}</h3>
                    <p>{path.text}</p>
                  </div>
                </div>
                <InlinePipeline items={path.primary} />
                <details className="path-details">
                  <summary className="mono">show beginner detail</summary>
                  <InlinePipeline items={path.detailed} />
                  {path.note ? <p>{path.note}</p> : null}
                </details>
                <div className="os-cpu-tail mono" aria-label={`${path.label} ends with operating system and CPU`}>
                  <span>OS services</span>
                  <TinyArrow />
                  <span>CPU instructions</span>
                  <TinyArrow />
                  <span>program behavior</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="hello-world">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>worked_example.hello_world
            </div>
            <h2>The same Hello World idea in C and Python.</h2>
            <p>
              Do not read this as one language being universally better. The examples expose
              different tradeoffs.
            </p>
          </div>
          <div className="code-comparison-grid">
            <CodeCard title="hello" ext=".c" code={cHello} />
            <CodeCard title="hello" ext=".py" code={pythonHello} />
          </div>
          <div className="language-notes">
            <article className="language-note reveal">
              <h3>C</h3>
              <ul>
                <li>Has an include line for library functionality.</li>
                <li>Has a main function where the program starts.</li>
                <li>Calls printf() to print text.</li>
                <li>Returns 0 to indicate successful completion.</li>
                <li>Usually needs compilation before running.</li>
              </ul>
            </article>
            <article className="language-note reveal d1">
              <h3>Python</h3>
              <ul>
                <li>Uses one line for this example.</li>
                <li>print() is directly available.</li>
                <li>Usually runs through the Python interpreter/runtime.</li>
                <li>Is often easier for beginners to read quickly.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="lesson-section wrap" id="discussion">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>discussion_questions
            </div>
            <h2>Questions to compare the tradeoffs.</h2>
          </div>
          <div className="question-grid">
            {discussionQuestions.map(([question, answer], index) => (
              <details className={`question-card reveal d${Math.min(index, 5)}`} key={question}>
                <summary>
                  <span className="mono">Q{String(index + 1).padStart(2, "0")}</span>
                  <strong>{question}</strong>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="press-run">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>press_run
            </div>
            <h2>What happens when you press Run?</h2>
            <p>
              The Run button is a shortcut for a toolchain. The exact steps depend on the language,
              project settings, and IDE.
            </p>
          </div>
          <div className="run-split reveal" aria-label="Run button branches into C, Python, and Java/C# paths">
            <div className="run-button mono">Run</div>
            <InlinePipeline items={["C", "compiler", "linker", "executable", "OS", "CPU"]} />
            <InlinePipeline items={["Python", "runtime/interpreter", "OS services", "CPU"]} />
            <InlinePipeline items={["Java/C#", "compiler", "bytecode/IL", "VM/runtime", "OS", "CPU"]} />
          </div>
          <div className="run-step-grid">
            <StepList title="For C" steps={cRunSteps} />
            <StepList title="For Python" steps={pythonRunSteps} />
            <StepList title="For Java/C#" steps={vmRunSteps} />
          </div>
        </section>

        <section className="lesson-section wrap" id="linker">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>linker_and_libraries
            </div>
            <h2>printf() is not magic. Libraries provide code you can use.</h2>
            <p>
              Your program may call printf() in C. Your code is one piece. Library code is another
              piece. The linker helps connect them so the final program has what it needs.
            </p>
          </div>
          <div className="puzzle-flow reveal" aria-label="Your code plus library code plus startup code become final executable">
            <span>Your code</span>
            <span>Library code</span>
            <span>Startup code</span>
            <TinyArrow />
            <strong>Final executable</strong>
          </div>
        </section>

        <section className="lesson-section wrap" id="runtime-os">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>runtime_vs_os
            </div>
            <h2>Runtime and operating system are different layers.</h2>
            <p>
              The operating system manages hardware resources for many programs. A runtime provides
              language-specific support while one program runs.
            </p>
          </div>
          <div className="runtime-grid">
            <article className="language-note reveal">
              <h3>Operating system</h3>
              <ul>
                <li>Manages hardware resources.</li>
                <li>Loads programs.</li>
                <li>Manages files, memory, input/output, and processes.</li>
                <li>Helps move a program from storage into RAM.</li>
              </ul>
            </article>
            <article className="language-note reveal d1">
              <h3>Runtime</h3>
              <ul>
                <li>Provides language-specific support.</li>
                <li>May manage memory.</li>
                <li>May provide built-in functions.</li>
                <li>May execute or interpret bytecode or source.</li>
                <li>May handle errors and exceptions.</li>
              </ul>
            </article>
            <div className="runtime-layer-diagram reveal d2" aria-label="Application runtime operating system hardware layers">
              {["Application code", "Language runtime", "Operating system", "Hardware"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <p className="lesson-callout reveal">
            Python needs the Python interpreter/runtime. Java needs the JVM. C# needs the .NET
            runtime. C programs use the OS and often a C runtime library. In embedded bare-metal
            firmware, there may be no full operating system.
          </p>
        </section>

        <section className="lesson-section wrap" id="embedded">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>embedded_connection
            </div>
            <h2>Embedded systems make the code-to-hardware path more visible.</h2>
            <p>
              In embedded development, C/C++ source is often compiled into firmware that is flashed
              directly onto a microcontroller. There may be no normal desktop-style operating
              system.
            </p>
          </div>
          <div className="embedded-path-grid">
            <article className="path-card reveal">
              <h3>Desktop app path</h3>
              <div className="path-stack mono" aria-label="Desktop application path">
                {["Source code", "compiler / interpreter / runtime", "OS", "CPU"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
            <article className="path-card reveal d1">
              <h3>Embedded firmware path</h3>
              <div className="path-stack embedded mono" aria-label="Embedded firmware path">
                {["C/C++ source", "cross-compiler", "firmware binary", "flash memory", "microcontroller", "hardware action"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>
          <p className="lesson-callout reveal d2">
            Future modules will introduce startup code, memory maps, linker scripts, reset
            handlers, and bootloaders. For now, keep the simple path in mind.
          </p>
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
              <span className="cmt">{"// "}</span>hands_on_compare
            </div>
            <h2>Exercise: compare C and Python Hello World.</h2>
            <p>Answer the questions, then compare your thinking with the sample answer.</p>
          </div>
          <div className="code-comparison-grid compact">
            <CodeCard title="hello" ext=".c" code={cHello} />
            <CodeCard title="hello" ext=".py" code={pythonHello} />
          </div>
          <div className="worksheet-grid">
            <form className="worksheet-card reveal" aria-label="C and Python comparison worksheet">
              {[
                "Which one looks simpler?",
                "Which one has more structure?",
                "Which one usually needs compilation before running?",
                "Which one runs through an interpreter/runtime?",
                "Which one is closer to hardware?",
                "Which one would you choose for a quick script?",
                "Which one would you expect to see more in embedded systems?",
                "Why is neither language better at everything?",
              ].map((question, index) => (
                <label key={question}>
                  <span>{index + 1}. {question}</span>
                  <input type="text" name={`compare-${index + 1}`} />
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
                  sample_answer<span className="ext">.txt</span>
                </span>
              </div>
              <div className="sample-body">
                <p>
                  Python looks simpler for printing text because it only needs one line. C has more
                  visible structure and usually needs compilation. C is closer to hardware and
                  common in embedded systems. Python is easier for quick scripting, automation, and
                  experiments. Neither is universally better because each language makes tradeoffs.
                </p>
              </div>
            </article>
          </div>
          <pre className="template-block reveal" aria-label="Copyable comparison template">
            <code>{`1. Which one looks simpler?
2. Which one has more structure?
3. Which one usually needs compilation before running?
4. Which one runs through an interpreter/runtime?
5. Which one is closer to hardware?
6. Which one would you choose for a quick script?
7. Which one would you expect to see more in embedded systems?
8. Why is neither language better at everything?`}</code>
          </pre>
        </section>

        <section className="lesson-section wrap" id="recap">
          <div className="recap-card reveal">
            <div>
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>recap
              </div>
              <h2>What to keep in your head.</h2>
              <ul>
                {recapItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="recap-program-flow mono" aria-label="Compact source code to behavior recap diagram">
              {["Source code", "Compiler / Interpreter / VM", "OS / Runtime", "Machine instructions", "CPU executes", "Program behavior"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="next">
          <div className="next-card reveal">
            <div>
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>next_lesson
              </div>
              <h2>Next: Universal Programming Concepts</h2>
              <p>
                Now that you understand how code becomes a running program, the next module will
                cover ideas that appear across almost every language: variables, data types,
                conditions, loops, functions, input/output, and debugging.
              </p>
              <div className="next-concepts mono" aria-label="Module 4 preview concepts">
                {["variable", "loop", "condition", "function", "debug"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="lesson-nav-actions">
              <Link href="/#modules" className="btn btn-ghost">
                Back to Course Roadmap
              </Link>
              <Link href="/modules/how-a-computer-actually-works" className="btn btn-ghost">
                Previous: Module 2
              </Link>
              <Link href="/modules/universal-programming-concepts" className="btn btn-primary">
                Next: Module 4
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
