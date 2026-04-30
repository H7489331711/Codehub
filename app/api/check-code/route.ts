import { NextRequest, NextResponse } from "next/server";

type Lang = "python" | "c";
type Problem = { id: number; title: string; description: string; hint: string };

const JDOODLE_LANG: Record<string, { lang: string; version: string }> = {
  c:      { lang: "c",       version: "5" },
  python: { lang: "python3", version: "4" },
};

function normalizeStdin(stdin: string): string {
  if (!stdin || !stdin.trim()) return "";
  return stdin.trim().split(/\s+/).join("\n") + "\n";
}

function extractAnswer(output: string): string {
  if (!output) return "";
  const lines = output.split("\n").map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return "";
  if (lines.length === 1) return lines[0];
  const promptKeywords = ["enter", "input", "type", "give", "provide", "please"];
  const ansLines = lines.filter(line => {
    const lower = line.toLowerCase();
    return !promptKeywords.some(k => lower.startsWith(k));
  });
  return ansLines.length > 0 ? ansLines.join("\n") : lines[lines.length - 1];
}

function matches(rawOutput: string, expected: string): boolean {
  const answer = extractAnswer(rawOutput);
  const a = answer.toLowerCase().trim();
  const e = expected.toLowerCase().trim();
  if (a === e) return true;
  for (const line of a.split("\n")) {
    const l = line.trim();
    if (l === e) return true;
    const flexWords = ["even","odd","palindrome","not palindrome","leap","not leap","adult","minor"];
    if (flexWords.includes(e) && l.includes(e)) return true;
  }
  return false;
}

// Yahan tere wahi TESTS cases aayenge jo tune pehle diye the
const TESTS: Record<string, { stdin: string; expected: string }[]> = {
  "Print Hello World":                   [{ stdin: "",         expected: "hello world" }],
  "Print sum of two numbers":            [{ stdin: "3 5",      expected: "8"     }, { stdin: "10 20",    expected: "30"  }],
  "Check if a number is even or odd":    [{ stdin: "4",        expected: "even"  }, { stdin: "7",        expected: "odd" }],
  "Find factorial of a number":          [{ stdin: "5",        expected: "120"   }, { stdin: "4",        expected: "24"  }],
  // ... (Baaki saare tests jo tere pas the wo yahan copy kar lena)
};

export async function POST(req: NextRequest) {
  try {
    const { code, lang, problem } = await req.json() as { code: string; lang: Lang; problem: Problem };
    const title = problem.title;
    const tests = TESTS[title];
    const config = JDOODLE_LANG[lang];

    if (!tests || tests.length === 0) {
      return NextResponse.json({ correct: true, feedback: "🎉 Code ran successfully!", suggestion: "" });
    }

    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      
      const response = await fetch("https://api.jdoodle.com/v1/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientId: process.env.JDOODLE_CLIENT_ID,
          clientSecret: process.env.JDOODLE_CLIENT_SECRET,
          script: code,
          stdin: normalizeStdin(test.stdin),
          language: config.lang,
          versionIndex: config.version,
        }),
      });

      const data = await response.json();
      const rawOutput = data.output || "";

      if (data.statusCode !== 200 || rawOutput.toLowerCase().includes("error")) {
        return NextResponse.json({ 
          correct: false, 
          feedback: `❌ Error in Test Case ${i+1}:\n${rawOutput.split('\n').slice(0,3).join('\n')}`, 
          suggestion: "" 
        });
      }

      if (!matches(rawOutput, test.expected)) {
        const answer = extractAnswer(rawOutput);
        return NextResponse.json({
          correct: false,
          feedback: `❌ Wrong Answer!\n\nTest ${i+1}:\nInput: ${test.stdin || "(none)"}\nExpected: ${test.expected}\nGot: ${answer}`,
          suggestion: "💡 Hint: Check if you are printing extra text or missing the logic.",
        });
      }
    }

    return NextResponse.json({ correct: true, feedback: "🎉 All test cases passed!", suggestion: "" });

  } catch (e) {
    return NextResponse.json({ correct: false, feedback: "Server error. Please try again.", suggestion: "" });
  }
}