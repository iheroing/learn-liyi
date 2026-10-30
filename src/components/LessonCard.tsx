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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper-elevated shadow-soft hover:border-accent/30 hover:shadow-lift transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <div
        className={`relative h-24 sm:h-28 bg-gradient-to-br ${art.coverTint} border-b border-ink/8 overflow-hidden`}
      >
        {art.diagram ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={art.diagram}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-paper-elevated/90 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt="" className="h-8 w-8 rounded-lg shadow-soft" />
          <span className="text-xs font-medium text-ink-muted bg-paper-elevated/90 backdrop-blur px-2 py-0.5 rounded-full border border-ink/8">
            {lesson.domain}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 pt-3.5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted mb-2.5">
          {lesson.issue != null && (
            <span className="meta-pill-accent meta-pill rounded-full px-2.5 py-0.5 text-xs font-medium">
              第 {lesson.issue} 期
            </span>
          )}
          <time dateTime={lesson.date}>{formatDate(lesson.date)}</time>
          {lesson.difficulty ? (
            <>
              <span className="text-ink-faint">·</span>
              <span>{lesson.difficulty}</span>
            </>
          ) : null}
        </div>
        <h2 className="font-serif text-base sm:text-[1.15rem] text-ink group-hover:text-accent transition-colors leading-snug mb-2">
          {lesson.title}
        </h2>
        <p className="text-sm text-ink-muted leading-relaxed line-clamp-2 flex-1">
          {lesson.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent">
          打开本课
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
