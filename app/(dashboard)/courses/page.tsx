import Link from "next/link";

const courses = [
  {
    id: 1,
    name: "Python",
    slug: "python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: "Beginner + Intermediate",
    chapters: 18,
    description: "Learn Python from scratch — variables, loops, functions, OOP and more.",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
  },
  {
    id: 2,
    name: "HTML",
    slug: "html",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: "Beginner + Intermediate",
    chapters: 14,
    description: "Master HTML structure, semantic tags, forms, tables and HTML5 features.",
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    dot: "bg-orange-500",
  },
  {
    id: 3,
    name: "CSS",
    slug: "css",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: "Beginner + Intermediate",
    chapters: 16,
    description: "Style websites with CSS — Flexbox, Grid, Animations, Media Queries and more.",
    color: "bg-indigo-50 border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    dot: "bg-indigo-500",
  },
  {
    id: 4,
    name: "C Language",
    slug: "c",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    level: "Beginner + Intermediate",
    chapters: 18,
    description: "Learn C programming — pointers, structures, file handling and memory management.",
    color: "bg-gray-50 border-gray-200",
    badge: "bg-gray-200 text-gray-700",
    dot: "bg-gray-600",
  },
];

export default function CoursesPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">All Courses</h1>
        <p className="text-slate-500 mt-1">Choose a course and start learning today — all free!</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Courses",  value: "4"   },
          { label: "Chapters", value: "66"  },
          { label: "Quizzes",  value: "66"  },
          { label: "Price",    value: "Free"},
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-slate-200 p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
            <p className="text-sm text-slate-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.slug}`}
            className={`group bg-white rounded-2xl border ${course.color} p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
          >
            {/* Top row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                <img src={course.image} alt={course.name} className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {course.name}
                </h2>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${course.badge}`}>
                  {course.level}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              {course.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${course.dot}`}></div>
                <span className="text-sm text-slate-500">{course.chapters} chapters</span>
              </div>
              <span className="text-sm font-medium text-indigo-600 group-hover:translate-x-1 transition-transform inline-block">
                Start Learning →
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}