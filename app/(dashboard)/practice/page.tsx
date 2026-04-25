import Link from "next/link";

const levels = [
  {
    id: "basic",
    label: "Level 1",
    name: "Basic",
    icon: "🌱",
    coins: 15,
    problems: 20,
    color: "from-emerald-400 to-teal-500",
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
    desc: "Print statements, arithmetic, simple math operations",
    tags: ["Print", "Math", "Variables"],
  },
  {
    id: "intermediate",
    label: "Level 2",
    name: "Intermediate",
    icon: "⚡",
    coins: 30,
    problems: 20,
    color: "from-blue-400 to-indigo-500",
    border: "border-blue-200",
    bg: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
    desc: "Loops, conditions, arrays, functions, string operations",
    tags: ["Arrays", "Loops", "Conditions"],
  },
  {
    id: "pro",
    label: "Level 3",
    name: "Pro",
    icon: "🔥",
    coins: 50,
    problems: 20,
    color: "from-orange-400 to-red-500",
    border: "border-orange-200",
    bg: "bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
    desc: "DSA, algorithms, two-pointer, hashmap, dynamic programming",
    tags: ["DSA", "Algorithms", "Optimization"],
  },
];

export default function PracticePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-slate-800">Practice Code</h1>
        <p className="text-slate-500 text-lg">Solve problems, earn coins, climb the leaderboard!</p>
      </div>

      {/* Info bar */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Problems", value: "60" },
          { label: "Languages",      value: "C & Python" },
          { label: "Max Coins",      value: "50 / problem" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-slate-200 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-slate-800">{s.value}</p>
            <p className="text-sm text-slate-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Level Cards */}
      <div className="space-y-4">
        {levels.map((level) => (
          <Link key={level.id} href={`/practice/${level.id}`}>
            <div className={`group bg-white rounded-2xl border ${level.border} p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer`}>
              <div className="flex items-center gap-5">

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center text-3xl shadow-md shrink-0`}>
                  {level.icon}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{level.label}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${level.badge}`}>{level.name}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {level.name} Problems
                  </h2>
                  <p className="text-slate-500 text-sm mt-0.5">{level.desc}</p>
                  <div className="flex gap-2 mt-2">
                    {level.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Right side */}
                <div className="text-right shrink-0 space-y-1">
                  <div className="text-2xl font-bold text-yellow-500">🪙 {level.coins}</div>
                  <div className="text-xs text-slate-400">coins per solve</div>
                  <div className="text-sm font-medium text-slate-600">{level.problems} problems</div>
                  <div className="text-indigo-500 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                    Start →
                  </div>
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
        <span className="text-amber-500 text-xl shrink-0">🔒</span>
        <div>
          <p className="text-amber-800 font-medium text-sm">Login required to solve problems</p>
          <p className="text-amber-600 text-xs mt-0.5">Sign in to track your progress, earn coins, and appear on the leaderboard.</p>
        </div>
      </div>

    </div>
  );
}