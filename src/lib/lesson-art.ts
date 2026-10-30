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
    diagramAlt: "概率校准示意：口头把握对实际成真比例，过置信落在对角线下方",
    diagramCaption: "完美校准落在对角线上；口头把握系统性偏高，就会落在线下方。",
    icon: "/icons/domain-probability.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "retrieval-practice": {
    diagram: "/illustrations/retrieval.svg",
    diagramAlt: "检索练习示意：再读一遍对照合上材料主动回想",
    diagramCaption: "再读抬高「好像会了」的感觉；合上再想，对几天后的提取通常更划算。",
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
