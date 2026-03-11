import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Search } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { extractHeadings, getIntroMarkdown } from "@/lib/docs";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export const dynamic = "force-static";

export default async function DocumentationPage() {
  const markdown = await getIntroMarkdown();
  const headings = extractHeadings(markdown);

  return (
    <div className="space-y-8">
      <PageHero
        title="Documentation"
        description="Official LegalMitra documentation generated from Intro.md, including architecture, platform modules, governance model, and long-term vision."
      />

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-2xl border bg-card/80 p-4 lg:sticky lg:top-24">
          <label className="mb-3 flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-xs text-muted-foreground">
            <Search className="h-4 w-4" />
            Search docs (placeholder)
          </label>
          <nav className="max-h-[65vh] space-y-1 overflow-y-auto">
            {headings.map((heading) => (
              <Link
                key={`${heading.id}-${heading.title}`}
                href={`#${heading.id}`}
                className={`block rounded px-2 py-1 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground ${heading.level === 3 ? "ml-3 text-xs" : ""}`}
              >
                {heading.title}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="prose-legal rounded-2xl border bg-card/80 p-6">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => {
                const text = String(children);
                return (
                  <h2 id={slugify(text)} className="mb-3 mt-8 text-xl font-semibold first:mt-0">
                    {children}
                  </h2>
                );
              },
              h3: ({ children }) => {
                const text = String(children);
                return (
                  <h3 id={slugify(text)} className="mb-2 mt-6 text-lg font-semibold">
                    {children}
                  </h3>
                );
              },
              hr: () => <hr className="my-8 border-border" />,
              ul: ({ children }) => <ul className="my-3 list-disc space-y-1 pl-5">{children}</ul>,
              ol: ({ children }) => <ol className="my-3 list-decimal space-y-1 pl-5">{children}</ol>,
              code: ({ children }) => <code className="rounded bg-secondary px-1 py-0.5 text-xs">{children}</code>,
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
