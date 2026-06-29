import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Shield, BookOpen, ChevronRight, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learn — Cybersecurity Study Notes · Antriksh Saini" },
      {
        name: "description",
        content:
          "Curated study notes and learning resources for cybersecurity certifications including Microsoft SC-900.",
      },
      { property: "og:title", content: "Learn — Cybersecurity Study Notes" },
      {
        property: "og:description",
        content:
          "Curated study notes and learning resources for cybersecurity certifications.",
      },
    ],
  }),
  component: LearnLayout,
});

function LearnLayout() {
  return (
    <div className="min-h-screen bg-hero">
      {/* NAV — matches home page theme */}
      <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-mono text-sm">
            <Shield className="size-4 text-primary" />
            <span className="text-foreground">antriksh</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary">soc</span>
            <span className="blink" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-mono text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">./home</Link>
            <Link
              to="/learn"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              className="hover:text-primary transition-colors"
            >
              ./learn
            </Link>
          </nav>
          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-3.5" /> back to portfolio
          </Link>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

// Shared course catalog used by index + detail pages
export const courses = [
  {
    slug: "sc-900",
    code: "SC-900",
    title: "Security, Compliance & Identity Fundamentals",
    vendor: "Microsoft",
    summary:
      "Comprehensive notes covering Azure AD / Entra ID, Zero Trust, Conditional Access, Microsoft Defender suite, Sentinel, encryption, Purview, and compliance fundamentals.",
    sections: 24,
    icon: BookOpen,
  },
] as const;

export { ChevronRight };
