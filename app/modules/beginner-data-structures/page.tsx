import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Module 5: Data Structures at a Beginner Level | Bitwise",
  description:
    "A beginner-friendly visual lesson about organizing data with lists, strings, structs/objects, dictionaries/maps, queues, stacks, and embedded examples.",
};

const learningGoals = [
  ["WHY", "Why programs need data structures"],
  ["LIST", "What arrays/lists are used for"],
  ["STR", "What strings are and why they are like sequences"],
  ["OBJ", "How structs/objects group related data"],
  ["MAP", "How dictionaries/maps store key-value pairs"],
  ["FIFO", "How queues work using first-in, first-out behavior"],
  ["LIFO", "How stacks work using last-in, first-out behavior"],
  ["MCU", "How data structures appear in embedded systems"],
  ["AVG", "How to store 5 temperature readings and calculate their average"],
];

const toolboxItems = ["List", "String", "Object", "Map", "Queue", "Stack"];
const arrayValues = ["85", "90", "78", "92"];
const temperatures = ["25.5", "26.1", "24.8", "27.0", "26.4"];
const stringChars = ["R", "a", "f", "i"];
const uartCommand = ["A", "T", "+", "S", "T", "A", "T", "U", "S"];

const conceptUses = {
  lists: ["Student marks", "Sensor readings", "Names", "Shopping cart products", "Messages"],
  strings: ["Username", "Error message", "Sensor label", "Command text", "Web page content", "Serial command"],
  maps: [
    "Username -> password hash",
    "Product ID -> product information",
    "Country code -> country name",
    "Sensor ID -> latest reading",
    "Error code -> error message",
  ],
  queues: [
    "Messages waiting to be sent",
    "Print jobs",
    "Tasks waiting to be processed",
    "Network packets",
    "Button events",
  ],
  stacks: ["Function calls", "Undo history", "Browser back navigation conceptually", "Nested operations", "Temporary memory organization"],
};

const languageNotes = [
  "C uses structs",
  "Python can use dictionaries/classes",
  "JavaScript uses objects",
  "C++ uses structs/classes",
];

const comparisonRows = [
  ["Store 5 temperature readings", "List/array", "Values are ordered and can be looped through"],
  ["Store a name", "String", "Text is a sequence of characters"],
  ["Store a sensor reading with temperature, humidity, timestamp", "Struct/object", "Related fields belong together"],
  ["Look up user by username", "Dictionary/map", "Use a key to find a value"],
  ["Process messages in arrival order", "Queue", "First message should be handled first"],
  ["Track function calls", "Stack", "Last function called finishes first"],
];

const exerciseQuestions = [
  "What data structure should store the readings?",
  "Why is a list better than 5 separate variables?",
  "What does sum() do?",
  "What does len() do?",
  "What would happen if you added a 6th reading?",
  "How would this be useful for a sensor dashboard?",
];

const embeddedCards = [
  {
    icon: "A",
    title: "Sensor History",
    text: "temperatureHistory = [25.5, 26.1, 24.8, 27.0, 26.4]",
    note: "This could be used to display a graph.",
  },
  {
    icon: "B",
    title: "UART Receive Queue",
    text: "Bytes arrive: 'H' -> 'E' -> 'L' -> 'L' -> 'O'",
    note: "The program processes them in the same order.",
  },
  {
    icon: "C",
    title: "Packet Struct",
    text: "Type | Length | Payload | Checksum",
    note: "Communication data usually has multiple related fields.",
  },
];

const embeddedLinks = [
  "A UART receive buffer is basically a queue.",
  "A sensor history graph is basically a list or array.",
  "A packet is often represented as a struct.",
  "A stack is used for function calls.",
  "A map-like lookup can connect error codes to messages.",
  "A ring buffer is a fixed-size queue-like structure often used in embedded systems.",
];

const misconceptions = [
  [
    "Data structures are only for advanced algorithms.",
    "Even beginner programs use data structures whenever they store multiple values.",
  ],
  [
    "A list is just a bunch of variables.",
    "A list groups related values so they can be accessed, looped through, and processed together.",
  ],
  [
    "Strings are just text, not data structures.",
    "Strings are sequences of characters, and programs often process them character by character.",
  ],
  [
    "Queues and stacks are only theory.",
    "Queues and stacks appear in UART buffers, task queues, undo history, and function calls.",
  ],
  [
    "Embedded systems do not use data structures because they are small.",
    "Embedded systems use data structures carefully because memory is limited and organization matters.",
  ],
];

const recapItems = [
  "Data structures organize data.",
  "Arrays/lists store ordered collections.",
  "Strings store sequences of characters.",
  "Structs/objects group related fields.",
  "Dictionaries/maps store key-value pairs.",
  "Queues process first-in, first-out data.",
  "Stacks process last-in, first-out data.",
  "Real programs and embedded systems use data structures constantly.",
  "A list of temperature readings can be used to calculate an average or draw a sensor graph.",
];

const listExample = `temperatures = [25.5, 26.1, 24.8, 27.0, 26.4]

print(temperatures[0])
print(temperatures[3])`;

const sensorObject = `sensorReading = {
    "temperature": 25.5,
    "humidity": 60,
    "timestamp": "10:30 AM"
}`;

const usersMap = `users = {
    "alice": "hashed_password_1",
    "bob": "hashed_password_2"
}`;

const averageExample = `temperatures = [25.5, 26.1, 24.8, 27.0, 26.4]

average = sum(temperatures) / len(temperatures)

print("Average temperature:", average)`;

const exerciseTemplate = `temperatures = [___, ___, ___, ___, ___]

average = ___ / ___

print("Average temperature:", average)`;

const brokenAverage = `temperatures = [25.5, 26.1, 24.8, 27.0, 26.4]

average = sum(temperatures) / 4

print("Average temperature:", average)`;

const correctedAverage = `temperatures = [25.5, 26.1, 24.8, 27.0, 26.4]

average = sum(temperatures) / len(temperatures)

print("Average temperature:", average)`;

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

function IndexedRow({ values, label }: { values: string[]; label: string }) {
  return (
    <div className="indexed-row" aria-label={label}>
      <div className="index-labels mono" aria-hidden="true">
        {values.map((_, index) => (
          <span key={index}>{index}</span>
        ))}
      </div>
      <div className="value-boxes mono">
        {values.map((value, index) => (
          <span key={`${value}-${index}`}>{value}</span>
        ))}
      </div>
    </div>
  );
}

function SensorChart({ compact = false }: { compact?: boolean }) {
  return (
    <svg className={compact ? "sensor-chart compact" : "sensor-chart"} viewBox="0 0 340 160" role="img" aria-label="Sensor history line chart with five readings">
      <path d="M28 132H316" className="chart-axis" />
      <path d="M28 22V132" className="chart-axis" />
      <polyline points="38,78 105,58 172,96 239,38 306,52" className="chart-line" />
      {[
        [38, 78],
        [105, 58],
        [172, 96],
        [239, 38],
        [306, 52],
      ].map(([cx, cy], index) => (
        <circle className="chart-dot" cx={cx} cy={cy} r="5" key={`${cx}-${cy}-${index}`} />
      ))}
      <text x="38" y="148" className="chart-label">1</text>
      <text x="306" y="148" className="chart-label">5</text>
    </svg>
  );
}

export default function ModuleFivePage() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="ambient-blob"></div>
        <div className="ambient-blob"></div>
      </div>

      <Nav brandHref="/" sectionPrefix="/" />

      <main id="top" className="lesson-page data-lesson">
        <section className="lesson-hero wrap data-hero">
          <div className="lesson-hero-grid">
            <div className="lesson-hero-copy">
              <span className="eyebrow mono">
                <span className="pulse-dot"></span>data.organize()
              </span>
              <h1 className="reveal">Module 5: Data Structures at a Beginner Level</h1>
              <p className="lesson-subtitle reveal d1">
                Real programs do not just store one value. They organize many values.
              </p>
              <div className="lesson-badges reveal d2" aria-label="Lesson metadata">
                <Badge>Difficulty: Beginner</Badge>
                <Badge>Duration: 35-45 minutes</Badge>
                <Badge>Tier: Programming Basics</Badge>
              </div>
            </div>

            <div className="data-hero-visual panel reveal d2" aria-label="Data structure toolbox visual">
              <div className="titlebar">
                <span className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="file mono">
                  data_toolbox<span className="ext">.diagram</span>
                </span>
                <span className="right mono">module_05</span>
              </div>
              <div className="data-hero-body">
                <div className="floating-data-blocks mono" aria-hidden="true">
                  <span>25.5</span>
                  <span>&quot;A&quot;</span>
                  <span>id</span>
                  <span>msg</span>
                </div>
                <div className="data-toolbox" aria-label="Data containers: list, string, object, map, queue, stack">
                  <div className="hero-list mono">
                    <strong>List</strong>
                    <span>0</span><span>1</span><span>2</span>
                  </div>
                  <div className="hero-string mono">
                    <strong>String</strong>
                    {["H", "i", "!"].map((char) => <span key={char}>{char}</span>)}
                  </div>
                  <div className="hero-map mono">
                    <strong>Map</strong>
                    <span>alice -&gt; hash</span>
                    <span>E01 -&gt; low battery</span>
                  </div>
                  <div className="hero-object mono">
                    <strong>Object</strong>
                    <span>temperature: 25.5</span>
                    <span>humidity: 60</span>
                  </div>
                  <div className="hero-queue mono">
                    <strong>Queue</strong>
                    <span>msg1</span><span>msg2</span><span>msg3</span>
                  </div>
                  <div className="data-hero-stack mono">
                    <strong>Stack</strong>
                    <span>C</span><span>B</span><span>A</span>
                  </div>
                </div>
                <div className="toolbox-labels mono">
                  {toolboxItems.map((item) => (
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
                <span className="cmt">{"// "}</span>from_one_value_to_many
              </div>
              <h2>Module 4 gave you variables. Real programs need organized groups of values.</h2>
              <p>
                A variable can store one value, like one temperature reading or one age. But real
                programs usually need many related values: student marks, temperature history,
                username lookups, message queues, function calls, and communication packets.
              </p>
              <p className="lesson-callout">
                A data structure is a way to organize data so a program can use it more easily.
              </p>
            </div>
            <div className="single-to-structures" aria-label="Single value becomes organized collections">
              <div className="single-variable mono">
                <span>temperature</span>
                <strong>25.5</strong>
              </div>
              <TinyArrow />
              <div className="structure-cluster mono">
                <span>[25.5, 26.1, 24.8]</span>
                <span>{`{ id: 7, value: 25.5 }`}</span>
                <span>front [msg1] [msg2] back</span>
              </div>
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
          <div className="data-progress-strip mono reveal" aria-label="Data organization toolbox progress strip">
            {toolboxItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="goal-grid data-goals">
            {learningGoals.map(([icon, goal], index) => (
              <article className={`goal-card reveal d${Math.min(index, 5)}`} key={goal}>
                <ChipIcon>{icon}</ChipIcon>
                <p>{goal}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="core-thesis">
          <div className="data-thesis reveal">
            <div>
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>core_thesis
              </div>
              <h2>Data structures are containers for organizing data.</h2>
              <p className="thesis-statement">Structure makes data easier to work with.</p>
              <p>
                A single variable is useful, but it is not enough when a program needs to remember
                multiple related values. A list makes it easier to store, loop through, calculate,
                display, and update readings.
              </p>
            </div>
            <div className="scatter-vs-list" aria-label="Scattered variables compared with a clean list">
              <div className="scattered-vars mono">
                {temperatures.map((value, index) => (
                  <span className={`scatter-${index}`} key={value}>temperature{index + 1} = {value}</span>
                ))}
              </div>
              <TinyArrow />
              <div className="clean-list mono">
                <strong>temperatures</strong>
                <IndexedRow values={temperatures} label="Temperatures list with indexes" />
              </div>
            </div>
          </div>
          <div className="code-comparison-grid compact">
            <CodeCard title="separate_values" ext=".py" code={`temperature1 = 25.5\ntemperature2 = 26.1\ntemperature3 = 24.8\ntemperature4 = 27.0\ntemperature5 = 26.4`} />
            <CodeCard title="organized_list" ext=".py" code={`temperatures = [25.5, 26.1, 24.8, 27.0, 26.4]`} />
          </div>
        </section>

        <section className="lesson-section wrap" id="arrays-lists">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.arrays_and_lists
            </div>
            <h2>Arrays and lists store multiple values in order.</h2>
            <p>
              A list is like a row of labeled boxes. Each value has a position, often called an
              index. Many programming languages start counting indexes from 0.
            </p>
          </div>
          <div className="concept-split">
            <article className="data-card reveal">
              <div className="concept-top">
                <ChipIcon>LIST</ChipIcon>
                <h3>Student marks</h3>
              </div>
              <IndexedRow values={arrayValues} label="Student marks list: index 0 value 85, index 1 value 90, index 2 value 78, index 3 value 92" />
              <p>
                <code>student_marks = [85, 90, 78, 92]</code>
              </p>
              <ul className="example-list">
                {conceptUses.lists.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="data-card reveal d1">
              <div className="concept-top">
                <ChipIcon>MCU</ChipIcon>
                <h3>Sensor history</h3>
              </div>
              <SensorChart />
              <p>
                A sensor history graph is basically a list or array of readings over time.
              </p>
            </article>
          </div>
          <CodeCard title="temperature_indexes" ext=".py" code={listExample} />
          <p className="lesson-callout reveal">
            <code>temperatures[0]</code> gets the first reading. <code>temperatures[3]</code> gets
            the fourth reading.
          </p>
        </section>

        <section className="lesson-section wrap" id="strings">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.strings
            </div>
            <h2>Strings are text, and text is a sequence of characters.</h2>
            <p>
              Strings are used for names, messages, commands, filenames, URLs, and text data. Keep
              the beginner idea simple: a string can be understood as characters in order.
            </p>
          </div>
          <div className="concept-split">
            <article className="data-card reveal">
              <div className="concept-top">
                <ChipIcon>STR</ChipIcon>
                <h3>name = &quot;Rafi&quot;</h3>
              </div>
              <IndexedRow values={stringChars} label="String Rafi as characters indexed 0 through 3" />
              <ul className="example-list">
                {conceptUses.strings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="data-card uart-card reveal d1">
              <div className="concept-top">
                <ChipIcon>UART</ChipIcon>
                <h3>Serial command text</h3>
              </div>
              <div className="uart-flow mono" aria-label="UART command AT plus STATUS split into characters">
                <strong>&quot;AT+STATUS&quot;</strong>
                <TinyArrow />
                <div>
                  {uartCommand.map((char, index) => (
                    <span key={`${char}-${index}`}>{char}</span>
                  ))}
                </div>
              </div>
              <p>
                Many embedded devices receive text commands over UART, such as <code>AT</code>,{" "}
                <code>AT+STATUS</code>, or <code>LED_ON</code>.
              </p>
              <p className="small-note">In C, strings have lower-level details that will be covered later.</p>
            </article>
          </div>
        </section>

        <section className="lesson-section wrap" id="structs-objects">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.structs_and_objects
            </div>
            <h2>Structs and objects group related pieces of data together.</h2>
            <p>
              A struct or object is like a form with fields. Instead of storing related values
              separately, we group them so the program knows they belong together.
            </p>
          </div>
          <div className="object-grid">
            <article className="object-card reveal" aria-label="SensorReading object card">
              <div className="object-title mono">SensorReading</div>
              <div className="field-row"><span>temperature</span><strong>25.5</strong></div>
              <div className="field-row"><span>humidity</span><strong>60</strong></div>
              <div className="field-row"><span>timestamp</span><strong>10:30 AM</strong></div>
            </article>
            <CodeCard title="sensor_reading" ext=".py" code={sensorObject} />
          </div>
          <div className="packet-diagram reveal" aria-label="Packet fields: header, length, payload, checksum">
            {["Header", "Length", "Payload", "Checksum"].map((field) => (
              <span key={field}>{field}</span>
            ))}
          </div>
          <div className="embedded-examples reveal">
            {languageNotes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="lesson-callout reveal">
            A packet is often represented as a struct because communication data usually has
            multiple fields: message type, length, payload, and checksum.
          </p>
        </section>

        <section className="lesson-section wrap" id="dictionaries-maps">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.dictionaries_and_maps
            </div>
            <h2>Dictionaries and maps store key-value pairs.</h2>
            <p>
              A dictionary is like looking up a word and getting its meaning. The key is used to
              look up the value.
            </p>
          </div>
          <div className="concept-split">
            <article className="map-lookup-card reveal">
              <h3>Lookup example</h3>
              <div className="lookup-flow mono" aria-label="Key alice points to hashed password value">
                <span className="key-card">key: alice</span>
                <TinyArrow />
                <span className="value-card">value: hashed_password_1</span>
              </div>
              <div className="kv-table" aria-label="Key value table">
                <div><strong>Key</strong><strong>Value</strong></div>
                <div><span>alice</span><span>hashed_password_1</span></div>
                <div><span>bob</span><span>hashed_password_2</span></div>
              </div>
              <p className="small-note">
                In real systems, passwords should not be stored directly. They are stored as secure hashes.
              </p>
            </article>
            <CodeCard title="users" ext=".py" code={usersMap} />
          </div>
          <div className="embedded-examples reveal">
            {conceptUses.maps.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="queues">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.queues
            </div>
            <h2>Queues process items in arrival order.</h2>
            <p>
              A queue is like a line at a store. The first person in line is served first. This is
              called first in, first out.
            </p>
          </div>
          <div className="queue-grid">
            <article className="data-card reveal">
              <div className="concept-top">
                <ChipIcon>FIFO</ChipIcon>
                <h3>Enqueue and dequeue</h3>
              </div>
              <div className="queue-diagram mono" aria-label="Queue front msg1 msg2 msg3 back">
                <span className="queue-front">Front</span>
                <div>
                  <span>msg1</span>
                  <span>msg2</span>
                  <span>msg3</span>
                </div>
                <span className="queue-back">Back</span>
              </div>
              <p><strong>Enqueue:</strong> add to the back. <strong>Dequeue:</strong> remove from the front.</p>
            </article>
            <article className="data-card reveal d1">
              <div className="concept-top">
                <ChipIcon>UART</ChipIcon>
                <h3>UART receive buffer</h3>
              </div>
              <div className="uart-buffer mono" aria-label="Bytes H E L L O enter queue and parser reads them in order">
                {["H", "E", "L", "L", "O"].map((char, index) => (
                  <span key={`${char}-${index}`}>{char}</span>
                ))}
              </div>
              <p>
                A UART receive buffer is basically a queue. Bytes arrive one after another and the
                program processes them in order.
              </p>
            </article>
          </div>
          <div className="embedded-examples reveal">
            {conceptUses.queues.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="stacks">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>concept.stacks
            </div>
            <h2>Stacks remove the last item first.</h2>
            <p>
              A stack is like a stack of plates. You put a plate on top and take the top plate off
              first. This is called last in, first out.
            </p>
          </div>
          <div className="queue-grid">
            <article className="data-card reveal">
              <div className="concept-top">
                <ChipIcon>LIFO</ChipIcon>
                <h3>Push and pop</h3>
              </div>
              <div className="stack-diagram mono" aria-label="Call stack top function C, function B, function A bottom">
                <span>Top</span>
                <strong>function C</strong>
                <strong>function B</strong>
                <strong>function A</strong>
                <span>Bottom</span>
              </div>
              <p><strong>Push:</strong> add to the top. <strong>Pop:</strong> remove from the top.</p>
            </article>
            <article className="data-card reveal d1">
              <div className="concept-top">
                <ChipIcon>CALL</ChipIcon>
                <h3>Function calls</h3>
              </div>
              <p>
                When function A calls B, and B calls C, C finishes first, then B, then A. The
                computer keeps track of where to return using a call stack.
              </p>
              <ul className="example-list">
                {conceptUses.stacks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="lesson-section wrap" id="comparison">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>choose_the_container
            </div>
            <h2>Which structure fits which problem?</h2>
            <p>Use the shape of the problem to choose the container.</p>
          </div>
          <div className="structure-table reveal" aria-label="Problem to data structure comparison table">
            <div className="table-head">
              <strong>Problem</strong>
              <strong>Good structure</strong>
              <strong>Why</strong>
            </div>
            {comparisonRows.map(([problem, structure, reason]) => (
              <div key={problem}>
                <span>{problem}</span>
                <strong>{structure}</strong>
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="worked-example">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>worked_example.temperature_average
            </div>
            <h2>Worked example: temperature readings average.</h2>
            <p>Five readings become one organized list, then the program calculates the average.</p>
          </div>
          <div className="worked-average-grid">
            <CodeCard title="average_temperature" ext=".py" code={averageExample} />
            <article className="average-visual reveal d1">
              <IndexedRow values={temperatures} label="Five temperature readings used to calculate an average" />
              <div className="sum-card mono">
                <span>25.5 + 26.1 + 24.8 + 27.0 + 26.4 = 129.8</span>
                <strong>129.8 / 5 = 25.96</strong>
              </div>
              <SensorChart compact />
            </article>
          </div>
          <div className="step-cards">
            {[
              "temperatures stores 5 readings in one list.",
              "sum(temperatures) adds all readings.",
              "len(temperatures) counts how many readings there are.",
              "Dividing total by count gives the average.",
              "print displays the result.",
            ].map((step, index) => (
              <article className={`mini-concept-card reveal d${Math.min(index, 5)}`} key={step}>
                <ChipIcon>{String(index + 1).padStart(2, "0")}</ChipIcon>
                <span>{step}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section wrap" id="exercise">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>hands_on_temperature_average
            </div>
            <h2>Exercise: store 5 temperature readings and calculate the average.</h2>
            <p>
              Create a program that stores <code>25.5, 26.1, 24.8, 27.0, 26.4</code>, calculates
              the average, and prints the result.
            </p>
          </div>
          <div className="worksheet-grid">
            <form className="worksheet-card reveal" aria-label="Temperature average worksheet questions">
              {exerciseQuestions.map((question, index) => (
                <label key={question}>
                  <span>{index + 1}. {question}</span>
                  <input type="text" name={`average-question-${index + 1}`} />
                </label>
              ))}
            </form>
            <article className="sample-answer panel reveal d1">
              <div className="titlebar">
                <span className="dots"><i></i><i></i><i></i></span>
                <span className="file mono">expected_result<span className="ext">.txt</span></span>
              </div>
              <div className="sample-body">
                <h3>Expected result</h3>
                <p><code>Average temperature: 25.96</code></p>
                <p>
                  If you add a 6th reading, <code>len(temperatures)</code> automatically counts 6.
                </p>
              </div>
            </article>
          </div>
          <pre className="template-block reveal" aria-label="Copyable starter code for average exercise">
            <code>{exerciseTemplate}</code>
          </pre>
        </section>

        <section className="lesson-section wrap" id="debug-challenge">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>mini_debugging_challenge
            </div>
            <h2>Mini debugging challenge: what is wrong with this code?</h2>
            <p>The code has 5 temperature readings, but the average calculation uses a hardcoded count.</p>
          </div>
          <div className="debug-challenge-grid data-debug-grid">
            <CodeCard title="broken_average" ext=".py" code={brokenAverage} />
            <article className="bug-card reveal d1">
              <h3>Expected explanation</h3>
              <div className="expected-actual">
                <span className="mono">Actual bug</span>
                <strong>divides by 4</strong>
                <span className="mono">Correct count</span>
                <strong>5 readings</strong>
              </div>
              <p>
                There are 5 temperature readings, but the code divides by 4. This gives the wrong
                average. Using <code>len(temperatures)</code> is better because it automatically
                counts the number of readings.
              </p>
            </article>
            <CodeCard title="corrected_average" ext=".py" code={correctedAverage} />
          </div>
        </section>

        <section className="lesson-section wrap" id="embedded">
          <div className="section-head reveal">
            <div className="section-tag mono">
              <span className="cmt">{"// "}</span>embedded_connection
            </div>
            <h2>Embedded programming constantly uses data structures, even when the device is small.</h2>
            <p>
              Data structures help embedded programs keep track of sensor history, incoming bytes,
              communication packets, function calls, and error messages.
            </p>
          </div>
          <div className="embedded-data-grid">
            {embeddedCards.map((card, index) => (
              <article className={`data-card reveal d${Math.min(index, 5)}`} key={card.title}>
                <div className="concept-top">
                  <ChipIcon>{card.icon}</ChipIcon>
                  <h3>{card.title}</h3>
                </div>
                <p><code>{card.text}</code></p>
                <p>{card.note}</p>
                {card.title === "Sensor History" ? <SensorChart compact /> : null}
                {card.title === "UART Receive Queue" ? (
                  <div className="uart-buffer mono">
                    {["H", "E", "L", "L", "O"].map((char, i) => <span key={`${char}-${i}`}>{char}</span>)}
                  </div>
                ) : null}
                {card.title === "Packet Struct" ? (
                  <div className="packet-diagram compact">
                    {["Type", "Length", "Payload", "Checksum"].map((field) => <span key={field}>{field}</span>)}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
          <div className="embedded-examples reveal">
            {embeddedLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="lesson-callout reveal">
            A ring buffer is a fixed-size queue-like structure often used in embedded systems. You
            do not need to implement it yet; just remember the idea for later.
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
            <div className="data-recap-flow mono" aria-label="Many values choose structure organized data easier processing">
              <span>Many values</span>
              <TinyArrow />
              <span>Choose structure</span>
              <TinyArrow />
              <span>Organized data</span>
              <TinyArrow />
              <span>Easier processing</span>
            </div>
          </div>
        </section>

        <section className="lesson-section wrap" id="next">
          <div className="next-card reveal">
            <div>
              <div className="section-tag mono">
                <span className="cmt">{"// "}</span>next_lesson
              </div>
              <h2>Next: Why So Many Languages Exist</h2>
              <p>
                Next, the learner will understand why different programming languages exist and why
                no single language is best at everything. The module will introduce tradeoffs like
                speed vs safety, control vs productivity, and low-level vs high-level programming.
              </p>
              <div className="language-preview mono" aria-label="Language preview labels and control productivity scale">
                <div>
                  {["C", "C++", "Rust", "Python", "JavaScript", "Java", "Go"].map((language) => (
                    <span key={language}>{language}</span>
                  ))}
                </div>
                <strong>Control &lt;-&gt; Productivity</strong>
              </div>
            </div>
            <div className="lesson-nav-actions">
              <Link href="/#modules" className="btn btn-ghost">
                Back to Course Roadmap
              </Link>
              <Link href="/modules/universal-programming-concepts" className="btn btn-ghost">
                Previous: Module 4
              </Link>
              <button className="btn btn-disabled" disabled>
                Next: Module 6
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
