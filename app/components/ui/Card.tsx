export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-surface rounded-2xl shadow-lg p-6 border border-border">
      {children}
    </div>
  );
}