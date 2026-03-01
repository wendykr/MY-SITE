/* eslint-env node */
import fs from "fs";
import path from "path";

const distDir = path.resolve(process.cwd(), "dist");
const localesDir = path.resolve(process.cwd(), "src", "locales");

function read(file) {
  return fs.readFileSync(file, { encoding: "utf8" });
}

function write(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, data, { encoding: "utf8" });
}

function escapeAttr(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function replaceContentAttr(tag, value) {
  if (/content=/i.test(tag))
    return tag.replace(
      /content=(?:"|')[^"']*(?:"|')/i,
      `content="${escapeAttr(value)}"`,
    );
  return tag.replace(/>$/, ` content="${escapeAttr(value)}">`);
}

function replaceHrefAttr(tag, value) {
  if (/href=/i.test(tag))
    return tag.replace(
      /href=(?:"|')[^"']*(?:"|')/i,
      `href="${escapeAttr(value)}"`,
    );
  return tag.replace(/>$/, ` href="${escapeAttr(value)}">`);
}

function ensureLangInUrl(url, lang) {
  try {
    const u = new URL(url);
    let pathname = u.pathname;
    if (!pathname.endsWith("/")) pathname += "/";
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] && segments[0] !== lang) segments.unshift(lang);
    else if (!segments[0]) segments.unshift(lang);
    u.pathname = "/" + segments.join("/");
    if (!u.pathname.endsWith("/")) u.pathname += "/";
    return u.toString();
  } catch (e) {
    if (!url.endsWith("/")) url += "/";
    return url + lang + "/";
  }
}

function replaceMeta(html, meta, lang) {
  let out = html;
  out = out.replace(/<html[^>]*lang="[^"]*"[^>]*>/i, (m) =>
    m.replace(/lang="[^"]*"/, `lang="${lang}"`),
  );
  if (meta.title)
    out = out.replace(/<title>.*?<\/title>/is, `<title>${meta.title}</title>`);
  if (meta.description)
    out = out.replace(
      /<meta[^>]*name=(?:"|')description(?:"|')[^>]*>/i,
      `<meta name="description" content="${escapeAttr(meta.description)}">`,
    );

  const setProp = (regex, content) => {
    if (!content) return;
    out = out.replace(regex, (m) => replaceContentAttr(m, content));
  };

  setProp(
    /<meta[^>]*property=(?:"|')og:title(?:"|')[^>]*>/i,
    meta.ogTitle || meta.title,
  );
  setProp(
    /<meta[^>]*property=(?:"|')og:description(?:"|')[^>]*>/i,
    meta.ogDescription || meta.description,
  );
  setProp(
    /<meta[^>]*name=(?:"|')twitter:title(?:"|')[^>]*>/i,
    meta.ogTitle || meta.title,
  );
  setProp(
    /<meta[^>]*name=(?:"|')twitter:description(?:"|')[^>]*>/i,
    meta.ogDescription || meta.description,
  );

  if (meta.canonical) {
    const langUrl = ensureLangInUrl(meta.canonical, lang);
    out = out.replace(/<meta[^>]*property=(?:"|')og:url(?:"|')[^>]*>/i, (m) =>
      replaceContentAttr(m, langUrl),
    );
    out = out.replace(/<link[^>]*rel=(?:"|')canonical(?:"|')[^>]*>/i, (m) =>
      replaceHrefAttr(m, langUrl),
    );
  }

  return out;
}

function main() {
  const baseFile = path.join(distDir, "index.html");
  if (!fs.existsSync(baseFile)) {
    console.error("dist/index.html not found. Run build first.");
    process.exit(1);
  }

  const baseHtml = read(baseFile);

  const files = fs.readdirSync(localesDir).filter((f) => f.endsWith(".json"));
  for (const file of files) {
    const full = path.join(localesDir, file);
    const lang = path.basename(file, ".json");
    try {
      const json = JSON.parse(read(full));
      const meta = json.meta || {};
      const outHtml = replaceMeta(baseHtml, meta, lang);
      const outPath = path.join(distDir, lang, "index.html");
      write(outPath, outHtml);
      console.log(`Generated localized index for ${lang} -> ${outPath}`);
    } catch (e) {
      console.error(`Failed to process locale ${file}:`, e);
    }
  }
}
main();
