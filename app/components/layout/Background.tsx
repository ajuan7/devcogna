export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(43,182,255,0.15),rgba(5,11,16,0))]" />
    </div>
  );
}