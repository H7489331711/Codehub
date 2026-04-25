import { NextRequest, NextResponse } from "next/server";

type Lang = "python" | "c";
type Problem = { id: number; title: string; description: string; hint: string };

const LANG_ID: Record<string, number> = {
  c:      50,
  python: 71,
};

function normalizeStdin(stdin: string): string {
  if (!stdin || !stdin.trim()) return "";
  return stdin.trim().split(/\s+/).join("\n") + "\n";
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runWithJudge0(code: string, lang: Lang, stdin: string): Promise<{ output: string; error: boolean }> {
  const JUDGE0_URL = process.env.JUDGE0_URL || "https://judge0-ce.p.rapidapi.com";
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || "";

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (RAPIDAPI_KEY) {
    headers["X-RapidAPI-Key"] = RAPIDAPI_KEY;
    headers["X-RapidAPI-Host"] = "judge0-ce.p.rapidapi.com";
  }

  const submitRes = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=false&wait=false`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      language_id: LANG_ID[lang],
      source_code: code,
      stdin: normalizeStdin(stdin),
    }),
  });

  if (!submitRes.ok) return { output: "SERVICE_UNAVAILABLE", error: true };

  const { token } = await submitRes.json();

  for (let i = 0; i < 10; i++) {
    await sleep(1000);
    const res = await fetch(`${JUDGE0_URL}/submissions/${token}?base64_encoded=false`, { headers });
    const result = await res.json();

    if (result.status?.id <= 2) continue;

    if (result.status?.id === 3 || result.status?.id === 4) {
      return { output: (result.stdout || "").trim(), error: false };
    }
    if (result.status?.id === 5) {
      return { output: "TIMEOUT", error: true };
    }
    if (result.status?.id === 6) {
      return { output: "COMPILE_ERROR:" + (result.compile_output || ""), error: true };
    }
    const err = result.stderr || result.compile_output || result.message || "Runtime error";
    return { output: "RUNTIME_ERROR:" + err, error: true };
  }

  return { output: "TIMEOUT", error: true };
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
    if (e === "hello world" && l.replace(/\s+/g,"").includes("helloworld")) return true;
    if (e === "not" && (l.includes("not palindrome") || l.includes("not leap") || l.includes("not a "))) return true;
  }
  return false;
}

function fmtError(raw: string, lang: Lang): string {
  const isCompile = raw.startsWith("COMPILE_ERROR:");
  const err = raw.replace(/^(COMPILE_ERROR|RUNTIME_ERROR):/, "");
  const lines = err.split("\n");
  const result: string[] = [];
  for (const line of lines) {
    if (lang === "c") {
      const m = line.match(/[^:]+:(\d+):\d+:\s*error:\s*(.+)$/);
      if (m) { result.push(`Line ${m[1]}: ${m[2].trim()}`); continue; }
    }
    if (/(SyntaxError|NameError|TypeError|ValueError|IndentationError|ZeroDivisionError):/.test(line)) {
      result.push(line.trim()); continue;
    }
  }
  let out = result.join("\n").trim() || err.split("\n").slice(0,4).join("\n").trim();
  if (lang === "c") {
    if (err.includes("expected ';'"))    out += "\n💡 Every statement needs ;";
    else if (err.includes("undeclared")) out += "\n💡 Declare variable: int x;";
    else if (err.includes("implicit"))   out += "\n💡 Add: #include <stdio.h>";
    else if (err.includes("too few"))    out += "\n💡 scanf needs &: scanf(\"%d\", &n)";
  } else {
    if (err.includes("SyntaxError"))          out += "\n💡 Missing colon (:) after if/for/while/def?";
    else if (err.includes("IndentationError")) out += "\n💡 Use 4 spaces consistently.";
    else if (err.includes("NameError"))        out += "\n💡 Variable not defined. Check spelling.";
    else if (err.includes("TypeError"))        out += "\n💡 Use int() str() float() for conversion.";
    else if (err.includes("ValueError"))       out += "\n💡 Check your int(input()) usage.";
    else if (err.includes("ZeroDivisionError")) out += "\n💡 Cannot divide by zero!";
  }
  return `❌ ${isCompile ? "Compile" : "Runtime"} Error:\n${out}`;
}

const TESTS: Record<string, { stdin: string; expected: string }[]> = {
  "Print Hello World":                   [{ stdin: "",         expected: "hello world" }],
  "Print a number":                      [{ stdin: "",         expected: "42"    }],
  "Print sum of two numbers":            [{ stdin: "3 5",      expected: "8"     }, { stdin: "10 20",    expected: "30"  }],
  "Print subtraction of two numbers":    [{ stdin: "10 3",     expected: "7"     }, { stdin: "20 5",     expected: "15"  }],
  "Print multiplication of two numbers": [{ stdin: "4 5",      expected: "20"    }, { stdin: "3 7",      expected: "21"  }],
  "Print division of two numbers":       [{ stdin: "10 2",     expected: "5"     }, { stdin: "9 3",      expected: "3"   }],
  "Find square of a number":             [{ stdin: "4",        expected: "16"    }, { stdin: "5",        expected: "25"  }],
  "Find cube of a number":               [{ stdin: "3",        expected: "27"    }, { stdin: "2",        expected: "8"   }],
  "Print next number (N + 1)":           [{ stdin: "7",        expected: "8"     }, { stdin: "10",       expected: "11"  }],
  "Print previous number (N - 1)":       [{ stdin: "7",        expected: "6"     }, { stdin: "10",       expected: "9"   }],
  "Print sum of three numbers":          [{ stdin: "1 2 3",    expected: "6"     }, { stdin: "10 20 30", expected: "60"  }],
  "Find average of three numbers":       [{ stdin: "10 20 30", expected: "20"    }],
  "Print remainder of two numbers":      [{ stdin: "10 3",     expected: "1"     }, { stdin: "17 5",     expected: "2"   }],
  "Convert number into double (N * 2)":  [{ stdin: "5",        expected: "10"    }, { stdin: "7",        expected: "14"  }],
  "Convert number into half (N / 2)":    [{ stdin: "10",       expected: "5"     }, { stdin: "6",        expected: "3"   }],
  "Print product of three numbers":      [{ stdin: "2 3 4",    expected: "24"    }, { stdin: "5 6 7",    expected: "210" }],
  "Print sum of four numbers":           [{ stdin: "1 2 3 4",  expected: "10"    }, { stdin: "5 5 5 5",  expected: "20"  }],
  "Find average of two numbers":         [{ stdin: "10 20",    expected: "15"    }, { stdin: "4 6",      expected: "5"   }],
  "Print difference of three numbers":   [{ stdin: "20 5 3",   expected: "12"    }, { stdin: "30 10 5",  expected: "15"  }],
  "Check if a number is even or odd":    [{ stdin: "4",        expected: "even"  }, { stdin: "7",        expected: "odd" }],
  "Find largest of three numbers":       [{ stdin: "10 25 7",  expected: "25"    }, { stdin: "3 1 9",    expected: "9"   }],
  "Check if number is greater than 18":  [{ stdin: "20",       expected: "adult" }, { stdin: "15",       expected: "minor"}],
  "Find factorial of a number":          [{ stdin: "5",        expected: "120"   }, { stdin: "4",        expected: "24"  }],
  "Reverse a number":                    [{ stdin: "12345",    expected: "54321" }, { stdin: "987",      expected: "789" }],
  "Find sum of digits of a number":      [{ stdin: "123",      expected: "6"     }, { stdin: "456",      expected: "15"  }],
  "Check if a number is palindrome":     [{ stdin: "121",      expected: "palindrome" }, { stdin: "123", expected: "not"}],
  "Check if a year is leap year":        [{ stdin: "2000",     expected: "leap"  }, { stdin: "1900",     expected: "not" }],
  "Find sum of first N natural numbers": [{ stdin: "10",       expected: "55"    }, { stdin: "5",        expected: "15"  }],
  "Print numbers from N to 1":           [{ stdin: "5",        expected: "1"     }],
  "Find largest digit in a number":      [{ stdin: "3947",     expected: "9"     }, { stdin: "1234",     expected: "4"   }],
};

const SOLUTIONS: Record<string, Partial<Record<Lang, string>>> = {
  "Print Hello World":                   { python: `print("Hello World")`,                              c: `#include<stdio.h>\nint main(){printf("Hello World\\n");return 0;}` },
  "Print sum of two numbers":            { python: `a,b=map(int,input().split())\nprint(a+b)`,          c: `#include<stdio.h>\nint main(){int a,b;scanf("%d%d",&a,&b);printf("%d\\n",a+b);return 0;}` },
  "Print subtraction of two numbers":    { python: `a,b=map(int,input().split())\nprint(a-b)`,          c: `#include<stdio.h>\nint main(){int a,b;scanf("%d%d",&a,&b);printf("%d\\n",a-b);return 0;}` },
  "Print multiplication of two numbers": { python: `a,b=map(int,input().split())\nprint(a*b)`,          c: `#include<stdio.h>\nint main(){int a,b;scanf("%d%d",&a,&b);printf("%d\\n",a*b);return 0;}` },
  "Print division of two numbers":       { python: `a,b=map(int,input().split())\nprint(a/b)`,          c: `#include<stdio.h>\nint main(){float a,b;scanf("%f%f",&a,&b);printf("%.2f\\n",a/b);return 0;}` },
  "Find square of a number":             { python: `n=int(input())\nprint(n*n)`,                        c: `#include<stdio.h>\nint main(){int n;scanf("%d",&n);printf("%d\\n",n*n);return 0;}` },
  "Find cube of a number":               { python: `n=int(input())\nprint(n*n*n)`,                      c: `#include<stdio.h>\nint main(){int n;scanf("%d",&n);printf("%d\\n",n*n*n);return 0;}` },
  "Check if a number is even or odd":    { python: `n=int(input())\nprint("Even"if n%2==0 else"Odd")`,  c: `#include<stdio.h>\nint main(){int n;scanf("%d",&n);printf(n%2==0?"Even\\n":"Odd\\n");return 0;}` },
  "Find factorial of a number":          { python: `n=int(input())\nr=1\nfor i in range(1,n+1):r*=i\nprint(r)`, c: `#include<stdio.h>\nint main(){int n,r=1;scanf("%d",&n);for(int i=1;i<=n;i++)r*=i;printf("%d\\n",r);return 0;}` },
  "Find sum of first N natural numbers": { python: `n=int(input())\nprint(n*(n+1)//2)`,                 c: `#include<stdio.h>\nint main(){int n;scanf("%d",&n);printf("%d\\n",n*(n+1)/2);return 0;}` },
  "Print sum of three numbers":          { python: `a,b,c=map(int,input().split())\nprint(a+b+c)`,      c: `#include<stdio.h>\nint main(){int a,b,c;scanf("%d%d%d",&a,&b,&c);printf("%d\\n",a+b+c);return 0;}` },
  "Print remainder of two numbers":      { python: `a,b=map(int,input().split())\nprint(a%b)`,          c: `#include<stdio.h>\nint main(){int a,b;scanf("%d%d",&a,&b);printf("%d\\n",a%b);return 0;}` },
  "Find largest of three numbers":       { python: `a,b,c=map(int,input().split())\nprint(max(a,b,c))`, c: `#include<stdio.h>\nint main(){int a,b,c,m;scanf("%d%d%d",&a,&b,&c);m=a>b?a:b;printf("%d\\n",m>c?m:c);return 0;}` },
};

function getSolution(title: string, lang: Lang): string {
  const s = SOLUTIONS[title];
  if (!s) return "";
  const code = s[lang] || s["python"] || s["c"] || "";
  return code ? `${lang==="python"?"Python":"C"} Solution:\n\n${code}` : "";
}

export async function POST(req: NextRequest) {
  try {
    const { code, lang, problem } = await req.json() as { code: string; lang: Lang; problem: Problem };
    const title = problem.title;
    const tests = TESTS[title];

    // Print your name - special case
    if (title === "Print your name") {
      const { output, error } = await runWithJudge0(code, lang, "");
      if (error) return NextResponse.json({ correct: false, feedback: fmtError(output, lang), suggestion: "" });
      if (/[a-zA-Z]/.test(output.trim()))
        return NextResponse.json({ correct: true, feedback: "🎉 Your name printed correctly!", suggestion: "" });
      return NextResponse.json({ correct: false, feedback: "❌ Print your name as a string.", suggestion: "" });
    }

    if (!tests || tests.length === 0) {
      const { output, error } = await runWithJudge0(code, lang, "");
      if (error) return NextResponse.json({ correct: false, feedback: fmtError(output, lang), suggestion: "" });
      return NextResponse.json({ correct: true, feedback: "🎉 Code ran successfully!", suggestion: "" });
    }

    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      const { output, error } = await runWithJudge0(code, lang, test.stdin);

      if (output === "TIMEOUT")
        return NextResponse.json({ correct: false, feedback: "⏱ Time Limit Exceeded! Check for infinite loops.", suggestion: getSolution(title, lang) });

      if (error)
        return NextResponse.json({ correct: false, feedback: fmtError(output, lang), suggestion: getSolution(title, lang) });

      if (!matches(output, test.expected)) {
        const answer = extractAnswer(output);
        return NextResponse.json({
          correct: false,
          feedback: `❌ Wrong Answer!\n\nTest ${i+1}:\nInput:    ${test.stdin || "(none)"}\nExpected: ${test.expected}\nGot:      ${answer}\n\n⚠️ Don't print extra text — just print the result directly!`,
          suggestion: getSolution(title, lang),
        });
      }
    }

    return NextResponse.json({ correct: true, feedback: "🎉 All test cases passed! Your solution is correct.", suggestion: "" });

  } catch (e) {
    return NextResponse.json({ correct: false, feedback: "Server error. Please try again.", suggestion: "" });
  }
}