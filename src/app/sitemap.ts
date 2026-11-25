import type { MetadataRoute } from "next";
import { getAllLessonMetas } from "@/lib/lessons";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lessons = getAllLessonMetas().map((lesson) => ({
    url: `${SITE_URL}/lessons/${lesson.slug}`,
    // The content publication date is the only known date; no build-time lastmod.
    lastModified: lesson.date,
  }));

  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/about` },
    ...lessons,
  ];
}
