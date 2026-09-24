/* eslint-env node */
import fs from "fs";
import path from "path";

const distDir = path.resolve(process.cwd(), "dist");
const localesDir = path.resolve(process.cwd(), "src", "locales");
const SITE_URL = "https://vendula-krajickova.cz";
const DEFAULT_LANG = "cs";

// Netlify serves every page from <path>/index.html and 301-redirects "/en" to
// "/en/", so canonical URLs must include the trailing slash.
function toAbsoluteUrl(urlPath) {
  return `${SITE_URL}${urlPath.endsWith("/") ? urlPath : `${urlPath}/`}`;
}

// Mirrors src/constants/sectionRoutes.ts plus the standalone "video" route
// declared directly in src/App.tsx. Kept in sync by hand since this script
// runs as plain Node before any TypeScript is compiled.
const SECTION_ROUTES = [
  { jsonKey: "about", cs: "o-mne", en: "about" },
  { jsonKey: "experience", cs: "zkusenosti", en: "experience" },
  { jsonKey: "projects", cs: "projekty", en: "projects" },
  { jsonKey: "blog", cs: "prispevky", en: "posts" },
  { jsonKey: "recommendations", cs: "doporuceni", en: "recommendations" },
  { jsonKey: "contact", cs: "kontakt", en: "contact" },
  { jsonKey: "video", cs: "video", en: "video" },
];

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

function replaceMeta(html, meta, lang, canonicalUrl) {
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

  if (canonicalUrl) {
    out = out.replace(/<meta[^>]*property=(?:"|')og:url(?:"|')[^>]*>/i, (m) =>
      replaceContentAttr(m, canonicalUrl),
    );
    out = out.replace(/<link[^>]*rel=(?:"|')canonical(?:"|')[^>]*>/i, (m) =>
      replaceHrefAttr(m, canonicalUrl),
    );
  }

  return out;
}

// Maps a route's URL path (e.g. "/", "/en", "/o-mne", "/en/about") to the
// dist/ file that Netlify will serve for it, mirroring getHomePath /
// getSectionPath from src/constants/sectionRoutes.ts.
function outFileForPath(urlPath) {
  const clean = urlPath.replace(/^\//, "");
  const dir = clean === "" ? distDir : path.join(distDir, ...clean.split("/"));
  return path.join(dir, "index.html");
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
    const lang = path.basename(file, ".json");
    const json = JSON.parse(read(path.join(localesDir, file)));
    const prefix = lang === DEFAULT_LANG ? "" : `/${lang}`;

    const homePath = lang === DEFAULT_LANG ? "/" : prefix;
    const homeMeta = json.meta || {};
    const homeHtml = replaceMeta(baseHtml, homeMeta, lang, toAbsoluteUrl(homePath));
    const homeOut = outFileForPath(homePath);
    write(homeOut, homeHtml);
    console.log(`Generated ${lang} home -> ${homeOut}`);

    for (const route of SECTION_ROUTES) {
      const section = json[route.jsonKey];
      const seo = section && section.seo;
      if (!seo) continue;

      const slug = lang === DEFAULT_LANG ? route.cs : route.en;
      const sectionPath = `${prefix}/${slug}`;
      const sectionHtml = replaceMeta(baseHtml, seo, lang, toAbsoluteUrl(sectionPath));
      const sectionOut = outFileForPath(sectionPath);
      write(sectionOut, sectionHtml);
      console.log(`Generated ${lang} ${route.jsonKey} -> ${sectionOut}`);
    }
  }
}
main();
