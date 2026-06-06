import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - We Skills",
  description: "Terms of Service for We Skills - Claude Code Skills Directory",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-8">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">
        Terms of Service
      </h1>

      <div className="prose prose-zinc max-w-none space-y-6 text-sm leading-relaxed">
        <p>
          <strong>Last updated:</strong> June 6, 2026
        </p>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using We Skills, you accept and agree to be bound
            by these Terms of Service. If you do not agree, please discontinue
            use of the website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">2. Description of Service</h2>
          <p>
            We Skills is a curated directory of AI coding skills, automation
            tools, and Claude Code workflows. The site provides information
            only — we do not host, execute, or guarantee the performance of
            any third-party skill or tool listed here.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">3. Intellectual Property</h2>
          <p>
            All skills and tools listed on this site remain the intellectual
            property of their respective authors. The directory itself, its
            design, and original content are the property of We Skills.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">4. Disclaimer</h2>
          <p>
            The directory is provided &ldquo;as is&rdquo; without warranty of
            any kind. We do not guarantee the accuracy, completeness, or
            safety of any skill or tool listed. Users are responsible for
            reviewing and testing any third-party code before use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">5. Limitation of Liability</h2>
          <p>
            We Skills and its maintainers shall not be liable for any damages
            arising from the use of, or inability to use, this website or any
            linked third-party content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">6. Contact</h2>
          <p>
            For questions regarding these Terms, please contact us at:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Email: 3432213764@qq.com</li>
            <li>微信：y0ub1ng</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued
            use of the site after changes constitutes acceptance of the new
            terms.
          </p>
        </section>
      </div>
    </div>
  );
}
