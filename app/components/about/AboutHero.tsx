import Container from "@/app/components/layout/Container";
import { ArrowRight } from "lucide-react";
import  RevealText from "@/app/components/ui/RevealText";

export default function AboutHero() {
  return (
    <section className="py-20 sm:py-24 text-center">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-aura-400/25 bg-ink-900/70 px-4 py-2 text-xs font-medium tracking-wide text-aura-300">
            <span className="h-2 w-2 rounded-full bg-aura-400 shadow-[0_0_12px_rgba(43,182,255,0.55)]" />
            <span className="uppercase">About</span>
          </div>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            <RevealText duration={0.9}> Built to reduce interview hesitation.</RevealText>
            <br />
            <span className="text-white/65">
                <RevealText delay={0.6} duration={0.9}>By training pattern recognition speed.</RevealText>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            DevCogna is a pattern recognition training platform for technical interviews.
            It focuses on decision speed under constraint — measured, reinforced, and improved.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/#waitlist"
              className="inline-flex items-center gap-2 rounded-2xl bg-aura-500 px-8 py-3 text-sm font-semibold text-ink-950 hover:bg-aura-400 active:scale-[0.98]"
            >
              Join Waitlist <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/#features"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-900 px-8 py-3 text-sm font-semibold text-white hover:bg-ink-800 active:scale-[0.98]"
            >
              See Features <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/5 bg-ink-900/50 p-5">
              <div className="text-sm text-white/50">Training unit</div>
              <div className="mt-1 text-2xl font-semibold tracking-tight">Timed drills</div>
            </div>
            <div className="rounded-2xl border border-white/5 bg-ink-900/50 p-5">
              <div className="text-sm text-white/50">Primary metric</div>
              <div className="mt-1 text-2xl font-semibold tracking-tight">Response time</div>
            </div>
            <div className="rounded-2xl border border-white/5 bg-ink-900/50 p-5">
              <div className="text-sm text-white/50">Reinforcement</div>
              <div className="mt-1 text-2xl font-semibold tracking-tight">Adaptive repeats</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}