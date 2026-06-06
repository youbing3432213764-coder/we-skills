/**
 * Simple server-side markdown → HTML converter.
 * Handles: headings, paragraphs, code blocks, inline code, bold, italic,
 * links, images, unordered lists, blockquotes, and horizontal rules.
 */
export function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  const tokens: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (/^```/.test(line)) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) {
        codeLines.push(escapeHtml(lines[i]));
        i++;
      }
      const langAttr = lang ? ` class="language-${escapeHtml(lang)}"` : "";
      tokens.push(
        `<pre class="bg-zinc-950 text-zinc-100 rounded-lg p-4 overflow-x-auto text-sm my-4"><code${langAttr}>${codeLines.join("\n")}</code></pre>`
      );
      i++; // skip closing ```
      continue;
    }

    // Blank line
    if (/^\s*$/.test(line)) {
      tokens.push("");
      i++;
      continue;
    }

    // Heading
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = parseInline(headingMatch[2]);
      const sizes: Record<number, string> = {
        1: "text-2xl font-bold mt-8 mb-4",
        2: "text-xl font-semibold mt-7 mb-3",
        3: "text-lg font-medium mt-6 mb-2",
        4: "text-base font-medium mt-5 mb-2",
        5: "text-sm font-medium mt-4 mb-1",
        6: "text-xs font-medium mt-4 mb-1",
      };
      tokens.push(`<h${level} class="${sizes[level] || ""}">${text}</h${level}>`);
      i++;
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      tokens.push('<hr class="my-6 border-zinc-200" />');
      i++;
      continue;
    }

    // Blockquote
    if (/^>\s?/.test(line)) {
      const quoteLines: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      const body = quoteLines
        .map((l) => `<p class="my-1">${parseInline(l)}</p>`)
        .join("\n");
      tokens.push(
        `<blockquote class="border-l-4 border-indigo-300 bg-indigo-50/50 pl-4 py-2 my-4 text-zinc-600 italic text-sm">${body}</blockquote>`
      );
      continue;
    }

    // Unordered list
    if (/^[-*+]\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^[-*+]\s/.test(lines[i])) {
        listItems.push(
          `<li>${parseInline(lines[i].replace(/^[-*+]\s/, ""))}</li>`
        );
        i++;
      }
      tokens.push(
        `<ul class="list-disc pl-5 my-3 space-y-1 text-sm">${listItems.join("")}</ul>`
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(
          `<li>${parseInline(lines[i].replace(/^\d+\.\s/, ""))}</li>`
        );
        i++;
      }
      tokens.push(
        `<ol class="list-decimal pl-5 my-3 space-y-1 text-sm">${listItems.join("")}</ol>`
      );
      continue;
    }

    // Paragraph (consume consecutive non-empty, non-special lines)
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^(#{1,6}\s|```|[-*+]\s|\d+\.\s|>\s?|(-{3,}|\*{3,}|_{3,})\s*$)/.test(lines[i])
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      tokens.push(
        `<p class="my-2 text-sm leading-relaxed">${paraLines.map(parseInline).join("<br/>")}</p>`
      );
    }
  }

  return tokens.join("\n");
}

/** Inline parsing: bold, italic, code, links, images */
function parseInline(text: string): string {
  let out = escapeHtml(text);

  // Images ![alt](url)
  out = out.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" class="rounded-lg my-3 max-w-full" />'
  );

  // Links [text](url)
  out = out.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Bold + Italic ***text***
  out = out.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");

  // Bold **text**
  out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Italic *text* (but not **)
  out = out.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, "<em>$1</em>");

  // Inline code `text`
  out = out.replace(
    /`([^`]+)`/g,
    '<code class="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs font-mono">$1</code>'
  );

  return out;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
