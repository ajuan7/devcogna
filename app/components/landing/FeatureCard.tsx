export default function FeatureCard({ text, muted = false }: { text: string; muted?: boolean }) {
  return (
    <div className={`rounded-3xl border p-8 ${muted ? "border-white/5 bg-ink-900/30 text-white/30" : "border-white/5 bg-ink-900 text-white/70"}`}>
      {text}
    </div>
  );
}
