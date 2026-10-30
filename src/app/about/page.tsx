import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-shell px-5 sm:px-8 py-10 sm:py-14">
      <div className="max-w-prose">
        <p className="text-sm text-accent font-medium mb-3 tracking-wide">关于</p>
        <h1 className="font-serif text-3xl sm:text-4xl text-ink mb-6 leading-tight">
          关于本站
        </h1>

        <div className="rounded-3xl border border-ink/10 bg-paper-elevated shadow-card overflow-hidden mb-8">
          <div
            className="h-2 bg-gradient-to-r from-accent via-accent/60 to-sage/50"
            aria-hidden
          />
          <div className="prose-lesson space-y-4 text-ink-muted p-6 sm:p-8">
            <p>
              这里是《每日高收益知识课》的公开站点，挂在{" "}
              <code className="rounded bg-ink/5 px-1.5 py-0.5 text-ink">
                learn.liyi.online
              </code>
              。每天一课，面向想把研究里靠谱的方法用进日常决策与学习的人。
            </p>
            <p>
              内容由认知杠杠日更产出，再整理成站用稿发布。不编造来源；能标注 DOI
              的会放在文末。自测答案默认隐藏，点「核对答案」再看。
            </p>
            <p>
              主站：{" "}
              <Link
                href="https://www.liyi.online"
                className="text-accent underline underline-offset-2"
              >
                www.liyi.online
              </Link>
              。本栏目与官网同属李老师站点体系，部署独立，互不影响。
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
