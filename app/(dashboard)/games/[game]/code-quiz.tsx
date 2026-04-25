"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const QUESTIONS = [
  { q: "What is the output of: print(2 ** 3) in Python?", options: ["6", "8", "9", "5"], ans: 1, lang: "Python" },
  { q: "Which keyword is used to define a function in Python?", options: ["function", "def", "func", "define"], ans: 1, lang: "Python" },
  { q: "What does 'int' mean in C?", options: ["Integer data type", "Internal", "Input", "Interface"], ans: 0, lang: "C" },
  { q: "What is the correct syntax to print in C?", options: ["print()", "cout<<", "printf()", "echo"], ans: 2, lang: "C" },
  { q: "In Python, what does len([1,2,3]) return?", options: ["2", "3", "4", "0"], ans: 1, lang: "Python" },
  { q: "Which HTML tag is used for the largest heading?", options: ["<h6>", "<head>", "<h1>", "<title>"], ans: 2, lang: "HTML" },
  { q: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], ans: 1, lang: "CSS" },
  { q: "What is the output of: print(10 % 3)?", options: ["3", "1", "0", "2"], ans: 1, lang: "Python" },
  { q: "Which symbol is used for single-line comment in C?", options: ["#", "//", "/*", "--"], ans: 1, lang: "C" },
  { q: "In Python, which loop is used when number of iterations is known?", options: ["while", "do-while", "for", "repeat"], ans: 2, lang: "Python" },
  { q: "What is the size of int in C (32-bit)?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], ans: 2, lang: "C" },
  { q: "Which CSS property changes text color?", options: ["font-color", "text-color", "color", "foreground"], ans: 2, lang: "CSS" },
  { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Markup Language", "None"], ans: 0, lang: "HTML" },
  { q: "In Python, what is the output of bool(0)?", options: ["True", "False", "None", "Error"], ans: 1, lang: "Python" },
  { q: "Which C function is used to read input?", options: ["read()", "input()", "scanf()", "cin"], ans: 2, lang: "C" },
];

const LANG_COLORS: Record<string, string> = {
  Python: "bg-blue-100 text-blue-700",
  C:      "bg-gray-100 text-gray-700",
  HTML:   "bg-orange-100 text-orange-700",
  CSS:    "bg-indigo-100 text-indigo-700",
};

export default function CodeQuiz() {
  const [questions] = useState(() => [...QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10));
  const [current, setCurrent]   = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore]       = useState(0);
  const [answered, setAnswered] = useState(false);
  const [done, setDone]         = useState(false);
  const [timer, setTimer]       = useState(15);

  useEffect(() => {
    if (done || answered) return;
    if (timer === 0) { handleAnswer(-1); return; }
    const t = setTimeout(() => setTimer(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timer, done, answered]);

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[current].ans) setScore(s => s + 1);
  };

  const next = () => {
    if (current + 1 >= questions.length) { setDone(true); return; }
    setCurrent(c => c + 1);
    setSelected(null);
    setAnswered(false);
    setTimer(15);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-lg mx-auto text-center space-y-5 py-8">
        <div className="text-6xl">{pct >= 70 ? "🎉" : pct >= 40 ? "😊" : "😅"}</div>
        <h2 className="text-2xl font-black text-slate-800">Quiz Complete!</h2>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="text-5xl font-black text-indigo-600 mb-1">{score}/{questions.length}</p>
          <p className="text-slate-500 text-sm">{pct}% correct</p>
          <div className="w-full bg-slate-100 rounded-full h-3 mt-4">
            <div className="bg-indigo-500 h-3 rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-4 text-slate-600 font-medium">
            {pct >= 70 ? "Excellent! You're a coding pro! 🚀" : pct >= 40 ? "Good effort! Keep practicing! 💪" : "Keep learning and try again! 📚"}
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => window.location.reload()}
            className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-500">
            Play Again
          </button>
          <Link href="/games" className="px-5 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50">
            Back to Games
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link href="/games" className="text-sm text-slate-500 hover:text-slate-800">← Games</Link>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-600">{current + 1}/{questions.length}</span>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${timer <= 5 ? "bg-red-100 text-red-600" : "bg-indigo-100 text-indigo-600"}`}>
            {timer}s
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full bg-slate-100 rounded-full h-2">
        <div className="bg-indigo-500 h-2 rounded-full transition-all" style={{ width: `${((current) / questions.length) * 100}%` }} />
      </div>

      {/* Score */}
      <div className="flex items-center justify-between text-sm">
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${LANG_COLORS[q.lang]}`}>{q.lang}</span>
        <span className="text-slate-500">Score: <strong className="text-indigo-600">{score}</strong></span>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <p className="text-slate-800 font-semibold text-lg leading-relaxed">{q.q}</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3">
        {q.options.map((opt, i) => {
          let cls = "bg-white border border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50";
          if (answered) {
            if (i === q.ans)      cls = "bg-green-50 border-green-400 text-green-800";
            else if (i === selected) cls = "bg-red-50 border-red-400 text-red-800";
            else                  cls = "bg-white border-slate-100 text-slate-400";
          }
          return (
            <button key={i} onClick={() => handleAnswer(i)} disabled={answered}
              className={`w-full text-left px-5 py-3.5 rounded-xl border-2 font-medium text-sm transition-all ${cls}`}>
              <span className="mr-3 font-bold">{["A", "B", "C", "D"][i]}.</span>{opt}
              {answered && i === q.ans && " ✓"}
              {answered && i === selected && i !== q.ans && " ✗"}
            </button>
          );
        })}
      </div>

      {answered && (
        <button onClick={next}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-colors">
          {current + 1 >= questions.length ? "See Results 🎉" : "Next Question →"}
        </button>
      )}
    </div>
  );
}