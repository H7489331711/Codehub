"use client";

import Link from "next/link";

const courses = [
  {
    id: 1,
    name: "C Programming",
    chapters: "5 Chapters",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    slug: "c",
    progressColor: "from-slate-300 to-blue-400",
  },
  {
    id: 2,
    name: "Python",
    chapters: "7 Chapters",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    slug: "python",
    progressColor: "from-yellow-300 to-blue-400",
  },
  {
    id: 3,
    name: "CSS",
    chapters: "4 Chapters",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    slug: "css",
    progressColor: "from-blue-300 to-indigo-500",
  },
  {
    id: 4,
    name: "HTML",
    chapters: "5 Chapters",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    slug: "html",
    progressColor: "from-orange-300 to-red-400",
  },
];

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-5 p-4">

      {/* ══ HERO BANNER ══ */}
      <div className="relative bg-white rounded-3xl shadow-sm overflow-hidden min-h-[200px] border border-slate-100">
        {/* Soft blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-50 via-purple-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 bg-gradient-to-tr from-indigo-50 to-transparent rounded-full translate-y-1/2 pointer-events-none" />

        <div className="flex flex-col lg:flex-row relative z-10">

          {/* Left: Text */}
          <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
            <p className="text-slate-400 mb-1 text-sm font-semibold">Welcome to</p>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-800 mb-3 leading-tight">
              CodeHub
            </h1>
            <p className="text-slate-500 mb-7 text-sm font-medium flex items-center gap-1 flex-wrap">
              Learn
              <span className="text-slate-200 mx-1">•</span>
              <span className="text-blue-500 font-bold">Code</span>
              <span className="text-slate-200 mx-1">•</span>
              <span className="text-teal-500 font-bold">Practice</span>
              <span className="text-slate-200 mx-1">•</span>
              <span className="text-slate-700 font-bold">Compete</span>
              <span className="text-slate-200 mx-1">•</span>
              <span className="text-green-500 font-bold">Get Certified</span>
            </p>
            <Link
              href="/courses"
              className="w-fit bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-300/40 transition-all hover:scale-105 flex items-center gap-2 text-sm"
            >
              Start Learning
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Right: Illustration */}
          <div className="lg:w-[48%] relative overflow-hidden min-h-[200px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-indigo-50/80" />

            {/* Glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-gradient-to-br from-blue-200/40 via-purple-200/30 to-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

            {/* JS badge */}
            <div className="absolute top-6 left-14 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-300/50 rotate-6 z-10">
              <span className="text-black font-black text-sm leading-none">JS</span>
            </div>

            {/* React icon */}
            <div className="absolute top-4 right-10 w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-lg -rotate-3 z-10">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-7 h-7" alt="React" />
            </div>

            {/* Python icon */}
            <div className="absolute bottom-10 left-8 w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg rotate-3 z-10">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-6 h-6" alt="Python" />
            </div>

            {/* HTML icon */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-lg rotate-6 z-10">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-5 h-5" alt="HTML" />
            </div>

            {/* Rocket SVG */}
            <div className="absolute top-1/2 left-[42%] -translate-x-1/2 -translate-y-1/2 z-10 opacity-90">
              <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
                <path d="M60 10 L72 38 L48 38 Z" fill="#6366f1" />
                <ellipse cx="60" cy="57" rx="15" ry="28" fill="#e0e7ff" />
                <path d="M45 67 L32 86 L45 80 Z" fill="#f87171" />
                <path d="M75 67 L88 86 L75 80 Z" fill="#f87171" />
                <circle cx="60" cy="54" r="8" fill="white" opacity="0.85" />
                <circle cx="60" cy="54" r="5" fill="#3b82f6" />
                <ellipse cx="60" cy="87" rx="9" ry="13" fill="#f97316" opacity="0.9" />
                <ellipse cx="60" cy="90" rx="5" ry="7" fill="#fbbf24" />
              </svg>
            </div>

            {/* Laptop mock */}
            <div className="absolute bottom-3 right-3 w-32 h-20 bg-slate-800 rounded-lg shadow-xl overflow-hidden z-10 border border-slate-600">
              <div className="h-3 bg-slate-700 flex items-center gap-1 px-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <div className="p-1.5 space-y-1">
                {["w-3/4 bg-blue-400/70","w-1/2 bg-purple-400/60","w-2/3 bg-green-400/60","w-1/3 bg-yellow-400/60","w-3/5 bg-pink-400/60"].map((cls, i) => (
                  <div key={i} className={`h-1.5 rounded ${cls}`} />
                ))}
              </div>
            </div>

            {/* Bar chart */}
            <div className="absolute bottom-6 left-[52%] flex items-end gap-1 z-10">
              {[14,22,16,26,18,30].map((h, i) => (
                <div key={i} className="w-3 rounded-t opacity-75"
                  style={{ height:`${h}px`, background:`hsl(${215+i*18},65%,58%)` }} />
              ))}
            </div>

            {/* Left fade */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ══ CHOOSE YOUR COURSE ══ */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-700">Choose Your Course</h2>
          <Link href="/courses" className="text-sm text-slate-400 font-semibold hover:text-blue-500 transition-colors">
            All Courses
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.slug}`} className="block group">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-100 overflow-hidden">

                {/* Big icon area */}
                <div className="relative flex items-center justify-center pt-8 pb-3 px-4">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-20 h-20 object-contain relative z-10 group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  />
                </div>

                {/* Name + chapters + progress */}
                <div className="px-4 pb-5 text-center">
                  <h3 className="font-bold text-slate-700 text-sm mb-0.5">{course.name}</h3>
                  <p className="text-xs text-slate-400 font-medium mb-3">{course.chapters}</p>
                  <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-full w-2/5 rounded-full bg-gradient-to-r ${course.progressColor}`} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ══ BOTTOM CARDS ══ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Practice Code */}
        <Link href="/practice" className="block group">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100 relative h-40 overflow-hidden flex items-center">
            <div className="relative z-10 p-7">
              <h3 className="text-lg font-bold text-slate-700 mb-3">Practice Code</h3>
              <span className="inline-flex items-center gap-2 text-slate-600 text-xs font-bold border border-slate-200 bg-white px-5 py-2 rounded-full shadow-sm group-hover:border-slate-300 transition-all">
                Start Coding →
              </span>
            </div>
            {/* Keyboard image right side */}
            <div className="absolute right-0 top-0 bottom-0 w-60 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop"
                alt="Keyboard"
                className="w-full h-full object-cover object-left opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
            </div>
          </div>
        </Link>

        {/* Play Games */}
        <Link href="/games" className="block group">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100 relative h-40 overflow-hidden flex items-center">
            <div className="relative z-10 p-7">
              <h3 className="text-lg font-bold text-slate-700 mb-3">Play Games</h3>
              <span className="inline-flex items-center gap-2 text-slate-600 text-xs font-bold border border-slate-200 bg-white px-5 py-2 rounded-full shadow-sm group-hover:border-slate-300 transition-all">
                Play Now →
              </span>
            </div>
            {/* Controller/trophy image right side */}
            <div className="absolute right-0 top-0 bottom-0 w-60 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop"
                alt="Gaming"
                className="w-full h-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}