import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-paper/85 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-5 sm:px-8 py-3.5">
        <Link href="/" className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-lg">
          <span className="block font-serif text-lg tracking-tight text-ink group-hover:text-accent transition-colors">
            每日高收益知识课
          </span>
          <span className="block text-xs text-ink-muted mt-0.5">
            learn.liyi.online
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm text-ink-muted">
          <Link
            href="/"
            className="rounded-full px-3 py-1.5 hover:bg-ink/5 hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            目录
          </Link>
          <Link
            href="/about"
            className="rounded-full px-3 py-1.5 hover:bg-ink/5 hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}
