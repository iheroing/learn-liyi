import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-paper/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto flex max-w-reading items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="group">
          <span className="block font-serif text-lg tracking-tight text-ink group-hover:text-accent transition-colors">
            每日高收益知识课
          </span>
          <span className="block text-xs text-ink-muted mt-0.5">
            learn.liyi.online
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-ink-muted">
          <Link href="/" className="hover:text-ink transition-colors">
            目录
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}
