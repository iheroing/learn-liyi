import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import GithubSlugger from "github-slugger";

const lessonsDir = path.join(process.cwd(), "content/lessons");

export type LessonMeta = {
  title: string;
  date: string;
  domain: string;
  difficulty: string;
  slug: string;
  series?: string;
  issue?: number;
  lang?: string;
  summary: string;
  canvas?: string;
  sources: string[];
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  answerLabel: string;
  answerExplain: string;
};

export type TocItem = {
  id: string;
  text: string;
};

export type Lesson = LessonMeta & {
  bodyHtml: string;
  quiz: QuizQuestion[];
  toc: TocItem[];
  sourceLinks: { href: string; label: string }[];
};

function listMarkdownFiles(): string[] {
  if (!fs.existsSync(lessonsDir)) return [];
  return fs
    .readdirSync(lessonsDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

function splitQuiz(markdown: string): { main: string; quizRaw: string } {
  const match = markdown.match(/^##\s*自测\s*$/m);
  if (!match || match.index === undefined) {
    return { main: markdown, quizRaw: "" };
  }
  const before = markdown.slice(0, match.index).trimEnd();
  const after = markdown.slice(match.index + match[0].length);
  const sourceMatch = after.match(/^##\s*来源\s*$/m);
  if (!sourceMatch || sourceMatch.index === undefined) {
    return { main: before, quizRaw: after.trim() };
  }
  const quizRaw = after.slice(0, sourceMatch.index).trim();
  const rest = after.slice(sourceMatch.index).trim();
  return { main: `${before}\n\n${rest}`, quizRaw };
}

function parseQuiz(quizRaw: string): QuizQuestion[] {
  if (!quizRaw.trim()) return [];
  const blocks = quizRaw
    .split(/\n(?=\*\*题\s*\d+)/)
    .map((b) => b.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    const promptMatch = block.match(
      /^\*\*题\s*(\d+)\.\*\*\s*([\s\S]*?)(?=\n-\s*[A-Z]\.|\n\*\*答案)/
    );
    const options = [...block.matchAll(/^-\s*([A-Z])\.\s*(.+)$/gm)].map(
      (m) => `${m[1]}. ${m[2].trim()}`
    );
    const answerMatch = block.match(
      /\*\*答案[：:]\s*([^*]+?)\*\*\s*([\s\S]*?)$/
    );
    const num = promptMatch?.[1] ?? String(index + 1);
    const prompt = (promptMatch?.[2] ?? block.split("\n")[0] ?? "").trim();
    const answerLabel = (answerMatch?.[1] ?? "").trim().replace(/[。.]$/, "");
    const answerExplain = (answerMatch?.[2] ?? "").trim();
    return {
      id: `q${num}`,
      prompt: prompt || `题 ${num}`,
      options,
      answerLabel,
      answerExplain,
    };
  });
}

function extractToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const toc: TocItem[] = [];
  for (const line of markdown.split("\n")) {
    const m = line.match(/^##\s+(.+)\s*$/);
    if (!m) continue;
    const text = m[1].trim();
    if (text === "自测") continue;
    toc.push({ id: slugger.slug(text), text });
  }
  if (markdown.includes("## 自测")) {
    toc.push({ id: "quiz", text: "自测" });
  }
  return toc;
}

function extractSourceLinks(
  markdown: string,
  frontSources: string[]
): { href: string; label: string }[] {
  const links: { href: string; label: string }[] = [];
  const seen = new Set<string>();
  const mdLinks = [
    ...markdown.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g),
  ];
  for (const m of mdLinks) {
    const href = m[2];
    if (!href.includes("doi.org") && !frontSources.includes(href)) {
      // keep DOI and frontmatter sources preferred; still collect labeled ones from 来源
    }
    if (seen.has(href)) continue;
    // Only collect from 来源-looking lines or frontmatter later
  }

  const sourceSection = markdown.match(/##\s*来源\s*([\s\S]*?)(?=\n##\s|$)/);
  const section = sourceSection?.[1] ?? "";
  for (const m of section.matchAll(
    /^\d+\.\s*\[([^\]]+)\]\((https?:\/\/[^)]+)\)\s*(.*—\s*.+)?$/gm
  )) {
    const href = m[2];
    if (seen.has(href)) continue;
    seen.add(href);
    const extra = (m[3] ?? "").trim();
    links.push({
      href,
      label: extra ? `${m[1]} ${extra}` : m[1],
    });
  }

  for (const href of frontSources) {
    if (seen.has(href)) continue;
    seen.add(href);
    links.push({ href, label: href });
  }
  return links;
}

async function markdownToHtml(markdown: string): Promise<string> {
  // Drop leading H1 (title shown in page chrome)
  const withoutH1 = markdown.replace(/^#\s+.+\n+/, "");
  // Remove 来源 section — rendered separately with clean links
  const withoutSources = withoutH1.replace(
    /\n##\s*来源\s*[\s\S]*$/m,
    "\n"
  );
  const file = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(withoutSources);
  return String(file);
}

function coerceDate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const y = value.getUTCFullYear();
    const m = String(value.getUTCMonth() + 1).padStart(2, "0");
    const d = String(value.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const s = String(value ?? "");
  const m = s.match(/^(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : s;
}

function readLessonFile(filename: string): {
  meta: LessonMeta;
  content: string;
} {
  const raw = fs.readFileSync(path.join(lessonsDir, filename), "utf8");
  const { data, content } = matter(raw);
  const meta: LessonMeta = {
    title: String(data.title ?? ""),
    date: coerceDate(data.date),
    domain: String(data.domain ?? ""),
    difficulty: String(data.difficulty ?? ""),
    slug: String(data.slug ?? filename.replace(/\.mdx?$/, "")),
    series: data.series ? String(data.series) : undefined,
    issue: data.issue != null ? Number(data.issue) : undefined,
    lang: data.lang ? String(data.lang) : undefined,
    summary: String(data.summary ?? ""),
    canvas: data.canvas ? String(data.canvas) : undefined,
    sources: Array.isArray(data.sources)
      ? data.sources.map(String)
      : [],
  };
  return { meta, content };
}

export function getAllLessonMetas(): LessonMeta[] {
  return listMarkdownFiles()
    .map((f) => readLessonFile(f).meta)
    .sort((a, b) => {
      if (a.date === b.date) return (b.issue ?? 0) - (a.issue ?? 0);
      return a.date < b.date ? 1 : -1;
    });
}

export function getLessonSlugs(): string[] {
  return getAllLessonMetas().map((l) => l.slug);
}

export async function getLessonBySlug(slug: string): Promise<Lesson | null> {
  const file = listMarkdownFiles().find((f) => {
    const { meta } = readLessonFile(f);
    return meta.slug === slug;
  });
  if (!file) return null;
  const { meta, content } = readLessonFile(file);
  const { main, quizRaw } = splitQuiz(content);
  const quiz = parseQuiz(quizRaw);
  const toc = extractToc(content);
  const sourceLinks = extractSourceLinks(content, meta.sources);
  const bodyHtml = await markdownToHtml(main);
  return { ...meta, bodyHtml, quiz, toc, sourceLinks };
}
