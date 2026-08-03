'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { EditorialStorytelling } from '@/components/sections/EditorialStorytelling';

export default function ExperiencesPage() {
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
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
            alt="Spa Experience"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] tracking-[0.3em] uppercase text-[#c4b197] font-medium mb-6 block"
          >
            Curated For You
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[40px] md:text-[60px] lg:text-[72px] leading-[1.1] font-light mb-8 text-white"
          >
            Unforgettable <br className="hidden md:block"/> Moments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[#e0dacd] max-w-2xl mx-auto text-sm md:text-base font-light leading-[1.9]"
          >
            Beyond a place to stay, we offer a collection of rare and authentic experiences designed to connect you deeply with our locale and leave a lasting impression.
          </motion.p>
        </div>
      </section>

      {/* Wellness & Spa */}
      <section className="py-24 md:py-32 bg-[#121210]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#b09677] font-bold mb-6 block">Wellness & Spa</span>
              <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.1] text-white font-light mb-8">Rejuvenate mind,<br/>body, and spirit.</h2>
              <p className="text-[#f4f2ec]/60 leading-[1.8] text-[13px] md:text-[14px] mb-10 max-w-md">
                Our award-winning spa draws upon ancient healing traditions and modern wellness techniques. Immerse yourself in a sanctuary of tranquility with bespoke treatments, thermal baths, and holistic therapies.
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#b09677]"></div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-[#f4f2ec]/80">Holistic Massages</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#b09677]"></div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-[#f4f2ec]/80">Thermal Bath Circuit</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#b09677]"></div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-[#f4f2ec]/80">Yoga & Meditation Pavilion</span>
                </li>
              </ul>
              <Link 
                href="/spa"
                className="inline-block px-8 py-4 border border-[#b09677]/60 text-white hover:border-[#b09677] hover:bg-[#b09677]/10 transition-colors duration-300 text-[10px] tracking-[0.2em] uppercase font-medium"
              >
                Discover Our Spa
              </Link>
            </div>
            <div className="w-full lg:w-1/2 h-[60vh] min-h-[500px] relative">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury Spa and Wellness"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Storytelling (Reusing component for more experiences) */}
      <EditorialStorytelling />
    </div>
  );
}
