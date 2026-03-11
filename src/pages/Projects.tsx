import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const categories = ["all", "web", "ai", "backend", "research"] as const;

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="px-4 py-16">
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
            A selection of projects showcasing my skills in software development, AI, and backend engineering.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-clay text-sm font-medium capitalize transition-all ${
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "clay-sm text-muted-foreground hover:text-foreground"
              }`}
            >
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

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.35 }}
    className="clay overflow-hidden clay-hover group"
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-lg mb-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
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
      <div className="flex items-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={15} /> Details
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default Projects;
