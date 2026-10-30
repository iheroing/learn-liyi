import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-paper/50">
      <div className="mx-auto max-w-shell px-5 sm:px-8 py-8 text-sm text-ink-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p>© {new Date().getFullYear()} 李老师 · 日课</p>
        <p className="flex gap-4">
          <Link
            href="https://www.liyi.online"
            className="hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded"
          >
            liyi.online
          </Link>
          <Link
            href="/about"
            className="hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded"
          >
            关于本站
          </Link>
        </p>
      </div>
    </footer>
  );
}
