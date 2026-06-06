import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "We Skills - Claude Code Skills Directory",
  description:
    "A curated directory of AI coding tools, Claude Code Skills, and automation agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-gradient-to-b from-zinc-50 to-white text-zinc-900 flex flex-col min-h-screen">

        {/* sidebar navigation */}
        <Sidebar />

        {/* page content — offset for sidebar on desktop */}
        <main className="flex-1 lg:ml-60">
          {children}
        </main>

        {/* footer — offset for sidebar on desktop */}
        <div className="lg:ml-60">
          <Footer />
        </div>

      </body>
    </html>
  );
}