// SPDX-License-Identifier: MIT
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { basename, dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const REQUIRED = ["title", "level", "roles", "tags", "updated"];
const CONTENT_ROOTS = [join(ROOT, "docs"), join(ROOT, "templates")];
const HASH_ROOTS = [...CONTENT_ROOTS, join(ROOT, "web"), join(ROOT, "scripts"), join(ROOT, ".github"), join(ROOT, "LICENSES")];
const HASH_FILES = ["README.md", "LICENSE", "NOTICE", "LICENSE-DECISION.md", "PROVENANCE.md", "Dockerfile", "docker-compose.yml", "package.json", "AGENTS.md"];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return null;
  return Object.fromEntries(match[1].split(/\r?\n/).map((line) => {
    const separator = line.indexOf(":");
    return separator > 0 ? [line.slice(0, separator).trim(), line.slice(separator + 1).trim()] : [line, ""];
  }));
}

function targetExists(sourceFile, target, markdownFiles) {
  const clean = target.split("#")[0].replace(/\.md$/i, "").replaceAll("\\", "/");
  if (!clean) return true;
  if (markdownFiles.has(resolve(dirname(sourceFile), `${clean}.md`))) return true;
  const wanted = basename(clean).toLowerCase();
  return [...markdownFiles].some((file) => basename(file, ".md").toLowerCase() === wanted);
}

const contentFiles = (await Promise.all(CONTENT_ROOTS.map(walk))).flat().filter((file) => extname(file) === ".md");
const markdownFiles = new Set(contentFiles.map((file) => resolve(file)));
const problems = [];

for (const file of contentFiles) {
  const source = await readFile(file, "utf8");
  const display = relative(ROOT, file).replaceAll(sep, "/");
  const metadata = parseFrontmatter(source);
  if (!metadata) problems.push(`${display}: missing YAML frontmatter`);
  else for (const field of REQUIRED) if (!metadata[field]) problems.push(`${display}: missing '${field}'`);
  for (const match of source.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    if (!targetExists(file, match[1], markdownFiles)) problems.push(`${display}: broken wiki link '${match[1]}'`);
  }
  if (/\b(?:password|api[_-]?key|secret|access[_-]?token)\s*[:=]\s*\S+/i.test(source)) problems.push(`${display}: possible credential-like value`);
}

const hashFiles = [...(await Promise.all(HASH_ROOTS.map(walk))).flat(), ...HASH_FILES.map((file) => join(ROOT, file))].sort((a, b) => a.localeCompare(b));
const aggregate = createHash("sha256");
for (const file of hashFiles) {
  const display = relative(ROOT, file).replaceAll(sep, "/");
  const digest = createHash("sha256").update(await readFile(file)).digest("hex");
  aggregate.update(`${display}\0${digest}\n`);
}
const manifest = {
  algorithm: "SHA-256",
  scope: "documentation, templates, web reader, validation, licenses, and project metadata",
  fileCount: hashFiles.length,
  aggregate: aggregate.digest("hex")
};

if (process.argv.includes("--print-manifest")) console.log(JSON.stringify(manifest, null, 2));
if (problems.length) {
  console.error(problems.map((problem) => `- ${problem}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${contentFiles.length} Markdown notes; provenance covers ${hashFiles.length} files (${manifest.aggregate.slice(0, 12)}).`);
}
