import { Zap, ArrowRight } from "lucide-react";

export default function DashboardEmpty() {
  return (
    <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-12 text-center mb-10">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink-950">
        <Zap className="h-6 w-6 text-aura-400" />
      </div>
      <h2 className="text-lg font-semibold mb-2">No attempts yet</h2>
      <p className="text-sm text-white/40 mb-6 max-w-sm mx-auto">
        Start a drill session to begin tracking your pattern recognition performance.
      </p>
      <a
        href="/practice"
        className="inline-flex items-center gap-2 rounded-2xl bg-aura-500 px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-aura-400 transition"
      >
        Start your first drill
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
