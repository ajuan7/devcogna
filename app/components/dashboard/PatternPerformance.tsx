import { formatMs } from "@/app/lib/format";
import type { PatternRow } from "@/app/lib/queries/dashboard";

export type { PatternRow };

function AccuracyBar({ pct }: { pct: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 rounded-full bg-white/5">
        <div className="h-full rounded-full bg-aura-500" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs tabular-nums text-white/50 w-9 text-right">{pct}%</span>
    </div>
  );
}

export default function PatternPerformance({ rows }: { rows: PatternRow[] }) {
  return (
    <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-6">
      <h2 className="text-base font-semibold mb-6">Pattern Performance</h2>
      <div className="space-y-5">
        {rows.map((row) => (
          <div key={row.id}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-white/70">{row.name}</span>
              <div className="flex items-center gap-3 text-xs text-white/40">
                <span>{row.total} attempts</span>
                <span className="font-mono">{formatMs(row.avgMs)}</span>
              </div>
            </div>
            <AccuracyBar pct={row.accuracy} />
          </div>
        ))}
      </div>
    </div>
  );
}
