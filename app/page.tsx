"use client";

import { useState } from "react";
import { mockSkills } from "@/lib/mockSkills";
import SkillCard from "@/components/SkillCard";

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = mockSkills.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto py-12">
      
      {/* HERO */}
      <div className="mb-10">
        
        {/* badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full 
        bg-indigo-50 text-indigo-600 text-xs font-medium mb-4">
          ✦ AI Skills Directory
        </div>

        <h1 className="text-4xl font-semibold tracking-tight">
          Claude Code Skills
        </h1>

        <p className="text-zinc-500 mt-3">
          A curated directory of automation tools, agents, and coding skills.
        </p>

        {/* search */}
        <div className="mt-6 relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills..."
            className="
              w-full px-4 py-3 rounded-xl
              bg-white border border-zinc-200
              shadow-sm outline-none
              focus:ring-2 focus:ring-indigo-400/30
              focus:border-indigo-300
              transition
            "
          />

          {/* glow effect */}
          <div className="absolute inset-0 -z-10 blur-xl opacity-30 
          bg-indigo-200 rounded-xl" />
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}