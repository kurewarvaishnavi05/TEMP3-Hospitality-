'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Compass } from 'lucide-react';

export function OurJourney() {
  return (
    <section className="py-16 bg-[#F8F5F0] relative overflow-hidden">
      {/* Subtle Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <Compass size={16} className="text-[#D4B483]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#0D0D0D] font-semibold">
                Our Journey
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-[#0D0D0D] leading-tight mb-6"
            >
              A Legacy of <br />Unrivaled Hospitality
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#0D0D0D]/70 font-sans text-lg max-w-md leading-relaxed mb-6"
            >
              From our humble beginnings to becoming a global icon of luxury, our journey has been defined by an unwavering dedication to creating extraordinary experiences. Every detail of Aura has been meticulously crafted to offer an escape that transcends the ordinary.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="group flex items-center gap-4 text-sm font-semibold tracking-widest uppercase hover:text-[#D4B483] transition-colors text-[#0D0D0D]">
                <span className="w-8 h-px bg-current transition-all group-hover:w-12"></span>
                Discover Our Story
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4 h-full items-center">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-xl group mt-12">
                <Image 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Luxury Hotel Exterior"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-xl group mb-12">
                <Image 
                  src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1000&auto=format&fit=crop" 
                  alt="Luxury Hotel Interior"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
