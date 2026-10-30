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
        className="border-t-2 border-ink pt-3 text-[0.78rem]"
      >
        <p className="kicker mb-2.5">本课目录</p>
        <ol className="space-y-0.5 border-l border-ink/15">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex gap-2 pl-3 py-1.5 -ml-px border-l-2 border-transparent hover:border-accent text-ink-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <span className="shrink-0 w-4 text-[0.62rem] tabular-nums text-ink-faint group-hover:text-accent pt-0.5">
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
      className="border border-ink/12 bg-paper-elevated px-3.5 py-3.5 sm:px-4"
    >
      <p className="kicker mb-2.5">本课目录</p>
      <ol className="grid gap-0.5 sm:grid-cols-2">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex gap-2 px-1 py-1.5 text-sm text-ink-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <span className="shrink-0 w-4 text-[0.62rem] tabular-nums text-ink-faint pt-0.5">
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
