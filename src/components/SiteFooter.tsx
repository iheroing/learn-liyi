import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/10">
      <div className="mx-auto max-w-reading px-5 py-10 text-sm text-ink-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p>© {new Date().getFullYear()} 李老师 · 每日高收益知识课</p>
        <p className="flex gap-4">
          <Link href="https://www.liyi.online" className="hover:text-ink transition-colors">
            liyi.online
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            关于本站
          </Link>
        </p>
      </div>
    </footer>
  );
}
