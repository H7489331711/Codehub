"use client";

import { useState } from "react";
import Link from "next/link";

const BUGS = [
  {
    title: "Fix the print statement",
    code: `#include <stdio.h>\nint main() {\n    printf("Hello World")\n    return 0;\n}`,
    bugLine: 3, bug: 'Missing semicolon after printf("Hello World")',
    options: ['printf("Hello World");', 'print("Hello World");', 'printf["Hello World"];', 'Printf("Hello World");'],
    ans: 0, lang: "C",
  },
  {
    title: "Fix the Python loop",
    code: `for i in range(5)\n    print(i)`,
    bugLine: 1, bug: "Missing colon at end of for loop",
    options: ["for i in range(5):", "for i in range(5);", "for (i in range(5)):", "for i to range(5):"],
    ans: 0, lang: "Python",
  },
  {
    title: "Fix the variable declaration",
    code: `#include <stdio.h>\nint main() {\n    int x\n    x = 10;\n    printf("%d", x);\n    return 0;\n}`,
    bugLine: 3, bug: "Missing semicolon after int x",
    options: ["int x;", "int x =", "integer x;", "var x;"],
    ans: 0, lang: "C",
  },
  {
    title: "Fix the Python function",
    code: `def greet(name):\nprint("Hello", name)\n\ngreet("World")`,
    bugLine: 2, bug: "print() is not indented inside the function",
    options: ["    print('Hello', name)", "print 'Hello', name", "print('Hello' + name)", "Print('Hello', name)"],
    ans: 0, lang: "Python",
  },
  {
    title: "Fix the scanf",
    code: `#include <stdio.h>\nint main() {\n    int n;\n    scanf("%d", n);\n    printf("%d", n);\n    return 0;\n}`,
    bugLine: 4, bug: "Missing & before n in scanf",
    options: ["scanf(\"%d\", &n);", "scanf(\"%d\", *n);", "scanf(\"%i\", n);", "scan(\"%d\", &n);"],
    ans: 0, lang: "C",
  },
  {
    title: "Fix the Python if statement",
    code: `x = 10\nif x > 5\n    print("Greater")`,
    bugLine: 2, bug: "Missing colon after if condition",
    options: ["if x > 5:", "if (x > 5):", "if x > 5;", "if x > 5 then:"],
    ans: 0, lang: "Python",
  },
  {
    title: "Fix the array index",
    code: `#include <stdio.h>\nint main() {\n    int arr[3] = {1, 2, 3};\n    printf("%d", arr[3]);\n    return 0;\n}`,
    bugLine: 4, bug: "Array index out of bounds! arr has indices 0,1,2",
    options: ["printf(\"%d\", arr[2]);", "printf(\"%d\", arr[4]);", "printf(\"%d\", arr[0]);", "printf(\"%d\", arr[-1]);"],
    ans: 0, lang: "C",
  },
  {
    title: "Fix the Python list",
    code: `fruits = ["apple", "banana", "mango"\nprint(fruits[0])`,
    bugLine: 1, bug: "Missing closing bracket ]",
    options: ['fruits = ["apple", "banana", "mango"]', 'fruits = ("apple", "banana", "mango")', 'fruits = {"apple", "banana", "mango"}', 'fruits = ["apple" "banana" "mango"]'],
    ans: 0, lang: "Python",
  },
];

export default function BugHunt() {
  const [bugs] = useState(() => [...BUGS].sort(() => Math.random() - 0.5).slice(0, 6));
  const [current, setCurrent]   = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore]       = useState(0);
  const [done, setDone]         = useState(false);

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === bugs[current].ans) setScore(s => s + 1);
  };

  const next = () => {
    if (current + 1 >= bugs.length) { setDone(true); return; }
    setCurrent(c => c + 1);
    setSelected(null);
    setAnswered(false);
  };

  if (done) {
    const pct = Math.round((score / bugs.length) * 100);
    return (
      <div className="max-w-lg mx-auto text-center space-y-5 py-8">
        <div className="text-6xl">{pct >= 70 ? "🎉" : "😊"}</div>
        <h2 className="text-2xl font-black text-slate-800">Bug Hunt Complete!</h2>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <p className="text-5xl font-black text-red-500 mb-1">{score}/{bugs.length}</p>
          <p className="text-slate-500 text-sm">Bugs found correctly</p>
          <p className="mt-4 text-slate-600 font-medium">
            {pct >= 70 ? "Great debugging skills! 🐛✓" : "Keep practicing debugging! 💪"}
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => window.location.reload()}
            className="px-5 py-2.5 bg-red-500 text-white rounded-xl text-sm font-semibold hover:bg-red-400">
            Hunt Again
          </button>
          <Link href="/games" className="px-5 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50">
            Back to Games
          </Link>
        </div>
      </div>
    );
  }

  const b = bugs[current];

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <Link href="/games" className="text-sm text-slate-500 hover:text-slate-800">← Games</Link>
        <span className="text-sm font-semibold text-slate-600">{current + 1}/{bugs.length}</span>
      </div>

      <div className="w-full bg-slate-100 rounded-full h-2">
        <div className="bg-red-500 h-2 rounded-full transition-all" style={{ width: `${(current / bugs.length) * 100}%` }} />
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${b.lang === "Python" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>{b.lang}</span>
        <span className="text-slate-500">Score: <strong className="text-red-500">{score}</strong></span>
      </div>

      {/* Problem */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🐛</span>
          <h3 className="font-bold text-slate-800">{b.title}</h3>
        </div>

        {/* Code */}
        <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
          {b.code.split("\n").map((line, i) => (
            <div key={i} className={`flex gap-3 ${i + 1 === b.bugLine ? "bg-red-500/20 rounded" : ""}`}>
              <span className="text-slate-500 select-none w-5 shrink-0">{i + 1}</span>
              <span className={`${i + 1 === b.bugLine ? "text-red-300" : "text-green-300"}`}>{line || " "}</span>
              {i + 1 === b.bugLine && <span className="text-red-400 ml-2">← 🐛 Bug here!</span>}
            </div>
          ))}
        </div>

        <div className="mt-3 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
          <p className="text-red-700 text-xs font-semibold">🔍 Bug: {b.bug}</p>
        </div>
      </div>

      <p className="text-slate-600 font-semibold text-sm">Choose the correct fix:</p>

      <div className="grid grid-cols-1 gap-3">
        {b.options.map((opt, i) => {
          let cls = "bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:bg-red-50";
          if (answered) {
            if (i === b.ans)        cls = "bg-green-50 border-green-400 text-green-800";
            else if (i === selected) cls = "bg-red-50 border-red-400 text-red-800";
            else                    cls = "bg-white border-slate-100 text-slate-400";
          }
          return (
            <button key={i} onClick={() => handleAnswer(i)} disabled={answered}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 font-mono text-sm transition-all ${cls}`}>
              {opt}
              {answered && i === b.ans && " ✓"}
              {answered && i === selected && i !== b.ans && " ✗"}
            </button>
          );
        })}
      </div>

      {answered && (
        <button onClick={next}
          className="w-full py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-400 transition-colors">
          {current + 1 >= bugs.length ? "See Results 🎉" : "Next Bug →"}
        </button>
      )}
    </div>
  );
}