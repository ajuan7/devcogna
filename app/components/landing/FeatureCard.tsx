export default function FeatureCard({ text }: { text: string }) {
  return (
    <div className="rounded-3xl border border-white/5 bg-ink-900 p-8 text-white/70">
      {text}
    </div>
  );
}