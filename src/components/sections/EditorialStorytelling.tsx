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
    <section ref={container} className="bg-[#0a0a0a] relative overflow-hidden py-24 lg:py-40">
        {/* Story 1 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0 mb-40 w-full pl-6 lg:pl-[max(2rem,calc((100vw-1400px)/2))]">
          <div className="w-full lg:w-[45%] flex flex-col items-start z-20 pr-6 lg:pr-16 lg:py-20">
            <div className="flex flex-col mb-8">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-[10px] uppercase tracking-[0.3em] text-[#b09677] font-sans font-medium mb-3"
              >
                Arrival
              </motion.span>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "40px" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[1px] bg-[#b09677]/50"
              />
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-[72px] font-serif text-[#f8f6f0] leading-[1.1] mb-12 font-light antialiased"
            >
              Luxury isn't just a <br className="hidden lg:block"/> destination—it's an <br className="hidden lg:block"/> experience.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center w-full mb-12 gap-4"
            >
              <div className="flex-grow h-[1px] bg-[#b09677]/30 max-w-[60px]"></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#b09677]" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L14.59 8.41L22 11L14.59 13.59L12 21L9.41 13.59L2 11L9.41 8.41L12 1Z" fill="currentColor"/>
              </svg>
              <div className="flex-grow h-[1px] bg-[#b09677]/30 max-w-[200px]"></div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#f8f6f0]/70 font-sans font-light leading-[1.8] max-w-[420px] text-sm"
            >
              From the moment you step into our grand lobby, every detail has been meticulously crafted to transport you into a world of unparalleled elegance. Your sanctuary awaits.
            </motion.p>
          </div>
          
          <div className="w-full lg:w-[55%] h-[60vh] lg:h-[100vh] min-h-[500px] lg:min-h-[700px] relative overflow-hidden z-10">
            <motion.div style={{ y: y1 }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
              <Image 
                src="/hotel-arrival.jpg" 
                alt="Grand Hotel Lobby Experience" 
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

        {/* Story 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 w-full px-6 lg:px-[max(2rem,calc((100vw-1400px)/2))]">
          <div className="w-full lg:w-[50%] flex gap-4 h-[60vh] lg:h-[80vh] min-h-[500px] lg:min-h-[600px] relative z-10">
            <div className="w-1/2 h-[85%] relative overflow-hidden mt-auto">
              <motion.div style={{ y: y2 }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
                <Image 
                  src="/arch-1.jpg" 
                  alt="Modern Hotel Architecture" 
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="w-1/2 h-[85%] relative overflow-hidden mb-auto">
              <motion.div style={{ y: y2 }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
                <Image 
                  src="/arch-2.jpg" 
                  alt="Luxurious Resort Architecture" 
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col items-start z-20">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-[10px] uppercase tracking-[0.3em] text-[#b09677] font-sans font-medium mb-6"
            >
              Architecture
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-[72px] font-serif text-[#f8f6f0] leading-[1.1] mb-8 font-light"
            >
              Designed for timeless elegance.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#f8f6f0]/70 font-sans font-light leading-[1.8] max-w-sm text-sm"
            >
              Our award-winning architecture seamlessly blends contemporary sophistication with classical heritage. Vast spaces, natural light, and premium materials create a breathtaking environment.
            </motion.p>
          </div>
        </div>
    </section>
  );
}
