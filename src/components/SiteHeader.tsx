import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-ink/12 bg-paper sticky top-0 z-40">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        {/* Masthead top rule */}
        <div className="h-[3px] bg-ink" aria-hidden />
        <div className="flex items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
          >
            <span className="block font-serif text-[1.05rem] sm:text-lg text-ink tracking-tight leading-none group-hover:text-accent transition-colors">
              每日高收益知识课
            </span>
            <span className="mt-1 block text-[0.65rem] tracking-kicker uppercase text-ink-faint">
              learn.liyi.online · 李老师专栏
            </span>
          </Link>
          <nav className="flex items-center gap-0 text-[0.8125rem] text-ink-muted">
            <Link
              href="/"
              className="px-2.5 py-1 hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm border-b-2 border-transparent hover:border-accent/40"
            >
              目录
            </Link>
            <Link
              href="/about"
              className="px-2.5 py-1 hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm border-b-2 border-transparent hover:border-accent/40"
            >
              关于
            </Link>
          </nav>
        </div>
        <div className="h-px bg-ink/15" aria-hidden />
      </div>
    </header>
  );
}
