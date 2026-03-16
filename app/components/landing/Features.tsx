import Container from "@/app/components/layout/Container";
import FeatureCard from "./FeatureCard";

const live = [
  "Timed pattern recognition drills",
  "Accuracy & response time tracking",
  "Dashboard with pattern performance breakdown",
];

const coming = [
  "Flashcard review from your mistakes",
  "AI-generated pattern explanations",
  "Adaptive difficulty & spaced repetition",
];

export default function Features() {
  return (
    <section id="features" className="py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">Train the skill that interviews test</h2>
          <p className="mt-4 text-white/60">
            Most candidates fail due to slow pattern recognition — not coding ability. DevCogna fixes that.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-aura-400" />
              <span className="text-xs font-medium uppercase tracking-widest text-aura-300">Available now</span>
            </div>
            <div className="space-y-4">
              {live.map((t) => <FeatureCard key={t} text={t} />)}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/35">Coming in the full version</span>
            </div>
            <div className="space-y-4">
              {coming.map((t) => <FeatureCard key={t} text={t} muted />)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
