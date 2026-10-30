"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/lessons";

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  if (!questions.length) return null;

  return (
    <section id="quiz" className="scroll-mt-28">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-accent mb-2">
            核对前先想
          </p>
          <h2 className="font-serif text-2xl sm:text-[1.7rem] text-ink">自测</h2>
        </div>
        <p className="hidden sm:block text-xs text-ink-muted max-w-[14rem] text-right leading-relaxed">
          先自答，再点核对。答案默认隐藏。
        </p>
      </div>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const open = revealed[q.id];
          return (
            <div
              key={q.id}
              className="rounded-xl border border-ink/10 bg-paper-elevated p-4 sm:p-5 shadow-soft"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-semibold tabular-nums">
                  {i + 1}
                </span>
                <span className="text-xs text-ink-faint font-medium tracking-wide">
                  单选题
                </span>
              </div>
              <p className="text-ink leading-relaxed mb-4 text-[1.02rem]">{q.prompt}</p>
              {q.options.length > 0 && (
                <ul className="space-y-2 mb-5">
                  {q.options.map((opt) => (
                    <li
                      key={opt}
                      className="rounded-xl border border-ink/8 bg-paper px-3.5 py-2.5 text-sm text-ink-muted"
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
                  className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm text-paper hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper-elevated transition-colors"
                >
                  核对答案
                </button>
              ) : (
                <div className="rounded-xl bg-accent/8 border border-accent/20 px-4 py-3.5">
                  <p className="text-sm font-semibold text-accent mb-1.5">
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
