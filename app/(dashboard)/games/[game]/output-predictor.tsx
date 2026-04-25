"use client";

import { useState } from "react";
import Link from "next/link";

const PUZZLES = [
  { code: `x = 5\ny = 3\nprint(x + y)`, options: ["8", "53", "15", "2"], ans: 0, lang: "Python" },
  { code: `x = 10\nif x > 5:\n    print("Yes")\nelse:\n    print("No")`, options: ["Yes", "No", "Error", "None"], ans: 0, lang: "Python" },
  { code: `for i in range(3):\n    print(i)`, options: ["0 1 2", "1 2 3", "0 1 2 3", "Error"], ans: 0, lang: "Python" },
  { code: `print(10 % 3)`, options: ["3", "1", "0", "2"], ans: 1, lang: "Python" },
  { code: `a = [1, 2, 3]\nprint(len(a))`, options: ["2", "3", "4", "1"], ans: 1, lang: "Python" },
  { code: `x = 2\nprint(x ** 4)`, options: ["8", "16", "6", "4"], ans: 1, lang: "Python" },
  { code: `s = "Hello"\nprint(s[1])`, options: ["H", "e", "l", "Error"], ans: 1, lang: "Python" },
  { code: `print(bool(0))`, options: ["True", "False", "0", "None"], ans: 1, lang: "Python" },
  { code: `#include<stdio.h>\nint main(){\n    int x=5, y=2;\n    printf("%d", x/y);\n}`, options: ["2.5", "2", "3", "Error"], ans: 1, lang: "C" },
  { code: `#include<stdio.h>\nint main(){\n    int i;\n    for(i=0;i<3;i++)\n        printf("%d ",i);\n}`, options: ["1 2 3", "0 1 2", "0 1 2 3", "Error"], ans: 1, lang: "C" },
  { code: `x = "Hello"\ny = "World"\nprint(x + " " + y)`, options: ["HelloWorld", "Hello World", "Error", "Hello+World"], ans: 1, lang: "Python" },
  { code: `nums = [3, 1, 4, 1, 5]\nprint(max(nums))`, options: ["3", "5", "4", "1"], ans: 1, lang: "Python" },
];

export default function OutputPredictor() {
  const [puzzles] = useState(() => [...PUZZLES].sort(() => Math.random() - 0.5).slice(0, 8));
  const [current, setCurrent]   = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore]       = useState(0);
  const [done, setDone]         = useState(false);

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === puzzles[current].ans) setScore(s => s + 1);
  };

  const next = () => {
    if (current + 1 >= puzzles.length) { setDone(true); return; }
    setCurrent(c => c + 1);
    setSelected(null);
    setAnswered(false);
  };

  if (done) {
    const pct = Math.round((score / puzzles.length) * 100);
    return (
      <div className="max-w-lg mx-auto text-center space-y-5 py-8">
        <div className="text-6xl">{pct >= 70 ? "🔮" : "😊"}</div>
        <h2 className="text-2xl font-black text-slate-800">Predictor Complete!</h2>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="text-5xl font-black text-purple-600 mb-1">{score}/{puzzles.length}</p>
          <p className="text-slate-500 text-sm">Outputs predicted correctly</p>
          <p className="mt-4 text-slate-600 font-medium">
            {pct >= 70 ? "You think like a compiler! 🚀" : "Practice more to sharpen your skills! 💪"}
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => window.location.reload()}
            className="px-5 py-2.5 bg-purple-600 text-white rounded-xl text-sm font-semibold hover:bg-purple-500">
            Try Again
          </button>
          <Link href="/games" className="px-5 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50">
            Back to Games
          </Link>
        </div>
      </div>
    );
  }

  const p = puzzles[current];

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <Link href="/games" className="text-sm text-slate-500 hover:text-slate-800">← Games</Link>
        <span className="text-sm font-semibold text-slate-600">{current + 1}/{puzzles.length}</span>
      </div>

      <div className="w-full bg-slate-100 rounded-full h-2">
        <div className="bg-purple-500 h-2 rounded-full transition-all" style={{ width: `${(current / puzzles.length) * 100}%` }} />
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${p.lang === "Python" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>{p.lang}</span>
        <span className="text-slate-500">Score: <strong className="text-purple-600">{score}</strong></span>
      </div>

      {/* Code */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <p className="text-slate-500 text-sm font-semibold mb-3">🔮 What will this code output?</p>
        <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
          {p.code.split("\n").map((line, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-slate-500 select-none w-5 shrink-0">{i + 1}</span>
              <span className="text-green-300">{line}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-slate-600 font-semibold text-sm">Select the correct output:</p>

      <div className="grid grid-cols-2 gap-3">
        {p.options.map((opt, i) => {
          let cls = "bg-white border border-slate-200 text-slate-700 hover:border-purple-300 hover:bg-purple-50";
          if (answered) {
            if (i === p.ans)        cls = "bg-green-50 border-green-400 text-green-800";
            else if (i === selected) cls = "bg-red-50 border-red-400 text-red-800";
            else                    cls = "bg-white border-slate-100 text-slate-400";
          }
          return (
            <button key={i} onClick={() => handleAnswer(i)} disabled={answered}
              className={`text-center px-4 py-3 rounded-xl border-2 font-mono font-semibold text-sm transition-all ${cls}`}>
              {opt}
              {answered && i === p.ans && " ✓"}
              {answered && i === selected && i !== p.ans && " ✗"}
            </button>
          );
        })}
      </div>

      {answered && (
        <button onClick={next}
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-500 transition-colors">
          {current + 1 >= puzzles.length ? "See Results 🎉" : "Next →"}
        </button>
      )}
    </div>
  );
}