import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between gap-6">

        {/* left */}
        <div>
          <h3 className="font-bold text-lg">
            Claude Code Skills
          </h3>

          <p className="text-sm text-zinc-500 mt-2 max-w-md">
            A curated directory of AI coding skills, automation tools,
            and Claude workflows.
          </p>
        </div>

        {/* links */}
        <div className="flex gap-10 text-sm">

          <div className="flex flex-col gap-2">
            <span className="font-medium">Navigation</span>
            <Link href="/" className="text-zinc-500 hover:text-black">Home</Link>
            <Link href="/skill" className="text-zinc-500 hover:text-black">Skills</Link>
            <Link href="/about" className="text-zinc-500 hover:text-black">About</Link>
            <Link href="/articles" className="text-zinc-500 hover:text-black">Articles</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-medium">Legal</span>
            <Link href="/privacy" className="text-zinc-500 hover:text-black">Privacy</Link>
            <Link href="/terms" className="text-zinc-500 hover:text-black">Terms</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-medium">Contact</span>
            <a
              href="mailto:3432213764@qq.com"
              className="text-zinc-500 hover:text-black"
            >
              Email
            </a>

            <span className="text-zinc-500">
              wechat：y0ub1ng
            </span>

            <a
              href="https://youbing3432213764-coder.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-black"
            >
              Blog
            </a>
          </div>

        </div>

      </div>

      <div className="text-center text-xs text-zinc-400 py-6 border-t">
        © {new Date().getFullYear()} youbing. All rights reserved.
      </div>
    </footer>
  );
}