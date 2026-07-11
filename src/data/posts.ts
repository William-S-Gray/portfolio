export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2026-07-11". */
  date: string;
  readingTime: string;
  tags: string[];
  content: Block[];
}

export const posts: Post[] = [
  {
    slug: "building-software-for-the-real-world",
    title: "Building Software for the Real World: Lessons from PathoGuide",
    excerpt:
      "What building a clinical decision-support tool in Mutare taught me about designing software for environments where connectivity, cost, and context can't be assumed.",
    date: "2026-07-11",
    readingTime: "5 min read",
    tags: ["Software Engineering", "Healthcare", "Africa"],
    content: [
      {
        type: "p",
        text: "Most software tutorials assume a world with fast internet, modern devices, and users who behave predictably. Real environments rarely cooperate. When I started building PathoGuide — a clinical decision-support system for antibiotic prescribing in Mutare — I quickly learned that the interesting engineering problems live exactly where those assumptions break down.",
      },
      { type: "h2", text: "Start with the problem, not the stack" },
      {
        type: "p",
        text: "Antimicrobial resistance is a quiet crisis. Clinicians often prescribe antibiotics without visibility into local resistance patterns, and every mismatched prescription pushes resistance further. The temptation as an engineer is to jump straight to frameworks and databases. But the first job was understanding the actual workflow: who prescribes, what data exists, how decisions get made under time pressure, and where a tool could realistically fit.",
      },
      {
        type: "quote",
        text: "The best technology begins with understanding the problem before choosing the tools.",
      },
      { type: "h2", text: "Design for constraints, not for demos" },
      {
        type: "p",
        text: "Software that only works in a demo isn't finished. Building for emerging-market contexts means treating constraints as first-class design inputs rather than edge cases to patch later.",
      },
      {
        type: "ul",
        items: [
          "Connectivity is intermittent — interfaces must stay usable and fast on weak networks.",
          "Devices vary widely — the experience can't assume the latest hardware.",
          "Affordability matters — infrastructure choices have to be sustainable, not just impressive.",
          "Trust is earned — recommendations must be transparent and grounded in real, local data.",
        ],
      },
      { type: "h2", text: "Ship, learn, rebuild" },
      {
        type: "p",
        text: "Some of my strongest learning has come from building, hitting a wall, researching, and rebuilding. PathoGuide was no different. Each iteration sharpened the same question: is this making a measurable difference for the people using it? That loop — build, observe, improve — matters far more than getting the architecture perfect on the first try.",
      },
      { type: "h2", text: "Why this keeps me building" },
      {
        type: "p",
        text: "I'm drawn to problems in healthcare, education, agriculture, and public services — especially within African and emerging-market contexts, where thoughtful software can create outsized impact. Through WillNova Technologies, that's the kind of work I want to keep doing: technology that's technically strong, commercially viable, and genuinely useful to the people it's designed to serve.",
      },
      {
        type: "p",
        text: "Because in the end, technology isn't only about what can be built. It's about what becomes possible because we built it.",
      },
    ],
  },
];
