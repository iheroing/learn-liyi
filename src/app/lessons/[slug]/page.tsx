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

  return (
    <article className="mx-auto max-w-reading px-5 py-10 sm:py-14">
      <Link
        href="/"
        className="text-sm text-ink-muted hover:text-accent transition-colors"
      >
        ← 返回目录
      </Link>

      <header className="mt-6 mb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted mb-4">
          {lesson.issue != null && (
            <span className="rounded-full bg-ink/5 px-2.5 py-0.5">
              第 {lesson.issue} 期
            </span>
          )}
          <time dateTime={lesson.date}>{formatDate(lesson.date)}</time>
          <span>·</span>
          <span>{lesson.domain}</span>
          {lesson.difficulty ? (
            <>
              <span>·</span>
              <span>{lesson.difficulty}</span>
            </>
          ) : null}
        </div>
        <h1 className="font-serif text-3xl sm:text-[2.1rem] text-ink leading-snug mb-4">
          {lesson.title}
        </h1>
        <p className="text-ink-muted leading-relaxed text-[1.05rem]">
          {lesson.summary}
        </p>
      </header>

      <div className="mb-10">
        <Toc items={lesson.toc} />
      </div>

      <div
        className="prose-lesson"
        dangerouslySetInnerHTML={{ __html: lesson.bodyHtml }}
      />

      {lesson.quiz.length > 0 && (
        <div className="mt-14 pt-10 border-t border-ink/10">
          <Quiz questions={lesson.quiz} />
        </div>
      )}

      {lesson.sourceLinks.length > 0 && (
        <section id="来源" className="mt-14 pt-10 border-t border-ink/10 scroll-mt-24">
          <h2 className="font-serif text-2xl text-ink mb-5">来源</h2>
          <ol className="space-y-3 text-sm text-ink-muted list-decimal pl-5">
            {lesson.sourceLinks.map((s) => (
              <li key={s.href}>
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

      <nav className="mt-14 pt-8 border-t border-ink/10 flex flex-col sm:flex-row gap-4 sm:justify-between text-sm">
        {older ? (
          <Link
            href={`/lessons/${older.slug}`}
            className="text-ink-muted hover:text-accent transition-colors"
          >
            ← 上一期：{older.title}
          </Link>
        ) : (
          <span />
        )}
        {newer ? (
          <Link
            href={`/lessons/${newer.slug}`}
            className="text-ink-muted hover:text-accent transition-colors sm:text-right"
          >
            下一期：{newer.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
