import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-shell px-4 sm:px-6 py-7 sm:py-9">
      <div className="max-w-prose">
        <div className="border-t-2 border-ink pt-4 mb-5">
          <p className="kicker mb-2">关于</p>
          <h1 className="font-serif text-[1.85rem] sm:text-[2.2rem] text-ink mb-3 leading-tight tracking-tight">
            这是什么站
          </h1>
          <p className="text-ink-muted text-[1.02rem] leading-relaxed">
            《每日高收益知识课》的公开课页，域名{" "}
            <code className="rounded-sm bg-ink/5 px-1.5 py-0.5 text-ink text-[0.9em]">
              learn.liyi.online
            </code>
            。给想把研究里靠谱的做法，用进排期、学习和决策的人。
          </p>
        </div>

        <div className="border border-ink/12 bg-paper-elevated mb-7">
          <div className="h-[3px] bg-ink" aria-hidden />
          <div className="space-y-4 text-ink-muted px-4 py-5 sm:px-6 sm:py-6 text-[1rem] leading-relaxed">
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
                className="text-accent underline underline-offset-2 decoration-accent/35 hover:decoration-accent"
              >
                www.liyi.online
              </Link>
              。本栏目独立部署，改这里不会动到官网。
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[0.8125rem] text-accent hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
        >
          ← 回到课程目录
        </Link>
      </div>
    </div>
  );
}
