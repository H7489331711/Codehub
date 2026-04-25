import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { writeFile, unlink, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { promisify } from "util";

const execAsync = promisify(exec);
const TMP_DIR = "/tmp/codehub";

async function ensureTmpDir() {
  if (!existsSync(TMP_DIR)) await mkdir(TMP_DIR, { recursive: true });
}

// KEY FIX: "3 5" → "3\n5\n" so scanf("%d%d") and scanf("%d %d") both work
function normalizeStdin(stdin: string): string {
  if (!stdin || !stdin.trim()) return "";
  return stdin.trim().split(/\s+/).join("\n") + "\n";
}

function formatCError(err: string): string {
  const lines = err.split("\n");
  const result: string[] = [];
  for (const line of lines) {
    const m = line.match(/[^:]+:(\d+):\d+:\s*(error):\s*(.+)$/);
    if (m) result.push(`Line ${m[1]}: ${m[3].trim()}`);
  }
  let out = result.length > 0 ? result.join("\n") : err.split("\n").slice(0, 5).join("\n");
  if (err.includes("expected ';'")) out += "\n\n💡 Every C statement needs ;";
  else if (err.includes("undeclared")) out += "\n\n💡 Declare variable: int x;";
  else if (err.includes("implicit decl")) out += "\n\n💡 Add: #include <stdio.h>";
  else if (err.includes("too few arg")) out += "\n\n💡 scanf needs &: scanf(\"%d\", &n)";
  else if (err.includes("format")) out += "\n\n💡 Use %d=int, %f=float, %s=string";
  return "❌ Compile Error:\n" + out;
}

function formatPyError(err: string): string {
  const lines = err.split("\n");
  const result: string[] = [];
  for (const line of lines) {
    if (/(SyntaxError|NameError|TypeError|ValueError|IndentationError|ZeroDivisionError):/.test(line))
      result.push(line.trim());
    else if (line.includes("line ") && line.includes("File"))
      result.push(line.trim());
  }
  let out = result.length > 0 ? result.join("\n") : err.trim().split("\n").slice(-3).join("\n");
  if (err.includes("SyntaxError")) out += "\n\n💡 Missing colon (:) after if/for/while/def?";
  else if (err.includes("IndentationError")) out += "\n\n💡 Use 4 spaces consistently.";
  else if (err.includes("NameError")) out += "\n\n💡 Variable not defined. Check spelling.";
  else if (err.includes("TypeError")) out += "\n\n💡 Use int(), str(), float() for conversion.";
  else if (err.includes("ValueError")) out += "\n\n💡 Check your int(input()) usage.";
  else if (err.includes("ZeroDivisionError")) out += "\n\n💡 Cannot divide by zero!";
  return "❌ Error:\n" + out;
}

export async function POST(req: NextRequest) {
  const id = Date.now() + Math.random().toString(36).slice(2);
  await ensureTmpDir();

  let stdinFile = path.join(TMP_DIR, id + ".stdin");
  let srcFile = "";
  let exeFile = "";

  try {
    const { code, lang, stdin } = await req.json();
    if (!code?.trim()) return NextResponse.json({ output: "Please write some code first!", error: true });

    // Normalize stdin: "3 5" becomes "3\n5\n"
    await writeFile(stdinFile, normalizeStdin(stdin || ""));

    if (lang === "c") {
      srcFile = path.join(TMP_DIR, id + ".c");
      exeFile = path.join(TMP_DIR, id);
      await writeFile(srcFile, code);

      // Compile
      try {
        await execAsync(`gcc "${srcFile}" -o "${exeFile}" -lm -std=c11 -w`, { timeout: 10000 });
      } catch (e: any) {
        return NextResponse.json({ output: formatCError(e.stderr || ""), error: true });
      }

      // Run with redirected stdin
      try {
        const { stdout, stderr } = await execAsync(
          `"${exeFile}" < "${stdinFile}"`,
          { timeout: 5000 }
        );
        const out = stdout.trim();
        if (!out && stderr) return NextResponse.json({ output: formatCError(stderr), error: true });
        return NextResponse.json({ output: out || "Program ran with no output.", error: false });
      } catch (e: any) {
        if (e.killed) return NextResponse.json({ output: "⏱ Time Limit Exceeded! Check for infinite loops.", error: true });
        const out = (e.stdout || "").trim();
        return NextResponse.json({ output: out || "Runtime error.", error: true });
      }
    }

    if (lang === "python") {
      srcFile = path.join(TMP_DIR, id + ".py");
      await writeFile(srcFile, code);

      try {
        const { stdout, stderr } = await execAsync(
          `${process.platform === "win32" ? "python" : "python3"} "${srcFile}" < "${stdinFile}"`,
          { timeout: 5000 }
        );
        const out = stdout.trim();
        if (!out && stderr) return NextResponse.json({ output: formatPyError(stderr), error: true });
        return NextResponse.json({ output: out || "Program ran with no output.", error: false });
      } catch (e: any) {
        if (e.killed) return NextResponse.json({ output: "⏱ Time Limit Exceeded! Check for infinite loops.", error: true });
        const out = (e.stdout || "").trim();
        const err = e.stderr || "";
        if (!out && err) return NextResponse.json({ output: formatPyError(err), error: true });
        return NextResponse.json({ output: out || "Runtime error.", error: true });
      }
    }

    return NextResponse.json({ output: "Unsupported language.", error: true });

  } catch (e) {
    return NextResponse.json({ output: "Server error. Please try again.", error: true });
  } finally {
    try { if (stdinFile) await unlink(stdinFile); } catch {}
    try { if (srcFile)   await unlink(srcFile); } catch {}
    try { if (exeFile)   await unlink(exeFile); } catch {}
  }
}