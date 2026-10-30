import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-shell px-5 sm:px-8 py-20">
      <div className="max-w-prose border-t-2 border-ink pt-5">
        <p className="kicker mb-2">404</p>
        <h1 className="font-serif text-[1.75rem] text-ink mb-2 tracking-tight">
          页面不存在
        </h1>
        <p className="text-ink-muted mb-6 leading-relaxed">
          这期课可能还没发布，或链接写错了。
        </p>
        <Link
          href="/"
          className="inline-flex border border-ink bg-ink px-4 py-2 text-[0.8125rem] text-paper hover:bg-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          回目录
        </Link>
      </div>
    </div>
  );
}
