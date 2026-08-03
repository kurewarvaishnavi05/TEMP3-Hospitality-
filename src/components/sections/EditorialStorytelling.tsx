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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mb-40">
          <div className="w-full lg:w-[45%] flex flex-col items-start z-20 lg:-mr-16 bg-surface/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 lg:p-0">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-[10px] uppercase tracking-[0.3em] text-accent mb-6 font-sans font-medium"
            >
              Arrival
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-serif text-white leading-[1.1] mb-8 font-light"
            >
              Luxury isn't just a destination—it's an experience.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted font-sans font-light leading-[1.8] max-w-sm text-sm"
            >
              From the moment you step into our grand lobby, every detail has been meticulously crafted to transport you into a world of unparalleled elegance. Your sanctuary awaits.
            </motion.p>
          </div>
          
          <div className="w-full lg:w-[50%] h-[80vh] min-h-[600px] relative overflow-hidden z-10">
            <motion.div style={{ y: y1 }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
              <Image 
                src="https://images.unsplash.com/photo-1551882547-ff40c0d12c56?q=80&w=2070&auto=format&fit=crop" 
                alt="Grand Hotel Lobby Experience" 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Story 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-[50%] h-[80vh] min-h-[600px] relative overflow-hidden z-10">
            <motion.div style={{ y: y2 }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
              <Image 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxurious Hotel Architecture" 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col items-start z-20 lg:-ml-16 bg-surface/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 lg:p-0">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-[10px] uppercase tracking-[0.3em] text-accent mb-6 font-sans font-medium"
            >
              Architecture
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-serif text-white leading-[1.1] mb-8 font-light"
            >
              Designed for timeless elegance.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted font-sans font-light leading-[1.8] max-w-sm text-sm"
            >
              Our award-winning architecture seamlessly blends contemporary sophistication with classical heritage. Vast spaces, natural light, and premium materials create a breathtaking environment.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
