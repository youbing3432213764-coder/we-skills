import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles - We Skills",
  description: "Articles about Claude Code Skills, AI coding, and automation.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-3xl mx-auto py-12 px-8">
      <h1 className="text-3xl font-semibold tracking-tight mb-2">Articles</h1>
      <p className="text-zinc-500 text-sm mb-8">
        Guides, tutorials, and insights about Claude Code Skills and AI-assisted development.
      </p>

      {articles.length === 0 ? (
        <p className="text-zinc-400 text-sm">No articles yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="
                group block rounded-xl border border-zinc-200 bg-white p-5
                hover:shadow-md hover:border-indigo-200
                transition-all
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
                    {article.description}
                  </p>
                </div>
                {article.date && (
                  <span className="text-xs text-zinc-400 whitespace-nowrap shrink-0">
                    {article.date}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
