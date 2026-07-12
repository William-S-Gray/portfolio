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
  {
    slug: "ai-for-african-healthtech",
    title: "Building AI That Actually Works in African Healthtech",
    excerpt:
      "AI in healthcare isn't about the fanciest model — it's about trust, local data, and systems that hold up where connectivity and resources can't be assumed.",
    date: "2026-06-30",
    readingTime: "6 min read",
    tags: ["AI", "Healthcare", "Africa"],
    content: [
      {
        type: "p",
        text: "There's a version of \"AI in healthcare\" that lives in press releases: a large model, a clean dataset, and a demo that dazzles. Then there's the version I work in — where the data is local and messy, the network is unreliable, and the people using the system are making real decisions about real patients. The gap between those two versions is where the actual engineering happens.",
      },
      { type: "h2", text: "Trust is the real feature" },
      {
        type: "p",
        text: "In a clinical setting, an AI recommendation is worthless if the clinician can't see why it was made. With PathoGuide, the goal was never to replace judgment — it was to surface local antibiotic-resistance data at the moment a decision gets made. Every recommendation has to be explainable and traceable back to real evidence, or it simply won't be used.",
      },
      {
        type: "quote",
        text: "An AI system a clinician can't trust is just an expensive way to be ignored.",
      },
      { type: "h2", text: "Local data beats bigger models" },
      {
        type: "p",
        text: "It's tempting to reach for the largest model available. But in healthtech, relevance usually beats raw capability. Resistance patterns in Mutare aren't the same as those in a textbook or a dataset from another continent. A smaller system grounded in accurate local data is far more useful — and far safer — than a powerful one making confident, context-blind predictions.",
      },
      { type: "h2", text: "Engineering for the environment" },
      {
        type: "ul",
        items: [
          "Assume intermittent connectivity — degrade gracefully, never block care.",
          "Keep inference cheap and predictable so the system stays affordable to run.",
          "Make outputs auditable — every suggestion should cite its basis.",
          "Design for handover — the tool informs the clinician, it doesn't overrule them.",
        ],
      },
      { type: "h2", text: "Why it matters" },
      {
        type: "p",
        text: "Done well, AI in African healthtech isn't a smaller version of what happens elsewhere — it's a more disciplined one. The constraints force honesty about what the technology is actually for. That's the work I want to keep doing through WillNova: AI that earns its place by being useful, transparent, and grounded in the reality it's deployed into.",
      },
    ],
  },
  {
    slug: "full-stack-architecture-lessons",
    title: "Twelve Systems In: Full-Stack Architecture Lessons",
    excerpt:
      "After building a dozen systems across healthcare, education, retail, and security, the lessons that stuck weren't about frameworks — they were about boundaries, boring choices, and shipping.",
    date: "2026-07-06",
    readingTime: "6 min read",
    tags: ["Software Engineering", "Architecture", "Full-Stack"],
    content: [
      {
        type: "p",
        text: "Across a dozen systems — clinical tools, school platforms, marketplaces, security software — the patterns that actually mattered turned out to be surprisingly unglamorous. Here are the architecture lessons I keep coming back to.",
      },
      { type: "h2", text: "1. Boring technology is a feature" },
      {
        type: "p",
        text: "The stack that lets you move fast is usually the one you already understand deeply. React, a solid relational database, a well-structured API — these aren't exciting choices, but they're predictable ones. Predictability is what lets you spend your energy on the problem instead of fighting your tools.",
      },
      { type: "h2", text: "2. Get the boundaries right early" },
      {
        type: "p",
        text: "Most of the pain in a growing system comes from blurred boundaries — where the frontend knows too much about the database, or business logic leaks into three different layers. Clear seams between UI, API, and data cost a little discipline up front and save enormous rework later.",
      },
      {
        type: "quote",
        text: "You don't rise to the level of your framework; you fall to the quality of your boundaries.",
      },
      { type: "h2", text: "3. Design the data model like it's permanent" },
      {
        type: "p",
        text: "UIs are cheap to change; data models are not. Once real users have real records, migrations get expensive and risky. Spending extra time on the schema — naming, relationships, what's actually a source of truth — pays back on every feature that follows.",
      },
      { type: "h2", text: "4. Ship, then harden" },
      {
        type: "ul",
        items: [
          "A system in front of real users teaches you more in a week than a month of planning.",
          "Instrument early — you can't improve what you can't see.",
          "Automate the deploy so shipping is boring and frequent, not tense and rare.",
          "Treat the first version as a hypothesis, not a monument.",
        ],
      },
      { type: "h2", text: "The throughline" },
      {
        type: "p",
        text: "Twelve systems in, the meta-lesson is that architecture is mostly about managing change: making the expensive things hard to get wrong and the cheap things easy to iterate on. Everything else is detail.",
      },
    ],
  },
  {
    slug: "leading-a-developer-community",
    title: "What Leading a Developer Community Taught Me About Engineering",
    excerpt:
      "Leading a Google Developer Student Club and serving in student governance changed how I build software — because the hardest problems in engineering are rarely technical.",
    date: "2026-07-09",
    readingTime: "5 min read",
    tags: ["Leadership", "Community", "GDSC"],
    content: [
      {
        type: "p",
        text: "As GDSC Lead for 2023/2024 and later Deputy Speaker of the Africa University Student Union Parliament, I spent a lot of time on problems that had no compiler to catch my mistakes. That experience quietly reshaped how I approach engineering.",
      },
      { type: "h2", text: "Communication is a technical skill" },
      {
        type: "p",
        text: "Running a developer community means explaining ideas to people at wildly different levels — beginners, experienced builders, non-technical stakeholders. Learning to make complex things clear turned out to be one of the most transferable engineering skills I have. The best architecture doc, PR description, or design proposal does exactly the same job.",
      },
      {
        type: "quote",
        text: "If you can't explain it to a first-year student, you probably don't understand it well enough to build it well.",
      },
      { type: "h2", text: "Systems thinking scales to people" },
      {
        type: "p",
        text: "Coordinating events, mentors, and members is a systems problem: incentives, bottlenecks, feedback loops. Seeing an organization that way made me better at seeing software the same way — where the real constraints are, and where a small change creates outsized results.",
      },
      { type: "h2", text: "Leadership is mostly enablement" },
      {
        type: "ul",
        items: [
          "Give people context, not just tasks — they'll make better decisions than you can specify.",
          "Remove blockers relentlessly; that's most of the job.",
          "Celebrate other people's wins louder than your own.",
          "Consistency builds trust faster than any single grand gesture.",
        ],
      },
      { type: "h2", text: "Why it makes me a better engineer" },
      {
        type: "p",
        text: "Software is built by teams, for people. The years I spent leading a community taught me that the technology is only half the work — the other half is helping people build together. That's the mindset I bring to every system I ship, and to WillNova.",
      },
    ],
  },
];
