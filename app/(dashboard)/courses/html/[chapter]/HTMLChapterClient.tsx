"use client";

import { useState } from "react";
import Link from "next/link";
import { Chapter, QuizQuestion, ContentBlock } from "@/app/component/data/pythonData";

// ── Syntax Highlight (simple token coloring) ─────────────────
function highlight(code: string): React.ReactNode[] {
  const keywords = /\b(def|return|if|elif|else|for|while|in|not|and|or|import|from|as|class|try|except|finally|raise|with|pass|break|continue|lambda|True|False|None|global|nonlocal|yield|del|assert|is)\b/g;
  const strings = /("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*')/g;
  const comments = /(#.*)/g;
  const numbers = /\b(\d+\.?\d*)\b/g;
  const builtins = /\b(print|input|len|range|int|float|str|bool|list|dict|set|tuple|type|sum|min|max|sorted|enumerate|zip|map|filter|open|abs|round|isinstance|hasattr|getattr)\b/g;

  const lines = code.split("\n");
  return lines.map((line, li) => {
    const parts: React.ReactNode[] = [];
    let remaining = line;
    let key = 0;

    // Comment — whole line
    const commentMatch = remaining.match(/^(\s*)(#.*)$/);
    if (commentMatch) {
      parts.push(<span key={key++} className="ch-code-comment">{remaining}</span>);
      return <span key={li}>{parts}<br /></span>;
    }

    // Simple tokenizer: split by spaces and punctuation, color tokens
    // We'll do a regex-replace approach
    let result = remaining;
    // We'll use a different approach: just render with spans via dangerouslySetInnerHTML equivalent
    // For simplicity, do line-by-line coloring with regex
    const colored = remaining
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*')/g, '<span class="ch-str">$1</span>')
      .replace(/\b(def|return|if|elif|else|for|while|in|not|and|or|import|from|as|class|try|except|finally|raise|with|pass|break|continue|lambda|True|False|None|global|nonlocal|yield|del|assert|is)\b/g, '<span class="ch-kw">$1</span>')
      .replace(/\b(print|input|len|range|int|float|str|bool|list|dict|set|tuple|type|sum|min|max|sorted|enumerate|zip|map|filter|open|abs|round|isinstance)\b/g, '<span class="ch-builtin">$1</span>')
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="ch-num">$1</span>');

    return (
      <span key={li}>
        <span dangerouslySetInnerHTML={{ __html: colored }} />
        {li < lines.length - 1 && "\n"}
      </span>
    );
  });
}

// ── Code Block ───────────────────────────────────────────────
function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="ch-code-block">
      <div className="ch-code-header">
        <div className="ch-code-dots">
          <span className="ch-dot ch-dot-r" />
          <span className="ch-dot ch-dot-y" />
          <span className="ch-dot ch-dot-g" />
        </div>
        <span className="ch-code-label">{label || "Python"}</span>
        <button onClick={copy} className="ch-copy-btn">
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <pre className="ch-code-pre">
        <code>{highlight(code)}</code>
      </pre>
    </div>
  );
}

// ── Example Block ────────────────────────────────────────────
function ExampleBlock({ code, output, label }: { code: string; output?: string; label?: string }) {
  const [show, setShow] = useState(true);

  return (
    <div className="ch-example-block">
      <div className="ch-example-header" onClick={() => setShow(s => !s)}>
        <span className="ch-example-icon">▶</span>
        <span className="ch-example-label">{label || "Example"}</span>
        <span className="ch-example-toggle">{show ? "▲" : "▼"}</span>
      </div>
      {show && (
        <>
          <pre className="ch-example-code"><code>{highlight(code)}</code></pre>
          {output && (
            <div className="ch-output-block">
              <div className="ch-output-header">
                <span className="ch-output-icon">⬡</span>
                <span>Output</span>
              </div>
              <pre className="ch-output-pre">{output}</pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ── Info Cards (tip / warning / note) ───────────────────────
function InfoCard({ type, content }: { type: "tip" | "warning" | "note"; content: string }) {
  const config = {
    tip: { icon: "💡", label: "Tip", cls: "ch-tip" },
    warning: { icon: "⚠️", label: "Warning", cls: "ch-warning" },
    note: { icon: "📝", label: "Note", cls: "ch-note" },
  }[type];

  return (
    <div className={`ch-info-card ${config.cls}`}>
      <div className="ch-info-icon">{config.icon}</div>
      <div>
        <div className="ch-info-label">{config.label}</div>
        <p className="ch-info-text">{content}</p>
      </div>
    </div>
  );
}

// ── Table Block ──────────────────────────────────────────────
function TableBlock({ content, heading }: { content: string; heading?: string }) {
  const lines = content.trim().split("\n");
  if (lines.length < 2) return <pre className="ch-raw-table">{content}</pre>;

  const headers = lines[0].split("|").map(h => h.trim()).filter(Boolean);
  const rows = lines.slice(2).map(row =>
    row.split("|").map(c => c.trim()).filter(Boolean)
  ).filter(r => r.length > 0);

  return (
    <div className="ch-table-wrap">
      {heading && <h3 className="ch-table-heading">{heading}</h3>}
      <div className="ch-table-scroll">
        <table className="ch-table">
          <thead>
            <tr>
              {headers.map((h, i) => <th key={i}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Text Block ───────────────────────────────────────────────
function TextBlock({ heading, content }: { heading?: string; content: string }) {
  // Split content into bullet-like paragraphs if lines start with emoji or •
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let paraLines: string[] = [];

  const flushPara = () => {
    if (paraLines.length > 0) {
      elements.push(
        <p key={elements.length} className="ch-text-para">
          {paraLines.join(" ")}
        </p>
      );
      paraLines = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushPara();
      return;
    }
    // Detect bullet / numbered / emoji lines
    const isBullet = /^[•\-\*✅❌⚡🔑📥📤♻️🌐📊🤖🔧🎮🔒☁️📱]/.test(trimmed) ||
      /^\d+[\.\)]/.test(trimmed) ||
      /^[A-Z\u2460-\u2473][\.\)]/.test(trimmed) ||
      /^(Step|Method|Form|L|E|G|B)\s*\d*[\:\-]/.test(trimmed);

    if (isBullet) {
      flushPara();
      elements.push(
        <div key={elements.length} className="ch-bullet-line">
          <span className="ch-bullet-dot">›</span>
          <span>{trimmed}</span>
        </div>
      );
    } else {
      paraLines.push(trimmed);
    }
  });
  flushPara();

  return (
    <div className="ch-text-block">
      {heading && <h2 className="ch-section-heading">{heading}</h2>}
      <div className="ch-text-content">{elements}</div>
    </div>
  );
}

// ── Quiz ─────────────────────────────────────────────────────
function QuizSection({ quiz }: { quiz: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  const select = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const score = quiz.filter((q, i) => answers[i] === q.answer).length;
  const pct = Math.round((score / quiz.length) * 100);

  return (
    <div className="ch-quiz">
      <div className="ch-quiz-header">
        <span className="ch-quiz-icon">🧠</span>
        <div>
          <h3 className="ch-quiz-title">Chapter Quiz</h3>
          <p className="ch-quiz-sub">{quiz.length} questions · Test your understanding</p>
        </div>
      </div>

      {!submitted ? (
        <div className="ch-quiz-body">
          {/* Progress */}
          <div className="ch-quiz-progress-row">
            <span className="ch-quiz-prog-label">Question {current + 1} / {quiz.length}</span>
            <span className="ch-quiz-prog-label">Answered: {Object.keys(answers).length}</span>
          </div>
          <div className="ch-progress-bar">
            <div className="ch-progress-fill" style={{ width: `${((current + 1) / quiz.length) * 100}%` }} />
          </div>

          {/* Question */}
          <p className="ch-question">{current + 1}. {quiz[current].question}</p>

          {/* Options */}
          <div className="ch-options">
            {quiz[current].options.map((opt, oi) => (
              <button
                key={oi}
                onClick={() => select(current, oi)}
                className={`ch-option ${answers[current] === oi ? "ch-option-selected" : ""}`}
              >
                <span className="ch-option-letter">{["A", "B", "C", "D"][oi]}</span>
                <span>{opt}</span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="ch-quiz-nav">
            <button
              onClick={() => setCurrent(p => Math.max(0, p - 1))}
              disabled={current === 0}
              className="ch-btn ch-btn-outline"
            >← Prev</button>

            {current < quiz.length - 1 ? (
              <button onClick={() => setCurrent(p => p + 1)} className="ch-btn ch-btn-primary">
                Next →
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(answers).length < quiz.length}
                className="ch-btn ch-btn-success"
              >
                Submit ✓
              </button>
            )}
          </div>

          {/* Dot nav */}
          <div className="ch-quiz-dots">
            {quiz.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`ch-quiz-dot ${i === current ? "ch-dot-active" : answers[i] !== undefined ? "ch-dot-done" : ""}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="ch-quiz-result">
          <div className={`ch-result-banner ${pct >= 80 ? "ch-res-great" : pct >= 50 ? "ch-res-ok" : "ch-res-bad"}`}>
            <div className="ch-result-emoji">{pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📚"}</div>
            <div className="ch-result-score">{score} / {quiz.length}</div>
            <div className="ch-result-pct">{pct}%</div>
            <div className="ch-result-msg">
              {pct >= 80 ? "Excellent! Chapter mastered!" : pct >= 50 ? "Good job! Review wrong answers." : "Keep going! Re-read the chapter."}
            </div>
          </div>

          <div className="ch-review-list">
            {quiz.map((q, qi) => (
              <div key={qi} className="ch-review-item">
                <div className="ch-review-q">
                  <span className={`ch-review-icon ${answers[qi] === q.answer ? "ch-ri-correct" : "ch-ri-wrong"}`}>
                    {answers[qi] === q.answer ? "✓" : "✗"}
                  </span>
                  <span>{qi + 1}. {q.question}</span>
                </div>
                <div className="ch-review-opts">
                  {q.options.map((opt, oi) => (
                    <div
                      key={oi}
                      className={`ch-review-opt ${oi === q.answer ? "ch-ro-correct" : oi === answers[qi] && oi !== q.answer ? "ch-ro-wrong" : "ch-ro-neutral"}`}
                    >
                      {["A", "B", "C", "D"][oi]}. {opt}
                      {oi === q.answer && " ✓"}
                      {oi === answers[qi] && oi !== q.answer && " ✗"}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => { setAnswers({}); setSubmitted(false); setCurrent(0); }}
            className="ch-btn ch-btn-primary ch-full-btn"
          >
            Retake Quiz ↺
          </button>
        </div>
      )}
    </div>
  );
}

// ── Chapter Header Banner ─────────────────────────────────────
const chapterImages: Record<string, { emoji: string; bg: string; desc: string }> = {
  "introduction-to-python": { emoji: "🐍", bg: "#e8f5e9", desc: "Learn what Python is and why it's the world's most popular language" },
  "installation-setup": { emoji: "⚙️", bg: "#e3f2fd", desc: "Set up your development environment step by step" },
  "variables-data-types": { emoji: "📦", bg: "#fff3e0", desc: "Understand how Python stores and manages data" },
  "input-output": { emoji: "💬", bg: "#f3e5f5", desc: "Make your programs interactive with input and output" },
  "operators": { emoji: "➕", bg: "#e8eaf6", desc: "Perform calculations, comparisons, and logical operations" },
  "conditional-statements": { emoji: "🔀", bg: "#fce4ec", desc: "Make your programs take decisions using if-else" },
  "loops": { emoji: "🔁", bg: "#e0f7fa", desc: "Automate repetition with for and while loops" },
  "basic-programs": { emoji: "💻", bg: "#f1f8e9", desc: "Build real programs combining everything you've learned" },
  "strings": { emoji: "📝", bg: "#fff8e1", desc: "Master text manipulation with Python strings" },
  "lists": { emoji: "📋", bg: "#e8f5e9", desc: "Store and manage ordered collections of data" },
  "tuples": { emoji: "📌", bg: "#fce4ec", desc: "Use immutable sequences for fixed data" },
  "sets": { emoji: "🔵", bg: "#e3f2fd", desc: "Work with unique collections and set operations" },
  "dictionaries": { emoji: "📖", bg: "#fff3e0", desc: "Store data as key-value pairs like a real dictionary" },
  "functions": { emoji: "⚡", bg: "#f3e5f5", desc: "Write reusable blocks of code with functions" },
  "recursion": { emoji: "🌀", bg: "#e8eaf6", desc: "Solve complex problems by breaking them into smaller parts" },
  "file-handling": { emoji: "📁", bg: "#e0f7fa", desc: "Read and write files to save data permanently" },
  "exception-handling": { emoji: "🛡️", bg: "#fbe9e7", desc: "Handle errors gracefully and write robust programs" },
  "modules-packages": { emoji: "📦", bg: "#f1f8e9", desc: "Use Python's vast library of ready-made tools" },
};

// ── Main Client Component ────────────────────────────────────
export default function ChapterClient({
  chapter,
  prevChapter,
  nextChapter,
}: {
  chapter: Chapter;
  prevChapter: Chapter | null;
  nextChapter: Chapter | null;
}) {
  const meta = chapterImages[chapter.id] ?? { emoji: "🐍", bg: "#f0f4ff", desc: "" };
  const levelColor = chapter.level === 1 ? "#3b82f6" : "#f59e0b";
  const levelBg = chapter.level === 1 ? "#eff6ff" : "#fffbeb";

  return (
    <>
      {/* ── Inline Styles ── */}
      <style>{`
        /* ── Reset / Base ── */
        .ch-page { min-height: 100vh; background: #f7f8fa; font-family: 'Segoe UI', system-ui, sans-serif; color: #1a1a2e; }
        .ch-container { max-width: 860px; margin: 0 auto; padding: 24px 16px 48px; }

        /* ── Back link ── */
        .ch-back { display:inline-flex; align-items:center; gap:6px; font-size:13px; color:#6b7280; text-decoration:none; margin-bottom:20px; padding:6px 12px; border-radius:20px; background:#fff; border:1px solid #e5e7eb; transition:all .2s; }
        .ch-back:hover { color:#3b82f6; border-color:#3b82f6; background:#eff6ff; }

        /* ── Hero Banner ── */
        .ch-hero { border-radius:16px; padding:32px 28px; margin-bottom:8px; border:1px solid #e5e7eb; display:flex; gap:24px; align-items:flex-start; }
        .ch-hero-emoji { font-size:56px; line-height:1; flex-shrink:0; }
        .ch-hero-info {}
        .ch-hero-badges { display:flex; gap:8px; margin-bottom:10px; flex-wrap:wrap; }
        .ch-badge { font-size:11px; font-weight:600; padding:3px 10px; border-radius:20px; letter-spacing:.4px; text-transform:uppercase; }
        .ch-badge-no { font-size:11px; color:#6b7280; padding:3px 8px; background:#f3f4f6; border-radius:20px; }
        .ch-hero-title { font-size:26px; font-weight:700; color:#111827; margin:0 0 6px; line-height:1.3; }
        .ch-hero-desc { font-size:14px; color:#6b7280; margin:0; line-height:1.6; }

        /* ── What You'll Learn card ── */
        .ch-learn-card { background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:18px 20px; margin-bottom:8px; }
        .ch-learn-title { font-size:13px; font-weight:600; color:#374151; margin:0 0 10px; text-transform:uppercase; letter-spacing:.5px; }
        .ch-learn-items { display:flex; flex-wrap:wrap; gap:8px; }
        .ch-learn-tag { font-size:12px; background:#f0fdf4; color:#15803d; border:1px solid #bbf7d0; padding:3px 10px; border-radius:20px; }

        /* ── Content Card ── */
        .ch-content-card { background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:28px 24px; margin-bottom:8px; }

        /* ── Text blocks ── */
        .ch-text-block { margin-bottom:20px; }
        .ch-section-heading { font-size:18px; font-weight:700; color:#111827; margin:0 0 10px; padding-left:10px; border-left:3px solid #3b82f6; }
        .ch-text-content {}
        .ch-text-para { font-size:14.5px; color:#374151; line-height:1.8; margin:0 0 8px; }
        .ch-bullet-line { display:flex; gap:8px; align-items:baseline; font-size:14px; color:#374151; margin:4px 0; line-height:1.7; }
        .ch-bullet-dot { color:#3b82f6; font-size:16px; flex-shrink:0; margin-top:2px; }

        /* ── Code block ── */
        .ch-code-block { border-radius:10px; overflow:hidden; border:1px solid #e5e7eb; margin:16px 0; box-shadow:0 1px 4px rgba(0,0,0,.06); }
        .ch-code-header { background:#1e1e2e; display:flex; align-items:center; padding:8px 14px; gap:8px; }
        .ch-code-dots { display:flex; gap:5px; }
        .ch-dot { width:11px; height:11px; border-radius:50%; display:inline-block; }
        .ch-dot-r { background:#ff5f57; }
        .ch-dot-y { background:#febc2e; }
        .ch-dot-g { background:#28c840; }
        .ch-code-label { font-size:11px; color:#888; flex:1; text-align:center; font-family:monospace; }
        .ch-copy-btn { font-size:11px; color:#888; background:none; border:none; cursor:pointer; padding:2px 6px; border-radius:4px; transition:.15s; }
        .ch-copy-btn:hover { color:#fff; background:#333; }
        .ch-code-pre { background:#1a1b2e; margin:0; padding:16px 18px; overflow-x:auto; font-size:13.5px; line-height:1.7; font-family:'Fira Code','Cascadia Code','Consolas',monospace; }
        .ch-code-pre code { display:block; }
        /* syntax colors */
        .ch-kw { color:#c792ea; }
        .ch-str { color:#c3e88d; }
        .ch-num { color:#f78c6c; }
        .ch-builtin { color:#82aaff; }
        .ch-code-comment { color:#546e7a; font-style:italic; }

        /* ── Example block ── */
        .ch-example-block { border:1px solid #dbeafe; border-radius:10px; overflow:hidden; margin:16px 0; }
        .ch-example-header { background:#2563eb; padding:9px 14px; display:flex; align-items:center; gap:8px; cursor:pointer; user-select:none; }
        .ch-example-icon { font-size:11px; color:#bfdbfe; }
        .ch-example-label { font-size:13px; font-weight:600; color:#fff; flex:1; }
        .ch-example-toggle { font-size:11px; color:#bfdbfe; }
        .ch-example-code { background:#1a1b2e; margin:0; padding:14px 18px; font-size:13px; line-height:1.7; font-family:'Fira Code','Cascadia Code','Consolas',monospace; overflow-x:auto; }
        .ch-output-block {}
        .ch-output-header { background:#374151; padding:6px 14px; display:flex; align-items:center; gap:6px; }
        .ch-output-icon { color:#6ee7b7; font-size:12px; }
        .ch-output-header span { font-size:11px; color:#d1d5db; font-weight:600; text-transform:uppercase; letter-spacing:.5px; }
        .ch-output-pre { background:#111827; color:#6ee7b7; margin:0; padding:12px 18px; font-size:13px; line-height:1.6; font-family:'Fira Code','Cascadia Code','Consolas',monospace; overflow-x:auto; }

        /* ── Info cards ── */
        .ch-info-card { display:flex; gap:12px; padding:14px 16px; border-radius:10px; margin:16px 0; border-left:4px solid; }
        .ch-tip { background:#f0fdf4; border-color:#22c55e; }
        .ch-warning { background:#fff7ed; border-color:#f97316; }
        .ch-note { background:#eff6ff; border-color:#3b82f6; }
        .ch-info-icon { font-size:18px; flex-shrink:0; margin-top:1px; }
        .ch-info-label { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.5px; margin-bottom:3px; }
        .ch-tip .ch-info-label { color:#15803d; }
        .ch-warning .ch-info-label { color:#c2410c; }
        .ch-note .ch-info-label { color:#1d4ed8; }
        .ch-info-text { font-size:13.5px; line-height:1.7; margin:0; }
        .ch-tip .ch-info-text { color:#166534; }
        .ch-warning .ch-info-text { color:#9a3412; }
        .ch-note .ch-info-text { color:#1e40af; }

        /* ── Table ── */
        .ch-table-wrap { margin:16px 0; }
        .ch-table-heading { font-size:14px; font-weight:600; color:#374151; margin:0 0 8px; }
        .ch-table-scroll { overflow-x:auto; border-radius:8px; border:1px solid #e5e7eb; }
        .ch-table { width:100%; border-collapse:collapse; font-size:13px; }
        .ch-table thead tr { background:#f8fafc; }
        .ch-table th { padding:10px 14px; text-align:left; font-weight:600; color:#374151; border-bottom:2px solid #e5e7eb; white-space:nowrap; }
        .ch-table td { padding:9px 14px; color:#4b5563; border-bottom:1px solid #f3f4f6; font-family:'Fira Code','Consolas',monospace; font-size:12.5px; }
        .ch-table tr:last-child td { border-bottom:none; }
        .ch-table tr:nth-child(even) { background:#fafafa; }
        .ch-table tr:hover td { background:#f0f7ff; }
        .ch-raw-table { background:#f8fafc; border:1px solid #e5e7eb; border-radius:8px; padding:12px; font-size:12px; overflow-x:auto; font-family:monospace; }

        /* ── Quiz ── */
        .ch-quiz { background:#fff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; margin-top:8px; }
        .ch-quiz-header { background:linear-gradient(135deg,#1d4ed8,#3b82f6); padding:20px 24px; display:flex; align-items:center; gap:14px; }
        .ch-quiz-icon { font-size:28px; }
        .ch-quiz-title { font-size:17px; font-weight:700; color:#fff; margin:0 0 2px; }
        .ch-quiz-sub { font-size:13px; color:#bfdbfe; margin:0; }
        .ch-quiz-body { padding:24px; }
        .ch-quiz-progress-row { display:flex; justify-content:space-between; margin-bottom:6px; }
        .ch-quiz-prog-label { font-size:12px; color:#6b7280; }
        .ch-progress-bar { height:4px; background:#f3f4f6; border-radius:4px; margin-bottom:20px; }
        .ch-progress-fill { height:4px; background:#3b82f6; border-radius:4px; transition:width .3s; }
        .ch-question { font-size:15px; font-weight:600; color:#111827; margin:0 0 16px; line-height:1.6; }
        .ch-options { display:flex; flex-direction:column; gap:8px; margin-bottom:20px; }
        .ch-option { display:flex; align-items:center; gap:10px; padding:12px 14px; border:1.5px solid #e5e7eb; border-radius:8px; background:#fafafa; cursor:pointer; text-align:left; font-size:13.5px; color:#374151; transition:all .15s; }
        .ch-option:hover { border-color:#93c5fd; background:#eff6ff; }
        .ch-option-selected { border-color:#3b82f6 !important; background:#eff6ff !important; color:#1d4ed8 !important; font-weight:500; }
        .ch-option-letter { width:24px; height:24px; border-radius:50%; background:#e5e7eb; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; flex-shrink:0; }
        .ch-option-selected .ch-option-letter { background:#3b82f6; color:#fff; }
        .ch-quiz-nav { display:flex; justify-content:space-between; margin-bottom:16px; }
        .ch-btn { padding:8px 18px; border-radius:8px; font-size:13px; font-weight:600; cursor:pointer; border:none; transition:all .15s; }
        .ch-btn-primary { background:#3b82f6; color:#fff; }
        .ch-btn-primary:hover { background:#2563eb; }
        .ch-btn-outline { background:#fff; color:#374151; border:1.5px solid #e5e7eb; }
        .ch-btn-outline:hover { border-color:#3b82f6; color:#3b82f6; }
        .ch-btn-outline:disabled { opacity:.4; cursor:not-allowed; }
        .ch-btn-success { background:#16a34a; color:#fff; }
        .ch-btn-success:hover { background:#15803d; }
        .ch-btn-success:disabled { opacity:.4; cursor:not-allowed; }
        .ch-full-btn { width:100%; padding:12px; margin-top:16px; }
        .ch-quiz-dots { display:flex; flex-wrap:wrap; gap:6px; padding-top:12px; border-top:1px solid #f3f4f6; }
        .ch-quiz-dot { width:28px; height:28px; border-radius:50%; border:none; background:#f3f4f6; color:#6b7280; font-size:11px; font-weight:600; cursor:pointer; transition:.15s; }
        .ch-dot-active { background:#3b82f6 !important; color:#fff !important; }
        .ch-dot-done { background:#d1fae5 !important; color:#065f46 !important; }

        /* ── Quiz Result ── */
        .ch-quiz-result { padding:24px; }
        .ch-result-banner { border-radius:12px; padding:24px; text-align:center; margin-bottom:20px; border:1px solid; }
        .ch-res-great { background:#f0fdf4; border-color:#86efac; }
        .ch-res-ok { background:#fffbeb; border-color:#fcd34d; }
        .ch-res-bad { background:#fef2f2; border-color:#fca5a5; }
        .ch-result-emoji { font-size:36px; margin-bottom:8px; }
        .ch-result-score { font-size:28px; font-weight:800; color:#111827; }
        .ch-result-pct { font-size:14px; color:#6b7280; margin:2px 0; }
        .ch-result-msg { font-size:13px; color:#374151; font-weight:500; }
        .ch-review-list { display:flex; flex-direction:column; gap:12px; margin-bottom:4px; }
        .ch-review-item { border:1px solid #f3f4f6; border-radius:8px; padding:12px; }
        .ch-review-q { display:flex; align-items:flex-start; gap:8px; font-size:13px; font-weight:600; color:#111827; margin-bottom:8px; }
        .ch-review-icon { width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; flex-shrink:0; margin-top:1px; }
        .ch-ri-correct { background:#d1fae5; color:#065f46; }
        .ch-ri-wrong { background:#fee2e2; color:#991b1b; }
        .ch-review-opts { display:flex; flex-direction:column; gap:3px; }
        .ch-review-opt { font-size:12px; padding:4px 8px; border-radius:4px; }
        .ch-ro-correct { background:#d1fae5; color:#065f46; font-weight:600; }
        .ch-ro-wrong { background:#fee2e2; color:#991b1b; }
        .ch-ro-neutral { color:#9ca3af; }

        /* ── Prev/Next Nav ── */
        .ch-nav { display:flex; gap:12px; margin-top:8px; }
        .ch-nav-link { flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:12px; padding:14px 16px; text-decoration:none; transition:all .2s; }
        .ch-nav-link:hover { border-color:#3b82f6; background:#eff6ff; }
        .ch-nav-label { font-size:11px; color:#9ca3af; display:block; margin-bottom:3px; }
        .ch-nav-title { font-size:14px; font-weight:600; color:#374151; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .ch-nav-link:hover .ch-nav-title { color:#3b82f6; }
        .ch-nav-right { text-align:right; }
        .ch-nav-done { flex:1; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:12px; padding:14px 16px; text-align:right; }

        @media(max-width:600px){
          .ch-hero { flex-direction:column; gap:12px; padding:20px 16px; }
          .ch-hero-emoji { font-size:40px; }
          .ch-hero-title { font-size:21px; }
          .ch-content-card { padding:20px 14px; }
        }
      `}</style>

      <div className="ch-page">
        <div className="ch-container">

          {/* Back */}
          <Link href="/courses/python" className="ch-back">
            ← Back to Python Course
          </Link>

          {/* Hero */}
          <div className="ch-hero" style={{ background: meta.bg }}>
            <div className="ch-hero-emoji">{meta.emoji}</div>
            <div className="ch-hero-info">
              <div className="ch-hero-badges">
                <span
                  className="ch-badge"
                  style={{ background: levelBg, color: levelColor, border: `1px solid ${levelColor}30` }}
                >
                  {chapter.levelIcon} Level {chapter.level}: {chapter.levelName}
                </span>
                <span className="ch-badge-no">Chapter {chapter.chapterNo}</span>
              </div>
              <h1 className="ch-hero-title">{chapter.title}</h1>
              {meta.desc && <p className="ch-hero-desc">{meta.desc}</p>}
            </div>
          </div>

          {/* What you'll learn */}
          <div className="ch-learn-card">
            <div className="ch-learn-title">📚 Topics in this chapter</div>
            <div className="ch-learn-items">
              {chapter.content
                .filter(b => b.type === "text" && "heading" in b && b.heading)
                .slice(0, 6)
                .map((b, i) => (
                  <span key={i} className="ch-learn-tag">
                    {"heading" in b ? b.heading : ""}
                  </span>
                ))}
            </div>
          </div>

          {/* Content */}
          <div className="ch-content-card">
            {chapter.content.map((block, i) => {
              if (block.type === "text") return (
                <TextBlock
                  key={i}
                  heading={"heading" in block ? block.heading : undefined}
                  content={block.content}
                />
              );
              if (block.type === "syntax") return (
                <CodeBlock
                  key={i}
                  code={block.code}
                  label={"label" in block ? block.label : "Syntax"}
                />
              );
              if (block.type === "example") return (
                <ExampleBlock
                  key={i}
                  code={block.code}
                  output={"output" in block ? block.output : undefined}
                  label={"label" in block ? block.label : undefined}
                />
              );
              if (block.type === "tip") return <InfoCard key={i} type="tip" content={block.content} />;
              if (block.type === "warning") return <InfoCard key={i} type="warning" content={block.content} />;
              if (block.type === "table") return (
                <TableBlock
                  key={i}
                  content={block.content}
                  heading={"heading" in block ? block.heading : undefined}
                />
              );
              return null;
            })}
          </div>

          {/* Quiz */}
          <QuizSection quiz={chapter.quiz} />

          {/* Prev / Next */}
          <div className="ch-nav">
            {prevChapter ? (
              <Link href={`/courses/python/${prevChapter.id}`} className="ch-nav-link">
                <span className="ch-nav-label">← Previous</span>
                <span className="ch-nav-title">{prevChapter.title}</span>
              </Link>
            ) : <div style={{ flex: 1 }} />}

            {nextChapter ? (
              <Link href={`/courses/python/${nextChapter.id}`} className="ch-nav-link ch-nav-right">
                <span className="ch-nav-label">Next →</span>
                <span className="ch-nav-title">{nextChapter.title}</span>
              </Link>
            ) : (
              <div className="ch-nav-done">
                <span className="ch-nav-label" style={{ color: "#16a34a" }}>🎉 You finished!</span>
                <span className="ch-nav-title" style={{ color: "#15803d" }}>Course Complete!</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}