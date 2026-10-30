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
import { getLessonArt } from "@/lib/lesson-art";

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


function splitAfterFirstSection(html: string): { before: string; after: string } {
  const match = html.match(/^(<[\s\S]*?<\/h2>[\s\S]*?)(<h2[\s\S]*)$/i);
  if (!match) return { before: html, after: "" };
  return { before: match[1], after: match[2] };
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
  // all is newest-first; previous chronologically = next in array
  const newer = idx > 0 ? all[idx - 1] : null;
  const older = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
  const art = getLessonArt(slug);
  const { before: bodyBefore, after: bodyAfter } = splitAfterFirstSection(
    lesson.bodyHtml
  );

  return (
    <article className="mx-auto max-w-shell px-5 sm:px-8 py-8 sm:py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded"
      >
        <span aria-hidden>←</span> 返回目录
      </Link>

      {/* Hero */}
      <header className="mt-6 mb-8 sm:mb-10 relative overflow-hidden rounded-3xl border border-ink/10 bg-paper-elevated shadow-card">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 0% 0%, rgba(154,52,18,0.09), transparent 55%), radial-gradient(ellipse 50% 60% at 100% 100%, rgba(63,98,18,0.06), transparent 50%)",
          }}
        />
        <div className="relative px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted mb-5">
            {lesson.issue != null && (
              <span className="meta-pill-accent meta-pill rounded-full px-2.5 py-0.5 text-xs font-medium">
                第 {lesson.issue} 期
              </span>
            )}
            <time dateTime={lesson.date} className="meta-pill">
              {formatDate(lesson.date)}
            </time>
            <span className="meta-pill">{lesson.domain}</span>
            {lesson.difficulty ? (
              <span className="meta-pill">{lesson.difficulty}</span>
            ) : null}
          </div>
          <h1 className="font-serif text-[1.75rem] sm:text-[2.15rem] lg:text-[2.35rem] text-ink leading-snug mb-5 max-w-3xl">
            {lesson.title}
          </h1>
          <div className="max-w-prose rounded-2xl border border-accent/15 bg-accent/[0.05] px-4 py-3.5 sm:px-5 sm:py-4">
            <p className="text-[0.7rem] font-semibold tracking-wide text-accent mb-1.5">
              这一课在解决什么
            </p>
            <p className="text-ink-muted leading-relaxed text-[1.02rem] sm:text-[1.05rem]">
              {lesson.summary}
            </p>
          </div>
        </div>
      </header>

      {/* Mobile TOC */}
      <div className="mb-8 lg:hidden">
        <Toc items={lesson.toc} variant="panel" />
      </div>

      {/* Body + sticky rail */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_16rem] xl:gap-14">
        <div className="min-w-0 max-w-prose lg:max-w-none">
          <div className="prose-lesson max-w-prose">
            <div dangerouslySetInnerHTML={{ __html: bodyBefore }} />
            {art.diagram ? (
              <LessonFigure
                src={art.diagram}
                alt={art.diagramAlt}
                caption={art.diagramCaption}
              />
            ) : null}
            <div dangerouslySetInnerHTML={{ __html: bodyAfter }} />
          </div>

          {lesson.quiz.length > 0 && (
            <div className="mt-14 pt-10 border-t border-ink/10 max-w-prose">
              <Quiz questions={lesson.quiz} />
            </div>
          )}

          {lesson.sourceLinks.length > 0 && (
            <section
              id="来源"
              className="mt-14 pt-10 border-t border-ink/10 scroll-mt-28 max-w-prose"
            >
              <p className="text-[0.7rem] font-semibold tracking-wide text-accent mb-2">
                文献
              </p>
              <h2 className="font-serif text-2xl text-ink mb-5">来源</h2>
              <ol className="space-y-3 text-sm text-ink-muted list-decimal pl-5">
                {lesson.sourceLinks.map((s) => (
                  <li key={s.href} className="pl-1">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-2 decoration-accent/30 hover:decoration-accent break-all"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <nav className="mt-14 pt-8 border-t border-ink/10 grid gap-4 sm:grid-cols-2 max-w-prose">
            {older ? (
              <Link
                href={`/lessons/${older.slug}`}
                className="group rounded-2xl border border-ink/10 bg-paper-elevated p-4 shadow-soft hover:border-accent/30 hover:shadow-lift transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <span className="block text-[0.7rem] uppercase tracking-wider text-ink-faint mb-1.5">
                  ← 上一期
                </span>
                <span className="text-sm text-ink group-hover:text-accent transition-colors leading-snug line-clamp-2">
                  {older.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {newer ? (
              <Link
                href={`/lessons/${newer.slug}`}
                className="group rounded-2xl border border-ink/10 bg-paper-elevated p-4 shadow-soft hover:border-accent/30 hover:shadow-lift transition-all sm:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <span className="block text-[0.7rem] uppercase tracking-wider text-ink-faint mb-1.5">
                  下一期 →
                </span>
                <span className="text-sm text-ink group-hover:text-accent transition-colors leading-snug line-clamp-2">
                  {newer.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-1">
            <Toc items={lesson.toc} variant="rail" />
          </div>
        </aside>
      </div>
    </article>
  );
}
