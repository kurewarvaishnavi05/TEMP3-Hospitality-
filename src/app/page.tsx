import { Hero } from "@/components/sections/Hero";
import { EditorialStorytelling } from "@/components/sections/EditorialStorytelling";
import { LuxuryGallery } from "@/components/sections/LuxuryGallery";
import { Awards } from "@/components/sections/Awards";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { LuxuryCard } from "@/components/cards/LuxuryCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialStorytelling />
      
      {/* Signature Suites Section */}
      <section className="py-32 bg-background relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent mb-4 block">Our Accommodations</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">Signature Suites</h2>
            </div>
            <Link href="/rooms" className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors">
              <span>View All Suites</span>
              <ArrowRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <LuxuryCard 
              title="The Ocean Villa"
              description="Panoramic ocean views with a private infinity pool and direct beach access."
              category="Villas"
              image="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop"
              link="/rooms/ocean-villa"
            />
            <LuxuryCard 
              title="Presidential Suite"
              description="The pinnacle of luxury featuring a grand piano, private dining room, and dedicated butler."
              category="Suites"
              image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop"
              link="/rooms/presidential-suite"
            />
            <LuxuryCard 
              title="Sky Penthouse"
              description="A sprawling retreat in the clouds with 360-degree city views and rooftop jacuzzi."
              category="Penthouses"
              image="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop"
              link="/rooms/sky-penthouse"
            />
          </div>
        </div>
      </section>

      <LuxuryGallery />
      <Awards />
      <Testimonials />
      <InstagramFeed />
    </>
  );
}
