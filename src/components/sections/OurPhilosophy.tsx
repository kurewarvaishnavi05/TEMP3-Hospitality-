'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function OurPhilosophy() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block lg:col-span-3"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden group rounded-sm">
              <Image 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury Hotel Philosophy"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Center Text */}
          <div className="lg:col-span-6 text-center flex flex-col items-center">
            <div className="flex flex-col items-center justify-center mb-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
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
              className="text-3xl md:text-5xl lg:text-5xl font-serif text-white font-light leading-snug mb-8 max-w-2xl mx-auto"
            >
              &ldquo;We believe that true luxury lies in the unseen details and the unforgettable moments they create.&rdquo;
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 font-sans font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            >
              Aura is more than a destination; it is an emotion. Our philosophy is rooted in anticipating your desires before they arise, crafting an environment where nature's serenity meets architectural brilliance, and ensuring every interaction is infused with genuine warmth and care.
            </motion.p>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block lg:col-span-3"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden group rounded-sm">
              <Image 
                src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxurious resort setting"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}
