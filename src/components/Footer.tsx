import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => (
  <footer className="py-12 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="clay p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-heading text-lg font-bold text-gradient">William.</p>
        <div className="flex items-center gap-4">
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
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} William. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
