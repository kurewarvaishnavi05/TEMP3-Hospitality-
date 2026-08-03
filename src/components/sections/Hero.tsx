'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';


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
        <motion.div
          animate={{
            scale: [1.05, 1.15],
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5
          }}
          transition={{
            scale: {
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            },
            x: { type: "spring", stiffness: 30, damping: 20 },
            y: { type: "spring", stiffness: 30, damping: 20 }
          }}
          className="absolute inset-[-5%] w-[110%] h-[110%]"
        >
          <img
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d8373?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Hotel Entrance"
            className="object-cover object-center w-full h-full pointer-events-none absolute inset-0"
          />
        </motion.div>
      </motion.div>

      {/* Overlays removed per user request */}

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-16 flex flex-col justify-center">
        <div className="mt-16 md:mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase mb-6 md:mb-8 block text-[#c4b197] font-bold"
          >
            AURA SIGNATURE EXPERIENCE
          </motion.span>
          
          <h1 
            className="font-heading mb-8 md:mb-10 leading-[0.95] max-w-[1000px] text-[#F5F5F5] font-[200] tracking-[-0.04em] text-[clamp(2.2rem,4vw,3.2rem)] md:text-[clamp(3rem,5vw,4.5rem)] lg:text-[clamp(4rem,6vw,6.5rem)] antialiased"
          >
            <span className="block overflow-hidden">
              {"Timeless elegance".split('').map((char, index) => (
                <motion.span
                  key={`line1-${index}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + index * 0.02,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              {"that stays with you.".split('').map((char, index) => (
                <motion.span
                  key={`line2-${index}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.02,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13px] md:text-[15px] text-[#e0dacd] max-w-[540px] mb-12 md:mb-16 leading-[1.9] font-light"
          >
            Discover an unforgettable escape crafted with exceptional hospitality, refined experiences, and timeless luxury.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6"
          >
            <Link 
              href="/rooms"
              className="px-8 py-4 bg-[#f8f6f0] text-[#0a0a0a] text-[10px] tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 font-medium text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]"
            >
              EXPLORE SUITES
            </Link>
            <Link 
              href="/booking"
              className="px-8 py-4 border border-[#c4b197]/50 text-[#f8f6f0] hover:border-[#c4b197] transition-all duration-300 text-[10px] tracking-[0.2em] uppercase font-medium text-center hover:bg-[#c4b197]/10 backdrop-blur-sm"
            >
              BOOK YOUR STAY
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#c4b197]">Scroll</span>
        <div className="w-[1px] h-[60px] bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 w-full h-full bg-[#c4b197]"
          />
        </div>
      </motion.div>
    </section>
  );
}

