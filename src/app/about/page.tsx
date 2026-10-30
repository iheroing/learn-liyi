import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-shell px-5 sm:px-8 py-10 sm:py-14">
      <div className="max-w-prose">
        <p className="text-xs font-medium tracking-wide text-accent mb-3">关于</p>
        <h1 className="font-serif text-3xl sm:text-[2.35rem] text-ink mb-4 leading-tight">
          这是什么站
        </h1>
        <p className="text-ink-muted text-[1.05rem] leading-relaxed mb-8">
          《每日高收益知识课》的公开课页，域名{" "}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 text-ink text-[0.92em]">
            learn.liyi.online
          </code>
          。给想把研究里靠谱的做法，用进排期、学习和决策的人。
        </p>

        <div className="rounded-3xl border border-ink/10 bg-paper-elevated shadow-card overflow-hidden mb-8">
          <div
            className="h-1.5 bg-gradient-to-r from-accent via-accent/60 to-sage/50"
            aria-hidden
          />
          <div className="space-y-5 text-ink-muted p-6 sm:p-8 text-[1.02rem] leading-relaxed">
            <p>
              筛选标准写死三条：学习成本低、能迁移到别的任务、长期还用得上。
              概率与决策、学习方法、科学素养会经常出现，但不限于这些。
            </p>
            <p>
              稿件由认知杠杠日更产出，再整理成站用页。不编造来源；有 DOI
              就放文末。自测答案默认隐藏，点「核对答案」再看。
            </p>
            <p>
              主站{" "}
              <Link
                href="https://www.liyi.online"
                className="text-accent underline underline-offset-2"
              >
                www.liyi.online
              </Link>
              。本栏目独立部署，改这里不会动到官网。
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded"
        >
          ← 回到课程目录
        </Link>
      </div>
    </div>
  );
}
