import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - We Skills",
  description: "About We Skills - Claude Code Skills Directory",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-8">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">
        About We Skills
      </h1>

      <div className="prose prose-zinc max-w-none space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">What is We Skills?</h2>
          <p>
            We Skills is a curated directory of Claude Code Skills — reusable
            prompts, automation workflows, and AI agent configurations that
            supercharge your development experience with Claude Code.
          </p>
          <p className="mt-3">
            Whether you are looking for TDD workflows, security auditing tools,
            prompt engineering techniques, or full-stack development agents,
            you will find them here — organized, searchable, and community-driven.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">What are Claude Code Skills?</h2>
          <p>
            Skills are packaged instructions that extend Claude Code with
            specialized capabilities. They can be:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Slash Commands</strong> — Quick actions like{" "}
              <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-xs">/review</code>{" "}
              or <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-xs">/test</code>
            </li>
            <li>
              <strong>Agents</strong> — Specialized AI sub-agents for complex tasks
            </li>
            <li>
              <strong>Hooks</strong> — Automated triggers that run before or after events
            </li>
            <li>
              <strong>MCP Servers</strong> — Tool integrations connecting Claude to external services
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">Why We Built This</h2>
          <p>
            The Claude Code ecosystem is growing fast — new skills, agents, and
            tools are published every day across GitHub. We wanted a single place
            to discover, compare, and choose the best skills for any task.
          </p>
          <p className="mt-3">
            We Skills brings together official skills from Anthropic, Vercel, and
            Google, alongside community favorites from independent developers —
            all in one searchable directory.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">Contact</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Email: 3432213764@qq.com</li>
            <li>微信: y0ub1ng</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
