import Background from "@/app/components/layout/Background";
import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/landing/Hero";
import Features from "@/app/components/landing/Features";
import WaitlistForm from "@/app/components/landing/WaitListForm";
import Footer from "@/app/components/layout/Footer";

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}