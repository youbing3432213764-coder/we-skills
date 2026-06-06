import Link from "next/link";
import { Skill } from "@/lib/mockSkills";

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="
      group border border-zinc-200 
      bg-white rounded-2xl p-5
      hover:shadow-lg hover:border-indigo-200
      hover:-translate-y-0.5
      transition-all duration-200
    ">
      
      {/* title */}
      <div className="flex justify-between items-start">
        <h2 className="
          font-medium text-zinc-900 
          group-hover:text-indigo-600
          transition
        ">
          {skill.name}
        </h2>

        <span className="text-xs text-zinc-500">
          ★ {skill.stars}
        </span>
      </div>

      {/* description */}
      <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
        {skill.description}
      </p>

      {/* tags */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="
              text-[11px] px-2 py-1 
              bg-indigo-50 text-indigo-600
              rounded-full
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* footer */}
      <div className="mt-5 flex justify-between items-center">
        
        <Link
          href={`/skill/${skill.id}`}
          className="
            text-sm font-medium text-indigo-600
            hover:text-indigo-700 transition
          "
        >
          View Detail →
        </Link>

        <a
          href={skill.github_url}
          target="_blank"
          className="
            text-xs text-zinc-400 
            hover:text-zinc-700 transition
          "
        >
          GitHub
        </a>
      </div>
    </div>
  );
}