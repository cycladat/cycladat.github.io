// One-off converter: Termly HTML exports (privacy/terms/cookies/eula) -> Starlight markdown.
// Usage: node scripts/termly-to-md.mjs <in.html> <out.md> "<page title>"
import { readFileSync, writeFileSync } from "node:fs";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";
import GithubSlugger from "github-slugger";

const [, , inPath, outPath, pageTitle] = process.argv;
const html = readFileSync(inPath, "utf8").replace(/<style>[\s\S]*?<\/style>/, "");

// Ids that are actually targeted by in-page links.
const linkedIds = new Set([...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]));
// Heading id -> slug Starlight (github-slugger) will give the heading.
const slugger = new GithubSlugger();
const idToSlug = new Map();

const cls = (n) => (n.getAttribute ? n.getAttribute("data-custom-class") : null);
const isHeading = (n) => /^heading_[12]$/.test(cls(n) || "");
const text = (n) => n.textContent.replace(/\s+/g, " ").trim();
// Every id on the heading or its ancestors (Termly reuses id="control" on each
// heading and puts the linkable id on a wrapper div above it).
const ancestorIds = (n) => {
  const ids = [];
  for (let p = n; p && p.getAttribute; p = p.parentNode) {
    const id = p.getAttribute("id");
    if (id) ids.push(id);
  }
  return ids;
};

const td = new TurndownService({ headingStyle: "atx", bulletListMarker: "-", codeBlockStyle: "fenced" });
td.use(gfm);

td.addRule("title", { filter: (n) => cls(n) === "title", replacement: () => "" }); // frontmatter carries it
td.addRule("subtitle", { filter: (n) => cls(n) === "subtitle", replacement: (c, n) => `\n\n_${text(n)}_\n\n` });
td.addRule("heading", {
  filter: isHeading,
  replacement: (_c, n) => {
    const t = text(n);
    if (!t) return "";
    const inner = Array.from(n.querySelectorAll("[id]")).map((e) => e.getAttribute("id"));
    const ids = [...ancestorIds(n), ...inner].filter((id) => !idToSlug.has(id));
    if (ids.length) {
      const slug = slugger.slug(t);
      for (const id of ids) idToSlug.set(id, slug);
    }
    return `\n\n${cls(n) === "heading_1" ? "##" : "###"} ${t}\n\n`;
  },
});
// Non-heading link targets (e.g. a span inside a list item) keep an explicit anchor.
td.addRule("anchor", {
  filter: (n) => !!n.getAttribute && linkedIds.has(n.getAttribute("id") || "") && !isHeading(n) && !n.querySelector("[data-custom-class^=heading_]"),
  replacement: (c, n) => `<a id="${n.getAttribute("id")}"></a>${c}`,
});
// Bold/italic wrappers around block content (Termly wraps whole headings/paragraphs) must not emit markers.
const inlineOnly = (mark) => (c) => {
  if (!c.trim()) return "";
  if (c.includes("\n")) return c;
  const m = c.match(/^(\s*)([\s\S]*?)(\s*)$/);
  return m[1] + mark + m[2] + mark + m[3];
};
td.addRule("strong", { filter: ["strong", "b"], replacement: inlineOnly("**") });
td.addRule("em", { filter: ["em", "i"], replacement: inlineOnly("_") });
td.addRule("bdt", { filter: "bdt", replacement: (c) => c });
// Termly emits one <table> per row, with block markup inside the cells; flatten
// each to text rows and merge adjacent tables in post-processing.
td.addRule("table", {
  filter: "table",
  replacement: (_c, n) => {
    const cell = (c) => td.turndown(c.innerHTML).replace(/\s+/g, " ").replace(/\|/g, "\\|").trim() || " ";
    const rows = Array.from(n.querySelectorAll("tr")).map((tr) => Array.from(tr.querySelectorAll("td,th")).map(cell));
    // Termly's cookie cards are two-column "Label: value" tables; render those as a list.
    if (rows.every((r) => r.length === 2 && /:$/.test(r[0]))) {
      return `\n\n${rows.map(([k, v]) => `- **${k}** ${v}`).join("\n")}\n\n`;
    }
    return `\n\n${rows.map((r) => `| ${r.join(" | ")} |`).join("\n")}\n\n`;
  },
});

let md = td.turndown(html);
md = md.replace(/\]\(#([^)]+)\)/g, (all, id) => (idToSlug.has(id) ? `](#${idToSlug.get(id)})` : all));
md = md
  .replace(/\|\n\n(?=\|)/g, "|\n") // merge Termly's per-row tables
  .replace(/^(\|.*\|)\n(?=\|)/gm, (row, first, off, all) => (off === 0 || all[off - 2] === "\n" ? `${first}\n${first.replace(/[^|]+/g, " --- ")}\n` : row))
  .replace(/\[\]\(#[^)]*\)/g, "") // Termly leaves empty links for sections it disabled
  .replace(/[ \t]+\n/g, "\n")
  .replace(/\n{3,}/g, "\n\n")
  .trim();

const front = `---\ntitle: ${pageTitle}\ntableOfContents: false\nprev: false\nnext: false\neditUrl: false\n---\n\n`;
writeFileSync(outPath, front + md + "\n");
const unresolved = [...md.matchAll(/\]\(#([^)]+)\)/g)].map((m) => m[1]).filter((id) => ![...idToSlug.values()].includes(id) && !md.includes(`<a id="${id}">`));
console.log(`${outPath}: ${md.split("\n").length} lines, ${idToSlug.size} heading anchors, unresolved: ${[...new Set(unresolved)].join(", ") || "none"}`);
