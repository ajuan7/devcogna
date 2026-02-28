export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-primaryDark text-white text-xs px-3 py-1 rounded-full">
      {children}
    </span>
  );
}