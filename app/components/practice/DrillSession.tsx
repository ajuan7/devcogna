"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/app/components/layout/Container";
import { CheckCircle2, XCircle, Clock, ChevronRight, Zap } from "lucide-react";

type Pattern = { id: string; name: string; slug: string };
type Question = {
  id: string;
  prompt: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  tags: string[];
  pattern: Pattern;
};

type DrillState = "loading" | "idle" | "submitting" | "answered" | "error";

const DIFFICULTY_STYLE: Record<string, string> = {
  EASY: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
  MEDIUM: "text-amber-400 border-amber-400/20 bg-amber-400/10",
  HARD: "text-rose-400 border-rose-400/20 bg-rose-400/10",
};

function DrillHeader({ elapsed }: { elapsed: number }) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Pattern Drill</h1>
        <p className="mt-1 text-sm text-white/40">Identify the algorithm pattern</p>
      </div>
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-900 px-4 py-2 text-sm">
        <Clock className="h-4 w-4 text-white/40" />
        <span className="font-mono text-white/70 tabular-nums w-6 text-right">{elapsed}s</span>
      </div>
    </div>
  );
}

function QuestionCard({ prompt, difficulty, tags }: { prompt: string; difficulty: "EASY" | "MEDIUM" | "HARD"; tags: string[] }) {
  return (
    <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${DIFFICULTY_STYLE[difficulty]}`}>
          {difficulty}
        </span>
        {tags.map((tag) => (
          <span key={tag} className="inline-flex items-center rounded-full border border-white/10 bg-ink-950 px-3 py-1 text-xs text-white/50">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-lg leading-relaxed text-white/90">{prompt}</p>
    </div>
  );
}

function FeedbackBanner({ isCorrect, correctPatternName, elapsed }: { isCorrect: boolean; correctPatternName: string; elapsed: number }) {
  return (
    <div className={`mt-4 rounded-2xl border p-4 flex items-start gap-3 ${isCorrect ? "border-emerald-400/20 bg-emerald-400/10" : "border-rose-400/20 bg-rose-400/10"}`}>
      {isCorrect
        ? <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
        : <XCircle className="h-5 w-5 shrink-0 text-rose-400 mt-0.5" />}
      <div className="text-sm">
        {isCorrect ? (
          <p className="text-emerald-300">
            <span className="font-semibold">Correct!</span>{" "}
            <span className="text-white/50">({elapsed}s)</span>
          </p>
        ) : (
          <>
            <p className="text-rose-300">
              <span className="font-semibold">Not quite.</span>{" "}
              The correct pattern is{" "}
              <span className="font-semibold text-white">{correctPatternName}</span>
              <span className="text-white/40 ml-2">({elapsed}s)</span>
            </p>
            <p className="mt-1 text-white/40">A flashcard has been created to reinforce this pattern.</p>
          </>
        )}
      </div>
    </div>
  );
}

function PatternGrid({ patterns, selectedId, correctId, isCorrect, isInteractive, onSelect }: {
  patterns: Pattern[];
  selectedId: string | null;
  correctId: string | null;
  isCorrect: boolean | null;
  isInteractive: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {patterns.map((pattern) => {
        let cls = "border-white/10 bg-ink-900 hover:bg-ink-800 text-white/80 cursor-pointer";
        if (!isInteractive) {
          if (pattern.id === correctId) {
            cls = "border-emerald-400/40 bg-emerald-400/10 text-emerald-300 cursor-default";
          } else if (pattern.id === selectedId && !isCorrect) {
            cls = "border-rose-400/40 bg-rose-400/10 text-rose-300 cursor-default";
          } else {
            cls = "border-white/5 bg-ink-900/40 text-white/25 cursor-default";
          }
        }
        return (
          <button
            key={pattern.id}
            onClick={() => onSelect(pattern.id)}
            disabled={!isInteractive}
            className={`rounded-2xl border px-4 py-3.5 text-sm font-medium transition text-left active:scale-[0.98] ${cls}`}
          >
            {pattern.name}
          </button>
        );
      })}
    </div>
  );
}

function DrillActions({ onNext }: { onNext: () => void }) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <a href="/dashboard" className="text-sm text-white/40 hover:text-white/70 transition">
        View dashboard →
      </a>
      <button
        onClick={onNext}
        className="inline-flex items-center gap-2 rounded-2xl bg-aura-500 px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-aura-400 transition active:scale-[0.98]"
      >
        <Zap className="h-4 w-4" />
        Next Question
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function DrillSession() {
  const [state, setState] = useState<DrillState>("loading");
  const [question, setQuestion] = useState<Question | null>(null);
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctId, setCorrectId] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    startRef.current = Date.now();
    setElapsed(0);
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000));
    }, 1000);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  async function fetchQuestion() {
    setState("loading");
    setSelectedId(null);
    setIsCorrect(null);
    setCorrectId(null);
    try {
      const res = await fetch("/api/questions");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setQuestion(data.question);
      setPatterns(data.patterns);
      setState("idle");
      startTimer();
    } catch {
      setState("error");
    }
  }

  useEffect(() => {
    fetchQuestion();
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSelect(patternId: string) {
    if (state !== "idle" || !question) return;
    stopTimer();
    const responseTimeMs = Date.now() - startRef.current;
    setSelectedId(patternId);
    setState("submitting");
    try {
      const res = await fetch("/api/attempts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: question.id, patternSelectedId: patternId, responseTimeMs }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setIsCorrect(data.isCorrect);
      setCorrectId(data.correctPatternId);
      setState("answered");
    } catch {
      setState("error");
    }
  }

  const isInteractive = state === "idle";
  const isDone = state === "answered";
  const showQuestion = isInteractive || state === "submitting" || isDone;

  return (
    <div className="py-12 max-w-3xl mx-auto">
      <DrillHeader elapsed={elapsed} />

      {state === "loading" && (
        <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-12 text-center">
          <div className="h-5 w-5 mx-auto rounded-full border-2 border-aura-500 border-t-transparent animate-spin" />
          <p className="mt-4 text-sm text-white/40">Loading question...</p>
        </div>
      )}

      {state === "error" && (
        <div className="rounded-3xl border border-rose-400/20 bg-rose-400/10 p-8 text-center">
          <p className="text-rose-400 text-sm mb-4">Something went wrong loading your question.</p>
          <button
            onClick={fetchQuestion}
            className="rounded-2xl bg-ink-900 border border-white/10 px-5 py-2.5 text-sm text-white hover:bg-ink-800 transition"
          >
            Try again
          </button>
        </div>
      )}

      {showQuestion && question && (
        <>
          <QuestionCard prompt={question.prompt} difficulty={question.difficulty} tags={question.tags} />

          {isDone && isCorrect !== null && (
            <FeedbackBanner
              isCorrect={isCorrect}
              correctPatternName={patterns.find((p) => p.id === correctId)?.name ?? ""}
              elapsed={elapsed}
            />
          )}

          <PatternGrid
            patterns={patterns}
            selectedId={selectedId}
            correctId={correctId}
            isCorrect={isCorrect}
            isInteractive={isInteractive}
            onSelect={handleSelect}
          />

          {isDone && <DrillActions onNext={fetchQuestion} />}
        </>
      )}
    </div>
  );
}
