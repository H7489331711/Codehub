"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";

type Problem  = { id: number; title: string; hint: string; description: string };
type LevelInfo = { name: string; icon: string; coins: number; border: string; bg: string; badge: string };
type Lang     = "python" | "c";

const LANGUAGES = [
  { id: "python" as Lang, label: "Python3", ext: "py" },
  { id: "c"      as Lang, label: "C",       ext: "c"  },
];

const STARTER: Record<Lang, string> = {
  python: `# Write your solution here\n`,
  c: `#include <stdio.h>\n\nint main() {\n    // Write your solution here\n    \n    return 0;\n}\n`,
};

const PAIRS: Record<string, string> = {
  "(": ")", "[": "]", "{": "}", '"': '"', "'": "'",
};

const SNIPPETS: Record<Lang, Record<string, string>> = {
  python: {
    "for":    "for i in range():\n    ",
    "if":     "if :\n    ",
    "elif":   "elif :\n    ",
    "else":   "else:\n    ",
    "while":  "while :\n    ",
    "def":    "def ():\n    ",
    "print":  "print()",
    "input":  "input()",
    "range":  "range()",
    "int":    "int()",
    "float":  "float()",
    "str":    "str()",
    "len":    "len()",
    "return": "return ",
  },
  c: {
    "for":    "for (int i = 0; i < ; i++) {\n    \n}",
    "if":     "if () {\n    \n}",
    "else":   "else {\n    \n}",
    "while":  "while () {\n    \n}",
    "printf": 'printf("\\n");',
    "scanf":  'scanf("", &);',
    "int":    "int ",
    "float":  "float ",
    "double": "double ",
    "char":   "char ",
    "return": "return ",
    "main":   "int main() {\n    \n    return 0;\n}",
  },
};

const TESTS: Record<string, { stdin: string; expected: string }[]> = {
  "Print Hello World":                   [{ stdin: "",         expected: "hello world" }],
  "Print a number":                      [{ stdin: "",         expected: "42"    }],
  "Print sum of two numbers":            [{ stdin: "3 5",      expected: "8"     }, { stdin: "10 20",    expected: "30"   }],
  "Print subtraction of two numbers":    [{ stdin: "10 3",     expected: "7"     }, { stdin: "20 5",     expected: "15"   }],
  "Print multiplication of two numbers": [{ stdin: "4 5",      expected: "20"    }, { stdin: "3 7",      expected: "21"   }],
  "Print division of two numbers":       [{ stdin: "10 2",     expected: "5"     }, { stdin: "9 3",      expected: "3"    }],
  "Find square of a number":             [{ stdin: "4",        expected: "16"    }, { stdin: "5",        expected: "25"   }],
  "Find cube of a number":               [{ stdin: "3",        expected: "27"    }, { stdin: "2",        expected: "8"    }],
  "Print next number (N + 1)":           [{ stdin: "7",        expected: "8"     }, { stdin: "10",       expected: "11"   }],
  "Print previous number (N - 1)":       [{ stdin: "7",        expected: "6"     }, { stdin: "10",       expected: "9"    }],
  "Print sum of three numbers":          [{ stdin: "1 2 3",    expected: "6"     }, { stdin: "10 20 30", expected: "60"   }],
  "Find average of three numbers":       [{ stdin: "10 20 30", expected: "20"    }],
  "Print remainder of two numbers":      [{ stdin: "10 3",     expected: "1"     }, { stdin: "17 5",     expected: "2"    }],
  "Convert number into double (N * 2)":  [{ stdin: "5",        expected: "10"    }, { stdin: "7",        expected: "14"   }],
  "Convert number into half (N / 2)":    [{ stdin: "10",       expected: "5"     }, { stdin: "6",        expected: "3"    }],
  "Print product of three numbers":      [{ stdin: "2 3 4",    expected: "24"    }, { stdin: "5 6 7",    expected: "210"  }],
  "Print sum of four numbers":           [{ stdin: "1 2 3 4",  expected: "10"    }, { stdin: "5 5 5 5",  expected: "20"   }],
  "Find average of two numbers":         [{ stdin: "10 20",    expected: "15"    }, { stdin: "4 6",      expected: "5"    }],
  "Print difference of three numbers":   [{ stdin: "20 5 3",   expected: "12"    }, { stdin: "30 10 5",  expected: "15"   }],
  "Check if a number is even or odd":    [{ stdin: "4",        expected: "even"  }, { stdin: "7",        expected: "odd"  }],
  "Find largest of three numbers":       [{ stdin: "10 25 7",  expected: "25"    }, { stdin: "3 1 9",    expected: "9"    }],
  "Check if number is greater than 18":  [{ stdin: "20",       expected: "adult" }, { stdin: "15",       expected: "minor"}],
  "Find factorial of a number":          [{ stdin: "5",        expected: "120"   }, { stdin: "4",        expected: "24"   }],
  "Reverse a number":                    [{ stdin: "12345",    expected: "54321" }, { stdin: "987",      expected: "789"  }],
  "Find sum of digits of a number":      [{ stdin: "123",      expected: "6"     }, { stdin: "456",      expected: "15"   }],
  "Check if a number is palindrome":     [{ stdin: "121",      expected: "palindrome" }, { stdin: "123", expected: "not" }],
  "Check if a year is leap year":        [{ stdin: "2000",     expected: "leap"  }, { stdin: "1900",     expected: "not"  }],
  "Find sum of first N natural numbers": [{ stdin: "10",       expected: "55"    }, { stdin: "5",        expected: "15"   }],
  "Print numbers from N to 1":           [{ stdin: "5",        expected: "1"     }],
  "Find largest digit in a number":      [{ stdin: "3947",     expected: "9"     }, { stdin: "1234",     expected: "4"    }],
};

export default function ProblemClient({ level, problem, info, prevProblem, nextProblem, totalProblems }: {
  level: string; problem: Problem; info: LevelInfo;
  prevProblem: Problem | null; nextProblem: Problem | null; totalProblems: number;
}) {
  const [lang, setLang]             = useState<Lang>("python");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [code, setCode]             = useState(STARTER["python"]);
  const [stdin, setStdin]           = useState("");
  const [runOutput, setRunOutput]   = useState("");        // Raw output from Run
  const [runError, setRunError]     = useState(false);
  const [isRunning, setIsRunning]   = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult]         = useState<"correct"|"wrong"|null>(null);
  const [feedback, setFeedback]     = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [totalCoins, setTotalCoins] = useState(0);
  const [coinsEarned, setCoinsEarned] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  const [autoSug, setAutoSug]       = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTotalCoins(parseInt(localStorage.getItem("codehub_coins") || "0"));
  }, []);

  const problemKey = `${level}-${problem.id}`;
  const alreadySolved = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("codehub_solved") || "[]").includes(problemKey)
    : false;

  const changeLang = (l: Lang) => {
    setLang(l); setCode(STARTER[l]);
    setRunOutput(""); setRunError(false);
    setResult(null); setFeedback(""); setSuggestion("");
    setAutoSug([]); setShowLangMenu(false);
  };

  const blockPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    setRunOutput("⛔ Copy-paste not allowed! Write the code yourself.");
    setRunError(true);
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const ta = textareaRef.current; if (!ta) return;
    const { selectionStart: s, selectionEnd: end, value } = ta;
    if (e.key === "Tab") {
      e.preventDefault();
      setCode(value.slice(0,s) + "    " + value.slice(end));
      setTimeout(() => { ta.selectionStart = ta.selectionEnd = s + 4; }, 0); return;
    }
    if (PAIRS[e.key]) {
      e.preventDefault();
      setCode(value.slice(0,s) + e.key + PAIRS[e.key] + value.slice(end));
      setTimeout(() => { ta.selectionStart = ta.selectionEnd = s + 1; }, 0); return;
    }
    if (Object.values(PAIRS).includes(e.key) && value[s] === e.key) {
      e.preventDefault();
      setTimeout(() => { ta.selectionStart = ta.selectionEnd = s + 1; }, 0); return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const ls = value.lastIndexOf("\n", s - 1) + 1;
      const indent = value.slice(ls, s).match(/^(\s*)/)?.[1] || "";
      const extra  = ["{", ":", "("].includes(value[s-1]) ? "    " : "";
      setCode(value.slice(0,s) + "\n" + indent + extra + value.slice(end));
      setTimeout(() => { ta.selectionStart = ta.selectionEnd = s + 1 + indent.length + extra.length; }, 0); return;
    }
    if (e.key === "Backspace" && s === end && PAIRS[value[s-1]] === value[s]) {
      e.preventDefault();
      setCode(value.slice(0,s-1) + value.slice(s+1));
      setTimeout(() => { ta.selectionStart = ta.selectionEnd = s - 1; }, 0);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value; setCode(val);
    const pos = e.target.selectionStart;
    const lineStart = val.lastIndexOf("\n", pos - 1) + 1;
    const typed = val.substring(lineStart, pos).trim();
    if (typed.length >= 2) {
      setAutoSug(Object.keys(SNIPPETS[lang]).filter(k => k.startsWith(typed) && k !== typed).slice(0, 6));
    } else { setAutoSug([]); }
  };

  const applySnippet = (key: string) => {
    const ta = textareaRef.current; if (!ta) return;
    const pos = ta.selectionStart; const val = code;
    const lineStart = val.lastIndexOf("\n", pos - 1) + 1;
    const typed = val.substring(lineStart, pos).trim();
    const indentLen = val.substring(lineStart).match(/^(\s*)/)?.[1].length || 0;
    const indent = val.substring(lineStart, lineStart + indentLen);
    const snippet = SNIPPETS[lang][key].split("\n").map((l: string, i: number) => i === 0 ? l : indent + l).join("\n");
    setCode(val.substring(0, pos - typed.length) + snippet + val.substring(pos));
    setAutoSug([]);
    setTimeout(() => ta.focus(), 0);
  };

  // ── Run Code ─────────────────────────────────────────────
  const handleRun = async () => {
    if (!code.trim()) return;
    setIsRunning(true); setRunOutput(""); setRunError(false);
    setResult(null); setFeedback(""); setSuggestion("");
    try {
      const res = await fetch("/api/run-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, lang, stdin }),
      });
      const data = await res.json();
      setRunOutput(data.output || "");
      setRunError(data.error || false);
    } catch {
      setRunOutput("Failed to connect to compiler. Please try again.");
      setRunError(true);
    } finally { setIsRunning(false); }
  };

  // ── Submit ────────────────────────────────────────────────
  const handleCheck = async () => {
    if (!code.trim() || code === STARTER[lang]) {
      setRunOutput("Write your solution first!"); setRunError(true); return;
    }
    setIsChecking(true); setResult(null); setFeedback(""); setSuggestion("");

    // First run to show output
    try {
      const runRes = await fetch("/api/run-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, lang, stdin: TESTS[problem.title]?.[0]?.stdin || "" }),
      });
      const runData = await runRes.json();
      setRunOutput(runData.output || "");
      setRunError(runData.error || false);
    } catch {}

    // Then check
    try {
      const res = await fetch("/api/check-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, lang, problem }),
      });
      const data = await res.json();

      setResult(data.correct ? "correct" : "wrong");
      setFeedback(data.feedback || "");
      setSuggestion(data.suggestion || "");

      if (data.correct) {
        if (!alreadySolved) {
          const newCoins = totalCoins + info.coins;
          const solved = JSON.parse(localStorage.getItem("codehub_solved") || "[]");
          solved.push(problemKey);
          localStorage.setItem("codehub_coins", String(newCoins));
          localStorage.setItem("codehub_solved", JSON.stringify(solved));
          setTotalCoins(newCoins); setCoinsEarned(info.coins);
          // Save to MongoDB with solved_list
          fetch("/api/leaderboard", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              coins:       newCoins,
              solved:      solved.length,
              solved_list: solved,
            }),
          }).catch(() => {});
        } else { setCoinsEarned(0); }
        setTimeout(() => setShowCongrats(true), 400);
      }
    } catch {
      setResult("wrong"); setFeedback("❌ Could not verify. Please try again.");
    } finally { setIsChecking(false); }
  };

  const lineCount = code.split("\n").length;
  const currentLang = LANGUAGES.find(l => l.id === lang)!;

  return (
    <>
      {/* Congrats Modal */}
      {showCongrats && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="text-7xl mb-3">🎉</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Congratulations!</h2>
            <p className="text-slate-500 text-sm mb-5">You solved <strong>{problem.title}</strong>!</p>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-5 mb-5">
              {coinsEarned > 0
                ? <><p className="text-5xl font-black text-yellow-500">+{coinsEarned}</p><p className="text-yellow-600 font-semibold mt-1">🪙 Coins Earned!</p></>
                : <p className="text-yellow-600 font-semibold">✅ Already solved!</p>}
              <p className="text-xs text-yellow-500 mt-2">Total: 🪙 {totalCoins} coins</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => { setShowCongrats(false); setCode(STARTER[lang]); setResult(null); setRunOutput(""); setSuggestion(""); }}
                className="flex-1 py-3 border-2 border-slate-200 rounded-xl text-slate-600 text-sm font-medium hover:bg-slate-50">
                Try Again
              </button>
              {nextProblem
                ? <Link href={`/practice/${level}/${nextProblem.id}`} onClick={() => setShowCongrats(false)}
                    className="flex-1 py-3 bg-indigo-600 rounded-xl text-white text-sm font-semibold text-center hover:bg-indigo-500">Next →</Link>
                : <Link href={`/practice/${level}`} onClick={() => setShowCongrats(false)}
                    className="flex-1 py-3 bg-green-600 rounded-xl text-white text-sm font-semibold text-center hover:bg-green-500">Done! 🏆</Link>}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex items-center justify-between mb-4">
          <Link href={`/practice/${level}`} className="text-sm text-slate-500 hover:text-slate-800">← {info.name} Problems</Link>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${info.badge}`}>{info.icon} {info.name}</span>
            <span className="text-xs text-slate-400">Problem {problem.id}/{totalProblems}</span>
            <div className="bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-xl text-sm font-bold text-yellow-700">🪙 {totalCoins}</div>
            <div className="bg-indigo-50 border border-indigo-200 px-2 py-1.5 rounded-xl text-xs text-indigo-600">+{info.coins} on solve</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* LEFT */}
          <div className="space-y-4">
            {/* Problem */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-md font-mono">#{problem.id}</span>
                <h1 className="text-xl font-bold text-slate-800">{problem.title}</h1>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 mb-3 border border-slate-100">
                <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line font-mono">{problem.description}</p>
              </div>
              <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3">
                <span className="text-amber-500 shrink-0">💡</span>
                <p className="text-amber-800 text-xs leading-relaxed">{problem.hint}</p>
              </div>
            </div>

            {/* Output — Programiz style */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800 rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isRunning||isChecking ? "bg-amber-400 animate-pulse" : runError ? "bg-red-500" : runOutput ? "bg-green-500" : "bg-slate-500"}`} />
                  <span className="text-xs font-semibold text-slate-300">
                    {isRunning ? "Running..." : isChecking ? "Checking..." : "Output"}
                  </span>
                </div>
                {result && (
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${result==="correct" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                    {result==="correct" ? "✅ Accepted" : "❌ Wrong Answer"}
                  </span>
                )}
              </div>

              {/* Terminal-style output */}
              <div className="bg-[#1a1a2e] min-h-[150px] p-4 font-mono text-sm">
                {(isRunning || isChecking) && (
                  <div className="flex items-center gap-2 text-amber-400">
                    <span className="animate-spin inline-block">⟳</span>
                    <span>{isRunning ? "Compiling and running..." : "Running test cases..."}</span>
                  </div>
                )}
                {!isRunning && !isChecking && !runOutput && (
                  <p className="text-slate-600 italic text-sm">Click "Run Code" to see output here...</p>
                )}
                {!isRunning && !isChecking && runOutput && (
                  <pre className={`whitespace-pre-wrap leading-relaxed ${runError ? "text-red-400" : "text-green-300"}`}>
                    {runOutput}
                  </pre>
                )}
              </div>

              {/* AI Feedback */}
              {feedback && !isChecking && (
                <div className={`border-t px-4 py-3 ${result==="correct" ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"}`}>
                  <p className={`text-sm font-semibold whitespace-pre-wrap ${result==="correct" ? "text-green-800" : "text-red-700"}`}>{feedback}</p>
                  {suggestion && (
                    <div className="mt-3 bg-white border border-slate-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">💡 Correct Approach</p>
                      <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">{suggestion}</pre>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Custom Input */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-600">📥 Input (stdin)</span>
                  <span className="text-xs text-slate-400">for scanf / input()</span>
                </div>
                <span className="text-xs text-slate-400">space-separated values</span>
              </div>
              <textarea value={stdin} onChange={e => setStdin(e.target.value)}
                placeholder={"Example:\n3 5     (for two numbers)\n1 2 3   (for three numbers)"}
                rows={3}
                className="w-full px-4 py-3 text-sm font-mono text-slate-700 resize-none outline-none bg-white placeholder-slate-300" />
            </div>

            {/* Prev/Next */}
            <div className="flex gap-3">
              {prevProblem
                ? <Link href={`/practice/${level}/${prevProblem.id}`} className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-center text-slate-500 hover:border-indigo-300 hover:text-indigo-600">← #{prevProblem.id}</Link>
                : <div className="flex-1"/>}
              {nextProblem && <Link href={`/practice/${level}/${nextProblem.id}`} className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-center text-slate-500 hover:border-indigo-300 hover:text-indigo-600">#{nextProblem.id} →</Link>}
            </div>
          </div>

          {/* RIGHT - Editor */}
          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Editor header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800">
                <div className="relative">
                  <button onClick={() => setShowLangMenu(!showLangMenu)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm font-medium text-white transition-colors">
                    {currentLang.label}
                    <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${showLangMenu?"rotate-180":""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  {showLangMenu && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-30 overflow-hidden min-w-[140px]">
                      {LANGUAGES.map(l => (
                        <button key={l.id} onClick={() => changeLang(l.id)}
                          className={`flex items-center gap-2 w-full px-4 py-2.5 text-left text-sm hover:bg-indigo-50 transition-colors ${lang===l.id?"text-indigo-700 font-semibold":"text-slate-700"}`}>
                          {lang===l.id ? "✓" : <span className="w-4 inline-block"/>} {l.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-xs font-mono">solution.{currentLang.ext}</span>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 block"/>
                    <span className="w-3 h-3 rounded-full bg-amber-400 block"/>
                    <span className="w-3 h-3 rounded-full bg-green-500 block"/>
                  </div>
                </div>
              </div>

              {/* Code area */}
              <div className="relative bg-[#1e1e2e]" onClick={() => { setShowLangMenu(false); setAutoSug([]); }}>
                <div className="absolute left-0 top-0 w-10 h-full bg-[#252535] border-r border-slate-700 pt-3 flex flex-col items-end pr-2 pointer-events-none z-10 select-none overflow-hidden">
                  {Array.from({length: lineCount}, (_,i) => (
                    <span key={i} className="text-slate-600 text-xs leading-6 font-mono block">{i+1}</span>
                  ))}
                </div>
                <textarea
                  ref={textareaRef} value={code} onChange={handleChange}
                  onPaste={blockPaste} onKeyDown={handleKeyDown}
                  onClick={() => setShowLangMenu(false)}
                  spellCheck={false} autoComplete="off" autoCorrect="off" autoCapitalize="off"
                  className="w-full bg-transparent text-[#d4d4d4] text-sm font-mono p-3 pl-12 min-h-[360px] resize-none outline-none leading-6 caret-white"
                  placeholder={`Write your ${currentLang.label} solution here...`}
                />
                {/* Autocomplete */}
                {autoSug.length > 0 && (
                  <div className="absolute bottom-2 left-12 z-30 bg-[#2d2d3f] border border-slate-600 rounded-xl shadow-xl overflow-hidden min-w-[220px]">
                    {autoSug.map(key => (
                      <button key={key} onMouseDown={e => { e.preventDefault(); applySnippet(key); }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-left hover:bg-indigo-600 border-b border-slate-700 last:border-0 transition-colors group">
                        <span className="text-yellow-400 text-xs font-bold font-mono w-16 shrink-0">{key}</span>
                        <span className="text-slate-400 text-xs truncate group-hover:text-white">{SNIPPETS[lang][key].split("\n")[0]}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Editor footer */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-t border-slate-700">
                <span className="text-slate-500 text-xs font-mono">{lineCount} lines · {currentLang.label}</span>
                <span className="text-red-400 text-xs">⛔ No copy-paste</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button onClick={handleRun} disabled={isRunning||isChecking}
                className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 active:scale-[0.98] disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl text-sm transition-all border border-slate-600">
                {isRunning ? <><span className="animate-spin inline-block">⟳</span> Running...</> : <>▶ Run Code</>}
              </button>
              <button onClick={handleCheck} disabled={isRunning||isChecking||result==="correct"}
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl text-sm transition-all">
                {isChecking ? <><span className="animate-spin inline-block">⟳</span> Checking...</>
                  : result==="correct" ? <>✅ Accepted!</> : <>✓ Submit</>}
              </button>
            </div>

            {/* Shortcuts */}
            <div className="grid grid-cols-3 gap-2">
              {[{key:"Tab",desc:"4 spaces"},{key:"( [ {",desc:"Auto close"},{key:"↵ Enter",desc:"Auto indent"}].map(s=>(
                <div key={s.key} className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5 text-center">
                  <p className="text-xs font-mono font-bold text-slate-600">{s.key}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}