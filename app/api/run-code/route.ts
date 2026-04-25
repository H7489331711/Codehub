import { NextRequest, NextResponse } from "next/server";

// Judge0 language IDs
const LANG_ID: Record<string, number> = {
  c:      50,  // C (GCC 9.2.0)
  python: 71,  // Python 3.8.1
};

function normalizeStdin(stdin: string): string {
  if (!stdin || !stdin.trim()) return "";
  return stdin.trim().split(/\s+/).join("\n") + "\n";
}

function formatError(output: string, lang: string): string {
  if (!output) return "Runtime error.";
  if (lang === "c") {
    const lines = output.split("\n");
    const result: string[] = [];
    for (const line of lines) {
      const m = line.match(/[^:]+:(\d+):\d+:\s*(error):\s*(.+)$/);
      if (m) result.push(`Line ${m[1]}: ${m[3].trim()}`);
    }
    let out = result.length > 0 ? result.join("\n") : output.split("\n").slice(0, 5).join("\n");
    if (output.includes("expected ';'"))    out += "\n\n💡 Every C statement needs ;";
    else if (output.includes("undeclared")) out += "\n\n💡 Declare variable: int x;";
    else if (output.includes("implicit"))   out += "\n\n💡 Add: #include <stdio.h>";
    else if (output.includes("too few"))    out += "\n\n💡 scanf needs &: scanf(\"%d\", &n)";
    return "❌ Compile Error:\n" + out;
  }
  if (lang === "python") {
    let out = output.trim().split("\n").slice(-4).join("\n");
    if (output.includes("SyntaxError"))       out += "\n\n💡 Missing colon (:) after if/for/while/def?";
    else if (output.includes("IndentationError")) out += "\n\n💡 Use 4 spaces consistently.";
    else if (output.includes("NameError"))    out += "\n\n💡 Variable not defined. Check spelling.";
    else if (output.includes("TypeError"))    out += "\n\n💡 Use int(), str(), float() for conversion.";
    else if (output.includes("ValueError"))   out += "\n\n💡 Check your int(input()) usage.";
    else if (output.includes("ZeroDivisionError")) out += "\n\n💡 Cannot divide by zero!";
    return "❌ Error:\n" + out;
  }
  return output;
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function POST(req: NextRequest) {
  try {
    const { code, lang, stdin } = await req.json();

    if (!code?.trim()) {
      return NextResponse.json({ output: "Please write some code first!", error: true });
    }

    const languageId = LANG_ID[lang];
    if (!languageId) {
      return NextResponse.json({ output: "Unsupported language.", error: true });
    }

    const JUDGE0_URL = process.env.JUDGE0_URL || "https://judge0-ce.p.rapidapi.com";
    const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || "";

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    // RapidAPI key use karo agar available ho
    if (RAPIDAPI_KEY) {
      headers["X-RapidAPI-Key"] = RAPIDAPI_KEY;
      headers["X-RapidAPI-Host"] = "judge0-ce.p.rapidapi.com";
    }

    // Submit code
    const submitRes = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=false`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        language_id: languageId,
        source_code: code,
        stdin: normalizeStdin(stdin || ""),
      }),
    });

    if (!submitRes.ok) {
      return NextResponse.json({ output: "Code execution service unavailable. Try again!", error: true });
    }

    const { token } = await submitRes.json();

    // Poll for result (max 10 seconds)
    for (let i = 0; i < 10; i++) {
      await sleep(1000);

      const resultRes = await fetch(`${JUDGE0_URL}/submissions/${token}?base64_encoded=false`, {
        headers,
      });

      const result = await resultRes.json();

      // status 1 = In Queue, 2 = Processing
      if (result.status?.id <= 2) continue;

      // status 3 = Accepted
      if (result.status?.id === 3) {
        const out = (result.stdout || "").trim();
        return NextResponse.json({
          output: out || "Program ran with no output.",
          error: false,
        });
      }

      // status 4 = Wrong Answer (still show output)
      if (result.status?.id === 4) {
        return NextResponse.json({
          output: (result.stdout || "").trim() || "No output.",
          error: false,
        });
      }

      // status 5 = Time Limit Exceeded
      if (result.status?.id === 5) {
        return NextResponse.json({
          output: "⏱ Time Limit Exceeded! Check for infinite loops.",
          error: true,
        });
      }

      // Compile error (status 6)
      if (result.status?.id === 6) {
        return NextResponse.json({
          output: formatError(result.compile_output || "Compile error.", lang),
          error: true,
        });
      }

      // Runtime error (status 7-12)
      const errOutput = result.stderr || result.compile_output || result.message || "Runtime error.";
      return NextResponse.json({
        output: formatError(errOutput, lang),
        error: true,
      });
    }

    return NextResponse.json({ output: "Execution timed out. Try again!", error: true });

  } catch (e) {
    console.error("Execute error:", e);
    return NextResponse.json({ output: "Server error. Please try again.", error: true });
  }
}