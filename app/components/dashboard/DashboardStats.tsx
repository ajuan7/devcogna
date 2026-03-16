import { Target, CheckCircle2, Clock } from "lucide-react";
import { formatMs } from "@/app/lib/format";

type Props = {
  totalAttempts: number;
  accuracy: number;
  avgResponseMs: number | null;
  hasData: boolean;
};

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-ink-900/60 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-ink-950">
          {icon}
        </div>
        <span className="text-sm text-white/50">{label}</span>
      </div>
      <p className="text-3xl font-semibold tabular-nums">{value}</p>
    </div>
  );
}

export default function DashboardStats({ totalAttempts, accuracy, avgResponseMs, hasData }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-10">
      <StatCard
        icon={<Target className="h-4 w-4 text-aura-400" />}
        label="Total Attempts"
        value={String(totalAttempts)}
      />
      <StatCard
        icon={<CheckCircle2 className="h-4 w-4 text-emerald-400" />}
        label="Accuracy"
        value={hasData ? `${accuracy}%` : "—"}
      />
      <StatCard
        icon={<Clock className="h-4 w-4 text-aura-400" />}
        label="Avg Response"
        value={formatMs(avgResponseMs)}
      />
    </div>
  );
}
