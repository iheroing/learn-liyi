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
  "sunk-cost": {
    figures: [
      {
        src: "/illustrations/sunk-cost.svg",
        alt: "沉没成本机制对照：错算把已沉没投入塞进继续成本，正解只比未来增量并划掉沉没",
        caption:
          "左：把已花掉的塞进「继续」的账，更易硬撑。右：沉没写进账本再划掉，只比从现在起的增量成本与收益。",
        afterHeading: "",
      },
      {
        src: "/illustrations/sunk-cost-theater-lit.svg",
        alt: "剧场季票文献向重绘：预付价格越高，随后六个月到场次数越多",
        caption:
          "文献向示意（Arkes & Blumer, 1985）：购票时付得更多的观众，随后六个月到场更多——更贵的沉没，对应更强的「必须用掉」压力。柱高为方向示意，非原文精确次数。DOI: 10.1016/0749-5978(85)90049-4。",
        afterHeading: "在算什么",
      },
      {
        src: "/illustrations/sunk-cost-metaphor.jpg",
        alt: "隐喻插图：空座位上搁着未用的票，窗外暴风雪",
        caption:
          "票已买、窗外暴风雪：去或不去都拿不回票款；真正该比的是今晚出门的辛苦，和看球的好处。",
        afterHeading: "别搞错的地方",
      },
    ],
    diagram: "/illustrations/sunk-cost.svg",
    diagramAlt: "沉没成本机制对照：错算把已沉没投入塞进继续成本，正解只比未来增量并划掉沉没",
    diagramCaption: "左：把已花掉的塞进「继续」的账。右：沉没划掉，只比从现在起的增量。",
    icon: "/icons/domain-economics.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "week-review-1101": {
    figures: [
      {
        src: "/illustrations/week-review-triad.svg",
        alt: "三课决策输入总图：概率校准、检索练习、沉没成本汇入干净的决策输入",
        caption:
          "本周三课都在改决策输入：校准管对账、检索管提取、沉没管下一步只比增量——先让输入干净，再谈更大策略。",
        afterHeading: "",
      },
      {
        src: "/illustrations/week-review-trap.svg",
        alt: "三课互相绊脚链条：校准×检索、校准×沉没、检索×沉没，以及拆开先改一件",
        caption:
          "叠在同一件事上常互相推一把：再读抬自信却标错对象；已投入污染成功概率；卡顿感推回再读。拆开做，先改最痛的一件。",
        afterHeading: "怎么互相绊脚",
      },
      {
        src: "/illustrations/week-review-metaphor.jpg",
        alt: "隐喻插图：桌上三张输入卡片与空白策略本，暗示先整理输入再谈策略",
        caption:
          "三张干净输入摆好，再写策略本：数字能对账、知识能提取、已沉没的不绑下一步。",
        afterHeading: "三句自检",
      },
    ],
    diagram: "/illustrations/week-review-triad.svg",
    diagramAlt: "三课决策输入总图：概率校准、检索练习、沉没成本汇入干净的决策输入",
    diagramCaption: "校准、检索、沉没汇入干净的决策输入。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "planning-fallacy": {
    figures: [
      {
        src: "/illustrations/planning-fallacy-outside-view.svg",
        alt: "点线示意：内部估计 3 天，近三次同类交付实际 9、11、14 天，中位数 11 天",
        caption:
          "脑内剧本说三天，同类事的实际用时说十一天左右。先拿参照类的中位数当基准，再谈这次能不能更快。数字来自课文自测题的假设算例。",
        afterHeading: "在算什么",
      },
      {
        src: "/illustrations/planning-fallacy-buehler.svg",
        alt: "柱状重绘：毕业论文一切顺利预测 27.4 天、最可能预测 33.9 天、一切不顺预测 48.6 天、实际完成 55.5 天",
        caption:
          "Buehler, Griffin & Ross（1994）研究 1：学生的「最可能」预测约 34 天，实际平均约 56 天，连「一切不顺」的预测都没兜住。按常被引用的均值重绘。",
        afterHeading: "别搞错的地方",
      },
      {
        src: "/illustrations/planning-fallacy-steps.svg",
        alt: "三步流程：选参照类、看实际结果分布、把本次锚到分布上",
        caption:
          "参照类预测不取消计划，只改计划上的数字从哪来。步骤参考 Flyvbjerg（2006）。",
        afterHeading: "下次估工期做这几步",
      },
    ],
    diagram: "/illustrations/planning-fallacy-outside-view.svg",
    diagramAlt: "内部估计与参照类实际用时对比",
    diagramCaption: "先问同类事以前实际花多久，再决定这次报多少。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "batna": {
    figures: [
      {
        src: "/illustrations/batna-zopa.svg",
        alt: "续租示例数轴：房东保留点约 5075、租客保留点约 5633，中间可成交区间，报价 5800 在区间外",
        caption:
          "把两边的退路都折成保留点：重叠段是可成交区间。5800 落在区间外，多半是试探。数字来自课文假设算例。",
        afterHeading: "在算什么",
      },
      {
        src: "/illustrations/batna-alt-strength.svg",
        alt: "文献向柱状示意：没有退路、弱替代、强替代时谈成条件依次更好",
        caption:
          "文献向示意（Pinkley, Neale & Bennett, 1994 等）：有无替代、替代好坏，都会推谈判结果。柱高只表示方向，非原文精确分数。",
        afterHeading: "别搞错的地方",
      },
      {
        src: "/illustrations/batna-metaphor.jpg",
        alt: "隐喻插图：左侧只盯桌上报价，右侧先摸清替代房与钥匙",
        caption:
          "桌上的硬气，多半不来自嘴皮，而来自上桌前已经摸实的那条退路。",
        afterHeading: "上桌前做这五步",
      },
    ],
    diagram: "/illustrations/batna-zopa.svg",
    diagramAlt: "续租示例数轴：可成交区间与保留点",
    diagramCaption: "保留点来自真会走的退路；重叠越大越好谈。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "regression-to-the-mean": {
    figures: [
      {
        src: "/illustrations/regression-scatter.svg",
        alt: "两次模考散点图（模拟数据，r≈0.5）：第一次最低和最高的一批，第二次平均都往总体均值 70 分靠拢",
        caption:
          "模拟数据、没有任何干预：按第一次成绩挑出的最低一批平均从 56 涨到 62，最高一批从 81 掉到 75。两次相关越低，往回走得越多。",
        afterHeading: "在算什么",
      },
      {
        src: "/illustrations/regression-metaphor.jpg",
        alt: "隐喻插图：远处特别高的浪和特别低的浪谷，靠近中间水平线时都变平",
        caption:
          "极端的那一次里，运气往往站在同一边；下一次运气重新抽签，高浪和低谷都会往平常的水位靠。",
        afterHeading: "别搞错的地方",
      },
      {
        src: "/illustrations/regression-control.svg",
        alt: "对照设计柱状图（示意数据）：最差 30 人随机分两组，对照组涨 6 分是自然回归，加练班多出的 5 分才是课程作用",
        caption:
          "示意数据：两组都因「最差」被挑中再随机分开，都会回升。照常组的涨幅是自然回归，加练班多出来的那一截才算课程的作用。",
        afterHeading: "下次怎么判断",
      },
    ],
    diagram: "/illustrations/regression-scatter.svg",
    diagramAlt: "两次模考散点图：被挑出两端的平均分往均值回归",
    diagramCaption: "按极端值挑出的一批，下次平均往均值靠。",
    icon: "/icons/domain-probability.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
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
  if (domain.includes("经济")) {
    return "/icons/domain-economics.svg";
  }
  if (domain.includes("回顾")) {
    return "/icons/domain-default.svg";
  }
  if (domain.includes("沟通") || domain.includes("谈判")) {
    return "/icons/domain-default.svg";
  }
  return "/icons/domain-default.svg";
}
