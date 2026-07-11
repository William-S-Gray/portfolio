import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav aria-label="Primary" className="container mx-auto max-w-6xl">
        <div className="clay-sm flex items-center justify-between px-6 py-3">
          <Link to="/" aria-label="William S. Gray — home" className="font-heading text-xl font-extrabold text-gradient">
            William.
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`relative px-4 py-2 rounded-clay text-sm font-medium transition-colors ${
                    location.pathname === l.to
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {location.pathname === l.to && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-clay bg-primary/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-clay bg-primary text-primary-foreground text-sm font-semibold clay-hover transition-all"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-clay text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="clay mt-2 p-4 md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-clay text-sm font-medium transition-colors ${
                        location.pathname === l.to
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
