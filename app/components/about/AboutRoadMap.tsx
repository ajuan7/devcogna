import Container from "@/app/components/layout/Container";
import { CheckCircle2 } from "lucide-react";

function Card({
  version,
  title,
  points,
}: {
  version: string;
  title: string;
  points: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-aura-300">{version}</div>
        <div className="text-xs text-white/45">Planned</div>
      </div>

      <div className="mt-3 text-lg font-semibold tracking-tight">{title}</div>

      <ul className="mt-4 space-y-2 text-sm text-white/60">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-aura-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutRoadmap() {
  return (
    <section className="border-t border-white/5 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-aura-400/25 bg-ink-900/70 px-4 py-2 text-xs font-medium tracking-wide text-aura-300">
            <span className="uppercase">Roadmap</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Iterative delivery, measured upgrades
          </h2>
          <p className="mt-4 text-white/60">
            Core loop first, then extend capabilities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card
            version="v0.1"
            title="Drills + attempt logging"
            points={[
              "Timed drill prompts + pattern selection",
              "Response time instrumentation (ms)",
              "Baseline analytics (accuracy + speed)",
            ]}
          />
          <Card
            version="v0.2"
            title="Flashcards + spaced repetition"
            points={[
              "Mistake-derived flashcards",
              "Review scheduling (next_review_at)",
              "Weakness scoring by pattern",
            ]}
          />
          <Card
            version="v0.3"
            title="AI-assisted explanations"
            points={[
              "Structured explanation generator",
              "Trigger/trap enrichment",
              "Adaptive difficulty tuning",
            ]}
          />
          <Card
            version="v1.0"
            title="Billing + advanced analytics"
            points={[
              "Stripe subscriptions",
              "Cohort analytics + retention",
              "Sprint mode playbooks",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}