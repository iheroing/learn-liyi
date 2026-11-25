import { getAllLessonMetas } from "@/lib/lessons";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { escapeXml, rfc822Date } from "@/lib/xml";

export const dynamic = "force-static";

export function GET(): Response {
  const items = getAllLessonMetas()
    .map((lesson) => {
      const url = `${SITE_URL}/lessons/${lesson.slug}`;
      return [
        "    <item>",
        `      <title>${escapeXml(lesson.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <description>${escapeXml(lesson.summary)}</description>`,
        `      <pubDate>${rfc822Date(lesson.date)}</pubDate>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0"><channel>',
    `  <title>${escapeXml(SITE_NAME)}</title>`,
    `  <link>${SITE_URL}</link>`,
    `  <description>${escapeXml(SITE_DESCRIPTION)}</description>`,
    `  <language>zh-Hans</language>`,
    items,
    "</channel></rss>",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
