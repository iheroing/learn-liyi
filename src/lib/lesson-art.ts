export type LessonArt = {
  diagram: string;
  diagramAlt: string;
  diagramCaption: string;
  icon: string;
  coverTint: string;
};

const bySlug: Record<string, LessonArt> = {
  "probability-calibration": {
    diagram: "/illustrations/calibration.svg",
    diagramAlt: "概率校准折线图：口头把握对实际成真比例，过置信折线在对角线下方",
    diagramCaption: "虚线是完美校准；实线示意过置信——口头把握系统性偏高。",
    icon: "/icons/domain-probability.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "retrieval-practice": {
    diagram: "/illustrations/retrieval.svg",
    diagramAlt: "检索练习斜率图：再读与合上再想在即时与一周后的对比",
    diagramCaption: "再读即时更高、延后掉得快；合上再想即时更难，一周后通常更牢。",
    icon: "/icons/domain-learning.svg",
    coverTint: "from-sage/20 via-paper-elevated to-paper-elevated",
  },
};

export function getLessonArt(slug: string): LessonArt {
  return (
    bySlug[slug] ?? {
      diagram: "",
      diagramAlt: "",
      diagramCaption: "",
      icon: "/icons/domain-default.svg",
      coverTint: "from-ink/5 via-paper-elevated to-paper-elevated",
    }
  );
}

export function iconForDomain(domain: string): string {
  if (domain.includes("概率") || domain.includes("决策")) {
    return "/icons/domain-probability.svg";
  }
  if (domain.includes("学习")) {
    return "/icons/domain-learning.svg";
  }
  return "/icons/domain-default.svg";
}
