'use client';

import { motion, useInView } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const awards = [
  { year: 2025, title: 'World Travel Awards', category: "World's Leading Luxury Hotel" },
  { year: 2024, title: 'Condé Nast Traveler', category: 'Gold List - Best Resorts' },
  { year: 2024, title: 'Michelin Guide', category: '3 Stars - Fine Dining' },
  { year: 2023, title: 'Forbes Travel Guide', category: 'Five-Star Award' },
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
    <section className="py-16 bg-[#F8F5F0] relative overflow-hidden">
      {/* Subtle Grain Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
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
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#0D0D0D] leading-tight"
            >
              Award-Winning <br />Excellence
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#0D0D0D]/70 font-sans text-lg max-w-md leading-relaxed">
              Our commitment to perfection has been consistently recognized by the world's most prestigious travel and culinary authorities, setting a new benchmark in luxury hospitality.
            </p>
          </motion.div>
        </div>

        {/* Animated Gold Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="w-full h-px bg-[#D4B483]/40 origin-left mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {awards.map((award, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              whileHover={{ y: -10 }}
              className="group flex flex-col p-8 md:p-10 bg-white/40 backdrop-blur-md border border-white/60 hover:border-[#D4B483]/50 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(212,180,131,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4B483]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full pointer-events-none" />
              
              <div className="mb-12 relative z-10">
                <Award size={32} strokeWidth={1} className="text-[#0D0D0D]/30 group-hover:text-[#D4B483] transition-colors duration-500" />
              </div>
              
              <div className="mt-auto relative z-10">
                <span className="text-[#D4B483] font-serif text-4xl block mb-4">
                  <Counter from={2000} to={award.year} />
                </span>
                <h3 className="text-[#0D0D0D] font-sans text-xl font-semibold mb-2">
                  {award.title}
                </h3>
                <p className="text-[#0D0D0D]/60 text-sm">
                  {award.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
