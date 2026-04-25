import { getChapterById, cssChapters } from "@/app/component/data/cssData";
import CssChapterClient from "./CSSChapterClient";

export default async function CssChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: chapterId } = await params;
  const chapter = getChapterById(chapterId);
  const currentIndex = cssChapters.findIndex((c) => c.id === chapterId);
  const prevChapter = currentIndex > 0 ? cssChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < cssChapters.length - 1 ? cssChapters[currentIndex + 1] : null;

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Chapter not found</p>
          <a href="/courses/css" className="text-blue-500 text-sm mt-2 inline-block hover:underline">
            ← Back to CSS Course
          </a>
        </div>
      </div>
    );
  }

  return (
    <CssChapterClient
      chapter={chapter}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}