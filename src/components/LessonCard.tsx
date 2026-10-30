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
      className="group block rounded-2xl border border-ink/10 bg-paper-elevated p-5 sm:p-6 shadow-soft hover:border-accent/30 hover:shadow-md transition-all"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted mb-3">
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
      <h2 className="font-serif text-xl text-ink group-hover:text-accent transition-colors leading-snug mb-2">
        {lesson.title}
      </h2>
      <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
        {lesson.summary}
      </p>
    </Link>
  );
}
