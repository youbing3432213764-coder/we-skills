import Link from "next/link";
import { mockSkills } from "@/lib/mockSkills";

export default async function SkillDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = mockSkills.find((s) => s.id === id);

  if (!skill) {
    return (
      <main className="max-w-4xl mx-auto p-10">
        <Link href="/skill" className="text-indigo-600 text-sm mb-4 inline-block">
          ← Back to all skills
        </Link>
        <div className="text-gray-500 text-center py-20">
          <h2 className="text-xl font-semibold">Skill not found</h2>
          <p className="mt-2">The skill &quot;{id}&quot; does not exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-10">
      {/* back link */}
      <Link href="/skill" className="text-indigo-600 text-sm mb-6 inline-block">
        ← Back to all skills
      </Link>

      {/* header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">{skill.name}</h1>
          <p className="text-zinc-500 mt-2">{skill.description}</p>
        </div>
        <div className="text-sm text-zinc-500">⭐ {skill.stars}</div>
      </div>

      {/* tags */}
      <div className="flex gap-2 mt-6 flex-wrap">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-zinc-100 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* actions */}
      <div className="mt-8 flex gap-4">
        <a
          href={skill.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          GitHub
        </a>
        <a
          href={skill.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border rounded-lg"
        >
          View Source
        </a>
      </div>

      {/* meta */}
      <div className="mt-10 text-sm text-zinc-500">
        <p>Created: {skill.created_at}</p>
      </div>
    </main>
  );
}
