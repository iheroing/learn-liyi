# 每日高收益知识课 · learn.liyi.online

公开中文学习小站。每天一课，纸墨风排版，挂在 `learn.liyi.online`。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

生产构建：

```bash
npm run build
npm start
```

## 如何新增一期课

1. 在 `content/lessons/` 新建 Markdown，文件名建议：`YYYY-MM-DD-<slug>.md`
2. 填写 frontmatter（必填字段见下）
3. 正文用 `##` 分节；自测写在 `## 自测` 下，答案用 `**答案：…**`，默认在网页上隐藏，点「核对答案」才显示
4. 提交并推送到 `main`，Vercel 会自动部署

### Frontmatter 示例

```yaml
---
title: 标题
date: 2026-10-29
domain: 概率与决策
difficulty: 中
slug: probability-calibration
series: 每日高收益知识课
issue: 1
lang: zh-Hans
summary: 一两句摘要
canvas: https://…   # 可选
sources:
  - https://doi.org/…
---
```

- 路由为 `/lessons/<slug>`
- 首页按 `date`（新→旧）列出全部课程

### 自测格式

```markdown
## 自测

**题 1.** 题干？

- A. 选项
- B. 选项

**答案：B。** 简短解释。
```

## 目录结构

```
content/lessons/     # 课稿 Markdown
src/app/             # 页面（App Router）
src/components/      # 头部、目录、卡片、自测
src/lib/lessons.ts   # 读稿、解析自测与目录
```

## 部署到 Vercel

1. 在 Vercel 导入 GitHub 仓库 `iheroing/learn-liyi`
2. Framework Preset 选 Next.js，构建命令 `npm run build`，输出默认即可
3. 绑定自定义域名 `learn.liyi.online`（DNS CNAME 指向 Vercel）
4. 推送 `main` 即触发生产部署

本仓库不包含域名绑定步骤；域名在 Vercel 控制台配置。

## 技术栈

Next.js App Router · TypeScript · Tailwind CSS · Markdown（gray-matter + remark）
