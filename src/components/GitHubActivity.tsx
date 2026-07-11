import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ArrowUpRight } from "lucide-react";

const GH_USER = "William-S-Gray";
const PROFILE = `https://github.com/${GH_USER}`;
const CACHE_KEY = "gh-repos-v1";
const CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours
/** Repos to hide (profile-config / archived first attempts). */
const EXCLUDE = new Set(["William-W-Gray", "William-S-Gray", "my_portfolio"]);

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  topics?: string[];
}

// A small palette so language chips get a recognisable dot colour.
const LANG_COLOR: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  CSS: "#563d7c",
  HTML: "#e34c26",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Shell: "#89e051",
};

const relativeTime = (iso: string) => {
  const diff = Date.now() - new Date(iso).getTime();
  const d = Math.floor(diff / 86400000);
  if (d < 1) return "today";
  if (d < 30) return `${d}d ago`;
  const m = Math.floor(d / 30);
  if (m < 12) return `${m}mo ago`;
  return `${Math.floor(m / 12)}y ago`;
};

const GitHubActivity = () => {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const pick = (all: Repo[]) =>
      all
        .filter((r) => !r.fork && !EXCLUDE.has(r.name))
        .sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at))
        .slice(0, 6);

    // Serve from cache first to avoid hammering the API (and its rate limit).
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { ts, data } = JSON.parse(cached);
        if (Date.now() - ts < CACHE_TTL && Array.isArray(data)) {
          setRepos(pick(data));
          return;
        }
      }
    } catch {
      /* ignore malformed cache */
    }

    let cancelled = false;
    fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: Repo[]) => {
        if (cancelled) return;
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
        } catch {
          /* storage may be unavailable */
        }
        setRepos(pick(data));
      })
      .catch(() => !cancelled && setFailed(true));

    return () => {
      cancelled = true;
    };
  }, []);

  // Graceful fallback — never render a broken/empty section.
  if (failed || (repos && repos.length === 0)) {
    return (
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="clay-sm flex flex-col items-center gap-4 px-6 py-10 text-center">
            <Github size={28} className="text-primary" />
            <p className="text-muted-foreground">Explore William's code and projects on GitHub.</p>
            <a
              href={PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-clay bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground clay-hover"
            >
              <Github size={16} /> View GitHub profile
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-16" aria-label="Recent GitHub activity">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Building <span className="text-gradient">in the open</span>
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Recent activity from GitHub.</p>
          </div>
          <a
            href={PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <Github size={16} /> @{GH_USER} <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(repos ?? Array.from({ length: 6 })).map((repo, i) =>
            repo ? (
              <motion.a
                key={(repo as Repo).id}
                href={(repo as Repo).html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-sm group flex flex-col gap-3 p-5 clay-hover"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-muted-foreground" />
                  <span className="font-bold text-sm group-hover:text-primary transition-colors">
                    {(repo as Repo).name}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <p className="flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {(repo as Repo).description || "No description provided."}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                  {(repo as Repo).language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: LANG_COLOR[(repo as Repo).language as string] ?? "#8b8b8b" }}
                      />
                      {(repo as Repo).language}
                    </span>
                  )}
                  {(repo as Repo).stargazers_count > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Star size={12} /> {(repo as Repo).stargazers_count}
                    </span>
                  )}
                  {(repo as Repo).forks_count > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <GitFork size={12} /> {(repo as Repo).forks_count}
                    </span>
                  )}
                  <span className="ml-auto">Updated {relativeTime((repo as Repo).updated_at)}</span>
                </div>
              </motion.a>
            ) : (
              // Skeleton while loading
              <div key={i} className="clay-sm h-36 animate-pulse p-5" aria-hidden="true" />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
