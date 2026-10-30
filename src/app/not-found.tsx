import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-shell px-5 sm:px-8 py-24 text-center">
      <h1 className="font-serif text-3xl text-ink mb-3">页面不存在</h1>
      <p className="text-ink-muted mb-8">这期课可能还没发布，或链接写错了。</p>
      <Link
        href="/"
        className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-paper hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        回目录
      </Link>
    </div>
  );
}
