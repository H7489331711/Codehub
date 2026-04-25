"use client";

import { useState, useEffect, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

const SEARCH_ITEMS = [
  { label: "Python Course",           href: "/courses/python",         icon: "📚" },
  { label: "HTML Course",             href: "/courses/html",           icon: "📚" },
  { label: "CSS Course",              href: "/courses/css",            icon: "📚" },
  { label: "C Language Course",       href: "/courses/c",              icon: "📚" },
  { label: "Practice - Basic",        href: "/practice/basic",         icon: "💻" },
  { label: "Practice - Intermediate", href: "/practice/intermediate",  icon: "💻" },
  { label: "Practice - Pro",          href: "/practice/pro",           icon: "💻" },
  { label: "Code Quiz Game",          href: "/games/code-quiz",        icon: "🎮" },
  { label: "Bug Hunt Game",           href: "/games/bug-hunt",         icon: "🎮" },
  { label: "Output Predictor Game",   href: "/games/output-predictor", icon: "🎮" },
  { label: "Algo Race Game",          href: "/games/algo-race",        icon: "🎮" },
  { label: "Leaderboard",             href: "/leaderboard",            icon: "🏆" },
  { label: "Profile",                 href: "/profile",                icon: "👤" },
];

// ✅ onMenuClick prop add kiya
interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const [query, setQuery]             = useState("");
  const [showSearch, setShowSearch]   = useState(false);
  const [darkMode, setDarkMode]       = useState(false);
  const [showNotif, setShowNotif]     = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const searchRef  = useRef<HTMLDivElement>(null);
  const notifRef   = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim().length >= 1
    ? SEARCH_ITEMS.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  useEffect(() => {
    const saved = localStorage.getItem("codehub_dark") === "true";
    setDarkMode(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem("codehub_dark", String(next));
    document.documentElement.classList.toggle("dark", next);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current  && !searchRef.current.contains(e.target  as Node)) setShowSearch(false);
      if (notifRef.current   && !notifRef.current.contains(e.target   as Node)) setShowNotif(false);
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setShowProfile(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const user     = session?.user;
  const initials = (user?.name || user?.email || "U").split(" ").map((w: string) => w[0]).join("").toUpperCase().slice(0, 2);

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center gap-3 px-4 py-3">

        {/* ✅ Hamburger - sirf mobile pe (lg pe hidden) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 shrink-0"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-sm">&lt;/&gt;</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-black text-slate-800 dark:text-white text-sm leading-none">CodeHub</p>
            <p className="text-slate-400 text-xs">Learn • Code • Master</p>
          </div>
        </div>

        {/* Search */}
        <div ref={searchRef} className="flex-1 relative max-w-xl mx-auto">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => { setQuery(e.target.value); setShowSearch(true); }}
              onFocus={() => setShowSearch(true)}
              placeholder="Search Courses, Practice, Games..."
              className="w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 focus:bg-white dark:focus:bg-slate-800 border border-transparent focus:border-indigo-300 rounded-xl text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 outline-none transition-all"
            />
            {query && (
              <button onClick={() => { setQuery(""); setShowSearch(false); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                ✕
              </button>
            )}
          </div>

          {showSearch && filtered.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl z-50 overflow-hidden">
              {filtered.map((item) => (
                <Link key={item.href} href={item.href}
                  onClick={() => { setQuery(""); setShowSearch(false); }}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm text-slate-700 dark:text-slate-200">{item.label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 shrink-0">

          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            title={darkMode ? "Switch to Light" : "Switch to Dark"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <div ref={notifRef} className="relative">
            <button onClick={() => { setShowNotif(!showNotif); setShowProfile(false); }}
              className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
              <svg className="w-5 h-5 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
            </button>
            {showNotif && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <p className="font-bold text-slate-800 dark:text-white text-sm">Notifications</p>
                  <span className="text-xs text-slate-400">All caught up!</span>
                </div>
                <div className="py-8 text-center">
                  <p className="text-3xl mb-2">🔔</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">No new notifications</p>
                  <p className="text-slate-400 text-xs mt-1">Solve problems to get updates!</p>
                </div>
              </div>
            )}
          </div>

          <div ref={profileRef} className="relative">
            <button onClick={() => { setShowProfile(!showProfile); setShowNotif(false); }}
              className="w-9 h-9 rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-600 hover:border-indigo-400 transition-colors">
              {user?.image ? (
                <img src={user.image} alt="avatar" className="w-full h-full object-cover"/>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{initials}</span>
                </div>
              )}
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                  <p className="font-bold text-slate-800 dark:text-white text-sm truncate">{user?.name || "User"}</p>
                  <p className="text-slate-400 text-xs truncate">{user?.email || ""}</p>
                </div>
                <div className="p-1.5">
                  <Link href="/profile" onClick={() => setShowProfile(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-slate-700 text-sm text-slate-700 dark:text-slate-200 transition-colors">
                    <span>👤</span> My Profile
                  </Link>
                  <Link href="/leaderboard" onClick={() => setShowProfile(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-indigo-50 dark:hover:bg-slate-700 text-sm text-slate-700 dark:text-slate-200 transition-colors">
                    <span>🏆</span> Leaderboard
                  </Link>
                  <button onClick={() => signOut()}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-sm text-red-500 transition-colors">
                    <span>🚪</span> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}