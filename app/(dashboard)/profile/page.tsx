"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [dob, setDob]         = useState("");
  const [savedDob, setSavedDob] = useState("");
  const [editingDob, setEditingDob] = useState(false);
  const [totalCoins, setTotalCoins] = useState(0);
  const [solvedCount, setSolvedCount] = useState(0);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  useEffect(() => {
    // Load from localStorage
    const coins  = parseInt(localStorage.getItem("codehub_coins")  || "0");
    const solved = JSON.parse(localStorage.getItem("codehub_solved") || "[]");
    const storedDob = localStorage.getItem("codehub_dob") || "";
    setTotalCoins(coins);
    setSolvedCount(solved.length);
    setSavedDob(storedDob);
    setDob(storedDob);
  }, []);

  const saveDob = () => {
    localStorage.setItem("codehub_dob", dob);
    setSavedDob(dob);
    setEditingDob(false);
  };

  const handleLogout = async () => {
    // Clear localStorage on logout so next user starts fresh
    localStorage.removeItem("codehub_coins");
    localStorage.removeItem("codehub_solved");
    sessionStorage.removeItem("codehub_synced_email");
    await signOut({ callbackUrl: "/login" });
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400 text-sm">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  const user     = session.user;
  const isGoogle = !!(user?.image && user.image.includes("google"));
  const loginType = isGoogle ? "Google" : "Email / Mobile";

  // Avatar: Google photo or initials
  const initials = (user?.name || user?.email || "U")
    .split(" ").map((w: string) => w[0]).join("").toUpperCase().slice(0, 2);

  // Format DOB nicely
  const formatDob = (d: string) => {
    if (!d) return "Not set";
    const date = new Date(d);
    return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  };

  // Calculate age
  const getAge = (d: string) => {
    if (!d) return null;
    const today = new Date();
    const birth = new Date(d);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  const age = getAge(savedDob);

  return (
    <div className="max-w-2xl mx-auto space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-slate-800">My Profile</h1>
        <button onClick={() => setShowLogout(true)}
          className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-semibold hover:bg-red-100 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          Logout
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Top banner */}
        <div className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        {/* Avatar + name */}
        <div className="px-6 pb-6">
          <div className="flex items-end gap-4 -mt-10 mb-4">
            {user?.image ? (
              <img src={user.image} alt="avatar"
                className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg object-cover" />
            ) : (
              <div className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{initials}</span>
              </div>
            )}
            <div className="pb-1">
              <h2 className="text-xl font-bold text-slate-800">{user?.name || "CodeHub User"}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  isGoogle
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}>
                  {isGoogle ? "🔵 Google" : "📧 Email"}
                </span>
                <span className="text-xs text-slate-400">Member</span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-center">
              <p className="text-2xl font-black text-yellow-500">🪙 {totalCoins}</p>
              <p className="text-xs text-yellow-600 font-medium mt-0.5">Total Coins</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
              <p className="text-2xl font-black text-green-600">{solvedCount}</p>
              <p className="text-xs text-green-600 font-medium mt-0.5">Problems Solved</p>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-center">
              <p className="text-2xl font-black text-indigo-600">🔥</p>
              <p className="text-xs text-indigo-600 font-medium mt-0.5">Active</p>
            </div>
          </div>

          {/* Info rows */}
          <div className="space-y-3">

            {/* Username/Name */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 text-sm">👤</div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Username</p>
                  <p className="text-sm font-semibold text-slate-800">{user?.name || "—"}</p>
                </div>
              </div>
            </div>

            {/* Email or Phone */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-sm">
                  {isGoogle ? "📧" : "📱"}
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{isGoogle ? "Email" : "Email / Mobile"}</p>
                  <p className="text-sm font-semibold text-slate-800">{user?.email || "—"}</p>
                </div>
              </div>
              <span className="text-xs text-slate-400 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                {loginType}
              </span>
            </div>

            {/* Login Method */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-sm">🔐</div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Login Method</p>
                  <p className="text-sm font-semibold text-slate-800">{loginType}</p>
                </div>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                isGoogle ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"
              }`}>
                Connected
              </span>
            </div>

            {/* Date of Birth */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 text-sm">🎂</div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Date of Birth</p>
                    <p className="text-sm font-semibold text-slate-800">
                      {savedDob ? formatDob(savedDob) : "Not set"}
                      {age !== null && <span className="text-slate-400 font-normal ml-2">({age} years)</span>}
                    </p>
                  </div>
                </div>
                <button onClick={() => setEditingDob(!editingDob)}
                  className="text-xs text-indigo-600 font-semibold px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors">
                  {editingDob ? "Cancel" : savedDob ? "Edit" : "Add"}
                </button>
              </div>

              {editingDob && (
                <div className="mt-3 flex gap-2">
                  <input type="date" value={dob} onChange={e => setDob(e.target.value)}
                    max={new Date().toISOString().split("T")[0]}
                    className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-xl outline-none focus:border-indigo-400 bg-white" />
                  <button onClick={saveDob} disabled={!dob}
                    className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-500 disabled:opacity-50 transition-colors">
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Logout Confirm Modal */}
      {showLogout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center">
            <div className="text-5xl mb-3">👋</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Logout?</h3>
            <p className="text-slate-500 text-sm mb-6">Are you sure you want to logout from CodeHub?</p>
            <div className="flex gap-3">
              <button onClick={() => setShowLogout(false)}
                className="flex-1 py-2.5 border-2 border-slate-200 rounded-xl text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button onClick={handleLogout}
                className="flex-1 py-2.5 bg-red-600 rounded-xl text-white text-sm font-semibold hover:bg-red-500 transition-colors">
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}