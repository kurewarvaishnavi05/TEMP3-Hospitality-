'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Bell, Key, Crown, ArrowRight, ArrowDown } from 'lucide-react';


export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // max 20px movement
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={container} className="relative w-full h-[100vh] min-h-[700px] bg-[#0a0a0a] overflow-hidden text-[#f8f6f0]">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/aura-hero.jpg.jpeg?v=1"
            alt="Luxury Hotel Entrance"
            className="object-cover object-center w-full h-full pointer-events-none absolute inset-0"
          />
        </div>
      </motion.div>

      {/* Overlays removed per user request */}

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col justify-center">
        <div className="mt-24 md:mt-32">
          <h1 
            className="font-serif font-bold mb-5 leading-[1.05] max-w-[800px] text-[#E3D8C8] text-[clamp(2rem,4vw,3.5rem)] md:text-[clamp(2.8rem,5vw,4.5rem)] lg:text-[clamp(3.5rem,5.5vw,5.5rem)] antialiased"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Timeless
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              elegance
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block italic font-bold text-[clamp(1.5rem,3vw,2.5rem)] md:text-[clamp(2rem,3.5vw,3.2rem)] lg:text-[clamp(2.8rem,4vw,4rem)] mt-2"
            >
              that stays with you.
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] md:text-xs text-[#E3D8C8]/80 max-w-[320px] mb-8 md:mb-10 leading-[1.8] font-light"
          >
            Discover curated stays and immersive experiences in the world's most exceptional destinations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              href="/rooms"
              className="group inline-flex items-center justify-between min-w-[200px] px-6 py-4 border border-[#E3D8C8]/30 text-[#E3D8C8] hover:border-[#E3D8C8] transition-all duration-500 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E3D8C8]/5 backdrop-blur-sm"
            >
              <span>EXPLORE STAYS</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-0 w-full border-t border-[#E3D8C8]/10 bg-gradient-to-t from-black/60 to-transparent"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between py-6 gap-6 md:gap-0">
          <div className="flex items-center gap-12 text-[#E3D8C8]/70 text-[10px] tracking-[0.2em] uppercase font-medium">
            <div className="flex items-center gap-3">
              <Bell size={16} className="text-[#E3D8C8]" />
              <span className="hidden sm:inline">SIGNATURE HOSPITALITY</span>
            </div>
            <div className="hidden md:block w-[1px] h-4 bg-[#E3D8C8]/20" />
            <div className="flex items-center gap-3">
              <Key size={16} className="text-[#E3D8C8]" />
              <span className="hidden sm:inline">CURATED EXPERIENCES</span>
            </div>
            <div className="hidden md:block w-[1px] h-4 bg-[#E3D8C8]/20" />
            <div className="flex items-center gap-3">
              <Crown size={16} className="text-[#E3D8C8]" />
              <span className="hidden sm:inline">MEMORABLE STAYS</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[#E3D8C8]/70 text-[10px] tracking-[0.2em] uppercase font-medium hidden sm:inline">
              SCROLL TO DISCOVER
            </span>
            <div className="w-8 h-8 rounded-full border border-[#E3D8C8]/30 flex items-center justify-center text-[#E3D8C8]">
              <ArrowDown size={14} className="animate-bounce" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

