export type Skill = {
  id: string;
  name: string;
  description: string;
  github_url: string;
  tags: string[];
  stars: number;
  created_at: string;
};

export const mockSkills: Skill[] = [
  {
    id: "1",
    name: "Claude Code Auto Formatter",
    description: "Automatically formats code using Claude rules.",
    github_url: "https://github.com/example/formatter",
    tags: ["Coding", "Automation"],
    stars: 120,
    created_at: "2026-01-10",
  },
  {
    id: "2",
    name: "MCP Agent Router",
    description: "Routes requests between multiple agents.",
    github_url: "https://github.com/example/mcp-router",
    tags: ["Agent", "MCP"],
    stars: 320,
    created_at: "2026-01-12",
  },
  {
    id: "3",
    name: "Claude Task Runner",
    description: "Executes structured tasks via Claude Code Skills.",
    github_url: "https://github.com/example/task-runner",
    tags: ["Automation"],
    stars: 210,
    created_at: "2026-01-15",
  },
];