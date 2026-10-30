import type { TocItem } from "@/lib/lessons";

type TocProps = {
  items: TocItem[];
  variant?: "panel" | "rail";
};

export function Toc({ items, variant = "panel" }: TocProps) {
  if (!items.length) return null;

  if (variant === "rail") {
    return (
      <nav
        aria-label="本课目录"
        className="rounded-xl border border-ink/10 bg-paper-elevated p-3.5 shadow-soft text-[0.8125rem]"
      >
        <p className="text-[0.65rem] font-semibold tracking-[0.1em] text-ink-faint mb-2.5 px-0.5">
          本课目录
        </p>
        <ol className="space-y-0.5">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex gap-2 rounded-lg px-2 py-1.5 text-ink-muted hover:bg-accent/5 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <span className="shrink-0 w-4 text-[0.65rem] tabular-nums text-ink-faint group-hover:text-accent pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{item.text}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  return (
    <nav
      aria-label="本课目录"
      className="rounded-xl border border-ink/10 bg-paper-elevated p-3.5 sm:p-4 shadow-soft"
    >
      <p className="text-[0.65rem] font-semibold tracking-[0.1em] text-ink-faint mb-2.5">
        本课目录
      </p>
      <ol className="grid gap-0.5 sm:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex gap-2 rounded-lg px-2 py-1.5 text-sm text-ink-muted hover:bg-accent/5 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <span className="shrink-0 w-4 text-[0.65rem] tabular-nums text-ink-faint pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-snug">{item.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
