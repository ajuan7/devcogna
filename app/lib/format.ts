export function formatMs(ms: number | null): string {
  if (!ms) return "—";
  if (ms < 1000) return "<1s";
  return `${(ms / 1000).toFixed(1)}s`;
}
