'use client';

import { motion, useInView } from 'framer-motion';
import { Trophy, Star, Crown, Medal } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const awards = [
  { year: 2025, title: 'World Travel Awards', category: "World's Leading Luxury Hotel", icon: Trophy },
  { year: 2024, title: 'Condé Nast Traveler', category: 'Gold List - Best Resorts', icon: Star },
  { year: 2024, title: 'Michelin Guide', category: '3 Stars - Fine Dining', icon: Crown },
  { year: 2023, title: 'Forbes Travel Guide', category: 'Five-Star Award', icon: Medal },
];

const Counter = ({ from, to }: { from: number; to: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const duration = 2000; // 2 seconds

      if (progress < duration) {
        setCount(Math.floor(from + (to - from) * (progress / duration)));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, isInView]);

  return <span ref={ref}>{count}</span>;
};

export function Awards() {
  return (
    <section className="py-12 bg-[#F8F5F0] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Area - Highly compact */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
            >
              <Star size={14} className="text-[#D4B483] fill-[#D4B483]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#0D0D0D] font-semibold">
                Recognition
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-[#0D0D0D] leading-tight"
            >
              Award-Winning Excellence
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:max-w-sm"
          >
            <p className="text-[#0D0D0D]/70 font-sans text-base leading-relaxed border-l-2 border-[#D4B483] pl-4">
              Our commitment to perfection has been consistently recognized by the world's most prestigious travel and culinary authorities.
            </p>
          </motion.div>
        </div>

        {/* Cards Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group flex flex-col p-6 md:p-8 bg-white border border-[#0D0D0D]/5 transition-all duration-500 shadow-sm hover:shadow-2xl relative overflow-hidden rounded-sm"
              >
                {/* Decorative top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4B483] to-[#e6d0a7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                {/* Background glow on hover */}
                <div className="absolute -inset-full bg-gradient-to-tr from-[#D4B483]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-3xl transform group-hover:scale-150" />
                
                <div className="mb-8 relative z-10 transform transition-transform duration-500 group-hover:scale-110 origin-left flex items-center justify-center w-12 h-12 rounded-full bg-[#F8F5F0] group-hover:bg-[#D4B483]/10">
                  <Icon size={24} strokeWidth={1.5} className="text-[#0D0D0D]/40 group-hover:text-[#D4B483] transition-colors duration-500" />
                </div>
                
                <div className="mt-auto relative z-10">
                  <span className="text-[#0D0D0D] font-serif text-3xl md:text-4xl block mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    <Counter from={2000} to={award.year} />
                  </span>
                  
                  <div className="w-6 h-[2px] bg-[#D4B483]/50 mb-3 group-hover:w-12 group-hover:bg-[#D4B483] transition-all duration-500"></div>
                  
                  <h3 className="text-[#0D0D0D] font-sans text-lg font-medium mb-1 group-hover:text-[#D4B483] transition-colors duration-500">
                    {award.title}
                  </h3>
                  <p className="text-[#0D0D0D]/50 text-xs md:text-sm">
                    {award.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
