import Link from "next/link";
import type { LessonMeta } from "@/lib/lessons";
import { getLessonArt, iconForDomain } from "@/lib/lesson-art";

function formatDate(date: string) {
  const [y, m, d] = date.split("-");
  if (!y || !m || !d) return date;
  return `${y}年${Number(m)}月${Number(d)}日`;
}

export function LessonCard({ lesson }: { lesson: LessonMeta }) {
  const art = getLessonArt(lesson.slug);
  const icon = art.icon || iconForDomain(lesson.domain);

  return (
    <Link
      href={`/lessons/${lesson.slug}`}
      className="group flex flex-col border border-ink/12 bg-paper-elevated hover:border-accent/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      {art.diagram ? (
        <div
          className={`lesson-card-cover aspect-[12/7] overflow-hidden border-b border-ink/10 bg-gradient-to-br ${art.coverTint}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={art.diagram}
            alt={art.diagramAlt || lesson.title}
            className="h-full w-full object-contain opacity-90"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col px-3.5 py-3.5 sm:px-4">
        <div className="lesson-card-domain mb-2 flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={icon}
            alt=""
            aria-hidden
            className="h-6 w-6 rounded-sm border border-ink/10"
          />
          <span className="text-[0.65rem] tracking-caption uppercase text-ink-muted">
            {lesson.domain}
          </span>
        </div>

        <div className="meta-strip mb-2">
          {lesson.issue != null && (
            <span className="meta-pill-accent">第 {lesson.issue} 期</span>
          )}
          <time dateTime={lesson.date}>{formatDate(lesson.date)}</time>
          {lesson.difficulty ? <span>{lesson.difficulty}</span> : null}
        </div>
        <h2 className="font-serif text-[1.05rem] sm:text-[1.12rem] text-ink group-hover:text-accent transition-colors leading-snug mb-1.5 tracking-tight">
          {lesson.title}
        </h2>
        <p className="text-[0.8125rem] text-ink-muted leading-relaxed line-clamp-2 flex-1">
          {lesson.summary}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-[0.72rem] font-semibold tracking-caption uppercase text-accent">
          阅读
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
