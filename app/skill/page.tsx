import { mockSkills } from "@/lib/mockSkills";
import SkillCard from "@/components/SkillCard";

export default function SkillsPage() {
  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold">All Skills</h1>
      <p className="text-zinc-500 mt-2">
        Browse all available AI skills
      </p>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {mockSkills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </main>
  );
}