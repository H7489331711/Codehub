"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

type User = { rank: number; name: string; coins: number; solved: number };

const MEDALS = ["🥇", "🥈", "🥉"];

export default function LeaderboardPage() {
  const { data: session } = useSession();
  const [users, setUsers]     = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [myRank, setMyRank]   = useState<User | null>(null);

  useEffect(() => {
    // Sync local coins to server first
    syncCoins();
  }, [session]);

  const syncCoins = async () => {
    if (session?.user?.email) {
      const coins  = parseInt(localStorage.getItem("codehub_coins")  || "0");
      const solved = JSON.parse(localStorage.getItem("codehub_solved") || "[]").length;
      try {
        await fetch("/api/leaderboard", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ coins, solved }),
        });
      } catch {}
    }
    fetchLeaderboard();
  };

  const fetchLeaderboard = async () => {
    try {
      const res  = await fetch("/api/leaderboard");
      const data = await res.json();
      setUsers(data.users || []);

      // Find current user's rank
      if (session?.user?.name) {
        const me = data.users.find((u: User) =>
          u.name.toLowerCase() === (session.user?.name || "").toLowerCase()
        );
        if (me) setMyRank(me);
      }
    } catch {}
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400 text-sm">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-5">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">🏆 Leaderboard</h1>
        <p className="text-slate-400 text-sm">Top coders ranked by coins earned</p>
      </div>

      {/* My Rank Card */}
      {myRank && (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 text-white">
          <p className="text-indigo-100 text-xs font-medium mb-1">Your Rank</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-black text-lg">
                #{myRank.rank}
              </div>
              <div>
                <p className="font-bold text-base">{myRank.name}</p>
                <p className="text-indigo-100 text-xs">{myRank.solved} problems solved</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black">🪙 {myRank.coins}</p>
              <p className="text-indigo-100 text-xs">coins</p>
            </div>
          </div>
        </div>
      )}

      {/* Leaderboard List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
          <div className="col-span-1 text-xs font-semibold text-slate-400 text-center">#</div>
          <div className="col-span-7 text-xs font-semibold text-slate-400">Username</div>
          <div className="col-span-2 text-xs font-semibold text-slate-400 text-center">Solved</div>
          <div className="col-span-2 text-xs font-semibold text-slate-400 text-right">Coins</div>
        </div>

        {users.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🏜️</p>
            <p className="text-slate-500 font-medium">No users yet</p>
            <p className="text-slate-400 text-sm mt-1">Be the first to solve problems!</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-50">
            {users.map((user) => {
              const isMe = user.name.toLowerCase() === (session?.user?.name || "").toLowerCase();
              const isTop3 = user.rank <= 3;

              return (
                <div key={user.rank}
                  className={`grid grid-cols-12 gap-2 px-4 py-3 items-center transition-colors
                    ${isMe ? "bg-indigo-50 border-l-4 border-l-indigo-500" : "hover:bg-slate-50"}
                  `}>

                  {/* Rank */}
                  <div className="col-span-1 text-center">
                    {isTop3
                      ? <span className="text-xl">{MEDALS[user.rank - 1]}</span>
                      : <span className="text-sm font-bold text-slate-400">#{user.rank}</span>
                    }
                  </div>

                  {/* Username */}
                  <div className="col-span-7 flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold shrink-0
                      ${isTop3
                        ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white"
                        : "bg-slate-100 text-slate-600"
                      }`}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${isMe ? "text-indigo-700" : "text-slate-800"}`}>
                        {user.name}
                        {isMe && <span className="ml-1.5 text-xs bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full font-medium">You</span>}
                      </p>
                    </div>
                  </div>

                  {/* Solved */}
                  <div className="col-span-2 text-center">
                    <span className="text-sm font-semibold text-slate-600">{user.solved}</span>
                  </div>

                  {/* Coins */}
                  <div className="col-span-2 text-right">
                    <span className={`text-sm font-bold ${isTop3 ? "text-yellow-600" : "text-slate-700"}`}>
                      🪙 {user.coins}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Refresh */}
      <div className="text-center">
        <button onClick={syncCoins}
          className="text-xs text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-1 mx-auto">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Refresh leaderboard
        </button>
      </div>
    </div>
  );
}