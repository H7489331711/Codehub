"use client";

import { useState } from "react";
import Link from "next/link";
import { Chapter, QuizQuestion } from "@/app/component/data/cssData";

function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-200">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <span className="text-xs text-gray-400 font-medium">{label || "Syntax"}</span>
        <button onClick={copy} className="text-xs text-gray-400 hover:text-white transition-colors">
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <pre className="bg-gray-900 text-blue-300 text-sm p-4 overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ExampleBlock({ code, output, label }: { code: string; output?: string; label?: string }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-blue-200">
      <div className="bg-blue-600 px-4 py-2">
        <span className="text-xs text-white font-medium">▶ {label || "Example"}</span>
      </div>
      <pre className="bg-gray-900 text-blue-300 text-sm p-4 overflow-x-auto">{code}</pre>
      {output && (
        <>
          <div className="bg-gray-700 px-4 py-1.5">
            <span className="text-xs text-gray-300 font-medium">Result:</span>
          </div>
          <pre className="bg-gray-800 text-white text-sm p-4 overflow-x-auto">{output}</pre>
        </>
      )}
    </div>
  );
}

function QuizSection({ quiz }: { quiz: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  const select = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const score = quiz.filter((q, i) => answers[i] === q.answer).length;

  return (
    <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-blue-600 px-6 py-4">
        <h3 className="text-white font-bold text-lg">Chapter Quiz</h3>
        <p className="text-blue-100 text-sm">{quiz.length} questions • Test your knowledge</p>
      </div>

      {!submitted ? (
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Question {current + 1} of {quiz.length}</span>
            <span className="text-sm text-gray-500">Answered: {Object.keys(answers).length}/{quiz.length}</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6">
            <div className="h-1.5 bg-blue-500 rounded-full transition-all"
              style={{ width: `${((current + 1) / quiz.length) * 100}%` }} />
          </div>

          <p className="text-gray-800 font-medium text-base mb-4">
            {current + 1}. {quiz[current].question}
          </p>

          <div className="space-y-2 mb-6">
            {quiz[current].options.map((opt, oi) => (
              <button key={oi} onClick={() => select(current, oi)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                  answers[current] === oi
                    ? "bg-blue-50 border-blue-400 text-blue-700 font-medium"
                    : "bg-gray-50 border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50"
                }`}>
                <span className="font-medium mr-2">{["A", "B", "C", "D"][oi]}.</span>{opt}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button onClick={() => setCurrent((p) => Math.max(0, p - 1))} disabled={current === 0}
              className="px-4 py-2 text-sm border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 disabled:opacity-40">
              ← Previous
            </button>
            {current < quiz.length - 1 ? (
              <button onClick={() => setCurrent((p) => p + 1)}
                className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-xl">
                Next →
              </button>
            ) : (
              <button onClick={() => setSubmitted(true)}
                disabled={Object.keys(answers).length < quiz.length}
                className="px-5 py-2 text-sm bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white rounded-xl font-medium">
                Submit Quiz ✓
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            {quiz.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-7 h-7 rounded-full text-xs font-medium transition-all ${
                  i === current ? "bg-blue-600 text-white"
                    : answers[i] !== undefined ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className={`text-center py-6 rounded-xl mb-6 ${
            score >= quiz.length * 0.8 ? "bg-green-50 border border-green-200"
              : score >= quiz.length * 0.5 ? "bg-yellow-50 border border-yellow-200"
              : "bg-red-50 border border-red-200"
          }`}>
            <p className="text-4xl mb-1">
              {score >= quiz.length * 0.8 ? "🎉" : score >= quiz.length * 0.5 ? "👍" : "📚"}
            </p>
            <p className="text-2xl font-bold text-gray-800">{score} / {quiz.length}</p>
            <p className="text-sm text-gray-500 mt-1">
              {score >= quiz.length * 0.8 ? "Excellent! You mastered this chapter!"
                : score >= quiz.length * 0.5 ? "Good job! Review the incorrect ones."
                : "Keep practicing! Re-read the chapter."}
            </p>
          </div>

          <div className="space-y-4">
            {quiz.map((q, qi) => (
              <div key={qi} className="border border-gray-100 rounded-xl p-4">
                <p className="text-sm font-medium text-gray-700 mb-2">{qi + 1}. {q.question}</p>
                {q.options.map((opt, oi) => (
                  <div key={oi} className={`text-xs px-3 py-2 rounded-lg mb-1 ${
                    oi === q.answer ? "bg-green-100 text-green-700 font-medium"
                      : oi === answers[qi] && oi !== q.answer ? "bg-red-100 text-red-600"
                      : "text-gray-400"
                  }`}>
                    {["A", "B", "C", "D"][oi]}. {opt}
                    {oi === q.answer && " ✓"}
                    {oi === answers[qi] && oi !== q.answer && " ✗"}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button onClick={() => { setAnswers({}); setSubmitted(false); setCurrent(0); }}
            className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium text-sm">
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default function CssChapterClient({
  chapter, prevChapter, nextChapter,
}: {
  chapter: Chapter;
  prevChapter: Chapter | null;
  nextChapter: Chapter | null;
}) {
  const levelColor = chapter.level === 1
    ? "bg-blue-100 text-blue-600"
    : "bg-indigo-100 text-indigo-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
      <div className="max-w-3xl mx-auto">

        <Link href="/courses/css" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 mb-4 transition-colors">
          ← Back to CSS Course
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${levelColor}`}>
              {chapter.levelIcon} Level {chapter.level}: {chapter.levelName}
            </span>
            <span className="text-xs text-gray-400">Chapter {chapter.chapterNo}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">{chapter.title}</h1>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
          {chapter.content.map((block, i) => {
            if (block.type === "text") return (
              <div key={i} className="mb-5">
                {"heading" in block && block.heading && (
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 mt-2">{block.heading}</h2>
                )}
                <p className="text-gray-600 text-sm leading-7 whitespace-pre-line">{block.content}</p>
              </div>
            );
            if (block.type === "syntax") return (
              <CodeBlock key={i} code={block.code} label={"label" in block ? block.label : "Syntax"} />
            );
            if (block.type === "example") return (
              <ExampleBlock key={i} code={block.code}
                output={"output" in block ? block.output : undefined}
                label={"label" in block ? block.label : undefined} />
            );
            if (block.type === "tip") return (
              <div key={i} className="flex gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 my-4">
                <span className="text-blue-500 text-lg shrink-0">💡</span>
                <p className="text-blue-700 text-sm leading-relaxed">{block.content}</p>
              </div>
            );
            if (block.type === "warning") return (
              <div key={i} className="flex gap-3 bg-red-50 border border-red-200 rounded-xl p-4 my-4">
                <span className="text-red-500 text-lg shrink-0">⚠️</span>
                <p className="text-red-700 text-sm leading-relaxed">{block.content}</p>
              </div>
            );
            if (block.type === "table") return (
              <div key={i} className="my-4">
                {"heading" in block && block.heading && (
                  <h3 className="text-base font-semibold text-gray-700 mb-2">{block.heading}</h3>
                )}
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <pre className="bg-gray-50 text-xs text-gray-700 p-4 leading-relaxed font-mono whitespace-pre">{block.content}</pre>
                </div>
              </div>
            );
            return null;
          })}
        </div>

        <QuizSection quiz={chapter.quiz} />

        <div className="flex items-center justify-between mt-6 gap-4">
          {prevChapter ? (
            <Link href={`/courses/css/${prevChapter.id}`}
              className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
              <p className="text-xs text-gray-400 mb-0.5">← Previous</p>
              <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 truncate">{prevChapter.title}</p>
            </Link>
          ) : <div className="flex-1" />}

          {nextChapter ? (
            <Link href={`/courses/css/${nextChapter.id}`}
              className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors group text-right">
              <p className="text-xs text-gray-400 mb-0.5">Next →</p>
              <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 truncate">{nextChapter.title}</p>
            </Link>
          ) : (
            <div className="flex-1 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-right">
              <p className="text-xs text-green-500 mb-0.5">🎉 Completed!</p>
              <p className="text-sm font-medium text-green-700">Course Finished!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}