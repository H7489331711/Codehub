import { NextRequest, NextResponse } from "next/server";

// JDoodle Language Mapping
const JDOODLE_LANG: Record<string, { lang: string; version: string }> = {
  c:      { lang: "c",       version: "5" }, // GCC 11.1.0
  python: { lang: "python3", version: "4" }, // Python 3.10.0
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

export async function POST(req: NextRequest) {
  try {
    const { code, lang, stdin } = await req.json();

    if (!code?.trim()) {
      return NextResponse.json({ output: "Please write some code first!", error: true });
    }

    const config = JDOODLE_LANG[lang];
    if (!config) {
      return NextResponse.json({ output: "Unsupported language.", error: true });
    }

    // JDoodle API Call (No Polling Loop Needed)
    const response = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientId: process.env.JDOODLE_CLIENT_ID,
        clientSecret: process.env.JDOODLE_CLIENT_SECRET,
        script: code,
        stdin: normalizeStdin(stdin || ""),
        language: config.lang,
        versionIndex: config.version,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ output: "JDoodle service unavailable. Try again!", error: true });
    }

    const result = await response.json();

    // JDoodle returns 200 even for compile errors, but output contains the error
    // Check if memory or cpuTime is null (often indicates crash or error)
    if (result.statusCode !== 200) {
        return NextResponse.json({ 
            output: formatError(result.output || "Execution failed", lang), 
            error: true 
        });
    }

    // JDoodle combines stdout and stderr in 'output'
    // Usually, if there's an error, it's in the output.
    const isError = result.output.toLowerCase().includes("error") || result.output.toLowerCase().includes("exception");

    return NextResponse.json({
      output: isError ? formatError(result.output, lang) : result.output.trim(),
      error: isError,
    });

  } catch (e) {
    console.error("Execute error:", e);
    return NextResponse.json({ output: "Server error. Please try again.", error: true });
  }
}