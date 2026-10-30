import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllLessonMetas,
  getLessonBySlug,
  getLessonSlugs,
} from "@/lib/lessons";
import { Toc } from "@/components/Toc";
import { Quiz } from "@/components/Quiz";
import { LessonFigure } from "@/components/LessonFigure";
import { getLessonArt, type LessonFigureSpec } from "@/lib/lesson-art";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getLessonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug);
  if (!lesson) return { title: "未找到" };
  return {
    title: lesson.title,
    description: lesson.summary,
  };
}

type BodyChunk =
  | { kind: "html"; html: string }
  | { kind: "figure"; figure: LessonFigureSpec };

/**
 * Split body HTML on h2 sections and insert figures after matching headings.
 * Figures with empty afterHeading go after the first section.
 * Unmatched figures append before the last remaining HTML (or at end).
 */
function interleaveFigures(
  html: string,
  figures: LessonFigureSpec[]
): BodyChunk[] {
  if (!figures.length) return [{ kind: "html", html }];

  const parts = html.split(/(?=<h2\b)/i).filter(Boolean);
  if (parts.length === 0) return [{ kind: "html", html }];

  const used = new Set<number>();
  const chunks: BodyChunk[] = [];

  for (let i = 0; i < parts.length; i++) {
    chunks.push({ kind: "html", html: parts[i] });

    const headingMatch = parts[i].match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const headingText = headingMatch
      ? headingMatch[1].replace(/<[^>]+>/g, "").trim()
      : "";

    figures.forEach((fig, fi) => {
      if (used.has(fi)) return;
      const key = fig.afterHeading.trim();
      const placeHere =
        (key === "" && i === 0) ||
        (key !== "" && headingText.includes(key));
      if (placeHere) {
        chunks.push({ kind: "figure", figure: fig });
        used.add(fi);
      }
    });
  }

  figures.forEach((fig, fi) => {
    if (!used.has(fi)) {
      chunks.push({ kind: "figure", figure: fig });
      used.add(fi);
    }
  });

  return chunks;
}

function formatDate(date: string) {
  const [y, m, d] = date.split("-");
  if (!y || !m || !d) return date;
  return `${y}年${Number(m)}月${Number(d)}日`;
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug);
  if (!lesson) notFound();

  const all = getAllLessonMetas();
  const idx = all.findIndex((l) => l.slug === slug);
  const newer = idx > 0 ? all[idx - 1] : null;
  const older = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
  const art = getLessonArt(slug);
  const bodyChunks = interleaveFigures(lesson.bodyHtml, art.figures);

  return (
    <article className="mx-auto max-w-lesson px-4 sm:px-6 py-6 sm:py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-[0.78rem] text-ink-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
      >
        <span aria-hidden>←</span> 返回目录
      </Link>

      {/* Article masthead — magazine byline */}
      <header className="mt-4 mb-7 border-t-2 border-ink pt-4">
        <div className="meta-strip mb-3">
          {lesson.issue != null && (
            <span className="meta-pill-accent">第 {lesson.issue} 期</span>
          )}
          <time dateTime={lesson.date}>{formatDate(lesson.date)}</time>
          <span>{lesson.domain}</span>
          {lesson.difficulty ? <span>{lesson.difficulty}</span> : null}
        </div>
        <h1 className="font-serif text-[1.55rem] sm:text-[1.9rem] text-ink leading-[1.25] tracking-tight mb-4">
          {lesson.title}
        </h1>
        {/* Deck / standfirst */}
        <div className="border-l-[3px] border-accent pl-3.5 py-0.5 max-w-reading">
          <p className="kicker mb-1">这一课在解决什么</p>
          <p className="text-ink-muted leading-relaxed text-[1rem] font-serif">
            {lesson.summary}
          </p>
        </div>
        <div className="mt-5 h-px bg-ink/15" aria-hidden />
      </header>

      <div className="mb-5 lg:hidden">
        <Toc items={lesson.toc} variant="panel" />
      </div>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_10.5rem] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_11rem] xl:gap-9">
        <div className="min-w-0">
          <div className="prose-lesson">
            {bodyChunks.map((chunk, i) =>
              chunk.kind === "html" ? (
                <div
                  key={`h-${i}`}
                  dangerouslySetInnerHTML={{ __html: chunk.html }}
                />
              ) : (
                <LessonFigure
                  key={`f-${chunk.figure.src}-${i}`}
                  src={chunk.figure.src}
                  alt={chunk.figure.alt}
                  caption={chunk.figure.caption}
                />
              )
            )}
          </div>

          {lesson.quiz.length > 0 && (
            <div className="mt-10">
              <Quiz questions={lesson.quiz} />
            </div>
          )}

          {lesson.sourceLinks.length > 0 && (
            <section
              id="来源"
              className="mt-10 max-w-reading scroll-mt-24 border-t border-ink/15 pt-6"
            >
              <p className="kicker mb-1.5">文献</p>
              <h2 className="font-serif text-xl text-ink mb-3.5 tracking-tight">
                来源
              </h2>
              <ol className="space-y-2 text-sm text-ink-muted list-decimal pl-5">
                {lesson.sourceLinks.map((s) => (
                  <li key={s.href} className="pl-1">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-2 decoration-accent/35 hover:decoration-accent break-all"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <nav className="mt-10 pt-5 border-t-2 border-ink grid gap-0 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-ink/12">
            {older ? (
              <Link
                href={`/lessons/${older.slug}`}
                className="group py-3.5 pr-3 sm:pr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <span className="block text-[0.62rem] tracking-kicker uppercase text-ink-faint mb-1">
                  ← 上一期
                </span>
                <span className="font-serif text-sm text-ink group-hover:text-accent transition-colors leading-snug line-clamp-2">
                  {older.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {newer ? (
              <Link
                href={`/lessons/${newer.slug}`}
                className="group py-3.5 pl-0 sm:pl-4 sm:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <span className="block text-[0.62rem] tracking-kicker uppercase text-ink-faint mb-1">
                  下一期 →
                </span>
                <span className="font-serif text-sm text-ink group-hover:text-accent transition-colors leading-snug line-clamp-2">
                  {newer.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-20">
            <Toc items={lesson.toc} variant="rail" />
          </div>
        </aside>
      </div>
    </article>
  );
}
