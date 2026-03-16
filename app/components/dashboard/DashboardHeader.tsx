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
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-aura-500 px-5 py-4 text-sm font-semibold text-ink-950 shadow-[0_0_24px_rgba(43,182,255,0.3)] hover:bg-aura-400 hover:shadow-[0_0_32px_rgba(43,182,255,0.45)] transition sm:w-auto sm:py-2.5"
        >
          <Zap className="h-4 w-4" />
          Start Drill
        </a>
      </div>
    </Container>
  );
}
