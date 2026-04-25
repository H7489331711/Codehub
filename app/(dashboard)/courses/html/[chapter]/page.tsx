import { getChapterById, htmlChapters } from "@/app/component/data/htmlData";
import HtmlChapterClient from "./HTMLChapterClient";

export default async function HtmlChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: chapterId } = await params;
  const chapter = getChapterById(chapterId);
  const currentIndex = htmlChapters.findIndex((c) => c.id === chapterId);
  const prevChapter = currentIndex > 0 ? htmlChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < htmlChapters.length - 1 ? htmlChapters[currentIndex + 1] : null;

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Chapter not found</p>
          <a href="/courses/html" className="text-orange-500 text-sm mt-2 inline-block hover:underline">
            ← Back to HTML Course
          </a>
        </div>
      </div>
    );
  }

  return (
    <HtmlChapterClient
      chapter={chapter}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}