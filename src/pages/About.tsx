import { motion } from "framer-motion";

const techStack = [
  "React", "TypeScript", "Node.js", "Java", "Spring Boot",
  "MongoDB", "PostgreSQL", "Python", "TensorFlow", "Docker",
];

const timeline = [
  { year: "2023 – Present", title: "B.Sc. Computer Science", place: "University", type: "education" as const },
  { year: "2024", title: "Software Engineering Intern", place: "Tech Startup", type: "work" as const },
  { year: "2024", title: "Freelance Web Developer", place: "Self-employed", type: "work" as const },
];

const skills = [
  { name: "Frontend Development", pct: 90 },
  { name: "Backend & APIs", pct: 85 },
  { name: "AI / Machine Learning", pct: 70 },
  { name: "Database Design", pct: 80 },
  { name: "DevOps", pct: 65 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => (
  <section className="px-4 py-16">
    <div className="container mx-auto max-w-5xl space-y-20">
      {/* Heading */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          About <span className="text-gradient">Me</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm a Software developer passionate about building impactful software. I love transforming ideas into elegant, performant web applications and exploring the potential of AI.
        </p>
      </motion.div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((t, i) => (
            <motion.span
              key={t}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="clay-sm px-5 py-2.5 text-sm font-medium text-foreground clay-hover cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
        <div className="max-w-xl mx-auto space-y-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-1.5 text-sm font-medium">
                <span>{s.name}</span>
                <span className="text-muted-foreground">{s.pct}%</span>
              </div>
              <div className="clay-inset h-3 overflow-hidden rounded-full">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center">Experience & Education</h2>
        <div className="max-w-xl mx-auto space-y-4">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="clay p-5 flex items-start gap-4"
            >
              <span className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${t.type === "education" ? "bg-accent" : "bg-primary"}`} />
              <div>
                <p className="text-xs text-muted-foreground font-medium">{t.year}</p>
                <p className="font-semibold">{t.title}</p>
                <p className="text-sm text-muted-foreground">{t.place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
