import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Module 4: Universal Programming Concepts | Bitwise",
  description:
    "A beginner-friendly lesson on variables, data types, operators, conditions, loops, functions, input/output, and debugging across programming languages.",
};

const learningGoals = [
  ["VAR", "What variables are"],
  ["TYPE", "What data types are"],
  ["OP", "What operators do"],
  ["IF", "How conditions help programs make decisions"],
  ["LOOP", "How loops repeat work"],
  ["FUNC", "Why functions help organize code"],
  ["I/O", "What input and output mean in a program"],
  ["DBG", "What basic debugging means"],
  ["XFER", "Why syntax changes but core concepts remain similar across languages"],
];

const conceptMap = [
  "Store information",
  "Represent data",
  "Perform calculations",
  "Make decisions",
  "Repeat actions",
  "Group logic",
  "Receive input",
  "Produce output",
  "Fix mistakes",
];

const variableExamples = ["age", "temperature", "score", "username", "batteryLevel", "isConnected"];

const dataTypes = [
  ["20", "Integer", "Whole number"],
  ["25.5", "Float / double", "Decimal number"],
  ['"Sara"', "String", "Text"],
  ["true", "Boolean", "True or false"],
  ['"A"', "Character", "Single character"],
];

const operatorGroups = [
  ["Arithmetic", "+, -, *, /", "2 + 3 gives 5"],
  ["Comparison", ">, <, >=, <=, ==, !=", "age >= 18 checks if age is at least 18"],
  ["Logical", "AND, OR, NOT", "isLoggedIn AND hasPermission checks two conditions"],
];

const loopUses = [
  "Print numbers from 1 to 10",
  "Check every item in a list",
  "Read sensor data repeatedly",
  "Keep a game running",
  "Keep firmware running inside a device",
];

const debugSteps = [
  "Read error messages",
  "Use print statements",
  "Check variable values",
  "Run small pieces of code",
  "Think through the program step by step",
  "Ask: what did I expect vs what actually happened?",
];

const comparisonSimilarities = [
  "Both create an age variable.",
  "Both compare age to 18.",
  "Both choose between two outputs.",
  "Both print a result.",
];

const comparisonDifferences = [
  "C declares the type int.",
  "C uses braces { } to group code.",
  "C uses printf.",
  "Python uses indentation to group code.",
  "Python uses print.",
];

const exerciseQuestions = [
  "What variable will you use?",
  "What data type should the temperature be?",
  "What conditions do you need?",
  "What operators do you need?",
  "What should the program output for 35°C?",
  "What should the program output for 25°C?",
  "What should the program output for 15°C?",
];

const testCases = [
  ["35", "Hot"],
  ["30", "Comfortable"],
  ["25", "Comfortable"],
  ["20", "Comfortable"],
  ["19", "Cold"],
];

const embeddedLinks = [
  "Variables store sensor readings.",
  "Data types control memory usage.",
  "Operators calculate values.",
  "Conditions decide what the device should do.",
  "Loops keep firmware running.",
  "Functions organize hardware control logic.",
  "Input/output connects programs to sensors, buttons, LEDs, motors, and communication modules.",
  "Debugging helps find hardware/software issues.",
];

const misconceptions = [
  [
    "Programming is mostly memorizing syntax.",
    "Syntax matters, but the deeper skill is understanding concepts and solving problems.",
  ],
  [
    "Python and C are completely unrelated.",
    "They look different, but they both use variables, conditions, loops, functions, and input/output.",
  ],
  [
    "If I learn one language, I automatically know all languages.",
    "Concepts transfer, but each language has its own syntax, tools, and tradeoffs.",
  ],
  [
    "Debugging means I failed.",
    "Debugging is a normal part of programming and engineering.",
  ],
  [
    "Loops and functions are advanced.",
    "They are basic building blocks used in almost every useful program.",
  ],
];

const recapItems = [
  "Variables store values.",
  "Data types describe what kind of values are stored.",
  "Operators perform calculations and comparisons.",
  "Conditions let programs make decisions.",
  "Loops repeat work.",
  "Functions organize reusable logic.",
  "Input/output lets programs interact with users, files, hardware, or other systems.",
  "Debugging is the process of finding and fixing problems.",
  "Most languages share these ideas even when the syntax looks different.",
];

const pythonAgeCondition = `age = 20

if age >= 18:
    print("Adult")
else:
    print("Minor")`;

const cAgeCondition = `int age = 20;

if (age >= 18)
{
    printf("Adult\\n");
}
else
{
    printf("Minor\\n");
}`;

const pythonTemperature = `temperature = 25

if temperature > 30:
    print("Hot")
elif temperature >= 20:
    print("Comfortable")
else:
    print("Cold")`;

const cTemperature = `#include <stdio.h>

int main(void)
{
    int temperature = 25;

    if (temperature > 30)
    {
        printf("Hot\\n");
    }
    else if (temperature >= 20)
    {
        printf("Comfortable\\n");
    }
    else
    {
        printf("Cold\\n");
    }

    return 0;
}`;

const brokenTemperature = `temperature = 25

if temperature > 30:
    print("Hot")
elif temperature > 20:
    print("Comfortable")
else:
    print("Cold")`;

const correctedTemperature = `temperature = 20

if temperature > 30:
    print("Hot")
elif temperature >= 20:
    print("Comfortable")
else:
    print("Cold")`;

const exerciseTemplate = `temperature = ___

if ___:
    print("Hot")
elif ___:
    print("Comfortable")
else:
    print("Cold")`;

const embeddedPseudo = `temperature = read_sensor()

if temperature > 30:
    turn_on_fan()
else:
    turn_off_fan()`;

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

function ConceptCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="universal-card reveal">
      <div className="concept-top">
        <ChipIcon>{icon}</ChipIcon>
        <h3>{title}</h3>
      </div>
      {children}
    </article>
  );
}

function FlowNode({ children, kind }: { children: React.ReactNode; kind?: "decision" | "output" }) {
  return (
    <span className={`flow-node${kind ? ` ${kind}` : ""}`}>
      {children}
    </span>
  );
}

function DividerArrow() {
  return (
    <span className="flow-arrow mono" aria-hidden="true">
      |
      <br />
      v
    </span>
  );
}

export default function ModuleFourPage() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="ambient-blob"></div>
        <div className="ambient-blob"></div>
      </div>

      <Nav brandHref="/" sectionPrefix="/" />

      <main id="top" className="lesson-page universal-lesson">
        <section className="lesson-hero wrap universal-hero">
          <div className="lesson-hero-grid">
            <div className="lesson-hero-copy">
              <span className="eyebrow mono">
                <span className="pulse-dot"></span>concepts.transfer()
              </span>
              <h1 className="reveal">Module 4: Universal Programming Concepts</h1>
              <p className="lesson-subtitle reveal d1">
                Syntax changes between languages, but the core ideas stay the same.
              </p>
              <div className="lesson-badges reveal d2" aria-label="Lesson metadata">
                <Badge>Difficulty: Beginner</Badge>
                <Badge>Duration: 35-45 minutes</Badge>
                <Badge>Tier: Programming Basics</Badge>
              </div>
            </div>

            <div className="universal-hero-visual panel reveal d2" aria-label="Programming toolbox visual">
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  programming_toolbox<span className="ext">.diagram</span>
                </span>
                <span className="right mono">module_04</span>
              </div>
              <div className="universal-hero-body">
                <div className="language-stream mono" aria-label="Languages flowing into shared concepts">
                  {["Python", "C", "JavaScript", "Java"].map((language) => (
                    <span key={language}>{language}</span>
                  ))}
                </div>
                <div className="toolbox" aria-label="Toolbox of universal programming concepts">
                  {["variable", "condition", "loop", "function", "input/output", "debug"].map((tool, index) => (
                    <span className={`tool-card d${Math.min(index, 5)} mono`} key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="same-core mono">
                  <span>different syntax</span>
                  <TinyArrow />
                  <strong>same core ideas</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="hook">
          <div className="map-card-wide reveal">
            <div>
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>look_past_syntax
              </div>
              <h2>Languages look different. Programs still need the same building blocks.</h2>
              <p>
                Beginners often think every programming language is completely different. But once
                you look past syntax, most languages are built around the same basic ideas.
              </p>
              <p>
                Learning programming is not about memorizing every language. It is about
                understanding the concepts that transfer from one language to another.
              </p>
              <p className="lesson-callout">
                A condition in Python and a condition in C look different, but both answer the same
                question: should the program do this or that?
              </p>
            </div>
            <div className="tiny-condition-compare" aria-label="Python and C conditions use the same decision-making concept">
              <CodeCard title="decision" ext=".py" code={`if age >= 18:\n    print("Adult")`} />
              <CodeCard title="decision" ext=".c" code={`if (age >= 18)\n{\n    printf("Adult\\n");\n}`} />
              <strong className="same-concept-label mono">Same concept: decision-making</strong>
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
          <div className="toolbox-progress mono reveal" aria-label="Programming toolbox progress strip">
            {["variables", "types", "operators", "conditions", "loops", "functions", "I/O", "debugging"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="goal-grid universal-goals">
            {learningGoals.map(([icon, goal], index) => (
              <article className={`goal-card reveal d${Math.min(index, 5)}`} key={goal}>
                <ChipIcon>{icon}</ChipIcon>
                <p>{goal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="core-thesis">
          <div className="syntax-thesis reveal">
            <div>
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>core_thesis
              </div>
              <h2>Most programming languages share the same core ideas.</h2>
              <p className="thesis-statement">
                Syntax changes, concepts remain.
              </p>
              <p>
                Python, C, JavaScript, Java, C#, and many other languages may look different, but
                they all need ways to store information, make decisions, repeat actions, group
                logic, handle input and output, and find mistakes.
              </p>
            </div>
            <div className="syntax-map mono" aria-label="Different syntax maps to universal concepts and problem solving">
              <div className="syntax-row">
                {["Python", "C", "JavaScript", "Java"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <DividerArrow />
              <div className="syntax-row concepts">
                {["Variables", "Conditions", "Loops", "Functions", "Input/Output"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <DividerArrow />
              <strong>Problem Solving</strong>
            </div>
          </div>
          <div className="concept-map-grid">
            {conceptMap.map((item, index) => (
              <article className={`mini-concept-card reveal d${Math.min(index, 5)}`} key={item}>
                <ChipIcon>{String(index + 1).padStart(2, "0")}</ChipIcon>
                <span>{item}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="variables">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.variables
            </div>
            <h2>Variables store values with names.</h2>
            <p>
              A variable is a named place where a program stores a value. Think of it as a labeled
              box: the label is <code>age</code>, and the value inside is <code>20</code>.
            </p>
          </div>
          <div className="concept-split">
            <ConceptCard icon="VAR" title="Labeled box mental model">
              <div className="variable-box" aria-label="Variable named age stores value 20 then changes to 21">
                <span className="variable-label mono">age</span>
                <strong className="mono">20</strong>
                <span className="variable-new mono">then 21</span>
              </div>
              <p>Programs use variables to remember information while running.</p>
              <div className="token-cloud mono">
                {variableExamples.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </ConceptCard>
            <div className="code-comparison-grid compact">
              <CodeCard title="variable" ext=".py" code="age = 20" />
              <CodeCard title="variable" ext=".c" code="int age = 20;" />
            </div>
          </div>
          <p className="lesson-callout reveal">
            Both examples store the value 20. C asks you to declare the data type explicitly.
          </p>
        </section>

        <section className="lesson-section wrap" id="data-types">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.data_types
            </div>
            <h2>Data types describe what kind of value something is.</h2>
            <p>
              Data types matter because computers need to know how to store and use values. Some
              languages are stricter about types than others; language differences come later.
            </p>
          </div>
          <div className="type-grid">
            {dataTypes.map(([value, type, meaning], index) => (
              <article className={`type-card reveal d${Math.min(index, 5)}`} key={type}>
                <code className="mono">{value}</code>
                <h3>{type}</h3>
                <p>{meaning}</p>
              </article>
            ))}
          </div>
          <div className="value-type-table reveal" aria-label="Value type meaning table">
            {[
              ["age = 20", "integer", "whole number"],
              ["temperature = 25.5", "decimal number", "measurement"],
              ['name = "Sara"', "string", "text"],
              ["isOnline = true", "boolean", "yes/no state"],
            ].map(([value, type, meaning]) => (
              <div key={value}>
                <code className="mono">{value}</code>
                <span>{type}</span>
                <span>{meaning}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="operators">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.operators
            </div>
            <h2>Operators perform actions on values.</h2>
            <p>
              Operators are symbols or words that calculate, compare, or combine conditions. Keep
              the beginner idea simple: an operator asks the program to do something with values.
            </p>
          </div>
          <div className="operator-grid">
            {operatorGroups.map(([title, operators, example], index) => (
              <article className={`operator-card reveal d${Math.min(index, 5)}`} key={title}>
                <h3>{title}</h3>
                <div className="operator-symbols mono">{operators}</div>
                <p>{example}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="conditions">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.conditions
            </div>
            <h2>Conditions let a program make decisions.</h2>
            <p>
              Core idea: if something is true, do one thing. Otherwise, do something else.
            </p>
          </div>
          <div className="code-comparison-grid">
            <CodeCard title="adult_check" ext=".py" code={pythonAgeCondition} />
            <CodeCard title="adult_check" ext=".c" code={cAgeCondition} />
          </div>
          <div className="condition-flow reveal" aria-label="Flowchart for age adult or minor condition">
            <FlowNode>Start</FlowNode>
            <DividerArrow />
            <FlowNode kind="decision">Is age &gt;= 18?</FlowNode>
            <div className="branch-row">
              <span className="branch yes">Yes</span>
              <FlowNode kind="output">Print &quot;Adult&quot;</FlowNode>
              <span className="branch no">No</span>
              <FlowNode kind="output">Print &quot;Minor&quot;</FlowNode>
            </div>
          </div>
          <ul className="concept-bullets reveal">
            <li>Check if age is greater than or equal to 18.</li>
            <li>If true, print &quot;Adult&quot;.</li>
            <li>Otherwise, print &quot;Minor&quot;.</li>
          </ul>
        </section>

        <section className="lesson-section wrap" id="loops">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.loops
            </div>
            <h2>Loops repeat work without repeating code by hand.</h2>
            <p>
              Loops are used whenever a program needs to do a similar action many times.
            </p>
          </div>
          <div className="concept-split">
            <ConceptCard icon="LOOP" title="Common loop uses">
              <ul className="example-list">
                {loopUses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="counter-loop mono" aria-label="Counter loop from 0 to 4">
                {["0", "1", "2", "3", "4"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </ConceptCard>
            <div className="code-comparison-grid compact">
              <CodeCard title="repeat_five" ext=".py" code={`for i in range(5):\n    print(i)`} />
              <CodeCard title="repeat_five" ext=".c" code={`for (int i = 0; i < 5; i++)\n{\n    printf("%d\\n", i);\n}`} />
            </div>
          </div>
          <div className="embedded-loop reveal">
            <h3>Embedded connection: the main loop</h3>
            <p>
              Many embedded programs have a main loop that runs forever, checking inputs and
              updating outputs.
            </p>
            <pre className="template-block mono" aria-label="Embedded main loop concept">
              <code>{`while true:
    read sensor
    update output
    wait briefly`}</code>
            </pre>
          </div>
        </section>

        <section className="lesson-section wrap" id="functions">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.functions
            </div>
            <h2>Functions organize reusable work.</h2>
            <p>
              A function is a reusable block of code that performs a specific task. It is like a
              small machine: you give it input, it does work, and it may return output.
            </p>
          </div>
          <div className="function-machine reveal" aria-label="Function input output diagram">
            <span className="mono">2, 3</span>
            <TinyArrow />
            <strong className="mono">add(a, b)</strong>
            <TinyArrow />
            <span className="mono">5</span>
          </div>
          <div className="code-comparison-grid">
            <CodeCard title="add" ext=".py" code={`def add(a, b):\n    return a + b`} />
            <CodeCard title="add" ext=".c" code={`int add(int a, int b)\n{\n    return a + b;\n}`} />
          </div>
          <p className="lesson-callout reveal">
            Functions help organize code, avoid repetition, and make programs easier to understand.
          </p>
        </section>

        <section className="lesson-section wrap" id="input-output">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.input_output
            </div>
            <h2>Programs receive input and produce output.</h2>
            <p>
              Input is information the program receives. Output is information or action the
              program produces.
            </p>
          </div>
          <div className="io-pipeline reveal" aria-label="Input program output pipeline">
            <FlowNode>Input</FlowNode>
            <TinyArrow />
            <FlowNode>Program</FlowNode>
            <TinyArrow />
            <FlowNode kind="output">Output</FlowNode>
          </div>
          <div className="io-grid">
            <article className="language-note reveal">
              <h3>Desktop / web</h3>
              <p><strong>Input:</strong> keyboard, mouse, form, file, network request</p>
              <p><strong>Output:</strong> screen text, file, sound, response</p>
            </article>
            <article className="language-note reveal d1">
              <h3>Embedded</h3>
              <p><strong>Input:</strong> button, sensor, UART data, radio message</p>
              <p><strong>Output:</strong> LED, motor, display, buzzer, network packet</p>
            </article>
          </div>
          <p className="lesson-callout reveal">
            A temperature program receives a temperature value as input and prints &quot;Hot&quot;,
            &quot;Comfortable&quot;, or &quot;Cold&quot; as output.
          </p>
        </section>

        <section className="lesson-section wrap" id="debugging">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.debugging
            </div>
            <h2>Debugging means finding and fixing problems.</h2>
            <p>
              Bugs are normal. Debugging is part of programming, not proof that you are bad at it.
            </p>
          </div>
          <div className="debug-grid">
            <article className="debug-checklist reveal">
              <h3>Debugging checklist</h3>
              <ul>
                {debugSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="expected-card reveal d1">
              <h3>If age is 20 but the program prints &quot;Minor&quot;</h3>
              <ul>
                <li>Is age actually 20?</li>
                <li>Is the condition written correctly?</li>
                <li>Is the comparison operator correct?</li>
                <li>Is the right block of code running?</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="lesson-section wrap" id="comparison">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>same_idea_different_syntax
            </div>
            <h2>Python vs C condition: same idea, different syntax.</h2>
          </div>
          <div className="code-comparison-grid">
            <CodeCard title="condition" ext=".py" code={pythonAgeCondition} />
            <CodeCard title="condition" ext=".c" code={cAgeCondition} />
          </div>
          <div className="comparison-notes">
            <article className="language-note reveal">
              <h3>Similarities</h3>
              <ul>
                {comparisonSimilarities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="language-note reveal d1">
              <h3>Differences</h3>
              <ul>
                {comparisonDifferences.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="lesson-callout reveal">
            Key takeaway: the syntax is different, but the concept is the same.
          </p>
        </section>

        <section className="lesson-section wrap" id="temperature-worked-example">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>worked_example.temperature_classifier
            </div>
            <h2>Worked example: temperature classifier.</h2>
            <p>
              Take a temperature value. If it is above 30&deg;C, print &quot;Hot&quot;. If it is
              between 20&deg;C and 30&deg;C, print &quot;Comfortable&quot;. Otherwise, print
              &quot;Cold&quot;.
            </p>
          </div>
          <div className="temperature-grid">
            <div className="temperature-flow reveal" aria-label="Temperature classifier flowchart">
              <FlowNode>Start</FlowNode>
              <DividerArrow />
              <FlowNode>Read temperature</FlowNode>
              <DividerArrow />
              <FlowNode kind="decision">temperature &gt; 30?</FlowNode>
              <div className="branch-row compact">
                <span className="branch yes">Yes</span>
                <FlowNode kind="output">Print &quot;Hot&quot;</FlowNode>
              </div>
              <DividerArrow />
              <FlowNode kind="decision">temperature &gt;= 20?</FlowNode>
              <div className="branch-row compact">
                <span className="branch yes">Yes</span>
                <FlowNode kind="output">Print &quot;Comfortable&quot;</FlowNode>
                <span className="branch no">No</span>
                <FlowNode kind="output">Print &quot;Cold&quot;</FlowNode>
              </div>
            </div>
            <article className="language-note reveal d1">
              <h3>Plain English logic</h3>
              <pre className="template-block mono">
                <code>{`If temperature > 30:
    Hot
Else if temperature >= 20 and temperature <= 30:
    Comfortable
Else:
    Cold`}</code>
              </pre>
              <p>
                Since the first check already handles temperatures above 30, the second check can
                simply check if temperature is greater than or equal to 20.
              </p>
            </article>
          </div>
          <div className="code-comparison-grid">
            <CodeCard title="temperature" ext=".py" code={pythonTemperature} />
            <CodeCard title="temperature" ext=".c" code={cTemperature} />
          </div>
          <p className="lesson-callout reveal">
            Both programs use variables, data types, operators, conditions, and output.
          </p>
        </section>

        <section className="lesson-section wrap" id="exercise">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>hands_on_temperature
            </div>
            <h2>Exercise: write a simple temperature classifier program.</h2>
            <p>
              Create a program that prints &quot;Hot&quot; if the temperature is above 30&deg;C,
              &quot;Comfortable&quot; if it is between 20&deg;C and 30&deg;C, and &quot;Cold&quot;
              if it is below 20&deg;C.
            </p>
          </div>
          <div className="worksheet-grid">
            <form className="worksheet-card reveal" aria-label="Temperature classifier worksheet">
              {exerciseQuestions.map((question, index) => (
                <label key={question}>
                  <span>
                    {index + 1}. {question}
                  </span>
                  <input type="text" name={`temperature-question-${index + 1}`} />
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
                  test_cases<span className="ext">.table</span>
                </span>
              </div>
              <div className="test-table" aria-label="Temperature test cases">
                {testCases.map(([input, output]) => (
                  <div key={input}>
                    <code className="mono">{input}</code>
                    <TinyArrow />
                    <strong>{output}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <pre className="template-block reveal" aria-label="Copyable temperature classifier exercise template">
            <code>{exerciseTemplate}</code>
          </pre>
        </section>

        <section className="lesson-section wrap" id="debug-challenge">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>mini_debugging_challenge
            </div>
            <h2>Mini debugging challenge: the missing 20.</h2>
            <p>
              What will this program print for <code>temperature = 20</code>? Is that correct based
              on the requirement?
            </p>
          </div>
          <div className="debug-challenge-grid">
            <CodeCard title="broken_temperature" ext=".py" code={brokenTemperature} />
            <article className="bug-card reveal d1">
              <h3>Expected vs actual</h3>
              <div className="expected-actual">
                <span className="mono">Expected for 20</span>
                <strong>Comfortable</strong>
                <span className="mono">Actual with &gt; 20</span>
                <strong>Cold</strong>
              </div>
              <p>
                It prints &quot;Cold&quot; for 20 because <code>temperature &gt; 20</code> does not
                include 20. To include 20, use <code>temperature &gt;= 20</code>.
              </p>
            </article>
            <CodeCard title="corrected_temperature" ext=".py" code={correctedTemperature} />
          </div>
        </section>

        <section className="lesson-section wrap" id="embedded">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>embedded_connection
            </div>
            <h2>Universal concepts matter even more when code touches hardware.</h2>
            <p>
              The same temperature classifier logic can become firmware logic that controls a real
              fan, LED, display, or motor.
            </p>
          </div>
          <div className="embedded-universal-grid">
            <div className="sensor-diagram reveal" aria-label="Sensor microcontroller fan diagram">
              <span>Temperature sensor</span>
              <TinyArrow />
              <strong>Microcontroller</strong>
              <TinyArrow />
              <span>Fan output</span>
            </div>
            <CodeCard title="fan_control" ext=".pseudo" code={embeddedPseudo} />
          </div>
          <div className="embedded-examples reveal">
            {embeddedLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="lesson-callout reveal">
            This connects back to Module 0&apos;s layered mental model: code decisions can produce
            real-world actions through hardware.
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
            <div className="recap-program-flow mono" aria-label="Compact universal programming recap diagram">
              {["Input", "Variables / Data", "Operators", "Conditions / Loops", "Functions", "Output"].map((item) => (
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
              <h2>Next: Data Structures at a Beginner Level</h2>
              <p>
                Next, the learner will see how programs organize multiple pieces of data using
                lists, arrays, strings, dictionaries/maps, stacks, queues, and simple structured
                data.
              </p>
              <div className="data-structure-preview mono" aria-label="Module 5 data structures preview">
                {["array/list", "string", "map", "stack", "queue"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="lesson-nav-actions">
              <Link href="/#modules" className="btn btn-ghost">
                Back to Course Roadmap
              </Link>
              <Link href="/modules/from-source-code-to-running-program" className="btn btn-ghost">
                Previous: Module 3
              </Link>
              <Link href="/modules/beginner-data-structures" className="btn btn-primary">
                Next: Module 5
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
