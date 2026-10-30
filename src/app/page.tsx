import Link from "next/link";
import { getAllLessonMetas } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";

export default function HomePage() {
  const lessons = getAllLessonMetas();
  const latest = lessons[0] ?? null;

  return (
    <div className="mx-auto max-w-shell px-4 sm:px-6 py-6 sm:py-8">
      <section className="mb-8 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-4 lg:gap-5 items-stretch">
        <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-paper-elevated shadow-card flex flex-col justify-between">
          <div className="px-4 py-5 sm:px-6 sm:py-6">
            <p className="text-xs font-medium tracking-wide text-accent mb-2">
              李老师 · 每日专栏
            </p>
            <h1 className="font-serif text-[1.65rem] sm:text-[2.05rem] text-ink leading-[1.28] mb-3">
              每天一千字，挑能用进决策与学习的方法
            </h1>
            <p className="text-ink-muted leading-relaxed text-[0.98rem] max-w-xl">
              概率与决策、学习方法、科学素养。每课带场景、可执行步骤、两道自测；
              能标 DOI 的放文末。
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {latest ? (
                <Link
                  href={`/lessons/${latest.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-paper hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-elevated"
                >
                  读最新一期
                  <span className="text-paper/70 hidden sm:inline">
                    · 第 {latest.issue} 期
                  </span>
                </Link>
              ) : null}
              <a
                href="#catalog"
                className="inline-flex items-center rounded-full border border-ink/15 px-3.5 py-2 text-sm text-ink-muted hover:border-accent/40 hover:text-accent transition-colors"
              >
                看全部目录
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-3 border-t border-ink/8 text-center">
            <div className="px-2 py-3">
              <dt className="text-[0.65rem] tracking-wider text-ink-faint mb-0.5">
                已更新
              </dt>
              <dd className="font-serif text-base text-ink tabular-nums">
                {lessons.length} 期
              </dd>
            </div>
            <div className="px-2 py-3 border-x border-ink/8">
              <dt className="text-[0.65rem] tracking-wider text-ink-faint mb-0.5">
                篇幅
              </dt>
              <dd className="font-serif text-base text-ink">约千字</dd>
            </div>
            <div className="px-2 py-3">
              <dt className="text-[0.65rem] tracking-wider text-ink-faint mb-0.5">
                答案
              </dt>
              <dd className="font-serif text-base text-ink">先藏着</dd>
            </div>
          </dl>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-paper-soft shadow-card min-h-[180px] lg:min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/illustrations/home-masthead.jpg"
            alt="笔记本、校准草图与合上的书：记录、对账、回想"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          <p className="absolute bottom-3 left-3 right-3 text-xs text-paper/95 drop-shadow-sm leading-relaxed">
            记下来、对过账、合上书再想一遍——本专栏常练的三件事。
          </p>
        </div>
      </section>

      <section className="mb-8" aria-labelledby="how-to-read">
        <div className="flex items-baseline justify-between mb-3">
          <h2 id="how-to-read" className="font-serif text-lg text-ink">
            怎么读
          </h2>
          <span className="text-xs text-ink-faint">大约 10 分钟一课</span>
        </div>
        <ol className="grid gap-2.5 sm:grid-cols-3">
          {[
            {
              n: "01",
              t: "先看场景与概念",
              d: "弄清在解决什么问题、别和相近概念搅在一起。",
            },
            {
              n: "02",
              t: "记下「带走一句」",
              d: "每课收束成一句能对外说、能对照执行的话。",
            },
            {
              n: "03",
              t: "自测后再点核对",
              d: "答案默认隐藏。先自己选，再看解释。",
            },
          ].map((step) => (
            <li
              key={step.n}
              className="rounded-xl border border-ink/10 bg-paper-elevated p-3.5 shadow-soft"
            >
              <span className="text-[0.65rem] font-semibold tabular-nums tracking-wider text-accent">
                {step.n}
              </span>
              <p className="mt-1 font-medium text-ink text-[0.95rem]">{step.t}</p>
              <p className="mt-1 text-[0.8125rem] text-ink-muted leading-relaxed">
                {step.d}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="catalog" className="scroll-mt-20">
        <div className="flex items-baseline justify-between mb-3.5">
          <h2 className="font-serif text-lg sm:text-xl text-ink">课程目录</h2>
          <span className="text-sm text-ink-muted">共 {lessons.length} 期</span>
        </div>
        {lessons.length === 0 ? (
          <p className="text-ink-muted">暂无课程，稍后再来。</p>
        ) : (
          <div className="grid gap-3.5 sm:grid-cols-2">
            {lessons.map((lesson) => (
              <LessonCard key={lesson.slug} lesson={lesson} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
