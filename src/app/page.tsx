import Link from "next/link";
import { getAllLessonMetas } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";

export default function HomePage() {
  const lessons = getAllLessonMetas();
  const latest = lessons[0] ?? null;

  return (
    <div className="mx-auto max-w-shell px-4 sm:px-6 py-6 sm:py-8">
      {/* Magazine cover / masthead block */}
      <section className="mb-8">
        <div className="border-t-2 border-ink pt-5 mb-5">
          <p className="kicker mb-2">李老师 · 每日专栏</p>
          <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] gap-5 lg:gap-7 items-start">
            <div>
              <h1 className="font-serif text-[1.7rem] sm:text-[2.15rem] text-ink leading-[1.22] tracking-tight mb-3">
                每天一千字，挑能用进决策与学习的方法
              </h1>
              <p className="text-ink-muted leading-relaxed text-[0.98rem] max-w-xl mb-4">
                概率与决策、学习方法、科学素养。每课带场景、可执行步骤、两道自测；
                能标 DOI 的放文末。
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {latest ? (
                  <Link
                    href={`/lessons/${latest.slug}`}
                    className="inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-[0.8125rem] text-paper hover:bg-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  >
                    读最新一期
                    <span className="text-paper/65 hidden sm:inline">
                      · 第 {latest.issue} 期
                    </span>
                  </Link>
                ) : null}
                <a
                  href="#catalog"
                  className="inline-flex items-center border border-ink/25 px-3.5 py-2 text-[0.8125rem] text-ink-muted hover:border-accent hover:text-accent transition-colors"
                >
                  看全部目录
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden border border-ink/12 bg-paper-soft aspect-[4/3] lg:aspect-auto lg:min-h-[11.5rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/illustrations/home-masthead.jpg"
                alt="笔记本、校准草图与合上的书：记录、对账、回想"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[0.75rem] text-paper/95 leading-relaxed border-t border-paper/20 bg-ink/35 backdrop-blur-[2px]">
                记下来、对过账、合上书再想一遍——本专栏常练的三件事。
              </p>
            </div>
          </div>
        </div>

        {/* Issue stats — magazine folio strip */}
        <dl className="grid grid-cols-3 border-y border-ink/15 text-center">
          <div className="px-2 py-3">
            <dt className="text-[0.62rem] tracking-kicker uppercase text-ink-faint mb-0.5">
              已更新
            </dt>
            <dd className="font-serif text-base text-ink tabular-nums">
              {lessons.length} 期
            </dd>
          </div>
          <div className="px-2 py-3 border-x border-ink/15">
            <dt className="text-[0.62rem] tracking-kicker uppercase text-ink-faint mb-0.5">
              篇幅
            </dt>
            <dd className="font-serif text-base text-ink">约千字</dd>
          </div>
          <div className="px-2 py-3">
            <dt className="text-[0.62rem] tracking-kicker uppercase text-ink-faint mb-0.5">
              答案
            </dt>
            <dd className="font-serif text-base text-ink">先藏着</dd>
          </div>
        </dl>
      </section>

      <section className="mb-8" aria-labelledby="how-to-read">
        <div className="flex items-baseline justify-between mb-3 border-b border-ink/12 pb-2">
          <h2 id="how-to-read" className="font-serif text-lg text-ink tracking-tight">
            怎么读
          </h2>
          <span className="text-[0.7rem] tracking-caption uppercase text-ink-faint">
            约 10 分钟一课
          </span>
        </div>
        <ol className="grid gap-0 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink/12 border border-ink/12 bg-paper-elevated">
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
            <li key={step.n} className="p-3.5 sm:p-4">
              <span className="kicker">{step.n}</span>
              <p className="mt-1.5 font-serif text-[0.98rem] text-ink leading-snug">
                {step.t}
              </p>
              <p className="mt-1.5 text-[0.8rem] text-ink-muted leading-relaxed">
                {step.d}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="catalog" className="scroll-mt-20">
        <div className="flex items-baseline justify-between mb-3.5 border-b-2 border-ink pb-2">
          <h2 className="font-serif text-lg sm:text-xl text-ink tracking-tight">
            课程目录
          </h2>
          <span className="text-[0.8125rem] text-ink-muted">
            共 {lessons.length} 期
          </span>
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
