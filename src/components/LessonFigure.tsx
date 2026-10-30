type Props = {
  src: string;
  alt: string;
  caption: string;
};

export function LessonFigure({ src, alt, caption }: Props) {
  if (!src) return null;
  return (
    <figure className="my-7 max-w-reading">
      <div className="relative w-full border border-ink/12 bg-paper-elevated">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="mt-2.5 pt-2 border-t border-ink/15 text-[0.8125rem] text-ink-muted leading-relaxed text-left">
        <span className="kicker mr-2 text-[0.62rem] align-baseline">图</span>
        {caption}
      </figcaption>
    </figure>
  );
}
