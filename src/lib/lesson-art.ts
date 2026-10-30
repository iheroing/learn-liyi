export type LessonFigureSpec = {
  src: string;
  alt: string;
  caption: string;
  /** Insert after the section whose h2 text includes this (CJK ok). Empty = after first section. */
  afterHeading: string;
};

export type LessonArt = {
  figures: LessonFigureSpec[];
  /** @deprecated kept for callers that still read single diagram */
  diagram: string;
  diagramAlt: string;
  diagramCaption: string;
  icon: string;
  coverTint: string;
};

const bySlug: Record<string, LessonArt> = {
  "probability-calibration": {
    figures: [
      {
        src: "/illustrations/calibration.svg",
        alt: "概率校准折线图：口头把握对实际成真比例，过置信折线在对角线下方",
        caption:
          "虚线是完美校准；实线示意过置信——口头把握系统性偏高。示意方向，非某次实验精确点。",
        afterHeading: "",
      },
      {
        src: "/illustrations/calibration-overconfidence-lit.svg",
        alt: "过置信文献向重绘：各置信度分桶上口头把握高于实际正确率",
        caption:
          "文献向示意：分桶后口头把握常高于实际正确率（过置信）。重绘自常见校准图思路，非 Lichtenstein & Fischhoff（1980）原文精确数据；DOI: 10.1016/0030-5073(80)90052-5。",
        afterHeading: "在算什么",
      },
      {
        src: "/illustrations/calibration-metaphor.jpg",
        alt: "隐喻插图：会上口头表态把握，与事后安静对账对照",
        caption:
          "口头把握 vs 事后对账：会上说「七成」，价值在揭晓后把同一档置信与结果并排记下。",
        afterHeading: "别搞错的地方",
      },
    ],
    diagram: "/illustrations/calibration.svg",
    diagramAlt: "概率校准折线图：口头把握对实际成真比例，过置信折线在对角线下方",
    diagramCaption: "虚线是完美校准；实线示意过置信——口头把握系统性偏高。",
    icon: "/icons/domain-probability.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "retrieval-practice": {
    figures: [
      {
        src: "/illustrations/retrieval.svg",
        alt: "检索练习斜率图：再读与合上再想在即时与一周后的对比",
        caption:
          "再读即时更高、延后掉得快；合上再想即时更难，一周后通常更牢。示意方向，域 30–100。",
        afterHeading: "",
      },
      {
        src: "/illustrations/retrieval-testing-effect-lit.svg",
        alt: "测试效应文献向重绘：即时再学占优、延后先测占优",
        caption:
          "文献向示意（Roediger & Karpicke, 2006）：即时测验上再学常更好；延后测验上先测过的组常更好。柱高为方向示意，非原文精确百分比。DOI: 10.1111/j.1467-9280.2006.01693.x。",
        afterHeading: "在练什么",
      },
      {
        src: "/illustrations/retrieval-metaphor.jpg",
        alt: "隐喻插图：合上书回想，与低头再读对照",
        caption:
          "合上再想 vs 再读一遍：短期熟悉感会骗人；若在意几天后还能用，主动捞一次通常更划算。",
        afterHeading: "别搞错的地方",
      },
    ],
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
      figures: [],
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
