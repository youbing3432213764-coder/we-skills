import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getAllArticles } from "@/lib/articles";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} - We Skills`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto py-12 px-8">
      {/* Back link */}
      <Link
        href="/articles"
        className="text-indigo-600 text-sm mb-6 inline-block hover:underline"
      >
        ← Back to articles
      </Link>

      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight mb-2">
        {article.title}
      </h1>
      <div className="flex items-center gap-3 text-sm text-zinc-500 mb-8">
        {article.date && <span>{article.date}</span>}
        {article.description && (
          <>
            <span className="text-zinc-300">·</span>
            <span>{article.description}</span>
          </>
        )}
      </div>

      {/* Rendered markdown content */}
      <article
        className="prose prose-zinc max-w-none"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />
    </div>
  );
}
