import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-2 border-ink/80 bg-paper">
      <div className="mx-auto max-w-shell px-4 sm:px-6 py-5 text-[0.8125rem] text-ink-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="font-serif text-ink/80">
          © {new Date().getFullYear()} 李老师 · 每日高收益知识课
        </p>
        <p className="flex gap-4">
          <Link
            href="https://www.liyi.online"
            className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
          >
            liyi.online
          </Link>
          <Link
            href="/about"
            className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-sm"
          >
            关于本站
          </Link>
        </p>
      </div>
    </footer>
  );
}
