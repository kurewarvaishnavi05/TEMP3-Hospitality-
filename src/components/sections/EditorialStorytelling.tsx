'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function EditorialStorytelling() {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={container} className="py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Story 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-sans"
            >
              Arrival
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-serif text-white leading-tight mb-8"
            >
              Luxury isn't just a destination—it's an experience.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted font-sans font-light leading-relaxed max-w-md"
            >
              From the moment you step into our grand lobby, every detail has been meticulously crafted to transport you into a world of unparalleled elegance. Your sanctuary awaits.
            </motion.p>
          </div>
          
          <div className="w-full lg:w-1/2 h-[600px] relative overflow-hidden border border-white/5">
            <motion.div style={{ y: y1 }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
              <Image 
                src="https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?q=80&w=2080&auto=format&fit=crop" 
                alt="Grand Hotel Lobby" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Story 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 h-[600px] relative overflow-hidden border border-white/5">
            <motion.div style={{ y: y2 }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
              <Image 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxurious Hotel Architecture" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-start z-10 lg:pl-12">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-sans"
            >
              Architecture
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-serif text-white leading-tight mb-8"
            >
              Designed for timeless elegance.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted font-sans font-light leading-relaxed max-w-md"
            >
              Our award-winning architecture seamlessly blends contemporary sophistication with classical heritage. Vast spaces, natural light, and premium materials create a breathtaking environment.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
