'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#f8f6f0] overflow-hidden">
      {/* Hero Section */}
      <section ref={container} className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Hotel Exterior"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.3em] uppercase text-[#b09677] font-medium mb-6 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[40px] md:text-[60px] lg:text-[72px] leading-[1.1] font-light mb-8"
          >
            A legacy of luxury and <br className="hidden md:block"/> meaningful hospitality.
          </motion.h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#f4eee6] text-[#121210]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#a48e77] font-bold mb-4 block">Our Philosophy</span>
            <div className="flex items-center justify-center gap-3 w-full mb-6">
              <div className="w-12 h-[1px] bg-[#d5c6b6]"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#a48e77]"></div>
              <div className="w-12 h-[1px] bg-[#d5c6b6]"></div>
            </div>
            <h2 className="font-serif text-[32px] md:text-[44px] font-light text-[#3a3a3a]">The principles behind <br className="hidden md:block"/> every experience.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01.', title: 'Meaningful Hospitality', text: 'Every guest should feel welcomed through genuine care, thoughtful service, and human connection.' },
              { num: '02.', title: 'Memorable Experiences', text: 'Every interaction should create an impression that continues far beyond the immediate moment.' },
              { num: '03.', title: 'Modern Luxury', text: 'Comfort, innovation, elegance, and timeless design should exist without unnecessary excess.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-[#fdfcfb] p-8 rounded-lg shadow-sm border border-white"
              >
                <span className="font-serif italic text-[36px] text-[#b09677] leading-none mb-6 block">{item.num}</span>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1c1c1a] mb-4">{item.title}</h3>
                <div className="w-8 h-[1px] bg-[#b09677] mb-4"></div>
                <p className="text-[#1c1c1a]/70 leading-relaxed text-[13px]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="w-full md:w-1/3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#b09677] font-bold mb-4 block">Our Journey</span>
              <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.1] text-white font-light mb-6">Built through experience.</h2>
              <p className="text-[#f4f2ec]/60 leading-[1.8] text-[13px]">Every milestone reflects our commitment to building a stronger, more respected hospitality brand across the globe.</p>
            </div>
            
            <div className="w-full md:w-2/3 border-l border-[#3a3a3a] pl-8 lg:pl-12 space-y-12">
              {[
                { year: '2010', title: 'Foundation', desc: 'Founded on a simple belief—hospitality has the power to create meaning.' },
                { year: '2018', title: 'Expansion', desc: 'Opening of our flagship resort, setting new standards in luxury accommodations.' },
                { year: '2026', title: 'Global Presence', desc: 'Transitioning to a professionally managed international hospitality group.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[37px] lg:-left-[53px] top-2 w-[10px] h-[10px] rounded-full bg-[#b09677]"></div>
                  <span className="font-serif text-[24px] text-[#b09677] italic leading-none mb-3 block">{item.year}</span>
                  <h4 className="text-white text-[14px] mb-2">{item.title}</h4>
                  <p className="text-[#f4f2ec]/50 text-[13px] leading-[1.6] max-w-md">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}