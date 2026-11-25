import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LessonCard } from "../src/components/LessonCard";
import type { LessonMeta } from "../src/lib/lessons";

const lesson: LessonMeta = {
  title: "浅灰字为什么看不清",
  date: "2026-11-25",
  domain: "审美与实用技能",
  difficulty: "入门",
  slug: "text-contrast",
  issue: 42,
  summary: "先看文字和背景之间的明暗差。",
  sources: [],
};

function renderCard(cardLesson: LessonMeta = lesson) {
  return renderToStaticMarkup(
    createElement(LessonCard, { lesson: cardLesson })
  );
}

test("keeps the lesson diagram visible in the card cover", () => {
  const html = renderCard();

  assert.match(html, /<img[^>]*src="\/illustrations\/text-contrast-scene\.svg"/);
});

test("keeps the domain category outside the cover image", () => {
  const html = renderCard();
  const coverStart = html.indexOf("lesson-card-cover");
  const coverEnd = html.indexOf("</div>", coverStart);
  const domainStart = html.indexOf("lesson-card-domain");
  const domainTagEnd = html.indexOf(">", domainStart);

  assert.notEqual(coverStart, -1, "cover wrapper should be present");
  assert.notEqual(domainStart, -1, "domain wrapper should be present");
  assert.ok(domainStart > coverEnd, "domain should follow the cover wrapper");
  assert.doesNotMatch(html.slice(domainStart, domainTagEnd), /\babsolute\b/);
});

test("uses the diagram description as the cover image accessible name", () => {
  const html = renderCard();

  assert.match(
    html,
    /<img[^>]*src="\/illustrations\/text-contrast-scene\.svg"[^>]*alt="电脑前觉得浅灰更干净，后排却可能已经看不清。先查明暗差，再考虑换字体。"/
  );
});

test("renders category, metadata, title, summary, and reading entry", () => {
  const html = renderCard();

  for (const text of [
    lesson.domain,
    "第 42 期",
    "2026年11月25日",
    lesson.difficulty,
    lesson.title,
    lesson.summary,
    "阅读",
  ]) {
    assert.ok(html.includes(text), `expected rendered card to include ${text}`);
  }
  assert.match(html, /<time dateTime="2026-11-25">/);
});

test("uses a full-figure thumbnail instead of a cropped thin strip", () => {
  const html = renderCard();
  const coverClass = html.match(/lesson-card-cover[^\"]*/)?.[0] ?? "";
  const imageClass = html.match(
    /<img[^>]*src="\/illustrations\/text-contrast-scene\.svg"[^>]*class="([^\"]*)"/
  )?.[1] ?? "";

  assert.doesNotMatch(html, /h-\[4\.5rem\]|sm:h-20|object-cover/);
  assert.match(coverClass, /aspect-\[12\/7\]/);
  assert.match(imageClass, /object-contain/);
});

test("renders body fields and category when a lesson has no diagram", () => {
  const noArtLesson: LessonMeta = {
    ...lesson,
    slug: "no-diagram",
    issue: undefined,
  };
  const html = renderCard(noArtLesson);

  assert.ok(html.includes(noArtLesson.domain));
  assert.ok(html.includes(noArtLesson.title));
  assert.ok(html.includes(noArtLesson.summary));
  assert.ok(html.includes("阅读"));
  assert.doesNotMatch(html, /lesson-card-cover/);
});
