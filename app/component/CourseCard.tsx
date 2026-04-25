import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
  chapters?: string;
  bg?: string;
};

export default function CourseCard({ title, image, slug, chapters, bg }: Props) {
  return (
    <Link href={`/courses/${slug}`}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 hover:shadow-xl transition-all hover:-translate-y-1 w-full cursor-pointer group">
        {/* Icon area */}
        <div className={`h-28 rounded-xl flex items-center justify-center overflow-hidden mb-4 bg-gradient-to-br ${bg || "from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600"}`}>
          <img
            src={image}
            alt={title}
            className="h-16 w-16 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        {/* Title */}
        <h3 className="text-center font-bold text-slate-700 dark:text-slate-200 text-base mb-1">{title}</h3>
        {/* Chapters */}
        {chapters && (
          <p className="text-center text-xs text-slate-400 dark:text-slate-500 mb-3">{chapters}</p>
        )}
        {/* Bottom bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  );
}