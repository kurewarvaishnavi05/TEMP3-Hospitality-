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
            className="object-cover object-top w-full h-full pointer-events-none absolute inset-0"
          />
        </div>
      </motion.div>

      {/* Overlays removed per user request */}

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col justify-center">
        {/* Text removed as it is baked into the new hero image */}
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

