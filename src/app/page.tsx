import { Hero } from "@/components/sections/Hero";
import { EditorialStorytelling } from "@/components/sections/EditorialStorytelling";
import { OurPhilosophy } from "@/components/sections/OurPhilosophy";
import { Awards } from "@/components/sections/Awards";
import { VisionaryPillars } from "@/components/sections/VisionaryPillars";

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialStorytelling />
      <OurPhilosophy />
      <Awards />
      <VisionaryPillars />
    </>
  );
}
