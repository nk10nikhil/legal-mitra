import { readFile } from "node:fs/promises";
import path from "node:path";

export type DocHeading = {
  id: string;
  level: 2 | 3;
  title: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export async function getIntroMarkdown(): Promise<string> {
  const candidates = ["Intro.md", "intro.md"];

  for (const filename of candidates) {
    const introPath = path.join(process.cwd(), "..", "..", filename);
    try {
      return await readFile(introPath, "utf-8");
    } catch {
      // Try the next candidate.
    }
  }

  throw new Error("Documentation source file not found. Expected Intro.md or intro.md at repo root.");
}

export function extractHeadings(markdown: string): DocHeading[] {
  const lines = markdown.split("\n");
  const headings: DocHeading[] = [];

  for (const line of lines) {
    if (line.startsWith("## ")) {
      const title = line.replace("## ", "").trim();
      headings.push({ id: slugify(title), level: 2, title });
    }
    if (line.startsWith("### ")) {
      const title = line.replace("### ", "").trim();
      headings.push({ id: slugify(title), level: 3, title });
    }
  }

  return headings;
}
