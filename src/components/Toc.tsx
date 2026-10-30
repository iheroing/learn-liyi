import type { TocItem } from "@/lib/lessons";

export function Toc({ items }: { items: TocItem[] }) {
  if (!items.length) return null;
  return (
    <nav
      aria-label="本课目录"
      className="rounded-xl border border-ink/10 bg-paper-elevated p-4 sm:p-5 shadow-soft"
    >
      <p className="text-xs uppercase tracking-wider text-ink-muted mb-3">
        本课目录
      </p>
      <ol className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-ink-muted hover:text-accent transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
