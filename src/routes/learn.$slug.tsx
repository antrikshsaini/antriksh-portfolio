import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { courses } from "./learn";
import sc900Notes from "../content/sc900.md?raw";

const notesBySlug: Record<string, string> = {
  "sc-900": sc900Notes,
};

export const Route = createFileRoute("/learn/$slug")({
  head: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    const title = course
      ? `${course.code} — ${course.title} · Study Notes`
      : "Study Notes";
    return {
      meta: [
        { title },
        {
          name: "description",
          content:
            course?.summary ??
            "Cybersecurity certification study notes by Antriksh Saini.",
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content:
            course?.summary ??
            "Cybersecurity certification study notes by Antriksh Saini.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course || !notesBySlug[params.slug]) throw notFound();
    return { course, markdown: notesBySlug[params.slug] };
  },
  component: CourseNotes,
});

function CourseNotes() {
  const { course, markdown } = Route.useLoaderData();

  return (
    <section className="mx-auto max-w-5xl px-6 pt-12 pb-24">
      <Link
        to="/learn"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="size-3.5" /> ./learn
      </Link>

      <div className="mt-6 flex items-center gap-2 font-mono text-xs text-accent">
        <GraduationCap className="size-3.5" />
        {course.vendor} · {course.code}
      </div>
      <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
        {course.title}
      </h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">{course.summary}</p>

      <article className="mt-10 card-soc p-6 md:p-10 prose-soc">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </section>
  );
}
