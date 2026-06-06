import Link from "next/link";
import { Skill } from "@/lib/mockSkills";
import { formatStars } from "@/lib/formatStars";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="
      group rounded-2xl border border-zinc-200
      bg-white p-5
      hover:shadow-lg hover:border-indigo-200
      transition-all
    ">

      {/* title + stars */}
      <div className="flex justify-between items-start">
        <h2 className="font-semibold text-zinc-900 group-hover:text-indigo-600">
          {skill.name}
        </h2>

        <span className="text-xs text-zinc-500">
          ★ {formatStars(skill.stars)}
        </span>
      </div>

      {/* description */}
      <p className="text-sm text-zinc-500 mt-2 line-clamp-2">
        {skill.description}
      </p>

      {/* tags */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-1 bg-zinc-100 text-zinc-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* actions */}
      <div className="mt-4 flex justify-between items-center">
        <Link
          href={`/skill/${skill.id}`}
          className="text-sm text-indigo-600 hover:underline"
        >
          View →
        </Link>

        <a
          href={skill.github_url}
          target="_blank"
          className="text-xs text-zinc-400 hover:text-zinc-700"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}