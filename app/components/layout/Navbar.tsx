import Image from "next/image";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950">
      <Container>
        <div className="relative flex h-20 items-center justify-center md:justify-between">
          <a href="#top" className="flex items-center min-w-0">
            <div className="relative h-30 w-[60vw] max-w-[220px] sm:h-25 sm:w-[240px] lg:h-30 lg:w-[280px]">
              <Image
                src="/Logos/Logo-wText-Transparent.png"
                alt="DevCogna"
                fill
                priority
                className="object-contain"
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#waitlist" className="hover:text-white transition">Waitlist</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}