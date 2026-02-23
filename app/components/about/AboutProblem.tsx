import Container from "@/app/components/layout/Container";
import { CheckCircle2 } from "lucide-react";

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
      <div className="text-sm font-semibold text-aura-300">{title}</div>
      <div className="mt-3 text-white/70 leading-relaxed">{children}</div>
    </div>
  );
}

export default function AboutProblem() {
  return (
    <section className="border-t border-white/5 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-aura-400/25 bg-ink-900/70 px-4 py-2 text-xs font-medium tracking-wide text-aura-300">
            <span className="uppercase">Problem</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Most platforms train solutions. Interviews test recognition.
          </h2>
          <p className="mt-4 text-white/60">
            DevCogna targets the decision point: mapping a prompt to the correct pattern fast.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card title="Observation">
            Candidates lose time identifying the correct approach (pattern), not writing code.
            Under pressure, hesitation compounds into incomplete solutions.
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/60">
              {["Pattern mapping latency", "Time pressure", "Reinforcement gaps"].map((x) => (
                <span
                  key={x}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-950 px-4 py-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-aura-400" />
                  {x}
                </span>
              ))}
            </div>
          </Card>

          <Card title="DevCogna Approach">
            Train recognition like a skill: short drills, strict timing, and instrumented feedback.
            Weak patterns are prioritized with adaptive reinforcement.
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-ink-950 p-5">
                <div className="text-sm font-semibold">Data-first</div>
                <div className="mt-1 text-sm text-white/60">
                  Track response time + confusion pairs.
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-ink-950 p-5">
                <div className="text-sm font-semibold">Targeted</div>
                <div className="mt-1 text-sm text-white/60">
                  Weak patterns scheduled deliberately.
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}