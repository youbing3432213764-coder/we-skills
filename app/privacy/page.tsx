import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - We Skills",
  description: "Privacy Policy for We Skills - Claude Code Skills Directory",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-8">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">
        Privacy Policy
      </h1>

      <div className="prose prose-zinc max-w-none space-y-6 text-sm leading-relaxed">
        <p>
          <strong>Last updated:</strong> June 6, 2026
        </p>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">1. Information We Collect</h2>
          <p>
            We Skills is a static directory website. We do not collect, store,
            or process any personal data from visitors. There are no user
            accounts, no cookies beyond what is strictly necessary for the site
            to function, and no analytics tracking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">2. Third-Party Services</h2>
          <p>
            This website may contain links to external sites (such as GitHub
            repositories, personal blogs, or skill author pages). We are not
            responsible for the privacy practices or content of those
            third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">3. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please reach
            out via:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Email: 3432213764@qq.com</li>
            <li>微信：y0ub1ng</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium mt-8 mb-3">4. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated date.
          </p>
        </section>
      </div>
    </div>
  );
}
