import { useEffect, useMemo, useState, type ReactNode } from "react";

type Skill = "Speaking" | "Writing" | "Reading" | "Listening";
type Band = "Band 7" | "Band 8" | "Band 9";
type Tab = "Tips" | "Practice resources" | "Videos" | "Games";

type Tip = {
  skill: Skill;
  bands: Band[];
  title: string;
  points: string[];
  url: string;
};

type Resource = {
  title: string;
  skill: Skill;
  band: Band;
  description: string;
  url: string;
  tags: string[];
  type: string;
};

type Video = {
  title: string;
  skill: Skill;
  band: Band;
  description: string;
  url: string;
  tags: string[];
};

const skills: Skill[] = ["Speaking", "Writing", "Reading", "Listening"];
const tabs: Tab[] = ["Tips", "Practice resources", "Videos", "Games"];

const bandOrder: Band[] = ["Band 7", "Band 8", "Band 9"];

const tips: Tip[] = [
  {
    skill: "Speaking",
    bands: ["Band 8", "Band 9"],
    title: "Speaking tips",
    points: [
      "Give clear answers and keep your ideas simple.",
      "Use examples to support your answers.",
      "Focus on fluency, pronunciation, and confidence.",
    ],
    url: "https://www.ieltsadvantage.com/ielts-speaking/",
  },
  {
    skill: "Writing",
    bands: ["Band 7", "Band 8", "Band 9"],
    title: "Writing tips",
    points: [
      "Understand what the examiner wants before you write.",
      "Use a clear structure for Task 1 and Task 2.",
      "Learn from Band 9 essays and improve weak grammar or vocabulary.",
    ],
    url: "https://www.ieltsadvantage.com/writing-task-2/",
  },
  {
    skill: "Reading",
    bands: ["Band 8", "Band 9"],
    title: "Reading tips",
    points: [
      "Use real practice tests and trusted materials.",
      "Work on skimming, scanning, and time management.",
      "Read regularly to improve vocabulary and speed.",
    ],
    url: "https://www.ieltsadvantage.com/ielts-reading-2/",
  },
  {
    skill: "Listening",
    bands: ["Band 8", "Band 9"],
    title: "Listening tips",
    points: [
      "Practice with genuine IELTS-style material.",
      "Review mistakes after every test.",
      "Train your ear with active listening and different accents.",
    ],
    url: "https://www.ieltsadvantage.com/ielts-listening-2/",
  },
];

const resources: Resource[] = [
  {
    title: "Speaking mock test and feedback",
    skill: "Speaking",
    band: "Band 8",
    description: "A mock speaking test with expert feedback and clear improvement points.",
    url: "https://www.ieltsadvantage.com/speaking-correction-service/",
    tags: ["mock test", "feedback", "speaking"],
    type: "Mock test",
  },
  {
    title: "Band 8 Speaking guide",
    skill: "Speaking",
    band: "Band 8",
    description: "Strategies and Band 8/9 speaking guidance from IELTS Advantage.",
    url: "https://www.ieltsadvantage.com/ielts-speaking/",
    tags: ["speaking", "band 8", "band 9"],
    type: "Guide",
  },
  {
    title: "Speaking Part 2 Band 9 examples",
    skill: "Speaking",
    band: "Band 9",
    description: "Real cue cards and high-level sample answers for Speaking Part 2.",
    url: "https://www.ieltsadvantage.com/ielts-cue-card-band-9-answers/",
    tags: ["cue cards", "band 9", "examples"],
    type: "Sample answers",
  },
  {
    title: "Writing Task 2 guide and essay examples",
    skill: "Writing",
    band: "Band 8",
    description: "A complete guide with strong essay support and sample-level guidance.",
    url: "https://www.ieltsadvantage.com/writing-task-2/",
    tags: ["essay examples", "task 2", "writing"],
    type: "Essay examples",
  },
  {
    title: "100 Writing sample questions",
    skill: "Writing",
    band: "Band 7",
    description: "More than 100 practice questions taken from real IELTS past papers.",
    url: "https://www.ieltsadvantage.com/2015/07/15/100-ielts-writing-sample-questions/",
    tags: ["practice questions", "task 2", "writing"],
    type: "Practice bank",
  },
  {
    title: "Writing Task 1 guide",
    skill: "Writing",
    band: "Band 8",
    description: "Task 1 explanations, structure, and improvement tips.",
    url: "https://www.ieltsadvantage.com/writing-task-1/",
    tags: ["task 1", "writing", "structure"],
    type: "Guide",
  },
  {
    title: "Reading practice and real tests",
    skill: "Reading",
    band: "Band 8",
    description: "Real reading practice resources, strategies, and test-style materials.",
    url: "https://www.ieltsadvantage.com/ielts-reading-2/",
    tags: ["reading practice", "real tests", "strategy"],
    type: "Practice test",
  },
  {
    title: "Reading practice test PDF",
    skill: "Reading",
    band: "Band 8",
    description: "A downloadable practice test with answers and a follow-up video reference.",
    url: "https://www.ieltsadvantage.com/wp-content/uploads/2023/07/Reading_Test_1.pdf",
    tags: ["pdf", "reading", "practice"],
    type: "PDF test",
  },
  {
    title: "Listening practice and review steps",
    skill: "Listening",
    band: "Band 8",
    description: "Official-style listening practice links and a clear review process.",
    url: "https://www.ieltsadvantage.com/ielts-listening-2/",
    tags: ["listening practice", "review", "real tests"],
    type: "Practice test",
  },
  {
    title: "Free IELTS preparation hub",
    skill: "Speaking",
    band: "Band 8",
    description: "A broad preparation page that organizes IELTS study resources in one place.",
    url: "https://www.ieltsadvantage.com/ielts-preparation/",
    tags: ["preparation", "study plan", "all skills"],
    type: "Resource hub",
  },
  {
    title: "IELTS 5 Day Challenge",
    skill: "Writing",
    band: "Band 8",
    description: "A structured free challenge with lessons and authentic practice questions.",
    url: "https://5dc.ieltsadvantage.com/day-one/",
    tags: ["challenge", "lessons", "practice"],
    type: "Challenge",
  },
];

const videos: Video[] = [
  {
    title: "IELTS Speaking Band 8 Test With EXPERT Feedback",
    skill: "Speaking",
    band: "Band 8",
    description: "A strong speaking example with expert feedback from IELTS Advantage.",
    url: "https://www.youtube.com/watch?v=8aafXYh_gHA",
    tags: ["speaking", "band 8", "feedback", "fluency"],
  },
  {
    title: "IELTS Speaking Test Band 8.5 - Almost Perfect",
    skill: "Speaking",
    band: "Band 8",
    description: "A high-level speaking example with natural answers and detailed analysis.",
    url: "https://www.youtube.com/watch?v=GKr5n9aa2Zw",
    tags: ["speaking", "band 8.5", "pronunciation", "natural"],
  },
  {
    title: "How to Start IELTS Speaking Answers Like a Band 9 Student",
    skill: "Speaking",
    band: "Band 9",
    description: "A Band 9 speaking strategy focused on strong openings and confident delivery.",
    url: "https://www.youtube.com/watch?v=WP2LcgMq-_8",
    tags: ["speaking", "band 9", "answers", "confidence"],
  },
  {
    title: "How to get a Band 8 in IELTS Speaking",
    skill: "Speaking",
    band: "Band 8",
    description: "Interview-style advice for reaching a Band 8 in speaking.",
    url: "https://www.youtube.com/watch?v=wKqHK7JNMAY",
    tags: ["speaking", "band 8", "strategy"],
  },
  {
    title: "IELTS Writing Task 2 guide and strategy video",
    skill: "Writing",
    band: "Band 8",
    description: "A writing strategy video linked to the main Task 2 guide.",
    url: "https://www.ieltsadvantage.com/writing-task-2/",
    tags: ["writing", "band 8", "task 2"],
  },
  {
    title: "IELTS Writing Task 2 sample essays",
    skill: "Writing",
    band: "Band 9",
    description: "A sample-essay resource page with Band 7, 8, and 9 examples.",
    url: "https://www.ieltsadvantage.com/2023/01/15/ielts-writing-task-2-sample-essays/",
    tags: ["writing", "band 9", "sample essays"],
  },
  {
    title: "Master IELTS Reading: Band 9 Strategies & Real Practice",
    skill: "Reading",
    band: "Band 9",
    description: "Reading strategies and practice support from the official IELTS Advantage site.",
    url: "https://www.ieltsadvantage.com/ielts-reading-2/",
    tags: ["reading", "band 9", "practice"],
  },
  {
    title: "Band 5.0 to 8.0 in IELTS Reading Using One Simple Strategy",
    skill: "Reading",
    band: "Band 8",
    description: "A reading improvement video focused on one simple strategy.",
    url: "https://www.youtube.com/watch?v=JKYHb9MjxWs",
    tags: ["reading", "band 8", "strategy", "progress"],
  },
  {
    title: "How to Answer ANY IELTS Reading Question",
    skill: "Reading",
    band: "Band 8",
    description: "A broad reading strategy video useful for multiple question types.",
    url: "https://www.youtube.com/watch?v=3KDP8P-pvEw",
    tags: ["reading", "band 8", "questions", "strategy"],
  },
  {
    title: "How to get a Band 8 in IELTS listening",
    skill: "Listening",
    band: "Band 8",
    description: "A listening strategy video aimed at Band 8 performance.",
    url: "https://www.youtube.com/watch?v=kHTnAx6f-j0",
    tags: ["listening", "band 8", "strategy"],
  },
  {
    title: "The ONLY IELTS Listening Strategy You Need",
    skill: "Listening",
    band: "Band 8",
    description: "A complete listening guide with step-by-step strategies.",
    url: "https://www.youtube.com/watch?v=gfTqr_9BMjs",
    tags: ["listening", "band 8", "guide"],
  },
  {
    title: "How To Get Band 9 in IELTS Listening in 2026",
    skill: "Listening",
    band: "Band 9",
    description: "A higher-level listening guide focused on top-band performance.",
    url: "https://www.youtube.com/watch?v=ULmeHkHU7YQ",
    tags: ["listening", "band 9", "tips", "accuracy"],
  },
];

const skillAvailability: Record<Skill, Band[]> = {
  Speaking: ["Band 8", "Band 9"],
  Writing: ["Band 7", "Band 8", "Band 9"],
  Reading: ["Band 8", "Band 9"],
  Listening: ["Band 8", "Band 9"],
};

function bandRank(band: Band) {
  return bandOrder.indexOf(band);
}

function matchesBand(itemBand: Band, desiredBand: Band | "All") {
  if (desiredBand === "All") return true;
  return bandRank(itemBand) >= bandRank(desiredBand);
}

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <label style={{ display: "block", marginBottom: 8, fontSize: 13, fontWeight: 700, color: "#334155" }}>
      {children}
    </label>
  );
}

const controlStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 48,
  padding: "12px 14px",
  borderRadius: 14,
  border: "1px solid #cbd5e1",
  background: "#fff",
  fontSize: 14,
  color: "#0f172a",
  boxSizing: "border-box",
};

const pillStyle = (active: boolean): React.CSSProperties => ({
  border: "1px solid " + (active ? "#1d4ed8" : "#dbe4f0"),
  background: active ? "#1d4ed8" : "#fff",
  color: active ? "#fff" : "#0f172a",
  borderRadius: 999,
  padding: "10px 16px",
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: active ? "0 10px 20px rgba(29, 78, 216, 0.18)" : "none",
});

function SectionCard({ children }: { children: ReactNode }) {
  return (
    <section
      style={{
        background: "white",
        border: "1px solid #e2e8f0",
        borderRadius: 24,
        padding: 22,
        marginBottom: 22,
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
      }}
    >
      {children}
    </section>
  );
}

function OpenLinkButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-block",
        background: "#0f172a",
        color: "white",
        textDecoration: "none",
        padding: "11px 16px",
        borderRadius: 12,
        fontWeight: 700,
      }}
    >
      {children}
    </a>
  );
}

function bandNote(skill: Skill, band: Band) {
  if (skill === "Speaking") {
    return band === "Band 8"
      ? "Aim for control, fluency, and strong examples."
      : "Push for natural delivery and precise language.";
  }
  if (skill === "Writing") {
    return band === "Band 7"
      ? "Focus on clear structure and development."
      : band === "Band 8"
        ? "Aim for coherence, support, and fewer errors."
        : "Push for sharper argument, precision, and control.";
  }
  if (skill === "Reading") {
    return band === "Band 8"
      ? "Train speed, paraphrase recognition, and accuracy."
      : "Aim for top-level speed and exact meaning recognition.";
  }
  return band === "Band 8"
    ? "Train your ear, spot distractors, and review mistakes carefully."
    : "Push for near-perfect accuracy under time pressure.";
}

function SpeakingGame({ band }: { band: Band }) {
  const prompts = [
    "Describe a time you learned something difficult.",
    "Talk about a person who motivates you.",
    "Describe a place that helped you focus.",
    "Talk about a skill you improved with practice.",
    "Describe a goal you are working toward.",
  ];
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [running]);

  return (
    <div style={gameBoxStyle}>
      <div style={gameTopStyle}>
        <h3 style={gameTitleStyle}>Speaking game</h3>
        <span style={gameBadgeStyle}>{band}</span>
      </div>
      <p style={gameTextStyle}>{bandNote("Speaking", band)}</p>
      <div style={gamePromptStyle}>{prompts[index % prompts.length]}</div>
      <div style={gameButtonRowStyle}>
        <button type="button" style={gameButtonPrimary} onClick={() => setIndex((value) => value + 1)}>
          New prompt
        </button>
        <button type="button" style={gameButtonSecondary} onClick={() => setRunning((value) => !value)}>
          {running ? "Stop timer" : "Start timer"}
        </button>
        <button type="button" style={gameButtonSecondary} onClick={() => { setSeconds(0); setRunning(false); }}>
          Reset
        </button>
      </div>
      <div style={gameTimerStyle}>Time: {seconds}s</div>
      <div style={gameHintStyle}>Challenge: speak for 120 seconds without stopping.</div>
    </div>
  );
}

function WritingGame({ band }: { band: Band }) {
  const prompts = [
    "Some people think online learning is more effective than classroom learning. Discuss both views and give your opinion.",
    "Many cities are becoming more crowded. What problems does this cause, and what solutions can be offered?",
    "Some people prefer to work for the same company for many years. Others change jobs frequently. Discuss both views.",
    "The best way to learn a language is to live in a country where it is spoken. To what extent do you agree?",
  ];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  const steps = ["Introduction", "Body Paragraph 1", "Body Paragraph 2", "Conclusion"];

  function addStep(step: string) {
    setFeedback("");
    setSelected((prev) => (prev.includes(step) ? prev : [...prev, step]));
  }

  function checkOrder() {
    const correct = steps.every((step, idx) => selected[idx] === step) && selected.length === steps.length;
    setFeedback(
      correct
        ? "Great outline. That order is correct for a strong IELTS essay."
        : "Try again. A clear IELTS essay usually starts with the introduction, then body paragraphs, then the conclusion."
    );
  }

  return (
    <div style={gameBoxStyle}>
      <div style={gameTopStyle}>
        <h3 style={gameTitleStyle}>Writing game</h3>
        <span style={gameBadgeStyle}>{band}</span>
      </div>
      <p style={gameTextStyle}>{bandNote("Writing", band)}</p>
      <div style={gamePromptStyle}>{prompts[index % prompts.length]}</div>
      <p style={{ margin: "12px 0 8px", fontWeight: 700, fontSize: 14 }}>Build the essay outline in order:</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {steps.map((step) => (
          <button key={step} type="button" style={gameStepButton(selected.includes(step))} onClick={() => addStep(step)}>
            {step}
          </button>
        ))}
      </div>
      <div style={gameOrderStyle}>{selected.length ? selected.join(" → ") : "Your order will appear here"}</div>
      <div style={gameButtonRowStyle}>
        <button type="button" style={gameButtonPrimary} onClick={checkOrder}>
          Check order
        </button>
        <button type="button" style={gameButtonSecondary} onClick={() => setIndex((value) => value + 1)}>
          New prompt
        </button>
        <button type="button" style={gameButtonSecondary} onClick={() => { setSelected([]); setFeedback(""); }}>
          Reset
        </button>
      </div>
      {feedback && <div style={gameFeedbackStyle}>{feedback}</div>}
    </div>
  );
}

function ReadingGame({ band }: { band: Band }) {
  const cards = [
    {
      question: "The article says the strategy helps students move faster through questions.",
      options: ["Speed up the process", "Write longer essays", "Ignore keywords"],
      answer: "Speed up the process",
    },
    {
      question: "The passage recommends using real tests and trusted materials.",
      options: ["Only use random articles", "Use real practice tests", "Avoid practice"],
      answer: "Use real practice tests",
    },
    {
      question: "The method focuses on finding similar meaning, not exact words.",
      options: ["Paraphrase matching", "Guessing", "Skipping questions"],
      answer: "Paraphrase matching",
    },
  ];
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState("");
  const [message, setMessage] = useState("");
  const card = cards[index % cards.length];

  function choose(option: string) {
    setPicked(option);
    setMessage(option === card.answer ? "Correct. You matched the main idea well." : "Not quite. Try to identify the paraphrase used in the passage.");
  }

  return (
    <div style={gameBoxStyle}>
      <div style={gameTopStyle}>
        <h3 style={gameTitleStyle}>Reading game</h3>
        <span style={gameBadgeStyle}>{band}</span>
      </div>
      <p style={gameTextStyle}>{bandNote("Reading", band)}</p>
      <div style={gamePromptStyle}>{card.question}</div>
      <div style={{ display: "grid", gap: 8 }}>
        {card.options.map((option) => (
          <button key={option} type="button" onClick={() => choose(option)} style={gameChoiceButton(picked === option)}>
            {option}
          </button>
        ))}
      </div>
      <div style={gameButtonRowStyle}>
        <button
          type="button"
          style={gameButtonPrimary}
          onClick={() => {
            setIndex((value) => value + 1);
            setPicked("");
            setMessage("");
          }}
        >
          New question
        </button>
      </div>
      {message && <div style={gameFeedbackStyle}>{message}</div>}
    </div>
  );
}

function ListeningGame({ band }: { band: Band }) {
  const parts = [
    {
      label: "Part 1",
      title: "Questions 1–10",
      description: "Practice note completion and short factual listening.",
      url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/listening/section-1",
    },
    {
      label: "Part 2",
      title: "Questions 11–20",
      description: "Practice form completion and matching speakers or options.",
      url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/listening/section-2",
    },
    {
      label: "Part 3",
      title: "Questions 21–30",
      description: "Practice academic listening with longer notes and ideas.",
      url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/listening/section-3",
    },
    {
      label: "Part 4",
      title: "Questions 31–40",
      description: "Practice lecture-style listening with detailed information.",
      url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/listening/section-4",
    },
  ];
  const [index, setIndex] = useState(0);
  const [opened, setOpened] = useState<string | null>(null);
  const item = parts[index % parts.length];

  return (
    <div style={gameBoxStyle}>
      <div style={gameTopStyle}>
        <h3 style={gameTitleStyle}>Listening game</h3>
        <span style={gameBadgeStyle}>{band}</span>
      </div>
      <p style={gameTextStyle}>{bandNote("Listening", band)}</p>
      <div style={gamePromptStyle}>
        {item.label} — {item.title}
      </div>
      <p style={{ margin: "0 0 12px", color: "#475569", lineHeight: 1.6, fontSize: 14 }}>{item.description}</p>
      <div style={gameButtonRowStyle}>
        <button
          type="button"
          style={gameButtonPrimary}
          onClick={() => {
            window.open(item.url, "_blank", "noopener,noreferrer");
            setOpened(item.label);
          }}
        >
          Open official practice page
        </button>
        <button type="button" style={gameButtonSecondary} onClick={() => setIndex((value) => value + 1)}>
          Next part
        </button>
      </div>
      <div style={gameHintStyle}>Use the British Council part pages to practice the official listening test format.</div>
      {opened && <div style={gameFeedbackStyle}>Opened {opened}. You can return here and choose the next part.</div>}
    </div>
  );
}

const gameBoxStyle: React.CSSProperties = {
  border: "1px solid #dbe4f0",
  borderRadius: 20,
  padding: 18,
  background: "linear-gradient(180deg, #f8fafc, #ffffff)",
  boxShadow: "0 8px 20px rgba(15, 23, 42, 0.04)",
};

const gameTopStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
  flexWrap: "wrap",
};

const gameTitleStyle: React.CSSProperties = { margin: 0, fontSize: 18 };
const gameBadgeStyle: React.CSSProperties = { padding: "6px 10px", borderRadius: 999, background: "#eff6ff", color: "#1d4ed8", fontSize: 12, fontWeight: 800 };
const gameTextStyle: React.CSSProperties = { margin: "10px 0 12px", fontSize: 14, color: "#475569", lineHeight: 1.6 };
const gamePromptStyle: React.CSSProperties = { padding: 14, borderRadius: 16, border: "1px solid #e2e8f0", background: "#fff", fontWeight: 700, lineHeight: 1.6, marginBottom: 12 };
const gameButtonRowStyle: React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 };
const gameButtonPrimary: React.CSSProperties = { border: "none", background: "#0f172a", color: "white", borderRadius: 12, padding: "10px 14px", fontWeight: 700, cursor: "pointer" };
const gameButtonSecondary: React.CSSProperties = { border: "1px solid #cbd5e1", background: "white", color: "#0f172a", borderRadius: 12, padding: "10px 14px", fontWeight: 700, cursor: "pointer" };
const gameChoiceButton = (active: boolean): React.CSSProperties => ({ border: "1px solid " + (active ? "#1d4ed8" : "#cbd5e1"), background: active ? "#eff6ff" : "white", color: "#0f172a", borderRadius: 12, padding: "10px 12px", fontWeight: 700, cursor: "pointer", textAlign: "left" });
const gameStepButton = (active: boolean): React.CSSProperties => ({ border: "1px solid " + (active ? "#1d4ed8" : "#cbd5e1"), background: active ? "#eff6ff" : "white", color: "#0f172a", borderRadius: 999, padding: "8px 12px", fontWeight: 700, cursor: "pointer" });
const gameOrderStyle: React.CSSProperties = { marginTop: 12, padding: 12, borderRadius: 14, border: "1px dashed #cbd5e1", color: "#475569", fontSize: 14, lineHeight: 1.6, minHeight: 24 };
const gameTimerStyle: React.CSSProperties = { marginTop: 12, fontSize: 15, fontWeight: 800, color: "#1d4ed8" };
const gameHintStyle: React.CSSProperties = { marginTop: 8, fontSize: 13, color: "#64748b" };
const gameFeedbackStyle: React.CSSProperties = { marginTop: 12, padding: 12, borderRadius: 14, background: "#f8fafc", border: "1px solid #e2e8f0", color: "#334155", fontSize: 14, lineHeight: 1.6 };

function getAvailableBandsForTab(skill: Skill | "All", tab: Tab): Band[] {
  const bySkill = skill === "All" ? skills : [skill];

  const sourceBands = new Set<Band>();

  if (tab === "Tips") {
    tips.forEach((tip) => {
      if (bySkill.includes(tip.skill)) {
        tip.bands.forEach((band) => sourceBands.add(band));
      }
    });
  }

  if (tab === "Practice resources") {
    resources.forEach((item) => {
      if (bySkill.includes(item.skill)) sourceBands.add(item.band);
    });
  }

  if (tab === "Videos") {
    videos.forEach((item) => {
      if (bySkill.includes(item.skill)) sourceBands.add(item.band);
    });
  }

  if (tab === "Games") {
    bySkill.forEach((s) => skillAvailability[s].forEach((band) => sourceBands.add(band)));
  }

  return bandOrder.filter((band) => sourceBands.has(band));
}

export default function App() {
  const [skill, setSkill] = useState<Skill | "All">("All");
  const [targetBand, setTargetBand] = useState<Band | "All">("Band 8");
  const [tab, setTab] = useState<Tab>("Tips");

  const availableBands = useMemo(() => getAvailableBandsForTab(skill, tab), [skill, tab]);

  useEffect(() => {
    if (targetBand !== "All" && !availableBands.includes(targetBand)) {
      setTargetBand(availableBands[0] ?? "Band 8");
    }
  }, [availableBands, targetBand]);

  const selectedBandForGames: Band = targetBand === "All" ? availableBands[availableBands.length - 1] ?? "Band 8" : targetBand;

  const filteredTips = useMemo(() => {
    const chosenSkills = skill === "All" ? skills : [skill];
    return tips.filter((tip) => chosenSkills.includes(tip.skill) && (targetBand === "All" || tip.bands.includes(targetBand)));
  }, [skill, targetBand]);

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const skillMatch = skill === "All" || item.skill === skill;
      const bandMatch = matchesBand(item.band, targetBand === "All" ? "Band 7" : targetBand);
      return skillMatch && bandMatch;
    });
  }, [skill, targetBand]);

  const filteredVideos = useMemo(() => {
    return videos.filter((item) => {
      const skillMatch = skill === "All" || item.skill === skill;
      const bandMatch = matchesBand(item.band, targetBand === "All" ? "Band 8" : targetBand);
      return skillMatch && bandMatch;
    });
  }, [skill, targetBand]);

  const disclaimer = `Fan project / personal study tool based on IELTS Advantage methodology. Available at https://www.ieltsadvantage.com/. Independent, non-commercial, and not affiliated with, endorsed by, sponsored by, or intended to replace IELTS Advantage, Christopher Pell, or their team. All rights, trademarks, and content belong to their respective owners. This tool is for personal study and educational reference only.`;

  const showSkill = (required: Skill) => skill === "All" || skill === required;

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #eff6ff 0%, #f8fafc 25%, #f8fafc 100%)", color: "#0f172a", fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 20px 40px" }}>
        <header style={{ position: "relative", overflow: "hidden", borderRadius: 28, padding: "34px 24px 28px", marginBottom: 22, background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #2563eb 100%)", color: "white", boxShadow: "0 18px 50px rgba(15, 23, 42, 0.18)" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 26%), radial-gradient(circle at bottom left, rgba(255,255,255,0.12), transparent 22%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: 1.8, textTransform: "uppercase", opacity: 0.9 }}>
              Fan project / personal study tool based on IELTS Advantage methodology
            </p>
            <p style={{ margin: "6px 0 0", fontSize: 12, opacity: 0.9 }}>
              Available at https://www.ieltsadvantage.com/
            </p>
            <h1 style={{ margin: "14px 0 10px", fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.05 }}>
              IELTS PRACTICE TOOL
            </h1>
            <p style={{ margin: "0 auto", maxWidth: 880, fontSize: 16, lineHeight: 1.75, opacity: 0.95 }}>
              Choose a skill and target band to explore tips, practice materials, videos, and small study games.
            </p>
          </div>
          <div style={{ position: "relative", marginTop: 22, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
            {tabs.map((item) => (
              <button key={item} type="button" onClick={() => setTab(item)} style={pillStyle(tab === item)}>
                {item}
              </button>
            ))}
          </div>
        </header>

        <SectionCard>
          <h2 style={{ margin: "0 0 18px", textAlign: "center", fontSize: 22 }}>Choose a skill and band</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "end", maxWidth: 760, margin: "0 auto" }}>
            <div>
              <FieldLabel>Skill</FieldLabel>
              <select value={skill} onChange={(e) => setSkill(e.target.value as Skill | "All")} style={controlStyle}>
                <option>All</option>
                {skills.map((option) => <option key={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <FieldLabel>Target band</FieldLabel>
              <select value={targetBand} onChange={(e) => setTargetBand(e.target.value as Band | "All")} style={controlStyle}>
                <option>All</option>
                {availableBands.map((option) => <option key={option}>{option}</option>)}
              </select>
            </div>
          </div>
        </SectionCard>

        {tab === "Tips" && (
          <SectionCard>
            <h2 style={{ margin: "0 0 16px", textAlign: "center", fontSize: 20 }}>Short tips by skill</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
              {filteredTips.map((tip) => {
                const focusBand = targetBand === "All" ? tip.bands[tip.bands.length - 1] : targetBand;
                return (
                  <article key={tip.skill} style={{ border: "1px solid #dbe4f0", borderRadius: 18, padding: 16, background: "linear-gradient(180deg, #f8fafc, #ffffff)" }}>
                    <div style={{ fontWeight: 800, fontSize: 16, textAlign: "center", marginBottom: 10 }}>{tip.title}</div>
                    <ul style={{ margin: 0, paddingLeft: 18, color: "#475569", lineHeight: 1.7, fontSize: 14 }}>
                      {tip.points.map((point) => <li key={point}>{point}</li>)}
                      <li>{bandNote(tip.skill, focusBand)}</li>
                    </ul>
                    <div style={{ marginTop: 12, textAlign: "center" }}>
                      <OpenLinkButton href={tip.url}>Open skill page</OpenLinkButton>
                    </div>
                  </article>
                );
              })}
            </div>
          </SectionCard>
        )}

        {tab === "Practice resources" && (
          <SectionCard>
            <h2 style={{ margin: "0 0 16px", textAlign: "center", fontSize: 20 }}>Practice resources</h2>
            <p style={{ margin: "0 0 18px", textAlign: "center", color: "#64748b" }}>Access mock tests, essay examples, reading practice, and listening practice.</p>
            <div style={{ display: "grid", gap: 16 }}>
              {filteredResources.map((item) => (
                <article key={item.url} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 22, padding: 18, boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
                    <div style={{ flex: "1 1 520px" }}>
                      <h3 style={{ margin: "0 0 8px", fontSize: 19 }}>{item.title}</h3>
                      <p style={{ margin: 0, color: "#475569", lineHeight: 1.7 }}>{item.description}</p>
                    </div>
                    <div style={{ minWidth: 150, textAlign: "center", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 18, padding: 14 }}>
                      <div style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: 1 }}>Skill</div>
                      <div style={{ fontWeight: 800, marginTop: 4 }}>{item.skill}</div>
                      <div style={{ marginTop: 10, fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: 1 }}>Band</div>
                      <div style={{ fontWeight: 800, marginTop: 4 }}>{item.band}</div>
                      <div style={{ marginTop: 10, fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: 1 }}>Type</div>
                      <div style={{ fontWeight: 800, marginTop: 4 }}>{item.type}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
                    {item.tags.map((tag) => <span key={tag} style={{ display: "inline-block", padding: "6px 10px", borderRadius: 999, background: "#eff6ff", color: "#1d4ed8", fontSize: 12, fontWeight: 700 }}>{tag}</span>)}
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <OpenLinkButton href={item.url}>Open resource</OpenLinkButton>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        )}

        {tab === "Videos" && (
          <SectionCard>
            <h2 style={{ margin: "0 0 16px", textAlign: "center", fontSize: 20 }}>Videos</h2>
            <p style={{ margin: "0 0 18px", textAlign: "center", color: "#64748b" }}>Filtered by skill and band to help you watch the most relevant lessons.</p>
            <div style={{ display: "grid", gap: 16 }}>
              {filteredVideos.map((item) => (
                <article key={item.url} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 22, padding: 18, boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
                    <div style={{ flex: "1 1 520px" }}>
                      <h3 style={{ margin: "0 0 8px", fontSize: 19 }}>{item.title}</h3>
                      <p style={{ margin: 0, color: "#475569", lineHeight: 1.7 }}>{item.description}</p>
                    </div>
                    <div style={{ minWidth: 150, textAlign: "center", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 18, padding: 14 }}>
                      <div style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: 1 }}>Skill</div>
                      <div style={{ fontWeight: 800, marginTop: 4 }}>{item.skill}</div>
                      <div style={{ marginTop: 10, fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: 1 }}>Band</div>
                      <div style={{ fontWeight: 800, marginTop: 4 }}>{item.band}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
                    {item.tags.map((tag) => <span key={tag} style={{ display: "inline-block", padding: "6px 10px", borderRadius: 999, background: "#eff6ff", color: "#1d4ed8", fontSize: 12, fontWeight: 700 }}>{tag}</span>)}
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <OpenLinkButton href={item.url}>Open video</OpenLinkButton>
                  </div>
                </article>
              ))}
            </div>
          </SectionCard>
        )}

        {tab === "Games" && (
          <SectionCard>
            <h2 style={{ margin: "0 0 16px", textAlign: "center", fontSize: 20 }}>Games</h2>
            <p style={{ margin: "0 0 18px", textAlign: "center", color: "#64748b" }}>Small interactive challenges based on IELTS speaking, writing, reading, and listening study habits.</p>
            <div style={{ display: "grid", gap: 16 }}>
              {showSkill("Speaking") && <SpeakingGame band={selectedBandForGames} />}
              {showSkill("Writing") && <WritingGame band={selectedBandForGames} />}
              {showSkill("Reading") && <ReadingGame band={selectedBandForGames} />}
              {showSkill("Listening") && <ListeningGame band={selectedBandForGames} />}
            </div>
          </SectionCard>
        )}

        <footer style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid #e2e8f0", fontSize: 11, color: "#64748b", lineHeight: 1.7, textAlign: "center" }}>
          {disclaimer}
        </footer>
      </div>
    </div>
  );
}
