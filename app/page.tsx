
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectStory from "@/components/ProjectStory";
import PrototypeShowcase from "@/components/PrototypeShowcase";
import Features from "@/components/Features";
import CreatorSection from "@/components/CreatorSection";

export default function Home() {
  return (
    <main className="cosmic-background min-h-screen">
      <Header />
      <Hero />
      <div className="section-divider" aria-hidden="true" />
      <ProjectStory />
      <div className="section-divider" aria-hidden="true" />
      <PrototypeShowcase />
      <div className="section-divider" aria-hidden="true" />
      <Features />
      <div className="section-divider" aria-hidden="true" />
      <CreatorSection />
      
      <footer className="border-t border-[#B7A9F5]/20 bg-[#17152F]/80 px-6 py-8 text-center">
        <p className="font-display text-lg text-[#FFE0AA]">
          ✦ Kinstellation
        </p>
        <p className="mt-2 text-sm text-[#F6F0FF]/65">
          Spend less energy remembering. More energy connecting.
        </p>
        <p className="mt-4 text-xs text-[#B7A9F5]">
          Created by Alyssa DaCosta · 2026
        </p>
      </footer>

    </main>
  );
}
