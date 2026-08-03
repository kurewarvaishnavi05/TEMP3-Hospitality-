'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function OurPhilosophy() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      <div className="container mx-auto px-6 text-center z-10">
        
        <div className="flex flex-col items-center justify-center mb-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-white/20"></div>
            <div className="w-2 h-2 bg-[#d4b483] rotate-45"></div>
            <div className="w-12 h-px bg-white/20"></div>
          </motion.div>
          
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-[#d4b483] block font-medium"
          >
            Our Philosophy
          </motion.span>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-light leading-snug mb-10 max-w-4xl mx-auto"
        >
          &ldquo;We believe that true luxury lies in the unseen details and the unforgettable moments they create.&rdquo;
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="w-px h-16 bg-[#d4b483]/30"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/60 font-sans font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Aura is more than a destination; it is an emotion. Our philosophy is rooted in anticipating your desires before they arise, crafting an environment where nature's serenity meets architectural brilliance, and ensuring every interaction is infused with genuine warmth and care.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-24 relative w-full aspect-[21/9] lg:aspect-[3/1] max-w-6xl mx-auto overflow-hidden group shadow-2xl"
        >
          <div className="absolute inset-0 bg-[#d4b483]/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
          <Image 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxurious resort setting representing our philosophy"
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
        </motion.div>

      </div>
    </section>
  );
}
