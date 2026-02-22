import Container from "@/app/components/layout/Container";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const items = [
    "Short, high-frequency recognition drills",
    "Pattern-specific accuracy & speed tracking",
    "Flashcards generated from your mistakes",
  ];

  return (
    <section id="features" className="py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">Train the skill that interviews test</h2>
          <p className="mt-4 text-white/60">
            Most candidates fail due to slow pattern recognition — not coding ability. DevCogna fixes that.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t) => <FeatureCard key={t} text={t} />)}
        </div>
      </Container>
    </section>
  );
}