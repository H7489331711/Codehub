import Link from "next/link";
import { notFound } from "next/navigation";

const allProblems: Record<string, { id: number; title: string; hint: string }[]> = {
  basic: [
    { id: 1,  title: "Print Hello World",                hint: "Use print() in Python or printf() in C" },
    { id: 2,  title: "Print your name",                  hint: "Print any string value" },
    { id: 3,  title: "Print a number",                   hint: "Print any integer" },
    { id: 4,  title: "Print sum of two numbers",         hint: "Take two inputs and add them" },
    { id: 5,  title: "Print subtraction of two numbers", hint: "Subtract second from first" },
    { id: 6,  title: "Print multiplication of two numbers", hint: "Multiply two numbers" },
    { id: 7,  title: "Print division of two numbers",    hint: "Divide first by second" },
    { id: 8,  title: "Find square of a number",          hint: "n * n or n**2" },
    { id: 9,  title: "Find cube of a number",            hint: "n * n * n or n**3" },
    { id: 10, title: "Print next number (N + 1)",        hint: "Add 1 to input" },
    { id: 11, title: "Print previous number (N - 1)",    hint: "Subtract 1 from input" },
    { id: 12, title: "Print sum of three numbers",       hint: "Take 3 inputs and add" },
    { id: 13, title: "Find average of three numbers",    hint: "Sum divided by 3" },
    { id: 14, title: "Print remainder of two numbers",   hint: "Use % operator" },
    { id: 15, title: "Convert number into double (N * 2)", hint: "Multiply by 2" },
    { id: 16, title: "Convert number into half (N / 2)", hint: "Divide by 2" },
    { id: 17, title: "Print product of three numbers",   hint: "Multiply three inputs" },
    { id: 18, title: "Print sum of four numbers",        hint: "Take 4 inputs and add" },
    { id: 19, title: "Find average of two numbers",      hint: "Sum divided by 2" },
    { id: 20, title: "Print difference of three numbers", hint: "a - b - c" },
  ],
  intermediate: [
    { id: 1,  title: "Check if a number is even or odd",              hint: "Use modulo operator %" },
    { id: 2,  title: "Print numbers from 1 to N and print their sum", hint: "Use a loop and accumulate sum" },
    { id: 3,  title: "Find largest of three numbers",                 hint: "Use if-elif-else" },
    { id: 4,  title: "Print table of a user given number",            hint: "Loop from 1 to 10" },
    { id: 5,  title: "Check if a number is greater than 18 or not",   hint: "Simple if-else" },
    { id: 6,  title: "Find factorial of a number",                    hint: "Multiply from 1 to n" },
    { id: 7,  title: "Print all even numbers from 1 to N",            hint: "Loop with if n%2==0" },
    { id: 8,  title: "Reverse a number",                              hint: "Use % 10 and // 10" },
    { id: 9,  title: "Find sum of digits of a number",                hint: "Extract each digit using %" },
    { id: 10, title: "Check if a number is palindrome",               hint: "Reverse and compare" },
    { id: 11, title: "Take an array and print all elements",          hint: "Use a loop" },
    { id: 12, title: "Find maximum element in an array",              hint: "Track max while looping" },
    { id: 13, title: "Find minimum element in an array",              hint: "Track min while looping" },
    { id: 14, title: "Count even numbers in an array",                hint: "Count elements where n%2==0" },
    { id: 15, title: "Search an element in array",                    hint: "Linear search" },
    { id: 16, title: "Check if a year is leap year",                  hint: "Divisible by 4, not 100, or by 400" },
    { id: 17, title: "Find sum of first N natural numbers",           hint: "n*(n+1)/2" },
    { id: 18, title: "Print numbers from N to 1",                     hint: "Reverse loop" },
    { id: 19, title: "Find largest digit in a number",                hint: "Extract digits and compare" },
    { id: 20, title: "Find sum of array elements and check if even or odd", hint: "Sum array then use %" },
  ],
  pro: [
    { id: 1,  title: "Find second largest element in an array (without sorting)", hint: "Track first and second max" },
    { id: 2,  title: "Check if array is sorted and rotated",          hint: "Count inversions" },
    { id: 3,  title: "Remove duplicates from a sorted array (in-place)", hint: "Two pointer approach" },
    { id: 4,  title: "Find frequency of elements using hashmap",      hint: "Use dictionary/map" },
    { id: 5,  title: "Two Sum problem (using hashmap)",               hint: "Store complement in dict" },
    { id: 6,  title: "Move all zeros to end (in-place)",              hint: "Two pointer swap" },
    { id: 7,  title: "Find missing number (using XOR or sum formula)", hint: "Expected sum - actual sum" },
    { id: 8,  title: "Find majority element (Boyer-Moore Voting Algorithm)", hint: "Count and cancel" },
    { id: 9,  title: "Kadane's Algorithm (maximum subarray sum)",     hint: "Track current and global max" },
    { id: 10, title: "Best time to buy and sell stock (single transaction)", hint: "Track min price seen so far" },
    { id: 11, title: "Rotate array by K steps (optimized approach)",  hint: "Reverse three times" },
    { id: 12, title: "Merge two sorted arrays (without extra space)", hint: "Compare from end" },
    { id: 13, title: "Find intersection of two arrays",               hint: "Use set or sort+two pointer" },
    { id: 14, title: "Find longest consecutive sequence (using set)", hint: "Check n-1 not in set" },
    { id: 15, title: "Container with most water (two-pointer)",       hint: "Move the shorter side" },
    { id: 16, title: "Check if string is palindrome (two-pointer)",   hint: "Left and right pointers" },
    { id: 17, title: "Check if two strings are anagrams (optimized)", hint: "Sort or frequency map" },
    { id: 18, title: "Longest substring without repeating characters", hint: "Sliding window + set" },
    { id: 19, title: "First non-repeating character in string",       hint: "Frequency map then scan" },
    { id: 20, title: "Valid parentheses (stack based)",               hint: "Push open, pop on close" },
  ],
};

const levelInfo = {
  basic:        { label: "Level 1", name: "Basic",        icon: "🌱", coins: 15, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", badge: "bg-emerald-100 text-emerald-700" },
  intermediate: { label: "Level 2", name: "Intermediate", icon: "⚡", coins: 30, color: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-200",    badge: "bg-blue-100 text-blue-700" },
  pro:          { label: "Level 3", name: "Pro",          icon: "🔥", coins: 50, color: "text-orange-600",  bg: "bg-orange-50",  border: "border-orange-200",  badge: "bg-orange-100 text-orange-700" },
};

export default async function ProblemsPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params;
  const problems = allProblems[level];
  const info = levelInfo[level as keyof typeof levelInfo];

  if (!problems || !info) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* Back */}
      <Link href="/practice" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
        ← Back to Practice
      </Link>

      {/* Header */}
      <div className={`${info.bg} border ${info.border} rounded-2xl p-6`}>
        <div className="flex items-center gap-4">
          <span className="text-4xl">{info.icon}</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{info.label}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${info.badge}`}>{info.name}</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-800">{info.name} Problems</h1>
            <p className="text-slate-500 text-sm mt-0.5">
              {problems.length} problems • 🪙 {info.coins} coins each • C & Python
            </p>
          </div>
        </div>
      </div>

      {/* Problems List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {problems.map((problem, idx) => (
          <Link
            key={problem.id}
            href={`/practice/${level}/${problem.id}`}
            className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors group border-b border-slate-100 last:border-b-0"
          >
            {/* Number */}
            <div className={`w-8 h-8 rounded-full ${info.bg} ${info.color} flex items-center justify-center text-sm font-bold shrink-0 border ${info.border}`}>
              {problem.id}
            </div>

            {/* Title & hint */}
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">
                {problem.title}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">💡 {problem.hint}</p>
            </div>

            {/* Coins */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-yellow-600 font-medium">🪙 {info.coins}</span>
              <span className="text-slate-300 group-hover:text-indigo-400 transition-colors text-sm">→</span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}