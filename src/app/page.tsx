import { getAllLessonMetas } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";

export default function HomePage() {
  const lessons = getAllLessonMetas();

  return (
    <div className="mx-auto max-w-reading px-5 py-12 sm:py-16">
      <section className="mb-12 sm:mb-14">
        <p className="text-sm text-accent font-medium mb-3">系列专栏</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-ink leading-tight mb-4">
          每日高收益知识课
        </h1>
        <p className="text-ink-muted leading-relaxed text-[1.05rem]">
          每天一课，约一千字。挑低成本、可迁移、长期收益高的知识：概率与决策、学习方法、科学素养等。
          先读懂，再带走一句能用的话，最后用两道自测核对。
        </p>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="font-serif text-xl text-ink">课程目录</h2>
          <span className="text-sm text-ink-muted">共 {lessons.length} 期</span>
        </div>
        {lessons.length === 0 ? (
          <p className="text-ink-muted">暂无课程，稍后再来。</p>
        ) : (
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
