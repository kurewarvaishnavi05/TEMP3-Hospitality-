'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const founders = [
  {
    name: "Mr. Mhaske Mahesh",
    role: "CEO / MANAGING DIRECTOR",
    quote: "Our vision was to create a sanctuary where luxury is felt, not just seen. Every detail is curated to provide an unforgettable experience for our guests.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Mr. Kulkarni Ruturaj",
    role: "CHIEF OPERATING OFFICER",
    quote: "Operational excellence is at the heart of our hospitality. We strive to anticipate every need and exceed expectations at every touchpoint.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop"
  }
];

export function VisionaryPillars() {
  return (
    <section className="py-32 bg-[#f4eee6] relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-[#b09677] mb-6 font-medium"
          >
            A Founder Led Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-serif text-[#121210] font-light"
          >
            The Visionary Pillars
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {founders.map((founder, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="relative aspect-[3/4] w-full mb-8 overflow-hidden group">
                <Image 
                  src={founder.image} 
                  alt={founder.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale hover:grayscale-0"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-serif text-[#121210] mb-2">{founder.name}</h3>
                <p className="text-[#b09677] text-xs uppercase tracking-widest font-medium mb-6">
                  {founder.role}
                </p>
                <p className="text-[#121210]/70 font-light leading-relaxed font-serif text-lg italic">
                  &ldquo;{founder.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
