import { Hero } from "@/components/sections/Hero";
import { EditorialStorytelling } from "@/components/sections/EditorialStorytelling";
import { OurPhilosophy } from "@/components/sections/OurPhilosophy";
import { OurJourney } from "@/components/sections/OurJourney";
import { VisionaryPillars } from "@/components/sections/VisionaryPillars";
import { MasterpieceHeader } from "@/components/layout/MasterpieceHeader";
import { FloatingReserveButton } from "@/components/ui/FloatingReserveButton";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0]">
      <ScrollProgress />
      <MasterpieceHeader />
      <Hero />
      <FloatingReserveButton />
      <EditorialStorytelling />
      <OurPhilosophy />
      <OurJourney />
      <VisionaryPillars />
    </main>
  );
}
