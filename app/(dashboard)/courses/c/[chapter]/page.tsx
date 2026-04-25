import { getChapterById, cChapters } from "@/app/component/data/cData";
import CChapterClient from "./CChapterClient";

export default async function CChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: chapterId } = await params;
  const chapter = getChapterById(chapterId);
  const currentIndex = cChapters.findIndex((c) => c.id === chapterId);
  const prevChapter = currentIndex > 0 ? cChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < cChapters.length - 1 ? cChapters[currentIndex + 1] : null;

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Chapter not found</p>
          <a href="/courses/c" className="text-gray-600 text-sm mt-2 inline-block hover:underline">
            ← Back to C Course
          </a>
        </div>
      </div>
    );
  }

  return (
    <CChapterClient
      chapter={chapter}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}