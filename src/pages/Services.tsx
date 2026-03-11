import { motion } from "framer-motion";
import { Globe, Server, Brain, Database, Cloud, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with React, TypeScript, and TailwindCSS.",
  },
  {
    icon: Server,
    title: "Backend APIs",
    description: "Scalable RESTful and GraphQL APIs using Node.js, Spring Boot, and microservices architecture.",
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description: "Intelligent features powered by machine learning, NLP, and computer vision models.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database schemas and optimization with PostgreSQL, Mysql, MongoDB, and Redis.",
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    description: "CI/CD pipelines, containerization with Docker, and cloud deployment on AWS/GCP.",
  },
  {
    icon: Code2,
    title: "Mobile & Web Application",
    description: "Cross-platform mobile and web applications built with modern frameworks.",
  },
];

const Services = () => (
  <section className="px-4 py-16">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          My <span className="text-gradient">Services</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From concept to deployment — I offer end-to-end software development services tailored to your needs.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="clay p-7 flex flex-col clay-hover group"
          >
            <div className="w-12 h-12 rounded-clay bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground flex-1 mb-5">{s.description}</p>
            <Link
              to="/contact"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Get in touch →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
