import Container from "@/app/components/layout/Container";
import Button from "@/app/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center py-10 text-center">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-aura-400/30 bg-ink-900/70 px-6 py-2.5 text-xs font-medium tracking-wide text-aura-300">
            <span className="h-2 w-2 rounded-full bg-aura-400 shadow-[0_0_12px_rgba(43,182,255,0.8)]" />
            <span className="uppercase">Pattern Recognition Training for Technical Interviews</span>
          </div>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Recognize the pattern.
            <br />
            <span className="text-white/70">Answer faster.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
            DevCogna trains cognitive decision speed for coding interviews through timed drills,
            adaptive reinforcement, and AI-generated feedback.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#waitlist">Get Early Access</Button>
            <Button href="#how" variant="secondary">Learn More</Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
            {["Timed drills", "Adaptive engine", "AI explanations"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-aura-400" /> {t}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}