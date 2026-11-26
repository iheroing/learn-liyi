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

  "spaced-practice": {
    figures: [
      {
        src: "/illustrations/spaced-practice-scene.svg",
        alt: "假设的情况。你上完一个周末课，讲义很厚。周五晚上把重点从头到尾看了两遍，感觉都眼熟了；周六下午又连着过了一遍，当晚觉得挺稳。两周后要做一个小测验，你翻开第一页，只剩下「当时好像会」的印象，关键步骤接不上。三遍都看了，总时间也不少。问题是：第二遍、第三遍都挤在前后大约一天里。到真正要用的那天，中间没有一次隔开的提取。",
        caption:
          "周五晚看两遍、周六再看一遍，当晚觉得挺稳；两周后却只剩下「当时好像会」。问题不是看得少，而是第二遍挤在同一天附近。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/spaced-practice-rule.svg",
        alt: "Cepeda 等人 2008 年的回忆结果重绘：对同一个测验时间，间隔从 0 天往上加，成绩先升后降，不是越隔越久越好。他们实际用过的间隔里，回忆最好的是：测验在 7、35、70、350 天后，分别对应 1、11、21、21 天；插值大约是 3、8、12、27 天，约占等待时间的 43%、23%、17%、8%。和间隔为 0 天相比，较合适的间隔让最后的回忆成绩提高了 64%（d = 1.1）。这里只改间隔，学习次数相同。本图重绘自原文图 3a（回忆），曲线位置按原图读点，不是作者公开的原始数据表。这只描述该实验：冷门知识、学到能背出、总共复习一次，不是所有科目的精确课表。约一周后要用，间隔大约一两天到三天；约五周后，大约一周到十天；约十周后，大约两周；约一年后，大约三四周。",
        caption:
          "同一测验时间下，间隔从 0 天往上加，回忆先升后降。想撑得越久，较合适的间隔也越长，但占等待时间的比例会下降。重绘自 Cepeda 等人 2008，图 3a。",
        afterHeading: "两次学习之间留出间隔",
      },
      {
        src: "/illustrations/spaced-practice-steps.svg",
        alt: "第一步，写下材料，以及你真正要用它的日期；考试、汇报、动手做都可以，先算出大约还有多久，不要只写「有空再看」。第二步，看第二遍现在排在哪一天；如果还排在同一天，把它挪走，总时间可以不变，改的是间隔。第三步，按「要用的那天」粗选一个间隔：约一周后，大约一两天到三天；约五周后，大约一周到十天；约十周后，大约两周；约一年后，大约三四周。第四步，到点先自己提，再核对；合上材料，试着写出步骤、定义或操作，再对照，不要再看一遍就放过。第五步，用完一次就微调；到点几乎想不起来，下次缩短间隔；提得很顺、几乎不用想，可以略延长。若还要第三次，插在第二次和要用的那天之间，不要又堆回同一晚。",
        caption:
          "先写下要用的日期，把挤在同一天的第二遍挪开，按要用的那天粗选间隔；到点先自己提再核对，用完再微调。",
        afterHeading: "今天按这五步改复习安排",
      },
    ],
    diagram: "/illustrations/spaced-practice-scene.svg",
    diagramAlt: "周五到周六连着看了三遍，当晚觉得挺稳；两周后的测验却只剩下「当时好像会」。",
    diagramCaption: "同一份材料要看第二遍时，别当天连着再看完。",
    icon: "/icons/domain-learning.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "text-contrast": {
    figures: [
      {
        src: "/illustrations/text-contrast-scene.svg",
        alt: "假设的情况。你做完一页投影片，标题用了彩色，正文改成浅灰，在电脑前看，觉得比纯黑更干净。到了会议室，灯没关完，后排有人问：「后面几行是什么？」你走近屏幕，才发现正文几乎贴在白底上。这时很容易先去换一种更粗的字体，或给字描边。更该先核对的，是字的颜色和背景之间，明暗到底差了多少。",
        caption:
          "电脑前觉得浅灰更干净，后排却可能已经看不清。这时先查明暗差，再考虑换字体。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/text-contrast-rule.svg",
        alt: "对比度量的不是红和蓝差得远不远，而是两块颜色的相对亮度差了多少。WCAG 2.2 规定：普通正文至少 4.5:1，大号字至少 3:1。浅灰 #888888 配白底约 3.5:1，大标题也许刚过 3:1，正文却过不了 4.5:1；#767676 配白底约 4.5:1，刚够正文这条线。白底上写纯红约 4.0:1，看起来很跳，普通正文仍然不够；纯红配纯绿约 2.9:1，大字也不够。颜色再鲜艳，两边一样亮，还是看不清。不要四舍五入，4.499:1 不能算作达到 4.5:1。",
        caption:
          "对比度看的是明暗差。普通正文至少 4.5:1，大字至少 3:1。浅灰或纯红配白底都可能看起来还行，正文却仍不够；不够就先改深浅。",
        afterHeading: "看的是明暗差，不是色相鲜不鲜艳",
      },
      {
        src: "/illustrations/text-contrast-steps.svg",
        alt: "第一步，拿出最近要发出去的一页，圈出正文和注释，不要只看大标题。第二步，用对比度检查器测每一对字色和底色，看正文有没有到 4.5:1，大字有没有到 3:1，不必手算。第三步，不够就先改深浅，先不要换字体。第四步，再看是不是只靠颜色在传意思，比如只用红和绿表示对错，要补上符号、文字或深浅差别。第五步，在真实条件下再看一遍：开着灯投影、打印出一页，或拿到窗边用手机看；还费劲，就再加大正文，或再拉开明暗，不要先加特效。",
        caption:
          "先圈出正文和注释并测对比度。不够就先改深浅，再检查是不是只靠颜色传意思，最后在真实光线下再看一遍。",
        afterHeading: "今天按这五步看",
      },
    ],
    diagram: "/illustrations/text-contrast-scene.svg",
    diagramAlt: "电脑前觉得浅灰更干净，后排却可能已经看不清。先查明暗差，再考虑换字体。",
    diagramCaption: "字看起来发灰或看不清时，先查它和背景的明暗差够不够。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },

  "comparative-advantage": {
    figures: [
      {
        src: "/illustrations/comparative-advantage-scene.svg",
        alt: "一个假设的情况。你写一份讲义要 2 小时，同事要 6 小时；改一页练习排版，你要半小时，同事要 1 小时。两样你都更快。直觉是这些事交给别人更慢，还不如自己做。于是排版、改图、回邮件，凡是你做得动的，都堆到你这里，结果讲义反而写不完。今天要分开两问：谁更快，只说明绝对优势；谁做更合适，要看谁做这件事放弃得更少。后者才该决定分工。",
        caption:
          "两样你都更快，并不等于都该自己做。更快只说明绝对优势；该不该由你做，要看你为此少做的那件事，是不是比对方少做的更贵。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/comparative-advantage-rule.svg",
        alt: "你改一页排版要半小时，这半小时本可以写完 1/4 份讲义，机会成本是 1/4 份讲义。同事改一页要 1 小时，他 1 小时只能写完 1/6 份讲义，机会成本是 1/6 份讲义。1/6 比 1/4 小，排版的比较优势在同事这边；你写一份讲义只放弃 4 页排版，同事要放弃 6 页，讲义的比较优势在你这边。两人都有 12 小时时，若各做各的、时间对半拆，合计 4 份讲义、18 页；若按比较优势分工，合计仍是 4 份讲义，排版变成 20 页。同样的人、同样的时间，只把你机会成本更高的那部分挪出去，两人加在一起能完成的事就多了。",
        caption:
          "改一页，你放弃 1/4 份讲义，同事只放弃 1/6 份，排版的比较优势在他那边。按这个分工，同样 12 小时，讲义还是 4 份，排版从 18 页变成 20 页。",
        afterHeading: "谁更快，和谁做更合适，不是同一件事",
      },
      {
        src: "/illustrations/comparative-advantage-steps.svg",
        alt: "第一步，写下两件正在抢同一段时间的事，以及谁还可以接手；只写正在抢时间的那两件，不要列愿望清单。第二步，对每个能做的人写一句：他做这件事要放弃什么，填真心会去做的次优项，不要只写节约时间。第三步，比谁放弃得更少；放弃更少的人有比较优势，你更快并不自动等于你放弃得更少。第四步，把你放弃得更多的事交出去，自己留下机会成本更低的那一件。第五步，估一下交接成本；说明、对齐标准和返工如果明显超过省下的时间，就维持现状，只挪出交接最便宜的那一件。",
        caption:
          "先写下两件正在抢时间的事和各自会放弃什么，把你放弃得更多的交出去，并估一下交接成本。",
        afterHeading: "今天按这五步看",
      },
    ],
    diagram: "/illustrations/comparative-advantage-scene.svg",
    diagramAlt: "两样你都更快，并不等于都该自己做：谁更快和谁做更合适，不是同一件事。",
    diagramCaption: "别把「我更快」直接当成「该我做」。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },

  "password-manager": {
    figures: [
      {
        src: "/illustrations/password-manager-scene.svg",
        alt: "假设的情况，来自美国网络安全局（CISA）面向公众的密码建议里用过的例子。左侧：有人收到银行短信，说有一笔 700 美元转账她没申请。她想登录银行取消，密码已经失效；再想通过邮箱拿重置链接，邮箱也进不去。右侧：后来才知道，她在邮箱和银行用了同一个密码，而这组密码出现在另一家公司的泄露名单上。一个本来不怎么重要的网站把「邮箱 + 密码」漏了出去，有人拿同一组去撞更重要的账号。邮箱一旦被打开，重置信就能改掉银行、网盘，以及绑在这封邮箱上的其他服务。",
        caption:
          "一个不太重要的网站把「邮箱 + 密码」漏出去，而邮箱和银行用了同一组，重置信就能改掉更重要的账号。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/password-manager-rule.svg",
        alt: "复用会把泄露从一处传到另一处。如果多处共用同一组密码，一个不怎么重要的网站泄露「邮箱 + 密码」后，对方可以拿同一组打开邮箱，再用重置信改掉银行和支付。如果每个账号各用各的，同一处泄露会停在原网站，打不开邮箱和银行。密码管理器做三件事：生成一个又长又乱、只用于这一个网站的密码；把它们加密保存起来；通常只在对得上的网站才自动填入，减少把密码打进仿冒页面。你只需记住主密码，并给管理器打开两步验证。CISA 的建议是够长、随机、每个账号不同；生成密码默认至少 16 位。",
        caption:
          "复用会让一处泄露牵连其他账号。管理器为每个网站生成并保存单独密码，你只记主密码，并打开两步验证。",
        afterHeading: "复用会把泄露从一处传到另一处",
      },
      {
        src: "/illustrations/password-manager-steps.svg",
        alt: "不必今天清完所有账号，先把最危险的那截链打断。第一步，选定一个管理器：自己长期用的设备优先用系统或浏览器自带的；设备和浏览器不统一，再选能跨端同步的；先不要在公用电脑上开启保存密码。第二步，设一把只在这一处用的主密码，并打开两步验证。第三步，先改邮箱密码，用管理器生成又长又乱、只用于这个邮箱的密码；邮箱是许多账号的重置入口，它先独立，后面的链才会断。第四步，再改银行、支付、网盘以及能登录许多别的服务的账号，其余不必今天清完。第五步，确认管理器坏了或手机丢了时还能拿回这些密码。",
        caption:
          "不必今天清完。先选定管理器并打开两步验证，先改邮箱，再改银行和支付，并确认管理器坏了还能拿回这些密码。",
        afterHeading: "今天按这五步做",
      },
    ],
    diagram: "/illustrations/password-manager-scene.svg",
    diagramAlt: "CISA 用过的例子：邮箱和银行共用同一组密码，这组密码从另一家公司泄露后，邮箱和银行都会失去。",
    diagramCaption: "一个网站泄露，不该能直接打开你的邮箱和支付。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },

  "week-review-1122": {
    figures: [
      {
        src: "/illustrations/week-review-1122-map.svg",
        alt: "三列总图：利益与立场和古德哈特定律都是别把拿来代表的那一项当成原来那件事；混杂和基础比率都是别被「看起来已经对上」推着下结论；如果—那么计划和一氧化碳都容易把启动交给一个可能不会以那种样子出现的信号。三列汇入同一句：表面上对上了，先问它还是不是你要的那件事。",
        caption:
          "六课问的是同一类事——条件、线索或数字表面上对上了，它还是不是你要的那件事？还没问清楚，先别按表面上对上的那一项去行动。",
        afterHeading: "本周六课",
      },
      {
        src: "/illustrations/week-review-1122-pairs.svg",
        alt: "三对容易混的课：利益与立场和古德哈特定律都是别把代表的那一项当成原来那件事；混杂和基础比率都是别被「看起来已经对上」推着下结论；如果—那么计划和一氧化碳都容易把启动交给一个可能不出现的信号。",
        caption:
          "分开再叠用。只在已经说出口的条件或数字上加码，和看见数字涨了就当成事情变好，都是还没回到原来那件事；一起变或线索很像，先问第三因素和原来有多常见；等有空再开始，和等闻到再离开，是同一类等待。",
        afterHeading: "怎么互相绊脚",
      },
      {
        src: "/illustrations/week-review-1122-steps.svg",
        alt: "三句自检：盯着的是已经说出口的条件或数字，还是后面那件真要解决的事；是被「一起变了」或「这条很像」推着走，还是先问了第三因素和原来有多常见；是在等一个更明显的信号，还是已经把启动动作写下来、或先做了。底部提示别六课并行，按最痛的那条选一个七天动作。",
        caption:
          "对着一件真事只问三句。别六课并行，按你最痛的那条选一个七天动作；条件、线索或数字表面上对上了，先问它还是不是你要的那件事。",
        afterHeading: "三句自检",
      },
    ],
    diagram: "/illustrations/week-review-1122-map.svg",
    diagramAlt: "六课收成一件事：表面上对上了，先问它还是不是你要的那件事",
    diagramCaption: "还没问清楚，先别按表面上对上的那一项去行动。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "goodhart": {
    figures: [
      {
        src: "/illustrations/goodhart-scene.svg",
        alt: "假设的情况。左侧：你给自己定了每天走八千步，或要求客服把平均通话时长压下去。过了两周，步数达标了，通话也短了。可一对才发现：步数里有一部分是把手机在包里颠出来的；电话变短，是因为更常被转走或提前结束，问题并没有真正解决。右侧：2016 年 9 月，美国消费者金融保护局（CFPB）公布对富国银行的处罚决定：该行用销售目标和奖励，推动员工向老客户多卖产品。据该行自行分析，2011 年 5 月至 2015 年 7 月间，员工开立了 1,534,280 个可能未经客户授权的存款账户，并提交了 565,443 份可能未经授权的信用卡申请；同期约 5,300 名员工因不当销售行为被解雇。CFPB 将两类账户合计为逾两百万，并处 1 亿美元罚款。被盯着涨上去的，是开户和产品数；它本来想代表的「客户需要并同意使用这些服务」，已经对不上了。",
        caption:
          "数字变好看了，原来要的那件事不一定变好。富国银行被盯着涨的是开户和产品数；它本来想代表的「客户需要并同意使用这些服务」，已经对不上了。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/goodhart-rule.svg",
        alt: "古德哈特定律。1975 年，英国经济学家 Charles Goodhart 在讨论英国货币管理时写道：一旦把观察到的统计规律拿来做控制手段，这条规律往往会崩掉。1997 年，人类学家 Marilyn Strathern 把这句话收成更常被引用的表述：一个指标一旦变成目标，它就不再是好指标。一个数字一开始能用，通常是因为它和你真正要的那件事一起变动。可一旦它被拿来排名、发奖金或决定去留，人就会直接去推这个数字。办法里，有一些真的把事做了；也有一些只让数字看起来好——提前挂断、只练会考的题、甚至开出客户不知道的账户。后一种一多，数字和原来那件事的关系就松了。图中用示意曲线表示：被当成考核目标之后，数字还可能继续变好看，原来要的那件事却不一定跟上；这是示意，不是某一次考核的实测数据。1979 年，心理学家 Donald Campbell 写过一条很接近的观察：一个定量社会指标，被拿来做社会决策的程度越高，它就越容易被扭曲，也越容易把本来要监测的过程带歪。不必先假定有人存心作假。就算大家都是好意，力气也会更多堆到被量到的那一块，没被量到的那一块就容易被放下。",
        caption:
          "一个指标一旦变成目标，它就不再是好指标。人会直接去推这个数字；只让数字好看的办法一多，它和原来那件事的关系就松了。",
        afterHeading: "指标被当成目标之后，往往就不再那么能代表原来那件事",
      },
      {
        src: "/illustrations/goodhart-steps.svg",
        alt: "五步，当你准备用一个数字来考核别人、比较方案，或监督自己时，先用大约 10 分钟写一遍。第一步，先写下你真正要的那件事，写成一句人话，不要先写指标，例如「客户愿意并实际在用对的产品」「把来电的问题处理完」「自己这周真的多走动」。第二步，另起一行，写下你准备盯着的那个数字，例如「新开账户数」「平均通话时长」「每天步数」「测验分数」，并标出它和上一句是不是同一件事。第三步，写出至少两种「数字变好、原来那件事没变好」的办法，越具体越好；谁在什么情况下，可以不改本质，只把数字做漂亮。写不出来，往往不是没有路，是还没往歪处想。第四步，再补一条不容易被同一方式带着走的核对，比如抽查一小部分真实个案、看一个会朝相反方向动的数字，或听当事人怎么说。第五步，决定这个数字还能不能单独当目标。如果第三步里的歪路很容易走通，就不要让这一个数字单独决定赏罚或去留。可以把它留作观察，配上第四步的核对；或者用一组会互相牵制的指标，而不是只换一个新的唯一目标。",
        caption:
          "准备用一个数字来考核或监督时，先用大约 10 分钟写一遍：真正要的事、准备盯的数字、至少两条歪路，再补一条不容易被同一方式带着走的核对。",
        afterHeading: "把一个数字当成目标之前，先写这五步",
      },
    ],
    diagram: "/illustrations/goodhart-scene.svg",
    diagramAlt: "假设的情况：左侧步数达标、通话变短，却可能是把手机颠出来或提前结束电话；右侧 2016 年 CFPB 对富国银行的处罚里，被盯着涨的是开户和产品数，和「客户需要并同意使用这些服务」已经对不上了。",
    diagramCaption: "数字变好看了，原来要的那件事不一定变好。富国银行被盯着涨的是开户和产品数；它本来想代表的「客户需要并同意使用这些服务」，已经对不上了。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "base-rate": {
    figures: [
      {
        src: "/illustrations/base-rate-scene.svg",
        alt: "假设的情况。左侧：你做了一次检测，或收到一个报警，对方还告诉你假阳性只有 5%，结果是阳性。第一反应常常是差不多可以确定了，也就是把假阳性率 5% 听成有病的机会是 95%。这两个数的分母并不是同一群人。右侧：1978 年，Casscells、Schoenberger 和 Graboys 在《新英格兰医学杂志》上，把这道题问了 60 位哈佛医学院附属医院的医生、住院医师和四年级医学生：某种病的出现率是 1/1000，检测方法的假阳性率是 5%。一个人呈阳性，而你对他的症状一无所知。他真正有这种病的机会有多大？60 人里，27 人（45%）回答 95%，算对的只有 11 人（18%）。在把灵敏度近似看成 100% 的前提下，更接近的答案大约是 2%。2014 年，Manrai 等人用同一道题问了 61 位医生和医学生，答对的是 14 人（23%），最常见的答案仍是 95%。",
        caption:
          "一条「看起来很准」的阳性，很容易把「这类事本来很少见」直接换成「差不多可以确定了」。1978 年这道题，60 人里 45% 答 95%，算对的只有 18%。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/base-rate-rule.svg",
        alt: "把 1000 人摊开，并假定灵敏度近似 100%。1000 人里，按 1/1000 的出现率，大约 1 人真有这种病，这 1 人会呈阳性。假阳性率 5%，意思是剩下大约 999 个没有病的人里，也会有大约 50 人呈阳性（0.05 × 999 ≈ 50）。呈阳性的一共大约 51 人，其中真有病的只有 1 人，大约是 2%，不是 95%。5% 听起来不大。可这件事一旦很少见，这 5% 就会落在一大群「没有这回事」的人身上，假阳性会比真阳性多得多。分母是所有呈阳性的人，不是口头上的那个准确率。",
        caption:
          "1000 人里约 1 人真有病并呈阳性，约 50 个没有病的人也会呈阳性。阳性约 51 人里，真有病的只有约 1 人，大约是 2%，不是 95%。",
        afterHeading: "先问原来有多常见，再看这条线索有多硬",
      },
      {
        src: "/illustrations/base-rate-steps.svg",
        alt: "五步，碰到一条很像的线索、一次阳性或一次报警，并且你准备据此做判断时，先用大约 10 分钟写一遍。第一步，写下你要判断的那件事，例如是不是得了这种病、这封信是不是真的来自银行、这次报警是不是真故障，先不要下结论。第二步，另起一行，写下这类事原来有多常见：在你正在看的这群人、这个场合里，大约多少人里会有一次；不知道就先写一个范围，或去查，不要跳过这一行。第三步，改成人数来算，写成「1000 个类似的情况里，大约有多少是真的」，不要只盯着百分比。第四步，再写入这条新线索：真有这回事时，这条线索会出现多少次；没有这回事时，它又会出现多少次。重点看第二句：假信号会落在多大一群人身上。第五步，看「出现这条线索」的那些情况里，真有这回事的占多少。分母是所有亮灯、呈阳性、看起来很像的情况，不是全部情况，也不是口头上的那个准确率。",
        caption:
          "准备据此做判断时，先用大约 10 分钟写一遍。先写出这类事原来有多常见，再把人数摊开，看出现这条线索的那些情况里，真有的占多少。",
        afterHeading: "准备下判断之前，先写这五步",
      },
    ],
    diagram: "/illustrations/base-rate-scene.svg",
    diagramAlt: "假设的情况：左侧把一次阳性、假阳性 5% 听成有病机会 95%；右侧 1978 年同一道题，60 位哈佛医院的医生和医学生里，45% 答 95%，算对的只有 18%，更接近的答案大约是 2%。",
    diagramCaption: "一条「看起来很准」的阳性，很容易把「这类事本来很少见」直接换成「差不多可以确定了」。1978 年这道题，60 人里 45% 答 95%，算对的只有 18%。",
    icon: "/icons/domain-probability.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "carbon-monoxide": {
    figures: [
      {
        src: "/illustrations/carbon-monoxide-scene.svg",
        alt: "假设的情况。左侧：入冬以后，屋里几个人同一天开始头痛、发困、想吐，没有发烧。大家以为是感冒，关紧窗户吃药，接着睡。这样会继续留在可能有问题的环境里。右侧：停电之后，有人把发电机放进车库，门开一条缝，觉得已经通风了；或者天冷，在室内烧炭取暖。这些做法当时看起来很方便，但屋里可能正在积一种你闻不到的气体。能开窗就开，但不要留在原处观察，先离开再查是不是一氧化碳。",
        caption:
          "没来由的头痛或发困，先别当感冒关窗接着睡。能开窗就开，但不要留在原处观察。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/carbon-monoxide-rule.svg",
        alt: "一氧化碳是一种没有颜色、也没有气味的气体。天然气加臭是为了让人发现漏气，一氧化碳本身没有味道，不要用鼻子当检测器。中毒最常见的症状是头痛、头晕、无力、反胃、呕吐、胸痛和意识混乱，常常被说成像感冒，但通常没有发烧。同一屋子里好几个人，甚至宠物，几乎同时出现类似症状，更要往这方面想。要靠两件事：出现没来由的上述症状时，先离开到空气流通的地方；在家里装并维护一氧化碳报警器。报警器响了，不要先去找源头，立即离开，到外面再求助。CDC 给出的美国数据是：每年有 400 多名美国人死于与火灾无关的意外一氧化碳中毒，另有超过 10 万人前往急诊，超过 1.4 万人住院。这是美国的统计，不是中国的数字，但机制是一样的。正在睡觉、喝醉或受其他物质影响的人，可能在出现症状之前就已经有生命危险。",
        caption:
          "一氧化碳没有颜色也没有气味，不能靠鼻子判断。要靠离开现场，再加上会响的报警器。",
        afterHeading: "你闻不到，不等于没有",
      },
      {
        src: "/illustrations/carbon-monoxide-steps.svg",
        alt: "五步。第一步，出现没来由的头痛、头晕、无力、反胃或意识混乱时，先离开。能开窗就开，但不要留在原处观察。把屋里的人都带到室外空气流通的地方，有宠物也带走。到外面再打当地急救或消防电话，在中国通常是 120 或 119，并说明怀疑是一氧化碳。第二步，报警器响了，同样先离开，不要先找哪台设备在漏；未经专业人员确认安全之前，不要回去。第三步，装报警器并确认它还在工作：每层都装，靠近睡觉的区域；每月用测试键试一次；整机按说明书更换，或大约每 5 年换一次。第四步，别在封闭或半封闭的地方烧燃料凑合。发电机不要放进家或车库，即使门窗开着也不行；只在室外使用，并距离门、窗和通风口 20 英尺以上，约 6 米。不要在室内烧炭，不要用燃气烤箱取暖，不要在连着房子的车库里让汽车一直开着。第五步，采暖设备、热水器和其他燃气、燃油或燃煤器具，以及烟囱、烟道，每年请合格技术人员检查、保养。",
        caption:
          "出现没来由的症状，或报警器响了，都是先离开再处理。发电机只在室外用，并离开门窗和通风口约 6 米。",
        afterHeading: "先做这几步",
      },
    ],
    diagram: "/illustrations/carbon-monoxide-scene.svg",
    diagramAlt: "假设的情况：左侧把没来由的头痛、发困当成感冒，关窗接着睡；右侧把发电机放进车库或在室内烧炭，当时看起来很方便，但屋里可能正在积一种你闻不到的气体。",
    diagramCaption: "没来由的头痛或发困，先别当感冒关窗接着睡。能开窗就开，但不要留在原处观察。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "confounding": {
    figures: [
      {
        src: "/illustrations/confounding-scene.svg",
        alt: "假设的情况。左侧：换了新枕头，同时开始提前半小时睡觉，晚饭后也不再喝咖啡。两周后睡得稳多了，于是认定是枕头的功劳。枕头可能有用，也可能几乎没用；提前睡和少咖啡是同时在变的事，它们自己就可能改善睡眠。只凭「换枕头之后变好了」，推不出一定是枕头导致的。右侧是教学里常用的说明：天气热的时候，冰淇淋销量和溺水人数常常一起升。有人据此说冰淇淋导致了溺水。图里温度同时指向这两件事：天热更想吃冰淇淋，也更常去游泳。先问有没有第三个因素同时推着两边。",
        caption:
          "只凭「换枕头之后变好了」，推不出一定是枕头导致的。冰淇淋和溺水一起升，更说得通的是温度同时推着两件事。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/confounding-rule.svg",
        alt: "上排区分相关和因果：相关只说明两件事一起变，不能单靠它证明或否定因果；因果要问，如果只改 A，其他条件差不多，B 会不会变。中排按 Hernán 和 Robins 的说法，把混杂写成暴露和结果有共同原因。图里共同原因 C 是温度，同时指向暴露 A 冰淇淋销量和结果 B 溺水人数；中间有一条虚线，表示看起来像 A 导致了 B。下排按 Bickel、Hammel 和 O'Connell（1975）对伯克利 1973 年秋季 12,763 份研究生申请的分析：合计男生录取率约 44%、女生约 35%，像是录取对女生不利；分到各院系再看，合计差异主要来自女生更常申请对男女申请人都更难进的院系。这是该文对当年这批数据的结论，不是对所有学校、所有年份的判断。底栏：相关是一起变，因果是「只改这一件，另一件会不会变」；观察里看到一起变，可能是因果，也可能只是共同原因在推，两种都不能靠「一起变」单独钉死。",
        caption:
          "混杂来自暴露和结果有共同原因。相关只说明一起变；因果要问：如果只改这一件，另一件会不会变。Bickel 等人（1975）：伯克利合计男生录取率约 44%、女生约 35%，差异主要来自女生更常申请更难进的院系。这是该文对当年数据的结论。",
        afterHeading: "一起变，不等于是它导致的",
      },
      {
        src: "/illustrations/confounding-steps.svg",
        alt: "五步，准备据此做一个决定时先用大约 10 分钟写一遍：把 A 和 B 写下来，一起变或先 A 后 B，先不要下结论；另起一行，列出可能同时推着两边的因素，至少写两条，写不出来就说明还没开始找共同原因；问一句，假如这些第三因素差不多，A 和 B 还会一起变吗；能只改一件事再看的，就不要只靠观察里的一起变，比如枕头可以先只换枕头，其他习惯先不动，再看睡眠；做不了这样的对比时，至少别把「一起变」直接当成行动理由，要行动就先写清还缺哪一条证据。",
        caption:
          "准备据此做一个决定时，先用大约 10 分钟写一遍。先列出可能同时推着两边的因素，再问：假如这些因素差不多，两件事还会一起变吗？",
        afterHeading: "准备据此行动之前，先写这五步",
      },
    ],
    diagram: "/illustrations/confounding-scene.svg",
    diagramAlt: "假设的情况：左侧换了枕头、同时改掉睡眠习惯后睡得更好，不能据此认定一定是枕头的功劳；右侧冰淇淋销量和溺水人数一起升，更说得通的是温度同时推着两件事。",
    diagramCaption: "只凭「换枕头之后变好了」，推不出一定是枕头导致的。冰淇淋和溺水一起升，更说得通的是温度同时推着两件事。",
    icon: "/icons/domain-probability.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "interests-vs-positions": {
    figures: [
      {
        src: "/illustrations/interests-vs-positions-scene.svg",
        alt: "假设的情况：春节去哪，家里两人卡住了。左侧两人争的是已经说出口的立场：一方坚持回老家，一方坚持去外地转几天，话已经说到「你就是不顾家里」「你就是想图自己舒服」，日程表还是空的。右侧是立场后面的利益：一方怕老人觉得被冷落，另一方连着加班后真的想换个环境。这两个利益未必不能同时照顾，比如提前回去吃顿团圆饭，后面再出去几天。只在「回」和「不回」上对打，这个办法根本进不了讨论。",
        caption:
          "只在「回」和「不回」上对打，别的办法进不了讨论。先问这个条件是为了解决什么问题。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/interests-vs-positions-rule.svg",
        alt: "上排：Fisher、Ury 和 Patton 在《Getting to Yes》里把立场定为你已经决定要的东西，把利益定为你为什么会做这个决定，包括需要、愿望、顾虑和害怕。同一个利益通常有好几条路；对立的立场背后，常常既有冲突的利益，也有其实相容的利益。中排用书中 1978 年戴维营谈判作说明，不是对那段历史的完整叙述：只看立场时，埃及坚持西奈一寸都不能留，以色列坚持必须留下一部分，按地盘折中两边都不能接受；落到利益上，一边要主权，一边要边境安全；后来的方案是全部归还埃及，同时大面积非军事化。下排按 Thompson 和 Hastie（1990）的结论：多数谈判者一上来就假定对方的利益和自己完全相反，像在分一块大小固定的蛋糕；能较早、较准确地看出对方利益的人，结果更好；相当一部分人甚至没发现双方利益其实完全相容，最后接受了更差的方案。底栏按 Thompson（1991）：在有可能让双方都更好的任务里，说明或询问利益都能让判断更准、方案也常对双方更有利；即使只有一方在做，共同结果也常能改善；主动说明的人并不必然吃亏。这是该研究条件下的结果，不能直接推论到所有你死我活的砍价。",
        caption:
          "立场是你已经决定要的，利益是你为什么会做这个决定。书中用戴维营说明：主权和安全不必互相取消。Thompson 和 Hastie（1990）：多数人一上来假定利益完全相反；能较早看清对方利益的人，结果更好。",
        afterHeading: "立场和利益差在哪",
      },
      {
        src: "/illustrations/interests-vs-positions-steps.svg",
        alt: "六步，当面谈之前先用 10 到 15 分钟写一遍：把双方已经说出口的立场各写一行，先不要改，也不要先折中；在自己的立场下面写，我要这个是为了保住什么、避免什么，至少写两条；用一句不带质问味道的话问对方同样的事，听完后用你的话复述一遍；把两边的利益并列看一遍，标出哪些其实不冲突，哪些才是真冲突；针对利益先列出至少三个能同时照顾两边的办法，再挑，不要立刻在原来的两个条件之间取中；用退路做最后一道筛，比谈不成后你能做的最好那条路还差的，不选。",
        caption:
          "当面谈之前先写 10 到 15 分钟。先把立场和利益分开写，再针对利益想办法，最后用退路筛一遍。",
        afterHeading: "卡住时按这六步走",
      },
    ],
    diagram: "/illustrations/interests-vs-positions-scene.svg",
    diagramAlt: "假设的情况：左侧两人只在「回老家」和「去外地」两个立场上对打，日程还是空的；右侧写出怕老人被冷落和想换环境这两头利益后，可以提前回去吃团圆饭，后面再出去几天。",
    diagramCaption: "只在「回」和「不回」上对打，别的办法进不了讨论。先问这个条件是为了解决什么问题。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "implementation-intentions": {
    figures: [
      {
        src: "/illustrations/implementation-intentions-scene.svg",
        alt: "假设的情况：这周要把拖了很久的材料写完。左侧只立了目标意向「要把那份拖了很久的材料写完」，目标是真心的，日历晚上也空得出时间。右侧周四晚上文件还是一个字没动，每天都在等更合适的空隙：开完会再写、吃完晚饭再写，空隙没以想象的样子出现，这件事又被推到了明天。卡住的通常不是志向，是到时候由什么把你启动。",
        caption:
          "只写下「我要完成」，到时候还要再决定现在要不要动手。卡住的通常不是志向，是到时候由什么把你启动。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/implementation-intentions-rule.svg",
        alt: "上排：实施意向的格式是「如果情境 Y 出现，那么我就做行为 X」。Y 要是真会碰到的线索，如倒完早上那杯咖啡、下班换下衣服；X 要是当场能开始的动作，如打开草稿先写开头三个要点，而不是把材料写完。Gollwitzer 1999 年综述：形成实施意向，等于把目标导向行为的控制，委托给预期会出现的情境线索。下排按 Gollwitzer 和 Brandstätter（1997）重绘：86 名大学生立下同一目标，寄回且能分清组别的 36 份里，写下时间地点的 17 人中有 12 人在两天窗口内写完，对照组 19 人中只有 6 人；前者平均在平安夜后 2.3 天动笔，后者是 7.7 天。另注 Gollwitzer 和 Sheeran（2006）汇总 94 项独立检验、8461 人，平均效应 d = 0.65（中等到偏大），这是许多研究的平均结果，不是写一条就有六成五的把握一定完成。",
        caption:
          "Gollwitzer 和 Brandstätter（1997）：写下何时何地动笔的 17 人中有 12 人在两天窗口内写完，对照组 19 人中只有 6 人；平均动笔分别是平安夜后 2.3 天和 7.7 天。Gollwitzer 和 Sheeran（2006）94 项、8461 人，平均效应 d = 0.65，这是许多研究的平均结果，不是写一条就有六成五的把握。",
        afterHeading: "如果—那么计划是什么",
      },
      {
        src: "/illustrations/implementation-intentions-steps.svg",
        alt: "五步，第一次大约 15 分钟：用一句话写下这周最想做成的一件事，写到能看出怎样算做成；先标出通常卡在哪；只为这件事写一条如果—那么，「如果」选本周真会碰到的线索，「那么」写两分钟内能开始的动作；若真正的干扰是诱惑或打断，再补一条对付它；过几天回看，线索没出现就改「如果」，出现了却没行动，多半是「那么」还是太大，或这件事其实没打算做。",
        caption:
          "第一次大约 15 分钟。一次先只盯一件；「如果」要真会碰到，「那么」要能当场开始。",
        afterHeading: "先写一条，按五步走",
      },
    ],
    diagram: "/illustrations/implementation-intentions-scene.svg",
    diagramAlt: "假设的情况：左侧只立了目标意向，日历也空得出时间；右侧周四晚上文件还是一个字没动，又被推到了明天。",
    diagramCaption: "只写下「我要完成」，到时候还要再决定现在要不要动手。卡住的通常不是志向，是到时候由什么把你启动。",
    icon: "/icons/domain-learning.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "week-review-1115": {
    figures: [
      {
        src: "/illustrations/week-review-1115-map.svg",
        alt: "三列总图：信息价值与机会成本都是先写出「不这样做会怎样」；交错练习与小评测都是别用「今天看起来很顺」当学会了；3-2-1 备份与亲近对齐都是别把最顺手的那一步当成已经做完。三列汇入同一句：动手改之前，先写下你拿什么来对照。",
        caption:
          "六课问的是同一类事——你正要再打听、再答应、再改的时候，手里有没有一样能对照的东西？没有的话，先写下来。",
        afterHeading: "本周六课",
      },
      {
        src: "/illustrations/week-review-1115-pairs.svg",
        alt: "三对容易混的课：信息价值和机会成本都是先写出「不这样做会怎样」，对照的对象不同；交错练习和小评测都在对付「今天看起来很顺」；3-2-1 备份和亲近对齐都容易把最顺手的一步当成做完。",
        caption:
          "分开再叠用。再调研前先写你会怎么选，也写下这下午本来能做的最好那件事；判断学会了或改好了，别用「今天有多顺」；没做恢复测试就说已经备份，和没改位置就换配色，都是把最顺手的动作当成做完了。",
        afterHeading: "怎么互相绊脚",
      },
      {
        src: "/illustrations/week-review-1115-steps.svg",
        alt: "三句自检：已经写了对照吗；拿什么判断已经会了或已经改好了；最顺手的那一步是不是被当成已经做完。底部提示别六课并行，按最痛的那条选一个七天动作。",
        caption:
          "对着一件真事只问三句。别六课并行，按你最痛的那条选一个七天动作；动手改、再打听、再答应之前，先写下你拿什么来对照。",
        afterHeading: "三句自检",
      },
    ],
    diagram: "/illustrations/week-review-1115-map.svg",
    diagramAlt: "六课收成一件事：动手改之前，先写下你拿什么来对照",
    diagramCaption: "再打听、再答应、再改的时候，手里有没有一样能对照的东西？",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "small-evals": {
    figures: [
      {
        src: "/illustrations/small-evals-scene.svg",
        alt: "假设的情况：让 AI 给题库里的题打知识点标签。左侧：改完提示词随手挑三道题试，三道都对，看着比以前好，就换上了。右侧：两周后有人反馈，资料分析里一整类增长率题，新版全分到了别的知识点。那三道没覆盖这类题，也没跟旧版在同一批题上比。缺的是一把固定的尺子：一组每次改动都拿来跑一遍的真实样例。",
        caption:
          "随手挑三道试全对，没覆盖那类题，也没跟旧版放在同一批题上比。缺的是一把固定的尺子：每次改动都跑一遍的真实样例。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/small-evals-rule.svg",
        alt: "上排：小评测表由三部分组成。样例集是一批固定输入，最好来自真实使用记录，含难的和边缘的；通过标准是每条写清楚怎样算对；记录是每改一版就跑全套，记下版本、通过率和错在哪几条。下排算术示意，假设各条互不影响：真实正确率 95% 的版本连对 3 条的概率约 86%；真实正确率 70% 的版本连对 3 条约 34%；同样 70% 的版本连对 20 条不到千分之一。三条全对在好版本和一般版本身上都常见，样例一多，差的版本就藏不住。",
        caption:
          "小评测表 = 固定样例集 + 写清楚的通过标准 + 每版记录。算术示意（假设各条互不影响）：正确率 70% 的版本连对 3 条约 34%，95% 的约 86%；连对 20 条，70% 的版本不到千分之一。",
        afterHeading: "小评测表是什么",
      },
      {
        src: "/illustrations/small-evals-steps.svg",
        alt: "六步，第一次约 30 分钟：写一句能核对的成功标准；从真实记录里攒 15 到 30 条输入，补 3 到 5 条难的，另留 3 到 5 条先不看；每条写一个通过条件；用当前版本跑一遍，记下基线；一次只改一处，再跑全套，通过率升了且原来通过的没掉才换新版；把新错例补进表。",
        caption:
          "第一次约 30 分钟。一次只改一处再跑全套：通过率升了、原来对的没掉，才换新版；新错例随手补进表。",
        afterHeading: "搭一张表，按六步走",
      },
    ],
    diagram: "/illustrations/small-evals-scene.svg",
    diagramAlt: "假设的情况：让 AI 给题库里的题打知识点标签。左侧：改完提示词随手挑三道题试，三道都对，看着比以前好，就换上了。右侧：两周后有人反馈，资料分析里一整类增长率题，新版全分到了别的知识点。那三道没覆盖这类题，也没跟旧版在同一批题上比。缺的是一把固定的尺子：一组每次改动都拿来跑一遍的真实样例。",
    diagramCaption:
      "随手挑三道试全对，没覆盖那类题，也没跟旧版放在同一批题上比。缺的是一把固定的尺子：每次改动都跑一遍的真实样例。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "interleaving": {
    figures: [
      {
        src: "/illustrations/interleaving-scene.svg",
        alt: "左侧练习册把 t 检验连做四道、再把回归连做四道，每道都打对勾；右侧一周后的综合题没有标明方法，在 t 检验、卡方检验、相关和回归里选错了检验",
        caption:
          "同一类题连着做，当时会觉得很顺。缺的不是公式，而是看见一道没标明方法的新题时，先判断该用哪一招。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/interleaving-rule.svg",
        alt: "上排对照：分块练习按 AAAA 再 BBBB 排列，交错练习把 t 检验、卡方、回归、相关打乱，相邻两道不是同一类。下排柱状图按 Rohrer、Dedrick、Hartwig 和 Cheung（2020）重绘：一个月后未预告测验，分块组正确率 38%，交错组 61%，效应量 d = 0.83",
        caption:
          "Rohrer、Dedrick、Hartwig 和 Cheung（2020）：日常作业里交错练习，一个月后未预告测验正确率 61%，分块组 38%，d = 0.83。这是该研究条件下的数字，不要当成所有科目的固定涨幅。Kang 和 Pashler（2012）表明，主要机制是对照差异，不是单纯拉开间隔。",
        afterHeading: "分块练的是手法，交错练的是选题",
      },
      {
        src: "/illustrations/interleaving-steps.svg",
        alt: "五步：先写下三到五种容易搞混的类型；每种先做一到两道确认步骤还在；打乱成一张练习单，相邻两道不要同一类型；每道先写选用的方法再动手做；隔一两天再混着做一轮，用选题正确率判断有没有学会",
        caption:
          "改一次练习大约二十分钟。先用很短的分块把步骤走顺，再交错着练选题；隔几天后用选题正确率来检验，不要用当天做题有多顺来判断。",
        afterHeading: "改一次练习，按这五步走",
      },
    ],
    diagram: "/illustrations/interleaving-scene.svg",
    diagramAlt: "左侧练习册把同一类题连着做完，右侧一周后的综合题没有标明方法，选错了检验",
    diagramCaption: "同一类题连着做当时很顺，缺的是先判断该用哪一招。",
    icon: "/icons/domain-learning.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "proximity-alignment": {
    figures: [
      {
        src: "/illustrations/proximity-alignment-notice.svg",
        alt: "同一页十二行培训通知对照：左侧每行间距一样，标题居中，时间地点标红，二维码靠右，仍看不出分组；右侧按「是什么、什么时候在哪、怎么报名、找谁」分成四组，组内收紧、组间拉开，左边对齐同一条线",
        caption:
          "同一页假设通知的改法：先按意思分组并对齐，不必先换颜色。组间空白大于组内是好用的起点，不是研究结论。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/proximity-alignment-rule.svg",
        alt: "上排对照：间距相同时给其中几项标色，仍是均匀的一排；颜色不同但挨得近，仍会被看成一组。下排：十二个输入框排成一长串显得费劲，按意思拆成三组、每组四个，就显得好填多了",
        caption:
          "Aurora Harley，Nielsen Norman Group（2020）：近则成组，距离分组常压过颜色和形状。下排表单是课文里的示意，不是实验数据。",
        afterHeading: "眼睛先看位置，再看颜色",
      },
      {
        src: "/illustrations/proximity-alignment-steps.svg",
        alt: "五步：先数意思有几组；眯眼或缩小到 25% 看一眼，对照看到的块数与组数；组内收紧、组间拉开，组间空白约为组内的两倍以上（经验值，不是研究结论）；一页只选一条主对齐线，通常选左边线；最后才动重复和对比，差异要做就做足",
        caption:
          "改一页大约十分钟：先分组和对齐，再动颜色和字号。组间空白约为组内两倍以上是经验值，不是研究结论，按页面调。",
        afterHeading: "改一页东西，按这五步走",
      },
    ],
    diagram: "/illustrations/proximity-alignment-notice.svg",
    diagramAlt: "同一页十二行培训通知对照：左侧每行间距一样，标题居中，时间地点标红，二维码靠右，仍看不出分组；右侧按「是什么、什么时候在哪、怎么报名、找谁」分成四组，组内收紧、组间拉开，左边对齐同一条线",
    diagramCaption: "同一页假设通知的改法：先按意思分组并对齐，不必先换颜色。组间空白大于组内是好用的起点，不是研究结论。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "opportunity-cost": {
    figures: [
      {
        src: "/illustrations/opportunity-cost-study.svg",
        alt: "三项实验柱状对照：DVD 想买比例从只写「不买」的 75% 降到写成「把 14.99 美元留着买别的」的 55%；已决定购买的人里，选更便宜 16GB iPod 的比例从 37% 升到 73%；用刚发的钱买真杯子，选更便宜那只从 40% 升到 60%",
        caption:
          "Frederick、Novemsky 等（2009）：只是把「你放弃了什么」写到台面上，选择就会变。图中百分数为该实验条件下的选择变化，不是个人精确阈值。",
        afterHeading: "场景",
      },
      {
        src: "/illustrations/opportunity-cost-rule.svg",
        alt: "电脑例机制图：8000 元够用与 12000 元更好，差价 4000 元要写成这 4000 元能做成的最好那件事；不要把 4000 元可能买到的所有东西加总，也不要认为差价已包含在 12000 里不必另算；选贵的等于放弃便宜那台，外加这 4000 元能做成的最好那件事",
        caption:
          "机会成本只取次优那一项。差价不是已经含在总价里就不用另算：总价告诉你要付多少，机会成本告诉你付了之后做不成哪件最好的事。",
        afterHeading: "机会成本在算什么",
      },
      {
        src: "/illustrations/opportunity-cost-steps.svg",
        alt: "五步流程：先写眼前要买、答应或投入的事及其钱与时间；补写「如果我不做，这些钱或时间会用在______」，填真心会做的次优项，不要只写节约或买别的；把眼前这件事的好处和次优的好处并排只比这两者；涉及时间时把时间换成具体事项；一时想不出就先写留着以后用在尚未指定的事上",
        caption:
          "做选择时先写出那句完整的话，只跟次优这一项比。空格里要填你真心会去做的事；想不出具体项时，先写「留着以后用」也会改变选择。",
        afterHeading: "做决定时按这五步写",
      },
    ],
    diagram: "/illustrations/opportunity-cost-study.svg",
    diagramAlt: "Frederick 等（2009）三项实验：把机会成本写到台面上后，DVD 想买从 75% 降到 55%，选便宜 iPod 从 37% 升到 73%，选更便宜杯子从 40% 升到 60%",
    diagramCaption: "点名「留下这笔钱」会改变选择；百分数为该实验条件下的变化。",
    icon: "/icons/domain-economics.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "week-review-1108": {
    figures: [
      {
        src: "/illustrations/week-review-1108-map.svg",
        alt: "三列总图：回归均值与幸存者偏差补样本，规划谬误与事前验尸补计划和原因，BATNA与换通道核实离开对方给的框，三列汇入判断前先找到没看见的那些",
        caption:
          "六课问的是同一类事：你现在看见的，是全部，还是被筛过、在脑子里演过、或对方递过来的那一半？",
        afterHeading: "本周六课",
      },
      {
        src: "/illustrations/week-review-1108-pairs.svg",
        alt: "三对容易混的课：幸存者偏差找回缺口、回归均值要对照；规划谬误管工期、事前验尸管原因；BATNA和换通道核实都是离开眼前的框",
        caption:
          "分开再叠用。查同期关掉的基金是在补幸存者；看最差一批处理后分数涨了却没有对照，是把回落当成了干预效果。",
        afterHeading: "怎么互相绊脚",
      },
      {
        src: "/illustrations/week-review-1108-metaphor.jpg",
        alt: "隐喻插图：桌上几张看得见的卡片旁留着空白勾边，一只手掀起最左边那张，下面还有没看见的一层",
        caption:
          "判断之前，先找到你没看见的那些——样本里缺的、同类事实际花的时间、谈不成之后手头的路，以及对方这条线之外的核实方式。",
        afterHeading: "三句自检",
      },
    ],
    diagram: "/illustrations/week-review-1108-map.svg",
    diagramAlt: "六课收成一件事：判断前先找到没看见的那些",
    diagramCaption: "样本里缺的、计划里没写的、对方给的框之外。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "value-of-information": {
    figures: [
      {
        src: "/illustrations/voi-decision.svg",
        alt: "对照图：左侧多打听后仍买，信息价值约等于0；右侧打听后从买改成不买，信息价值大于0",
        caption:
          "信息值多少，不看多专业，而看会不会改你的行动。打听完还是同一决定，价值≈0；会翻转决定并改善期望结果，才值钱。",
        afterHeading: "在核什么",
      },
      {
        src: "/illustrations/voi-evpi.svg",
        alt: "教学示意柱状与减法：无信息时买的期望1400，有完美信息时期望3200，EVPI=1800为愿付上限",
        caption:
          "教学示意：无信息最优买，EMV=1400；有完美信息时有用买、没用不买，EMV=3200；EVPI=3200−1400=1800，是消除「有没有用」这笔不确定性的付出上限。不完美信息价值不会高于它。",
        afterHeading: "别搞错的地方",
      },
      {
        src: "/illustrations/voi-steps.svg",
        alt: "六步：写下现在的决定、可能听到的结果、会改决定吗、改了能好多少上限、打听代价对比、不完美信息打折",
        caption:
          "多打听之前先过这几步。所有结果都不会改决定就停；上限明显低于打听成本也可以停。安心不等于能多赚。",
        afterHeading: "做决定前先过这几步",
      },
    ],
    diagram: "/illustrations/voi-decision.svg",
    diagramAlt: "信息会不会改决定：不变价值约0，翻转则价值大于0",
    diagramCaption: "信息只通过改变行动、改善期望结果才产生价值。",
    icon: "/icons/domain-probability.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "backup-3-2-1": {
    figures: [
      {
        src: "/illustrations/backup-rule.svg",
        alt: "3-2-1 备份规则：重要文件保留三份、使用两种存储介质、至少一份放在异地；其中一份平时应断开",
        caption:
          "三份、两种介质、一份异地，分别降低单盘故障、介质共因和火灾失窃的风险；平时再让至少一份保持断开，别让勒索软件同时碰到所有副本。",
        afterHeading: "3-2-1 到底指什么",
      },
      {
        src: "/illustrations/backup-sync.svg",
        alt: "同步与备份对照：本地文件被勒索软件加密后，云同步也跟着上传加密版本；同盘复制、单一网盘多份、一直插着的硬盘和未测试的备份都不算可靠备份",
        caption:
          "同步只让两边变得一样：本地文件被勒索软件加密，云端也可能跟着变成加密版。放在同一块盘、同一个网盘或同一地点，移动硬盘一直插着，以及从未检查或恢复过的副本，都不能当作可靠备份。",
        afterHeading: "这几种不算备份",
      },
      {
        src: "/illustrations/backup-steps.svg",
        alt: "半小时备份搭建步骤：列出重要文件夹、设置并拔下移动硬盘、增加异地云或硬盘副本、安排每月恢复和半年整目录演练",
        caption:
          "今晚先列重要文件夹，设置移动硬盘备份并拔下，再加一份异地副本；日历里安排每月恢复一个文件。只有亲手恢复并打开检查过，备份才算真正可用。",
        afterHeading: "今晚花半小时搭起来",
      },
    ],
    diagram: "/illustrations/backup-rule.svg",
    diagramAlt: "3-2-1 备份规则：三份副本、两种介质、一份异地，并让至少一份平时断开",
    diagramCaption: "三份、两种介质、一份异地；至少一份平时断开，定期真恢复。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "survivorship-bias": {
    figures: [
      {
        src: "/illustrations/survivorship-plane.svg",
        alt: "返航轰炸机示意：机翼机身尾翼可见弹孔，发动机与驾驶舱几乎空白，提示关键部位中弹更可能回不来",
        caption:
          "Wald 的提醒：装甲不该只补在看得见弹孔的地方；返航样本里「缺」的那块，往往才是要命处。示意方向，非某次战损精确图。",
        afterHeading: "在核什么",
      },
      {
        src: "/illustrations/survivorship-sample.svg",
        alt: "对照图：左侧群聊晒单只剩 6 个成功故事看似都成了；右侧同期 30 人补上退群关停后成功率变成 6/30",
        caption:
          "成功率要用分母算。只看还愿意晒的人，会把「都成了」估高；补上失败侧，数字才老实。示意人数。",
        afterHeading: "别搞错的地方",
      },
      {
        src: "/illustrations/survivorship-steps.svg",
        alt: "六步：写清样本、失败去哪了、找分母、找不到就降把握、单列看不见的风险、与回归均值分开",
        caption:
          "先问失败的那些去哪了，再谈「这样做能成」。分母找不到就把结论降级，别和回归均值混账。",
        afterHeading: "做判断前先过这几步",
      },
    ],
    diagram: "/illustrations/survivorship-plane.svg",
    diagramAlt: "返航飞机弹孔与关键部位空白对照",
    diagramCaption: "该优先怀疑的，是返航样本里看不见的那块。",
    icon: "/icons/domain-probability.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "premortem": {
    figures: [
      {
        src: "/illustrations/premortem-frame.svg",
        alt: "同一张计划草稿两种问法对照：普通问风险得到沉默或「应该没大问题」；事前验尸宣布假设已失败后写出具体原因并改计划",
        caption:
          "问「还有风险吗」等于请人当众泼冷水；改成「假设已经失败了，每人写出为什么」，具体坑位更容易说出口。",
        afterHeading: "在核什么",
      },
      {
        src: "/illustrations/premortem-confidence.svg",
        alt: "文献向柱状示意：普通批评、列优缺点、只列缺点、事前验尸四组中，事前验尸对计划成功信心的下降幅度更大",
        caption:
          "文献向示意（Veinott, Klein & Wiggins, 2010）：事前验尸比普通批评更能压下「这份计划会成功」的自信。柱高只表示方向，非原文精确分数。",
        afterHeading: "别搞错的地方",
      },
      {
        src: "/illustrations/premortem-steps.svg",
        alt: "事前验尸六步：有草稿、宣布失败已成事实、独立写原因、轮流读出只记录、当场改计划、留一页已处理原因",
        caption:
          "有可执行草稿再验尸；写完原因必须当场改计划或检查单，否则只是气氛活动。",
        afterHeading: "敲定前做这几步",
      },
    ],
    diagram: "/illustrations/premortem-frame.svg",
    diagramAlt: "普通问风险与事前验尸对照",
    diagramCaption: "把失败当成既定事实，具体原因才更容易说出口。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
  "out-of-band-verification": {
    figures: [
      {
        src: "/illustrations/oob-channels.svg",
        alt: "同一通道与换通道核实对照：在对方发起的电话或消息里回复、回拨仍在原线上；先挂断，再用自己早存的号码联系本人",
        caption:
          "回复原邮件、回拨消息里的号码都仍在原线；换通道要用消息出现前就掌握的号码、合同电话或官网号码。",
        afterHeading: "在核什么",
      },
      {
        src: "/illustrations/oob-metaphor.jpg",
        alt: "隐喻插图：刚挂断来电的手，正在手机通讯录里点选早已保存的联系人",
        caption:
          "先结束对方发起的通话，再从自己早已保存的通讯录里找到本人回拨。",
        afterHeading: "别搞错的地方",
      },
      {
        src: "/illustrations/oob-steps.svg",
        alt: "六步处理可疑急消息：认触发条件、结束对话、用早存号码找本人、家里约暗号、单位付款流程复核、已付款后止损报警",
        caption:
          "任一触发条件命中就进入流程；单位改账户要回拨留档号码并由第二人复核，已付款就联系银行尝试拦截并报警。",
        afterHeading: "碰到这类消息，按这几步走",
      },
    ],
    diagram: "/illustrations/oob-channels.svg",
    diagramAlt: "同一通道核实与换通道核实对照",
    diagramCaption: "先挂断，再用自己早已保存的号码或官方渠道主动联系本人。",
    icon: "/icons/domain-default.svg",
    coverTint: "from-accent/15 via-paper-elevated to-paper-elevated",
  },
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
