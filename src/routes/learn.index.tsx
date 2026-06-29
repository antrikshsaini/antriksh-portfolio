import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ChevronRight, GraduationCap } from "lucide-react";
import { courses } from "./learn";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title: "Learn — Study Notes Library · Antriksh Saini" },
      {
        name: "description",
        content:
          "Browse curated study notes for cybersecurity certifications, starting with Microsoft SC-900.",
      },
    ],
  }),
  component: LearnIndex,
});

function LearnIndex() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 pb-24">
      <div className="flex items-center gap-2 font-mono text-xs text-primary mb-4">
        <span className="pulse-dot" />
        <span>KNOWLEDGE BASE · LIVE</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
        Study notes <span className="text-gradient">library</span>
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        A growing collection of notes I keep while preparing for security
        certifications. Concise, exam-focused, and continuously updated.
      </p>

      {/* Column layout — single column today, ready for more courses */}
      <div className="mt-14 grid lg:grid-cols-[260px_1fr] gap-8">
        {/* Left rail — categories */}
        <aside className="lg:sticky lg:top-20 self-start">
          <p className="font-mono text-xs text-primary">// catalog</p>
          <h2 className="mt-2 text-lg font-semibold">Courses</h2>
          <ul className="mt-4 space-y-1 font-mono text-sm">
            <li>
              <Link
                to="/learn"
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary border-primary/60 bg-primary/5" }}
                className="block px-3 py-2 rounded-md border border-transparent text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              >
                ./all
              </Link>
            </li>
            {courses.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/learn/$slug"
                  params={{ slug: c.slug }}
                  activeProps={{ className: "text-primary border-primary/60 bg-primary/5" }}
                  className="block px-3 py-2 rounded-md border border-transparent text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                >
                  ./{c.code.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground font-mono">
            {courses.length} module{courses.length === 1 ? "" : "s"} · more soon
          </p>
        </aside>

        {/* Right column — course cards */}
        <div className="space-y-4">
          {courses.map((c) => (
            <Link
              key={c.slug}
              to="/learn/$slug"
              params={{ slug: c.slug }}
              className="card-soc p-6 md:p-8 block group hover:border-primary/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:glow-neon transition-shadow shrink-0">
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-accent">
                      <GraduationCap className="size-3.5" />
                      {c.vendor} · {c.code}
                    </div>
                    <h3 className="mt-1 text-xl md:text-2xl font-semibold">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {c.summary}
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-5 pt-5 border-t border-border/60 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
                <span><span className="text-primary">{c.sections}</span> sections</span>
                <span>format · <span className="text-foreground">markdown</span></span>
                <span>status · <span className="text-primary">published</span></span>
              </div>
            </Link>
          ))}

          {/* placeholder for future courses */}
          <div className="card-soc p-6 border-dashed border-border/40 text-center">
            <p className="font-mono text-xs text-muted-foreground">
              <BookOpen className="inline size-3.5 mr-1.5" />
              More study notes coming soon — AZ-900, AZ-500, SC-200…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
