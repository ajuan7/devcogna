export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary text-white rounded-xl px-6 py-3 font-semibold hover:opacity-90 transition">
      {children}
    </button>
  );
}