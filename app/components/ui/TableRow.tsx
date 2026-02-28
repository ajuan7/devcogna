export function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between py-3 border-b border-border">
      {children}
    </div>
  );
}