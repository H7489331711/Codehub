import Link from "next/link";
import { htmlChapters, levels } from "@/app/component/data/htmlData";

export default function HtmlCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6 flex items-center gap-5">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0">
            <img src="/html.png" alt="HTML" className="w-14 h-14 object-contain" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">HTML Complete Course</h1>
            <p className="text-gray-500 text-sm mt-1">
              {htmlChapters.length} chapters • 2 levels • Beginner to Intermediate
            </p>
          </div>
        </div>

        {/* Levels */}
        {levels.map(({ level, name, icon, color, chapters }) => {
          const levelChapters = htmlChapters.filter((c) => c.level === level);
          const colorMap: Record<string, string> = {
            orange: "bg-orange-50 border-orange-200 text-orange-700",
            purple: "bg-purple-50 border-purple-200 text-purple-700",
          };
          const badgeMap: Record<string, string> = {
            orange: "bg-orange-100 text-orange-600",
            purple: "bg-purple-100 text-purple-700",
          };

          return (
            <div key={level} className="mb-6">
              <div className={`flex items-center justify-between px-5 py-3 rounded-xl border mb-3 ${colorMap[color]}`}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{icon}</span>
                  <span className="font-semibold text-base">Level {level}: {name}</span>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeMap[color]}`}>
                  {chapters} Chapters
                </span>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                {levelChapters.map((chapter) => (
                  <Link
                    key={chapter.id}
                    href={`/courses/html/${chapter.id}`}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors group border-b border-gray-100 last:border-b-0"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${badgeMap[color]}`}>
                      {chapter.chapterNo}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                        {chapter.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {chapter.content.length} sections • {chapter.quiz.length} quiz questions
                      </p>
                    </div>
                    <span className="text-gray-300 group-hover:text-orange-400 transition-colors text-sm">→</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
