import { Hero } from "@/components/sections/Hero";
import { EditorialStorytelling } from "@/components/sections/EditorialStorytelling";
import { OurPhilosophy } from "@/components/sections/OurPhilosophy";
import { OurJourney } from "@/components/sections/OurJourney";
import { Awards } from "@/components/sections/Awards";
import { VisionaryPillars } from "@/components/sections/VisionaryPillars";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0]">
      <Hero />
      <EditorialStorytelling />
      <OurPhilosophy />
      <OurJourney />
      <Awards />
      <VisionaryPillars />
    </main>
  );
}
