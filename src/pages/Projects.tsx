import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Stethoscope,
  LayoutDashboard,
  ShoppingBag,
  Music,
  Bot,
  ShoppingCart,
  ShieldCheck,
  Grid2X2,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";
import Seo from "@/components/Seo";

const SITE_URL = "https://william-gray.netlify.app";

// ItemList structured data so search engines can associate each system with William S. Gray.
const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Software projects by William S. Gray",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      keywords: p.techStack.join(", "),
      ...(p.liveUrl ? { url: p.liveUrl } : {}),
      author: {
        "@type": "Person",
        name: "William S. Gray",
        url: `${SITE_URL}/`,
      },
    },
  })),
};

const categories = [
  "all",
  "healthcare",
  "management",
  "marketplace",
  "entertainment",
  "ai",
  "retail",
  "security",
] as const;

type Category = (typeof categories)[number];

const categoryIcons: Record<Category, React.ReactNode> = {
  all: <Grid2X2 size={14} />,
  healthcare: <Stethoscope size={14} />,
  management: <LayoutDashboard size={14} />,
  marketplace: <ShoppingBag size={14} />,
  entertainment: <Music size={14} />,
  ai: <Bot size={14} />,
  retail: <ShoppingCart size={14} />,
  security: <ShieldCheck size={14} />,
};

// Larger icons for project card badges
const categoryCardIcons: Record<string, React.ReactNode> = {
  healthcare: <Stethoscope size={22} />,
  management: <LayoutDashboard size={22} />,
  marketplace: <ShoppingBag size={22} />,
  entertainment: <Music size={22} />,
  ai: <Bot size={22} />,
  retail: <ShoppingCart size={22} />,
  security: <ShieldCheck size={22} />,
};

const categoryColors: Record<string, string> = {
  healthcare: "from-emerald-500 to-teal-600",
  management: "from-blue-500 to-indigo-600",
  marketplace: "from-orange-400 to-amber-500",
  entertainment: "from-purple-500 to-pink-500",
  ai: "from-cyan-500 to-sky-600",
  retail: "from-green-500 to-emerald-600",
  security: "from-orange-500 to-red-600",
};

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="px-4 py-16">
      <Seo
        title="Projects by William S. Gray | Full-Stack & AI Systems"
        description="Explore software projects built by William S. Gray — PathoGuide, CampusIQ, Aegis, and more full-stack, AI-powered, and cloud systems across healthcare, education, and retail."
        path="/projects"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in software
            development, AI, and backend engineering.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-clay text-sm font-medium capitalize transition-all ${
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "clay-sm text-muted-foreground hover:text-foreground"
              }`}
            >
              {categoryIcons[c]}
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const iconColorClass =
    categoryColors[project.category] ?? "from-primary to-primary/60";
  const cardIcon = categoryCardIcons[project.category];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="clay overflow-hidden clay-hover group"
    >
      <div className="relative overflow-hidden h-48">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Branded gradient placeholder when no screenshot is available */
          <div
            className={`w-full h-full bg-gradient-to-br ${iconColorClass} flex flex-col items-center justify-center gap-3 text-white transition-transform duration-500 group-hover:scale-105`}
          >
            <div className="opacity-90 [&>svg]:w-10 [&>svg]:h-10">{cardIcon}</div>
            <span className="font-heading font-bold text-lg tracking-tight px-4 text-center drop-shadow-sm">
              {project.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
        {/* Category icon badge — only over real screenshots */}
        {cardIcon && project.image && (
          <div
            aria-hidden="true"
            className={`absolute top-3 right-3 bg-gradient-to-br ${iconColorClass} text-white p-2 rounded-xl shadow-lg backdrop-blur-sm`}
          >
            {cardIcon}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start gap-3 mb-2">
          <h3 className="font-bold text-lg leading-tight">
            <Link to={`/projects/${project.id}`} className="hover:text-primary transition-colors">
              {project.title}
            </Link>
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Case study <ArrowRight size={14} />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={15} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
