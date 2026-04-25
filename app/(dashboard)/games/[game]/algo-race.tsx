"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type AlgoType = "bubble" | "selection" | "binary";

function generateArray(size = 12) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 80) + 10);
}

export default function AlgoRace() {
  const [algo, setAlgo]           = useState<AlgoType>("bubble");
  const [arr, setArr]             = useState(() => generateArray());
  const [steps, setSteps]         = useState<{ arr: number[]; comparing: number[]; sorted: number[]; found?: number }[]>([]);
  const [stepIdx, setStepIdx]     = useState(-1);
  const [running, setRunning]     = useState(false);
  const [done, setDone]           = useState(false);
  const [target, setTarget]       = useState(0);
  const [searchArr, setSearchArr] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    reset();
  }, [algo]);

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRunning(false);
    setDone(false);
    setStepIdx(-1);
    if (algo === "binary") {
      const sorted = generateArray(12).sort((a, b) => a - b);
      setSearchArr(sorted);
      setArr(sorted);
      setTarget(sorted[Math.floor(Math.random() * sorted.length)]);
    } else {
      setArr(generateArray());
    }
    setSteps([]);
  };

  // Generate all steps for bubble sort
  const bubbleSteps = (input: number[]) => {
    const a = [...input];
    const allSteps: typeof steps = [];
    const sorted: number[] = [];
    for (let i = 0; i < a.length - 1; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        allSteps.push({ arr: [...a], comparing: [j, j + 1], sorted: [...sorted] });
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          allSteps.push({ arr: [...a], comparing: [j, j + 1], sorted: [...sorted] });
        }
      }
      sorted.push(a.length - 1 - i);
    }
    allSteps.push({ arr: [...a], comparing: [], sorted: a.map((_, i) => i) });
    return allSteps;
  };

  // Generate all steps for selection sort
  const selectionSteps = (input: number[]) => {
    const a = [...input];
    const allSteps: typeof steps = [];
    const sorted: number[] = [];
    for (let i = 0; i < a.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < a.length; j++) {
        allSteps.push({ arr: [...a], comparing: [minIdx, j], sorted: [...sorted] });
        if (a[j] < a[minIdx]) minIdx = j;
      }
      [a[i], a[minIdx]] = [a[minIdx], a[i]];
      sorted.push(i);
      allSteps.push({ arr: [...a], comparing: [], sorted: [...sorted] });
    }
    allSteps.push({ arr: [...a], comparing: [], sorted: a.map((_, i) => i) });
    return allSteps;
  };

  // Binary search steps
  const binarySteps = (input: number[], t: number) => {
    const allSteps: typeof steps = [];
    let lo = 0, hi = input.length - 1;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      allSteps.push({ arr: input, comparing: [lo, mid, hi], sorted: [] });
      if (input[mid] === t) {
        allSteps.push({ arr: input, comparing: [], sorted: [], found: mid });
        break;
      } else if (input[mid] < t) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return allSteps;
  };

  const start = () => {
    let s: typeof steps = [];
    if (algo === "bubble")    s = bubbleSteps(arr);
    if (algo === "selection") s = selectionSteps(arr);
    if (algo === "binary")    s = binarySteps(arr, target);

    setSteps(s);
    setStepIdx(0);
    setRunning(true);
    setDone(false);

    let idx = 0;
    intervalRef.current = setInterval(() => {
      idx++;
      if (idx >= s.length) {
        clearInterval(intervalRef.current!);
        setRunning(false);
        setDone(true);
        setStepIdx(s.length - 1);
      } else {
        setStepIdx(idx);
      }
    }, 300);
  };

  const currentStep = stepIdx >= 0 && steps[stepIdx] ? steps[stepIdx] : null;
  const displayArr  = currentStep?.arr || arr;

  const getBarColor = (i: number) => {
    if (!currentStep) return "bg-indigo-400";
    if (currentStep.found === i) return "bg-yellow-400";
    if (currentStep.sorted.includes(i)) return "bg-green-400";
    if (currentStep.comparing.includes(i)) return "bg-red-400";
    if (algo === "binary" && currentStep.comparing.length === 3) {
      const [lo, , hi] = currentStep.comparing;
      if (i < lo || i > hi) return "bg-slate-300";
    }
    return "bg-indigo-400";
  };

  const ALGOS: { id: AlgoType; label: string; desc: string; color: string }[] = [
    { id: "bubble",    label: "Bubble Sort",    desc: "Compare adjacent elements and swap",         color: "bg-blue-500" },
    { id: "selection", label: "Selection Sort", desc: "Find minimum and place at beginning",         color: "bg-purple-500" },
    { id: "binary",    label: "Binary Search",  desc: "Search sorted array by halving each time",   color: "bg-green-500" },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <Link href="/games" className="text-sm text-slate-500 hover:text-slate-800">← Games</Link>
        <h1 className="text-lg font-black text-slate-800">🏎️ Algo Race</h1>
      </div>

      {/* Algorithm selector */}
      <div className="grid grid-cols-3 gap-3">
        {ALGOS.map(a => (
          <button key={a.id} onClick={() => { setAlgo(a.id); }}
            className={`p-3 rounded-xl border-2 text-left transition-all ${algo === a.id ? "border-indigo-500 bg-indigo-50" : "border-slate-200 bg-white hover:border-slate-300"}`}>
            <p className={`text-xs font-bold text-white ${a.color} px-2 py-0.5 rounded-full inline-block mb-1`}>{a.label}</p>
            <p className="text-xs text-slate-500">{a.desc}</p>
          </button>
        ))}
      </div>

      {/* Binary search target */}
      {algo === "binary" && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="text-yellow-600 font-bold text-sm">🎯 Searching for:</span>
          <span className="text-2xl font-black text-yellow-700">{target}</span>
          <span className="text-yellow-500 text-xs">(in sorted array)</span>
        </div>
      )}

      {/* Visualization */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-end justify-center gap-1.5 h-40">
          {displayArr.map((val, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-xs text-slate-500 font-mono">{val}</span>
              <div
                className={`rounded-t-lg transition-all duration-200 ${getBarColor(i)}`}
                style={{ height: `${(val / 90) * 100}px`, width: "28px" }}
              />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-4 text-xs">
          <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-400 inline-block"/><span className="text-slate-500">Comparing</span></div>
          <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-400 inline-block"/><span className="text-slate-500">Sorted</span></div>
          {algo === "binary" && <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-yellow-400 inline-block"/><span className="text-slate-500">Found!</span></div>}
          <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-slate-300 inline-block"/><span className="text-slate-500">Out of range</span></div>
        </div>
      </div>

      {/* Status */}
      {done && (
        <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-center">
          <p className="text-green-700 font-bold text-sm">
            {algo === "binary"
              ? currentStep?.found !== undefined
                ? `✅ Found ${target} at index ${currentStep.found}!`
                : "❌ Element not found"
              : "✅ Array sorted successfully!"}
          </p>
          <p className="text-green-600 text-xs mt-1">Completed in {steps.length} steps</p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        <button onClick={start} disabled={running}
          className="flex-1 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 disabled:opacity-50 transition-colors">
          {running ? "⏳ Running..." : done ? "▶ Run Again" : "▶ Start Visualization"}
        </button>
        <button onClick={reset} disabled={running}
          className="px-5 py-3 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 disabled:opacity-50 transition-colors">
          🔀 New Array
        </button>
      </div>

      {/* Info box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500 space-y-1">
        {algo === "bubble"    && <><p className="font-bold text-slate-700">📚 Bubble Sort</p><p>Time: O(n²) | Space: O(1) | Stable: Yes</p><p>Repeatedly compares adjacent elements and swaps them if in wrong order.</p></>}
        {algo === "selection" && <><p className="font-bold text-slate-700">📚 Selection Sort</p><p>Time: O(n²) | Space: O(1) | Stable: No</p><p>Finds minimum element and places it at the beginning each iteration.</p></>}
        {algo === "binary"    && <><p className="font-bold text-slate-700">📚 Binary Search</p><p>Time: O(log n) | Space: O(1) | Requires: Sorted array</p><p>Divides search interval in half each time to find target.</p></>}
      </div>
    </div>
  );
}