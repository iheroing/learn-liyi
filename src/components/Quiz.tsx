"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/lessons";

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  if (!questions.length) return null;

  return (
    <section id="quiz" className="scroll-mt-28 max-w-reading">
      <div className="border-t-2 border-ink pt-5 mb-5">
        <p className="kicker mb-1.5">核对前先想</p>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-[1.45rem] sm:text-[1.6rem] text-ink tracking-tight">
            自测
          </h2>
          <p className="hidden sm:block text-[0.75rem] text-ink-muted max-w-[13rem] text-right leading-relaxed">
            先自答，再点核对。答案默认隐藏。
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const open = revealed[q.id];
          return (
            <div
              key={q.id}
              className="border border-ink/12 bg-paper-elevated px-4 py-4 sm:px-5"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="inline-flex h-6 w-6 items-center justify-center border border-accent/30 bg-accent/8 text-accent text-[0.7rem] font-semibold tabular-nums">
                  {i + 1}
                </span>
                <span className="text-[0.65rem] tracking-kicker uppercase text-ink-faint">
                  单选题
                </span>
              </div>
              <p className="text-ink leading-relaxed mb-3.5 text-[1rem]">{q.prompt}</p>
              {q.options.length > 0 && (
                <ul className="space-y-1.5 mb-4">
                  {q.options.map((opt) => (
                    <li
                      key={opt}
                      className="border border-ink/8 bg-paper px-3 py-2 text-sm text-ink-muted"
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
              {!open ? (
                <button
                  type="button"
                  onClick={() =>
                    setRevealed((prev) => ({ ...prev, [q.id]: true }))
                  }
                  className="inline-flex items-center justify-center border border-ink bg-ink px-4 py-2 text-[0.8125rem] text-paper hover:bg-accent hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-elevated transition-colors"
                >
                  核对答案
                </button>
              ) : (
                <div className="border-l-[3px] border-accent bg-accent/[0.05] px-3.5 py-3">
                  <p className="text-sm font-semibold text-accent mb-1">
                    答案：{q.answerLabel}
                  </p>
                  {q.answerExplain ? (
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {q.answerExplain}
                    </p>
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
