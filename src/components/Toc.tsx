import type { TocItem } from "@/lib/lessons";

type TocProps = {
  items: TocItem[];
  variant?: "panel" | "rail";
};

export function Toc({ items, variant = "panel" }: TocProps) {
  if (!items.length) return null;

  if (variant === "rail") {
    return (
      <nav aria-label="本课目录" className="text-sm">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-faint mb-3">
          本课目录
        </p>
        <ol className="relative space-y-0 border-l border-ink/10">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group relative flex gap-3 py-1.5 pl-4 -ml-px text-ink-muted hover:text-accent transition-colors border-l-2 border-transparent hover:border-accent focus-visible:outline-none focus-visible:border-accent"
              >
                <span className="shrink-0 w-5 text-[0.7rem] tabular-nums text-ink-faint group-hover:text-accent pt-0.5">
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
      className="rounded-2xl border border-ink/10 bg-paper-elevated p-4 sm:p-5 shadow-soft"
    >
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-faint mb-3">
        本课目录
      </p>
      <ol className="grid gap-1 sm:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex gap-2.5 rounded-lg px-2 py-1.5 text-sm text-ink-muted hover:bg-accent/5 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <span className="shrink-0 w-5 text-[0.7rem] tabular-nums text-ink-faint pt-0.5">
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
