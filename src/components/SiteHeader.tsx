import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-paper/85 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-4 sm:px-6 py-2.5">
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-lg"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent font-serif text-sm font-semibold"
            aria-hidden
          >
            日
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-medium text-ink group-hover:text-accent transition-colors">
              日课
            </span>
            <span className="block text-[0.7rem] text-ink-faint">
              learn.liyi.online
            </span>
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
