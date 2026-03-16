import { Zap } from "lucide-react";
import Container from "@/app/components/layout/Container";

export default function DashboardHeader() {
  return (
    <Container>
      <div className="pt-12 pb-10 max-w-5xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="mt-1 text-sm text-white/40">Your pattern recognition performance</p>
        </div>
        <a
          href="/practice"
          className="inline-flex items-center gap-2 rounded-2xl bg-aura-500 px-5 py-2.5 text-sm font-semibold text-ink-950 hover:bg-aura-400 transition self-start sm:self-auto"
        >
          <Zap className="h-4 w-4" />
          Start Drill
        </a>
      </div>
    </Container>
  );
}
