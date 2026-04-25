import { getChapterById, pythonChapters } from "@/app/component/data/pythonData";
import ChapterClient from "@/app/(dashboard)/courses/python/[chapter]/ChapterClient";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: chapterId } = await params;
  const chapter = getChapterById(chapterId);
  const currentIndex = pythonChapters.findIndex((c) => c.id === chapterId);
  const prevChapter = currentIndex > 0 ? pythonChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < pythonChapters.length - 1 ? pythonChapters[currentIndex + 1] : null;

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Chapter not found</p>
          <a href="/courses/python" className="text-blue-500 text-sm mt-2 inline-block hover:underline">
            ← Back to Python Course
          </a>
        </div>
      </div>
    );
  }

  return (
    <ChapterClient
      chapter={chapter}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}