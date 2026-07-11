import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";
import Seo from "@/components/Seo";

const techStack = [
  "React", "TypeScript", "Node.js", "Java", "Spring Boot",
  "MongoDB", "PostgreSQL", "Python", "TensorFlow", "Docker",
];

const timeline = [
  {
    year: "In progress",
    title: "BSc (Honours) Computer Science",
    place: "Africa University · Mutare, Zimbabwe",
    type: "education" as const,
  },
  {
    year: "Ongoing",
    title: "Freelance Full-Stack & Software Engineer",
    place: "Self-employed · Remote",
    type: "work" as const,
  },
];

const skills = [
  { name: "Frontend Development", pct: 90 },
  { name: "Backend & APIs", pct: 85 },
  { name: "AI / Machine Learning", pct: 70 },
  { name: "Database Design", pct: 80 },
  { name: "DevOps & Cloud", pct: 65 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const typeIcon = {
  education: GraduationCap,
  work: Briefcase,
} as const;

const About = () => (
  <section className="px-4 py-16">
    <Seo
      title="About William S. Gray | Software Engineer & Computer Science Graduate"
      description="William S. Gray is a software engineer and BSc Honours Computer Science student building full-stack, AI-powered, and cloud-native systems across healthcare, education, and retail."
      path="/about"
    />
    <div className="container mx-auto max-w-5xl space-y-20">
      {/* Heading + bio */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          About <span className="text-gradient">William S. Gray</span>
        </h1>
        <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground text-left sm:text-center">
          <p>
            I'm <strong className="text-foreground">William S. Gray</strong>, a software engineer and
            BSc (Honours) Computer Science student at Africa University in Mutare, Zimbabwe. I design and
            build full-stack applications, AI-powered systems, and cloud-native infrastructure that turn
            complex, real-world problems into reliable software.
          </p>
          <p>
            My work spans healthcare, education, retail, and security — from <strong className="text-foreground">PathoGuide</strong>,
            a clinical decision-support system for antibiotic prescribing, to <strong className="text-foreground">CampusIQ</strong>,
            an all-in-one school management platform, and <strong className="text-foreground">Aegis</strong>, an AI-powered
            vehicle access system using license-plate recognition.
          </p>
          <p>
            I care deeply about clean architecture, developer experience, and shipping systems that hold up in
            production. Lately I've been going deeper on AI/ML integration, cloud deployment, and DevOps practices
            that keep software fast, observable, and maintainable.
          </p>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
        <ul className="flex flex-wrap justify-center gap-3 list-none p-0">
          {techStack.map((t, i) => (
            <motion.li
              key={t}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="clay-sm px-5 py-2.5 text-sm font-medium text-foreground clay-hover cursor-default"
            >
              {t}
            </motion.li>
          ))}
        </ul>
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
              <div
                className="clay-inset h-3 overflow-hidden rounded-full"
                role="progressbar"
                aria-label={s.name}
                aria-valuenow={s.pct}
                aria-valuemin={0}
                aria-valuemax={100}
              >
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
        <h2 className="text-2xl font-bold mb-8 text-center">Experience &amp; Education</h2>
        <div className="max-w-xl mx-auto space-y-4">
          {timeline.map((t, i) => {
            const Icon = typeIcon[t.type] ?? Code2;
            return (
              <motion.article
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="clay p-5 flex items-start gap-4"
              >
                <span
                  className={`mt-0.5 w-9 h-9 rounded-clay flex items-center justify-center flex-shrink-0 ${
                    t.type === "education" ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"
                  }`}
                >
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{t.year}</p>
                  <h3 className="font-semibold">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.place}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default About;
