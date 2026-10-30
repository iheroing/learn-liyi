import Link from "next/link";
import type { LessonMeta } from "@/lib/lessons";

function formatDate(date: string) {
  const [y, m, d] = date.split("-");
  if (!y || !m || !d) return date;
  return `${y}年${Number(m)}月${Number(d)}日`;
}

export function LessonCard({ lesson }: { lesson: LessonMeta }) {
  return (
    <Link
      href={`/lessons/${lesson.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-ink/10 bg-paper-elevated p-5 sm:p-6 shadow-soft hover:border-accent/30 hover:shadow-lift transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent/80 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-hidden
      />
      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted mb-3">
        {lesson.issue != null && (
          <span className="meta-pill-accent meta-pill rounded-full px-2.5 py-0.5 text-xs font-medium">
            第 {lesson.issue} 期
          </span>
        )}
        <time dateTime={lesson.date}>{formatDate(lesson.date)}</time>
        <span className="text-ink-faint">·</span>
        <span>{lesson.domain}</span>
        {lesson.difficulty ? (
          <>
            <span className="text-ink-faint">·</span>
            <span>{lesson.difficulty}</span>
          </>
        ) : null}
      </div>
      <h2 className="font-serif text-xl sm:text-[1.35rem] text-ink group-hover:text-accent transition-colors leading-snug mb-2.5">
        {lesson.title}
      </h2>
      <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
        {lesson.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
        阅读本课
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
