import Container from "@/app/components/layout/Container";
import Button from "@/app/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import  RevealText from "@/app/components/ui/RevealText";

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
            <RevealText duration={0.9}>
              Recognize the pattern.
            </RevealText>

            <br />

            <span className="text-white/70">
              <RevealText delay={0.3} duration={0.9}>
                Answer faster.
              </RevealText>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
            <RevealText delay={1.0} duration={0.9}>
                          DevCogna trains cognitive decision speed for coding interviews through timed drills,
              adaptive reinforcement, and AI-generated feedback.
            </RevealText>
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

          <div
            id="how"
            className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/5 bg-ink-900/60 p-6 text-left shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">How it works</div>
                <p className="mt-1 text-sm text-white/60">
                  A tight loop: drill → diagnose → reinforce.
                </p>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-aura-400/20 bg-ink-900 px-3 py-1 text-xs text-aura-300">
                <span className="h-1.5 w-1.5 rounded-full bg-aura-400" />
                2–5 min sessions
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-2xl border border-white/5 bg-ink-900 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-aura-400/20 bg-ink-950 text-aura-300">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <div className="text-sm font-semibold text-white">Drill</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Timed prompts train you to map questions to the right pattern fast.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl border border-white/5 bg-ink-900 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-aura-400/20 bg-ink-950 text-aura-300">
                    <span className="text-sm font-semibold">2</span>
                  </div>
                  <div className="text-sm font-semibold text-white">Diagnose</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Track accuracy + response time per pattern to find what’s slowing you down.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl border border-white/5 bg-ink-900 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-aura-400/20 bg-ink-950 text-aura-300">
                    <span className="text-sm font-semibold">3</span>
                  </div>
                  <div className="text-sm font-semibold text-white">Reinforce</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Adaptive repeats + AI explanations + flashcards lock the pattern into memory.
                </p>
              </div>
            </div>
          </div>
    
        </div>
      </Container>
    </section>
  );
}