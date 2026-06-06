import fs from "fs";
import path from "path";
import { markdownToHtml } from "./markdown";

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type Article = ArticleMeta & {
  contentHtml: string;
};

const articlesDir = path.join(process.cwd(), "content", "articles");

/** Parse frontmatter from a markdown file */
function parseFrontmatter(
  raw: string
): { meta: Omit<ArticleMeta, "slug">; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return {
      meta: { title: "Untitled", date: "", description: "" },
      body: raw,
    };
  }

  const frontmatter = match[1];
  const body = match[2];
  const meta: Record<string, string> = {};

  for (const line of frontmatter.split("\n")) {
    const m = line.match(/^(\w+):\s*["']?(.+?)["']?\s*$/);
    if (m) {
      meta[m[1]] = m[2];
    }
  }

  return {
    meta: {
      title: meta.title || "Untitled",
      date: meta.date || "",
      description: meta.description || "",
    },
    body: body.trim(),
  };
}

/** Get all articles sorted by date (newest first) */
export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"));

  const articles = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8");
    const { meta } = parseFrontmatter(raw);
    return { slug, ...meta };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Get a single article by slug */
export function getArticle(slug: string): Article | null {
  const filePath = path.join(articlesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { meta, body } = parseFrontmatter(raw);

  const contentHtml = markdownToHtml(body);

  return { slug, ...meta, contentHtml };
}
