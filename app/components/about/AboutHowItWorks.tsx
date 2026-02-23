import Container from "@/app/components/layout/Container";
import { Timer, BarChart3, Layers, Sparkles, CheckCircle2 } from "lucide-react";

function Pill({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 rounded-3xl border border-white/5 bg-ink-900/50 p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-950 text-aura-400">
        {icon}
      </div>
      <div>
        <div className="font-semibold tracking-tight">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-white/60">{desc}</div>
      </div>
    </div>
  );
}

function LoopStep({ step, name, detail }: { step: string; name: string; detail: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-950/70 p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-aura-400">
        {step}
      </div>
      <div>
        <div className="font-semibold tracking-tight">{name}</div>
        <div className="mt-1 text-sm text-white/60">{detail}</div>
      </div>
    </div>
  );
}

export default function AboutHowItWorks() {
  return (
    <section className="border-t border-white/5 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-aura-400/25 bg-ink-900/70 px-4 py-2 text-xs font-medium tracking-wide text-aura-300">
            <span className="uppercase">Method</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A closed-loop training system
          </h2>
          <p className="mt-4 text-white/60">Drill → Diagnose → Reinforce → Measure.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Pill
              icon={<Timer className="h-5 w-5" />}
              title="Timed drills"
              desc="Short prompts with constrained decision time to simulate interview conditions."
            />
            <Pill
              icon={<BarChart3 className="h-5 w-5" />}
              title="Performance logging"
              desc="Every attempt records correctness and response time to establish a baseline."
            />
            <Pill
              icon={<Layers className="h-5 w-5" />}
              title="Adaptive reinforcement"
              desc="Weak patterns are prioritized using accuracy + recency weighting."
            />
            <Pill
              icon={<Sparkles className="h-5 w-5" />}
              title="Mistake-to-flashcard conversion"
              desc="Incorrect attempts generate reinforcement cards (triggers + traps)."
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-ink-900/60 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-aura-500/10 blur-3xl" />

            <div className="text-sm font-semibold text-aura-300">Training Loop (MVP)</div>

            <div className="mt-6 space-y-3">
              <LoopStep step="1" name="Drill" detail="Select the pattern under time constraint." />
              <LoopStep step="2" name="Diagnose" detail="See correct pattern + triggers + trap." />
              <LoopStep step="3" name="Reinforce" detail="Flashcard created from your mistake." />
              <LoopStep step="4" name="Measure" detail="Dashboard shows time + accuracy deltas." />
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
              <CheckCircle2 className="h-4 w-4 text-aura-400" />
              Output focus: reduced recognition latency + improved pattern accuracy.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}