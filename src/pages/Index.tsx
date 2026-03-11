import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "@/assets/profile-placeholder.jpg";

const socials = [
  { icon: Github, href: "https://github.com/William-W-Gray", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/william-wiltino-gray-577254253/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/wiltino.gray/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/williamwiltinogray/", label: "Instagram" },
];

const Index = () => (
  <section className="px-4 min-h-[calc(100vh-6rem)] flex items-center">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block clay-sm px-4 py-1.5 text-xs font-semibold text-primary mb-6">
            Available for opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="text-gradient">William</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-2 font-medium">
              Software Developer · AI Enthusiast · Devops Engineer
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
            I craft modern web experiences, build scalable backend systems, and explore the frontiers of artificial intelligence.
          </p>

          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-10">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-clay bg-primary text-primary-foreground font-semibold clay-hover transition-all text-sm"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-clay bg-secondary text-secondary-foreground font-semibold clay-hover clay-sm transition-all text-sm"
            >
              Hire Me
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-clay clay-sm clay-hover text-sm font-semibold text-muted-foreground transition-all"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-3 justify-center lg:justify-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-clay clay-sm clay-hover text-muted-foreground hover:text-primary transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Profile */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="clay-lg p-3 animate-float">
            <img
              src="/Will.png"
              alt="This is — image of William Gray"
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-clay-lg"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden lg:flex justify-center mt-16"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </div>
  </section>
);

export default Index;
