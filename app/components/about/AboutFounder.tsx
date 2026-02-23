import Container from "@/app/components/layout/Container";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/5 bg-ink-900/60 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
      {children}
    </div>
  );
}

export default function AboutFounder() {
  return (
    <section className="border-t border-white/5 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-aura-400/25 bg-ink-900/70 px-4 py-2 text-xs font-medium tracking-wide text-aura-300">
            <span className="uppercase">Founder</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Built by an engineer, designed like a system
          </h2>
          <p className="mt-4 text-white/60">
            Founder visibility without turning the product into a personal brand page.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold text-aura-300">Angelo Juanico</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">Founder</div>

            <p className="mt-4 text-white/70 leading-relaxed">
              DevCogna is founded by Angelo Juanico, a software engineer focused on building
              measurable training systems. The platform is structured around instrumentation,
              cognitive constraint, and reinforcement loops to reduce recognition latency under
              interview conditions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/devcogna"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-950 px-4 py-2 text-sm text-white/70 hover:bg-ink-900"
              >
                Instagram <ArrowRight className="h-4 w-4 text-aura-400" />
              </a>

            
              <a
                href="https://www.linkedin.com/in/angelojuanico"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-950 px-4 py-2 text-sm text-white/70 hover:bg-ink-900"
              >
                LinkedIn <ArrowRight className="h-4 w-4 text-aura-400" />
              </a>
            </div>
          </Card>

          <Card>
            <div className="text-sm font-semibold text-aura-300">Principles</div>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {[
                "Instrument first, optimize second.",
                "Short drills > long grinding.",
                "Reinforce weak patterns deliberately.",
                "Reduce cognitive load in UI.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-aura-400" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <div className="text-sm font-semibold text-aura-300">What DevCogna optimizes</div>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {[
                "Decision speed (response time)",
                "Accuracy by pattern category",
                "Confusion pairs (wrong vs correct)",
                "Retention over time (deltas)",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-aura-400" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}