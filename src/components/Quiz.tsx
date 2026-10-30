"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/lessons";

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  if (!questions.length) return null;

  return (
    <section id="quiz" className="scroll-mt-24">
      <h2 className="font-serif text-2xl text-ink mb-6">自测</h2>
      <div className="space-y-8">
        {questions.map((q, i) => {
          const open = revealed[q.id];
          return (
            <div
              key={q.id}
              className="rounded-xl border border-ink/10 bg-paper-elevated p-5 sm:p-6 shadow-soft"
            >
              <p className="text-sm text-accent font-medium mb-2">
                题 {i + 1}
              </p>
              <p className="text-ink leading-relaxed mb-4">{q.prompt}</p>
              {q.options.length > 0 && (
                <ul className="space-y-2 mb-5 text-ink-muted">
                  {q.options.map((opt) => (
                    <li
                      key={opt}
                      className="rounded-lg border border-ink/8 bg-paper px-3 py-2 text-sm"
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
                  className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-sm text-paper hover:bg-accent transition-colors"
                >
                  核对答案
                </button>
              ) : (
                <div className="rounded-lg bg-accent/8 border border-accent/20 px-4 py-3">
                  <p className="text-sm font-medium text-accent mb-1">
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
