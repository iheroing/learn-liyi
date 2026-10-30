type Props = {
  src: string;
  alt: string;
  caption: string;
};

export function LessonFigure({ src, alt, caption }: Props) {
  if (!src) return null;
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-ink/10 bg-paper-elevated shadow-soft">
      <div className="relative w-full bg-paper-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="px-4 py-3 sm:px-5 text-sm text-ink-muted leading-relaxed border-t border-ink/8">
        {caption}
      </figcaption>
    </figure>
  );
}
