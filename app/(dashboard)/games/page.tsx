"use client";

import Link from "next/link";

const GAMES = [
  {
    id: "code-quiz", title: "Code Quiz", emoji: "🧠",
    description: "Test your knowledge with MCQ questions on Python, C, HTML & CSS",
    color: "from-blue-500 to-indigo-600", bg: "bg-blue-50", border: "border-blue-200",
    badge: "Easy", badgeColor: "bg-green-100 text-green-700", plays: "2-5 min",
  },
  {
    id: "bug-hunt", title: "Bug Hunt", emoji: "🐛",
    description: "Find and fix the bug in the code before time runs out!",
    color: "from-red-500 to-orange-500", bg: "bg-red-50", border: "border-red-200",
    badge: "Medium", badgeColor: "bg-yellow-100 text-yellow-700", plays: "3-7 min",
  },
  {
    id: "output-predictor", title: "Output Predictor", emoji: "🔮",
    description: "Look at the code and predict what the output will be. Think fast!",
    color: "from-purple-500 to-pink-500", bg: "bg-purple-50", border: "border-purple-200",
    badge: "Medium", badgeColor: "bg-yellow-100 text-yellow-700", plays: "3-5 min",
  },
  {
    id: "algo-race", title: "Algo Race", emoji: "🏎️",
    description: "Watch Bubble Sort, Binary Search & more algorithms race visually!",
    color: "from-green-500 to-teal-500", bg: "bg-green-50", border: "border-green-200",
    badge: "Fun", badgeColor: "bg-blue-100 text-blue-700", plays: "2-4 min",
  },
];

export default function GamesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-black text-slate-800 mb-2">🎮 Games</h1>
        <p className="text-slate-400 text-sm">Learn coding concepts while having fun!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {GAMES.map((game) => (
          <Link href={`/games/${game.id}`} key={game.id}
            className={`group block ${game.bg} border ${game.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}>
            <div className="flex items-start justify-between mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center text-3xl shadow-sm`}>
                {game.emoji}
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${game.badgeColor}`}>{game.badge}</span>
                <span className="text-xs text-slate-400">⏱ {game.plays}</span>
              </div>
            </div>
            <h2 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-indigo-700 transition-colors">{game.title}</h2>
            <p className="text-slate-500 text-sm leading-relaxed">{game.description}</p>
            <div className={`mt-4 inline-flex items-center gap-2 bg-gradient-to-r ${game.color} text-white text-sm font-semibold px-4 py-2 rounded-xl`}>
              ▶ Play Now
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center">
        <p className="text-2xl mb-2">🚀</p>
        <p className="text-slate-500 text-sm font-medium">More games coming soon!</p>
      </div>
    </div>
  );
}