import { getAllLessonMetas } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";

export default function HomePage() {
  const lessons = getAllLessonMetas();

  return (
    <div className="mx-auto max-w-shell px-5 sm:px-8 py-10 sm:py-14">
      <section className="mb-10 sm:mb-14 relative overflow-hidden rounded-3xl border border-ink/10 bg-paper-elevated shadow-card">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 0% 0%, rgba(154,52,18,0.1), transparent 55%), radial-gradient(ellipse 50% 60% at 100% 20%, rgba(63,98,18,0.06), transparent 50%)",
          }}
        />
        <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 max-w-3xl">
          <p className="text-sm text-accent font-medium mb-3 tracking-wide">
            系列专栏
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-ink leading-tight mb-4">
            每日高收益知识课
          </h1>
          <p className="text-ink-muted leading-relaxed text-[1.05rem] sm:text-[1.08rem]">
            每天一课，约一千字。挑低成本、可迁移、长期收益高的知识：概率与决策、学习方法、科学素养等。
            先读懂，再带走一句能用的话，最后用两道自测核对。
          </p>
          <dl className="mt-7 grid grid-cols-3 gap-3 sm:gap-4 max-w-md">
            <div className="rounded-xl border border-ink/8 bg-paper/70 px-3 py-3 text-center">
              <dt className="text-[0.65rem] uppercase tracking-wider text-ink-faint mb-1">
                已更
              </dt>
              <dd className="font-serif text-xl text-ink tabular-nums">
                {lessons.length}
              </dd>
            </div>
            <div className="rounded-xl border border-ink/8 bg-paper/70 px-3 py-3 text-center">
              <dt className="text-[0.65rem] uppercase tracking-wider text-ink-faint mb-1">
                节奏
              </dt>
              <dd className="font-serif text-xl text-ink">日更</dd>
            </div>
            <div className="rounded-xl border border-ink/8 bg-paper/70 px-3 py-3 text-center">
              <dt className="text-[0.65rem] uppercase tracking-wider text-ink-faint mb-1">
                自测
              </dt>
              <dd className="font-serif text-xl text-ink">隐藏</dd>
            </div>
          </dl>
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-5 sm:mb-6">
          <h2 className="font-serif text-xl sm:text-2xl text-ink">课程目录</h2>
          <span className="text-sm text-ink-muted">共 {lessons.length} 期</span>
        </div>
        {lessons.length === 0 ? (
          <p className="text-ink-muted">暂无课程，稍后再来。</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
