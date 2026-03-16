import Background from "@/app/components/layout/Background";
import Navbar from "@/app/components/layout/Navbar";
import Container from "@/app/components/layout/Container";
import DrillSession from "@/app/components/practice/DrillSession";

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
      <Background />
      <Navbar />

      <main>
        <Container>
          <DrillSession />
        </Container>
      </main>
    </div>
  );
}
