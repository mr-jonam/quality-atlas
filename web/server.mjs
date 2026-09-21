// SPDX-License-Identifier: MIT
import { createServer } from "node:http";
import { readFile, readdir } from "node:fs/promises";
import { extname, join, normalize, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const PUBLIC = join(ROOT, "web", "public");
const HOST = process.env.HOST || "127.0.0.1";
const PORT = Number(process.env.PORT || 4173);

const MIME = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed.slice(1, -1).split(",").map((item) => item.trim()).filter(Boolean);
  }
  return trimmed.replace(/^['"]|['"]$/g, "");
}

function parseNote(source, filePath) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  const metadata = {};
  let body = source;
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const separator = line.indexOf(":");
      if (separator > 0) metadata[line.slice(0, separator).trim()] = parseScalar(line.slice(separator + 1));
    }
    body = match[2].trim();
  }

  const id = relative(ROOT, filePath).replaceAll(sep, "/").replace(/\.md$/i, "");
  const parts = id.split("/");
  return {
    id,
    path: `${id}.md`,
    group: parts.length > 1 ? parts[parts.length - 2].replace(/^\d+-/, "").replaceAll("-", " ") : "project",
    title: metadata.title || parts.at(-1).replaceAll("-", " "),
    level: metadata.level || "all",
    roles: metadata.roles || [],
    tags: metadata.tags || [],
    updated: metadata.updated || "",
    body
  };
}

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await markdownFiles(path));
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(path);
  }
  return files;
}

async function loadNotes() {
  const paths = [
    ...(await markdownFiles(join(ROOT, "docs"))),
    ...(await markdownFiles(join(ROOT, "templates")))
  ];
  const notes = await Promise.all(paths.map(async (path) => parseNote(await readFile(path, "utf8"), path)));
  return notes.sort((a, b) => a.id.localeCompare(b.id));
}

function respond(response, status, body, contentType) {
  response.writeHead(status, {
    "Content-Type": contentType,
    "Cache-Control": status === 200 ? "no-cache" : "no-store",
    "X-Content-Type-Options": "nosniff",
    "Content-Security-Policy": "default-src 'self'; style-src 'self'; script-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'"
  });
  response.end(body);
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    if (url.pathname === "/health") return respond(response, 200, "ok", "text/plain; charset=utf-8");
    if (url.pathname === "/api/docs") {
      const notes = await loadNotes();
      return respond(response, 200, JSON.stringify({ notes }), MIME[".json"]);
    }

    const requested = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
    const staticPath = normalize(join(PUBLIC, requested));
    if (!staticPath.startsWith(PUBLIC)) return respond(response, 403, "Forbidden", "text/plain; charset=utf-8");
    try {
      const file = await readFile(staticPath);
      return respond(response, 200, file, MIME[extname(staticPath)] || "application/octet-stream");
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      const index = await readFile(join(PUBLIC, "index.html"));
      return respond(response, 200, index, MIME[".html"]);
    }
  } catch (error) {
    console.error(error);
    respond(response, 500, "The knowledge base could not be loaded.", "text/plain; charset=utf-8");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Quality Atlas is available at http://${HOST}:${PORT}`);
});
