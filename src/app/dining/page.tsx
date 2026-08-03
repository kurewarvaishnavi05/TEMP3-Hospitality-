'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function DiningPage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#f4eee6] min-h-screen text-[#121210] overflow-hidden">
      {/* Hero Section */}
      <section ref={container} className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
            alt="Fine Dining"
            fill
            priority
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/60"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.3em] uppercase text-[#c4b197] font-bold mb-6 block"
          >
            Culinary Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[40px] md:text-[60px] lg:text-[72px] leading-[1.1] font-light text-white"
          >
            A Taste of Perfection
          </motion.h1>
        </div>
      </section>

      {/* The Signature Restaurant */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] text-[#f8f6f0]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 h-[70vh] min-h-[500px] relative order-2 lg:order-1 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                alt="Signature Restaurant"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#b09677] font-bold mb-6 block">The Signature</span>
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.1] text-white font-light mb-8">Modern Gastronomy</h2>
              <p className="text-[#f4f2ec]/60 leading-[1.8] text-[13px] md:text-[14px] mb-10 max-w-md">
                Led by our Michelin-starred executive chef, The Signature offers an avant-garde approach to local cuisine. We source the finest seasonal ingredients to create dishes that are both visually stunning and profoundly flavorful.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="px-8 py-3.5 bg-[#b09677] text-white hover:bg-white hover:text-black transition-colors duration-300 text-[10px] tracking-[0.2em] uppercase font-medium">
                  Reserve a Table
                </button>
                <button className="px-8 py-3.5 border border-[#b09677]/60 text-[#b09677] hover:border-[#b09677] transition-colors duration-300 text-[10px] tracking-[0.2em] uppercase font-medium">
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Lounge Bar */}
      <section className="py-24 lg:py-32 bg-[#f4eee6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#b09677] font-bold mb-6 block">The Lounge Bar</span>
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.1] text-[#3a3a3a] font-light mb-8">Craft Cocktails <br/> & Conversations</h2>
              <p className="text-[#3a3a3a]/70 leading-[1.8] text-[13px] md:text-[14px] mb-10 max-w-md">
                Unwind in our sophisticated lounge. Our master mixologists craft bespoke cocktails using premium spirits and house-made infusions, perfectly complemented by a curated selection of rare wines and artisanal bites.
              </p>
              <button className="px-8 py-3.5 border border-[#b09677] text-[#b09677] hover:bg-[#b09677] hover:text-white transition-colors duration-300 text-[10px] tracking-[0.2em] uppercase font-medium">
                Explore the Lounge
              </button>
            </div>
            <div className="w-full lg:w-1/2 h-[70vh] min-h-[500px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                alt="The Lounge Bar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}