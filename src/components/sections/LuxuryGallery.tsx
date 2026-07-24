'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    title: "Culinary Excellence",
    category: "Dining",
    className: "col-span-1 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-[16/9]"
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    title: "Holistic Wellness",
    category: "Spa",
    className: "col-span-1 md:col-span-1 row-span-1 aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop",
    title: "Arrival Experience",
    category: "Concierge",
    className: "col-span-1 md:col-span-1 row-span-2 aspect-[3/4]"
  },
  {
    src: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2070&auto=format&fit=crop",
    title: "Ocean View Suites",
    category: "Accommodation",
    className: "col-span-1 md:col-span-2 row-span-1 aspect-[21/9]"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop",
    title: "Private Dining",
    category: "Experiences",
    className: "col-span-1 md:col-span-1 row-span-1 aspect-square md:-mt-[15%]"
  }
];

export function LuxuryGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={containerRef} className="py-32 bg-[#0D0D0D] relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl relative">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[#D4B483] uppercase tracking-[0.2em] text-xs font-semibold mb-6 block"
            >
              Curated Moments of Luxury
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif text-[#F8F5F0] leading-tight"
            >
              The Gallery
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 font-sans max-w-sm text-sm mt-8 md:mt-0 leading-relaxed"
          >
            Immerse yourself in a visual journey of architectural brilliance, culinary artistry, and unparalleled tranquility at Aura.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-min">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              className={`relative group cursor-pointer ${item.className}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full h-full relative overflow-hidden bg-white/5"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[0.19,1,0.22,1] group-hover:scale-[1.08]"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.19,1,0.22,1]">
                  <span className="text-[#D4B483] uppercase tracking-widest text-[10px] font-bold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-[#F8F5F0] text-2xl font-serif mb-4">
                    {item.title}
                  </h3>
                  <span className="flex items-center text-white/80 text-xs uppercase tracking-wider font-semibold group/btn">
                    View Story 
                    <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-2" />
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 flex justify-center"
        >
            <button className="group relative px-8 py-4 bg-transparent text-[#F8F5F0] border border-white/20 hover:border-[#D4B483] transition-colors duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-[#D4B483] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                <span className="relative z-10 uppercase tracking-widest text-xs font-semibold group-hover:text-[#0D0D0D] transition-colors duration-500">
                    Explore All Experiences
                </span>
            </button>
        </motion.div>
      </div>
    </section>
  );
}
