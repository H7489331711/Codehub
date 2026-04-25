import ProblemClient from "./ProblemClient";
import { notFound } from "next/navigation";

const allProblems: Record<string, { id: number; title: string; hint: string; description: string }[]> = {
  basic: [
    { id: 1,  title: "Print Hello World",                   description: "Write a program that prints exactly: Hello World",                                             hint: "Use print() in Python or printf() in C" },
    { id: 2,  title: "Print your name",                     description: "Write a program that prints your name.",                                                       hint: "Print any string value" },
    { id: 3,  title: "Print a number",                      description: "Write a program that prints the number 42.",                                                   hint: "Print any integer" },
    { id: 4,  title: "Print sum of two numbers",            description: "Take two integers as input and print their sum.\nInput: 3 5\nOutput: 8",                       hint: "Add two inputs" },
    { id: 5,  title: "Print subtraction of two numbers",    description: "Take two integers as input and print their difference.\nInput: 10 3\nOutput: 7",               hint: "Subtract second from first" },
    { id: 6,  title: "Print multiplication of two numbers", description: "Take two integers and print their product.\nInput: 4 5\nOutput: 20",                           hint: "Multiply two numbers" },
    { id: 7,  title: "Print division of two numbers",       description: "Take two integers and print their division result.\nInput: 10 2\nOutput: 5.0",                 hint: "Divide first by second" },
    { id: 8,  title: "Find square of a number",             description: "Take a number N and print N squared.\nInput: 4\nOutput: 16",                                   hint: "n * n" },
    { id: 9,  title: "Find cube of a number",               description: "Take a number N and print N cubed.\nInput: 3\nOutput: 27",                                    hint: "n * n * n" },
    { id: 10, title: "Print next number (N + 1)",           description: "Take a number N and print N+1.\nInput: 7\nOutput: 8",                                          hint: "Add 1 to input" },
    { id: 11, title: "Print previous number (N - 1)",       description: "Take a number N and print N-1.\nInput: 7\nOutput: 6",                                          hint: "Subtract 1 from input" },
    { id: 12, title: "Print sum of three numbers",          description: "Take three integers and print their sum.\nInput: 1 2 3\nOutput: 6",                            hint: "Add three inputs" },
    { id: 13, title: "Find average of three numbers",       description: "Take three numbers and print their average.\nInput: 10 20 30\nOutput: 20.0",                   hint: "Sum / 3" },
    { id: 14, title: "Print remainder of two numbers",      description: "Take two integers and print remainder of first divided by second.\nInput: 10 3\nOutput: 1",    hint: "Use % operator" },
    { id: 15, title: "Convert number into double (N * 2)",  description: "Take N and print N * 2.\nInput: 5\nOutput: 10",                                                hint: "Multiply by 2" },
    { id: 16, title: "Convert number into half (N / 2)",    description: "Take N and print N / 2.\nInput: 10\nOutput: 5.0",                                              hint: "Divide by 2" },
    { id: 17, title: "Print product of three numbers",      description: "Take three integers and print their product.\nInput: 2 3 4\nOutput: 24",                       hint: "Multiply three inputs" },
    { id: 18, title: "Print sum of four numbers",           description: "Take four integers and print their sum.\nInput: 1 2 3 4\nOutput: 10",                          hint: "Add four inputs" },
    { id: 19, title: "Find average of two numbers",         description: "Take two numbers and print their average.\nInput: 10 20\nOutput: 15.0",                        hint: "Sum / 2" },
    { id: 20, title: "Print difference of three numbers",   description: "Take three numbers and print a - b - c.\nInput: 20 5 3\nOutput: 12",                           hint: "a - b - c" },
  ],
  intermediate: [
    { id: 1,  title: "Check if a number is even or odd",               description: "Take N. Print 'Even' or 'Odd'.\nInput: 4\nOutput: Even",                                                         hint: "Use % 2" },
    { id: 2,  title: "Print numbers from 1 to N and their sum",        description: "Take N. Print all numbers 1 to N each on new line, then print 'Sum: X'.\nInput: 5\nOutput: 1 2 3 4 5\nSum: 15", hint: "Use a loop" },
    { id: 3,  title: "Find largest of three numbers",                  description: "Take three numbers. Print the largest.\nInput: 10 25 7\nOutput: 25",                                             hint: "Use if-elif" },
    { id: 4,  title: "Print table of a number",                        description: "Take N. Print multiplication table 1-10.\nInput: 5\nOutput: 5 x 1 = 5\n5 x 2 = 10\n...",                       hint: "Loop 1 to 10" },
    { id: 5,  title: "Check if number is greater than 18",             description: "Take N. Print 'Adult' if >= 18 else 'Minor'.\nInput: 20\nOutput: Adult",                                         hint: "if N >= 18" },
    { id: 6,  title: "Find factorial of a number",                     description: "Take N. Print N!.\nInput: 5\nOutput: 120",                                                                       hint: "Multiply 1 to N" },
    { id: 7,  title: "Print all even numbers from 1 to N",             description: "Take N. Print all even numbers from 1 to N.\nInput: 10\nOutput: 2 4 6 8 10",                                    hint: "if n%2==0" },
    { id: 8,  title: "Reverse a number",                               description: "Take N. Print its reverse.\nInput: 12345\nOutput: 54321",                                                        hint: "Use % 10 and // 10" },
    { id: 9,  title: "Find sum of digits of a number",                 description: "Take N. Print sum of its digits.\nInput: 123\nOutput: 6",                                                        hint: "Extract each digit" },
    { id: 10, title: "Check if a number is palindrome",                description: "Take N. Print 'Palindrome' or 'Not Palindrome'.\nInput: 121\nOutput: Palindrome",                               hint: "Reverse and compare" },
    { id: 11, title: "Take an array and print all elements",           description: "Take N then N space-separated numbers. Print each on new line.\nInput: 3\n1 2 3\nOutput: 1\n2\n3",              hint: "Use a loop" },
    { id: 12, title: "Find maximum element in an array",               description: "Take N then N numbers. Print max.\nInput: 5\n3 1 4 1 5\nOutput: 5",                                             hint: "Track max" },
    { id: 13, title: "Find minimum element in an array",               description: "Take N then N numbers. Print min.\nInput: 5\n3 1 4 1 5\nOutput: 1",                                             hint: "Track min" },
    { id: 14, title: "Count even numbers in an array",                 description: "Take N then N numbers. Print count of even numbers.\nInput: 5\n1 2 3 4 5\nOutput: 2",                           hint: "Count n%2==0" },
    { id: 15, title: "Search an element in array",                     description: "Take N, array, then target. Print index (0-based) or -1.\nInput: 5\n1 2 3 4 5\n3\nOutput: 2",                  hint: "Linear search" },
    { id: 16, title: "Check if a year is leap year",                   description: "Take year. Print 'Leap' or 'Not Leap'.\nInput: 2000\nOutput: Leap",                                             hint: "Divisible by 4, 100, 400" },
    { id: 17, title: "Find sum of first N natural numbers",            description: "Take N. Print N*(N+1)/2.\nInput: 10\nOutput: 55",                                                                hint: "Formula: n(n+1)/2" },
    { id: 18, title: "Print numbers from N to 1",                      description: "Take N. Print from N down to 1.\nInput: 5\nOutput: 5 4 3 2 1",                                                  hint: "Reverse loop" },
    { id: 19, title: "Find largest digit in a number",                 description: "Take N. Print largest digit.\nInput: 3947\nOutput: 9",                                                           hint: "Extract digits and compare" },
    { id: 20, title: "Sum of array elements — even or odd",            description: "Take N then array. Print sum. Then print 'Even' or 'Odd'.\nInput: 4\n1 2 3 4\nOutput: 10\nEven",               hint: "Sum array then %2" },
  ],
  pro: [
    { id: 1,  title: "Second largest element (without sorting)",       description: "Take N then array. Print second largest element.\nInput: 5\n3 1 4 1 5\nOutput: 4",                              hint: "Track first and second max" },
    { id: 2,  title: "Check if array is sorted and rotated",           description: "Take N then array. Print 'Yes' or 'No'.\nInput: 5\n3 4 5 1 2\nOutput: Yes",                                    hint: "Count inversions" },
    { id: 3,  title: "Remove duplicates from sorted array",            description: "Take N then sorted array. Print unique elements.\nInput: 6\n1 1 2 3 3 4\nOutput: 1 2 3 4",                     hint: "Two pointer" },
    { id: 4,  title: "Find frequency of elements",                     description: "Take N then array. Print each element and its count.\nInput: 5\n1 2 1 3 2\nOutput: 1: 2\n2: 2\n3: 1",          hint: "Use dictionary/map" },
    { id: 5,  title: "Two Sum problem",                                description: "Take N, array, target. Print indices of two numbers that add to target.\nInput: 4\n2 7 11 15\n9\nOutput: 0 1",  hint: "Use hashmap" },
    { id: 6,  title: "Move all zeros to end",                          description: "Take N then array. Print array with all zeros moved to end.\nInput: 5\n0 1 0 3 12\nOutput: 1 3 12 0 0",        hint: "Two pointer swap" },
    { id: 7,  title: "Find missing number (1 to N)",                   description: "Take N then array of N-1 numbers (1 to N range). Print missing.\nInput: 5\n1 2 4 5\nOutput: 3",               hint: "Expected sum - actual sum" },
    { id: 8,  title: "Find majority element",                          description: "Take N then array. Print element appearing > N/2 times.\nInput: 5\n2 2 1 1 2\nOutput: 2",                      hint: "Boyer-Moore voting" },
    { id: 9,  title: "Maximum subarray sum (Kadane's Algorithm)",      description: "Take N then array. Print maximum subarray sum.\nInput: 8\n-2 1 -3 4 -1 2 1 -5\nOutput: 6",                    hint: "Track current and global max" },
    { id: 10, title: "Best time to buy and sell stock",                description: "Take N then prices array. Print max profit (single transaction).\nInput: 6\n7 1 5 3 6 4\nOutput: 5",           hint: "Track min price" },
    { id: 11, title: "Rotate array by K steps",                        description: "Take N, array, K. Print array rotated right by K steps.\nInput: 5\n1 2 3 4 5\n2\nOutput: 4 5 1 2 3",          hint: "Reverse 3 times" },
    { id: 12, title: "Merge two sorted arrays",                        description: "Take N, array1, M, array2. Print merged sorted array.\nInput: 3\n1 3 5\n4\n2 4 6 8\nOutput: 1 2 3 4 5 6 8",  hint: "Compare and merge" },
    { id: 13, title: "Find intersection of two arrays",                description: "Take N, array1, M, array2. Print common elements.\nInput: 4\n1 2 3 4\n3\n3 4 5\nOutput: 3 4",                hint: "Use set" },
    { id: 14, title: "Longest consecutive sequence",                   description: "Take N then array. Print length of longest consecutive sequence.\nInput: 6\n100 4 200 1 3 2\nOutput: 4",       hint: "Check n-1 not in set" },
    { id: 15, title: "Container with most water",                      description: "Take N then heights array. Print max water.\nInput: 9\n1 8 6 2 5 4 8 3 7\nOutput: 49",                        hint: "Two pointer" },
    { id: 16, title: "Check palindrome string (two-pointer)",          description: "Take a string. Print 'Yes' or 'No'.\nInput: racecar\nOutput: Yes",                                              hint: "Left and right pointers" },
    { id: 17, title: "Check if two strings are anagrams",              description: "Take two strings. Print 'Yes' or 'No'.\nInput: listen silent\nOutput: Yes",                                    hint: "Sort or frequency map" },
    { id: 18, title: "Longest substring without repeating characters", description: "Take a string. Print length of longest substring.\nInput: abcabcbb\nOutput: 3",                                hint: "Sliding window + set" },
    { id: 19, title: "First non-repeating character",                  description: "Take a string. Print first non-repeating char or -1.\nInput: leetcode\nOutput: l",                             hint: "Frequency map then scan" },
    { id: 20, title: "Valid parentheses",                              description: "Take a string of brackets. Print 'Valid' or 'Invalid'.\nInput: ()[]{}\nOutput: Valid",                         hint: "Use stack" },
  ],
};

const levelInfo = {
  basic:        { name: "Basic",        icon: "🌱", coins: 15, border: "border-emerald-200", bg: "bg-emerald-50", badge: "bg-emerald-100 text-emerald-700" },
  intermediate: { name: "Intermediate", icon: "⚡", coins: 30, border: "border-blue-200",    bg: "bg-blue-50",    badge: "bg-blue-100 text-blue-700" },
  pro:          { name: "Pro",          icon: "🔥", coins: 50, border: "border-orange-200",  bg: "bg-orange-50",  badge: "bg-orange-100 text-orange-700" },
};

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ level: string; problem: string }>;
}) {
  const { level, problem: problemId } = await params;

  const problems = allProblems[level];
  const info = levelInfo[level as keyof typeof levelInfo];
  const problem = problems?.find((p) => p.id === parseInt(problemId));

  if (!problem || !info) notFound();

  const idx = problems.findIndex((p) => p.id === parseInt(problemId));
  const prevProblem = idx > 0 ? problems[idx - 1] : null;
  const nextProblem = idx < problems.length - 1 ? problems[idx + 1] : null;

  return (
    <ProblemClient
      level={level}
      problem={problem}
      info={info}
      prevProblem={prevProblem}
      nextProblem={nextProblem}
      totalProblems={problems.length}
    />
  );
}