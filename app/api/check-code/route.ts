import { NextRequest, NextResponse } from "next/server";

type Lang = "python" | "c";

const JDOODLE_LANG: Record<string, { lang: string; version: string }> = {
  c:      { lang: "c",       version: "5" },
  python: { lang: "python3", version: "4" },
};

// 1. Precise Test Cases (Title exact match hona chahiye jo database/frontend mein hai)
const TESTS: Record<string, { stdin: string; expected: string }[]> = {
  "Print Hello World":                   [{ stdin: "",         expected: "hello world" }],
  "Print a number":                      [{ stdin: "",         expected: "42"    }], // Isse fix hoga tera 45 wala issue
  "Print sum of two numbers":            [{ stdin: "3 5",      expected: "8"     }, { stdin: "10 20",    expected: "30"  }],
  "Check if a number is even or odd":    [{ stdin: "4",        expected: "even"  }, { stdin: "7",        expected: "odd" }],
  "Find factorial of a number":          [{ stdin: "5",        expected: "120"   }, { stdin: "4",        expected: "24"  }],
};

function normalizeStdin(stdin: string): string {
  if (!stdin || !stdin.trim()) return "";
  return stdin.trim().split(/\s+/).join("\n") + "\n";
}

// 2. Extra Text Hatane ke liye (sirf result nikalne ke liye)
function extractAnswer(output: string): string {
  if (!output) return "";
  const lines = output.split("\n").map(l => l.trim()).filter(Boolean);
  if (lines.length === 0) return "";
  
  const promptKeywords = ["enter", "input", "type", "give", "provide", "please", "result is"];
  const ansLines = lines.filter(line => {
    const lower = line.toLowerCase();
    return !promptKeywords.some(k => lower.includes(k));
  });
  
  // Agar user ne "The answer is 42" likha hai, toh last word uthao ya puri line
  const finalLine = ansLines.length > 0 ? ansLines[ansLines.length - 1] : lines[lines.length - 1];
  return finalLine.replace(/[^\d.a-zA-Z]/g, " ").trim().split(" ").pop() || finalLine;
}

export async function POST(req: NextRequest) {
  try {
    const { code, lang, problem } = await req.json();
    const title = problem.title; // Check karo ki ye "Print a number" hi aa raha hai na?
    const tests = TESTS[title];
    const config = JDOODLE_LANG[lang as Lang];

    if (!tests) {
      return NextResponse.json({ correct: false, feedback: "Problem not found in test suite!", suggestion: "" });
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

      // Check for Runtime/Compile Errors
      if (data.statusCode !== 200 || rawOutput.toLowerCase().includes("error")) {
        return NextResponse.json({ 
          correct: false, 
          feedback: `❌ Error in Test Case ${i+1}:\n${rawOutput.split('\n').slice(0,2).join('\n')}`, 
          suggestion: "" 
        });
      }

      const userAnswer = extractAnswer(rawOutput).toLowerCase();
      const expectedAnswer = test.expected.toLowerCase();

      // STRICT COMPARISON: Agar user ka answer expected se match nahi hota
      if (userAnswer !== expectedAnswer && !rawOutput.toLowerCase().includes(expectedAnswer)) {
        return NextResponse.json({
          correct: false,
          feedback: `❌ Wrong Answer!\n\nTest Case ${i+1}:\nExpected: ${test.expected}\nYour Output: ${userAnswer}`,
          suggestion: `💡 Tip: Question ne ${test.expected} manga hai, aapne ${userAnswer} print kiya.`,
        });
      }
    }

    // Saare tests pass hone par hi ye return hoga
    return NextResponse.json({ correct: true, feedback: "🎉 Congratulations! All test cases passed.", suggestion: "" });

  } catch (e) {
    console.error(e);
    return NextResponse.json({ correct: false, feedback: "Server error. Try again.", suggestion: "" });
  }
}