import { CheckCircle2, XCircle } from "lucide-react";
import { formatMs } from "@/app/lib/format";
import type { RecentAttempt } from "@/app/lib/queries/dashboard";

export type { RecentAttempt };

function AttemptRow({ attempt }: { attempt: RecentAttempt }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-ink-950/60 p-4">
      <div className="shrink-0 mt-0.5">
        {attempt.isCorrect
          ? <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          : <XCircle className="h-4 w-4 text-rose-400" />}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-white/70 truncate">{attempt.question.prompt}</p>
        <div className="mt-1 flex items-center gap-2 text-xs text-white/35">
          <span>{attempt.correctPattern.name}</span>
          {!attempt.isCorrect && (
            <>
              <span>·</span>
              <span className="text-rose-400/70">picked {attempt.patternSelected.name}</span>
            </>
          )}
          <span>·</span>
          <span>{formatMs(attempt.responseTimeMs)}</span>
        </div>
      </div>
    </div>
  );
}

export default function RecentActivity({ attempts }: { attempts: RecentAttempt[] }) {
  return (
    <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-6">
      <h2 className="text-base font-semibold mb-6">Recent Activity</h2>
      <div className="space-y-3">
        {attempts.map((attempt) => (
          <AttemptRow key={attempt.id} attempt={attempt} />
        ))}
      </div>
    </div>
  );
}
