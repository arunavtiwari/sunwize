#!/usr/bin/env node
// Low-token blog publishing helper for the scheduled Sunwize blog routine.
//
//   node scripts/blog.mjs next                 # print existing posts + draft format
//   node scripts/blog.mjs publish <draft.md>   # create the content component and register it
//
// The model only writes a Markdown draft. This script writes
// src/app/blog-content/<slug>.tsx, prepends the entry to blogData.tsx and registers the
// slug in the blog-details router, so the routine never has to read those large files.

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "src/app/blog-content");
const BLOG_DATA = path.join(ROOT, "src/components/Blog/blogData.tsx");
const ROUTER = path.join(ROOT, "src/app/blog-details/[slug]/page.tsx");

const DRAFT_FORMAT = `Draft format (write to /tmp/draft.md, then run: node scripts/blog.mjs publish /tmp/draft.md)

---
slug: <kebab-case, new topic not in the list above>
title: <full post title>
excerpt: <2-3 sentence summary shown on the blog card>
tags: <3 short tags, comma-separated>
keywords: <25-30 search phrases, comma-separated>
---
<intro paragraph(s)>
## <at least 3 H2 sections>
### <H3 sub-sections where relevant>
<paragraphs, "- " bullet lists, "1. " numbered lists>

Plain text only: no links, bold, images or HTML (the script escapes quotes and apostrophes).
900-1,200 words. Mention Sunwize naturally once.`;

function fail(errors) {
  console.error("✗ Draft rejected:\n" + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}

const pascal = (slug) => slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join("");
const escapeJsx = (s) =>
  s
    .replace(/\s*[—–]\s*/g, " - ")
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/{/g, "&#123;")
    .replace(/}/g, "&#125;");
const quoteJs = (s) => JSON.stringify(s.replace(/\s*[—–]\s*/g, " - "));

function cmdNext() {
  const data = fs.readFileSync(BLOG_DATA, "utf8");
  const titles = [...data.matchAll(/title:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"/g)];
  console.log(`Existing posts (${titles.length}); do not duplicate these topics:`);
  for (const [, title, slug] of titles) console.log(`- ${slug}: ${title}`);
  console.log("\n" + DRAFT_FORMAT);
}

function parseDraft(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) fail(["Draft must start with a --- front matter block ---"]);
  const fm = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) fm[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }

  const out = [];
  let para = [];
  let list = null;
  const flush = () => {
    if (para.length) out.push(`      <p>${escapeJsx(para.join(" "))}</p>`);
    if (list) {
      out.push(`      <${list.tag}>`);
      for (const item of list.items) out.push(`        <li>${escapeJsx(item)}</li>`);
      out.push(`      </${list.tag}>`);
    }
    para = [];
    list = null;
  };
  const addItem = (tag, text) => {
    if (para.length || (list && list.tag !== tag)) flush();
    (list ??= { tag, items: [] }).items.push(text);
  };

  let words = 0;
  let h2 = 0;
  for (const raw of m[2].split("\n")) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    words += line.split(/\s+/).length;
    let mm;
    if ((mm = line.match(/^(#{2,3})\s+(.*)$/))) {
      flush();
      const tag = mm[1].length === 2 ? "h2" : "h3";
      if (tag === "h2") h2++;
      out.push("", `      <${tag}>${escapeJsx(mm[2])}</${tag}>`);
    } else if ((mm = line.match(/^[-*]\s+(.*)$/))) addItem("ul", mm[1]);
    else if ((mm = line.match(/^\d+[.)]\s+(.*)$/))) addItem("ol", mm[1]);
    else { if (list) flush(); para.push(line); }
  }
  flush();
  return { fm, raw: m[2], body: out.join("\n").trim(), words, h2 };
}

function cmdPublish(draftPath) {
  if (!draftPath) fail(["Usage: node scripts/blog.mjs publish <draft.md>"]);
  const { fm, raw, body, words, h2 } = parseDraft(fs.readFileSync(draftPath, "utf8"));
  const errors = [];
  const slug = fm.slug ?? "";
  const tags = (fm.tags ?? "").split(",").map((t) => t.trim()).filter(Boolean);
  const keywords = [...new Set((fm.keywords ?? "").split(",").map((t) => t.trim()).filter(Boolean))];
  const data = fs.readFileSync(BLOG_DATA, "utf8");
  const router = fs.readFileSync(ROUTER, "utf8");

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) errors.push(`slug "${slug}" must be kebab-case`);
  if (fs.existsSync(path.join(CONTENT_DIR, `${slug}.tsx`)) || data.includes(`slug: "${slug}"`))
    errors.push(`slug "${slug}" already exists`);
  if (!fm.title) errors.push("title is required");
  if (!fm.excerpt) errors.push("excerpt is required");
  if (!tags.length) errors.push("tags are required");
  if (keywords.length < 25 || keywords.length > 30) errors.push(`need 25-30 keywords (have ${keywords.length})`);
  if (h2 < 3) errors.push(`need at least 3 ## sections (have ${h2})`);
  if (words < 800 || words > 1400) errors.push(`word count ${words} is outside 900-1,200`);
  if (/\]\(|\*\*|<[a-z]/i.test(raw)) errors.push("remove Markdown links, bold or HTML");
  if (!/sunwize/i.test(raw)) errors.push("mention Sunwize once in the body");
  if (errors.length) fail(errors);

  const component = pascal(slug);
  if (router.includes(`import ${component} `)) fail([`component name ${component} already imported`]);

  // 1. Content component.
  const tsx = `import BlogKeywords from "@/components/Blog/BlogKeywords";

const keywords = [
${keywords.map((k) => `  ${quoteJs(k)},`).join("\n")}
];

export default function ${component}() {
  return (
    <>
      ${body}

      <BlogKeywords keywords={keywords} />
    </>
  );
}
`;
  fs.writeFileSync(path.join(CONTENT_DIR, `${slug}.tsx`), tsx);

  // 2. blogData entry at the top, reusing the newest entry's image and author.
  const nextId = Math.max(0, ...[...data.matchAll(/^\s{4}id:\s*(\d+)/gm)].map((x) => Number(x[1]))) + 1;
  const image = data.match(/image:\s*"(\/images\/blog\/[^"]+)"/)?.[1] ?? "/images/blog/solar_savings.png";
  const author = data.match(/author:\s*{[\s\S]*?}/)?.[0] ??
    'author: { name: "Ravi Sharma", image: "/images/blog/author.jpg", designation: "Solar Consultant" }';
  const date = new Date().toLocaleString("en-US", { month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
  const entry = `  {
    id: ${nextId},
    title: ${quoteJs(fm.title)},
    paragraph:
      ${quoteJs(fm.excerpt)},
    image: "${image}",
    ${author},
    tags: [${tags.map(quoteJs).join(", ")}],
    publishDate: "${date}",
    slug: "${slug}",
    readTime: "${Math.max(1, Math.round(words / 200))} min read",
  },`;
  const anchor = "const blogData: Blog[] = [";
  if (!data.includes(anchor)) fail([`could not find "${anchor}" in blogData.tsx`]);
  fs.writeFileSync(BLOG_DATA, data.replace(anchor, `${anchor}\n${entry}`));

  // 3. Router: import + slug mapping.
  const imports = [...router.matchAll(/^import .* from "@\/app\/blog-content\/.*";$/gm)];
  const lastImport = imports.at(-1);
  const mapStart = router.indexOf("const blogContentComponents = {");
  if (!lastImport || mapStart < 0) fail(["could not find blog imports / blogContentComponents in the router"]);
  const mapEnd = router.indexOf("\n};", mapStart);
  let next =
    router.slice(0, mapEnd) + `\n  "${slug}": ${component},` + router.slice(mapEnd);
  const importEnd = lastImport.index + lastImport[0].length;
  next = next.slice(0, importEnd) + `\nimport ${component} from "@/app/blog-content/${slug}";` + next.slice(importEnd);
  fs.writeFileSync(ROUTER, next);

  console.log(`✓ ${slug} (${words} words, ${keywords.length} keywords)`);
  console.log(`Commit message: blog: add ${slug} post`);
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === "next") cmdNext();
else if (cmd === "publish") cmdPublish(arg);
else fail(["Usage: node scripts/blog.mjs next | publish <draft.md>"]);
