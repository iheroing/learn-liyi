import assert from "node:assert/strict";
import matter from "gray-matter";
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const site = "https://learn.liyi.online";
const output = resolve(root, ".next/server/app");
const lessonsDir = resolve(root, "content/lessons");
const [{ escapeXml, rfc822Date }, { serializeJsonForHtml }] = await Promise.all([
  import(pathToFileURL(resolve(root, "src/lib/xml.ts"))),
  import(pathToFileURL(resolve(root, "src/lib/safe-json.ts"))),
]);

const files = (await readdir(lessonsDir)).filter((file) => /\.mdx?$/.test(file));
const lessons = await Promise.all(
  files.map(async (file) => {
    const source = await readFile(resolve(lessonsDir, file), "utf8");
    const { data } = matter(source);
    return {
      slug: String(data.slug ?? file.replace(/\.mdx?$/, "")),
      title: String(data.title ?? ""),
      summary: String(data.summary ?? ""),
      date: data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : String(data.date ?? ""),
    };
  }),
);

const htmlPages = await Promise.all(
  lessons.map(async (lesson) => ({
    lesson,
    html: await readFile(resolve(output, `lessons/${lesson.slug}.html`), "utf8"),
  })),
);
const staticHtml = await Promise.all(
  ["index", "about"].map(async (page) => ({
    page,
    html: await readFile(resolve(output, `${page}.html`), "utf8"),
  })),
);
const getCanonical = (html, label) => {
  const matches = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
  assert.equal(matches.length, 1, `${label}: exactly one canonical link`);
  return matches[0][1].replaceAll("&amp;", "&");
};
for (const { html } of [...staticHtml, ...htmlPages]) {
  assert.match(html, /<link rel="alternate"[^>]*type="application\/rss\+xml"[^>]*href="https:\/\/learn\.liyi\.online\/feed\.xml"/, "RSS autodiscovery is available on every page");
}
const canonicalUrls = [
  ...staticHtml.map(({ html, page }) => {
    const canonical = getCanonical(html, page);
    assert.equal(canonical, page === "index" ? site : `${site}/about`);
    return canonical;
  }),
  ...htmlPages.map(({ html, lesson }) => {
    const canonical = getCanonical(html, lesson.slug);
    assert.equal(canonical, `${site}/lessons/${lesson.slug}`);
    return canonical;
  }),
];
assert.equal(
  new Set(canonicalUrls).size,
  canonicalUrls.length,
  "canonical URLs are unique",
);

const sitemap = await readFile(resolve(output, "sitemap.xml.body"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
assert(sitemapUrls.includes(site), "sitemap includes homepage");
assert(sitemapUrls.includes(`${site}/about`), "sitemap includes about page");
for (const canonical of canonicalUrls) {
  assert(sitemapUrls.includes(canonical), `sitemap includes ${canonical}`);
}

const feed = await readFile(resolve(output, "feed.xml.body"), "utf8");
assert.match(feed, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
for (const lesson of lessons) {
  const url = `${site}/lessons/${lesson.slug}`;
  assert(feed.includes(`<link>${url}</link>`), `feed has absolute URL for ${lesson.slug}`);
  assert(
    feed.includes(`<pubDate>${rfc822Date(lesson.date)}</pubDate>`),
    `feed has RFC date for ${lesson.slug}`,
  );
  assert(
    feed.includes(`<title>${escapeXml(lesson.title)}</title>`),
    `feed has escaped title for ${lesson.slug}`,
  );
  assert(
    feed.includes(`<description>${escapeXml(lesson.summary)}</description>`),
    `feed has escaped summary for ${lesson.slug}`,
  );
}
assert.equal(escapeXml(`A&B <C> "D" 'E'`), "A&amp;B &lt;C&gt; &quot;D&quot; &apos;E&apos;");
const hostileSchemaText = `quoted </script><script>alert("x")</script>`;
const safeSchemaText = serializeJsonForHtml({ text: hostileSchemaText });
assert(!safeSchemaText.includes("</script>"), "JSON-LD cannot terminate its script element");
assert.equal(JSON.parse(safeSchemaText).text, hostileSchemaText, "safe JSON preserves schema text");

for (const { lesson, html } of htmlPages) {
  const scripts = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ];
  const schemas = scripts.map((match) => JSON.parse(match[1]));
  const article = schemas.find((schema) => schema["@type"] === "Article");
  const breadcrumb = schemas.find((schema) => schema["@type"] === "BreadcrumbList");
  assert(article, `${lesson.slug}: Article schema exists and parses`);
  assert(breadcrumb, `${lesson.slug}: Breadcrumb schema exists and parses`);
  const socialImages = [...html.matchAll(/<meta property="og:image" content="([^"]+)"/g)];
  assert(socialImages.length > 0, `${lesson.slug}: social share image is present`);
  for (const [, image] of socialImages) {
    assert.match(image, /\.(?:png|jpe?g|webp|gif)$/, "social share images must not be unsupported SVGs");
  }
  assert.equal(article.headline, lesson.title);
  assert.equal(article.description, lesson.summary);
  assert.equal(article.datePublished, lesson.date, "preserve date-only publication precision");
  assert.equal(article.url, `${site}/lessons/${lesson.slug}`);
  assert.equal("publisher" in article, false, "no invented organization publisher");
  assert.equal("author" in article, false, `${lesson.slug}: no invented author`);
  const visibleCitations = [
    ...html.matchAll(/<li class="pl-1"><a href="(https?:[^\"]+)"/g),
  ].map((match) => match[1]);
  assert.deepEqual(
    article.citation ?? [],
    visibleCitations,
    `${lesson.slug}: citations match visible source links`,
  );
}

const robots = await readFile(resolve(output, "robots.txt.body"), "utf8");
assert.match(robots, /User-Agent: \*\nAllow: \/\n\nSitemap: https:\/\/learn\.liyi\.online\/sitemap\.xml/);

console.log(`SEO output checks passed for ${lessons.length} lesson pages.`);
