import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 text-center text-sm text-white/40">
      <Container>
        © {new Date().getFullYear()} DevCogna
      </Container>
    </footer>
  );
}