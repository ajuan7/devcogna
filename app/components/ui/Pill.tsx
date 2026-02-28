export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-primary text-primary text-sm px-4 py-1 rounded-full">
      {children}
    </span>
  );
}