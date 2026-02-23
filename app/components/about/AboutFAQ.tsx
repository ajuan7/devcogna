import Container from "@/app/components/layout/Container";

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-white/5 bg-ink-900/50 p-6">
      <summary className="cursor-pointer list-none font-semibold tracking-tight text-white">
        <div className="flex items-center justify-between gap-4">
          <span>{q}</span>
          <span className="text-aura-400 transition group-open:rotate-45">+</span>
        </div>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{a}</p>
    </details>
  );
}

export default function AboutFAQ() {
  return (
    <section className="border-t border-white/5 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-aura-400/25 bg-ink-900/70 px-4 py-2 text-xs font-medium tracking-wide text-aura-300">
            <span className="uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 text-white/60">Clear answers. No marketing fluff.</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          <FAQItem
            q="How is DevCogna different from LeetCode/NeetCode?"
            a="Those platforms emphasize solution repetition. DevCogna targets the pre-solution bottleneck: pattern recognition speed under constraint, then reinforces weak patterns using instrumentation and adaptive scheduling."
          />
          <FAQItem
            q="What does DevCogna measure?"
            a="Core metrics are response time (decision speed) and accuracy by pattern. Secondary metrics include confusion pairs (wrong vs correct pattern) and retention (performance deltas over time)."
          />
          <FAQItem
            q="Is this for beginners?"
            a="It’s designed for candidates who can code but want to reduce hesitation in approach selection. Beginners can still benefit, but the largest impact is for interview-ready learners."
          />
          <FAQItem
            q="When will it launch?"
            a="Early access is rolling. The waitlist is the primary channel for beta invitations and milestone updates."
          />
        </div>
      </Container>
    </section>
  );
}