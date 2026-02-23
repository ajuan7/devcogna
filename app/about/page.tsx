import Background from "@/app/components/layout/Background";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import AboutHero from "@/app/components/about/AboutHero";
import AboutProblem from "@/app/components/about/AboutProblem";
import AboutHowItWorks from "@/app/components/about/AboutHowItWorks";
import AboutRoadmap from "@/app/components/about/AboutRoadMap";
import AboutFounder from "@/app/components/about/AboutFounder";
import AboutFAQ from "@/app/components/about/AboutFAQ";

import { createMetadata } from "@/app/lib/seo/metadata";

export const metadata = createMetadata({
  title: "About",
  path: "/about",
  description:
    "DevCogna is a pattern recognition training platform for technical interviews—timed drills, adaptive reinforcement, and performance analytics.",
});

export default function Page() {
  return (
    <div className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
      <Background />
      <Navbar />

      <main>
        <AboutHero />
        <AboutProblem />
        <AboutHowItWorks />
        <AboutRoadmap />
        <AboutFounder />
        <AboutFAQ />
      </main>

      <Footer />
    </div>
  );
}